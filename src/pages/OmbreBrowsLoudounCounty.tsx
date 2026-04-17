import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  Shield,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  Eye,
  FileCheck,
  Car,
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import InlineFaqAccordion from '../components/InlineFaqAccordion';
import LocationHero from '../components/LocationHero';
import LocationMidCTA from '../components/LocationMidCTA';

const OmbreBrowsLoudounCounty: React.FC = () => {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": "https://inkmugi.com/#business",
    "name": "Ink Mugi — Ombré Powder Brows",
    "url": "https://inkmugi.com/ombre-brows-loudoun-county-va",
    "logo": "https://inkmugi.com/logo.png",
    "image": "https://inkmugi.com/og-image.jpg",
    "telephone": "+15712838228",
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
      { "@type": "AdministrativeArea", "name": "Loudoun County", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Ashburn", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Leesburg", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Sterling", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "South Riding", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Brambleton", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "AdministrativeArea", "name": "Fairfax County", "containedInPlace": { "@type": "State", "name": "Virginia" } }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "38.8305",
      "longitude": "-77.1964"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "47",
      "bestRating": "5",
      "worstRating": "5"
    }
  };

  const communities = [
    { name: 'Ashburn', time: '30 min' },
    { name: 'Sterling', time: '22 min' },
    { name: 'Leesburg', time: '40 min' },
    { name: 'South Riding', time: '28 min' },
    { name: 'Brambleton', time: '30 min' },
    { name: 'Broadlands', time: '28 min' },
  ];

  const faqs = [
    {
      question: "How far is Ink Mugi from Ashburn?",
      answer: "Our Annandale studio is approximately 30 minutes from Ashburn via Route 28 South to I-66 East, or via the Dulles Toll Road to I-495. Clients from Sterling typically reach us in 22 minutes, and those from South Riding in approximately 28 minutes. Free parking is available at the Heritage Center."
    },
    {
      question: "Why do Loudoun County residents choose a Fairfax County studio?",
      answer: "Clients from Ashburn, Leesburg, and surrounding Loudoun communities select Ink Mugi for the documented safety record (0.19% complication rate across 523+ procedures), the healed-first portfolio standard, and the design approval protocol. For a procedure with permanent results, the caliber of the practitioner and the verifiability of outcomes carry more weight than proximity."
    },
    {
      question: "Is ombré powder the right technique for this region's climate?",
      answer: "Northern Virginia — including Loudoun County — experiences 65–85% humidity in summer months. Ombré powder brows use a stippled deposit method that anchors pigment beneath the skin surface more reliably than incision-based techniques. Our procedure data shows an average retention of 24 months for ombré powder versus 8–12 months for microblading in similar DMV-area clients."
    },
    {
      question: "What is included in the $600 price?",
      answer: "The all-inclusive price covers the design consultation and face mapping, the full 2.5–3 hour procedure with medical-grade numbing, hypoallergenic vegan pigments, a medical-grade aftercare kit, 24/7 text support during healing, and a complimentary perfecting session at 6–8 weeks. No additional fees are assessed."
    },
    {
      question: "What does the healing process look like?",
      answer: "Days 1–3: brows appear bolder than the final result. Days 4–10: light flaking as the upper layer sheds. Days 11–28: color appears lighter as pigment settles. By week 6, the true healed color emerges. A perfecting session at 6–8 weeks ensures ideal density and symmetry. A medical-grade aftercare kit and 24/7 text access are provided throughout."
    },
    {
      question: "Can I see healed results before committing?",
      answer: "Yes. Our entire portfolio consists of outcomes photographed at 6+ weeks post-procedure — the healed stage. Fresh-day photographs are excluded. During your consultation, we review healed results relevant to your skin type and goals so expectations are based on verified outcomes, not first-hour aesthetics."
    },
    {
      question: "Who is not a candidate for this procedure?",
      answer: "Permanent makeup is contraindicated for individuals who are pregnant or nursing, undergoing chemotherapy, taking blood-thinning medications, or managing uncontrolled diabetes. Clients with keloid scarring tendencies or certain autoimmune conditions require individual evaluation. Candidacy is assessed during the initial consultation — and if the procedure is not appropriate, that determination is communicated directly."
    }
  ];

  return (
    <>
      <SEO
        title="Ombré Powder Brows in Loudoun County, VA | Licensed Studio — Ink Mugi"
        description="Precision ombré powder brows for Loudoun County residents — Ashburn, Leesburg, Sterling, South Riding. 523+ documented procedures. 0.19% complication rate. VA-licensed studio with healed-first verification. Schedule an assessment."
        path="/ombre-brows-loudoun-county-va"
        keywords="ombre powder brows Loudoun County VA, permanent makeup Ashburn Virginia, powder brows Leesburg VA, licensed PMU artist Northern Virginia, permanent makeup Sterling VA, healed brow results Loudoun County"
      >
        {/* Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify(businessSchema)}
        </script>

        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Ombré Powder Brows — Loudoun County Area",
            "description": "Precision ombré powder brows for Loudoun County, VA residents. Includes design consultation, full procedure, medical-grade aftercare, healing support, and perfecting touch-up.",
            "provider": { "@id": "https://inkmugi.com/#business" },
            "areaServed": { "@type": "AdministrativeArea", "name": "Loudoun County", "containedInPlace": { "@type": "State", "name": "Virginia" } },
            "offers": {
              "@type": "Offer",
              "price": "600",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>

        {/* FAQ Schema */}
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

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://inkmugi.com/" },
              { "@type": "ListItem", "position": 2, "name": "Permanent Makeup in Fairfax County", "item": "https://inkmugi.com/permanent-makeup-fairfax-county" },
              { "@type": "ListItem", "position": 3, "name": "Loudoun County, VA", "item": "https://inkmugi.com/ombre-brows-loudoun-county-va" }
            ]
          })}
        </script>
      </SEO>

      <LocationHero
        city="Loudoun County"
        badgeText="VA-Licensed · Serving Loudoun County"
        headline={<>Ombré Powder Brows in<br /><span className="text-[#9A7B69]">Loudoun County, Virginia</span></>}
        subtext="Precision permanent makeup for Ashburn, Leesburg, Sterling, and South Riding residents — performed at our VA-licensed Annandale studio with 523+ documented procedures and healed-result verification at six weeks."
        secondaryText="22–40 minutes from most Loudoun communities. A measured distance for a measured outcome."
        heroImage="https://live.staticflickr.com/65535/54365160327_5c790ba60a_c_d.jpg"
        heroImageAlt="Ombré powder brows for Loudoun County, Virginia clients at Ink Mugi"
        primaryCTA={{ text: 'Schedule an Assessment', to: '/booking' }}
        secondaryCTA={{ type: 'link', text: 'View Healed Results', to: '/gallery' }}
      />

      {/* ═══════════════════════════════════════════
          TRUST CREDENTIALS
      ═══════════════════════════════════════════ */}
      <section className="py-6 bg-white border-b border-[#E6DAD2]/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-cormorant font-semibold text-[#2D2D2B]">523+</p>
              <p className="text-sm text-[#2D2D2B]/60 mt-1">Documented Procedures</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-cormorant font-semibold text-[#9A7B69]">0.19%</p>
              <p className="text-sm text-[#2D2D2B]/60 mt-1">Documented Complication Rate</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-cormorant font-semibold text-[#2D2D2B]">6-Week</p>
              <p className="text-sm text-[#2D2D2B]/60 mt-1">Healed-Result Verification</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-cormorant font-semibold text-[#2D2D2B]">5.0</p>
              <p className="text-sm text-[#2D2D2B]/60 mt-1">Client Rating (47+ Reviews)</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHY LOUDOUN CLIENTS CHOOSE THE ANNANDALE STUDIO
          Tone: Address the geography question directly. No overreach.
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              Why Residents Choose a Studio Outside Their County
            </h2>
            <div className="space-y-5 text-[#2D2D2B]/75 leading-relaxed">
              <p>
                Permanent makeup produces a result that lasts 18–30 months. For a procedure with that duration of consequence, the practitioner's documented outcomes, safety record, and verification standards carry more weight than drive time. Loudoun County clients who select Ink Mugi do so after researching the distinction between fresh-day aesthetics and healed results — and after finding a studio that documents the difference.
              </p>
              <p>
                Our Annandale studio is 22 minutes from Sterling, 30 minutes from Ashburn, and approximately 40 minutes from Leesburg — a straightforward route via Route 28 or the Dulles Toll Road. For professionals in the Dulles Technology Corridor, the proximity is particularly direct. Free parking is available at the Heritage Center, and the studio environment is private and unrushed.
              </p>
              <p>
                The decision to travel for a permanent procedure is not unusual among the research-driven clients we serve. Many report that verifiable healed outcomes, a published complication rate, and a design approval protocol were the factors that made the distance worth it — not convenience, but confidence in the standard being applied.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="bg-[#F9F7F5] rounded-2xl p-8 h-full">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm">
                  <FileCheck className="w-6 h-6 text-[#9A7B69]" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-[#2D2D2B]">Design Approval Protocol</h3>
                <p className="text-[#2D2D2B]/65 text-sm leading-relaxed">
                  Your brow shape is mapped to your bone structure and drawn on your face for review. Symmetry, thickness, and arch are adjusted until you give explicit approval. No pigment is applied until you confirm.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-[#F9F7F5] rounded-2xl p-8 h-full">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm">
                  <Eye className="w-6 h-6 text-[#9A7B69]" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-[#2D2D2B]">Healed-Result Verification</h3>
                <p className="text-[#2D2D2B]/65 text-sm leading-relaxed">
                  Every procedure is documented at the healed stage — a minimum of six weeks post-appointment. Our portfolio contains exclusively healed outcomes. Fresh-day photographs are not part of our verification process.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-[#F9F7F5] rounded-2xl p-8 h-full">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm">
                  <Shield className="w-6 h-6 text-[#9A7B69]" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-[#2D2D2B]">Documented Safety Record</h3>
                <p className="text-[#2D2D2B]/65 text-sm leading-relaxed">
                  A 0.19% complication rate across 523+ procedures. Virginia body art licensure, professional liability insurance, and hospital-grade sterilization protocols verified before every appointment.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CLIMATE & TECHNIQUE
          Tone: Regional expertise. Data-supported.
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              Technique Selection for Northern Virginia's Climate
            </h2>
            <div className="space-y-5 text-[#2D2D2B]/75 leading-relaxed">
              <p>
                Loudoun County shares Northern Virginia's characteristic climate pattern: elevated humidity from May through September, UV index values that regularly exceed 8, and seasonal temperature swings that stress the skin's ability to retain superficial pigment deposits. These conditions influence which permanent makeup techniques perform reliably over time.
              </p>
              <p>
                Ombré powder brows deposit pigment through controlled stippling beneath the epidermis — deeper and more evenly than the shallow incisions used in microblading. In humid conditions, incision-based techniques are more susceptible to pigment migration and accelerated fading. The stippled method produces a result that holds its gradient structure and color fidelity through the region's most challenging months.
              </p>
              <p>
                For clients in the Ashburn and Sterling technology corridor — many of whom work in climate-controlled office environments but commute and spend weekends outdoors — the ombré powder technique provides consistent retention regardless of daily environmental variation. Our data shows 24-month average retention in DMV-area clients, compared to 8–12 months for microblading under the same conditions.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          HEALED-FIRST STANDARD — Condensed Authority Declaration
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#2D2D2B] text-white">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-block text-[#E6DAD2]/50 tracking-[0.2em] text-xs uppercase mb-4">
              Our Standard
            </span>
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-6">
              The Healed-First Standard
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed text-left max-w-2xl mx-auto">
              <p>
                Permanent makeup results shift and settle over six to eight weeks. The healed result — not the day-one appearance — is what a client lives with. At Ink Mugi, that is the only result we document, evaluate, and build our practice around.
              </p>
              <p>
                Every procedure in our portfolio is photographed at the healed stage. Pigment depth, gradient density, and undertone calibration are all selected for healed-outcome predictability. Across 523+ documented procedures, this approach has produced a complication rate of 0.19% — a figure derived from verified healed outcomes, not procedural volume alone.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { icon: FileCheck, title: 'Design Approval Before Pigment', desc: 'Shape mapped, reviewed on your face, and approved before any permanent step begins.' },
              { icon: Eye, title: 'Healed Portfolio Only', desc: 'Every result photographed at 6+ weeks. No fresh-day images in our documentation.' },
              { icon: Shield, title: '0.19% Complication Rate', desc: '523+ documented procedures. Rigorous technique and candidacy screening.' },
              { icon: Award, title: 'VA Licensed & Insured', desc: 'Body art licensure, liability insurance, hospital-grade sterilization.' },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-white/[0.06] border border-white/10 rounded-xl p-6 h-full text-center">
                  <div className="w-10 h-10 bg-[#E6DAD2] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-5 h-5 text-[#2D2D2B]" />
                  </div>
                  <h3 className="font-semibold text-[#E6DAD2] mb-2 text-sm">{item.title}</h3>
                  <p className="text-xs text-white/55 leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PROCESS OVERVIEW — Condensed Protocol
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              From Assessment to Healed Outcome
            </h2>
            <p className="text-[#2D2D2B]/60 max-w-2xl mx-auto">
              Every stage is documented and reviewed. The protocol is designed for clarity and informed consent at each step.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            {[
              {
                step: '01',
                title: 'Consultation & Face Mapping',
                duration: '30–45 minutes',
                detail: 'Facial proportions, bone structure, and skin undertone are assessed. A brow shape is designed specifically for your anatomy — not from a template. You review and approve the design before any pigment is prepared.'
              },
              {
                step: '02',
                title: 'Precision Procedure',
                duration: '2.5–3 hours',
                detail: 'Medical-grade numbing is applied in advance. Pigment is deposited through controlled stippling, building gradient density layer by layer. Communication is maintained throughout the procedure.'
              },
              {
                step: '03',
                title: 'Guided Healing Protocol',
                duration: '6 weeks',
                detail: 'A medical-grade aftercare kit and 24/7 text access support each healing phase. The healing timeline follows a documented, predictable trajectory — bolder days 1–3, flaking days 4–10, settlement through week 6.'
              },
              {
                step: '04',
                title: 'Perfecting Session',
                duration: 'At 6–8 weeks',
                detail: 'A complimentary perfecting session refines density, adjusts symmetry, and verifies the healed result against the approved design. This session is included in every appointment.'
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className={`flex gap-6 ${i < 3 ? 'pb-10 border-l-2 border-[#E6DAD2] ml-4' : 'ml-4'} pl-8 relative`}>
                  <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-[#2D2D2B] flex items-center justify-center">
                    <span className="text-[10px] font-bold text-white">{item.step}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-[#2D2D2B]">{item.title}</h3>
                      <span className="text-xs text-[#9A7B69] font-medium">{item.duration}</span>
                    </div>
                    <p className="text-[#2D2D2B]/65 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PROXIMITY — Loudoun County Communities
      ═══════════════════════════════════════════ */}
      <section className="py-16 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-3 text-[#2D2D2B]">
              Accessible from Loudoun County Communities
            </h2>
            <p className="text-[#2D2D2B]/55 max-w-2xl mx-auto text-sm">
              Our Annandale studio is a direct route from communities across Loudoun County via Route 28, the Dulles Toll Road, or I-66. Free parking at the Heritage Center.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10 max-w-5xl mx-auto">
            {communities.map((hood, index) => (
              <AnimatedSection key={hood.name} delay={index * 0.08}>
                <div className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                  <Car className="w-5 h-5 text-[#9A7B69] mx-auto mb-2" />
                  <p className="font-medium text-[#2D2D2B] text-sm">{hood.name}</p>
                  <p className="text-[#9A7B69] font-semibold text-sm">{hood.time}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden shadow-lg max-w-4xl mx-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d99308.95!2d-77.42!3d38.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x89b63e4afb6a3c3f%3A0x15e5b3e06de34e1f!2sAshburn%2C%20VA!3m2!1d39.0437567!2d-77.4874416!4m5!1s0x89b64faa3b8d9e57%3A0x7b0da9b5a7a0b8f0!2s7857%20Heritage%20Dr%20%23330%2C%20Annandale%2C%20VA%2022003!3m2!1d38.8303726!2d-77.1969261!5e0!3m2!1sen!2sus!4v1703444800000!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Directions from Loudoun County to Ink Mugi — Annandale Studio"
              />
            </div>
            <p className="text-center text-[#2D2D2B]/50 mt-4 text-sm">
              7857 Heritage Dr #330, Annandale, VA 22003 · Free parking available
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          INTERNAL LINKING — Connect to Authority Structure
      ═══════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-cormorant font-medium text-[#2D2D2B] mb-3">
              Resources &amp; Service Areas
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Link to="/permanent-makeup-fairfax-county" className="bg-[#F9F7F5] rounded-xl p-4 text-center hover:shadow-md transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors text-sm">Fairfax County Guide</p>
              <p className="text-xs text-[#2D2D2B]/50 mt-1">County-level authority resource</p>
            </Link>
            <Link to="/signature-ombre-brows" className="bg-[#F9F7F5] rounded-xl p-4 text-center hover:shadow-md transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors text-sm">Ombré Powder Brows</p>
              <p className="text-xs text-[#2D2D2B]/50 mt-1">Signature technique details</p>
            </Link>
            <Link to="/gallery" className="bg-[#F9F7F5] rounded-xl p-4 text-center hover:shadow-md transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors text-sm">Healed Results Gallery</p>
              <p className="text-xs text-[#2D2D2B]/50 mt-1">6-week verified outcomes</p>
            </Link>
            <Link to="/aftercare-guide" className="bg-[#F9F7F5] rounded-xl p-4 text-center hover:shadow-md transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors text-sm">Aftercare Protocol</p>
              <p className="text-xs text-[#2D2D2B]/50 mt-1">Complete healing guide</p>
            </Link>
            <Link to="/pmu-cost-guide-dmv" className="bg-[#F9F7F5] rounded-xl p-4 text-center hover:shadow-md transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors text-sm">DMV Cost Guide</p>
              <p className="text-xs text-[#2D2D2B]/50 mt-1">Pricing context</p>
            </Link>
            <Link to="/about" className="bg-[#F9F7F5] rounded-xl p-4 text-center hover:shadow-md transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors text-sm">About the Specialist</p>
              <p className="text-xs text-[#2D2D2B]/50 mt-1">Credentials &amp; philosophy</p>
            </Link>
            <Link to="/faq" className="bg-[#F9F7F5] rounded-xl p-4 text-center hover:shadow-md transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors text-sm">Full FAQ</p>
              <p className="text-xs text-[#2D2D2B]/50 mt-1">Detailed answers</p>
            </Link>
            <Link to="/blog" className="bg-[#F9F7F5] rounded-xl p-4 text-center hover:shadow-md transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors text-sm">PMU Knowledge Base</p>
              <p className="text-xs text-[#2D2D2B]/50 mt-1">Guides &amp; insights</p>
            </Link>
            <Link to="/licensed-pmu-artist-annandale" className="bg-[#F9F7F5] rounded-xl p-4 text-center hover:shadow-md transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors text-sm">Annandale Studio</p>
              <p className="text-xs text-[#2D2D2B]/50 mt-1">Our home location</p>
            </Link>
          </div>
        </div>
      </section>

      <LocationMidCTA
        subtext="Ashburn, Leesburg, and Sterling residents trust Ink Mugi for precision ombré brows — VA-licensed with 523+ documented procedures."
      />

      {/* ═══════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <InlineFaqAccordion
                faqs={faqs}
                title="Questions from Loudoun County Clients"
                subtitle="Informed answers for residents evaluating permanent makeup"
                maxVisible={7}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Microblading vs Powder Brows — Local Comparison */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-3xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              Considering Microblading in Loudoun County?
            </h2>
            <p className="text-[#2D2D2B]/80 text-lg leading-relaxed mb-4">
              With Loudoun County's growth and increasing demand for premium beauty services, many new residents are exploring brow procedures for the first time. If you're comparing microblading to powder brows, it's essential to understand how Northern Virginia's humid climate impacts technique longevity. The data is consistent: microblading fades 30–40% faster in our region than in arid climates, while powder brows maintain their gradient structure significantly longer.
            </p>
            <p className="text-[#2D2D2B]/70 leading-relaxed mb-6">
              Whether you're in Ashburn, Leesburg, Sterling, or South Riding — the climate factor applies equally. Make an informed choice.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link to="/microblading-vs-powder-brows" className="flex items-center gap-2 p-4 bg-[#F9F7F5] rounded-lg border border-[#E6DAD2] hover:shadow-md transition-shadow">
                <ArrowRight className="w-5 h-5 text-amber-700 flex-shrink-0" />
                <span className="text-[#2D2D2B] text-sm font-medium">Microblading vs Powder Brows Comparison</span>
              </Link>
              <Link to="/why-microblading-fades" className="flex items-center gap-2 p-4 bg-[#F9F7F5] rounded-lg border border-[#E6DAD2] hover:shadow-md transition-shadow">
                <ArrowRight className="w-5 h-5 text-amber-700 flex-shrink-0" />
                <span className="text-[#2D2D2B] text-sm font-medium">Why Microblading Fades in the DMV</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FINAL CTA — Assessment, Not Booking
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-[#2D2D2B] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://live.staticflickr.com/65535/54363160242_7975c4f42c_o_d.jpg')] bg-cover bg-center opacity-[0.06]"></div>
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-cormorant font-medium mb-6">
              When You Are Ready, We Are Here.
            </h2>
            <p className="text-base text-[#F9F7F5]/75 mb-8 leading-relaxed max-w-2xl mx-auto">
              A consultation is an assessment — not a commitment. Your facial structure is evaluated, the proposed design is reviewed on your face, and candidacy is determined. If the procedure is not appropriate, that finding is communicated directly. The drive from Loudoun County takes 22–40 minutes. The decision deserves measured consideration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#E6DAD2] text-[#2D2D2B] rounded-full font-medium hover:bg-[#F0E4D8] transition-all"
              >
                Schedule an Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-all"
              >
                View Healed Results
              </Link>
            </div>
            <a
              href="tel:+15712838228"
              className="inline-flex items-center justify-center gap-2 mt-6 text-[#E6DAD2]/80 hover:text-white transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              (571) 283-8228
            </a>
            <div className="flex flex-wrap justify-center gap-6 text-xs text-white/40 mt-8">
              <span className="flex items-center gap-1.5">
                <CheckCircle size={12} className="text-[#E6DAD2]/50" />
                Serving Loudoun &amp; Fairfax Counties
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle size={12} className="text-[#E6DAD2]/50" />
                By consultation only
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle size={12} className="text-[#E6DAD2]/50" />
                VA Licensed &amp; Insured
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default OmbreBrowsLoudounCounty;
