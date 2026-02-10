import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Star, CheckCircle, Award, Shield, ArrowRight, Phone, Sparkles, Heart, Eye, Palette } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import InlineFaqAccordion from '../components/InlineFaqAccordion';

const MicroshadingArtistry: React.FC = () => {
  const faqs = [
    {
      question: "How long does microshading last?",
      answer: "Microshading typically lasts 1-2 years with proper care. Results depend on your skin type, lifestyle, and aftercare routine. Clients with oily skin may need a refresh sooner, while those with drier skin can enjoy results closer to the 2-year mark. Annual touch-ups ($250) keep your brows looking fresh and defined."
    },
    {
      question: "Is microshading painful?",
      answer: "Minimal discomfort! We apply a medical-grade numbing cream for 20-30 minutes before beginning the procedure. Most clients rate the discomfort at 2-3 out of 10 — many say it feels like light scratching. The hand tool used in microshading is also gentler than machine-based methods, so most clients find it very tolerable."
    },
    {
      question: "Microshading vs microblading — which is better?",
      answer: "It depends on your skin type and desired look. Microshading works for ALL skin types, including oily and combination skin, because the stippling technique holds pigment better than blade cuts. Microblading creates hair-like strokes but can blur or fade quickly on oily skin. At your free consultation, Mugi will analyze your skin and recommend the best technique for your goals."
    },
    {
      question: "How long is the microshading healing process?",
      answer: "The full healing process takes 4-6 weeks. Days 1-3: brows appear darker than the final result. Days 4-7: light flaking begins (do NOT pick!). Weeks 2-4: color lightens significantly — this is normal. Weeks 5-6: your true, beautiful color is revealed. A touch-up appointment is included at 6-8 weeks to perfect any areas."
    },
    {
      question: "Can I get microshading if I have existing brows?",
      answer: "Yes, absolutely! Microshading is designed to enhance your natural brows. It fills in sparse areas, adds definition, and creates a soft, polished look — all while working WITH your natural brow hairs. Whether you have thin, patchy, or uneven brows, microshading can give you the fullness and shape you've been wanting."
    },
    {
      question: "How much does microshading cost at Ink Mugi?",
      answer: "$700 all-inclusive. This covers your free consultation, custom brow design, numbing, the full procedure (2-3 hours), premium vegan pigments, a medical-grade aftercare kit, and your 6-8 week touch-up appointment. Other DMV studios charge $900-1,200 for similar services. No hidden fees, no surprise up-charges — just exceptional artistry at a fair price."
    }
  ];

  const howToSteps = [
    {
      name: "Free Consultation",
      text: "Discuss your brow goals, analyze your skin type and undertone, review reference photos, and determine if microshading is the right technique for you. We'll also explain the full process and answer every question.",
      image: "https://www.inkmugi.com/consultation.jpg"
    },
    {
      name: "Custom Brow Mapping",
      text: "Using precise measurements and your unique facial proportions, Mugi designs your ideal brow shape. You'll approve the shape before any pigment is applied — ensuring you love the design before we begin.",
      image: "https://www.inkmugi.com/brow-mapping.jpg"
    },
    {
      name: "Numbing & Comfort",
      text: "Medical-grade numbing cream is applied and left to take effect for 20-30 minutes. Your comfort is our priority — most clients rate the experience a 2-3 out of 10 on the discomfort scale.",
      image: "https://www.inkmugi.com/numbing.jpg"
    },
    {
      name: "Microshading Application",
      text: "Using a specialized hand tool with fine needles, Mugi creates thousands of tiny, pixelated dots of pigment in a stippling pattern. This builds a soft, powdered effect that mimics natural brow fullness. The process takes 90-120 minutes.",
      image: "https://www.inkmugi.com/microshading-application.jpg"
    },
    {
      name: "Healing & Touch-Up",
      text: "Your brows will go through a 4-6 week healing cycle. We provide a premium aftercare kit and 24/7 text support throughout your healing. A complimentary touch-up appointment at 6-8 weeks ensures your results are absolutely perfect.",
      image: "https://www.inkmugi.com/healing.jpg"
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Microshading Eyebrows",
    "description": "Microshading eyebrows by Ink Mugi — a hand-tool PMU technique creating pixelated, powder-finish brows for the most natural results. $700 all-inclusive with consultation, procedure, premium pigments, aftercare kit, and touch-up.",
    "provider": {
      "@type": "HealthAndBeautyBusiness",
      "@id": "https://www.inkmugi.com/#business",
      "name": "Ink Mugi",
      "url": "https://www.inkmugi.com/",
      "logo": "https://www.inkmugi.com/logo.png",
      "image": "https://www.inkmugi.com/og-image.jpg",
      "telephone": "+1-571-283-8228",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "7857 Heritage Dr #330",
        "addressLocality": "Annandale",
        "addressRegion": "VA",
        "postalCode": "22003",
        "addressCountry": "US"
      },
      "priceRange": "$$$",
      "areaServed": [
        { "@type": "City", "name": "Annandale" },
        { "@type": "City", "name": "Arlington" },
        { "@type": "City", "name": "Fairfax" },
        { "@type": "City", "name": "McLean" },
        { "@type": "City", "name": "Alexandria" },
        { "@type": "City", "name": "Vienna" },
        { "@type": "AdministrativeArea", "name": "Washington, DC" }
      ]
    },
    "serviceType": "Microshading Eyebrows",
    "category": "Permanent Makeup",
    "offers": {
      "@type": "Offer",
      "price": "700",
      "priceCurrency": "USD",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "url": "https://www.inkmugi.com/microshading-artistry"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 38.8303,
        "longitude": -77.1969
      },
      "geoRadius": "50000"
    }
  };

  const faqSchema = {
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
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.inkmugi.com/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.inkmugi.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Microshading Artistry", "item": "https://www.inkmugi.com/microshading-artistry" }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "The Microshading Process at Ink Mugi",
    "description": "Step-by-step guide to the microshading eyebrow procedure at Ink Mugi in Annandale, VA.",
    "totalTime": "PT3H",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "700"
    },
    "step": howToSteps.map((step, i) => ({
      "@type": "HowToStep",
      "position": i + 1,
      "name": step.name,
      "text": step.text,
      "image": step.image
    }))
  };

  return (
    <>
      <Helmet>
        <title>Microshading Eyebrows in Northern Virginia | Ink Mugi — $700 All-Inclusive</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Microshading eyebrows by Ink Mugi in Annandale, VA — pixelated powder finish for the most natural results. 523+ procedures, VA-licensed. $700 includes consultation, procedure & touch-up. Serving all DMV."
        />
        <meta
          name="keywords"
          content="microshading near me, microshading eyebrows, microshading vs microblading, microshading brows, permanent makeup Annandale VA, PMU near me, microshading Northern Virginia, microshading DMV"
        />
        <link rel="canonical" href="https://www.inkmugi.com/microshading-artistry" />
        <meta property="og:title" content="Microshading Eyebrows in Northern Virginia | Ink Mugi — $700 All-Inclusive" />
        <meta property="og:description" content="Microshading eyebrows — pixelated powder finish for the most natural results. 523+ procedures, VA-licensed. $700 all-inclusive." />
        <meta property="og:url" content="https://www.inkmugi.com/microshading-artistry" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Microshading Eyebrows | Ink Mugi — $700 All-Inclusive" />
        <meta name="twitter:description" content="Pixelated powder finish for the most natural brows. 523+ procedures, VA-licensed. Serving all DMV." />
        <meta name="twitter:image" content="https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
      </Helmet>

      {/* ───────────── HERO SECTION ───────────── */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#F5EDE4] to-[#F9F7F5] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-amber-700"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-amber-700"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full bg-amber-700"></div>
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-700 text-white rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Hand-Tool Precision PMU
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium mb-6 text-[#2D2D2B] leading-tight">
              Microshading<br />
              <span className="text-amber-700">Artistry</span>
            </h1>
            <p className="text-xl md:text-2xl font-cormorant text-amber-700/90 mb-4">
              The Most Natural Permanent Brow Technique
            </p>
            <p className="text-lg text-[#2D2D2B]/80 max-w-3xl mx-auto mb-8 leading-relaxed">
              Microshading uses a specialized hand tool to create thousands of tiny, pixelated dots that
              mimic the look of natural brow hairs. The result is a soft, powdered finish that's virtually
              undetectable — even up close. Perfect for clients who want beautifully natural, subtle
              results that enhance without overpowering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-700 text-white rounded-full font-medium hover:bg-amber-800 transition-all shadow-lg hover:shadow-xl"
              >
                Book Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-amber-700 text-amber-700 rounded-full font-medium hover:bg-amber-700 hover:text-white transition-all"
              >
                View Gallery
              </Link>
            </div>
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-[#2D2D2B]/60">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" /> Annandale, VA
              </span>
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-amber-700 text-amber-700" /> 523+ Procedures
              </span>
              <span className="flex items-center gap-1">
                <Shield className="w-4 h-4" /> VA Licensed
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ───────────── WHAT IS MICROSHADING? ───────────── */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              What Is <span className="text-amber-700">Microshading</span>?
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
              A hand-tool PMU technique that creates the most natural-looking permanent brows available today.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="space-y-6">
                <p className="text-[#2D2D2B]/80 leading-relaxed">
                  Microshading is a semi-permanent brow technique that uses a <strong>manual hand tool fitted
                  with fine needles</strong> to deposit pigment into the skin in a <strong>stippling pattern</strong>.
                  Unlike machine-based ombre brows or blade-based microblading, microshading creates
                  thousands of tiny, individual dots that blend together to form a soft, pixelated,
                  powder-like finish.
                </p>
                <p className="text-[#2D2D2B]/80 leading-relaxed">
                  The hand tool gives the artist <strong>unparalleled precision and control</strong> over
                  pigment depth and density. This means more natural-looking results, especially for
                  clients who want a subtle enhancement rather than a bold, defined brow. The pixelated
                  dot pattern also <strong>holds pigment better in oily skin types</strong> — making
                  microshading the ideal choice for clients whose microblading has faded or blurred.
                </p>
                <p className="text-[#2D2D2B]/80 leading-relaxed">
                  At Ink Mugi, Mugi has performed <strong>523+ PMU procedures</strong> and offers both
                  microshading ($700) and machine ombre powder brows ($600). During your free consultation,
                  she'll analyze your skin type, lifestyle, and brow goals to recommend the best technique for you.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-[#F9F7F5] rounded-2xl p-8 space-y-6">
                <h3 className="text-xl font-semibold text-[#2D2D2B] mb-4">Quick Technique Comparison</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-amber-700/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Palette className="w-5 h-5 text-amber-700" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#2D2D2B]">Microshading</p>
                      <p className="text-sm text-[#2D2D2B]/60">Hand tool → pixelated dots → most natural finish</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#E6DAD2]/50 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Sparkles className="w-5 h-5 text-[#9A7B69]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#2D2D2B]">Ombre Powder Brows</p>
                      <p className="text-sm text-[#2D2D2B]/60">Machine → gradient shading → soft-to-defined finish</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Eye className="w-5 h-5 text-gray-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#2D2D2B]">Microblading</p>
                      <p className="text-sm text-[#2D2D2B]/60">Manual blade → hair strokes → natural but limited skin types</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-[#E6DAD2]/60">
                  <p className="text-sm text-[#2D2D2B]/60 italic">
                    Not sure which technique is right for you? Book a free consultation and Mugi
                    will recommend the best approach for your skin type and goals.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ───────────── COMPARISON SECTION ───────────── */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Microshading vs Microblading vs <span className="text-amber-700">Ombre Brows</span>
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
              Understanding the differences helps you choose the best technique for your skin and goals.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="max-w-5xl mx-auto overflow-x-auto">
              <div className="min-w-[640px]">
                <div className="grid grid-cols-4 gap-0 rounded-2xl overflow-hidden shadow-lg">
                  {/* Header Row */}
                  <div className="bg-[#2D2D2B] text-white p-5 font-semibold">Feature</div>
                  <div className="bg-amber-700 text-white p-5 font-semibold text-center">
                    <Sparkles className="w-5 h-5 mx-auto mb-1" />
                    Microshading
                  </div>
                  <div className="bg-[#9A7B69] text-white p-5 font-semibold text-center">
                    Microblading
                  </div>
                  <div className="bg-[#2D2D2B] text-white p-5 font-semibold text-center">
                    Ombre Powder
                  </div>

                  {/* Tool */}
                  <div className="bg-white p-4 border-b border-gray-100 font-medium text-[#2D2D2B]">Tool Used</div>
                  <div className="bg-amber-50 p-4 border-b border-amber-100 text-center text-[#2D2D2B]">Hand tool (needles)</div>
                  <div className="bg-white p-4 border-b border-gray-100 text-center text-[#2D2D2B]">Manual blade</div>
                  <div className="bg-white p-4 border-b border-gray-100 text-center text-[#2D2D2B]">PMU machine</div>

                  {/* Technique */}
                  <div className="bg-white p-4 border-b border-gray-100 font-medium text-[#2D2D2B]">Technique</div>
                  <div className="bg-amber-50 p-4 border-b border-amber-100 text-center text-[#2D2D2B]">Pixelated dots (stippling)</div>
                  <div className="bg-white p-4 border-b border-gray-100 text-center text-[#2D2D2B]">Hair-like strokes</div>
                  <div className="bg-white p-4 border-b border-gray-100 text-center text-[#2D2D2B]">Gradient shading</div>

                  {/* Longevity */}
                  <div className="bg-white p-4 border-b border-gray-100 font-medium text-[#2D2D2B]">Longevity</div>
                  <div className="bg-amber-50 p-4 border-b border-amber-100 text-center text-[#2D2D2B] font-medium">1–2 years</div>
                  <div className="bg-white p-4 border-b border-gray-100 text-center text-[#2D2D2B]">1–1.5 years</div>
                  <div className="bg-white p-4 border-b border-gray-100 text-center text-[#2D2D2B]">1–3 years</div>

                  {/* Skin Types */}
                  <div className="bg-white p-4 border-b border-gray-100 font-medium text-[#2D2D2B]">Best Skin Types</div>
                  <div className="bg-amber-50 p-4 border-b border-amber-100 text-center text-[#2D2D2B]">
                    <span className="inline-flex items-center gap-1 text-amber-700 font-medium">
                      <CheckCircle className="w-4 h-4" /> All skin types
                    </span>
                  </div>
                  <div className="bg-white p-4 border-b border-gray-100 text-center text-[#2D2D2B]">Dry skin only</div>
                  <div className="bg-white p-4 border-b border-gray-100 text-center text-[#2D2D2B]">All skin types</div>

                  {/* Look */}
                  <div className="bg-white p-4 border-b border-gray-100 font-medium text-[#2D2D2B]">Finished Look</div>
                  <div className="bg-amber-50 p-4 border-b border-amber-100 text-center text-[#2D2D2B] font-medium">Most natural</div>
                  <div className="bg-white p-4 border-b border-gray-100 text-center text-[#2D2D2B]">Natural</div>
                  <div className="bg-white p-4 border-b border-gray-100 text-center text-[#2D2D2B]">Soft to defined</div>

                  {/* Price */}
                  <div className="bg-white p-4 font-medium text-[#2D2D2B]">Price at Ink Mugi</div>
                  <div className="bg-amber-50 p-4 text-center text-amber-700 font-bold text-lg">$700</div>
                  <div className="bg-white p-4 text-center text-[#2D2D2B]/60 italic text-sm">Not offered*</div>
                  <div className="bg-white p-4 text-center text-[#2D2D2B] font-bold text-lg">$600</div>
                </div>
              </div>
            </div>
            <p className="text-center text-[#2D2D2B]/50 text-sm mt-4 max-w-3xl mx-auto">
              *Ink Mugi specializes in ombre powder brows ($600) and microshading ($700). We do not offer microblading
              because microshading and ombre powder brows deliver superior, longer-lasting results for all skin types in
              the DMV's humid climate.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ───────────── WHO IS MICROSHADING BEST FOR? ───────────── */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Who Is Microshading <span className="text-amber-700">Best For</span>?
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
              Microshading is an excellent choice for a wide range of clients — here are the ideal candidates.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="bg-[#F9F7F5] rounded-2xl p-8 text-center h-full hover:shadow-lg transition-shadow border border-transparent hover:border-amber-700/20">
                <div className="w-16 h-16 bg-amber-700/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-amber-700" />
                </div>
                <h3 className="text-lg font-semibold text-[#2D2D2B] mb-3">Oily or Combination Skin</h3>
                <p className="text-sm text-[#2D2D2B]/70 leading-relaxed">
                  The stippling technique holds pigment better in oily skin than microblading's blade cuts.
                  Your brows stay sharp and defined even with excess oil production.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-[#F9F7F5] rounded-2xl p-8 text-center h-full hover:shadow-lg transition-shadow border border-transparent hover:border-amber-700/20">
                <div className="w-16 h-16 bg-amber-700/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-amber-700" />
                </div>
                <h3 className="text-lg font-semibold text-[#2D2D2B] mb-3">Want the Most Natural Look</h3>
                <p className="text-sm text-[#2D2D2B]/70 leading-relaxed">
                  If "no one can tell they're done" is your goal, microshading is your technique.
                  The pixelated dots blend seamlessly with natural brow hairs for an undetectable finish.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-[#F9F7F5] rounded-2xl p-8 text-center h-full hover:shadow-lg transition-shadow border border-transparent hover:border-amber-700/20">
                <div className="w-16 h-16 bg-amber-700/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-amber-700" />
                </div>
                <h3 className="text-lg font-semibold text-[#2D2D2B] mb-3">Previous PMU Has Faded</h3>
                <p className="text-sm text-[#2D2D2B]/70 leading-relaxed">
                  If your microblading has blurred, faded unevenly, or turned grayish, microshading
                  can restore and correct your brows with a fresh, even, long-lasting result.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-[#F9F7F5] rounded-2xl p-8 text-center h-full hover:shadow-lg transition-shadow border border-transparent hover:border-amber-700/20">
                <div className="w-16 h-16 bg-amber-700/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-amber-700" />
                </div>
                <h3 className="text-lg font-semibold text-[#2D2D2B] mb-3">First-Time PMU Clients</h3>
                <p className="text-sm text-[#2D2D2B]/70 leading-relaxed">
                  New to permanent makeup? Microshading gives beautifully subtle results that enhance
                  your natural brows without the "drawn on" look. The perfect entry point into PMU.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ───────────── THE MICROSHADING PROCESS ───────────── */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              The Microshading <span className="text-amber-700">Process</span>
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
              From consultation to your gorgeous final results — here's exactly what to expect at every step.
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-8">
            {howToSteps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-amber-700 text-white rounded-2xl flex items-center justify-center text-xl font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 flex-1 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold text-[#2D2D2B] mb-2">{step.name}</h3>
                    <p className="text-[#2D2D2B]/70 leading-relaxed">{step.text}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── PRICING SECTION ───────────── */}
      <section className="py-20 bg-gradient-to-b from-[#F5EDE4] to-[#F0E4D8]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Microshading <span className="text-amber-700">Pricing</span>
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
              Transparent, all-inclusive pricing. No hidden fees, no surprise up-charges.
            </p>
          </AnimatedSection>

          <div className="max-w-lg mx-auto">
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-amber-700/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-amber-700"></div>
                <div className="text-center mb-8">
                  <p className="text-sm text-amber-700 font-semibold tracking-wider mb-2">HAND-TOOL PRECISION</p>
                  <h3 className="text-2xl font-cormorant font-medium text-[#2D2D2B]">Microshading Artistry</h3>
                  <p className="text-5xl font-bold text-amber-700 mt-3">$700</p>
                  <p className="text-sm text-[#2D2D2B]/50 mt-1">All-inclusive — everything below is included</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {[
                    'Free consultation & skin analysis',
                    'Custom brow mapping & design',
                    'Medical-grade numbing',
                    'Full procedure (2-3 hours)',
                    'Premium vegan pigments',
                    'Medical-grade aftercare kit ($75 value)',
                    '24/7 healing text support',
                    '6-8 week touch-up appointment',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-700 flex-shrink-0" />
                      <span className="text-[#2D2D2B]/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/booking"
                  className="block w-full text-center px-8 py-4 bg-amber-700 text-white rounded-full font-medium hover:bg-amber-800 transition-all shadow-lg"
                >
                  Book Your Microshading Consultation
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </Link>
                <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                  <p className="text-sm text-[#2D2D2B]/50">
                    Compare: Other DMV studios charge <span className="line-through">$900–$1,200</span> for microshading
                  </p>
                  <p className="text-sm text-[#2D2D2B]/50 mt-1">
                    Annual touch-ups: $250
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="mt-6 bg-[#2D2D2B] text-white rounded-2xl p-6 text-center">
                <p className="text-sm font-medium mb-1">Also available: Signature Ombre Powder Brows</p>
                <p className="text-2xl font-bold">$600</p>
                <p className="text-xs text-white/60 mt-1">Machine-based gradient shading • Same premium quality</p>
                <Link
                  to="/signature-ombre-brows"
                  className="inline-flex items-center gap-1 text-amber-300 text-sm mt-2 hover:text-amber-200 transition-colors"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ───────────── WHY CHOOSE INK MUGI ───────────── */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Why Choose Ink Mugi for <span className="text-amber-700">Microshading</span>?
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
              Experience, safety, and accessibility — the three pillars that set us apart.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="bg-[#F9F7F5] rounded-2xl p-8 h-full hover:shadow-lg transition-shadow border border-transparent hover:border-amber-700/20">
                <div className="w-14 h-14 bg-amber-700/10 rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-amber-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2D2D2B]">523+ Documented Procedures</h3>
                <p className="text-[#2D2D2B]/70 leading-relaxed">
                  Mugi has completed over 523 PMU procedures with a documented 0.19% complication rate —
                  13x better than the 2.5% industry average. Every procedure is tracked, every result
                  is documented. You're in the hands of one of Northern Virginia's most experienced
                  PMU artists.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-[#F9F7F5] rounded-2xl p-8 h-full hover:shadow-lg transition-shadow border border-transparent hover:border-amber-700/20">
                <div className="w-14 h-14 bg-amber-700/10 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-amber-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2D2D2B]">VA Licensed & Premium Materials</h3>
                <p className="text-[#2D2D2B]/70 leading-relaxed">
                  Fully licensed by the Virginia Department of Health Professions. We use only
                  premium vegan pigments, hospital-grade sterilization protocols, and single-use
                  disposable tools. Your safety and health are non-negotiable — we exceed every
                  industry standard.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-[#F9F7F5] rounded-2xl p-8 h-full hover:shadow-lg transition-shadow border border-transparent hover:border-amber-700/20">
                <div className="w-14 h-14 bg-amber-700/10 rounded-xl flex items-center justify-center mb-6">
                  <MapPin className="w-7 h-7 text-amber-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2D2D2B]">Serving All of DMV</h3>
                <p className="text-[#2D2D2B]/70 leading-relaxed">
                  Our Annandale studio (7857 Heritage Dr #330) is centrally located with easy access
                  from Arlington, Fairfax, McLean, Vienna, Alexandria, and Washington, DC. Free parking,
                  calm atmosphere, and a private, professional environment for your transformation.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ───────────── FAQ SECTION ───────────── */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Microshading <span className="text-amber-700">FAQ</span>
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
              Everything you need to know about microshading — answered by our PMU expert.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <InlineFaqAccordion
                faqs={faqs}
                title="Common Questions About Microshading"
                subtitle="Tap a question to reveal the answer"
                maxVisible={6}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ───────────── CROSS-LINKS SECTION ───────────── */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-cormorant font-medium text-[#2D2D2B] mb-3">
              Explore More from <span className="text-amber-700">Ink Mugi</span>
            </h2>
            <p className="text-[#2D2D2B]/60">Discover our full range of services, results, and resources</p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Link to="/signature-ombre-brows" className="bg-[#F9F7F5] rounded-xl p-4 text-center hover:shadow-lg transition-shadow group border border-transparent hover:border-amber-700/20">
              <Sparkles className="w-6 h-6 text-amber-700 mx-auto mb-2" />
              <p className="font-medium text-[#2D2D2B] group-hover:text-amber-700 transition-colors">Signature Ombre Brows</p>
              <p className="text-sm text-[#2D2D2B]/50">$600 — machine technique</p>
            </Link>
            <Link to="/pmu-correction-restoration" className="bg-[#F9F7F5] rounded-xl p-4 text-center hover:shadow-lg transition-shadow group border border-transparent hover:border-amber-700/20">
              <Palette className="w-6 h-6 text-amber-700 mx-auto mb-2" />
              <p className="font-medium text-[#2D2D2B] group-hover:text-amber-700 transition-colors">PMU Correction</p>
              <p className="text-sm text-[#2D2D2B]/50">Fix old work</p>
            </Link>
            <Link to="/gallery" className="bg-[#F9F7F5] rounded-xl p-4 text-center hover:shadow-lg transition-shadow group border border-transparent hover:border-amber-700/20">
              <Eye className="w-6 h-6 text-amber-700 mx-auto mb-2" />
              <p className="font-medium text-[#2D2D2B] group-hover:text-amber-700 transition-colors">Gallery</p>
              <p className="text-sm text-[#2D2D2B]/50">Before & after results</p>
            </Link>
            <Link to="/aftercare-guide" className="bg-[#F9F7F5] rounded-xl p-4 text-center hover:shadow-lg transition-shadow group border border-transparent hover:border-amber-700/20">
              <Heart className="w-6 h-6 text-amber-700 mx-auto mb-2" />
              <p className="font-medium text-[#2D2D2B] group-hover:text-amber-700 transition-colors">Aftercare Guide</p>
              <p className="text-sm text-[#2D2D2B]/50">Healing instructions</p>
            </Link>
            <Link to="/services" className="bg-[#F9F7F5] rounded-xl p-4 text-center hover:shadow-lg transition-shadow group border border-transparent hover:border-amber-700/20">
              <CheckCircle className="w-6 h-6 text-amber-700 mx-auto mb-2" />
              <p className="font-medium text-[#2D2D2B] group-hover:text-amber-700 transition-colors">All Services</p>
              <p className="text-sm text-[#2D2D2B]/50">Pricing & details</p>
            </Link>
            <Link to="/about" className="bg-[#F9F7F5] rounded-xl p-4 text-center hover:shadow-lg transition-shadow group border border-transparent hover:border-amber-700/20">
              <Award className="w-6 h-6 text-amber-700 mx-auto mb-2" />
              <p className="font-medium text-[#2D2D2B] group-hover:text-amber-700 transition-colors">About Mugi</p>
              <p className="text-sm text-[#2D2D2B]/50">Credentials & story</p>
            </Link>
            <Link to="/booking" className="bg-[#F9F7F5] rounded-xl p-4 text-center hover:shadow-lg transition-shadow group border border-transparent hover:border-amber-700/20">
              <Clock className="w-6 h-6 text-amber-700 mx-auto mb-2" />
              <p className="font-medium text-[#2D2D2B] group-hover:text-amber-700 transition-colors">Book Now</p>
              <p className="text-sm text-[#2D2D2B]/50">Free consultation</p>
            </Link>
            <Link to="/faq" className="bg-[#F9F7F5] rounded-xl p-4 text-center hover:shadow-lg transition-shadow group border border-transparent hover:border-amber-700/20">
              <Star className="w-6 h-6 text-amber-700 mx-auto mb-2" />
              <p className="font-medium text-[#2D2D2B] group-hover:text-amber-700 transition-colors">FAQ</p>
              <p className="text-sm text-[#2D2D2B]/50">All common questions</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 bg-[#F9F7F5]">
        <div className="container-custom max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-cormorant font-medium text-[#2D2D2B] mb-2">Serving the DMV Region</h2>
          <p className="text-[#2D2D2B]/60 text-sm mb-6">Professional permanent makeup for Northern Virginia, DC & Maryland</p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link to="/licensed-pmu-artist-annandale" className="px-4 py-2 bg-white rounded-full text-sm text-[#2D2D2B] hover:bg-[#E6DAD2] transition-colors border border-gray-200">Annandale</Link>
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

      {/* ───────────── FINAL CTA SECTION ───────────── */}
      <section className="py-24 bg-[#2D2D2B] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-700 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-700 rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-700/20 text-amber-300 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              523+ Procedures & Counting
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-cormorant font-medium mb-6">
              Ready for the Most Natural<br />
              <span className="text-amber-400">Permanent Brows</span> You've Ever Seen?
            </h2>
            <p className="text-lg text-[#F9F7F5]/80 mb-8 leading-relaxed">
              Microshading artistry by Ink Mugi — pixelated precision for brows that look like they
              were born with you. Book your free consultation today and discover why 523+ clients
              trust Mugi with their brows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-700 text-white rounded-full font-medium hover:bg-amber-600 transition-all shadow-lg hover:shadow-xl"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-all"
              >
                View Before & Afters
              </Link>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-white/60">
              <a
                href="tel:+15712838228"
                className="inline-flex items-center gap-2 hover:text-amber-300 transition-colors"
              >
                <Phone className="w-4 h-4" />
                (571) 283-8228
              </a>
              <span className="hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                7857 Heritage Dr #330, Annandale, VA 22003
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

        {/* Semantic SEO Footer */}
        <section className="py-10 bg-[#F0E4D8]/30 border-t border-[#E6DAD2]/20">
          <div className="container-custom max-w-5xl mx-auto">
            <div className="text-xs text-[#2D2D2B]/40 leading-relaxed space-y-3">
              <p>
                <strong className="text-[#2D2D2B]/50">Microshading Artistry at Ink Mugi — Annandale, VA</strong> — Professional microshading, dot-work permanent makeup, and soft powder brow technique in Annandale, Virginia. Ideal for oily, sensitive, and mature skin types. Virginia licensed (#1231002471) and fully insured PMU artist specializing in natural, low-maintenance beauty enhancement.
              </p>
              <p>
                Related searches: microshading near me, microshading Annandale VA, microshading vs microblading, microshading oily skin, powder brows dot technique, semi permanent brows Northern Virginia, microshading cost DMV, microshading healing process, microshading Arlington VA, microshading Alexandria VA, microshading Fairfax, soft fill brows, pixelated brows, cosmetic brow tattooing Virginia.
              </p>
              <p>
                Serving: Annandale, Arlington, Alexandria, Fairfax, McLean, Tysons Corner, Falls Church, Springfield, Vienna, Great Falls, Washington DC, and the greater DMV metro area.
              </p>
            </div>
          </div>
        </section>
    </>
  );
};

export default MicroshadingArtistry;
