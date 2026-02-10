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
  Eye,
  Sparkles,
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import InlineFaqAccordion from '../components/InlineFaqAccordion';
import CTASection from '../components/CTASection';

const NanoBrows: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const processSteps = [
    {
      step: 1,
      title: 'Initial Consultation & Skin Assessment',
      duration: '30-45 min',
      description: 'We analyze your natural hair growth pattern, skin texture, undertone, and lifestyle. Using precision face mapping and the golden ratio, we co-design your ideal brow shape.',
      details: ['Fitzpatrick skin type analysis', 'Hair growth pattern mapping', 'Custom color formulation', 'Shape approved before we begin'],
    },
    {
      step: 2,
      title: 'Nano Brow Procedure',
      duration: '2-3 hours',
      description: 'Using an ultra-fine single nano needle on a digital PMU machine, we create hyper-realistic hair strokes that follow your natural growth direction. Medical-grade numbing ensures complete comfort.',
      details: ['Single nano needle (0.18mm)', 'Digital machine precision', 'Layer-by-layer stroke building', 'Continuous comfort checks'],
    },
    {
      step: 3,
      title: 'Healing & Aftercare',
      duration: '4-6 weeks',
      description: 'Your brows will go through natural healing phases. We provide a medical-grade aftercare kit and 24/7 text support throughout the entire healing journey.',
      details: ['Days 1-3: Strokes appear crisp & defined', 'Days 4-10: Light flaking phase', 'Days 11-28: Color softens & settles', 'Weeks 4-6: True color emerges'],
    },
    {
      step: 4,
      title: 'Perfecting Touch-Up',
      duration: '6-8 week mark',
      description: 'Your complimentary perfecting session ensures optimal color saturation, minor stroke refinements, and fills any areas where pigment may have shed during healing.',
      details: ['Fill in any light spots', 'Enhance stroke density if desired', 'Final symmetry adjustments', 'Lock in long-term retention'],
    },
  ];

  const faqs = [
    {
      question: 'What is the difference between nano brows and microblading?',
      answer: 'Microblading uses a manual handheld blade to create hair strokes by cutting into the skin. Nano brows use a single ultra-fine needle (0.18mm) on a digital PMU machine, which deposits pigment with greater precision and less trauma. Nano brows cause less skin damage, heal faster, and last significantly longer—especially on oily or combination skin common in the DMV climate.',
    },
    {
      question: 'Are nano brows better than microblading for oily skin?',
      answer: 'Yes. Nano brows are significantly better for oily skin. The digital machine deposits pigment more precisely beneath the surface without cutting, so strokes retain their crisp definition instead of blurring or spreading as microblading strokes do on oily skin. Our data shows nano brow retention averages 20+ months on oily skin vs. 8 months for microblading.',
    },
    {
      question: 'How long do nano brows last in Northern Virginia?',
      answer: 'Nano brows last 12 to 24 months depending on skin type, lifestyle, and aftercare. In the DMV\'s variable humidity (45-85%), nano brows outperform microblading significantly. Dry skin clients typically reach 18-24 months; oily skin clients average 12-18 months. A color refresh every 12-18 months maintains crisp hair strokes.',
    },
    {
      question: 'Do nano brows hurt?',
      answer: 'Most clients rate nano brow discomfort at 2-3 out of 10—comparable to light scratching. We apply medical-grade topical numbing cream that takes full effect in 20 minutes before the procedure begins. The single-needle technique is gentler than microblading\'s blade, so most clients find it even more comfortable.',
    },
    {
      question: 'How much do nano brows cost at Ink Mugi?',
      answer: 'Nano brows at Ink Mugi start at $650, which includes: complimentary design consultation, full 2-3 hour procedure with premium pigments, hospital-grade aftercare kit ($75 value), 24/7 text support during healing, and your 6-week perfecting touch-up session. No hidden fees. Compare this to $800-$1,200 at DC and Arlington studios.',
    },
    {
      question: 'Can I get nano brows over old microblading?',
      answer: 'In many cases, yes. Nano brows can be used to refresh faded microblading strokes or add definition. However, if old work has blurred, discolored, or is too saturated, we may need to do a correction or saline removal first. Book a free consultation so we can assess your specific case with photos.',
    },
    {
      question: 'Who is NOT a good candidate for nano brows?',
      answer: 'Nano brows are not recommended if you are pregnant/nursing, undergoing chemotherapy, have uncontrolled diabetes, keloid scarring tendency, are on blood thinners, or are using Accutane (must be off for 12+ months). Those with very oily skin may be better candidates for ombre powder brows, which we\'ll discuss during consultation.',
    },
    {
      question: 'What is the nano brow healing process like day by day?',
      answer: 'Days 1-2: Strokes look crisp and slightly bold. Days 3-5: Slight tenderness, minor swelling subsides. Days 5-10: Light flaking—DO NOT pick or scratch. Days 10-21: Strokes appear lighter as skin regenerates. Days 21-42: True color and stroke definition emerge. Your complimentary touch-up at week 6-8 perfects any areas that healed lighter.',
    },
  ];

  const comparisonData = [
    ['Technique', 'Manual blade cuts', 'Digital single-needle strokes', 'Machine stippling dots'],
    ['Needle/Tool', 'Multi-blade (12-16 pins)', 'Single nano needle (0.18mm)', 'Shader cluster (3-5 pins)'],
    ['Skin Trauma', 'Moderate — cuts skin', 'Minimal — deposits pigment', 'Minimal — dots only'],
    ['Longevity', '8-12 months', '12-24 months', '18-36 months'],
    ['Best Skin Type', 'Dry skin only', 'All skin types', 'All skin types'],
    ['DMV Humidity', 'Poor — strokes blur', 'Good — strokes hold', 'Excellent — best retention'],
    ['Healed Look', 'Hair strokes (can blur)', 'Ultra-fine hair strokes', 'Soft powder/makeup finish'],
    ['Pain Level', '4-6/10', '2-3/10', '2-3/10'],
    ['Ideal For', 'Subtlety on dry skin', 'Natural hair-stroke lovers', 'Makeup lovers, oily skin'],
  ];

  return (
    <>
      <Helmet>
        <title>Nano Brows in Annandale VA | Ultra-Fine Hair Strokes | Ink Mugi</title>
        <meta
          name="description"
          content="Nano brows in Annandale, VA starting at $650. Ultra-fine digital hair strokes that last 12-24 months. Better than microblading for all skin types. Virginia-licensed PMU artist. Free consultation."
        />
        <meta
          name="keywords"
          content="nano brows Northern Virginia, nano brows Annandale VA, nano brows near me, nano brows vs microblading, digital hair strokes PMU, nano needle eyebrows, permanent eyebrow hair strokes, nano brows oily skin, nano brows cost, nano brows healing"
        />
        <link rel="canonical" href="https://www.inkmugi.com/nano-brows" />

        <meta property="og:title" content="Nano Brows | Ultra-Fine Hair Strokes | $650 | Ink Mugi Annandale VA" />
        <meta property="og:description" content="Ultra-fine digital hair strokes. 12-24 month longevity. Better than microblading. Virginia-licensed PMU artist in Annandale, VA." />
        <meta property="og:image" content="https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg" />
        <meta property="og:url" content="https://www.inkmugi.com/nano-brows" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nano Brows | Ultra-Fine Hair Strokes | Ink Mugi VA" />
        <meta name="twitter:description" content="Digital nano needle precision. 12-24 month longevity. Gentler than microblading. Licensed PMU artist, Annandale VA." />
        <meta name="twitter:image" content="https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg" />

        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Nano Brows — Ultra-Fine Hair Stroke Technique",
            "description": "Professional nano brows using ultra-fine single-needle digital technique in Annandale, VA. Includes consultation, procedure, aftercare kit, and perfecting touch-up.",
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
              { "@type": "ListItem", "position": 3, "name": "Nano Brows", "item": "https://www.inkmugi.com/nano-brows" },
            ],
          })}
        </script>

        {/* HowTo Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How Nano Brows Are Done: Step-by-Step Process",
            "description": "Complete step-by-step process for getting nano brows at Ink Mugi in Annandale, VA.",
            "totalTime": "PT42D",
            "estimatedCost": { "@type": "MonetaryAmount", "currency": "USD", "value": "650" },
            "supply": [
              { "@type": "HowToSupply", "name": "Medical-grade numbing cream" },
              { "@type": "HowToSupply", "name": "Single nano needle cartridge (0.18mm)" },
              { "@type": "HowToSupply", "name": "Vegan hypoallergenic pigments" },
              { "@type": "HowToSupply", "name": "Hospital-grade aftercare kit" },
            ],
            "step": processSteps.map((s) => ({
              "@type": "HowToStep",
              "position": s.step,
              "name": s.title,
              "text": s.description,
              "url": `https://www.inkmugi.com/nano-brows#step-${s.step}`,
            })),
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-[#F0E4D8] via-[#E6DAD2] to-[#F9F7F5]">
          <div className="container-custom">
            <AnimatedSection className="max-w-4xl mx-auto text-center">
              <nav className="text-sm text-[#2D2D2B]/50 mb-6">
                <Link to="/" className="hover:text-[#2D2D2B]">Home</Link>
                <span className="mx-2">/</span>
                <Link to="/services" className="hover:text-[#2D2D2B]">Services</Link>
                <span className="mx-2">/</span>
                <span className="text-[#2D2D2B]">Nano Brows</span>
              </nav>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D2D2B]/10 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-[#2D2D2B]" />
                <span className="text-sm font-medium text-[#2D2D2B] uppercase tracking-wider">Ultra-Fine Digital Precision</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
                Nano Brows in Annandale, VA
              </h1>
              <p className="text-lg md:text-xl text-[#2D2D2B]/80 max-w-3xl mx-auto mb-4">
                Hyper-realistic hair strokes using a single nano needle (0.18mm) and digital machine precision. The modern evolution of microblading — gentler, longer-lasting, and better for all skin types.
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
                  <div className="text-2xl font-bold text-[#2D2D2B] mb-1">12-24</div>
                  <div className="text-xs text-[#2D2D2B]/60 uppercase">Month Longevity</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2D2D2B] mb-1">0.18mm</div>
                  <div className="text-xs text-[#2D2D2B]/60 uppercase">Nano Needle</div>
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
                  See Healed Results
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* What Are Nano Brows */}
        <section className="py-20 bg-white">
          <div className="container-custom max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-[#2D2D2B] mb-6 text-center">
                What Are Nano Brows?
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>Nano brows</strong> (also called nano needle brows or machine hair strokes) are an advanced form of semi-permanent eyebrow tattooing that uses a <strong>single ultra-fine needle (0.18mm)</strong> on a digital PMU machine to create incredibly realistic, hair-like strokes that mimic your natural brow hairs.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Unlike traditional microblading which uses a handheld blade to cut strokes into the skin, nano brows use precise digital oscillation to <em>implant</em> pigment without cutting. This results in <strong>less skin trauma, faster healing, crisper strokes, and significantly longer retention</strong> — especially in the DMV's humid climate.
                </p>

                <div className="bg-[#E6DAD2]/15 border-l-4 border-[#2D2D2B] p-6 rounded-r-lg mb-8">
                  <h3 className="text-xl font-semibold text-[#2D2D2B] mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5" /> Why Nano Brows Are the Future of Brow PMU
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The beauty industry is shifting away from microblading toward nano needle techniques. The reason is simple: nano brows offer the same natural hair-stroke look with <strong>50% less skin trauma, 2× longer retention, and compatibility with all skin types</strong> — including the oily and combination skin that makes up 65% of our Northern Virginia clientele.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-10">
                <div className="bg-[#F9F7F5] p-6 rounded-2xl border border-gray-100">
                  <Droplets className="w-10 h-10 text-[#2D2D2B] mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-[#2D2D2B]">All Skin Types Welcome</h3>
                  <p className="text-gray-600 text-sm">Works beautifully on oily, dry, combination, mature, and sensitive skin — unlike microblading which is limited to dry skin.</p>
                </div>
                <div className="bg-[#F9F7F5] p-6 rounded-2xl border border-gray-100">
                  <Sun className="w-10 h-10 text-[#2D2D2B] mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-[#2D2D2B]">DMV Climate-Proof</h3>
                  <p className="text-gray-600 text-sm">Digital precision deposit resists Northern Virginia's 45-85% humidity range that causes microblading strokes to blur and fade.</p>
                </div>
                <div className="bg-[#F9F7F5] p-6 rounded-2xl border border-gray-100">
                  <Heart className="w-10 h-10 text-[#2D2D2B] mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-[#2D2D2B]">Gentler on Skin</h3>
                  <p className="text-gray-600 text-sm">No blade cuts. The nano needle implants pigment precisely without the micro-cuts that cause scarring and stroke migration over time.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Nano Brows vs Microblading vs Ombre — Comparison Table */}
        <section className="py-20 bg-[#F9F7F5]">
          <div className="container-custom max-w-5xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-[#2D2D2B] text-center mb-4">
                Nano Brows vs Microblading vs Ombre Powder Brows
              </h2>
              <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
                A side-by-side comparison to help you choose the right technique for your skin type and lifestyle.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm md:text-base">
                  <thead>
                    <tr className="bg-[#2D2D2B] text-white">
                      <th className="p-4 text-left font-semibold">Feature</th>
                      <th className="p-4 text-center font-semibold">Microblading</th>
                      <th className="p-4 text-center font-semibold bg-[#E6DAD2] text-[#2D2D2B]">Nano Brows ⭐</th>
                      <th className="p-4 text-center font-semibold">Ombre Powder</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F9F7F5]'}>
                        <td className="p-4 font-medium text-[#2D2D2B]">{row[0]}</td>
                        <td className="p-4 text-center text-[#2D2D2B]/70">{row[1]}</td>
                        <td className="p-4 text-center text-[#2D2D2B] font-medium bg-[#E6DAD2]/10">{row[2]}</td>
                        <td className="p-4 text-center text-[#2D2D2B]/70">{row[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">
                Not sure which is right for you? <Link to="/booking" className="text-[#2D2D2B] font-medium underline">Book a free consultation</Link> and we'll recommend based on your skin type and goals.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Ideal Candidate */}
        <section className="py-20 bg-white">
          <div className="container-custom max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-[#2D2D2B] text-center mb-10">
                Who Is a Perfect Candidate for Nano Brows?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Eye, text: 'You love the natural hair-stroke look but want it to actually last' },
                  { icon: Droplets, text: 'You have oily or combination skin (where microblading fails)' },
                  { icon: Sun, text: 'You live an active lifestyle in the DMV humidity' },
                  { icon: Users, text: 'You have sparse, thin, or over-plucked brows needing fullness' },
                  { icon: Heart, text: 'You had microblading that faded too quickly and want a longer-lasting option' },
                  { icon: Shield, text: 'You want a gentler procedure with faster healing than microblading' },
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
                Your Nano Brow Journey: Step by Step
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                A transparent, unrushed process designed for your comfort and confidence.
              </p>

              <div className="space-y-8">
                {processSteps.map((step, i) => (
                  <div key={i} id={`step-${step.step}`} className="flex flex-col md:flex-row gap-6 items-start">
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
                    <Star className="w-4 h-4" />
                    <span className="text-sm font-bold uppercase tracking-wide">Premium Service</span>
                  </div>
                  <h3 className="text-4xl font-cormorant font-bold mb-2">$650</h3>
                  <p className="text-lg text-white/80">Complete Nano Brows Experience</p>
                </div>

                <div className="p-8">
                  <h4 className="text-xl font-semibold text-[#2D2D2B] mb-4">Everything Included:</h4>
                  <div className="space-y-3 mb-6">
                    {[
                      { name: 'Complimentary Design Consultation', detail: 'Face mapping, skin analysis, shape approval' },
                      { name: 'Full 2-3 Hour Procedure', detail: 'Single nano needle, premium vegan pigments' },
                      { name: 'Hospital-Grade Aftercare Kit', detail: '$75 value — everything for optimal healing' },
                      { name: '24/7 Text Support During Healing', detail: 'Direct artist access for questions & peace of mind' },
                      { name: '6-Week Perfecting Touch-Up', detail: 'Fine-tune strokes, enhance density, seal retention' },
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
                    <h4 className="font-semibold text-[#2D2D2B] mb-2">Price Comparison:</h4>
                    <p>• <strong>Ink Mugi (Annandale):</strong> $650 all-inclusive</p>
                    <p>• <strong>Arlington / DC studios:</strong> $800-$1,200</p>
                    <p>• <strong>Tysons / McLean studios:</strong> $900-$1,500</p>
                  </div>

                  <div className="text-center">
                    <a
                      href="https://www.vagaro.com/inkmugi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#2D2D2B] hover:bg-[#1a1a19] text-white font-semibold px-8 py-4 rounded-full transition-all"
                    >
                      Request Consultation <ArrowRight className="w-5 h-5" />
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
                Nano Brows FAQ
              </h2>
              <p className="text-center text-gray-600 mb-10">
                Evidence-based answers to the most common questions about nano brows.
              </p>

              <InlineFaqAccordion
                title=""
                subtitle=""
                maxVisible={8}
                faqs={faqs}
              />
            </AnimatedSection>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-white">
          <div className="container-custom max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-2xl font-cormorant font-medium text-[#2D2D2B] text-center mb-8">
                Explore Related Services
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/signature-ombre-brows" className="block p-5 bg-[#F9F7F5] rounded-xl border border-gray-100 hover:shadow-md transition-all">
                  <h3 className="font-medium text-[#2D2D2B] mb-1">Ombre Powder Brows</h3>
                  <p className="text-sm text-gray-500">Soft makeup-like gradient. Best for oily skin. From $600.</p>
                </Link>
                <Link to="/microshading-artistry" className="block p-5 bg-[#F9F7F5] rounded-xl border border-gray-100 hover:shadow-md transition-all">
                  <h3 className="font-medium text-[#2D2D2B] mb-1">Microshading Artistry</h3>
                  <p className="text-sm text-gray-500">Delicate dot-work for ultra-natural finish. From $700.</p>
                </Link>
                <Link to="/pmu-correction-restoration" className="block p-5 bg-[#F9F7F5] rounded-xl border border-gray-100 hover:shadow-md transition-all">
                  <h3 className="font-medium text-[#2D2D2B] mb-1">PMU Correction</h3>
                  <p className="text-sm text-gray-500">Fix botched microblading or faded PMU work. Consultation required.</p>
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
                <p className="font-semibold text-sm">523+ Procedures</p>
                <p className="text-xs text-white/60">Documented Results</p>
              </div>
              <div>
                <Star size={24} className="mx-auto mb-2 text-[#E6DAD2]" />
                <p className="font-semibold text-sm">97% Satisfaction</p>
                <p className="text-xs text-white/60">Client Reported</p>
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
                <strong className="text-[#2D2D2B]/50">Nano Brows at Ink Mugi — Annandale, VA</strong> — Professional nano brows, nano needle eyebrows, and digital hair stroke permanent makeup in Annandale, Virginia. The modern alternative to microblading with superior retention and gentler application. Virginia licensed (#1231002471) and fully insured PMU artist.
              </p>
              <p>
                Related searches: nano brows near me, nano brows Northern Virginia, nano brows vs microblading, nano needle brows Annandale, machine hair strokes VA, digital microblading alternative, permanent eyebrow hair strokes, nano brows for oily skin, nano brows cost Northern Virginia, nano brows healing process, nano brows before and after, best nano brows DMV, nano brows Arlington VA, nano brows Alexandria VA, nano brows Fairfax.
              </p>
              <p>
                Serving clients from: Annandale, Arlington, Alexandria, Fairfax, McLean, Tysons Corner, Falls Church, Springfield, Vienna, Great Falls, Reston, Centreville, Chantilly, Herndon, Burke, Woodbridge, Manassas, and Washington DC metro area.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NanoBrows;
