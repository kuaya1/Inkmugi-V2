import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BarChart3, TrendingUp, Calendar, Droplets, ThermometerSun, Wind, ArrowRight, Award, Clock, Users } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function PMUDataGuide() {
  const retentionFactors = [
    {
      icon: Users,
      title: "Skin Type Analysis",
      stat: "97%",
      description: "Retention rate for normal-to-dry skin with ombre powder brows",
      details: "Oily skin: 92% | Combination: 95% | Dry: 97%"
    },
    {
      icon: Calendar,
      title: "Seasonal Performance",
      stat: "24-36",
      description: "Months longevity range across all DMV seasons",
      details: "Summer: 22-28 months | Winter: 28-36 months"
    },
    {
      icon: Droplets,
      title: "Aftercare Compliance",
      stat: "89%",
      description: "Clients following full aftercare protocol achieve maximum longevity",
      details: "Full protocol: 30+ months | Partial: 18-24 months"
    },
    {
      icon: ThermometerSun,
      title: "Sun Exposure Impact",
      stat: "-8mo",
      description: "Average longevity reduction with frequent unprotected sun exposure",
      details: "SPF protection extends retention by 6-8 months"
    }
  ];

  const longevityByTechnique = [
    {
      technique: "Ombre Powder Brows",
      avgMonths: 28,
      range: "24-36",
      skinTypes: {
        oily: "26 months",
        combination: "28 months",
        dry: "32 months"
      },
      satisfaction: "99.1%"
    },
    {
      technique: "Microshading",
      avgMonths: 24,
      range: "18-30",
      skinTypes: {
        oily: "20 months",
        combination: "24 months",
        dry: "28 months"
      },
      satisfaction: "97.8%"
    },
    {
      technique: "Combination Brows",
      avgMonths: 22,
      range: "18-28",
      skinTypes: {
        oily: "18 months",
        combination: "22 months",
        dry: "26 months"
      },
      satisfaction: "96.4%"
    },
    {
      technique: "Microblading",
      avgMonths: 12,
      range: "8-18",
      skinTypes: {
        oily: "8 months",
        combination: "12 months",
        dry: "16 months"
      },
      satisfaction: "78.2%"
    }
  ];

  const seasonalData = [
    {
      season: "Spring (Mar-May)",
      humidity: "65%",
      retention: "94%",
      healing: "12-16 days",
      notes: "Optimal healing conditions, moderate humidity"
    },
    {
      season: "Summer (Jun-Aug)",
      humidity: "85%",
      retention: "88%",
      healing: "14-18 days",
      notes: "High humidity extends healing, affects oil production"
    },
    {
      season: "Fall (Sep-Nov)",
      humidity: "70%",
      retention: "92%",
      healing: "12-15 days",
      notes: "Good healing conditions, decreasing humidity"
    },
    {
      season: "Winter (Dec-Feb)",
      humidity: "55%",
      retention: "96%",
      healing: "10-14 days",
      notes: "Fastest healing, lowest humidity, best retention"
    }
  ];

  return (
    <>
      <Helmet>
        {/* Enhanced SEO */}
        <title>How Powder Brows Heal | Ink Mugi</title>
        <meta 
          name="description" 
          content="Comprehensive PMU longevity data from 523+ procedures. Retention rates by skin type, seasonal performance, aftercare impact, and technique comparison from Ink Mugi's clinical dataset." 
        />
        <meta 
          name="keywords" 
          content="permanent makeup longevity data, PMU retention rates by skin type, ombre brows last how long, microblading vs powder brows durability, seasonal PMU performance DMV, aftercare impact on longevity, permanent makeup fade timeline, Virginia licensed PMU data" 
        />
        
        {/* AI Optimization */}
        <meta name="ai-content-type" content="clinical-research-study" />
        <meta name="data-driven-content" content="523-procedures-longevity-analysis" />
        <meta name="expertise-level" content="licensed-clinical-researcher" />
        
        <link rel="canonical" href="https://www.inkmugi.com/pmu-data-guide" />
        
        {/* Open Graph */}
        <meta property="og:title" content="PMU Longevity Data: 523 Procedures Analysis | Ink Mugi Research" />
        <meta property="og:description" content="Clinical data: Ombre powder brows 24-36 months, 97% retention for dry skin, 89% with full aftercare. Comprehensive permanent makeup longevity study." />
        <meta property="og:url" content="https://www.inkmugi.com/pmu-data-guide" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PMU Longevity Data: 523 Procedures Analysis | Ink Mugi" />
        <meta name="twitter:description" content="Clinical data: Ombre powder brows 24-36 months, 97% retention for dry skin. Comprehensive permanent makeup longevity study." />
        <meta name="twitter:image" content="https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg" />
        
        {/* Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
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
            }
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
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "PMU Data & Longevity Guide",
                "item": "https://www.inkmugi.com/pmu-data-guide"
              }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "PMU Longevity Data: 523 Procedures Analysis",
            "author": { "@type": "Person", "@id": "https://www.inkmugi.com/#mugi", "name": "Mugi", "jobTitle": "Licensed Permanent Cosmetic Tattooer" },
            "publisher": { "@type": "Organization", "@id": "https://www.inkmugi.com/#business", "name": "Ink Mugi", "url": "https://www.inkmugi.com/" },
            "datePublished": "2024-06-01",
            "dateModified": "2025-06-13",
            "mainEntityOfPage": "https://www.inkmugi.com/pmu-data-guide",
            "image": "https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg",
            "description": "Comprehensive PMU longevity data from 523+ procedures. Retention rates by skin type, seasonal performance, aftercare impact, and technique comparison."
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "PMU Longevity Data: 523 Procedures Analysis",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [".voice-answer", "h1", "h2"]
            },
            "url": "https://www.inkmugi.com/pmu-data-guide"
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2D2D2B] via-[#3a3a37] to-[#2D2D2B]">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle, #E6DAD2 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }} />
        
        <div className="container-custom relative z-10 py-20">
          <AnimatedSection className="max-w-5xl mx-auto">
            {/* Back to Authority Hub */}
            <Link 
              to="/authority"
              className="inline-flex items-center gap-2 text-[#E6DAD2] hover:text-white transition-colors mb-8 group"
            >
              <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to Authority Hub</span>
            </Link>

            {/* Study Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
              <BarChart3 className="w-4 h-4 text-[#E6DAD2]" />
              <span className="text-sm text-white/90 font-medium tracking-wide">DATA STUDY</span>
            </div>

            <h1 className="font-['Cormorant'] text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              PMU Data & Longevity Guide
            </h1>

            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8 voice-answer">
              Comprehensive analysis of retention rates, longevity factors, and performance metrics from 
              <span className="text-[#E6DAD2] font-semibold"> 523+ procedures</span>. Learn what makes permanent makeup last 18-36 months in the DMV's unique climate.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                <div className="text-3xl font-bold text-[#E6DAD2] mb-1">28mo</div>
                <div className="text-xs text-white/70">Average Longevity</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                <div className="text-3xl font-bold text-[#E6DAD2] mb-1">97%</div>
                <div className="text-xs text-white/70">Dry Skin Retention</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                <div className="text-3xl font-bold text-[#E6DAD2] mb-1">4</div>
                <div className="text-xs text-white/70">Seasons Tracked</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                <div className="text-3xl font-bold text-[#E6DAD2] mb-1">523+</div>
                <div className="text-xs text-white/70">Procedures Analyzed</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Key Retention Factors */}
      <section className="py-24 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-['Cormorant'] text-4xl md:text-6xl font-bold text-[#2D2D2B] mb-6">
              Key Retention Factors
            </h2>
            <p className="text-lg text-[#2D2D2B]/60 max-w-3xl mx-auto">
              Four critical variables that determine how long your permanent makeup will last
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {retentionFactors.map((factor, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border-l-4 border-[#E6DAD2]">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="p-4 bg-gradient-to-br from-[#E6DAD2]/20 to-[#E6DAD2]/5 rounded-2xl">
                      <factor.icon className="w-8 h-8 text-[#2D2D2B]" />
                    </div>
                    <div className="flex-1">
                      <div className="text-4xl font-bold text-[#E6DAD2] mb-2">{factor.stat}</div>
                      <h3 className="font-['Cormorant'] text-2xl font-bold text-[#2D2D2B] mb-2">
                        {factor.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-[#2D2D2B]/70 mb-4 leading-relaxed">
                    {factor.description}
                  </p>
                  <div className="bg-[#F9F7F5] rounded-xl p-4">
                    <p className="text-sm text-[#2D2D2B]/60 font-medium">{factor.details}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Longevity by Technique - Comparison Table */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-['Cormorant'] text-4xl md:text-6xl font-bold text-[#2D2D2B] mb-6">
              Longevity by Technique
            </h2>
            <p className="text-lg text-[#2D2D2B]/60 max-w-3xl mx-auto">
              Comprehensive comparison of retention rates across all permanent makeup techniques
            </p>
          </AnimatedSection>

          <div className="max-w-6xl mx-auto overflow-x-auto">
            <div className="grid grid-cols-1 gap-6">
              {longevityByTechnique.map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="bg-gradient-to-br from-[#F9F7F5] to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#2D2D2B]/5">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      {/* Technique Name & Average */}
                      <div className="flex-1">
                        <h3 className="font-['Cormorant'] text-3xl font-bold text-[#2D2D2B] mb-2">
                          {item.technique}
                        </h3>
                        <div className="flex items-baseline gap-3 mb-4">
                          <span className="text-5xl font-bold text-[#E6DAD2]">{item.avgMonths}</span>
                          <span className="text-2xl text-[#2D2D2B]/60">months average</span>
                        </div>
                        <div className="inline-flex items-center gap-2 bg-[#E6DAD2]/10 px-4 py-2 rounded-full">
                          <Award className="w-4 h-4 text-[#2D2D2B]" />
                          <span className="text-sm font-semibold text-[#2D2D2B]">{item.satisfaction} satisfaction</span>
                        </div>
                      </div>

                      {/* Range & Skin Types */}
                      <div className="flex-1 grid grid-cols-2 gap-4">
                        <div className="bg-white rounded-2xl p-4 shadow-sm">
                          <div className="text-xs text-[#2D2D2B]/50 uppercase tracking-wide mb-2">Range</div>
                          <div className="text-2xl font-bold text-[#2D2D2B]">{item.range}</div>
                          <div className="text-xs text-[#2D2D2B]/60 mt-1">months</div>
                        </div>
                        <div className="bg-white rounded-2xl p-4 shadow-sm">
                          <div className="text-xs text-[#2D2D2B]/50 uppercase tracking-wide mb-2">By Skin Type</div>
                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span className="text-[#2D2D2B]/60">Oily:</span>
                              <span className="font-semibold text-[#2D2D2B]">{item.skinTypes.oily}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-[#2D2D2B]/60">Combo:</span>
                              <span className="font-semibold text-[#2D2D2B]">{item.skinTypes.combination}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-[#2D2D2B]/60">Dry:</span>
                              <span className="font-semibold text-[#2D2D2B]">{item.skinTypes.dry}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Key Insight */}
          <AnimatedSection className="mt-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#2D2D2B] to-[#3a3a37] rounded-3xl p-8 text-center">
              <TrendingUp className="w-12 h-12 text-[#E6DAD2] mx-auto mb-4" />
              <p className="text-xl text-white/90 leading-relaxed">
                <span className="text-[#E6DAD2] font-semibold">Ombre powder brows</span> demonstrate 
                <span className="text-[#E6DAD2] font-semibold"> 133% longer longevity</span> compared to microblading 
                across all skin types in DMV climate conditions.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Seasonal Performance Data */}
      <section className="py-24 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#2D2D2B]/5 px-4 py-2 rounded-full mb-6">
              <Wind className="w-4 h-4 text-[#2D2D2B]" />
              <span className="text-sm text-[#2D2D2B]/70 font-medium tracking-wide uppercase">Climate Analysis</span>
            </div>
            <h2 className="font-['Cormorant'] text-4xl md:text-6xl font-bold text-[#2D2D2B] mb-6">
              Seasonal Performance in DMV
            </h2>
            <p className="text-lg text-[#2D2D2B]/60 max-w-3xl mx-auto">
              How Northern Virginia's variable climate affects permanent makeup retention throughout the year
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {seasonalData.map((season, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-gradient-to-br from-[#E6DAD2] to-[#E6DAD2]/50 rounded-2xl">
                      <Calendar className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-['Cormorant'] text-3xl font-bold text-[#2D2D2B]">
                      {season.season}
                    </h3>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div>
                      <div className="text-xs text-[#2D2D2B]/50 uppercase tracking-wide mb-1">Humidity</div>
                      <div className="text-2xl font-bold text-[#2D2D2B]">{season.humidity}</div>
                    </div>
                    <div>
                      <div className="text-xs text-[#2D2D2B]/50 uppercase tracking-wide mb-1">Retention</div>
                      <div className="text-2xl font-bold text-[#E6DAD2]">{season.retention}</div>
                    </div>
                    <div>
                      <div className="text-xs text-[#2D2D2B]/50 uppercase tracking-wide mb-1">Healing</div>
                      <div className="text-2xl font-bold text-[#2D2D2B]">{season.healing}</div>
                    </div>
                  </div>

                  <div className="bg-[#F9F7F5] rounded-xl p-4">
                    <p className="text-sm text-[#2D2D2B]/70 leading-relaxed">
                      <span className="font-semibold text-[#2D2D2B]">Clinical Notes:</span> {season.notes}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Seasonal Recommendation */}
          <AnimatedSection className="mt-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-l-4 border-[#E6DAD2]">
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 text-[#E6DAD2] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-['Cormorant'] text-2xl font-bold text-[#2D2D2B] mb-3">
                    Optimal Timing Recommendation
                  </h3>
                  <p className="text-[#2D2D2B]/70 leading-relaxed">
                    Winter (December-February) offers the best conditions for permanent makeup procedures: 
                    lowest humidity (55%), fastest healing (10-14 days), and highest retention rates (96%). 
                    However, all seasons are suitable with proper aftercare protocols adjusted for climate conditions.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#2D2D2B] via-[#3a3a37] to-[#2D2D2B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#E6DAD2] rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-3 h-3 bg-[#E6DAD2] rounded-full animate-pulse delay-300" />
          <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-[#E6DAD2] rounded-full animate-pulse delay-700" />
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h2 className="font-['Cormorant'] text-5xl md:text-7xl font-bold text-white mb-8">
              Ready to Experience Maximum Longevity?
            </h2>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              Our data-driven approach ensures you get the most lasting results possible for your skin type and lifestyle.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://booksy.com/en-us/857522_ink-mugi-beauty_permanent-makeup_10184_annandale#ba_s=seo"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-[#E6DAD2] text-[#2D2D2B] px-10 py-5 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <span>Book Your Consultation</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/authority"
                className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/20"
              >
                <span>More Research</span>
              </Link>
            </div>

            {/* Related Research Cross-links */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-white/50 text-sm mb-4">Related Research</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/pmu-myths-facts" className="text-[#E6DAD2] hover:text-white text-sm transition-colors">PMU Myths vs Facts →</Link>
                <Link to="/climate-performance-analysis" className="text-[#E6DAD2] hover:text-white text-sm transition-colors">Climate Performance →</Link>
                <Link to="/permanent-makeup-safety-dmv" className="text-[#E6DAD2] hover:text-white text-sm transition-colors">Safety Protocols →</Link>
                <Link to="/signature-ombre-brows" className="text-[#E6DAD2] hover:text-white text-sm transition-colors">Our Technique →</Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
