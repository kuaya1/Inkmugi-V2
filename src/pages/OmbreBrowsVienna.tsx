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

const OmbreBrowsVienna: React.FC = () => {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": "https://www.inkmugi.com/#business",
    "name": "Ink Mugi",
    "url": "https://www.inkmugi.com/ombre-brows-vienna-va",
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
      "name": "Vienna, VA"
    }
  };

  const neighborhoods = [
    { name: 'Vienna Town Center', time: '12 min' },
    { name: 'Oakton', time: '10 min' },
    { name: 'Dunn Loring', time: '8 min' },
    { name: 'Mantua', time: '6 min' },
    { name: 'Cedar Lane area', time: '9 min' },
    { name: 'Nottoway Park area', time: '11 min' },
  ];

  const viennaTestimonials = [
    {
      name: "Caroline D.",
      location: "Vienna",
      text: "I love Vienna but finding a skilled PMU artist here is impossible. Mugi is 12 minutes away and her work is the best I've seen in all of Northern Virginia. Worth every penny.",
      rating: 5
    },
    {
      name: "Yuna K.",
      location: "Oakton",
      text: "Drove over from Oakton on a friend's recommendation. The studio is immaculate, Mugi is so precise, and my brows at 8 weeks healed are absolutely perfect. $600 is a steal.",
      rating: 5
    },
    {
      name: "Heather M.",
      location: "Mantua",
      text: "Only 6 minutes from Mantua — closer than going into Vienna Town Center! Mugi's portfolio convinced me, and my results confirmed it. My go-to for permanent makeup.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Where is Ink Mugi relative to Vienna?",
      answer: "Just 12 minutes via Route 123 or Gallows Road from Vienna Town Center. Even closer from Oakton (10 min), Dunn Loring (8 min), and Mantua (6 min). Free parking at Heritage Center."
    },
    {
      question: "What style of brows does Mugi specialize in?",
      answer: "Ombré powder brows — the most natural-looking, longest-lasting permanent makeup technique. Perfect for Vienna clients who want a soft, polished look that's undetectable as permanent makeup. 523+ procedures refined this technique to perfection."
    },
    {
      question: "Is there a consultation before the procedure?",
      answer: "Always! Every Vienna client gets a free, no-pressure consultation where we discuss your brow goals, face shape, coloring, and lifestyle. I'll show you exactly what your brows will look like before we begin. Book online or call (571) 400-0996."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Ombré Brows for Vienna, VA Residents | Ink Mugi — 12 Min from Town Center</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Vienna VA ombre powder brows by Ink Mugi — 12 minutes from Vienna Town Center, serving Oakton, Mantua & Dunn Loring. 523+ procedures, VA-licensed, $600 all-inclusive. Free parking, free consultation." />
        <meta name="keywords" content="ombre brows vienna va, powder brows vienna virginia, permanent makeup vienna va, PMU near oakton, microshading vienna town center" />
        <link rel="canonical" href="https://www.inkmugi.com/ombre-brows-vienna-va" />
        <meta property="og:title" content="Ombré Brows for Vienna VA | Ink Mugi — 12 Min Away" />
        <meta property="og:description" content="Vienna's nearby PMU artist. 12 minutes from Town Center. Natural ombre brows, $600 all-inclusive." />
        <meta property="og:url" content="https://www.inkmugi.com/ombre-brows-vienna-va" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ombré Brows for Vienna VA | Ink Mugi — 12 Min Away" />
        <meta name="twitter:description" content="Vienna's nearby PMU artist. 12 minutes from Town Center. Natural ombre brows, $600 all-inclusive." />
        <meta name="twitter:image" content="https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg" />
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
            "review": viennaTestimonials.map(t => ({
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
              { "@type": "ListItem", "position": 3, "name": "Ombre Brows Vienna VA", "item": "https://www.inkmugi.com/ombre-brows-vienna-va" }
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
              Serving Vienna, VA — 12 Min from Town Center
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium mb-6 text-[#2D2D2B] leading-tight">
              Ombré Powder Brows for<br />
              <span className="text-amber-700">Vienna, VA</span>
            </h1>
            <p className="text-lg md:text-xl text-[#2D2D2B]/80 max-w-3xl mx-auto mb-8">
              Just 12 minutes from Vienna Town Center. Northern Virginia's most trusted PMU artist — 523+ successful procedures, natural results, and an honest $600 all-inclusive price. No hidden fees, ever.
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
              Easy Access from All Vienna Neighborhoods
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
              A pleasant 12-minute drive via Route 123 or Gallows Road. Free parking, no meters, no circling — just pull up and walk into a calm, private studio.
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
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d49774.98899393825!2d-77.26!3d38.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x89b64e63c68b5b1f%3A0x4b8b8b8b8b8b8b8b!2sVienna%2C%20VA!3m2!1d38.9012225!2d-77.2652604!4m5!1s0x89b64faa3b8d9e57%3A0x7b0da9b5a7a0b8f0!2s7857%20Heritage%20Dr%20%23330%2C%20Annandale%2C%20VA%2022003!3m2!1d38.8303726!2d-77.1969261!5e0!3m2!1sen!2sus!4v1703444800000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Directions from Vienna VA to Ink Mugi in Annandale"
              />
            </div>
            <p className="text-center text-[#2D2D2B]/60 mt-4 text-sm">
              📍 7857 Heritage Dr #330, Annandale, VA 22003 • Free parking available
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Vienna Chooses Us */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Why Vienna Clients Choose Ink Mugi
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <Car className="w-7 h-7 text-amber-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2D2D2B]">12 Minutes from Vienna</h3>
                <p className="text-[#2D2D2B]/70">
                  A pleasant drive along Route 123 or Gallows Road. Free parking, relaxed environment, and a VA-licensed studio dedicated to perfect brows.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-amber-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2D2D2B]">Natural Results Vienna Clients Love</h3>
                <p className="text-[#2D2D2B]/70">
                  Ombré powder brows that look like perfectly filled-in brows, not stamped-on tattoos. 523+ clients can't be wrong — see healed photos in our gallery.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-amber-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2D2D2B]">Transparent $600 All-Inclusive</h3>
                <p className="text-[#2D2D2B]/70">
                  Consultation, procedure, premium pigments, aftercare kit, and touch-up all included. No hidden costs, no upsells. Just beautiful brows at an honest price.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vienna Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              What Vienna Clients Say
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-amber-700 text-amber-700" />
              ))}
            </div>
            <p className="text-[#2D2D2B]/70">5.0 rating from 47+ reviews</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {viennaTestimonials.map((testimonial, index) => (
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
                      <p className="text-sm text-amber-700">{testimonial.location}, VA</p>
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
              Ombré Powder Brows Pricing
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
              All-inclusive pricing — no surprises, no hidden fees. Everything you need for perfect brows in one transparent price.
            </p>
          </AnimatedSection>

          <div className="max-w-lg mx-auto">
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <p className="text-sm text-amber-700 font-medium mb-2">SIGNATURE SERVICE</p>
                  <h3 className="text-2xl font-cormorant font-medium text-[#2D2D2B]">Ombré Powder Brows</h3>
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
                      <CheckCircle className="w-5 h-5 text-amber-700" />
                      <span className="text-[#2D2D2B]/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/booking"
                  className="block w-full text-center px-8 py-4 bg-[#2D2D2B] text-white rounded-full font-medium hover:bg-[#4A4A47] transition-all"
                >
                  Book Your Vienna Consultation
                </Link>
                <p className="text-center text-[#2D2D2B]/60 mt-4 text-sm">
                  Compare: DC & Tysons studios charge $800–$1,200 for similar quality
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
                title="Questions from Vienna Clients"
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
            <p className="text-[#2D2D2B]/60">Premium ombré powder brows for the entire DMV region</p>
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
              <p className="text-sm text-[#2D2D2B]/50">25 min drive</p>
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
              Ready for Your Vienna Brow Transformation?
            </h2>
            <p className="text-lg text-[#F9F7F5]/90 mb-8">
              Join Vienna residents from Town Center to Oakton to Mantua who've discovered their perfect brows — just 12 minutes away. Book your free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-700 text-white rounded-full font-medium hover:bg-amber-800 transition-all"
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

export default OmbreBrowsVienna;
