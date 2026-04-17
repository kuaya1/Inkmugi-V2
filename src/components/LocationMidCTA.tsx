import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface LocationMidCTAProps {
  /** Main headline. Defaults to "Ready to wake up with perfect brows?" */
  headline?: string;
  /** Supporting text below headline */
  subtext?: string;
  /** Button label */
  buttonText?: string;
  /** Button destination */
  buttonLink?: string;
}

const LocationMidCTA: React.FC<LocationMidCTAProps> = ({
  headline = 'Ready to wake up with perfect brows?',
  subtext = 'Book your free consultation today and see why hundreds of Northern Virginia clients trust Ink Mugi.',
  buttonText = 'Book Free Consultation',
  buttonLink = '/booking',
}) => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#F7EDE6] to-[#F0E4D8]">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
            {headline}
          </h2>
          <p className="text-[#2D2D2B]/70 mb-8 text-lg">
            {subtext}
          </p>
          <Link
            to={buttonLink}
            className="inline-flex items-center justify-center px-8 py-4 bg-[#2D2D2B] text-white rounded-full font-medium hover:bg-[#4A4A47] transition-all shadow-lg hover:shadow-xl"
          >
            {buttonText}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default LocationMidCTA;
