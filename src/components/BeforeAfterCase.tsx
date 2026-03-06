import React from 'react';
import { Camera } from 'lucide-react';

export interface CasePhoto {
  /** URL of the before image (use '' for placeholder) */
  before: string;
  /** URL of the after image (use '' for placeholder) */
  after: string;
  /** SEO-optimized alt text for the before image */
  beforeAlt: string;
  /** SEO-optimized alt text for the after image */
  afterAlt: string;
  /** Short caption explaining the correction scenario */
  caption: string;
}

interface BeforeAfterCaseProps {
  /** Array of case photos to display */
  cases: CasePhoto[];
  /** Section heading */
  title?: string;
  /** Section subtitle */
  subtitle?: string;
  /** Optional extra CSS classes */
  className?: string;
}

/**
 * Placeholder-ready Before/After image grid for correction case pages.
 * Renders responsive cards with lazy-loaded images and SEO-optimized alt text.
 * When real photos aren't yet available, displays a styled placeholder.
 */
const BeforeAfterCase: React.FC<BeforeAfterCaseProps> = ({
  cases,
  title = 'Correction Results',
  subtitle,
  className = '',
}) => {
  return (
    <section className={`py-16 md:py-20 bg-[#F9F7F5] ${className}`}>
      <div className="container-custom max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-cormorant font-medium text-[#2D2D2B] mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[#2D2D2B]/60 max-w-2xl mx-auto text-sm">
              {subtitle}
            </p>
          )}
        </div>

        <div className="space-y-10">
          {cases.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-[#E6DAD2]/40 overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                {/* Before */}
                <div className="relative">
                  <div className="absolute top-3 left-3 z-10 bg-[#2D2D2B]/80 text-white text-xs font-medium px-3 py-1 rounded-full">
                    Before
                  </div>
                  {item.before ? (
                    <img
                      src={item.before}
                      alt={item.beforeAlt}
                      className="w-full aspect-[4/3] object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="w-full aspect-[4/3] bg-[#F0EBE6] flex flex-col items-center justify-center text-[#2D2D2B]/30">
                      <Camera size={36} strokeWidth={1.5} />
                      <p className="text-xs mt-2 font-medium">Before photo</p>
                      <p className="text-[10px] mt-0.5 text-[#2D2D2B]/20">
                        Real client photo coming soon
                      </p>
                    </div>
                  )}
                </div>

                {/* After */}
                <div className="relative">
                  <div className="absolute top-3 left-3 z-10 bg-[#9A7B69] text-white text-xs font-medium px-3 py-1 rounded-full">
                    After
                  </div>
                  {item.after ? (
                    <img
                      src={item.after}
                      alt={item.afterAlt}
                      className="w-full aspect-[4/3] object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="w-full aspect-[4/3] bg-[#F7EDE6] flex flex-col items-center justify-center text-[#2D2D2B]/30">
                      <Camera size={36} strokeWidth={1.5} />
                      <p className="text-xs mt-2 font-medium">After photo</p>
                      <p className="text-[10px] mt-0.5 text-[#2D2D2B]/20">
                        Real client photo coming soon
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Caption */}
              <div className="px-5 py-4 border-t border-[#E6DAD2]/30">
                <p className="text-sm text-[#2D2D2B]/70 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterCase;
