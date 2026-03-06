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
  Eye,
  Layers,
  XCircle,
  RefreshCw,
  Award,
  Heart
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import InlineFaqAccordion from '../components/InlineFaqAccordion';
import RelatedMicrobladingProblems from '../components/RelatedMicrobladingProblems';

const BotchedMicrobladingFix: React.FC = () => {

  const faqs = [
    {
      question: "What counts as botched microblading?",
      answer: "Botched microblading refers to any result that significantly deviates from the desired outcome in shape, symmetry, color, or texture. Common presentations include: (1) severe asymmetry where one brow is noticeably different in height, length, or arch position, (2) unnatural or harsh shape that doesn't complement the client's bone structure, (3) color shift to grey, blue, orange, or red, (4) blurred or 'blown-out' strokes where individual hairstrokes have bled together into smudges, (5) scarring from excessive pressure during application, and (6) uneven pigment density with patchy or over-saturated areas. If looking at your brows causes frustration or embarrassment, that's a meaningful signal regardless of the technical classification, and many clients come in feeling that way even when the issue is a very specific, correctable problem like undertone shift or asymmetry. Part of experienced correction work is separating the emotional frustration from the technical issue so the fix can be planned properly."
    },
    {
      question: "Can botched microblading be fixed?",
      answer: "Yes, in the vast majority of cases. The correction approach depends on the type and severity of the problem. Color issues (grey, blue, orange shift) are addressed through undertone neutralization followed by a powder brow overlay. Shape problems are corrected by lightening or removing pigment outside the ideal shape using saline removal, then re-establishing the correct form with powder brows. Blurred strokes are covered with a powder technique that provides even, consistent coverage. The only cases where correction is limited are those involving significant scarring — though even scarred tissue can often be treated with modified technique and additional sessions."
    },
    {
      question: "How long do I need to wait before getting botched microblading corrected?",
      answer: "We recommend waiting a minimum of 8–12 weeks after your last microblading session before pursuing correction. This allows the skin to complete its full healing cycle and the pigment to stabilize at its true healed color. Attempting correction on still-healing skin increases complication risk and makes accurate color assessment impossible. If your microblading is more than 6 months old, you're in an ideal correction window — the skin is fully stable and we can accurately evaluate what we're working with."
    },
    {
      question: "How many sessions does botched microblading correction take?",
      answer: "Most corrections require 2–3 sessions spaced 6–8 weeks apart. A straightforward color correction (grey or ashy shift) may only need 2 sessions: one for undertone neutralization and one for the powder brow overlay. More complex cases involving shape correction require an additional preliminary session for targeted saline removal before neutralization begins. At your consultation, we'll assess the specific issues and provide a clear session plan with realistic expectations — we never promise one-session miracles for complex corrections."
    },
    {
      question: "Will powder brows look good over botched microblading?",
      answer: "Powder brows are the gold-standard correction technique for botched microblading specifically because they address the weaknesses that caused the original failure. The stippled dot technique provides even, consistent coverage that masks blurred strokes and patchy areas. The digital machine allows precise depth control, preventing the over-deep placement that leads to color shift. When preceded by proper neutralization (for color issues) or saline removal (for shape issues), a powder brow overlay consistently delivers natural, flattering results. We've performed 330+ procedures and specialize in working with previously treated skin."
    },
    {
      question: "Is botched microblading correction painful?",
      answer: "Most clients report correction to be equal to or less uncomfortable than the original microblading procedure. We apply pharmaceutical-grade topical anesthetic 20–30 minutes before beginning work, and re-apply during the session as needed. The powder technique used for correction is generally less sensation-intensive than microblading's blade strokes. For sessions involving saline lightening, there may be slightly more sensation, but it's typically described as 'warm scratching' rather than pain. Our clients consistently report that the emotional relief of correcting botched brows far outweighs any temporary discomfort."
    },
    {
      question: "How much does it cost to fix botched microblading?",
      answer: "Correction pricing depends on the complexity of the case. At Ink Mugi, correction consultations are $200 (credited toward the procedure if you proceed). Straightforward color corrections typically range from $600–$800. Complex corrections involving shape modification with saline removal range from $800–$1,200 for the complete correction series. These prices are comparable to or slightly above the cost of original microblading — but deliver dramatically superior, longer-lasting results because we're using powder technique with premium pigments specifically designed for stability."
    },
    {
      question: "Can I get my botched microblading removed instead of corrected?",
      answer: "Complete removal is possible through saline or laser removal, but correction-and-overlay typically produces better outcomes. Full removal requires 4–8+ sessions over 12–24 months and often doesn't achieve 100% pigment elimination. It also leaves you without brows during the process. Correction takes 2–3 sessions over 3–5 months and you leave with beautiful, natural-looking powder brows. That said, if removal is your preference, we offer saline removal at Ink Mugi and can discuss both pathways during your consultation."
    }
  ];

  const failureTypes = [
    {
      title: 'Asymmetric Shape',
      icon: Target,
      description: 'One brow is visibly different from the other in arch height, thickness, length, or tail position. This typically results from inadequate pre-draw mapping or not accounting for the client\'s natural facial asymmetry during the design phase. Every face has some natural asymmetry, but skilled PMU artistry works with it — not against it.',
      correction: 'Shape correction + powder brow overlay to establish balanced, complementary arch and form',
      severity: 'Moderate — correctable in 2–3 sessions'
    },
    {
      title: 'Blurred or "Blown-Out" Strokes',
      icon: Eye,
      description: 'Hair strokes that were initially crisp have expanded, bled together, or look smudged. This occurs when the blade creates too-wide incisions or deposits pigment at inconsistent depths, allowing pigment migration during healing. In oily-skin clients, this effect is accelerated because sebum production pushes pigment laterally within the dermis.',
      correction: 'Powder brow overlay provides complete, even coverage that conceals blurred strokes',
      severity: 'Moderate — typically correctable in 1–2 sessions'
    },
    {
      title: 'Grey, Blue, or Unnatural Color',
      icon: Layers,
      description: 'Brows have shifted from their intended warm brown to grey, blue-grey, ashy, or occasionally orange/red tones. Color shift is the single most common microblading failure — caused by pigment oxidation, over-deep placement, or using pigments poorly matched to the client\'s skin undertone. The humid DMV climate accelerates this process.',
      correction: 'Undertone neutralization with warm corrector pigment, followed by a stable powder brow overlay',
      severity: 'Moderate — correctable in 2 sessions'
    },
    {
      title: 'Over-Saturated / "Blocky" Brows',
      icon: XCircle,
      description: 'Brows appear excessively dark, filled-in, or unnatural — more like drawn-on marker than real brow hair. This results from too many passes with the blade, pigment placed too densely, or pigment that was too dark for the client\'s coloring. The hair stroke pattern is lost under the sheer volume of pigment.',
      correction: 'Saline lightening to reduce density, then powder brow application with appropriate color and gradient',
      severity: 'Moderate to complex — 2–3 sessions depending on density'
    },
    {
      title: 'Scarring or Textural Damage',
      icon: AlertTriangle,
      description: 'Visible scarring, ridges, or textural irregularity in the brow area. Scarring occurs when the blade is applied with excessive pressure, too many passes over the same area, or the skin wasn\'t suitable for microblading (thin, mature, or highly reactive skin types). Scar tissue holds pigment differently and can make the area uneven.',
      correction: 'Modified technique on scarred tissue using gentle machine approach — possible with additional sessions',
      severity: 'Complex — requires individualized assessment'
    }
  ];

  return (
    <>
      <SEO
        title="Botched Microblading: How to Fix Bad Microblading | Ink Mugi"
        description="Expert guide to fixing botched microblading — asymmetry, blurred strokes, grey color shift, and textural damage. Correction protocol, pricing, and expected outcomes at Ink Mugi, Annandale VA."
        path="/botched-microblading-fix"
        keywords="botched microblading, fix bad microblading, bad microblading correction, botched microblading fix near me, fix uneven microblading, bad microblading repair, microblading gone wrong, microblading correction, botched eyebrow tattoo, fix ugly microblading"
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Botched Microblading: How to Fix Bad Microblading Results",
            "description": "A comprehensive guide to identifying and correcting botched microblading — covering asymmetry, blurred strokes, color shift, over-saturation, and scarring. Includes correction protocols and expected outcomes.",
            "author": {
              "@type": "Person",
              "name": "Mugi",
              "jobTitle": "Licensed PMU Artist",
              "worksFor": { "@type": "HealthAndBeautyBusiness", "name": "Ink Mugi", "url": "https://www.inkmugi.com" }
            },
            "publisher": {
              "@type": "Organization",
              "name": "Ink Mugi",
              "url": "https://www.inkmugi.com",
              "logo": { "@type": "ImageObject", "url": "https://www.inkmugi.com/logo.png" }
            },
            "datePublished": "2026-03-06",
            "dateModified": "2026-03-06",
            "url": "https://www.inkmugi.com/botched-microblading-fix",
            "mainEntityOfPage": "https://www.inkmugi.com/botched-microblading-fix"
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
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.inkmugi.com/" },
              { "@type": "ListItem", "position": 2, "name": "Microblading Correction", "item": "https://www.inkmugi.com/microblading-correction-northern-virginia" },
              { "@type": "ListItem", "position": 3, "name": "Botched Microblading Fix", "item": "https://www.inkmugi.com/botched-microblading-fix" }
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
              Correction Specialist Guide
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium mb-6 text-[#2D2D2B] leading-tight">
              Botched Microblading?<br />
              <span className="text-amber-700">Here's How to Fix It</span>
            </h1>
            <p className="text-lg md:text-xl text-[#2D2D2B]/80 max-w-3xl mx-auto mb-4">
              Whether your microblading healed grey, blurred, asymmetric, or just doesn't look right —
              it's fixable. This guide explains what went wrong, what correction involves, and how to get
              brows you actually love.
            </p>
            <p className="text-sm text-[#2D2D2B]/60 max-w-2xl mx-auto mb-8">
              By a Virginia-licensed PMU artist with 330+ procedures • Specializing in corrections
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#2D2D2B] text-white rounded-full font-medium hover:bg-[#4A4A47] transition-all"
              >
                Book Correction Consultation
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
                How to Fix Botched Microblading
              </h2>
              <p className="text-[#2D2D2B]/80 text-lg mb-4">
                Botched microblading is fixed through a <strong>multi-step correction protocol</strong>: first, the specific problem is diagnosed (color shift, shape error, blurred strokes, or over-saturation). Then, targeted correction is applied — undertone neutralization for color issues, saline lightening for shape/density problems — followed by a powder brow overlay that provides natural, stable coverage over the original work.
              </p>
              <p className="text-[#2D2D2B]/70">
                Most corrections take <strong>2–3 sessions</strong> spaced 6–8 weeks apart and result in natural-looking powder brows that last 2–3x longer than the original microblading. In practice, the timeline is less about rushing to cover the old work and more about letting each correction step heal cleanly so the next one is predictable.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Types of Botched Microblading */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Types of Botched Microblading
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
              Not all bad microblading is the same. The specific type of failure determines the correction approach, timeline, and expected outcome.
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {failureTypes.map((type, idx) => (
              <AnimatedSection key={type.title} delay={idx + 1}>
                <div className="bg-white p-8 rounded-xl border border-[#E6DAD2]">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#2D2D2B] rounded-full flex items-center justify-center flex-shrink-0">
                      <type.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-[#2D2D2B]">{type.title}</h3>
                    </div>
                  </div>
                  <p className="text-[#2D2D2B]/70 leading-relaxed mb-4">{type.description}</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-green-50 border border-green-100 p-4 rounded-lg">
                      <p className="text-sm text-[#2D2D2B]/80">
                        <strong className="text-green-800">Correction approach:</strong> {type.correction}
                      </p>
                    </div>
                    <div className="bg-[#F9F7F5] border border-[#E6DAD2] p-4 rounded-lg">
                      <p className="text-sm text-[#2D2D2B]/80">
                        <strong>Complexity:</strong> {type.severity}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Does Microblading Go Wrong? */}
      <section className="py-20 bg-[#2D2D2B]">
        <div className="container-custom max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-white mb-4">
              Why Does Microblading Go Wrong?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Understanding the root causes helps you make informed decisions about correction and future procedures. This diagnostic step matters because two bad-looking brows can require completely different correction plans.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Technique Limitations',
                points: [
                  'Manual blade lacks the depth control of digital machines',
                  'Open-incision method exposes pigment to oxidation',
                  'Difficult to achieve consistent pressure across the brow',
                  'Higher skill variance — heavily operator-dependent'
                ]
              },
              {
                title: 'Skill & Training Gaps',
                points: [
                  'Microblading certification can require as little as 40 hours',
                  'Inadequate training in color theory and skin undertones',
                  'Poor facial mapping and measurement technique',
                  'Lack of experience with diverse skin types and tones'
                ]
              },
              {
                title: 'Pigment & Product Issues',
                points: [
                  'Low-quality pigments with unstable color compounds',
                  'Wrong pigment selection for client\'s undertone',
                  'Pigments not formulated for humid DMV climate',
                  'Using expired or improperly stored products'
                ]
              },
              {
                title: 'Client Screening Failures',
                points: [
                  'Performing microblading on oily skin despite known failure risk',
                  'Not assessing skin condition, medications, or medical history adequately',
                  'Ignoring skin type and lifestyle factors that affect results',
                  'Failing to set realistic expectations based on individual factors'
                ]
              }
            ].map((category, idx) => (
              <AnimatedSection key={category.title} delay={idx + 1}>
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl h-full">
                  <h3 className="text-lg font-medium text-white mb-4">{category.title}</h3>
                  <ul className="space-y-3">
                    {category.points.map((point, pointIdx) => (
                      <li key={pointIdx} className="flex items-start gap-2 text-white/60 text-sm">
                        <AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-8 text-center" delay={5}>
            <p className="text-white/50 text-sm">
              Learn more about <Link to="/microblading-for-oily-skin" className="text-amber-400 hover:text-amber-300 underline">why microblading fails on oily skin</Link> and{' '}
              <Link to="/why-microblading-fades" className="text-amber-400 hover:text-amber-300 underline">why microblading fades prematurely</Link>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* The Correction Process */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              The Ink Mugi Correction Process
            </h2>
            <p className="text-[#2D2D2B]/80 text-lg leading-relaxed mb-8">
              Correcting botched microblading is more complex than a new procedure — it requires diagnostic skill, color theory expertise, and experience working with previously treated skin. A common situation we see is a client assuming she needs full removal when the real issue is isolated shape drift or grey shift, so the first step is always diagnosis. This is where practitioner experience matters most, because the wrong first move can cost months. Here's exactly how we approach each correction case.
            </p>
          </AnimatedSection>

          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Diagnostic Consultation',
                desc: 'We begin with a 45-minute in-person assessment. Under magnification and controlled lighting, we evaluate: existing pigment color and depth, stroke condition and clarity, skin texture and scarring, and symmetry deviation. We photograph under multiple lighting conditions and determine which correction protocols apply to your specific case. You leave with a clear plan, timeline, and precise cost — no surprises.',
              },
              {
                step: '02',
                title: 'Preliminary Treatment (If Needed)',
                desc: 'For shape corrections, excessive saturation, or stubborn color: we perform targeted saline lightening on the areas requiring modification. This draws existing pigment toward the surface for extraction — selectively removing or fading the problematic pigment without affecting surrounding skin. Not all cases require this step — many color-only corrections skip directly to neutralization.',
              },
              {
                step: '03',
                title: 'Color Neutralization',
                desc: 'For grey, blue, ashy, or otherwise color-shifted brows: we apply warm-spectrum corrector pigment calibrated to counter the specific cool or unwanted shift. Orange-family correctors neutralize blue-grey tones; peach-family correctors address ashy or cool-brown tones. This work is performed with a digital machine for precise depth and even coverage. After this session heals (4–6 weeks), the underlying color is neutralized and ready for the final overlay.',
              },
              {
                step: '04',
                title: 'Powder Brow Overlay',
                desc: 'The transformation session. We apply a full ombré powder brow in your ideal color — matched to your hair, skin tone, and personal preference. The stippled technique creates an even, natural pixel-effect that conceals all signs of the previous work. Digital machine precision ensures consistent depth throughout, and our warm-dominant pigment formulation resists the grey-shifting that caused your original problem.',
              },
              {
                step: '05',
                title: 'Perfecting Touch-Up',
                desc: 'At 6–8 weeks post-overlay, we assess the healed result and perform any refinements — adjusting saturation, perfecting the gradient, or fine-tuning the shape. This session is included in your correction price. After this appointment, most clients won\'t need another session for 18–36 months — dramatically longer than the microblading they\'re replacing.',
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
        </div>
      </section>

      {/* Why Choose Ink Mugi for Correction */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              Why Clients Choose Ink Mugi for Correction Work
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Award,
                title: '330+ Procedures',
                desc: 'Extensive experience across the full spectrum of correction cases — from simple color corrections to complex multi-session shape rebuilds. We\'ve seen every type of botched microblading and know which protocols deliver the best outcomes.'
              },
              {
                icon: Target,
                title: 'Digital Machine Precision',
                desc: 'All correction work is performed with a digital PMU machine — not manual tools. This provides the depth control, consistency, and precision that correction demands. The machine eliminates the variables that caused many microblading failures in the first place.'
              },
              {
                icon: Heart,
                title: 'Climate-Calibrated Pigments',
                desc: 'We use premium pigments specifically selected for warm-tone stability in the DMV\'s humid climate. Our pigment selection accounts for the environmental factors that accelerate color shift — reducing the likelihood of future problems.'
              },
              {
                icon: RefreshCw,
                title: 'Realistic Expectations',
                desc: 'We never over-promise one-session miracles. During your consultation, you\'ll receive an honest assessment of what\'s achievable, how many sessions it will take, and what the realistic outcome looks like for your specific case. If we can\'t significantly improve the result, we\'ll tell you.'
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
        </div>
      </section>

      {/* What to Expect: Before Your Consultation */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              Preparing for Your Correction Consultation
            </h2>
            <div className="bg-[#F9F7F5] border border-[#E6DAD2] p-8 rounded-xl">
              <ul className="space-y-4">
                {[
                  'Bring photos of your brows immediately after the original procedure (if available) — this helps us assess the degree of change',
                  'Note when the original procedure was done and how many sessions you\'ve had (including touch-ups)',
                  'List any products you apply to the brow area (retinol, glycolic acid, vitamin C, etc.)',
                  'Arrive with clean brows — no brow makeup, tint, or pencil filling',
                  'Write down what specifically bothers you about the current result — be as detailed as possible',
                  'Know that this is a no-pressure assessment — we\'ll explain options and let you decide on your timeline'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-[#2D2D2B]/70 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Hub Links */}
      <RelatedMicrobladingProblems currentPath="/botched-microblading-fix" bgClass="bg-[#F9F7F5]" cardBgClass="bg-white" />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Botched Microblading FAQ
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
              Your Brows Are Fixable
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg mb-8">
              Botched microblading doesn't have to be permanent. Our powder brow correction transforms problematic results into natural, beautiful brows that last. Free correction consultation — we'll assess your case and give you honest answers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2D2D2B] rounded-full font-medium hover:bg-[#F0E4D8] transition-all"
              >
                Book Free Correction Consultation
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
          Related searches: botched microblading, fix bad microblading, bad microblading correction,
          botched microblading fix near me, microblading gone wrong, fix ugly microblading,
          uneven microblading fix, microblading correction specialist, bad eyebrow tattoo fix,
          botched microblading correction Northern Virginia, fix bad PMU
        </p>
      </div>
    </>
  );
};

export default BotchedMicrobladingFix;
