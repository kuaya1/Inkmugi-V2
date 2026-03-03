import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Shield, ArrowRight, Phone, AlertTriangle, Eye, CheckCircle, Clock, Layers, Target, FileText, MapPin, ChevronRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import InlineFaqAccordion from '../components/InlineFaqAccordion';

const PmuCorrectionRestoration: React.FC = () => {

  // ═══════════════════════════════════════════════════════════════
  //  CORRECTION-SPECIFIC FAQ DATA
  // ═══════════════════════════════════════════════════════════════
  const faqs = [
    {
      question: 'Can previous microblading be corrected with ombré powder?',
      answer: 'In many cases, yes. The ombré powder method deposits pigment beneath the skin surface using a stippling technique, which can overlay and neutralize faded, patchy, or discolored microblading. However, the outcome depends on the depth, saturation, and undertone of the existing pigment. Cases involving deep-set pigment or significant color migration may require partial lightening before corrective work can begin. A structured assessment determines suitability before any procedure commitment.',
    },
    {
      question: 'Why did my microblading turn grey or ashy?',
      answer: 'Grey or ashy migration occurs when pigment oxidizes beneath the skin over time. Common causes include: pigment deposited too deep into the dermis (where the body encapsulates it differently), use of carbon-based pigments that shift cool under skin\'s yellow undertone, or improper pigment formulation for the client\'s skin chemistry. Correction requires undertone neutralization — introducing a warm-spectrum corrective pigment to counteract the cool shift before rebuilding natural tonality.',
    },
    {
      question: 'How many sessions does pigment correction require?',
      answer: 'Minor corrections — such as slight shape refinement or faded color restoration — are typically achievable in a single session with one follow-up at 6–8 weeks. Complex cases involving deep undertone neutralization, significant structural redesign, or multi-layer pigment issues typically require 2–3 sessions spaced 6–8 weeks apart. The assessment appointment provides a realistic session estimate based on your specific presentation.',
    },
    {
      question: 'What is the difference between correction and cover-up?',
      answer: 'Cover-up applies new pigment over existing work — masking the problem without addressing it. Correction is a multi-phase recalibration: undertone neutralization, controlled saturation adjustment, structural redesign, and pigment depth management. Cover-up typically produces darker, less natural results that may shift again over time. Correction works with the existing pigment chemistry to produce a predictable, stable healed outcome.',
    },
    {
      question: 'How much does pigment correction cost?',
      answer: 'Structured correction at Ink Mugi ranges from $900 to $1,200 depending on case complexity. This investment reflects the advanced technique, extended procedure time (3–4 hours), specialized corrective pigments, and multi-session protocol required for lasting results. The $200 assessment fee is credited toward the procedure. All correction pricing includes one follow-up refinement appointment.',
    },
    {
      question: 'Will you decline cases that are not suitable for correction?',
      answer: 'Yes. Approximately 15–20% of correction consultations result in a recommendation for partial or full pigment lightening before corrective work can begin. If existing pigment is too saturated, too deep, or presents undertone instability that would compromise correction quality, we will say so directly and provide referral options for saline or laser lightening. Proceeding with correction on an unsuitable canvas produces inferior outcomes — and we do not accept that standard.',
    },
    {
      question: 'Do I need laser removal before correction?',
      answer: 'Not always. Many cases can proceed directly to corrective work. However, deeply saturated pigment, significant blue-grey migration, or cases with multiple layers of previous work may benefit from 1–2 sessions of saline or laser lightening to create a workable canvas. The assessment determines whether lightening is recommended. When it is, we provide referrals to vetted removal specialists in the Northern Virginia area and establish a timeline for when correction can begin.',
    },
    {
      question: 'How is Ink Mugi\'s correction approach different from other studios?',
      answer: 'Three distinctions: First, candidacy screening — we evaluate and decline cases where correction would produce substandard results, rather than accepting every client. Second, documented protocol — every correction follows a structured sequence: pigment analysis, undertone mapping, corrective pigment selection, controlled application, and healed-outcome verification at 6 weeks. Third, healed-first documentation — correction results in our portfolio are photographed at the healed stage, not immediately post-procedure when results appear artificially refined.',
    },
    {
      question: 'What is the healing process for correction work?',
      answer: 'Correction healing follows the same general timeline as primary procedures but may present differently due to the underlying pigment layer. Days 1–5: treated area appears darker and more saturated than the final result. Days 5–10: surface pigment flakes naturally (do not pick). Days 10–21: the "ghost phase" where brows appear lighter than expected — this is normal. Weeks 3–6: true healed color emerges as pigment settles beneath the skin surface. The 6–8 week follow-up evaluates the healed result and determines whether refinement is needed.',
    },
    {
      question: 'What areas do you serve for correction appointments?',
      answer: 'Correction appointments are conducted at our VA-licensed studio in Annandale, Virginia. We serve clients throughout Fairfax County — including McLean, Vienna, Reston, Centreville, Chantilly, and Great Falls — as well as Arlington, Alexandria, Falls Church, Springfield, Tysons Corner, Washington DC, and the broader Northern Virginia region. For correction work specifically, clients routinely travel from Maryland and beyond — the caliber of corrective technique justifies the distance.',
    },
  ];

  return (
    <>
      <SEO
        title="PMU Correction & Pigment Recalibration | Microblading Fix — Ink Mugi, Annandale VA"
        description="Advanced permanent makeup correction in Annandale, Virginia. Undertone neutralization, structural redesign, and pigment recalibration for botched microblading, grey brows, and faded PMU. 330+ documented procedures. 0.19% complication rate. VA-licensed. Fairfax County."
        path="/pmu-correction-restoration"
        keywords="microblading correction near me, PMU correction Fairfax County, fix grey microblading Virginia, ombre brow correction Annandale, eyebrow tattoo correction Northern Virginia, botched microblading fix, over-saturated brows correction, brow pigment neutralization, permanent makeup correction McLean, PMU fix Arlington VA"
      >
        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "PMU Correction & Pigment Recalibration",
            "description": "Advanced permanent makeup correction service specializing in undertone neutralization, structural redesign, and pigment recalibration for failed microblading, discolored brows, and substandard previous work.",
            "url": "https://www.inkmugi.com/pmu-correction-restoration",
            "image": "https://www.inkmugi.com/og-image.jpg",
            "provider": {
              "@type": "HealthAndBeautyBusiness",
              "@id": "https://www.inkmugi.com/#business",
              "name": "Ink Mugi",
              "url": "https://www.inkmugi.com/",
              "telephone": "+1-571-283-8228",
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
                { "@type": "AdministrativeArea", "name": "Fairfax County" },
                { "@type": "AdministrativeArea", "name": "Northern Virginia" }
              ]
            },
            "serviceType": "Permanent Makeup Correction & Pigment Recalibration",
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "900",
              "highPrice": "1200",
              "priceCurrency": "USD",
              "offerCount": "3"
            },
            "areaServed": [
              { "@type": "City", "name": "Annandale", "containedInPlace": { "@type": "AdministrativeArea", "name": "Fairfax County, Virginia" } },
              { "@type": "City", "name": "McLean" },
              { "@type": "City", "name": "Vienna" },
              { "@type": "City", "name": "Reston" },
              { "@type": "City", "name": "Arlington" },
              { "@type": "City", "name": "Alexandria" },
              { "@type": "AdministrativeArea", "name": "Northern Virginia" }
            ]
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
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.inkmugi.com/" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.inkmugi.com/services" },
              { "@type": "ListItem", "position": 3, "name": "PMU Correction & Pigment Recalibration", "item": "https://www.inkmugi.com/pmu-correction-restoration" }
            ]
          })}
        </script>
      </SEO>


      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 1 — AUTHORITY-DRIVEN HERO
          Intent: Capture distressed, high-intent correction traffic.
          Tone: Measured. Clinical. No hype. No shame. No promises.
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#2D2D2B] pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />

        <div className="container-custom relative z-10 max-w-4xl mx-auto">
          <AnimatedSection>
            <nav className="flex items-center gap-2 text-sm text-white/40 mb-10">
              <Link to="/" className="hover:text-[#E6DAD2] transition-colors">Home</Link>
              <ChevronRight size={14} />
              <Link to="/services" className="hover:text-[#E6DAD2] transition-colors">Services</Link>
              <ChevronRight size={14} />
              <span className="text-[#E6DAD2]/80">Correction & Recalibration</span>
            </nav>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mb-6">
              <span className="inline-flex items-center gap-3 text-[#E6DAD2]/80 tracking-[0.25em] text-xs uppercase font-light">
                <span className="w-10 h-px bg-[#E6DAD2]/40" />
                VA-Licensed · Advanced Corrective Protocol
                <span className="w-10 h-px bg-[#E6DAD2]/40" />
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <h1 className="mb-6">
              <span className="block text-3xl md:text-4xl lg:text-5xl font-cormorant font-light leading-[1.08] tracking-tight text-white">
                Permanent Makeup Correction
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-cormorant font-medium leading-[1.08] tracking-tight text-white mt-2">
                & <span className="text-[#E6DAD2]">Pigment Recalibration</span>
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection>
            <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl leading-relaxed mb-4">
              Correction is not a touch-up. It is a structured recalibration of pigment depth, undertone balance, and brow architecture — performed under the same documented protocol that governs every procedure at this studio.
            </p>
            <p className="text-[0.8rem] tracking-[0.15em] uppercase text-[#E6DAD2]/90 font-normal mb-10">
              330+ Documented Procedures · 0.19% Complication Rate · Healed-First Verification
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Link
                to="/booking"
                className="group inline-flex items-center gap-3 bg-[#E6DAD2] hover:bg-white text-[#2D2D2B] px-8 py-4 rounded-full font-medium transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
              >
                <span>Schedule a Structured Correction Assessment</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:+15712838228"
                className="group inline-flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                  <Phone size={16} />
                </span>
                <span className="text-sm tracking-wide">(571) 283-8228</span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 2 — TRUST BAR
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#F9F7F5] border-b border-[#E6DAD2]/30">
        <div className="container-custom max-w-5xl mx-auto py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '330+', label: 'Documented Procedures' },
              { value: '0.19%', label: 'Complication Rate', accent: true },
              { value: '6-Week', label: 'Healed Verification' },
              { value: 'VA', label: 'Licensed & Insured' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <p className={`text-2xl md:text-3xl font-cormorant font-semibold ${stat.accent ? 'text-[#9A7B69]' : 'text-[#2D2D2B]'}`}>
                  {stat.value}
                </p>
                <p className="text-xs text-[#2D2D2B]/50 tracking-wide uppercase mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 3 — PROBLEM IDENTIFICATION
          Clinical framing. No shaming. No drama. Structured diagnosis categories.
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-cormorant font-medium text-[#2D2D2B] mb-3">
                Common Presentations Requiring Correction
              </h2>
              <p className="text-[#2D2D2B]/60 max-w-2xl mx-auto leading-relaxed">
                These conditions are the result of technique limitations, pigment chemistry, or skin response — not personal failing. Each requires a specific corrective approach.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Layers size={22} />,
                title: 'Grey or Ashy Migration',
                desc: 'Pigment has shifted cool — appearing grey, blue-grey, or ashy. Typically caused by carbon-based pigment deposited too deep, or pigment oxidation beneath skin\'s warm undertone.',
              },
              {
                icon: <AlertTriangle size={22} />,
                title: 'Over-Saturated or Too Dark',
                desc: 'Brows appear heavier, darker, or bolder than intended. Often the result of excessive pigment deposit, incorrect color selection for skin depth, or technique that doesn\'t account for healed density.',
              },
              {
                icon: <Target size={22} />,
                title: 'Structural Asymmetry',
                desc: 'Arch position, tail length, or overall shape does not align with facial bone structure. Corrective mapping and selective pigment placement can restore architectural balance.',
              },
              {
                icon: <Eye size={22} />,
                title: 'Faded or Patchy Retention',
                desc: 'Uneven pigment retention — areas where color has disappeared while others remain. Common in microblading that was too shallow, or in oily skin types where shallow strokes don\'t hold.',
              },
              {
                icon: <Clock size={22} />,
                title: 'Warm Shift — Orange or Red Migration',
                desc: 'Pigment has shifted warm, appearing orange, terracotta, or reddish. Caused by iron-oxide pigments breaking down under UV exposure, or formulations that lack cool-spectrum stabilizers.',
              },
              {
                icon: <FileText size={22} />,
                title: 'Outdated Cosmetic Tattooing',
                desc: 'Older brow tattoos (3+ years) that appear blocky, unnatural, or have lost definition. Modern corrective technique can refine shape, neutralize discoloration, and restore a natural gradient.',
              },
            ].map((item, i) => (
              <AnimatedSection key={i}>
                <div className="bg-[#F9F7F5] rounded-xl p-6 border border-[#E6DAD2]/20 h-full hover:border-[#9A7B69]/30 transition-colors duration-300">
                  <div className="w-11 h-11 bg-[#E6DAD2]/40 rounded-lg flex items-center justify-center text-[#9A7B69] mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-semibold text-[#2D2D2B] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#2D2D2B]/60 leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 4 — WHY PIGMENT TURNS GREY / FADES IMPROPERLY
          Educational authority. Establishes specialist knowledge.
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[#F9F7F5]">
        <div className="container-custom max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-cormorant font-medium text-[#2D2D2B] mb-4 text-center">
              Why Permanent Makeup Fails
            </h2>
            <p className="text-[#2D2D2B]/60 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
              Understanding the mechanism of failure is the prerequisite to effective correction. Most pigment issues trace to one of four root causes.
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {[
              {
                title: 'Pigment Depth Miscalibration',
                body: 'Permanent makeup pigment is designed to sit in the upper dermis — the papillary layer, approximately 0.5–1.0mm beneath the skin surface. When deposited too shallow, pigment migrates outward during healing and is lost. When deposited too deep, the body encapsulates it differently, causing color distortion. The reticular dermis processes pigment through a different cellular mechanism that strips warm undertones, leaving cool-shifted residue. This is the primary mechanism behind grey or ashy migration.',
              },
              {
                title: 'Pigment Formulation & Chemistry',
                body: 'Not all pigments respond identically to skin chemistry. Carbon-based pigments — common in lower-cost formulations — are prone to cool-shifting in warm-undertoned skin. Iron-oxide pigments provide more predictable results but can shift warm under sustained UV exposure. The interaction between pigment formulation, individual skin pH, melanin density, and environmental exposure creates a matrix that determines long-term color stability. Corrective work requires pigment selection that accounts for the existing color, the desired outcome, and the client\'s skin chemistry simultaneously.',
              },
              {
                title: 'Technique Limitations',
                body: 'Microblading uses a manual blade to create incisions in the epidermis. In Northern Virginia\'s humid subtropical climate (70–85% humidity in summer), these shallow incisions are particularly vulnerable to pigment expulsion and premature fading. The DMV\'s seasonal humidity variation — from 45% in winter to 85% in summer — subjects healing tissue to conditions that accelerate pigment migration. Machine-based stippling (ombré powder) deposits pigment at a more consistent depth and has demonstrated significantly better retention in high-humidity environments.',
              },
              {
                title: 'Aftercare & Environmental Exposure',
                body: 'Even properly executed permanent makeup can degrade under improper aftercare or sustained environmental stress. Direct UV exposure during the 4-week healing window can cause irreversible pigment breakdown. Retinol-based skincare applied near the brow area chemically degrades pigment particles over time. Chemical exfoliation, glycolic acid treatments, and laser facials can all compromise pigment integrity. Correction must account for these ongoing factors to produce a result that remains stable long-term.',
              },
            ].map((item, i) => (
              <AnimatedSection key={i}>
                <div className="bg-white rounded-xl p-6 md:p-8 border border-[#E6DAD2]/20">
                  <h3 className="text-lg font-semibold text-[#2D2D2B] mb-3">{item.title}</h3>
                  <p className="text-[#2D2D2B]/65 leading-relaxed text-[0.95rem]">{item.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 5 — WHAT CORRECTION ACTUALLY INVOLVES
          5-stage protocol. Not a "4 easy steps" beauty graphic.
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-cormorant font-medium text-[#2D2D2B] mb-4 text-center">
              The Structured Correction Protocol
            </h2>
            <p className="text-[#2D2D2B]/60 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
              Correction is not improvised. Each case follows a documented sequence designed to produce predictable, verifiable healed outcomes.
            </p>
          </AnimatedSection>

          <div className="space-y-6">
            {[
              {
                stage: 'Stage 1',
                title: 'Structured Assessment — $200 (Credited Toward Procedure)',
                body: 'In-person evaluation of existing pigment under clinical lighting. Analysis of: current pigment depth and distribution, undertone direction (cool, warm, neutral), migration pattern, skin type and melanin density, previous technique identification. Digital documentation of current state. Honest determination of whether correction is advisable, or whether lightening is required first. Approximately 15–20% of assessments result in a lightening referral rather than immediate correction.',
              },
              {
                stage: 'Stage 2',
                title: 'Undertone Mapping & Corrective Pigment Selection',
                body: 'Based on the assessment findings, a corrective pigment formula is developed. For grey/cool migration: warm-spectrum neutralizers are selected to counteract the cool shift. For orange/warm migration: ash-toned correctors are introduced. Pigment selection accounts for existing color + desired outcome + skin chemistry. This is not a standardized color chart — it is case-specific formulation.',
              },
              {
                stage: 'Stage 3',
                title: 'Structural Redesign & Approval',
                body: 'Before any pigment is applied, the corrected shape is precision-mapped to the client\'s facial bone structure. Arch position, tail terminus, head gradient, and brow width are calibrated using manual measurement and proportional analysis. The design is reviewed and explicitly approved by the client before proceeding. No pigment is deposited until written design approval is confirmed.',
              },
              {
                stage: 'Stage 4',
                title: 'Controlled Corrective Application',
                body: 'Using the ombré powder stippling technique, corrective pigment is deposited at calibrated depth. The application follows a controlled saturation gradient — lighter at the head, progressive density through the body, defined tail architecture. For cases with existing pigment, deposit depth and pressure are adjusted to work with (not against) the underlying layer. Procedure duration: 3–4 hours for complex correction versus 2–2.5 hours for standard application.',
              },
              {
                stage: 'Stage 5',
                title: 'Healed-Outcome Verification at 6 Weeks',
                body: 'The correction is evaluated at 6 weeks post-procedure — after full epidermal healing is complete. Healed color, shape retention, and undertone stability are documented. If refinement is warranted, a follow-up session addresses specific areas. This verification standard applies to every correction — results are not considered final until healed documentation confirms the outcome.',
              },
            ].map((item, i) => (
              <AnimatedSection key={i}>
                <div className="flex gap-5 md:gap-6">
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-10 h-10 bg-[#2D2D2B] text-white rounded-full flex items-center justify-center text-xs font-medium tracking-wide">
                      {item.stage.replace('Stage ', '')}
                    </div>
                    {i < 4 && <div className="w-px h-full bg-[#E6DAD2]/50 mt-2" />}
                  </div>
                  <div className="pb-6">
                    <h3 className="text-base font-semibold text-[#2D2D2B] mb-2">{item.title}</h3>
                    <p className="text-[#2D2D2B]/60 leading-relaxed text-[0.95rem]">{item.body}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 6 — CORRECTION VS. COVER-UP
          Key differentiation. Positions Ink Mugi's approach as specialist-grade.
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[#2D2D2B]">
        <div className="container-custom max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-cormorant font-medium text-white mb-4 text-center">
              Correction Is Not Cover-Up
            </h2>
            <p className="text-white/60 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
              The distinction matters. It determines whether the result lasts 6 months or 24 months — and whether the underlying problem returns.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedSection>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 h-full">
                <h3 className="text-lg font-semibold text-white/40 mb-4 uppercase tracking-wide text-sm">Cover-Up Approach</h3>
                <ul className="space-y-3 text-white/50 text-[0.92rem]">
                  <li className="flex items-start gap-3">
                    <span className="text-white/30 mt-1">—</span>
                    <span>Applies darker pigment over existing work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white/30 mt-1">—</span>
                    <span>Masks the underlying color problem without addressing it</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white/30 mt-1">—</span>
                    <span>Produces progressively darker results with each session</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white/30 mt-1">—</span>
                    <span>Underlying undertone continues to shift beneath new layer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-white/30 mt-1">—</span>
                    <span>Limited longevity — problem resurfaces within 6–12 months</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-[#E6DAD2]/10 border border-[#E6DAD2]/20 rounded-xl p-6 md:p-8 h-full">
                <h3 className="text-lg font-semibold text-[#E6DAD2] mb-4 uppercase tracking-wide text-sm">Structured Correction</h3>
                <ul className="space-y-3 text-white/70 text-[0.92rem]">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#E6DAD2] mt-0.5 flex-shrink-0" />
                    <span>Neutralizes underlying undertone before rebuilding color</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#E6DAD2] mt-0.5 flex-shrink-0" />
                    <span>Addresses root cause — depth, chemistry, and formulation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#E6DAD2] mt-0.5 flex-shrink-0" />
                    <span>Produces natural density without progressive darkening</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#E6DAD2] mt-0.5 flex-shrink-0" />
                    <span>Corrective pigment selected to stabilize long-term color</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#E6DAD2] mt-0.5 flex-shrink-0" />
                    <span>Healed results verified at 6 weeks — documented, not assumed</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 7 — CANDIDACY EVALUATION
          Pre-qualifies clients. Signals selectivity = authority.
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-cormorant font-medium text-[#2D2D2B] mb-4 text-center">
              Candidacy Evaluation
            </h2>
            <p className="text-[#2D2D2B]/60 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
              Not every presentation is suitable for immediate correction. Honest candidacy assessment protects both the client's outcome and the studio's documented standard.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-[#F9F7F5] rounded-xl p-6 md:p-8 border border-[#E6DAD2]/20 h-full">
                <h3 className="text-base font-semibold text-[#2D2D2B] mb-4 flex items-center gap-2">
                  <CheckCircle size={18} className="text-[#9A7B69]" />
                  Typically Suitable for Correction
                </h3>
                <ul className="space-y-3 text-[#2D2D2B]/65 text-[0.92rem]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#9A7B69] mt-1 text-xs">●</span>
                    <span>Faded or patchy microblading with moderate pigment remaining</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#9A7B69] mt-1 text-xs">●</span>
                    <span>Grey or ashy undertone shift with workable pigment density</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#9A7B69] mt-1 text-xs">●</span>
                    <span>Shape or arch misalignment amenable to structural redesign</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#9A7B69] mt-1 text-xs">●</span>
                    <span>Older cosmetic tattoos (3+ years) with faded, workable pigment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#9A7B69] mt-1 text-xs">●</span>
                    <span>Mild to moderate warm shift (orange/terracotta undertone)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#9A7B69] mt-1 text-xs">●</span>
                    <span>Previous work at least 8 weeks healed with stable skin condition</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-[#F9F7F5] rounded-xl p-6 md:p-8 border border-[#E6DAD2]/20 h-full">
                <h3 className="text-base font-semibold text-[#2D2D2B] mb-4 flex items-center gap-2">
                  <AlertTriangle size={18} className="text-[#2D2D2B]/40" />
                  May Require Lightening Before Correction
                </h3>
                <ul className="space-y-3 text-[#2D2D2B]/65 text-[0.92rem]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#2D2D2B]/30 mt-1 text-xs">●</span>
                    <span>Heavily saturated pigment covering full brow area with no natural skin showing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2D2D2B]/30 mt-1 text-xs">●</span>
                    <span>Deep blue-black pigment indicative of dermal-level deposit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2D2D2B]/30 mt-1 text-xs">●</span>
                    <span>Multiple layers of previous work creating dense pigment stacking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2D2D2B]/30 mt-1 text-xs">●</span>
                    <span>Active skin conditions in the brow area (eczema, psoriasis, dermatitis)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2D2D2B]/30 mt-1 text-xs">●</span>
                    <span>Keloid-forming skin history in the treated area</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2D2D2B]/30 mt-1 text-xs">●</span>
                    <span>Recent retinoid or chemical peel treatment within 6 weeks</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <p className="text-sm text-[#2D2D2B]/50 text-center mt-8 max-w-xl mx-auto leading-relaxed">
              Candidacy is determined at the in-person assessment — not by photograph. Pigment depth, skin condition, and undertone behavior must be evaluated under clinical lighting.
            </p>
          </AnimatedSection>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 8 — WHEN LASER / LIGHTENING IS REQUIRED
          Radical transparency. This section alone builds enormous trust.
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[#F9F7F5]">
        <div className="container-custom max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="bg-white rounded-xl p-6 md:p-10 border border-[#E6DAD2]/30">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-11 h-11 bg-[#2D2D2B] rounded-lg flex items-center justify-center">
                  <Shield size={20} className="text-[#E6DAD2]" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-cormorant font-medium text-[#2D2D2B]">
                    When We Recommend Lightening Before Correction
                  </h2>
                  <p className="text-[#2D2D2B]/50 text-sm mt-1">Transparency as practice standard</p>
                </div>
              </div>

              <div className="space-y-4 text-[#2D2D2B]/65 text-[0.95rem] leading-relaxed">
                <p>
                  Approximately 15–20% of correction consultations at Ink Mugi result in a recommendation for partial pigment lightening before corrective work can begin. This is not a refusal — it is a protection of outcome quality.
                </p>
                <p>
                  Performing correction over heavily saturated or deeply deposited pigment produces inferior results: colors that shift unpredictably, density that becomes unnaturally heavy, and outcomes that destabilize during healing. A studio that accepts every case regardless of presentation is prioritizing revenue over results.
                </p>
                <p>
                  When lightening is recommended, we provide:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#9A7B69] mt-0.5 flex-shrink-0" />
                    <span>Referral to vetted saline or laser removal specialists in the Northern Virginia area</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#9A7B69] mt-0.5 flex-shrink-0" />
                    <span>Estimation of lightening sessions typically needed (usually 1–3)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#9A7B69] mt-0.5 flex-shrink-0" />
                    <span>Timeline for when correction can begin after lightening is complete</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#9A7B69] mt-0.5 flex-shrink-0" />
                    <span>Priority scheduling for correction once the canvas is workable</span>
                  </li>
                </ul>
                <p className="text-sm text-[#2D2D2B]/45 italic mt-4">
                  This willingness to decline cases — and the transparency to explain why — is part of the documented standard that produces a 0.19% complication rate across 330+ procedures.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 9 — CASE STUDY NARRATIVES
          No images — textual authority. Clinical storytelling.
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-cormorant font-medium text-[#2D2D2B] mb-4 text-center">
              Documented Correction Outcomes
            </h2>
            <p className="text-[#2D2D2B]/60 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
              Each case represents a structured correction — assessed, planned, executed, and verified at the healed stage. Results documented at 6 weeks post-procedure.
            </p>
          </AnimatedSection>

          <div className="space-y-6">
            {[
              {
                label: 'Case A — Grey Migration Correction',
                presentation: 'Client presented with microblading performed 14 months prior. Strokes had blurred into a diffuse grey band across both brows. Cool-shifted pigment visible under clinical lighting. Moderate density — workable without lightening.',
                protocol: 'Warm-spectrum corrective pigment selected to neutralize blue-grey undertone. Structural redesign aligned arch to zygomatic bone position. Ombré powder applied with controlled gradient density. Single session + 8-week follow-up refinement.',
                outcome: 'Healed result documented at 6 weeks: warm-toned, natural gradient, grey migration fully neutralized. Follow-up refinement addressed two areas of lower retention in the tail. Client verified satisfied at 12-week final review.',
              },
              {
                label: 'Case B — Over-Saturated Brow Reconstruction',
                presentation: 'Client presented with brows approximately 40% darker than intended from previous ombré powder procedure elsewhere. Shape was approximately symmetrical but arch position was medially displaced, creating a perpetually surprised expression.',
                protocol: 'Partial lightening was NOT required — existing density was heavy but shallow enough for corrective overlay. Arch position recalibrated laterally by 4mm to align with iris center. Corrective pigment selected 2 shades lighter than existing to soften overall density while maintaining warmth.',
                outcome: 'Healed result documented at 6 weeks: approximately 60% reduction in perceived heaviness. Natural gradient restored. Arch position anatomically correct. Two sessions required — initial correction + 8-week density balancing.',
              },
              {
                label: 'Case C — Faded Microblading with Warm Shift',
                presentation: 'Client presented with microblading performed 22 months prior. Original strokes had dissolved into faint orange-terracotta tint concentrated at brow heads with near-complete drop-out at tails. Skin type: oily-combination.',
                protocol: 'Ash-toned corrective pigment introduced to neutralize warm migration at heads. Full ombré powder overlay to establish consistent density across entire brow. Technique adjusted for oily skin — increased stippling density and slightly deeper deposit depth to improve long-term retention.',
                outcome: 'Healed result documented at 6 weeks: warm shift fully corrected. Consistent density from head to tail. Client reported significantly reduced daily makeup application time. Single session achieved target outcome.',
              },
            ].map((item, i) => (
              <AnimatedSection key={i}>
                <div className="bg-[#F9F7F5] rounded-xl p-6 md:p-8 border border-[#E6DAD2]/20">
                  <h3 className="text-base font-semibold text-[#9A7B69] mb-4">{item.label}</h3>
                  <div className="space-y-4 text-[0.92rem]">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-[#2D2D2B]/40 mb-1 font-medium">Presentation</p>
                      <p className="text-[#2D2D2B]/65 leading-relaxed">{item.presentation}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-[#2D2D2B]/40 mb-1 font-medium">Protocol</p>
                      <p className="text-[#2D2D2B]/65 leading-relaxed">{item.protocol}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-[#2D2D2B]/40 mb-1 font-medium">Documented Outcome</p>
                      <p className="text-[#2D2D2B]/65 leading-relaxed">{item.outcome}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 10 — SAFETY & DOCUMENTATION METRICS
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[#F9F7F5]">
        <div className="container-custom max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-cormorant font-medium text-[#2D2D2B] mb-4 text-center">
              Safety Protocol & Documented Standards
            </h2>
            <p className="text-[#2D2D2B]/60 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
              Correction work carries inherent complexity — layered pigment, compromised skin history, and higher sensitivity. The safety standard must be proportionally higher.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: <Shield size={20} />, title: '0.19% Documented Complication Rate', desc: 'Across 330+ total procedures. Calculated from healed outcomes — not procedural volume. This rate reflects rigorous candidacy screening, sterile protocol, and the willingness to decline cases where risk exceeds acceptable threshold.' },
              { icon: <FileText size={20} />, title: 'Virginia Body Art Licensure', desc: 'Full compliance with Virginia Department of Health regulations (12 VAC 5-460). License #1231002471. Hospital-grade sterilization, single-use disposable components, and documented sanitation protocol for every appointment.' },
              { icon: <Eye size={20} />, title: 'Healed-First Documentation', desc: 'Every correction outcome is documented at the healed stage — minimum 6 weeks post-procedure. Fresh results are never presented as final outcomes. Healed documentation is the standard by which all work is evaluated.' },
              { icon: <Target size={20} />, title: 'Corrective Pigment Certification', desc: 'EU-compliant vegan pigments specifically formulated for color correction work. Hypoallergenic, heavy-metal-free, tested for skin reactivity. Corrective formulations selected per individual case — not standard off-the-shelf shades.' },
            ].map((item, i) => (
              <AnimatedSection key={i}>
                <div className="bg-white rounded-xl p-6 border border-[#E6DAD2]/20 h-full">
                  <div className="w-10 h-10 bg-[#E6DAD2]/30 rounded-lg flex items-center justify-center text-[#9A7B69] mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-semibold text-[#2D2D2B] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#2D2D2B]/60 leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="mt-8 text-center">
              <Link
                to="/permanent-makeup-safety-dmv"
                className="inline-flex items-center gap-2 text-[#9A7B69] hover:text-[#2D2D2B] text-sm font-medium transition-colors"
              >
                Review Full Safety Protocol & Documentation Standards
                <ArrowRight size={14} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 11 — CORRECTION-SPECIFIC FAQ
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <AnimatedSection>
            <InlineFaqAccordion
              faqs={faqs}
              title="Correction & Pigment Recalibration — Frequently Asked Questions"
              subtitle="Detailed answers to the most common questions about permanent makeup correction, candidacy, process, and expectations."
              maxVisible={10}
            />
          </AnimatedSection>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 12 — GEOGRAPHIC AUTHORITY
          Internal linking to city pages. Reinforces regional presence.
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-[#F9F7F5] border-t border-[#E6DAD2]/20">
        <div className="container-custom max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-8">
              <h2 className="text-xl md:text-2xl font-cormorant font-medium text-[#2D2D2B] mb-2">
                Serving Fairfax County & Northern Virginia
              </h2>
              <p className="text-sm text-[#2D2D2B]/50">
                Correction clients routinely travel from throughout the region. The caliber of corrective technique justifies the distance.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {[
                { name: 'Annandale', to: '/licensed-pmu-artist-annandale' },
                { name: 'McLean', to: '/ombre-brows-mclean-va' },
                { name: 'Vienna', to: '/ombre-brows-vienna-va' },
                { name: 'Reston', to: '/ombre-brows-reston-va' },
                { name: 'Centreville', to: '/ombre-brows-centreville-va' },
                { name: 'Chantilly', to: '/ombre-brows-chantilly-va' },
                { name: 'Arlington', to: '/ombre-brows-arlington-va' },
                { name: 'Alexandria', to: '/ombre-brows-alexandria-va' },
                { name: 'Fairfax', to: '/ombre-brows-fairfax-va' },
                { name: 'Falls Church', to: '/permanent-makeup-falls-church-va' },
                { name: 'Springfield', to: '/permanent-makeup-springfield-va' },
                { name: 'Tysons', to: '/permanent-makeup-tysons-va' },
                { name: 'Washington DC', to: '/permanent-makeup-dc' },
              ].map((city, i) => (
                <Link
                  key={i}
                  to={city.to}
                  className="px-4 py-2 bg-white rounded-full text-sm text-[#2D2D2B] hover:bg-[#E6DAD2] transition-colors border border-[#E6DAD2]/30"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/permanent-makeup-fairfax-county" className="inline-flex items-center gap-1 text-[#9A7B69] hover:text-[#2D2D2B] transition-colors font-medium">
                <MapPin size={14} />
                Fairfax County Guide
                <ArrowRight size={12} />
              </Link>
              <Link to="/signature-ombre-brows" className="inline-flex items-center gap-1 text-[#9A7B69] hover:text-[#2D2D2B] transition-colors font-medium">
                Signature Ombré Brows
                <ArrowRight size={12} />
              </Link>
              <Link to="/permanent-makeup-safety-dmv" className="inline-flex items-center gap-1 text-[#9A7B69] hover:text-[#2D2D2B] transition-colors font-medium">
                Safety Standards
                <ArrowRight size={12} />
              </Link>
              <Link to="/gallery" className="inline-flex items-center gap-1 text-[#9A7B69] hover:text-[#2D2D2B] transition-colors font-medium">
                Healed Results Gallery
                <ArrowRight size={12} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 13 — STRUCTURED ASSESSMENT CTA
          Final conversion. Calm, measured. Not "Book Now."
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#2D2D2B]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />

        <div className="container-custom relative z-10 max-w-3xl mx-auto text-center text-white">
          <AnimatedSection>
            <p className="text-[0.8rem] tracking-[0.2em] uppercase text-[#E6DAD2]/70 mb-4">
              Advanced Corrective Protocol · VA-Licensed Studio
            </p>
            <h2 className="text-2xl md:text-3xl font-cormorant font-medium mb-4">
              The First Step Is an Honest Assessment
            </h2>
            <p className="text-white/60 leading-relaxed mb-8 max-w-xl mx-auto">
              Every correction begins with a structured evaluation — not a sales pitch. If your case is suitable for correction, you'll receive a documented plan with realistic expectations. If lightening is recommended first, you'll know that too.
            </p>
            <p className="text-sm text-[#E6DAD2]/70 mb-8">
              Assessment fee: $200 — credited in full toward the correction procedure.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/booking"
                className="group inline-flex items-center gap-3 bg-[#E6DAD2] hover:bg-white text-[#2D2D2B] px-8 py-4 rounded-full font-medium transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
              >
                <span>Schedule a Structured Correction Assessment</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:+15712838228"
                className="group inline-flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                  <Phone size={16} />
                </span>
                <span className="text-sm tracking-wide">(571) 283-8228</span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════════
          SEMANTIC SEO FOOTER
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-10 bg-[#F0E4D8]/30 border-t border-[#E6DAD2]/20">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="text-xs text-[#2D2D2B]/40 leading-relaxed space-y-3">
            <p>
              <strong className="text-[#2D2D2B]/50">PMU Correction & Pigment Recalibration at Ink Mugi — Annandale, Virginia</strong> — Advanced permanent makeup correction specializing in undertone neutralization, structural redesign, and pigment recalibration. Fix botched microblading, grey or ashy brow migration, over-saturated permanent makeup, and faded cosmetic tattooing. Virginia licensed (#1231002471), fully insured, 330+ documented procedures, 0.19% complication rate.
            </p>
            <p>
              Related searches: microblading correction near me, PMU correction Fairfax County, fix grey microblading Virginia, ombré brow correction Annandale VA, eyebrow tattoo correction Northern Virginia, botched microblading fix Arlington, over-saturated brows correction, brow pigment neutralization McLean, permanent makeup fix Vienna VA, cosmetic tattoo repair Reston, PMU color correction Chantilly, brow correction Centreville, microblading fix near me DMV.
            </p>
            <p>
              Serving: Annandale, McLean, Vienna, Reston, Centreville, Chantilly, Great Falls, Arlington, Alexandria, Fairfax, Falls Church, Springfield, Tysons Corner, Washington DC, and the greater Northern Virginia / Fairfax County region.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PmuCorrectionRestoration;
