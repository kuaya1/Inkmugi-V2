import React, { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export interface FaqItemData {
  question: string;
  answer: string;
}

interface InlineFaqAccordionProps {
  faqs: FaqItemData[];
  title?: string;
  subtitle?: string;
  /** @deprecated Accepted for compatibility; all questions are now rendered. */
  maxVisible?: number;
  className?: string;
}

const InlineFaqAccordion: React.FC<InlineFaqAccordionProps> = ({
  faqs,
  title = 'Common Questions',
  subtitle,
  className = '',
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const headingId = useId();

  /*
   * Every question is rendered. The component used to slice to `maxVisible`
   * (default 4) while the calling pages emitted FAQPage schema for the full
   * list — twelve pages marked up questions that were never on the page at all.
   * Rows are collapsed, so showing all of them costs a little vertical space
   * and buys structured data that matches the rendered content.
   */
  const visibleFaqs = faqs;

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
              type="button"
              id={`${headingId}-question-${index}`}
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-5 text-left group"
              aria-expanded={openIndex === index}
              aria-controls={`${headingId}-answer-${index}`}
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

            {/*
              The answer is always mounted and collapsed with height, never
              unmounted. It used to be conditionally rendered, so no answer
              existed in the DOM until a click — while 37 pages simultaneously
              emitted FAQPage structured data asserting those answers were on
              the page. Google requires FAQ answer text to be present in the
              rendered content, and on the dark-skin guide alone this kept ~700
              words of the page's most query-matched copy out of the HTML.
            */}
            <motion.div
              id={`${headingId}-answer-${index}`}
              role="region"
              aria-labelledby={`${headingId}-question-${index}`}
              initial={false}
              animate={{ height: openIndex === index ? 'auto' : 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 pt-0 border-t border-[#E6DAD2]/30">
                <p className="text-[#2D2D2B]/70 text-sm leading-relaxed pt-4">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InlineFaqAccordion;
