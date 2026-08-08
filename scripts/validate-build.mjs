/**
 * Post-build SEO / crawlability validation.
 *
 * Crawls the prerendered dist/ output and asserts the guarantees that were
 * previously impossible to check, because before prerendering every route
 * served the same empty shell. This is the regression net for the whole
 * Phase 2 architecture: if a future change breaks canonicals, drops an H1,
 * de-syncs the sitemap, or reintroduces an `undefined` in a meta tag, the
 * build fails here rather than in Search Console three weeks later.
 *
 * Exit code 1 on any ERROR. Warnings are reported but do not fail the build.
 */
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const ROOT = path.resolve(url.fileURLToPath(new URL('.', import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const SITE_URL = 'https://inkmugi.com';

const red = (s) => `\x1b[31m${s}\x1b[0m`;
const yellow = (s) => `\x1b[33m${s}\x1b[0m`;
const green = (s) => `\x1b[32m${s}\x1b[0m`;
const cyan = (s) => `\x1b[36m${s}\x1b[0m`;
const dim = (s) => `\x1b[2m${s}\x1b[0m`;

const errors = [];
const warnings = [];
const err = (route, msg) => errors.push({ route, msg });
const warn = (route, msg) => warnings.push({ route, msg });

/* ------------------------------------------------------------------ */
/*  Tiny HTML helpers (output is machine-generated and predictable)     */
/* ------------------------------------------------------------------ */

const attr = (tag, name) => {
  const m = tag.match(new RegExp(`${name}\\s*=\\s*"([^"]*)"`, 'i'));
  return m ? m[1] : null;
};
const tags = (html, re) => html.match(re) || [];

const HEAD_RE = /<head[^>]*>([\s\S]*?)<\/head>/i;
const BODY_RE = /<body[^>]*>([\s\S]*?)<\/body>/i;
const TITLE_RE = /<title[^>]*>([\s\S]*?)<\/title>/gi;
const META_RE = /<meta\b[^>]*>/gi;
const LINK_RE = /<link\b[^>]*>/gi;
const H1_RE = /<h1\b[^>]*>([\s\S]*?)<\/h1>/gi;
const ANCHOR_RE = /<a\b[^>]*>/gi;
const LDJSON_RE = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;

const stripTags = (s) =>
  s
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

/* ------------------------------------------------------------------ */
/*  Load the route manifest that produced the build                    */
/* ------------------------------------------------------------------ */

const SSR_ENTRY = path.join(ROOT, 'dist-ssr', 'entry-server.js');
if (!fs.existsSync(SSR_ENTRY)) {
  console.error(red('validate: dist-ssr/entry-server.js missing — run the full build.'));
  process.exit(1);
}
const { prerenderRoutes } = await import(url.pathToFileURL(SSR_ENTRY).href);
const knownPaths = new Set(prerenderRoutes.map((r) => r.path));

/** Redirect sources declared in netlify.toml — internal links should never point here. */
const redirectSources = new Set();
const netlifyToml = fs.readFileSync(path.join(ROOT, 'netlify.toml'), 'utf8');
for (const m of netlifyToml.matchAll(/from\s*=\s*"(\/[^"*]*)"/g)) redirectSources.add(m[1]);

/* ------------------------------------------------------------------ */
/*  Per-document checks                                                */
/* ------------------------------------------------------------------ */

const docs = [];

for (const route of prerenderRoutes) {
  const file =
    route.path === '/' ? path.join(DIST, 'index.html') : path.join(DIST, route.path.replace(/^\//, ''), 'index.html');

  if (!fs.existsSync(file)) {
    err(route.path, 'no prerendered document was written (this route would 404 in production)');
    continue;
  }

  const html = fs.readFileSync(file, 'utf8');
  const head = (html.match(HEAD_RE) || [, ''])[1];
  const body = (html.match(BODY_RE) || [, ''])[1];
  const expectedCanonical = `${SITE_URL}${route.path}`;

  /* ---- title ---- */
  const titleMatches = [...head.matchAll(TITLE_RE)].map((m) => m[1].trim());
  if (titleMatches.length === 0) err(route.path, 'no <title>');
  else if (titleMatches.length > 1) err(route.path, `${titleMatches.length} <title> tags (must be exactly 1)`);
  const title = titleMatches[0] || '';
  if (/undefined|null|\[object/i.test(title)) err(route.path, `title contains a broken value: "${title}"`);
  if (title && title.length > 65) warn(route.path, `title is ${title.length} chars (may truncate in SERPs): "${title}"`);

  /* ---- meta ---- */
  const metas = tags(head, META_RE);
  const descTags = metas.filter((t) => /name\s*=\s*"description"/i.test(t));
  const robotsTags = metas.filter((t) => /name\s*=\s*"robots"/i.test(t));

  if (descTags.length === 0) err(route.path, 'no meta description');
  else if (descTags.length > 1) err(route.path, `${descTags.length} meta descriptions (must be exactly 1)`);
  const description = descTags.length ? attr(descTags[0], 'content') || '' : '';
  if (/undefined|null|\[object/i.test(description)) err(route.path, `meta description contains a broken value`);
  if (description && description.length > 165)
    warn(route.path, `meta description is ${description.length} chars (may truncate)`);
  if (description && description.length < 70)
    warn(route.path, `meta description is only ${description.length} chars (thin snippet)`);

  /* ---- robots ---- */
  if (robotsTags.length === 0) err(route.path, 'no meta robots directive');
  else if (robotsTags.length > 1)
    err(route.path, `${robotsTags.length} meta robots tags — contradictory directives are the exact bug we removed`);
  const robots = robotsTags.length ? (attr(robotsTags[0], 'content') || '').toLowerCase() : '';
  const isNoindex = robots.includes('noindex');
  if (route.sitemap && isNoindex) err(route.path, 'route is in the sitemap but emits noindex');
  if (route.noindex && !isNoindex) err(route.path, 'route is declared noindex but does not emit noindex');

  /* ---- canonical ---- */
  const canonicals = tags(head, LINK_RE).filter((t) => /rel\s*=\s*"canonical"/i.test(t));
  if (canonicals.length === 0) err(route.path, 'no canonical link');
  else if (canonicals.length > 1) err(route.path, `${canonicals.length} canonical links (must be exactly 1)`);
  const canonical = canonicals.length ? attr(canonicals[0], 'href') || '' : '';
  if (canonical) {
    if (/undefined|null/i.test(canonical)) err(route.path, `canonical is malformed: "${canonical}"`);
    else if (canonical.includes('www.')) err(route.path, `canonical uses the www host: "${canonical}"`);
    else if (canonical.startsWith('http://')) err(route.path, `canonical is not https: "${canonical}"`);
    else if (!canonical.startsWith(SITE_URL)) err(route.path, `canonical is off-domain: "${canonical}"`);
    else if (/([^:])\/\//.test(canonical)) err(route.path, `canonical has a double slash: "${canonical}"`);
    else if (canonical !== expectedCanonical && !route.canonicalOverride)
      err(route.path, `canonical "${canonical}" does not match its own URL "${expectedCanonical}"`);
  }

  /* ---- headings ---- */
  const h1s = [...body.matchAll(H1_RE)].map((m) => stripTags(m[1]));
  if (h1s.length === 0) err(route.path, 'no <h1> in the rendered body');
  else if (h1s.length > 1) err(route.path, `${h1s.length} <h1> elements: ${JSON.stringify(h1s)}`);

  /* ---- crawlable content and links ---- */
  const text = stripTags(body);
  if (text.length < 500) err(route.path, `only ${text.length} chars of rendered text (soft-404 risk)`);

  const anchors = tags(body, ANCHOR_RE);
  const internal = [];
  for (const a of anchors) {
    const href = attr(a, 'href');
    if (!href) {
      err(route.path, 'anchor with no href');
      continue;
    }
    if (href.startsWith('#') || /^(tel:|mailto:)/i.test(href)) continue;
    if (href.startsWith('http')) {
      if (/^https?:\/\/(www\.)?inkmugi\.com/i.test(href)) {
        if (href.includes('www.')) err(route.path, `internal link uses the redirecting www host: ${href}`);
        else if (href.startsWith('http://')) err(route.path, `internal link is not https: ${href}`);
        else warn(route.path, `internal link is absolute rather than relative: ${href}`);
      }
      continue;
    }
    internal.push(href);
    const clean = href.split('?')[0].split('#')[0].replace(/\/$/, '') || '/';
    if (redirectSources.has(clean)) err(route.path, `internal link points at a redirect source: ${href}`);
    else if (!knownPaths.has(clean)) err(route.path, `internal link points at an unknown route: ${href}`);
    if (/\s/.test(href)) err(route.path, `internal link contains an unencoded space: ${href}`);
  }
  if (internal.length < 5) err(route.path, `only ${internal.length} crawlable internal links`);

  /* ---- structured data ---- */
  let ldCount = 0;
  for (const m of html.matchAll(LDJSON_RE)) {
    ldCount++;
    try {
      const parsed = JSON.parse(m[1]);
      const raw = JSON.stringify(parsed);
      if (/"(undefined|null)"/.test(raw)) err(route.path, 'JSON-LD contains a literal "undefined"/"null" string');
      if (raw.includes('inkmugi.comundefined')) err(route.path, 'JSON-LD contains a malformed URL');
    } catch (e) {
      err(route.path, `JSON-LD does not parse: ${e.message}`);
    }
  }
  if (route.sitemap && ldCount === 0) warn(route.path, 'indexable route emits no structured data');

  docs.push({ route: route.path, title, description, canonical, h1: h1s[0] || null, textLen: text.length, links: internal.length, ldCount, sitemap: !!route.sitemap, noindex: isNoindex });
}

/* ------------------------------------------------------------------ */
/*  Cross-document checks                                              */
/* ------------------------------------------------------------------ */

const byTitle = new Map();
const byDesc = new Map();
for (const d of docs) {
  if (d.noindex) continue;
  if (d.title) byTitle.set(d.title, [...(byTitle.get(d.title) || []), d.route]);
  if (d.description) byDesc.set(d.description, [...(byDesc.get(d.description) || []), d.route]);
}
for (const [title, routes] of byTitle) if (routes.length > 1) err(routes.join(', '), `duplicate title: "${title}"`);
for (const [, routes] of byDesc) if (routes.length > 1) err(routes.join(', '), 'duplicate meta description');

/* ---- sitemap ---- */
const sitemapFile = path.join(DIST, 'sitemap.xml');
if (!fs.existsSync(sitemapFile)) {
  err('sitemap.xml', 'not generated');
} else {
  const xml = fs.readFileSync(sitemapFile, 'utf8');
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const declared = new Set(prerenderRoutes.filter((r) => r.sitemap).map((r) => `${SITE_URL}${r.path}`));

  for (const loc of locs) {
    if (!declared.has(loc)) err('sitemap.xml', `lists a URL that is not a declared indexable route: ${loc}`);
    const p = loc.replace(SITE_URL, '') || '/';
    const doc = docs.find((d) => d.route === p);
    if (!doc) err('sitemap.xml', `lists ${loc} but no document was rendered for it`);
    else if (doc.noindex) err('sitemap.xml', `lists ${loc} but that page is noindex`);
  }
  for (const d of declared) if (!locs.includes(d)) err('sitemap.xml', `indexable route missing from sitemap: ${d}`);
  if (new Set(locs).size !== locs.length) err('sitemap.xml', 'contains duplicate <loc> entries');
}

/* ---- 404 document ---- */
const notFound = path.join(DIST, '404.html');
if (!fs.existsSync(notFound)) {
  err('404.html', 'not generated — unmatched URLs would not get a real HTTP 404');
} else {
  const nf = fs.readFileSync(notFound, 'utf8');
  if (!/name\s*=\s*"robots"[^>]*content\s*=\s*"[^"]*noindex/i.test(nf)) err('404.html', 'is not noindex');
  if (!/<h1/i.test(nf)) err('404.html', 'has no <h1>');
}

/* ---- the SPA fallback must be gone, or 404s stay soft ---- */
if (/from\s*=\s*"\/\*"[\s\S]{0,120}status\s*=\s*200/.test(netlifyToml))
  err('netlify.toml', 'still has a catch-all `/* -> /index.html 200` rule, which keeps unknown URLs at HTTP 200');

/* ------------------------------------------------------------------ */
/*  Report                                                             */
/* ------------------------------------------------------------------ */

const indexable = docs.filter((d) => !d.noindex);
console.log(cyan('\nBuild validation\n'));
console.log(`  documents      ${docs.length}`);
console.log(`  indexable      ${indexable.length}`);
console.log(`  avg text       ${Math.round(indexable.reduce((n, d) => n + d.textLen, 0) / (indexable.length || 1)).toLocaleString()} chars`);
console.log(`  avg links      ${Math.round(indexable.reduce((n, d) => n + d.links, 0) / (indexable.length || 1))}`);
console.log(`  unique titles  ${new Set(indexable.map((d) => d.title)).size}/${indexable.length}`);

if (warnings.length) {
  console.log(yellow(`\n  ${warnings.length} warning(s):`));
  for (const w of warnings) console.log(yellow(`    ${w.route}: ${w.msg}`));
}

if (errors.length) {
  console.log(red(`\n  ${errors.length} error(s):`));
  for (const e of errors) console.log(red(`    ${e.route}: ${e.msg}`));
  console.log(red('\n  Build validation FAILED.\n'));
  process.exit(1);
}

console.log(green('\n  All checks passed.\n'));
console.log(dim('  (warnings above are advisory and do not fail the build)\n'));
