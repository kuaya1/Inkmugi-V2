import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ArrowDown, Award, Shield, Clock, Heart, Sparkles, CheckCircle2, Quote, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import AnimatedSection from '../components/AnimatedSection';

const Home: React.FC = () => {
  const [activeTransformation, setActiveTransformation] = useState(0);
  const [isHeroLoaded, setIsHeroLoaded] = useState(false);

  useEffect(() => {
    setIsHeroLoaded(true);
  }, []);

  // Transformation Stories - Premium client journeys with verifiable specificity
  const testimonials = [
    {
      name: 'Katherine C.',
      location: 'McLean, VA',
      rating: 5,
      testimonial:
        "I researched for 7 months and was terrified of commitment. Mugi mapped my face for 35 minutes before touching any pigment—I approved every line. Day 3 looked darker than I expected (she warned me), but at 8 weeks healed they look like I was born with them. Worth every dollar.",
      date: 'Signature Ombre • Oct 2023',
      service: 'Signature Brow Transformation',
      healingTime: '8 weeks healed'
    },
    {
      name: 'Maria S.',
      location: 'Great Falls, VA',
      rating: 5,
      testimonial:
        'I\'ve had PMU twice before—both faded patchy. Mugi explained why (wrong pigment for my oily skin) and used a different technique. I was nervous she\'d judge my old work, but she was kind. At 12 months, they still look fresh. If you\'re sensitive to rushed energy, you\'ll notice the calm here.',
      date: 'Microshading • June 2023',
      service: 'Microshading Artistry',
      healingTime: '12 months healed'
    },
    {
      name: 'Jennifer L.',
      location: 'Potomac, MD',
      rating: 5,
      testimonial:
        'Post-chemo, my brows never grew back fully. I cried during the consultation—not from pain, from relief that someone understood what this meant. She took 3 hours (no rushing). The numbing worked better than I expected. At 10 weeks healed, I finally look like myself again.',
      date: 'Signature Ombre • March 2024',
      service: 'Signature Brow Transformation',
      healingTime: '10 weeks healed'
    },
    {
      name: 'Amara O.',
      location: 'Arlington, VA',
      rating: 5,
      testimonial:
        'As an executive, I need to look polished with zero daily effort. I interviewed 4 artists before choosing Mugi. What sold me: she showed healed photos, not fresh. She measured my face structure and explained why certain shapes wouldn\'t age well on me. That\'s expertise.',
      date: 'Microshading • Jan 2024',
      service: 'Microshading Artistry',
      healingTime: '6 weeks healed'
    },
    {
      name: 'Sarah M.',
      location: 'Vienna, VA',
      rating: 5,
      testimonial:
        'Postpartum, I felt invisible. I was worried about pain (I\'m sensitive), but the numbing worked well—I\'d rate it a 2/10. Mugi checked in constantly. She also warned me about the "scabby" phase (days 4-7), which helped me not panic. At 6 weeks, they\'re perfect.',
      date: 'Signature Ombre • Aug 2024',
      service: 'Signature Brow Transformation',
      healingTime: '6 weeks healed'
    },
  ];

  const getInitials = (name: string) => {
    const letters = name
      .split(/\s+/)
      .filter(Boolean)
      .map((part) => part[0] ?? '')
      .join('')
      .replace(/[^A-Za-z]/g, '')
      .toUpperCase();
    return (letters || 'G').slice(0, 2);
  };

  // Services with premium transformational framing
  const services = [
    {
      title: 'Signature Brow Transformation',
      tagline: 'The complete experience',
      description: 'Includes a 45-minute design + mapping consultation, custom brow plan, precision procedure, and perfecting session. For women seeking predictable, natural healed results that age gracefully.',
      price: 'Investment: $600',
      duration: 'Consultation required',
      image: 'https://live.staticflickr.com/65535/54364396583_48d38e3d93_o_d.jpg',
      features: ['45-min design + mapping', 'Shape approved before pigment', 'Perfecting session included'],
      note: 'By consultation only • limited weekly availability'
    },
    {
      title: 'Microshading Artistry',
      tagline: 'Whisper-soft definition',
      description: 'Delicate dot-work technique creating soft, powdered finish. Best for oily skin or those wanting minimal maintenance. Heals softer than traditional ombre.',
      price: 'Investment: $700',
      duration: 'Consultation required',
      image: 'https://live.staticflickr.com/65535/54364170391_5f7424c0b6_o_d.jpg',
      features: ['Ultra-natural finish', 'Ideal for oily skin', 'Aftercare kit included'],
    },
  ];

  // Transformations gallery
  const transformations = [
    {
      before: 'https://live.staticflickr.com/65535/54366236564_a0f3a59599_c_d.jpg',
      after: 'https://live.staticflickr.com/65535/54365160327_5c790ba60a_c_d.jpg',
      story: 'Natural Ombre Transformation',
      subtitle: 'From sparse, uneven brows to soft, defined shape',
      technique: 'Signature Transformation',
      healingStatus: 'healed',
    },
    {
      before: 'https://live.staticflickr.com/65535/54366013651_f914f378af_c_d.jpg',
      after: 'https://live.staticflickr.com/65535/54366410490_6e3bac2287_c_d.jpg',
      story: 'Soft Powder Microshading',
      subtitle: 'Delicate enhancement for busy professional',
      technique: 'Microshading Artistry',
      healingStatus: 'healed',
    },
    {
      before: 'https://live.staticflickr.com/65535/54366216764_db37388bbe_c_d.jpg',
      after: 'https://live.staticflickr.com/65535/54366013611_5cc68ab55d_c_d.jpg',
      story: 'Professional Executive Look',
      subtitle: 'Polished, natural definition for daily confidence',
      technique: 'Signature Transformation',
      healingStatus: 'healed',
    },
    {
      before: 'https://live.staticflickr.com/65535/54408289026_3826bdb05b_c_d.jpg',
      after: 'https://live.staticflickr.com/65535/54408668740_7465ce5ee8_c_d.jpg',
      story: 'Natural Brow Restoration',
      subtitle: 'Gentle enhancement for sparse brows',
      technique: 'Signature Transformation',
      healingStatus: 'healed',
    },
    {
      before: 'https://live.staticflickr.com/65535/54408533403_ffd6a50432_c_d.jpg',
      after: 'https://live.staticflickr.com/65535/54408670015_5b248eb7d2_c_d.jpg',
      story: 'Balanced, Elegant Shape',
      subtitle: 'Soft correction for asymmetric brows',
      technique: 'Microshading Artistry',
      healingStatus: 'fresh',
    },
    {
      before: 'https://live.staticflickr.com/65535/54408702135_e8d00acc8f_c_d.jpg',
      after: 'https://live.staticflickr.com/65535/54408565368_8a48233c1c_c_d.jpg',
      story: 'Complete brow makeover with soft, natural definition',
      technique: 'Microshading',
      healingStatus: 'healed',
    },
  ];

  // Process steps - Fear-addressing at each stage
  const processSteps = [
    {
      number: '01',
      title: 'Free Consultation',
      duration: 'No obligation',
      description: 'Meet me. Ask every question. See my portfolio in person. We map your face and design together. Zero pressure—this is about your confidence, not my calendar.',
      fearAddressed: 'Fear: Committing too soon',
    },
    {
      number: '02',
      title: 'Design Approval',
      duration: 'You decide',
      description: 'You see the exact shape on YOUR face before any pigment. We adjust until you say "perfect." Nothing permanent happens until you\'re 100% confident.',
      fearAddressed: 'Fear: Wrong shape for my face',
    },
    {
      number: '03',
      title: 'Numbed Procedure',
      duration: '2-3 hours',
      description: 'Medical-grade numbing applied. Most clients rate pain 2-3 out of 10. Many fall asleep. I check in constantly—your comfort matters more than speed.',
      fearAddressed: 'Fear: Unbearable pain',
    },
    {
      number: '04',
      title: 'Healing Support',
      duration: 'Weeks 1-6',
      description: 'Detailed aftercare kit + guide. Text me with ANY concern during healing. I\'ll walk you through the "OMG they\'re too dark!" phase (it\'s normal, I promise).',
      fearAddressed: 'Fear: Panicking during healing',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Ink Mugi | Permanent Makeup Studio in Annandale, VA</title>
        <meta name="description" content="Ink Mugi is a permanent makeup studio in Annandale, VA specializing in natural-looking powder brows. View healed results and book a consultation." />
        <link rel="canonical" href="https://www.inkmugi.com/" />
        <meta property="og:title" content="Ombre Powder Brows Annandale VA | Ink Mugi" />
        <meta property="og:description" content="Virginia-licensed PMU artist specializing in natural ombre powder brows. Free consultation available." />
        <meta property="og:url" content="https://www.inkmugi.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://live.staticflickr.com/65535/54363160242_7975c4f42c_o_d.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HealthAndBeautyBusiness",
            "@id": "https://www.inkmugi.com/#business",
            "name": "Ink Mugi",
            "url": "https://www.inkmugi.com/",
            "logo": "https://www.inkmugi.com/logo.png",
            "image": "https://live.staticflickr.com/65535/54363160242_7975c4f42c_o_d.jpg",
            "telephone": "+1-571-283-8228",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "7857 Heritage Dr #330",
              "addressLocality": "Annandale",
              "addressRegion": "VA",
              "postalCode": "22003",
              "addressCountry": "US"
            },
            "priceRange": "$$$",
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Annandale, VA"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://www.inkmugi.com/#website",
            "url": "https://www.inkmugi.com/",
            "name": "Ink Mugi",
            "publisher": {
              "@id": "https://www.inkmugi.com/#business"
            }
          })}
        </script>
      </Helmet>
      
      {/* ═══════════════════════════════════════════════════════════════════════
          HERO SECTION — The Promise
          Philosophy: Less is more. One image. One emotion. One call to action.
          The viewer should feel something before they read anything.
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70 z-10" />
        
        {/* Subtle grain texture for depth */}
        <div className="absolute inset-0 z-[11] opacity-[0.03] mix-blend-overlay"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }}
        />
        
        {/* Hero image with parallax-ready positioning - using optimized image sizes */}
        <picture>
          <source 
            media="(max-width: 767px)" 
            srcSet="https://live.staticflickr.com/65535/54363160242_7975c4f42c_c_d.jpg"
          />
          <source 
            media="(min-width: 768px)" 
            srcSet="https://live.staticflickr.com/65535/54363160242_7975c4f42c_b_d.jpg"
          />
          <img
            src="https://live.staticflickr.com/65535/54363160242_7975c4f42c_b_d.jpg"
            alt="Ombre powder brows transformation by Inkmugi"
            className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-[2000ms]"
            style={{ transform: isHeroLoaded ? 'scale(1)' : 'scale(1.1)' }}
            width="1920"
            height="1080"
            fetchPriority="high"
            decoding="async"
          />
        </picture>

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
                Intentional Artistry • Northern Virginia
                <span className="w-12 h-px bg-[#E6DAD2]/50" />
              </span>
            </motion.div>

            {/* Main headline — Certainty-forward positioning */}
            <h1 className="mb-8">
              <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-cormorant font-light leading-[1.1] tracking-tight">
                Healed-First Brow Design
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-cormorant font-medium leading-[1.1] tracking-tight mt-2">
                Mapped. Approved. <span className="text-[#E6DAD2]">Predictable.</span>
              </span>
            </h1>

            {/* Supporting text — Certainty + Control positioning */}
            <motion.p 
              className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Designed for women who want <span className="text-[#E6DAD2]">natural healed results—without guesswork.</span>
              <br className="hidden sm:block" />
              We map, measure, and you approve the shape on your face before anything permanent.
            </motion.p>

            {/* CTA — Consultation-focused */}
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
                <span>Request a Consultation</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a 
                href="tel:+15712838228" 
                className="group inline-flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-300"
              >
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                  <Phone size={16} />
                </span>
                <span className="text-sm tracking-wide">Call us at (571) 283-8228</span>
              </a>
            </motion.div>

            {/* Trust indicators — Proof-based positioning */}
            <motion.div 
              className="mt-16 flex flex-wrap justify-center gap-6 md:gap-10 text-sm text-white/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <span className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#E6DAD2]" />
                500+ Healed Results
              </span>
              <span className="flex items-center gap-2">
                <Shield size={14} className="text-[#E6DAD2]" />
                Design Approved Before Pigment
              </span>
              <span className="flex items-center gap-2">
                <Award size={14} className="text-[#E6DAD2]" />
                VA Licensed • Insured
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
                <CheckCircle2 size={12} className="inline-block mr-1" />
                Verified Results • Real Clients
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium text-[#2D2D2B] leading-tight mb-6">
                Healed results at <span className="italic">6+ weeks</span>
              </h2>
              <p className="text-lg text-[#2D2D2B]/70 font-light">
                Not fresh glamor shots. These are real healed results showing how brows actually look after the healing process is complete.
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
                          loading="lazy"
                          width="400"
                          height="500"
                          decoding="async"
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
                          loading="lazy"
                          width="400"
                          height="500"
                          decoding="async"
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
                      <h3 className="text-2xl md:text-3xl font-cormorant font-medium text-[#2D2D2B] leading-relaxed mb-3">
                        {transformations[activeTransformation].story}
                      </h3>
                      <p className="text-[#2D2D2B]/70 font-light text-lg mb-8">
                        {transformations[activeTransformation].subtitle}
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
                  <p className="text-sm text-[#2D2D2B]/70">Healed results documented over 3 years</p>
                </motion.div>

                {/* Decorative element */}
                <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-[#E6DAD2] rounded-2xl -z-10" />
              </div>
            </AnimatedSection>

            {/* Content column */}
            <AnimatedSection className="lg:col-span-7" delay={2}>
              <span className="inline-block text-[#2D2D2B]/50 tracking-[0.2em] text-xs uppercase mb-4">
                Your Transformational Artist
              </span>
              
              <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] leading-tight mb-8">
                I don't just create beautiful brows.<br />
                <span className="text-[#2D2D2B]/60">I create transformational experiences.</span>
              </h2>

              <div className="prose prose-lg text-[#2D2D2B]/80 mb-10 max-w-none">
                <p className="leading-relaxed">
                  I'm Mugi. Through <strong className="text-[#2D2D2B]">meticulous technique, calm presence, and intuitive design</strong>—
                  I create brows that look like they're yours. Every session is private, unrushed, and focused entirely on you.
                </p>
                <p className="leading-relaxed">
                  I specialize in working with women in transition—divorce, motherhood, career pivots, 
                  health journeys. If you're sensitive to rushed energy, you'll appreciate the quiet, intentional pace here.
                </p>
              </div>

              {/* Three Pillars */}
              <div className="grid sm:grid-cols-3 gap-6 mb-10">
                {[
                  { icon: Sparkles, title: 'Precision Artistry', desc: 'Meticulous technique refined through years of mastery.' },
                  { icon: Heart, title: 'Intentional Energy', desc: 'Every session prepared as sacred space.' },
                  { icon: Shield, title: 'Gentle Mastery', desc: 'The softest touch my clients have experienced.' },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center text-center group">
                    <div className="w-14 h-14 rounded-full bg-[#F7EDE6] flex items-center justify-center mb-4 group-hover:bg-[#E6DAD2] transition-colors duration-300">
                      <item.icon size={24} className="text-[#2D2D2B]" />
                    </div>
                    <h4 className="font-medium text-[#2D2D2B] mb-1">{item.title}</h4>
                    <p className="text-sm text-[#2D2D2B]/60">{item.desc}</p>
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
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium leading-tight mb-6">
              Every fear you have?<br />
              <span className="text-[#E6DAD2]">We've thought of it.</span>
            </h2>
            <p className="text-lg text-white/60 font-light max-w-2xl mx-auto">
              The process is designed to dissolve anxiety at every stage. Here's exactly what happens—no surprises, no pressure.
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
          STANDARDS — Non-Negotiable Principles (PATCH 7)
          Philosophy: Premium buyers want standards more than hype.
          Quiet luxury trust through clear principles.
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-[#2D2D2B]/50 tracking-[0.2em] text-xs uppercase mb-4">
              My Principles
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium text-[#2D2D2B] leading-tight mb-6">
              My Standards<br />
              <span className="text-[#2D2D2B]/60">(Non-Negotiable)</span>
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <AnimatedSection delay={2}>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Shield,
                    title: 'Healed-first philosophy',
                    desc: 'I show healed work (6+ weeks), not fresh swelling.'
                  },
                  {
                    icon: CheckCircle2,
                    title: 'Design approved before pigment',
                    desc: 'Nothing permanent happens until you approve.'
                  },
                  {
                    icon: Heart,
                    title: 'Unrushed appointments',
                    desc: 'Your comfort matters more than speed.'
                  },
                  {
                    icon: Award,
                    title: 'Natural results that age well',
                    desc: 'No trend brows that look harsh over time.'
                  },
                  {
                    icon: Sparkles,
                    title: 'Support through healing',
                    desc: 'You can message me during healing with questions.'
                  },
                ].map((standard, index) => (
                  <div key={index} className="flex gap-4 p-6 bg-[#F9F7F5] rounded-xl hover:bg-[#F7EDE6] transition-colors duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                        <standard.icon size={20} className="text-[#2D2D2B]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-[#2D2D2B] mb-2">{standard.title}</h3>
                      <p className="text-sm text-[#2D2D2B]/70">{standard.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
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

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 2}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      width="400"
                      height="256"
                      decoding="async"
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
                    
                    {service.note && (
                      <p className="text-xs text-[#2D2D2B]/50 italic mb-4 text-center">
                        {service.note}
                      </p>
                    )}
                    
                    <Link 
                      to="/booking"
                      className="w-full text-center bg-[#2D2D2B] hover:bg-[#2D2D2B]/90 text-white py-3 rounded-full font-medium transition-all duration-300 mt-auto"
                    >
                      Request Consultation
                    </Link>
                    <p className="text-xs text-[#2D2D2B]/60 text-center mt-2">
                      2-minute request → we confirm fit → schedule
                    </p>
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
                  <CheckCircle2 size={12} className="inline-block mr-1" />
                  Verified Clients • Real Experiences
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium text-[#2D2D2B] leading-tight">
                  In their <span className="italic">own</span> words
                </h2>
              </div>
              <div className="flex justify-start lg:justify-end items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {testimonials.slice(0, 4).map((t, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-white bg-white flex items-center justify-center text-xs font-medium text-[#2D2D2B]"
                        aria-label={t.name}
                        title={t.name}
                      >
                        {getInitials(t.name)}
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
                    "{testimonials[0].testimonial}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div
                      className="w-16 h-16 rounded-full bg-white flex items-center justify-center font-medium text-[#2D2D2B] border border-[#E6DAD2]/50"
                      aria-label={testimonials[0].name}
                      title={testimonials[0].name}
                    >
                      {getInitials(testimonials[0].name)}
                    </div>
                    <div>
                      <h4 className="font-medium text-[#2D2D2B]">{testimonials[0].name}</h4>
                      <p className="text-sm text-[#2D2D2B]/60">{testimonials[0].location}</p>
                      <p className="text-xs text-[#2D2D2B]/50 mt-1">Verified Client • {testimonials[0].date}</p>
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
                    <p className="text-sm text-[#2D2D2B]/70 mb-2">Rating</p>
                    <p className="text-3xl font-cormorant font-semibold text-[#2D2D2B]">
                      {testimonials[0].rating}.0<span className="text-lg">/5</span>
                    </p>
                    <p className="text-xs text-[#2D2D2B]/50 mt-1">Google Reviews</p>
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
                    "{testimonial.testimonial}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-[#E6DAD2]/30">
                    <div
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xs font-medium text-[#2D2D2B] border border-[#E6DAD2]/50"
                      aria-label={testimonial.name}
                      title={testimonial.name}
                    >
                      {getInitials(testimonial.name)}
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-[#2D2D2B]">{testimonial.name}</h4>
                      <p className="text-xs text-[#2D2D2B]/50">Verified Client • {testimonial.date}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          WHO THIS IS BEST FOR — SEO + Pre-qualification (PATCH 9)
          Philosophy: Help clients self-identify + boost local SEO
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-[#2D2D2B] mb-4">
                Who This Works Best For
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <div className="bg-[#F9F7F5] rounded-2xl p-8 md:p-10">
                <h3 className="text-xl font-medium text-[#2D2D2B] mb-6">Best for:</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2D2D2B] mt-0.5 flex-shrink-0" />
                    <span className="text-[#2D2D2B]/80"><strong>Oily skin</strong> (microshading holds better)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2D2D2B] mt-0.5 flex-shrink-0" />
                    <span className="text-[#2D2D2B]/80"><strong>Sparse/overplucked brows</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2D2D2B] mt-0.5 flex-shrink-0" />
                    <span className="text-[#2D2D2B]/80"><strong>Busy professionals</strong> who want "wake up polished"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2D2D2B] mt-0.5 flex-shrink-0" />
                    <span className="text-[#2D2D2B]/80"><strong>Previous PMU that faded patchy</strong> (case-by-case)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2D2D2B] mt-0.5 flex-shrink-0" />
                    <span className="text-[#2D2D2B]/80"><strong>Anyone who wants soft, natural healed brows</strong></span>
                  </li>
                </ul>
                
                <div className="pt-6 border-t border-[#E6DAD2]/30">
                  <p className="text-sm text-[#2D2D2B]/70">
                    <strong className="text-[#2D2D2B]">Serving:</strong> Annandale, McLean, Arlington, Great Falls, Fairfax, Alexandria, Vienna & Washington DC
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          WHO I SERVE BEST — Client Qualification Filter
          Philosophy: The right clients self-select in. The wrong clients self-select out.
          This is intentional filtering, not exclusion.
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-32 bg-[#F7EDE6] relative overflow-hidden">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-[#2D2D2B]/50 tracking-[0.2em] text-xs uppercase mb-4">
              Before You Book
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium text-[#2D2D2B] leading-tight mb-6">
              Is this <span className="italic">right</span> for you?
            </h2>
            <p className="text-lg text-[#2D2D2B]/70 font-light max-w-2xl mx-auto mb-4">
              This consultation-based service is designed for women who value predictability, healed results, and professional guidance.
            </p>
            <p className="text-lg text-[#2D2D2B]/70 font-light max-w-2xl mx-auto">
              I believe in conscious connections. My work requires deep presence, and I only take clients where I know I can deliver transformation—not just a service.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* This is for you if... */}
            <AnimatedSection delay={1}>
              <div className="bg-white rounded-2xl p-8 md:p-10 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="text-xl font-cormorant font-medium text-[#2D2D2B]">
                    Ink Mugi is for you if...
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-[#2D2D2B]/80">You value <strong>artistry and intention</strong> over speed and discounts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-[#2D2D2B]/80">You understand this is an <strong>investment in yourself</strong>, not an expense</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-[#2D2D2B]/80">You want someone who will <strong>advocate for your face</strong>, even if it means saying "no"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-[#2D2D2B]/80">You value a <strong>calm, unrushed environment</strong> and thoughtful care</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-[#2D2D2B]/80">You're seeking <strong>long-term results</strong>, not a quick cosmetic fix</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* This may not be the right fit if... */}
            <AnimatedSection delay={2}>
              <div className="bg-white rounded-2xl p-8 md:p-10 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#E6DAD2] flex items-center justify-center">
                    <Heart className="w-5 h-5 text-[#2D2D2B]/70" />
                  </div>
                  <h3 className="text-xl font-cormorant font-medium text-[#2D2D2B]">
                    We may not be the right fit if...
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 flex items-center justify-center text-[#2D2D2B]/40 flex-shrink-0">—</span>
                    <span className="text-[#2D2D2B]/60">You're primarily shopping for the <strong>lowest price</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 flex items-center justify-center text-[#2D2D2B]/40 flex-shrink-0">—</span>
                    <span className="text-[#2D2D2B]/60">You want brows exactly like <strong>someone else's photo</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 flex items-center justify-center text-[#2D2D2B]/40 flex-shrink-0">—</span>
                    <span className="text-[#2D2D2B]/60">You're looking for a <strong>quick in-and-out</strong> appointment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 flex items-center justify-center text-[#2D2D2B]/40 flex-shrink-0">—</span>
                    <span className="text-[#2D2D2B]/60">You prefer <strong>bold, Instagram-style</strong> brows</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 flex items-center justify-center text-[#2D2D2B]/40 flex-shrink-0">—</span>
                    <span className="text-[#2D2D2B]/60">You need <strong>immediate results</strong> without a healing process</span>
                  </li>
                </ul>
                <p className="mt-6 text-sm text-[#2D2D2B]/50 italic">
                  No judgment here—I'm simply not the right artist for everyone, and that's okay.
                </p>
              </div>
            </AnimatedSection>
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
                Ready to see<br />
                <span className="text-[#E6DAD2]">if we're a fit?</span>
              </h2>
              
              <p className="text-lg text-white/70 font-light max-w-xl mx-auto mb-12 leading-relaxed">
                Your consultation is a conversation, not a commitment. We'll discuss your goals, review healed results, and determine if this is right for you. No pressure. Just clarity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link 
                  to="/booking" 
                  className="group inline-flex items-center gap-3 bg-[#E6DAD2] hover:bg-white text-[#2D2D2B] px-10 py-5 rounded-full font-medium transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                >
                  <span>Request a Consultation</span>
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

              {/* Final trust signals - Premium positioning */}
              <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm text-white/60">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#E6DAD2]" />
                  Serving McLean • Great Falls • Arlington
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#E6DAD2]" />
                  Limited availability
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#E6DAD2]" />
                  By consultation only
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