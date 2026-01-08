import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import CTASection from '../components/CTASection';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Transformational Beauty Services | Inkmugi';
  }, []);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Signature Brow Transformation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Inkmugi",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "7857 Heritage Dr #330",
        "addressLocality": "Annandale",
        "addressRegion": "VA",
        "postalCode": "22003",
        "addressCountry": "US"
      }
    },
    "areaServed": ["McLean", "Great Falls", "Arlington", "Alexandria", "Fairfax", "Falls Church", "Vienna", "Potomac", "Washington DC"],
    "description": "Premium transformational brow artistry combining precision techniques with intentional energy. Experience personalized beauty that honors your unique features.",
    "offers": {
      "@type": "Offer",
      "priceRange": "$750-$1,200"
    }
  };

  const services = [
    {
      id: 1,
      title: 'Signature Brow Transformation',
      price: '$1,200',
      duration: '3.5 hours',
      description: 'The complete experience. Precision technique meets intentional artistry. Includes consultation, custom mapping, transformation, and complimentary perfecting session. For women ready to feel like themselves again.',
      icon: <CheckCircle size={24} className="text-[#2D2D2B]" />,
      featured: true
    },
    {
      id: 2,
      title: 'Microshading Artistry',
      price: '$850',
      duration: '3 hours',
      description: 'Delicate, intuitive dot-work creating soft powder effect. Perfect for sensitive souls seeking subtle enhancement. Energy-conscious approach with premium vegan pigments.',
      icon: <CheckCircle size={24} className="text-[#2D2D2B]" />,
      featured: true
    },
    {
      id: 3,
      title: 'Fine Line Tattoo',
      price: '$200+',
      duration: '1-2 hours',
      description: 'Intentional, meaningful tattoos with meticulous precision. Minimalist designs that carry significance. Custom artwork created in sacred collaboration.',
      icon: <CheckCircle size={24} className="text-[#2D2D2B]" />,
      featured: true
    },
    {
      id: 4,
      title: 'Restoration Artistry',
      price: '$950',
      duration: '3.5 hours',
      description: 'Compassionate correction of previous work. Advanced color neutralization and shape refinement for women ready to reclaim their brows from past experiences.',
      icon: <CheckCircle size={24} className="text-[#2D2D2B]" />
    },
    {
      id: 5,
      title: 'Nano Brow Artistry',
      price: '$750',
      duration: '3 hours',
      description: 'Ultra-fine hairstrokes for the most natural, realistic appearance. Ideal for women seeking subtle hair-like definition with intentional, gentle technique.',
      icon: <CheckCircle size={24} className="text-[#2D2D2B]" />
    },
    {
      id: 6,
      title: 'Discovery Consultation',
      price: 'Complimentary',
      duration: '45 minutes',
      description: 'A sacred conversation—not a sales pitch. We explore your vision, your energy, and whether this transformation is aligned. Custom mapping included.',
      icon: <CheckCircle size={24} className="text-[#2D2D2B]" />
    },
    {
      id: 7,
      title: 'Renewal Sessions',
      price: 'From $350',
      duration: '2 hours',
      description: 'Maintain the vibrancy of your transformation. Recommended every 18-36 months to refresh and perfect your brows as they naturally evolve.',
      icon: <CheckCircle size={24} className="text-[#2D2D2B]" />
    },
    {
      id: 8,
      title: 'Aftercare Partnership',
      price: 'Included',
      duration: 'Ongoing',
      description: 'Your healing journey matters. Comprehensive aftercare guidance, premium healing kit, and unlimited support during your transformation. I\'m with you every step.',
      icon: <CheckCircle size={24} className="text-[#2D2D2B]" />
    },
  ];

  return (
    <>
      <Helmet>
        <title>Transformational Beauty Services | Precision Artistry | Inkmugi</title>
        <meta name="description" content="Premium brow transformations for conscious women. Signature services starting at $750. Where precision artistry meets intentional beauty. Serving McLean, Great Falls, Arlington." />
        <meta name="keywords" content="transformational brow artistry, premium microshading, signature brows McLean, fine line tattoo, intentional beauty, brow artist" />
        <link rel="canonical" href="https://inkmugi.com/services" />
        <meta property="og:title" content="Transformational Beauty Services | Inkmugi" />
        <meta property="og:description" content="Premium brow transformations starting at $750. Precision technique meets intentional beauty for women ready to feel like themselves again." />
        <meta property="og:url" content="https://inkmugi.com/services" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#F0E4D8] via-[#E6DAD2] to-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-[#2D2D2B]/10 rounded-full">
              <span className="text-[#2D2D2B] font-medium text-sm uppercase tracking-wider">Intentional Artistry</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              Transformations, Not Services
            </h1>
            <p className="text-lg md:text-xl text-[#2D2D2B]/80 max-w-3xl mx-auto mb-4">
              Where precision artistry meets intentional beauty. Every session is a sacred collaboration—designed to honor your unique features and restore your relationship with your reflection.
            </p>
            <p className="text-sm text-[#2D2D2B]/60 max-w-2xl mx-auto">
              Serving McLean • Great Falls • Arlington • Potomac • Washington DC
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="section-title text-[#2D2D2B]">The Transformation Menu</h2>
            <p className="section-subtitle text-[#2D2D2B]/80">
              Each service is a journey, not a transaction. Priced for women who understand the value of artistry, intention, and transformation.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={index + 1}>
                <div className="bg-white p-6 rounded-lg shadow-soft h-full border-b-4 border-[#E6DAD2] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-[#2D2D2B]/10 rounded-full flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-medium text-[#2D2D2B]">{service.title}</h3>
                    <span className="text-[#2D2D2B] font-bold text-lg">{service.price}</span>
                  </div>
                  <p className="text-[#2D2D2B]/60 text-sm mb-4">Duration: {service.duration}</p>
                  <p className="text-[#2D2D2B]/80 mb-6">
                    {service.description}
                  </p>
                  <Link to="/booking" className="text-[#2D2D2B] font-medium hover:text-[#2D2D2B]/70 transition-colors inline-flex items-center">
                    Book Now →
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-[#E6DAD2] to-[#F0E4D8]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="section-title text-[#2D2D2B]">The Transformation Journey</h2>
            <p className="section-subtitle text-[#2D2D2B]/80">
              Every transformation follows a sacred process—honoring your energy, your vision, and your healing.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Sacred Conversation", desc: "We connect, explore your vision, and feel into whether this transformation is aligned for both of us." },
              { title: "Intuitive Mapping", desc: "Custom design honoring your bone structure, facial harmony, and the brows that belong to you." },
              { title: "Intentional Artistry", desc: "Precision techniques with gentle, present energy. You'll feel held, not hurried." },
              { title: "Supported Healing", desc: "Detailed aftercare guidance and a complimentary perfecting session to complete your transformation." }
            ].map((step, index) => (
              <AnimatedSection key={index} delay={index + 1}>
                <div className="bg-white p-6 rounded-lg shadow-soft h-full">
                  <div className="w-12 h-12 bg-[#2D2D2B]/10 rounded-full flex items-center justify-center mb-4 text-[#2D2D2B] font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-[#2D2D2B]">{step.title}</h3>
                  <p className="text-[#2D2D2B]/80">
                    {step.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img 
                src="https://live.staticflickr.com/65535/54408531279_0e59fb1f6f_o_d.jpg" 
                alt="Brow Artistry Studio" 
                className="rounded-lg shadow-medium w-full h-auto object-cover"
              />
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <h2 className="section-title text-[#2D2D2B]">Why Conscious Women Choose Inkmugi</h2>
              <p className="text-[#2D2D2B] mb-4">
                This isn't just permanent makeup. It's transformational artistry rooted in precision technique, intentional energy, and a deep commitment to honoring your unique beauty.
              </p>
              <p className="text-[#2D2D2B]/80 mb-6 text-sm bg-[#F7EDE6] p-4 rounded-lg italic">
                "I don't do brows. I restore women's relationship with their reflection."
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle size={18} className="text-[#2D2D2B] mt-1 mr-2" />
                  <span className="text-[#2D2D2B]">Meticulous precision technique</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={18} className="text-[#2D2D2B] mt-1 mr-2" />
                  <span className="text-[#2D2D2B]">Intentional, healing presence</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={18} className="text-[#2D2D2B] mt-1 mr-2" />
                  <span className="text-[#2D2D2B]">Premium vegan pigments</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={18} className="text-[#2D2D2B] mt-1 mr-2" />
                  <span className="text-[#2D2D2B]">Sacred, unhurried sessions</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={18} className="text-[#2D2D2B] mt-1 mr-2" />
                  <span className="text-[#2D2D2B]">Complimentary consultation</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={18} className="text-[#2D2D2B] mt-1 mr-2" />
                  <span className="text-[#2D2D2B]">Virginia licensed & insured</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/booking" className="btn bg-[#2D2D2B] hover:bg-[#1a1a19] text-white">
                  Begin Your Transformation
                </Link>
                <Link to="/gallery" className="btn btn-outline text-[#2D2D2B] border-[#2D2D2B] hover:bg-[#2D2D2B]/5">
                  View Transformations
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
};

export default Services;