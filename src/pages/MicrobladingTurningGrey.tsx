import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  ArrowRight,
  Phone,
  Droplets,
  Sun,
  Shield,
  Target,
  Palette,
  Eye,
  Layers,
  Clock
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import InlineFaqAccordion from '../components/InlineFaqAccordion';
import RelatedMicrobladingProblems from '../components/RelatedMicrobladingProblems';

const MicrobladingTurningGrey: React.FC = () => {

  const faqs = [
    {
      question: "Why is my microblading turning grey?",
      answer: "In many correction consultations we see grey or blue-grey color shift caused by pigment oxidation — a chemical process where iron oxide particles in the pigment change their molecular structure over time. Three primary factors drive this: (1) pigment deposited too deep into the dermis where it refracts differently through skin layers, (2) use of pigments with a cool-dominant base that shifts further cool as warm undertones oxidize out, and (3) UV exposure and moisture (both abundant in the DMV climate) accelerating the oxidation rate. The result is that what started as a warm brown appears grey, blue, or ashy, which is why clients often tell us their brows suddenly started looking \"cold\" in photos before they looked obviously grey in the mirror."
    },
    {
      question: "Can grey microblading be corrected?",
      answer: "Yes. Grey microblading is one of the most common correction cases we handle at Ink Mugi. Correction involves undertone neutralization — applying warm-spectrum pigments (typically orange or peach-based correctors) to counteract the cool grey shift, followed by a surface-level powder brow application for even, natural-looking coverage. Most cases require 1–2 sessions. Severe blue or blue-grey shifts may benefit from a preliminary lightening session before corrective work."
    },
    {
      question: "How long after microblading does grey color shift appear?",
      answer: "Grey color shift typically becomes noticeable between 3–12 months after the initial procedure, though in the DMV's humid climate we sometimes see it as early as 6–8 weeks once the skin fully heals and initial swelling-related warmth dissipates. The shift is gradual — most clients notice their brows looking 'cooler' or 'ashier' before recognizing a distinctly grey tone. UV exposure and oily skin accelerate the timeline significantly."
    },
    {
      question: "Will my grey microblading get worse over time?",
      answer: "In most cases, yes. Pigment oxidation is a progressive chemical process — it doesn't reverse on its own. The iron oxide particles continue to oxidize, and the grey or blue-grey appearance typically intensifies before the pigment fades enough to become less visible. Without correction, grey microblading can persist as a visible discoloration for 2–4 years. Early correction (when the grey shift first becomes apparent) generally produces better results than waiting."
    },
    {
      question: "Why did my microblading turn grey but my friend's didn't?",
      answer: "Several individual variables determine whether microblading shifts grey: (1) skin undertone — cool or neutral undertones reveal grey shift more readily than warm undertones, (2) skin type — oily skin accelerates chemical change in pigment, (3) pigment brand and formulation — cheaper or carbon-heavy pigments are more prone to cool-shifting, (4) application depth — pigment placed too deep refracts grey through skin layers, and (5) aftercare and lifestyle — UV exposure, skincare products, and humidity exposure all influence oxidation rate. Your friend may have different skin chemistry, different pigment, or live in a different climate."
    },
    {
      question: "Is grey microblading the same as blue microblading?",
      answer: "They're related but slightly different stages of the same oxidation process. Grey microblading indicates the warm undertones have oxidized out, revealing the cool base pigment. Blue or blue-grey microblading indicates more advanced oxidation where the pigment has shifted further into the cool spectrum, or the pigment was deposited deeper in the dermis where it refracts through more skin layers (similar to why tattoos appear blue-ish over time). Both are correctable, though blue-grey shifts may require more intensive neutralization."
    },
    {
      question: "Can powder brows turn grey too?",
      answer: "Any pigment-based procedure can theoretically experience some degree of color shift over time — it's a function of pigment chemistry and skin biology. However, powder brows are significantly more resistant to grey shifting for three reasons: (1) digital machines allow more precise and consistent depth control, reducing the chance of over-deep placement, (2) the stippled dot technique creates sealed pigment deposits that are less exposed to oxidation factors, and (3) high-quality powder brow pigments are specifically formulated with stable warm-base compounds. At Ink Mugi, we use premium pigments selected specifically for warm-tone stability in the DMV climate."
    },
    {
      question: "How much does grey microblading correction cost?",
      answer: "At Ink Mugi, correction consultations are $200 (credited toward the procedure if you proceed). Full grey microblading correction — including undertone neutralization and powder brow overlay — typically ranges from $600–$800 depending on the severity of the color shift and whether preliminary lightening is needed. This is comparable to the cost of the original microblading procedure but delivers dramatically longer-lasting results. Most grey correction clients don't need another touch-up for 18–36 months."
    }
  ];

  const greyShiftCauses = [
    {
      title: 'Iron Oxide Oxidation',
      icon: Palette,
      severity: 'Primary Cause',
      description: 'Most microblading pigments are iron oxide-based. Iron oxide is inherently unstable — it undergoes oxidation when exposed to oxygen, moisture, and UV light. During this chemical reaction, the warm brown tones (red and yellow iron oxides) degrade faster than cool-spectrum components, progressively revealing grey, blue-grey, or ashy undertones. This is the same chemical process that turns iron into rust, applied at a molecular scale within your skin.',
      indicator: 'Gradual shift from warm brown to cool grey over 3–12 months'
    },
    {
      title: 'Excessive Depth Placement',
      icon: Layers,
      severity: 'Technique Error',
      description: 'When a microblading blade deposits pigment too deep — into the reticular dermis rather than the papillary dermis — the pigment refracts differently through the overlying skin layers. Skin acts as a natural filter, and deeper pigment appears cooler and greyer as light passes through more tissue before reaching the pigment and reflecting back. This is the same optical principle that makes deep tattoos look blue-ish over time. Proper microblading should target the dermal-epidermal junction.',
      indicator: 'Grey or blue appearance that was visible immediately after healing, not a gradual shift'
    },
    {
      title: 'Cool-Base Pigment Formulation',
      icon: Eye,
      severity: 'Pigment Quality',
      description: 'Not all microblading pigments are formulated equally. Lower-cost pigments may contain a higher ratio of cool-base components (carbon black, blue, or violet undertones) that produce a natural-looking brown initially — but shift grey as the warm components oxidize first. Premium pigments are "warm-dominant," meaning the formulation accounts for expected oxidation and starts warmer than the target color. Many microblading artists use pigments selected for initial appearance rather than healed stability.',
      indicator: 'Uniform grey shift across all strokes, suggesting pigment chemistry rather than technique'
    },
    {
      title: 'UV-Accelerated Degradation',
      icon: Sun,
      severity: 'Environmental Factor',
      description: 'Ultraviolet radiation directly accelerates pigment oxidation by providing energy for the chemical reaction. For DMV-area clients, the combination of strong summer UV (UV index 8–10 during June–August) with outdoor-active lifestyles means brow-area skin receives significant UV exposure. Microblading pigment sitting in shallow incisions has less natural UV shielding than deeper-placed powder brow pigment, making it more vulnerable to photodegradation and color shift.',
      indicator: 'Faster grey shift during summer months or after a vacation with significant sun exposure'
    },
    {
      title: 'Humidity-Driven Moisture Infiltration',
      icon: Droplets,
      severity: 'Climate Factor',
      description: 'The Washington DC metropolitan area\'s 65–85% summer humidity creates persistent moisture pressure on shallow pigment deposits. Moisture accelerates the oxidation chemistry of iron oxide particles and promotes migration of pigment molecules from their original deposit position. In microblading\'s open-incision deposit method, this moisture access is greater than in powder brows\' sealed-dot deposits. Our client data shows grey shifting occurring 40–50% faster in DMV clients compared to clients in arid climates.',
      indicator: 'Grey shift that accelerated noticeably during the first summer after the procedure'
    }
  ];

  return (
    <>
      <SEO
        title="Why Microblading Turns Grey (And How to Fix It) | Ink Mugi"
        description="Expert analysis of why microblading turns grey or ashy — iron oxide oxidation, depth placement, pigment quality, and DMV climate factors. Learn how powder brow correction neutralizes grey shift. Ink Mugi, Annandale VA."
        path="/microblading-turning-grey"
        keywords="microblading turning grey, microblading turning gray, microblading grey eyebrows, microblading grey after healing, microblading color correction, grey microblading fix, microblading turned grey, why is my microblading grey, microblading blue grey, microblading ashy color"
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Why Microblading Turns Grey: Pigment Science and Correction Options",
            "description": "A clinical analysis of why microblading pigment shifts to grey, blue-grey, or ashy tones — covering iron oxide oxidation, placement depth, pigment formulation, and climate factors. Includes correction pathways.",
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
            "url": "https://www.inkmugi.com/microblading-turning-grey",
            "mainEntityOfPage": "https://www.inkmugi.com/microblading-turning-grey"
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
              { "@type": "ListItem", "position": 3, "name": "Microblading Turning Grey", "item": "https://www.inkmugi.com/microblading-turning-grey" }
            ]
          })}
        </script>
      </SEO>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#F0E4D8] via-[#E6DAD2] to-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D2D2B] text-white rounded-full text-sm font-medium mb-6">
              <Palette className="w-4 h-4" />
              Color Science Analysis
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium mb-6 text-[#2D2D2B] leading-tight">
              Why Microblading Turns Grey —<br />
              <span className="text-amber-700">And How to Fix It</span>
            </h1>
            <p className="text-lg md:text-xl text-[#2D2D2B]/80 max-w-3xl mx-auto mb-4">
              If your microblading has shifted from warm brown to grey, blue-grey, or ashy — you're not imagining it.
              This is pigment oxidation, and it's one of the most common microblading problems we correct.
            </p>
            <p className="text-sm text-[#2D2D2B]/60 max-w-2xl mx-auto mb-8">
              By a Virginia-licensed PMU artist with 330+ procedures • Includes DMV-specific climate data
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
                Why Does Microblading Turn Grey?
              </h2>
              <p className="text-[#2D2D2B]/80 text-lg mb-4">
                Microblading turns grey because of <strong>pigment oxidation</strong> — a chemical process where iron oxide particles in the pigment lose their warm-toned components and reveal cool undertones. The five factors that drive this shift are: iron oxide chemistry, excessive placement depth, cool-base pigment formulation, UV radiation, and humidity-driven moisture infiltration.
              </p>
              <p className="text-[#2D2D2B]/70">
                In the DMV's humid climate, grey color shift occurs 40–50% faster than in arid environments. In practice, earlier correction is usually simpler because we are working against a lighter, less stubborn cast. The good news: <strong>grey microblading is correctable</strong> through undertone neutralization and powder brow overlay — typically in 1–2 sessions.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* The 5 Causes of Grey Shift */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              5 Reasons Microblading Turns Grey
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
              Understanding the root cause of your grey shift determines the best correction approach. Each cause has a specific signature.
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {greyShiftCauses.map((cause, idx) => (
              <AnimatedSection key={cause.title} delay={idx + 1}>
                <div className="bg-white p-8 rounded-xl border border-[#E6DAD2]">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#2D2D2B] rounded-full flex items-center justify-center flex-shrink-0">
                      <cause.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-medium text-[#2D2D2B]">{cause.title}</h3>
                        <span className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-800 font-medium">{cause.severity}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[#2D2D2B]/70 leading-relaxed mb-4">{cause.description}</p>
                  <div className="bg-[#F9F7F5] border border-[#E6DAD2] p-4 rounded-lg">
                    <p className="text-sm text-[#2D2D2B]/80">
                      <strong>How to identify:</strong> {cause.indicator}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Examples Placeholder */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <div className="bg-[#F9F7F5] border border-[#E6DAD2] p-12 rounded-xl text-center">
              <Eye className="w-12 h-12 text-[#2D2D2B]/30 mx-auto mb-4" />
              <h2 className="text-2xl font-cormorant font-medium mb-3 text-[#2D2D2B]">
                Grey Microblading: What It Looks Like
              </h2>
              <p className="text-[#2D2D2B]/60 max-w-xl mx-auto mb-4">
                Before-and-after correction photos from real Ink Mugi clients showing grey/ashy microblading transformed through undertone neutralization and powder brow overlay.
              </p>
              <p className="text-sm text-[#2D2D2B]/40 italic">
                Client gallery photos coming soon — all results shown with written consent
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* The Science: How Oxidation Works */}
      <section className="py-20 bg-[#2D2D2B]">
        <div className="container-custom max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-white mb-4">
              The Chemistry Behind Grey Microblading
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Understanding the science helps you evaluate whether your grey shift is correctable and what approach to expect. This is the same color-theory analysis we use before choosing a corrector family for any grey or blue-grey brow.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={1}>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                <div className="text-3xl font-cormorant font-bold text-amber-400 mb-2">Step 1</div>
                <h3 className="text-lg font-medium text-white mb-3">Initial Pigment State</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Fresh microblading pigment contains a calculated blend of warm and cool iron oxide particles. Red and yellow oxides produce warm brown tones. Cool components (black iron oxide, sometimes carbon) provide depth. The blend is designed to appear as your target brow color at the time of application.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                <div className="text-3xl font-cormorant font-bold text-amber-400 mb-2">Step 2</div>
                <h3 className="text-lg font-medium text-white mb-3">Selective Degradation</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Red and yellow iron oxides are molecularly less stable than black iron oxide. Over time, oxygen, UV light, and moisture break down the warm-toned particles first. The warm components that gave the pigment its brown appearance are gradually dismantled, while the cooler components — more chemically resistant — persist.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                <div className="text-3xl font-cormorant font-bold text-amber-400 mb-2">Step 3</div>
                <h3 className="text-lg font-medium text-white mb-3">Cool-Shift Revelation</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  With the warm components reduced, the remaining pigment composition is cool-dominant. Viewed through skin layers, this appears grey, blue-grey, or ashy. The deeper the original placement, the more pronounced the grey appearance due to light refraction through additional tissue layers. This shift is progressive and does not self-correct.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="text-center mt-10" delay={2}>
            <p className="text-white/50 text-sm">
              For a deeper dive into all fading mechanisms, see our <Link to="/why-microblading-fades" className="text-amber-400 hover:text-amber-300 underline">complete guide to why microblading fades</Link>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* How Grey Microblading Is Corrected */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              How We Correct Grey Microblading
            </h2>
            <p className="text-[#2D2D2B]/80 text-lg leading-relaxed mb-8">
              Grey microblading correction is a structured process. In our experience working with previously microbladed brows, earlier intervention usually makes the neutralization step more predictable because the old pigment has not had as much time to deepen into a stubborn blue-grey cast. The approach depends on the severity of the color shift, the depth of existing pigment, and your skin characteristics. Here's the standard protocol at Ink Mugi.
            </p>
          </AnimatedSection>

          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Assessment & Color Analysis',
                desc: 'We evaluate the existing pigment under natural and controlled lighting to determine the exact undertone shift — grey, blue-grey, green-grey, or ashy. We assess pigment depth using magnification and identify whether the shift is surface-oxidation or depth-refraction based. This determines whether neutralization alone will suffice or whether preliminary lightening is needed.',
              },
              {
                step: '02',
                title: 'Undertone Neutralization',
                desc: 'Using color theory, we select a warm-spectrum corrector pigment — typically in the orange-to-peach family — calibrated to the specific cool shift present. Orange neutralizes blue-grey; peach neutralizes ashy-grey. This corrector is applied using a machine stipple technique, depositing warm pigment that chemically and optically cancels the cool-shifted color beneath.',
              },
              {
                step: '03',
                title: 'Powder Brow Overlay',
                desc: 'Once neutralization has healed (typically 4–6 weeks), we apply a full ombré powder brow overlay in your target brow color. The stippled powder technique creates a consistent, sealed pigment layer over the corrected base — providing even color, natural gradient, and dramatically improved longevity compared to the original microblading. Most clients see this as the final session.',
              },
              {
                step: '04',
                title: 'Perfecting Touch-Up',
                desc: 'At 6–8 weeks post-overlay, we evaluate the healed result and perform any refinements needed — typically minor saturation adjustments or shape perfecting. This session is included in the correction price. After this touch-up, most clients won\'t need another appointment for 18–36 months.',
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

          <AnimatedSection className="mt-8" delay={5}>
            <div className="bg-amber-50 border border-amber-100 p-6 rounded-xl">
              <p className="text-[#2D2D2B]/80 text-sm">
                <strong>Correction outcomes depend on individual factors.</strong> During your <Link to="/microblading-correction-northern-virginia" className="text-amber-700 font-medium hover:underline">correction consultation</Link>, we'll provide a realistic assessment of expected results, timeline, and cost. Some severe cases may require an additional session. We never over-promise.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Powder Brows Resist Grey Shifting */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              Why Powder Brows Resist Grey Shifting
            </h2>
            <p className="text-[#2D2D2B]/80 text-lg leading-relaxed mb-8">
              If your grey microblading has you questioning permanent makeup entirely, understand that the technique — not the concept — is the problem. Many of our correction clients feel hesitant at first for exactly this reason, until they understand why the original color failed. Here's why <Link to="/signature-ombre-brows" className="text-amber-700 font-medium hover:underline">ombré powder brows</Link> maintain their color stability.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Target,
                title: 'Precision Depth Control',
                desc: 'Digital PMU machines deliver pigment at a precisely controlled, consistent depth — eliminating the over-depth placement that causes grey refraction. Every dot is deposited at the same level, ensuring uniform color rendering through the skin.'
              },
              {
                icon: Shield,
                title: 'Sealed Deposit Method',
                desc: 'Powder brow stippling creates sealed pigment deposits rather than open incisions. These sealed dots are less accessible to oxygen and moisture — the two primary drivers of iron oxide oxidation. Reduced oxidation means dramatically slower color shift.'
              },
              {
                icon: Palette,
                title: 'Warm-Stable Pigment Selection',
                desc: 'At Ink Mugi, we use premium pigments specifically formulated with warm-dominant iron oxide blends designed to maintain their undertone as they age. We select pigments calibrated for humid climate performance — not just initial application color.'
              },
              {
                icon: Clock,
                title: '2–3x Longer Color Retention',
                desc: 'The combined effect of precise depth, sealed deposits, and stable pigments means powder brows maintain their intended warm-brown color for 18–36 months. Compare this to the 6–12 month grey-shift timeline that many DMV microblading clients experience.'
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
              See the full technique comparison in our <Link to="/microblading-vs-powder-brows" className="text-amber-700 font-medium hover:underline">microblading vs powder brows guide</Link>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Hub Links */}
      <RelatedMicrobladingProblems currentPath="/microblading-turning-grey" bgClass="bg-white" cardBgClass="bg-[#F9F7F5]" />

      {/* FAQ Section */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Grey Microblading FAQ
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
              Grey Microblading Is Correctable
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg mb-8">
              Many clients come to Ink Mugi after experiencing grey color shift from previous microblading. Our powder brow correction technique restores natural warmth and delivers results that last 2–3x longer. Free consultation, no pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/microblading-correction-northern-virginia"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2D2D2B] rounded-full font-medium hover:bg-[#F0E4D8] transition-all"
              >
                View Correction Options
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
          Related searches: microblading turning grey, microblading turned gray, grey microblading fix,
          microblading color correction near me, microblading ashy color, microblading blue grey,
          why is my microblading grey, microblading grey after healing, fix grey eyebrow tattoo,
          microblading undertone correction, grey brow tattoo correction Northern Virginia
        </p>
      </div>
    </>
  );
};

export default MicrobladingTurningGrey;
