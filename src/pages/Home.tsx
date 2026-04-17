import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { ArrowRight, ArrowDown, Award, Shield, CheckCircle2, Phone, Eye, FileCheck, Clock, ChevronDown, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import AnimatedSection from '../components/AnimatedSection';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

const Home: React.FC = () => {
  const [isHeroLoaded, setIsHeroLoaded] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    setIsHeroLoaded(true);
  }, []);

  const getInitials = (name: string) => {
    const letters = name
      .split(/\s+/)
      .filter(Boolean)
      .map((part) => part[0] ?? '')
      .join('')
      .replace(/[^A-Za-z]/g, '')
      .toUpperCase();
    return (letters || 'G').slice(0, 2);
  };

  // ── DATA ──────────────────────────────────────────────────────────────

  const transformations = [
    {
      before: 'https://live.staticflickr.com/65535/54408289026_3826bdb05b_c_d.jpg',
      after: 'https://live.staticflickr.com/65535/54408668740_7465ce5ee8_c_d.jpg',
      tag: 'Day 1 — fresh',
      caption: "Bold now — they'll soften 30–40% by week 6.",
      healingTimeline: '6 weeks healed',
    },
    {
      before: 'https://live.staticflickr.com/65535/54366013651_f914f378af_c_d.jpg',
      after: 'https://live.staticflickr.com/65535/54366410490_6e3bac2287_c_d.jpg',
      tag: 'Day 14 — peel phase',
      caption: 'Patchy is normal. Trust the process.',
      healingTimeline: '6 weeks healed',
    },
    {
      before: 'https://live.staticflickr.com/65535/54366236564_a0f3a59599_c_d.jpg',
      after: 'https://live.staticflickr.com/65535/54365160327_5c790ba60a_c_d.jpg',
      tag: 'Day 45 — healed',
      caption: "This is what you'll live with for 18 months.",
      healingTimeline: '8 weeks healed',
    },
  ];

  const testimonials = [
    {
      name: 'Katherine C.',
      location: 'McLean, VA',
      rating: 5,
      text: "I researched for seven months. Mugi mapped my face for 35 minutes before touching any pigment — I approved every line. Day three looked darker than expected, but she had warned me. At eight weeks healed, they look like they have always been there.",
      service: 'Ombré Powder Brows',
      healed: '8 weeks healed'
    },
    {
      name: 'Amara O.',
      location: 'Arlington, VA',
      rating: 5,
      text: "She refused to book me the first time I called. Explained why. That's the only reason I trusted her the second time.",
      service: 'Microshading',
      healed: '6 weeks healed'
    },
    {
      name: 'Maria S.',
      location: 'Tysons, VA',
      rating: 5,
      text: "Six weeks later they still look like my face. That's all I wanted.",
      service: 'Ombré Powder Brows',
      healed: '12 months healed'
    },
    {
      name: 'Sarah M.',
      location: 'Vienna, VA',
      rating: 5,
      text: "The mapping took longer than the actual tattoo. That's the whole reason it worked.",
      service: 'Ombré Powder Brows',
      healed: '6 weeks healed'
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Mapping',
      description: '40-minute consultation. Facial symmetry analysis, bone structure mapping, skin-type pigment matching. You approve the drawn shape before a single needle touches your skin. No drawing — no procedure.',
    },
    {
      step: '02',
      title: 'Pigment Match',
      description: 'Medical-grade Permablend pigments, matched to your natural brow tone + skin undertone. We mix your exact formula in-session — never pre-mixed, never reused.',
    },
    {
      step: '03',
      title: 'Layered Shading',
      description: 'Three pigment passes, building density gradually. Topical anesthetic throughout. 90-minute session. You watch every stroke in a handheld mirror and direct final symmetry yourself.',
    },
  ];

  const faqs = [
    {
      question: 'How long does it last?',
      answer: '12 to 18 months for most skin types. Oilier skin tends toward 12; drier skin toward 18. After that, an Annual Color Boost ($295) refreshes without a full re-do.',
    },
    {
      question: 'Does it hurt?',
      answer: "Less than you're expecting. Topical numbing is applied before and during. Most clients describe it as a light scratching sensation. Clients who have tattoos almost always say this is easier.",
    },
    {
      question: 'Who should NOT get this?',
      answer: "Pregnant or breastfeeding, currently on Accutane, active eczema or psoriasis in the brow area, recent Botox (within 2 weeks), keloid-prone scarring, or anyone on blood thinners without physician clearance. If any of these apply, I'll decline — that's the whole point.",
    },
    {
      question: 'How does this compare to microblading?',
      answer: 'Microblading cuts the skin with a hand blade to mimic hair. It works on dry, resilient skin — and fades badly on anything else. Ombré powder shades with a precision machine, heals evenly on all skin types, and lasts roughly 2x longer. For most people, ombré is the right answer.',
    },
    {
      question: 'What does the 0.19% complication rate actually mean?',
      answer: 'Across 523 procedures, one client has experienced an adverse outcome requiring unplanned correction — defined as pigment migration, infection, or uneven healing beyond normal variation. That case was resolved at no cost within 90 days. 0.19% is the honest number.',
    },
    {
      question: "Can I see you if I'm traveling to the DMV?",
      answer: 'Yes. The studio is in Annandale, 15 minutes from Tysons and 25 from downtown DC. Travel clients book the 6–8 week touch-up 6+ weeks in advance.',
    },
  ];

  // Get current booking month (2 months ahead)
  const bookingMonth = new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toLocaleString('en-US', { month: 'long' });

  return (
    <>
      <SEO
        title="Ink Mugi | Ombré Powder Brows with a 0.19% Complication Rate — Annandale, VA"
        description="523 procedures. 0.19% complication rate. Licensed in Virginia. Ink Mugi specializes in natural ombré powder brows for women who won't settle for &quot;close enough.&quot; Free consultation in Annandale."
        path="/"
        image="https://inkmugi.com/2315.png"
        keywords="ombre powder brows Annandale VA, permanent makeup Fairfax County, powder brows near me, ombre brows near me, licensed PMU artist Virginia, healed brow results, permanent makeup Northern Virginia, data-driven PMU"
      >
        {/* Preload hero LCP image */}
        <link rel="preload" as="image" href="/2315%20(1).png" media="(max-width: 767px)" />
        <link rel="preload" as="image" href="/2315.png" media="(min-width: 768px)" />

        {/* Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HealthAndBeautyBusiness",
            "@id": "https://inkmugi.com/#business",
            "name": "Ink Mugi",
            "url": "https://inkmugi.com/",
            "logo": "https://inkmugi.com/logo.png",
            "image": "https://inkmugi.com/2315.png",
            "telephone": "+1-571-283-8228",
            "founder": { "@id": "https://inkmugi.com/#mugi" },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "7857 Heritage Dr #330",
              "addressLocality": "Annandale",
              "addressRegion": "VA",
              "postalCode": "22003",
              "addressCountry": "US"
            },
            "priceRange": "$$$",
            "areaServed": [
              { "@type": "City", "name": "Annandale", "containedInPlace": { "@type": "State", "name": "Virginia" } },
              { "@type": "City", "name": "Arlington", "containedInPlace": { "@type": "State", "name": "Virginia" } },
              { "@type": "City", "name": "Alexandria", "containedInPlace": { "@type": "State", "name": "Virginia" } },
              { "@type": "City", "name": "Fairfax", "containedInPlace": { "@type": "State", "name": "Virginia" } },
              { "@type": "City", "name": "McLean", "containedInPlace": { "@type": "State", "name": "Virginia" } },
              { "@type": "City", "name": "Tysons", "containedInPlace": { "@type": "State", "name": "Virginia" } },
              { "@type": "City", "name": "Falls Church", "containedInPlace": { "@type": "State", "name": "Virginia" } },
              { "@type": "City", "name": "Springfield", "containedInPlace": { "@type": "State", "name": "Virginia" } },
              { "@type": "City", "name": "Vienna", "containedInPlace": { "@type": "State", "name": "Virginia" } },
              { "@type": "City", "name": "Washington", "containedInPlace": { "@type": "State", "name": "District of Columbia" } },
              { "@type": "AdministrativeArea", "name": "Fairfax County", "containedInPlace": { "@type": "State", "name": "Virginia" } }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "47",
              "bestRating": "5",
              "worstRating": "5"
            },
            "review": testimonials.map(t => ({
              "@type": "Review",
              "author": { "@type": "Person", "name": t.name },
              "reviewRating": { "@type": "Rating", "ratingValue": t.rating, "bestRating": 5 },
              "reviewBody": t.text
            }))
          })}
        </script>

        {/* Service Schema — updated pricing */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Signature Ombré Powder Brows",
            "description": "Precision ombré powder brows designed for natural healed results. Includes consultation, procedure, aftercare kit, and 6–8 week perfecting touch-up.",
            "provider": { "@id": "https://inkmugi.com/#business" },
            "areaServed": [
              { "@type": "City", "name": "Annandale" },
              { "@type": "AdministrativeArea", "name": "Fairfax County" },
              { "@type": "AdministrativeArea", "name": "Northern Virginia" }
            ],
            "offers": {
              "@type": "Offer",
              "price": "850",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>

        {/* Person Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": "https://inkmugi.com/#mugi",
            "name": "Mugi",
            "jobTitle": "Licensed Permanent Makeup Artist",
            "worksFor": { "@id": "https://inkmugi.com/#business" },
            "knowsAbout": ["Ombré Powder Brows", "Permanent Makeup", "Microshading", "PMU Correction"],
            "image": "https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg"
          })}
        </script>

        {/* WebSite Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://inkmugi.com/#website",
            "url": "https://inkmugi.com/",
            "name": "Ink Mugi",
            "publisher": { "@id": "https://inkmugi.com/#business" }
          })}
        </script>

        {/* HowTo Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "The Ink Mugi Method — How Ombré Powder Brows Work",
            "description": "Three-phase protocol: mapping, pigment match, layered shading. The process behind a 0.19% complication rate at Ink Mugi in Annandale, VA.",
            "totalTime": "PT56D",
            "estimatedCost": { "@type": "MonetaryAmount", "currency": "USD", "value": "850" },
            "step": processSteps.map((s, i) => ({
              "@type": "HowToStep",
              "position": i + 1,
              "name": s.title,
              "text": s.description
            }))
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          })}
        </script>
      </SEO>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION B — HERO
          Blueprint: 2-col grid (copy left, image right). Data-driven authority.
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F6F1EA]">
        {/* Subtle radial accent */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 70% 30%, rgba(184,117,107,0.08) 0%, transparent 50%)' }} />

        <div className="container-custom relative z-10 py-24 md:py-32">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Copy — left */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHeroLoaded ? 1 : 0, y: isHeroLoaded ? 0 : 20 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              {/* Kicker */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-3 text-[#B8756B] tracking-[0.2em] text-[11px] uppercase font-mono">
                  <span className="w-6 h-px bg-[#B8756B]" />
                  Licensed PMU — Annandale, Virginia
                </span>
              </motion.div>

              {/* H1 */}
              <h1 className="mb-6">
                <span className="block text-[2.75rem] md:text-[3.5rem] lg:text-[4.25rem] xl:text-[4.5rem] font-cormorant font-light leading-[1.02] tracking-[-0.035em] text-[#1A1612]">
                  Brows you don't have to{' '}
                  <em className="italic text-[#B8756B]">think about.</em>
                </span>
              </h1>

              {/* Subhead */}
              <motion.p
                className="text-lg md:text-xl text-[#524A43] leading-relaxed max-w-xl mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                523 procedures. A 0.19% complication rate. One artist who treats your face like the one thing she refuses to rush.
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 items-start"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <Link
                  to="/booking"
                  className="group inline-flex items-center gap-3 bg-[#1A1612] hover:bg-[#8F5850] text-[#F6F1EA] px-7 py-4 text-[15px] font-medium transition-all duration-300 hover:shadow-lg"
                >
                  <span>Book your free consultation</span>
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/faq"
                  className="inline-flex items-center gap-2 text-[#524A43] hover:text-[#B8756B] text-[15px] font-medium border-b border-[#524A43] hover:border-[#B8756B] pb-1 transition-colors duration-300"
                >
                  <span>Get the candidate guide</span>
                  <ArrowRight size={14} className="transition-transform duration-200" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Visual — right */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: isHeroLoaded ? 1 : 0, scale: isHeroLoaded ? 1 : 0.98 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <picture>
                  <source media="(max-width: 767px)" srcSet="/2315%20(1).png" />
                  <source media="(min-width: 768px)" srcSet="/2315.png" />
                  <img
                    src="/2315.png"
                    alt="Day 45 healed ombré powder brows by Ink Mugi — permanent makeup studio in Annandale VA Fairfax County"
                    className="absolute inset-0 w-full h-full object-cover"
                    width="1600"
                    height="2000"
                    fetchPriority="high"
                    decoding="async"
                  />
                </picture>
                {/* Caption overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#1A1612]/85 backdrop-blur-sm text-[#FBF8F3] px-4 py-3 text-[10px] uppercase tracking-[0.1em] font-mono">
                  Day 45 healed — client consented
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION C — TRUST BAR
          Blueprint: Full-width dark bar, 4 stats, Gold numerals.
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#1A1612] text-[#FBF8F3]">
        <div className="container-custom py-8 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: '523+', label: 'Procedures completed' },
              { value: '0.19%', label: 'Reported complication rate' },
              { value: 'VA', label: 'Licensed — Board of Barbers & Cosmetology' },
              { value: '100%', label: 'Single-use sterile cartridges' },
            ].map((item, i) => (
              <div key={i} className={`${i > 0 ? 'md:border-l md:border-[#FBF8F3]/15 md:pl-6' : ''}`}>
                <p className="text-3xl md:text-[32px] font-cormorant font-light italic text-[#B8966B] leading-none mb-1">
                  {item.value}
                </p>
                <p className="text-[10px] uppercase tracking-[0.12em] text-[#FBF8F3]/70 font-mono">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION D — HEALED-RESULTS TRIPTYCH
          Blueprint: "The single highest-trust element on the page."
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-[#F6F1EA]">
        <div className="container-custom">
          <AnimatedSection className="mb-12">
            <span className="inline-block text-[#B8756B] tracking-[0.15em] text-[11px] uppercase mb-3 font-mono">
              What "healed" actually looks like
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-cormorant font-light leading-[1.1] tracking-[-0.025em] text-[#1A1612]">
              Fresh-done brows are easy.{' '}
              <em className="italic text-[#B8756B]">Healed brows are the truth.</em>
            </h2>
          </AnimatedSection>

          <AnimatedSection stagger staggerInterval={0.12} className="grid md:grid-cols-3 gap-5">
            {transformations.map((t, index) => (
              <div key={index} className="group relative">
                <div className="aspect-[3/4] overflow-hidden relative">
                  <BeforeAfterSlider
                    beforeImage={t.before}
                    afterImage={t.after}
                    healingLabel={t.healingTimeline}
                  />
                  {/* Tag */}
                  <div className="absolute top-4 left-4 z-10 bg-[#1A1612]/70 backdrop-blur-sm text-[#FBF8F3] px-3 py-1 text-[10px] uppercase tracking-[0.12em] font-mono">
                    {t.tag}
                  </div>
                </div>
                <div className="mt-3 px-1">
                  <p className="text-lg font-cormorant font-normal italic text-[#1A1612] leading-snug">
                    {t.caption}
                  </p>
                </div>
              </div>
            ))}
          </AnimatedSection>

          <AnimatedSection className="mt-10 flex justify-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-[#1A1612] font-medium hover:gap-3 transition-all duration-300 group text-sm"
            >
              <span>View the full healed results gallery</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION E — THE INK MUGI METHOD
          Blueprint: 3-step trademarked process. Authority differentiator.
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-[#F6F1EA] border-t border-[#E6DED3]">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <span className="inline-block text-[#B8756B] tracking-[0.15em] text-[11px] uppercase mb-3 font-mono">
              Our Method
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-cormorant font-light leading-[1.1] tracking-[-0.025em] text-[#1A1612] mb-4">
              Three phases.{' '}
              <em className="italic text-[#B8756B]">No shortcuts.</em>
            </h2>
            <p className="text-base text-[#524A43] leading-relaxed">
              Every client, every time. This is the protocol behind a 0.19% complication rate.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 border-t border-b border-[#E6DED3]">
            {processSteps.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className={`py-10 md:py-12 px-6 md:px-8 ${i > 0 ? 'md:border-l border-t md:border-t-0 border-[#E6DED3]' : ''}`}>
                  <span className="block text-5xl md:text-[64px] font-cormorant font-light italic text-[#B8756B] leading-none mb-4">
                    {item.step}
                  </span>
                  <h3 className="text-xl md:text-2xl font-cormorant font-medium text-[#1A1612] tracking-[-0.015em] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-[#524A43] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION F — MEET THE ARTIST
          Blueprint: Portrait + copy grid. Personal brand = conversions.
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-[#FBF8F3]">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Portrait — left */}
            <AnimatedSection className="lg:col-span-5" variant="slide-right">
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src="https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg"
                    alt="Mugi — licensed permanent makeup artist and founder of Ink Mugi in Annandale, VA"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-[#1A1612]/85 backdrop-blur-sm text-[#FBF8F3] px-4 py-3 text-[10px] uppercase tracking-[0.1em] font-mono">
                  Mugi — founder, Ink Mugi
                </div>
              </div>
            </AnimatedSection>

            {/* Copy — right */}
            <AnimatedSection className="lg:col-span-7" delay={0.2} variant="slide-left">
              <span className="inline-block text-[#B8756B] tracking-[0.15em] text-[11px] uppercase mb-3 font-mono">
                The Artist
              </span>
              <h2 className="text-3xl md:text-4xl font-cormorant font-light leading-[1.1] tracking-[-0.025em] text-[#1A1612] mb-6">
                I won't book you{' '}
                <em className="italic text-[#B8756B]">if you're not right for this.</em>
              </h2>
              <div className="space-y-4 text-[#524A43] leading-relaxed">
                <p>
                  A Virginia-licensed permanent makeup specialist with 523 procedures completed, I apply a methodical protocol to every appointment. Face mapping before design. Design approval before pigment. Healed documentation before portfolio inclusion.
                </p>
                <p>
                  I turn down about 1 in 12 consultations — pregnancy, Accutane, active eczema, specific skin conditions, or unrealistic expectations. Saying no is part of how I stay at 0.19%.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-[#524A43] hover:text-[#B8756B] text-sm font-medium border-b border-[#524A43] hover:border-[#B8756B] pb-1 transition-colors duration-300 group"
                >
                  <span>Read my full story</span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION G — TESTIMONIALS
          Blueprint: Featured quote + 3 concise text cards.
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-[#F6F1EA]">
        <div className="container-custom">
          <AnimatedSection className="mb-12">
            <span className="inline-block text-[#B8756B] tracking-[0.15em] text-[11px] uppercase mb-3 font-mono">
              In their own words
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-cormorant font-light leading-[1.1] tracking-[-0.025em] text-[#1A1612]">
              The consultation is free.{' '}
              <em className="italic text-[#B8756B]">The research is on you.</em>
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Featured testimonial — left */}
            <AnimatedSection className="lg:col-span-7">
              <div className="bg-[#FBF8F3] p-8 md:p-10 h-full flex flex-col justify-between border border-[#E6DED3]">
                <div>
                  <p className="text-2xl md:text-3xl font-cormorant font-normal italic text-[#1A1612] leading-snug mb-8">
                    "{testimonials[0].text}"
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-6 border-t border-[#E6DED3]">
                  <div className="w-11 h-11 rounded-full bg-[#E8D5CF] flex items-center justify-center font-medium text-[#8F5850] text-sm">
                    {getInitials(testimonials[0].name)}
                  </div>
                  <div>
                    <p className="font-medium text-sm text-[#1A1612]">{testimonials[0].name}</p>
                    <p className="text-xs text-[#8A817A] uppercase tracking-[0.08em] font-mono">{testimonials[0].location}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* 3 text reviews — right */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              {testimonials.slice(1).map((t, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="bg-[#FBF8F3] p-6 border-l-2 border-[#B8756B]">
                    <p className="text-sm text-[#524A43] leading-relaxed mb-4">
                      "{t.text}"
                    </p>
                    <p className="text-[10px] text-[#8A817A] uppercase tracking-[0.1em] font-mono">
                      {t.name} — {t.location}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION H — PRICING
          Blueprint: 3-tier transparent pricing on dark background.
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-[#1A1612] text-[#FBF8F3]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <span className="inline-block text-[#E8D5CF] tracking-[0.15em] text-[11px] uppercase mb-3 font-mono">
              Transparent Pricing
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[52px] font-cormorant font-light leading-[1.05] tracking-[-0.025em]">
              Three ways{' '}
              <em className="italic text-[#E8D5CF]">to work with me.</em>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-5 max-w-[1000px] mx-auto">
            {/* Tier 1 — Signature */}
            <AnimatedSection delay={0}>
              <div className="border border-[#FBF8F3]/15 bg-[#FBF8F3]/[0.04] p-8 h-full flex flex-col">
                <h3 className="text-2xl font-cormorant font-normal text-[#FBF8F3] mb-2">Signature Ombré</h3>
                <p className="text-sm text-[#FBF8F3]/70 mb-6 min-h-[42px]">
                  Full mapping + procedure + 6–8 week perfecting session.
                </p>
                <p className="text-[56px] font-cormorant font-light tracking-[-0.03em] leading-none text-[#FBF8F3] mb-1">
                  $850
                </p>
                <p className="text-[11px] uppercase tracking-[0.1em] text-[#FBF8F3]/50 font-mono mb-6">All-inclusive</p>
                <ul className="space-y-0 mb-8 flex-grow">
                  {['40-min mapping consultation', '90-min procedure', '6–8 week touch-up included', 'Aftercare kit provided', 'Color guarantee through perfecting session'].map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 py-3 border-t border-[#FBF8F3]/10 text-sm text-[#FBF8F3]/85">
                      <span className="text-[#B8756B] flex-shrink-0">→</span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/booking"
                  className="inline-flex items-center justify-center gap-2 border border-[#FBF8F3]/30 text-[#FBF8F3] hover:bg-[#FBF8F3] hover:text-[#1A1612] px-6 py-3.5 text-[15px] font-medium transition-all duration-300 w-full"
                >
                  Book consultation
                </Link>
              </div>
            </AnimatedSection>

            {/* Tier 2 — Featured: Signature + Lip Blush */}
            <AnimatedSection delay={0.1}>
              <div className="bg-[#B8756B] p-8 h-full flex flex-col relative">
                <div className="absolute -top-[10px] left-6 bg-[#B8966B] text-[#1A1612] px-3 py-1 text-[10px] uppercase tracking-[0.1em] font-mono font-medium">
                  Most popular
                </div>
                <h3 className="text-2xl font-cormorant font-normal text-[#F6F1EA] mb-2">Signature + Lip Blush</h3>
                <p className="text-sm text-[#F6F1EA]/80 mb-6 min-h-[42px]">
                  Brows and a soft lip tint in one same-day session.
                </p>
                <p className="text-[56px] font-cormorant font-light tracking-[-0.03em] leading-none text-[#F6F1EA] mb-1">
                  $1,450
                </p>
                <p className="text-[11px] uppercase tracking-[0.1em] text-[#E8D5CF] font-mono mb-6">Save $250 vs. separate</p>
                <ul className="space-y-0 mb-8 flex-grow">
                  {['Everything in Signature Ombré', 'Lip blush procedure (2hr)', 'Lip touch-up at 6–8 weeks', 'Single-day or split over 2 visits', '$250 saved vs. booking separately'].map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 py-3 border-t border-[#F6F1EA]/20 text-sm text-[#F6F1EA]">
                      <span className="text-[#F6F1EA] flex-shrink-0">→</span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/booking"
                  className="inline-flex items-center justify-center gap-2 bg-[#F6F1EA] text-[#1A1612] hover:bg-white px-6 py-3.5 text-[15px] font-medium transition-all duration-300 w-full"
                >
                  Book consultation
                </Link>
              </div>
            </AnimatedSection>

            {/* Tier 3 — Annual Color Boost */}
            <AnimatedSection delay={0.2}>
              <div className="border border-[#FBF8F3]/15 bg-[#FBF8F3]/[0.04] p-8 h-full flex flex-col">
                <h3 className="text-2xl font-cormorant font-normal text-[#FBF8F3] mb-2">Annual Color Boost</h3>
                <p className="text-sm text-[#FBF8F3]/70 mb-6 min-h-[42px]">
                  For existing clients. Priority booking, maintenance, continuity.
                </p>
                <p className="text-[56px] font-cormorant font-light tracking-[-0.03em] leading-none text-[#FBF8F3] mb-1">
                  $295
                </p>
                <p className="text-[11px] uppercase tracking-[0.1em] text-[#FBF8F3]/50 font-mono mb-6">Per year</p>
                <ul className="space-y-0 mb-8 flex-grow">
                  {['One 60-min color refresh annually', 'Priority booking (skip the waitlist)', 'Free shape touch-up if needed', '$150 off any additional service', 'For current Ink Mugi clients only'].map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 py-3 border-t border-[#FBF8F3]/10 text-sm text-[#FBF8F3]/85">
                      <span className="text-[#B8756B] flex-shrink-0">→</span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/booking"
                  className="inline-flex items-center justify-center gap-2 border border-[#FBF8F3]/30 text-[#FBF8F3] hover:bg-[#FBF8F3] hover:text-[#1A1612] px-6 py-3.5 text-[15px] font-medium transition-all duration-300 w-full"
                >
                  Book consultation
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION I — LEAD MAGNET / CANDIDATE GUIDE
          Blueprint: Email capture for the 70-80% not ready to book.
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-[#FBF8F3]">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* PDF mockup — left */}
            <AnimatedSection className="lg:col-span-5">
              <div className="bg-[#F6F1EA] border border-[#E6DED3] p-8 md:p-10">
                <p className="text-[10px] uppercase tracking-[0.12em] text-[#B8756B] font-mono mb-6">
                  Ink Mugi / Pre-Consultation Guide
                </p>
                <h3 className="text-2xl md:text-3xl font-cormorant font-light leading-[1.1] text-[#1A1612] mb-6">
                  Is ombré powder brows{' '}
                  <em className="italic text-[#B8756B]">right for you?</em>
                </h3>
                <p className="text-sm text-[#8A817A] font-mono">12 pages · Free · PDF</p>
              </div>
            </AnimatedSection>

            {/* Copy + form — right */}
            <AnimatedSection className="lg:col-span-7" delay={0.15}>
              <span className="inline-block text-[#B8756B] tracking-[0.15em] text-[11px] uppercase mb-3 font-mono">
                Not ready yet?
              </span>
              <h2 className="text-3xl md:text-4xl font-cormorant font-light leading-[1.1] tracking-[-0.025em] text-[#1A1612] mb-5">
                Do the research{' '}
                <em className="italic text-[#B8756B]">before</em> you book.
              </h2>
              <p className="text-[15px] text-[#524A43] leading-relaxed mb-8 max-w-lg">
                12 pages covering: the candidate checklist, full contraindications list, pigment and equipment transparency, what to expect Day 0 through Year 2, cost breakdown, and the 8 questions to ask any PMU artist before committing.
              </p>
              <form
                className="flex flex-col sm:flex-row gap-3 max-w-md mb-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-grow px-4 py-3.5 bg-[#F6F1EA] border border-[#E6DED3] text-[#1A1612] text-[15px] placeholder:text-[#8A817A] focus:outline-none focus:border-[#B8756B] transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-[#1A1612] hover:bg-[#8F5850] text-[#F6F1EA] px-6 py-3.5 text-[15px] font-medium transition-all duration-300 whitespace-nowrap"
                >
                  Send me the guide
                  <ArrowRight size={14} />
                </button>
              </form>
              <p className="text-[10px] uppercase tracking-[0.1em] text-[#8A817A] font-mono">
                No spam. 1 email occasionally. Unsubscribe any time.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION J — FAQ ACCORDION
          Blueprint: 6 questions with FAQPage schema (already above).
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-[#F6F1EA]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection className="mb-10">
              <span className="inline-block text-[#B8756B] tracking-[0.15em] text-[11px] uppercase mb-3 font-mono">
                Common Questions
              </span>
              <h2 className="text-3xl md:text-4xl font-cormorant font-light leading-[1.1] tracking-[-0.025em] text-[#1A1612]">
                Everything you need to know
              </h2>
            </AnimatedSection>

            <div className="space-y-0">
              {faqs.map((faq, i) => (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <div className="border-b border-[#E6DED3]">
                    <button
                      className="w-full flex items-center justify-between py-5 text-left group"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      aria-expanded={openFaq === i}
                    >
                      <span className="text-base font-medium text-[#1A1612] pr-4 group-hover:text-[#B8756B] transition-colors">
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`flex-shrink-0 text-[#8A817A] transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-5 text-[15px] text-[#524A43] leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection className="text-center mt-8">
              <Link
                to="/faq"
                className="inline-flex items-center gap-2 text-[#524A43] hover:text-[#B8756B] transition-colors duration-300 text-sm font-medium group"
              >
                <span>View all 17 questions in the full FAQ</span>
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 8b — COMMON MICROBLADING PROBLEMS (kept for SEO)
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-14 md:py-16 bg-[#FBF8F3]">
        <div className="container-custom max-w-4xl">
          <AnimatedSection className="text-center mb-8">
            <span className="inline-block text-[#B8756B] tracking-[0.15em] text-[11px] uppercase mb-3 font-mono">
              Microblading Issues We Correct
            </span>
            <h2 className="text-2xl md:text-3xl font-cormorant font-light text-[#1A1612] mb-2">
              Common Microblading Problems
            </h2>
            <p className="text-sm text-[#524A43] max-w-xl mx-auto">
              Many clients come to us after experiencing issues with previous microblading. These guides explain what went wrong and how we correct it.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                to: '/microblading-turning-grey',
                title: 'Microblading Turning Grey',
                desc: 'Why pigment shifts to grey or ashy tones — and how correction restores natural warmth.',
              },
              {
                to: '/patchy-microblading',
                title: 'Patchy Microblading',
                desc: 'Causes of uneven healing and how powder brows create consistent, lasting coverage.',
              },
              {
                to: '/microblading-fading-too-fast',
                title: 'Microblading Fading Too Fast',
                desc: 'Skin type, climate, and technique factors that accelerate fading in the DMV.',
              },
              {
                to: '/botched-microblading-fix',
                title: 'Botched Microblading Fix',
                desc: 'How we correct asymmetry, blurred strokes, color shift, and textural damage.',
              },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="bg-[#F6F1EA] p-5 hover:shadow-md transition-shadow group border border-[#E6DED3]"
              >
                <h3 className="font-medium text-[#1A1612] group-hover:text-[#B8756B] transition-colors text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#524A43] leading-relaxed">{item.desc}</p>
                <span className="inline-flex items-center text-xs text-[#B8756B] font-medium mt-2 group-hover:gap-2 transition-all">
                  Read guide <ArrowRight size={12} className="ml-1" />
                </span>
              </Link>
            ))}
          </div>

          <AnimatedSection className="text-center mt-6">
            <Link
              to="/microblading-problems"
              className="inline-flex items-center gap-2 text-[#524A43] hover:text-[#B8756B] transition-colors duration-300 text-sm font-medium group"
            >
              <span>View all microblading problem guides</span>
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 9 — SERVING NORTHERN VIRGINIA (kept for SEO/geo signals)
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-14 md:py-16 bg-[#F6F1EA]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-cormorant font-light text-[#1A1612] mb-2">
              Serving Fairfax County &amp; Northern Virginia
            </h2>
            <p className="text-sm text-[#524A43] max-w-xl mx-auto">
              Our Annandale studio is 15 minutes from Tysons and 25 from downtown DC. Serving communities throughout Fairfax County and Northern Virginia.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-5xl mx-auto mb-8">
            {[
              { label: 'Fairfax County Guide', to: '/permanent-makeup-fairfax-county' },
              { label: 'McLean, VA', to: '/ombre-brows-mclean-va' },
              { label: 'Arlington, VA', to: '/ombre-brows-arlington-va' },
              { label: 'Vienna, VA', to: '/ombre-brows-vienna-va' },
              { label: 'Fairfax, VA', to: '/ombre-brows-fairfax-va' },
              { label: 'Alexandria, VA', to: '/ombre-brows-alexandria-va' },
              { label: 'Tysons, VA', to: '/permanent-makeup-tysons-va' },
              { label: 'Falls Church, VA', to: '/permanent-makeup-falls-church-va' },
              { label: 'Reston, VA', to: '/ombre-brows-reston-va' },
              { label: 'Loudoun County', to: '/ombre-brows-loudoun-county-va' },
              { label: 'Chantilly, VA', to: '/ombre-brows-chantilly-va' },
              { label: 'Centreville, VA', to: '/ombre-brows-centreville-va' },
              { label: 'Herndon, VA', to: '/ombre-brows-herndon-va' },
              { label: 'Woodbridge, VA', to: '/ombre-brows-woodbridge-va' },
              { label: 'Manassas, VA', to: '/ombre-brows-manassas-va' },
              { label: 'Springfield, VA', to: '/permanent-makeup-springfield-va' },
            ].map((city) => (
              <Link
                key={city.label}
                to={city.to}
                className="bg-[#FBF8F3] px-4 py-3 text-center hover:shadow-md transition-shadow group text-sm border border-[#E6DED3]"
              >
                <p className="font-medium text-[#1A1612] group-hover:text-[#B8756B] transition-colors">{city.label}</p>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {[
              { label: 'Ombré Powder Brows', to: '/signature-ombre-brows', sub: 'Signature service' },
              { label: 'Nano Brows', to: '/nano-brows', sub: 'Hair-stroke precision' },
              { label: 'Microblading Correction', to: '/microblading-correction-northern-virginia', sub: 'Fix botched brows' },
              { label: 'Nano vs Microblading', to: '/nano-brows-vs-microblading', sub: 'Cost comparison' },
              { label: 'All Services', to: '/services', sub: 'Complete menu' },
              { label: 'Aftercare Guide', to: '/aftercare-guide', sub: 'Healing protocol' },
              { label: 'Gallery', to: '/gallery', sub: 'Healed results' },
              { label: 'About Mugi', to: '/about', sub: 'Credentials' },
              { label: 'PMU Knowledge Base', to: '/blog', sub: 'Guides & insights' },
              { label: 'Full FAQ', to: '/faq', sub: '17 questions answered' },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="bg-[#FBF8F3] px-4 py-3 text-center hover:shadow-md transition-shadow group border border-[#E6DED3]"
              >
                <p className="font-medium text-[#1A1612] group-hover:text-[#B8756B] transition-colors text-sm">{link.label}</p>
                <p className="text-[10px] text-[#8A817A] mt-0.5">{link.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION K — FINAL CTA
          Blueprint: Full-width dark, centered, calm invitation.
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="final-cta-section" className="py-20 md:py-28 bg-[#1A1612] text-[#FBF8F3]">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <AnimatedSection>
              <span className="inline-block text-[#E8D5CF] tracking-[0.15em] text-[11px] uppercase mb-4 font-mono">
                Currently booking for {bookingMonth}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-cormorant font-light leading-[1.05] tracking-[-0.025em] text-[#F6F1EA] mb-5">
                Ready when you are.
              </h2>
              <p className="text-base text-[#FBF8F3]/60 max-w-xl mx-auto mb-10 leading-relaxed">
                Free 40-minute consultation. No deposit to talk. If we're right for each other, we'll book.
              </p>

              <Link
                to="/booking"
                className="group inline-flex items-center gap-3 bg-[#B8756B] hover:bg-[#8F5850] text-[#F6F1EA] px-9 py-5 text-lg font-medium transition-all duration-300 hover:shadow-lg"
              >
                <span>Book your free consultation</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <div className="mt-10 text-xs text-[#FBF8F3]/40 font-mono uppercase tracking-[0.08em]">
                Ink Mugi · Annandale, Virginia · VA Licensed · © {new Date().getFullYear()}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
