/**
 * Build-time prerenderer.
 *
 * Runs after `vite build` (client) and `vite build --ssr` (server bundle).
 * For every route in the manifest it renders the real React tree to HTML and
 * writes a static, crawlable document to dist/<route>/index.html.
 *
 * Why this exists: the site was a pure client-rendered SPA, so every URL served
 * the same 11.8 KB shell with an empty <div id="root"> — no title, no H1, no
 * copy, no links. Google had to execute the whole app before it could tell one
 * page from another, and on a domain with almost no crawl authority most URLs
 * were never fetched at all.
 *
 * renderToString does not await Suspense, and every route is React.lazy, so the
 * first pass renders the loader fallback and kicks off the dynamic imports. We
 * render repeatedly until the loader sentinel is gone (2 passes in practice).
 */
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const require = createRequire(import.meta.url);
const ROOT = path.resolve(url.fileURLToPath(new URL('.', import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const SSR_ENTRY = path.join(ROOT, 'dist-ssr', 'entry-server.js');

const SITE_URL = 'https://inkmugi.com';
const LOADER_SENTINEL = 'data-page-loader';
const MAX_RENDER_PASSES = 8;

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const cyan = (s) => `\x1b[36m${s}\x1b[0m`;
const red = (s) => `\x1b[31m${s}\x1b[0m`;
const yellow = (s) => `\x1b[33m${s}\x1b[0m`;
const green = (s) => `\x1b[32m${s}\x1b[0m`;

/** dist path for a route: "/" -> dist/index.html, "/about" -> dist/about/index.html */
function outFileFor(routePath) {
  if (routePath === '/') return path.join(DIST, 'index.html');
  return path.join(DIST, routePath.replace(/^\//, ''), 'index.html');
}

/**
 * Last commit date for a source file, used as sitemap <lastmod>.
 * Returns null when git history is unavailable (e.g. a shallow CI clone) so we
 * emit no lastmod at all rather than an invented one.
 */
function gitLastModified(relFile) {
  if (!relFile) return null;
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', relFile], {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    return out ? out.slice(0, 10) : null;
  } catch {
    return null;
  }
}

function xmlEscape(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/* ------------------------------------------------------------------ */
/*  Template                                                           */
/* ------------------------------------------------------------------ */

const templateFile = path.join(DIST, 'index.html');
if (!fs.existsSync(templateFile)) {
  console.error(red('prerender: dist/index.html not found — run `vite build` first.'));
  process.exit(1);
}
if (!fs.existsSync(SSR_ENTRY)) {
  console.error(red(`prerender: ${path.relative(ROOT, SSR_ENTRY)} not found — run the SSR build first.`));
  process.exit(1);
}

const template = fs.readFileSync(templateFile, 'utf8');
for (const marker of ['<!--seo-head-->', '<!--app-html-->']) {
  if (!template.includes(marker)) {
    console.error(red(`prerender: index.html is missing the ${marker} marker.`));
    process.exit(1);
  }
}

/* ------------------------------------------------------------------ */
/*  Render                                                             */
/* ------------------------------------------------------------------ */

const { renderPage, prerenderRoutes } = await import(url.pathToFileURL(SSR_ENTRY).href);

if (!Array.isArray(prerenderRoutes) || prerenderRoutes.length === 0) {
  console.error(red('prerender: entry-server exported no routes.'));
  process.exit(1);
}

const results = [];
const failures = [];

console.log(cyan(`\nPrerendering ${prerenderRoutes.length} routes…\n`));

for (const route of prerenderRoutes) {
  const { path: routePath } = route;
  let rendered;
  try {
    rendered = await renderPage(routePath, { maxPasses: MAX_RENDER_PASSES, sentinel: LOADER_SENTINEL });
  } catch (err) {
    failures.push({ routePath, reason: `render threw: ${err && err.message ? err.message : String(err)}` });
    continue;
  }

  const { html, head, passes, stillLoading } = rendered;

  if (stillLoading) {
    failures.push({ routePath, reason: `still showing the loading fallback after ${passes} render passes` });
    continue;
  }

  const document = template.replace('<!--seo-head-->', head).replace('<!--app-html-->', html);

  const outFile = outFileFor(routePath);
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, document, 'utf8');

  results.push({
    routePath,
    bytes: Buffer.byteLength(document),
    bodyBytes: Buffer.byteLength(html),
    passes,
    file: path.relative(ROOT, outFile),
    route,
  });
}

/* ------------------------------------------------------------------ */
/*  404 document                                                       */
/* ------------------------------------------------------------------ */

/*
 * Netlify serves dist/404.html with a real HTTP 404 for any path that does not
 * match a file — but only once the catch-all `/* -> /index.html 200` rule is
 * gone. Prerendering every route is what makes removing that rule safe, and it
 * is what turns the old soft-404s (HTTP 200 + a client-rendered "not found")
 * into genuine 404s.
 */
try {
  const notFoundPath = '/__prerender_404__';
  const { html, head, stillLoading } = await renderPage(notFoundPath, {
    maxPasses: MAX_RENDER_PASSES,
    sentinel: LOADER_SENTINEL,
  });
  if (stillLoading) {
    failures.push({ routePath: '404.html', reason: 'not-found page never resolved' });
  } else {
    const document = template.replace('<!--seo-head-->', head).replace('<!--app-html-->', html);
    fs.writeFileSync(path.join(DIST, '404.html'), document, 'utf8');
    results.push({ routePath: '404.html', bytes: Buffer.byteLength(document), bodyBytes: Buffer.byteLength(html), passes: 2, file: 'dist/404.html', route: { path: '/404', sitemap: false } });
  }
} catch (err) {
  failures.push({ routePath: '404.html', reason: `render threw: ${err.message}` });
}

/* ------------------------------------------------------------------ */
/*  sitemap.xml                                                        */
/* ------------------------------------------------------------------ */

/*
 * Generated from the same manifest that drives routing and prerendering, so the
 * sitemap cannot drift out of sync with reality the way the previous
 * hand-maintained public/sitemap.xml did (it listed 8 blog URLs that had no
 * route and rendered the 404 page).
 *
 * No <changefreq> or <priority>: Google ignores both. <lastmod> comes from real
 * git history and is omitted entirely when history is unavailable, rather than
 * being stamped with today's date to bait crawlers.
 */
const sitemapEntries = prerenderRoutes
  .filter((r) => r.sitemap)
  .map((r) => {
    const loc = `${SITE_URL}${r.path === '/' ? '/' : r.path}`;
    const lastmod = gitLastModified(r.sourceFile);
    return `  <url>\n    <loc>${xmlEscape(loc)}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''}\n  </url>`;
  });

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries.join('\n')}\n</urlset>\n`;
fs.writeFileSync(path.join(DIST, 'sitemap.xml'), sitemap, 'utf8');

/* ------------------------------------------------------------------ */
/*  Report                                                             */
/* ------------------------------------------------------------------ */

const totalBody = results.reduce((n, r) => n + r.bodyBytes, 0);
const avgBody = results.length ? Math.round(totalBody / results.length) : 0;
const thin = results.filter((r) => r.bodyBytes < 4000);

console.log(green(`  ✓ ${results.length} documents written`));
console.log(`  ✓ sitemap.xml: ${sitemapEntries.length} URLs`);
console.log(`  ✓ average rendered body: ${avgBody.toLocaleString()} bytes`);

if (thin.length) {
  console.log(yellow(`\n  ${thin.length} route(s) rendered under 4 KB of body HTML:`));
  for (const t of thin) console.log(yellow(`    ${t.routePath} — ${t.bodyBytes} bytes`));
}

if (failures.length) {
  console.error(red(`\n  ✗ ${failures.length} route(s) failed to prerender:`));
  for (const f of failures) console.error(red(`    ${f.routePath}: ${f.reason}`));
  console.error(
    red('\n  Every route must prerender: the Netlify SPA fallback has been removed, so a route\n  without a prerendered document would return a hard 404 in production.\n')
  );
  process.exit(1);
}

console.log(green('\n  Prerender complete.\n'));
