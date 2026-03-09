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
  Clock,
  AlertTriangle,
  BookOpen
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import InlineFaqAccordion from '../components/InlineFaqAccordion';
import LocationHero from '../components/LocationHero';
import LocationMidCTA from '../components/LocationMidCTA';

const PermanentMakeupFairfaxCounty: React.FC = () => {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": "https://www.inkmugi.com/#business",
    "name": "Ink Mugi — Permanent Makeup Studio",
    "url": "https://www.inkmugi.com/permanent-makeup-fairfax-county",
    "logo": "https://www.inkmugi.com/logo.png",
    "image": "https://www.inkmugi.com/og-image.jpg",
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
      { "@type": "AdministrativeArea", "name": "Fairfax County", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Annandale", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "McLean", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Vienna", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Arlington", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Reston", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Fairfax", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Great Falls", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Falls Church", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Tysons", "containedInPlace": { "@type": "State", "name": "Virginia" } }
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

  const faqs = [
    {
      question: "What is the difference between ombré powder brows and microblading?",
      answer: "Microblading uses a manual blade to create shallow, hair-like incisions in the skin. Ombré powder brows use a machine-based stippling technique that deposits pigment in fine dots beneath the skin surface. The stippled method produces a softer, graduated result that resembles pencil or powder makeup — and it retains significantly better in humid climates like Northern Virginia's. At Ink Mugi, our data across 330+ procedures shows ombré powder averaging 24 months of retention versus 8–12 months for microblading in DMV-area clients."
    },
    {
      question: "What should I verify before choosing a permanent makeup artist in Fairfax County?",
      answer: "Virginia requires body art practitioners to hold a current license issued by the Virginia Department of Health. Verify that your provider maintains active licensure, carries professional liability insurance, uses single-use disposable equipment, and can show healed results — not just day-one photographs. A credentialed studio will also screen for medical contraindications before performing any procedure."
    },
    {
      question: "How long do ombré powder brows last in Northern Virginia's climate?",
      answer: "In the DMV region's humidity range of 65–85% during summer months, ombré powder brows typically retain well for 18–30 months depending on skin type, sun exposure, and skincare routine. Oily skin types tend to experience slightly faster fading. A perfecting touch-up at 6–8 weeks after the initial procedure optimizes long-term density and retention."
    },
    {
      question: "What does the healing process involve?",
      answer: "Healing occurs in documented phases. Days 1–3: brows appear bolder and darker than the final result. Days 4–10: light flaking as the upper pigment layer sheds naturally. Days 11–28: color appears lighter as pigment settles beneath the skin surface. By week 6, true healed color emerges. A complimentary perfecting session at 6–8 weeks allows for density and symmetry refinement."
    },
    {
      question: "How much does permanent makeup cost in Fairfax County?",
      answer: "In the Fairfax County and Northern Virginia market, ombré powder brows typically range from $400 to $800 depending on the studio, technique, and inclusions. At Ink Mugi, the all-inclusive price of $600 covers the design consultation, full procedure, medical-grade aftercare kit, 24/7 healing support, and a complimentary 6–8 week perfecting touch-up. No additional fees apply."
    },
    {
      question: "Who should not get permanent makeup?",
      answer: "Permanent makeup is contraindicated for individuals who are pregnant or nursing, undergoing chemotherapy or radiation, taking blood-thinning medications, or managing uncontrolled diabetes. Clients with keloid scarring tendencies or active skin conditions in the brow area require evaluation before candidacy is determined. Responsible screening is a foundational part of safe permanent makeup practice."
    },
    {
      question: "Will my brows look natural, or is there a risk of them appearing overdone?",
      answer: "Ombré powder brows are specifically designed to replicate the appearance of soft pencil or powder makeup — not solid lines or blocks of color. The gradient builds from a diffused, airy front to a gently defined tail, matching how natural brows grow. At Ink Mugi, every brow shape is mapped to the client's bone structure and approved on the face before any pigment is applied. The portfolio shows exclusively healed results at 6+ weeks."
    },
    {
      question: "Is permanent makeup regulated in Virginia?",
      answer: "Yes. The Virginia Department of Health regulates body art procedures, including permanent makeup, under the Virginia Body Art Regulations (12 VAC 5-460). Practitioners must maintain active licensure, comply with infection control standards, and operate in facilities that meet specific sanitation requirements. Clients should verify that any provider they consider holds current Virginia body art licensure."
    },
    {
      question: "What does 'healed-first' documentation mean?",
      answer: "Healed-first documentation means that results are evaluated and photographed after the full healing process — at minimum 6 weeks post-procedure. Fresh permanent makeup always appears bolder and more saturated than the final outcome. Documenting at the healed stage provides an accurate representation of what clients can expect. Ink Mugi's portfolio consists exclusively of healed results, and the studio's documented complication rate of 0.19% is calculated from healed outcomes across 330+ procedures."
    },
    {
      question: "How do I schedule a consultation at Ink Mugi?",
      answer: "Consultations can be scheduled online through our booking page or by calling (571) 283-8228. The initial consultation includes facial assessment, design mapping, and a review of healed results relevant to your skin type and goals. There is no obligation to proceed — the consultation is an assessment, not a commitment."
    }
  ];

  return (
    <>
      <SEO
        title="Permanent Makeup in Fairfax County, Virginia | Licensed Studio — Ink Mugi"
        description="Comprehensive guide to permanent makeup in Fairfax County, VA. Virginia-licensed studio with 330+ documented procedures, 0.19% complication rate, and healed-first verification. Serving McLean, Vienna, Reston, Arlington, Great Falls, and all of Northern Virginia."
        path="/permanent-makeup-fairfax-county"
        keywords="permanent makeup Fairfax County VA, ombre powder brows Fairfax County, licensed PMU artist Northern Virginia, permanent makeup near me Virginia, healed brow results Fairfax County, permanent makeup safety Virginia"
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
            "name": "Permanent Makeup — Fairfax County",
            "description": "Precision ombré powder brows for Fairfax County, Virginia. Includes design consultation, full procedure, medical-grade aftercare, healing support, and perfecting touch-up.",
            "provider": { "@id": "https://www.inkmugi.com/#business" },
            "areaServed": { "@type": "AdministrativeArea", "name": "Fairfax County", "containedInPlace": { "@type": "State", "name": "Virginia" } },
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
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.inkmugi.com/" },
              { "@type": "ListItem", "position": 2, "name": "Permanent Makeup in Fairfax County", "item": "https://www.inkmugi.com/permanent-makeup-fairfax-county" }
            ]
          })}
        </script>
      </SEO>

      <LocationHero
        city="Fairfax County"
        badgeText="VA-Licensed · Fairfax County"
        headline={<>Permanent Makeup in<br /><span className="text-[#9A7B69]">Fairfax County, Virginia</span></>}
        subtext="A county-level resource for residents evaluating permanent makeup. Technique selection, Virginia licensing requirements, safety standards, and what to expect from the healing process — assessed with clinical precision."
        secondaryText="Ink Mugi operates from Annandale, VA — serving McLean, Vienna, Reston, Great Falls, Arlington, Tysons, Falls Church, and communities throughout Fairfax County."
        heroImage="https://live.staticflickr.com/65535/54366410490_6e3bac2287_c_d.jpg"
        heroImageAlt="Permanent makeup services for Fairfax County, Virginia at Ink Mugi studio"
        primaryCTA={{ text: 'Schedule an Assessment', to: '/booking' }}
        secondaryCTA={{ type: 'link', text: 'View Healed Results', to: '/gallery' }}
      />

      {/* ═══════════════════════════════════════════
          TRUST CREDENTIALS — Immediate proof points
      ═══════════════════════════════════════════ */}
      <section className="py-6 bg-white border-b border-[#E6DAD2]/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-cormorant font-semibold text-[#2D2D2B]">330+</p>
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
          SECTION 1 — What Is Permanent Makeup (Educational)
          Tone: Neutral, definitional, institutional.
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-[#9A7B69]" />
              <span className="text-[#2D2D2B]/40 tracking-[0.2em] text-xs uppercase">Understanding the Procedure</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              What Is Permanent Makeup?
            </h2>
            <div className="space-y-5 text-[#2D2D2B]/75 leading-relaxed">
              <p>
                Permanent makeup — also referred to as cosmetic tattooing or micropigmentation — is a procedure that deposits pigment beneath the skin surface to replicate the appearance of conventional makeup. When performed by a licensed, trained practitioner, the result enhances facial features through subtle shading and defined contours without the appearance of a visible procedure.
              </p>
              <p>
                The most commonly requested application is eyebrow enhancement, where techniques such as ombré powder brows, microblading, and nano brows are used to restore shape, density, and symmetry. Other applications include eyeliner definition and lip tinting, though eyebrow procedures account for the majority of permanent makeup appointments in the Fairfax County and Northern Virginia region.
              </p>
              <p>
                Unlike traditional tattoo ink, cosmetic pigments are specifically formulated for facial application. They are designed to soften and settle naturally over time rather than intensify. The procedures are performed with precision instruments calibrated for superficial pigment deposit — a depth of approximately 0.5–1.0mm — which determines the technique's semi-permanent nature and its ability to heal naturally.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — Ombré Powder Brows: Technique & Climate
          Tone: Educational, data-supported, regionally specific.
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              Ombré Powder Brows: Technique and Regional Considerations
            </h2>
            <div className="space-y-5 text-[#2D2D2B]/75 leading-relaxed">
              <p>
                Ombré powder brows use a machine-based stippling method to deposit pigment in fine, layered dots beneath the skin surface. The technique produces a soft, graduated density — lighter and more diffused at the front of the brow, building to a gently defined tail. The healed result resembles the appearance of professionally applied powder or pencil makeup.
              </p>
              <p>
                In Fairfax County and the broader Northern Virginia region, humidity levels range from 65% to 85% during summer months, with UV index values regularly exceeding 8 from May through September. These environmental factors directly influence pigment retention. Techniques that rely on shallow incisions — such as microblading — are more susceptible to accelerated fading and blurring in high-humidity conditions. The stippled deposit method used in ombré powder brows anchors pigment more reliably beneath the epidermis, producing more consistent retention across seasonal shifts.
              </p>
              <p>
                Data from Ink Mugi's 330+ documented procedures indicates an average retention of 24 months for ombré powder brows compared to 8–12 months for microblading among DMV-area clients. The difference is particularly pronounced in clients with oily or combination skin — a common skin type in the mid-Atlantic region — where the stippled pigment maintains cleaner healed edges and more predictable color stability.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl p-8 h-full">
                <div className="w-12 h-12 bg-[#F9F7F5] rounded-xl flex items-center justify-center mb-5 shadow-sm">
                  <Eye className="w-6 h-6 text-[#9A7B69]" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-[#2D2D2B]">Designed to Be Undetectable</h3>
                <p className="text-[#2D2D2B]/65 text-sm leading-relaxed">
                  The graduated density replicates how natural brows grow. No harsh front edges. No blocky shapes. The healed result reads as an enhancement, not a procedure — precisely calibrated for your facial proportions.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl p-8 h-full">
                <div className="w-12 h-12 bg-[#F9F7F5] rounded-xl flex items-center justify-center mb-5 shadow-sm">
                  <Clock className="w-6 h-6 text-[#9A7B69]" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-[#2D2D2B]">Climate-Assessed Retention</h3>
                <p className="text-[#2D2D2B]/65 text-sm leading-relaxed">
                  Northern Virginia's 65–85% summer humidity challenges most permanent makeup techniques. Ombré powder retains 88% of its applied density through peak humidity months — verified through our documented client outcomes across the county.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white rounded-2xl p-8 h-full">
                <div className="w-12 h-12 bg-[#F9F7F5] rounded-xl flex items-center justify-center mb-5 shadow-sm">
                  <Shield className="w-6 h-6 text-[#9A7B69]" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-[#2D2D2B]">Oily &amp; Combination Skin Efficacy</h3>
                <p className="text-[#2D2D2B]/65 text-sm leading-relaxed">
                  Our procedure records indicate ombré powder outperforms incision-based techniques by over three times in oily skin retention. If previous permanent makeup has blurred or faded prematurely, the stippled method is specifically designed for your skin type.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — Virginia Licensing & Safety Standards
          Tone: Regulatory, factual, non-accusatory.
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              Virginia Licensing and Safety Standards for Permanent Makeup
            </h2>
            <div className="space-y-5 text-[#2D2D2B]/75 leading-relaxed">
              <p>
                In Virginia, permanent makeup is classified as a body art procedure and regulated by the Virginia Department of Health under 12 VAC 5-460. Practitioners are required to maintain active body art licenses, operate in facilities that meet documented sanitation standards, and follow infection control protocols consistent with public health guidelines.
              </p>
              <p>
                When evaluating a permanent makeup provider in Fairfax County, residents are encouraged to verify the following: current Virginia body art licensure, professional liability insurance, use of single-use disposable equipment, compliance with sterilization and sanitation protocols, and a willingness to conduct medical screening before performing procedures.
              </p>
              <p>
                Documentation also matters. Studios that photograph and track healed results — not only day-one outcomes — demonstrate a commitment to measuring actual outcomes rather than transient first-impression aesthetics. This practice is not currently required by Virginia regulation, but it reflects a higher standard of clinical accountability.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Award, title: 'Virginia Body Art License', desc: 'Compliance with Virginia Department of Health regulations (12 VAC 5-460) for body art practitioners operating in Fairfax County.' },
              { icon: Shield, title: 'Professional Liability Insurance', desc: 'Coverage that reflects a practice-level commitment to accountability — beyond minimum regulatory requirements.' },
              { icon: FileCheck, title: 'Hospital-Grade Sterilization', desc: 'Single-use disposable cartridges and medical-grade surface protocols verified before every procedure.' },
              { icon: Eye, title: 'Skin-Tested Pigments', desc: 'Hypoallergenic vegan pigments selected for biocompatibility and formulated to avoid oxidation or color shift over time.' },
              { icon: AlertTriangle, title: 'Client Screening Protocol', desc: 'Medical contraindications are evaluated during the initial consultation. Candidacy is not assumed — it is assessed.' },
              { icon: CheckCircle, title: 'Healed-Outcome Documentation', desc: 'Results are evaluated and recorded at the healed stage. Day-one aesthetics are excluded from outcome documentation.' },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-[#F9F7F5] rounded-xl p-6 h-full">
                  <div className="w-10 h-10 bg-[#E6DAD2] rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-[#2D2D2B]" />
                  </div>
                  <h3 className="font-semibold text-[#2D2D2B] mb-2 text-sm">{item.title}</h3>
                  <p className="text-sm text-[#2D2D2B]/65 leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — The Healed-First Standard
          Tone: Declarative authority. No comparison. Declaration.
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#2D2D2B] text-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="inline-block text-[#E6DAD2]/50 tracking-[0.2em] text-xs uppercase mb-4">
                Our Standard
              </span>
              <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-6">
                The Healed-First Standard
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Pigment shifts, softens, and settles over six to eight weeks following a permanent makeup procedure. The result a client lives with is the healed result — and that is the only result this studio evaluates, documents, and measures success by.
                </p>
                <p>
                  At Ink Mugi, every procedure is photographed at the healed stage — a minimum of six weeks post-appointment. Our portfolio, consultations, and clinical expectations are structured around healed outcomes. Fresh-day aesthetics are excluded from our documentation.
                </p>
                <p>
                  This standard governs every protocol decision: pigment deposit depth, gradient density calibration, and undertone selection. Across 330+ documented procedures, this approach has produced a complication rate of 0.19% — a figure calculated from healed outcomes, not procedural volume alone.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-4">
                {[
                  { icon: FileCheck, title: 'Design Approved Before Pigment', desc: 'Brow shape is mapped to bone structure and reviewed on the face. Nothing permanent begins without explicit client approval.' },
                  { icon: Eye, title: 'Healed Portfolio Verification', desc: 'Every result in our gallery is photographed at 6+ weeks. The portfolio reflects healed outcomes exclusively.' },
                  { icon: Shield, title: '0.19% Documented Complication Rate', desc: 'Across 330+ procedures. Rigorous technique, candidacy screening, and comprehensive aftercare protocol.' },
                  { icon: Award, title: 'Virginia Licensed & Insured', desc: 'Full body art licensure, professional liability insurance, and hospital-grade sterilization for every appointment.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start bg-white/[0.06] border border-white/10 rounded-xl p-5">
                    <div className="w-10 h-10 bg-[#E6DAD2] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="w-5 h-5 text-[#2D2D2B]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#E6DAD2] mb-1 text-sm">{item.title}</h3>
                      <p className="text-sm text-white/55 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — Who Is a Candidate?
          Tone: Clinical, informative, non-exclusionary.
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              Candidacy Assessment: Who Is — and Is Not — a Candidate
            </h2>
            <div className="space-y-5 text-[#2D2D2B]/75 leading-relaxed">
              <p>
                Permanent makeup is appropriate for a wide range of skin types, ages, and lifestyles. Ombré powder brows are particularly well suited for clients with oily, combination, or mature skin — skin types that tend to respond less predictably to incision-based techniques. The procedure also serves clients experiencing hair loss from alopecia, medication, or age-related thinning who seek natural-looking density restoration.
              </p>
              <p>
                Candidacy is evaluated during the initial consultation. Factors assessed include skin type and condition, medical history, current medications, and existing permanent makeup. Not every prospective client is a candidate for every technique, and certain conditions require that a procedure be deferred or declined entirely.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-8 h-full">
                <h3 className="text-lg font-semibold text-[#2D2D2B] mb-5 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#9A7B69]" />
                  Typically Appropriate
                </h3>
                <ul className="space-y-3">
                  {[
                    'Oily, combination, dry, or normal skin types',
                    'Clients with sparse, uneven, or thinning brows',
                    'Alopecia or medical-related hair loss',
                    'Individuals seeking time-efficient daily routines',
                    'Prior permanent makeup that has faded naturally',
                    'Adults across a wide age range (18+)',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#2D2D2B]/70">
                      <CheckCircle className="w-4 h-4 text-[#9A7B69] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="bg-white rounded-2xl p-8 h-full">
                <h3 className="text-lg font-semibold text-[#2D2D2B] mb-5 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-[#2D2D2B]/50" />
                  Contraindications
                </h3>
                <ul className="space-y-3">
                  {[
                    'Pregnant or nursing',
                    'Currently undergoing chemotherapy or radiation',
                    'Taking blood-thinning medications',
                    'Uncontrolled diabetes',
                    'Keloid scarring tendency',
                    'Active skin conditions in the brow area',
                    'Certain autoimmune conditions (assessed individually)',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#2D2D2B]/70">
                      <AlertTriangle className="w-4 h-4 text-[#2D2D2B]/40 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6 — Healing Timeline
          Tone: Clinical transparency. Phase-by-phase.
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Healing Timeline: What to Expect at Each Phase
            </h2>
            <p className="text-[#2D2D2B]/60 max-w-2xl mx-auto">
              The healing process follows a documented, predictable trajectory. Understanding each phase reduces uncertainty and supports proper aftercare compliance.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            {[
              {
                phase: 'Days 1–3',
                title: 'Initial Appearance',
                desc: 'Brows appear bolder and darker than the final result. This is expected — the pigment is sitting at the surface and has not yet settled into the dermal layer. Mild redness and slight swelling may be present in the first 24 hours.',
              },
              {
                phase: 'Days 4–10',
                title: 'Flaking Phase',
                desc: 'The upper layer of pigmented skin begins to shed naturally. Light flaking is a normal part of the healing process. The brows may appear patchy or uneven during this period — this is temporary and expected.',
              },
              {
                phase: 'Days 11–28',
                title: 'Pigment Settlement',
                desc: 'Color appears lighter than the final result as pigment continues to settle beneath the skin surface. The true shade has not yet emerged. Clients often experience a "too light" phase during this window — this resolves as the skin fully heals.',
              },
              {
                phase: 'Week 6+',
                title: 'True Healed Result',
                desc: 'At six weeks, the pigment has fully settled and the true healed color is visible. This is when the outcome is documented and assessed. A complimentary perfecting session is conducted at 6–8 weeks to refine density and symmetry as needed.',
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className={`flex gap-6 ${i < 3 ? 'pb-10 border-l-2 border-[#E6DAD2] ml-4' : 'ml-4'} pl-8 relative`}>
                  <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-[#2D2D2B] flex items-center justify-center">
                    <span className="text-[9px] font-bold text-white">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-[#2D2D2B]">{item.title}</h3>
                      <span className="text-xs text-[#9A7B69] font-medium">{item.phase}</span>
                    </div>
                    <p className="text-[#2D2D2B]/65 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-10 text-center">
            <Link
              to="/aftercare-guide"
              className="inline-flex items-center gap-2 text-[#2D2D2B] font-medium hover:gap-3 transition-all duration-300 group text-sm"
            >
              <span>Read the complete aftercare protocol</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 7 — Cost Considerations
          Tone: Neutral, educational. Not price-anchoring.
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              Cost Considerations for Permanent Makeup in Fairfax County
            </h2>
            <div className="space-y-5 text-[#2D2D2B]/75 leading-relaxed">
              <p>
                Permanent makeup pricing in the Fairfax County and Northern Virginia region typically ranges from $300 to $800 for eyebrow procedures, depending on the technique, practitioner experience, studio overhead, and what is included in the service. Lower-priced providers may charge separately for consultations, aftercare supplies, and perfecting touch-ups — costs that can accumulate.
              </p>
              <p>
                When evaluating cost, residents should consider the full scope of what is included: the consultation and design phase, the procedure itself, aftercare materials, post-procedure support, and any follow-up sessions. A comprehensive all-inclusive price — one that covers every stage from assessment to healed verification — provides a clearer basis for comparison than the initial procedure fee alone.
              </p>
              <p>
                At Ink Mugi, the all-inclusive price for ombré powder brows is $600. This covers the design consultation, full procedure (2.5–3 hours), medical-grade aftercare kit, 24/7 healing support via text, and a complimentary perfecting session at 6–8 weeks. No additional fees are assessed at any stage.
              </p>
            </div>
            <div className="mt-8">
              <Link
                to="/pmu-cost-guide-dmv"
                className="inline-flex items-center gap-2 text-[#2D2D2B] font-medium hover:gap-3 transition-all duration-300 group text-sm"
              >
                <span>Read the complete DMV cost guide</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 8 — Serving Fairfax County (Internal Linking Hub)
          SEO: Geographic signal distribution + crawl architecture.
      ═══════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-3 text-[#2D2D2B]">
              Serving Communities Throughout Fairfax County
            </h2>
            <p className="text-[#2D2D2B]/55 max-w-2xl mx-auto text-sm">
              Our Annandale studio is centrally positioned within Fairfax County, with straightforward access from communities across the region.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-5xl mx-auto mb-10">
            {[
              { label: 'McLean, VA', to: '/ombre-brows-mclean-va', time: '15 min' },
              { label: 'Vienna, VA', to: '/ombre-brows-vienna-va', time: '10 min' },
              { label: 'Reston, VA', to: '/ombre-brows-reston-va', time: '25 min' },
              { label: 'Great Falls, VA', to: '/ombre-brows-mclean-va', time: '20 min' },
              { label: 'Arlington, VA', to: '/ombre-brows-arlington-va', time: '12 min' },
              { label: 'Falls Church, VA', to: '/permanent-makeup-falls-church-va', time: '8 min' },
              { label: 'Tysons, VA', to: '/permanent-makeup-tysons-va', time: '8 min' },
              { label: 'Fairfax City', to: '/ombre-brows-fairfax-va', time: '15 min' },
              { label: 'Annandale, VA', to: '/licensed-pmu-artist-annandale', time: 'Studio' },
              { label: 'Springfield, VA', to: '/permanent-makeup-springfield-va', time: '12 min' },
              { label: 'Centreville, VA', to: '/ombre-brows-centreville-va', time: '22 min' },
              { label: 'Chantilly, VA', to: '/ombre-brows-chantilly-va', time: '25 min' },
              { label: 'Alexandria, VA', to: '/ombre-brows-alexandria-va', time: '15 min' },
            ].map((city) => (
              <Link
                key={city.label}
                to={city.to}
                className="bg-[#F9F7F5] rounded-lg px-4 py-3 text-center hover:shadow-md transition-shadow group"
              >
                <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors text-sm">{city.label}</p>
                <p className="text-[10px] text-[#9A7B69] mt-0.5 font-medium">{city.time}</p>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {[
              { label: 'Ombré Powder Brows', to: '/signature-ombre-brows', sub: 'Signature technique' },
              { label: 'Nano Brows', to: '/nano-brows', sub: 'Hair-stroke precision' },
              { label: 'Microshading', to: '/microshading-artistry', sub: 'Soft shading method' },
              { label: 'PMU Corrections', to: '/pmu-correction-restoration', sub: 'Prior work assessment' },
              { label: 'Healed Results Gallery', to: '/gallery', sub: '6-week documented outcomes' },
              { label: 'Aftercare Protocol', to: '/aftercare-guide', sub: 'Complete healing guide' },
              { label: 'PMU Knowledge Base', to: '/blog', sub: 'Guides & clinical insights' },
              { label: 'Full FAQ', to: '/faq', sub: 'Detailed answers' },
              { label: 'Annandale Studio', to: '/licensed-pmu-artist-annandale', sub: 'Our home location' },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="bg-[#F9F7F5] rounded-lg px-4 py-3 text-center hover:shadow-md transition-shadow group"
              >
                <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors text-sm">{link.label}</p>
                <p className="text-[10px] text-[#2D2D2B]/40 mt-0.5">{link.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <LocationMidCTA
        subtext="Fairfax County residents from McLean to Springfield trust Ink Mugi for precision permanent makeup — VA-licensed, 330+ documented procedures."
      />

      {/* ═══════════════════════════════════════════
          SECTION 9 — FAQ
          Tone: Informative, calm, complete.
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <InlineFaqAccordion
                faqs={faqs}
                title="Frequently Asked Questions About Permanent Makeup in Fairfax County"
                subtitle="Informed answers to the questions that matter most"
                maxVisible={10}
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
              Considering Microblading in Fairfax County?
            </h2>
            <p className="text-[#2D2D2B]/80 text-lg leading-relaxed mb-4">
              Across Fairfax County — from Annandale to Reston, Vienna to Springfield — we see the same pattern: microblading that underperforms expectation. The county's humid subtropical climate, with 65–85% summer humidity, creates conditions that actively work against microblading's shallow, incision-based pigment deposit. County-wide, our correction data shows microblading clients averaging only 8–12 months of satisfactory appearance.
            </p>
            <p className="text-[#2D2D2B]/70 leading-relaxed mb-6">
              This isn't an opinion — it's what the science and local data confirm. Before investing in any brow procedure in Fairfax County, understand how technique selection affects your results.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link to="/microblading-vs-powder-brows" className="flex items-center gap-2 p-4 bg-[#F9F7F5] rounded-lg border border-[#E6DAD2] hover:shadow-md transition-shadow">
                <ArrowRight className="w-5 h-5 text-amber-700 flex-shrink-0" />
                <span className="text-[#2D2D2B] text-sm font-medium">Microblading vs Powder Brows Comparison</span>
              </Link>
              <Link to="/microblading-for-oily-skin" className="flex items-center gap-2 p-4 bg-[#F9F7F5] rounded-lg border border-[#E6DAD2] hover:shadow-md transition-shadow">
                <ArrowRight className="w-5 h-5 text-amber-700 flex-shrink-0" />
                <span className="text-[#2D2D2B] text-sm font-medium">Microblading & Oily Skin: What to Know</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 10 — Final Assessment CTA
          Tone: Institutional. Measured. Not urgent.
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-[#2D2D2B] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://live.staticflickr.com/65535/54363160242_7975c4f42c_o_d.jpg')] bg-cover bg-center opacity-[0.06]"></div>
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-cormorant font-medium mb-6">
              When You Are Ready, We Are Here.
            </h2>
            <p className="text-base text-[#F9F7F5]/75 mb-8 leading-relaxed max-w-2xl mx-auto">
              A consultation is an assessment — not a commitment. Your facial structure is evaluated, the proposed design is reviewed on your face, and candidacy is determined based on your skin type, health history, and goals. If the procedure is not appropriate for you, that assessment is delivered directly.
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
                Serving all of Fairfax County
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

export default PermanentMakeupFairfaxCounty;
