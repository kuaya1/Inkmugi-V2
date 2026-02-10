import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  CheckCircle,
  Award,
  Shield,
  Clock,
  AlertTriangle,
  ArrowRight,
  Star,
  Droplets,
  RotateCcw,
  Zap,
  Heart,
  HelpCircle,
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import InlineFaqAccordion from '../components/InlineFaqAccordion';
import CTASection from '../components/CTASection';

const SalineTattooRemoval: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const removalProcess = [
    {
      step: 1,
      title: 'Assessment Consultation',
      duration: '30-45 min',
      description: 'We examine your existing PMU work in person, assess pigment depth, color, skin condition, and scarring. We take photos and determine whether saline removal, correction, or a combination approach is best for your specific case.',
      details: ['Examine existing pigment depth & color', 'Assess skin health & scarring', 'Discuss realistic expectations', 'Create custom treatment plan'],
    },
    {
      step: 2,
      title: 'Saline Solution Application',
      duration: '1-2 hours per session',
      description: 'Using a tattoo machine, we implant a specialized hypertonic saline solution (Li-FT®) into the tattooed area. The solution works through osmosis — drawing pigment particles upward toward the skin surface where they form a scab containing the unwanted ink.',
      details: ['Topical numbing applied first', 'Li-FT® saline solution implanted', 'Osmosis draws pigment to surface', 'Controlled, precise application'],
    },
    {
      step: 3,
      title: 'Healing & Scab Formation',
      duration: '7-14 days per session',
      description: 'A scab forms over the treated area containing the drawn-out pigment. As the scab naturally separates, it takes the unwanted pigment with it. Proper aftercare is critical — do not pick, scratch, or wet the area.',
      details: ['Days 1-3: Treated area weeps & scabs', 'Days 4-7: Scab hardens and darkens', 'Days 7-14: Scab naturally separates', 'Lifted pigment exits with the scab'],
    },
    {
      step: 4,
      title: 'Follow-Up & Additional Sessions',
      duration: '6-8 weeks between sessions',
      description: 'Most cases require 2-5 sessions depending on pigment depth, age of the tattoo, and desired result. We reassess progress at each follow-up and adjust approach as needed. Some clients combine removal with correction for optimal results.',
      details: ['Progress photos at each visit', 'Typically 2-5 sessions needed', 'Can combine with correction work', '6-8 week minimum between sessions'],
    },
  ];

  const faqs = [
    {
      question: 'What is saline tattoo removal and how does it work?',
      answer: 'Saline tattoo removal uses a hypertonic saline solution (like Li-FT®) implanted into the skin using a tattoo machine. The high salt concentration creates an osmotic effect that draws pigment particles up toward the skin surface. A scab forms containing the extracted pigment, and when the scab naturally separates, it takes the unwanted ink with it. It\'s a non-laser, all-natural approach to PMU removal.',
    },
    {
      question: 'Is saline removal better than laser for permanent makeup?',
      answer: 'For permanent makeup removal, saline is often preferred over laser. Laser removal can cause white, warm-toned, or iron oxide-based PMU pigments to turn darker or change color unpredictably. Saline removal works on ALL colors and types of PMU pigment without the risk of color change. It\'s also gentler on the delicate skin around the eyes and brows.',
    },
    {
      question: 'How many sessions does saline PMU removal take?',
      answer: 'Most permanent makeup removal cases require 2-5 sessions, spaced 6-8 weeks apart. The number of sessions depends on: (1) pigment depth, (2) how many layers were applied, (3) age of the tattoo, (4) pigment type and color, and (5) your body\'s healing response. Lighter or older work may clear in 2-3 sessions; deep, multi-layered work may need 4-5.',
    },
    {
      question: 'Does saline tattoo removal hurt?',
      answer: 'Discomfort is comparable to getting the original tattoo. We apply medical-grade topical numbing cream before the procedure, which takes effect in 20 minutes. Most clients rate the discomfort at 3-4 out of 10. The treated area may feel mildly sore for 24-48 hours afterward.',
    },
    {
      question: 'How much does saline tattoo removal cost at Ink Mugi?',
      answer: 'Saline tattoo removal starts at $250 per session at Ink Mugi. Most cases require 2-5 sessions, making the total investment $500-$1,250 depending on complexity. This includes numbing, the Li-FT® saline procedure, aftercare instructions, and follow-up assessment. Compare this to $400-$800/session for laser removal in the DMV.',
    },
    {
      question: 'Can saline removal fix my botched microblading?',
      answer: 'Yes. Saline removal is one of the most effective ways to address botched microblading — whether the issue is wrong shape, wrong color, too dark, uneven strokes, or scarring. Depending on your case, we may recommend: (1) full removal then redo, (2) partial removal then correction, or (3) correction only. A consultation is required to assess your specific situation.',
    },
    {
      question: 'What are the risks of saline tattoo removal?',
      answer: 'When performed by a trained professional, saline removal is considered very safe. Potential risks include: temporary redness and swelling, scab formation (expected and necessary), hyperpigmentation or hypopigmentation (usually temporary), and in rare cases, scarring if aftercare instructions are not followed. We minimize risks through proper technique and thorough aftercare guidance.',
    },
    {
      question: 'Can I get new brows after saline removal?',
      answer: 'Absolutely. Many clients come to us specifically to remove old work so we can create fresh, beautiful brows. After your final removal session, we typically wait 8-12 weeks for the skin to fully heal before applying new pigment. This "remove and redo" approach often produces the best results for clients unhappy with previous PMU work.',
    },
  ];

  const salineVsLaser = [
    ['Method', 'Saline solution (Li-FT®)', 'Laser energy pulses'],
    ['Works On', 'ALL pigment colors', 'Limited — can darken white/warm pigments'],
    ['PMU-Safe', '✅ Designed for PMU', '⚠️ Risk of pigment color change'],
    ['Scarring Risk', 'Low (with proper aftercare)', 'Moderate (burns possible)'],
    ['Sessions Needed', '2-5 sessions', '3-8 sessions'],
    ['Session Cost (DMV)', '$250-$400', '$400-$800'],
    ['Healing Time', '7-14 days per session', '4-6 weeks per session'],
    ['Brow Area Safe', '✅ Yes — gentle on delicate skin', '⚠️ Risk near eyes'],
    ['Natural Ingredients', '✅ Saline-based, no chemicals', '❌ Energy-based'],
  ];

  return (
    <>
      <Helmet>
        <title>Saline Tattoo Removal in Annandale VA | PMU Removal | Ink Mugi</title>
        <meta
          name="description"
          content="Saline tattoo removal in Annandale, VA starting at $250/session. Non-laser PMU removal using Li-FT® saline solution. Fix botched microblading, remove old permanent makeup. Virginia-licensed."
        />
        <meta
          name="keywords"
          content="saline tattoo removal Virginia, saline tattoo removal Annandale VA, PMU removal near me, permanent makeup removal Northern Virginia, saline removal eyebrows, fix botched microblading, Li-FT saline removal, non-laser tattoo removal, microblading removal, eyebrow tattoo removal DMV"
        />
        <link rel="canonical" href="https://www.inkmugi.com/saline-tattoo-removal" />

        <meta property="og:title" content="Saline Tattoo Removal | Non-Laser PMU Removal | Ink Mugi VA" />
        <meta property="og:description" content="Non-laser saline removal for permanent makeup. Fix botched microblading. Starting at $250/session. Virginia-licensed artist." />
        <meta property="og:image" content="https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg" />
        <meta property="og:url" content="https://www.inkmugi.com/saline-tattoo-removal" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Saline Tattoo Removal | Ink Mugi Annandale VA" />
        <meta name="twitter:description" content="Non-laser PMU removal using Li-FT® saline solution. Fix botched microblading. Starting at $250/session." />

        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Saline Tattoo Removal — Non-Laser PMU Removal",
            "description": "Professional saline tattoo removal using Li-FT® solution for permanent makeup, microblading, and cosmetic tattooing in Annandale, VA.",
            "provider": {
              "@type": "HealthAndBeautyBusiness",
              "@id": "https://www.inkmugi.com/#business",
              "name": "Ink Mugi",
              "telephone": "+1-571-283-8228",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "7857 Heritage Dr #330",
                "addressLocality": "Annandale",
                "addressRegion": "VA",
                "postalCode": "22003",
                "addressCountry": "US",
              },
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Northern Virginia & Washington DC Metro",
            },
            "offers": {
              "@type": "Offer",
              "price": "250",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "description": "Per session. Most cases require 2-5 sessions.",
            },
          })}
        </script>

        {/* FAQPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((f) => ({
              "@type": "Question",
              "name": f.question,
              "acceptedAnswer": { "@type": "Answer", "text": f.answer },
            })),
          })}
        </script>

        {/* BreadcrumbList */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.inkmugi.com" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.inkmugi.com/services" },
              { "@type": "ListItem", "position": 3, "name": "Saline Tattoo Removal", "item": "https://www.inkmugi.com/saline-tattoo-removal" },
            ],
          })}
        </script>

        {/* HowTo Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How Saline Tattoo Removal Works: Step-by-Step",
            "description": "The complete process for non-laser saline PMU removal at Ink Mugi in Annandale, VA.",
            "totalTime": "PT90D",
            "estimatedCost": { "@type": "MonetaryAmount", "currency": "USD", "value": "250-1250" },
            "step": removalProcess.map((s) => ({
              "@type": "HowToStep",
              "position": s.step,
              "name": s.title,
              "text": s.description,
            })),
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-[#F0E4D8] via-[#E6DAD2] to-[#F9F7F5]">
          <div className="container-custom">
            <AnimatedSection className="max-w-4xl mx-auto text-center">
              <nav className="text-sm text-[#2D2D2B]/50 mb-6">
                <Link to="/" className="hover:text-[#2D2D2B]">Home</Link>
                <span className="mx-2">/</span>
                <Link to="/services" className="hover:text-[#2D2D2B]">Services</Link>
                <span className="mx-2">/</span>
                <span className="text-[#2D2D2B]">Saline Tattoo Removal</span>
              </nav>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D2D2B]/10 rounded-full mb-6">
                <RotateCcw className="w-4 h-4 text-[#2D2D2B]" />
                <span className="text-sm font-medium text-[#2D2D2B] uppercase tracking-wider">Non-Laser • All-Natural</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
                Saline Tattoo Removal in Annandale, VA
              </h1>
              <p className="text-lg md:text-xl text-[#2D2D2B]/80 max-w-3xl mx-auto mb-4">
                Non-laser permanent makeup removal using Li-FT® saline solution. Safe for all pigment colors. Fix botched microblading, remove old PMU work, and start fresh.
              </p>
              <p className="text-sm text-[#2D2D2B]/60 mb-8">
                Serving Northern Virginia • Arlington • Alexandria • Fairfax • McLean • Washington DC
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8 max-w-lg mx-auto p-4 bg-white/60 backdrop-blur-sm rounded-2xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2D2D2B] mb-1">$250</div>
                  <div className="text-xs text-[#2D2D2B]/60 uppercase">Per Session</div>
                </div>
                <div className="text-center border-x border-[#2D2D2B]/10">
                  <div className="text-2xl font-bold text-[#2D2D2B] mb-1">2-5</div>
                  <div className="text-xs text-[#2D2D2B]/60 uppercase">Sessions Typical</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2D2D2B] mb-1">All</div>
                  <div className="text-xs text-[#2D2D2B]/60 uppercase">Colors Removed</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.vagaro.com/inkmugi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[#2D2D2B] hover:bg-[#1a1a19] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Book Free Assessment
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  to="/pmu-correction-restoration"
                  className="border-2 border-[#2D2D2B]/30 hover:bg-[#2D2D2B]/5 text-[#2D2D2B] font-semibold px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2"
                >
                  Or Explore Corrections
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* What Is Saline Removal */}
        <section className="py-20 bg-white">
          <div className="container-custom max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-[#2D2D2B] mb-6 text-center">
                What Is Saline Tattoo Removal?
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>Saline tattoo removal</strong> is a non-laser technique that uses a hypertonic saline solution (we use the industry-leading <strong>Li-FT®</strong> brand) to extract unwanted permanent makeup pigment from the skin. The solution is implanted into the tattooed area using a PMU machine, where it creates an osmotic effect — drawing pigment particles upward to the skin's surface.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Unlike laser removal, which breaks down pigment with high-energy light pulses (and can cause PMU pigments to turn darker or change color), saline removal works on <strong>every pigment color</strong> without risk of unwanted color change. This makes it the gold standard for permanent makeup removal on eyebrows, lips, and eyeliner.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-8">
                  <h3 className="text-xl font-semibold text-[#2D2D2B] mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-600" /> Why Laser Can Be Dangerous for PMU
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Many PMU pigments contain iron oxide or titanium dioxide. When laser energy hits these compounds, they can undergo an <strong>oxidation reaction that turns the pigment jet black, grey, or green</strong> — the exact opposite of what you want. Saline removal avoids this risk entirely because it mechanically extracts pigment rather than breaking it down with energy.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-10">
                <div className="bg-[#F9F7F5] p-6 rounded-2xl border border-gray-100">
                  <Droplets className="w-10 h-10 text-[#2D2D2B] mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-[#2D2D2B]">All Colors, All Pigments</h3>
                  <p className="text-gray-600 text-sm">Works on black, brown, red, orange, white, and every pigment type — organic and inorganic. No risk of color change.</p>
                </div>
                <div className="bg-[#F9F7F5] p-6 rounded-2xl border border-gray-100">
                  <Shield className="w-10 h-10 text-[#2D2D2B] mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-[#2D2D2B]">Gentle on Delicate Skin</h3>
                  <p className="text-gray-600 text-sm">Designed for the thin, sensitive skin around brows, eyes, and lips — areas where laser carries higher burn risk.</p>
                </div>
                <div className="bg-[#F9F7F5] p-6 rounded-2xl border border-gray-100">
                  <RotateCcw className="w-10 h-10 text-[#2D2D2B] mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-[#2D2D2B]">Fresh Start Possible</h3>
                  <p className="text-gray-600 text-sm">Remove old work completely, then get beautiful new brows. Our "remove and redo" approach produces the best corrections.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Saline vs Laser Comparison */}
        <section className="py-20 bg-[#F9F7F5]">
          <div className="container-custom max-w-5xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-[#2D2D2B] text-center mb-4">
                Saline Removal vs Laser Removal for Permanent Makeup
              </h2>
              <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
                Why saline is the safer, more effective choice for PMU removal.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm md:text-base">
                  <thead>
                    <tr className="bg-[#2D2D2B] text-white">
                      <th className="p-4 text-left font-semibold">Feature</th>
                      <th className="p-4 text-center font-semibold bg-[#E6DAD2] text-[#2D2D2B]">Saline Removal ⭐</th>
                      <th className="p-4 text-center font-semibold">Laser Removal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salineVsLaser.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F9F7F5]'}>
                        <td className="p-4 font-medium text-[#2D2D2B]">{row[0]}</td>
                        <td className="p-4 text-center text-[#2D2D2B] font-medium bg-[#E6DAD2]/10">{row[1]}</td>
                        <td className="p-4 text-center text-[#2D2D2B]/70">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Who Needs This */}
        <section className="py-20 bg-white">
          <div className="container-custom max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-[#2D2D2B] text-center mb-10">
                Who Needs Saline Tattoo Removal?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: AlertTriangle, text: 'Botched microblading — wrong shape, too thick, uneven, or scarred strokes' },
                  { icon: Droplets, text: 'Old PMU that has faded to an unnatural color (blue, grey, orange, red)' },
                  { icon: RotateCcw, text: 'Previous work that\'s too dark, too saturated, or in the wrong position' },
                  { icon: Heart, text: 'Want to start fresh with new, properly-done brows by a skilled artist' },
                  { icon: Zap, text: 'Failed laser removal that turned pigment darker or changed color' },
                  { icon: HelpCircle, text: 'Unhappy with shape, color, or symmetry from another artist\'s work' },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-4 p-5 bg-[#F9F7F5] rounded-xl border border-gray-100">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#E6DAD2] rounded-full flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#2D2D2B]" />
                      </div>
                      <p className="text-gray-700 leading-relaxed pt-1">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20 bg-gradient-to-b from-[#F9F7F5] to-white">
          <div className="container-custom max-w-5xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-[#2D2D2B] text-center mb-4">
                The Saline Removal Process: Step by Step
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                A careful, transparent process with honest expectations at every stage.
              </p>
              <div className="space-y-8">
                {removalProcess.map((step, i) => (
                  <div key={i} className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#2D2D2B] to-[#4A4A47] rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    <div className="flex-grow bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-semibold text-[#2D2D2B]">{step.title}</h3>
                        <span className="px-3 py-1 bg-[#E6DAD2] text-[#2D2D2B] text-xs font-semibold rounded-full whitespace-nowrap">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((d, di) => (
                          <li key={di} className="flex items-start gap-2 text-gray-600 text-sm">
                            <CheckCircle className="w-4 h-4 text-[#2D2D2B] flex-shrink-0 mt-0.5" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-white">
          <div className="container-custom max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#E6DAD2]">
                <div className="bg-gradient-to-br from-[#2D2D2B] to-[#4A4A47] text-white p-8 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E6DAD2] text-[#2D2D2B] rounded-full mb-4">
                    <RotateCcw className="w-4 h-4" />
                    <span className="text-sm font-bold uppercase tracking-wide">Removal Service</span>
                  </div>
                  <h3 className="text-4xl font-cormorant font-bold mb-2">From $250/session</h3>
                  <p className="text-lg text-white/80">Saline PMU Removal</p>
                </div>

                <div className="p-8">
                  <h4 className="text-xl font-semibold text-[#2D2D2B] mb-4">Each Session Includes:</h4>
                  <div className="space-y-3 mb-6">
                    {[
                      { name: 'Assessment & Progress Photos', detail: 'Documented comparison at every visit' },
                      { name: 'Topical Numbing Application', detail: 'Medical-grade cream for comfort' },
                      { name: 'Li-FT® Saline Procedure', detail: 'Industry-leading removal solution' },
                      { name: 'Aftercare Kit & Instructions', detail: 'Everything needed for proper healing' },
                      { name: 'Follow-Up Support', detail: 'Text access for questions during healing' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-[#F9F7F5] rounded-lg">
                        <CheckCircle className="w-5 h-5 text-[#2D2D2B] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-900">{item.name}</p>
                          <p className="text-sm text-gray-500">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-sm">
                    <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" /> Honest Expectations
                    </h4>
                    <p className="text-amber-700">
                      Most cases require <strong>2-5 sessions</strong> spaced 6-8 weeks apart. Total investment: $500-$1,250 depending on pigment depth and layers. We'll give you a realistic estimate during your free consultation — no sugarcoating.
                    </p>
                  </div>

                  <div className="text-center">
                    <a
                      href="https://www.vagaro.com/inkmugi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#2D2D2B] hover:bg-[#1a1a19] text-white font-semibold px-8 py-4 rounded-full transition-all"
                    >
                      Book Free Assessment <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-[#F9F7F5]">
          <div className="container-custom max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-[#2D2D2B] text-center mb-4">
                Saline Tattoo Removal FAQ
              </h2>
              <p className="text-center text-gray-600 mb-10">
                Honest answers to the most common questions about PMU removal.
              </p>
              <InlineFaqAccordion title="" subtitle="" maxVisible={8} faqs={faqs} />
            </AnimatedSection>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-white">
          <div className="container-custom max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-2xl font-cormorant font-medium text-[#2D2D2B] text-center mb-8">
                Related Services
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/pmu-correction-restoration" className="block p-5 bg-[#F9F7F5] rounded-xl border border-gray-100 hover:shadow-md transition-all">
                  <h3 className="font-medium text-[#2D2D2B] mb-1">PMU Correction & Restoration</h3>
                  <p className="text-sm text-gray-500">Fix color, shape, and symmetry without full removal.</p>
                </Link>
                <Link to="/signature-ombre-brows" className="block p-5 bg-[#F9F7F5] rounded-xl border border-gray-100 hover:shadow-md transition-all">
                  <h3 className="font-medium text-[#2D2D2B] mb-1">Ombre Powder Brows</h3>
                  <p className="text-sm text-gray-500">Start fresh with beautiful new brows. From $600.</p>
                </Link>
                <Link to="/nano-brows" className="block p-5 bg-[#F9F7F5] rounded-xl border border-gray-100 hover:shadow-md transition-all">
                  <h3 className="font-medium text-[#2D2D2B] mb-1">Nano Brows</h3>
                  <p className="text-sm text-gray-500">Ultra-fine hair strokes after removal. From $650.</p>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Credential Bar */}
        <section className="py-10 bg-[#2D2D2B] text-white">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <Award size={24} className="mx-auto mb-2 text-[#E6DAD2]" />
                <p className="font-semibold text-sm">VA Licensed</p>
                <p className="text-xs text-white/60">#1231002471</p>
              </div>
              <div>
                <Shield size={24} className="mx-auto mb-2 text-[#E6DAD2]" />
                <p className="font-semibold text-sm">Fully Insured</p>
                <p className="text-xs text-white/60">Liability Coverage</p>
              </div>
              <div>
                <CheckCircle size={24} className="mx-auto mb-2 text-[#E6DAD2]" />
                <p className="font-semibold text-sm">Li-FT® Certified</p>
                <p className="text-xs text-white/60">Industry Standard</p>
              </div>
              <div>
                <Star size={24} className="mx-auto mb-2 text-[#E6DAD2]" />
                <p className="font-semibold text-sm">Remove + Redo</p>
                <p className="text-xs text-white/60">Full-Service Solution</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-12 bg-[#F9F7F5]">
          <div className="container-custom max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-cormorant font-medium text-[#2D2D2B] mb-2">Serving the DMV Region</h2>
            <p className="text-[#2D2D2B]/60 text-sm mb-6">Professional permanent makeup for Northern Virginia, DC & Maryland</p>
            <div className="flex flex-wrap justify-center gap-2">
              <Link to="/permanent-makeup-annandale" className="px-4 py-2 bg-white rounded-full text-sm text-[#2D2D2B] hover:bg-[#E6DAD2] transition-colors border border-gray-200">Annandale</Link>
              <Link to="/ombre-brows-arlington-va" className="px-4 py-2 bg-white rounded-full text-sm text-[#2D2D2B] hover:bg-[#E6DAD2] transition-colors border border-gray-200">Arlington</Link>
              <Link to="/ombre-brows-alexandria-va" className="px-4 py-2 bg-white rounded-full text-sm text-[#2D2D2B] hover:bg-[#E6DAD2] transition-colors border border-gray-200">Alexandria</Link>
              <Link to="/ombre-brows-fairfax-va" className="px-4 py-2 bg-white rounded-full text-sm text-[#2D2D2B] hover:bg-[#E6DAD2] transition-colors border border-gray-200">Fairfax</Link>
              <Link to="/permanent-makeup-dc" className="px-4 py-2 bg-white rounded-full text-sm text-[#2D2D2B] hover:bg-[#E6DAD2] transition-colors border border-gray-200">Washington DC</Link>
              <Link to="/permanent-makeup-mclean" className="px-4 py-2 bg-white rounded-full text-sm text-[#2D2D2B] hover:bg-[#E6DAD2] transition-colors border border-gray-200">McLean</Link>
              <Link to="/permanent-makeup-tysons" className="px-4 py-2 bg-white rounded-full text-sm text-[#2D2D2B] hover:bg-[#E6DAD2] transition-colors border border-gray-200">Tysons</Link>
              <Link to="/permanent-makeup-falls-church" className="px-4 py-2 bg-white rounded-full text-sm text-[#2D2D2B] hover:bg-[#E6DAD2] transition-colors border border-gray-200">Falls Church</Link>
              <Link to="/permanent-makeup-springfield" className="px-4 py-2 bg-white rounded-full text-sm text-[#2D2D2B] hover:bg-[#E6DAD2] transition-colors border border-gray-200">Springfield</Link>
              <Link to="/permanent-makeup-vienna" className="px-4 py-2 bg-white rounded-full text-sm text-[#2D2D2B] hover:bg-[#E6DAD2] transition-colors border border-gray-200">Vienna</Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection />

        {/* Semantic SEO Footer */}
        <section className="py-10 bg-[#F0E4D8]/30 border-t border-[#E6DAD2]/20">
          <div className="container-custom max-w-5xl mx-auto">
            <div className="text-xs text-[#2D2D2B]/40 leading-relaxed space-y-3">
              <p>
                <strong className="text-[#2D2D2B]/50">Saline Tattoo Removal at Ink Mugi — Annandale, VA</strong> — Professional non-laser permanent makeup removal using Li-FT® saline solution. Fix botched microblading, remove old eyebrow tattoos, and restore your natural look. Virginia licensed (#1231002471) and fully insured.
              </p>
              <p>
                Related searches: saline tattoo removal near me, saline tattoo removal Virginia, PMU removal Northern Virginia, permanent makeup removal Annandale, microblading removal DMV, eyebrow tattoo removal NoVA, non-laser tattoo removal, saline removal eyebrows, Li-FT removal Virginia, fix botched microblading, bad microblading removal, cosmetic tattoo removal Fairfax County, PMU lightening, tattoo removal Arlington VA, tattoo removal Alexandria VA.
              </p>
              <p>
                Serving: Annandale, Arlington, Alexandria, Fairfax, McLean, Tysons Corner, Falls Church, Springfield, Vienna, Great Falls, Reston, Burke, Washington DC, and the greater Northern Virginia / DMV metro area.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SalineTattooRemoval;
