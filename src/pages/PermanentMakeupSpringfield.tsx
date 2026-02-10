import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Star, CheckCircle, Award, Shield, Car, ArrowRight, Phone } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import InlineFaqAccordion from '../components/InlineFaqAccordion';

const PermanentMakeupSpringfield: React.FC = () => {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": "https://www.inkmugi.com/#business",
    "name": "Ink Mugi",
    "url": "https://www.inkmugi.com/permanent-makeup-springfield-va",
    "logo": "https://www.inkmugi.com/logo.png",
    "image": "https://www.inkmugi.com/og-image.jpg",
    "telephone": "+15714000996",
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
      "name": "Springfield, VA"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "47",
      "bestRating": "5",
      "worstRating": "5"
    }
  };

  const neighborhoods = [
    { name: 'Springfield Town Center', time: '12 min' },
    { name: 'West Springfield', time: '10 min' },
    { name: 'Burke', time: '14 min' },
    { name: 'Kings Park', time: '8 min' },
    { name: 'Backlick Road area', time: '7 min' },
    { name: 'Franconia', time: '15 min' },
  ];

  const springfieldTestimonials = [
    {
      name: "Stephanie W.",
      location: "Springfield",
      text: "I was driving all the way to DC for my brows until a friend told me about Mugi. 12 minutes from Springfield Town Center, half the price, and honestly better results.",
      rating: 5
    },
    {
      name: "Maria G.",
      location: "Burke",
      text: "Mugi is the most talented PMU artist in the DMV. Period. Worth the 14-minute drive from Burke — I've seen her healed results on three of my friends and they all look amazing.",
      rating: 5
    },
    {
      name: "Jessica T.",
      location: "Kings Park",
      text: "I live in Kings Park and had been researching brow artists for 6 months. Once I saw Mugi's healed portfolio, the decision was instant. Best $600 I've ever spent.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How do I get to Ink Mugi from Springfield?",
      answer: "Take I-495 N or Little River Turnpike west — just 12 minutes from Springfield Town Center. We're at Heritage Center, 7857 Heritage Dr #330, with plenty of free parking."
    },
    {
      question: "Is $600 really all-inclusive?",
      answer: "Yes! Your $600 covers the free consultation, custom brow design, the full 2-3 hour procedure, premium pigments, numbing cream, aftercare kit, AND your 6-8 week touch-up appointment. Zero hidden charges."
    },
    {
      question: "How long do ombre powder brows last?",
      answer: "With proper aftercare, ombre powder brows last 1-3 years depending on skin type, lifestyle, and sun exposure. Annual color boosts ($200) keep them looking fresh. I guide every Springfield client through the entire healing process."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Permanent Makeup Near Springfield, VA | Ink Mugi — 12 Min from Town Center</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Springfield VA permanent makeup — 12 minutes from Town Center to Ink Mugi's Annandale studio. 523+ procedures, VA-licensed, $600 all-inclusive ombre powder brows. Burke, Kings Park & Franconia welcome." />
        <meta name="keywords" content="permanent makeup Springfield VA, ombre brows Springfield, powder brows Springfield Virginia, PMU near Springfield Town Center, microshading Springfield VA" />
        <link rel="canonical" href="https://www.inkmugi.com/permanent-makeup-springfield-va" />
        <meta property="og:title" content="Permanent Makeup Near Springfield VA | Ink Mugi — 12 Min Drive" />
        <meta property="og:description" content="Springfield's nearby PMU artist. 12 minutes from Town Center. 523+ procedures, $600 all-inclusive ombre powder brows." />
        <meta property="og:url" content="https://www.inkmugi.com/permanent-makeup-springfield-va" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Permanent Makeup Near Springfield VA | Ink Mugi — 12 Min Drive" />
        <meta name="twitter:description" content="Springfield's nearby PMU artist. 12 minutes from Town Center. 523+ procedures, $600 all-inclusive ombre powder brows." />
        <meta name="twitter:image" content="https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            ...localSchema,
            "review": springfieldTestimonials.map(t => ({
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
              { "@type": "ListItem", "position": 3, "name": "Permanent Makeup Springfield VA", "item": "https://www.inkmugi.com/permanent-makeup-springfield-va" }
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
              Serving Springfield, VA — 12 Min from Town Center
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium mb-6 text-[#2D2D2B] leading-tight">
              Permanent Makeup for<br />
              <span className="text-amber-700">Springfield, VA</span>
            </h1>
            <p className="text-lg md:text-xl text-[#2D2D2B]/80 max-w-3xl mx-auto mb-8">
              Just 12 minutes from Springfield Town Center via I-495. Northern Virginia's most trusted PMU artist — 523+ successful procedures, VA-licensed, and $600 all-inclusive ombre powder brows with results that speak for themselves.
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
                href="tel:+15714000996"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#2D2D2B] text-[#2D2D2B] rounded-full font-medium hover:bg-[#2D2D2B] hover:text-white transition-all"
              >
                <Phone className="mr-2 w-5 h-5" />
                (571) 400-0996
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
              Easy Access from All Springfield Neighborhoods
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
              Skip the DC traffic and Tysons parking garages. Our Annandale studio is a quick hop south on I-495 or west on Little River Turnpike — with free parking and a calm, private atmosphere.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {neighborhoods.map((hood, index) => (
              <AnimatedSection key={hood.name} delay={index * 0.1}>
                <div className="bg-[#F9F7F5] rounded-xl p-4 text-center hover:shadow-lg transition-shadow">
                  <Car className="w-6 h-6 text-amber-700 mx-auto mb-2" />
                  <p className="font-medium text-[#2D2D2B]">{hood.name}</p>
                  <p className="text-amber-700 font-semibold">{hood.time}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Google Maps Embed */}
          <AnimatedSection className="mt-12">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d49774.98899393825!2d-77.19!3d38.80!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x89b64e9876543210%3A0xabcdef1234567890!2sSpringfield%2C%20VA!3m2!1d38.7893!2d-77.1872!4m5!1s0x89b64faa3b8d9e57%3A0x7b0da9b5a7a0b8f0!2s7857%20Heritage%20Dr%20%23330%2C%20Annandale%2C%20VA%2022003!3m2!1d38.8303726!2d-77.1969261!5e0!3m2!1sen!2sus!4v1703444800000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Directions from Springfield to Ink Mugi"
              />
            </div>
            <p className="text-center text-[#2D2D2B]/60 mt-4 text-sm">
              📍 7857 Heritage Dr #330, Annandale, VA 22003 • Free parking available
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Springfield Chooses Us */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Why Springfield Clients Trust Ink Mugi
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <Car className="w-7 h-7 text-amber-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2D2D2B]">12 Minutes from Springfield</h3>
                <p className="text-[#2D2D2B]/70">
                  A quick hop on I-495 or Little River Turnpike. Free parking at Heritage Center, no meters, no stress. Serving Springfield, Burke, Kings Park & Franconia.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-amber-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2D2D2B]">523+ Procedures, Real Results</h3>
                <p className="text-[#2D2D2B]/70">
                  Not stock photos — real before-and-after documentation of every client at 6+ weeks healed. See your future brows in our extensive portfolio.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-amber-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2D2D2B]">$600 All-Inclusive, No Surprises</h3>
                <p className="text-[#2D2D2B]/70">
                  Consultation, procedure, premium pigments, aftercare kit, and touch-up all included. Springfield clients save $200-400 vs. DC and Tysons alternatives.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Springfield Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              What Springfield Clients Say
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-amber-700 text-amber-700" />
              ))}
            </div>
            <p className="text-[#2D2D2B]/70">5.0 rating from 47+ reviews</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {springfieldTestimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-[#F9F7F5] rounded-2xl p-8 h-full">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-700 text-amber-700" />
                    ))}
                  </div>
                  <p className="text-[#2D2D2B]/80 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[#2D2D2B] rounded-full flex items-center justify-center text-white font-medium">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-[#2D2D2B]">{testimonial.name}</p>
                      <p className="text-sm text-amber-700">{testimonial.location}</p>
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
              All-inclusive pricing — everything you need, nothing hidden.
            </p>
          </AnimatedSection>

          <div className="max-w-lg mx-auto">
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <p className="text-sm text-amber-700 font-medium mb-2">SIGNATURE SERVICE</p>
                  <h3 className="text-2xl font-cormorant font-medium text-[#2D2D2B]">Ombre Powder Brows</h3>
                  <p className="text-4xl font-bold text-[#2D2D2B] mt-2">$600</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    'Free design consultation',
                    'Custom brow mapping & design',
                    'Full 2-3 hour procedure',
                    'Premium vegan pigments',
                    'Numbing cream included',
                    'Medical-grade aftercare kit ($75 value)',
                    '6-8 week touch-up appointment',
                    '24/7 healing text support',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-700 flex-shrink-0" />
                      <span className="text-[#2D2D2B]/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/booking"
                  className="block w-full text-center px-8 py-4 bg-[#2D2D2B] text-white rounded-full font-medium hover:bg-[#4A4A47] transition-all"
                >
                  Book Your Springfield Consultation
                </Link>
                <p className="text-center text-[#2D2D2B]/60 mt-4 text-sm">
                  Compare: DC & Tysons studios charge $800-1,000+ for similar quality
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
                title="Questions from Springfield Clients"
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
              <p className="font-medium text-[#2D2D2B] group-hover:text-amber-700 transition-colors">Arlington, VA</p>
              <p className="text-sm text-[#2D2D2B]/50">12 min drive</p>
            </Link>
            <Link to="/ombre-brows-alexandria-va" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-amber-700 transition-colors">Alexandria, VA</p>
              <p className="text-sm text-[#2D2D2B]/50">15 min drive</p>
            </Link>
            <Link to="/ombre-brows-fairfax-va" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-amber-700 transition-colors">Fairfax, VA</p>
              <p className="text-sm text-[#2D2D2B]/50">10 min drive</p>
            </Link>
            <Link to="/permanent-makeup-dc" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-amber-700 transition-colors">Washington, DC</p>
              <p className="text-sm text-[#2D2D2B]/50">20 min drive</p>
            </Link>
            <Link to="/services" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-amber-700 transition-colors">All Services</p>
              <p className="text-sm text-[#2D2D2B]/50">Pricing & details</p>
            </Link>
            <Link to="/about" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-amber-700 transition-colors">About Mugi</p>
              <p className="text-sm text-[#2D2D2B]/50">Credentials & story</p>
            </Link>
            <Link to="/faq" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-amber-700 transition-colors">FAQ</p>
              <p className="text-sm text-[#2D2D2B]/50">17 common questions</p>
            </Link>
            <Link to="/blog" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-amber-700 transition-colors">PMU Blog</p>
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
              Ready for Your Springfield Transformation?
            </h2>
            <p className="text-lg text-[#F9F7F5]/90 mb-8">
              Join Springfield residents from Town Center to Burke who've discovered their perfect brows just 12 minutes away. Book your free consultation today — $600 all-inclusive, zero hidden fees.
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

export default PermanentMakeupSpringfield;
