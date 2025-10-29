import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
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
      price: '$600',
      duration: '3 hours',
      description: 'Soft-to-bold gradient technique for natural-looking brows. Digital machine technique with premium vegan pigments using gradient shading method. Results last 18-36 months in DMV climate.',
      icon: <CheckCircle size={24} className="text-[#2D2D2B]" />
    },
    {
      id: 2,
      title: 'Microshading',
      price: '$500',
      duration: '2.5 hours',
      description: 'Delicate dot-work technique creating soft powder effect with medical-grade pigments. Perfect for sensitive skin with 0.19% complication rate. Results last 1-3 years.',
      icon: <CheckCircle size={24} className="text-[#2D2D2B]" />
    },
    {
      id: 3,
      title: 'PMU Correction',
      price: '$700',
      duration: '3 hours',
      description: 'Advanced correction techniques including color neutralization and shape refinement. Expert correction of previous permanent makeup work.',
      icon: <CheckCircle size={24} className="text-[#2D2D2B]" />
    },
    {
      id: 4,
      title: 'Free Consultation',
      price: 'Free',
      duration: '45 minutes',
      description: 'Complimentary design consultation and skin assessment. Personalized brow mapping to determine the perfect shape for your facial structure and skin type.',
      icon: <CheckCircle size={24} className="text-[#2D2D2B]" />
    },
    {
      id: 5,
      title: 'Touch-Up Sessions',
      price: 'Included',
      duration: '1.5 hours',
      description: '6-week touch-up included with initial procedure. Maintenance sessions keep your brows looking fresh and vibrant. Recommended every 18-36 months.',
      icon: <CheckCircle size={24} className="text-[#2D2D2B]" />
    },
    {
      id: 6,
      title: 'After-Care Services',
      price: 'Included',
      duration: 'Ongoing',
      description: 'Comprehensive aftercare support included with every procedure. Detailed instructions and premium aftercare kit to ensure optimal healing and long-lasting results.',
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
              PMU Services in Annandale, VA
            </h1>
            <p className="text-lg md:text-xl text-[#2D2D2B]/80 max-w-3xl mx-auto">
              Virginia-licensed permanent makeup artistry with 523+ procedures, 0.19% complication rate, and 97% client satisfaction. Specialized techniques for DMV's unique climate.
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
              <h2 className="section-title text-[#2D2D2B]">Why Choose Ink Mugi</h2>
              <p className="text-[#2D2D2B] mb-4">
                Virginia-licensed PMU artist specializing in ombre powder brows and microshading. Our hospital-grade safety protocols and data-driven approach ensure exceptional results with minimal risk.
              </p>
              <p className="text-[#2D2D2B]/80 mb-6 text-sm bg-[#F7EDE6] p-4 rounded-lg">
                <strong className="text-[#2D2D2B]">523+ Procedures</strong> • <strong className="text-[#2D2D2B]">0.19% Complication Rate</strong> (vs 2.5% industry avg) • <strong className="text-[#2D2D2B]">97% Satisfaction</strong> • License #1231002471
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle size={18} className="text-[#2D2D2B] mt-1 mr-2" />
                  <span className="text-[#2D2D2B]">Virginia state licensed & insured</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={18} className="text-[#2D2D2B] mt-1 mr-2" />
                  <span className="text-[#2D2D2B]">Premium vegan pigments</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={18} className="text-[#2D2D2B] mt-1 mr-2" />
                  <span className="text-[#2D2D2B]">Hospital-grade sterilization</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={18} className="text-[#2D2D2B] mt-1 mr-2" />
                  <span className="text-[#2D2D2B]">DMV climate-optimized techniques</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={18} className="text-[#2D2D2B] mt-1 mr-2" />
                  <span className="text-[#2D2D2B]">Free consultation & aftercare kit</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={18} className="text-[#2D2D2B] mt-1 mr-2" />
                  <span className="text-[#2D2D2B]">6-week touch-up included</span>
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