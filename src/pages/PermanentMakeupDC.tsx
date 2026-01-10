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
  Phone,
  Building
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const PermanentMakeupDC: React.FC = () => {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Inkmugi - Ombre Brows for Washington DC",
    "@id": "https://www.inkmugi.com/permanent-makeup-dc",
    "url": "https://www.inkmugi.com/permanent-makeup-dc",
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
        "name": "Washington",
        "sameAs": "https://en.wikipedia.org/wiki/Washington,_D.C."
      }
    ],
    "priceRange": "$600-$700",
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
    { name: 'Georgetown', time: '20 min' },
    { name: 'Dupont Circle', time: '22 min' },
    { name: 'Capitol Hill', time: '18 min' },
    { name: 'Navy Yard', time: '17 min' },
    { name: 'Foggy Bottom', time: '20 min' },
    { name: 'Adams Morgan', time: '25 min' },
  ];

  const dcTestimonials = [
    {
      name: "Katherine R.",
      location: "Georgetown",
      text: "I could have gone to any PMU artist in DC, but after seeing Inkmugi's before/afters and reading about their safety record, I knew they were worth the drive. The results exceeded my expectations—worth every minute of travel!",
      rating: 5
    },
    {
      name: "Nicole P.",
      location: "Capitol Hill",
      text: "As a federal attorney, I need to look polished without spending time on makeup. Mugi understood exactly what I needed. The reverse commute from Capitol Hill was actually peaceful, and my brows are perfection.",
      rating: 5
    },
    {
      name: "Danielle M.",
      location: "Dupont Circle",
      text: "DC studios wanted $900+ for what Inkmugi does better at $600. The free parking alone is worth the trip! Plus Mugi's technique is clearly superior—my brows look natural and elegant.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Is it worth traveling from DC to Annandale for PMU?",
      answer: "Many DC clients tell us the 20-minute drive (reverse commute!) is the best decision they made. You'll save $200-400 compared to Georgetown or downtown DC studios, enjoy free parking, and get the same premium quality with a more personalized experience. Plus, our 523+ procedure track record and 0.19% complication rate speak for themselves."
    },
    {
      question: "How do you compare to DC permanent makeup studios?",
      answer: "DC studios charge $800-1,100 for ombre powder brows. Our $600 price includes everything: consultation, full procedure, premium vegan pigments, aftercare kit, and 6-week touch-up. We offer the same (or better) technique quality with verifiable results and a stellar safety record—at a fraction of downtown prices."
    },
    {
      question: "What's the best route from DC to your studio?",
      answer: "From most DC neighborhoods, take 395 South to I-495 West (toward Tysons), then exit at Little River Turnpike. We're at Heritage Center, 7857 Heritage Dr #330. The reverse commute means light traffic. Free parking right at our door—no meters, no garages, no stress."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Permanent Makeup & Ombre Brows for DC Residents | Inkmugi</title>
        <meta name="description" content="Washington DC's smart choice for ombre powder brows. Save $200-400 vs DC studios. 20 minutes from Georgetown & Capitol Hill. 523+ procedures, free parking. Book free consultation." />
        <meta name="keywords" content="permanent makeup Washington DC, ombre brows DC, powder brows Georgetown, microshading Capitol Hill, PMU Dupont Circle, brow artist Washington" />
        <link rel="canonical" href="https://www.inkmugi.com/permanent-makeup-dc" />
        <meta property="og:title" content="Ombre Powder Brows for Washington DC | Inkmugi" />
        <meta property="og:description" content="DC's smart choice for permanent makeup. Premium quality, better price, free parking. 20 minutes from Georgetown." />
        <meta property="og:url" content="https://www.inkmugi.com/permanent-makeup-dc" />
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
              <Building className="w-4 h-4" />
              Serving Washington, D.C.
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium mb-6 text-[#2D2D2B] leading-tight">
              Premium Ombre Brows for<br />
              <span className="text-[#9A7B69]">Washington DC</span>
            </h1>
            <p className="text-lg md:text-xl text-[#2D2D2B]/80 max-w-3xl mx-auto mb-8">
              Save $200-400 vs. DC studios. Just 20 minutes from Georgetown & Capitol Hill with free parking. 523+ procedures, exceptional results.
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

      {/* Value Proposition */}
      <section className="py-12 bg-[#2D2D2B] text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-[#E6DAD2]">$200-400</p>
              <p className="text-[#F9F7F5]/80">Savings vs. DC Studios</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#E6DAD2]">20 min</p>
              <p className="text-[#F9F7F5]/80">Reverse Commute from DC</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#E6DAD2]">FREE</p>
              <p className="text-[#F9F7F5]/80">Parking at Our Door</p>
            </div>
          </div>
        </div>
      </section>

      {/* Drive Time Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Easy Reverse Commute from DC
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
              Skip downtown traffic and parking headaches. Our Annandale location offers a peaceful drive against rush hour—and free parking when you arrive.
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
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d99549.97798787651!2d-77.1!3d38.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sWashington%2C%20DC!3m2!1d38.9071923!2d-77.0368707!4m5!1s0x89b64faa3b8d9e57%3A0x7b0da9b5a7a0b8f0!2s7857%20Heritage%20Dr%20%23330%2C%20Annandale%2C%20VA%2022003!3m2!1d38.8303726!2d-77.1969261!5e0!3m2!1sen!2sus!4v1703444800000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Directions from Washington DC to Inkmugi"
              />
            </div>
            <p className="text-center text-[#2D2D2B]/60 mt-4 text-sm">
              📍 7857 Heritage Dr #330, Annandale, VA 22003 • Free parking available • Take 395 S to 495 W
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why DC Residents Choose Us */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Why DC Professionals Choose Inkmugi
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                <div className="w-14 h-14 bg-[#E6DAD2] rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-[#2D2D2B]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2D2D2B]">Premium Results, Smart Price</h3>
                <p className="text-[#2D2D2B]/70">
                  Georgetown studios charge $900-1,100. Get the same exceptional technique at $600—plus free parking, no downtown hassle, and a calm, focused experience.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                <div className="w-14 h-14 bg-[#E6DAD2] rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-[#2D2D2B]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2D2D2B]">Verifiable Track Record</h3>
                <p className="text-[#2D2D2B]/70">
                  523+ procedures documented. 0.19% complication rate (13x better than industry). Virginia-licensed with hospital-grade protocols you can trust.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                <div className="w-14 h-14 bg-[#E6DAD2] rounded-xl flex items-center justify-center mb-6">
                  <Clock className="w-7 h-7 text-[#2D2D2B]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2D2D2B]">Work-Life Balance</h3>
                <p className="text-[#2D2D2B]/70">
                  The reverse commute is actually relaxing. Many DC clients combine their appointment with errands in NoVA or just enjoy the peaceful drive away from the city.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* DC Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              What DC Clients Say
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#9A7B69] text-[#9A7B69]" />
              ))}
            </div>
            <p className="text-[#2D2D2B]/70">5.0 rating from 47+ reviews</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {dcTestimonials.map((testimonial, index) => (
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
                      <p className="text-sm text-[#9A7B69]">{testimonial.location}, DC</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Price Comparison */}
      <section className="py-20 bg-[#F0E4D8]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              DC Price Comparison
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
              See how Inkmugi compares to Washington DC studios
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="grid md:grid-cols-2">
                  {/* DC Studios */}
                  <div className="p-8 border-b md:border-b-0 md:border-r border-gray-200">
                    <h3 className="text-xl font-semibold mb-4 text-[#2D2D2B]/60">Typical DC Studio</h3>
                    <p className="text-3xl font-bold text-[#2D2D2B]/60 mb-6">$800 - $1,100</p>
                    <ul className="space-y-3 text-[#2D2D2B]/50">
                      <li className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-gray-200"></span>
                        Street parking or garage ($20+)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-gray-200"></span>
                        Touch-up often extra
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-gray-200"></span>
                        Variable experience levels
                      </li>
                    </ul>
                  </div>

                  {/* Inkmugi */}
                  <div className="p-8 bg-[#F9F7F5]">
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="text-xl font-semibold text-[#2D2D2B]">Inkmugi</h3>
                      <span className="px-2 py-1 bg-[#9A7B69] text-white text-xs rounded-full">Best Value</span>
                    </div>
                    <p className="text-3xl font-bold text-[#2D2D2B] mb-6">$600</p>
                    <ul className="space-y-3">
                      {[
                        'Free parking included',
                        'Professional aftercare support',
                        '523+ verified procedures',
                        '0.19% complication rate',
                        'Premium vegan pigments',
                        'Aftercare kit included',
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-[#9A7B69]" />
                          <span className="text-[#2D2D2B]/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-[#2D2D2B] text-center">
                  <Link
                    to="/booking"
                    className="inline-flex items-center justify-center px-8 py-3 bg-[#E6DAD2] text-[#2D2D2B] rounded-full font-medium hover:bg-[#F0E4D8] transition-all"
                  >
                    Book Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
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
              Questions from DC Clients
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
              Ready to Make the Smart Choice?
            </h2>
            <p className="text-lg text-[#F9F7F5]/90 mb-8">
              Join DC professionals from Georgetown to Capitol Hill who've discovered premium brows don't require premium DC prices. Book your free consultation today.
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

export default PermanentMakeupDC;
