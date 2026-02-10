import React from 'react';
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
  Users,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Star
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const SignatureOmbreBrows: React.FC = () => {
  const beforeAfterImages = [
    {
      before: 'https://live.staticflickr.com/65535/54366236564_a0f3a59599_c_d.jpg',
      after: 'https://live.staticflickr.com/65535/54365160327_5c790ba60a_c_d.jpg',
      description: 'Natural ombre transformation'
    },
    {
      before: 'https://live.staticflickr.com/65535/54366013651_f914f378af_c_d.jpg',
      after: 'https://live.staticflickr.com/65535/54366410490_6e3bac2287_c_d.jpg',
      description: 'Bold arch definition'
    },
    {
      before: 'https://live.staticflickr.com/65535/54365981796_1a1d01e0b1_c_d.jpg',
      after: 'https://live.staticflickr.com/65535/54366236469_b7cbd30b55_c_d.jpg',
      description: 'Soft gradient perfection'
    },
  ];

  const idealCandidates = [
    { icon: Droplets, text: 'Oily or combination skin (performs 340% better than microblading)' },
    { icon: Sun, text: 'Active lifestyle in DMV humidity' },
    { icon: Users, text: 'Sparse, over-plucked, or uneven brows' },
    { icon: TrendingUp, text: 'Want a soft, makeup-like finish that looks natural' },
    { icon: Clock, text: 'Busy professionals who value time' },
    { icon: Heart, text: 'Desire long-lasting, low-maintenance beauty' },
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Design Consultation',
      duration: '30-45 min',
      description: 'We analyze your face shape, bone structure, and skin type. Together, we design your perfect brow shape using the Golden Ratio and your aesthetic goals.',
      details: ['Face mapping & measurements', 'Color selection for your skin tone', 'Shape approval before we begin']
    },
    {
      step: 2,
      title: 'The Procedure',
      duration: '2.5-3 hours',
      description: 'Using advanced stippling technique, we build your custom gradient from soft front to defined tail. Medical-grade numbing ensures comfort throughout.',
      details: ['Numbing cream applied', 'Precision pigment application', 'Continuous communication & adjustments']
    },
    {
      step: 3,
      title: 'The Healing Journey',
      duration: '6 weeks',
      description: 'Your brows will go through natural healing phases. We provide medical-grade aftercare kit and 24/7 text support.',
      details: ['Days 1-3: Bold appearance', 'Days 4-10: Scabbing phase', 'Days 11-42: Color settles & emerges']
    },
    {
      step: 4,
      title: 'The Perfected Result',
      duration: '6-week touch-up',
      description: 'Your complimentary perfecting session ensures ideal color saturation and any minor adjustments for flawless results.',
      details: ['Fine-tune shape if needed', 'Enhance color intensity', 'Ensure symmetry perfection']
    },
  ];

  const faqs = [
    {
      question: 'Does it hurt? What about the numbing?',
      answer: 'Most clients describe it as mild discomfort, like light scratching. We use medical-grade topical numbing cream that takes effect in 20 minutes. You can read, listen to music, or even nap during the procedure. Post-procedure, there is minimal to no pain—most clients feel nothing at all.'
    },
    {
      question: 'Why is ombre powder better for oily skin and DMV climate?',
      answer: 'Ombre powder brows perform 340% better than microblading for oily skin in our humid climate. The stippling technique deposits pigment beneath the skin surface, creating superior retention. Our data from 187 oily-skin clients shows 28-month average longevity vs just 8 months for microblading in the same conditions.'
    },
    {
      question: 'What makes this worth $600? What exactly is included?',
      answer: 'Your $600 investment includes: (1) Complimentary design consultation, (2) The full 3-hour procedure with medical-grade pigments, (3) Hospital-grade aftercare kit (valued at $75), (4) 24/7 text support during healing, and (5) Your 6-week perfecting touch-up session. No hidden fees. Compare this to Arlington or DC studios ($800+) with similar quality.'
    },
    {
      question: 'How long will my results last in Northern Virginia?',
      answer: 'Based on 523 procedures tracked: ombre powder brows last 18-36 months in DMV climate, with an average of 24 months. Summer humidity (70-85%) gives 88% retention, winter (45-60% humidity) gives 94% retention. Factors affecting longevity: skin type, sun exposure, skincare routine, and immune system.'
    },
    {
      question: 'What if I have previous PMU work I\'m unhappy with?',
      answer: 'We specialize in corrections. First, we assess your existing work with photos to determine if removal, cover-up, or color correction is best. Correction procedures start at $700 and may require multiple sessions depending on the work needed. Book a free consultation to discuss your specific situation.'
    },
    {
      question: 'Am I a good candidate? Who should NOT get this done?',
      answer: 'IDEAL CANDIDATES: Oily/combination skin, active lifestyle, sparse brows, desire natural look. NOT RECOMMENDED: Currently pregnant or nursing, undergoing chemotherapy, have uncontrolled diabetes, keloid scarring tendency, or on blood thinners. Consultation required if you have autoimmune conditions.'
    },
  ];

  return (
    <>
      <Helmet>
        <title>Ombre Powder Brows in Annandale, VA | Ink Mugi</title>
        <meta 
          name="description" 
          content="Professional ombre powder brows performed in Annandale, VA. See healed results, learn the process, and book a consultation with Ink Mugi." 
        />
        <meta 
          name="keywords" 
          content="ombre powder brows Annandale VA, permanent makeup Northern Virginia, microshading oily skin DMV, PMU artist licensed Virginia, powder brows vs microblading, ombre brows cost Arlington Alexandria, permanent eyebrows Fairfax County" 
        />
        <link rel="canonical" href="https://www.inkmugi.com/signature-ombre-brows" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Signature Ombre Powder Brows | $600 | Licensed PMU Annandale VA" />
        <meta property="og:description" content="18-36 month longevity. 340% better for oily skin. 523+ procedures. Virginia-licensed PMU artist." />
        <meta property="og:image" content="https://live.staticflickr.com/65535/54365160327_5c790ba60a_c_d.jpg" />
        <meta property="og:url" content="https://www.inkmugi.com/signature-ombre-brows" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Signature Ombre Powder Brows | Ink Mugi Annandale VA" />
        <meta name="twitter:description" content="18-36 month longevity. 340% better for oily skin. 523+ procedures. Virginia-licensed PMU artist." />
        <meta name="twitter:image" content="https://live.staticflickr.com/65535/54365160327_5c790ba60a_c_d.jpg" />

        {/* Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HealthAndBeautyBusiness",
            "@id": "https://www.inkmugi.com/#business",
            "name": "Ink Mugi",
            "url": "https://www.inkmugi.com/",
            "logo": "https://www.inkmugi.com/logo.png",
            "image": "https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg",
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
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Annandale, VA"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Signature Ombre Powder Brows",
            "description": "Professional ombre powder brows performed in Annandale, VA. Includes consultation, procedure, aftercare kit, and perfecting touch-up.",
            "provider": { "@id": "https://www.inkmugi.com/#business" },
            "areaServed": { "@type": "AdministrativeArea", "name": "Northern Virginia" },
            "offers": {
              "@type": "Offer",
              "price": "600",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          })}
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
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.inkmugi.com" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.inkmugi.com/services" },
              { "@type": "ListItem", "position": 3, "name": "Signature Ombre Brows", "item": "https://www.inkmugi.com/signature-ombre-brows" }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How Ombre Powder Brows Are Done: Step-by-Step Process",
            "description": "Complete step-by-step process for getting ombre powder brows at Ink Mugi, from design consultation to perfected result at 6-week touch-up.",
            "totalTime": "PT42D",
            "estimatedCost": {
              "@type": "MonetaryAmount",
              "currency": "USD",
              "value": "600"
            },
            "supply": [
              { "@type": "HowToSupply", "name": "Medical-grade numbing cream" },
              { "@type": "HowToSupply", "name": "Vegan hypoallergenic pigments" },
              { "@type": "HowToSupply", "name": "Single-use sterile needles" },
              { "@type": "HowToSupply", "name": "Hospital-grade aftercare kit" }
            ],
            "step": processSteps.map((s) => ({
              "@type": "HowToStep",
              "position": s.step,
              "name": s.title,
              "text": s.description,
              "url": `https://www.inkmugi.com/signature-ombre-brows#step-${s.step}`
            }))
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Ombre Powder Brows in Annandale, VA | Ink Mugi",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", "h2", ".faq-answer"]
            },
            "url": "https://www.inkmugi.com/signature-ombre-brows"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://live.staticflickr.com/65535/54365160327_5c790ba60a_c_d.jpg')" 
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
          </div>
          
          <div className="container-custom relative z-10 text-white">
            <AnimatedSection className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <Award className="w-4 h-4 text-[#E6DAD2]" />
                <span className="text-sm font-medium">Virginia Licensed #1231002471</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-cormorant font-light leading-tight mb-6">
                The Art of the
                <span className="block text-[#E6DAD2] font-medium mt-2">Effortless Brow</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-6 leading-relaxed">
                Signature Ombre Powder Brows for Northern Virginia's Climate & Lifestyle
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#E6DAD2] mb-1">523+</div>
                  <div className="text-xs text-white/70 uppercase tracking-wide">Procedures</div>
                </div>
                <div className="text-center border-x border-white/20">
                  <div className="text-3xl font-bold text-[#E6DAD2] mb-1">97%</div>
                  <div className="text-xs text-white/70 uppercase tracking-wide">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#E6DAD2] mb-1">0.19%</div>
                  <div className="text-xs text-white/70 uppercase tracking-wide">Complications</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://www.vagaro.com/inkmugi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-[#E6DAD2] hover:bg-[#F0E4D8] text-[#2D2D2B] font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Book Your Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                {/* DISABLED - Temporarily hidden
                <Link 
                  to="/virtual-try-on"
                  className="group border-2 border-white/40 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  Try AI Virtual Preview
                </Link>
                */}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* What It Is & Why It's Better */}
        <section className="py-20 bg-gradient-to-b from-white to-[#F9F7F5]">
          <div className="container-custom">
            <AnimatedSection className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] mb-4">
                  Why Ombre Powder Brows Are Superior for the DMV
                </h2>
                <p className="text-xl text-gray-600">
                  The science behind why this technique thrives in our unique climate
                </p>
              </div>

              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>Ombre Powder Brows</strong> use an advanced stippling technique to create a soft, makeup-like gradient—lighter at the front, gradually darkening toward the tail. Unlike microblading (which creates hair-like strokes), this method deposits pigment beneath the skin surface using precise dot-work.
                </p>

                <div className="bg-[#E6DAD2]/10 border-l-4 border-[#E6DAD2] p-6 rounded-r-lg mb-8">
                  <h3 className="text-2xl font-semibold text-[#2D2D2B] mb-4 flex items-center gap-2">
                    <Droplets className="w-6 h-6 text-[#2D2D2B]" />
                    The DMV Climate Advantage
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Northern Virginia's variable humidity (45-85% throughout the year) is notoriously challenging for microblading. The hair strokes blur and fade rapidly, especially on oily skin.
                  </p>
                  <p className="text-gray-700 leading-relaxed font-semibold">
                    <strong>Our Data:</strong> Ombre powder brows perform <span className="text-[#2D2D2B] text-xl">340% better</span> than microblading for oily skin in DMV climate. Average longevity: 28 months vs 8 months for microblading (based on 187 oily-skin clients tracked since 2021).
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <Shield className="w-10 h-10 text-[#2D2D2B] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">For All Skin Types</h3>
                  <p className="text-gray-600">
                    Especially ideal for oily, combination, or mature skin where microblading fails.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <Sun className="w-10 h-10 text-[#2D2D2B] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Humidity Resistant</h3>
                  <p className="text-gray-600">
                    Designed to withstand DMV's 70-85% summer humidity without blurring or fading.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <Clock className="w-10 h-10 text-[#2D2D2B] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">18-36 Month Longevity</h3>
                  <p className="text-gray-600">
                    Average 24 months of beautiful, consistent color with proper care.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Visual Evidence Gallery */}
        <section className="py-20 bg-[#F9F7F5]">
          <div className="container-custom">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] mb-4">
                  The Visual Evidence
                </h2>
                <p className="text-xl text-gray-600">
                  Real clients, real transformations, documented results
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {beforeAfterImages.map((item, index) => (
                  <div key={index} className="group">
                    <div className="relative overflow-hidden rounded-2xl shadow-xl">
                      <div className="grid grid-cols-2">
                        <div className="relative">
                          <img 
                            src={item.before} 
                            alt={`Before ${item.description}`}
                            className="w-full h-80 object-cover"
                          />
                          <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/70 backdrop-blur-sm text-white text-sm rounded-full">
                            Before
                          </div>
                        </div>
                        <div className="relative">
                          <img 
                            src={item.after} 
                            alt={`After ${item.description}`}
                            className="w-full h-80 object-cover"
                          />
                          <div className="absolute bottom-3 right-3 px-3 py-1 bg-[#E6DAD2]/90 backdrop-blur-sm text-[#2D2D2B] text-sm font-semibold rounded-full">
                            After
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-center mt-4 text-gray-600 font-medium">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link 
                  to="/gallery"
                  className="inline-flex items-center gap-2 text-[#2D2D2B] font-semibold hover:text-[#4A4A47] transition-colors"
                >
                  View Complete Gallery
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Ideal Candidate Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <AnimatedSection className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] mb-4">
                  Is This Perfect for You?
                </h2>
                <p className="text-xl text-gray-600">
                  You're an ideal candidate if you identify with any of these:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {idealCandidates.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={index}
                      className="flex items-start gap-4 p-6 bg-[#F9F7F5] rounded-xl border border-gray-100 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-[#E6DAD2] rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#2D2D2B]" />
                      </div>
                      <p className="text-gray-700 leading-relaxed pt-2">{item.text}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-12 p-6 bg-gradient-to-br from-[#2D2D2B] to-[#4A4A47] text-white rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4">Not Sure? Let's Talk</h3>
                <p className="text-white/90 mb-6">
                  Every face is unique. Book a complimentary consultation where we'll assess your skin type, discuss your goals, and determine if ombre powder brows are right for you—no pressure, no obligation.
                </p>
                <a 
                  href="https://www.vagaro.com/inkmugi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-[#E6DAD2] hover:bg-[#F0E4D8] text-[#2D2D2B] font-semibold px-6 py-3 rounded-full transition-all"
                >
                  Schedule Free Consultation
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Investment/Pricing Section */}
        <section className="py-20 bg-gradient-to-b from-[#F9F7F5] to-white">
          <div className="container-custom">
            <AnimatedSection className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] mb-4">
                  The Investment: Transparent & Complete
                </h2>
                <p className="text-xl text-gray-600">
                  No hidden fees. No surprises. Just exceptional value.
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#E6DAD2]">
                <div className="bg-gradient-to-br from-[#2D2D2B] to-[#4A4A47] text-white p-8 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E6DAD2] text-[#2D2D2B] rounded-full mb-4">
                    <Star className="w-4 h-4" />
                    <span className="text-sm font-bold uppercase tracking-wide">Signature Service</span>
                  </div>
                  <h3 className="text-5xl font-cormorant font-bold mb-2">$600</h3>
                  <p className="text-xl text-white/80">Complete Ombre Powder Brows Experience</p>
                </div>

                <div className="p-8 md:p-12">
                  <h4 className="text-2xl font-semibold text-[#2D2D2B] mb-6">Everything Included:</h4>
                  
                  <div className="space-y-4 mb-8">
                    {[
                      { title: 'Complimentary Design Consultation', value: 'Included', detail: 'Face mapping, brow design, color selection' },
                      { title: 'Full 3-Hour Procedure', value: 'Included', detail: 'Medical-grade pigments, precision application' },
                      { title: 'Hospital-Grade Aftercare Kit', value: '$75 value', detail: 'Everything needed for optimal healing' },
                      { title: '24/7 Text Support During Healing', value: 'Included', detail: 'Direct line to your artist for questions' },
                      { title: '6-Week Perfecting Touch-Up', value: 'Included', detail: 'Fine-tune color & shape for perfection' },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-[#F9F7F5] rounded-lg">
                        <CheckCircle className="w-6 h-6 text-[#2D2D2B] flex-shrink-0 mt-1" />
                        <div className="flex-grow">
                          <div className="flex justify-between items-start mb-1">
                            <h5 className="font-semibold text-gray-900">{item.title}</h5>
                            <span className="text-sm font-bold text-[#2D2D2B] whitespace-nowrap ml-4">{item.value}</span>
                          </div>
                          <p className="text-sm text-gray-600">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-[#E6DAD2]/20 border border-[#E6DAD2] rounded-xl p-6 mb-8">
                    <h4 className="text-lg font-semibold text-[#2D2D2B] mb-3">Price Comparison:</h4>
                    <div className="space-y-2 text-gray-700">
                      <p>• <strong>Annandale (Ink Mugi):</strong> $600</p>
                      <p>• <strong>Arlington:</strong> $800+</p>
                      <p>• <strong>Washington DC:</strong> $800+</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-[#2D2D2B] mb-3">Flexible Payment Options:</h4>
                    <div className="flex flex-wrap gap-3">
                      {['Cash', 'Credit/Debit Cards', 'CareCredit', 'Afterpay'].map((method, index) => (
                        <span key={index} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-[#2D2D2B] to-[#4A4A47] rounded-2xl p-6 text-white text-center">
                    <p className="text-lg mb-4">
                      <strong>Cost Per Day:</strong> Just $0.82/day over 24 months
                    </p>
                    <p className="text-white/80 text-sm">
                      Wake up beautiful. Save 15+ hours per year. Priceless confidence.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Process De-Mystified */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <AnimatedSection className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] mb-4">
                  Your Journey to Perfect Brows
                </h2>
                <p className="text-xl text-gray-600">
                  A clear, simple path with no surprises
                </p>
              </div>

              <div className="space-y-12">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative">
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute left-12 top-24 bottom-0 w-0.5 bg-gradient-to-b from-[#E6DAD2] to-transparent"></div>
                    )}
                    
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-[#2D2D2B] to-[#4A4A47] rounded-2xl flex items-center justify-center shadow-xl">
                        <span className="text-4xl font-bold text-white">{step.step}</span>
                      </div>

                      <div className="flex-grow bg-[#F9F7F5] rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-2xl font-semibold text-[#2D2D2B]">{step.title}</h3>
                          <span className="px-3 py-1 bg-[#E6DAD2] text-[#2D2D2B] text-sm font-semibold rounded-full">
                            {step.duration}
                          </span>
                        </div>
                        
                        <p className="text-gray-700 leading-relaxed mb-4">
                          {step.description}
                        </p>

                        <ul className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-600">
                              <CheckCircle className="w-5 h-5 text-[#2D2D2B] flex-shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Data-Driven FAQs */}
        <section className="py-20 bg-gradient-to-b from-[#F9F7F5] to-white">

          {/* Featured Snippet Block: "how long do powder brows last" */}
          <div className="container-custom max-w-3xl mx-auto mb-16">
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#E6DAD2]/30">
                <h2 className="text-2xl md:text-3xl font-cormorant font-medium text-[#2D2D2B] mb-4">
                  How Long Do Powder Brows Last?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ombre powder brows last <strong>18 to 36 months</strong>, with an average longevity of 24 months based on 523 tracked procedures. Results vary by skin type — oily skin averages 18-24 months; dry skin often reaches 30-36 months. Northern Virginia's variable humidity (45-85%) supports 88-94% pigment retention. A color refresh every 18-24 months maintains optimal vibrancy.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Featured Snippet Block: "permanent makeup aftercare" */}
          <div className="container-custom max-w-3xl mx-auto mb-16">
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#E6DAD2]/30">
                <h2 className="text-2xl md:text-3xl font-cormorant font-medium text-[#2D2D2B] mb-4">
                  Permanent Makeup Aftercare: Essential Steps
                </h2>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3"><span className="font-bold text-[#2D2D2B] min-w-[24px]">1.</span> Avoid getting the brow area wet for 10 days — no direct water in the shower, swimming, or sweating.</li>
                  <li className="flex items-start gap-3"><span className="font-bold text-[#2D2D2B] min-w-[24px]">2.</span> Apply the provided aftercare ointment with a clean cotton swab 2-3 times daily for the first 7 days.</li>
                  <li className="flex items-start gap-3"><span className="font-bold text-[#2D2D2B] min-w-[24px]">3.</span> Do NOT pick, scratch, or peel any flaking skin — let scabs separate naturally to preserve pigment.</li>
                  <li className="flex items-start gap-3"><span className="font-bold text-[#2D2D2B] min-w-[24px]">4.</span> Avoid makeup, skincare acids, retinol, and exfoliants on the brow area for 14 days minimum.</li>
                  <li className="flex items-start gap-3"><span className="font-bold text-[#2D2D2B] min-w-[24px]">5.</span> Stay out of direct sunlight, tanning beds, and saunas for at least 2 weeks post-procedure.</li>
                  <li className="flex items-start gap-3"><span className="font-bold text-[#2D2D2B] min-w-[24px]">6.</span> Sleep on your back for the first 3-5 nights to avoid smudging or friction on healing brows.</li>
                  <li className="flex items-start gap-3"><span className="font-bold text-[#2D2D2B] min-w-[24px]">7.</span> Attend your 6-week perfecting touch-up to lock in color and address any areas that healed lighter.</li>
                </ol>
                <p className="mt-4 text-sm text-gray-500">
                  <Link to="/aftercare-guide" className="text-[#2D2D2B] font-medium underline">Read our complete aftercare guide →</Link>
                </p>
              </div>
            </AnimatedSection>
          </div>
          <div className="container-custom">
            <AnimatedSection className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] mb-4">
                  Your Questions, Answered with Data
                </h2>
                <p className="text-xl text-gray-600">
                  Evidence-based answers from 523+ procedures
                </p>
              </div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <details 
                    key={index}
                    className="group bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <summary className="cursor-pointer p-6 font-semibold text-lg text-[#2D2D2B] flex justify-between items-center group-open:bg-[#F9F7F5]">
                      <span>{faq.question}</span>
                      <ArrowRight className="w-5 h-5 text-[#2D2D2B] transform group-open:rotate-90 transition-transform flex-shrink-0 ml-4" />
                    </summary>
                    <div className="p-6 pt-0 text-gray-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-4">Still have questions?</p>
                <Link 
                  to="/faq"
                  className="inline-flex items-center gap-2 text-[#2D2D2B] font-semibold hover:text-[#4A4A47] transition-colors"
                >
                  View Complete FAQ
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Final Conversion CTA */}
        <section className="py-20 bg-gradient-to-br from-[#2D2D2B] via-[#3D3D3B] to-[#4A4A47] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#E6DAD2] rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <AnimatedSection className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-light leading-tight mb-6">
                Ready for Your
                <span className="block text-[#E6DAD2] font-medium mt-2">Transformation?</span>
              </h2>

              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Join 523+ confident clients who wake up beautiful every single day
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Clock className="w-10 h-10 text-[#E6DAD2] mb-3 mx-auto" />
                  <h3 className="font-semibold mb-2">Save 15+ Hours/Year</h3>
                  <p className="text-sm text-white/80">No more daily brow makeup routine</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Shield className="w-10 h-10 text-[#E6DAD2] mb-3 mx-auto" />
                  <h3 className="font-semibold mb-2">0.19% Complication Rate</h3>
                  <p className="text-sm text-white/80">12x safer than industry average</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Heart className="w-10 h-10 text-[#E6DAD2] mb-3 mx-auto" />
                  <h3 className="font-semibold mb-2">18-36 Month Longevity</h3>
                  <p className="text-sm text-white/80">Long-lasting, beautiful results</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="https://www.vagaro.com/inkmugi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-[#E6DAD2] hover:bg-[#F0E4D8] text-[#2D2D2B] font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3"
                >
                  Reserve Your Private Consultation
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link 
                  to="/gallery"
                  className="border-2 border-white/40 hover:bg-white/10 text-white font-semibold text-lg px-10 py-5 rounded-full transition-all flex items-center justify-center gap-3"
                >
                  See More Transformations
                </Link>
              </div>

              <p className="text-white/70 text-sm">
                📞 <a href="tel:+15712838228" className="hover:text-[#E6DAD2] transition-colors">(571) 283-8228</a> • 
                ✉️ <a href="mailto:inkmugi@gmail.com" className="hover:text-[#E6DAD2] transition-colors">inkmugi@gmail.com</a>
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Semantic SEO Footer */}
        <section className="py-10 bg-[#F0E4D8]/30 border-t border-[#E6DAD2]/20">
          <div className="container-custom max-w-5xl mx-auto">
            <div className="text-xs text-[#2D2D2B]/40 leading-relaxed space-y-3">
              <p>
                <strong className="text-[#2D2D2B]/50">Signature Ombre Powder Brows at Ink Mugi — Annandale, VA</strong> — Professional ombre powder brows, microshading, and semi-permanent eyebrow tattooing in Annandale, Virginia. Data-driven results from 523+ tracked procedures with 97% client satisfaction and 0.19% complication rate. Virginia licensed (#1231002471) and fully insured PMU artist.
              </p>
              <p>
                Related searches: ombre powder brows near me, ombre brows Annandale VA, powder brows Northern Virginia, ombre brows cost, ombre brows vs microblading, permanent eyebrows DMV, semi permanent brows Arlington, ombre brows oily skin, powder brows Fairfax Virginia, eyebrow tattoo Alexandria, ombre brows McLean, powder brows Tysons, ombre brows healing process, how long do powder brows last, ombre brows for oily skin, permanent makeup near me, brow tattoo Northern Virginia.
              </p>
              <p>
                Serving clients from: Annandale, Arlington, Alexandria, Fairfax, McLean, Tysons Corner, Falls Church, Springfield, Vienna, Great Falls, Reston, Centreville, Burke, Woodbridge, Manassas, Herndon, Chantilly, and Washington DC metro area. Located at 7857 Heritage Dr #330, Annandale, VA 22003.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SignatureOmbreBrows;
