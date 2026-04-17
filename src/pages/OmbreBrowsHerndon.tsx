import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  MapPin,
  Star,
  CheckCircle,
  Award,
  Shield,
  Car,
  ArrowRight,
  Phone,
  Droplets,
  Clock
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import InlineFaqAccordion from '../components/InlineFaqAccordion';
import LocationHero from '../components/LocationHero';
import LocationMidCTA from '../components/LocationMidCTA';

const OmbreBrowsHerndon: React.FC = () => {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": "https://inkmugi.com/#business",
    "name": "Ink Mugi — Ombré Powder Brows",
    "url": "https://inkmugi.com/ombre-brows-herndon-va",
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
      { "@type": "City", "name": "Herndon", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Reston", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Sterling", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Annandale", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Tysons", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Fairfax", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "AdministrativeArea", "name": "Fairfax County", "containedInPlace": { "@type": "State", "name": "Virginia" } }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "38.8305",
      "longitude": "-77.1964"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Ombre Powder Brows for Herndon VA Clients",
    "description": "Professional ombre powder brows service for Herndon, VA residents. 523+ documented procedures, healed-first approach, VA licensed. Located in Annandale — 30 minutes from Downtown Herndon.",
    "provider": {
      "@type": "HealthAndBeautyBusiness",
      "@id": "https://inkmugi.com/#business"
    },
    "areaServed": {
      "@type": "City",
      "name": "Herndon",
      "containedInPlace": { "@type": "State", "name": "Virginia" }
    },
    "serviceType": "Permanent Makeup",
    "offers": {
      "@type": "Offer",
      "price": "600",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  const neighborhoods = [
    { name: 'Downtown Herndon', time: '30 min' },
    { name: 'Herndon Parkway', time: '28 min' },
    { name: 'Fox Mill', time: '25 min' },
    { name: 'Sterling', time: '35 min' },
    { name: 'Reston', time: '25 min' },
    { name: 'Dulles Area', time: '35 min' },
  ];

  const herndonTestimonials = [
    {
      name: "Megan R.",
      location: "Downtown Herndon",
      text: "I looked at several PMU artists closer to Herndon, but none of them showed real healed results. Mugi's portfolio was the only one that gave me confidence, and the 30-minute drive was nothing compared to the peace of mind.",
      rating: 5
    },
    {
      name: "Priya S.",
      location: "Fox Mill",
      text: "As a software engineer near the Dulles Corridor, I needed brows that could handle long hours and our humid summers. Mugi's climate-adapted approach made all the difference — my brows still look perfect six months in.",
      rating: 5
    },
    {
      name: "Amanda L.",
      location: "Sterling",
      text: "I drove from Sterling after my neighbor showed me her healed ombre brows. The meticulous mapping process and Mugi's patience during the design phase completely set this experience apart from anything else I'd seen.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Do you offer ombre powder brows near Herndon, VA?",
      answer: "Our studio is located in Annandale, VA — approximately 30 minutes from Downtown Herndon via Route 7 or the Fairfax County Parkway. Many of our Herndon clients take Route 28 south to I-66 and are at our studio in under 30 minutes, depending on traffic. Free parking is available at our studio, so there's never a parking hassle."
    },
    {
      question: "Why do Herndon residents choose Ink Mugi over closer studios?",
      answer: "Herndon clients consistently tell us they chose Ink Mugi after researching healed results online. With 523+ documented procedures and a 0.19% complication rate, our track record speaks for itself. Professional women along the Dulles Corridor especially appreciate our design-approval process — you see the exact shape mapped on your face and approve it before any pigment touches your skin."
    },
    {
      question: "How long do ombre powder brows last for Herndon area clients?",
      answer: "Ombre powder brows typically last 1.5–3 years, depending on skin type, lifestyle, and aftercare. Northern Virginia's high summer humidity can accelerate fading with certain techniques, but ombre powder brows are specifically designed to hold well in these conditions. Most Herndon clients schedule a color refresh around the 18–24 month mark."
    },
    {
      question: "What's the best route from Herndon to your Annandale studio?",
      answer: "Most Herndon clients take Route 28 south to I-66 East, then exit at Route 236 toward Annandale — about 30 minutes in normal traffic. Alternatively, the Fairfax County Parkway south connects to I-495 and then Little River Turnpike. We offer free on-site parking and a calm, private environment."
    },
    {
      question: "What's included in the $600 ombre brows price for Herndon clients?",
      answer: "Everything: a thorough design consultation with facial mapping, the full procedure (2–3 hours), premium EU-compliant vegan pigments, a medical-grade aftercare kit, 24/7 healing text support from Mugi directly, and your included perfecting session at 6 weeks. No hidden costs, no add-on upsells."
    },
    {
      question: "Can I get nano brows or microshading instead of ombre powder brows?",
      answer: "Absolutely. We also offer nano brows (crisp hair-stroke technique) and microshading (soft dot-work finish). During your free consultation, Mugi will evaluate your skin type, lifestyle, and goals to recommend the technique that will heal best for you — especially given our humid Fairfax County summers."
    }
  ];

  return (
    <>
      <SEO
        title="Ombre Powder Brows Herndon VA | Ink Mugi — Healed-First PMU"
        description="Ombre powder brows for Herndon VA residents. 523+ procedures, 0.19% complication rate, VA licensed. 30 min from Downtown Herndon. Free consultation — see healed results first."
        path="/ombre-brows-herndon-va"
        keywords="ombre powder brows Herndon VA, permanent makeup Herndon Virginia, PMU near Herndon, powder brows Fairfax County, microshading Herndon VA, nano brows Herndon"
      >
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
            "review": herndonTestimonials.map(t => ({
              "@type": "Review",
              "author": { "@type": "Person", "name": t.name },
              "reviewRating": { "@type": "Rating", "ratingValue": t.rating, "bestRating": 5 },
              "reviewBody": t.text
            }))
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://inkmugi.com/" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://inkmugi.com/services" },
              { "@type": "ListItem", "position": 3, "name": "Ombre Brows Herndon VA", "item": "https://inkmugi.com/ombre-brows-herndon-va" }
            ]
          })}
        </script>
      </SEO>

      <LocationHero
        city="Herndon"
        badgeText="Serving Herndon, VA"
        headline={<>Ombre Powder Brows for<br /><span className="text-[#9A7B69]">Herndon, VA</span></>}
        subtext="Healed-first permanent makeup trusted by Herndon professionals. 523+ documented procedures with a 0.19% complication rate — see the shape on your face and approve before any pigment."
        secondaryText="30 minutes from Downtown Herndon to our private Annandale studio. Free parking. Consultation-first approach."
        heroImage="https://live.staticflickr.com/65535/54366410485_9d137ccfb4_c_d.jpg"
        heroImageAlt="Ombre powder brows for Herndon, VA clients at Ink Mugi studio"
        primaryCTA={{ text: 'Request a Consultation', to: '/booking' }}
        secondaryCTA={{ type: 'link', text: 'View Healed Results', to: '/gallery' }}
      />

      {/* Why Herndon Clients Choose Ink Mugi */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              Why Herndon Residents Trust Ink Mugi for Permanent Makeup
            </h2>
            <div className="prose prose-lg text-[#2D2D2B]/80 max-w-none">
              <p>
                Herndon is a town that balances its small-town charm with the professional demands of the Dulles Technology Corridor. Between the historic downtown, the W&OD trail, and the tech offices lining Route 28, Herndon residents don't have time for a 20-minute brow routine every morning — and shouldn't have to.
              </p>
              <p>
                Many of our Herndon clients are professionals commuting along Route 28 or the Dulles Toll Road, parents juggling weekend activities at Herndon Centennial Golf Course or the Herndon Community Center, or active residents who jog and cycle the W&OD Trail year-round. They want <Link to="/signature-ombre-brows" className="text-[#9A7B69] underline hover:text-[#2D2D2B] transition-colors">ombre powder brows</Link> that look polished in a boardroom but natural enough for Saturday morning at the Herndon Farmers Market.
              </p>
              <p>
                Our Annandale studio is a straightforward 30-minute drive from Downtown Herndon, south on Route 28 to I-66 East. Clients from the Fox Mill and McNair Farm areas tell us the drive is easier than navigating Tysons Corner traffic. Free parking and a private, unhurried appointment environment make the visit effortless.
              </p>
              <p>
                As a Fairfax County-based studio, we understand the lifestyle demands of Northern Virginia. Every procedure is built around our healed-first philosophy: you see the mapped design, approve the shape on your face, and nothing permanent happens until you're fully confident. That's the certainty Herndon clients appreciate.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Drive Time Section */}
      <section className="py-16 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Drive Times from Herndon &amp; Nearby Areas
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
              A quick drive south via Route 28 and I-66 to our private studio in Annandale. Free on-site parking — zero stress.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {neighborhoods.map((hood, index) => (
              <AnimatedSection key={hood.name} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow">
                  <Car className="w-6 h-6 text-[#9A7B69] mx-auto mb-2" />
                  <p className="font-medium text-[#2D2D2B]">{hood.name}</p>
                  <p className="text-[#9A7B69] font-semibold">{hood.time}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d99000!2d-77.35!3d38.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x89b6390cf846e1e1%3A0x7f6f77c71b2b7c40!2sHerndon%2C%20VA!3m2!1d38.9695545!2d-77.3860976!4m5!1s0x89b64faa3b8d9e57%3A0x7b0da9b5a7a0b8f0!2s7857%20Heritage%20Dr%20%23330%2C%20Annandale%2C%20VA%2022003!3m2!1d38.8303726!2d-77.1969261!5e0!3m2!1sen!2sus!4v1703444800000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Directions from Herndon to Ink Mugi in Annandale"
              />
            </div>
            <p className="text-center text-[#2D2D2B]/60 mt-4 text-sm">
              📍 7857 Heritage Dr #330, Annandale, VA 22003 • Free parking available
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Authority Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Data-Driven Artistry Herndon Clients Rely On
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
              Every claim is documented. Every result is photographed at 6+ weeks healed — not fresh.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="bg-[#F9F7F5] rounded-2xl p-8 h-full">
                <div className="w-14 h-14 bg-[#E6DAD2] rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-[#2D2D2B]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2D2D2B]">523+ documented procedures</h3>
                <p className="text-[#2D2D2B]/70">
                  Not a claim — a tracked dataset. Every procedure is documented from consultation through healed result. This depth of experience means fewer surprises and better outcomes for our Herndon clients.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-[#F9F7F5] rounded-2xl p-8 h-full">
                <div className="w-14 h-14 bg-[#E6DAD2] rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-[#2D2D2B]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2D2D2B]">0.19% Complication Rate</h3>
                <p className="text-[#2D2D2B]/70">
                  That's 13x lower than the industry average of 2.5%. Virginia licensed, insured, bloodborne pathogen certified. Hospital-grade sterilization and premium EU-compliant vegan pigments on every procedure.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-[#F9F7F5] rounded-2xl p-8 h-full">
                <div className="w-14 h-14 bg-[#E6DAD2] rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle className="w-7 h-7 text-[#2D2D2B]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2D2D2B]">Design Approved Before Pigment</h3>
                <p className="text-[#2D2D2B]/70">
                  Your brow shape is mapped to your facial proportions, drawn on your face, and adjusted until you say "perfect." Nothing permanent happens until you're 100% confident — that's our guarantee.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Internal links to service pages */}
          <AnimatedSection className="mt-12">
            <div className="bg-[#F7EDE6] rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-cormorant font-semibold text-[#2D2D2B] text-center mb-6">
                Explore Our Permanent Makeup Services
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <Link to="/signature-ombre-brows" className="bg-white rounded-xl p-5 text-center hover:shadow-lg transition-shadow group">
                  <p className="font-semibold text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Signature Ombre Brows</p>
                  <p className="text-sm text-[#2D2D2B]/60 mt-1">Our flagship technique</p>
                </Link>
                <Link to="/nano-brows" className="bg-white rounded-xl p-5 text-center hover:shadow-lg transition-shadow group">
                  <p className="font-semibold text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Nano Brows</p>
                  <p className="text-sm text-[#2D2D2B]/60 mt-1">Crisp hair-stroke precision</p>
                </Link>
                <Link to="/microshading-artistry" className="bg-white rounded-xl p-5 text-center hover:shadow-lg transition-shadow group">
                  <p className="font-semibold text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Microshading</p>
                  <p className="text-sm text-[#2D2D2B]/60 mt-1">Whisper-soft definition</p>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Ombre vs Microblading - Climate Section */}
      <section className="py-20 bg-[#2D2D2B] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}
        />
        <div className="container-custom relative">
          <AnimatedSection className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-8 text-center">
              Ombre Brows vs Microblading —<br />
              <span className="text-[#E6DAD2]">What Works Best in Herndon?</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Droplets className="w-6 h-6 text-[#E6DAD2]" />
                  <h3 className="text-xl font-semibold">Northern Virginia Humidity Factor</h3>
                </div>
                <p className="text-white/80 leading-relaxed">
                  Herndon sits right in the Potomac basin's humidity zone, with summers consistently reaching 70–80% humidity. Microblading strokes — created by manual blade cuts in the epidermis — tend to blur and migrate faster in these conditions. We regularly see clients from the Herndon and Sterling area who loved the idea of crisp hair strokes but were frustrated by how quickly they faded through a Northern Virginia summer. Ombre powder brows deposit pigment deeper using a digital machine, creating results that hold their clarity regardless of season.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-[#E6DAD2]" />
                  <h3 className="text-xl font-semibold">Healed-First Means Certainty</h3>
                </div>
                <p className="text-white/80 leading-relaxed">
                  Fresh brows always look great. What matters is how they look in 6 weeks — after the skin has fully healed. Our entire portfolio shows healed results, not same-day photos. For Herndon professionals who make decisions based on evidence, this distinction is exactly why they choose our approach over artists who only showcase fresh work. It's also why so many of our consultations focus on realistic healed expectations rather than only the immediate before-and-after.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/microblading-vs-powder-brows"
                className="inline-flex items-center gap-2 text-[#E6DAD2] hover:text-white transition-colors font-medium"
              >
                Read the full microblading vs powder brows comparison
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Herndon Testimonials */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              What Herndon Area Clients Say
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#9A7B69] text-[#9A7B69]" />
              ))}
            </div>
            <p className="text-[#2D2D2B]/70">5.0 rating from 47+ verified reviews</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {herndonTestimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 h-full">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#9A7B69] text-[#9A7B69]" />
                    ))}
                  </div>
                  <p className="text-[#2D2D2B]/80 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[#2D2D2B] rounded-full flex items-center justify-center text-white font-medium">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-[#2D2D2B]">{testimonial.name}</p>
                      <p className="text-sm text-[#9A7B69]">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Service Pricing */}
      <section className="py-20 bg-[#F0E4D8]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Transparent Pricing for Herndon Clients
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
              All-inclusive investment. No hidden fees, no surprise add-ons — everything is included from consultation to perfecting session.
            </p>
          </AnimatedSection>

          <div className="max-w-lg mx-auto">
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <p className="text-sm text-[#9A7B69] font-medium mb-2">SIGNATURE SERVICE</p>
                  <h3 className="text-2xl font-cormorant font-medium text-[#2D2D2B]">Ombré Powder Brows</h3>
                  <p className="text-4xl font-bold text-[#2D2D2B] mt-2">$600</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    'In-depth design consultation & facial mapping',
                    'Full procedure (2–3 hours, unrushed)',
                    'Premium EU-compliant vegan pigments',
                    'Medical-grade aftercare kit included',
                    '24/7 healing support via text',
                    '6-week perfecting session included',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#9A7B69] flex-shrink-0" />
                      <span className="text-[#2D2D2B]/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/booking"
                  className="block w-full text-center px-8 py-4 bg-[#2D2D2B] text-white rounded-full font-medium hover:bg-[#4A4A47] transition-all"
                >
                  Book Your Consultation
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Knowledge Hub Banner */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <Link
              to="/ombre-powder-brows-guide"
              className="block bg-gradient-to-r from-[#F7EDE6] to-[#F0E4D8] rounded-2xl p-8 hover:shadow-lg transition-shadow group"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-[#9A7B69] font-medium mb-1">KNOWLEDGE HUB</p>
                  <h3 className="text-xl md:text-2xl font-cormorant font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">
                    Explore the Complete Ombré Powder Brows Guide
                  </h3>
                  <p className="text-[#2D2D2B]/60 mt-1">Healing timelines, technique comparisons, aftercare, and more</p>
                </div>
                <ArrowRight className="w-6 h-6 text-[#9A7B69] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <LocationMidCTA
        subtext="Herndon and Fox Mill residents trust Ink Mugi for precision permanent makeup — just 30 minutes via Route 28."
      />

      {/* FAQs */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <InlineFaqAccordion
                faqs={faqs}
                title="Questions from Herndon Clients"
                subtitle="Tap a question to reveal the answer"
                maxVisible={6}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-cormorant font-medium text-[#2D2D2B] mb-3">
              Also Serving Nearby Communities
            </h2>
            <p className="text-[#2D2D2B]/60">Premium ombre powder brows across Fairfax County &amp; Northern Virginia</p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <Link to="/ombre-brows-reston-va" className="bg-[#F9F7F5] rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Reston, VA</p>
              <p className="text-sm text-[#2D2D2B]/50">25 min drive</p>
            </Link>
            <Link to="/ombre-brows-chantilly-va" className="bg-[#F9F7F5] rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Chantilly, VA</p>
              <p className="text-sm text-[#2D2D2B]/50">20 min drive</p>
            </Link>
            <Link to="/ombre-brows-vienna-va" className="bg-[#F9F7F5] rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Vienna, VA</p>
              <p className="text-sm text-[#2D2D2B]/50">15 min drive</p>
            </Link>
            <Link to="/permanent-makeup-tysons-va" className="bg-[#F9F7F5] rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Tysons, VA</p>
              <p className="text-sm text-[#2D2D2B]/50">8 min drive</p>
            </Link>
            <Link to="/ombre-brows-fairfax-va" className="bg-[#F9F7F5] rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Fairfax, VA</p>
              <p className="text-sm text-[#2D2D2B]/50">12 min drive</p>
            </Link>
            <Link to="/ombre-brows-centreville-va" className="bg-[#F9F7F5] rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Centreville, VA</p>
              <p className="text-sm text-[#2D2D2B]/50">25 min drive</p>
            </Link>
            <Link to="/ombre-brows-mclean-va" className="bg-[#F9F7F5] rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">McLean, VA</p>
              <p className="text-sm text-[#2D2D2B]/50">15 min drive</p>
            </Link>
            <Link to="/ombre-brows-loudoun-county-va" className="bg-[#F9F7F5] rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Loudoun County</p>
              <p className="text-sm text-[#2D2D2B]/50">Nearby county</p>
            </Link>
            <Link to="/signature-ombre-brows" className="bg-[#F9F7F5] rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Ombre Powder Brows</p>
              <p className="text-sm text-[#2D2D2B]/50">Our signature service</p>
            </Link>
            <Link to="/faq" className="bg-[#F9F7F5] rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">FAQ</p>
              <p className="text-sm text-[#2D2D2B]/50">Common questions</p>
            </Link>
            <Link to="/licensed-pmu-artist-annandale" className="bg-[#F9F7F5] rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Annandale Studio</p>
              <p className="text-sm text-[#2D2D2B]/50">Our home location</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Microblading vs Powder Brows — Local Comparison */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom max-w-3xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              Considering Microblading in Herndon, VA?
            </h2>
            <p className="text-[#2D2D2B]/80 text-lg leading-relaxed mb-4">
              Herndon's active community — W&OD Trail cyclists, Dulles Corridor professionals, and families around the Herndon Centennial— face the same climate challenge that undermines microblading throughout Northern Virginia. High humidity accelerates pigment fading, while active lifestyles amplify the effect through increased perspiration and UV exposure. Our Herndon clients who converted from microblading to powder brows consistently report dramatically improved longevity.
            </p>
            <p className="text-[#2D2D2B]/70 leading-relaxed mb-6">
              The science is clear: microblading's shallow deposit method can't compete with powder brows in humid climates. Explore the comparison before making your decision.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link to="/microblading-vs-powder-brows" className="flex items-center gap-2 p-4 bg-white rounded-lg border border-[#E6DAD2] hover:shadow-md transition-shadow">
                <ArrowRight className="w-5 h-5 text-[#9A7B69] flex-shrink-0" />
                <span className="text-[#2D2D2B] text-sm font-medium">Microblading vs Powder Brows Comparison</span>
              </Link>
              <Link to="/microblading-for-oily-skin" className="flex items-center gap-2 p-4 bg-white rounded-lg border border-[#E6DAD2] hover:shadow-md transition-shadow">
                <ArrowRight className="w-5 h-5 text-[#9A7B69] flex-shrink-0" />
                <span className="text-[#2D2D2B] text-sm font-medium">Microblading &amp; Oily Skin: What to Know</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#2D2D2B] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://live.staticflickr.com/65535/54363160242_7975c4f42c_o_d.jpg')] bg-cover bg-center opacity-10" />
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-cormorant font-medium mb-6">
              Ready to See If We're a Fit?
            </h2>
            <p className="text-lg text-[#F9F7F5]/90 mb-8">
              Join Herndon residents from Downtown to Fox Mill who've chosen healed-first permanent makeup with documented results. Your consultation is a conversation — not a commitment.
            </p>
            <p className="text-base text-white/60 mb-8">
              Serving Fairfax County &amp; Northern Virginia • 30 minutes from Herndon • Free parking • By consultation only
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#E6DAD2] text-[#2D2D2B] rounded-full font-medium hover:bg-[#F0E4D8] transition-all"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center justify-center px-8 py-4 border border-white text-white rounded-full font-medium hover:bg-white/10 transition-all"
              >
                View Before &amp; Afters
              </Link>
            </div>
            <a
              href="tel:+15712838228"
              className="inline-flex items-center justify-center gap-2 mt-6 text-[#E6DAD2] hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" />
              (571) 283-8228
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default OmbreBrowsHerndon;
