import React from 'react';
import { Award, MapPin, Shield } from 'lucide-react';

interface AuthorBlockProps {
  /** Optional extra CSS classes */
  className?: string;
  /** Placement variant — 'compact' for inline, 'full' for standalone section */
  variant?: 'compact' | 'full';
}

/**
 * Reusable EEAT Author Authority Block
 * Displays Mugi's credentials and expertise for trust signals.
 * Includes Person schema structured data for SEO.
 */
const AuthorBlock: React.FC<AuthorBlockProps> = ({
  className = '',
  variant = 'compact',
}) => {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://inkmugi.com/#mugi',
    name: 'Mugi',
    jobTitle: 'Licensed Permanent Cosmetic Tattooer',
    description:
      'Virginia-licensed permanent makeup artist specializing in powder brows and microblading correction with 330+ documented procedures.',
    image:
      'https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg',
    url: 'https://inkmugi.com/about',
    worksFor: {
      '@id': 'https://inkmugi.com/#business',
    },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'license',
      name: 'Virginia Permanent Cosmetic Tattooer License',
      identifier: '1231002471',
    },
    knowsAbout: [
      'Ombre Powder Brows',
      'Microblading Correction',
      'Microshading',
      'Permanent Makeup Safety',
      'Korean PMU Techniques',
    ],
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 38.8304,
        longitude: -77.1964,
      },
      geoRadius: '50',
    },
  };

  if (variant === 'compact') {
    return (
      <aside
        className={`border border-[#E6DAD2] rounded-xl p-5 md:p-6 bg-[#FDFCFB] ${className}`}
        aria-label="Author information"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <div className="flex items-start gap-4">
          <img
            src="https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg"
            alt="Mugi — licensed permanent makeup artist in Northern Virginia"
            className="w-14 h-14 rounded-full object-cover flex-shrink-0"
            loading="lazy"
            decoding="async"
          />
          <div className="min-w-0">
            <p className="text-xs text-[#2D2D2B]/40 tracking-wide uppercase mb-1">
              Written by
            </p>
            <h4 className="text-base font-medium text-[#2D2D2B] mb-1">
              Mugi
            </h4>
            <p className="text-sm text-[#2D2D2B]/60 leading-relaxed">
              Virginia Licensed Permanent Makeup Artist · Specializing in
              powder brows and microblading correction · 330+ brow procedures
              performed · Serving Northern Virginia and the Washington DC
              metro area
            </p>
          </div>
        </div>
      </aside>
    );
  }

  // Full variant — standalone section
  return (
    <section
      className={`py-10 ${className}`}
      aria-label="About the author"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <div className="container-custom max-w-4xl">
        <div className="bg-[#FDFCFB] border border-[#E6DAD2] rounded-2xl p-6 md:p-8">
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <img
              src="https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg"
              alt="Mugi — licensed permanent makeup artist in Northern Virginia"
              className="w-20 h-20 rounded-full object-cover flex-shrink-0"
              loading="lazy"
              decoding="async"
            />
            <div>
              <p className="text-xs text-[#2D2D2B]/40 tracking-wide uppercase mb-1">
                Written by
              </p>
              <h4 className="text-xl font-cormorant font-medium text-[#2D2D2B] mb-2">
                Mugi
              </h4>
              <p className="text-sm text-[#2D2D2B]/70 leading-relaxed mb-4">
                Virginia Licensed Permanent Makeup Artist specializing in
                powder brows and microblading correction. 330+ brow procedures
                performed. Serving Northern Virginia and the Washington DC
                metro area.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs text-[#2D2D2B]/50 bg-[#F7EDE6] px-3 py-1.5 rounded-full">
                  <Shield size={12} className="text-[#9A7B69]" />
                  VA Licensed &amp; Insured
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-[#2D2D2B]/50 bg-[#F7EDE6] px-3 py-1.5 rounded-full">
                  <Award size={12} className="text-[#9A7B69]" />
                  330+ Procedures
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-[#2D2D2B]/50 bg-[#F7EDE6] px-3 py-1.5 rounded-full">
                  <MapPin size={12} className="text-[#9A7B69]" />
                  Annandale, VA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorBlock;
