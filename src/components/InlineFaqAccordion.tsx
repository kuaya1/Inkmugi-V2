import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface FaqItemData {
  question: string;
  answer: string;
}

interface InlineFaqAccordionProps {
  faqs: FaqItemData[];
  title?: string;
  subtitle?: string;
  maxVisible?: number;
  className?: string;
}

const InlineFaqAccordion: React.FC<InlineFaqAccordionProps> = ({
  faqs,
  title = 'Common Questions',
  subtitle,
  maxVisible = 4,
  className = '',
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visibleFaqs = faqs.slice(0, maxVisible);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={className}>
      {title && (
        <h3 className="text-2xl md:text-3xl font-cormorant font-medium text-[#2D2D2B] mb-2">
          {title}
        </h3>
      )}
      {subtitle && (
        <p className="text-sm text-[#2D2D2B]/60 mb-6">{subtitle}</p>
      )}

      <div className="space-y-3">
        {visibleFaqs.map((faq, index) => (
          <div
            key={index}
            className="border border-[#E6DAD2]/60 rounded-xl overflow-hidden bg-white hover:border-[#E6DAD2] transition-colors duration-300"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-5 text-left group"
              aria-expanded={openIndex === index}
            >
              <span className="font-medium text-[#2D2D2B] text-[15px] pr-4 leading-snug">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className="flex-shrink-0"
              >
                <ChevronDown
                  size={18}
                  className={`transition-colors duration-200 ${
                    openIndex === index ? 'text-[#2D2D2B]' : 'text-[#2D2D2B]/40'
                  }`}
                />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 pt-0 border-t border-[#E6DAD2]/30">
                    <p className="text-[#2D2D2B]/70 text-sm leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InlineFaqAccordion;
