import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import {
  Star,
  CheckCircle,
  Award,
  Shield,
  Car,
  ArrowRight,
  Phone,
  Droplets,
  Clock,
} from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import InlineFaqAccordion from './InlineFaqAccordion';
import LocationHero from './LocationHero';
import LocationMidCTA from './LocationMidCTA';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface AreaServedEntry {
  type?: string;        // "City" | "AdministrativeArea"
  name: string;
  state: string;        // "Virginia" | "District of Columbia"
}

export interface LocationPageProps {
  /* ---- identity ---- */
  city: string;
  state?: string;       // default "VA"
  slug: string;         // e.g. "/permanent-makeup-burke-va"

  /* ---- SEO meta ---- */
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  breadcrumbName: string;

  /* ---- schema ---- */
  areaServed: AreaServedEntry[];
  serviceSchemaName: string;
  serviceSchemaDesc: string;

  /* ---- hero ---- */
  badgeText?: string;
  headline: React.ReactNode;
  heroSubtext: string;
  heroSecondaryText?: string;
  heroImage: string;
  heroImageAlt: string;
  heroPrimaryCTA?: { text: string; to: string };
  heroSecondaryCTA?: { text: string; href?: string; to?: string; type?: 'link' };

  /* ---- intro / "why choose" section ---- */
  introTitle: string;
  introContent: React.ReactNode;

  /* ---- drive times ---- */
  neighborhoods: { name: string; time: string }[];
  driveTimeTitle: string;
  driveTimeSubtext: string;
  mapEmbedUrl: string;
  mapTitle?: string;

  /* ---- climate comparison (dark section) ---- */
  climateTitle?: React.ReactNode;
  climateCards?: { icon: 'humidity' | 'healed'; title: string; content: string }[];

  /* ---- testimonials ---- */
  testimonials: { name: string; location: string; text: string; rating: number }[];

  /* ---- FAQs ---- */
  faqs: { question: string; answer: string }[];

  /* ---- cross-links ---- */
  nearbyCities: { name: string; path: string; driveTime: string }[];

  /* ---- microblading comparison (optional prose section) ---- */
  microbladingTitle?: string;
  microbladingContent?: React.ReactNode;

  /* ---- CTA customisation ---- */
  ctaTitle?: string;
  ctaSubtext?: string;
  ctaFooterText?: string;
  midCTASubtext?: string;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const LocationPage: React.FC<LocationPageProps> = (props) => {
  const {
    city,
    state = 'VA',
    slug,
    seoTitle,
    seoDescription,
    seoKeywords,
    breadcrumbName,
    areaServed,
    serviceSchemaName,
    serviceSchemaDesc,
    badgeText,
    headline,
    heroSubtext,
    heroSecondaryText,
    heroImage,
    heroImageAlt,
    heroPrimaryCTA = { text: 'Request a Consultation', to: '/booking' },
    heroSecondaryCTA,
    introTitle,
    introContent,
    neighborhoods,
    driveTimeTitle,
    driveTimeSubtext,
    mapEmbedUrl,
    mapTitle,
    climateTitle,
    climateCards,
    testimonials,
    faqs,
    nearbyCities,
    microbladingTitle,
    microbladingContent,
    ctaTitle = 'Ready to See If We\'re a Fit?',
    ctaSubtext,
    ctaFooterText,
    midCTASubtext,
  } = props;

  /* ---------- schemas ---------- */

  const localSchema = {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    '@id': 'https://www.inkmugi.com/#business',
    name: 'Ink Mugi — Ombré Powder Brows',
    url: `https://www.inkmugi.com${slug}`,
    logo: 'https://www.inkmugi.com/logo.png',
    image: 'https://www.inkmugi.com/og-image.jpg',
    telephone: '+15712838228',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '7857 Heritage Dr #330',
      addressLocality: 'Annandale',
      addressRegion: 'VA',
      postalCode: '22003',
      addressCountry: 'US',
    },
    priceRange: '$$$',
    areaServed: areaServed.map((a) => ({
      '@type': a.type || 'City',
      name: a.name,
      containedInPlace: { '@type': 'State', name: a.state },
    })),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '38.8305',
      longitude: '-77.1964',
    },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceSchemaName,
    description: serviceSchemaDesc,
    provider: { '@type': 'HealthAndBeautyBusiness', '@id': 'https://www.inkmugi.com/#business' },
    areaServed: { '@type': 'City', name: city, containedInPlace: { '@type': 'State', name: state === 'DC' ? 'District of Columbia' : 'Virginia' } },
    serviceType: 'Permanent Makeup',
    offers: { '@type': 'Offer', price: '600', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
  };

  /* ---------- Build cross-links with auto-added hub + service ---------- */

  const isAnnandale = city.toLowerCase() === 'annandale';
  const crossLinks: { name: string; path: string; driveTime: string }[] = [...nearbyCities];

  // Auto-add Annandale hub link for spoke pages
  if (!isAnnandale && !crossLinks.some((c) => c.path === '/licensed-pmu-artist-annandale')) {
    crossLinks.push({ name: 'Annandale, VA (Our Studio)', path: '/licensed-pmu-artist-annandale', driveTime: 'Home studio' });
  }

  // Auto-add signature service link
  if (!crossLinks.some((c) => c.path === '/signature-ombre-brows')) {
    crossLinks.push({ name: 'Ombre Powder Brows', path: '/signature-ombre-brows', driveTime: 'Our signature service' });
  }

  // Auto-add FAQ link
  if (!crossLinks.some((c) => c.path === '/faq')) {
    crossLinks.push({ name: 'FAQ', path: '/faq', driveTime: 'Common questions' });
  }

  return (
    <>
      {/* ============ SEO + Schemas ============ */}
      <SEO title={seoTitle} description={seoDescription} path={slug} keywords={seoKeywords}>
        <script type="application/ld+json">
          {JSON.stringify({
            ...localSchema,
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5.0',
              reviewCount: '47',
              bestRating: '5',
              worstRating: '5',
            },
            review: testimonials.map((t) => ({
              '@type': 'Review',
              author: { '@type': 'Person', name: t.name },
              reviewRating: { '@type': 'Rating', ratingValue: t.rating, bestRating: 5 },
              reviewBody: t.text,
            })),
          })}
        </script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.inkmugi.com/' },
              { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.inkmugi.com/services' },
              { '@type': 'ListItem', position: 3, name: breadcrumbName, item: `https://www.inkmugi.com${slug}` },
            ],
          })}
        </script>
      </SEO>

      {/* ============ Hero ============ */}
      <LocationHero
        city={city}
        badgeText={badgeText || `Serving ${city}, ${state}`}
        headline={headline}
        subtext={heroSubtext}
        secondaryText={heroSecondaryText}
        heroImage={heroImage}
        heroImageAlt={heroImageAlt}
        primaryCTA={heroPrimaryCTA}
        secondaryCTA={heroSecondaryCTA}
      />

      {/* ============ Intro / Why Choose ============ */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              {introTitle}
            </h2>
            <div className="prose prose-lg text-[#2D2D2B]/80 max-w-none">{introContent}</div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============ Drive Times + Map ============ */}
      <section className="py-16 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              {driveTimeTitle}
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">{driveTimeSubtext}</p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {neighborhoods.map((hood, index) => (
              <AnimatedSection key={hood.name} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow">
                  <Car className="w-6 h-6 text-[#9A7B69] mx-auto mb-2" />
                  <p className="font-medium text-[#2D2D2B]">{hood.name}</p>
                  <p className="text-[#9A7B69] font-semibold">{hood.time}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={mapTitle || `Directions from ${city} to Ink Mugi in Annandale`}
              />
            </div>
            <p className="text-center text-[#2D2D2B]/60 mt-4 text-sm">
              📍 7857 Heritage Dr #330, Annandale, VA 22003 • Free parking available
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ============ Service Authority (3 stat cards) ============ */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Data-Driven Artistry {city} Clients Rely On
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
              Every claim is documented. Every result is photographed at 6+ weeks healed — not fresh.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="bg-[#F9F7F5] rounded-2xl p-8 h-full">
                <div className="w-14 h-14 bg-[#E6DAD2] rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-[#2D2D2B]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2D2D2B]">330+ Documented Procedures</h3>
                <p className="text-[#2D2D2B]/70">
                  Not a claim — a tracked dataset. Every procedure is documented from consultation
                  through healed result. This depth of experience means fewer surprises and better
                  outcomes for our {city} clients.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-[#F9F7F5] rounded-2xl p-8 h-full">
                <div className="w-14 h-14 bg-[#E6DAD2] rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-[#2D2D2B]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2D2D2B]">0.19% Complication Rate</h3>
                <p className="text-[#2D2D2B]/70">
                  That's 13x lower than the industry average of 2.5%. Virginia licensed, insured,
                  bloodborne pathogen certified. Hospital-grade sterilization and premium
                  EU-compliant vegan pigments on every procedure.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-[#F9F7F5] rounded-2xl p-8 h-full">
                <div className="w-14 h-14 bg-[#E6DAD2] rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle className="w-7 h-7 text-[#2D2D2B]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2D2D2B]">Design Approved Before Pigment</h3>
                <p className="text-[#2D2D2B]/70">
                  Your brow shape is mapped to your facial proportions, drawn on your face, and
                  adjusted until you say "perfect." Nothing permanent happens until you're 100%
                  confident — that's our guarantee.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Service link cards */}
          <AnimatedSection className="mt-12">
            <div className="bg-[#F7EDE6] rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-cormorant font-semibold text-[#2D2D2B] text-center mb-6">
                Explore Our Permanent Makeup Services
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <Link
                  to="/signature-ombre-brows"
                  className="bg-white rounded-xl p-5 text-center hover:shadow-lg transition-shadow group"
                >
                  <p className="font-semibold text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">
                    Signature Ombre Brows
                  </p>
                  <p className="text-sm text-[#2D2D2B]/60 mt-1">Our flagship technique</p>
                </Link>
                <Link
                  to="/nano-brows"
                  className="bg-white rounded-xl p-5 text-center hover:shadow-lg transition-shadow group"
                >
                  <p className="font-semibold text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">
                    Nano Brows
                  </p>
                  <p className="text-sm text-[#2D2D2B]/60 mt-1">Crisp hair-stroke precision</p>
                </Link>
                <Link
                  to="/microshading-artistry"
                  className="bg-white rounded-xl p-5 text-center hover:shadow-lg transition-shadow group"
                >
                  <p className="font-semibold text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">
                    Microshading
                  </p>
                  <p className="text-sm text-[#2D2D2B]/60 mt-1">Whisper-soft definition</p>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============ Climate Comparison (optional dark section) ============ */}
      {climateTitle && climateCards && climateCards.length > 0 && (
        <section className="py-20 bg-[#2D2D2B] text-white relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }}
          />
          <div className="container-custom relative">
            <AnimatedSection className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-8 text-center">
                {climateTitle}
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                {climateCards.map((card, i) => (
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      {card.icon === 'humidity' ? (
                        <Droplets className="w-6 h-6 text-[#E6DAD2]" />
                      ) : (
                        <Clock className="w-6 h-6 text-[#E6DAD2]" />
                      )}
                      <h3 className="text-xl font-semibold">{card.title}</h3>
                    </div>
                    <p className="text-white/80 leading-relaxed">{card.content}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link
                  to="/microblading-vs-powder-brows"
                  className="inline-flex items-center gap-2 text-[#E6DAD2] hover:text-white transition-colors font-medium"
                >
                  Read the full microblading vs powder brows comparison
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* ============ Testimonials ============ */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              What {city} Area Clients Say
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#9A7B69] text-[#9A7B69]" />
              ))}
            </div>
            <p className="text-[#2D2D2B]/70">5.0 rating from 47+ verified reviews</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 h-full">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#9A7B69] text-[#9A7B69]" />
                    ))}
                  </div>
                  <p className="text-[#2D2D2B]/80 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[#2D2D2B] rounded-full flex items-center justify-center text-white font-medium">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-[#2D2D2B]">{testimonial.name}</p>
                      <p className="text-sm text-[#9A7B69]">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Pricing ============ */}
      <section className="py-20 bg-[#F0E4D8]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Transparent Pricing for {city} Clients
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
              All-inclusive investment. No hidden fees, no surprise add-ons — everything is included
              from consultation to perfecting session.
            </p>
          </AnimatedSection>

          <div className="max-w-lg mx-auto">
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <p className="text-sm text-[#9A7B69] font-medium mb-2">SIGNATURE SERVICE</p>
                  <h3 className="text-2xl font-cormorant font-medium text-[#2D2D2B]">
                    Ombré Powder Brows
                  </h3>
                  <p className="text-4xl font-bold text-[#2D2D2B] mt-2">$600</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    'In-depth design consultation & facial mapping',
                    'Full procedure (2–3 hours, unrushed)',
                    'Premium EU-compliant vegan pigments',
                    'Medical-grade aftercare kit included',
                    '24/7 healing support via text',
                    '6-week perfecting session included',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#9A7B69] flex-shrink-0" />
                      <span className="text-[#2D2D2B]/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/booking"
                  className="block w-full text-center px-8 py-4 bg-[#2D2D2B] text-white rounded-full font-medium hover:bg-[#4A4A47] transition-all"
                >
                  Book Your Consultation
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ============ Knowledge Hub Banner ============ */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <Link
              to="/ombre-powder-brows-guide"
              className="block bg-gradient-to-r from-[#F7EDE6] to-[#F0E4D8] rounded-2xl p-8 hover:shadow-lg transition-shadow group"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-[#9A7B69] font-medium mb-1">KNOWLEDGE HUB</p>
                  <h3 className="text-xl md:text-2xl font-cormorant font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">
                    Explore the Complete Ombré Powder Brows Guide
                  </h3>
                  <p className="text-[#2D2D2B]/60 mt-1">
                    Healing timelines, technique comparisons, aftercare, and more
                  </p>
                </div>
                <ArrowRight className="w-6 h-6 text-[#9A7B69] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ============ Mid-Page CTA ============ */}
      <LocationMidCTA
        subtext={
          midCTASubtext ||
          `${city} residents trust Ink Mugi for precision permanent makeup. Book your free consultation today.`
        }
      />

      {/* ============ FAQs ============ */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <InlineFaqAccordion
                faqs={faqs}
                title={`Questions from ${city} Clients`}
                subtitle="Tap a question to reveal the answer"
                maxVisible={6}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ============ Cross-links ============ */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-cormorant font-medium text-[#2D2D2B] mb-3">
              Also Serving Nearby Communities
            </h2>
            <p className="text-[#2D2D2B]/60">
              Premium ombre powder brows across Fairfax County &amp; Northern Virginia
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {crossLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="bg-[#F9F7F5] rounded-xl p-4 text-center hover:shadow-lg transition-shadow group"
              >
                <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">
                  {link.name}
                </p>
                <p className="text-sm text-[#2D2D2B]/50">{link.driveTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Microblading Comparison (optional) ============ */}
      {microbladingTitle && microbladingContent && (
        <section className="py-20 bg-[#F9F7F5]">
          <div className="container-custom max-w-3xl">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
                {microbladingTitle}
              </h2>
              {microbladingContent}
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                <Link
                  to="/microblading-vs-powder-brows"
                  className="flex items-center gap-2 p-4 bg-white rounded-lg border border-[#E6DAD2] hover:shadow-md transition-shadow"
                >
                  <ArrowRight className="w-5 h-5 text-[#9A7B69] flex-shrink-0" />
                  <span className="text-[#2D2D2B] text-sm font-medium">
                    Microblading vs Powder Brows Comparison
                  </span>
                </Link>
                <Link
                  to="/microblading-for-oily-skin"
                  className="flex items-center gap-2 p-4 bg-white rounded-lg border border-[#E6DAD2] hover:shadow-md transition-shadow"
                >
                  <ArrowRight className="w-5 h-5 text-[#9A7B69] flex-shrink-0" />
                  <span className="text-[#2D2D2B] text-sm font-medium">
                    Microblading &amp; Oily Skin: What to Know
                  </span>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* ============ Final CTA ============ */}
      <section className="py-24 bg-[#2D2D2B] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://live.staticflickr.com/65535/54363160242_7975c4f42c_o_d.jpg')] bg-cover bg-center opacity-10" />
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-cormorant font-medium mb-6">
              {ctaTitle}
            </h2>
            <p className="text-lg text-[#F9F7F5]/90 mb-8">
              {ctaSubtext ||
                `Join ${city} residents who've chosen healed-first permanent makeup with documented results. Your consultation is a conversation — not a commitment.`}
            </p>
            {ctaFooterText && (
              <p className="text-base text-white/60 mb-8">{ctaFooterText}</p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#E6DAD2] text-[#2D2D2B] rounded-full font-medium hover:bg-[#F0E4D8] transition-all"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center justify-center px-8 py-4 border border-white text-white rounded-full font-medium hover:bg-white/10 transition-all"
              >
                View Before &amp; Afters
              </Link>
            </div>
            <a
              href="tel:+15712838228"
              className="inline-flex items-center justify-center gap-2 mt-6 text-[#E6DAD2] hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" />
              (571) 283-8228
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default LocationPage;
