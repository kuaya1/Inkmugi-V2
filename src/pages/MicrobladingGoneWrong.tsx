import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  ArrowRight,
  Phone,
  CheckCircle,
  AlertTriangle,
  Shield,
  XCircle,
  Eye,
  Clock,
  Layers,
  BookOpen
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import InlineFaqAccordion from '../components/InlineFaqAccordion';
import RelatedMicrobladingProblems from '../components/RelatedMicrobladingProblems';

const MicrobladingGoneWrong: React.FC = () => {

  const faqs = [
    {
      question: "What should I do immediately if my microblading looks wrong?",
      answer: "First, don't panic. Many clients come in convinced something is wrong during the first 3–7 days, but most microblading looks significantly darker and more intense at that stage and this is completely normal. In follow-up conversations, we spend a lot of time separating normal healing from true failure because those two situations feel very similar emotionally in the first week. Do not touch, pick, scratch, or apply any products not included in your aftercare kit. Do not attempt DIY removal with saline, hydrogen peroxide, or any other substance. Follow your aftercare instructions exactly. Wait a minimum of 4–6 weeks for the full healing cycle before evaluating the result. If the result still looks wrong after full healing, schedule a consultation with a correction specialist."
    },
    {
      question: "How long should I wait before trying to fix bad microblading?",
      answer: "Wait at least 8–12 weeks after your last microblading session before pursuing correction. The skin needs to complete its full healing cycle, and pigment must stabilize at its true healed color. Attempting correction on still-healing skin increases complication risk and prevents accurate color assessment. If your microblading is more than 6 months old, you're in an ideal correction window — the skin is fully stable and the healed result can be accurately evaluated."
    },
    {
      question: "Can microblading gone wrong be completely fixed?",
      answer: "In the vast majority of cases, yes. The correction approach depends on the specific problem: color shift (grey, blue, orange) is addressed through undertone neutralization followed by a powder brow overlay. Shape errors are corrected by lightening pigment outside the ideal shape using saline removal, then re-establishing the correct form. Blurred strokes are covered with powder technique that provides even, consistent coverage. The only cases where correction is limited are those involving significant scarring — though even scarred tissue can often be treated with modified technique."
    },
    {
      question: "Is it normal for microblading to look bad at first?",
      answer: "Yes — microblading goes through a significant healing progression. Days 1–3: brows appear 30–40% darker than the final result. Days 4–7: brows begin flaking and may look patchy (this is the 'ugly duckling' phase). Days 7–14: brows appear very light as the top layer of pigment sheds. Days 14–28: color gradually returns as deeper pigment settles. The true result isn't visible until 4–6 weeks post-procedure. If you're in the first 4 weeks, it may be too early to determine whether something has genuinely gone wrong."
    },
    {
      question: "How much does it cost to fix microblading that went wrong?",
      answer: "At Ink Mugi, correction consultations are $200 (credited toward the procedure if you proceed). Straightforward color corrections typically range from $600–$800. Complex corrections involving shape modification with saline removal range from $800–$1,200 for the complete correction series. These prices include an initial assessment, the correction sessions, and a perfecting touch-up at 6–8 weeks."
    },
    {
      question: "Can I get powder brows over bad microblading?",
      answer: "In most cases, yes. Powder brows are the gold-standard correction technique for failed microblading because the stippled dot technique provides even coverage that masks blurred strokes and patchy areas. However, the approach depends on your specific situation: some cases can proceed directly to a powder brow overlay, while others benefit from preliminary saline lightening or color neutralization first. A consultation is required to assess your case and determine the optimal correction protocol."
    },
    {
      question: "What are the signs that microblading has gone wrong?",
      answer: "After full healing (4–6 weeks), signs of failed microblading include: (1) grey, blue, or ashy color instead of warm brown, (2) noticeable asymmetry in shape, arch, or tail position, (3) blurred or smudged strokes that lack definition, (4) uneven pigment — some areas too dark, others too light, (5) brows look blocky or unnatural, (6) visible scarring or textural irregularity, (7) pigment has faded significantly within 3–6 months. If you're experiencing any of these after the full healing period, correction is likely needed."
    },
    {
      question: "Should I go back to the original artist to fix bad microblading?",
      answer: "This depends on the situation, but in many cases, seeking a different artist — specifically a correction specialist — produces better outcomes. If the original artist's technique caused the problem (wrong depth, incorrect pigment, poor mapping), repeating the same technique may produce the same results. Correction requires different skills than initial application: color theory expertise for neutralization, experience with previously treated skin, and often a different technique entirely (machine-based powder brows rather than manual blade). At Ink Mugi, we specialize exclusively in correction and powder brow techniques."
    }
  ];

  const warningSignsAfterHealing = [
    {
      icon: Layers,
      title: 'Grey, Blue, or Ashy Color',
      desc: 'Brows have shifted from the intended warm brown to grey, blue-grey, ashy, or unnatural cool tones. This indicates pigment oxidation or over-deep placement.',
      link: '/microblading-turning-grey',
      linkText: 'Why microblading turns grey →',
    },
    {
      icon: AlertTriangle,
      title: 'Patchy or Uneven Pigment',
      desc: 'Some areas retain pigment while others have faded, creating a blotchy, inconsistent appearance. Usually caused by inconsistent blade depth or oily skin interference.',
      link: '/patchy-microblading',
      linkText: 'Why microblading heals patchy →',
    },
    {
      icon: Clock,
      title: 'Rapid Fading (Within Months)',
      desc: 'Microblading that fades significantly within 3–6 months rather than lasting 12–18 months. Common causes include oily skin, shallow depth, and DMV humidity.',
      link: '/microblading-fading-too-fast',
      linkText: 'Why microblading fades fast →',
    },
    {
      icon: Eye,
      title: 'Blurred or Smudged Strokes',
      desc: 'Hair strokes that were initially crisp have expanded, bled together, or look smudged — resembling marker rather than natural hair.',
      link: '/botched-microblading-fix',
      linkText: 'How to fix botched results →',
    },
    {
      icon: XCircle,
      title: 'Asymmetric Shape',
      desc: 'One brow is visibly different from the other in arch height, thickness, length, or tail position — indicating poor facial mapping during the initial procedure.',
      link: '/botched-microblading-fix',
      linkText: 'Correction for asymmetry →',
    },
    {
      icon: AlertTriangle,
      title: 'Scarring or Texture Changes',
      desc: 'Visible scarring, ridges, or textural irregularity in the brow area from excessive blade pressure, too many passes, or skin that wasn\'t suitable for microblading.',
      link: '/botched-microblading-fix',
      linkText: 'Scarring correction options →',
    },
  ];

  return (
    <>
      <SEO
        title="Microblading Gone Wrong: What To Do and How To Fix It | Ink Mugi"
        description="What to do if your microblading goes wrong — immediate steps, signs of failure, and professional correction options. Expert guide by a Virginia-licensed PMU artist. Ink Mugi, Annandale VA."
        path="/microblading-gone-wrong"
        keywords="microblading gone wrong, microblading went wrong, bad microblading what to do, microblading disaster, microblading failure, fix microblading gone wrong, microblading gone wrong fix, my microblading looks terrible, microblading ruined my eyebrows, microblading gone wrong help"
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Microblading Gone Wrong: What To Do and How To Fix It",
            "description": "A comprehensive guide for anyone whose microblading went wrong — covering immediate steps, common signs of failure, correction options, and how powder brow correction restores natural results.",
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
            "url": "https://inkmugi.com/microblading-gone-wrong",
            "mainEntityOfPage": "https://inkmugi.com/microblading-gone-wrong"
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
              { "@type": "ListItem", "position": 3, "name": "Microblading Gone Wrong", "item": "https://inkmugi.com/microblading-gone-wrong" }
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
              What To Do If Your<br />
              <span className="text-amber-700">Microblading Goes Wrong</span>
            </h1>
            <p className="text-lg md:text-xl text-[#2D2D2B]/80 max-w-3xl mx-auto mb-4">
              If your microblading didn't heal as expected — grey color, uneven strokes, patchy areas, or just doesn't look right — this guide explains exactly what to do now, what's fixable, and how professional correction works.
            </p>
            <p className="text-sm text-[#2D2D2B]/60 max-w-2xl mx-auto mb-8">
              By a Virginia-licensed PMU artist with 523+ procedures • Specializing in microblading corrections
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
                Microblading Gone Wrong? Here's What To Do
              </h2>
              <p className="text-[#2D2D2B]/80 text-lg mb-4">
                <strong>If you're still in the healing phase (0–6 weeks):</strong> Don't panic. Microblading looks significantly darker and more intense in the first week, then goes through a patchy "ugly duckling" phase before settling. Wait for full healing before evaluating.
              </p>
              <p className="text-[#2D2D2B]/70">
                <strong>If you're fully healed and the result is wrong:</strong> Most microblading problems — grey color, blurred strokes, asymmetry, and rapid fading — are correctable through professional powder brow correction. In our correction consultations, once the skin is truly healed, the pattern of the problem is usually very clear and so is the next step. That clarity is why we advise waiting rather than reacting too early. Wait 8–12 weeks post-procedure, then consult a correction specialist.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Immediate Steps */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Immediate Steps After Bad Microblading
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mb-8 text-lg">
              Whether you're still healing or fully healed and unhappy — follow this checklist before taking any action. These are the same steps we walk through when someone sends us worried photos after a recent appointment.
            </p>
          </AnimatedSection>

          <div className="space-y-4">
            {[
              {
                title: 'Don\'t touch, pick, or scratch',
                desc: 'Disrupting the healing process creates scarring, pigment loss, and infection risk. Keep your hands away from the brow area entirely.',
              },
              {
                title: 'Don\'t attempt DIY removal',
                desc: 'Saline solution, hydrogen peroxide, lemon juice, or any other "home remedy" will damage your skin. Professional correction uses calibrated techniques and medical-grade products — DIY attempts cause scarring.',
              },
              {
                title: 'Follow your aftercare instructions exactly',
                desc: 'If you\'re still in the healing window, strict aftercare gives the best chance of an acceptable result. Keep brows dry, avoid sun, and apply only prescribed aftercare ointment.',
              },
              {
                title: 'Wait for full healing (4–6 weeks minimum)',
                desc: 'Microblading looks dramatically different during healing stages. The color appears 30–40% darker in the first week, then fades significantly during the "ghost phase" before settling at its true color. Evaluating too early leads to unnecessary panic.',
              },
              {
                title: 'Document with photos in natural lighting',
                desc: 'Take photos of your brows every few days in the same natural lighting. This creates a timeline that helps a correction specialist assess what happened and plan the appropriate fix.',
              },
              {
                title: 'Consult a correction specialist — not the original artist',
                desc: 'If the original technique caused the problem, repeating it won\'t fix it. Seek a correction specialist who uses different methods (machine-based powder brows) and has experience with previously treated skin.',
              },
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx + 1}>
                <div className="flex items-start gap-4 bg-white p-6 rounded-xl border border-[#E6DAD2]">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-[#2D2D2B] mb-1">{item.title}</h3>
                    <p className="text-[#2D2D2B]/70 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Common Signs of Failed Microblading */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Common Signs of Failed Microblading
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
              After the full 4–6 week healing period, these are the indicators that your microblading didn't go as planned — and each one has a correction solution.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {warningSignsAfterHealing.map((sign, idx) => (
              <AnimatedSection key={sign.title} delay={idx + 1}>
                <div className="bg-[#F9F7F5] p-6 rounded-xl border border-[#E6DAD2] h-full">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 bg-[#2D2D2B] rounded-full flex items-center justify-center flex-shrink-0">
                      <sign.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-medium text-[#2D2D2B] mt-1">{sign.title}</h3>
                  </div>
                  <p className="text-[#2D2D2B]/70 text-sm leading-relaxed mb-3">{sign.desc}</p>
                  <Link to={sign.link} className="inline-flex items-center text-amber-700 text-sm font-medium hover:text-amber-800">
                    {sign.linkText} <ArrowRight className="ml-1 w-3 h-3" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How Microblading Can Be Corrected */}
      <section className="py-20 bg-[#2D2D2B]">
        <div className="container-custom max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-white mb-4">
              How Microblading Can Be Corrected
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Powder brow correction is the gold-standard solution for failed microblading. The digital machine technique provides the consistency, depth control, and color stability that manual blade microblading lacks. In practical terms, that means fewer surprises at the healed stage and a more controllable correction process.
            </p>
          </AnimatedSection>

          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Diagnostic Assessment',
                desc: 'Under magnification and controlled lighting, we evaluate existing pigment color, depth, stroke condition, skin texture, and symmetry. You receive a clear correction plan with realistic expectations, timeline, and cost.',
              },
              {
                step: '02',
                title: 'Color Neutralization (If Needed)',
                desc: 'For grey, blue, or ashy brows: warm-spectrum corrector pigment is applied to neutralize the cool undertone. Orange-family correctors address blue-grey; peach-family correctors address ashy tones. This creates a clean canvas for the final overlay.',
              },
              {
                step: '03',
                title: 'Saline Lightening (If Needed)',
                desc: 'For shape problems or excessive pigment: targeted saline removal draws existing pigment toward the surface for extraction — selectively fading problematic areas without affecting surrounding skin.',
              },
              {
                step: '04',
                title: 'Powder Brow Overlay',
                desc: 'A full ombré powder brow in your ideal color. The stippled dot technique creates even, natural coverage that conceals all signs of the previous work. Digital machine precision ensures consistent depth and warm-dominant pigments resist future color shift.',
              },
              {
                step: '05',
                title: 'Perfecting Touch-Up',
                desc: 'At 6–8 weeks post-overlay, we refine saturation, gradient, and shape. After this session, most clients won\'t need another appointment for 18–36 months.',
              },
            ].map((item, idx) => (
              <AnimatedSection key={item.step} delay={idx + 1}>
                <div className="flex gap-6 p-6 bg-white/5 border border-white/10 rounded-xl">
                  <div className="text-4xl font-cormorant font-bold text-amber-700/50 flex-shrink-0">{item.step}</div>
                  <div>
                    <h3 className="font-medium text-white text-lg mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-8 text-center" delay={6}>
            <p className="text-white/50 text-sm">
              Learn more: <Link to="/microblading-removal-vs-correction" className="text-amber-400 hover:text-amber-300 underline">Removal vs Correction — which is right for you?</Link>{' '}
              | <Link to="/powder-brows-over-microblading" className="text-amber-400 hover:text-amber-300 underline">Can you get powder brows over microblading?</Link>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Real Correction Examples */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Real Correction Examples
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
              See how we've corrected grey-shifted, patchy, and botched microblading into natural, beautiful powder brows.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <Link
              to="/microblading-correction-case-study"
              className="block bg-white p-8 rounded-xl border border-[#E6DAD2] hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2D2D2B] rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#2D2D2B] mb-2">Microblading Correction Case Studies</h3>
                  <p className="text-[#2D2D2B]/70 text-sm leading-relaxed mb-3">
                    Detailed before-and-after case studies including grey correction, patchy restoration, color-shift repair, and microblading-to-powder upgrades. Each case covers the initial condition, correction strategy, and healed result.
                  </p>
                  <span className="inline-flex items-center text-amber-700 text-sm font-medium">
                    View case studies <ArrowRight className="ml-1 w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </AnimatedSection>

          <AnimatedSection className="mt-6 grid md:grid-cols-2 gap-6" delay={2}>
            <Link
              to="/microblading-correction-northern-virginia"
              className="block bg-white p-6 rounded-xl border border-[#E6DAD2] hover:shadow-lg transition-shadow"
            >
              <Shield className="w-8 h-8 text-[#2D2D2B] mb-3" />
              <h3 className="text-lg font-medium text-[#2D2D2B] mb-2">Correction in Northern VA</h3>
              <p className="text-[#2D2D2B]/60 text-sm">Full correction service details — process, pricing, and booking in Annandale, VA.</p>
              <span className="inline-flex items-center text-amber-700 text-sm font-medium mt-3">
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </span>
            </Link>
            <Link
              to="/microblading-problems"
              className="block bg-white p-6 rounded-xl border border-[#E6DAD2] hover:shadow-lg transition-shadow"
            >
              <AlertTriangle className="w-8 h-8 text-[#2D2D2B] mb-3" />
              <h3 className="text-lg font-medium text-[#2D2D2B] mb-2">All Microblading Problems</h3>
              <p className="text-[#2D2D2B]/60 text-sm">Complete guide to every common microblading problem and how each is corrected.</p>
              <span className="inline-flex items-center text-amber-700 text-sm font-medium mt-3">
                Browse guides <ArrowRight className="ml-1 w-4 h-4" />
              </span>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Microblading Problems */}
      <RelatedMicrobladingProblems currentPath="/microblading-gone-wrong" bgClass="bg-white" cardBgClass="bg-[#F9F7F5]" />

      {/* FAQ Section */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Microblading Gone Wrong FAQ
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
              Your Microblading Is Fixable
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg mb-8">
              Don't live with brows that make you self-conscious. Our powder brow correction transforms gone-wrong microblading into natural, beautiful results. Book a consultation — we'll assess your case honestly and tell you exactly what's achievable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2D2D2B] rounded-full font-medium hover:bg-[#F0E4D8] transition-all"
              >
                Book Correction Consultation
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
          Related searches: microblading gone wrong, microblading went wrong, bad microblading what to do,
          microblading disaster, microblading failure, fix microblading gone wrong, my microblading looks terrible,
          microblading ruined my eyebrows, microblading gone wrong help, what to do if microblading goes wrong,
          microblading gone wrong Northern Virginia, fix bad microblading DMV
        </p>
      </div>
    </>
  );
};

export default MicrobladingGoneWrong;
