import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  Star,
  CheckCircle,
  Award,
  Shield,
  Car,
  ArrowRight,
  Phone,
  Clock,
  Eye,
  Heart,
  FileCheck
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import InlineFaqAccordion from '../components/InlineFaqAccordion';
import LocationHero from '../components/LocationHero';
import LocationMidCTA from '../components/LocationMidCTA';

const OmbreBrowsMcLean: React.FC = () => {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": "https://inkmugi.com/#business",
    "name": "Ink Mugi — Ombré Powder Brows",
    "url": "https://inkmugi.com/ombre-brows-mclean-va",
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
      { "@type": "City", "name": "Annandale", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Arlington", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Alexandria", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Fairfax", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Falls Church", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "McLean", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Springfield", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Tysons", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Vienna", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Washington", "containedInPlace": { "@type": "State", "name": "District of Columbia" } }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "38.8305",
      "longitude": "-77.1964"
    }
  };

  const neighborhoods = [
    { name: 'Tysons Corner', time: '8 min' },
    { name: 'Old McLean Village', time: '15 min' },
    { name: 'Great Falls', time: '20 min' },
    { name: 'Pimmit Hills', time: '10 min' },
    { name: 'Chain Bridge', time: '12 min' },
    { name: 'Langley', time: '14 min' },
  ];

  const mcleanTestimonials = [
    {
      name: "Katherine M.",
      location: "McLean",
      text: "I consulted three artists before choosing Mugi. The difference was immediate — she showed me healed results, not just fresh photos. Eight months later, my brows still look exactly like the day they settled. Subtle, precise, and completely undetectable.",
      rating: 5
    },
    {
      name: "Priya R.",
      location: "Tysons Corner",
      text: "As someone who presents to executives daily, I needed brows that look natural under boardroom lighting. Mugi mapped my face shape, showed me the design before touching any pigment, and the healed result is exactly what we agreed on. That level of precision matters.",
      rating: 5
    },
    {
      name: "Alexandra H.",
      location: "Great Falls",
      text: "What convinced me was the complication rate data and the design approval process. No one starts pigment until you see and approve the shape. My friends in Great Falls genuinely cannot tell these are permanent makeup — which is the entire point.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How do I know my brows will look natural, not overdone?",
      answer: "Every procedure begins with a detailed design consultation where we map your bone structure, face shape, and skin undertone. You see and approve the exact shape before any pigment is applied. We specialize in soft, graduated ombré that mimics natural brow density — not blocky, drawn-on brows. Our portfolio shows exclusively healed results at 6+ weeks, so you see precisely how the work settles over time."
    },
    {
      question: "What is the healing process, and what should I expect?",
      answer: "Days 1–3: Brows appear darker and bolder than the final result — this is normal. Days 4–10: Light flaking occurs as the upper layer sheds. Days 11–28: Color appears lighter as pigment settles beneath the skin surface. By week 6, your true color emerges. We provide a medical-grade aftercare kit and 24/7 text support through every phase. Your complimentary perfecting session at 6–8 weeks ensures ideal density and symmetry."
    },
    {
      question: "Is ombré powder technique better than microblading for McLean's climate?",
      answer: "For Northern Virginia's humidity, ombré powder brows significantly outperform microblading. The stippling technique deposits pigment below the skin surface rather than in shallow cuts, resulting in better retention in humid conditions. Our data from 330+ procedures shows an average longevity of 24 months for ombré powder versus 8–12 months for microblading in similar DMV-area clients. This is especially relevant for oily or combination skin types."
    },
    {
      question: "What safety standards does Ink Mugi follow?",
      answer: "Ink Mugi holds full Virginia body art licensure and maintains comprehensive liability insurance. We use hospital-grade sterilization protocols, single-use disposable cartridges, and hypoallergenic vegan pigments tested for skin reactivity. Our documented complication rate across 330+ procedures is 0.19% — which reflects rigorous technique, proper client screening, and thorough aftercare guidance."
    },
    {
      question: "What if I have previous PMU work I'm unhappy with?",
      answer: "We assess existing permanent makeup through a complimentary consultation with detailed photography. Depending on the condition of prior work, we may recommend a color correction, a cover-up procedure, or saline removal before proceeding. Correction work requires a personalized plan — the consultation ensures we give you an honest assessment and realistic timeline before any commitment."
    },
    {
      question: "Where is the studio, and how far from McLean?",
      answer: "Our studio is at 7857 Heritage Dr #330, Annandale, VA 22003 — approximately 15 minutes from McLean Village via Route 7 or I-495. Clients from Tysons Corner reach us in about 8 minutes, Chain Bridge in 12, and Great Falls in 20. Free, stress-free parking is available at the Heritage Center."
    },
    {
      question: "Who is not a good candidate for ombré powder brows?",
      answer: "We do not perform procedures on clients who are pregnant or nursing, undergoing chemotherapy, have uncontrolled diabetes, exhibit keloid scarring tendencies, or are taking blood-thinning medications. Clients with autoimmune conditions require a consultation to evaluate candidacy. This screening is part of our commitment to safe outcomes — not every client is a candidate, and we believe in honest assessment over revenue."
    }
  ];

  return (
    <>
      <SEO
        title="Ombré Powder Brows Near McLean, VA | Licensed Studio — Ink Mugi"
        description="Considering permanent makeup near McLean, VA? Ink Mugi offers precision ombré powder brows with a documented 0.19% complication rate. 330+ procedures. VA-licensed. Healed results, not promises. Free consultation."
        path="/ombre-brows-mclean-va"
        keywords="ombre powder brows McLean VA, permanent makeup McLean Virginia, natural brows near Tysons Corner, licensed PMU artist Fairfax County, healed ombre brows Northern Virginia, powder brows near Great Falls VA"
      >
        {/* Business + Aggregate Rating Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            ...localSchema,
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "47",
              "bestRating": "5",
              "worstRating": "5"
            },
            "review": mcleanTestimonials.map(t => ({
              "@type": "Review",
              "author": { "@type": "Person", "name": t.name },
              "reviewRating": { "@type": "Rating", "ratingValue": t.rating, "bestRating": 5 },
              "reviewBody": t.text
            }))
          })}
        </script>

        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Ombré Powder Brows — McLean Area",
            "description": "Precision ombré powder brows for McLean, VA residents. Includes design consultation, full procedure, medical-grade aftercare kit, healing support, and perfecting touch-up.",
            "provider": { "@id": "https://inkmugi.com/#business" },
            "areaServed": { "@type": "City", "name": "McLean", "containedInPlace": { "@type": "State", "name": "Virginia" } },
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
              { "@type": "ListItem", "position": 2, "name": "Ombré Powder Brows", "item": "https://inkmugi.com/signature-ombre-brows" },
              { "@type": "ListItem", "position": 3, "name": "McLean, VA", "item": "https://inkmugi.com/ombre-brows-mclean-va" }
            ]
          })}
        </script>
      </SEO>

      <LocationHero
        city="McLean"
        badgeText="VA-Licensed · Fairfax County"
        headline={<>Natural Ombré Powder Brows<br /><span className="text-[#9A7B69]">Near McLean, Virginia</span></>}
        subtext="What matters before you commit: technique assessed for healed outcomes, a documented safety record, and a studio that evaluates results at six weeks — not photographs taken on day one."
        secondaryText="Ink Mugi serves McLean, Tysons Corner, Great Falls, and surrounding Fairfax County communities from our Annandale studio — 15 minutes from McLean Village."
        heroImage="https://live.staticflickr.com/65535/54408668740_7465ce5ee8_c_d.jpg"
        heroImageAlt="Natural ombré powder brows for McLean, Virginia clients at Ink Mugi"
        primaryCTA={{ text: 'Schedule a Consultation', to: '/booking' }}
        secondaryCTA={{ type: 'link', text: 'View Healed Results', to: '/gallery' }}
      />

      {/* ═══════════════════════════════════════════
          TRUST CREDENTIALS — Immediate proof points
          Emotional goal: "This is measurably safe."
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
          WHY OMBRÉ POWDER — Education, not marketing
          Emotional goal: "This technique is right for my skin and lifestyle."
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              Why Ombré Powder Brows Perform Better in Northern Virginia
            </h2>
            <div className="space-y-5 text-[#2D2D2B]/75 leading-relaxed">
              <p>
                Technique selection should be informed by how pigment behaves in <em>your</em> skin type under <em>your</em> regional conditions — not by aesthetic trends. At Ink Mugi, every recommendation begins with skin science and climate assessment.
              </p>
              <p>
                Ombré powder brows use a precision stippling technique that deposits pigment beneath the skin surface in fine, layered dots. Unlike microblading — which creates shallow incisions that blur and fade quickly in humid climates — the powder method produces a soft, graduated density that holds its form through Northern Virginia's seasonal shifts. Our data from 330+ procedures shows an average retention of 24 months, compared to 8–12 months for microblading in similar DMV-area clients.
              </p>
              <p>
                For McLean residents with oily or combination skin — common in this region — the difference is even more pronounced. The stippled pigment anchors more reliably than hair-stroke incisions, resulting in cleaner healed edges and more predictable color retention. The finished result resembles soft pencil shading: present, polished, and entirely undetectable as permanent makeup.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="bg-[#F9F7F5] rounded-2xl p-8 h-full">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm">
                  <Eye className="w-6 h-6 text-[#9A7B69]" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-[#2D2D2B]">Designed to Be Undetectable</h3>
                <p className="text-[#2D2D2B]/65 text-sm leading-relaxed">
                  The gradient builds from a soft, airy front to a defined tail — replicating how natural brows actually grow. No harsh front lines. No blocky shapes. The result reads as natural — not as a procedure.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-[#F9F7F5] rounded-2xl p-8 h-full">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm">
                  <Clock className="w-6 h-6 text-[#9A7B69]" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-[#2D2D2B]">Climate-Tested Longevity</h3>
                <p className="text-[#2D2D2B]/65 text-sm leading-relaxed">
                  Northern Virginia's 70–85% summer humidity challenges most PMU techniques. Ombré powder retains 88% of its density through peak humidity months — validated across our client base from McLean to Arlington.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-[#F9F7F5] rounded-2xl p-8 h-full">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm">
                  <Heart className="w-6 h-6 text-[#9A7B69]" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-[#2D2D2B]">Ideal for Oily &amp; Combination Skin</h3>
                <p className="text-[#2D2D2B]/65 text-sm leading-relaxed">
                  Our records show ombré powder outperforms microblading by over three times in oily skin retention. If previous PMU has blurred or faded quickly, this technique is specifically designed to hold in your skin type.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          HEALED-FIRST STANDARD — Authority differentiator
          Emotional goal: "This studio prioritizes what matters — healed, not fresh."
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
                The Healed-First Standard
              </h2>
              <div className="space-y-4 text-[#2D2D2B]/75 leading-relaxed">
                <p>
                  Pigment shifts, softens, and settles over 6–8 weeks. Fresh results are not final results. This studio documents what matters: the healed outcome.
                </p>
                <p>
                  Every procedure is photographed at the healed stage. Our portfolio, consultations, and clinical expectations are built around what your brows look like <em>after</em> the healing process — not during the first hour.
                </p>
                <p>
                  This standard shapes every protocol: pigment depth, density calibration, and undertone selection. Predictability is not a selling point. It is a clinical standard.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-4">
                {[
                  { icon: FileCheck, title: 'Design Approval Before Pigment', desc: 'You see and approve the exact brow shape mapped to your bone structure before we begin. No surprises.' },
                  { icon: Eye, title: 'Healed Portfolio, Not Fresh', desc: 'Every result in our gallery is photographed at 6+ weeks — the true representation of your outcome.' },
                  { icon: Shield, title: '0.19% Complication Rate', desc: 'Across 330+ documented procedures. Rigorous technique, proper screening, and comprehensive aftercare.' },
                  { icon: Award, title: 'Virginia Licensed & Insured', desc: 'Full body art licensure, professional liability insurance, and hospital-grade sterilization protocols.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start bg-white rounded-xl p-5 shadow-sm">
                    <div className="w-10 h-10 bg-[#E6DAD2] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="w-5 h-5 text-[#2D2D2B]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2D2D2B] mb-1">{item.title}</h3>
                      <p className="text-sm text-[#2D2D2B]/65">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHAT TO EXPECT — Step-by-step process
          Emotional goal: "I know exactly what happens. No surprises."
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              What to Expect: From Consultation to Healed Result
            </h2>
            <p className="text-[#2D2D2B]/60 max-w-2xl mx-auto">
              Every step is designed to give you clarity and control over the outcome.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            {[
              {
                step: '01',
                title: 'Consultation & Face Mapping',
                duration: '30–45 minutes',
                detail: 'We assess your facial proportions, skin undertone, and brow goals. Using precise measurements, a shape is designed to complement your bone structure. You review and approve the design before any pigment is prepared.'
              },
              {
                step: '02',
                title: 'The Procedure',
                duration: '2.5–3 hours',
                detail: 'After medical-grade numbing takes full effect, pigment is applied through controlled stippling — building the gradient layer by layer. Communication is maintained throughout so you remain comfortable and informed.'
              },
              {
                step: '03',
                title: 'Guided Healing',
                duration: '6 weeks',
                detail: 'You receive a medical-grade aftercare kit and 24/7 text access for questions during healing. Days 1–3: bolder appearance. Days 4–10: light flaking. Days 11–42: true color emerges as pigment settles. This timeline is normal and expected.'
              },
              {
                step: '04',
                title: 'Perfecting Touch-Up',
                duration: 'At 6–8 weeks',
                detail: 'Your complimentary perfecting session allows us to refine density, adjust symmetry, and ensure the result meets the standard we both agreed on during your consultation. This is included in every appointment.'
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
          SAFETY & LICENSING — Clinical credibility
          Emotional goal: "This is a medical-grade studio."
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#2D2D2B] text-white">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4">
              Safety Is Not a Feature. It Is the Foundation.
            </h2>
            <p className="text-[#F9F7F5]/70 leading-relaxed">
              Permanent makeup introduces pigment beneath the skin. That is a clinical responsibility we take seriously — not a service we rush through. Every protocol exists to protect both the outcome and the client.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'Virginia Body Art License', desc: 'Full compliance with Virginia Department of Health regulations for body art practitioners in Fairfax County.' },
              { title: 'Professional Liability Insurance', desc: 'Comprehensive coverage that reflects our commitment to accountability — not an industry standard, but our own.' },
              { title: 'Hospital-Grade Sterilization', desc: 'Single-use disposable cartridges, medical-grade surface protocols, and sterilization procedures verified before each appointment.' },
              { title: 'Hypoallergenic Vegan Pigments', desc: 'Premium pigments selected for biocompatibility and tested for skin reactivity. No iron oxides that risk blue-grey oxidation over time.' },
              { title: 'Client Screening Protocol', desc: 'Not every client is a candidate. We screen for contraindications and decline procedures when safety warrants it.' },
              { title: 'Documented Healing Support', desc: 'Medical-grade aftercare kit included. 24/7 text access through the healing process. Guided expectations at every phase.' },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-white/[0.06] border border-white/10 rounded-xl p-6 h-full">
                  <h3 className="font-semibold text-[#E6DAD2] mb-2 text-sm">{item.title}</h3>
                  <p className="text-[#F9F7F5]/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CLIENT PERSPECTIVES — Authentic, quality-focused
          Emotional goal: "People like me chose this studio and are glad."
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              From Clients in the McLean Area
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#9A7B69] text-[#9A7B69]" />
              ))}
            </div>
            <p className="text-sm text-[#2D2D2B]/60">5.0 average across 47+ verified reviews</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {mcleanTestimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 h-full shadow-sm">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#9A7B69] text-[#9A7B69]" />
                    ))}
                  </div>
                  <p className="text-[#2D2D2B]/75 mb-6 text-sm leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#2D2D2B] rounded-full flex items-center justify-center text-white font-medium text-sm">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-[#2D2D2B] text-sm">{testimonial.name}</p>
                      <p className="text-xs text-[#9A7B69]">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PROXIMITY — Lean geo section (not dominant)
          Emotional goal: "This is convenient, not distant."
      ═══════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-3 text-[#2D2D2B]">
              Minutes from McLean &amp; Surrounding Communities
            </h2>
            <p className="text-[#2D2D2B]/60 max-w-2xl mx-auto text-sm">
              Our Annandale studio offers a quiet, private setting with complimentary parking — a straightforward drive from anywhere in Fairfax County.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {neighborhoods.map((hood, index) => (
              <AnimatedSection key={hood.name} delay={index * 0.08}>
                <div className="bg-[#F9F7F5] rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                  <Car className="w-5 h-5 text-[#9A7B69] mx-auto mb-2" />
                  <p className="font-medium text-[#2D2D2B] text-sm">{hood.name}</p>
                  <p className="text-[#9A7B69] font-semibold text-sm">{hood.time}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d49774.98899393825!2d-77.18!3d38.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x89b64a8585e591a5%3A0x79a2b7e23f6e8c3a!2sMcLean%2C%20VA!3m2!1d38.9338676!2d-77.1772604!4m5!1s0x89b64faa3b8d9e57%3A0x7b0da9b5a7a0b8f0!2s7857%20Heritage%20Dr%20%23330%2C%20Annandale%2C%20VA%2022003!3m2!1d38.8303726!2d-77.1969261!5e0!3m2!1sen!2sus!4v1703444800000!5m2!1sen!2sus"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Directions from McLean, VA to Ink Mugi — Annandale Studio"
              />
            </div>
            <p className="text-center text-[#2D2D2B]/50 mt-4 text-sm">
              7857 Heritage Dr #330, Annandale, VA 22003 · Free parking available
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PRICING — Transparent, not aggressive
          Emotional goal: "Clear and fair."
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#F0E4D8]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              All-Inclusive Pricing
            </h2>
            <p className="text-[#2D2D2B]/65 max-w-2xl mx-auto text-sm">
              One transparent price. Every component of your procedure — from consultation to healing support to perfecting touch-up — is included.
            </p>
          </AnimatedSection>

          <div className="max-w-lg mx-auto">
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <p className="text-sm text-[#9A7B69] font-medium mb-2 tracking-wide">SIGNATURE OMBRÉ POWDER BROWS</p>
                  <p className="text-4xl font-bold text-[#2D2D2B] mt-2">$600</p>
                  <p className="text-xs text-[#2D2D2B]/50 mt-1">All-inclusive — no hidden fees</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    'Complimentary design consultation',
                    'Full 3-hour procedure with numbing',
                    'Hypoallergenic vegan pigments',
                    'Medical-grade aftercare kit',
                    '24/7 healing text support',
                    '6–8 week perfecting touch-up',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#9A7B69] flex-shrink-0" />
                      <span className="text-[#2D2D2B]/75 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/booking"
                  className="block w-full text-center px-8 py-4 bg-[#2D2D2B] text-white rounded-full font-medium hover:bg-[#4A4A47] transition-all"
                >
                  Schedule Your Consultation
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <LocationMidCTA
        subtext="McLean and Great Falls clients trust Ink Mugi for precision ombré brows — VA-licensed, 330+ documented procedures, just 15 minutes away."
      />

      {/* ═══════════════════════════════════════════
          FAQs — Fear-addressing, comprehensive
          Emotional goal: Each FAQ reduces one specific fear.
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <InlineFaqAccordion
                faqs={faqs}
                title="Common Questions About Ombré Powder Brows"
                subtitle="Honest answers to the concerns that matter most"
                maxVisible={7}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          INTERNAL LINKING HUB — Topical authority
          SEO goal: Strengthen crawl structure.
      ═══════════════════════════════════════════ */}
      <section className="py-16 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-cormorant font-medium text-[#2D2D2B] mb-3">
              Resources &amp; Service Areas
            </h2>
            <p className="text-[#2D2D2B]/50 text-sm">Our approach, documented services, and the communities we serve</p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <Link to="/signature-ombre-brows" className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors text-sm">Ombré Powder Brows</p>
              <p className="text-xs text-[#2D2D2B]/50 mt-1">Technique & process details</p>
            </Link>
            <Link to="/nano-brows" className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors text-sm">Nano Brows</p>
              <p className="text-xs text-[#2D2D2B]/50 mt-1">Hair-stroke precision</p>
            </Link>
            <Link to="/gallery" className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors text-sm">Healed Results Gallery</p>
              <p className="text-xs text-[#2D2D2B]/50 mt-1">6-week documented photos</p>
            </Link>
            <Link to="/aftercare-guide" className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors text-sm">Aftercare Guide</p>
              <p className="text-xs text-[#2D2D2B]/50 mt-1">Complete healing protocol</p>
            </Link>
            <Link to="/about" className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors text-sm">About Mugi</p>
              <p className="text-xs text-[#2D2D2B]/50 mt-1">Credentials &amp; philosophy</p>
            </Link>
            <Link to="/faq" className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors text-sm">Full FAQ</p>
              <p className="text-xs text-[#2D2D2B]/50 mt-1">17 detailed answers</p>
            </Link>
            <Link to="/ombre-brows-vienna-va" className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors text-sm">Serving Vienna, VA</p>
              <p className="text-xs text-[#2D2D2B]/50 mt-1">10 min from our studio</p>
            </Link>
            <Link to="/ombre-brows-arlington-va" className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors text-sm">Serving Arlington, VA</p>
              <p className="text-xs text-[#2D2D2B]/50 mt-1">12 min from our studio</p>
            </Link>
            <Link to="/permanent-makeup-tysons-va" className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors text-sm">Serving Tysons, VA</p>
              <p className="text-xs text-[#2D2D2B]/50 mt-1">8 min from our studio</p>
            </Link>
            <Link to="/licensed-pmu-artist-annandale" className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors text-sm">Annandale Studio</p>
              <p className="text-xs text-[#2D2D2B]/50 mt-1">Our licensed location</p>
            </Link>
            <Link to="/blog" className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors text-sm">PMU Knowledge Base</p>
              <p className="text-xs text-[#2D2D2B]/50 mt-1">Guides &amp; insights</p>
            </Link>
            <Link to="/services" className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors text-sm">All Services</p>
              <p className="text-xs text-[#2D2D2B]/50 mt-1">Complete service menu</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Microblading vs Powder Brows — Local Comparison */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-3xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              Considering Microblading in McLean, VA?
            </h2>
            <p className="text-[#2D2D2B]/80 text-lg leading-relaxed mb-4">
              McLean clients expect premium results that match their investment. Unfortunately, microblading in the DMV's humid climate often delivers the opposite — premature fading, color shift to grey/ashy tones, and the need for costly annual touch-ups. Our McLean clientele consistently report microblading lasting only 8–12 months, while ombré powder brows deliver 18–36 months of clean, gradient structure under the same conditions.
            </p>
            <p className="text-[#2D2D2B]/70 leading-relaxed mb-6">
              For the discerning McLean professional who values both aesthetics and efficiency, see the data on why technique selection matters more than most providers acknowledge.
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
          CTA — Calm, non-aggressive
          Emotional goal: "I'm ready because I feel informed."
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-[#2D2D2B] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://live.staticflickr.com/65535/54363160242_7975c4f42c_o_d.jpg')] bg-cover bg-center opacity-[0.06]"></div>
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-cormorant font-medium mb-6">
              When You Are Ready, We Are Here.
            </h2>
            <p className="text-base text-[#F9F7F5]/75 mb-8 leading-relaxed max-w-2xl mx-auto">
              A consultation is an assessment — not a commitment. We evaluate your candidacy, review the design on your face, and determine whether this procedure is appropriate for you. Most McLean-area clients schedule their consultation weeks in advance. That measured approach is part of the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#E6DAD2] text-[#2D2D2B] rounded-full font-medium hover:bg-[#F0E4D8] transition-all"
              >
                Schedule a Consultation
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
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default OmbreBrowsMcLean;
