/**
 * Server entry used only at build time by scripts/prerender.mjs.
 *
 * Renders a route to static HTML plus the <head> tags react-helmet-async
 * collected for it, so every public URL ships real title/description/canonical/
 * robots/JSON-LD and real body copy instead of an empty <div id="root">.
 */
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { routes } from './routes';
import { blogPosts } from './data/blogData';

export interface PrerenderRoute {
  path: string;
  /** include in sitemap.xml */
  sitemap: boolean;
  /** page emits noindex */
  noindex?: boolean;
  /** source file, used for a truthful sitemap <lastmod> */
  sourceFile?: string;
  /** the page intentionally canonicalises somewhere other than its own URL */
  canonicalOverride?: boolean;
}

/**
 * Every concrete URL the build must emit a document for.
 *
 * The dynamic /blog/:slug route is expanded here from blogData, so a new post
 * automatically becomes a prerendered, sitemapped URL. Posts that also have a
 * dedicated page component are skipped — that component owns the URL, because
 * React Router ranks a static segment above a dynamic one.
 */
const staticRoutePaths = new Set(routes.map((r) => r.path));

export const prerenderRoutes: PrerenderRoute[] = [
  ...routes
    .filter((r) => !r.path.includes(':') && r.path !== '*')
    .map((r) => ({
      path: r.path,
      sitemap: r.sitemap,
      noindex: r.noindex,
      sourceFile: r.sourceFile,
      canonicalOverride: r.canonicalOverride,
    })),
  ...blogPosts
    .filter((p) => !staticRoutePaths.has(`/blog/${p.slug}`))
    .map((p) => ({
      path: `/blog/${p.slug}`,
      sitemap: true,
      sourceFile: 'src/data/blogData.ts',
    })),
];

interface RenderOptions {
  maxPasses?: number;
  sentinel?: string;
}

export interface RenderResult {
  html: string;
  head: string;
  passes: number;
  stillLoading: boolean;
}

/**
 * renderToString does not await Suspense, and every route is React.lazy, so the
 * first pass emits the loader fallback and starts the dynamic imports. Rendering
 * again once those promises have settled produces the real markup — clean static
 * HTML, with none of the fallback-then-swap scripting that streaming SSR would
 * leave behind. Two passes suffice in practice; we allow a few more for safety.
 */
export async function renderPage(location: string, options: RenderOptions = {}): Promise<RenderResult> {
  const { maxPasses = 8, sentinel = 'data-page-loader' } = options;

  const originalError = console.error;
  const suppressed: unknown[][] = [];

  let html = '';
  let head = '';
  let passes = 0;

  try {
    for (let pass = 0; pass < maxPasses; pass++) {
      passes = pass + 1;

      // Suspense warnings are expected while lazy chunks are still resolving.
      // Capture rather than discard, so a genuine error can still be surfaced.
      console.error = (...args: unknown[]) => {
        suppressed.push(args);
      };

      const helmetContext: { helmet?: Record<string, { toString(): string }> } = {};
      try {
        html = renderToString(
          <HelmetProvider context={helmetContext}>
            <StaticRouter location={location}>
              <App />
            </StaticRouter>
          </HelmetProvider>
        );
      } finally {
        console.error = originalError;
      }

      const helmet = helmetContext.helmet;
      head = helmet
        ? [helmet.title, helmet.meta, helmet.link, helmet.script]
            .map((part) => (part ? part.toString() : ''))
            .filter(Boolean)
            .join('\n    ')
        : '';

      if (!html.includes(sentinel)) {
        return { html, head, passes, stillLoading: false };
      }

      // Let the route's dynamic import settle before trying again.
      await new Promise((resolve) => setTimeout(resolve, 0));
    }
  } finally {
    console.error = originalError;
  }

  // Never resolved — surface whatever React was complaining about, since that
  // is almost certainly the reason (an SSR-unsafe component, usually).
  for (const args of suppressed.slice(-5)) originalError(...args);

  return { html, head, passes, stillLoading: true };
}
