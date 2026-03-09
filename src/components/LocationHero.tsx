import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Phone } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface LocationHeroProps {
  /** City name displayed in badge */
  city: string;
  /** Custom badge text. Defaults to "Serving {city}, VA" */
  badgeText?: string;
  /** Main headline as JSX (supports line breaks, styled spans) */
  headline: React.ReactNode;
  /** Primary subtext paragraph */
  subtext: string;
  /** Optional secondary smaller text below subtext */
  secondaryText?: string;
  /** Hero image URL — when provided, renders two-column layout */
  heroImage?: string;
  /** Hero image alt text. Defaults to descriptive alt for city */
  heroImageAlt?: string;
  /** Primary CTA config */
  primaryCTA?: { text: string; to: string };
  /** Secondary CTA — internal link or external href (e.g. tel:) */
  secondaryCTA?: { text: string; to?: string; href?: string };
}

const LocationHero: React.FC<LocationHeroProps> = ({
  city,
  badgeText,
  headline,
  subtext,
  secondaryText,
  heroImage,
  heroImageAlt,
  primaryCTA = { text: 'Book Free Consultation', to: '/booking' },
  secondaryCTA,
}) => {
  const badge = badgeText || `Serving ${city}, VA`;
  const imgAlt = heroImageAlt || `Ombre powder brows result — Ink Mugi, serving ${city}, Virginia`;

  // Two-column layout when image is provided; centered single-column otherwise
  const hasImage = Boolean(heroImage);

  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-[#F0E4D8] to-[#F9F7F5] relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-[#2D2D2B]" />
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-[#2D2D2B]" />
      </div>

      <div className="container-custom relative z-10">
        {hasImage ? (
          /* ─── Two-column hero (image + text) ─── */
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Mobile: image on top */}
            <AnimatedSection className="w-full lg:hidden" delay={0.05}>
              <div className="relative max-w-lg mx-auto">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={heroImage}
                    alt={imgAlt}
                    width={1600}
                    height={900}
                    decoding="async"
                    className="w-full h-auto object-cover aspect-[16/9]"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-[#E6DAD2] rounded-2xl -z-10" />
              </div>
            </AnimatedSection>

            {/* Left column — text */}
            <AnimatedSection className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D2D2B] text-white rounded-full text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                {badge}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-cormorant font-medium mb-6 text-[#2D2D2B] leading-tight">
                {headline}
              </h1>
              <p className="text-lg md:text-xl text-[#2D2D2B]/80 max-w-2xl mx-auto lg:mx-0 mb-4">
                {subtext}
              </p>
              {secondaryText && (
                <p className="text-base text-[#2D2D2B]/60 max-w-xl mx-auto lg:mx-0 mb-6">
                  {secondaryText}
                </p>
              )}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
                <Link
                  to={primaryCTA.to}
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#2D2D2B] text-white rounded-full font-medium hover:bg-[#4A4A47] transition-all"
                >
                  {primaryCTA.text}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                {secondaryCTA?.href ? (
                  <a
                    href={secondaryCTA.href}
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#2D2D2B] text-[#2D2D2B] rounded-full font-medium hover:bg-[#2D2D2B] hover:text-white transition-all"
                  >
                    {secondaryCTA.href.startsWith('tel:') && <Phone className="mr-2 w-5 h-5" />}
                    {secondaryCTA.text}
                  </a>
                ) : secondaryCTA?.to ? (
                  <Link
                    to={secondaryCTA.to}
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#2D2D2B] text-[#2D2D2B] rounded-full font-medium hover:bg-[#2D2D2B] hover:text-white transition-all"
                  >
                    {secondaryCTA.text}
                  </Link>
                ) : null}
              </div>
            </AnimatedSection>

            {/* Right column — hero image (desktop only, mobile rendered above) */}
            <AnimatedSection className="hidden lg:block flex-1" delay={0.15}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={heroImage}
                    alt={imgAlt}
                    width={1600}
                    height={900}
                    decoding="async"
                    className="w-full h-auto object-cover aspect-[16/9]"
                  />
                </div>
                {/* Decorative accents */}
                <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-[#E6DAD2] rounded-2xl -z-10" />
                <div className="absolute -top-3 -left-3 w-16 h-16 bg-[#9A7B69]/20 rounded-xl -z-10" />
              </div>
            </AnimatedSection>
          </div>
        ) : (
          /* ─── Single-column hero (no image — fallback) ─── */
          <AnimatedSection className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D2D2B] text-white rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              {badge}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium mb-6 text-[#2D2D2B] leading-tight">
              {headline}
            </h1>
            <p className="text-lg md:text-xl text-[#2D2D2B]/80 max-w-3xl mx-auto mb-4">
              {subtext}
            </p>
            {secondaryText && (
              <p className="text-base text-[#2D2D2B]/60 max-w-2xl mx-auto mb-8">
                {secondaryText}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={primaryCTA.to}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#2D2D2B] text-white rounded-full font-medium hover:bg-[#4A4A47] transition-all"
              >
                {primaryCTA.text}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              {secondaryCTA?.href ? (
                <a
                  href={secondaryCTA.href}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#2D2D2B] text-[#2D2D2B] rounded-full font-medium hover:bg-[#2D2D2B] hover:text-white transition-all"
                >
                  {secondaryCTA.href.startsWith('tel:') && <Phone className="mr-2 w-5 h-5" />}
                  {secondaryCTA.text}
                </a>
              ) : secondaryCTA?.to ? (
                <Link
                  to={secondaryCTA.to}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#2D2D2B] text-[#2D2D2B] rounded-full font-medium hover:bg-[#2D2D2B] hover:text-white transition-all"
                >
                  {secondaryCTA.text}
                </Link>
              ) : null}
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
};

export default LocationHero;
