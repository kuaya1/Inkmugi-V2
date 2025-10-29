import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-[#2D2D2B] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://live.staticflickr.com/65535/54363160242_7975c4f42c_o_d.jpg')] bg-cover bg-center opacity-10"></div>
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-cormorant font-medium mb-6 leading-tight">
              Ready to Transform Your Brows?
            </h2>
            <p className="text-lg text-[#F9F7F5]/90 mb-10 max-w-2xl mx-auto">
              Book your consultation today and take the first step towards effortlessly beautiful brows that enhance your natural features.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link to="/booking" className="btn bg-[#E6DAD2] hover:bg-[#F0E4D8] text-[#2D2D2B] font-medium transition-all duration-300 transform hover:translate-y-[-2px]">
                Book Now
              </Link>
              <Link to="/contact" className="btn bg-transparent border border-[#F9F7F5] hover:bg-white/10 text-white transition-all duration-300">
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CTASection;