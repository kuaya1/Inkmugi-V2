import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Droplets,
  Eye,
  FileText,
  Microscope,
  Shield,
} from 'lucide-react';
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

      <section className="bg-[#2D2D2B] text-white py-20 md:py-28">
        <div className="container-custom max-w-5xl">
          <AnimatedSection className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#E6DAD2]/85">
              Authority Standards · Ombré Powder Brows · Annandale VA
            </span>
            <h1 className="mt-8 text-4xl md:text-6xl lg:text-7xl font-cormorant font-medium leading-tight">
              How risk is controlled before permanent makeup begins.
            </h1>
            <p className="mt-6 max-w-4xl mx-auto text-lg md:text-xl text-white/72 leading-relaxed">
                This page explains how Ink Mugi approaches ombré powder brows in Northern Virginia: facial mapping, undertone-based pigment matching, layered shading, sterile setup, and healed-result review. It is not a service pitch. It is a risk-control explanation for clients considering permanent makeup in Annandale, VA.
            </p>
          </AnimatedSection>

          <AnimatedSection stagger staggerInterval={0.08} className="grid gap-4 md:grid-cols-3 mt-12">
            {authorityLines.map((line) => (
              <div key={line} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5 text-sm md:text-base text-white/88 leading-relaxed">
                {line}
              </div>
            ))}
          </AnimatedSection>

          <AnimatedSection stagger staggerInterval={0.08} className="grid gap-4 md:grid-cols-3 mt-6">
            {[
              { value: '523+', label: 'Tracked procedures informing judgment' },
              { value: '0.19%', label: 'Documented complication rate tied to healing' },
              { value: '6+ weeks', label: 'Minimum healed-result review standard' },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-6 text-center">
                <div className="text-3xl md:text-4xl font-cormorant font-semibold text-[#E6DAD2] mb-2">
                  {item.value}
                </div>
                <p className="text-sm text-white/65">{item.label}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-custom max-w-6xl">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-flex rounded-full bg-[#F7EDE6] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#2D2D2B]/60">
              Trust Engineering
            </span>
            <h2 className="mt-5 text-3xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] leading-tight">
              The four risks clients are actually trying to avoid.
            </h2>
            <p className="mt-4 text-[#2D2D2B]/65 leading-relaxed">
              Pain, unnatural results, safety risk, and regret usually come from predictable failures in planning, materials, or execution. Each of these can be reduced when the process is disciplined enough.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2">
            {fearFramework.map((item) => (
              <AnimatedSection key={item.title}>
                <div className="h-full rounded-2xl border border-[#E6DAD2]/40 bg-[#FDFCFB] p-6">
                  <h3 className="text-2xl font-cormorant font-medium text-[#2D2D2B] mb-5">
                    {item.title}
                  </h3>
                  <div className="space-y-4 text-sm leading-relaxed text-[#2D2D2B]/72">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-[#2D2D2B]/40 mb-1">Risk</p>
                      <p>{item.explanation}</p>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-[#2D2D2B]/40 mb-1">Control</p>
                      <p>{item.control}</p>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-[#2D2D2B]/40 mb-1">Confidence</p>
                      <p>{item.confidence}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F9F7F5] py-16 md:py-20">
        <div className="container-custom max-w-6xl">
          <AnimatedSection className="max-w-3xl mb-12">
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#2D2D2B]/60 border border-[#E6DAD2]/40">
              The Ink Mugi Method
            </span>
            <h2 className="mt-5 text-3xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] leading-tight">
              A repeatable sequence for ombré powder brows.
            </h2>
            <p className="mt-4 text-[#2D2D2B]/65 leading-relaxed max-w-3xl">
              Most complications are preventable with correct planning. The method below is designed to reduce the common causes of disappointment before they become visible in the healed result.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 lg:grid-cols-3">
            {methodSteps.map((step) => (
              <AnimatedSection key={step.title}>
                <div className="h-full rounded-2xl bg-white border border-[#E6DAD2]/35 p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-[#F7EDE6] flex items-center justify-center mb-5">
                    <step.icon size={22} className="text-[#2D2D2B]" />
                  </div>
                  <h3 className="text-2xl font-cormorant font-medium text-[#2D2D2B] mb-5">
                    {step.title}
                  </h3>
                  <div className="space-y-4 text-sm leading-relaxed text-[#2D2D2B]/72">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-[#2D2D2B]/40 mb-1">Risk</p>
                      <p>{step.risk}</p>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-[#2D2D2B]/40 mb-1">Control</p>
                      <p>{step.control}</p>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-[#2D2D2B]/40 mb-1">Confidence</p>
                      <p>{step.confidence}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="mt-8 rounded-2xl border border-[#E6DAD2]/40 bg-[#2D2D2B] px-6 py-7 text-white">
              <p className="text-lg md:text-xl font-cormorant text-[#E6DAD2] mb-2">
                Technique matters, but judgment matters more.
              </p>
              <p className="text-white/72 leading-relaxed">
                 Premium permanent makeup is not defined by the moment pigment touches the skin. It is defined by planning time, restraint, sterile materials, conservative execution, and healed-result follow-up. That is what premium pricing is actually paying for.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-[#2D2D2B] text-white py-16 md:py-20">
        <div className="container-custom max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <AnimatedSection>
              <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#E6DAD2]/85">
                Data Authority
              </span>
              <h2 className="mt-5 text-3xl md:text-5xl font-cormorant font-medium leading-tight">
                What 523+ and 0.19% actually mean.
              </h2>
              <div className="mt-5 space-y-4 text-white/72 leading-relaxed">
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

            <div className="space-y-4">
              {dataPoints.map((item) => (
                <AnimatedSection key={item.title}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="text-3xl font-cormorant font-semibold text-[#E6DAD2] mb-2">
                      {item.value}
                    </div>
                    <h3 className="text-base font-medium text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-white/65 leading-relaxed">{item.detail}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-custom max-w-6xl">
          <AnimatedSection className="max-w-3xl mb-12">
            <span className="inline-flex rounded-full bg-[#F7EDE6] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#2D2D2B]/60">
              Safety & Transparency
            </span>
            <h2 className="mt-5 text-3xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] leading-tight">
              What is used, what is documented, and what is not left to assumption.
            </h2>
            <p className="mt-4 text-[#2D2D2B]/65 leading-relaxed">
              “Safe and effective” is not useful language unless the controls are visible. These are the permanent makeup standards used in the Annandale, VA studio.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2">
            {transparencyStandards.map((item) => (
              <AnimatedSection key={item.title}>
                <div className="h-full rounded-2xl border border-[#E6DAD2]/35 bg-[#FDFCFB] p-6">
                  <div className="w-12 h-12 rounded-xl bg-[#F7EDE6] flex items-center justify-center mb-5">
                    <item.icon size={22} className="text-[#2D2D2B]" />
                  </div>
                  <h3 className="text-2xl font-cormorant font-medium text-[#2D2D2B] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#2D2D2B]/72 leading-relaxed">{item.detail}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F9F7F5] py-16 md:py-20">
        <div className="container-custom max-w-6xl">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#2D2D2B]/60 border border-[#E6DAD2]/40">
              Supporting References
            </span>
            <h2 className="mt-5 text-3xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] leading-tight">
              If you want the longer explanation, start here.
            </h2>
            <p className="mt-4 text-[#2D2D2B]/65 leading-relaxed">
              Each reference expands one part of the trust architecture: safety, longevity, healing, and climate-specific performance in Northern Virginia.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2">
            {supportingReferences.map((reference) => (
              <AnimatedSection key={reference.title}>
                <Link
                  to={reference.link}
                  className="group block h-full rounded-2xl border border-[#E6DAD2]/35 bg-white p-6 transition-shadow hover:shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#F7EDE6] flex items-center justify-center">
                      <reference.icon size={20} className="text-[#2D2D2B]" />
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.18em] text-[#2D2D2B]/45">
                      {reference.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-cormorant font-medium text-[#2D2D2B] mb-3 group-hover:text-[#9A7B69] transition-colors">
                    {reference.title}
                  </h3>
                  <p className="text-sm text-[#2D2D2B]/70 leading-relaxed mb-5">
                    {reference.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-[#2D2D2B] group-hover:gap-3 transition-all">
                    <span>Read reference</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <AuthorBlock variant="full" className="bg-white" />

      <section className="bg-[#2D2D2B] text-white py-20 md:py-24">
        <div className="container-custom max-w-4xl">
          <AnimatedSection className="text-center">
            <h2 className="text-4xl md:text-6xl font-cormorant font-medium leading-tight">
              If you request a consultation, start with review.
            </h2>
            <p className="mt-6 text-lg md:text-xl text-white/72 leading-relaxed max-w-3xl mx-auto">
              A consultation at Ink Mugi is a candidacy assessment for ombré powder brows or corrective permanent makeup. Skin history, prior pigment, contraindications, healed-result expectations, and whether the procedure should happen now are reviewed first. If the answer is no, that is part of the standard.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://booksy.com/en-us/857522_ink-mugi-beauty_permanent-makeup_10184_annandale#ba_s=seo"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#E6DAD2] px-8 py-4 text-[#2D2D2B] font-medium transition-colors hover:bg-white"
              >
                <span>Request a Consultation Review</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                to="/signature-ombre-brows"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-8 py-4 text-white/85 font-medium transition-colors hover:bg-white/10"
              >
                <span>Read the Ombré Powder Brow Standard</span>
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-3 mt-10 text-left">
              {[
                'Virginia licensed permanent makeup studio in Annandale, VA.',
                'Single-use equipment, sterile setup, and pigment standards visible by design.',
                'Healed-result review is the benchmark, not fresh procedure photos.',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/72 leading-relaxed">
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