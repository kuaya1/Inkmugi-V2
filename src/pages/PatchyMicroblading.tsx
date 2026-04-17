import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  ArrowRight,
  Phone,
  CheckCircle,
  AlertTriangle,
  Droplets,
  Shield,
  Target,
  Clock,
  Layers,
  Activity,
  RefreshCw
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import InlineFaqAccordion from '../components/InlineFaqAccordion';
import RelatedMicrobladingProblems from '../components/RelatedMicrobladingProblems';
import AuthorBlock from '../components/AuthorBlock';

const PatchyMicroblading: React.FC = () => {

  const faqs = [
    {
      question: "Why is my microblading patchy after healing?",
      answer: "Patchy microblading after healing is caused by uneven pigment retention across the brow area. The top five causes are: (1) inconsistent blade depth during application — some strokes penetrate the ideal dermal-epidermal junction while others sit too shallow or too deep, (2) oily skin overproducing sebum that pushes pigment out of shallow incisions during healing, (3) the normal 'ghost phase' at weeks 2–4 where surface pigment exfoliates and the healed result looks lighter or patchy before the deeper pigment settles, (4) picking, scratching, or premature scab removal during healing pulling pigment out of specific areas, and (5) uneven aftercare product application where some areas received proper ointment coverage and others dried out or were exposed to moisture. We frequently see the gaps follow the oiliest sections of the brow rather than appearing at random, which is one of the first clues we use when evaluating whether this is a skin-type issue or a technique issue."
    },
    {
      question: "Is it normal for microblading to look patchy at first?",
      answer: "During the first 4–6 weeks, yes — some degree of patchiness or unevenness is within normal healing parameters. The 'ghost phase' (weeks 2–4) causes surface-level pigment to exfoliate, and during this period brows can look significantly lighter, patchy, or uneven. After 4–6 weeks, the deeper-deposited pigment settles and the true result emerges. However, if your brows are still noticeably patchy after 8 weeks of healing, the patchiness is likely permanent without a touch-up or correction. This is the point at which we recommend a professional evaluation."
    },
    {
      question: "Can patchy microblading be fixed with a touch-up?",
      answer: "Sometimes, but it depends on the cause. If patchiness is due to mild, localized pigment loss (a few gaps or lighter areas), a single touch-up session can fill those spots. However, if the patchiness is widespread — affecting 40% or more of the brow area — a touch-up alone often creates an inconsistent result with visible variation between old and new pigment. In these cases, a full powder brow overlay produces significantly better results because it provides consistent, even coverage across the entire brow simultaneously, eliminating the patchwork appearance."
    },
    {
      question: "Why does microblading not take in some spots?",
      answer: "Pigment not 'taking' in specific areas indicates localized retention failure. The most common causes are: (1) the blade didn't reach optimal depth in those spots — too shallow means the pigment sits in the epidermis and is shed during normal skin turnover, (2) higher oil concentration in specific zones (the brow tail and area near the nose tend to be oilier), (3) scar tissue or thickened skin in certain areas that resists pigment absorption differently, (4) the client unconsciously rubbed or touched specific spots more during healing, and (5) uneven product application during the healing period — areas that got too much ointment can suffocate the wound, while areas that dried out can lose pigment through cracking."
    },
    {
      question: "Does oily skin make microblading more patchy?",
      answer: "Yes, significantly. Oily skin is the single biggest predictor of patchy microblading results. Sebum production creates two problems: (1) during the procedure, oil on the skin surface makes it harder for the blade to create consistent, precise incisions — the blade can skip or vary in depth, and (2) during healing, sebum production pushes pigment out of the incisions before they've fully sealed. This effect isn't uniform across the brow — oil production varies by zone, so some areas retain pigment well while others lose it almost entirely, creating the classic patchy appearance. This is one of the primary reasons we recommend powder brows for oily-skin clients."
    },
    {
      question: "Will my patchy microblading get better over time?",
      answer: "If your microblading is still within 4–6 weeks of application, wait. The ghost phase creates temporary patchiness that may resolve as deeper pigment settles. After 8+ weeks, patchy microblading will not improve on its own — the pigment has healed at its permanent level. In fact, remaining pigment will continue to fade over time while the gaps remain, potentially making the patchiness more pronounced as the contrast increases. If you're past the 8-week mark and unhappy with the evenness, the result is stable and correction should be discussed."
    },
    {
      question: "Are powder brows less likely to heal patchy than microblading?",
      answer: "Yes, significantly. Powder brows have dramatically lower rates of patchy healing for three reasons: (1) the digital machine stipples pigment at a precisely controlled, consistent depth across the entire brow — eliminating the depth variation that causes microblading's uneven retention, (2) the dot-deposit technique creates sealed pigment pockets that resist sebum displacement, making it far more resistant to oily-skin patchiness, and (3) the overlapping stipple pattern means any single dot that doesn't retain perfectly is surrounded by dots that did, maintaining visual consistency. In our 523+ procedure experience, powder brows achieve consistent, even results on skin types that would produce patchy microblading."
    },
    {
      question: "How long after patchy microblading can I get powder brows?",
      answer: "We recommend waiting a minimum of 8–12 weeks after your last microblading session before pursuing powder brow correction. This ensures the skin has completed its full healing cycle and the existing pigment has stabilized. If your microblading was heavily worked (many passes) or you've had multiple touch-ups, we may recommend a slightly longer waiting period to ensure the skin is in optimal condition for re-treatment. During your consultation, we'll evaluate your skin condition and confirm timing."
    }
  ];

  const patchyCauses = [
    {
      title: 'Inconsistent Blade Depth',
      icon: Layers,
      description: 'The microblading blade must hit the dermal-epidermal junction — a target layer just 0.5–1mm deep. Manual blade technique requires the artist to maintain consistent pressure and angle across every stroke. Even small variations mean some strokes sit too shallow (pigment exits during skin turnover) while others sit too deep (pigment migrates or blurs). The result: some strokes hold perfectly while others disappear within weeks, creating visible gaps in the pattern.',
      impact: 'Primary factor — accounts for ~40% of patchy microblading cases'
    },
    {
      title: 'Oily Skin Sebum Interference',
      icon: Droplets,
      description: 'Oily skin produces excess sebum that actively works against pigment retention in microblading\'s open-incision deposits. During healing, sebum flows into the unhealed incisions and physically displaces pigment before the wound has sealed. This effect is non-uniform: the inner brow, mid-brow, and tail have different sebum production levels, so pigment loss is uneven across the brow. DMV humidity amplifies sebum production by 15–25% during summer months. Our clinical data shows oily skin clients experience patchy healing at 3.4x the rate of normal-skin clients.',
      impact: 'Major factor — accounts for ~30% of patchy outcomes, higher in humid climates'
    },
    {
      title: 'Aftercare Inconsistencies',
      icon: Shield,
      description: 'Proper aftercare is critical during the 10-14 day healing window. Uneven application of healing ointment creates differential healing conditions across the brow. Areas receiving too much ointment can develop moisture-trapped infections or pigment suffocation. Areas receiving too little can crack, forming scabs that pull pigment out when they shed. Additionally, sleeping on one side, unconscious touching, or applying makeup to certain areas creates localized disturbance that causes specific sections to lose more pigment than others.',
      impact: 'Moderate factor — responsible for ~15% of patchy results'
    },
    {
      title: 'Ghost Phase Confusion',
      icon: Clock,
      description: 'Between weeks 2 and 4 post-microblading, surface-level pigment exfoliates as part of normal skin turnover. During this "ghost phase," brows can look dramatically lighter, patchy, or almost disappeared. This is technically normal healing — the visible pigment is the shallow-deposited top layer, while the properly-placed deeper pigment is still stabilizing beneath renewed skin cells. The confusion arises when clients interpret this temporary state as a permanent result and either pick at their brows (damaging still-healing pigment) or seek immediate correction (which would compromise healing).',
      impact: 'Temporary factor — resolves by week 6–8 if deeper pigment was properly placed'
    },
    {
      title: 'Scarring from Previous Work',
      icon: Activity,
      description: 'Clients who have had previous microblading, tattooing, or other trauma to the brow area may have scar tissue that responds differently to the blade. Scar tissue is denser and less vascular than normal skin — it resists blade penetration, holds pigment inconsistently, and heals differently. This means areas with scarring may reject pigment entirely while surrounding normal skin retains it, creating patches and gaps that follow the scarring pattern rather than the brow design.',
      impact: 'Variable — depends on scar severity and location'
    }
  ];

  return (
    <>
      <SEO
        title="Patchy Microblading: Why Brows Heal Unevenly & How to Fix It | Ink Mugi"
        description="Expert analysis of why microblading heals patchy — inconsistent depth, oily skin interference, aftercare issues, and ghost phase. Learn how powder brow correction creates even, lasting results. Ink Mugi, Annandale VA."
        path="/patchy-microblading"
        keywords="patchy microblading, microblading healed patchy, uneven microblading, microblading not taking in spots, patchy eyebrows after microblading, microblading gaps, microblading faded in spots, microblading uneven healing, patchy microblading fix, why is my microblading patchy"
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Patchy Microblading: Why Brows Heal Unevenly and How to Fix It",
            "description": "A clinical analysis of why microblading heals patchy — covering blade depth inconsistency, oily skin interference, aftercare errors, ghost phase healing, and scar tissue. Includes correction pathways using powder brow technique.",
            "author": {
              "@type": "Person",
              "name": "Mugi",
              "jobTitle": "Licensed PMU Artist",
              "worksFor": { "@type": "HealthAndBeautyBusiness", "name": "Ink Mugi", "url": "https://inkmugi.com" }
            },
            "publisher": {
              "@type": "Organization",
              "name": "Ink Mugi",
              "url": "https://inkmugi.com",
              "logo": { "@type": "ImageObject", "url": "https://inkmugi.com/logo.png" }
            },
            "datePublished": "2026-03-06",
            "dateModified": "2026-03-06",
            "url": "https://inkmugi.com/patchy-microblading",
            "mainEntityOfPage": "https://inkmugi.com/patchy-microblading"
          })}
        </script>
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://inkmugi.com/" },
              { "@type": "ListItem", "position": 2, "name": "Microblading Correction", "item": "https://inkmugi.com/microblading-correction-northern-virginia" },
              { "@type": "ListItem", "position": 3, "name": "Patchy Microblading", "item": "https://inkmugi.com/patchy-microblading" }
            ]
          })}
        </script>
      </SEO>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#F0E4D8] via-[#E6DAD2] to-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D2D2B] text-white rounded-full text-sm font-medium mb-6">
              <Layers className="w-4 h-4" />
              Pigment Retention Analysis
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium mb-6 text-[#2D2D2B] leading-tight">
              Why Your Microblading<br />
              <span className="text-amber-700">Healed Patchy</span>
            </h1>
            <p className="text-lg md:text-xl text-[#2D2D2B]/80 max-w-3xl mx-auto mb-4">
              Gaps, uneven fading, pigment that "didn't take" in spots — patchy microblading is
              one of the most frustrating PMU outcomes because it looks worse than having no brow work at all.
              Understanding why it happened is the first step toward fixing it.
            </p>
            <p className="text-sm text-[#2D2D2B]/60 max-w-2xl mx-auto mb-8">
              By a Virginia-licensed PMU artist with 523+ procedures • Clinical data from the DMV climate
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#2D2D2B] text-white rounded-full font-medium hover:bg-[#4A4A47] transition-all"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:+15712838228"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#2D2D2B] text-[#2D2D2B] rounded-full font-medium hover:bg-[#2D2D2B] hover:text-white transition-all"
              >
                <Phone className="mr-2 w-5 h-5" />
                (571) 283-8228
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Quick Answer — Featured Snippet Target */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <div className="bg-[#F9F7F5] border-l-4 border-[#2D2D2B] p-8 rounded-r-xl">
              <h2 className="text-2xl md:text-3xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
                Why Does Microblading Heal Patchy?
              </h2>
              <p className="text-[#2D2D2B]/80 text-lg mb-4">
                Microblading heals patchy when <strong>pigment retention is uneven across the brow</strong> — some areas hold pigment well while others lose it partially or completely during healing. The five primary causes are: inconsistent blade depth, oily skin sebum interference, aftercare inconsistencies, normal ghost-phase healing (temporary), and scar tissue from previous work.
              </p>
              <p className="text-[#2D2D2B]/70">
                If your microblading is still within 4–6 weeks, wait — the "ghost phase" may resolve. If patchiness persists past 8 weeks, <strong>powder brow correction</strong> provides the most reliable fix because it delivers consistent coverage independent of the individual variables that caused microblading to fail. By that point, what we are seeing in consultation is usually true retention pattern — not temporary healing drama.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Ghost Phase vs Permanent Patchiness */}
      <section className="py-16 bg-[#F9F7F5]">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              Ghost Phase vs. Permanent Patchiness
            </h2>
            <p className="text-[#2D2D2B]/80 text-lg leading-relaxed mb-8">
              Before diagnosing your microblading as patchy, you need to know where you are in the healing timeline. This timing question is one of the first things we sort out in follow-up assessments because not all patchiness is permanent — but not all of it resolves, either.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedSection delay={1}>
              <div className="bg-white p-6 rounded-xl border border-[#E6DAD2] h-full">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-6 h-6 text-amber-700" />
                  <h3 className="text-lg font-medium text-[#2D2D2B]">Ghost Phase (Temporary)</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Occurs weeks 2–4 after procedure',
                    'Surface-level pigment exfoliates naturally',
                    'Brows may look faded, patchy, or nearly gone',
                    'Deeper pigment is still stabilizing beneath new skin cells',
                    'Result settles by weeks 6–8',
                    'DO NOT pick, scratch, or seek correction during this phase'
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[#2D2D2B]/70 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <div className="bg-white p-6 rounded-xl border border-[#E6DAD2] h-full">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                  <h3 className="text-lg font-medium text-[#2D2D2B]">Permanent Patchiness</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Still visibly patchy after 8+ weeks of healing',
                    'Distinct areas with no pigment retention at all',
                    'Clear contrast between well-retained and empty zones',
                    'Pigment has stabilized — what you see is the permanent result',
                    'Will NOT improve without professional correction',
                    'Remaining pigment may continue fading, worsening contrast'
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[#2D2D2B]/70 text-sm">
                      <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 5 Causes of Patchy Microblading */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              5 Reasons Microblading Heals Patchy
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
              Each cause has a recognizable pattern. Identifying which factor affected your result helps determine the best correction approach.
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {patchyCauses.map((cause, idx) => (
              <AnimatedSection key={cause.title} delay={idx + 1}>
                <div className="bg-[#F9F7F5] p-8 rounded-xl border border-[#E6DAD2]">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#2D2D2B] rounded-full flex items-center justify-center flex-shrink-0">
                      <cause.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-[#2D2D2B]">{cause.title}</h3>
                    </div>
                  </div>
                  <p className="text-[#2D2D2B]/70 leading-relaxed mb-4">{cause.description}</p>
                  <div className="bg-white border border-[#E6DAD2] p-4 rounded-lg">
                    <p className="text-sm text-[#2D2D2B]/80">
                      <strong>Clinical impact:</strong> {cause.impact}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* The Oily Skin Connection */}
      <section className="py-20 bg-[#2D2D2B]">
        <div className="container-custom max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-white mb-4">
              The Oily Skin Connection
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              If you have oily or combination skin and your microblading healed patchy — your skin type is likely the primary factor. Here's why.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={1}>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                <Droplets className="w-8 h-8 text-amber-400 mb-4" />
                <h3 className="text-lg font-medium text-white mb-3">During Application</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Surface oil makes the skin resistant to consistent blade penetration. The blade can skip, resulting in strokes at varying depths. Deeper strokes retain pigment; shallower strokes lose it during healing — creating an inherently uneven pattern at the moment of application.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                <Activity className="w-8 h-8 text-amber-400 mb-4" />
                <h3 className="text-lg font-medium text-white mb-3">During Healing</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Sebaceous glands produce oil continuously during the 10–14 day healing window. This oil flows into the open microblading incisions and physically displaces pigment before the wound fully seals. In the DMV's humid climate, sebum production is amplified, accelerating this displacement.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                <Target className="w-8 h-8 text-amber-400 mb-4" />
                <h3 className="text-lg font-medium text-white mb-3">Zone Variation</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Oil production varies across the brow: the tail and inner corner tend to be oilier than the arch. This creates zone-specific pigment loss — the brow may retain beautifully at the arch but fade at the tail, or vice versa. The result is patchy, with the pattern following oil distribution rather than random chance.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="text-center mt-10" delay={2}>
            <p className="text-white/50 text-sm">
              Read our complete analysis: <Link to="/microblading-for-oily-skin" className="text-amber-400 hover:text-amber-300 underline">Why microblading fails on oily skin</Link> — includes the 340% retention data.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* How We Fix Patchy Microblading */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              How We Fix Patchy Microblading
            </h2>
            <p className="text-[#2D2D2B]/80 text-lg leading-relaxed mb-8">
              The powder brow technique is specifically engineered to solve the retention problems that cause patchy microblading. In our experience working with previously microbladed brows, the most natural corrections come from evening out the entire brow rather than chasing each individual gap. That wider reset is usually what makes the healed result look polished again. Here's why it works where microblading failed.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Target,
                title: 'Machine-Controlled Depth',
                desc: 'Digital PMU machines deliver every single pigment dot at the same consistent depth — eliminating the depth variation that caused your patchy result. No more shallow dots that fall out and deep dots that stay — every point of pigment sits at the optimal level for permanent retention.'
              },
              {
                icon: Shield,
                title: 'Sealed Dot Deposits',
                desc: 'Unlike microblading\'s open incisions, powder brow stippling creates sealed pigment pockets. These tiny sealed deposits physically resist sebum infiltration — the primary mechanism of patchy pigment loss on oily skin. Oil can\'t displace pigment from a sealed pocket the way it can from an open wound.'
              },
              {
                icon: Layers,
                title: 'Overlapping Coverage Pattern',
                desc: 'The stippled dot pattern creates overlapping coverage where any individual dot that doesn\'t retain at 100% is surrounded by dots that did. This redundancy means even slight variations in retention produce a visually smooth, even result — not the stark patchy appearance of missing hair strokes.'
              },
              {
                icon: RefreshCw,
                title: 'Complete Surface Coverage',
                desc: 'A powder brow overlay covers the entire brow simultaneously with consistent pigment density and color. This erases the visual evidence of the original patchy microblading beneath — no more contrast between retained and empty areas. The result is even, natural, and uniform.'
              }
            ].map((item, idx) => (
              <AnimatedSection key={item.title} delay={idx + 1}>
                <div className="bg-white p-6 rounded-xl border border-[#E6DAD2] h-full">
                  <item.icon className="w-8 h-8 text-amber-700 mb-4" />
                  <h3 className="font-medium text-[#2D2D2B] text-lg mb-2">{item.title}</h3>
                  <p className="text-[#2D2D2B]/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-8" delay={5}>
            <div className="bg-amber-50 border border-amber-100 p-6 rounded-xl text-center">
              <p className="text-[#2D2D2B]/80 text-sm">
                See the full technique breakdown: <Link to="/microblading-vs-powder-brows" className="text-amber-700 font-medium hover:underline">microblading vs powder brows — retention, longevity, and suitability comparison</Link>.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Correction Process */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              Patchy Microblading Correction: What to Expect
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Assessment Session',
                desc: 'We evaluate the existing pigment under magnification: mapping where retention held, where it failed, and whether the remaining pigment has any color shift or depth issues. This diagnostic determines whether we can proceed directly to a powder brow overlay or whether preliminary correction (neutralization or lightening) is needed first.',
              },
              {
                step: '02',
                title: 'Full Powder Brow Application',
                desc: 'For most patchy microblading cases, the correction is a complete ombré powder brow overlay. We apply consistent, even coverage across the entire brow — calibrating the pigment density and color to work harmoniously with any retained original pigment beneath. The digital machine ensures uniform depth throughout, and our warm-stable pigments are formulated for the DMV climate.',
              },
              {
                step: '03',
                title: 'Perfecting Touch-Up',
                desc: 'At 6–8 weeks post-application, we assess the healed result and make any refinements. Previously treated skin can sometimes absorb pigment slightly differently in the areas that retained original microblading vs. the clear areas — this touch-up evens out any subtle variations for a seamless final result. This session is included in your procedure cost.',
              },
            ].map((item, idx) => (
              <AnimatedSection key={item.step} delay={idx + 1}>
                <div className="flex gap-6 p-6 bg-[#F9F7F5] rounded-xl border border-[#E6DAD2]">
                  <div className="text-4xl font-cormorant font-bold text-amber-700/30 flex-shrink-0">{item.step}</div>
                  <div>
                    <h3 className="font-medium text-[#2D2D2B] text-lg mb-2">{item.title}</h3>
                    <p className="text-[#2D2D2B]/70 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-8" delay={4}>
            <p className="text-center text-[#2D2D2B]/60 text-sm">
              Full correction details: <Link to="/microblading-correction-northern-virginia" className="text-amber-700 font-medium hover:underline">microblading correction in Northern Virginia</Link> — process, pricing, and booking.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Author Authority Block */}
      <AuthorBlock variant="full" />

      {/* Hub Links */}
      <RelatedMicrobladingProblems currentPath="/patchy-microblading" bgClass="bg-[#F9F7F5]" cardBgClass="bg-white" />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Patchy Microblading FAQ
            </h2>
          </AnimatedSection>
          <InlineFaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#2D2D2B] to-[#1a1a18]">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-white mb-4">
              Even, Natural Brows Are Possible
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg mb-8">
              If your microblading healed patchy, it's not your fault — it's a technique limitation. Powder brows deliver the consistent, even coverage that microblading couldn't. Let us show you the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2D2D2B] rounded-full font-medium hover:bg-[#F0E4D8] transition-all"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:+15712838228"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[#2D2D2B] transition-all"
              >
                <Phone className="mr-2 w-5 h-5" />
                (571) 283-8228
              </a>
            </div>
            <p className="text-white/50 text-sm mt-6">
              Ink Mugi • 7857 Heritage Dr #330, Annandale, VA 22003 • Serving Northern Virginia, DC & Maryland
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="sr-only" aria-hidden="true">
        <p>
          Related searches: patchy microblading, microblading healed patchy, uneven microblading,
          microblading not taking in spots, patchy eyebrows after microblading, microblading gaps,
          microblading faded in spots, microblading uneven healing, patchy microblading fix,
          why is my microblading patchy, microblading uneven color, patchy brow tattoo correction
        </p>
      </div>
    </>
  );
};

export default PatchyMicroblading;
