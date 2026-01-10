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

const OmbreBrowsAlexandria: React.FC = () => {
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
    { name: 'Old Town', time: '15 min' },
    { name: 'Del Ray', time: '12 min' },
    { name: 'Kingstowne', time: '10 min' },
    { name: 'West End', time: '8 min' },
    { name: 'Landmark', time: '6 min' },
    { name: 'Eisenhower', time: '14 min' },
  ];

  const alexandriaTestimonials = [
    {
      name: "Sarah L.",
      location: "Old Town",
      text: "I walk past three PMU studios in Old Town every day, but after reading Inkmugi's reviews, I knew I had to make the drive. Mugi's attention to detail is incredible—my brows look like I was born with them!",
      rating: 5
    },
    {
      name: "Michelle D.",
      location: "Del Ray",
      text: "As a busy mom in Del Ray, I needed low-maintenance brows that still look polished. Mugi understood exactly what I wanted. The healing was easy and my results are stunning even 6 months later.",
      rating: 5
    },
    {
      name: "Courtney B.",
      location: "Kingstowne",
      text: "Found Inkmugi through a friend's recommendation. The quick drive from Kingstowne is nothing compared to the quality. Mugi is a true artist and perfectionist. Worth every penny!",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How far is Inkmugi from Alexandria neighborhoods?",
      answer: "Our Annandale studio is conveniently located 6-15 minutes from most Alexandria areas. From Old Town, take Duke Street west to I-395 N, then I-495 to Little River Turnpike—about 15 minutes. From West End/Landmark, you're just 6-8 minutes away via Little River Turnpike."
    },
    {
      question: "Do Alexandria clients get the same results as your before/after photos?",
      answer: "Absolutely! All our gallery photos are real clients, many from Alexandria and surrounding areas. We customize every procedure to your unique face shape, skin type, and preferences. What you see in our portfolio is what you can expect—natural, beautiful ombre brows."
    },
    {
      question: "Is parking easy at your Annandale studio?",
      answer: "Yes! Unlike Old Town or downtown DC, we have free, dedicated parking right at our Heritage Center location. No meters, no circling the block—just pull up and walk in. Many Alexandria clients tell us parking alone makes the trip worth it."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Ombre Brows Alexandria VA | 15 Min Drive | Ink Mugi</title>
        <meta name="description" content="Ombre powder brows for Alexandria residents. 15-minute drive from Old Town & Del Ray. $600 includes touch-up. Free parking. Book your consultation." />
        <link rel="canonical" href="https://www.inkmugi.com/ombre-brows-alexandria-va" />
        <meta property="og:title" content="Ombre Brows for Alexandria VA | Ink Mugi" />
        <meta property="og:description" content="Alexandria's nearby PMU artist. 15 minutes from Old Town. Natural ombre brows." />
        <meta property="og:url" content="https://www.inkmugi.com/ombre-brows-alexandria-va" />
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
              Serving Alexandria, VA
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium mb-6 text-[#2D2D2B] leading-tight">
              Ombre Powder Brows for<br />
              <span className="text-[#9A7B69]">Alexandria</span> Residents
            </h1>
            <p className="text-lg md:text-xl text-[#2D2D2B]/80 max-w-3xl mx-auto mb-8">
              Just 15 minutes from Old Town & Del Ray. Northern Virginia's most trusted PMU artist with 523+ successful procedures and premium results.
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
              Easy Access from All Alexandria Neighborhoods
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
              Skip the Old Town parking struggle. Our Annandale studio offers free parking and a calm, private atmosphere for your transformation.
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
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d49774.98899393825!2d-77.15!3d38.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x89b7b08b5b9f5555%3A0x5b7a8b8b8b8b8b8b!2sAlexandria%2C%20VA!3m2!1d38.8048355!2d-77.0469214!4m5!1s0x89b64faa3b8d9e57%3A0x7b0da9b5a7a0b8f0!2s7857%20Heritage%20Dr%20%23330%2C%20Annandale%2C%20VA%2022003!3m2!1d38.8303726!2d-77.1969261!5e0!3m2!1sen!2sus!4v1703444800000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Directions from Alexandria to Inkmugi"
              />
            </div>
            <p className="text-center text-[#2D2D2B]/60 mt-4 text-sm">
              📍 7857 Heritage Dr #330, Annandale, VA 22003 • Free parking available
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Alexandria Chooses Us */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Why Alexandria Clients Trust Inkmugi
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                <div className="w-14 h-14 bg-[#E6DAD2] rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-[#2D2D2B]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2D2D2B]">Premium Quality, Fair Price</h3>
                <p className="text-[#2D2D2B]/70">
                  Old Town studios charge $800+ for ombre brows. Get exceptional quality at $600 with a Virginia-licensed artist who has completed 500+ procedures.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                <div className="w-14 h-14 bg-[#E6DAD2] rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-[#2D2D2B]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2D2D2B]">Data-Driven Safety</h3>
                <p className="text-[#2D2D2B]/70">
                  Our 0.19% complication rate is 13x better than the 2.5% industry average. Hospital-grade sterilization and premium vegan pigments for your peace of mind.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                <div className="w-14 h-14 bg-[#E6DAD2] rounded-xl flex items-center justify-center mb-6">
                  <Clock className="w-7 h-7 text-[#2D2D2B]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#2D2D2B]">DMV Climate Expertise</h3>
                <p className="text-[#2D2D2B]/70">
                  Our technique is optimized for Northern Virginia's humid summers and dry winters. Results last 18-36 months—longer than traditional methods in our climate.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Alexandria Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              What Alexandria Clients Say
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#9A7B69] text-[#9A7B69]" />
              ))}
            </div>
            <p className="text-[#2D2D2B]/70">5.0 rating from 47+ reviews</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {alexandriaTestimonials.map((testimonial, index) => (
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
                      <p className="text-sm text-[#9A7B69]">{testimonial.location}, Alexandria</p>
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
              All-inclusive pricing. Everything you need included.
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
                  Book Your Alexandria Consultation
                </Link>
                <p className="text-center text-[#2D2D2B]/60 mt-4 text-sm">
                  Compare: Old Town studios charge $800+ for similar quality
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
              Questions from Alexandria Clients
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
              Ready for Your Alexandria Transformation?
            </h2>
            <p className="text-lg text-[#F9F7F5]/90 mb-8">
              Join Alexandria residents from Old Town to Kingstowne who've discovered their perfect brows. Book your free consultation today.
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

export default OmbreBrowsAlexandria;
