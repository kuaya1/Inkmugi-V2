import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  CheckCircle2,
  Droplets,
  Eye,
  FileText,
  Microscope,
  Shield,
} from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import AuthorBlock from '../components/AuthorBlock';

export default function Authority() {
  const authorityLines = [
    'Most complications are preventable with correct planning.',
    'The result is determined before the procedure begins.',
    'Technique matters, but judgment matters more.',
  ];

  const fearFramework = [
    {
      title: 'Pain',
      explanation:
        'Pain usually becomes a problem when the skin is overworked, passes are too aggressive, or saturation is forced instead of built gradually.',
      control:
        'Numbing timing, machine settings, and pass count are controlled so pigment is layered conservatively rather than pushed into irritated tissue.',
      confidence:
        'A well-executed ombré powder brow procedure should feel controlled and tolerable, not traumatic.',
    },
    {
      title: 'Unnatural Results',
      explanation:
        'Brows look artificial when shape is templated, fronts are packed too heavily, or pigment is chosen for how it looks fresh instead of how it heals.',
      control:
        'Mapping is done to facial structure first, undertone is matched before color is selected, and the front of the brow is kept intentionally lighter than the body and tail.',
      confidence:
        'The goal is not a dramatic day-one reveal. The goal is a brow that looks proportionate after healing in normal light.',
    },
    {
      title: 'Safety Risk',
      explanation:
        'Safety issues usually come from preventable failures: poor screening, weak sterilization discipline, reused components, or unsuitable pigment choices.',
      control:
        'Ink Mugi uses single-use, individually packaged needles and cartridges, EPA-registered disinfection, a sterile field, certified pigments, and documented candidacy screening.',
      confidence:
        'Safety is procedural. It is created by controls that are repeatable and verifiable at every appointment.',
    },
    {
      title: 'Regret',
      explanation:
        'Most regret is not about the concept of permanent makeup. It is about the wrong candidate, the wrong technique, or the wrong expectations going in.',
      control:
        'Consultations are used to review brow history, skin behavior, medical considerations, healed examples, and whether ombré powder brows are actually the right choice.',
      confidence:
        'If the procedure should be delayed or declined, that is part of the standard rather than a lost sale.',
    },
  ];

  const methodSteps = [
    {
      icon: Eye,
      title: '1. Mapping',
      risk:
        'This step reduces asymmetry, poor balance, and regret before anything permanent happens.',
      control:
        'Brow start, apex, tail, thickness, and facial harmony are evaluated on the face itself rather than chosen from a template or trend reference.',
      confidence:
        'You see the structure first. Pigment comes later.',
    },
    {
      icon: Droplets,
      title: '2. Pigment Matching',
      risk:
        'Poor pigment decisions are one of the fastest ways to create grey, orange, flat, or overly dense healed brows.',
      control:
        'Pigment is selected by undertone, skin type, existing brow hair, prior PMU history, and expected healing behavior rather than by what looks flattering in the bottle.',
      confidence:
        'Color is chosen for healed stability, not fresh intensity.',
    },
    {
      icon: Microscope,
      title: '3. Layered Shading',
      risk:
        'Heavy saturation, blurred edges, and extended irritation usually come from moving too fast or depositing too much too early.',
      control:
        'Pigment is built in measured layers so density stays soft at the front, structured through the body, and controlled at the tail without overworking the skin.',
      confidence:
        'The goal is even healing, not maximum darkness on day one.',
    },
  ];

  const dataPoints = [
    {
      value: '523+',
      title: 'Documented Procedures',
      detail:
        'This is not just volume. It means enough tracked work to recognize patterns in retention, undertone shift, oily skin behavior, prior microblading, and correction needs.',
    },
    {
      value: '0.19%',
      title: 'Documented Complication Rate',
      detail:
        'On this site, the number is tied to tracked healing outcomes and follow-up, not to how brows looked immediately after the appointment.',
    },
    {
      value: '6+ Weeks',
      title: 'Healed Review Standard',
      detail:
        'Fresh permanent makeup always looks darker and sharper than the final result. Ink Mugi evaluates the work after healing because that is the result the client actually lives with.',
    },
    {
      value: 'Annandale, VA',
      title: 'Regional Context',
      detail:
        'Northern Virginia humidity, oil production, commute-heavy lifestyles, and prior microblading history all influence how permanent makeup performs here.',
    },
  ];

  const transparencyStandards = [
    {
      icon: Award,
      title: 'Licensing & Credentials',
      detail:
        'Virginia Permanent Cosmetic Tattooer License #1231002471. Bloodborne pathogens training is renewed annually. Professional liability coverage is maintained as part of studio risk control.',
    },
    {
      icon: Shield,
      title: 'Sterile Setup',
      detail:
        'Single-use, individually packaged needles and cartridges are used for every client. Surfaces are disinfected with EPA-registered CaviWipes, and sterile-field discipline is maintained throughout the procedure.',
    },
    {
      icon: Droplets,
      title: 'Pigment Standards',
      detail:
        'Pigments are vegan, gamma-ray sterilized, hypoallergenic, and sourced from certified suppliers. They are chosen for permanent makeup performance and healed color stability rather than marketing claims.',
    },
    {
      icon: FileText,
      title: 'Candidacy Screening',
      detail:
        'Pregnancy, nursing, chemotherapy, uncontrolled diabetes, keloid tendency, blood-thinning medication use, autoimmune considerations, and irritated brow-area skin all require review before approval.',
    },
  ];

  const supportingReferences = [
    {
      icon: BarChart3,
      title: 'PMU Data & Longevity Guide',
      description:
        'For clients worried about fading too quickly or paying for a procedure that does not hold. This explains how retention is tracked across 523+ cases.',
      link: '/pmu-data-guide',
      tag: 'Longevity',
    },
    {
      icon: Shield,
      title: 'Permanent Makeup Safety in the DMV',
      description:
        'For clients focused on infection control, pigment safety, and studio standards. This expands the sterile protocol and screening process in detail.',
      link: '/permanent-makeup-safety-dmv',
      tag: 'Safety',
    },
    {
      icon: BookOpen,
      title: 'PMU Myths vs. Facts',
      description:
        'For clients trying to separate category myths from actual healing behavior, especially around pain, fading, and what permanent makeup looks like healed.',
      link: '/pmu-myths-facts',
      tag: 'Clarity',
    },
    {
      icon: Microscope,
      title: 'Climate Performance Analysis',
      description:
        'For Northern Virginia clients comparing ombré powder brows against microblading. This explains why humidity and oil production change outcomes.',
      link: '/climate-performance-analysis',
      tag: 'Regional',
    },
  ];

  return (
    <>
      <SEO
        title="Ombré Powder Brows Standards & Safety | Ink Mugi Annandale VA"
        description="How Ink Mugi controls risk in permanent makeup: 523+ documented procedures, 0.19% complication rate, healed-first review, sterile protocol, and the Ink Mugi Method for ombré powder brows in Northern Virginia."
        path="/authority"
        keywords="ombré powder brows Annandale VA, permanent makeup Northern Virginia, ombre powder brows safety, permanent makeup standards, healed results ombre powder brows, Ink Mugi method, Virginia licensed cosmetic tattooer"
      >
        <meta name="geo.region" content="US-VA" />
        <meta name="geo.placename" content="Annandale" />
        <meta name="geo.position" content="38.8304;-77.1964" />
        <meta name="ICBM" content="38.8304, -77.1964" />
        <meta name="author" content="Mugi, Virginia Licensed Permanent Cosmetic Tattooer" />
        <meta name="service-area" content="Annandale VA, Fairfax County, Arlington, Alexandria, Northern Virginia" />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Ink Mugi Authority Standards',
            description:
              'Authority page explaining how Ink Mugi controls risk in ombre powder brows and permanent makeup through healed-first documentation, sterile protocol, and treatment planning.',
            url: 'https://inkmugi.com/authority',
            isPartOf: { '@id': 'https://inkmugi.com/#website' },
            about: { '@id': 'https://inkmugi.com/#business' },
            author: { '@id': 'https://inkmugi.com/#mugi' },
            hasPart: supportingReferences.map((reference) => ({
              '@type': 'Article',
              name: reference.title,
              url: `https://inkmugi.com${reference.link}`,
              description: reference.description,
            })),
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://inkmugi.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Authority',
                item: 'https://inkmugi.com/authority',
              },
            ],
          })}
        </script>
      </SEO>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO — Split-weight headline, CTA above fold, trust metrics strip
          Visual: Clinical precision. Radial glow for subtle depth.
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative bg-[#2D2D2B] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(230,218,210,0.06)_0%,_transparent_60%)]" />

        <div className="relative container-custom max-w-6xl pt-28 md:pt-40 lg:pt-44 pb-20 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-8">
              <span className="inline-flex items-center gap-3 text-[#E6DAD2]/65 tracking-[0.25em] text-xs uppercase font-light">
                <span className="w-10 h-px bg-[#E6DAD2]/30" />
                Authority Standards · Annandale, Virginia
                <span className="w-10 h-px bg-[#E6DAD2]/30" />
              </span>
            </div>

            <h1 className="max-w-5xl">
              <span className="block text-[2.75rem] md:text-6xl lg:text-7xl font-cormorant font-light leading-[1.08] tracking-tight">
                How risk is controlled
              </span>
              <span className="block text-[2.75rem] md:text-6xl lg:text-7xl font-cormorant font-medium leading-[1.08] tracking-tight mt-2">
                <span className="text-[#E6DAD2]">before permanent makeup begins.</span>
              </span>
            </h1>

            <motion.p
              className="mt-8 max-w-3xl text-lg md:text-xl text-white/55 leading-relaxed font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              This page explains how Ink Mugi approaches ombré powder brows in Northern Virginia: facial mapping, undertone-based pigment matching, layered shading, sterile setup, and healed-result review. It is not a service pitch. It is a risk-control explanation for clients considering permanent makeup in Annandale, VA.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col sm:flex-row items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a
                href="https://booksy.com/en-us/857522_ink-mugi-beauty_permanent-makeup_10184_annandale#ba_s=seo"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-[#E6DAD2] px-8 py-4 text-[#2D2D2B] font-medium transition-all duration-500 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
              >
                <span>Request a Consultation Review</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <Link
                to="/signature-ombre-brows"
                className="group inline-flex items-center gap-3 text-white/55 hover:text-white transition-colors duration-300 py-4"
              >
                <span className="text-sm tracking-wide">Read the Ombré Powder Brow Standard</span>
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid gap-4 md:grid-cols-3 mt-16 md:mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {authorityLines.map((line) => (
              <div key={line} className="flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-5">
                <CheckCircle2 size={16} className="text-[#E6DAD2]/50 mt-0.5 flex-shrink-0" />
                <p className="text-sm md:text-[15px] text-white/65 leading-relaxed">{line}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Trust Metrics Strip ── */}
        <div className="relative border-t border-white/[0.06]">
          <div className="container-custom max-w-6xl py-10 md:py-14">
            <div className="grid grid-cols-3 gap-6 md:gap-16">
              {[
                { value: '523+', label: 'Tracked procedures informing judgment' },
                { value: '0.19%', label: 'Documented complication rate tied to healing' },
                { value: '6+ weeks', label: 'Minimum healed-result review standard' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-3xl md:text-5xl lg:text-6xl font-cormorant font-semibold text-[#E6DAD2] leading-none">
                    {item.value}
                  </div>
                  <p className="text-[11px] md:text-xs text-white/35 mt-3 leading-snug tracking-wide uppercase">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          RISK ARCHITECTURE — Numbered cards with progressive left-border
          Visual: Each card reads as a structured risk-control unit.
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-custom max-w-6xl">
          <AnimatedSection className="max-w-3xl mb-16">
            <span className="inline-flex rounded-full bg-[#F7EDE6] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#2D2D2B]/50 mb-6">
              Trust Engineering
            </span>
            <h2 className="text-3xl md:text-[2.75rem] lg:text-5xl font-cormorant font-medium text-[#2D2D2B] leading-[1.12]">
              The four risks clients are actually trying to avoid.
            </h2>
            <p className="mt-5 text-base text-[#2D2D2B]/55 leading-relaxed max-w-2xl">
              Pain, unnatural results, safety risk, and regret usually come from predictable failures in planning, materials, or execution. Each of these can be reduced when the process is disciplined enough.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2">
            {fearFramework.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.8}>
                <div className="group h-full rounded-2xl border border-[#E6DAD2]/20 bg-gradient-to-b from-white to-[#FDFCFB] p-7 md:p-8 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-[#E6DAD2]/40">
                  <div className="flex items-center gap-4 mb-7">
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#2D2D2B] text-[#E6DAD2] text-sm font-cormorant font-semibold">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-2xl md:text-[1.65rem] font-cormorant font-medium text-[#2D2D2B]">
                      {item.title}
                    </h3>
                  </div>

                  <div className="space-y-5">
                    <div className="pl-4 border-l-2 border-[#E6DAD2]/20">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#2D2D2B]/30 mb-1.5 font-medium">Risk</p>
                      <p className="text-sm leading-relaxed text-[#2D2D2B]/60">{item.explanation}</p>
                    </div>
                    <div className="pl-4 border-l-2 border-[#E6DAD2]/45">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#2D2D2B]/30 mb-1.5 font-medium">Control</p>
                      <p className="text-sm leading-relaxed text-[#2D2D2B]/65">{item.control}</p>
                    </div>
                    <div className="pl-4 border-l-2 border-[#2D2D2B]/15">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#2D2D2B]/30 mb-1.5 font-medium">Confidence</p>
                      <p className="text-sm leading-relaxed text-[#2D2D2B]/75 font-medium">{item.confidence}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          THE INK MUGI METHOD — Proprietary process visualization
          Visual: Step indicators with connecting line, engineering diagram feel.
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#F9F7F5] py-20 md:py-28">
        <div className="container-custom max-w-6xl">
          <AnimatedSection className="max-w-3xl mb-16">
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#2D2D2B]/50 border border-[#E6DAD2]/25 mb-6">
              The Ink Mugi Method
            </span>
            <h2 className="text-3xl md:text-[2.75rem] lg:text-5xl font-cormorant font-medium text-[#2D2D2B] leading-[1.12]">
              A repeatable sequence for ombré powder brows.
            </h2>
            <p className="mt-5 text-base text-[#2D2D2B]/55 leading-relaxed max-w-2xl">
              Most complications are preventable with correct planning. The method below is designed to reduce the common causes of disappointment before they become visible in the healed result.
            </p>
          </AnimatedSection>

          {/* Process Visualization */}
          <div className="relative">
            {/* Connecting line — desktop only */}
            <div className="hidden lg:block absolute top-7 left-[calc(16.67%+1.75rem)] right-[calc(16.67%+1.75rem)] h-px bg-[#E6DAD2]/40 z-0" />

            <div className="grid gap-10 lg:grid-cols-3 lg:gap-6">
              {methodSteps.map((step, i) => (
                <AnimatedSection key={step.title} delay={i * 1.2}>
                  <div className="h-full flex flex-col">
                    {/* Step indicator */}
                    <div className="flex items-center gap-4 mb-8 lg:mb-10">
                      <div className="relative z-10 w-14 h-14 rounded-full bg-[#2D2D2B] flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
                        <span className="text-xl font-cormorant font-semibold text-[#E6DAD2]">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                      {i < methodSteps.length - 1 && (
                        <div className="lg:hidden flex-1 h-px bg-[#E6DAD2]/30" />
                      )}
                    </div>

                    {/* Step card */}
                    <div className="flex-1 rounded-2xl bg-white border border-[#E6DAD2]/20 p-7 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-shadow duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
                      <div className="w-12 h-12 rounded-xl bg-[#F7EDE6] flex items-center justify-center mb-6">
                        <step.icon size={22} className="text-[#2D2D2B]/80" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-cormorant font-medium text-[#2D2D2B] mb-6">
                        {step.title}
                      </h3>
                      <div className="space-y-5">
                        <div className="pl-4 border-l-2 border-[#E6DAD2]/20">
                          <p className="text-[10px] uppercase tracking-[0.2em] text-[#2D2D2B]/30 mb-1.5 font-medium">Risk</p>
                          <p className="text-sm leading-relaxed text-[#2D2D2B]/60">{step.risk}</p>
                        </div>
                        <div className="pl-4 border-l-2 border-[#E6DAD2]/45">
                          <p className="text-[10px] uppercase tracking-[0.2em] text-[#2D2D2B]/30 mb-1.5 font-medium">Control</p>
                          <p className="text-sm leading-relaxed text-[#2D2D2B]/65">{step.control}</p>
                        </div>
                        <div className="pl-4 border-l-2 border-[#2D2D2B]/15">
                          <p className="text-[10px] uppercase tracking-[0.2em] text-[#2D2D2B]/30 mb-1.5 font-medium">Confidence</p>
                          <p className="text-sm leading-relaxed text-[#2D2D2B]/75 font-medium">{step.confidence}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Method callout */}
          <AnimatedSection className="mt-12">
            <div className="rounded-2xl bg-[#2D2D2B] px-8 py-8 md:px-10 md:py-10">
              <p className="text-xl md:text-2xl font-cormorant font-medium text-[#E6DAD2] leading-snug">
                Technique matters, but judgment matters more.
              </p>
              <p className="mt-3 text-white/55 leading-relaxed max-w-3xl">
                Premium permanent makeup is not defined by the moment pigment touches the skin. It is defined by planning time, restraint, sterile materials, conservative execution, and healed-result follow-up. That is what premium pricing is actually paying for.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          MID-PAGE CTA — Conversion checkpoint between content chapters
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#2D2D2B] border-y border-[#E6DAD2]/[0.08]">
        <div className="container-custom max-w-5xl py-14 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <p className="text-lg md:text-xl font-cormorant font-medium text-white leading-snug">
                Ready to find out if you are a candidate?
              </p>
              <p className="mt-1.5 text-sm text-white/40">
                Consultations begin with a candidacy assessment, not a sales pitch.
              </p>
            </div>
            <a
              href="https://booksy.com/en-us/857522_ink-mugi-beauty_permanent-makeup_10184_annandale#ba_s=seo"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-[#E6DAD2] px-7 py-3.5 text-[#2D2D2B] text-sm font-medium transition-all duration-500 hover:bg-white hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)] flex-shrink-0"
            >
              <span>Request a Consultation</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          DATA AUTHORITY — Oversized numbers with supporting narrative
          Visual: Each data point is a scannable row with dramatic typography.
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-custom max-w-6xl">
          <AnimatedSection className="mb-16">
            <span className="inline-flex rounded-full bg-[#F7EDE6] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#2D2D2B]/50 mb-6">
              Data Authority
            </span>
            <h2 className="text-3xl md:text-[2.75rem] lg:text-5xl font-cormorant font-medium text-[#2D2D2B] leading-[1.12] max-w-3xl">
              What 523+ and 0.19% actually mean.
            </h2>
          </AnimatedSection>

          {/* Data Points — Oversized numbers with context */}
          <div className="divide-y divide-[#E6DAD2]/20">
            {dataPoints.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.6}>
                <div className="grid md:grid-cols-[280px_1fr] gap-4 md:gap-12 py-10 md:py-12 first:pt-0 last:pb-0 items-start">
                  <div>
                    <div className="text-5xl md:text-7xl font-cormorant font-semibold text-[#2D2D2B] leading-none tracking-tight">
                      {item.value}
                    </div>
                    <h3 className="mt-3 text-xs font-medium text-[#2D2D2B]/40 uppercase tracking-[0.15em]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-base text-[#2D2D2B]/60 leading-relaxed md:pt-4">
                    {item.detail}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Narrative context */}
          <AnimatedSection className="mt-16">
            <div className="max-w-3xl space-y-5 text-[#2D2D2B]/55 leading-relaxed border-l-2 border-[#E6DAD2]/25 pl-6">
              <p>
                523+ procedures does not mean every case is identical. It means enough tracked work has been seen to identify patterns in oily skin, undertone shift, previous microblading, healing speed, retention, and when a client should be redirected to a different plan.
              </p>
              <p>
                The 0.19% figure is a documented complication rate across tracked procedures. On this page, that number is tied to healing and follow-up rather than to how brows looked immediately after the appointment. It is useful only because it is connected to process.
              </p>
              <p>
                The number does not mean zero risk. It means risk is tracked, reviewed, and reduced through screening, sterile protocol, conservative technique, and the willingness to delay or decline unsuitable cases. Most complications are not random. They are usually the result of poor planning, unsuitable candidacy, or excessive trauma to the skin.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SAFETY & TRANSPARENCY — Refined icon cards
          Visual: Larger icons, generous padding, subtle hover.
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#F9F7F5] py-20 md:py-28">
        <div className="container-custom max-w-6xl">
          <AnimatedSection className="max-w-3xl mb-16">
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#2D2D2B]/50 border border-[#E6DAD2]/25 mb-6">
              Safety & Transparency
            </span>
            <h2 className="text-3xl md:text-[2.75rem] lg:text-5xl font-cormorant font-medium text-[#2D2D2B] leading-[1.12]">
              What is used, what is documented, and what is not left to assumption.
            </h2>
            <p className="mt-5 text-base text-[#2D2D2B]/55 leading-relaxed max-w-2xl">
              &ldquo;Safe and effective&rdquo; is not useful language unless the controls are visible. These are the permanent makeup standards used in the Annandale, VA studio.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2">
            {transparencyStandards.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.6}>
                <div className="group h-full rounded-2xl bg-white border border-[#E6DAD2]/20 p-7 md:p-8 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-[#E6DAD2]/40">
                  <div className="w-14 h-14 rounded-2xl bg-[#F7EDE6] flex items-center justify-center mb-6">
                    <item.icon size={24} className="text-[#2D2D2B]/75" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-cormorant font-medium text-[#2D2D2B] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#2D2D2B]/60 leading-relaxed">{item.detail}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SUPPORTING REFERENCES — Clean resource cards with tag badges
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-custom max-w-6xl">
          <AnimatedSection className="max-w-3xl mb-16">
            <span className="inline-flex rounded-full bg-[#F7EDE6] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#2D2D2B]/50 mb-6">
              Supporting References
            </span>
            <h2 className="text-3xl md:text-[2.75rem] lg:text-5xl font-cormorant font-medium text-[#2D2D2B] leading-[1.12]">
              If you want the longer explanation, start here.
            </h2>
            <p className="mt-5 text-base text-[#2D2D2B]/55 leading-relaxed max-w-2xl">
              Each reference expands one part of the trust architecture: safety, longevity, healing, and climate-specific performance in Northern Virginia.
            </p>
          </AnimatedSection>

          <div className="grid gap-5 md:grid-cols-2">
            {supportingReferences.map((reference, i) => (
              <AnimatedSection key={reference.title} delay={i * 0.6}>
                <Link
                  to={reference.link}
                  className="group flex flex-col h-full rounded-2xl border border-[#E6DAD2]/20 bg-[#FDFCFB] p-7 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:border-[#E6DAD2]/45"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#F7EDE6] flex items-center justify-center">
                      <reference.icon size={20} className="text-[#2D2D2B]/65" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#2D2D2B]/35 font-medium rounded-full bg-[#F7EDE6]/70 px-3 py-1">
                      {reference.tag}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-cormorant font-medium text-[#2D2D2B] mb-3 group-hover:text-[#9A7B69] transition-colors duration-300">
                    {reference.title}
                  </h3>
                  <p className="text-sm text-[#2D2D2B]/55 leading-relaxed mb-6 flex-1">
                    {reference.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-[#2D2D2B]/70 group-hover:text-[#2D2D2B] group-hover:gap-3 transition-all duration-300">
                    <span>Read reference</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Author Block ── */}
      <AuthorBlock variant="full" className="bg-[#F9F7F5]" />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          FINAL CTA — Premium conversion close with radial glow
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative bg-[#2D2D2B] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(230,218,210,0.05)_0%,_transparent_60%)]" />

        <div className="relative container-custom max-w-4xl py-24 md:py-32">
          <AnimatedSection className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium leading-[1.12]">
              If you request a consultation,
              <span className="block text-[#E6DAD2] mt-1">start with review.</span>
            </h2>
            <p className="mt-8 text-lg md:text-xl text-white/50 leading-relaxed max-w-3xl mx-auto">
              A consultation at Ink Mugi is a candidacy assessment for ombré powder brows or corrective permanent makeup. Skin history, prior pigment, contraindications, healed-result expectations, and whether the procedure should happen now are reviewed first. If the answer is no, that is part of the standard.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://booksy.com/en-us/857522_ink-mugi-beauty_permanent-makeup_10184_annandale#ba_s=seo"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#E6DAD2] px-8 py-4 text-[#2D2D2B] font-medium transition-all duration-500 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
              >
                <span>Request a Consultation Review</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                to="/signature-ombre-brows"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/12 px-8 py-4 text-white/70 font-medium transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20"
              >
                <span>Read the Ombré Powder Brow Standard</span>
              </Link>
            </div>
          </AnimatedSection>

          {/* Trust signals footer strip */}
          <AnimatedSection className="mt-16">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                'Virginia licensed permanent makeup studio in Annandale, VA.',
                'Single-use equipment, sterile setup, and pigment standards visible by design.',
                'Healed-result review is the benchmark, not fresh procedure photos.',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-5 text-sm text-white/50 leading-relaxed">
                  {item}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
