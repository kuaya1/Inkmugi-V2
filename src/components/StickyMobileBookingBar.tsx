import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const StickyMobileBookingBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero (roughly 1 viewport height)
      const heroHeight = window.innerHeight;
      const scrollY = window.scrollY;
      
      // Get the final CTA section — hide when it's visible
      const finalCTA = document.getElementById('final-cta-section');
      let hideAtBottom = false;
      
      if (finalCTA) {
        const rect = finalCTA.getBoundingClientRect();
        hideAtBottom = rect.top < window.innerHeight;
      }

      setIsVisible(scrollY > heroHeight * 0.7 && !hideAtBottom);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          {/* Subtle top shadow for separation */}
          <div className="absolute -top-4 left-0 right-0 h-4 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
          
          <Link
            to="/booking"
            className="flex items-center justify-center gap-2 w-full bg-[#E6DAD2] hover:bg-[#d4c4b0] text-[#2D2D2B] font-medium py-4 px-6 transition-colors duration-300"
            style={{ paddingBottom: 'max(16px, env(safe-area-inset-bottom))' }}
          >
            <span className="text-[15px] tracking-wide">Request a Consultation</span>
            <ArrowRight size={16} className="flex-shrink-0" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyMobileBookingBar;
