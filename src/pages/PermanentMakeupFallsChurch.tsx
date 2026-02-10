import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Star, CheckCircle, Award, Shield, Car, ArrowRight, Phone } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import InlineFaqAccordion from '../components/InlineFaqAccordion';

const PermanentMakeupFallsChurch: React.FC = () => {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": "https://www.inkmugi.com/#business",
    "name": "Ink Mugi",
    "url": "https://www.inkmugi.com/permanent-makeup-falls-church-va",
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
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Falls Church, VA"
    }
  };

  const neighborhoods = [
    { name: 'Falls Church City', time: '8 min' },
    { name: 'Seven Corners', time: '4 min' },
    { name: 'Bailey\'s Crossroads', time: '3 min' },
    { name: 'Willston', time: '5 min' },
    { name: 'Jefferson Village', time: '6 min' },
    { name: 'Greenway Downs', time: '7 min' },
  ];

  const fallsChurchTestimonials = [
    {
      name: "Michelle T.",
      location: "Falls Church City",
      text: "8 minutes from my house in Falls Church City. Mugi is incredibly skilled and the studio is so cozy and professional. Best beauty investment I've made.",
      rating: 5
    },
    {
      name: "Anh N.",
      location: "Seven Corners",
      text: "I literally drive past 3 other beauty places to get to Mugi. None of them have 523+ procedures or her attention to detail. Seven Corners to Heritage Center in 4 minutes.",
      rating: 5
    },
    {
      name: "Laura B.",
      location: "Bailey's Crossroads",
      text: "My neighbor in Bailey's Crossroads recommended Mugi. Went for the consultation, booked the same day. My healed brows look incredible — so natural no one knows they're permanent.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How close is Ink Mugi to Falls Church?",
      answer: "Just 8 minutes from Falls Church City via Route 7 or Wilson Blvd. Only 3-4 minutes from Seven Corners and Bailey's Crossroads. Free parking at Heritage Center — no meters or garages."
    },
    {
      question: "Do many Falls Church residents come to Ink Mugi?",
      answer: "Yes! Falls Church is one of our top client neighborhoods. The short drive, free parking, and $600 all-inclusive pricing make it an easy choice vs. DC or Tysons studios charging $800-1,000+."
    },
    {
      question: "What's included in the $600 ombre brows price?",
      answer: "Everything: consultation, custom brow mapping, the full procedure (2-3 hours), premium pigments, numbing, aftercare kit, and your 6-8 week touch-up session. No surprise fees, no product upsells."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Permanent Makeup in Falls Church, VA | Ink Mugi — 8 Minutes Away</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Falls Church VA permanent makeup by Ink Mugi — just 8 minutes from Falls Church City, 4 min from Seven Corners. VA-licensed, 523+ procedures, $600 all-inclusive ombre brows. Free consultation." />
        <meta name="keywords" content="permanent makeup Falls Church VA, ombre brows Falls Church, powder brows Falls Church Virginia, PMU near Falls Church, microshading Falls Church VA" />
        <link rel="canonical" href="https://www.inkmugi.com/permanent-makeup-falls-church-va" />
        <meta property="og:title" content="Permanent Makeup in Falls Church, VA | Ink Mugi — 8 Minutes Away" />
        <meta property="og:description" content="Falls Church VA permanent makeup — 8 min from Falls Church City. 523+ procedures, $600 all-inclusive ombre brows." />
        <meta property="og:url" content="https://www.inkmugi.com/permanent-makeup-falls-church-va" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Permanent Makeup in Falls Church, VA | Ink Mugi — 8 Minutes Away" />
        <meta name="twitter:description" content="Falls Church VA permanent makeup — 8 min from Falls Church City. 523+ procedures, $600 all-inclusive ombre brows." />
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
            "review": fallsChurchTestimonials.map(t => ({
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
              { "@type": "ListItem", "position": 3, "name": "Permanent Makeup Falls Church VA", "item": "https://www.inkmugi.com/permanent-makeup-falls-church-va" }
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#FFF3E0] to-[#FFFAF5] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-amber-700"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-amber-700"></div>
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-700 text-white rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Just 8 Minutes from Falls Church, VA
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium mb-6 text-[#2D2D2B] leading-tight">
              Permanent Makeup for<br />
              <span className="text-amber-700">Falls Church, VA</span>
            </h1>
            <p className="text-lg md:text-xl text-[#2D2D2B]/80 max-w-3xl mx-auto mb-8">
              Just 8 minutes from Falls Church City — skip the DC traffic and Tysons prices. 523+ documented procedures, VA-licensed artistry, and all-inclusive $600 pricing with free parking at Heritage Center.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-700 text-white rounded-full font-medium hover:bg-amber-800 transition-all"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:+15712838228"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-amber-700 text-amber-700 rounded-full font-medium hover:bg-amber-700 hover:text-white transition-all"
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
              Minutes from Anywhere in Falls Church
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
              Our Annandale studio is a quick drive from every Falls Church neighborhood. Free parking, zero hassle, and a relaxing experience from start to finish.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {neighborhoods.map((hood, index) => (
              <AnimatedSection key={hood.name} delay={index * 0.1}>
                <div className="bg-[#FFFAF5] rounded-xl p-4 text-center hover:shadow-lg transition-shadow">
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.5!2d-77.1969261!3d38.8303726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64faa3b8d9e57%3A0x7b0da9b5a7a0b8f0!2s7857%20Heritage%20Dr%20%23330%2C%20Annandale%2C%20VA%2022003!5e0!3m2!1sen!2sus!4v1703444800000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ink Mugi studio location — 8 minutes from Falls Church, VA"
              />
            </div>
            <p className="text-center text-[#2D2D2B]/60 mt-4 text-sm">
              📍 7857 Heritage Dr #330, Annandale, VA 22003 — Just 8 min from Falls Church • Free parking
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Falls Church Chooses Us */}
      <section className="py-20 bg-[#FFFAF5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Why Falls Church Residents Choose Ink Mugi
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <MapPin className="w-7 h-7 text-amber-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2D2D2B]">Just 8 Minutes from Falls Church</h3>
                <p className="text-[#2D2D2B]/70">
                  A quick drive via Route 7 or Wilson Blvd. Free parking, no traffic hassles, and a relaxed studio environment waiting for you.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-amber-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2D2D2B]">523+ Documented Procedures</h3>
                <p className="text-[#2D2D2B]/70">
                  Every single procedure photographed at 6+ weeks healed. See exactly what your results will look like before you commit.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-amber-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2D2D2B]">All-Inclusive $600 Pricing</h3>
                <p className="text-[#2D2D2B]/70">
                  No hidden fees, no product upsells. Your $600 covers everything from consultation through your touch-up. Save $200-400 vs. DC and Tysons.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Falls Church Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              What Falls Church Clients Say
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-amber-700 text-amber-700" />
              ))}
            </div>
            <p className="text-[#2D2D2B]/70">5.0 rating from 47+ reviews</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {fallsChurchTestimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-[#FFFAF5] rounded-2xl p-8 h-full">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-700 text-amber-700" />
                    ))}
                  </div>
                  <p className="text-[#2D2D2B]/80 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center text-white font-medium">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-[#2D2D2B]">{testimonial.name}</p>
                      <p className="text-sm text-amber-700">{testimonial.location}, Falls Church</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Service Pricing */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-amber-100">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Ombre Powder Brows — All-Inclusive Pricing
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
              Transparent pricing with everything included. No hidden fees, no surprises.
            </p>
          </AnimatedSection>

          <div className="max-w-lg mx-auto">
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <p className="text-sm text-amber-700 font-medium mb-2">SIGNATURE SERVICE</p>
                  <h3 className="text-2xl font-cormorant font-medium text-[#2D2D2B]">Ombre Powder Brows</h3>
                  <p className="text-4xl font-bold text-[#2D2D2B] mt-2">$600</p>
                  <p className="text-sm text-[#2D2D2B]/50 mt-1">DC & Tysons studios charge $800–1,000+</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    'Free design consultation & brow mapping',
                    'Full 2-3 hour procedure',
                    'Premium vegan pigments',
                    'Medical-grade numbing for comfort',
                    'Aftercare kit included ($75 value)',
                    '6-8 week touch-up session included',
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
                  className="block w-full text-center px-8 py-4 bg-amber-700 text-white rounded-full font-medium hover:bg-amber-800 transition-all"
                >
                  Book Your Falls Church Consultation
                </Link>
                <p className="text-center text-[#2D2D2B]/60 mt-4 text-sm">
                  Save $200–400 compared to DC and Tysons studios
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
                title="Questions from Falls Church Clients"
                subtitle="Tap a question to reveal the answer"
                maxVisible={3}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* We Also Serve - Cross-links */}
      <section className="py-16 bg-[#FFFAF5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-cormorant font-medium text-[#2D2D2B] mb-3">
              We Also Serve Nearby Areas
            </h2>
            <p className="text-[#2D2D2B]/60">Premium ombre powder brows for the entire DMV region</p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <Link to="/permanent-makeup-annandale-va" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-amber-700 transition-colors">Annandale, VA</p>
              <p className="text-sm text-[#2D2D2B]/50">8 min drive</p>
            </Link>
            <Link to="/ombre-brows-arlington-va" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-amber-700 transition-colors">Arlington, VA</p>
              <p className="text-sm text-[#2D2D2B]/50">8 min drive</p>
            </Link>
            <Link to="/permanent-makeup-tysons-va" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-amber-700 transition-colors">Tysons, VA</p>
              <p className="text-sm text-[#2D2D2B]/50">8 min drive</p>
            </Link>
            <Link to="/ombre-brows-mclean-va" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-amber-700 transition-colors">McLean, VA</p>
              <p className="text-sm text-[#2D2D2B]/50">8 min drive</p>
            </Link>
            <Link to="/ombre-brows-vienna-va" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-amber-700 transition-colors">Vienna, VA</p>
              <p className="text-sm text-[#2D2D2B]/50">12 min drive</p>
            </Link>
            <Link to="/signature-ombre-brows" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-amber-700 transition-colors">Ombre Powder Brows</p>
              <p className="text-sm text-[#2D2D2B]/50">Our signature service</p>
            </Link>
            <Link to="/nano-brows" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-amber-700 transition-colors">Nano Brows</p>
              <p className="text-sm text-[#2D2D2B]/50">Hair-stroke precision</p>
            </Link>
            <Link to="/lip-blush" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-amber-700 transition-colors">Lip Blush</p>
              <p className="text-sm text-[#2D2D2B]/50">Natural lip enhancement</p>
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
              Falls Church — Your Perfect Brows Are 8 Minutes Away
            </h2>
            <p className="text-lg text-[#F9F7F5]/90 mb-8">
              Skip the DC commute and Tysons prices. Book your free consultation at Ink Mugi and see why hundreds of Falls Church residents trust us for their permanent makeup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-600 text-white rounded-full font-medium hover:bg-amber-700 transition-all"
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

export default PermanentMakeupFallsChurch;
