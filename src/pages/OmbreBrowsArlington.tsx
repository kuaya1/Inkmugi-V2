import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  MapPin, 
  Clock, 
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

const OmbreBrowsArlington: React.FC = () => {
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
      "name": "Arlington, VA"
    }
  };

  const neighborhoods = [
    { name: 'Clarendon', time: '12 min' },
    { name: 'Ballston', time: '10 min' },
    { name: 'Rosslyn', time: '15 min' },
    { name: 'Pentagon City', time: '14 min' },
    { name: 'Crystal City', time: '16 min' },
    { name: 'Shirlington', time: '8 min' },
  ];

  const arlingtonTestimonials = [
    {
      name: "Jessica M.",
      location: "Clarendon",
      text: "I researched PMU artists in Arlington for months before finding Inkmugi. The drive to Annandale was totally worth it—Mugi's technique is unmatched. My brows look incredible 8 months later!",
      rating: 5
    },
    {
      name: "Amanda K.",
      location: "Ballston",
      text: "Living in Ballston, I could have gone to any of the DC studios, but Inkmugi's reviews convinced me. Best decision ever. Natural results that my coworkers keep complimenting!",
      rating: 5
    },
    {
      name: "Rachel T.",
      location: "Pentagon City",
      text: "As a federal employee with early morning meetings, I needed brows that look polished without effort. Mugi delivered perfectly. The 15-minute drive from Pentagon City is nothing for these results.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How far is Inkmugi from Arlington?",
      answer: "Our Annandale studio is just 8-15 minutes from most Arlington neighborhoods. From Clarendon/Ballston, take I-66 West to the Little River Turnpike exit—you'll be here in about 12 minutes. We're located in the Heritage Center with free parking."
    },
    {
      question: "Why do Arlington residents choose Inkmugi over DC studios?",
      answer: "Arlington clients appreciate our combination of quality and value. DC studios charge $800+ for similar services, while our ombre brows are $600 with the same premium technique and better parking. Plus, our 500+ procedure track record speaks for itself."
    },
    {
      question: "Do you offer flexible hours for Arlington professionals?",
      answer: "Absolutely! We understand Arlington's professional crowd. We offer appointments Monday-Friday 10am-6pm, with select Saturday availability. Many clients book their initial consultation during lunch and return for their procedure on a less busy day."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Ombre Powder Brows Near Arlington, VA | Ink Mugi</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Arlington VA ombre powder brows by Ink Mugi — just 12 minutes from Clarendon, Ballston & Pentagon City. 523+ healed results, $600 all-inclusive. Free consultation with VA-licensed PMU artist. See before & afters." />
        <meta name="keywords" content="ombre brows Arlington VA, powder brows Clarendon, permanent makeup Arlington County, PMU near Ballston, microshading Arlington Virginia" />
        <link rel="canonical" href="https://www.inkmugi.com/ombre-brows-arlington-va" />
        <meta property="og:title" content="Ombre Brows for Arlington VA | Ink Mugi" />
        <meta property="og:description" content="Arlington's nearby PMU artist. 12 minutes from Clarendon. Natural ombre brows." />
        <meta property="og:url" content="https://www.inkmugi.com/ombre-brows-arlington-va" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ombre Brows for Arlington VA | Ink Mugi" />
        <meta name="twitter:description" content="Arlington's nearby PMU artist. 12 minutes from Clarendon. Natural ombre brows." />
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
            "review": arlingtonTestimonials.map(t => ({
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
              { "@type": "ListItem", "position": 3, "name": "Ombre Brows Arlington VA", "item": "https://www.inkmugi.com/ombre-brows-arlington-va" }
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
              Serving Arlington County, VA
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium mb-6 text-[#2D2D2B] leading-tight">
              Ombre Powder Brows for<br />
              <span className="text-[#9A7B69]">Arlington</span> Residents
            </h1>
            <p className="text-lg md:text-xl text-[#2D2D2B]/80 max-w-3xl mx-auto mb-8">
              Just 12 minutes from Clarendon & Ballston. Experience Northern Virginia's most trusted PMU artist with 523+ procedures and a 0.19% complication rate.
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
              Quick Drive from Any Arlington Neighborhood
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
              Our Annandale studio offers easy access from all of Arlington, with free parking and a relaxing environment away from the city rush.
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
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d49774.98899393825!2d-77.19!3d38.86!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x89b7b69d8c0c1c3b%3A0x47e8a4b0c8c92b0a!2sArlington%2C%20VA!3m2!1d38.8799697!2d-77.1067698!4m5!1s0x89b64faa3b8d9e57%3A0x7b0da9b5a7a0b8f0!2s7857%20Heritage%20Dr%20%23330%2C%20Annandale%2C%20VA%2022003!3m2!1d38.8303726!2d-77.1969261!5e0!3m2!1sen!2sus!4v1703444800000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Directions from Arlington to Inkmugi"
              />
            </div>
            <p className="text-center text-[#2D2D2B]/60 mt-4 text-sm">
              📍 7857 Heritage Dr #330, Annandale, VA 22003 • Free parking available
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Arlington Chooses Us */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Why Arlington Professionals Choose Inkmugi
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                <div className="w-14 h-14 bg-[#E6DAD2] rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-[#2D2D2B]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2D2D2B]">DC Quality, Better Value</h3>
                <p className="text-[#2D2D2B]/70">
                  Get the same premium technique as $800+ DC studios for $600. Virginia-licensed artist with 523+ procedures and verifiable results.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                <div className="w-14 h-14 bg-[#E6DAD2] rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-[#2D2D2B]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2D2D2B]">Exceptional Safety Record</h3>
                <p className="text-[#2D2D2B]/70">
                  0.19% complication rate vs 2.5% industry average. Hospital-grade protocols and premium vegan pigments. Your safety is non-negotiable.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                <div className="w-14 h-14 bg-[#E6DAD2] rounded-xl flex items-center justify-center mb-6">
                  <Clock className="w-7 h-7 text-[#2D2D2B]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2D2D2B]">Effortless Experience</h3>
                <p className="text-[#2D2D2B]/70">
                  Quick 12-minute drive, free parking, relaxing studio. No fighting for street parking or dealing with downtown traffic.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Arlington Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              What Arlington Clients Say
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#9A7B69] text-[#9A7B69]" />
              ))}
            </div>
            <p className="text-[#2D2D2B]/70">5.0 rating from 47+ reviews</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {arlingtonTestimonials.map((testimonial, index) => (
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
                      <p className="text-sm text-[#9A7B69]">{testimonial.location}, Arlington</p>
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
                  Book Your Arlington Consultation
                </Link>
                <p className="text-center text-[#2D2D2B]/60 mt-4 text-sm">
                  Compare: DC studios charge $750-950 for similar quality
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
                title="Questions from Arlington Clients"
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
            <Link to="/authority" className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Research Hub</p>
              <p className="text-sm text-[#2D2D2B]/50">523+ procedure data</p>
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
              Join hundreds of Arlington residents who've transformed their morning routine. Book your free consultation today.
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

export default OmbreBrowsArlington;
