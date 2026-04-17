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
  Eye,
  Clock,
  MapPin,
  FileText
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import InlineFaqAccordion from '../components/InlineFaqAccordion';

const MicrobladingCorrectionNorthernVirginia: React.FC = () => {

  const faqs = [
    {
      question: "Can old microblading be corrected with powder brows?",
      answer: "In most cases, yes. Ombré powder brow technique can overlay faded, patchy, or discolored microblading to produce a clean, uniform result. The stippled application method is particularly effective at neutralizing the uneven pigment patterns left by degraded microblading. However, outcomes depend on the depth, saturation, and undertone of existing pigment. Approximately 80–85% of microblading correction cases can proceed directly to powder brow application. The remaining 15–20% may require partial lightening first to create a workable canvas."
    },
    {
      question: "Why did my microblading turn grey?",
      answer: "Grey or ashy color shift after microblading occurs due to pigment oxidation beneath the skin. Common causes include: pigment deposited too deep into the dermis (where the body encapsulates it differently, altering its appearance), use of carbon-based pigments that shift cool against your skin's natural warm undertone, or suboptimal pigment formulation for your specific skin chemistry. This issue is accelerated in the DMV's humid climate, which promotes faster pigment degradation. Correction requires undertone neutralization — introducing warm-spectrum corrective pigments to counteract the cool shift before rebuilding natural tonality."
    },
    {
      question: "How much does microblading correction cost in Northern Virginia?",
      answer: "At Ink Mugi, structured microblading correction is $600. This includes the extended procedure (3–4 hours), specialized corrective pigments, and one follow-up refinement appointment at 6–8 weeks. An initial assessment consultation is $200, which is credited toward the procedure if you proceed. In the broader Northern Virginia market, correction services range from $400–$1,200 depending on complexity. Be cautious of low-cost correction — undertone neutralization requires advanced pigment knowledge and specialized materials."
    },
    {
      question: "How many sessions does microblading correction require?",
      answer: "Simple corrections — slight color refresh, minor shape refinement, or overlay on well-faded microblading — are typically completed in one session with a follow-up at 6–8 weeks. Complex cases involving deep undertone neutralization (grey/blue correction), significant structural redesign, or multiple layers of previous work may require 2–3 sessions spaced 6–8 weeks apart. The assessment consultation provides a realistic session estimate based on your specific situation. We will never overpromise on timeline."
    },
    {
      question: "What is the difference between microblading correction and a cover-up?",
      answer: "Cover-up simply applies new pigment over existing work — masking the problem without addressing the underlying cause. Correction is a multi-phase recalibration: undertone analysis, neutralization of shifted pigment, structural redesign, and controlled pigment rebuilding at precise depth. Cover-ups often result in darker, less natural outcomes that may shift again. Correction works with existing pigment chemistry to produce a stable, predictable healed result. At Ink Mugi, we only perform correction — not cover-ups."
    },
    {
      question: "Will I need laser removal before microblading correction?",
      answer: "Not always. Many cases can proceed directly to corrective powder brow work. However, deeply saturated pigment, significant blue-grey migration, or cases with multiple layers of previous work may benefit from 1–2 sessions of saline or laser lightening to create a workable canvas. The assessment determines whether lightening is recommended. When it is, we provide referrals to vetted removal specialists in Northern Virginia and coordinate timeline so correction can begin as soon as the lightening has healed."
    },
    {
      question: "How long does microblading correction healing take?",
      answer: "Correction healing follows the same general timeline as a primary procedure: Days 1–5, treating area appears darker than the final result. Days 5–10, surface pigment flakes naturally (do not pick). Days 10–21, the 'ghost phase' where brows appear lighter than expected — this is normal. Weeks 3–6, true healed color emerges. The 6–8 week follow-up evaluates the healed result. Correction healing may present slightly differently than primary work due to the underlying pigment layer, but timeline remains consistent."
    },
    {
      question: "Can you fix microblading that was done elsewhere?",
      answer: "Yes, and this is the majority of our correction work. We correct microblading performed by other artists throughout the DMV area and beyond. The assessment consultation evaluates the specific characteristics of your existing work — pigment depth, color chemistry, skin response — regardless of where it was originally performed. We have corrected work from studios across Northern Virginia, DC, Maryland, and out-of-state."
    },
    {
      question: "What areas do you serve for microblading correction?",
      answer: "Our VA-licensed studio is in Annandale, Virginia. We serve microblading correction clients throughout Fairfax County (McLean, Vienna, Reston, Centreville, Chantilly, Great Falls), Arlington, Alexandria, Falls Church, Springfield, Tysons Corner, Washington DC, and the broader Northern Virginia region. For correction work specifically, clients regularly travel from Maryland (Bethesda, Silver Spring, Rockville) and beyond — the specialized nature of corrective work justifies the distance."
    },
    {
      question: "Do you decline microblading correction cases?",
      answer: "Yes. Approximately 15–20% of correction consultations result in a recommendation for lightening before corrective work can begin. If existing pigment is too saturated, too deep, or presents undertone instability that would compromise correction quality, we say so directly. Proceeding with correction on an unsuitable canvas produces inferior outcomes — we do not accept that standard. You receive an honest assessment, even if the recommendation is to pursue removal first. The $200 assessment fee ensures our evaluation is thorough and unhurried."
    }
  ];

  const correctionTypes = [
    {
      title: 'Grey/Ashy Color Shift',
      description: 'The most common microblading issue in the DMV. Pigment that was initially warm-toned oxidizes beneath the skin, shifting to grey, blue-grey, or ashy green tones. Caused by pigment deposited too deep, carbon-based pigment formulations, or pigment-skin chemistry mismatch.',
      solution: 'Warm-spectrum undertone neutralization, followed by controlled pigment rebuilding with formulations calibrated to resist re-oxidation.',
      icon: Eye,
      severity: 'Common'
    },
    {
      title: 'Blurred or Merged Strokes',
      description: 'Individual hair strokes that have spread, merged, or lost definition — creating a smudged or muddy appearance. This is especially prevalent in oily skin types and clients exposed to high humidity. The shallow incision technique used in microblading is inherently vulnerable to this issue.',
      solution: 'Powder brow overlay that replaces the blurred stroke pattern with a clean, controlled gradient. The soft-focus technique naturally conceals underlying blur while creating a polished result.',
      icon: Layers,
      severity: 'Common'
    },
    {
      title: 'Uneven or Patchy Fading',
      description: 'Some areas retain pigment while others fade — creating an inconsistent, patchy appearance. Common causes: uneven pressure during original application, varying skin thickness across the brow area, or differential oil production affecting pigment retention.',
      solution: 'Structured color balancing across the entire brow area, using variable saturation to create uniform appearance over both retained and faded zones.',
      icon: Target,
      severity: 'Common'
    },
    {
      title: 'Shape Asymmetry',
      description: 'Brows that are uneven in shape, thickness, arch placement, or tail length. May be the result of the original procedure or may have developed as different sections faded at different rates.',
      solution: 'Comprehensive remapping using facial proportion analysis, followed by structural correction that establishes new, symmetrical boundaries. Previously placed pigment is worked into the new design rather than ignored.',
      icon: FileText,
      severity: 'Moderate'
    },
    {
      title: 'Over-Saturated Pigment',
      description: 'Brows that remain too dark, too dense, or too solidly filled — often from multiple microblading sessions layered without adequate fading between them. The accumulation creates an unnatural, tattooed appearance.',
      solution: 'May require partial lightening (saline or laser) to reduce saturation before corrective application. Assessment determines whether direct correction or a lightening-first approach produces the better outcome.',
      icon: AlertTriangle,
      severity: 'Complex'
    },
    {
      title: 'Scarring from Microblading',
      description: 'Visible scarring in the brow area from microblading performed with excessive pressure, too many passes, or on skin that is prone to scarring. This changes the skin texture and can affect how new pigment is deposited.',
      solution: 'Careful assessment of scar tissue density and flexibility. Powder brow technique can often work within scarred tissue with adjusted technique parameters, though results may differ from unscarred skin. Transparent consultation about realistic expectations.',
      icon: Shield,
      severity: 'Complex'
    }
  ];

  return (
    <>
      <SEO
        title="Microblading Correction Northern Virginia | Fix Grey & Faded Brows | Ink Mugi"
        description="Expert microblading correction in Northern Virginia. Fix grey microblading, blurred strokes & color shift with advanced powder brow techniques. 330+ procedures, VA-licensed. Serving Fairfax County, Arlington, Reston, Tysons & DC."
        path="/microblading-correction-northern-virginia"
        keywords="microblading correction Northern Virginia, fix grey microblading near me, microblading correction Fairfax County, botched microblading fix Virginia, microblading color correction Annandale, grey microblading correction DC, microblading fading fix, microblading to powder brows conversion, eyebrow correction Arlington VA, PMU correction McLean Vienna"
      >
        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Microblading Correction — Powder Brow Restoration",
            "description": "Advanced microblading correction service using ombré powder brow technique. Specializing in grey color shift repair, blurred stroke correction, and uneven fading restoration for Northern Virginia, DC, and Maryland clients.",
            "url": "https://inkmugi.com/microblading-correction-northern-virginia",
            "provider": {
              "@type": "HealthAndBeautyBusiness",
              "@id": "https://inkmugi.com/#business",
              "name": "Ink Mugi",
              "telephone": "+1-571-283-8228",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "7857 Heritage Dr #330",
                "addressLocality": "Annandale",
                "addressRegion": "VA",
                "postalCode": "22003",
                "addressCountry": "US"
              },
              "priceRange": "$$$"
            },
            "serviceType": "Microblading Correction & Powder Brow Restoration",
            "offers": {
              "@type": "Offer",
              "price": "600",
              "priceCurrency": "USD",
              "description": "Includes corrective assessment, procedure, specialized pigments, and follow-up refinement"
            },
            "areaServed": [
              { "@type": "AdministrativeArea", "name": "Northern Virginia" },
              { "@type": "AdministrativeArea", "name": "Fairfax County" },
              { "@type": "City", "name": "Arlington" },
              { "@type": "City", "name": "Alexandria" },
              { "@type": "City", "name": "Washington DC" },
              { "@type": "State", "name": "Maryland" }
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
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://inkmugi.com/" },
              { "@type": "ListItem", "position": 2, "name": "PMU Correction", "item": "https://inkmugi.com/pmu-correction-restoration" },
              { "@type": "ListItem", "position": 3, "name": "Microblading Correction", "item": "https://inkmugi.com/microblading-correction-northern-virginia" }
            ]
          })}
        </script>
      </SEO>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#F0E4D8] via-[#E6DAD2] to-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D2D2B] text-white rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Advanced Correction Specialist
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium mb-6 text-[#2D2D2B] leading-tight">
              Microblading Correction in<br />
              <span className="text-amber-700">Northern Virginia</span>
            </h1>
            <p className="text-lg md:text-xl text-[#2D2D2B]/80 max-w-3xl mx-auto mb-4">
              Fix grey microblading, blurred strokes, uneven fading, and color shift — using advanced ombré powder brow techniques refined over 330+ documented procedures.
            </p>
            <p className="text-sm text-[#2D2D2B]/60 max-w-2xl mx-auto mb-8">
              VA-licensed studio in Annandale • Serving Fairfax County, Arlington, Alexandria, DC & Maryland
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#2D2D2B] text-white rounded-full font-medium hover:bg-[#4A4A47] transition-all"
              >
                Book Correction Assessment
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

      {/* Trust Metrics */}
      <section className="py-8 bg-white border-b border-[#E6DAD2]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-cormorant font-bold text-[#2D2D2B]">330+</p>
              <p className="text-sm text-[#2D2D2B]/60">Documented Procedures</p>
            </div>
            <div>
              <p className="text-3xl font-cormorant font-bold text-[#2D2D2B]">0.19%</p>
              <p className="text-sm text-[#2D2D2B]/60">Complication Rate</p>
            </div>
            <div>
              <p className="text-3xl font-cormorant font-bold text-[#2D2D2B]">85%</p>
              <p className="text-sm text-[#2D2D2B]/60">Direct Correction Success</p>
            </div>
            <div>
              <p className="text-3xl font-cormorant font-bold text-[#2D2D2B]">5.0</p>
              <p className="text-sm text-[#2D2D2B]/60">Google Rating (47 Reviews)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Microblading Needs Correction */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              Why Microblading Often Needs Correction
            </h2>
            <p className="text-[#2D2D2B]/80 text-lg leading-relaxed mb-6">
              Microblading is an inherently temperamental technique. In the Washington DC metropolitan area — where humidity ranges from 65–85% in summer months and UV exposure is significant — microblading faces accelerated degradation. The most common reasons Northern Virginia clients seek microblading correction:
            </p>
          </AnimatedSection>

          <AnimatedSection delay={1}>
            <div className="bg-[#F9F7F5] border-l-4 border-amber-600 p-8 rounded-r-xl mb-8">
              <h3 className="text-xl font-medium text-[#2D2D2B] mb-3">The DMV Climate Problem</h3>
              <p className="text-[#2D2D2B]/70 leading-relaxed">
                Northern Virginia's combination of high humidity, temperature extremes, and UV exposure creates conditions that systematically degrade microblading results. Shallow incision-based pigment deposits are more vulnerable to moisture-driven migration and oxidation than the deeper, stippled deposits used in powder brows. This is why the majority of our correction clients are DMV residents whose microblading failed faster than expected.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Correction Types */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom max-w-5xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Types of Microblading Issues We Correct
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
              Each correction case is unique. Here are the most common issues we address, and our approach to resolving each.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {correctionTypes.map((type, idx) => (
              <AnimatedSection key={type.title} delay={idx + 1}>
                <div className="bg-white p-8 rounded-xl border border-[#E6DAD2] h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-[#2D2D2B] rounded-full flex items-center justify-center flex-shrink-0">
                      <type.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-[#2D2D2B]">{type.title}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        type.severity === 'Common' ? 'bg-amber-100 text-amber-700' :
                        type.severity === 'Moderate' ? 'bg-orange-100 text-orange-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {type.severity}
                      </span>
                    </div>
                  </div>
                  <p className="text-[#2D2D2B]/70 text-sm leading-relaxed mb-4">{type.description}</p>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                    <p className="text-sm text-green-800">
                      <strong>Our approach:</strong> {type.solution}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* The Correction Process */}
      <section className="py-20 bg-[#2D2D2B]">
        <div className="container-custom max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-white mb-4">
              Our Microblading Correction Process
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              A structured, multi-phase approach designed for predictable outcomes — not quick fixes.
            </p>
          </AnimatedSection>

          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Assessment Consultation ($200, credited toward procedure)',
                desc: 'A thorough 45-minute evaluation of your existing microblading. We analyze pigment depth, color chemistry, undertone shift, skin condition, and structural integrity. You receive an honest assessment — including whether direct correction is feasible or whether lightening should come first. Approximately 15–20% of consultations result in a lightening recommendation. We photograph current conditions for reference.',
              },
              {
                step: '02',
                title: 'Corrective Plan Development',
                desc: 'Based on the assessment, we develop a correction strategy: undertone neutralization formula, target pigment depth, structural redesign specifications, and session timeline. For direct correction cases, this happens during the assessment. For complex cases, a written plan is provided before scheduling the procedure.',
              },
              {
                step: '03',
                title: 'Corrective Procedure (3–4 hours)',
                desc: 'Extended procedure time allows for careful layering and precise pigment application over existing work. The process includes: skin preparation and numbing, undertone neutralization where needed, structural remapping and boundary marking, controlled powder brow application using corrective pigment formulations, and real-time assessment of pigment response to underlying layers.',
              },
              {
                step: '04',
                title: 'Guided Healing (6 weeks)',
                desc: 'You receive detailed aftercare instructions specific to correction work, a premium healing kit, and direct text access to Mugi during the critical healing window. Correction-specific healing considerations are addressed proactively — such as how the underlying pigment may influence surface appearance during the ghost phase.',
              },
              {
                step: '05',
                title: 'Follow-Up Refinement (6–8 weeks)',
                desc: 'Healed-result evaluation at the 6–8 week mark. We compare healed outcome against the correction plan targets. Refinement adjustments — if needed — are performed during this appointment. One follow-up refinement is included in the $600 correction fee. Complex cases requiring additional sessions are priced transparently during the initial assessment.',
              },
            ].map((item, idx) => (
              <AnimatedSection key={item.step} delay={idx + 1}>
                <div className="flex gap-6 items-start bg-white/5 p-6 rounded-xl border border-white/10">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-amber-700 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">{item.title}</h3>
                    <p className="text-white/70 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-8 text-[#2D2D2B]">
              Is Microblading Correction Right for You?
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={1}>
              <div className="bg-green-50 p-8 rounded-xl border border-green-100 h-full">
                <h3 className="text-xl font-medium text-green-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />
                  Good Candidates
                </h3>
                <ul className="space-y-3">
                  {[
                    'Microblading that has faded to grey, blue, or ashy tones',
                    'Blurred or merged hair strokes that look undefined',
                    'Uneven or patchy fading across the brow area',
                    'Shape asymmetry or structural issues',
                    'Microblading more than 6 months old',
                    'Microblading that failed on oily skin',
                    'Desire to transition from hair strokes to soft gradient brows',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-green-800">
                      <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <div className="bg-red-50 p-8 rounded-xl border border-red-100 h-full">
                <h3 className="text-xl font-medium text-red-800 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6" />
                  May Need Lightening First
                </h3>
                <ul className="space-y-3">
                  {[
                    'Very dark, heavily saturated pigment from multiple sessions',
                    'Deep blue-grey migration with no warm undertone remaining',
                    'Multiple layers of previous correction attempts',
                    'Significant scarring with keloid characteristics',
                    'Procedure performed within the last 3 months (still healing)',
                    'Active skin conditions in the brow area',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-red-800">
                      <AlertTriangle className="w-4 h-4 mt-1 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Geographic Service Area */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Serving All of Northern Virginia, DC & Maryland
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
              Our Annandale studio is centrally located for correction clients throughout the DMV region.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={1}>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-[#E6DAD2]">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-[#2D2D2B]" />
                  <h3 className="font-medium text-[#2D2D2B]">Fairfax County</h3>
                </div>
                <ul className="space-y-2 text-sm text-[#2D2D2B]/70">
                  <li><Link to="/ombre-brows-vienna-va" className="hover:text-amber-700">Vienna</Link> — 12 min</li>
                  <li><Link to="/ombre-brows-fairfax-va" className="hover:text-amber-700">Fairfax</Link> — 10 min</li>
                  <li><Link to="/ombre-brows-mclean-va" className="hover:text-amber-700">McLean</Link> — 18 min</li>
                  <li><Link to="/ombre-brows-reston-va" className="hover:text-amber-700">Reston</Link> — 25 min</li>
                  <li><Link to="/ombre-brows-centreville-va" className="hover:text-amber-700">Centreville</Link> — 22 min</li>
                  <li><Link to="/ombre-brows-chantilly-va" className="hover:text-amber-700">Chantilly</Link> — 25 min</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl border border-[#E6DAD2]">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-[#2D2D2B]" />
                  <h3 className="font-medium text-[#2D2D2B]">Inner NOVA & DC</h3>
                </div>
                <ul className="space-y-2 text-sm text-[#2D2D2B]/70">
                  <li><Link to="/ombre-brows-arlington-va" className="hover:text-amber-700">Arlington</Link> — 12 min</li>
                  <li><Link to="/ombre-brows-alexandria-va" className="hover:text-amber-700">Alexandria</Link> — 15 min</li>
                  <li><Link to="/permanent-makeup-falls-church-va" className="hover:text-amber-700">Falls Church</Link> — 8 min</li>
                  <li><Link to="/permanent-makeup-springfield-va" className="hover:text-amber-700">Springfield</Link> — 12 min</li>
                  <li><Link to="/permanent-makeup-tysons-va" className="hover:text-amber-700">Tysons Corner</Link> — 15 min</li>
                  <li><Link to="/permanent-makeup-dc" className="hover:text-amber-700">Washington DC</Link> — 20 min</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl border border-[#E6DAD2]">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-[#2D2D2B]" />
                  <h3 className="font-medium text-[#2D2D2B]">Extended Service Area</h3>
                </div>
                <ul className="space-y-2 text-sm text-[#2D2D2B]/70">
                  <li><Link to="/ombre-brows-loudoun-county-va" className="hover:text-amber-700">Loudoun County</Link> — 30 min</li>
                  <li>Bethesda, MD — 25 min</li>
                  <li>Silver Spring, MD — 30 min</li>
                  <li>Rockville, MD — 35 min</li>
                  <li>Great Falls — 22 min</li>
                  <li>Woodbridge — 25 min</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Guides Hub Links */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Understanding Microblading Problems
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
              Explore the science behind common microblading issues and learn how powder brows address them.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            <AnimatedSection delay={1}>
              <Link to="/microblading-vs-powder-brows" className="block bg-[#F9F7F5] p-6 rounded-xl border border-[#E6DAD2] hover:shadow-lg transition-shadow h-full">
                <Target className="w-8 h-8 text-[#2D2D2B] mb-4" />
                <h3 className="text-lg font-medium text-[#2D2D2B] mb-2">Microblading vs Powder Brows</h3>
                <p className="text-[#2D2D2B]/60 text-sm">Complete data-driven comparison of techniques, longevity, and outcomes for DMV clients.</p>
                <span className="inline-flex items-center text-amber-700 text-sm font-medium mt-3">
                  Read comparison <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={2}>
              <Link to="/why-microblading-fades" className="block bg-[#F9F7F5] p-6 rounded-xl border border-[#E6DAD2] hover:shadow-lg transition-shadow h-full">
                <Clock className="w-8 h-8 text-[#2D2D2B] mb-4" />
                <h3 className="text-lg font-medium text-[#2D2D2B] mb-2">Why Microblading Fades</h3>
                <p className="text-[#2D2D2B]/60 text-sm">The science behind pigment migration, oxidation, and environmental factors causing rapid fading.</p>
                <span className="inline-flex items-center text-amber-700 text-sm font-medium mt-3">
                  Read guide <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={3}>
              <Link to="/microblading-for-oily-skin" className="block bg-[#F9F7F5] p-6 rounded-xl border border-[#E6DAD2] hover:shadow-lg transition-shadow h-full">
                <Eye className="w-8 h-8 text-[#2D2D2B] mb-4" />
                <h3 className="text-lg font-medium text-[#2D2D2B] mb-2">Microblading & Oily Skin</h3>
                <p className="text-[#2D2D2B]/60 text-sm">Why microblading fails on oily skin and what technique produces 340% better results.</p>
                <span className="inline-flex items-center text-amber-700 text-sm font-medium mt-3">
                  Read guide <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Microblading Correction FAQ
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
              Ready to Fix Your Microblading?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg mb-8">
              Book a correction assessment at our Annandale studio. We'll evaluate your specific situation with complete transparency — including telling you if correction isn't the right first step. $200 assessment fee credited toward the $600 procedure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2D2D2B] rounded-full font-medium hover:bg-[#F0E4D8] transition-all"
              >
                Book Correction Assessment
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

      {/* Hidden SEO Text */}
      <div className="sr-only" aria-hidden="true">
        <p>
          Related searches: microblading correction near me, fix grey microblading Northern Virginia, microblading correction Fairfax,
          botched microblading fix Arlington, microblading turning grey fix Annandale, microblading to powder brows conversion,
          eyebrow tattoo correction Alexandria, PMU correction McLean Vienna, microblading color correction DC area,
          fix faded microblading Springfield VA, microblading correction Tysons, microblading blurring fix Northern Virginia,
          microblading removal alternative, microblading correction cost Northern Virginia
        </p>
      </div>
    </>
  );
};

export default MicrobladingCorrectionNorthernVirginia;
