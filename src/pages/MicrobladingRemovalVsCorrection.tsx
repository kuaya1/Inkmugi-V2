import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  ArrowRight,
  Phone,
  CheckCircle,
  AlertTriangle,
  Target,
  Layers,
  Clock,
  Droplets,
  Palette,
  Zap,
  RefreshCw,
  XCircle
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import InlineFaqAccordion from '../components/InlineFaqAccordion';
import RelatedMicrobladingProblems from '../components/RelatedMicrobladingProblems';
import AuthorBlock from '../components/AuthorBlock';
import BeforeAfterCase from '../components/BeforeAfterCase';
import type { CasePhoto } from '../components/BeforeAfterCase';

const MicrobladingRemovalVsCorrection: React.FC = () => {

  const faqs = [
    {
      question: "Is it better to remove or correct bad microblading?",
      answer: "In the majority of cases, correction is the better option. Correction takes fewer sessions (2–3 vs 4–8+), costs less overall, has a shorter total timeline (3–5 months vs 12–24 months), and you leave with beautiful brows rather than bare skin. Removal is only preferred when: (1) the old pigment has shifted to a color that neutralization cannot adequately counter, (2) the old shape is dramatically wrong and extends well beyond any workable boundary, or (3) the client specifically wants all pigment removed with no new procedure. In our correction consultations, approximately 80% of clients proceed with correction rather than removal because, once we map the options clearly, the tradeoffs are usually obvious."
    },
    {
      question: "Can grey microblading be corrected without removal?",
      answer: "Yes. Grey microblading is one of the most successfully corrected cases — it doesn't require removal. The correction process uses warm-spectrum corrector pigments (orange or peach-based) applied via machine stipple to neutralize the cool grey undertone. After the neutralization heals (4–6 weeks), a powder brow overlay is applied in the target color. The grey is completely replaced by warm, natural-looking brows. This two-session correction process is faster, cheaper, and less traumatic to the skin than removal."
    },
    {
      question: "How many sessions does saline removal take?",
      answer: "Saline removal typically requires 4–8 sessions, spaced 6–8 weeks apart. The total timeline is 6–16 months depending on pigment depth, density, and how the individual's skin responds. Each session lifts a portion of the pigment toward the surface for extraction. Complete removal is not always achievable — most clients see 60–80% pigment reduction rather than 100% elimination. Lighter pigments and shallower deposits respond faster; deeply embedded or heavily saturated pigment requires more sessions."
    },
    {
      question: "Is laser removal better than saline removal for microblading?",
      answer: "For microblading specifically, saline removal is generally preferred over laser. Laser removal carries higher risk of scarring on the delicate brow-area skin, can cause iron oxide pigments to darken paradoxically (turning brown pigment black or grey), and requires more sessions for effective clearance. Saline removal works by drawing pigment to the surface through osmotic action — it's effective on all pigment colors without the darkening risk. At Ink Mugi, we perform saline removal and recommend it over laser for brow pigment in virtually all cases."
    },
    {
      question: "How much does microblading removal cost compared to correction?",
      answer: "Removal is typically more expensive than correction when total cost is calculated. Saline removal averages $200–$350 per session, with 4–8 sessions needed — total cost of $800–$2,800. Laser removal averages $250–$500 per session with similar session counts — total cost of $1,000–$4,000. By comparison, correction (neutralization + powder brow overlay) at Ink Mugi ranges from $600–$800 total for completion of the series. Additionally, correction leaves you with finished brows, while removal leaves you with bare skin requiring an entirely new procedure if you want brows."
    },
    {
      question: "Do I need removal before getting powder brows?",
      answer: "In most cases, no. Powder brow correction is specifically designed to work over existing faded or color-shifted microblading. Direct overlay or neutralization + overlay handles the vast majority of cases without any removal. Removal is only necessary when: (1) the old pigment is still extremely dark and saturated with no fading at all, (2) the old shape extends significantly outside the desired new boundary and cannot be concealed, or (3) the color has shifted so severely that neutralization alone cannot counter it. During your consultation, we'll determine whether your case is correctable without removal."
    },
    {
      question: "How long should I wait between removal sessions and new PMU?",
      answer: "After completing saline removal, we recommend waiting a minimum of 8–12 weeks after the final session before applying any new pigment. The skin needs time to complete its healing cycle, rebuild its barrier function, and stabilize. If the removal caused any scarring or texture changes, additional waiting time may be needed. During a post-removal consultation, we evaluate the skin tissue quality to confirm readiness. Applying new pigment to incompletely healed skin increases complication risk and reduces pigment retention."
    },
    {
      question: "Can partially faded microblading be corrected or does it need removal?",
      answer: "Partially faded microblading is actually the ideal candidate for correction rather than removal. The faded areas provide a cleaner canvas for new pigment, while any remaining old pigment can be incorporated into or covered by the powder brow overlay. Partial fading is the most common state of old microblading we work with — and it produces excellent correction outcomes. Only if the remaining pigment has a severe color shift that neutralization can't address would we recommend lightening (targeted, minimal removal) rather than full removal."
    }
  ];

  const comparisonData = [
    { category: 'Sessions required', correction: '2–3 sessions', removal: '4–8+ sessions' },
    { category: 'Total timeline', correction: '3–5 months', removal: '6–16+ months' },
    { category: 'Total cost', correction: '$600–$800', removal: '$800–$4,000' },
    { category: 'Pain level', correction: 'Mild (topical numbing)', removal: 'Moderate (each session)' },
    { category: 'Scarring risk', correction: 'Very low', removal: 'Low–moderate (laser higher)' },
    { category: 'End result', correction: 'Finished powder brows', removal: 'Bare skin (no brows)' },
    { category: 'Downtime per session', correction: '7–10 days', removal: '5–14 days' },
    { category: 'Success rate', correction: '~90% achieve desired result', removal: '60–80% pigment reduction' },
  ];

  return (
    <>
      <SEO
        title="Microblading Removal vs Correction: Which Option Is Best? | Ink Mugi"
        description="Expert comparison of microblading removal vs correction — sessions, cost, timeline, and outcomes. Learn when correction is better than removal and when removal is necessary. Ink Mugi, Annandale VA."
        path="/microblading-removal-vs-correction"
        keywords="microblading removal vs correction, saline removal vs powder brow correction, microblading removal options, fix bad microblading without removal, microblading removal cost, microblading correction vs removal, saline removal microblading, laser removal microblading"
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Microblading Removal vs Correction: Which Option Is Best?",
            "description": "A comprehensive comparison of microblading removal and correction options — covering saline removal, laser removal, color correction, and powder brow overlay. Includes cost, session count, and decision framework.",
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
            "url": "https://inkmugi.com/microblading-removal-vs-correction",
            "mainEntityOfPage": "https://inkmugi.com/microblading-removal-vs-correction"
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
              { "@type": "ListItem", "position": 3, "name": "Removal vs Correction", "item": "https://inkmugi.com/microblading-removal-vs-correction" }
            ]
          })}
        </script>
      </SEO>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#F0E4D8] via-[#E6DAD2] to-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D2D2B] text-white rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              Decision Guide
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium mb-6 text-[#2D2D2B] leading-tight">
              Microblading Removal vs Correction:<br />
              <span className="text-amber-700">Which Option Is Best?</span>
            </h1>
            <p className="text-lg md:text-xl text-[#2D2D2B]/80 max-w-3xl mx-auto mb-4">
              If your microblading didn't turn out as expected, you have two paths: removal (taking the pigment out)
              or correction (transforming it into something better). This guide helps you understand when each
              option makes sense — and why correction is the right choice for most people.
            </p>
            <p className="text-sm text-[#2D2D2B]/60 max-w-2xl mx-auto mb-8">
              By a Virginia-licensed PMU artist with 523+ procedures • Offering both saline removal and powder brow correction
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#2D2D2B] text-white rounded-full font-medium hover:bg-[#4A4A47] transition-all"
              >
                Book Assessment Consultation
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
                Should I Remove or Correct My Microblading?
              </h2>
              <p className="text-[#2D2D2B]/80 text-lg mb-4">
                <strong>Correction is the better option for ~80% of failed microblading cases.</strong> Correction (undertone neutralization + powder brow overlay)
                takes 2–3 sessions over 3–5 months and costs $600–$800. Removal takes 4–8+ sessions over 6–16 months and costs $800–$4,000 — and leaves
                you without brows.
              </p>
              <p className="text-[#2D2D2B]/70">
                Removal is necessary only when old pigment is too dark and saturated for overlay, the shape is dramatically wrong and extends beyond
                any workable boundary, or the client specifically wants all pigment gone with no replacement.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Common Outcomes of Failed Microblading */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              Common Outcomes That Lead to This Decision
            </h2>
            <p className="text-[#2D2D2B]/80 text-lg leading-relaxed mb-8">
              Understanding what went wrong helps determine whether
              correction or removal is the best path forward. These are the most common scenarios we see in correction consultations.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Palette, title: 'Grey or Blue Color Shift', desc: 'Warm brown pigment has oxidized to cool grey or blue-grey tones — correctable through undertone neutralization.', path: 'Correction' },
              { icon: Layers, title: 'Patchy or Uneven Retention', desc: 'Pigment held in some areas but faded in others, creating a spotty appearance — correctable with powder brow overlay.', path: 'Correction' },
              { icon: Clock, title: 'Premature Fading', desc: 'Microblading faded far sooner than expected, requiring repeated touch-ups — correctable by switching to powder technique.', path: 'Correction' },
              { icon: XCircle, title: 'Over-Saturated or Too Dark', desc: 'Brows are excessively dark and blocky with no natural appearance — may need lightening before correction.', path: 'Lightening + Correction' },
              { icon: Target, title: 'Wrong Shape Entirely', desc: 'Shape doesn\'t complement facial features and extends well beyond the ideal boundary — may require selective removal.', path: 'Selective Removal' },
              { icon: AlertTriangle, title: 'Severe Scarring', desc: 'Deep blade technique caused visible scarring and texture damage — requires individual assessment of skin health.', path: 'Assessment Required' }
            ].map((item, idx) => (
              <AnimatedSection key={item.title} delay={idx + 1}>
                <div className="bg-white p-6 rounded-xl border border-[#E6DAD2] h-full">
                  <item.icon className="w-8 h-8 text-amber-700 mb-3" />
                  <h3 className="font-medium text-[#2D2D2B] text-lg mb-2">{item.title}</h3>
                  <p className="text-[#2D2D2B]/70 text-sm leading-relaxed mb-3">{item.desc}</p>
                  <span className="inline-block text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-800 font-medium">
                    Recommended: {item.path}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Correction Options */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Option 1: Correction
            </h2>
            <p className="text-[#2D2D2B]/80 text-lg leading-relaxed mb-8">
              Correction transforms problematic microblading into beautiful powder brows without removing the old pigment. This is the
              preferred approach for most cases because it's faster, cheaper, and leaves you with finished results.
              In practice, it also lets us preserve workable structure instead of erasing everything indiscriminately.
            </p>
          </AnimatedSection>

          <div className="space-y-6">
            {[
              {
                icon: Palette,
                title: 'Color Correction (Undertone Neutralization)',
                desc: 'For grey, blue, ashy, or orange-shifted microblading. Warm-spectrum corrector pigment is applied via digital machine to optically cancel the unwanted undertone. The corrector shade is calibrated to the specific shift — orange-family for blue-grey, peach-family for ashy tones. After the corrector heals (4–6 weeks), the neutralized canvas is ready for the powder brow overlay.',
                sessions: '1 neutralization session + 1 overlay session',
                timeline: '3–4 months total'
              },
              {
                icon: Layers,
                title: 'Powder Brow Overlay (Direct Coverage)',
                desc: 'For faded, patchy, or otherwise worn microblading that hasn\'t experienced significant color shift. The powder brow technique is applied directly over the existing work, creating a fresh, even pigment layer that conceals the old pattern. The stippled dot technique provides seamless coverage independent of the underlying stroke pattern.',
                sessions: '1 overlay session + 1 touch-up',
                timeline: '2–3 months total'
              },
              {
                icon: RefreshCw,
                title: 'Pigment Balancing (Density Correction)',
                desc: 'For microblading that\'s still moderately dark or unevenly saturated. A targeted lightening session reduces density in over-saturated areas before the powder brow overlay, creating a more even base. This approach removes just enough pigment to allow the overlay to produce a natural result — without the extended timeline of full removal.',
                sessions: '1 lightening + 1 overlay + 1 touch-up',
                timeline: '4–5 months total'
              }
            ].map((item, idx) => (
              <AnimatedSection key={item.title} delay={idx + 1}>
                <div className="bg-[#F9F7F5] p-8 rounded-xl border border-[#E6DAD2]">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#2D2D2B] rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-[#2D2D2B]">{item.title}</h3>
                    </div>
                  </div>
                  <p className="text-[#2D2D2B]/70 leading-relaxed mb-4">{item.desc}</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-white border border-[#E6DAD2] p-3 rounded-lg">
                      <p className="text-sm text-[#2D2D2B]/80"><strong>Sessions:</strong> {item.sessions}</p>
                    </div>
                    <div className="bg-white border border-[#E6DAD2] p-3 rounded-lg">
                      <p className="text-sm text-[#2D2D2B]/80"><strong>Timeline:</strong> {item.timeline}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-8" delay={4}>
            <p className="text-center text-[#2D2D2B]/60 text-sm">
              Detailed correction walkthrough: <Link to="/powder-brows-over-microblading" className="text-amber-700 font-medium hover:underline">powder brows over microblading — the complete process</Link>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Removal Options */}
      <section className="py-20 bg-[#2D2D2B]">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-white mb-4">
              Option 2: Removal
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              When correction isn't possible or the client wants all pigment removed, two removal methods are available. Each has
              significant limitations that correction avoids.
              This is why we treat removal as a strategic tool, not the automatic first recommendation.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedSection delay={1}>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl h-full">
                <Droplets className="w-10 h-10 text-amber-400 mb-4" />
                <h3 className="text-xl font-medium text-white mb-4">Saline Removal</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  A saline solution is implanted into the tattooed skin using a PMU machine. The salt draws pigment to the surface through
                  osmotic action, forming a scab that extracts pigment when it falls off. Effective on all pigment colors and types. Lower
                  scarring risk than laser. This is the method we offer at Ink Mugi and recommend for brow-area removal.
                </p>
                <ul className="space-y-2">
                  {[
                    'Sessions: 4–8, spaced 6–8 weeks apart',
                    'Timeline: 6–16 months',
                    'Cost per session: $200–$350',
                    'Total cost: $800–$2,800',
                    'Pigment reduction: 60–80% typical',
                    'Scarring risk: Low',
                    'Any pigment color: Yes'
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/50 text-sm">
                      <CheckCircle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl h-full">
                <Zap className="w-10 h-10 text-amber-400 mb-4" />
                <h3 className="text-xl font-medium text-white mb-4">Laser Removal</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  Laser energy fragments pigment particles, which are then cleared by the body's immune system. Effective for some pigment
                  types, but carries specific risks for iron oxide-based PMU pigments. Can cause paradoxical darkening where brown pigment
                  turns black or dark grey. Higher scarring risk on delicate brow-area skin. We do not offer laser removal at Ink Mugi and
                  generally recommend saline over laser for brow pigment.
                </p>
                <ul className="space-y-2">
                  {[
                    'Sessions: 4–10, spaced 6–8 weeks apart',
                    'Timeline: 6–20 months',
                    'Cost per session: $250–$500',
                    'Total cost: $1,000–$4,000+',
                    'Pigment reduction: 50–90% (variable)',
                    'Scarring risk: Moderate (brow area)',
                    'Paradoxical darkening risk: Yes (iron oxide)'
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/50 text-sm">
                      <AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Removal vs Correction: Side-by-Side Comparison
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={1}>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl border border-[#E6DAD2] overflow-hidden">
                <thead>
                  <tr className="bg-[#2D2D2B]">
                    <th className="text-left text-white text-sm font-medium p-4 w-1/3">Factor</th>
                    <th className="text-left text-white text-sm font-medium p-4 w-1/3">
                      <span className="inline-flex items-center gap-1">
                        <CheckCircle className="w-4 h-4 text-green-400" /> Correction
                      </span>
                    </th>
                    <th className="text-left text-white text-sm font-medium p-4 w-1/3">Removal</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F9F7F5]'}>
                      <td className="p-4 text-sm font-medium text-[#2D2D2B]">{row.category}</td>
                      <td className="p-4 text-sm text-green-700">{row.correction}</td>
                      <td className="p-4 text-sm text-[#2D2D2B]/60">{row.removal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              Decision Framework: Which Path Is Right for You?
            </h2>
            <p className="text-[#2D2D2B]/80 text-lg leading-relaxed mb-8">
              Use this framework to determine which approach best fits your situation. In cases of uncertainty,
              a professional assessment provides definitive guidance.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={1}>
              <div className="bg-green-50 border-2 border-green-200 p-8 rounded-xl h-full">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-7 h-7 text-green-600" />
                  <h3 className="text-xl font-medium text-[#2D2D2B]">Choose Correction When:</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Your microblading has faded partially or significantly',
                    'The color has shifted to grey, blue, ashy, or orange tones',
                    'Your brows are patchy or unevenly retained',
                    'The existing shape is within or close to your desired shape',
                    'You want finished brows (not bare skin) at the end of the process',
                    'You want faster results (3–5 months vs 6–16+ months)',
                    'Budget efficiency matters — correction costs 30–70% less overall',
                    'You want to minimize total number of sessions'
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
              <div className="bg-amber-50 border-2 border-amber-200 p-8 rounded-xl h-full">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-7 h-7 text-amber-600" />
                  <h3 className="text-xl font-medium text-[#2D2D2B]">Choose Removal When:</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'The old pigment is still very dark with no fading at all',
                    'The shape extends dramatically beyond any desired new boundary',
                    'The color has shifted to an extreme tone that neutralization cannot counter',
                    'You want all pigment removed with no new procedure',
                    'Significant scarring requires skin healing before any new work',
                    'Previous correction attempts have been unsuccessful',
                    'You prefer to start with a completely clear canvas',
                    'You\'re willing to invest the extended timeline and higher cost'
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[#2D2D2B]/70 text-sm">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="mt-8" delay={3}>
            <div className="bg-[#F9F7F5] border border-[#E6DAD2] p-6 rounded-xl text-center">
              <p className="text-[#2D2D2B]/80 text-sm">
                <strong>Not sure which category you fall into?</strong> That's exactly what the consultation is for. We assess your specific
                case under magnification and provide an honest recommendation — correction, removal, or a combination approach. No pressure,
                no upselling.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* The Hybrid Approach */}
      <section className="py-16 bg-[#F9F7F5]">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              The Hybrid Approach: Selective Lightening + Correction
            </h2>
            <div className="bg-white p-8 rounded-xl border border-[#E6DAD2]">
              <p className="text-[#2D2D2B]/70 leading-relaxed mb-4">
                In some cases, neither full removal nor direct correction is the ideal path. The <strong>hybrid approach</strong> uses
                targeted saline lightening on specific areas (usually 1–2 sessions on out-of-bounds pigment or extremely saturated zones),
                followed by correction and powder brow overlay on the full area.
              </p>
              <p className="text-[#2D2D2B]/70 leading-relaxed mb-4">
                A common situation we see is a brow that is mostly correctable, but has one tail or front section that sits outside the new design. This approach is ideal when: the old shape needs minor boundary adjustment, specific areas are too saturated for direct overlay,
                or one portion of the brow has a stubborn color shift that needs extra preparation.
              </p>
              <p className="text-[#2D2D2B]/70 leading-relaxed">
                The hybrid approach typically adds 1–2 sessions and 2–3 months to the timeline compared to direct correction, but produces
                superior results to either approach alone in these specific cases. Learn more about <Link to="/why-microblading-fades" className="text-amber-700 font-medium hover:underline">the science behind microblading pigment behavior</Link>.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Before/After Correction Cases */}
      <BeforeAfterCase
        title="Correction vs. Removal — Visual Comparison"
        subtitle="See how powder brow correction compares to removal outcomes. Real client photos will be added as cases are completed."
        cases={[
          {
            before: '',
            after: '',
            beforeAlt: 'Botched microblading before correction vs removal assessment in Northern Virginia',
            afterAlt: 'Microblading corrected with powder brows instead of removal at Ink Mugi Annandale VA',
            caption: 'Client chose powder brow correction over saline removal — faster recovery, immediate aesthetic improvement. Shown at 8 weeks healed.',
          },
        ] as CasePhoto[]}
      />

      {/* Author Authority Block */}
      <AuthorBlock variant="full" />

      {/* Hub Links */}
      <RelatedMicrobladingProblems currentPath="/microblading-removal-vs-correction" bgClass="bg-white" cardBgClass="bg-[#F9F7F5]" />

      {/* FAQ Section */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Removal vs Correction FAQ
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
              Let's Determine Your Best Path
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg mb-8">
              Whether correction or removal is right for your case depends on factors we can only evaluate in person.
              Book a consultation for an honest assessment — we'll recommend the approach that serves you best,
              even if that means referring you elsewhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2D2D2B] rounded-full font-medium hover:bg-[#F0E4D8] transition-all"
              >
                Book Free Assessment
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
          Related searches: microblading removal vs correction, saline removal vs powder brow correction,
          microblading removal options, fix bad microblading without removal, microblading removal cost,
          saline removal microblading, laser removal microblading, microblading correction vs removal,
          remove or correct microblading Northern Virginia
        </p>
      </div>
    </>
  );
};

export default MicrobladingRemovalVsCorrection;
