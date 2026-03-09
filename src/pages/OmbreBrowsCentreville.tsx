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

const OmbreBrowsCentreville: React.FC = () => {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": "https://www.inkmugi.com/#business",
    "name": "Ink Mugi — Ombré Powder Brows",
    "url": "https://www.inkmugi.com/ombre-brows-centreville-va",
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
      { "@type": "City", "name": "Centreville", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Chantilly", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Annandale", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Fairfax", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Manassas", "containedInPlace": { "@type": "State", "name": "Virginia" } },
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
    "name": "Ombre Powder Brows for Centreville VA Clients",
    "description": "Professional ombre powder brows for Centreville, VA residents. 330+ documented procedures, healed-first philosophy, VA licensed. Located in Annandale — 25 minutes from Centreville Square via Route 28 and I-66.",
    "provider": {
      "@type": "HealthAndBeautyBusiness",
      "@id": "https://www.inkmugi.com/#business"
    },
    "areaServed": {
      "@type": "City",
      "name": "Centreville",
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
    { name: 'Centreville Square', time: '25 min' },
    { name: 'Route 28 Corridor', time: '23 min' },
    { name: 'Bull Run Area', time: '28 min' },
    { name: 'Virginia Run', time: '22 min' },
    { name: 'Centre Ridge', time: '24 min' },
    { name: 'Little Rocky Run', time: '22 min' },
  ];

  const centrevilleTestimonials = [
    {
      name: "Jennifer H.",
      location: "Centreville",
      text: "After two consultations at salons near Centreville Square that felt rushed, I drove to Mugi's studio in Annandale. She spent 40 minutes mapping my face before even discussing pigment. That level of care is why my healed results look flawless.",
      rating: 5
    },
    {
      name: "Nadia R.",
      location: "Virginia Run",
      text: "My morning routine used to eat 15 minutes on brows alone. As a working mom in Virginia Run, those minutes matter. Now I wake up with brows that look naturally filled in — and they've held up perfectly through two humid summers.",
      rating: 5
    },
    {
      name: "Stephanie C.",
      location: "Little Rocky Run",
      text: "I'm particular about who I trust with something permanent. Mugi's documented results and 0.19% complication rate were what convinced me to make the drive. Six months later, I still get compliments from people who think I just have amazing natural brows.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Is your Annandale studio convenient from Centreville?",
      answer: "Very convenient — it's approximately 25 minutes via I-66 East from the Centreville Square area. Clients from Virginia Run and Little Rocky Run often reach us in 22 minutes via Route 29. The drive is straightforward with no tricky turns, and free on-site parking means zero hassle when you arrive."
    },
    {
      question: "What makes ombre powder brows a good choice for Centreville residents?",
      answer: "Centreville's location in western Fairfax County means full exposure to Northern Virginia's humid summers. Ombre powder brows deposit pigment into the stable mid-dermis using a digital machine — this means results that hold their shape and color regardless of humidity, sweat, or seasonal changes. For active Centreville families who spend time at Bull Run or enjoy outdoor activities, powder brows are the most resilient option."
    },
    {
      question: "How is Ink Mugi different from PMU artists closer to Centreville?",
      answer: "Three measurable differences: 330+ tracked procedures (not an estimate), a 0.19% complication rate that's 13x below industry average, and a portfolio that exclusively shows healed results at 6+ weeks — not fresh, same-day photos. We also use premium EU-compliant vegan pigments and include a 6-week perfecting session in every price."
    },
    {
      question: "Do you serve clients from the Route 28 and Bull Run areas?",
      answer: "Absolutely. We regularly welcome clients from across the Centreville community — Centreville Square, Route 28 corridor, Bull Run, Virginia Run, Centre Ridge, and Little Rocky Run. Several clients combine their appointment with errands in the Annandale or Fairfax area to maximize the trip."
    },
    {
      question: "How long is the entire ombre powder brow process?",
      answer: "Your initial consultation (free, no obligation) takes about 30–45 minutes. The procedure itself is 2–3 hours, including 45 minutes of design mapping and your approval. The healing process takes approximately 6 weeks, during which Mugi is available via text for any questions. Your included perfecting session at 6 weeks completes the process."
    },
    {
      question: "What if I want nano brows or microshading instead?",
      answer: "We offer all three techniques: ombre powder brows, nano brows (individual hair strokes), and microshading (soft dotwork finish). During your free consultation, we'll evaluate your skin type, natural brow pattern, and goals to recommend the approach that will deliver the best healed outcome for your specific situation."
    }
  ];

  return (
    <>
      <SEO
        title="Ombre Powder Brows Centreville VA | Ink Mugi — Healed-First Results"
        description="Ombre powder brows for Centreville VA residents. 330+ procedures, 0.19% complication rate. 25 min from Centreville Square. VA licensed, healed-first approach. Free consultation."
        path="/ombre-brows-centreville-va"
        keywords="ombre powder brows Centreville VA, permanent makeup Centreville Virginia, PMU near Centreville Square, powder brows Route 28, microshading Centreville, nano brows Centreville VA"
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
            "review": centrevilleTestimonials.map(t => ({
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
              { "@type": "ListItem", "position": 3, "name": "Ombre Brows Centreville VA", "item": "https://www.inkmugi.com/ombre-brows-centreville-va" }
            ]
          })}
        </script>
      </SEO>

      <LocationHero
        city="Centreville"
        badgeText="Serving Centreville, VA"
        headline={<>Ombre Powder Brows for<br /><span className="text-[#9A7B69]">Centreville, VA</span></>}
        subtext="Permanent makeup grounded in evidence, not trends. 330+ procedures documented from consultation to healed result — your shape is mapped, you approve, and the outcome is predictable."
        secondaryText="25 minutes from Centreville Square to our private Annandale studio. Free parking. Consultation-first model."
        heroImage="https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg"
        heroImageAlt="Ombre powder brows for Centreville, VA clients at Ink Mugi studio"
        primaryCTA={{ text: 'Request a Consultation', to: '/booking' }}
        secondaryCTA={{ type: 'link', text: 'View Healed Results', to: '/gallery' }}
      />

      {/* Why Centreville Clients Choose Ink Mugi */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              Why Centreville Residents Drive to Ink Mugi
            </h2>
            <div className="prose prose-lg text-[#2D2D2B]/80 max-w-none">
              <p>
                Centreville sits at one of western Fairfax County's most active crossroads — where Route 28 meets I-66, and where families balance suburban life with demanding careers along the Dulles and DC corridors. When you're managing that kind of pace, the idea of getting something permanent done on your face deserves careful consideration.
              </p>
              <p>
                Our clients from the Centreville Square area, Virginia Run, and the neighborhoods around Bull Run Regional Park share a common thread: they researched thoroughly before booking. They compared healed portfolios, read about complication rates, and asked the right questions. What brings them to our Annandale studio — about 25 minutes east on I-66 — is the evidence behind our work.
              </p>
              <p>
                Centreville is a community of discerning families, many with ties to government, defense, and technology sectors. These are people who evaluate credentials before making decisions. Our Virginia licensure, hospital-grade sterilization standards, and a complication rate 13x below the industry average resonate with that mindset.
              </p>
              <p>
                The drive from Centre Ridge or Little Rocky Run is straightforward — I-66 East to Route 236, then a quick turn into Heritage Center. Free parking, a private studio environment, and appointments that are never double-booked. Several Centreville clients tell us they appreciate the calm after navigating Route 28 traffic.
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
              Drive Times from Centreville &amp; Nearby Areas
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
              Straight east on I-66 to our dedicated Annandale studio. Free parking at our door — no garages, no meters.
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
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d99000!2d-77.40!3d38.84!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x89b6444440b7af63%3A0x908b84f7b7e8c9e0!2sCentreville%2C%20VA!3m2!1d38.8403516!2d-77.4289153!4m5!1s0x89b64faa3b8d9e57%3A0x7b0da9b5a7a0b8f0!2s7857%20Heritage%20Dr%20%23330%2C%20Annandale%2C%20VA%2022003!3m2!1d38.8303726!2d-77.1969261!5e0!3m2!1sen!2sus!4v1703444800000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Directions from Centreville to Ink Mugi in Annandale"
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
              Measurable Excellence, Not Marketing Claims
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
              Every number we cite is tracked. Every healed photo is real. Our Centreville clients expect evidence — we deliver it.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="bg-[#F9F7F5] rounded-2xl p-8 h-full">
                <div className="w-14 h-14 bg-[#E6DAD2] rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-[#2D2D2B]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2D2D2B]">330+ Outcomes Documented</h3>
                <p className="text-[#2D2D2B]/70">
                  Each procedure is tracked end-to-end — consultation notes, procedure details, healed photographs at 6+ weeks. This accumulated experience means refined precision for every client, including those traveling from the Centreville area.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-[#F9F7F5] rounded-2xl p-8 h-full">
                <div className="w-14 h-14 bg-[#E6DAD2] rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-[#2D2D2B]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2D2D2B]">Verified Safety Standards</h3>
                <p className="text-[#2D2D2B]/70">
                  A 0.19% complication rate isn't an aspiration — it's our documented record across 330+ procedures. Virginia licensed (VA #1231002471), insured, bloodborne pathogen certified. Premium EU-compliant vegan pigments with no heavy metals or undisclosed additives.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-[#F9F7F5] rounded-2xl p-8 h-full">
                <div className="w-14 h-14 bg-[#E6DAD2] rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle className="w-7 h-7 text-[#2D2D2B]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2D2D2B]">Your Approval Comes First</h3>
                <p className="text-[#2D2D2B]/70">
                  We map your ideal brow shape using facial proportions and the golden ratio, draw it on your face, and wait for your explicit approval. Adjustments, rethinking, questions — all welcome. Nothing permanent begins until you say "this is exactly right."
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Internal links to service pages */}
          <AnimatedSection className="mt-12">
            <div className="bg-[#F7EDE6] rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-cormorant font-semibold text-[#2D2D2B] text-center mb-6">
                Explore Our Technique Options
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <Link to="/signature-ombre-brows" className="bg-white rounded-xl p-5 text-center hover:shadow-lg transition-shadow group">
                  <p className="font-semibold text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Signature Ombre Brows</p>
                  <p className="text-sm text-[#2D2D2B]/60 mt-1">Soft gradient, powdered finish</p>
                </Link>
                <Link to="/nano-brows" className="bg-white rounded-xl p-5 text-center hover:shadow-lg transition-shadow group">
                  <p className="font-semibold text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Nano Brows</p>
                  <p className="text-sm text-[#2D2D2B]/60 mt-1">Individual hair-stroke detail</p>
                </Link>
                <Link to="/microshading-artistry" className="bg-white rounded-xl p-5 text-center hover:shadow-lg transition-shadow group">
                  <p className="font-semibold text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Microshading</p>
                  <p className="text-sm text-[#2D2D2B]/60 mt-1">Delicate dotwork technique</p>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Ombre vs Microblading Section */}
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
              <span className="text-[#E6DAD2]">What Works Best in Centreville?</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Droplets className="w-6 h-6 text-[#E6DAD2]" />
                  <h3 className="text-xl font-semibold">Fairfax County's Humidity Reality</h3>
                </div>
                <p className="text-white/80 leading-relaxed">
                  Centreville's position at the edge of the Piedmont and Bull Run watershed means warm, moisture-heavy summers. Microblading — a manual blade technique that places pigment in the shallow epidermis — is particularly susceptible to humidity-driven diffusion. The strokes blur, spread, and fade unevenly. Ombre powder brows use controlled digital application into the mid-dermis, where pigment remains stable. For families who spend summers at Bull Run or on neighborhood trails, this durability distinction is practical, not theoretical.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-[#E6DAD2]" />
                  <h3 className="text-xl font-semibold">Healed Is the Only Result That Counts</h3>
                </div>
                <p className="text-white/80 leading-relaxed">
                  Fresh permanent makeup always photographs beautifully — the pigment is vivid, the skin is pristine. But the actual result emerges 4–6 weeks later, after healing, flaking, and pigment settling. That's why we only showcase healed work in our portfolio. When Centreville clients compare studios, we ask them to request healed photos from every artist they're considering. It's the single most revealing question you can ask.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/blog/nano-brows-vs-microblading-comparison"
                className="inline-flex items-center gap-2 text-[#E6DAD2] hover:text-white transition-colors font-medium"
              >
                See the detailed technique comparison backed by procedure data
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Centreville Testimonials */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Centreville Client Experiences
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#9A7B69] text-[#9A7B69]" />
              ))}
            </div>
            <p className="text-[#2D2D2B]/70">5.0 rating from 47+ verified reviews</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {centrevilleTestimonials.map((testimonial, index) => (
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

      {/* Pricing */}
      <section className="py-20 bg-[#F0E4D8]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Complete Pricing — No Surprises
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
              Every element of your procedure is included upfront. The number you see is the number you pay — nothing hidden, nothing added later.
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
                    'Comprehensive design consultation with mapping',
                    'Full procedure in a private, calm studio (2–3 hrs)',
                    'Premium vegan pigments — EU-compliant, no heavy metals',
                    'Medical-grade aftercare kit & written guide',
                    'Text access to Mugi throughout your healing',
                    '6-week perfecting session — always included',
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
        subtext="Centreville and Virginia Run residents trust Ink Mugi for precision ombré brows — just 25 minutes via I-66."
      />

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <InlineFaqAccordion
                faqs={faqs}
                title="Questions from Centreville Clients"
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
            <p className="text-[#2D2D2B]/60">Premium ombre powder brows across Fairfax County &amp; Northern Virginia</p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <Link to="/ombre-brows-chantilly-va" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Chantilly, VA</p>
              <p className="text-sm text-[#2D2D2B]/50">10 min drive</p>
            </Link>
            <Link to="/ombre-brows-fairfax-va" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Fairfax, VA</p>
              <p className="text-sm text-[#2D2D2B]/50">15 min drive</p>
            </Link>
            <Link to="/ombre-brows-reston-va" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Reston, VA</p>
              <p className="text-sm text-[#2D2D2B]/50">20 min drive</p>
            </Link>
            <Link to="/ombre-brows-vienna-va" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Vienna, VA</p>
              <p className="text-sm text-[#2D2D2B]/50">18 min drive</p>
            </Link>
            <Link to="/permanent-makeup-springfield-va" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Springfield, VA</p>
              <p className="text-sm text-[#2D2D2B]/50">20 min drive</p>
            </Link>
            <Link to="/ombre-brows-mclean-va" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">McLean, VA</p>
              <p className="text-sm text-[#2D2D2B]/50">25 min drive</p>
            </Link>
            <Link to="/ombre-brows-manassas-va" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Manassas, VA</p>
              <p className="text-sm text-[#2D2D2B]/50">15 min drive</p>
            </Link>
            <Link to="/ombre-brows-woodbridge-va" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Woodbridge, VA</p>
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
              Considering Microblading in Centreville, VA?
            </h2>
            <p className="text-[#2D2D2B]/80 text-lg leading-relaxed mb-4">
              Centreville families and professionals deserve accurate information about brow procedures before investing. Microblading's shallow, blade-based technique fades significantly faster in Northern Virginia's humid climate than what's typically advertised — often lasting less than a year. Our data from Centreville-area correction clients confirms the same patterns we see across western Fairfax County.
            </p>
            <p className="text-[#2D2D2B]/70 leading-relaxed mb-6">
              Ombré powder brows offer a more sustainable solution, with 18–36 month retention even in our challenging climate. Compare the techniques and costs before you decide.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link to="/microblading-vs-powder-brows" className="flex items-center gap-2 p-4 bg-[#F9F7F5] rounded-lg border border-[#E6DAD2] hover:shadow-md transition-shadow">
                <ArrowRight className="w-5 h-5 text-amber-700 flex-shrink-0" />
                <span className="text-[#2D2D2B] text-sm font-medium">Microblading vs Powder Brows Comparison</span>
              </Link>
              <Link to="/microblading-correction-northern-virginia" className="flex items-center gap-2 p-4 bg-[#F9F7F5] rounded-lg border border-[#E6DAD2] hover:shadow-md transition-shadow">
                <ArrowRight className="w-5 h-5 text-amber-700 flex-shrink-0" />
                <span className="text-[#2D2D2B] text-sm font-medium">Microblading Correction in Northern Virginia</span>
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
              Let's Find Out If We're the Right Fit
            </h2>
            <p className="text-lg text-[#F9F7F5]/90 mb-8">
              Centreville clients from Virginia Run to Bull Run have found a permanent makeup practice that values evidence over hype. Your consultation is an honest conversation about what's possible — with zero obligation.
            </p>
            <p className="text-base text-white/60 mb-8">
              Serving Fairfax County &amp; Northern Virginia • 25 minutes from Centreville • Free parking • By consultation only
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

export default OmbreBrowsCentreville;
