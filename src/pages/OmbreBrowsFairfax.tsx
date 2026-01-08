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

const OmbreBrowsFairfax: React.FC = () => {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Inkmugi - Ombre Brows for Fairfax County",
    "@id": "https://inkmugi.com/ombre-brows-fairfax-va",
    "url": "https://inkmugi.com/ombre-brows-fairfax-va",
    "telephone": "+1-571-283-8228",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7857 Heritage Dr #330",
      "addressLocality": "Annandale",
      "addressRegion": "VA",
      "postalCode": "22003",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.8304,
      "longitude": -77.1969
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Fairfax"
      },
      {
        "@type": "Place",
        "name": "Fairfax County"
      },
      {
        "@type": "City",
        "name": "Vienna"
      },
      {
        "@type": "City",
        "name": "McLean"
      },
      {
        "@type": "Place",
        "name": "Tysons Corner"
      }
    ],
    "priceRange": "$500-$700",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "10:00",
        "closes": "18:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "47"
    }
  };

  const neighborhoods = [
    { name: 'Fairfax City', time: '10 min' },
    { name: 'Vienna', time: '12 min' },
    { name: 'McLean', time: '18 min' },
    { name: 'Tysons Corner', time: '15 min' },
    { name: 'Burke', time: '12 min' },
    { name: 'Springfield', time: '8 min' },
  ];

  const fairfaxTestimonials = [
    {
      name: "Jennifer W.",
      location: "Vienna",
      text: "I work in Tysons and live in Vienna—Inkmugi's Annandale location is perfectly positioned for me. Mugi's expertise is evident in every detail. My brows have never looked better, and I get compliments constantly!",
      rating: 5
    },
    {
      name: "Patricia H.",
      location: "Fairfax City",
      text: "After researching PMU artists across Fairfax County, Inkmugi stood out for their transparency and results. The drive was easy, the process was comfortable, and my brows are absolutely perfect.",
      rating: 5
    },
    {
      name: "Lauren S.",
      location: "McLean",
      text: "McLean has plenty of options, but none with Mugi's combination of skill and genuine care. She took the time to understand exactly what I wanted. 10 months in and my brows still look freshly done!",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Is Inkmugi convenient for Fairfax County residents?",
      answer: "Absolutely! Our Annandale studio is centrally located for all of Fairfax County. We're 10 minutes from Fairfax City, 12 minutes from Vienna/Burke, 15 minutes from Tysons, and 18 minutes from McLean. With free parking and easy access off Little River Turnpike, many clients find us more convenient than busier commercial areas."
    },
    {
      question: "How do your prices compare to Tysons Corner studios?",
      answer: "Tysons and McLean studios typically charge $800+ for ombre powder brows. Our $600 includes everything: consultation, the full procedure, premium vegan pigments, aftercare kit, and your 6-week touch-up. Same high-end quality, better value, and a more personalized experience."
    },
    {
      question: "What makes your technique suitable for Fairfax County's climate?",
      answer: "Our technique is specifically optimized for Northern Virginia's climate—humid summers (70-85% humidity) and drier winters. We adjust pigment saturation and depth based on seasonal conditions, which is why our clients see 18-36 month longevity compared to 8-12 months with traditional methods."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Ombre Powder Brows Fairfax County VA | Vienna, McLean, Tysons | Inkmugi</title>
        <meta name="description" content="Fairfax County's trusted PMU artist for ombre powder brows. Serving Vienna, McLean, Tysons Corner, Burke & Springfield. 523+ procedures, 0.19% complication rate. Book free consultation." />
        <meta name="keywords" content="ombre brows Fairfax VA, powder brows Vienna Virginia, microshading McLean, permanent makeup Tysons Corner, PMU Fairfax County, brow artist Burke" />
        <link rel="canonical" href="https://inkmugi.com/ombre-brows-fairfax-va" />
        <meta property="og:title" content="Ombre Powder Brows for Fairfax County VA | Inkmugi" />
        <meta property="og:description" content="Fairfax County's preferred PMU artist. Serving Vienna, McLean, Tysons Corner & beyond. Natural-looking ombre brows that last." />
        <meta property="og:url" content="https://inkmugi.com/ombre-brows-fairfax-va" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(localSchema)}
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
              Serving Fairfax County, VA
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium mb-6 text-[#2D2D2B] leading-tight">
              Ombre Powder Brows for<br />
              <span className="text-[#9A7B69]">Fairfax County</span>
            </h1>
            <p className="text-lg md:text-xl text-[#2D2D2B]/80 max-w-3xl mx-auto mb-8">
              Serving Vienna, McLean, Tysons Corner, Burke & Springfield. Northern Virginia's most trusted PMU artist with 523+ procedures and exceptional results.
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
              Central to All of Fairfax County
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
              Our Annandale studio is ideally located for Fairfax County residents, with easy access and free parking.
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
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d99549.97798787651!2d-77.3!3d38.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x89b64e85b8f5c8af%3A0x9e4c4c4c4c4c4c4c!2sFairfax%2C%20VA!3m2!1d38.8462236!2d-77.3063733!4m5!1s0x89b64faa3b8d9e57%3A0x7b0da9b5a7a0b8f0!2s7857%20Heritage%20Dr%20%23330%2C%20Annandale%2C%20VA%2022003!3m2!1d38.8303726!2d-77.1969261!5e0!3m2!1sen!2sus!4v1703444800000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Directions from Fairfax County to Inkmugi"
              />
            </div>
            <p className="text-center text-[#2D2D2B]/60 mt-4 text-sm">
              📍 7857 Heritage Dr #330, Annandale, VA 22003 • Free parking available
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Fairfax County Chooses Us */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Why Fairfax County Trusts Inkmugi
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                <div className="w-14 h-14 bg-[#E6DAD2] rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-[#2D2D2B]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2D2D2B]">Tysons Quality, Better Value</h3>
                <p className="text-[#2D2D2B]/70">
                  Tysons and McLean studios charge $750-900. Get premium results at $600 with a Virginia-licensed artist who has completed 523+ successful procedures.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                <div className="w-14 h-14 bg-[#E6DAD2] rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-[#2D2D2B]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2D2D2B]">Verified Safety Excellence</h3>
                <p className="text-[#2D2D2B]/70">
                  0.19% complication rate—13x safer than the 2.5% industry average. Hospital-grade sterilization protocols and premium vegan pigments.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                <div className="w-14 h-14 bg-[#E6DAD2] rounded-xl flex items-center justify-center mb-6">
                  <Clock className="w-7 h-7 text-[#2D2D2B]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2D2D2B]">Personalized Experience</h3>
                <p className="text-[#2D2D2B]/70">
                  Escape the busy commercial districts. Our private studio offers a calm, focused environment where your transformation gets undivided attention.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Fairfax County Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              What Fairfax County Clients Say
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#9A7B69] text-[#9A7B69]" />
              ))}
            </div>
            <p className="text-[#2D2D2B]/70">5.0 rating from 47+ reviews</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {fairfaxTestimonials.map((testimonial, index) => (
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
              Ombre Powder Brows Pricing
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
              Transparent, all-inclusive pricing. No surprises, no hidden fees.
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
                  Book Your Fairfax Consultation
                </Link>
                <p className="text-center text-[#2D2D2B]/60 mt-4 text-sm">
                  Compare: Tysons & McLean studios charge $750-900
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Questions from Fairfax County Clients
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-[#F9F7F5] rounded-xl p-6">
                  <h3 className="font-semibold text-[#2D2D2B] mb-2">{faq.question}</h3>
                  <p className="text-[#2D2D2B]/70">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#2D2D2B] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://live.staticflickr.com/65535/54363160242_7975c4f42c_o_d.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-cormorant font-medium mb-6">
              Ready for Perfect Brows?
            </h2>
            <p className="text-lg text-[#F9F7F5]/90 mb-8">
              Join clients from Vienna to McLean, Tysons to Springfield who've discovered effortless beauty. Book your free consultation today.
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

export default OmbreBrowsFairfax;
