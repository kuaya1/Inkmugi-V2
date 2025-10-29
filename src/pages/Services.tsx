import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, CheckCircle, Calendar, Users } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import CTASection from '../components/CTASection';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'PMU Services | Ombre Powder Brow Specialist';
  }, []);

  const services = [
    {
      id: 1,
      title: 'Ombre Powder Brows',
      description: 'Our signature service! Soft, powdered effect that mimics the look of brow makeup with a more natural finish than traditional microblading.',
      icon: <CheckCircle size={24} className="text-[#2D2D2B]" />
    },
    {
      id: 2,
      title: 'Brow Correction',
      description: 'Specialized technique to correct previous PMU work that has faded unevenly or needs reshaping for a more flattering look.',
      icon: <CheckCircle size={24} className="text-[#2D2D2B]" />
    },
    {
      id: 3,
      title: 'Brow Consultation',
      description: 'Personalized consultation to determine the perfect brow shape and style for your face shape and personal preference.',
      icon: <CheckCircle size={24} className="text-[#2D2D2B]" />
    },
    {
      id: 4,
      title: 'Touch-Up Sessions',
      description: 'Maintenance sessions to keep your brows looking fresh and vibrant. Recommended every 12-18 months depending on skin type.',
      icon: <CheckCircle size={24} className="text-[#2D2D2B]" />
    },
    {
      id: 5,
      title: 'PMU Training',
      description: 'Professional training courses for aspiring PMU artists looking to master the art of ombre powder brows.',
      icon: <CheckCircle size={24} className="text-[#2D2D2B]" />
    },
    {
      id: 6,
      title: 'After-Care Services',
      description: 'Comprehensive after-care support to ensure optimal healing and long-lasting results following your PMU procedure.',
      icon: <CheckCircle size={24} className="text-[#2D2D2B]" />
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#F0E4D8]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Brow Transformation Services
            </h1>
            <p className="text-lg md:text-xl text-[#2D2D2B]/80 max-w-3xl mx-auto">
              Elevate your natural beauty with our specialized ombre powder brow techniques.
              Customized solutions for every face shape and skin tone.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="section-title text-[#2D2D2B]">Our Services</h2>
            <p className="section-subtitle text-[#2D2D2B]/80">
              Professional permanent makeup services tailored to enhance your natural beauty
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={index + 1}>
                <div className="bg-white p-6 rounded-lg shadow-soft h-full">
                  <div className="w-12 h-12 bg-[#2D2D2B]/10 rounded-full flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-[#2D2D2B]">{service.title}</h3>
                  <p className="text-[#2D2D2B]/80 mb-6">
                    {service.description}
                  </p>
                  <Link to="/booking" className="text-[#2D2D2B] font-medium hover:text-[#2D2D2B]/70 transition-colors">
                    Learn More
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
            <h2 className="section-title text-[#2D2D2B]">Our Process</h2>
            <p className="section-subtitle text-[#2D2D2B]/80">
              Our detailed approach ensures beautiful, natural-looking results tailored to your unique features
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Consultation", desc: "We discuss your goals and preferences to create a personalized plan." },
              { title: "Design", desc: "Custom brow mapping to find the perfect shape for your facial structure." },
              { title: "Procedure", desc: "Using premium pigments and precise techniques for beautiful results." },
              { title: "Healing & Follow-up", desc: "Detailed aftercare and a touch-up session for perfect results." }
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
              <h2 className="section-title text-[#2D2D2B]">Why Choose Our Services</h2>
              <p className="text-[#2D2D2B] mb-6">
                We pride ourselves on providing exceptional permanent makeup services using the highest quality products and techniques. Our experienced artists are dedicated to enhancing your natural beauty with results that look flawless and natural.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle size={18} className="text-[#2D2D2B] mt-1 mr-2" />
                  <span className="text-[#2D2D2B]">Customized approach for each client</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={18} className="text-[#2D2D2B] mt-1 mr-2" />
                  <span className="text-[#2D2D2B]">Premium, medical-grade pigments</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={18} className="text-[#2D2D2B] mt-1 mr-2" />
                  <span className="text-[#2D2D2B]">Sterile, comfortable environment</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={18} className="text-[#2D2D2B] mt-1 mr-2" />
                  <span className="text-[#2D2D2B]">Detailed consultation process</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={18} className="text-[#2D2D2B] mt-1 mr-2" />
                  <span className="text-[#2D2D2B]">Comprehensive aftercare support</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={18} className="text-[#2D2D2B] mt-1 mr-2" />
                  <span className="text-[#2D2D2B]">Certified, experienced artists</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/booking" className="btn bg-[#2D2D2B] hover:bg-[#1a1a19] text-white">
                  Book a Consultation
                </Link>
                <Link to="/gallery" className="btn btn-outline text-[#2D2D2B] border-[#2D2D2B] hover:bg-[#2D2D2B]/5">
                  View Our Work
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