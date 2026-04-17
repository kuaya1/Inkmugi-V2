import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Shield, Clock, AlertTriangle, XCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface RelatedMicrobladingProblemsProps {
  /** The current page path (e.g. '/microblading-turning-grey') — excluded from the list */
  currentPath: string;
  /** Optional section background — defaults to 'bg-[#F9F7F5]' */
  bgClass?: string;
  /** Optional card background — defaults to 'bg-white' */
  cardBgClass?: string;
}

const allProblems = [
  {
    to: '/microblading-turning-grey',
    icon: Layers,
    title: 'Microblading Turning Grey',
    desc: 'Why microblading shifts to grey or ashy tones and how warm-spectrum correction neutralizes it.',
  },
  {
    to: '/patchy-microblading',
    icon: AlertTriangle,
    title: 'Patchy Microblading',
    desc: 'Why brows heal unevenly after microblading and how powder brows create consistent, lasting coverage.',
  },
  {
    to: '/microblading-fading-too-fast',
    icon: Clock,
    title: 'Microblading Fading Too Fast',
    desc: 'The biological and environmental factors that accelerate microblading fading — especially in the DMV.',
  },
  {
    to: '/botched-microblading-fix',
    icon: Shield,
    title: 'Botched Microblading Fix',
    desc: 'How to fix bad microblading — asymmetry, blurred strokes, color shift, and textural damage.',
  },
  {
    to: '/microblading-gone-wrong',
    icon: XCircle,
    title: 'Microblading Gone Wrong',
    desc: 'What to do if your microblading goes wrong — immediate steps, signs of failure, and correction options.',
  },
];

const RelatedMicrobladingProblems: React.FC<RelatedMicrobladingProblemsProps> = ({
  currentPath,
  bgClass = 'bg-[#F9F7F5]',
  cardBgClass = 'bg-white',
}) => {
  const filteredProblems = allProblems.filter((p) => p.to !== currentPath);

  return (
    <section className={`py-20 ${bgClass}`}>
      <div className="container-custom max-w-4xl">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
            Related Microblading Problems
          </h2>
          <p className="text-[#2D2D2B]/60 max-w-2xl mx-auto">
            Explore our complete guide to common microblading issues and how they're corrected with advanced powder brow techniques.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredProblems.map((link, idx) => (
            <AnimatedSection key={link.to} delay={idx + 1}>
              <Link
                to={link.to}
                className={`block ${cardBgClass} p-6 rounded-xl border border-[#E6DAD2] hover:shadow-lg transition-shadow h-full`}
              >
                <link.icon className="w-8 h-8 text-[#2D2D2B] mb-4" />
                <h3 className="text-lg font-medium text-[#2D2D2B] mb-2">{link.title}</h3>
                <p className="text-[#2D2D2B]/60 text-sm">{link.desc}</p>
                <span className="inline-flex items-center text-amber-700 text-sm font-medium mt-3">
                  Read guide <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-8 text-center" delay={filteredProblems.length + 1}>
          <Link
            to="/microblading-problems"
            className="inline-flex items-center text-amber-700 font-medium hover:text-amber-800 transition-colors"
          >
            View all microblading problems & solutions
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default RelatedMicrobladingProblems;
