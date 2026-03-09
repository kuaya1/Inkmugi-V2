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

const OmbreBrowsManassas: React.FC = () => {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": "https://www.inkmugi.com/#business",
    "name": "Ink Mugi — Ombré Powder Brows",
    "url": "https://www.inkmugi.com/ombre-brows-manassas-va",
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
      { "@type": "City", "name": "Manassas", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Manassas Park", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Gainesville", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Bristow", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Centreville", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Annandale", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "AdministrativeArea", "name": "Prince William County", "containedInPlace": { "@type": "State", "name": "Virginia" } }
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
    "name": "Ombre Powder Brows for Manassas VA Clients",
    "description": "Professional ombre powder brows service for Manassas, VA residents. 330+ documented procedures, healed-first approach, VA licensed. Located in Annandale — 30 minutes from Historic Downtown Manassas.",
    "provider": {
      "@type": "HealthAndBeautyBusiness",
      "@id": "https://www.inkmugi.com/#business"
    },
    "areaServed": {
      "@type": "City",
      "name": "Manassas",
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
    { name: 'Historic Downtown', time: '30 min' },
    { name: 'Manassas Park', time: '28 min' },
    { name: 'Gainesville', time: '35 min' },
    { name: 'Bristow', time: '33 min' },
    { name: 'Yorkshire', time: '30 min' },
    { name: 'Sudley', time: '28 min' },
  ];

  const manassasTestimonials = [
    {
      name: "Maria L.",
      location: "Historic Downtown Manassas",
      text: "I searched for permanent makeup artists in Prince William County for months. When I found Mugi's healed photos — not fresh, actually healed — I knew the 30-minute drive to Annandale was worth it. My brows look better than I ever imagined.",
      rating: 5
    },
    {
      name: "Priya S.",
      location: "Gainesville",
      text: "After a disappointing microblading experience closer to home, I drove out to Ink Mugi for a correction. Mugi's precision mapping process and transparent communication were on a completely different level. My ombre brows healed beautifully.",
      rating: 5
    },
    {
      name: "Jessica R.",
      location: "Manassas Park",
      text: "As a nurse working long shifts, I needed brows that looked polished without daily makeup. The drive from Manassas Park was easy via I-66, and the results have been life-changing. Six months in and they still look amazing.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Do you offer ombre powder brows near Manassas, VA?",
      answer: "Our studio is located in Annandale, VA — approximately 30 minutes from Historic Downtown Manassas via I-66 East. Many of our Prince William County clients schedule morning appointments and are back home by early afternoon. Free parking is available at our studio, and our private suite ensures a calm, comfortable experience."
    },
    {
      question: "Why do Manassas residents choose Ink Mugi over closer studios?",
      answer: "Manassas clients consistently tell us they chose Ink Mugi after comparing healed results across multiple artists. With 330+ documented procedures, a 0.19% complication rate, and a design-approval process where you see the exact shape on your face before any pigment touches your skin, our approach gives the certainty and quality that Prince William County clients demand. Many of our Manassas clients were referred by friends or family who'd already experienced our work."
    },
    {
      question: "How long do ombre powder brows last for Manassas area clients?",
      answer: "Ombre powder brows typically last 1.5–3 years, depending on skin type, lifestyle, and aftercare. Northern Virginia's humid summers can affect retention, so we provide customized seasonal aftercare guidance tailored to our regional climate. Most Manassas clients schedule a color refresh around the 18–24 month mark."
    },
    {
      question: "What's the best route from Manassas to your Annandale studio?",
      answer: "The most direct route is I-66 East to the Fairfax County Parkway South, then Heritage Drive — approximately 30 minutes in normal traffic. Some clients from western Manassas prefer Route 28 North to I-66 East. We offer free on-site parking at our Heritage Drive location, so there's never a parking hassle."
    },
    {
      question: "What's included in the $600 ombre brows price for Manassas clients?",
      answer: "Everything: a thorough design consultation with facial mapping, the full procedure (2–3 hours, unrushed), premium EU-compliant vegan pigments, a medical-grade aftercare kit, 24/7 healing text support from Mugi directly, and your included perfecting session at 6 weeks. No hidden costs, no add-on upsells."
    },
    {
      question: "Can I get nano brows or microshading instead of ombre powder brows?",
      answer: "Absolutely. We also offer nano brows (crisp hair-stroke technique) and microshading (soft dot-work finish). During your free consultation, Mugi will evaluate your skin type, lifestyle, and goals to recommend the technique that will heal best for you — especially important given our humid Northern Virginia summers."
    }
  ];

  return (
    <>
      <SEO
        title="Ombre Powder Brows Manassas VA | Ink Mugi — Healed-First PMU"
        description="Ombre powder brows for Manassas VA residents. 330+ procedures, 0.19% complication rate, VA licensed. 30 min from Downtown Manassas. Free consultation — see healed results first."
        path="/ombre-brows-manassas-va"
        keywords="ombre powder brows Manassas VA, permanent makeup Manassas Virginia, powder brows Prince William County, PMU near Manassas, microshading Manassas VA, nano brows Manassas"
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
            "review": manassasTestimonials.map(t => ({
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
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.inkmugi.com/" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.inkmugi.com/services" },
              { "@type": "ListItem", "position": 3, "name": "Ombre Brows Manassas VA", "item": "https://www.inkmugi.com/ombre-brows-manassas-va" }
            ]
          })}
        </script>
      </SEO>

      <LocationHero
        city="Manassas"
        badgeText="Serving Manassas, VA"
        headline={<>Ombre Powder Brows for<br /><span className="text-[#9A7B69]">Manassas, VA</span></>}
        subtext="Healed-first permanent makeup trusted by Prince William County professionals. 330+ documented procedures with a 0.19% complication rate — see the shape on your face and approve before any pigment."
        secondaryText="30 minutes from Historic Downtown Manassas to our private Annandale studio. Free parking. Consultation-first approach."
        heroImage="https://live.staticflickr.com/65535/54366410490_6e3bac2287_c_d.jpg"
        heroImageAlt="Ombre powder brows for Manassas, VA clients at Ink Mugi studio"
        primaryCTA={{ text: 'Request a Consultation', to: '/booking' }}
        secondaryCTA={{ type: 'link', text: 'View Healed Results', to: '/gallery' }}
      />

      {/* Why Manassas Clients Choose Ink Mugi */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              Why Manassas Residents Trust Ink Mugi for Permanent Makeup
            </h2>
            <div className="prose prose-lg text-[#2D2D2B]/80 max-w-none">
              <p>
                Manassas is a community with deep roots and high standards — from the preserved battlefields that define the city's character to the thriving small businesses along Historic Downtown. That same commitment to quality is exactly what defines our approach to ombre powder brows.
              </p>
              <p>
                Many of our Manassas clients are busy professionals commuting along I-66, healthcare workers at Novant Health UVA Health System, or parents balancing school drop-offs with packed schedules in Gainesville and Bristow. They want brows that look polished and natural without 20 minutes of daily makeup — and they want results they can trust from day one.
              </p>
              <p>
                Our Annandale studio is a straight 30-minute drive from Downtown Manassas via I-66 East. Clients from Manassas Park and Yorkshire tell us the drive is more straightforward than navigating Route 28 traffic toward Centreville. Free parking and a private, unhurried environment make the visit effortless.
              </p>
              <p>
                As a Northern Virginia-based studio, we understand the lifestyle demands of Prince William County residents. Every procedure is built around our healed-first philosophy: you see the mapped design, approve the shape on your face, and nothing permanent happens until you're fully confident. That's the certainty Manassas clients appreciate.
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
              Drive Times from Manassas &amp; Nearby Areas
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
              A quick drive east on I-66 to our private studio in Annandale. Free on-site parking — zero stress.
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
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d99200!2d-77.47!3d38.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x89b65e0eb3ffcc43%3A0x9b84b0f9fa069695!2sManassas%2C%20VA!3m2!1d38.7509488!2d-77.4752667!4m5!1s0x89b64faa3b8d9e57%3A0x7b0da9b5a7a0b8f0!2s7857%20Heritage%20Dr%20%23330%2C%20Annandale%2C%20VA%2022003!3m2!1d38.8303726!2d-77.1969261!5e0!3m2!1sen!2sus!4v1703444800000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Directions from Manassas to Ink Mugi in Annandale"
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
              Data-Driven Artistry Manassas Clients Rely On
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
                <h3 className="text-xl font-semibold mb-3 text-[#2D2D2B]">330+ documented procedures</h3>
                <p className="text-[#2D2D2B]/70">
                  Not a claim — a tracked dataset. Every procedure is documented from consultation through healed result. This depth of experience means fewer surprises and better outcomes for our Manassas clients.
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
              <span className="text-[#E6DAD2]">What Works Best in Manassas?</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Droplets className="w-6 h-6 text-[#E6DAD2]" />
                  <h3 className="text-xl font-semibold">Prince William County Humidity Factor</h3>
                </div>
                <p className="text-white/80 leading-relaxed">
                  Manassas and the surrounding Prince William County area experience the same 70–80% summer humidity that characterizes all of Northern Virginia. This matters because microblading strokes — created by manual blade cuts in the epidermis — tend to blur and migrate faster in humid conditions. We regularly see clients from the I-66 corridor who loved the idea of crisp hair strokes but were frustrated by how softly they healed once summer oil and humidity kicked in. Ombre powder brows deposit pigment deeper using a digital machine, creating results that hold their clarity through every Northern Virginia summer.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-[#E6DAD2]" />
                  <h3 className="text-xl font-semibold">Healed-First Means Certainty</h3>
                </div>
                <p className="text-white/80 leading-relaxed">
                  Fresh brows always look great. What matters is how they look in 6 weeks — after the skin has fully healed. Our entire portfolio shows healed results, not same-day photos. For Manassas professionals who make decisions based on evidence, this distinction is exactly why they choose our approach over artists who only showcase fresh work. Many Manassas clients reference our healed gallery during their consultation as the deciding factor.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/blog/nano-brows-vs-microblading-comparison"
                className="inline-flex items-center gap-2 text-[#E6DAD2] hover:text-white transition-colors font-medium"
              >
                Read the full comparison with procedure data
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Manassas Testimonials */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              What Manassas Area Clients Say
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#9A7B69] text-[#9A7B69]" />
              ))}
            </div>
            <p className="text-[#2D2D2B]/70">5.0 rating from 47+ verified reviews</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {manassasTestimonials.map((testimonial, index) => (
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
              Transparent Pricing for Manassas Clients
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

      <LocationMidCTA
        subtext="Manassas and Prince William County residents trust Ink Mugi for precision ombré brows — just 30 minutes via I-66."
      />

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <InlineFaqAccordion
                faqs={faqs}
                title="Questions from Manassas Clients"
                subtitle="Tap a question to reveal the answer"
                maxVisible={6}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-16 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-cormorant font-medium text-[#2D2D2B] mb-3">
              Also Serving Nearby Communities
            </h2>
            <p className="text-[#2D2D2B]/60">Premium ombre powder brows across Northern Virginia</p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <Link to="/ombre-brows-centreville-va" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Centreville, VA</p>
              <p className="text-sm text-[#2D2D2B]/50">15 min drive</p>
            </Link>
            <Link to="/ombre-brows-woodbridge-va" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Woodbridge, VA</p>
              <p className="text-sm text-[#2D2D2B]/50">20 min drive</p>
            </Link>
            <Link to="/ombre-brows-chantilly-va" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Chantilly, VA</p>
              <p className="text-sm text-[#2D2D2B]/50">20 min drive</p>
            </Link>
            <Link to="/ombre-brows-fairfax-va" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Fairfax, VA</p>
              <p className="text-sm text-[#2D2D2B]/50">20 min drive</p>
            </Link>
            <Link to="/permanent-makeup-springfield-va" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Springfield, VA</p>
              <p className="text-sm text-[#2D2D2B]/50">22 min drive</p>
            </Link>
            <Link to="/ombre-brows-vienna-va" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Vienna, VA</p>
              <p className="text-sm text-[#2D2D2B]/50">25 min drive</p>
            </Link>
            <Link to="/signature-ombre-brows" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Ombre Powder Brows</p>
              <p className="text-sm text-[#2D2D2B]/50">Our signature service</p>
            </Link>
            <Link to="/faq" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">FAQ</p>
              <p className="text-sm text-[#2D2D2B]/50">Common questions</p>
            </Link>
            <Link to="/licensed-pmu-artist-annandale" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Annandale Studio</p>
              <p className="text-sm text-[#2D2D2B]/50">Our home location</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Microblading vs Powder Brows — Local Comparison */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-3xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              Considering Microblading in Manassas, VA?
            </h2>
            <p className="text-[#2D2D2B]/80 text-lg leading-relaxed mb-4">
              Manassas and the wider Prince William County area share the same climate challenge that undermines microblading throughout Northern Virginia. High humidity accelerates pigment fading, while active lifestyles amplify the effect through increased perspiration and UV exposure during the region's long summers. Our Manassas clients who converted from microblading to powder brows consistently report dramatically improved longevity.
            </p>
            <p className="text-[#2D2D2B]/70 leading-relaxed mb-6">
              The science is clear: microblading's shallow deposit method can't compete with powder brows in humid climates. Explore the comparison before making your decision.
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

      {/* CTA Section */}
      <section className="py-24 bg-[#2D2D2B] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://live.staticflickr.com/65535/54363160242_7975c4f42c_o_d.jpg')] bg-cover bg-center opacity-10" />
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-cormorant font-medium mb-6">
              Ready to See If We're a Fit?
            </h2>
            <p className="text-lg text-[#F9F7F5]/90 mb-8">
              Join Manassas residents from Historic Downtown to Gainesville who've chosen healed-first permanent makeup with documented results. Your consultation is a conversation — not a commitment.
            </p>
            <p className="text-base text-white/60 mb-8">
              Serving Prince William County &amp; Northern Virginia • 30 minutes from Manassas • Free parking • By consultation only
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

export default OmbreBrowsManassas;
