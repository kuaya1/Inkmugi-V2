import React, { useEffect } from 'react';
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
import { AlertTriangle, Eye, Droplets, Sun } from 'lucide-react';

const OmbreBrowsDarkSkinGuide: React.FC = () => {
  // Wire up reading progress bar
  useEffect(() => {
    const handleScroll = () => {
      const article = document.getElementById('article-content');
      const bar = document.getElementById('reading-progress');
      if (!article || !bar) return;
      const rect = article.getBoundingClientRect();
      const total = article.scrollHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      bar.style.width = `${(scrolled / total) * 100}%`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Ombre Powder Brows for Dark Skin: Techniques, Pigment Selection, and Healing",
    "description": "Expert guide on ombre powder brows for Fitzpatrick skin types IV–VI. Covers pigment selection, healing differences, keloid considerations, and before/after examples from 330+ procedures.",
    "author": {
      "@type": "Person",
      "@id": "https://inkmugi.com/#mugi",
      "name": "Mugi"
    },
    "publisher": {
      "@type": "HealthAndBeautyBusiness",
      "@id": "https://inkmugi.com/#business",
      "name": "Ink Mugi"
    },
    "datePublished": "2026-03-08",
    "dateModified": "2026-03-08",
    "mainEntityOfPage": "https://inkmugi.com/blog/ombre-brows-dark-skin-guide",
    "image": "https://inkmugi.com/og-image.jpg",
    "wordCount": 4200,
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
    },
    {
      question: "What should I look for in a PMU artist's portfolio if I have dark skin?",
      answer: "Ask to see healed results — not fresh, day-of photos — specifically on Fitzpatrick IV–VI clients. Look for warm-toned results without a grey or ashy cast. An experienced artist will have these readily available without searching. If their portfolio only shows results on lighter skin, that tells you their experience with darker tones is limited. Also ask whether they adjust pigment formulation for melanin-rich skin or use the same line across all clients."
    },
    {
      question: "Can ombre powder brows cause hyperpigmentation on dark skin?",
      answer: "Post-inflammatory hyperpigmentation (PIH) is possible if the skin is overworked during the procedure or if aftercare isn't followed correctly. An experienced artist minimizes trauma through calibrated machine speed and a measured layering technique rather than aggressive passes. Our aftercare protocol includes specific PIH-prevention guidance — including avoiding heat, sun, and exfoliating products near the brow area during the healing window."
    },
    {
      question: "Do I need a patch test before getting ombre brows on dark skin?",
      answer: "We recommend a patch test for clients with keloid history, known pigment sensitivities, or autoimmune conditions that affect skin healing. During your consultation, we review your scarring history and skin reactivity. If there's any concern, we perform a small test deposit behind the ear and evaluate the healing response over 4–6 weeks before proceeding with the full procedure."
    },
    {
      question: "How do I maintain my ombre brows on dark skin long-term?",
      answer: "Apply SPF 30+ on your brows whenever you're outdoors — UV radiation degrades pigment regardless of skin tone. Avoid applying retinol, AHA/BHA exfoliants, or skin-lightening products (hydroquinone, kojic acid) near the brow area, as these actively pull pigment. Most clients with darker skin tones benefit from an annual color-boost session to maintain vibrancy — typically a shorter, less intensive appointment than the original procedure."
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
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://inkmugi.com/" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://inkmugi.com/blog" },
              { "@type": "ListItem", "position": 3, "name": "Ombre Brows Dark Skin Guide", "item": "https://inkmugi.com/blog/ombre-brows-dark-skin-guide" }
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
                <span>16 min read</span>
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
                I'm Mugi, a Virginia-licensed permanent cosmetic tattooer (<a href="https://www.dpor.virginia.gov/" target="_blank" rel="noopener noreferrer">License #1231002471</a>) with 330+ documented procedures — a significant portion on Fitzpatrick IV–VI clients from the Northern Virginia and Washington DC area. In this guide, I'll share what I've learned about performing ombre powder brows specifically on darker skin tones — the science behind pigment selection, how healing differs, why some brows turn grey (and how to prevent it), and the questions you should ask any artist before booking.
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

            <div className="bg-[#F7EDE6] rounded-2xl p-8 mt-8">
              <h3 className="font-semibold text-[#2D2D2B] mb-3 flex items-center gap-2">
                <Eye className="w-5 h-5 text-[#9A7B69]" />
                The Science: How Melanocytes Interact With PMU Pigment
              </h3>
              <div className="prose text-[#2D2D2B]/80 max-w-none text-sm">
                <p>
                  Your skin produces two types of melanin: <strong>eumelanin</strong> (brown-black pigment) and <strong>pheomelanin</strong> (red-yellow pigment). Fitzpatrick IV–VI skin contains significantly more eumelanin concentrated in the upper dermis — the exact layer where PMU pigment is deposited.
                </p>
                <p>
                  This creates three challenges that lighter-skinned clients simply don't face:
                </p>
                <ul>
                  <li><strong>Pigment masking:</strong> Dense eumelanin can visually "swallow" lighter or poorly saturated pigments, making brows look faded even when pigment is present in the skin.</li>
                  <li><strong>Active pigment metabolism:</strong> Melanocytes in darker skin are more metabolically active, which accelerates the breakdown of implanted pigment molecules — particularly inorganic iron oxides.</li>
                  <li><strong>Color refraction (Tyndall effect):</strong> Pigment deposited too deep beneath dense melanin layers can refract light differently, causing a blue-grey or ashy visual shift — the same physics that makes veins appear blue through skin.</li>
                </ul>
                <p>
                  Understanding this biology is what separates a PMU artist who "also does darker skin" from one who truly specializes in it. Every decision — pigment formulation, implantation depth, saturation density, pass count — must account for melanin's active role.
                </p>
              </div>
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

          {/* Section: Why Brows Turn Grey on Dark Skin */}
          <AnimatedSection className="mt-16">
            <h2 className="text-2xl md:text-3xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              Why Do Brows Turn Grey or Ashy on Dark Skin?
            </h2>
            <div className="prose prose-lg text-[#2D2D2B]/85 max-w-none">
              <p>
                This is the number-one fear I hear from clients with melanin-rich skin — and unfortunately, it's not unfounded. Grey or ashy brows happen more often on darker skin. But it's <strong>always preventable</strong> when the artist understands the underlying causes:
              </p>
            </div>

            <div className="my-8 space-y-5">
              <div className="bg-[#F9F7F5] rounded-2xl p-6 flex items-start gap-4">
                <div className="w-8 h-8 bg-[#9A7B69] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-[#2D2D2B] mb-1">Cool-toned pigments without warm undertones</h3>
                  <p className="text-sm text-[#2D2D2B]/70">Carbon-based or ash-brown pigments lack the red and orange undertones needed to counterbalance eumelanin's natural blue-black cast. On Fitzpatrick I–III skin this isn't noticeable. On IV–VI, it produces a distinctly grey result that worsens as the pigment fades.</p>
                </div>
              </div>
              <div className="bg-[#F9F7F5] rounded-2xl p-6 flex items-start gap-4">
                <div className="w-8 h-8 bg-[#9A7B69] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-[#2D2D2B] mb-1">Iron oxide oxidation over time</h3>
                  <p className="text-sm text-[#2D2D2B]/70">Traditional inorganic iron oxide pigments can oxidize inside the dermis, shifting from warm brown toward muddy grey-green over 6–18 months. This is more visually pronounced against darker skin tones. Modern organic hybrid pigments — which we use — are formulated to resist this oxidation pathway.</p>
                </div>
              </div>
              <div className="bg-[#F9F7F5] rounded-2xl p-6 flex items-start gap-4">
                <div className="w-8 h-8 bg-[#9A7B69] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-[#2D2D2B] mb-1">The Tyndall effect — pigment deposited too deep</h3>
                  <p className="text-sm text-[#2D2D2B]/70">When pigment is implanted below the ideal mid-dermis layer, light passing through dense melanin above it refracts differently — producing a blue-grey appearance. This is the same physics that makes your veins look blue through skin. An experienced artist controls needle depth precisely to avoid this.</p>
                </div>
              </div>
              <div className="bg-[#F9F7F5] rounded-2xl p-6 flex items-start gap-4">
                <div className="w-8 h-8 bg-[#9A7B69] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-[#2D2D2B] mb-1">Overworked skin causing lymphatic dilution</h3>
                  <p className="text-sm text-[#2D2D2B]/70">Too many aggressive needle passes traumatize the dermal layer, causing lymphatic fluid to flood the area. This dilutes pigment concentration in the tissue, resulting in a washed-out, greyish appearance once healed — especially visible on darker tones.</p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg text-[#2D2D2B]/85 max-w-none">
              <p>
                <strong>The prevention:</strong> Every single cause above is addressable through pigment formulation knowledge and controlled technique. This is why we emphasize warm-based organic hybrid pigments, calibrated machine settings, and a measured layering approach — not guesswork or one-size-fits-all presets.
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

          {/* Section: Aftercare Specific to Melanin-Rich Skin */}
          <AnimatedSection className="mt-16">
            <h2 className="text-2xl md:text-3xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              Aftercare for Melanin-Rich Skin — What's Different
            </h2>
            <div className="prose prose-lg text-[#2D2D2B]/85 max-w-none mb-8">
              <p>
                While the fundamentals of PMU aftercare apply to all skin types, there are specific considerations that make a measurable difference in retention and healing quality on Fitzpatrick IV–VI skin.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-[#F9F7F5] rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sun className="w-5 h-5 text-[#9A7B69]" />
                  <h3 className="font-semibold text-[#2D2D2B]">Sun Protection (Yes, Even on Dark Skin)</h3>
                </div>
                <p className="text-sm text-[#2D2D2B]/70">
                  A common misconception: "My melanin protects me, so I don't need SPF on my brows." Melanin does reduce sunburn risk — but UV radiation degrades PMU pigment equally regardless of skin tone. Daily SPF 30+ on the brow area is the single most impactful thing you can do to extend your results.
                </p>
              </div>
              <div className="bg-[#F9F7F5] rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-[#9A7B69]" />
                  <h3 className="font-semibold text-[#2D2D2B]">Products to Avoid Near Your Brows</h3>
                </div>
                <p className="text-sm text-[#2D2D2B]/70">
                  Several skincare products actively pull PMU pigment. Avoid applying <strong>retinol, AHA/BHA exfoliants, vitamin C serums, and skin-lightening agents</strong> (hydroquinone, kojic acid, arbutin) within a finger-width of the brow area — not just during healing, but permanently. These accelerate pigment breakdown and can cause uneven fading.
                </p>
              </div>
              <div className="bg-[#F9F7F5] rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Droplets className="w-5 h-5 text-[#9A7B69]" />
                  <h3 className="font-semibold text-[#2D2D2B]">Moisture Balance During Healing</h3>
                </div>
                <p className="text-sm text-[#2D2D2B]/70">
                  Fitzpatrick V–VI skin tends to produce thicker scabs during healing. We recommend a modified dry-healing protocol with <em>very light</em> aftercare balm application (rice grain amount, 2x daily) starting day 3 to prevent excessive cracking — which can pull pigment out unevenly and cause patchy results.
                </p>
              </div>
              <div className="bg-[#F9F7F5] rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-[#9A7B69]" />
                  <h3 className="font-semibold text-[#2D2D2B]">Heat Exposure and PIH Risk</h3>
                </div>
                <p className="text-sm text-[#2D2D2B]/70">
                  Avoid saunas, steam rooms, hot yoga, and prolonged direct sun for 14+ days. Heat triggers melanocyte activity, increasing the risk of post-inflammatory hyperpigmentation (PIH) around the brow area in darker skin types. This is more critical for types V–VI than for lighter tones.
                </p>
              </div>
            </div>

            <div className="prose prose-lg text-[#2D2D2B]/85 max-w-none">
              <p>
                Every client receives a printed aftercare card with these instructions, plus text-message reminders at key healing milestones. For the complete protocol including day-by-day guidance, see our <Link to="/aftercare-guide">full aftercare guide</Link>.
              </p>
            </div>
          </AnimatedSection>

          {/* Section: Before & After */}
          <AnimatedSection className="mt-16">
            <h2 className="text-2xl md:text-3xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              Before &amp; After: Evaluating Healed Results on Dark Skin
            </h2>
            <div className="prose prose-lg text-[#2D2D2B]/85 max-w-none mb-8">
              <p>
                Every result in our gallery is photographed at 6+ weeks healed — never fresh. This is especially important when evaluating PMU on darker skin, where the fresh-vs-healed difference is more dramatic than on lighter tones.
              </p>
              <p>
                We encourage every client to review our <Link to="/gallery">full healed gallery</Link>, which includes results across all Fitzpatrick skin types. During your consultation, we'll show you healed results on clients with a similar skin tone to yours.
              </p>
            </div>

            <div className="bg-[#F7EDE6] rounded-2xl p-8 mb-8">
              <h3 className="font-semibold text-[#2D2D2B] mb-4">How to Evaluate Any Artist's Portfolio for Dark Skin</h3>
              <p className="text-sm text-[#2D2D2B]/70 mb-4">
                Before booking with any artist, use this 4-point framework to assess their experience with melanin-rich skin:
              </p>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#9A7B69] rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">1</span>
                  <p className="text-sm text-[#2D2D2B]/80"><strong>Healed photos at 6+ weeks</strong> — not fresh, day-of results. Fresh brows look impressive on everyone. The truth is in the healed result.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#9A7B69] rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">2</span>
                  <p className="text-sm text-[#2D2D2B]/80"><strong>Natural daylight photos</strong> — not studio ring-light shots. Studio lighting can mask grey or ashy undertones that are visible in real life.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#9A7B69] rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">3</span>
                  <p className="text-sm text-[#2D2D2B]/80"><strong>Results on your approximate skin tone</strong> — not just one dark-skinned client in a portfolio of 50 lighter results.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#9A7B69] rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">4</span>
                  <p className="text-sm text-[#2D2D2B]/80"><strong>Fresh AND healed of the same client</strong> — this comparison reveals how the artist accounts for the healing process. A dramatic drop-off suggests poor pigment selection or technique.</p>
                </li>
              </ol>
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
                Beyond pigment selection, the physical technique used on darker skin requires adjustments that fundamentally change how the procedure is performed. These aren't optional refinements — they're necessary for natural results that age well.
              </p>
            </div>

            <div className="my-8 space-y-8">
              <div>
                <h3 className="text-xl font-cormorant font-medium mb-3 text-[#2D2D2B]">
                  Machine Speed, Needle Depth &amp; Layering Strategy
                </h3>
                <div className="prose prose-lg text-[#2D2D2B]/85 max-w-none">
                  <p>
                    We calibrate machine speed slightly lower and control needle depth more precisely for melanin-rich skin, ensuring pigment reaches the stable mid-dermis layer without penetrating too deep (which causes the Tyndall effect) or staying too shallow (which causes rapid fading). Rather than multiple aggressive passes, we use a <strong>measured layering approach</strong> — building color density gradually across 2–3 controlled passes, checking retention between each one. This avoids overworking the skin, which on darker tones can trigger both PIH and lymphatic pigment dilution.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-cormorant font-medium mb-3 text-[#2D2D2B]">
                  Gradient Tailoring for Darker Tones
                </h3>
                <div className="prose prose-lg text-[#2D2D2B]/85 max-w-none">
                  <p>
                    The signature ombre effect — lighter at the front, denser at the tail — requires more intentional contrast engineering on darker skin. On Fitzpatrick I–III, even subtle gradient differences are visible. On IV–VI, the gradient must be more deliberately constructed to read clearly against your natural skin tone without appearing heavy-handed. We achieve this by adjusting saturation density across the brow in 3–4 zones rather than a simple front-to-back gradient.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-cormorant font-medium mb-3 text-[#2D2D2B]">
                  Post-Inflammatory Hyperpigmentation (PIH) Prevention
                </h3>
                <div className="prose prose-lg text-[#2D2D2B]/85 max-w-none">
                  <p>
                    Melanin-rich skin is significantly more prone to PIH — darkened patches that form in response to skin trauma. Our technique minimizes unnecessary trauma by using controlled single-pass layering, appropriate needle configurations, and reduced machine speed. Our aftercare protocol includes specific PIH-prevention guidance: avoiding heat exposure, direct sun, and inflammatory products during the critical first two weeks.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg text-[#2D2D2B]/85 max-w-none">
              <p>
                It's the reason we recommend choosing an artist who has documented experience with your skin type, not just general PMU experience. The difference in outcomes is measurable.
              </p>
            </div>
          </AnimatedSection>

          {/* Section: Common Mistakes Artists Make on Dark Skin */}
          <AnimatedSection className="mt-16">
            <h2 className="text-2xl md:text-3xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              Common Mistakes Artists Make on Dark Skin
            </h2>
            <div className="prose prose-lg text-[#2D2D2B]/85 max-w-none mb-8">
              <p>
                The PMU industry's training programs overwhelmingly use Fitzpatrick I–III models. This means many well-trained, well-intentioned artists make systematic errors on darker skin types simply because they were never taught these differences. Here are the most common:
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 bg-red-50/60 rounded-xl p-5">
                <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[#2D2D2B] text-sm">Using generic pigment lines</p>
                  <p className="text-sm text-[#2D2D2B]/70 mt-1">Standard pigment collections contain cool-toned bases that heal grey or ashy on melanin-rich skin. Specialized warm-base pigments are essential — not optional.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-red-50/60 rounded-xl p-5">
                <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[#2D2D2B] text-sm">Showing only fresh, day-of results</p>
                  <p className="text-sm text-[#2D2D2B]/70 mt-1">Fresh brows look perfect on every skin tone. The real test is a healed photo at 6+ weeks. If an artist can't show you healed results on dark skin, that's a significant red flag.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-red-50/60 rounded-xl p-5">
                <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[#2D2D2B] text-sm">Too many aggressive passes</p>
                  <p className="text-sm text-[#2D2D2B]/70 mt-1">Overworking melanin-rich skin causes excessive trauma, triggering post-inflammatory hyperpigmentation (dark patches around the brow) and lymphatic pigment dilution (ashy healing).</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-red-50/60 rounded-xl p-5">
                <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[#2D2D2B] text-sm">Skipping the perfecting session</p>
                  <p className="text-sm text-[#2D2D2B]/70 mt-1">First-pass retention on types IV–VI averages 50–65%, vs 65–80% on lighter tones. The second session isn't a "touch-up" — it's an essential part of the process where final color, density, and gradient are locked in.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-red-50/60 rounded-xl p-5">
                <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[#2D2D2B] text-sm">Not discussing PIH risk upfront</p>
                  <p className="text-sm text-[#2D2D2B]/70 mt-1">Post-inflammatory hyperpigmentation should be proactively discussed with every darker-skinned client — including prevention strategies and what to do if it occurs. Silence on this topic suggests lack of experience.</p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg text-[#2D2D2B]/85 max-w-none">
              <p>
                For a deeper dive into evaluating any PMU artist, including our full list of 10 green flags and 8 red flags, see our <Link to="/how-to-choose-pmu-artist">guide to choosing a PMU artist</Link>.
              </p>
            </div>
          </AnimatedSection>

          {/* Section: The Perfecting Session */}
          <AnimatedSection className="mt-16">
            <h2 className="text-2xl md:text-3xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              The Perfecting Session: Why It's Non-Negotiable on Melanin-Rich Skin
            </h2>
            <div className="prose prose-lg text-[#2D2D2B]/85 max-w-none mb-8">
              <p>
                On Fitzpatrick I–III skin, first-pass retention typically ranges from 65–80%. On types IV–VI, it averages 50–65% — meaning up to half the pigment may heal out after the initial session. This isn't a failure of technique; it's a function of melanin biology.
              </p>
              <p>
                The perfecting session (scheduled 6–8 weeks after your initial appointment) is where results transform from "promising" to "polished." Here's what happens:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#F9F7F5] rounded-xl p-6">
                <h3 className="font-semibold text-[#2D2D2B] mb-2">Color Locking</h3>
                <p className="text-sm text-[#2D2D2B]/70">We assess how your melanin interacted with the first application and make precise pigment formula adjustments — warmer, cooler, or more saturated — to ensure the final healed color is exactly right for your undertone.</p>
              </div>
              <div className="bg-[#F9F7F5] rounded-xl p-6">
                <h3 className="font-semibold text-[#2D2D2B] mb-2">Density Refinement</h3>
                <p className="text-sm text-[#2D2D2B]/70">Areas that healed lighter (typically the front/bulb of the brow) get targeted additional work to build even, full coverage without overworking the tail where retention is usually stronger.</p>
              </div>
              <div className="bg-[#F9F7F5] rounded-xl p-6">
                <h3 className="font-semibold text-[#2D2D2B] mb-2">Gradient Perfection</h3>
                <p className="text-sm text-[#2D2D2B]/70">The ombre gradient is fine-tuned based on healed results. Uneven fading (common on melanin-rich skin) is corrected to create the seamless light-to-dense transition.</p>
              </div>
              <div className="bg-[#F9F7F5] rounded-xl p-6">
                <h3 className="font-semibold text-[#2D2D2B] mb-2">Faster Healing</h3>
                <p className="text-sm text-[#2D2D2B]/70">The perfecting session is shorter (60–90 minutes vs 2–2.5 hours) and heals faster because less work is needed and your skin has already been through the process once.</p>
              </div>
            </div>

            <div className="prose prose-lg text-[#2D2D2B]/85 max-w-none">
              <p>
                Our perfecting session is included in your initial booking price — it's not an upsell. We consider it a structural part of the procedure for all skin types, and especially essential for Fitzpatrick IV–VI clients.
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
                  Across our 330+ procedures, our complication rate is 0.19% — 13× lower than the industry average of 2.5%. We attribute this to thorough pre-screening, specialized technique, and proactive aftercare support.
                </p>
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
              maxVisible={10}
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
                    <p className="font-medium text-[#2D2D2B] text-sm">Signature Ombré Brows</p>
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
