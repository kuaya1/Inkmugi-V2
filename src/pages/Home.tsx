import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown, Award, Shield, Clock, Heart, Sparkles, CheckCircle2, Quote, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { motion, AnimatePresence } from 'framer-motion';

import AnimatedSection from '../components/AnimatedSection';
import TestimonialCard from '../components/TestimonialCard';
import ServiceCard from '../components/ServiceCard';

const Home: React.FC = () => {
  const [activeTransformation, setActiveTransformation] = useState(0);
  const [isHeroLoaded, setIsHeroLoaded] = useState(false);

  useEffect(() => {
    setIsHeroLoaded(true);
  }, []);

  // Testimonials with deeper stories
  const testimonials = [
    {
      name: 'Sarah J.',
      location: 'Arlington, VA',
      story: 'Before Mugi, I spent 25 minutes every morning on my brows. Now I wake up, look in the mirror, and smile.',
      highlight: '25 minutes saved daily',
      rating: 5,
      testimonial: "I am absolutely thrilled with my ombre brows from Ink Mugi. They transformed my entire face and I get compliments daily. The professionalism and expertise are unmatched in the DMV area.",
      date: 'October 2024',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    },
    {
      name: 'Emily R.',
      location: 'Alexandria, VA',
      story: 'I have oily skin. Every artist said PMU wouldn\'t work for me. Mugi said "watch this." 8 months later, still perfect.',
      highlight: 'Oily skin success',
      rating: 5,
      testimonial: 'As someone with oily skin, I was skeptical about permanent makeup. But Mugi recommended ombre powder brows and they have held perfectly for 8 months even through DMV humidity. Best decision I ever made!',
      date: 'September 2024',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    },
    {
      name: 'Michelle L.',
      location: 'Fairfax, VA',
      story: 'Another artist ruined my brows. I cried for weeks. Mugi didn\'t just fix them—she gave me my confidence back.',
      highlight: 'Correction success',
      rating: 5,
      testimonial: 'My previous PMU artist botched my brows terribly. Mugi corrected them beautifully using advanced color neutralization techniques. I have never been happier with how they look. She is truly an artist.',
      date: 'August 2024',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150',
    },
    {
      name: 'Jessica T.',
      location: 'Washington, DC',
      story: 'The consultation alone was worth it. She mapped my face, explained the science. I felt safe before she even started.',
      highlight: 'Thorough process',
      rating: 5,
      testimonial: 'The consultation was thorough and professional. Mugi explained the entire healing process for DMV climate and the results are exactly what I wanted. I am recommending her to all my friends in Arlington and Alexandria.',
      date: 'July 2024',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    },
  ];

  // Services with emotional framing
  const services = [
    {
      title: 'Ombre Powder Brows',
      tagline: 'The signature look',
      description: 'Soft-to-bold gradient that mimics the look of filled-in brows. Perfect for oily skin. Lasts 18-36 months.',
      price: '$600',
      duration: '3 hours',
      image: 'https://live.staticflickr.com/65535/54364396583_48d38e3d93_o_d.jpg',
      features: ['Natural gradient effect', 'Ideal for oily skin', 'Includes touch-up'],
    },
    {
      title: 'Microshading',
      tagline: 'Whisper-soft definition',
      description: 'Delicate pixel technique for a soft, powdered finish. Subtle enhancement that looks like you, but better.',
      price: '$500',
      duration: '2.5 hours',
      image: 'https://live.staticflickr.com/65535/54364170391_5f7424c0b6_o_d.jpg',
      features: ['Ultra-natural finish', 'All skin types', '24-month longevity'],
    },
    {
      title: 'PMU Correction',
      tagline: 'A fresh start',
      description: 'Expert restoration of previous permanent makeup. Color neutralization and shape refinement.',
      price: '$700',
      duration: '3 hours',
      image: 'https://live.staticflickr.com/65535/54408439944_63e225ac5f_c_d.jpg',
      features: ['Color correction', 'Shape restoration', 'Confidence returned'],
    },
  ];

  // Transformations gallery
  const transformations = [
    {
      before: 'https://live.staticflickr.com/65535/54366236564_a0f3a59599_c_d.jpg',
      after: 'https://live.staticflickr.com/65535/54365160327_5c790ba60a_c_d.jpg',
      story: 'Sparse, uneven brows transformed into soft, natural ombre',
      technique: 'Ombre Powder Brows',
    },
    {
      before: 'https://live.staticflickr.com/65535/54366013651_f914f378af_c_d.jpg',
      after: 'https://live.staticflickr.com/65535/54366410490_6e3bac2287_c_d.jpg',
      story: 'Over-plucked brows restored with precise microshading',
      technique: 'Microshading',
    },
  ];

  // Process steps
  const processSteps = [
    {
      number: '01',
      title: 'Consultation',
      duration: '30 min',
      description: 'We map your face, discuss your vision, and design brows that complement your unique features. No pressure, just conversation.',
    },
    {
      number: '02',
      title: 'Design & Approval',
      duration: '45 min',
      description: 'You see the shape before any pigment touches skin. We adjust until you say "that\'s perfect." Your approval is everything.',
    },
    {
      number: '03',
      title: 'The Artistry',
      duration: '90 min',
      description: 'Numbing cream applied. Premium pigments deposited with precision. Most clients describe it as "relaxing with slight pressure."',
    },
    {
      number: '04',
      title: 'Aftercare & Touch-up',
      duration: '6 weeks',
      description: 'Detailed aftercare kit included. Free touch-up at 6 weeks to perfect the healed result. We\'re with you every step.',
    },
  ];

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════════
          HERO SECTION — The Promise
          Philosophy: Less is more. One image. One emotion. One call to action.
          The viewer should feel something before they read anything.
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60 z-10" />
        
        {/* Subtle grain texture for depth */}
        <div className="absolute inset-0 z-[11] opacity-[0.03] mix-blend-overlay"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }}
        />
        
        {/* Hero image with parallax-ready positioning */}
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-[2000ms]"
          style={{ 
            backgroundImage: "url('https://live.staticflickr.com/65535/54363160242_7975c4f42c_o_d.jpg')",
            transform: isHeroLoaded ? 'scale(1)' : 'scale(1.1)',
          }}
        />

        {/* Hero content */}
        <div className="container-custom relative z-20 text-white pt-20">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: isHeroLoaded ? 1 : 0, y: isHeroLoaded ? 0 : 40 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            {/* Elegant pre-title */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-3 text-[#E6DAD2]/90 tracking-[0.3em] text-xs uppercase font-light">
                <span className="w-12 h-px bg-[#E6DAD2]/50" />
                Arlington, Virginia
                <span className="w-12 h-px bg-[#E6DAD2]/50" />
              </span>
            </motion.div>

            {/* Main headline — The emotional hook */}
            <h1 className="mb-8">
              <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-cormorant font-light leading-[1.1] tracking-tight">
                Wake Up
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-cormorant font-medium leading-[1.1] tracking-tight mt-2">
                <span className="text-[#E6DAD2]">Ready</span>
              </span>
            </h1>

            {/* Supporting text — Simple, evocative */}
            <motion.p 
              className="text-lg md:text-xl text-white/80 font-light max-w-xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Effortless brows that look like you—only better. 
              <br className="hidden sm:block" />
              Natural. Lasting. Yours.
            </motion.p>

            {/* CTA — Single, clear action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link 
                to="/booking" 
                className="group relative inline-flex items-center gap-3 bg-[#E6DAD2] hover:bg-white text-[#2D2D2B] px-8 py-4 rounded-full font-medium transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
              >
                <span>Begin Your Transformation</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link 
                to="/gallery" 
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 text-sm tracking-wide"
              >
                <Play size={16} className="fill-current" />
                <span>View Results</span>
              </Link>
            </motion.div>

            {/* Trust indicators — Subtle, not shouting */}
            <motion.div 
              className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-white/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <span className="flex items-center gap-2">
                <Shield size={14} className="text-[#E6DAD2]" />
                VA Licensed
              </span>
              <span className="flex items-center gap-2">
                <Award size={14} className="text-[#E6DAD2]" />
                500+ Procedures
              </span>
              <span className="flex items-center gap-2">
                <Heart size={14} className="text-[#E6DAD2]" />
                0.19% Complication Rate
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ 
            opacity: { delay: 2, duration: 0.5 },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
          }}
        >
          <ArrowDown size={24} className="text-white/50" />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          TRANSFORMATIONS — Let The Work Speak
          Philosophy: The strongest argument is visual proof. 
          No description needed when the transformation is undeniable.
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-32 bg-[#F9F7F5] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-[#E6DAD2]/30 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        
        <div className="container-custom relative">
          <AnimatedSection className="mb-20">
            <div className="max-w-2xl">
              <span className="inline-block text-[#2D2D2B]/50 tracking-[0.2em] text-xs uppercase mb-4">
                Real Results
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium text-[#2D2D2B] leading-tight mb-6">
                See the <span className="italic">difference</span>
              </h2>
              <p className="text-lg text-[#2D2D2B]/70 font-light">
                Every transformation tells a story. Swipe to discover yours.
              </p>
            </div>
          </AnimatedSection>

          {/* Interactive transformation viewer */}
          <AnimatedSection delay={2}>
            <div className="relative">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Before/After display */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`transformation-${activeTransformation}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 flex"
                    >
                      <div className="relative w-1/2 h-full">
                        <img 
                          src={transformations[activeTransformation].before} 
                          alt="Before transformation"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute bottom-4 left-4 bg-[#2D2D2B]/80 backdrop-blur-sm text-white text-xs px-4 py-2 rounded-full font-medium tracking-wide">
                          Before
                        </div>
                      </div>
                      <div className="relative w-1/2 h-full">
                        <img 
                          src={transformations[activeTransformation].after} 
                          alt="After transformation"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute bottom-4 right-4 bg-[#E6DAD2] text-[#2D2D2B] text-xs px-4 py-2 rounded-full font-medium tracking-wide">
                          After
                        </div>
                      </div>
                      {/* Center divider */}
                      <div className="absolute inset-y-0 left-1/2 w-1 bg-white shadow-lg -translate-x-1/2" />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Transformation details */}
                <div className="lg:pl-12">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`details-${activeTransformation}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                    >
                      <span className="inline-block bg-[#E6DAD2] text-[#2D2D2B] text-xs px-4 py-2 rounded-full font-medium tracking-wide mb-6">
                        {transformations[activeTransformation].technique}
                      </span>
                      <p className="text-2xl md:text-3xl font-cormorant text-[#2D2D2B] leading-relaxed mb-8">
                        "{transformations[activeTransformation].story}"
                      </p>
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation dots */}
                  <div className="flex gap-3 mb-8">
                    {transformations.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTransformation(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === activeTransformation 
                            ? 'bg-[#2D2D2B] w-8' 
                            : 'bg-[#2D2D2B]/20 hover:bg-[#2D2D2B]/40'
                        }`}
                        aria-label={`View transformation ${index + 1}`}
                      />
                    ))}
                  </div>

                  <Link 
                    to="/gallery" 
                    className="inline-flex items-center gap-2 text-[#2D2D2B] font-medium hover:gap-3 transition-all duration-300"
                  >
                    <span>View full gallery</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          THE ARTIST — Connection Before Credentials
          Philosophy: People don't buy services. They buy from people they trust.
          Lead with warmth, follow with expertise.
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Image column */}
            <AnimatedSection className="lg:col-span-5">
              <div className="relative">
                {/* Main image */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg" 
                    alt="Mugi - PMU Artist" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating credential card */}
                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 max-w-[220px]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#E6DAD2] flex items-center justify-center">
                      <Award size={20} className="text-[#2D2D2B]" />
                    </div>
                    <span className="text-3xl font-cormorant font-semibold text-[#2D2D2B]">500+</span>
                  </div>
                  <p className="text-sm text-[#2D2D2B]/70">Successful procedures with 99.81% satisfaction</p>
                </motion.div>

                {/* Decorative element */}
                <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-[#E6DAD2] rounded-2xl -z-10" />
              </div>
            </AnimatedSection>

            {/* Content column */}
            <AnimatedSection className="lg:col-span-7" delay={2}>
              <span className="inline-block text-[#2D2D2B]/50 tracking-[0.2em] text-xs uppercase mb-4">
                Meet Your Artist
              </span>
              
              <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] leading-tight mb-8">
                Beauty is personal.<br />
                <span className="text-[#2D2D2B]/60">So is my approach.</span>
              </h2>

              <div className="prose prose-lg text-[#2D2D2B]/80 mb-10 max-w-none">
                <p className="leading-relaxed">
                  I'm Mugi. For over a decade, I've dedicated my craft to one simple belief: 
                  <strong className="text-[#2D2D2B]"> permanent makeup should enhance who you already are</strong>—never change it.
                </p>
                <p className="leading-relaxed">
                  Every face tells a story. My job isn't to rewrite it—it's to highlight the 
                  chapters that make you, you. That means listening more than designing, 
                  understanding your lifestyle, your concerns, your vision.
                </p>
              </div>

              {/* Values grid */}
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                {[
                  { icon: Shield, title: 'Safety Obsessed', desc: 'Hospital-grade sterilization. Always.' },
                  { icon: Heart, title: 'Naturally You', desc: 'Enhancement, not transformation.' },
                  { icon: Clock, title: 'Built to Last', desc: '18-36 months of effortless beauty.' },
                  { icon: Sparkles, title: 'Detail Driven', desc: 'Every stroke considered.' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-[#F7EDE6] flex items-center justify-center flex-shrink-0 group-hover:bg-[#E6DAD2] transition-colors duration-300">
                      <item.icon size={22} className="text-[#2D2D2B]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#2D2D2B] mb-1">{item.title}</h4>
                      <p className="text-sm text-[#2D2D2B]/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 bg-[#2D2D2B] hover:bg-[#2D2D2B]/90 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 group"
              >
                <span>My Full Story</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          THE EXPERIENCE — Demystifying The Process
          Philosophy: Fear comes from the unknown. Illuminate every step.
          Transform anxiety into anticipation.
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-32 bg-[#2D2D2B] text-white relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-5"
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}
        />

        <div className="container-custom relative">
          <AnimatedSection className="text-center mb-20">
            <span className="inline-block text-[#E6DAD2]/70 tracking-[0.2em] text-xs uppercase mb-4">
              Your Journey
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium leading-tight mb-6">
              From first hello to<br />
              <span className="text-[#E6DAD2]">lasting confidence</span>
            </h2>
            <p className="text-lg text-white/60 font-light max-w-xl mx-auto">
              Every step designed to make you feel informed, comfortable, and excited.
            </p>
          </AnimatedSection>

          {/* Process timeline */}
          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E6DAD2]/30 to-transparent -translate-y-1/2" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <AnimatedSection key={index} delay={index * 2}>
                  <div className="relative group">
                    {/* Step card */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-[#E6DAD2]/30 transition-all duration-500 h-full">
                      {/* Step number */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-5xl font-cormorant font-light text-[#E6DAD2]/40 group-hover:text-[#E6DAD2] transition-colors duration-500">
                          {step.number}
                        </span>
                        <span className="text-xs text-white/40 tracking-wide">
                          {step.duration}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-medium mb-4 text-white group-hover:text-[#E6DAD2] transition-colors duration-300">
                        {step.title}
                      </h3>
                      
                      <p className="text-white/60 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <AnimatedSection className="mt-16 text-center">
            <p className="text-white/60 mb-6">Questions about the process?</p>
            <Link 
              to="/faq" 
              className="inline-flex items-center gap-2 text-[#E6DAD2] hover:text-white transition-colors duration-300 font-medium"
            >
              <span>Read our FAQ</span>
              <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SERVICES — Transformation, Not Transactions  
          Philosophy: Sell the transformation, not the procedure.
          Every service solves a deeper emotional need.
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-32 bg-[#F7EDE6] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-[#E6DAD2]/40 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
        
        <div className="container-custom relative">
          <AnimatedSection className="text-center mb-20">
            <span className="inline-block text-[#2D2D2B]/50 tracking-[0.2em] text-xs uppercase mb-4">
              Services
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium text-[#2D2D2B] leading-tight mb-6">
              Find your <span className="italic">signature</span> look
            </h2>
            <p className="text-lg text-[#2D2D2B]/70 font-light max-w-xl mx-auto">
              Three distinct techniques. One perfect match for you.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 2}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    
                    {/* Price tag */}
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                      <span className="font-semibold text-[#2D2D2B]">{service.price}</span>
                      <span className="text-[#2D2D2B]/50 text-sm ml-1">/ {service.duration}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <span className="text-[#2D2D2B]/50 text-xs tracking-wide uppercase mb-2">
                      {service.tagline}
                    </span>
                    <h3 className="text-2xl font-cormorant font-semibold text-[#2D2D2B] mb-4">
                      {service.title}
                    </h3>
                    <p className="text-[#2D2D2B]/70 mb-6 leading-relaxed flex-grow">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2 text-sm text-[#2D2D2B]/70">
                          <CheckCircle2 size={16} className="text-[#E6DAD2]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      to="/booking"
                      className="w-full text-center bg-[#2D2D2B] hover:bg-[#2D2D2B]/90 text-white py-3 rounded-full font-medium transition-all duration-300 mt-auto"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 text-[#2D2D2B] font-medium hover:gap-3 transition-all duration-300"
            >
              <span>Explore all services</span>
              <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          TESTIMONIALS — Stories, Not Reviews
          Philosophy: Statistics inform. Stories transform.
          Let real voices paint the picture of transformation.
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-[#F7EDE6] rounded-full filter blur-3xl opacity-50" />
        <div className="absolute bottom-20 right-20 w-[300px] h-[300px] bg-[#E6DAD2] rounded-full filter blur-3xl opacity-30" />
        
        <div className="container-custom relative">
          <AnimatedSection className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-end">
              <div>
                <span className="inline-block text-[#2D2D2B]/50 tracking-[0.2em] text-xs uppercase mb-4">
                  Real Stories
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium text-[#2D2D2B] leading-tight">
                  In their <span className="italic">own</span> words
                </h2>
              </div>
              <div className="flex justify-start lg:justify-end items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {testimonials.slice(0, 4).map((t, i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                        <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-[#2D2D2B]/70 ml-3">500+ happy clients</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Featured testimonial */}
          <AnimatedSection className="mb-12">
            <div className="bg-gradient-to-br from-[#F7EDE6] to-[#F9F7F5] rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <Quote size={80} className="absolute top-8 left-8 text-[#E6DAD2]/30" />
              
              <div className="relative grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <p className="text-2xl md:text-3xl font-cormorant text-[#2D2D2B] leading-relaxed mb-8">
                    "I used to spend 25 minutes every morning on my brows. Now I wake up, look in the mirror, and just... smile. That's worth everything."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <img src={testimonials[0].image} alt={testimonials[0].name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#2D2D2B]">{testimonials[0].name}</h4>
                      <p className="text-sm text-[#2D2D2B]/60">{testimonials[0].location}</p>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center gap-2 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-[#2D2D2B]/70 mb-2">Time saved</p>
                    <p className="text-3xl font-cormorant font-semibold text-[#2D2D2B]">25 min<span className="text-lg">/day</span></p>
                    <p className="text-xs text-[#2D2D2B]/50 mt-1">~152 hours/year</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Testimonial grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.slice(1).map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 2}>
                <div className="bg-[#F9F7F5] rounded-2xl p-6 h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[#2D2D2B]/80 leading-relaxed flex-grow mb-6">
                    "{testimonial.story}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-[#E6DAD2]/30">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-[#2D2D2B]">{testimonial.name}</h4>
                      <p className="text-xs text-[#2D2D2B]/50">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          FINAL CTA — The Invitation
          Philosophy: This isn't a sales pitch. It's an invitation to begin.
          Warm. Personal. Low pressure.
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-32 overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://live.staticflickr.com/65535/54363160242_7975c4f42c_o_d.jpg')" 
            }}
          />
          <div className="absolute inset-0 bg-[#2D2D2B]/85" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <AnimatedSection>
              <span className="inline-flex items-center gap-3 text-[#E6DAD2]/90 tracking-[0.3em] text-xs uppercase font-light mb-8">
                <span className="w-12 h-px bg-[#E6DAD2]/50" />
                Ready?
                <span className="w-12 h-px bg-[#E6DAD2]/50" />
              </span>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium leading-tight mb-8">
                Your journey to<br />
                <span className="text-[#E6DAD2]">effortless confidence</span><br />
                starts here
              </h2>
              
              <p className="text-lg text-white/70 font-light max-w-xl mx-auto mb-12 leading-relaxed">
                No pressure. No obligation. Just a conversation about what's possible for you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link 
                  to="/booking" 
                  className="group inline-flex items-center gap-3 bg-[#E6DAD2] hover:bg-white text-[#2D2D2B] px-10 py-5 rounded-full font-medium transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <span className="text-white/50">or</span>
                <a 
                  href="tel:5712838228"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300"
                >
                  <span>Call (571) 283-8228</span>
                </a>
              </div>

              {/* Final trust signals */}
              <div className="flex flex-wrap justify-center gap-8 text-sm text-white/50">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#E6DAD2]" />
                  Free consultation included
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#E6DAD2]" />
                  Touch-up included
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#E6DAD2]" />
                  Aftercare kit included
                </span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;