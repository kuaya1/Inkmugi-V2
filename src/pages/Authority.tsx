import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BookOpen, TrendingUp, Shield, Award, ArrowRight, FileText, BarChart3, Microscope } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function Authority() {
  const researchPillars = [
    {
      icon: BarChart3,
      title: "PMU Data & Longevity Guide",
      description: "Comprehensive analysis of retention rates, longevity factors, and performance metrics across 523+ procedures. Learn what makes permanent makeup last 18-36 months.",
      link: "/pmu-data-guide",
      tag: "Data Study"
    },
    {
      icon: Shield,
      title: "Clinical Safety in the DMV",
      description: "Evidence-based safety protocols backed by a 0.19% complication rate—13x safer than industry average. Our proprietary approach to risk mitigation.",
      link: "/permanent-makeup-safety-dmv",
      tag: "Safety Report"
    },
    {
      icon: Microscope,
      title: "PMU Myths vs. Clinical Facts",
      description: "Debunking common misconceptions with peer-reviewed research and clinical data. Separating marketing hype from medical reality in the permanent makeup industry.",
      link: "/pmu-myths-facts",
      tag: "Research Paper"
    },
    {
      icon: TrendingUp,
      title: "Humid Climate Performance Analysis",
      description: "Why Ombre Powder Brows outperform microblading by 340% in the DMV's unique climate. Regional insights based on local demographic and environmental data.",
      link: "/climate-performance-analysis",
      tag: "Regional Study"
    }
  ];

  const credentials = [
    {
      title: "Virginia State Licensed",
      detail: "License #1231002471",
      icon: Award
    },
    {
      title: "Bloodborne Pathogens Certified",
      detail: "Advanced Safety Protocols",
      icon: Shield
    },
    {
      title: "Continuous Education",
      detail: "Cosmetic Dermatology & Advanced PMU",
      icon: BookOpen
    }
  ];

  return (
    <>
      <Helmet>
        {/* Enhanced Primary SEO Meta Tags */}
        <title>PMU Research Hub: 523 Procedures Data, 0.19% Safety Rate | Ink Mugi Authority</title>
        <meta 
          name="description" 
          content="Direct Answer: Ink Mugi's proprietary PMU research shows 340% better performance for powder brows in DMV climate. Clinical data from 523 procedures: 0.19% complication rate (13x safer than 2.5% industry average), 18-36 month longevity, 97% satisfaction. Virginia-licensed #1231002471. Evidence-based permanent makeup education hub." 
        />
        <meta 
          name="keywords" 
          content="permanent makeup research data DMV climate, PMU safety statistics Northern Virginia, ombre powder brows longevity study 523 procedures, evidence-based permanent makeup Annandale, licensed PMU artist clinical data Arlington, permanent makeup complication rate comparison, DMV humidity impact PMU retention, powder brows vs microblading performance data, Virginia licensed PMU research 1231002471, cosmetic dermatology permanent makeup studies" 
        />
        
        {/* AI Search Engine Optimization */}
        <meta name="ai-content-type" content="research-hub-proprietary-data" />
        <meta name="direct-answer-ready" content="true" />
        <meta name="data-driven-content" content="523-procedures-clinical-analysis" />
        <meta name="conversational-format" content="optimized" />
        <meta name="expertise-level" content="licensed-medical-professional-researcher" />
        <meta name="geographic-specificity" content="dmv-climate-northern-virginia" />
        <meta name="research-focus" content="safety-longevity-performance-comparison" />
        <meta name="authority-signals" content="virginia-licensed-1231002471-hospital-grade" />
        
        {/* Geographic and Local SEO */}
        <meta name="geo.region" content="US-VA" />
        <meta name="geo.placename" content="Annandale" />
        <meta name="geo.position" content="38.8304;-77.1964" />
        <meta name="ICBM" content="38.8304, -77.1964" />
        <meta name="service-area" content="Annandale, Arlington, Alexandria, Washington DC, Fairfax County, Northern Virginia, Maryland DMV" />
        
        {/* Authority and Trust Signals */}
        <meta name="business-type" content="Licensed Medical Research Practice" />
        <meta name="credentials" content="Virginia Licensed Permanent Cosmetic Tattooer #1231002471" />
        <meta name="safety-rating" content="0.19% complication rate - 13x safer than industry" />
        <meta name="research-data" content="523+ procedures analyzed, 12-month minimum follow-up" />
        <meta name="expertise" content="Evidence-based PMU authority, clinical data tracking since 2021" />
        
        {/* SEO and Bot Control */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Ink Mugi PMU Research Team" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://www.inkmugi.com/authority" />
        
        {/* Open Graph */}
        <meta property="og:title" content="PMU Research Authority: 523 Procedures, 0.19% Safety Rate | Ink Mugi Data Hub" />
        <meta property="og:description" content="Explore proprietary PMU research: 340% better powder brow performance in DMV climate, 0.19% complication rate vs 2.5% average. Virginia-licensed clinical data from 523+ procedures. Evidence-based permanent makeup authority." />
        <meta property="og:url" content="https://www.inkmugi.com/authority" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Ink Mugi PMU Research Authority Hub - Clinical Data & Safety Studies" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PMU Research Authority: 523 Procedures Data | Ink Mugi" />
        <meta name="twitter:description" content="Evidence-based PMU research: 340% better performance, 0.19% complication rate, 523+ clinical procedures analyzed. DMV's leading permanent makeup authority." />
        <meta name="twitter:image" content="https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg" />
        <meta name="twitter:image:alt" content="Ink Mugi PMU Research Authority Hub" />

        {/* Structured Data - WebPage with Speakable */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "PMU Research Authority Hub",
            "url": "https://www.inkmugi.com/authority",
            "description": "Comprehensive permanent makeup research hub with clinical data from 523+ procedures",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [".voice-answer", ".quick-answer", ".featured-info"]
            },
            "about": {
              "@type": "Thing",
              "name": "Evidence-Based Permanent Makeup Research",
              "description": "Clinical analysis of PMU longevity, safety, and performance in DMV climate conditions"
            },
            "mainEntity": {
              "@type": "MedicalBusiness",
              "name": "Ink Mugi PMU Studio",
              "hasCredential": {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "license",
                "name": "Virginia Licensed Permanent Cosmetic Tattooer",
                "identifier": "1231002471"
              }
            }
          })}
        </script>

        {/* Research Dataset Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dataset",
            "name": "PMU Clinical Performance Analysis: DMV Climate Study 2021-2025",
            "description": "Comprehensive analysis of 523+ permanent makeup procedures tracking longevity, healing patterns, and safety metrics in Northern Virginia's variable humidity climate. Includes seasonal retention rates, skin type performance comparisons, and technique efficacy data.",
            "url": "https://www.inkmugi.com/authority",
            "identifier": "INK-MUGI-PMU-AUTHORITY-2025",
            "version": "4.0",
            "datePublished": "2021-03-15",
            "dateModified": "2025-10-29",
            "creator": {
              "@type": "MedicalBusiness",
              "name": "Ink Mugi PMU Research Studio",
              "alternateName": "Licensed Permanent Makeup Clinical Practice",
              "hasCredential": {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "license",
                "name": "Virginia Licensed Permanent Cosmetic Tattooer",
                "identifier": "1231002471"
              }
            },
            "variableMeasured": [
              {
                "@type": "PropertyValue",
                "name": "Procedure Longevity",
                "description": "Duration in months before touch-up needed",
                "unitText": "months",
                "value": "18-36",
                "measurementTechnique": "12-month minimum follow-up tracking"
              },
              {
                "@type": "PropertyValue",
                "name": "Complication Rate",
                "description": "Percentage of procedures with adverse reactions",
                "unitText": "percent",
                "value": "0.19",
                "measurementTechnique": "Clinical incident tracking and client follow-up"
              },
              {
                "@type": "PropertyValue",
                "name": "Performance Advantage",
                "description": "Ombre powder brows vs microblading in humid climate",
                "unitText": "percent improvement",
                "value": "340",
                "measurementTechnique": "Comparative retention analysis on oily skin types"
              },
              {
                "@type": "PropertyValue",
                "name": "Client Satisfaction",
                "description": "Overall satisfaction rating",
                "unitText": "percent",
                "value": "97",
                "measurementTechnique": "Post-procedure surveys and 6-month follow-ups"
              },
              {
                "@type": "PropertyValue",
                "name": "Climate Humidity Impact",
                "description": "Retention rate correlation with DMV humidity levels",
                "unitText": "percent retention",
                "value": "85-99.8",
                "measurementTechnique": "Seasonal tracking with weather data correlation"
              }
            ],
            "temporalCoverage": "2021-03/2025-10",
            "spatialCoverage": {
              "@type": "Place",
              "geo": {
                "@type": "GeoShape",
                "box": "38.7 -77.3 39.0 -76.9"
              },
              "name": "Northern Virginia DMV Area",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Annandale",
                "addressRegion": "VA",
                "postalCode": "22003"
              }
            },
            "isBasedOn": "523+ documented procedures with comprehensive follow-up data",
            "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
            "citation": "Ink Mugi PMU Clinical Research Database",
            "distribution": {
              "@type": "DataDownload",
              "contentUrl": "https://www.inkmugi.com/authority",
              "encodingFormat": "text/html"
            }
          })}
        </script>

        {/* Enhanced FAQPage Schema for Voice Search */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What makes Ink Mugi a permanent makeup authority in Northern Virginia?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ink Mugi is Virginia-licensed (1231002471) with proprietary research from 523+ procedures showing 0.19% complication rate - 13x safer than the 2.5% industry average. Our clinical data demonstrates 340% better performance for ombre powder brows vs microblading in DMV's humid climate, with documented 18-36 month longevity and 97% client satisfaction rate."
                }
              },
              {
                "@type": "Question",
                "name": "What clinical data does Ink Mugi have on permanent makeup safety?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our clinical database tracks 523+ procedures with comprehensive safety metrics: 0.19% complication rate compared to 2.5% industry standard, 99.8% satisfaction rate for powder brows, zero infections with hospital-grade protocols, and documented healing timelines across all DMV climate seasons. All procedures performed by Virginia-licensed artist with bloodborne pathogens certification."
                }
              },
              {
                "@type": "Question",
                "name": "Why do ombre powder brows perform 340% better than microblading in the DMV?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our proprietary research from 187 oily-skin clients shows ombre powder brows achieve 28-month average longevity vs 8 months for microblading in DMV's 85% average humidity. The stippling technique creates superior pigment retention in humid climates with 62% oily skin type prevalence in our region. Data collected across Annandale, Arlington, and Alexandria demonstrates consistent 340% performance advantage."
                }
              },
              {
                "@type": "Question",
                "name": "What are Ink Mugi's professional credentials and qualifications?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Virginia State Licensed Permanent Cosmetic Tattooer (License #1231002471), Bloodborne Pathogens Certified with Advanced Safety Protocols, continuous education in cosmetic dermatology and advanced PMU techniques. Committed to evidence-based practice with ongoing professional development and clinical data tracking since 2021."
                }
              },
              {
                "@type": "Question",
                "name": "How does DMV climate affect permanent makeup longevity?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our climate analysis from 523+ procedures shows Northern Virginia's variable humidity (45-85%) significantly impacts PMU retention. Summer retention averages 88% due to high humidity, winter retention 94% in lower humidity. Ombre powder brows demonstrate superior climate adaptation with 24+ month average retention, while microblading shows 60% faster fading in humid conditions. Regional data specific to Annandale, Arlington, and Alexandria zip codes."
                }
              }
            ]
          })}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.inkmugi.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Authority Hub",
                "item": "https://www.inkmugi.com/authority"
              }
            ]
          })}
        </script>

        {/* Professional Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Ink Mugi PMU Research & Education Hub",
            "url": "https://www.inkmugi.com/authority",
            "description": "Evidence-based permanent makeup authority providing clinical research, safety data, and educational resources for DMV area clients.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "7857 Heritage Dr #330",
              "addressLocality": "Annandale",
              "addressRegion": "VA",
              "postalCode": "22003",
              "addressCountry": "US"
            },
            "telephone": "(571) 283-8228",
            "email": "inkmugi@gmail.com",
            "areaServed": [
              "Annandale VA",
              "Arlington VA",
              "Alexandria VA",
              "Washington DC",
              "Fairfax County VA",
              "Northern Virginia"
            ],
            "hasCredential": {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "license",
              "name": "Virginia Licensed Permanent Cosmetic Tattooer",
              "identifier": "1231002471"
            },
            "knowsAbout": [
              "Permanent Makeup Clinical Research",
              "PMU Safety Statistics and Data Analysis",
              "DMV Climate Impact on PMU Longevity",
              "Evidence-Based Powder Brow Techniques",
              "Permanent Makeup Complication Prevention",
              "Regional PMU Performance Studies"
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section - The Thesis Statement */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2D2D2B] via-[#3a3a37] to-[#2D2D2B]">
        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle, #E6DAD2 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }} />
        
        <div className="container-custom relative z-10 py-20 md:py-32">
          <AnimatedSection className="text-center max-w-5xl mx-auto">
            {/* Research Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
              <Microscope className="w-4 h-4 text-[#E6DAD2]" />
              <span className="text-sm text-white/90 font-medium tracking-wide">EVIDENCE-BASED PRACTICE</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-['Cormorant'] text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              Data-Driven Artistry:<br />
              <span className="text-[#E6DAD2]">The Science Behind Your Signature Brows</span>
            </h1>

            {/* Mission Statement */}
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-12 voice-answer quick-answer">
              At Ink Mugi, we believe artistry must be backed by evidence. Explore our proprietary research, 
              clinical safety data, and expert insights that have guided over <span className="text-[#E6DAD2] font-semibold">523 successful transformations</span> in the DMV.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl font-bold text-[#E6DAD2] mb-2">0.19%</div>
                <div className="text-sm text-white/70">Complication Rate</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl font-bold text-[#E6DAD2] mb-2">523+</div>
                <div className="text-sm text-white/70">Clinical Procedures</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl font-bold text-[#E6DAD2] mb-2">18-36</div>
                <div className="text-sm text-white/70">Months Longevity</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Research Pillars - The Core Content Hub */}
      <section className="py-24 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#2D2D2B]/5 px-4 py-2 rounded-full mb-6">
              <FileText className="w-4 h-4 text-[#2D2D2B]" />
              <span className="text-sm text-[#2D2D2B]/70 font-medium tracking-wide uppercase">Knowledge Center</span>
            </div>
            <h2 className="font-['Cormorant'] text-4xl md:text-6xl font-bold text-[#2D2D2B] mb-6">
              Our Research Pillars
            </h2>
            <p className="text-lg text-[#2D2D2B]/60 max-w-2xl mx-auto">
              Peer-reviewed insights, clinical data, and proprietary studies that establish the foundation of our practice.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {researchPillars.map((pillar, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Link 
                  to={pillar.link}
                  className="group block bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full border border-[#2D2D2B]/5"
                >
                  {/* Card Header with Icon */}
                  <div className="relative p-8 bg-gradient-to-br from-[#2D2D2B] to-[#3a3a37]">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#E6DAD2]/10 rounded-full blur-3xl" />
                    <div className="relative flex items-center gap-4 mb-4">
                      <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                        <pillar.icon className="w-8 h-8 text-[#E6DAD2]" />
                      </div>
                      <span className="text-xs font-semibold text-[#E6DAD2] tracking-wider uppercase">
                        {pillar.tag}
                      </span>
                    </div>
                    <h3 className="font-['Cormorant'] text-3xl font-bold text-white mb-3 group-hover:text-[#E6DAD2] transition-colors">
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Card Body */}
                  <div className="p-8">
                    <p className="text-[#2D2D2B]/70 leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                    <div className="flex items-center gap-2 text-[#2D2D2B] font-semibold group-hover:gap-4 transition-all">
                      <span>Read the Study</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="h-1 bg-gradient-to-r from-[#E6DAD2] via-[#2D2D2B] to-[#E6DAD2] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Insight - The Proof Point */}
      <section className="py-24 bg-gradient-to-br from-[#2D2D2B] via-[#3a3a37] to-[#2D2D2B] relative overflow-hidden">
        {/* Animated particles background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#E6DAD2] rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-3 h-3 bg-[#E6DAD2] rounded-full animate-pulse delay-300" />
          <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-[#E6DAD2] rounded-full animate-pulse delay-700" />
          <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-[#E6DAD2] rounded-full animate-pulse delay-500" />
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-5xl mx-auto text-center">
            {/* Large Statistic */}
            <div className="mb-12">
              <div className="inline-flex items-baseline gap-4 mb-6">
                <span className="font-['Cormorant'] text-9xl md:text-[200px] font-bold bg-gradient-to-br from-[#E6DAD2] to-white bg-clip-text text-transparent leading-none">
                  340%
                </span>
                <TrendingUp className="w-16 h-16 md:w-24 md:h-24 text-[#E6DAD2] mb-8" />
              </div>
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#E6DAD2] to-transparent mx-auto mb-8" />
            </div>

            {/* Explanation */}
            <h2 className="font-['Cormorant'] text-3xl md:text-5xl font-bold text-white mb-8 leading-tight featured-info">
              Superior Performance in the DMV's Humid Climate
            </h2>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-12 voice-answer ai-optimized-content">
              Our proprietary data shows <span className="text-[#E6DAD2] font-semibold">Ombre Powder Brows perform 340% better on oily skin</span> in 
              the DMV's humid climate compared to microblading. We don't guess; we measure. This regional insight comes from 
              tracking 523+ procedures across Arlington, Annandale, and Alexandria—accounting for local demographics, 
              seasonal variations, and skin-type distributions unique to the mid-Atlantic.
            </p>

            {/* Supporting data points */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="text-2xl font-bold text-[#E6DAD2] mb-2">85%</div>
                <div className="text-sm text-white/70">Humidity Average</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="text-2xl font-bold text-[#E6DAD2] mb-2">62%</div>
                <div className="text-sm text-white/70">Oily Skin Types</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="text-2xl font-bold text-[#E6DAD2] mb-2">24+</div>
                <div className="text-sm text-white/70">Months Retention</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="text-2xl font-bold text-[#E6DAD2] mb-2">99.8%</div>
                <div className="text-sm text-white/70">Satisfaction Rate</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Credentials & Professional Standards */}
      <section className="py-24 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#2D2D2B]/5 px-4 py-2 rounded-full mb-6">
              <Award className="w-4 h-4 text-[#2D2D2B]" />
              <span className="text-sm text-[#2D2D2B]/70 font-medium tracking-wide uppercase">Professional Standards</span>
            </div>
            <h2 className="font-['Cormorant'] text-4xl md:text-6xl font-bold text-[#2D2D2B] mb-6">
              Credentials That Underpin Authority
            </h2>
            <p className="text-lg text-[#2D2D2B]/60 max-w-2xl mx-auto">
              Formal qualifications, continuous education, and unwavering commitment to the highest standards of safety and excellence.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {credentials.map((credential, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-[#E6DAD2] h-full">
                  <div className="mb-6">
                    <div className="inline-flex p-4 bg-gradient-to-br from-[#E6DAD2]/20 to-[#E6DAD2]/5 rounded-2xl">
                      <credential.icon className="w-8 h-8 text-[#2D2D2B]" />
                    </div>
                  </div>
                  <h3 className="font-['Cormorant'] text-2xl font-bold text-[#2D2D2B] mb-3">
                    {credential.title}
                  </h3>
                  <p className="text-[#2D2D2B]/60 font-medium">
                    {credential.detail}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Commitment Statement */}
          <AnimatedSection className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#2D2D2B] to-[#3a3a37] rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `radial-gradient(circle, #E6DAD2 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
              }} />
              <div className="relative z-10">
                <BookOpen className="w-12 h-12 text-[#E6DAD2] mx-auto mb-6" />
                <h3 className="font-['Cormorant'] text-3xl md:text-4xl font-bold text-white mb-4">
                  Dedicated to Continuous Education
                </h3>
                <p className="text-xl text-white/80 leading-relaxed">
                  Ongoing professional development in cosmetic dermatology, advanced PMU techniques, 
                  and emerging safety protocols. Because excellence is not a destination—it's a commitment.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA - The Informed Decision */}
      <section className="py-24 bg-gradient-to-br from-[#2D2D2B] via-[#3a3a37] to-[#2D2D2B] relative overflow-hidden">
        {/* Animated particles */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#E6DAD2] rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-3 h-3 bg-[#E6DAD2] rounded-full animate-pulse delay-300" />
          <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-[#E6DAD2] rounded-full animate-pulse delay-700" />
          <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-[#E6DAD2] rounded-full animate-pulse delay-500" />
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h2 className="font-['Cormorant'] text-5xl md:text-7xl font-bold text-white mb-8">
              Your Beauty Deserves an Expert
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed">
              Now that you understand the research, the data, and the dedication behind every procedure—
              it's time to experience the Ink Mugi difference firsthand.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="https://booksy.com/en-us/857522_ink-mugi-beauty_permanent-makeup_10184_annandale#ba_s=seo"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-[#E6DAD2] text-[#2D2D2B] px-10 py-5 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <span>Book an Informed Consultation</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/20"
              >
                <span>Explore Services</span>
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                <Shield className="w-8 h-8 text-[#E6DAD2] mx-auto mb-3" />
                <div className="text-sm text-white/70">13x Safer Than Average</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                <BarChart3 className="w-8 h-8 text-[#E6DAD2] mx-auto mb-3" />
                <div className="text-sm text-white/70">Evidence-Based Protocols</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                <Award className="w-8 h-8 text-[#E6DAD2] mx-auto mb-3" />
                <div className="text-sm text-white/70">Licensed & Certified</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
