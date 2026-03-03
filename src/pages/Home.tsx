import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { ArrowRight, ArrowDown, Award, Shield, CheckCircle2, Phone, Eye, FileCheck, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

import AnimatedSection from '../components/AnimatedSection';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import InlineFaqAccordion from '../components/InlineFaqAccordion';

const Home: React.FC = () => {
  const [isHeroLoaded, setIsHeroLoaded] = useState(false);

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
      story: 'Brow Restoration',
      technique: 'Ombré Powder',
      healingTimeline: '6 weeks healed',
    },
    {
      before: 'https://live.staticflickr.com/65535/54366013651_f914f378af_c_d.jpg',
      after: 'https://live.staticflickr.com/65535/54366410490_6e3bac2287_c_d.jpg',
      story: 'Powder Correction',
      technique: 'Microshading',
      healingTimeline: '6 weeks healed',
    },
    {
      before: 'https://live.staticflickr.com/65535/54366236564_a0f3a59599_c_d.jpg',
      after: 'https://live.staticflickr.com/65535/54365160327_5c790ba60a_c_d.jpg',
      story: 'Ombré Enhancement',
      technique: 'Ombré Powder',
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
      text: "As an executive, I consulted four artists before choosing Mugi. What set her apart: she showed healed results, not fresh photos. She measured my bone structure and explained why certain shapes would not age well. That level of informed precision is rare.",
      service: 'Microshading',
      healed: '6 weeks healed'
    },
    {
      name: 'Maria S.',
      location: 'Great Falls, VA',
      rating: 5,
      text: "Two previous PMU appointments left me with patchy, uneven brows. Mugi explained the issue — wrong pigment formulation for oily skin — and corrected the approach entirely. Twelve months later, the color is still true. No fading, no patchiness.",
      service: 'Ombré Powder Brows',
      healed: '12 months healed'
    },
    {
      name: 'Sarah M.',
      location: 'Vienna, VA',
      rating: 5,
      text: "The numbing was effective — I would rate discomfort at two out of ten. Mugi communicated through every step and warned me about the flaking phase in advance. At six weeks, the shape is exactly what we agreed on during the design consultation.",
      service: 'Ombré Powder Brows',
      healed: '6 weeks healed'
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation & Face Mapping',
      duration: '30–45 min',
      description: 'Your facial proportions, bone structure, and skin undertone are assessed. A brow shape is designed for your specific anatomy — not a template. You review the design and approve before anything proceeds.',
    },
    {
      step: '02',
      title: 'Design Approval',
      duration: 'Before pigment',
      description: 'The exact shape is drawn on your face. Symmetry, thickness, and arch are adjusted until you confirm approval. No pigment is applied until you have given explicit consent.',
    },
    {
      step: '03',
      title: 'Precision Procedure',
      duration: '2.5–3 hours',
      description: 'Medical-grade numbing is applied in advance. Pigment is deposited through controlled stippling, building gradient density layer by layer. Communication is maintained throughout the procedure.',
    },
    {
      step: '04',
      title: 'Guided Healing & Touch-Up',
      duration: '6–8 weeks',
      description: 'A medical-grade aftercare protocol and 24/7 text access guide you through each healing phase. At 6–8 weeks, a complimentary perfecting session is conducted to ensure ideal density and symmetry.',
    },
  ];

  const faqs = [
    {
      question: 'Will my brows look natural, or is there a risk of them looking overdone?',
      answer: 'Ombré powder brows are specifically designed to mimic the appearance of soft pencil or powder makeup — not solid blocks of color. The gradient builds from an airy, diffused front to a gently defined tail, replicating how natural brows actually grow. Every design is mapped to your bone structure and approved on your face before any pigment is applied. Our portfolio shows exclusively healed results at 6+ weeks so you can see exactly how the technique settles.',
    },
    {
      question: 'What does the healing process look like, and how long does it take?',
      answer: 'Days 1–3: Brows appear bolder and darker than the final result — this is expected. Days 4–10: Light flaking as the upper layer sheds naturally. Days 11–42: True color emerges as pigment settles beneath the skin surface. A complimentary perfecting session at 6–8 weeks ensures ideal density. You receive a medical-grade aftercare kit and 24/7 text access throughout.',
    },
    {
      question: 'Is this procedure safe? What safety standards does Ink Mugi follow?',
      answer: 'Ink Mugi holds full Virginia body art licensure and maintains comprehensive liability insurance. We use hospital-grade sterilization, single-use disposable cartridges, and hypoallergenic vegan pigments. Our documented complication rate across 523+ procedures is 0.19% — a reflection of rigorous technique, client screening, and aftercare guidance. We also decline procedures when medical contraindications are present.',
    },
    {
      question: 'How does ombré powder compare to microblading in Northern Virginia\'s climate?',
      answer: 'Ombré powder brows significantly outperform microblading in humid climates. The stippling technique deposits pigment below the skin surface rather than in shallow incisions, providing more reliable retention. Our data shows an average longevity of 24 months for ombré powder versus 8–12 months for microblading in DMV-area clients — particularly for oily or combination skin types.',
    },
    {
      question: 'How much does it cost, and what is included?',
      answer: 'Our signature ombré powder brows are $600 all-inclusive: design consultation, full procedure, medical-grade aftercare kit, 24/7 healing support, and complimentary 6–8 week perfecting touch-up. No hidden fees. Visit our services page for complete pricing on all techniques.',
    },
    {
      question: 'Who is not a candidate for this procedure?',
      answer: 'We do not perform procedures on clients who are pregnant or nursing, undergoing chemotherapy, have uncontrolled diabetes, exhibit keloid scarring tendencies, or are taking blood-thinning medications. Clients with autoimmune conditions require a consultation for candidacy assessment. Honest screening is part of our commitment to safe outcomes.',
    },
  ];

  return (
    <>
      <SEO
        title="Natural Ombré Powder Brows in Annandale, VA | Fairfax County — Ink Mugi"
        description="Licensed permanent makeup studio in Annandale, Virginia — Fairfax County's documented-outcomes standard for natural ombré powder brows. 523+ procedures. 0.19% complication rate. Healed results verified at 6 weeks. Northern Virginia."
        path="/"
        image="https://www.inkmugi.com/2315.png"
        keywords="ombre powder brows Annandale VA, permanent makeup Fairfax County, natural brows Northern Virginia, licensed PMU artist Virginia, healed brow results, powder brows near me"
      >
        {/* Preload hero LCP image */}
        <link rel="preload" as="image" href="/2315%20(1).png" media="(max-width: 767px)" />
        <link rel="preload" as="image" href="/2315.png" media="(min-width: 768px)" />

        {/* Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HealthAndBeautyBusiness",
            "@id": "https://www.inkmugi.com/#business",
            "name": "Ink Mugi",
            "url": "https://www.inkmugi.com/",
            "logo": "https://www.inkmugi.com/logo.png",
            "image": "https://www.inkmugi.com/2315.png",
            "telephone": "+1-571-283-8228",
            "founder": { "@id": "https://www.inkmugi.com/#mugi" },
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

        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Natural Ombré Powder Brows",
            "description": "Precision ombré powder brows designed for natural healed results. Includes consultation, procedure, aftercare, and perfecting touch-up.",
            "provider": { "@id": "https://www.inkmugi.com/#business" },
            "areaServed": [
              { "@type": "City", "name": "Annandale" },
              { "@type": "AdministrativeArea", "name": "Fairfax County" },
              { "@type": "AdministrativeArea", "name": "Northern Virginia" }
            ],
            "offers": {
              "@type": "Offer",
              "price": "600",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>

        {/* WebSite Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://www.inkmugi.com/#website",
            "url": "https://www.inkmugi.com/",
            "name": "Ink Mugi",
            "publisher": { "@id": "https://www.inkmugi.com/#business" }
          })}
        </script>

        {/* HowTo Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How Ombré Powder Brows Work at Ink Mugi",
            "description": "From consultation through healed result — the complete process for natural ombré powder brows at Ink Mugi in Annandale, VA.",
            "totalTime": "PT56D",
            "estimatedCost": { "@type": "MonetaryAmount", "currency": "USD", "value": "600" },
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
          SECTION 1 — HERO
          Emotional: Beauty opens the door. Authority holds it open.
          SEO: H1 with geo + service. Supporting text with differentiators.
          Tone: 60% Artistic / 20% Safe / 20% Data
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-start md:items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/60 z-10" />
        <div className="absolute inset-0 z-10" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.45) 100%)' }} />

        <picture>
          <source media="(max-width: 767px)" srcSet="/2315%20(1).png" />
          <source media="(min-width: 768px)" srcSet="/2315.png" />
          <img
            src="/2315.png"
            alt="Natural healed ombre powder brows by Ink Mugi — permanent makeup studio in Annandale VA Fairfax County"
            className="absolute inset-0 w-full h-full object-cover object-[50%_70%] md:object-center transition-transform duration-[2000ms]"
            style={{ transform: isHeroLoaded ? 'scale(1)' : 'scale(1.05)' }}
            width="1920"
            height="1080"
            fetchPriority="high"
            decoding="async"
          />
        </picture>

        <div className="container-custom relative z-20 text-white pt-[29vh] pb-16 md:pt-20 md:pb-0">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: isHeroLoaded ? 1 : 0, y: isHeroLoaded ? 0 : 40 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <motion.div
              className="mb-5 md:mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-3 text-[#E6DAD2]/80 tracking-[0.25em] text-xs uppercase font-light">
                <span className="w-10 h-px bg-[#E6DAD2]/40" />
                VA-Licensed · Fairfax County, Virginia
                <span className="w-10 h-px bg-[#E6DAD2]/40" />
              </span>
            </motion.div>

            <h1 className="mb-6 md:mb-8">
              <span className="block text-[2.5rem] md:text-5xl lg:text-6xl xl:text-7xl font-cormorant font-light leading-[1.08] tracking-tight">
                Natural Ombré Powder Brows
              </span>
              <span className="block text-[2.5rem] md:text-5xl lg:text-6xl xl:text-7xl font-cormorant font-medium leading-[1.08] tracking-tight mt-2">
                in <span className="text-[#E6DAD2]">Annandale, Virginia</span>
              </span>
            </h1>

            <motion.div
              className="max-w-2xl mx-auto mb-10 md:mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <p className="text-lg md:text-xl text-white/75 font-light leading-relaxed">
                Precision-mapped to your facial structure. Approved before pigment.
                <br className="hidden sm:block" />
                Evaluated and documented at 6 weeks healed.
              </p>
              <p className="mt-3 text-[0.8rem] tracking-[0.15em] uppercase text-[#E6DAD2]/90 font-normal">
                523 Documented Procedures · 0.19% Complication Rate
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-5 sm:gap-4 justify-center items-center"
            >
              <Link
                to="/booking"
                className="group inline-flex items-center gap-3 bg-[#E6DAD2] hover:bg-white text-[#2D2D2B] px-8 py-4 rounded-full font-medium transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:+15712838228"
                className="group inline-flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                  <Phone size={16} />
                </span>
                <span className="text-sm tracking-wide">(571) 283-8228</span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 2, duration: 0.5 },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
          }}
        >
          <ArrowDown size={24} className="text-white/40" />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 2 — TRUST METRICS BAR
          Emotional: Instant credibility. No scrolling required to feel safe.
          SEO: Data points that differentiate from every competitor.
          Tone: 10% Artistic / 30% Safe / 60% Data
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-6 md:py-8 bg-white border-b border-[#E6DAD2]/30">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {[
              { value: '523+', label: 'Documented Procedures' },
              { value: '0.19%', label: 'Documented Complication Rate', accent: true },
              { value: '6-Week', label: 'Healed-Result Verification' },
              { value: '5.0', label: 'Rating (47+ Reviews)' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <p className={`text-2xl md:text-3xl font-cormorant font-semibold ${item.accent ? 'text-[#9A7B69]' : 'text-[#2D2D2B]'}`}>
                  {item.value}
                </p>
                <p className="text-xs text-[#2D2D2B]/50 mt-1 tracking-wide">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 3 — HEALED RESULTS SHOWCASE
          Emotional: Visual proof that replaces a thousand marketing claims.
          SEO: "healed ombre brow results" content cluster.
          Tone: 70% Artistic / 20% Safe / 10% Data
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="mb-14">
            <div className="max-w-2xl">
              <span className="inline-block text-[#2D2D2B]/40 tracking-[0.2em] text-xs uppercase mb-4">
                Healed Outcomes · Documented
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-cormorant font-medium text-[#2D2D2B] leading-tight mb-5">
                Documented at 6+ weeks healed
              </h2>
              <p className="text-base text-[#2D2D2B]/65 leading-relaxed">
                Every result in this portfolio is evaluated and photographed after the full healing process — six weeks minimum. Fresh-day images are excluded from our documentation. This is the standard.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection stagger staggerInterval={0.12} className="grid md:grid-cols-3 gap-6">
            {transformations.map((t, index) => (
              <div key={index} className="group">
                <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500">
                  <BeforeAfterSlider
                    beforeImage={t.before}
                    afterImage={t.after}
                    healingLabel={t.healingTimeline}
                  />
                </div>
                <div className="mt-4 px-1">
                  <span className="inline-block bg-[#E6DAD2] text-[#2D2D2B] text-[11px] px-3 py-1 rounded-full font-medium tracking-wide mb-1">
                    {t.technique} · {t.healingTimeline}
                  </span>
                  <h3 className="text-lg font-cormorant font-semibold text-[#2D2D2B]">
                    {t.story}
                  </h3>
                </div>
              </div>
            ))}
          </AnimatedSection>

          <AnimatedSection className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-[#2D2D2B] font-medium hover:gap-3 transition-all duration-300 group"
            >
              <span>View the full healed results gallery</span>
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <span className="hidden sm:inline text-[#2D2D2B]/20">|</span>
            <div className="flex gap-3 text-sm">
              <Link to="/gallery?filter=corrections" className="text-[#2D2D2B]/50 hover:text-[#2D2D2B] transition-colors underline underline-offset-4 decoration-[#E6DAD2]">Corrections</Link>
              <Link to="/gallery?filter=nano-brows" className="text-[#2D2D2B]/50 hover:text-[#2D2D2B] transition-colors underline underline-offset-4 decoration-[#E6DAD2]">Nano Brows</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 4 — THE HEALED-FIRST STANDARD
          Emotional: "This studio measures success differently than others."
          SEO: Unique educational content — topical authority builder.
          Tone: 30% Artistic / 40% Safe / 30% Data
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection>
              <span className="inline-block text-[#2D2D2B]/40 tracking-[0.2em] text-xs uppercase mb-4">
                Our Standard
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-cormorant font-medium text-[#2D2D2B] leading-tight mb-6">
                Healed-first is not a marketing phrase.
                <br />
                <span className="text-[#2D2D2B]/50">It is a clinical standard.</span>
              </h2>
              <div className="space-y-4 text-[#2D2D2B]/70 leading-relaxed">
                <p>
                  Pigment shifts, softens, and settles over six to eight weeks. The result you live with is the healed result. That is the only result this studio evaluates, documents, and measures success by.
                </p>
                <p>
                  This standard shapes every protocol: pigment depth, density selection, undertone calibration, and the design approval process. Parameters are chosen for healed outcomes — not for how they photograph on day one.
                </p>
                <p>
                  Across 523+ documented procedures, this approach has produced a 0.19% complication rate. That number reflects rigorous technique, honest client screening, and a willingness to decline procedures when safety warrants it.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/signature-ombre-brows"
                  className="inline-flex items-center gap-2 text-[#2D2D2B] font-medium hover:gap-3 transition-all duration-300 group text-sm"
                >
                  <span>How ombré powder brows work</span>
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <span className="hidden sm:inline text-[#2D2D2B]/20">|</span>
                <Link
                  to="/aftercare-guide"
                  className="inline-flex items-center gap-2 text-[#2D2D2B]/60 hover:text-[#2D2D2B] font-medium transition-all duration-300 group text-sm"
                >
                  <span>Read the aftercare guide</span>
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={1.5}>
              <div className="space-y-4">
                {[
                  { icon: FileCheck, title: 'Design Approved Before Pigment', desc: 'The brow shape is mapped to your bone structure and drawn on your face. You see it, adjust it, and approve it. Nothing permanent begins without your explicit confirmation.' },
                  { icon: Eye, title: 'Healed Portfolio Standard', desc: 'Every result in our gallery is photographed at 6+ weeks — after the healing process reveals the true outcome. No fresh glamor shots. No filters.' },
                  { icon: Shield, title: '0.19% Complication Rate', desc: 'Across 523+ procedures. The result of precise technique, proper screening, comprehensive aftercare, and a practice that declines procedures when safety requires it.' },
                  { icon: Award, title: 'Virginia Licensed & Insured', desc: 'Full body art licensure, professional liability insurance, hospital-grade sterilization, and hypoallergenic vegan pigments tested for skin reactivity.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start bg-[#F9F7F5] rounded-xl p-5">
                    <div className="w-10 h-10 bg-[#E6DAD2] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon size={18} className="text-[#2D2D2B]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2D2D2B] mb-1 text-sm">{item.title}</h3>
                      <p className="text-sm text-[#2D2D2B]/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 5 — THE PROCESS
          Emotional: Clarity dissolves fear. Predictability builds trust.
          SEO: Process content for HowTo schema + long-tail queries.
          Tone: 20% Artistic / 50% Safe / 30% Data
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-[#2D2D2B] text-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-[#E6DAD2]/60 tracking-[0.2em] text-xs uppercase mb-4">
              The Process
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-cormorant font-medium leading-tight mb-5">
              From assessment to healed outcome.
              <br />
              <span className="text-[#E6DAD2]">Every step documented in advance.</span>
            </h2>
            <p className="text-base text-white/50 max-w-2xl mx-auto leading-relaxed">
              The protocol is designed so you understand precisely what occurs at each stage — no ambiguity, no surprises. Clarity and informed consent are maintained throughout.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            {processSteps.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.8}>
                <div className={`flex gap-6 ${i < processSteps.length - 1 ? 'pb-10 border-l border-[#E6DAD2]/20 ml-3' : 'ml-3'} pl-8 relative`}>
                  <div className="absolute -left-[10px] top-0 w-5 h-5 rounded-full bg-[#E6DAD2] flex items-center justify-center">
                    <span className="text-[9px] font-bold text-[#2D2D2B]">{item.step}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-2">
                      <h3 className="text-lg font-medium text-white">{item.title}</h3>
                      <span className="text-xs text-[#E6DAD2]/60 font-medium">{item.duration}</span>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 text-[#E6DAD2]/70 hover:text-[#E6DAD2] transition-colors duration-300 text-sm font-medium"
            >
              <span>Questions about the process? Read the full FAQ</span>
              <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 6 — THE ARTIST
          Emotional: Human connection — brief, warm, credentialed.
          SEO: Person entity + expertise signals.
          Tone: 50% Artistic / 30% Safe / 20% Data
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-14 items-center">
            <AnimatedSection className="lg:col-span-5" variant="slide-right">
              <div className="relative">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg"
                    alt="Mugi — licensed permanent makeup artist at Ink Mugi studio in Annandale VA"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <motion.div
                  className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-lg p-5 max-w-[200px] z-10"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Award size={18} className="text-[#9A7B69]" />
                    <span className="text-2xl font-cormorant font-semibold text-[#2D2D2B]">523+</span>
                  </div>
                  <p className="text-xs text-[#2D2D2B]/60">Documented procedures with healed-result tracking</p>
                </motion.div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="lg:col-span-7" delay={1.5} variant="slide-left">
              <span className="inline-block text-[#2D2D2B]/40 tracking-[0.2em] text-xs uppercase mb-4">
                The Specialist
              </span>
              <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-[#2D2D2B] leading-tight mb-6">
                Measured precision. Documented outcomes.
                <br />
                <span className="text-[#2D2D2B]/50">Designed to be undetectable.</span>
              </h2>
              <div className="space-y-4 text-[#2D2D2B]/70 leading-relaxed">
                <p>
                  A Virginia-licensed permanent makeup specialist with 523+ documented procedures, Mugi applies a methodical protocol to every appointment. Face mapping before design. Design approval before pigment. Healed documentation before portfolio inclusion. Each stage is reviewed, not rushed.
                </p>
                <p>
                  Every session at the Annandale studio is private, unrushed, and structured for clinical clarity. Mugi works primarily with women who value discretion and predictability — professionals and individuals who require natural results without visible evidence of a procedure.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-5 mt-8 mb-8">
                {[
                  { icon: Eye, title: 'Precision Protocol', desc: 'A methodical standard refined across 523+ documented procedures.' },
                  { icon: Clock, title: 'Private Sessions', desc: 'Unrushed appointments structured for comfort and clarity.' },
                  { icon: Shield, title: 'Documented Safety', desc: 'VA-licensed, insured, with verified healed outcomes.' },
                ].map((item, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-12 h-12 rounded-full bg-[#F7EDE6] flex items-center justify-center mx-auto mb-3 group-hover:bg-[#E6DAD2] transition-colors duration-300">
                      <item.icon size={20} className="text-[#2D2D2B]" />
                    </div>
                    <h4 className="font-medium text-[#2D2D2B] text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-[#2D2D2B]/50">{item.desc}</p>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[#2D2D2B] font-medium hover:gap-3 transition-all duration-300 group text-sm"
              >
                <span>Read the full story and credentials</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 7 — CLIENT PERSPECTIVES
          Emotional: Validation from real people. Not hyped reviews — candid accounts.
          SEO: Review schema + trust signals.
          Tone: 40% Artistic / 40% Safe / 20% Data
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="mb-14">
            <div className="max-w-2xl">
              <span className="inline-block text-[#2D2D2B]/40 tracking-[0.2em] text-xs uppercase mb-4">
                Client Perspectives
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-cormorant font-medium text-[#2D2D2B] leading-tight mb-4">
                What clients describe — in their own words
              </h2>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#9A7B69] fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-[#2D2D2B]/50">5.0 average across 47+ reviews</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Featured testimonial */}
          <AnimatedSection className="mb-8">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <p className="text-xl md:text-2xl font-cormorant text-[#2D2D2B] leading-relaxed mb-6">
                    "{testimonials[0].text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#F7EDE6] flex items-center justify-center font-medium text-[#2D2D2B] text-sm">
                      {getInitials(testimonials[0].name)}
                    </div>
                    <div>
                      <h4 className="font-medium text-[#2D2D2B] text-sm">{testimonials[0].name}</h4>
                      <p className="text-xs text-[#2D2D2B]/50">{testimonials[0].location} · {testimonials[0].healed}</p>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="bg-[#F9F7F5] rounded-xl p-5 text-center">
                    <p className="text-xs text-[#2D2D2B]/40 mb-1 tracking-wide uppercase">Procedure</p>
                    <p className="text-sm font-medium text-[#2D2D2B] mb-3">{testimonials[0].service}</p>
                    <p className="text-xs text-[#2D2D2B]/40 mb-1 tracking-wide uppercase">Status</p>
                    <p className="text-sm font-medium text-[#9A7B69]">{testimonials[0].healed}</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Review grid */}
          <AnimatedSection stagger staggerInterval={0.1} className="grid md:grid-cols-3 gap-6">
            {testimonials.slice(1).map((t, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm h-full flex flex-col">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-[#9A7B69] fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#2D2D2B]/70 text-sm leading-relaxed flex-grow mb-5">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#E6DAD2]/20">
                  <div className="w-9 h-9 rounded-full bg-[#F7EDE6] flex items-center justify-center text-xs font-medium text-[#2D2D2B]">
                    {getInitials(t.name)}
                  </div>
                  <div>
                    <h4 className="font-medium text-xs text-[#2D2D2B]">{t.name}</h4>
                    <p className="text-[10px] text-[#2D2D2B]/40">{t.location} · {t.healed}</p>
                  </div>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 8 — FAQ PREVIEW
          Emotional: Each FAQ dissolves one specific fear. 
          SEO: FAQ schema + long-tail keyword capture.
          Tone: 20% Artistic / 40% Safe / 40% Data
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <InlineFaqAccordion
                faqs={faqs}
                title="Common Questions About Permanent Makeup"
                subtitle="Specific, informed answers to the questions that matter most"
                maxVisible={6}
              />
            </AnimatedSection>

            <AnimatedSection className="text-center mt-8">
              <Link
                to="/faq"
                className="inline-flex items-center gap-2 text-[#2D2D2B]/60 hover:text-[#2D2D2B] transition-colors duration-300 text-sm font-medium group"
              >
                <span>View all 17 questions in the full FAQ</span>
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 9 — SERVING NORTHERN VIRGINIA
          Emotional: "This studio is nearby and built for my community."
          SEO: Internal linking hub + geo-signal distribution.
          Tone: 10% Artistic / 20% Safe / 70% Data
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-14 md:py-16 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-cormorant font-medium text-[#2D2D2B] mb-2">
              Serving Fairfax County &amp; Northern Virginia
            </h2>
            <p className="text-sm text-[#2D2D2B]/50 max-w-xl mx-auto">
              Our Annandale studio serves communities throughout Fairfax County and Northern Virginia.
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
            ].map((city) => (
              <Link
                key={city.label}
                to={city.to}
                className="bg-white rounded-lg px-4 py-3 text-center hover:shadow-md transition-shadow group text-sm"
              >
                <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">{city.label}</p>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {[
              { label: 'Ombré Powder Brows', to: '/signature-ombre-brows', sub: 'Signature service' },
              { label: 'Nano Brows', to: '/nano-brows', sub: 'Hair-stroke precision' },
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
                className="bg-white rounded-lg px-4 py-3 text-center hover:shadow-md transition-shadow group"
              >
                <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors text-sm">{link.label}</p>
                <p className="text-[10px] text-[#2D2D2B]/40 mt-0.5">{link.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 10 — FINAL CTA
          Emotional: Calm invitation. Not urgency. Not sales pressure.
          Tone: 40% Artistic / 40% Safe / 20% Data
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/2315.png')" }}
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-cormorant font-medium leading-tight mb-6">
                When you are ready,
                <br />
                <span className="text-[#E6DAD2]">we are here.</span>
              </h2>

              <p className="text-base text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
                A consultation is an assessment — not a commitment. We evaluate your goals, review documented outcomes, and determine whether this procedure is appropriate for you. If it is not, we will tell you directly. If it is, we proceed with precision.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                <Link
                  to="/booking"
                  className="group inline-flex items-center gap-3 bg-[#E6DAD2] hover:bg-white text-[#2D2D2B] px-10 py-5 rounded-full font-medium transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                >
                  <span>Schedule a Consultation</span>
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <span className="text-white/30">or</span>
                <a
                  href="tel:+15712838228"
                  className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 text-sm"
                >
                  <Phone size={14} />
                  <span>(571) 283-8228</span>
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-xs text-white/40">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-[#E6DAD2]/50" />
                  Fairfax County &amp; Northern Virginia
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-[#E6DAD2]/50" />
                  By consultation only
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-[#E6DAD2]/50" />
                  VA Licensed &amp; Insured
                </span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;