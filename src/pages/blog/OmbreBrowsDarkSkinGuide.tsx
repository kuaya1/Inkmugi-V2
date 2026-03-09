import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import {
  Calendar,
  Clock,
  ArrowRight,
  Phone,
  CheckCircle,
  ChevronRight
} from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';
import InlineFaqAccordion from '../../components/InlineFaqAccordion';

const OmbreBrowsDarkSkinGuide: React.FC = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Ombre Powder Brows for Dark Skin: Techniques, Pigment Selection, and Healing",
    "description": "Expert guide on ombre powder brows for Fitzpatrick skin types IV–VI. Covers pigment selection, healing differences, keloid considerations, and before/after examples from 330+ procedures.",
    "author": {
      "@type": "Person",
      "@id": "https://www.inkmugi.com/#mugi",
      "name": "Mugi"
    },
    "publisher": {
      "@type": "HealthAndBeautyBusiness",
      "@id": "https://www.inkmugi.com/#business",
      "name": "Ink Mugi"
    },
    "datePublished": "2026-03-08",
    "dateModified": "2026-03-08",
    "mainEntityOfPage": "https://www.inkmugi.com/blog/ombre-brows-dark-skin-guide",
    "image": "https://www.inkmugi.com/og-image.jpg",
    "wordCount": 2800,
    "articleSection": "Permanent Makeup Education"
  };

  const faqs = [
    {
      question: "Can dark skin get ombre powder brows?",
      answer: "Absolutely. Ombre powder brows work exceptionally well on Fitzpatrick skin types IV–VI. The key is proper pigment selection — using warm undertones that complement deeper skin rather than fighting it. At Ink Mugi, we've performed ombre powder brows on dozens of clients with dark skin tones, achieving natural, defined results that heal beautifully."
    },
    {
      question: "What pigment colors work best for dark skin brows?",
      answer: "For darker skin tones, we use pigments with warm brown and chocolate undertones — never cool-toned ash or grey-based pigments, which are more likely to turn ashy or bluish on melanin-rich skin over time. The specific shade is mixed and matched against your natural brow hair, undertone, and desired intensity during your consultation. We adjust saturation density so the finished result enhances your features naturally."
    },
    {
      question: "Do ombre brows heal differently on dark skin?",
      answer: "Yes — there are important differences. Clients with Fitzpatrick IV–VI skin types tend to experience slightly more pigment fading during healing because melanin-rich skin metabolizes pigment differently. The initial scabbing phase may also appear more pronounced. This is why we adjust our pigment saturation and depth specifically for darker skin tones. The perfecting session at 6 weeks is especially important for fine-tuning color retention."
    },
    {
      question: "Is there a keloid risk with ombre powder brows on dark skin?",
      answer: "While clients with darker skin tones have a statistically higher predisposition to keloid scarring, ombre powder brows use a superficial tattooing technique that deposits pigment in the upper dermis — much shallower than traditional tattoos. In our 330+ procedures, we have not encountered keloid formation from our ombre technique. During your consultation, we review your scarring history and can perform a small patch test if you have concerns."
    },
    {
      question: "How long do ombre brows last on darker skin tones?",
      answer: "Ombre powder brows on Fitzpatrick IV–VI skin typically last 1–2.5 years. Because melanin-rich skin tends to process pigment more actively, clients with darker skin may need touch-ups slightly sooner than lighter-skinned clients. Our customized aftercare protocol — including sun protection guidance critical for pigment longevity — helps maximize retention regardless of skin tone."
    },
    {
      question: "Will my ombre brows look ashy or gray on my dark skin?",
      answer: "Not with proper pigment selection. Ashy or grey results happen when artists use cool-toned pigments or pigments formulated primarily for lighter skin. We use warm-based, high-quality EU-compliant vegan pigments specifically blended for your undertone. During healing, there may be a brief ashy phase (days 4–7) as the top layer flakes — this is normal and temporary. The true healed color emerges at weeks 3–4."
    }
  ];

  return (
    <>
      <SEO
        title="Ombre Powder Brows for Dark Skin: Techniques, Pigment Selection & Healing | Ink Mugi"
        description="Expert guide on ombre powder brows for Fitzpatrick skin types IV–VI. Covers pigment selection for dark skin, healing differences, keloid considerations, and real healed results."
        path="/blog/ombre-brows-dark-skin-guide"
        keywords="ombre brows dark skin, powder brows dark skin, permanent makeup dark skin tones, PMU Fitzpatrick IV V VI, ombre brows Black skin, powder brows African American, PMU melanin rich skin"
      >
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.inkmugi.com/" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.inkmugi.com/blog" },
              { "@type": "ListItem", "position": 3, "name": "Ombre Brows Dark Skin Guide", "item": "https://www.inkmugi.com/blog/ombre-brows-dark-skin-guide" }
            ]
          })}
        </script>
      </SEO>

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent">
        <div className="h-full bg-[#9A7B69] transition-all duration-150" style={{ width: '0%' }} id="reading-progress" />
      </div>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#F0E4D8] to-[#F9F7F5]">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-[#2D2D2B]/60 mb-8">
              <Link to="/" className="hover:text-[#9A7B69] transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/blog" className="hover:text-[#9A7B69] transition-colors">Blog</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-[#2D2D2B]">Ombre Brows Dark Skin Guide</span>
            </nav>

            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-[#9A7B69] text-white text-xs font-medium rounded-full uppercase tracking-wider">
                PMU Education
              </span>
              <div className="flex items-center gap-2 text-sm text-[#2D2D2B]/60">
                <Calendar className="w-4 h-4" />
                <span>March 8, 2026</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#2D2D2B]/60">
                <Clock className="w-4 h-4" />
                <span>12 min read</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-cormorant font-medium mb-6 text-[#2D2D2B] leading-tight">
              Ombre Powder Brows for Dark Skin:<br />
              <span className="text-[#9A7B69]">Techniques, Pigment Selection &amp; Healing</span>
            </h1>

            <p className="text-lg text-[#2D2D2B]/80 max-w-3xl leading-relaxed">
              A comprehensive guide to how ombre powder brows work on melanin-rich skin — including Fitzpatrick skin types IV, V, and VI. Covers pigment formulation, healing expectations, and what to look for in an artist who understands darker skin tones.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white" id="article-content">
        <div className="container-custom max-w-3xl">
          {/* Introduction */}
          <AnimatedSection>
            <div className="prose prose-lg text-[#2D2D2B]/85 max-w-none">
              <p>
                One of the most common concerns I hear during consultations with clients who have darker skin tones is: <em>"Will ombre powder brows actually work on my skin?"</em>
              </p>
              <p>
                The answer is an emphatic yes — but the approach matters enormously. Permanent makeup on melanin-rich skin requires specific knowledge about pigment chemistry, healing biology, and technique adjustments that many generalist PMU artists simply haven't been trained on.
              </p>
              <p>
                I'm Mugi, a Virginia-licensed permanent cosmetic tattooer (<a href="https://www.dpor.virginia.gov/" target="_blank" rel="noopener noreferrer">License #1231002471</a>) with 330+ documented procedures. In this guide, I'll share what I've learned about performing ombre powder brows specifically on Fitzpatrick skin types IV through VI — the science behind pigment selection, how healing differs, and the questions you should ask any artist before booking.
              </p>
            </div>
          </AnimatedSection>

          {/* Section: Understanding Fitzpatrick Skin Types */}
          <AnimatedSection className="mt-16">
            <h2 className="text-2xl md:text-3xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              Understanding Fitzpatrick Skin Types IV–VI
            </h2>
            <div className="prose prose-lg text-[#2D2D2B]/85 max-w-none">
              <p>
                The Fitzpatrick scale classifies skin based on its reaction to UV exposure and its melanin content. For permanent makeup purposes, skin types IV through VI present specific considerations:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-[#F9F7F5] rounded-2xl p-6">
                <h3 className="font-semibold text-[#2D2D2B] mb-2">Type IV — Olive to Moderate Brown</h3>
                <p className="text-sm text-[#2D2D2B]/70">Burns minimally, tans easily. Common in Mediterranean, Hispanic, Asian, and Middle Eastern backgrounds. Moderate melanin activity affects pigment retention.</p>
              </div>
              <div className="bg-[#F9F7F5] rounded-2xl p-6">
                <h3 className="font-semibold text-[#2D2D2B] mb-2">Type V — Dark Brown</h3>
                <p className="text-sm text-[#2D2D2B]/70">Rarely burns, tans darkly. Common in South Asian, East African, and some Hispanic backgrounds. Higher melanin density requires adjusted pigment saturation.</p>
              </div>
              <div className="bg-[#F9F7F5] rounded-2xl p-6">
                <h3 className="font-semibold text-[#2D2D2B] mb-2">Type VI — Very Dark Brown to Black</h3>
                <p className="text-sm text-[#2D2D2B]/70">Never burns. Common in West African, Central African, and some South Asian backgrounds. Highest melanin density — pigment formulation is critical for visible, natural results.</p>
              </div>
            </div>

            <div className="prose prose-lg text-[#2D2D2B]/85 max-w-none">
              <p>
                <strong>Why this matters for PMU:</strong> Melanin isn't just about skin color — it actively interacts with implanted pigment. Higher melanin levels can "eat" or disperse certain pigment molecules faster, cause color shifts over time, and affect how the healed result appears against your natural skin tone. An artist who doesn't account for these factors will produce results that fade too quickly, shift color, or look unnatural.
              </p>
            </div>
          </AnimatedSection>

          {/* Section: Pigment Selection */}
          <AnimatedSection className="mt-16">
            <h2 className="text-2xl md:text-3xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              Pigment Selection for Dark Skin Tones
            </h2>
            <div className="prose prose-lg text-[#2D2D2B]/85 max-w-none">
              <p>
                Pigment selection is the single most important factor in achieving beautiful ombre brows on dark skin. Here's what I've learned across hundreds of procedures:
              </p>
            </div>

            <div className="bg-[#F7EDE6] rounded-2xl p-8 my-8">
              <h3 className="font-semibold text-[#2D2D2B] mb-4">What We Use — And Why</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#9A7B69] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-[#2D2D2B]">Warm-based brown pigments</p>
                    <p className="text-sm text-[#2D2D2B]/70">We use warm chocolate, caramel, and espresso bases. Warm undertones complement melanin rather than fighting it, preventing the ashy or greyish results that plague cooler formulations.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#9A7B69] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-[#2D2D2B]">Higher pigment concentration</p>
                    <p className="text-sm text-[#2D2D2B]/70">Melanin-rich skin metabolizes pigment more actively. We increase saturation slightly during initial application to account for the natural fading that occurs during healing — without overpacking, which risks a harsh appearance.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#9A7B69] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-[#2D2D2B]">EU-compliant, vegan formulations</p>
                    <p className="text-sm text-[#2D2D2B]/70">Our pigments meet the strictest EU safety standards (REACH compliant). They contain no iron oxide blends that tend to oxidize into unwanted orange or red tones on darker skin over time.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#9A7B69] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-[#2D2D2B]">Custom blending for each client</p>
                    <p className="text-sm text-[#2D2D2B]/70">No two dark skin tones are identical. We blend pigment against your actual brow area during consultation — never a generic "dark skin" preset — to ensure the healed result integrates seamlessly with your natural tone.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-8">
              <h4 className="font-semibold text-red-900 mb-2">⚠️ Red Flags to Watch For</h4>
              <p className="text-red-800 text-sm">
                If an artist uses the same pigment line and shade across all skin tones, shows no healed results on dark skin, or doesn't discuss Fitzpatrick typing during your consultation — those are warning signs. <Link to="/how-to-choose-pmu-artist" className="text-red-900 underline font-medium">Read our full artist evaluation guide →</Link>
              </p>
            </div>
          </AnimatedSection>

          {/* Section: Healing Differences */}
          <AnimatedSection className="mt-16">
            <h2 className="text-2xl md:text-3xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              How Healing Differs on Dark Skin
            </h2>
            <div className="prose prose-lg text-[#2D2D2B]/85 max-w-none">
              <p>
                Healing is where the most anxiety — and the most misinformation — lives for clients with darker skin tones. Here's the reality from my experience:
              </p>
            </div>

            <div className="my-8 space-y-6">
              <div className="bg-[#F9F7F5] rounded-2xl p-6 border-l-4 border-[#9A7B69]">
                <h3 className="font-semibold text-[#2D2D2B] mb-2">Days 1–3: Initial Darkening</h3>
                <p className="text-[#2D2D2B]/75">
                  Brows will look 30–50% darker than expected immediately after the procedure. This is more visually dramatic on darker skin, but it's completely normal. The color intensity is not what you'll keep.
                </p>
              </div>
              <div className="bg-[#F9F7F5] rounded-2xl p-6 border-l-4 border-[#9A7B69]">
                <h3 className="font-semibold text-[#2D2D2B] mb-2">Days 4–7: Scabbing &amp; Ashy Phase</h3>
                <p className="text-[#2D2D2B]/75">
                  This is the phase that alarms many clients with darker skin. As the top layer flakes, brows can appear ashy, patchy, or lighter than your skin. <strong>This is temporary.</strong> The epidermis is shedding the surface pigment while the dermal pigment remains. Resist the urge to pick — the color is developing underneath.
                </p>
              </div>
              <div className="bg-[#F9F7F5] rounded-2xl p-6 border-l-4 border-[#9A7B69]">
                <h3 className="font-semibold text-[#2D2D2B] mb-2">Days 8–14: Ghost Phase</h3>
                <p className="text-[#2D2D2B]/75">
                  Many dark-skinned clients experience a more pronounced "ghost phase" where brows seem to disappear entirely. On Fitzpatrick V–VI skin, this can last slightly longer. Don't panic — the pigment is still there, regenerating under new skin cells.
                </p>
              </div>
              <div className="bg-[#F9F7F5] rounded-2xl p-6 border-l-4 border-[#9A7B69]">
                <h3 className="font-semibold text-[#2D2D2B] mb-2">Weeks 3–6: True Color Emergence</h3>
                <p className="text-[#2D2D2B]/75">
                  The real healed color emerges between weeks 3 and 6. On melanin-rich skin, the final result typically settles 15–25% lighter than the day-of application. This is exactly why we adjust our initial saturation — to land at the perfect healed shade.
                </p>
              </div>
            </div>

            <div className="prose prose-lg text-[#2D2D2B]/85 max-w-none">
              <p>
                Our clients receive 24/7 text support from me directly throughout the healing process. For darker-skinned clients, I proactively check in during the ghost phase (days 10–14) because I know how concerning it can look. Detailed aftercare guidance is available in our <Link to="/aftercare-guide">complete aftercare guide</Link>.
              </p>
            </div>
          </AnimatedSection>

          {/* Section: Before & After */}
          <AnimatedSection className="mt-16">
            <h2 className="text-2xl md:text-3xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              Before &amp; After: Healed Results on Dark Skin
            </h2>
            <div className="prose prose-lg text-[#2D2D2B]/85 max-w-none mb-8">
              <p>
                Every result in our gallery is photographed at 6+ weeks healed — never fresh. This is especially important when evaluating PMU on darker skin, where the fresh-vs-healed difference is more dramatic than on lighter tones.
              </p>
              <p>
                We encourage every client to review our <Link to="/gallery">full healed gallery</Link>, which includes results across all Fitzpatrick skin types. During your consultation, we'll show you healed results on clients with a similar skin tone to yours.
              </p>
            </div>

            <div className="bg-[#F9F7F5] rounded-2xl p-8 text-center">
              <p className="text-[#2D2D2B]/70 mb-4">Want to see healed results on your skin tone?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/gallery"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#2D2D2B] text-white rounded-full font-medium hover:bg-[#4A4A47] transition-all text-sm"
                >
                  View Healed Gallery
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  to="/booking"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#2D2D2B] text-[#2D2D2B] rounded-full font-medium hover:bg-[#2D2D2B] hover:text-white transition-all text-sm"
                >
                  Book Free Consultation
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Section: Technique Adjustments */}
          <AnimatedSection className="mt-16">
            <h2 className="text-2xl md:text-3xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              Technique Adjustments for Melanin-Rich Skin
            </h2>
            <div className="prose prose-lg text-[#2D2D2B]/85 max-w-none">
              <p>
                Beyond pigment selection, the physical technique used on darker skin requires adjustments:
              </p>
              <ul>
                <li><strong>Machine speed and needle depth:</strong> We calibrate slightly for melanin-rich skin to ensure pigment reaches the mid-dermis without causing excessive trauma that could trigger hyperpigmentation.</li>
                <li><strong>Pass count:</strong> Rather than multiple aggressive passes, we use a measured layering approach — building color density gradually to avoid overworking the skin.</li>
                <li><strong>Gradient tailoring:</strong> The ombre gradient (lighter at the front, denser at the tail) requires more intentional contrast on darker skin to ensure the gradient effect is visible against your natural tone.</li>
                <li><strong>Post-inflammatory hyperpigmentation (PIH) prevention:</strong> Melanin-rich skin is more prone to PIH. Our technique minimizes unnecessary skin trauma, and our aftercare protocol includes specific guidance to reduce PIH risk.</li>
              </ul>
              <p>
                These aren't minor adjustments — they're fundamental to achieving results that look natural and age gracefully on darker skin. It's the reason we recommend choosing an artist who has documented experience with your skin type, not just general PMU experience.
              </p>
            </div>
          </AnimatedSection>

          {/* Section: Medical Considerations */}
          <AnimatedSection className="mt-16">
            <div className="bg-[#F7EDE6] rounded-2xl p-8">
              <h2 className="text-2xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
                Medical Considerations for Dark Skin PMU
              </h2>
              <div className="prose prose-lg text-[#2D2D2B]/85 max-w-none">
                <p>
                  Several medical conditions that disproportionately affect clients with darker skin tones can impact PMU suitability:
                </p>
                <ul>
                  <li><strong>Keloid predisposition:</strong> While ombre brows use a superficial technique that's far shallower than traditional tattooing, we screen for keloid history during every consultation.</li>
                  <li><strong>Hyperpigmentation disorders:</strong> Conditions like melasma require careful technique adjustment to avoid triggering new patches.</li>
                  <li><strong>Sickle cell trait/disease:</strong> May affect healing time. We adjust aftercare timelines accordingly.</li>
                </ul>
                <p>
                  For a comprehensive overview of medical conditions and PMU compatibility, see our detailed <Link to="/pmu-medical-conditions">medical conditions guide</Link>.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* FAQ Section */}
          <AnimatedSection className="mt-16">
            <InlineFaqAccordion
              faqs={faqs}
              title="Frequently Asked Questions: Ombre Brows on Dark Skin"
              subtitle="Tap a question to reveal the answer"
              maxVisible={6}
            />
          </AnimatedSection>

          {/* Internal Links */}
          <AnimatedSection className="mt-16">
            <div className="bg-[#F9F7F5] rounded-2xl p-8">
              <h3 className="text-xl font-cormorant font-semibold text-[#2D2D2B] text-center mb-6">
                Continue Your Research
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link to="/signature-ombre-brows" className="flex items-center gap-3 p-4 bg-white rounded-lg border border-[#E6DAD2] hover:shadow-md transition-shadow">
                  <ArrowRight className="w-5 h-5 text-[#9A7B69] flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#2D2D2B] text-sm">Signature Ombe Brows</p>
                    <p className="text-xs text-[#2D2D2B]/60">Our flagship technique — full details</p>
                  </div>
                </Link>
                <Link to="/pmu-medical-conditions" className="flex items-center gap-3 p-4 bg-white rounded-lg border border-[#E6DAD2] hover:shadow-md transition-shadow">
                  <ArrowRight className="w-5 h-5 text-[#9A7B69] flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#2D2D2B] text-sm">PMU Medical Conditions</p>
                    <p className="text-xs text-[#2D2D2B]/60">Health requirements &amp; contraindications</p>
                  </div>
                </Link>
                <Link to="/aftercare-guide" className="flex items-center gap-3 p-4 bg-white rounded-lg border border-[#E6DAD2] hover:shadow-md transition-shadow">
                  <ArrowRight className="w-5 h-5 text-[#9A7B69] flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#2D2D2B] text-sm">Aftercare Guide</p>
                    <p className="text-xs text-[#2D2D2B]/60">Complete healing instructions</p>
                  </div>
                </Link>
                <Link to="/how-to-choose-pmu-artist" className="flex items-center gap-3 p-4 bg-white rounded-lg border border-[#E6DAD2] hover:shadow-md transition-shadow">
                  <ArrowRight className="w-5 h-5 text-[#9A7B69] flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#2D2D2B] text-sm">Choosing an Artist</p>
                    <p className="text-xs text-[#2D2D2B]/60">10 green flags &amp; 8 red flags</p>
                  </div>
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Author Block */}
          <AnimatedSection className="mt-16">
            <div className="bg-[#F9F7F5] rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-20 h-20 bg-[#2D2D2B] rounded-full flex items-center justify-center text-white text-2xl font-cormorant flex-shrink-0">
                M
              </div>
              <div>
                <p className="font-semibold text-[#2D2D2B]">Written by Mugi</p>
                <p className="text-sm text-[#9A7B69] mb-2">Licensed Permanent Cosmetic Tattooer • VA License #1231002471</p>
                <p className="text-sm text-[#2D2D2B]/70">
                  Mugi is the founder of Ink Mugi, a permanent makeup studio in Annandale, Virginia specializing in ombre powder brows. With 330+ documented procedures and a 0.19% complication rate, she focuses on healed-first results and evidence-based technique for all skin types.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-24 bg-[#2D2D2B] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://live.staticflickr.com/65535/54363160242_7975c4f42c_o_d.jpg')] bg-cover bg-center opacity-10" />
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-cormorant font-medium mb-6">
              Ready for Brows That Complement Your Skin?
            </h2>
            <p className="text-lg text-[#F9F7F5]/90 mb-8">
              Your consultation includes a personalized skin assessment, Fitzpatrick typing, and pigment matching against your natural tone. See the design on your face before any commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#E6DAD2] text-[#2D2D2B] rounded-full font-medium hover:bg-[#F0E4D8] transition-all"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center justify-center px-8 py-4 border border-white text-white rounded-full font-medium hover:bg-white/10 transition-all"
              >
                View Healed Results
              </Link>
            </div>
            <a
              href="tel:+15712838228"
              className="inline-flex items-center justify-center gap-2 mt-6 text-[#E6DAD2] hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" />
              (571) 283-8228
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default OmbreBrowsDarkSkinGuide;
