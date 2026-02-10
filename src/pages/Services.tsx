import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, CheckCircle2, Shield, Award, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import CTASection from '../components/CTASection';
import InlineFaqAccordion from '../components/InlineFaqAccordion';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceSchema = {
    "@context": "https://schema.org",
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
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Annandale, VA"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Permanent Makeup Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Signature Brow Transformation",
            "description": "Includes 45-minute design + mapping consultation, custom brow plan, precision procedure, and perfecting session."
          },
          "price": "600",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Microshading Artistry",
            "description": "Delicate dot-work technique creating soft, powdered finish. Best for oily skin or those wanting minimal maintenance."
          },
          "price": "700",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Color Refresh Sessions",
            "description": "Maintain vibrancy after initial healing. Recommended every 18-36 months depending on skin type and lifestyle."
          },
          "price": "350",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Complimentary Consultation",
            "description": "Face mapping, portfolio review, and design preview. Zero pressure."
          },
          "price": "0",
          "priceCurrency": "USD"
        }
      ]
    }
  };

  const services = [
    {
      id: 1,
      title: 'Signature Brow Transformation',
      price: '$600',
      duration: 'Consultation required',
      description: 'Includes 45-minute design + mapping consultation, custom brow plan, precision procedure, and perfecting session. For women seeking predictable, natural healed results that age gracefully.',
      icon: <CheckCircle size={24} className="text-[#2D2D2B]" />,
      featured: true,
      features: ['45-min design + mapping', 'Shape approved before pigment', 'Perfecting session included', 'By consultation only']
    },
    {
      id: 2,
      title: 'Microshading Artistry',
      price: '$700',
      duration: 'Consultation required',
      description: 'Delicate dot-work technique creating soft, powdered finish. Best for oily skin or those wanting minimal maintenance. Heals softer than traditional ombre.',
      icon: <CheckCircle size={24} className="text-[#2D2D2B]" />,
      featured: true,
      features: ['Ultra-natural finish', 'Ideal for oily skin', 'Aftercare kit included', 'Premium vegan pigments']
    },
    {
      id: 4,
      title: 'Restoration & Correction',
      price: 'Consultation required',
      duration: '3-4 hours',
      description: 'Case-by-case correction of previous PMU work. Advanced color neutralization and shape refinement. Requires consultation to assess feasibility.',
      icon: <CheckCircle size={24} className="text-[#2D2D2B]" />,
      features: ['Color neutralization', 'Shape correction', 'Custom color matching', 'Assessment required']
    },
    {
      id: 6,
      title: 'Consultation',
      price: 'Complimentary',
      duration: '45 minutes',
      description: 'Meet me. Ask every question. See healed portfolio in person. We map your face and design together. Zero pressure—this is about your confidence, not my calendar.',
      icon: <CheckCircle size={24} className="text-[#2D2D2B]" />,
      features: ['Face mapping included', 'Review healed results', 'No obligation', 'Design preview']
    },
    {
      id: 7,
      title: 'Color Refresh Sessions',
      price: 'From $350',
      duration: '1.5-2 hours',
      description: 'Maintain vibrancy after initial healing. Recommended every 18-36 months depending on skin type and lifestyle. Keeps brows looking fresh.',
      icon: <CheckCircle size={24} className="text-[#2D2D2B]" />,
      features: ['Color boost only', 'No shape change', 'Quick healing', 'For existing clients']
    },
    {
      id: 8,
      title: 'Aftercare Support',
      price: 'Included',
      duration: 'First 6 weeks',
      description: 'Comprehensive aftercare kit, detailed healing guide, and text support during the critical healing period. You can reach me with any concern.',
      icon: <CheckCircle size={24} className="text-[#2D2D2B]" />,
      features: ['Premium healing kit', 'Written instructions', 'Text support access', 'Healing phase guidance']
    },
  ];

  return (
    <>
      <Helmet>
        <title>Ombre Powder Brows & PMU Services | Pricing & Process | Ink Mugi VA</title>
        <meta name="description" content="Ombre powder brows starting at $600 in Annandale, VA. Includes consultation, custom color matching, procedure & 6-week touch-up. See healed results from 523+ clients. Licensed & insured." />
        <meta name="keywords" content="permanent makeup services Annandale VA, ombre powder brows pricing, powder brows cost Northern Virginia, PMU services near me, brow transformation Annandale" />
        <link rel="canonical" href="https://www.inkmugi.com/services" />
        <meta property="og:title" content="Ombre Powder Brows & PMU Services | Ink Mugi Annandale VA" />
        <meta property="og:description" content="Premium ombre powder brows starting at $600. Includes consultation, procedure & touch-up. Licensed PMU artist in Annandale, VA." />
        <meta property="og:url" content="https://www.inkmugi.com/services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ombre Brows & PMU Services | Pricing | Ink Mugi VA" />
        <meta name="twitter:description" content="Ombre powder brows from $600. Consultation + procedure + touch-up included. Licensed artist, Annandale VA." />
        <meta name="twitter:image" content="https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is the procedure painful?",
                "acceptedAnswer": { "@type": "Answer", "text": "We use medical-grade topical numbing that takes effect in 20 minutes. Most clients rate discomfort at 2-3 out of 10—many fall asleep during the procedure. Your comfort is our priority, and we can apply additional numbing if needed." }
              },
              {
                "@type": "Question",
                "name": "How long do results last?",
                "acceptedAnswer": { "@type": "Answer", "text": "Ombre powder brows typically last 18-36 months depending on skin type, lifestyle, and sun exposure. Oily skin types may see faster fading. We recommend a color refresh every 18-24 months to maintain optimal vibrancy." }
              },
              {
                "@type": "Question",
                "name": "What if I don't like the shape?",
                "acceptedAnswer": { "@type": "Answer", "text": "You approve the exact shape on YOUR face before any pigment is applied. We map, measure, and adjust until you say \"perfect.\" Nothing permanent happens until you're 100% confident. This is a core part of our process." }
              },
              {
                "@type": "Question",
                "name": "How should I prepare for my appointment?",
                "acceptedAnswer": { "@type": "Answer", "text": "Avoid blood thinners (alcohol, aspirin) for 48 hours before, retinol products for 2 weeks prior, and caffeine on the day of your procedure. Arrive with clean brows and no makeup in the area." }
              },
              {
                "@type": "Question",
                "name": "How much do ombre powder brows cost?",
                "acceptedAnswer": { "@type": "Answer", "text": "Ombre powder brows at Ink Mugi start at $600, which includes the consultation, full procedure, aftercare kit, healing support, and 6-week perfecting touch-up. No hidden fees. Compare this to $800+ at Arlington and DC studios." }
              },
              {
                "@type": "Question",
                "name": "What is the difference between microblading and ombre powder brows?",
                "acceptedAnswer": { "@type": "Answer", "text": "Microblading creates hair-like strokes with a blade that can blur in humid climates like the DMV. Ombre powder brows use a machine stippling technique that deposits pigment more evenly, lasting 18-36 months vs 8-12 for microblading. Powder brows perform 340% better on oily skin." }
              },
              {
                "@type": "Question",
                "name": "Who should not get permanent makeup?",
                "acceptedAnswer": { "@type": "Answer", "text": "Permanent makeup is not recommended if you are currently pregnant or nursing, undergoing chemotherapy, have uncontrolled diabetes, keloid scarring tendency, or are on blood thinners. A consultation is required for autoimmune conditions." }
              },
              {
                "@type": "Question",
                "name": "How long is the healing process for powder brows?",
                "acceptedAnswer": { "@type": "Answer", "text": "The full healing cycle takes 6 weeks. Days 1-3: brows appear bold and dark. Days 4-10: scabbing and flaking phase—do not pick. Days 11-28: color appears lighter as skin regenerates. Weeks 4-6: true color emerges. A perfecting touch-up session is included at the 6-week mark." }
              }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.inkmugi.com" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.inkmugi.com/services" }
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#F0E4D8] via-[#E6DAD2] to-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-[#2D2D2B]/10 rounded-full">
              <span className="text-[#2D2D2B] font-medium text-sm uppercase tracking-wider">
                <CheckCircle2 size={12} className="inline-block mr-1" />
                Predictable Results
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              Premium PMU Services
            </h1>
            <p className="text-lg md:text-xl text-[#2D2D2B]/80 max-w-3xl mx-auto mb-4">
              Healed-first brow design with transparent pricing. Every service includes design consultation, 
              shape approval before pigment, and documented healing support.
            </p>
            <p className="text-sm text-[#2D2D2B]/60 max-w-2xl mx-auto">
              Serving McLean • Great Falls • Arlington • Potomac • Washington DC
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="section-title text-[#2D2D2B]">Service Menu</h2>
            <p className="section-subtitle text-[#2D2D2B]/80">
              Transparent pricing. Clear expectations. Final investment determined during consultation based on complexity.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={index + 1}>
                <div className="bg-white p-6 rounded-lg shadow-soft h-full border-b-4 border-[#E6DAD2] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
                  <div className="w-12 h-12 bg-[#2D2D2B]/10 rounded-full flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-medium text-[#2D2D2B]">{service.title}</h3>
                    <span className="text-[#2D2D2B] font-bold text-lg whitespace-nowrap ml-2">{service.price}</span>
                  </div>
                  <p className="text-[#2D2D2B]/60 text-sm mb-4">{service.duration}</p>
                  <p className="text-[#2D2D2B]/80 mb-6 flex-grow">
                    {service.description}
                  </p>
                  
                  {service.features && (
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2 text-sm text-[#2D2D2B]/70">
                          <CheckCircle2 size={14} className="text-[#E6DAD2] mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  <Link to="/booking" className="text-[#2D2D2B] font-medium hover:text-[#2D2D2B]/70 transition-colors inline-flex items-center mt-auto">
                    Request Consultation →
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-[#E6DAD2] to-[#F0E4D8]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="section-title text-[#2D2D2B]">The Process</h2>
            <p className="section-subtitle text-[#2D2D2B]/80">
              Four clear steps designed to address your concerns and deliver predictable results.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Consultation", desc: "Meet me. Ask every question. See healed portfolio. We map your face and design together. Zero pressure." },
              { title: "Design Approval", desc: "You see the exact shape on YOUR face before any pigment. We adjust until you're 100% confident." },
              { title: "Numbed Procedure", desc: "Medical-grade numbing applied. Most clients rate pain 2-3/10. Sessions are calm and unrushed." },
              { title: "Healing Support", desc: "Detailed aftercare kit, written guide, and text support during healing. I'll walk you through the 'too dark' phase." }
            ].map((step, index) => (
              <AnimatedSection key={index} delay={index + 1}>
                <div className="bg-white p-6 rounded-lg shadow-soft h-full">
                  <div className="w-12 h-12 bg-[#2D2D2B]/10 rounded-full flex items-center justify-center mb-4 text-[#2D2D2B] font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-[#2D2D2B]">{step.title}</h3>
                  <p className="text-[#2D2D2B]/80">
                    {step.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img 
                src="https://live.staticflickr.com/65535/54408531279_0e59fb1f6f_o_d.jpg" 
                alt="Brow Artistry Studio" 
                className="rounded-lg shadow-medium w-full h-auto object-cover"
              />
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <h2 className="section-title text-[#2D2D2B]">Why Choose InkMugi</h2>
              <p className="text-[#2D2D2B] mb-4">
                Premium ombre powder brows and microshading with a focus on predictable, natural healed results. 
                Every procedure documented with 6+ week healed photos.
              </p>
              <p className="text-[#2D2D2B]/80 mb-6 text-sm bg-[#F7EDE6] p-4 rounded-lg border-l-4 border-[#2D2D2B]">
                <strong>My commitment:</strong> You see healed work before booking. You approve the design before pigment. 
                You have support during healing.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle2 size={18} className="text-[#2D2D2B] mt-1 mr-2" />
                  <span className="text-[#2D2D2B]">Healed-first portfolio</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 size={18} className="text-[#2D2D2B] mt-1 mr-2" />
                  <span className="text-[#2D2D2B]">Design approved before pigment</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 size={18} className="text-[#2D2D2B] mt-1 mr-2" />
                  <span className="text-[#2D2D2B]">Premium vegan pigments</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 size={18} className="text-[#2D2D2B] mt-1 mr-2" />
                  <span className="text-[#2D2D2B]">Unrushed, calm sessions</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 size={18} className="text-[#2D2D2B] mt-1 mr-2" />
                  <span className="text-[#2D2D2B]">Complimentary consultation</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 size={18} className="text-[#2D2D2B] mt-1 mr-2" />
                  <span className="text-[#2D2D2B]">VA licensed & insured</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/booking" className="btn bg-[#2D2D2B] hover:bg-[#1a1a19] text-white">
                  Request Consultation
                </Link>
                <Link to="/gallery" className="btn btn-outline text-[#2D2D2B] border-[#2D2D2B] hover:bg-[#2D2D2B]/5">
                  View Healed Results
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Inline FAQ — Reduces exit-to-FAQ leakage */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <AnimatedSection>
              <InlineFaqAccordion
                title="Questions Before Booking?"
                subtitle="Answers from 500+ client experiences"
                maxVisible={4}
                faqs={[
                  {
                    question: 'Is the procedure painful?',
                    answer: 'We use medical-grade topical numbing that takes effect in 20 minutes. Most clients rate discomfort at 2-3 out of 10—many fall asleep during the procedure. Your comfort is our priority, and we can apply additional numbing if needed.'
                  },
                  {
                    question: 'How long do results last?',
                    answer: 'Ombre powder brows typically last 18-36 months depending on skin type, lifestyle, and sun exposure. Oily skin types may see faster fading. We recommend a color refresh every 18-24 months to maintain optimal vibrancy.'
                  },
                  {
                    question: 'What if I don\'t like the shape?',
                    answer: 'You approve the exact shape on YOUR face before any pigment is applied. We map, measure, and adjust until you say "perfect." Nothing permanent happens until you\'re 100% confident. This is a core part of our process.'
                  },
                  {
                    question: 'How should I prepare for my appointment?',
                    answer: 'Avoid blood thinners (alcohol, aspirin) for 48 hours before, retinol products for 2 weeks prior, and caffeine on the day of your procedure. Arrive with clean brows and no makeup in the area.'
                  },
                ]}
              />
            </AnimatedSection>
            <AnimatedSection delay={2}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#E6DAD2]/30">
                <h3 className="text-xl font-cormorant font-medium text-[#2D2D2B] mb-4">
                  Still have questions?
                </h3>
                <p className="text-[#2D2D2B]/70 mb-6">
                  Our FAQ page covers everything from the healing timeline to pricing details and aftercare instructions.
                </p>
                <Link 
                  to="/faq" 
                  className="inline-flex items-center gap-2 text-[#2D2D2B] font-medium hover:gap-3 transition-all duration-300"
                >
                  <span>View complete FAQ</span>
                  <ArrowRight size={16} />
                </Link>

                <div className="mt-8 pt-6 border-t border-[#E6DAD2]/30">
                  <p className="text-sm text-[#2D2D2B]/60 mb-4">Or schedule a free consultation to ask in person:</p>
                  <Link 
                    to="/booking" 
                    className="inline-flex items-center gap-2 bg-[#2D2D2B] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#2D2D2B]/90 transition-colors"
                  >
                    Request Consultation
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />

      {/* Technique Comparison — Featured Snippet Target */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="section-title text-[#2D2D2B] text-center mb-4">Microblading vs Ombre Powder Brows vs Microshading</h2>
            <p className="text-center text-[#2D2D2B]/70 mb-10 max-w-2xl mx-auto">
              Not sure which technique is right for you? Here's a data-driven comparison based on 523+ procedures in the DMV.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm md:text-base">
                <thead>
                  <tr className="bg-[#2D2D2B] text-white">
                    <th className="p-4 text-left font-semibold">Feature</th>
                    <th className="p-4 text-center font-semibold">Microblading</th>
                    <th className="p-4 text-center font-semibold bg-[#E6DAD2] text-[#2D2D2B]">Ombre Powder Brows ⭐</th>
                    <th className="p-4 text-center font-semibold">Microshading</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Technique', 'Hair-stroke blade cuts', 'Machine stippling gradient', 'Dot-work powder finish'],
                    ['Longevity', '8-12 months', '18-36 months', '12-24 months'],
                    ['Best Skin Type', 'Dry skin only', 'All skin types', 'Oily & sensitive skin'],
                    ['DMV Humidity Performance', 'Poor — strokes blur', 'Excellent — humidity resistant', 'Good — minimal fading'],
                    ['Oily Skin Performance', '❌ Strokes spread', '✅ 340% better retention', '✅ Ideal for oily skin'],
                    ['Healed Appearance', 'Hair-like strokes', 'Soft makeup gradient', 'Soft powder finish'],
                    ['Pain Level', '4-6/10', '2-3/10', '2-3/10'],
                    ['Healing Time', '6-8 weeks', '4-6 weeks', '4-6 weeks'],
                    ['Touch-up Frequency', 'Every 8-12 months', 'Every 18-24 months', 'Every 12-18 months'],
                    ['Cost (DMV Average)', '$400-$700', '$500-$900', '$600-$800'],
                    ['Ink Mugi Price', 'Not offered', '$600 (all-inclusive)', '$700 (all-inclusive)'],
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-[#F9F7F5]' : 'bg-white'}>
                      <td className="p-4 font-medium text-[#2D2D2B]">{row[0]}</td>
                      <td className="p-4 text-center text-[#2D2D2B]/70">{row[1]}</td>
                      <td className="p-4 text-center text-[#2D2D2B] font-medium bg-[#E6DAD2]/10">{row[2]}</td>
                      <td className="p-4 text-center text-[#2D2D2B]/70">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Snippet: "How long do powder brows last" */}
      <section className="py-16 bg-[#F9F7F5]">
        <div className="container-custom max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-cormorant font-medium text-[#2D2D2B] mb-4">
              How Long Do Powder Brows Last?
            </h2>
            <p className="text-lg text-[#2D2D2B]/80 leading-relaxed mb-6">
              Ombre powder brows last <strong>18 to 36 months</strong> with an average longevity of 24 months. Results vary based on skin type, sun exposure, skincare routine, and the DMV's variable humidity (45-85%). Oily skin types typically see 18-24 months; dry skin types often reach 30-36 months. A color refresh every 18-24 months maintains optimal vibrancy.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Snippet: "Who should not get microblading" */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-cormorant font-medium text-[#2D2D2B] mb-4">
              Who Should Not Get Microblading or Permanent Makeup?
            </h2>
            <p className="text-[#2D2D2B]/80 mb-4">Permanent makeup is not recommended for individuals who are:</p>
            <ul className="space-y-3 mb-6">
              {[
                'Currently pregnant or nursing',
                'Undergoing chemotherapy or radiation treatment',
                'Living with uncontrolled diabetes',
                'Prone to keloid scarring',
                'Taking blood thinners (including high-dose aspirin)',
                'Under 18 years of age',
                'Currently experiencing active skin conditions (eczema, psoriasis, dermatitis) in the brow area',
                'Using Accutane or isotretinoin (must be off for 12+ months)',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#2D2D2B]/80">
                  <Shield size={16} className="text-[#2D2D2B] mt-1 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-[#2D2D2B]/60">
              If you have an autoimmune condition, consult with your physician first and bring a doctor's clearance to your consultation. We prioritize your safety above all else.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Credential & Safety Bar */}
      <section className="py-12 bg-[#2D2D2B] text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <Award size={28} className="mx-auto mb-2 text-[#E6DAD2]" />
              <p className="font-semibold text-sm">VA Licensed</p>
              <p className="text-xs text-white/60">#1231002471</p>
            </div>
            <div>
              <Shield size={28} className="mx-auto mb-2 text-[#E6DAD2]" />
              <p className="font-semibold text-sm">Liability Insured</p>
              <p className="text-xs text-white/60">Full Coverage</p>
            </div>
            <div>
              <CheckCircle size={28} className="mx-auto mb-2 text-[#E6DAD2]" />
              <p className="font-semibold text-sm">523+ Procedures</p>
              <p className="text-xs text-white/60">Documented Results</p>
            </div>
            <div>
              <ArrowRight size={28} className="mx-auto mb-2 text-[#E6DAD2]" />
              <p className="font-semibold text-sm">0.19% Complications</p>
              <p className="text-xs text-white/60">12× Below Industry Avg</p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Service Links Hub */}
      <section className="py-16 bg-[#F9F7F5]">
        <div className="container-custom max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-cormorant font-medium text-[#2D2D2B] mb-6 text-center">
              Explore Our Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Signature Ombre Brows', desc: 'Our flagship 2,500+ word guide to ombre powder brows', href: '/signature-ombre-brows' },
                { title: 'Microshading Artistry', desc: 'Soft dot-work technique ideal for oily & sensitive skin', href: '/microshading-artistry' },
                { title: 'PMU Correction & Restoration', desc: 'Fix botched microblading, color corrections & cover-ups', href: '/pmu-correction-restoration' },
                { title: 'Nano Brows', desc: 'Ultra-fine hair-stroke technique for natural results', href: '/nano-brows' },
                { title: 'Saline Tattoo Removal', desc: 'Non-laser PMU removal using Li-FT® saline solution', href: '/saline-tattoo-removal' },
                { title: 'Aftercare Guide', desc: 'Complete healing instructions for all PMU procedures', href: '/aftercare-guide' },
              ].map((link, i) => (
                <Link
                  key={i}
                  to={link.href}
                  className="block p-4 bg-white rounded-lg border border-[#E6DAD2]/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <h3 className="font-medium text-[#2D2D2B] mb-1 flex items-center gap-2">
                    {link.title} <ArrowRight size={14} className="text-[#E6DAD2]" />
                  </h3>
                  <p className="text-sm text-[#2D2D2B]/60">{link.desc}</p>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Semantic SEO Footer */}
      <section className="py-12 bg-[#F0E4D8]/30 border-t border-[#E6DAD2]/20">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="text-xs text-[#2D2D2B]/40 leading-relaxed space-y-3">
            <p>
              <strong className="text-[#2D2D2B]/50">Ink Mugi Permanent Makeup Services</strong> — Professional ombre powder brows, microshading, nano brows, and PMU correction services in Annandale, VA. Serving Northern Virginia including Arlington, Alexandria, Fairfax, McLean, Tysons Corner, Falls Church, Springfield, Vienna, Great Falls, and Washington DC. Virginia licensed (#1231002471) and fully insured PMU artist specializing in semi-permanent eyebrow tattooing, cosmetic tattooing, and brow restoration.
            </p>
            <p>
              Related services: permanent makeup near me, eyebrow tattoo Annandale VA, ombre brows Northern Virginia, powder brows Fairfax County, microblading alternative DMV, semi permanent brows Arlington, cosmetic tattooing Alexandria, brow lamination alternative, eyebrow embroidery Virginia, PMU artist near me, permanent eyebrows DC metro, lip blushing Northern Virginia, saline tattoo removal Virginia, beauty enhancement Annandale.
            </p>
            <p>
              Neighborhoods served from 7857 Heritage Dr #330, Annandale VA 22003: Ravensworth, Woodburn, Pinecrest, Barcroft, Lake Barcroft, Kings Park, Mantua, Wakefield, North Springfield, West Springfield, Burke, Annandale Terrace, Columbia Pike corridor, Baileys Crossroads, Seven Corners.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;