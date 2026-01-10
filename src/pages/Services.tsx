import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, CheckCircle2, Shield, Award } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import CTASection from '../components/CTASection';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Transformational Beauty Services | Inkmugi';
  }, []);

  const serviceSchema = {
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

  const services = [
    {
      id: 1,
      title: 'Signature Brow Transformation',
      price: '$600',
      duration: 'Consultation required',
      description: 'Includes 45-minute design + mapping consultation, custom brow plan, precision procedure, and perfecting session. For women seeking predictable, natural healed results that age gracefully.',
      icon: <CheckCircle size={24} className="text-[#2D2D2B]" />,
      featured: true,
      features: ['45-min design + mapping', 'Shape approved before pigment', 'Perfecting session included', 'By consultation only']
    },
    {
      id: 2,
      title: 'Microshading Artistry',
      price: '$700',
      duration: 'Consultation required',
      description: 'Delicate dot-work technique creating soft, powdered finish. Best for oily skin or those wanting minimal maintenance. Heals softer than traditional ombre.',
      icon: <CheckCircle size={24} className="text-[#2D2D2B]" />,
      featured: true,
      features: ['Ultra-natural finish', 'Ideal for oily skin', 'Aftercare kit included', 'Premium vegan pigments']
    },
    {
      id: 4,
      title: 'Restoration & Correction',
      price: 'Consultation required',
      duration: '3-4 hours',
      description: 'Case-by-case correction of previous PMU work. Advanced color neutralization and shape refinement. Requires consultation to assess feasibility.',
      icon: <CheckCircle size={24} className="text-[#2D2D2B]" />,
      features: ['Color neutralization', 'Shape correction', 'Custom color matching', 'Assessment required']
    },
    {
      id: 6,
      title: 'Consultation',
      price: 'Complimentary',
      duration: '45 minutes',
      description: 'Meet me. Ask every question. See healed portfolio in person. We map your face and design together. Zero pressure—this is about your confidence, not my calendar.',
      icon: <CheckCircle size={24} className="text-[#2D2D2B]" />,
      features: ['Face mapping included', 'Review healed results', 'No obligation', 'Design preview']
    },
    {
      id: 7,
      title: 'Color Refresh Sessions',
      price: 'From $350',
      duration: '1.5-2 hours',
      description: 'Maintain vibrancy after initial healing. Recommended every 18-36 months depending on skin type and lifestyle. Keeps brows looking fresh.',
      icon: <CheckCircle size={24} className="text-[#2D2D2B]" />,
      features: ['Color boost only', 'No shape change', 'Quick healing', 'For existing clients']
    },
    {
      id: 8,
      title: 'Aftercare Support',
      price: 'Included',
      duration: 'First 6 weeks',
      description: 'Comprehensive aftercare kit, detailed healing guide, and text support during the critical healing period. You can reach me with any concern.',
      icon: <CheckCircle size={24} className="text-[#2D2D2B]" />,
      features: ['Premium healing kit', 'Written instructions', 'Text support access', 'Healing phase guidance']
    },
  ];

  return (
    <>
      <Helmet>
        <title>Permanent Makeup Services in Annandale, VA | Ink Mugi</title>
        <meta name="description" content="Explore permanent makeup services at Ink Mugi in Annandale, VA. Learn about techniques, healed results, and what to expect before booking." />
        <link rel="canonical" href="https://www.inkmugi.com/services" />
        <meta property="og:title" content="Transformational Beauty Services | Inkmugi" />
        <meta property="og:description" content="Premium brow transformations starting at $600. Precision technique meets intentional beauty for women ready to feel like themselves again." />
        <meta property="og:url" content="https://www.inkmugi.com/services" />
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
              <span className="text-[#2D2D2B] font-medium text-sm uppercase tracking-wider">
                <CheckCircle2 size={12} className="inline-block mr-1" />
                Predictable Results
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              Premium PMU Services
            </h1>
            <p className="text-lg md:text-xl text-[#2D2D2B]/80 max-w-3xl mx-auto mb-4">
              Healed-first brow design with transparent pricing. Every service includes design consultation, 
              shape approval before pigment, and documented healing support.
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
            <h2 className="section-title text-[#2D2D2B]">Service Menu</h2>
            <p className="section-subtitle text-[#2D2D2B]/80">
              Transparent pricing. Clear expectations. Final investment determined during consultation based on complexity.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={index + 1}>
                <div className="bg-white p-6 rounded-lg shadow-soft h-full border-b-4 border-[#E6DAD2] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
                  <div className="w-12 h-12 bg-[#2D2D2B]/10 rounded-full flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-medium text-[#2D2D2B]">{service.title}</h3>
                    <span className="text-[#2D2D2B] font-bold text-lg whitespace-nowrap ml-2">{service.price}</span>
                  </div>
                  <p className="text-[#2D2D2B]/60 text-sm mb-4">{service.duration}</p>
                  <p className="text-[#2D2D2B]/80 mb-6 flex-grow">
                    {service.description}
                  </p>
                  
                  {service.features && (
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2 text-sm text-[#2D2D2B]/70">
                          <CheckCircle2 size={14} className="text-[#E6DAD2] mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  <Link to="/booking" className="text-[#2D2D2B] font-medium hover:text-[#2D2D2B]/70 transition-colors inline-flex items-center mt-auto">
                    Request Consultation →
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
            <h2 className="section-title text-[#2D2D2B]">The Process</h2>
            <p className="section-subtitle text-[#2D2D2B]/80">
              Four clear steps designed to address your concerns and deliver predictable results.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Consultation", desc: "Meet me. Ask every question. See healed portfolio. We map your face and design together. Zero pressure." },
              { title: "Design Approval", desc: "You see the exact shape on YOUR face before any pigment. We adjust until you're 100% confident." },
              { title: "Numbed Procedure", desc: "Medical-grade numbing applied. Most clients rate pain 2-3/10. Sessions are calm and unrushed." },
              { title: "Healing Support", desc: "Detailed aftercare kit, written guide, and text support during healing. I'll walk you through the 'too dark' phase." }
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
              <h2 className="section-title text-[#2D2D2B]">Why Choose InkMugi</h2>
              <p className="text-[#2D2D2B] mb-4">
                Premium ombre powder brows and microshading with a focus on predictable, natural healed results. 
                Every procedure documented with 6+ week healed photos.
              </p>
              <p className="text-[#2D2D2B]/80 mb-6 text-sm bg-[#F7EDE6] p-4 rounded-lg border-l-4 border-[#2D2D2B]">
                <strong>My commitment:</strong> You see healed work before booking. You approve the design before pigment. 
                You have support during healing.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle2 size={18} className="text-[#2D2D2B] mt-1 mr-2" />
                  <span className="text-[#2D2D2B]">Healed-first portfolio</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 size={18} className="text-[#2D2D2B] mt-1 mr-2" />
                  <span className="text-[#2D2D2B]">Design approved before pigment</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 size={18} className="text-[#2D2D2B] mt-1 mr-2" />
                  <span className="text-[#2D2D2B]">Premium vegan pigments</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 size={18} className="text-[#2D2D2B] mt-1 mr-2" />
                  <span className="text-[#2D2D2B]">Unrushed, calm sessions</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 size={18} className="text-[#2D2D2B] mt-1 mr-2" />
                  <span className="text-[#2D2D2B]">Complimentary consultation</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 size={18} className="text-[#2D2D2B] mt-1 mr-2" />
                  <span className="text-[#2D2D2B]">VA licensed & insured</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/booking" className="btn bg-[#2D2D2B] hover:bg-[#1a1a19] text-white">
                  Request Consultation
                </Link>
                <Link to="/gallery" className="btn btn-outline text-[#2D2D2B] border-[#2D2D2B] hover:bg-[#2D2D2B]/5">
                  View Healed Results
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