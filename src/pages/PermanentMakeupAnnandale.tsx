import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  MapPin,
  Star,
  CheckCircle, 
  Award, 
  Shield,
  Car,
  ArrowRight,
  Phone
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import InlineFaqAccordion from '../components/InlineFaqAccordion';

const PermanentMakeupAnnandale: React.FC = () => {
  const localSchema = {
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
      answer: "Convenience is the biggest win — no commute, no traffic, no expensive parking garages. Our pricing is $600 all-inclusive compared to $800+ at DC and Tysons studios for the same quality. Plus, with 523+ documented procedures, you're getting an artist with a proven track record right in your neighborhood. And because I'm local, I'm here for your touch-ups, questions, and aftercare check-ins without you having to trek across the DMV."
    },
    {
      question: "Is Ink Mugi open on weekends?",
      answer: "We offer select Saturday availability for Annandale residents. Our regular weekday hours are Monday through Friday, 10am to 6pm. We know weekends matter for busy schedules, so book your consultation and we'll find a time that works best for you — including those coveted Saturday slots."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Permanent Makeup in Annandale, VA | Ink Mugi — Your Neighborhood PMU Studio</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Annandale's own ombre powder brows studio — walk-in convenience at Heritage Center, 7857 Heritage Dr #330. VA-licensed artist, 523+ procedures, $600 all-inclusive. Free parking, free consultation. Book today." />
        <meta name="keywords" content="permanent makeup Annandale VA, ombre brows Annandale, powder brows Annandale Virginia, PMU near Heritage Center, microshading Annandale VA" />
        <link rel="canonical" href="https://www.inkmugi.com/permanent-makeup-annandale-va" />
        <meta property="og:title" content="Permanent Makeup in Annandale, VA | Ink Mugi — Your Neighborhood PMU Studio" />
        <meta property="og:description" content="Annandale's own PMU studio. Walk-in convenience at Heritage Center. 523+ procedures, $600 all-inclusive." />
        <meta property="og:url" content="https://www.inkmugi.com/permanent-makeup-annandale-va" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Permanent Makeup in Annandale, VA | Ink Mugi — Your Neighborhood PMU Studio" />
        <meta name="twitter:description" content="Annandale's own PMU studio. Walk-in convenience at Heritage Center. 523+ procedures, $600 all-inclusive." />
        <meta name="twitter:image" content="https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg" />
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
              { "@type": "ListItem", "position": 3, "name": "Permanent Makeup Annandale VA", "item": "https://www.inkmugi.com/permanent-makeup-annandale-va" }
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#F0E4D8] to-[#F9F7F5] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-[#2D2D2B]"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-[#2D2D2B]"></div>
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D2D2B] text-white rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Located in Annandale, VA — Our Home Studio
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium mb-6 text-[#2D2D2B] leading-tight">
              Permanent Makeup in<br />
              <span className="text-[#9A7B69]">Annandale</span> — Your Neighborhood Studio
            </h1>
            <p className="text-lg md:text-xl text-[#2D2D2B]/80 max-w-3xl mx-auto mb-8">
              Right here at Heritage Center — no commute needed. Experience 523+ procedures worth of expertise with your neighborhood PMU artist. Walk-in convenience, free parking, and results that speak for themselves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#2D2D2B] text-white rounded-full font-medium hover:bg-[#4A4A47] transition-all"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:+15712838228"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#2D2D2B] text-[#2D2D2B] rounded-full font-medium hover:bg-[#2D2D2B] hover:text-white transition-all"
              >
                <Phone className="mr-2 w-5 h-5" />
                (571) 283-8228
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

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
                  No commute, no traffic, no parking hassles. Walk in from Heritage Center or drive from anywhere in Annandale in under 5 minutes. Your brow artist lives and works right here.
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

      {/* We Also Serve - Cross-links */}
      <section className="py-16 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-cormorant font-medium text-[#2D2D2B] mb-3">
              We Also Serve Nearby Areas
            </h2>
            <p className="text-[#2D2D2B]/60">Premium ombre powder brows for the entire DMV region</p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Link to="/ombre-brows-arlington-va" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Arlington, VA</p>
              <p className="text-sm text-[#2D2D2B]/50">12 min drive</p>
            </Link>
            <Link to="/ombre-brows-alexandria-va" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Alexandria, VA</p>
              <p className="text-sm text-[#2D2D2B]/50">15 min drive</p>
            </Link>
            <Link to="/ombre-brows-fairfax-va" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Fairfax, VA</p>
              <p className="text-sm text-[#2D2D2B]/50">10 min drive</p>
            </Link>
            <Link to="/permanent-makeup-dc" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Washington, DC</p>
              <p className="text-sm text-[#2D2D2B]/50">20 min drive</p>
            </Link>
            <Link to="/services" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">All Services</p>
              <p className="text-sm text-[#2D2D2B]/50">Pricing & details</p>
            </Link>
            <Link to="/about" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">About Mugi</p>
              <p className="text-sm text-[#2D2D2B]/50">Credentials & story</p>
            </Link>
            <Link to="/faq" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">FAQ</p>
              <p className="text-sm text-[#2D2D2B]/50">17 common questions</p>
            </Link>
            <Link to="/blog" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">PMU Blog</p>
              <p className="text-sm text-[#2D2D2B]/50">Expert guides</p>
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
