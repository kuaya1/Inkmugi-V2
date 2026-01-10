import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, Award, Droplets, TrendingUp, CheckCircle, Phone, Calendar, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const PermanentMakeupSafetyDMV: React.FC = () => {
  const safetyPillars = [
    {
      icon: Award,
      title: 'State Licensing & Certification',
      description: 'Virginia Licensed Permanent Cosmetic Tattooer (#1231002471). Licensed by the Virginia Board for Barbers and Cosmetology. Bloodborne Pathogens Certification renewed annually. Our credentials are non-negotiable and verifiable.'
    },
    {
      icon: Shield,
      title: 'Hospital-Grade Sterilization',
      description: 'Single-use, individually packaged needles for every client. Medical-grade CaviWipes and EPA-registered disinfectants. All equipment sterilized following CDC guidelines. Zero cross-contamination protocols.'
    },
    {
      icon: Droplets,
      title: 'Premium, Hypoallergenic Pigments',
      description: 'We exclusively use vegan, gamma-ray sterilized pigments from certified suppliers. All pigments are hypoallergenic, free from heavy metals, and formulated for optimal skin compatibility. No compromise on quality.'
    },
    {
      icon: TrendingUp,
      title: 'Data-Driven Protocols',
      description: 'Every procedure is documented and analyzed. Our protocols are continuously refined based on data from 523+ successful transformations since 2021. Evidence-based practices ensure superior outcomes.'
    }
  ];

  const credentials = [
    {
      name: 'Virginia Board for Barbers and Cosmetology',
      license: 'Permanent Cosmetic Tattooer License: #1231002471',
      status: 'Active & Current'
    },
    {
      name: 'Bloodborne Pathogens Certification',
      license: 'Annually Renewed Training',
      status: 'Compliant with OSHA Standards'
    }
  ];

  const safetyFaqs = [
    {
      question: 'What sterilization protocols do you follow?',
      answer: 'We follow hospital-grade sterilization protocols that exceed industry standards. Every needle is single-use and individually packaged. All equipment is sterilized using medical-grade autoclaves. Surfaces are disinfected with EPA-registered CaviWipes before and after each procedure. We maintain a sterile field throughout the entire procedure, following CDC guidelines for infection control.'
    },
    {
      question: 'Are your pigments safe for all skin types?',
      answer: 'Yes. We exclusively use premium, vegan, hypoallergenic pigments that are gamma-ray sterilized and free from heavy metals. Our pigments are formulated specifically for permanent makeup applications and are safe for all skin types, including sensitive skin. All pigments come from certified suppliers and meet the highest safety standards in the industry.'
    },
    {
      question: 'How do you minimize the risk of complications?',
      answer: 'Our 0.19% complication rate (compared to the 2.5% industry average) is achieved through multiple safeguards: thorough pre-procedure consultations to identify contraindications, strict adherence to sterilization protocols, use of premium materials, precise technique refined over 523+ procedures, comprehensive aftercare instructions, and 24/7 post-procedure support. Every client receives detailed guidance on proper healing.'
    },
    {
      question: 'What makes Ink Mugi safer than other studios?',
      answer: 'Our safety advantage comes from three key factors: (1) State licensing and annual bloodborne pathogens certification, (2) Data-driven approach with documented outcomes from 523+ procedures, and (3) Investment in premium materials and hospital-grade equipment. We don\'t cut corners. Your safety is our highest priority, reflected in our complication rate being 13x lower than the industry average.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Permanent Makeup Safety Guide | Ink Mugi</title>
        <meta 
          name="description" 
          content="Learn about permanent makeup from a licensed artist at Ink Mugi. Understand the process, healing, and what to expect before treatment." 
        />
        <meta 
          name="keywords" 
          content="permanent makeup safety DMV, licensed PMU artist Virginia, hospital-grade PMU studio Northern Virginia, PMU complication rate statistics, sterile PMU procedure Annandale, bloodborne pathogens certified PMU, vegan pigments permanent makeup, hypoallergenic PMU Arlington Alexandria, PMU safety protocols Fairfax County, Virginia licensed cosmetic tattooer" 
        />
        <link rel="canonical" href="https://www.inkmugi.com/permanent-makeup-safety-dmv" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="PMU Safety in Northern Virginia | Licensed & Hospital-Grade | Ink Mugi" />
        <meta property="og:description" content="Virginia-licensed PMU studio with 0.19% complication rate vs 2.5% industry average. Hospital-grade sterilization, premium vegan pigments, 523+ documented procedures." />
        <meta property="og:url" content="https://www.inkmugi.com/permanent-makeup-safety-dmv" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.inkmugi.com/og-safety-trust.jpg" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PMU Safety in Northern Virginia | Licensed & Hospital-Grade | Ink Mugi" />
        <meta name="twitter:description" content="0.19% complication rate vs 2.5% industry average. Virginia-licensed, hospital-grade protocols, 523+ procedures documented." />
        <meta name="twitter:image" content="https://www.inkmugi.com/og-safety-trust.jpg" />

        {/* Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HealthAndBeautyBusiness",
            "@id": "https://www.inkmugi.com/#business",
            "name": "Ink Mugi",
            "url": "https://www.inkmugi.com/",
            "logo": "https://www.inkmugi.com/logo.png",
            "image": "https://www.inkmugi.com/og-safety-trust.jpg",
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
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section - Professional Standard with Visual Impact */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background with subtle pattern overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2D2D2B] via-[#3A3A38] to-[#2D2D2B]"></div>
          
          {/* Subtle grid pattern for clinical precision feel */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>

          {/* Animated particles for data/science feel */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#E6DAD2] rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-[#E6DAD2] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
          </div>
          
          <div className="container-custom relative z-10">
            <AnimatedSection className="text-center max-w-5xl mx-auto">
              {/* License Badge - Enhanced */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-white/20 mb-8">
                <Shield className="w-5 h-5 text-[#E6DAD2]" />
                <span className="text-sm font-medium text-white">
                  Virginia Licensed #1231002471
                </span>
                <span className="px-2 py-0.5 bg-green-500 text-white text-xs font-bold rounded-full ml-2">
                  VERIFIED
                </span>
              </div>

              <h1 className="mb-8">
                <div className="text-5xl md:text-7xl font-cormorant font-light leading-tight mb-3 text-white">
                  Your Safety is Our
                </div>
                <div className="text-5xl md:text-7xl font-cormorant font-medium leading-tight text-[#E6DAD2]">
                  Highest Standard
                </div>
              </h1>
              
              <p className="text-xl md:text-2xl mb-4 text-[#E6DAD2]/90 font-light italic">
                A Data-Driven Approach to Permanent Makeup in the DMV
              </p>
              
              <p className="text-lg mb-12 text-white/80 leading-relaxed max-w-3xl mx-auto">
                Hospital-grade protocols. State licensing. 13x safer than industry average. 
                Every decision we make prioritizes your well-being above all else.
              </p>

              {/* Trust Stats Grid - Enhanced with visual hierarchy */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-16">
                <div className="group bg-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="text-6xl md:text-7xl font-bold text-white mb-3 font-cormorant">0.19%</div>
                  <div className="text-sm uppercase tracking-widest text-[#E6DAD2] mb-2 font-semibold">Complication Rate</div>
                  <div className="text-xs text-white/60">vs 2.5% industry average</div>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="text-xs text-white/70">That's <strong className="text-green-400">13x safer</strong></div>
                  </div>
                </div>
                <div className="group bg-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="text-6xl md:text-7xl font-bold text-white mb-3 font-cormorant">523+</div>
                  <div className="text-sm uppercase tracking-widest text-[#E6DAD2] mb-2 font-semibold">Procedures Tracked</div>
                  <div className="text-xs text-white/60">Since 2021</div>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="text-xs text-white/70">Every outcome <strong className="text-[#E6DAD2]">documented</strong></div>
                  </div>
                </div>
                <div className="group bg-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="text-6xl md:text-7xl font-bold text-white mb-3 font-cormorant">97%</div>
                  <div className="text-sm uppercase tracking-widest text-[#E6DAD2] mb-2 font-semibold">Satisfaction Rate</div>
                  <div className="text-xs text-white/60">Documented outcomes</div>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="text-xs text-white/70"><strong className="text-[#E6DAD2]">4.9/5</strong> average rating</div>
                  </div>
                </div>
              </div>

              {/* Scroll indicator */}
              <div className="mt-16 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto flex items-start justify-center p-2">
                  <div className="w-1 h-3 bg-white/50 rounded-full"></div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* The Ink Mugi Safety Pillars Section - Enhanced Visual Design */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-[#F9F7F5] via-white to-[#F7EDE6]">
          <div className="container-custom">
            <AnimatedSection className="text-center mb-20">
              <div className="inline-block px-4 py-2 bg-[#2D2D2B]/5 rounded-full mb-6">
                <span className="text-sm uppercase tracking-widest text-[#2D2D2B]/60 font-semibold">Our Commitment</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-cormorant font-medium text-[#2D2D2B] mb-6">
                The Ink Mugi Safety Pillars
              </h2>
              <p className="text-lg md:text-xl text-[#2D2D2B]/70 max-w-3xl mx-auto leading-relaxed">
                Our commitment to your well-being is built on four uncompromising foundations
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
              {safetyPillars.map((pillar, index) => (
                <AnimatedSection 
                  key={index} 
                  delay={index * 100}
                  className="group relative bg-white p-10 md:p-12 rounded-3xl shadow-soft hover:shadow-2xl transition-all duration-500 border border-neutral-100 overflow-hidden"
                >
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E6DAD2]/10 to-transparent rounded-bl-full transform group-hover:scale-110 transition-transform duration-500"></div>
                  
                  <div className="relative flex items-start gap-6">
                    <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#E6DAD2] to-[#F0E4D8] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <pillar.icon className="w-10 h-10 text-[#2D2D2B]" />
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-2xl md:text-3xl font-cormorant font-medium text-[#2D2D2B] mb-4">
                        {pillar.title}
                      </h3>
                      <p className="text-[#2D2D2B]/70 leading-relaxed text-lg">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E6DAD2] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Data-Driven Transparency - Enhanced with Premium Visual Design */}
        <section className="py-24 md:py-32 bg-[#2D2D2B] text-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }}></div>

          <div className="container-custom relative z-10">
            <AnimatedSection className="text-center mb-20">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <span className="text-sm uppercase tracking-widest text-[#E6DAD2] font-semibold">The Proof</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-cormorant font-medium mb-6">
                The Numbers Don't Lie
              </h2>
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Our safety record speaks for itself. Data tracked from 523+ procedures since 2021.
              </p>
            </AnimatedSection>

            <div className="max-w-5xl mx-auto">
              <AnimatedSection className="bg-white rounded-3xl p-12 md:p-16 shadow-2xl">
                {/* Visual Comparison - Enhanced */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
                  {/* Ink Mugi */}
                  <div className="text-center">
                    <div className="text-sm uppercase tracking-widest text-[#2D2D2B]/60 mb-6 font-semibold">
                      Ink Mugi Complication Rate
                    </div>
                    <div className="relative mb-8">
                      <div className="text-8xl md:text-9xl font-bold text-green-600 mb-6 font-cormorant">
                        0.19%
                      </div>
                      <div className="relative h-6 bg-green-100 rounded-full overflow-hidden shadow-inner">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 rounded-full shadow-lg" style={{ width: '7.6%' }}></div>
                      </div>
                    </div>
                    <div className="bg-green-50 rounded-2xl p-6 border-2 border-green-200">
                      <div className="text-2xl font-bold text-green-900 mb-2">1 in 526</div>
                      <div className="text-sm text-green-700">procedures affected</div>
                    </div>
                  </div>

                  {/* Industry Average */}
                  <div className="text-center">
                    <div className="text-sm uppercase tracking-widest text-[#2D2D2B]/60 mb-6 font-semibold">
                      Industry Average
                    </div>
                    <div className="relative mb-8">
                      <div className="text-8xl md:text-9xl font-bold text-red-600 mb-6 font-cormorant">
                        2.5%
                      </div>
                      <div className="relative h-6 bg-red-100 rounded-full overflow-hidden shadow-inner">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 rounded-full shadow-lg" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    <div className="bg-red-50 rounded-2xl p-6 border-2 border-red-200">
                      <div className="text-2xl font-bold text-red-900 mb-2">1 in 40</div>
                      <div className="text-sm text-red-700">procedures affected</div>
                    </div>
                  </div>
                </div>

                {/* Comparison Stats - Enhanced */}
                <div className="border-t-2 border-neutral-200 pt-12">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-50 to-green-100 px-8 py-4 rounded-full border-2 border-green-300 shadow-lg">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <span className="text-xl font-semibold text-green-900">
                        13x Safer Than Industry Average
                      </span>
                    </div>
                  </div>
                  <p className="text-center text-[#2D2D2B]/70 leading-relaxed text-lg max-w-2xl mx-auto">
                    This exceptional safety record is achieved through <strong className="text-[#2D2D2B]">meticulous attention</strong> to 
                    sterilization protocols, premium materials, refined technique, and comprehensive aftercare support. 
                    Every procedure is documented, analyzed, and used to <strong className="text-[#2D2D2B]">continuously improve</strong> our standards.
                  </p>

                  {/* Data points */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                    <div className="text-center p-4 bg-neutral-50 rounded-xl">
                      <div className="text-3xl font-bold text-[#2D2D2B] mb-1 font-cormorant">523+</div>
                      <div className="text-xs text-[#2D2D2B]/60 uppercase tracking-wider">Procedures</div>
                    </div>
                    <div className="text-center p-4 bg-neutral-50 rounded-xl">
                      <div className="text-3xl font-bold text-[#2D2D2B] mb-1 font-cormorant">4</div>
                      <div className="text-xs text-[#2D2D2B]/60 uppercase tracking-wider">Years Tracked</div>
                    </div>
                    <div className="text-center p-4 bg-neutral-50 rounded-xl">
                      <div className="text-3xl font-bold text-[#2D2D2B] mb-1 font-cormorant">97%</div>
                      <div className="text-xs text-[#2D2D2B]/60 uppercase tracking-wider">Satisfaction</div>
                    </div>
                    <div className="text-center p-4 bg-neutral-50 rounded-xl">
                      <div className="text-3xl font-bold text-[#2D2D2B] mb-1 font-cormorant">0</div>
                      <div className="text-xs text-[#2D2D2B]/60 uppercase tracking-wider">Serious Issues</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Credentials & Licensing Section - Premium Design */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-white via-[#F9F7F5] to-white">
          <div className="container-custom">
            <AnimatedSection className="text-center mb-20">
              <div className="inline-block px-4 py-2 bg-[#2D2D2B]/5 rounded-full mb-6">
                <span className="text-sm uppercase tracking-widest text-[#2D2D2B]/60 font-semibold">Verified & Current</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-cormorant font-medium text-[#2D2D2B] mb-6">
                Official Credentials & Licensing
              </h2>
              <p className="text-lg md:text-xl text-[#2D2D2B]/70 max-w-3xl mx-auto leading-relaxed">
                Our qualifications are verifiable, current, and non-negotiable
              </p>
            </AnimatedSection>

            <div className="max-w-5xl mx-auto space-y-6">
              {credentials.map((credential, index) => (
                <AnimatedSection 
                  key={index} 
                  delay={index * 100}
                  className="group relative bg-white border-l-4 border-[#2D2D2B] rounded-r-3xl shadow-soft hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F9F7F5] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative p-10 md:p-12">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                      <div className="flex-1">
                        <div className="text-xs uppercase tracking-widest text-[#2D2D2B]/50 mb-3 font-semibold">
                          {credential.name}
                        </div>
                        <div className="text-2xl md:text-3xl font-cormorant font-medium text-[#2D2D2B] mb-3">
                          {credential.license}
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-50 to-green-100 px-6 py-3 rounded-full border-2 border-green-300 shadow-md">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <span className="text-sm font-semibold text-green-900">
                            {credential.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#E6DAD2] to-transparent"></div>
                </AnimatedSection>
              ))}
            </div>

            {/* Additional Credentials Info - Enhanced */}
            <AnimatedSection className="mt-16 text-center">
              <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-3xl p-10 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-xl font-semibold text-[#2D2D2B] mb-3">License Verification</h3>
                    <p className="text-[#2D2D2B]/80 leading-relaxed mb-4">
                      Our Virginia Permanent Cosmetic Tattooer License <strong className="text-[#2D2D2B]">(#1231002471)</strong> can 
                      be verified through the Virginia Department of Professional and Occupational Regulation (DPOR) 
                      public license lookup system.
                    </p>
                    <p className="text-sm text-[#2D2D2B]/60">
                      We maintain all required continuing education credits and stay current with evolving industry 
                      safety standards. Our Bloodborne Pathogens certification is renewed annually without exception.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Safety FAQs Section - Enhanced Accordion Style */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-neutral-50 via-white to-[#F9F7F5]">
          <div className="container-custom max-w-4xl">
            <AnimatedSection className="text-center mb-20">
              <div className="inline-block px-4 py-2 bg-[#2D2D2B]/5 rounded-full mb-6">
                <span className="text-sm uppercase tracking-widest text-[#2D2D2B]/60 font-semibold">Transparency</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-cormorant font-medium text-[#2D2D2B] mb-6">
                Safety Questions Answered
              </h2>
              <p className="text-lg md:text-xl text-[#2D2D2B]/70 leading-relaxed">
                Complete transparency on our protocols and practices
              </p>
            </AnimatedSection>

            <div className="space-y-6">
              {safetyFaqs.map((faq, index) => (
                <AnimatedSection 
                  key={index} 
                  delay={index * 100}
                  className="group bg-white rounded-3xl shadow-soft border border-neutral-100 overflow-hidden hover:shadow-xl transition-all duration-500"
                >
                  <div className="p-10">
                    <h3 className="text-xl md:text-2xl font-cormorant font-medium text-[#2D2D2B] mb-5 flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#E6DAD2] to-[#F0E4D8] rounded-full flex items-center justify-center mt-1">
                        <Shield className="w-5 h-5 text-[#2D2D2B]" />
                      </div>
                      <span className="flex-1">{faq.question}</span>
                    </h3>
                    <p className="text-[#2D2D2B]/70 leading-relaxed text-lg pl-14">
                      {faq.answer}
                    </p>
                  </div>
                  {/* Bottom accent line */}
                  <div className="h-1 bg-gradient-to-r from-transparent via-[#E6DAD2] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Final Reassurance & CTA - Premium Design Matching Homepage */}
        <section className="relative py-24 md:py-32 bg-gradient-to-br from-[#2D2D2B] via-[#3A3A38] to-[#2D2D2B] text-white overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>

          {/* Animated elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#E6DAD2] rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-[#E6DAD2] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <div className="container-custom relative z-10">
            <AnimatedSection className="text-center max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-cormorant font-light leading-tight mb-6">
                Choose <span className="text-[#E6DAD2] font-medium">Confidence</span>.<br />
                Choose the Safest PMU Experience<br />
                <span className="text-[#E6DAD2] font-medium">in Northern Virginia</span>.
              </h2>
              
              <p className="text-lg md:text-xl text-white/80 mb-16 leading-relaxed max-w-3xl mx-auto">
                Your peace of mind is worth everything. Our commitment to safety, backed by data and 
                verified credentials, ensures you receive the highest standard of care in the DMV region.
              </p>

              {/* Benefit Cards - Premium Style */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                <div className="group bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <CheckCircle className="w-10 h-10 text-[#E6DAD2] mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-lg font-semibold mb-2">State Licensed</div>
                  <div className="text-sm text-white/70">Verified & Current</div>
                </div>
                <div className="group bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <CheckCircle className="w-10 h-10 text-[#E6DAD2] mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-lg font-semibold mb-2">13x Safer</div>
                  <div className="text-sm text-white/70">Than Industry Average</div>
                </div>
                <div className="group bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <CheckCircle className="w-10 h-10 text-[#E6DAD2] mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-lg font-semibold mb-2">Data-Driven</div>
                  <div className="text-sm text-white/70">523+ Procedures Tracked</div>
                </div>
              </div>

              {/* CTAs - Premium Style */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link 
                  to="/booking"
                  className="group relative overflow-hidden bg-gradient-to-r from-[#E6DAD2] to-[#F0E4D8] hover:from-[#F0E4D8] hover:to-[#E6DAD2] text-[#2D2D2B] font-semibold px-10 py-5 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3 text-lg"
                >
                  <Calendar className="w-6 h-6" />
                  <span>Book Your Safety Consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <a 
                  href="tel:+15712838228"
                  className="group bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-full font-semibold border-2 border-white/30 hover:bg-white hover:text-[#2D2D2B] transition-all duration-300 flex items-center justify-center gap-3 text-lg hover:scale-105"
                >
                  <Phone className="w-6 h-6" />
                  <span>(571) 283-8228</span>
                </a>
              </div>

              {/* Contact Info with visual separator */}
              <div className="pt-12 border-t border-white/10">
                <p className="text-white/60 text-base mb-4">
                  <strong className="text-white/80">Serving</strong> Annandale, Arlington, Alexandria, Fairfax County, Washington DC, and all of Northern Virginia
                </p>
                <div className="flex flex-wrap justify-center gap-8 text-sm text-white/50">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#E6DAD2]" />
                    <span>Free Consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#E6DAD2]" />
                    <span>24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#E6DAD2]" />
                    <span>Licensed & Insured</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
};

export default PermanentMakeupSafetyDMV;
