import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://inkmugi.com';
const DEFAULT_IMAGE = 'https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg';

interface SEOProps {
  /** Page title — displayed in browser tab and search results */
  title: string;
  /** Meta description — shown in search result snippets */
  description: string;
  /** Route path starting with / (e.g. "/services"). Canonical is auto-generated. */
  path: string;
  /** OG/Twitter image URL. Falls back to default studio image. */
  image?: string;
  /** Open Graph type. Defaults to "website". Use "article" for blog/content pages. */
  ogType?: string;
  /** Comma-separated keywords for meta keywords tag */
  keywords?: string;
  /** Set true for pages that should not be indexed (404, redirects) */
  noindex?: boolean;
  /** Additional Helmet children (JSON-LD scripts, extra meta tags) */
  children?: React.ReactNode;
}

/**
 * Centralized SEO component for Ink Mugi.
 * Generates a single canonical tag + complete OG/Twitter metadata via react-helmet-async.
 * 
 * Usage:
 *   <SEO title="Page Title" description="..." path="/page-path" />
 * 
 * With schema:
 *   <SEO title="..." description="..." path="/...">
 *     <script type="application/ld+json">{JSON.stringify(schema)}</script>
 *   </SEO>
 */
const SEO: React.FC<SEOProps> = ({
  title,
  description,
  path,
  image,
  ogType = 'website',
  keywords,
  noindex = false,
  children,
}) => {
  const canonicalUrl = `${SITE_URL}${path}`;
  const ogImage = image || DEFAULT_IMAGE;

  return (
    <Helmet defer={false}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

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

      {children}
    </Helmet>
  );
};

export default SEO;
