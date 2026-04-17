import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  ArrowRight,
  Phone,
  CheckCircle,
  AlertTriangle,
  Shield,
  Target,
  Layers,
  Clock,
  Eye,
  Palette,
  Droplets,
  RefreshCw
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import InlineFaqAccordion from '../components/InlineFaqAccordion';
import RelatedMicrobladingProblems from '../components/RelatedMicrobladingProblems';
import AuthorBlock from '../components/AuthorBlock';
import BeforeAfterCase from '../components/BeforeAfterCase';
import type { CasePhoto } from '../components/BeforeAfterCase';

const PowderBrowsOverMicroblading: React.FC = () => {

  const faqs = [
    {
      question: "Can powder brows cover old microblading?",
      answer: "Yes, in most cases. Powder brows can be applied over old, faded, or partially retained microblading. The stippled dot technique creates an even surface layer that conceals the underlying hairstrokes. Before application, we evaluate the existing pigment — if there's significant color shift (grey, blue, or orange), we perform an undertone neutralization session first to ensure the old color doesn't interfere with the new overlay. At Ink Mugi, approximately 35% of our powder brow clients are transitioning from previous microblading, so this is a treatment plan we build around regularly rather than occasionally."
    },
    {
      question: "Do I need removal before getting powder brows over microblading?",
      answer: "In most cases, no. Powder brow correction is specifically designed to work over existing microblading without requiring removal. Removal is only recommended when: (1) the old microblading has severely shifted to a blue or green-grey tone that neutralization cannot adequately counteract, (2) the old pigment is still very dark and saturated with no fading, or (3) the shape of the old microblading is dramatically different from the desired new shape and extends well beyond the ideal brow boundary. During your consultation, we'll assess whether direct overlay, neutralization + overlay, or preliminary lightening is the best pathway for your specific case."
    },
    {
      question: "How long should microblading fade before getting powder brows?",
      answer: "We recommend waiting a minimum of 8–12 weeks after your last microblading session to ensure full healing. Ideally, we prefer to work on microblading that has faded for 6+ months — the more the old pigment has faded, the cleaner the canvas for the powder brow overlay. However, even recently-healed microblading (8+ weeks) can be corrected provided the skin is in healthy condition. Very dark, freshly-healed microblading may require a lightening session before powder brow application. At your consultation, we'll evaluate the current state and recommend the optimal timeline."
    },
    {
      question: "Will old microblading strokes show through powder brows?",
      answer: "When properly applied, powder brows completely conceal old microblading strokes. The stippled dot technique creates a dense, even pigment layer that masks the hairstroke pattern beneath. Two factors determine concealment quality: (1) the density and color of the remaining old pigment — heavily-saturated old work may require a neutralization or lightening session first, and (2) the skill and density of the powder brow application. At Ink Mugi, we calibrate the overlay density specifically to the underlying work, ensuring seamless coverage without an overly heavy result."
    },
    {
      question: "How much does powder brows over microblading cost?",
      answer: "At Ink Mugi, a powder brow procedure over previous microblading ranges from $500–$800 depending on the complexity. Straightforward cases (well-faded microblading with minimal color shift) are priced like a standard powder brow procedure ($500–$600). Cases requiring preliminary undertone neutralization are typically $600–$800 for the complete correction series. Consultations are $200, credited toward the procedure if you proceed. These prices reflect the additional assessment and planning required when working with previously treated skin."
    },
    {
      question: "Is powder brows over microblading painful?",
      answer: "Most clients report equivalent or less discomfort compared to their original microblading. We apply pharmaceutical-grade topical anesthetic 20–30 minutes before the procedure, with re-application during the session as needed. The digital machine used for powder brows produces a different sensation than the microblading blade — clients typically describe it as a mild vibrating pressure rather than the scratching sensation of microblading. Previously-treated skin may have slightly different sensitivity, but the vast majority of clients tolerate the procedure comfortably."
    },
    {
      question: "Can grey microblading be covered with powder brows?",
      answer: "Yes — grey microblading is one of the most common cases we correct at Ink Mugi. The process involves two steps: first, we apply a warm-spectrum corrector pigment (orange or peach-based) to neutralize the cool grey undertone. After that heals (4–6 weeks), we apply the powder brow overlay in your target color. The result is a warm, natural-looking brow that completely replaces the grey appearance. Without the neutralization step, the grey undertone could influence the final color — which is why this two-step approach is essential for grey-shifted microblading."
    },
    {
      question: "How long do powder brows last over old microblading?",
      answer: "Powder brows applied over old microblading last the same duration as standard powder brows — typically 18–36 months depending on skin type, lifestyle, and aftercare. In some cases, the combination of old underlying pigment plus the new overlay can actually extend the visible longevity slightly. The key factors that determine longevity are the same: skin oiliness, UV exposure, skincare product use, and the DMV's humid climate. A perfecting touch-up at 6–8 weeks post-procedure is included, and annual refreshes can extend results indefinitely."
    }
  ];

  const eligibilityFactors = [
    {
      title: 'Pigment Fading Level',
      icon: Clock,
      status: 'Key Assessment Point',
      description: 'The degree to which your old microblading has faded determines the correction pathway. Well-faded microblading (50%+ pigment loss) is the ideal canvas — powder brows can be applied directly with excellent results. Moderately faded microblading (20–50% retention) typically works well with a slightly denser application. Dark, heavily-retained microblading may need a preliminary lightening session to reduce density before overlay.',
      good: 'Faded 50%+ — direct overlay possible',
      caution: 'Still dark — may need lightening first'
    },
    {
      title: 'Color Shift Status',
      icon: Palette,
      status: 'Color Assessment',
      description: 'Old microblading pigment that has shifted from its original warm brown to grey, blue-grey, ashy, or orange tones requires undertone neutralization before the powder brow overlay. Without neutralization, the old color can influence the new pigment and produce an unwanted undertone in the healed result. At Ink Mugi, we use warm-spectrum corrector pigments calibrated to the specific shift present — orange for blue-grey, peach for ashy tones.',
      good: 'Faded evenly with no major color shift',
      caution: 'Grey, blue, or orange shift — neutralization needed first'
    },
    {
      title: 'Skin Condition',
      icon: Shield,
      status: 'Health Assessment',
      description: 'The treated skin must be in healthy condition before a new procedure. We evaluate for scarring from the original microblading (common with aggressive blade technique), active inflammation or irritation, dryness or compromised skin barrier, and any signs of infection or allergic reaction. Previously microbladed skin that has healed cleanly responds well to powder brow overlay. Skin with scarring can still be treated but may require modified technique and additional sessions.',
      good: 'Healthy, smooth skin with no scarring',
      caution: 'Visible scarring — treatable with modified approach'
    },
    {
      title: 'Shape Compatibility',
      icon: Target,
      status: 'Design Assessment',
      description: 'The relationship between your old microblading shape and your desired new shape affects the correction plan. If the old shape is within or close to the desired new boundary, powder brows can cover and refine it seamlessly. If the old microblading extends significantly beyond the desired new shape (too long, too thick, or extreme arch placement), targeted removal or lightening of the out-of-bounds pigment may be necessary before overlay.',
      good: 'Old shape within desired new boundary',
      caution: 'Old shape extends beyond new design — selective lightening needed'
    }
  ];

  return (
    <>
      <SEO
        title="Powder Brows Over Microblading: Can You Cover Old Microblading? | Ink Mugi"
        description="Expert guide to getting powder brows over old microblading — eligibility factors, color correction planning, the overlay process, and healing expectations. Ink Mugi correction specialist, Annandale VA."
        path="/powder-brows-over-microblading"
        keywords="powder brows over microblading, can you get powder brows over old microblading, ombre brows over microblading, powder brows correction microblading, cover old microblading, powder brows after microblading, microblading to powder brows transition"
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Powder Brows Over Microblading: Can You Cover Old Microblading?",
            "description": "A comprehensive guide to transitioning from microblading to powder brows — covering eligibility, color correction, the overlay process, and expected outcomes.",
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
            "url": "https://inkmugi.com/powder-brows-over-microblading",
            "mainEntityOfPage": "https://inkmugi.com/powder-brows-over-microblading"
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
              { "@type": "ListItem", "position": 3, "name": "Powder Brows Over Microblading", "item": "https://inkmugi.com/powder-brows-over-microblading" }
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
              Correction Technique Guide
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium mb-6 text-[#2D2D2B] leading-tight">
              Powder Brows Over Microblading:<br />
              <span className="text-amber-700">Can You Cover Old Microblading?</span>
            </h1>
            <p className="text-lg md:text-xl text-[#2D2D2B]/80 max-w-3xl mx-auto mb-4">
              If your microblading has faded, shifted color, or simply isn't giving you the results you
              want — you don't need to start from scratch. Powder brows can be applied over old microblading
              to restore, refresh, or completely transform your brow appearance.
            </p>
            <p className="text-sm text-[#2D2D2B]/60 max-w-2xl mx-auto mb-8">
              By a Virginia-licensed PMU artist with 523+ procedures • ~35% of our clients are microblading transitions
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

      {/* Featured Snippet Target */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <div className="bg-[#F9F7F5] border-l-4 border-[#2D2D2B] p-8 rounded-r-xl">
              <h2 className="text-2xl md:text-3xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
                Can You Get Powder Brows Over Old Microblading?
              </h2>
              <p className="text-[#2D2D2B]/80 text-lg mb-4">
                <strong>Yes.</strong> Powder brows can be applied over old, faded, or color-shifted microblading in most cases. The stippled dot
                technique creates an even pigment layer that conceals underlying hairstrokes and provides natural, consistent coverage. When the
                old microblading has shifted grey, blue, or orange, a preliminary undertone neutralization session is performed before the overlay.
              </p>
              <p className="text-[#2D2D2B]/70">
                In our practice, approximately <strong>35% of Ink Mugi's powder brow clients</strong> are transitioning from previous microblading — making this
                one of our most-performed procedures. Most transitions require 1–2 sessions and deliver results lasting 18–36 months.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why People Move From Microblading to Powder Brows */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              Why People Move From Microblading to Powder Brows
            </h2>
            <p className="text-[#2D2D2B]/80 text-lg leading-relaxed mb-8">
              The transition from microblading to powder brows isn't a failure — it's an upgrade. Many of the clients we see here are not looking for something trendy; they simply want healed brows that behave more predictably than their previous microblading. Here are the most common reasons
              our clients make the switch.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Clock,
                title: 'Faster Fading Than Expected',
                desc: 'Microblading\'s open-incision technique is vulnerable to oily skin, skincare products, UV, and humidity. Many DMV clients see significant fading within 6–8 months. Powder brows\' sealed-dot deposits resist these factors, lasting 18–36 months under the same conditions.'
              },
              {
                icon: Palette,
                title: 'Color Shift (Grey, Blue, Ashy)',
                desc: 'Iron oxide pigment oxidation causes warm brown to shift cool over time — a problem accelerated by the DMV\'s humidity. Powder brows use warm-stable pigments with sealed deposits that dramatically slow oxidation and maintain intended tone.'
              },
              {
                icon: Droplets,
                title: 'Patchy or Uneven Results',
                desc: 'Inconsistent blade depth and oily-skin interference create patchy retention patterns. Powder brows\' machine-controlled depth delivers uniform coverage regardless of skin type, eliminating the patchwork appearance.'
              },
              {
                icon: RefreshCw,
                title: 'Touch-Up Fatigue',
                desc: 'Clients tired of rebooking microblading touch-ups every 6–12 months want a longer-lasting solution. One powder brow session with a touch-up can maintain results for 2–3 years — reducing maintenance frequency by 60–70%.'
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
            <p className="text-center text-[#2D2D2B]/60 text-sm">
              For the full comparison, see our <Link to="/microblading-vs-powder-brows" className="text-amber-700 font-medium hover:underline">microblading vs powder brows guide</Link>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Eligibility Assessment */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Am I Eligible for Powder Brows Over Microblading?
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
              Four factors determine whether you can proceed with a direct overlay, need preliminary
              correction, or require a different approach entirely.
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {eligibilityFactors.map((factor, idx) => (
              <AnimatedSection key={factor.title} delay={idx + 1}>
                <div className="bg-[#F9F7F5] p-8 rounded-xl border border-[#E6DAD2]">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#2D2D2B] rounded-full flex items-center justify-center flex-shrink-0">
                      <factor.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-medium text-[#2D2D2B]">{factor.title}</h3>
                        <span className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-800 font-medium">{factor.status}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[#2D2D2B]/70 leading-relaxed mb-4">{factor.description}</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-green-50 border border-green-100 p-4 rounded-lg">
                      <p className="text-sm text-[#2D2D2B]/80">
                        <CheckCircle className="w-4 h-4 text-green-600 inline mr-1" />
                        <strong className="text-green-800">Ideal:</strong> {factor.good}
                      </p>
                    </div>
                    <div className="bg-amber-50 border border-amber-100 p-4 rounded-lg">
                      <p className="text-sm text-[#2D2D2B]/80">
                        <AlertTriangle className="w-4 h-4 text-amber-600 inline mr-1" />
                        <strong className="text-amber-800">Requires planning:</strong> {factor.caution}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* The Process: Step by Step */}
      <section className="py-20 bg-[#2D2D2B]">
        <div className="container-custom max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-white mb-4">
              The Process: Powder Brows Over Microblading
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Here's exactly what to expect when transitioning from microblading to powder brows at Ink Mugi. The process is deliberate because previously treated brows require more planning than fresh skin.
            </p>
          </AnimatedSection>

          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Consultation & Assessment',
                desc: 'A 45-minute in-person evaluation where we examine your existing microblading under magnification and controlled lighting. We assess pigment retention, color shift, skin condition, and shape compatibility. You\'ll leave with a clear plan — whether that\'s a direct overlay, neutralization + overlay, or a lightening step before correction. Cost: $200, credited toward your procedure.'
              },
              {
                step: '02',
                title: 'Color Correction Planning',
                desc: 'If your old microblading has shifted color (grey, blue, ashy, or orange), we design a neutralization protocol using warm-spectrum corrector pigments. We select the exact corrector shade calibrated to counter your specific shift — orange-family correctors for blue-grey tones, peach-family for ashy shifts. This plan is finalized before any pigment touches your skin.'
              },
              {
                step: '03',
                title: 'Neutralization Session (If Needed)',
                desc: 'For color-shifted microblading, we apply the corrector pigment using a gentle machine stipple technique. This deposits warm pigment that optically and chemically cancels the cool-shifted color beneath. This session takes approximately 90 minutes. Healing time: 4–6 weeks before we can assess the neutralization result and proceed to the overlay.'
              },
              {
                step: '04',
                title: 'Powder Brow Overlay',
                desc: 'The transformation session. Using a digital PMU machine, we apply your custom-mixed powder brow color in a natural ombré gradient — lighter at the inner brow, building to full saturation at the arch and tail. The stippled technique creates seamless coverage over the old microblading, resulting in a soft, natural, makeup-like finish. Session duration: approximately 2–2.5 hours including numbing.'
              },
              {
                step: '05',
                title: 'Healing & Touch-Up',
                desc: 'Your new powder brows will go through a normal healing cycle: initial darkening (days 1–3), scabbing and lightening (days 4–10), and color settling (weeks 2–6). At 6–8 weeks, you\'ll return for a complimentary perfecting touch-up to refine saturation, gradient, or shape as needed. After this session, most clients enjoy 18–36 months before considering a refresh.'
              }
            ].map((item, idx) => (
              <AnimatedSection key={item.step} delay={idx + 1}>
                <div className="flex gap-6 p-6 bg-white/5 border border-white/10 rounded-xl">
                  <div className="text-4xl font-cormorant font-bold text-amber-400 flex-shrink-0">{item.step}</div>
                  <div>
                    <h3 className="font-medium text-white text-lg mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Healing Expectations */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              Healing Expectations: What's Different With Previously Treated Skin
            </h2>
            <p className="text-[#2D2D2B]/80 text-lg leading-relaxed mb-8">
              Powder brows over microblading follow the same general healing timeline as a fresh application, with a
              few nuances specific to previously-treated skin. In our experience working with previously microbladed brows,
              areas with older incision lines can heal a little more unevenly in the first week, but that rarely changes the final settled result.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                phase: 'Days 1–3',
                title: 'Initial Darkening',
                desc: 'Brows appear darker than the final result — this is the oxidized surface layer of pigment plus any residual swelling. This is normal and temporary. Previously treated skin may show slightly more initial darkening due to the layered pigment.',
                icon: Eye
              },
              {
                phase: 'Days 4–14',
                title: 'Scabbing & Lightening',
                desc: 'Surface pigment exfoliates naturally. Brows may look patchy or lighter during this phase — completely normal. Previously microbladed skin may scab slightly differently in areas where old incision scars exist, but the outcome is equivalent.',
                icon: RefreshCw
              },
              {
                phase: 'Weeks 3–6',
                title: 'Color Settling',
                desc: 'The deeper pigment layer stabilizes beneath the renewed skin surface. By week 6, you\'ll see the true healed result. Any subtle variations where old microblading was retained vs. clear skin can be perfected at the touch-up appointment.',
                icon: CheckCircle
              }
            ].map((item, idx) => (
              <AnimatedSection key={item.phase} delay={idx + 1}>
                <div className="bg-white p-6 rounded-xl border border-[#E6DAD2] h-full">
                  <item.icon className="w-8 h-8 text-amber-700 mb-3" />
                  <div className="text-sm text-amber-700 font-medium mb-1">{item.phase}</div>
                  <h3 className="font-medium text-[#2D2D2B] text-lg mb-2">{item.title}</h3>
                  <p className="text-[#2D2D2B]/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-8" delay={4}>
            <p className="text-center text-[#2D2D2B]/60 text-sm">
              Not sure if correction or removal is the better path? Read our <Link to="/microblading-removal-vs-correction" className="text-amber-700 font-medium hover:underline">microblading removal vs correction comparison</Link>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Ink Mugi */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              Why Clients Choose Ink Mugi for Microblading-to-Powder Transitions
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Target,
                title: 'Correction Expertise',
                desc: 'With 523+ procedures, approximately 35% involving previously-treated skin, we have extensive experience managing the unique challenges of layered PMU work — pigment interaction, color theory, and texture adaptation.'
              },
              {
                icon: Palette,
                title: 'Climate-Calibrated Pigments',
                desc: 'We select premium pigments specifically formulated for warm-tone stability in the DMV\'s humid climate. Our pigment choices account for the environmental factors that caused many microblading failures in the first place.'
              },
              {
                icon: Shield,
                title: 'Transparent Assessment',
                desc: 'We never recommend unnecessary procedures. If your microblading just needs a touch-up rather than a full transition, we\'ll tell you. If removal is actually the better path, we\'ll recommend that instead. Honest assessment, no upselling.'
              },
              {
                icon: Eye,
                title: 'Correction Case Gallery',
                desc: 'We document correction cases with before-and-after photography (with client consent) so you can see real-world results on skin comparable to yours. Ask to see relevant examples during your consultation.'
              }
            ].map((item, idx) => (
              <AnimatedSection key={item.title} delay={idx + 1}>
                <div className="bg-[#F9F7F5] p-6 rounded-xl border border-[#E6DAD2] h-full">
                  <item.icon className="w-8 h-8 text-amber-700 mb-4" />
                  <h3 className="font-medium text-[#2D2D2B] text-lg mb-2">{item.title}</h3>
                  <p className="text-[#2D2D2B]/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Correction Cases */}
      <BeforeAfterCase
        title="Powder Brows Over Microblading — Real Cases"
        subtitle="Documented correction results from our Annandale studio. Real client photos will be added as cases are completed and healed."
        cases={[
          {
            before: '',
            after: '',
            beforeAlt: 'Faded microblading before powder brow correction in Northern Virginia',
            afterAlt: 'Powder brows over old microblading healed result at Ink Mugi Annandale VA',
            caption: 'Faded, patchy microblading corrected with ombré powder brows. Client from Arlington, VA — shown at 8 weeks healed.',
          },
          {
            before: '',
            after: '',
            beforeAlt: 'Grey microblading before correction with powder brows in Annandale VA',
            afterAlt: 'Microblading correction before and after powder brows in Northern Virginia',
            caption: 'Grey-shifted microblading neutralized with warm-spectrum corrector and powder overlay. Client from Fairfax — shown at 6 weeks healed.',
          },
        ] as CasePhoto[]}
      />

      {/* Author Authority Block */}
      <AuthorBlock variant="full" />

      {/* Hub Links */}
      <RelatedMicrobladingProblems currentPath="/powder-brows-over-microblading" bgClass="bg-[#F9F7F5]" cardBgClass="bg-white" />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Powder Brows Over Microblading FAQ
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
              Ready to Upgrade From Microblading?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg mb-8">
              Whether your microblading has faded, shifted, or just isn't giving you the results you want — powder brows can transform
              your old work into something you love. Free consultation to assess your specific case.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/microblading-correction-northern-virginia"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2D2D2B] rounded-full font-medium hover:bg-[#F0E4D8] transition-all"
              >
                View Correction Options
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/signature-ombre-brows"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[#2D2D2B] transition-all"
              >
                Explore Ombré Powder Brows
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <p className="text-white/50 text-sm mt-6">
              Ink Mugi • 7857 Heritage Dr #330, Annandale, VA 22003 • Serving Northern Virginia, DC & Maryland
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="sr-only" aria-hidden="true">
        <p>
          Related searches: powder brows over microblading, can you get powder brows over old microblading,
          ombre brows over microblading, powder brows correction microblading, cover old microblading,
          powder brows after microblading, microblading to powder brows transition, ombre brows over
          faded microblading, powder brows overlay correction Northern Virginia
        </p>
      </div>
    </>
  );
};

export default PowderBrowsOverMicroblading;
