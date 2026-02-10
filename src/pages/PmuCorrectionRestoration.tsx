import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Star, CheckCircle, Award, Shield, ArrowRight, Phone, AlertTriangle, RefreshCw, Sparkles, Heart } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import InlineFaqAccordion from '../components/InlineFaqAccordion';

const PmuCorrectionRestoration: React.FC = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "PMU Correction & Restoration",
    "description": "Professional permanent makeup correction and restoration service. Fix botched microblading, faded brows, uneven permanent makeup, and discolored eyebrow tattoos using advanced ombre powder technique.",
    "url": "https://www.inkmugi.com/pmu-correction-restoration",
    "image": "https://www.inkmugi.com/og-image.jpg",
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
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Northern Virginia"
      }
    },
    "serviceType": "PMU Correction & Restoration",
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Northern Virginia"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Correction Consultation",
        "price": "150",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "name": "Minor Correction",
        "price": "400",
        "priceCurrency": "USD",
        "description": "Color refresh, slight shape adjustment"
      },
      {
        "@type": "Offer",
        "name": "Major Correction",
        "price": "600",
        "priceCurrency": "USD",
        "description": "Full color correction and reshape"
      },
      {
        "@type": "Offer",
        "name": "Complete Cover-Up & Redesign",
        "price": "700",
        "priceCurrency": "USD"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can botched microblading be fixed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In most cases, yes. Ombre powder technique can cover faded, patchy, or discolored microblading. Severe cases may need saline removal first. A consultation determines the best approach."
        }
      },
      {
        "@type": "Question",
        "name": "How much does PMU correction cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "$400-900 depending on complexity. The $150 consultation fee is credited toward your correction. All prices include one follow-up touch-up."
        }
      },
      {
        "@type": "Question",
        "name": "How many sessions does correction take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Minor corrections (color refresh, slight shape adjustment) are typically 1 session. Major corrections with color neutralization may take 2-3 sessions spaced 6-8 weeks apart."
        }
      },
      {
        "@type": "Question",
        "name": "Does Mugi offer saline removal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Currently, Mugi focuses on corrective work using the ombre powder technique. For cases requiring saline or laser removal, she'll refer you to trusted partners in the DMV area."
        }
      },
      {
        "@type": "Question",
        "name": "Can old eyebrow tattoos be corrected?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Even older cosmetic tattoos can often be corrected with modern ombre powder technique. Color neutralization addresses grey, blue, or orange undertones. Results vary based on tattoo depth."
        }
      },
      {
        "@type": "Question",
        "name": "What if my brows can't be corrected?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mugi will tell you at the consultation. Honesty is core to our practice. If removal is needed first, we'll provide referrals and a timeline for when correction work can begin."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.inkmugi.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.inkmugi.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "PMU Correction & Restoration",
        "item": "https://www.inkmugi.com/pmu-correction-restoration"
      }
    ]
  };

  const commonIssues = [
    { icon: <RefreshCw className="w-7 h-7 text-amber-700" />, title: 'Faded or Patchy Microblading', description: 'Microblading strokes that have blurred, faded unevenly, or left patchy gaps — leaving brows looking incomplete.' },
    { icon: <AlertTriangle className="w-7 h-7 text-amber-700" />, title: 'Brows That Are Too Dark or Bold', description: 'Permanent makeup that came out darker, thicker, or bolder than expected — overpowering your natural features.' },
    { icon: <Sparkles className="w-7 h-7 text-amber-700" />, title: 'Uneven or Asymmetrical Brows', description: 'One brow higher, thicker, or shaped differently than the other — creating a visibly imbalanced look.' },
    { icon: <Heart className="w-7 h-7 text-amber-700" />, title: 'Wrong Shape or Arch Position', description: 'An arch that\'s too high, too far out, or a shape that just doesn\'t suit your face structure.' },
    { icon: <Shield className="w-7 h-7 text-amber-700" />, title: 'Discolored Brows', description: 'Brows that have shifted to grey, blue, orange, or reddish undertones over time — a common issue with aging pigments.' },
    { icon: <RefreshCw className="w-7 h-7 text-amber-700" />, title: 'Old Eyebrow Tattoos Needing a Refresh', description: 'Older cosmetic tattoos that look dated, blocky, or have lost their definition and need modernizing.' },
  ];

  const correctionSteps = [
    { step: 1, title: 'Assessment Consultation ($150)', description: 'In-person evaluation of your existing PMU, skin analysis, and an honest assessment of what\'s achievable. The $150 consultation fee is credited toward your correction if you proceed.' },
    { step: 2, title: 'Custom Correction Plan', description: 'A detailed plan based on your existing pigment color & depth, skin type, and desired outcome. May involve color correction, shape adjustment, or a full cover-up strategy.' },
    { step: 3, title: 'Correction Procedure', description: 'Using the ombre powder technique to neutralize unwanted undertones and build new, natural-looking brows tailored to your face. Sessions typically take 2-3 hours.' },
    { step: 4, title: 'Follow-Up & Refinement', description: 'A 6-8 week follow-up appointment to assess healing and make any refinements. Some corrections require 2-3 sessions for optimal results.' },
  ];

  const pricingTiers = [
    { name: 'Correction Consultation', price: '$150', note: 'Credited toward procedure', description: 'In-person evaluation, skin analysis, honest assessment of what\'s achievable, and a custom correction plan.' },
    { name: 'Minor Correction', price: '$400–500', note: '', description: 'Color refresh, slight shape adjustment, evening out faded areas. Ideal for relatively recent PMU that needs fine-tuning.' },
    { name: 'Major Correction', price: '$600–800', note: '', description: 'Full color correction and reshape. For brows with significant discoloration, wrong shape, or uneven work.' },
    { name: 'Complete Cover-Up & Redesign', price: '$700–900', note: '', description: 'Total transformation — neutralizing old pigment and creating entirely new brows from scratch.' },
  ];

  const testimonials = [
    { name: 'Sarah K.', text: 'I had microblading done at a Groupon deal studio. It turned grey and patchy after 6 months. Mugi corrected everything — my brows now look natural and beautiful. I wish I went to her first.', rating: 5 },
    { name: 'Lisa P.', text: 'My old brow tattoo from 2019 had turned orange. Mugi color-corrected and reshaped them over 2 sessions. Best money I\'ve ever spent on my appearance.', rating: 5 },
    { name: 'Michelle R.', text: 'Went to another artist who left my brows uneven. Mugi fixed the asymmetry and the color in one session. I couldn\'t believe the difference.', rating: 5 },
  ];

  const faqs = [
    { question: 'Can botched microblading be fixed?', answer: 'In most cases, yes. The ombre powder technique can cover faded, patchy, or discolored microblading effectively. Severe cases may need saline removal first to lighten existing pigment before correction work can begin. A consultation determines the best approach for your specific situation.' },
    { question: 'How much does PMU correction cost?', answer: '$400–900 depending on complexity. The $150 consultation fee is credited toward your correction procedure. All pricing includes one follow-up touch-up appointment at 6-8 weeks. Final pricing is determined at your consultation based on the complexity of your case.' },
    { question: 'How many sessions does correction take?', answer: 'Minor corrections like color refresh or slight shape adjustment are typically completed in 1 session. Major corrections involving color neutralization (grey, blue, orange undertones) may take 2-3 sessions spaced 6-8 weeks apart for optimal results.' },
    { question: 'Does Mugi offer saline removal?', answer: 'Currently, Mugi focuses on corrective work using the advanced ombre powder technique. For cases that require saline or laser removal before correction, she\'ll refer you to trusted and vetted removal specialists in the Northern Virginia / DMV area.' },
    { question: 'Can old eyebrow tattoos be corrected?', answer: 'Yes! Even older cosmetic tattoos from years ago can often be corrected with the modern ombre powder technique. Color neutralization addresses grey, blue, or orange undertones that develop over time. Results vary based on the depth and type of existing tattoo pigment.' },
    { question: 'What if my brows can\'t be corrected?', answer: 'Mugi will tell you honestly at the consultation. Transparency is core to our practice — you\'ll never be sold a procedure that won\'t deliver results. If removal is needed first, we\'ll provide referrals to trusted partners and a timeline for when correction work can begin afterward.' },
  ];

  const crossLinks = [
    { label: 'Signature Ombre Brows', to: '/signature-ombre-brows' },
    { label: 'Microshading Artistry', to: '/microshading-artistry' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Aftercare Guide', to: '/aftercare-guide' },
    { label: 'All Services', to: '/services' },
    { label: 'About Mugi', to: '/about' },
    { label: 'Book Now', to: '/booking' },
    { label: 'FAQ', to: '/faq' },
  ];

  return (
    <>
      <Helmet>
        <title>PMU Correction & Restoration in Northern Virginia | Ink Mugi — Fix Botched Brows</title>
        <meta name="description" content="Fix botched microblading, faded brows & uneven permanent makeup. Ink Mugi's PMU correction service in Annandale, VA — 523+ procedures, VA-licensed. Correction consultations start at $150. Book today." />
        <link rel="canonical" href="https://www.inkmugi.com/pmu-correction-restoration" />
        <meta property="og:title" content="PMU Correction & Restoration in Northern Virginia | Ink Mugi" />
        <meta property="og:description" content="Fix botched microblading, faded brows & uneven permanent makeup. Expert PMU correction by Mugi in Annandale, VA. Consultations start at $150." />
        <meta property="og:url" content="https://www.inkmugi.com/pmu-correction-restoration" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-white to-orange-50 pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-700 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <nav className="flex items-center space-x-2 text-sm text-stone-500 mb-8">
              <Link to="/" className="hover:text-amber-700 transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-amber-700 transition-colors">Services</Link>
              <span>/</span>
              <span className="text-amber-700 font-medium">PMU Correction & Restoration</span>
            </nav>
          </AnimatedSection>

          <div className="max-w-3xl">
            <AnimatedSection>
              <div className="inline-flex items-center space-x-2 bg-amber-100/80 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <RefreshCw className="w-4 h-4" />
                <span>Corrective PMU Specialist</span>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-4 leading-tight">
                PMU Correction<br />
                <span className="text-amber-700">& Restoration</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection>
              <p className="text-xl md:text-2xl text-stone-600 font-light mb-4">
                Because You Deserve Better Brows
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed max-w-2xl">
                Bad permanent makeup happens — but it doesn't have to stay that way. Whether your brows are too dark, uneven, faded, or just not what you wanted, Mugi has the expertise to correct and restore them to something you'll love.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/booking"
                  className="inline-flex items-center justify-center space-x-2 bg-amber-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-amber-800 transition-all duration-300 shadow-lg shadow-amber-700/25 hover:shadow-xl hover:shadow-amber-700/30 hover:-translate-y-0.5"
                >
                  <span>Book Correction Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/gallery"
                  className="inline-flex items-center justify-center space-x-2 bg-white text-amber-700 border-2 border-amber-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-amber-50 transition-all duration-300"
                >
                  <span>View Before & Afters</span>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-stone-500">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-amber-700" />
                  <span>7857 Heritage Dr #330, Annandale, VA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-amber-700" />
                  <span>523+ Procedures Completed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-amber-700" />
                  <span>VA Licensed</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Common Issues We Fix */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
                Common Issues <span className="text-amber-700">We Fix</span>
              </h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                No matter what went wrong with your previous permanent makeup, there's usually a path to better brows. Here are the most common issues we correct.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commonIssues.map((issue, index) => (
              <AnimatedSection key={index}>
                <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                    {issue.icon}
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 mb-2">{issue.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{issue.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* The Correction Process */}
      <section className="py-20 bg-gradient-to-b from-amber-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
                The Correction <span className="text-amber-700">Process</span>
              </h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                Every correction starts with understanding what went wrong — and mapping the best path forward for your unique situation.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-8">
            {correctionSteps.map((step, index) => (
              <AnimatedSection key={index}>
                <div className="flex items-start gap-6 bg-white rounded-2xl p-6 md:p-8 border border-stone-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-700 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 mb-2">{step.title}</h3>
                    <p className="text-stone-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Before You Come In — Transparency Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-1">Before You Come In</h2>
                  <p className="text-stone-600">Honest expectations for your correction journey</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-700 mt-1 flex-shrink-0" />
                  <p className="text-stone-700 leading-relaxed">
                    <strong>Not all corrections are one-session fixes.</strong> Severe cases involving deep pigment or significant discoloration may need 2-3 sessions spaced 6-8 weeks apart for optimal results.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-700 mt-1 flex-shrink-0" />
                  <p className="text-stone-700 leading-relaxed">
                    <strong>Saline or laser removal may be recommended</strong> before correction work can begin. If existing pigment is too dark or too deep, removal is sometimes the safest first step.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-700 mt-1 flex-shrink-0" />
                  <p className="text-stone-700 leading-relaxed">
                    <strong>You'll get a realistic assessment at your consultation.</strong> Mugi will tell you exactly what's achievable — and what isn't. No false promises, no upselling.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-700 mt-1 flex-shrink-0" />
                  <p className="text-stone-700 leading-relaxed">
                    <strong>Results depend on several factors:</strong> existing pigment depth, pigment color, your skin type, and the quality of the previous work. Each case is truly unique.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
                Correction <span className="text-amber-700">Pricing</span>
              </h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                Transparent pricing for every level of correction. Final price is determined at your consultation based on complexity.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <AnimatedSection key={index}>
                <div className="bg-white rounded-2xl p-6 border border-stone-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-stone-900">{tier.name}</h3>
                    <span className="text-2xl font-bold text-amber-700">{tier.price}</span>
                  </div>
                  {tier.note && (
                    <span className="inline-block text-xs font-medium text-amber-700 bg-amber-50 px-3 py-1 rounded-full mb-3 w-fit">
                      {tier.note}
                    </span>
                  )}
                  <p className="text-stone-600 leading-relaxed flex-grow">{tier.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <p className="text-center text-sm text-stone-500 mt-8 max-w-xl mx-auto">
              All corrections include one follow-up touch-up appointment. Final pricing is determined at your in-person consultation based on the specific complexity of your case.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Trust Ink Mugi for Corrections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
                Why Trust Ink Mugi <span className="text-amber-700">for Corrections?</span>
              </h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                Corrective work requires a higher level of skill than first-time procedures. Here's why clients trust Mugi with their corrections.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100 h-full">
                <div className="w-14 h-14 bg-amber-700 rounded-xl flex items-center justify-center mb-5">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">523+ Procedures, Including Corrections</h3>
                <p className="text-stone-600 leading-relaxed">
                  Extensive experience with both fresh brows and corrective work. Understanding what went wrong with previous work is the key to getting it right the second time.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100 h-full">
                <div className="w-14 h-14 bg-amber-700 rounded-xl flex items-center justify-center mb-5">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">Honest Assessment, Always</h3>
                <p className="text-stone-600 leading-relaxed">
                  If a correction isn't the right solution, Mugi will tell you. Some clients need saline removal first — we'll refer you to trusted partners in the DMV area if that's the case.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100 h-full">
                <div className="w-14 h-14 bg-amber-700 rounded-xl flex items-center justify-center mb-5">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">VA Licensed, Premium Pigments</h3>
                <p className="text-stone-600 leading-relaxed">
                  Hospital-grade sanitization protocols and industry-leading pigments specifically designed for color correction work. Safety and quality are never compromised.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-amber-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
                Correction <span className="text-amber-700">Success Stories</span>
              </h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                Real clients who came to Mugi after unsatisfactory work elsewhere — and left with brows they love.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index}>
                <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-stone-600 leading-relaxed italic flex-grow mb-4">
                    "{testimonial.text}"
                  </p>
                  <p className="text-stone-900 font-semibold">— {testimonial.name}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <InlineFaqAccordion
              faqs={faqs}
              title="Correction & Restoration FAQs"
              subtitle="Answers to the most common questions about fixing botched, faded, or unsatisfactory permanent makeup."
              maxVisible={6}
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Cross-Links Section */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-3">
                Explore <span className="text-amber-700">More</span>
              </h2>
              <p className="text-stone-600">Learn more about our services and see our work</p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {crossLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="flex items-center justify-between bg-white rounded-xl px-5 py-4 border border-stone-200 hover:border-amber-300 hover:shadow-md transition-all duration-300 group"
                >
                  <span className="text-stone-700 font-medium group-hover:text-amber-700 transition-colors">{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-amber-700 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </AnimatedSection>
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

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-amber-700 to-amber-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-orange-300 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Love Your Brows Again?
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              You don't have to live with brows that make you self-conscious. Book a correction consultation and let Mugi show you what's possible.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center space-x-2 bg-white text-amber-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-amber-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>Book Correction Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+15712838228"
                className="inline-flex items-center justify-center space-x-2 bg-transparent text-white border-2 border-white/50 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>(571) 283-8228</span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

        {/* Semantic SEO Footer */}
        <section className="py-10 bg-[#F0E4D8]/30 border-t border-[#E6DAD2]/20">
          <div className="container-custom max-w-5xl mx-auto">
            <div className="text-xs text-[#2D2D2B]/40 leading-relaxed space-y-3">
              <p>
                <strong className="text-[#2D2D2B]/50">PMU Correction & Restoration at Ink Mugi — Annandale, VA</strong> — Professional permanent makeup correction, color neutralization, shape refinement, and brow restoration in Annandale, Virginia. Fix botched microblading, faded PMU, or previous cosmetic tattoo work. Virginia licensed (#1231002471) and fully insured PMU artist.
              </p>
              <p>
                Related searches: fix botched microblading near me, PMU correction Northern Virginia, eyebrow tattoo correction Annandale, microblading correction Arlington VA, permanent makeup fix DMV, color correction PMU, brow tattoo cover up, bad microblading fix, PMU restoration Alexandria, eyebrow tattoo shape correction, cosmetic tattoo repair Fairfax, brow color neutralization Virginia.
              </p>
              <p>
                Serving: Annandale, Arlington, Alexandria, Fairfax, McLean, Tysons Corner, Falls Church, Springfield, Vienna, Great Falls, Washington DC, and the greater Northern Virginia / DMV metro area.
              </p>
            </div>
          </div>
        </section>
    </>
  );
};

export default PmuCorrectionRestoration;
