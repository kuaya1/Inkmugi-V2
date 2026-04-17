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

const PermanentMakeupAnnandale: React.FC = () => {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": "https://inkmugi.com/#business",
    "name": "Ink Mugi",
    "url": "https://inkmugi.com/",
    "logo": "https://inkmugi.com/logo.png",
    "image": "https://inkmugi.com/og-image.jpg",
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
    "areaServed": [
      { "@type": "City", "name": "Annandale", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Arlington", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Alexandria", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Burke", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Fairfax", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Falls Church", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "McLean", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Springfield", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Tysons", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Vienna", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Washington", "containedInPlace": { "@type": "State", "name": "District of Columbia" } },
      { "@type": "AdministrativeArea", "name": "Fairfax County", "containedInPlace": { "@type": "State", "name": "Virginia" } }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "38.8305",
      "longitude": "-77.1964"
    }
  };

  const neighborhoods = [
    { name: 'Heritage Center', time: '0 min — we\'re here!' },
    { name: 'Mason District', time: '3 min' },
    { name: 'Lake Barcroft', time: '5 min' },
    { name: 'Ravensworth', time: '4 min' },
    { name: 'Wakefield', time: '6 min' },
    { name: 'Pinecrest', time: '5 min' },
  ];

  const annandaleTestimonials = [
    {
      name: "Emily S.",
      location: "Heritage Center area",
      text: "Having a world-class PMU artist right in my neighborhood is incredible. I've been to Mugi three times now for touch-ups and every visit has been amazing. No driving across town, no parking stress — just walk in, get beautiful brows, and walk home. It doesn't get better than this!",
      rating: 5
    },
    {
      name: "Diana K.",
      location: "Ravensworth",
      text: "I literally found Ink Mugi by driving past the Heritage Center one day and seeing the sign. Best discovery ever! Mugi is now my go-to artist for everything brows. She's so detailed and patient, and the fact that she's only 4 minutes from my house makes it even better.",
      rating: 5
    },
    {
      name: "Natalie C.",
      location: "Lake Barcroft",
      text: "I love supporting local Annandale businesses, and Ink Mugi is the real deal. The results are absolutely stunning — my brows look natural and full, exactly what I wanted. Mugi's expertise is evident in every stroke. So grateful to have this level of talent in our community!",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Where exactly is Ink Mugi in Annandale?",
      answer: "We're located at Heritage Center, 7857 Heritage Dr #330, Annandale VA 22003. Free parking is available right in front of the building. We're easy to find — just off Little River Turnpike, near the intersection of Heritage Dr and Columbia Pike. Look for the Heritage Center plaza and you'll see us on the third floor, Suite 330."
    },
    {
      question: "Why should I choose a local Annandale studio over DC or Tysons?",
      answer: "Convenience is the biggest win — no commute, no traffic, no expensive parking garages. In our consultations with Annandale clients, we hear over and over that being able to stay local for design appointments, follow-up questions, and touch-ups makes the entire process feel less stressful. Our pricing is $600 all-inclusive compared to $800+ at DC and Tysons studios for the same quality. Plus, with 523+ documented procedures, you're getting an artist with a proven track record right in your neighborhood. And because I'm local, I'm here for your touch-ups, questions, and aftercare check-ins without you having to trek across the DMV."
    },
    {
      question: "Is Ink Mugi open on weekends?",
      answer: "We offer select Saturday availability for Annandale residents. Our regular weekday hours are Monday through Friday, 10am to 6pm. We know weekends matter for busy schedules, so book your consultation and we'll find a time that works best for you — including those coveted Saturday slots."
    },
    {
      question: "How much does permanent makeup cost in Annandale?",
      answer: "Our ombre powder brows are $600 all-inclusive — that covers your design consultation, the full procedure (2–3 hours), premium EU-compliant vegan pigments, a medical-grade aftercare kit, 24/7 healing text support, and your included perfecting session at 6 weeks. No hidden fees. Compare this to $750–950 at DC and Tysons studios for similar quality."
    },
    {
      question: "What's the difference between eyebrow tattoo and ombre powder brows?",
      answer: "Traditional eyebrow tattoos use body tattoo ink that can turn blue or grey over time. Ombre powder brows use specialized PMU pigments designed to fade naturally and hold true color. The technique creates a soft, powdered makeup look — like perfectly filled brows — rather than the harsh, blocky appearance of old-style eyebrow tattooing. As an Annandale PMU artist, Mugi uses only premium EU-compliant vegan pigments that are specifically formulated for the brow area."
    },
    {
      question: "Do you offer nano brows or microshading in Annandale?",
      answer: "Yes! In addition to our signature ombre powder brows, we offer nano brows (crisp hair-stroke technique using a digital machine) and microshading (soft dot-work finish). During your free consultation at our Annandale studio, Mugi will evaluate your skin type, lifestyle, and goals to recommend the technique that will heal best for you."
    }
  ];

  return (
    <>
      <SEO
        title="Permanent Makeup Annandale VA | PMU Artist & Ombre Powder Brows — Ink Mugi"
        description="Licensed PMU artist in Annandale, VA — ombre powder brows, eyebrow tattoo & microshading at Heritage Center. 523+ procedures, 0.19% complication rate, $600 all-inclusive. Free parking & consultation."
        path="/licensed-pmu-artist-annandale"
        keywords="permanent makeup Annandale VA, pmu artist Annandale, ombre powder brows Annandale, eyebrow tattoo Annandale VA, powder brows Annandale Virginia, PMU near Heritage Center, microshading Annandale VA, nano brows Annandale"
      >
        <script type="application/ld+json">
          {JSON.stringify({
            ...localSchema,
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "47",
              "bestRating": "5",
              "worstRating": "5"
            },
            "review": annandaleTestimonials.map(t => ({
              "@type": "Review",
              "author": { "@type": "Person", "name": t.name },
              "reviewRating": { "@type": "Rating", "ratingValue": t.rating, "bestRating": 5 },
              "reviewBody": t.text
            }))
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Permanent Makeup in Annandale, VA",
            "description": "Professional ombre powder brows, nano brows & microshading by VA-licensed PMU artist in Annandale. 523+ documented procedures, healed-first approach. Located at Heritage Center, 7857 Heritage Dr #330.",
            "provider": { "@type": "HealthAndBeautyBusiness", "@id": "https://inkmugi.com/#business" },
            "areaServed": { "@type": "City", "name": "Annandale", "containedInPlace": { "@type": "State", "name": "Virginia" } },
            "serviceType": "Permanent Makeup",
            "offers": { "@type": "Offer", "price": "600", "priceCurrency": "USD", "availability": "https://schema.org/InStock" }
          })}
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
              { "@type": "ListItem", "position": 3, "name": "Permanent Makeup Annandale VA", "item": "https://inkmugi.com/licensed-pmu-artist-annandale" }
            ]
          })}
        </script>
      </SEO>

      {/* Hero Section */}
      <LocationHero
        city="Annandale"
        badgeText="Located in Annandale, VA — Our Home Studio"
        headline={<>Permanent Makeup in<br /><span className="text-[#9A7B69]">Annandale</span> — Your Neighborhood Studio</>}
        subtext="Right here at Heritage Center — no commute needed. Experience 523+ procedures worth of expertise with your neighborhood PMU artist. Walk-in convenience, free parking, and results that speak for themselves."
        heroImage="https://live.staticflickr.com/65535/54408668740_7465ce5ee8_c_d.jpg"
        heroImageAlt="Healed ombre powder brows by Ink Mugi in Annandale, Virginia"
        primaryCTA={{ text: 'Book Free Consultation', to: '/booking' }}
        secondaryCTA={{ text: '(571) 283-8228', href: 'tel:+15712838228' }}
      />

      {/* Drive Time Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Minutes from Anywhere in Annandale
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
              We're right here in your neighborhood at Heritage Center. Free parking, easy access, and a relaxing studio environment you'll love.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {neighborhoods.map((hood, index) => (
              <AnimatedSection key={hood.name} delay={index * 0.1}>
                <div className="bg-[#F9F7F5] rounded-xl p-4 text-center hover:shadow-lg transition-shadow">
                  <Car className="w-6 h-6 text-[#9A7B69] mx-auto mb-2" />
                  <p className="font-medium text-[#2D2D2B]">{hood.name}</p>
                  <p className="text-[#9A7B69] font-semibold">{hood.time}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Google Maps Embed */}
          <AnimatedSection className="mt-12">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.5!2d-77.1969261!3d38.8303726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64faa3b8d9e57%3A0x7b0da9b5a7a0b8f0!2s7857%20Heritage%20Dr%20%23330%2C%20Annandale%2C%20VA%2022003!5e0!3m2!1sen!2sus!4v1703444800000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ink Mugi studio location in Annandale, VA"
              />
            </div>
            <p className="text-center text-[#2D2D2B]/60 mt-4 text-sm">
              📍 7857 Heritage Dr #330, Annandale, VA 22003 • Free parking available
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Annandale Chooses Us */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Why Annandale Residents Love Their Local PMU Studio
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                <div className="w-14 h-14 bg-[#E6DAD2] rounded-xl flex items-center justify-center mb-6">
                  <MapPin className="w-7 h-7 text-[#2D2D2B]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2D2D2B]">Your Neighborhood Studio</h3>
                <p className="text-[#2D2D2B]/70">
                  No commute, no traffic, no parking hassles. Walk in from Heritage Center or drive from anywhere in Annandale in under 5 minutes. In our experience, that local convenience also makes clients feel more comfortable reaching out during healing because their brow artist lives and works right here.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                <div className="w-14 h-14 bg-[#E6DAD2] rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-[#2D2D2B]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2D2D2B]">523+ Documented Results</h3>
                <p className="text-[#2D2D2B]/70">
                  Every procedure is documented with 6+ week healed photos. See our track record right here in your community. Real results from real clients — verifiable and transparent.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                <div className="w-14 h-14 bg-[#E6DAD2] rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-[#2D2D2B]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2D2D2B]">The Personal Touch</h3>
                <p className="text-[#2D2D2B]/70">
                  As your local artist, I'm here for you long-term. Touch-ups, questions, aftercare check-ins — your brow expert is 5 minutes away. That's the advantage of choosing your neighborhood studio.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Service link cards */}
          <AnimatedSection className="mt-12">
            <div className="bg-[#F7EDE6] rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-cormorant font-semibold text-[#2D2D2B] text-center mb-6">
                Explore Our Permanent Makeup Services in Annandale
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

      {/* Ombre Brows vs Microblading — Climate Section */}
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
              <span className="text-[#E6DAD2]">Why Annandale Clients Choose Powder Brows</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Droplets className="w-6 h-6 text-[#E6DAD2]" />
                  <h3 className="text-xl font-semibold">Northern Virginia Humidity Factor</h3>
                </div>
                <p className="text-white/80 leading-relaxed">
                  Annandale sits right in the Potomac basin's humidity zone, with summers consistently reaching 70–80% humidity. Microblading strokes — created by manual blade cuts in the epidermis — tend to blur and migrate faster in these conditions. Ombre powder brows deposit pigment deeper using a digital machine, creating results that hold their clarity through every Northern Virginia season.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-[#E6DAD2]" />
                  <h3 className="text-xl font-semibold">Healed-First Means Certainty</h3>
                </div>
                <p className="text-white/80 leading-relaxed">
                  Fresh brows always look great. What matters is how they look in 6 weeks — after the skin has fully healed. Our entire portfolio shows healed results, not same-day photos. For Annandale residents making a considered investment, this distinction is exactly why they choose our studio over artists who only show fresh work.
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

      {/* Annandale Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              What Annandale Clients Say
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#9A7B69] text-[#9A7B69]" />
              ))}
            </div>
            <p className="text-[#2D2D2B]/70">5.0 rating from 47+ reviews</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {annandaleTestimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-[#F9F7F5] rounded-2xl p-8 h-full">
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
                      <p className="text-sm text-[#9A7B69]">{testimonial.location}, Annandale</p>
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
              Ombre Powder Brows Pricing
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
              Transparent pricing with everything included. No hidden fees.
            </p>
          </AnimatedSection>

          <div className="max-w-lg mx-auto">
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <p className="text-sm text-[#9A7B69] font-medium mb-2">SIGNATURE SERVICE</p>
                  <h3 className="text-2xl font-cormorant font-medium text-[#2D2D2B]">Ombre Powder Brows</h3>
                  <p className="text-4xl font-bold text-[#2D2D2B] mt-2">$600</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    'Free design consultation',
                    'Full 3-hour procedure',
                    'Premium vegan pigments',
                    'Medical-grade aftercare kit ($75 value)',
                    '24/7 healing text support',
                    'Professional aftercare support',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#9A7B69]" />
                      <span className="text-[#2D2D2B]/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/booking"
                  className="block w-full text-center px-8 py-4 bg-[#2D2D2B] text-white rounded-full font-medium hover:bg-[#4A4A47] transition-all"
                >
                  Book Your Annandale Consultation
                </Link>
                <p className="text-center text-[#2D2D2B]/60 mt-4 text-sm">
                  Compare: DC & Tysons studios charge $750-950 for similar quality
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <LocationMidCTA
        headline="Ready to wake up with perfect brows?"
        subtext="Your neighborhood studio is right here in Annandale. Book a free consultation and see why hundreds of local clients trust Ink Mugi."
        buttonText="Book Free Consultation"
      />

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <InlineFaqAccordion
                faqs={faqs}
                title="Questions from Annandale Clients"
                subtitle="Tap a question to reveal the answer"
                maxVisible={3}
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
              Considering Microblading in Annandale, VA?
            </h2>
            <p className="text-[#2D2D2B]/80 text-lg leading-relaxed mb-4">
              As Annandale's local PMU studio, we see firsthand how Northern Virginia's climate affects brow procedures. Many clients come to us after unsatisfying microblading experiences — often from other providers in the Annandale–Fairfax corridor — seeking correction or transition to a more durable technique. A common pattern we see with Annandale clients is that brows may look fine initially, then soften unevenly once summer humidity, sweat, and daily skincare routines start affecting retention. The pattern is consistent: microblading's shallow incisions can't withstand our humid summers.
            </p>
            <p className="text-[#2D2D2B]/70 leading-relaxed mb-6">
              We specialize in ombré powder brows precisely because they deliver 2–3x longer results in our climate. If you're comparing techniques, our evidence-based guides will help you make the right choice.
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

      {/* We Also Serve - Cross-links */}
      <section className="py-16 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-cormorant font-medium text-[#2D2D2B] mb-3">
              We Also Serve Nearby Areas
            </h2>
            <p className="text-[#2D2D2B]/60">Premium ombre powder brows for the entire DMV region</p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <Link to="/permanent-makeup-falls-church-va" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Falls Church, VA</p>
              <p className="text-sm text-[#2D2D2B]/50">8 min drive</p>
            </Link>
            <Link to="/ombre-brows-fairfax-va" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Fairfax, VA</p>
              <p className="text-sm text-[#2D2D2B]/50">10 min drive</p>
            </Link>
            <Link to="/ombre-brows-arlington-va" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Arlington, VA</p>
              <p className="text-sm text-[#2D2D2B]/50">12 min drive</p>
            </Link>
            <Link to="/permanent-makeup-springfield-va" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Springfield, VA</p>
              <p className="text-sm text-[#2D2D2B]/50">12 min drive</p>
            </Link>
            <Link to="/permanent-makeup-burke-va" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Burke, VA</p>
              <p className="text-sm text-[#2D2D2B]/50">12 min drive</p>
            </Link>
            <Link to="/permanent-makeup-tysons-va" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Tysons, VA</p>
              <p className="text-sm text-[#2D2D2B]/50">12 min drive</p>
            </Link>
            <Link to="/ombre-brows-vienna-va" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Vienna, VA</p>
              <p className="text-sm text-[#2D2D2B]/50">14 min drive</p>
            </Link>
            <Link to="/ombre-brows-mclean-va" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">McLean, VA</p>
              <p className="text-sm text-[#2D2D2B]/50">15 min drive</p>
            </Link>
            <Link to="/ombre-brows-alexandria-va" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Alexandria, VA</p>
              <p className="text-sm text-[#2D2D2B]/50">15 min drive</p>
            </Link>
            <Link to="/permanent-makeup-dc" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Washington, DC</p>
              <p className="text-sm text-[#2D2D2B]/50">20 min drive</p>
            </Link>
            <Link to="/signature-ombre-brows" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Ombre Powder Brows</p>
              <p className="text-sm text-[#2D2D2B]/50">Our signature service</p>
            </Link>
            <Link to="/faq" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">FAQ</p>
              <p className="text-sm text-[#2D2D2B]/50">Common questions</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#2D2D2B] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://live.staticflickr.com/65535/54363160242_7975c4f42c_o_d.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-cormorant font-medium mb-6">
              Ready for Effortless Brows?
            </h2>
            <p className="text-lg text-[#F9F7F5]/90 mb-8">
              Your neighborhood PMU studio is right here in Annandale. Book your free consultation and see why hundreds of local clients trust Ink Mugi for their brows.
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
                View Before & Afters
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default PermanentMakeupAnnandale;
