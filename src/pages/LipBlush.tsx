import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  CheckCircle,
  Award,
  Shield,
  Clock,
  Heart,
  Droplets,
  Sun,
  ArrowRight,
  Star,
  Users,
  Sparkles,
  AlertTriangle,
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import InlineFaqAccordion from '../components/InlineFaqAccordion';
import CTASection from '../components/CTASection';

const LipBlush: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const processSteps = [
    {
      step: 1,
      title: 'Color Consultation & Design',
      duration: '30-45 min',
      description: 'We assess your natural lip color, skin undertone, and desired outcome. Using color theory and your complexion analysis, we select the perfect blush shade — from subtle nudes to rosier tones. You approve the color before we begin.',
      details: ['Undertone & complexion analysis', 'Custom lip color selection', 'Shape enhancement discussion', 'Preview color approval'],
    },
    {
      step: 2,
      title: 'Lip Blush Procedure',
      duration: '2-3 hours',
      description: 'After medical-grade numbing takes full effect (20-30 minutes), we use precision PMU technique to build layers of soft color across your lips. The process creates a natural gradient — more saturated at the center, softly fading at the lip border.',
      details: ['Full numbing applied first', 'Layer-by-layer color building', 'Lip line symmetry correction', 'Watercolor gradient technique'],
    },
    {
      step: 3,
      title: 'Healing & Aftercare',
      duration: '4-6 weeks',
      description: 'Your lips will go through a healing process where the color appears vivid initially, then fades to 40-50% before settling into your true, beautiful blush shade. We provide detailed instructions and text support throughout.',
      details: ['Days 1-3: Vibrant, slightly swollen', 'Days 4-7: Peeling & flaking phase', 'Days 7-14: Color appears very light', 'Weeks 3-6: True color gradually emerges'],
    },
    {
      step: 4,
      title: 'Perfecting Touch-Up',
      duration: '6-8 week mark',
      description: 'Your complimentary touch-up session ensures optimal color saturation and even coverage. We can intensify the shade, refine the border, and address any areas where pigment may have healed lighter.',
      details: ['Overall color boost', 'Border & symmetry refinement', 'Even out any light spots', 'Lock in long-term retention'],
    },
  ];

  const faqs = [
    {
      question: 'What is lip blushing and how is it different from lip liner tattoo?',
      answer: 'Lip blushing is a semi-permanent cosmetic tattoo that adds a soft wash of color to your entire lip — like a natural, all-over tint. Unlike traditional lip liner tattoos (which create a harsh, defined border), lip blushing uses a gradient watercolor technique for a natural, "just bitten" look. Think of it as permanent lip tint rather than permanent lipstick.',
    },
    {
      question: 'How long does lip blush last?',
      answer: 'Lip blushing typically lasts 2-5 years depending on your lifestyle, sun exposure, smoking habits, and skincare routine. The color fades gradually and naturally over time. Most clients schedule a color refresh every 18-24 months to maintain their desired vibrancy.',
    },
    {
      question: 'Does lip blushing hurt?',
      answer: 'We apply medical-grade topical numbing cream that takes full effect in 20-30 minutes before the procedure begins. Most clients rate the discomfort at 3-4 out of 10 — similar to a tingling or vibrating sensation. Lips are more sensitive than brows, but the numbing makes it very manageable. We can apply additional numbing during the procedure if needed.',
    },
    {
      question: 'How much does lip blushing cost at Ink Mugi?',
      answer: 'Lip blushing at Ink Mugi is $650, which includes: complimentary color consultation, full 2-3 hour procedure with premium pigments, aftercare kit, text healing support, and your 6-week perfecting touch-up session. No hidden fees. Compare this to $800-$1,500 at DC, Arlington, and Tysons studios.',
    },
    {
      question: 'Can lip blushing correct uneven or pale lips?',
      answer: 'Yes — lip blushing is excellent for correcting asymmetry, adding color to naturally pale or discolored lips, evening out uneven lip borders, minimizing the appearance of scars, and creating a more defined lip shape. During your consultation, we\'ll discuss what level of correction is achievable for your specific case.',
    },
    {
      question: 'What is the lip blush healing process like day by day?',
      answer: 'Days 1-2: Lips appear vibrant, bright, and slightly swollen (normal). Days 3-5: Lips begin to feel dry and tight; a thin film or peeling starts — DO NOT pick. Days 5-10: Peeling continues; color appears to fade dramatically (this is normal). Days 10-14: Fresh skin appears, color looks very light. Weeks 3-6: True healed color gradually returns to about 40-50% of the initial intensity. The 6-week touch-up enhances the final result.',
    },
    {
      question: 'Who should NOT get lip blushing?',
      answer: 'Lip blushing is not recommended if you: are pregnant or nursing, have active cold sores or herpes simplex (must take antiviral medication before procedure), are on blood thinners, have had lip filler within the past 4 weeks, have a history of keloid scarring on the face, are undergoing chemotherapy, or have uncontrolled diabetes. If you are prone to cold sores, we require you to take Valtrex/acyclovir 3 days before and after the procedure.',
    },
    {
      question: 'Can I wear lipstick after getting lip blush?',
      answer: 'After the full 6-week healing period, you can absolutely still wear lipstick, gloss, or liner over your lip blush. Many clients love that their lip blush provides a beautiful base color, so they rarely feel the need for additional lip products. On "no makeup" days, your lips still look naturally flushed and defined.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Lip Blushing in Annandale VA | Natural Lip Color Tattoo | Ink Mugi</title>
        <meta
          name="description"
          content="Lip blushing in Annandale, VA starting at $650. Semi-permanent lip color tattoo for naturally flushed, defined lips. Corrects asymmetry & pale lips. Virginia-licensed PMU artist. Free consultation."
        />
        <meta
          name="keywords"
          content="lip blushing Annandale VA, lip blush Northern Virginia, lip blushing near me, lip tattoo Virginia, permanent lip color, lip blush cost, lip blushing healing, lip blush before and after, lip blush DMV, semi permanent lip color, lip tint tattoo, lip blushing Fairfax, lip blush Arlington VA"
        />
        <link rel="canonical" href="https://www.inkmugi.com/lip-blush" />

        <meta property="og:title" content="Lip Blushing | Natural Lip Color Tattoo | $650 | Ink Mugi VA" />
        <meta property="og:description" content="Semi-permanent lip blush for naturally flushed, defined lips. Corrects asymmetry & pale lips. Virginia-licensed. Free consultation." />
        <meta property="og:image" content="https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg" />
        <meta property="og:url" content="https://www.inkmugi.com/lip-blush" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lip Blushing | Natural Lip Color | Ink Mugi Annandale VA" />
        <meta name="twitter:description" content="Semi-permanent lip blush. Natural, flushed lip color. $650 all-inclusive. Virginia-licensed PMU artist." />

        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Lip Blushing — Semi-Permanent Lip Color Tattoo",
            "description": "Professional lip blushing procedure creating natural, flushed lip color in Annandale, VA. Includes consultation, procedure, aftercare, and perfecting touch-up.",
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
              "price": "650",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
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
              { "@type": "ListItem", "position": 3, "name": "Lip Blushing", "item": "https://www.inkmugi.com/lip-blush" },
            ],
          })}
        </script>

        {/* HowTo Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How Lip Blushing Is Done: Step-by-Step",
            "description": "Complete lip blushing process at Ink Mugi in Annandale, VA.",
            "totalTime": "PT42D",
            "estimatedCost": { "@type": "MonetaryAmount", "currency": "USD", "value": "650" },
            "step": processSteps.map((s) => ({
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
                <span className="text-[#2D2D2B]">Lip Blushing</span>
              </nav>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D2D2B]/10 rounded-full mb-6">
                <Heart className="w-4 h-4 text-[#2D2D2B]" />
                <span className="text-sm font-medium text-[#2D2D2B] uppercase tracking-wider">Natural Lip Enhancement</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
                Lip Blushing in Annandale, VA
              </h1>
              <p className="text-lg md:text-xl text-[#2D2D2B]/80 max-w-3xl mx-auto mb-4">
                Wake up with naturally flushed, perfectly defined lips. Semi-permanent lip color using the watercolor gradient technique — subtle, beautiful, and effortless.
              </p>
              <p className="text-sm text-[#2D2D2B]/60 mb-8">
                Serving Northern Virginia • Arlington • Alexandria • Fairfax • McLean • Washington DC
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8 max-w-lg mx-auto p-4 bg-white/60 backdrop-blur-sm rounded-2xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2D2D2B] mb-1">$650</div>
                  <div className="text-xs text-[#2D2D2B]/60 uppercase">All-Inclusive</div>
                </div>
                <div className="text-center border-x border-[#2D2D2B]/10">
                  <div className="text-2xl font-bold text-[#2D2D2B] mb-1">2-5</div>
                  <div className="text-xs text-[#2D2D2B]/60 uppercase">Year Longevity</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2D2D2B] mb-1">Natural</div>
                  <div className="text-xs text-[#2D2D2B]/60 uppercase">Gradient Finish</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.vagaro.com/inkmugi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[#2D2D2B] hover:bg-[#1a1a19] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  to="/gallery"
                  className="border-2 border-[#2D2D2B]/30 hover:bg-[#2D2D2B]/5 text-[#2D2D2B] font-semibold px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2"
                >
                  View Portfolio
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* What Is Lip Blushing */}
        <section className="py-20 bg-white">
          <div className="container-custom max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-[#2D2D2B] mb-6 text-center">
                What Is Lip Blushing?
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>Lip blushing</strong> is a semi-permanent cosmetic tattoo that deposits soft, natural-looking color across your entire lip area using a precision PMU machine. Unlike traditional lip liner tattoos that create harsh borders, lip blushing uses a <strong>watercolor gradient technique</strong> — building delicate layers of pigment for a naturally flushed, "your lips but better" effect.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The result is lips that look naturally rosy, defined, and youthful — like you're wearing a perfectly applied lip tint 24/7. It's the most requested lip procedure for women who want to enhance their natural lip color, correct asymmetry, or add definition without the daily hassle of lip products.
                </p>

                <div className="bg-[#E6DAD2]/15 border-l-4 border-[#2D2D2B] p-6 rounded-r-lg mb-8">
                  <h3 className="text-xl font-semibold text-[#2D2D2B] mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5" /> Perfect For
                  </h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Women with pale or uneven lip color who want a natural flush</li>
                    <li>• Busy professionals tired of reapplying lipstick throughout the day</li>
                    <li>• Anyone wanting to correct lip asymmetry or undefined borders</li>
                    <li>• Those who want to look "put together" with zero makeup effort</li>
                    <li>• Post-lip filler clients wanting to enhance their investment with color</li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-10">
                <div className="bg-[#F9F7F5] p-6 rounded-2xl border border-gray-100">
                  <Heart className="w-10 h-10 text-[#2D2D2B] mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-[#2D2D2B]">Natural "Just Bitten" Look</h3>
                  <p className="text-gray-600 text-sm">Soft watercolor gradient that looks like your natural lip color, just more vibrant and defined.</p>
                </div>
                <div className="bg-[#F9F7F5] p-6 rounded-2xl border border-gray-100">
                  <Clock className="w-10 h-10 text-[#2D2D2B] mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-[#2D2D2B]">2-5 Year Longevity</h3>
                  <p className="text-gray-600 text-sm">Long-lasting results that fade gradually. Refresh every 18-24 months for optimal vibrancy.</p>
                </div>
                <div className="bg-[#F9F7F5] p-6 rounded-2xl border border-gray-100">
                  <Sun className="w-10 h-10 text-[#2D2D2B] mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-[#2D2D2B]">Sweat & Kiss-Proof</h3>
                  <p className="text-gray-600 text-sm">Won't smudge, transfer, or rub off. Perfect for the DMV's humid summers and your active lifestyle.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Who Is It For */}
        <section className="py-20 bg-[#F9F7F5]">
          <div className="container-custom max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-[#2D2D2B] text-center mb-10">
                Who Is Lip Blushing Perfect For?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Heart, text: 'Naturally pale or colorless lips that need a subtle rosy/pink boost' },
                  { icon: Users, text: 'Asymmetric lip shape or uneven lip border needing correction' },
                  { icon: Sparkles, text: 'Lips that have lost color or definition with age' },
                  { icon: Sun, text: 'Active lifestyle — you want sweat-proof lip color that never smudges' },
                  { icon: Clock, text: 'Tired of constantly reapplying lipstick or lip liner throughout the day' },
                  { icon: Droplets, text: 'Lip scarring (from surgery, injury, or cleft lip repair) needing color camouflage' },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100">
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
        <section className="py-20 bg-white">
          <div className="container-custom max-w-5xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-[#2D2D2B] text-center mb-4">
                The Lip Blushing Process
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                A gentle, transparent process with your comfort and satisfaction as the priority.
              </p>
              <div className="space-y-8">
                {processSteps.map((step, i) => (
                  <div key={i} className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#2D2D2B] to-[#4A4A47] rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    <div className="flex-grow bg-[#F9F7F5] rounded-2xl p-6 border border-gray-100">
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

        {/* Cold Sore Warning */}
        <section className="py-12 bg-amber-50">
          <div className="container-custom max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-amber-200 shadow-sm">
                <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-[#2D2D2B] mb-2">
                    Important: Cold Sore / Herpes Simplex Protocol
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    If you have <strong>ever</strong> had a cold sore (even once, years ago), you <strong>must</strong> take an antiviral medication (Valtrex/acyclovir) starting 3 days before your procedure and continuing 3 days after. The lip procedure can trigger an outbreak, which could affect healing and pigment retention. Contact your physician for a prescription before your appointment. We take this seriously — it's for your safety and results.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-[#F9F7F5]">
          <div className="container-custom max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#E6DAD2]">
                <div className="bg-gradient-to-br from-[#2D2D2B] to-[#4A4A47] text-white p-8 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E6DAD2] text-[#2D2D2B] rounded-full mb-4">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm font-bold uppercase tracking-wide">Lip Enhancement</span>
                  </div>
                  <h3 className="text-4xl font-cormorant font-bold mb-2">$650</h3>
                  <p className="text-lg text-white/80">Complete Lip Blushing Experience</p>
                </div>

                <div className="p-8">
                  <h4 className="text-xl font-semibold text-[#2D2D2B] mb-4">Everything Included:</h4>
                  <div className="space-y-3 mb-6">
                    {[
                      { name: 'Color Consultation & Design', detail: 'Undertone analysis, custom color selection' },
                      { name: 'Full 2-3 Hour Procedure', detail: 'Watercolor gradient technique, premium pigments' },
                      { name: 'Medical-Grade Numbing', detail: 'Applied 20-30 min before for full comfort' },
                      { name: 'Aftercare Kit & Instructions', detail: 'Healing balm and detailed care guide' },
                      { name: '24/7 Text Support', detail: 'Direct artist access during entire healing period' },
                      { name: '6-Week Perfecting Touch-Up', detail: 'Color boost, evenness, border refinement' },
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

                  <div className="bg-[#E6DAD2]/20 border border-[#E6DAD2] rounded-xl p-4 mb-6 text-sm">
                    <h4 className="font-semibold text-[#2D2D2B] mb-2">DMV Price Comparison:</h4>
                    <p>• <strong>Ink Mugi (Annandale):</strong> $650 all-inclusive</p>
                    <p>• <strong>Arlington / DC studios:</strong> $800-$1,200</p>
                    <p>• <strong>Tysons / McLean studios:</strong> $1,000-$1,500</p>
                  </div>

                  <div className="text-center">
                    <a
                      href="https://www.vagaro.com/inkmugi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#2D2D2B] hover:bg-[#1a1a19] text-white font-semibold px-8 py-4 rounded-full transition-all"
                    >
                      Book Lip Consultation <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-white">
          <div className="container-custom max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-[#2D2D2B] text-center mb-4">
                Lip Blushing FAQ
              </h2>
              <p className="text-center text-gray-600 mb-10">
                Everything you need to know about the lip blushing procedure.
              </p>
              <InlineFaqAccordion title="" subtitle="" maxVisible={8} faqs={faqs} />
            </AnimatedSection>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-[#F9F7F5]">
          <div className="container-custom max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-2xl font-cormorant font-medium text-[#2D2D2B] text-center mb-8">
                Explore More Services
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/signature-ombre-brows" className="block p-5 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-all">
                  <h3 className="font-medium text-[#2D2D2B] mb-1">Ombre Powder Brows</h3>
                  <p className="text-sm text-gray-500">Soft makeup-like gradient brows. From $600.</p>
                </Link>
                <Link to="/nano-brows" className="block p-5 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-all">
                  <h3 className="font-medium text-[#2D2D2B] mb-1">Nano Brows</h3>
                  <p className="text-sm text-gray-500">Ultra-fine hair strokes. From $650.</p>
                </Link>
                <Link to="/microshading-artistry" className="block p-5 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-all">
                  <h3 className="font-medium text-[#2D2D2B] mb-1">Microshading Artistry</h3>
                  <p className="text-sm text-gray-500">Soft powder dot-work technique. From $700.</p>
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
                <p className="font-semibold text-sm">Premium Pigments</p>
                <p className="text-xs text-white/60">Vegan & Hypoallergenic</p>
              </div>
              <div>
                <Star size={24} className="mx-auto mb-2 text-[#E6DAD2]" />
                <p className="font-semibold text-sm">Touch-Up Included</p>
                <p className="text-xs text-white/60">Perfecting Session</p>
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
              <Link to="/permanent-makeup-annandale-va" className="px-4 py-2 bg-white rounded-full text-sm text-[#2D2D2B] hover:bg-[#E6DAD2] transition-colors border border-gray-200">Annandale</Link>
              <Link to="/ombre-brows-arlington-va" className="px-4 py-2 bg-white rounded-full text-sm text-[#2D2D2B] hover:bg-[#E6DAD2] transition-colors border border-gray-200">Arlington</Link>
              <Link to="/ombre-brows-alexandria-va" className="px-4 py-2 bg-white rounded-full text-sm text-[#2D2D2B] hover:bg-[#E6DAD2] transition-colors border border-gray-200">Alexandria</Link>
              <Link to="/ombre-brows-fairfax-va" className="px-4 py-2 bg-white rounded-full text-sm text-[#2D2D2B] hover:bg-[#E6DAD2] transition-colors border border-gray-200">Fairfax</Link>
              <Link to="/permanent-makeup-dc" className="px-4 py-2 bg-white rounded-full text-sm text-[#2D2D2B] hover:bg-[#E6DAD2] transition-colors border border-gray-200">Washington DC</Link>
              <Link to="/ombre-brows-mclean-va" className="px-4 py-2 bg-white rounded-full text-sm text-[#2D2D2B] hover:bg-[#E6DAD2] transition-colors border border-gray-200">McLean</Link>
              <Link to="/permanent-makeup-tysons-va" className="px-4 py-2 bg-white rounded-full text-sm text-[#2D2D2B] hover:bg-[#E6DAD2] transition-colors border border-gray-200">Tysons</Link>
              <Link to="/permanent-makeup-falls-church-va" className="px-4 py-2 bg-white rounded-full text-sm text-[#2D2D2B] hover:bg-[#E6DAD2] transition-colors border border-gray-200">Falls Church</Link>
              <Link to="/permanent-makeup-springfield-va" className="px-4 py-2 bg-white rounded-full text-sm text-[#2D2D2B] hover:bg-[#E6DAD2] transition-colors border border-gray-200">Springfield</Link>
              <Link to="/ombre-brows-vienna-va" className="px-4 py-2 bg-white rounded-full text-sm text-[#2D2D2B] hover:bg-[#E6DAD2] transition-colors border border-gray-200">Vienna</Link>
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
                <strong className="text-[#2D2D2B]/50">Lip Blushing at Ink Mugi — Annandale, VA</strong> — Professional lip blushing, lip tattoo, and semi-permanent lip color in Annandale, Virginia. Natural watercolor gradient technique for beautifully flushed, defined lips. Virginia licensed (#1231002471) and fully insured PMU artist.
              </p>
              <p>
                Related searches: lip blushing near me, lip blush Northern Virginia, lip tattoo Annandale VA, permanent lip color, lip blush DMV, lip blushing cost, lip blush healing process, lip blushing before and after, lip tint tattoo, lip blushing for pale lips, lip blush Arlington VA, lip blush Alexandria VA, lip blushing Fairfax, lip blush Tysons, cosmetic lip tattoo, lip color enhancement, lip pigmentation treatment.
              </p>
              <p>
                Serving: Annandale, Arlington, Alexandria, Fairfax, McLean, Tysons Corner, Falls Church, Springfield, Vienna, Great Falls, Washington DC, and the greater Northern Virginia / DMV metro area.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LipBlush;
