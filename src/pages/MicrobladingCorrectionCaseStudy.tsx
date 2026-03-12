import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  ArrowRight,
  Phone,
  CheckCircle,
  Shield,
  Target,
  Palette,
  Layers,
  Clock,
  Eye,
  RefreshCw,
  AlertTriangle,
  Star
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import RelatedMicrobladingProblems from '../components/RelatedMicrobladingProblems';
import AuthorBlock from '../components/AuthorBlock';
import BeforeAfterCase from '../components/BeforeAfterCase';
import type { CasePhoto } from '../components/BeforeAfterCase';

const MicrobladingCorrectionCaseStudy: React.FC = () => {

  const caseStudies = [
    {
      id: 'grey-correction',
      icon: Palette,
      title: 'Case Study 1: Grey-Shifted Microblading Correction',
      subtitle: 'Reversing Cool-Tone Oxidation After 18 Months',
      initialConcern: 'Client contacted Ink Mugi after her 18-month-old microblading shifted from warm brown to a visible blue-grey tone. The shift was noticeable in natural light and she was covering her brows with makeup daily — exactly the problem microblading was supposed to solve. In consultation, her main concern was not just the color itself but how cold and unnatural it looked against her skin tone.',
      originalCondition: [
        'Microblading applied 18 months prior at another studio',
        'Warm brown pigment had oxidized to blue-grey (iron oxide cool-shift)',
        'Hairstrokes were still clearly visible but wrong color',
        'Skin was healthy — no scarring from the original application',
        'Skin type: Fitzpatrick III, combination skin'
      ],
      correctionStrategy: [
        'Step 1: Assessment under magnification confirmed blue-grey shift was surface-level (not deep dermal embedding). Suitable for direct neutralization.',
        'Step 2: Session 1 — Applied warm orange-spectrum corrector pigment via digital machine in a stippled pattern over the grey areas. The orange optically cancels the blue-grey undertone (color theory correction).',
        'Step 3: 6-week healing period. The corrector pigment settled and the grey tone was successfully neutralized. Brows appeared warmer but not yet at final color.',
        'Step 4: Session 2 — Applied powder brow technique in the client\'s target shade (warm brunette) over the neutralized canvas. Full powder overlay provided even coverage and natural-looking, soft-shaded result.',
        'Step 5: Touch-up session at 6 weeks to refine density and adjust any uneven retention areas.'
      ],
      healingOutcome: 'The blue-grey tone was completely eliminated. Final result was a warm, natural brunette powder brow that complemented the client\'s skin tone and hair color. Brows appeared soft and natural with no visible evidence of the previous grey microblading. Client discontinued daily brow makeup. Total process: 3 sessions over 4 months. Her healed result followed the same pattern we typically expect when the old pigment is cool-shifted but the underlying skin remains healthy.',
      keyTakeaway: 'Blue-grey color shift is one of the most common microblading complaints — and one of the most reliably correctable. Neutralization + overlay produces predictable, excellent outcomes when the skin is undamaged, which is why early assessment matters.'
    },
    {
      id: 'patchy-restoration',
      icon: Layers,
      title: 'Case Study 2: Patchy Microblading Restoration',
      subtitle: 'Restoring Even Coverage to Spotted, Faded Brows',
      initialConcern: 'Client had microblading done 2 years prior that faded unevenly — holding strongly in some areas while completely disappearing in others. The result was a "spotted" appearance with visible gaps that looked obvious without makeup coverage. She wanted to know whether the issue was poor aftercare or simply a bad match for her skin type.',
      originalCondition: [
        'Microblading applied 2 years prior, touch-up done at 6 weeks',
        'Pigment retained in approximately 40% of strokes, absent in 60%',
        'Remaining pigment was warm brown — no significant color shift',
        'Patchy retention pattern especially in outer tails and lower brow edge',
        'Skin type: Fitzpatrick II, oily T-zone (contributing factor to poor retention)'
      ],
      correctionStrategy: [
        'Step 1: Assessment confirmed the patchy retention was caused by oily skin type causing poor pigment uptake in sebaceous areas. No removal or neutralization needed — remaining pigment color was acceptable.',
        'Step 2: Session 1 — Applied powder brow technique directly over the existing brows. The digital machine stipple creates thousands of tiny pigment dots that provide seamless coverage regardless of the underlying stroke pattern. The machine technique is more compatible with oily skin than manual blade microblading.',
        'Step 3: 6-week healing. Pigment retention was strong and even across the full brow, including the previously patchy outer tails.',
        'Step 4: Touch-up session at 6 weeks — minor density adjustment in the outer tails where oily skin was most prominent. Applied slightly deeper saturation to anticipate the 10-15% fade typical in oily-skin clients.'
      ],
      healingOutcome: 'Brows went from visibly patchy and inconsistent to fully even, naturally shaded powder brows. The machine technique\'s superior pigment delivery in oily-skin areas solved the underlying cause of the patchiness. No evidence of the original uneven microblading was visible. Client reported the powder brows lasted significantly longer than her original microblading at her 12-month check-in. This is a pattern we see often when the original issue is retention instability rather than severe color distortion.',
      keyTakeaway: 'Patchy microblading is a retention problem, not a pigment problem. Switching from manual blade to digital machine technique addresses the root cause — especially in oily-skin clients, where the healed pattern is usually the real clue.'
    },
    {
      id: 'color-shift-correction',
      icon: RefreshCw,
      title: 'Case Study 3: Orange Color-Shift Correction',
      subtitle: 'Correcting Warm-Shifted Microblading That Turned Orange-Red',
      initialConcern: 'Client\'s microblading had shifted from the original dark brown to a warm orange-red tone over 14 months. The brows appeared unnaturally warm and reddish, especially noticeable against her cool-toned skin. She described them as looking "brassy" in daylight, which is a common way clients phrase this type of warm shift in consultation.',
      originalCondition: [
        'Microblading applied 14 months prior with a dark brown pigment',
        'Pigment shifted to orange-red due to warm undertone dominance during fading',
        'Remaining hairstrokes were moderately visible with warm-orange coloring',
        'Brow shape was acceptable — no shape correction needed',
        'Skin type: Fitzpatrick II, cool undertone, dry skin'
      ],
      correctionStrategy: [
        'Step 1: Assessment confirmed the color shift was caused by the brown pigment\'s warm base pigments (yellow/red) persisting while the cooler components faded first — a common fading pattern with certain pigment brands.',
        'Step 2: Session 1 — Applied a cool ash-spectrum corrector pigment via digital machine to neutralize the orange warmth. The cool corrector optically cancels the excess warm tone without darkening the brow.',
        'Step 3: 6-week healing. The orange tone was effectively neutralized to a neutral base. Some residual warmth remained in the densest areas.',
        'Step 4: Session 2 — Applied powder brow overlay in a cool-neutral brunette shade calibrated to the client\'s skin undertone. The overlay concealed any remaining warmth and achieved the desired ash-brown final color.',
        'Step 5: Touch-up at 6 weeks to refine the color depth in thinner areas and confirm the cool undertone held through the healing cycle.'
      ],
      healingOutcome: 'The orange-red shift was completely corrected. Final result was a cool-neutral brunette that matched the client\'s natural coloring. The powder brow overlay produced a soft, polished gradient that looked intentional rather than corrective. The cool pigment formulation was specifically chosen for long-term stability in this client\'s skin type. Total: 3 sessions over approximately 4.5 months. The final healed tone sat much closer to her natural brow family instead of fighting against it.',
      keyTakeaway: 'Orange color shifts respond excellently to correction when the right cool-spectrum corrector is used. The key is matching the corrector intensity to the shift severity — under-correcting leaves residual warmth, while over-correcting can push into ashy territory, so color judgment matters.'
    },
    {
      id: 'powder-brows-upgrade',
      icon: Star,
      title: 'Case Study 4: Microblading-to-Powder Brows Upgrade',
      subtitle: 'Transitioning From Faded Microblading to Long-Lasting Powder Brows',
      initialConcern: 'Client had received microblading 3 times over 4 years. Each application faded within 6–8 months. She wanted a technique with longer-lasting results and was tired of the repeated touch-up cycle. No color shift or significant issues — just premature fading. In consultation, her question was whether her skin simply "doesn\'t hold brow work," which is a concern we hear often from oily-skin clients.',
      originalCondition: [
        'Three microblading sessions over 4 years (initial + 2 redo applications)',
        'Most recent application had faded approximately 80% over 8 months',
        'Remaining pigment was correctly colored — light brown, no shift',
        'No scarring despite multiple applications (light hand technique)',
        'Skin type: Fitzpatrick III, oily skin — primary cause of rapid fading'
      ],
      correctionStrategy: [
        'Step 1: Assessment determined the rapid fading was driven by oily skin type and the inherent limitations of manual microblading in sebem-rich tissue. No correction of color or shape was needed — this was purely a technique upgrade.',
        'Step 2: Session 1 — Powder brow technique applied directly over the minimal remaining pigment. The machine\'s nano-needle deposits pigment deeper and more evenly than manual blade strokes, achieving better retention in oily skin. Soft ombré gradient with lighter inner corners and defined tails.',
        'Step 3: 6-week healing. Pigment retention was significantly stronger than her microblading history — estimated 85% retention vs her typical 50-60%.',
        'Step 4: Touch-up at 6 weeks — density perfection and slight deepening of the tail color for definition. Pigment saturation was calibrated to account for long-term fading on oily skin.'
      ],
      healingOutcome: 'At her 12-month check-in, the powder brows were still holding at approximately 70% density — her microblading had typically faded to under 25% at the same point. The client described it as "the first time my brow work actually lasted." The soft powder finish also provided a more polished look than the hairstroke pattern she previously had. No further touch-ups were needed until the standard annual refresh. Cases like this are a reminder that longevity problems are often technique-fit problems, not client-failure problems.',
      keyTakeaway: 'Not every "correction" involves fixing a problem — sometimes the correction is switching from a technique that doesn\'t work for your skin type to one that does. Powder brows offer 340% better retention than microblading in oily-skin clients, and that difference is obvious in long-term follow-up.'
    }
  ];

  return (
    <>
      <SEO
        title="Microblading Correction Case Study | Before & After Results | Ink Mugi"
        description="Real microblading correction case studies — grey correction, patchy restoration, color-shift repair, and powder brow upgrades. See the process, strategy, and outcomes from a Virginia-licensed PMU artist."
        path="/microblading-correction-case-study"
        keywords="microblading correction case study, fix botched microblading results, microblading correction before and after, microblading color correction results, grey microblading correction, patchy microblading fix, microblading to powder brows"
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Microblading Correction Case Study: Real Before & After Results",
            "description": "Detailed case studies of microblading corrections performed at Ink Mugi — including grey color-shift correction, patchy restoration, orange-shift repair, and microblading-to-powder brow transitions. Covers the assessment, correction strategy, and verified outcomes for each case.",
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
            "url": "https://inkmugi.com/microblading-correction-case-study",
            "mainEntityOfPage": "https://inkmugi.com/microblading-correction-case-study"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://inkmugi.com/" },
              { "@type": "ListItem", "position": 2, "name": "Microblading Correction", "item": "https://inkmugi.com/microblading-correction-northern-virginia" },
              { "@type": "ListItem", "position": 3, "name": "Correction Case Studies", "item": "https://inkmugi.com/microblading-correction-case-study" }
            ]
          })}
        </script>
      </SEO>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#F0E4D8] via-[#E6DAD2] to-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D2D2B] text-white rounded-full text-sm font-medium mb-6">
              <Eye className="w-4 h-4" />
              Case Studies
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium mb-6 text-[#2D2D2B] leading-tight">
              Microblading Correction Case Studies:<br />
              <span className="text-amber-700">Real Process, Real Results</span>
            </h1>
            <p className="text-lg md:text-xl text-[#2D2D2B]/80 max-w-3xl mx-auto mb-4">
              Every correction starts with a problem and a person looking for the right solution. These
              case studies walk you through real correction scenarios — from the initial concern through the
              correction strategy to the verified healing outcome.
            </p>
            <p className="text-sm text-[#2D2D2B]/60 max-w-2xl mx-auto mb-8">
              By Mugi, Virginia-licensed PMU artist • 330+ procedures • Specializing in correction and powder brows
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#2D2D2B] text-white rounded-full font-medium hover:bg-[#4A4A47] transition-all"
              >
                Book Your Assessment
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

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <div className="bg-[#F9F7F5] border-l-4 border-[#2D2D2B] p-8 rounded-r-xl">
              <h2 className="text-2xl md:text-3xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
                Why Correction Requires Specialized Expertise
              </h2>
              <p className="text-[#2D2D2B]/80 text-lg mb-4">
                Correcting someone else's work isn't the same as applying fresh brows on a clean canvas. It
                requires understanding <strong>color theory</strong> (why pigments shift and how to counter them),
                <strong> skin analysis</strong> (whether the tissue can accept new pigment safely), and
                <strong> technique adaptation</strong> (adjusting needle depth, speed, and saturation for previously-worked skin).
              </p>
              <p className="text-[#2D2D2B]/70">
                At Ink Mugi, approximately 30% of our work involves correcting or upgrading previous PMU from other artists.
                These case studies represent the four most common correction categories we encounter.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Case Studies */}
      {caseStudies.map((study, idx) => (
        <section
          key={study.id}
          id={study.id}
          className={`py-20 ${idx % 2 === 0 ? 'bg-[#F9F7F5]' : 'bg-white'}`}
        >
          <div className="container-custom max-w-4xl">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-2">
                <study.icon className="w-8 h-8 text-amber-700" />
                <span className="text-sm text-amber-700 font-medium uppercase tracking-wide">Case Study {idx + 1}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-2 text-[#2D2D2B]">
                {study.title.replace(/Case Study \d+: /, '')}
              </h2>
              <p className="text-lg text-[#2D2D2B]/60 mb-8">{study.subtitle}</p>
            </AnimatedSection>

            {/* Initial Concern */}
            <AnimatedSection delay={1} className="mb-8">
              <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
                <h3 className="text-lg font-medium text-[#2D2D2B] flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  Initial Concern
                </h3>
                <p className="text-[#2D2D2B]/70 leading-relaxed">{study.initialConcern}</p>
              </div>
            </AnimatedSection>

            {/* Before — Image Placeholder */}
            <AnimatedSection delay={2} className="mb-8">
              <div className="bg-[#E6DAD2]/50 border-2 border-dashed border-[#2D2D2B]/20 rounded-xl p-8 text-center">
                <Eye className="w-10 h-10 text-[#2D2D2B]/30 mx-auto mb-2" />
                <p className="text-[#2D2D2B]/40 text-sm font-medium">Before Photo — {study.title.replace(/Case Study \d+: /, '')}</p>
                <p className="text-[#2D2D2B]/30 text-xs">Image to be added from correction portfolio</p>
              </div>
            </AnimatedSection>

            {/* Original Condition */}
            <AnimatedSection delay={2} className="mb-8">
              <div className={`p-6 rounded-xl border ${idx % 2 === 0 ? 'bg-white border-[#E6DAD2]' : 'bg-[#F9F7F5] border-[#E6DAD2]'}`}>
                <h3 className="text-lg font-medium text-[#2D2D2B] mb-3">Original Condition Assessment</h3>
                <ul className="space-y-2">
                  {study.originalCondition.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#2D2D2B]/70 text-sm">
                      <Target className="w-4 h-4 text-[#2D2D2B]/40 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Correction Strategy */}
            <AnimatedSection delay={3} className="mb-8">
              <div className={`p-6 rounded-xl border ${idx % 2 === 0 ? 'bg-white border-[#E6DAD2]' : 'bg-[#F9F7F5] border-[#E6DAD2]'}`}>
                <h3 className="text-lg font-medium text-[#2D2D2B] mb-4">Correction Strategy</h3>
                <div className="space-y-4">
                  {study.correctionStrategy.map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#2D2D2B] text-white rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <p className="text-[#2D2D2B]/70 text-sm leading-relaxed">{step.replace(/^Step \d+: /, '')}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* After — Image Placeholder */}
            <AnimatedSection delay={4} className="mb-8">
              <div className="bg-green-50 border-2 border-dashed border-green-300/50 rounded-xl p-8 text-center">
                <CheckCircle className="w-10 h-10 text-green-400 mx-auto mb-2" />
                <p className="text-green-700/60 text-sm font-medium">After Photo — {study.title.replace(/Case Study \d+: /, '')}</p>
                <p className="text-green-600/40 text-xs">Image to be added from correction portfolio</p>
              </div>
            </AnimatedSection>

            {/* Healing Outcome */}
            <AnimatedSection delay={4} className="mb-8">
              <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                <h3 className="text-lg font-medium text-[#2D2D2B] flex items-center gap-2 mb-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Healing Outcome
                </h3>
                <p className="text-[#2D2D2B]/70 leading-relaxed">{study.healingOutcome}</p>
              </div>
            </AnimatedSection>

            {/* Key Takeaway */}
            <AnimatedSection delay={5}>
              <div className="bg-[#2D2D2B] p-6 rounded-xl">
                <h3 className="text-sm font-medium text-amber-400 uppercase tracking-wide mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Key Takeaway
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">{study.keyTakeaway}</p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      ))}

      {/* What These Cases Have in Common */}
      <section className="py-20 bg-[#2D2D2B]">
        <div className="container-custom max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-white mb-4">
              What All Successful Corrections Have in Common
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Eye, title: 'Thorough Assessment', desc: 'Every correction begins with a detailed evaluation under magnification — skin condition, pigment depth, color shift degree, and tissue health must all be assessed before determining the approach.' },
              { icon: Palette, title: 'Precise Color Theory', desc: 'Successful neutralization requires matching the corrector to the specific color shift. Orange counters blue, ash counters orange. Wrong corrector = wrong result.' },
              { icon: Clock, title: 'Patient Healing Intervals', desc: 'Rushing sessions before prior work heals fully leads to compounding problems. Every session in these case studies followed minimum 6-week healing intervals.' },
              { icon: Target, title: 'Technique Adaptation', desc: 'Previously-worked skin requires adjusted pressure, needle depth, and saturation compared to fresh skin. Experience with correction cases is essential for correct calibration.' },
            ].map((item, idx) => (
              <AnimatedSection key={item.title} delay={idx + 1}>
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl h-full">
                  <item.icon className="w-8 h-8 text-amber-400 mb-3" />
                  <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Correction Cases */}
      <BeforeAfterCase
        title="Case Study Visual Evidence"
        subtitle="Documented before-and-after results from real microblading correction cases at Ink Mugi. Photos will be added as cases complete healing."
        cases={[
          {
            before: '',
            after: '',
            beforeAlt: 'Grey microblading correction case study before photo Northern Virginia',
            afterAlt: 'Microblading correction case study healed result powder brows Annandale VA',
            caption: 'Case 1: Grey-shifted microblading corrected with warm-spectrum neutralization and ombré powder overlay. 8 weeks healed.',
          },
          {
            before: '',
            after: '',
            beforeAlt: 'Patchy microblading correction before photo at Ink Mugi studio',
            afterAlt: 'Patchy microblading corrected with powder brows healed result Northern Virginia',
            caption: 'Case 2: Patchy, uneven microblading restored with full-coverage powder brows. 6 weeks healed.',
          },
          {
            before: '',
            after: '',
            beforeAlt: 'Color-shifted microblading before correction at Ink Mugi Annandale',
            afterAlt: 'Microblading color correction healed result powder brows Northern Virginia',
            caption: 'Case 3: Orange-shifted microblading neutralized and restored to natural warm brown. 10 weeks healed.',
          },
        ] as CasePhoto[]}
      />

      {/* Author Authority Block */}
      <AuthorBlock variant="full" />

      {/* Hub Links */}
      <RelatedMicrobladingProblems currentPath="/microblading-correction-case-study" bgClass="bg-[#F9F7F5]" cardBgClass="bg-white" />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#2D2D2B] to-[#1a1a18]">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-white mb-4">
              Your Correction Story Starts Here
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg mb-8">
              Every case study on this page started exactly where you are now — looking at disappointing brows
              and wondering if they can be fixed. The answer, in the vast majority of cases, is yes. Book your
              assessment and let's map out the correction plan for your specific situation based on what your skin, pigment, and healed result are actually doing.
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
          Related searches: microblading correction case study, microblading correction before and after,
          fix botched microblading results, grey microblading correction, patchy microblading fix,
          microblading color correction results, microblading to powder brows transition,
          microblading correction Northern Virginia, powder brow correction case study
        </p>
      </div>
    </>
  );
};

export default MicrobladingCorrectionCaseStudy;
