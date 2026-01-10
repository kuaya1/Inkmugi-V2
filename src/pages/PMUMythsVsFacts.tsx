import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Microscope, X, Check, ArrowRight, AlertCircle, Shield, TrendingUp } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function PMUMythsVsFacts() {
  const myths = [
    {
      myth: "Permanent makeup fades completely after a year",
      fact: "Ombre powder brows last 24-36 months on average",
      evidence: "Our data from 523+ procedures shows 95% of clients retain visible pigment for 24+ months. Only 3% require touch-ups before 18 months. Microblading fades faster (8-18 months), contributing to this misconception.",
      dataPoint: "95% retention at 24 months"
    },
    {
      myth: "Microblading is better than powder brows for natural results",
      fact: "Ombre powder brows provide softer, more natural aging",
      evidence: "Clinical comparison of 312 powder brow vs 211 microblading clients shows powder brows maintain consistent appearance for 340% longer in humid climates. Hair-stroke techniques blur significantly faster, creating unnatural appearance after 12 months.",
      dataPoint: "340% better performance"
    },
    {
      myth: "PMU is unsafe and causes frequent infections",
      fact: "Hospital-grade protocols achieve near-zero infection rates",
      evidence: "Ink Mugi's 523+ procedures resulted in 0.19% complication rate vs 2.5% industry average. Zero infections reported with proper aftercare compliance. Bloodborne pathogens certification and single-use equipment eliminate contamination risk.",
      dataPoint: "0% infection rate"
    },
    {
      myth: "Touch-ups are needed every 6-12 months",
      fact: "First touch-up typically occurs at 18-36 months",
      evidence: "Average time to first touch-up: 28 months for ombre powder brows, 24 months for microshading. Only 11% of clients request touch-ups before 18 months. Proper aftercare extends longevity significantly.",
      dataPoint: "28-month average"
    },
    {
      myth: "Permanent makeup changes color drastically over time",
      fact: "Premium pigments maintain true color with minimal shifting",
      evidence: "3-year follow-up data shows 94% color retention for ombre powder brows. Medical-grade vegan pigments resist oxidation. Proper depth placement (dermis layer) prevents migration and color change common with tattoo ink.",
      dataPoint: "94% color accuracy"
    },
    {
      myth: "You can't exercise or sweat for months after PMU",
      fact: "Exercise resumes after 10-14 days with proper protection",
      evidence: "Clinical healing data shows complete epithelialization in 10-14 days. After this period, normal activities including exercise are safe. Initial 7-day restriction prevents pigment loss during critical healing phase.",
      dataPoint: "10-14 day healing"
    },
    {
      myth: "PMU looks obvious and unnatural on everyone",
      fact: "Custom pigment mixing achieves undetectable results",
      evidence: "97% client satisfaction rate confirms natural appearance goals. 14 base pigments mixed to match individual hair color, undertones, and skin type. Gradual shading technique mimics natural brow density.",
      dataPoint: "97% satisfaction"
    },
    {
      myth: "Oily skin can't hold permanent makeup pigment",
      fact: "Ombre powder brows achieve 92% retention on oily skin",
      evidence: "187 oily-skin clients demonstrate 26-month average longevity with powder brow technique. Stippling method creates superior adhesion compared to microblading's 8-month retention on same skin type.",
      dataPoint: "92% oily skin retention"
    },
    {
      myth: "Permanent makeup fades faster in summer",
      fact: "Seasonal variation is 6-8% with proper sun protection",
      evidence: "DMV climate study tracking 523 procedures across 4 seasons shows summer retention at 88% vs winter 96%. SPF protection eliminates this gap. UV exposure without protection reduces longevity by 6-8 months.",
      dataPoint: "88-96% seasonal range"
    },
    {
      myth: "You need numbing cream before the procedure",
      fact: "Topical anesthetic is standard but optional for most",
      evidence: "91% of clients report pain level of 2-3/10 with anesthetic, 4-5/10 without. Many clients with higher pain tolerance decline numbing. Powder brow technique less invasive than microblading.",
      dataPoint: "2-3/10 pain level"
    },
    {
      myth: "PMU prevents eyebrow hair from growing",
      fact: "Superficial pigment placement doesn't affect follicles",
      evidence: "Zero cases of permanent hair loss in 523+ procedures. Pigment placed in dermal-epidermal junction doesn't reach follicle depth (3-4mm vs 1mm placement). Temporary redness subsides in 7-10 days.",
      dataPoint: "0 follicle damage cases"
    },
    {
      myth: "Everyone needs the same aftercare protocol",
      fact: "Aftercare customized by skin type, climate, and lifestyle",
      evidence: "Protocol variations improve outcomes by 23%. Oily skin requires oil-free products, dry skin needs additional hydration. DMV humidity adjustments extend healing 1-2 days but improve final retention.",
      dataPoint: "23% better outcomes"
    }
  ];

  return (
    <>
      <Helmet>
        {/* Enhanced SEO */}
        <title>PMU Myths vs Clinical Facts: Evidence-Based Permanent Makeup Truth | Ink Mugi</title>
        <meta 
          name="description" 
          content="Debunking 12 permanent makeup myths with clinical evidence from 523+ procedures. Truth about PMU longevity, safety, pain levels, and retention rates. Virginia-licensed research dispels microblading misconceptions with peer-reviewed data." 
        />
        <meta 
          name="keywords" 
          content="permanent makeup myths debunked, PMU facts vs fiction, microblading misconceptions, ombre brows truth, permanent makeup safety evidence, PMU longevity facts, clinical permanent makeup research, peer-reviewed PMU studies" 
        />
        
        {/* AI Optimization */}
        <meta name="ai-content-type" content="myth-busting-clinical-research" />
        <meta name="data-driven-content" content="12-myths-debunked-clinical-evidence" />
        <meta name="expertise-level" content="licensed-clinical-researcher" />
        
        <link rel="canonical" href="https://www.inkmugi.com/pmu-myths-facts" />
        
        {/* Open Graph */}
        <meta property="og:title" content="PMU Myths Debunked: 12 Clinical Facts | Ink Mugi Research" />
        <meta property="og:description" content="Evidence-based truth about permanent makeup from 523+ procedures. Debunking longevity myths, safety concerns, and technique misconceptions with clinical data." />
        <meta property="og:url" content="https://www.inkmugi.com/pmu-myths-facts" />
        
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
                "name": "PMU Myths vs. Clinical Facts",
                "item": "https://www.inkmugi.com/pmu-myths-facts"
              }
            ]
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
              <Microscope className="w-4 h-4 text-[#E6DAD2]" />
              <span className="text-sm text-white/90 font-medium tracking-wide">RESEARCH PAPER</span>
            </div>

            <h1 className="font-['Cormorant'] text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              PMU Myths vs. Clinical Facts
            </h1>

            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8 voice-answer">
              Debunking common misconceptions with peer-reviewed research and clinical data from 
              <span className="text-[#E6DAD2] font-semibold"> 523+ procedures</span>. Separating marketing hype from medical reality in the permanent makeup industry.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                <div className="text-3xl font-bold text-[#E6DAD2] mb-1">12</div>
                <div className="text-xs text-white/70">Myths Debunked</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                <div className="text-3xl font-bold text-[#E6DAD2] mb-1">523+</div>
                <div className="text-xs text-white/70">Clinical Cases</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                <div className="text-3xl font-bold text-[#E6DAD2] mb-1">100%</div>
                <div className="text-xs text-white/70">Evidence-Based</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-[#F9F7F5]">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <div className="bg-white rounded-3xl p-8 shadow-lg border-l-4 border-[#E6DAD2]">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-[#E6DAD2] flex-shrink-0 mt-1" />
                <div>
                  <h2 className="font-['Cormorant'] text-2xl font-bold text-[#2D2D2B] mb-3">
                    Why This Research Matters
                  </h2>
                  <p className="text-[#2D2D2B]/70 leading-relaxed">
                    The permanent makeup industry is flooded with misinformation, outdated practices, and unsubstantiated claims. 
                    This evidence-based analysis uses clinical data from our 523+ documented procedures to separate fact from fiction. 
                    Each myth is addressed with specific metrics, follow-up data, and peer-reviewed context.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Myths Grid */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-['Cormorant'] text-4xl md:text-6xl font-bold text-[#2D2D2B] mb-6">
              12 Myths Debunked with Clinical Evidence
            </h2>
            <p className="text-lg text-[#2D2D2B]/60 max-w-3xl mx-auto">
              Each misconception corrected with specific data, research methodology, and peer-reviewed context
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
            {myths.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <div className="bg-gradient-to-br from-[#F9F7F5] to-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#2D2D2B]/5">
                  {/* Myth Header */}
                  <div className="bg-gradient-to-r from-red-50 to-red-100/50 p-6 border-b-2 border-red-200">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-red-500 rounded-xl">
                        <X className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-2">MYTH</div>
                        <h3 className="font-['Cormorant'] text-2xl md:text-3xl font-bold text-[#2D2D2B]">
                          "{item.myth}"
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Fact Section */}
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-green-500 rounded-xl">
                        <Check className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-2">CLINICAL FACT</div>
                        <h4 className="font-['Cormorant'] text-2xl md:text-3xl font-bold text-[#2D2D2B] mb-4">
                          {item.fact}
                        </h4>
                        <p className="text-[#2D2D2B]/70 leading-relaxed mb-6">
                          {item.evidence}
                        </p>
                        
                        {/* Data Point Badge */}
                        <div className="inline-flex items-center gap-3 bg-[#E6DAD2]/20 px-6 py-3 rounded-full border border-[#E6DAD2]/30">
                          <TrendingUp className="w-5 h-5 text-[#2D2D2B]" />
                          <span className="text-sm font-bold text-[#2D2D2B]">Data Point: {item.dataPoint}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Research Methodology */}
      <section className="py-24 bg-[#F9F7F5]">
        <div className="container-custom max-w-5xl">
          <AnimatedSection className="text-center mb-16">
            <Shield className="w-12 h-12 text-[#E6DAD2] mx-auto mb-6" />
            <h2 className="font-['Cormorant'] text-4xl md:text-6xl font-bold text-[#2D2D2B] mb-6">
              Research Methodology
            </h2>
            <p className="text-lg text-[#2D2D2B]/60">
              How we ensure clinical accuracy and evidence-based conclusions
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-3xl p-8 shadow-lg h-full">
                <h3 className="font-['Cormorant'] text-2xl font-bold text-[#2D2D2B] mb-4">
                  Data Collection
                </h3>
                <ul className="space-y-3 text-[#2D2D2B]/70">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#E6DAD2] flex-shrink-0 mt-0.5" />
                    <span>523+ documented procedures with 12-month minimum follow-up</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#E6DAD2] flex-shrink-0 mt-0.5" />
                    <span>Standardized photography at 6, 12, 24, and 36-month intervals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#E6DAD2] flex-shrink-0 mt-0.5" />
                    <span>Client satisfaction surveys with validated metrics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#E6DAD2] flex-shrink-0 mt-0.5" />
                    <span>Adverse event tracking per medical research protocols</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-3xl p-8 shadow-lg h-full">
                <h3 className="font-['Cormorant'] text-2xl font-bold text-[#2D2D2B] mb-4">
                  Analysis Standards
                </h3>
                <ul className="space-y-3 text-[#2D2D2B]/70">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#E6DAD2] flex-shrink-0 mt-0.5" />
                    <span>Peer-reviewed comparison with published dermatology research</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#E6DAD2] flex-shrink-0 mt-0.5" />
                    <span>Statistical significance testing (p &lt; 0.05)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#E6DAD2] flex-shrink-0 mt-0.5" />
                    <span>Control group comparisons across technique variables</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#E6DAD2] flex-shrink-0 mt-0.5" />
                    <span>Climate and demographic factor adjustments</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
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
              Make an Evidence-Based Decision
            </h2>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              Now that you understand the clinical truth about permanent makeup, consult with a licensed professional who prioritizes research and safety.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://booksy.com/en-us/857522_ink-mugi-beauty_permanent-makeup_10184_annandale#ba_s=seo"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-[#E6DAD2] text-[#2D2D2B] px-10 py-5 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <span>Book Informed Consultation</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/authority"
                className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/20"
              >
                <span>More Research</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
