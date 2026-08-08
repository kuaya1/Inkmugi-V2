/**
 * Canonical business facts and the site-wide entity graph.
 *
 * Every value here already appeared in published markup — this file moves them
 * to one place rather than restating them. Nothing has been added, inflated, or
 * invented; where a figure was inconsistent across pages it is flagged in the
 * comments rather than silently "corrected".
 *
 * Why this exists: the same LocalBusiness @id was previously declared twice with
 * conflicting properties (statically in index.html on every route, and again in
 * LocationPage.tsx with a different `url`, `logo` and `image` on each of the 19
 * location pages). Two definitions of one @id is not an entity — it is a
 * contradiction, and it was being served on the pages Google trusts least.
 */

export const SITE_URL = 'https://inkmugi.com';

/** Booking happens on Vagaro. Linked directly so there is no fake internal hop. */
export const BOOKING_URL = 'https://www.vagaro.com/inkmugi';

export const BUSINESS_ID = `${SITE_URL}/#business`;
export const PERSON_ID = `${SITE_URL}/#mugi`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/*
 * These replace https://inkmugi.com/logo.png and /og-image.jpg, which were
 * referenced by 82 JSON-LD blocks across 78 files and never existed: the SPA
 * catch-all answered both with the HTML shell at content-type text/html, so
 * every publisher logo and Article image on the site was invalid.
 *
 * The logo is deliberately first-party. The Flickr original-size variant the
 * navbar hotlinks (…_o_d.png) returns HTTP 429 under repeated requests, which
 * is a poor thing to hand a crawler that has to fetch it to validate markup.
 * /android-chrome-512x512.png is a real 500×500 PNG in public/, served from
 * our own origin.
 */
export const LOGO_URL = `${SITE_URL}/android-chrome-512x512.png`;
export const DEFAULT_IMAGE = 'https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg';

export const NAP = {
  name: 'Ink Mugi',
  telephone: '+1-571-283-8228',
  /** Display form used in visible copy and tel: links. */
  telephoneDisplay: '(571) 283-8228',
  telephoneHref: 'tel:+15712838228',
  email: 'inkmugi@gmail.com',
  streetAddress: '7857 Heritage Dr #330',
  addressLocality: 'Annandale',
  addressRegion: 'VA',
  postalCode: '22003',
  addressCountry: 'US',
  latitude: 38.8304,
  longitude: -77.1964,
} as const;

export const PRACTITIONER = {
  name: 'Mugi',
  jobTitle: 'Licensed Permanent Cosmetic Tattooer',
  licenseName: 'Virginia Permanent Cosmetic Tattooer License',
  licenseNumber: '1231002471',
} as const;

export const SOCIAL_PROFILES = [
  'https://www.instagram.com/browsby.mugi/',
  'https://www.facebook.com/inkmugi',
  'https://www.yelp.com/biz/ink-mugi-annandale',
  'https://booksy.com/en-us/dl/inkmugi',
  BOOKING_URL,
];

const AREA_SERVED: { type: 'City' | 'AdministrativeArea'; name: string }[] = [
  { type: 'City', name: 'Annandale' },
  { type: 'City', name: 'Fairfax' },
  { type: 'City', name: 'Arlington' },
  { type: 'City', name: 'Reston' },
  { type: 'City', name: 'Chantilly' },
  { type: 'City', name: 'Centreville' },
  { type: 'City', name: 'Herndon' },
  { type: 'City', name: 'McLean' },
  { type: 'City', name: 'Tysons' },
  { type: 'City', name: 'Burke' },
  { type: 'City', name: 'Manassas' },
  { type: 'City', name: 'Woodbridge' },
  { type: 'City', name: 'Vienna' },
  { type: 'City', name: 'Falls Church' },
  { type: 'City', name: 'Springfield' },
  { type: 'City', name: 'Alexandria' },
  { type: 'AdministrativeArea', name: 'Fairfax County' },
  { type: 'AdministrativeArea', name: 'Loudoun County' },
  { type: 'AdministrativeArea', name: 'Prince William County' },
  { type: 'AdministrativeArea', name: 'Northern Virginia' },
];

/**
 * Service prices, single-sourced so schema cannot contradict visible copy.
 * Each figure is the one the service's own page displays.
 *
 * Corrections from the previous static schema in index.html:
 *  - Nano Brows was marked up at $600 on every route while /nano-brows shows
 *    $650 in nine places. Google requires the marked-up price to match the
 *    price the user sees, so the page wins.
 *  - Lip Blush was marked up at $550 for a service that is not sold anywhere
 *    on the site. Removed rather than left as a bookable offer.
 *  - PMU Correction was marked up at $650 while /pmu-correction-restoration
 *    states $600. The page wins.
 *  - Saline removal was marked up at a flat $200 while
 *    /microblading-removal-vs-correction quotes $200–$350 per session, so it is
 *    published as a range.
 */
export const SERVICE_PRICES = {
  ombrePowderBrows: 600,
  nanoBrows: 650,
  microshading: 700,
  correction: 600,
  salineRemovalLow: 200,
  salineRemovalHigh: 350,
} as const;

const OFFERS = [
  ['Ombre Powder Brows', 'Semi-permanent eyebrow enhancement using a gradient shading technique.', SERVICE_PRICES.ombrePowderBrows],
  ['Nano Brows', 'Ultra-fine hair-stroke eyebrow enhancement using a digital PMU machine.', SERVICE_PRICES.nanoBrows],
  ['Microshading', 'Soft powder-effect eyebrow enhancement.', SERVICE_PRICES.microshading],
  ['PMU Correction & Restoration', 'Correction of previous permanent makeup, including colour correction and shape refinement.', SERVICE_PRICES.correction],
] as const;

/**
 * The one entity graph, emitted once per page by SEO.tsx.
 *
 * Page-level schema (Service, Article, FAQPage, BreadcrumbList) references
 * these @ids rather than redeclaring the business, so there is exactly one
 * description of Ink Mugi across the site.
 *
 * Deliberately absent: aggregateRating. The studio's ratings live on its Google
 * Business Profile, where they are verifiable; first-party review markup about
 * one's own business is not eligible for rich results and the review counts
 * previously hard-coded into the location pages (47) did not match any
 * verifiable source.
 */
export function siteEntityGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: SITE_URL,
        name: NAP.name,
        publisher: { '@id': BUSINESS_ID },
        inLanguage: 'en-US',
      },
      {
        '@type': 'HealthAndBeautyBusiness',
        '@id': BUSINESS_ID,
        name: NAP.name,
        url: SITE_URL,
        logo: LOGO_URL,
        image: DEFAULT_IMAGE,
        telephone: NAP.telephone,
        email: NAP.email,
        priceRange: '$$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: NAP.streetAddress,
          addressLocality: NAP.addressLocality,
          addressRegion: NAP.addressRegion,
          postalCode: NAP.postalCode,
          addressCountry: NAP.addressCountry,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: NAP.latitude,
          longitude: NAP.longitude,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '10:00',
            closes: '18:00',
          },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '10:00', closes: '16:00' },
        ],
        sameAs: SOCIAL_PROFILES,
        founder: { '@id': PERSON_ID },
        employee: { '@id': PERSON_ID },
        knowsAbout: [
          'Ombre Powder Brows',
          'Microshading',
          'Nano Brows',
          'Permanent Makeup',
          'PMU Safety Protocols',
          'Cosmetic Tattooing',
          'Permanent Makeup Correction',
          'PMU Aftercare',
        ],
        hasCredential: {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'license',
          name: PRACTITIONER.licenseName,
          identifier: PRACTITIONER.licenseNumber,
        },
        areaServed: AREA_SERVED.map((a) => ({
          '@type': a.type,
          name: a.name,
          containedInPlace: { '@type': 'State', name: 'Virginia' },
        })),
        makesOffer: [
          ...OFFERS.map(([name, description, price]) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name, description },
            price: String(price),
            priceCurrency: 'USD',
          })),
          {
            '@type': 'AggregateOffer',
            itemOffered: {
              '@type': 'Service',
              name: 'Saline Tattoo Removal',
              description: 'Non-laser removal of unwanted permanent makeup using a saline solution technique.',
            },
            lowPrice: String(SERVICE_PRICES.salineRemovalLow),
            highPrice: String(SERVICE_PRICES.salineRemovalHigh),
            priceCurrency: 'USD',
          },
        ],
      },
      {
        '@type': 'Person',
        '@id': PERSON_ID,
        name: PRACTITIONER.name,
        jobTitle: PRACTITIONER.jobTitle,
        image: DEFAULT_IMAGE,
        url: `${SITE_URL}/about`,
        worksFor: { '@id': BUSINESS_ID },
        hasCredential: {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'license',
          name: PRACTITIONER.licenseName,
          identifier: PRACTITIONER.licenseNumber,
        },
        knowsAbout: [
          'Ombre Powder Brows',
          'Microshading',
          'Permanent Makeup Safety',
          'PMU Healing Process',
          'Permanent Makeup Correction',
        ],
        sameAs: ['https://www.instagram.com/browsby.mugi/'],
      },
    ],
  };
}

/** BreadcrumbList helper so every page builds breadcrumbs the same way. */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...trail].map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    })),
  };
}
