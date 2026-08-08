import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_URL, DEFAULT_IMAGE, siteEntityGraph } from '../lib/siteMeta';

interface SEOProps {
  /** Page title — displayed in the browser tab and search results */
  title: string;
  /** Meta description — shown in search result snippets */
  description: string;
  /**
   * Route path starting with `/` (e.g. "/services"). The canonical URL is
   * derived from it.
   *
   * Typed as a `/`-prefixed template literal on purpose: this prop used to be
   * loosely typed and three pages passed `canonical=` instead, which silently
   * left `path` undefined. /ombre-powder-brows-guide shipped
   * `<link rel="canonical" href="https://inkmugi.comundefined">` to production
   * because of it, and Search Console recorded no user-declared canonical.
   */
  path: `/${string}`;
  /** OG/Twitter image URL. Falls back to the studio image. */
  image?: string;
  /** Open Graph type. Defaults to "website". Use "article" for blog/content pages. */
  ogType?: string;
  /** Comma-separated keywords */
  keywords?: string;
  /** Set true for pages that should not be indexed (404, gated tools) */
  noindex?: boolean;
  /** Page-level JSON-LD. Objects should reference the site entity graph by @id. */
  schema?: object | object[];
  /** Additional Helmet children (extra meta/link tags) */
  children?: React.ReactNode;
}

/**
 * The single source of every page's head.
 *
 * Emits exactly one title, description, canonical, and robots directive, plus
 * the site-wide entity graph. index.html deliberately declares none of these:
 * a static tag in the shell is repeated on every route and cannot be overridden
 * per page, which is how the old build asserted "index, follow" in the shell
 * while React injected "noindex" on the same 404 page.
 */
const SEO: React.FC<SEOProps> = ({
  title,
  description,
  path,
  image,
  ogType = 'website',
  keywords,
  noindex = false,
  schema,
  children,
}) => {
  const canonicalUrl = `${SITE_URL}${path}`;
  const ogImage = image || DEFAULT_IMAGE;
  const pageSchemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  return (
    <Helmet defer={false}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta
        name="robots"
        content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'}
      />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Ink Mugi" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* One business/person/website graph per page, defined once site-wide. */}
      <script type="application/ld+json">{JSON.stringify(siteEntityGraph())}</script>
      {pageSchemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}

      {children}
    </Helmet>
  );
};

export default SEO;
