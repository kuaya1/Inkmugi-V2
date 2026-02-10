import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Shield, 
  Heart, 
  Sparkles, 
  ArrowRight, 
  ArrowDown,
  Clock,
  Droplets,
  Star,
  Quote,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const About: React.FC = () => {
  const [isHeroLoaded, setIsHeroLoaded] = useState(false);

  useEffect(() => {
    setIsHeroLoaded(true);
  }, []);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.inkmugi.com/#mugi",
    "name": "Mugi",
    "jobTitle": "Licensed Permanent Cosmetic Tattooer",
    "description": "Virginia-licensed permanent makeup artist specializing in ombre powder brows with 523+ documented procedures and a 0.19% complication rate. Founder of Ink Mugi in Annandale, VA.",
    "image": "https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg",
    "url": "https://www.inkmugi.com/about",
    "worksFor": {
      "@id": "https://www.inkmugi.com/#business"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "license",
        "name": "Virginia Permanent Cosmetic Tattooer License",
        "identifier": "1231002471",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Virginia Board for Barbers and Cosmetology"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "certification",
        "name": "Bloodborne Pathogens Certification",
        "recognizedBy": {
          "@type": "Organization",
          "name": "OSHA"
        }
      }
    ],
    "knowsAbout": [
      "Ombre Powder Brows",
      "Microshading",
      "Permanent Makeup Safety Protocols",
      "PMU Healing Process",
      "Oily Skin PMU Techniques",
      "Korean PMU Techniques",
      "Color Theory for Permanent Makeup",
      "Skin Analysis for PMU",
      "PMU Aftercare",
      "Humid Climate PMU Performance"
    ],
    "sameAs": [
      "https://www.instagram.com/inkmugi"
    ]
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": "https://www.inkmugi.com/#business",
    "name": "Ink Mugi",
    "url": "https://www.inkmugi.com/",
    "logo": "https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg",
    "image": "https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg",
    "telephone": "+1-571-283-8228",
    "founder": {
      "@id": "https://www.inkmugi.com/#mugi"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7857 Heritage Dr #330",
      "addressLocality": "Annandale",
      "addressRegion": "VA",
      "postalCode": "22003",
      "addressCountry": "US"
    },
    "priceRange": "$$$",
    "areaServed": [
      { "@type": "City", "name": "Annandale", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Arlington", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Alexandria", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Fairfax", "containedInPlace": { "@type": "State", "name": "Virginia" } },
      { "@type": "City", "name": "Washington", "containedInPlace": { "@type": "State", "name": "District of Columbia" } }
    ],
    "knowsAbout": [
      "Ombre Powder Brows",
      "Microshading",
      "Permanent Makeup",
      "PMU Safety Protocols",
      "Cosmetic Tattooing"
    ]
  };

  const certifications = [
    { title: "Virginia Licensed PMU Artist", detail: "License #1231002471 • Active" },
    { title: "Bloodborne Pathogens Certified", detail: "OSHA Compliant • Annually Updated" },
    { title: "Korean PMU Techniques", detail: "Ombre & Microshading Specialist" },
    { title: "Advanced Skin Analysis", detail: "Custom pigment matching" },
  ];

  const values = [
    { 
      icon: Shield, 
      title: 'Safety First', 
      desc: 'Medical-grade sterilization protocols. Every tool, every surface, every time.',
      stat: '100%',
      statLabel: 'Sterile Procedures'
    },
    { 
      icon: Heart, 
      title: 'Healed Results Only', 
      desc: 'I show you what brows actually look like at 6+ weeks, not fresh swelling.',
      stat: '6+wks',
      statLabel: 'Healed Photos'
    },
    { 
      icon: Clock, 
      title: 'Unrushed Sessions', 
      desc: 'Your comfort matters more than speed. Sessions are calm, private, and unhurried.',
      stat: '2-3hrs',
      statLabel: 'Typical Session'
    },
    { 
      icon: Sparkles, 
      title: 'Design Approved First', 
      desc: 'You see and approve the exact shape on your face before any pigment is applied.',
      stat: '500+',
      statLabel: 'Healed Results'
    },
  ];

  const journey = [
    {
      year: '2021',
      title: 'Foundation & Training',
      description: 'Completed comprehensive PMU training including Korean techniques, color theory, and medical-grade safety protocols. Obtained Virginia state licensure.'
    },
    {
      year: '2022-2023',
      title: 'Building Experience',
      description: 'Refined technique through hundreds of procedures. Developed healed-first portfolio philosophy. Advanced training in microshading and skin analysis.'
    },
    {
      year: '2024-Present',
      title: '500+ Healed Results',
      description: 'Now serving McLean, Great Falls, and Arlington clients seeking predictable, natural results. Every procedure documented with 6+ week healed photos.'
    },
  ];

  return (
    <>
      <Helmet>
        <title>Meet Mugi | Licensed PMU Artist in Annandale, VA | Ink Mugi</title>
        <meta name="description" content="Meet Mugi — Virginia-licensed permanent makeup artist (License #1231002471) with 523+ ombre powder brow procedures. Korean technique specialist in Annandale, VA. See her story and credentials." />
        <meta name="keywords" content="Mugi PMU artist, licensed permanent makeup artist Virginia, ombre brows artist Annandale, Korean PMU technique, about Ink Mugi, PMU artist near me" />
        <link rel="canonical" href="https://www.inkmugi.com/about" />
        <meta property="og:title" content="Meet Mugi | Licensed PMU Artist | Ink Mugi" />
        <meta property="og:description" content="Virginia-licensed PMU artist with 523+ procedures. Korean technique specialist in Annandale, VA." />
        <meta property="og:url" content="https://www.inkmugi.com/about" />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Meet Mugi | Licensed PMU Artist Annandale VA" />
        <meta name="twitter:description" content="Virginia-licensed PMU artist with 523+ procedures. Korean ombre brow technique specialist." />
        <meta name="twitter:image" content="https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(businessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.inkmugi.com" },
              { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.inkmugi.com/about" }
            ]
          })}
        </script>
      </Helmet>

      {/* ═══════════════════════════════════════════════════════════════════════
          HERO SECTION — The Artist's Promise
          Philosophy: Lead with warmth. The viewer should feel connected 
          before they read anything.
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70 z-10" />
        
        {/* Subtle grain texture */}
        <div className="absolute inset-0 z-[11] opacity-[0.03] mix-blend-overlay"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }}
        />
        
        {/* Hero image */}
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-[2000ms]"
          style={{ 
            backgroundImage: "url('https://live.staticflickr.com/65535/54366426370_64dd9b761b_k_d.jpg')",
            backgroundPosition: 'center 20%',
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
            {/* Pre-title */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-3 text-[#E6DAD2]/90 tracking-[0.3em] text-xs uppercase font-light">
                <span className="w-12 h-px bg-[#E6DAD2]/50" />
                Meet Your Artist
                <span className="w-12 h-px bg-[#E6DAD2]/50" />
              </span>
            </motion.div>

            {/* Main headline */}
            <h1 className="mb-8">
              <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-cormorant font-light leading-[1.1] tracking-tight">
                Hi, I'm
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-cormorant font-medium leading-[1.1] tracking-tight mt-2">
                <span className="text-[#E6DAD2]">Mugi</span>
              </span>
            </h1>

            {/* Supporting text */}
            <motion.p 
              className="text-lg md:text-xl text-white/80 font-light max-w-xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Virginia-licensed PMU artist creating predictable,
              <br className="hidden sm:block" />
              natural healed results you can trust.
            </motion.p>

            {/* Trust indicators */}
            <motion.div 
              className="flex flex-wrap justify-center gap-8 text-sm text-white/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <span className="flex items-center gap-2">
                <Shield size={14} className="text-[#E6DAD2]" />
                VA Licensed #1231002471
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#E6DAD2]" />
                500+ Healed Results
              </span>
              <span className="flex items-center gap-2">
                <Heart size={14} className="text-[#E6DAD2]" />
                3+ Years Experience
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
          MY STORY — Connection Before Credentials
          Philosophy: People don't buy services. They buy from people they trust.
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-32 bg-[#F9F7F5] relative overflow-hidden">
        {/* Decorative gradient */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-[#E6DAD2]/30 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        
        <div className="container-custom relative">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Image column */}
            <AnimatedSection className="lg:col-span-5">
              <div className="relative">
                {/* Main image */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg" 
                    alt="Mugi - PMU Artist at work" 
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
                My Story
              </span>
              
              <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] leading-tight mb-8">
                Precision, calm, intention.<br />
                <span className="text-[#2D2D2B]/60">That's my approach.</span>
              </h2>

              <div className="prose prose-lg text-[#2D2D2B]/80 mb-10 max-w-none">
                <p className="leading-relaxed text-lg">
                  I've spent years refining my technique to create <strong className="text-[#2D2D2B]">predictable, natural results that age gracefully.</strong> 
                  Every session is private, unrushed, and designed around your comfort.
                </p>
                <p className="leading-relaxed text-lg">
                  My process starts with listening. What are your concerns? What do you need to feel confident? 
                  I map your face structure, explain why certain shapes work better than others, and you approve 
                  the design before anything permanent happens.
                </p>
                <p className="leading-relaxed text-lg">
                  <strong className="text-[#2D2D2B]">No guesswork. No surprises.</strong> Just calm, meticulous artistry 
                  and results you can trust. That's what I offer every client who sits in my chair.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/booking" 
                  className="group inline-flex items-center gap-3 bg-[#2D2D2B] hover:bg-[#2D2D2B]/90 text-white px-8 py-4 rounded-full font-medium transition-all duration-300"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link 
                  to="/gallery" 
                  className="inline-flex items-center gap-2 text-[#2D2D2B] font-medium hover:gap-3 transition-all duration-300 px-4 py-4"
                >
                  <span>View My Work</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          VALUES & STATS — What I Stand For
          Philosophy: Show, don't just tell. Numbers build trust.
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
              <CheckCircle2 size={12} className="inline-block mr-1" />
              My Standards
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium leading-tight mb-6">
              What you can <span className="italic">expect</span>
            </h2>
            <p className="text-lg text-white/60 font-light max-w-xl mx-auto">
              Clear standards for every consultation and procedure.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 2}>
                <div className="relative group h-full">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-[#E6DAD2]/30 transition-all duration-500 h-full flex flex-col">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-[#E6DAD2]/20 flex items-center justify-center mb-6 group-hover:bg-[#E6DAD2]/30 transition-colors duration-300">
                      <value.icon size={28} className="text-[#E6DAD2]" />
                    </div>
                    
                    {/* Stat */}
                    <div className="mb-4">
                      <span className="text-4xl font-cormorant font-semibold text-[#E6DAD2]">{value.stat}</span>
                      <p className="text-xs text-white/40 mt-1">{value.statLabel}</p>
                    </div>
                    
                    <h3 className="text-xl font-medium mb-3 text-white">
                      {value.title}
                    </h3>
                    
                    <p className="text-white/60 text-sm leading-relaxed flex-grow">
                      {value.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          THE JOURNEY — Story Timeline
          Philosophy: Show the path that led here. Authenticity builds trust.
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-32 bg-[#F7EDE6] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-[#E6DAD2]/40 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
        
        <div className="container-custom relative">
          <AnimatedSection className="text-center mb-20">
            <span className="inline-block text-[#2D2D2B]/50 tracking-[0.2em] text-xs uppercase mb-4">
              The Journey
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium text-[#2D2D2B] leading-tight mb-6">
              How I got <span className="italic">here</span>
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            {journey.map((item, index) => (
              <AnimatedSection key={index} delay={index * 2}>
                <div className="relative flex gap-8 mb-12 last:mb-0">
                  {/* Timeline line */}
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-[#2D2D2B] border-4 border-[#E6DAD2]" />
                    {index !== journey.length - 1 && (
                      <div className="w-0.5 h-full bg-[#2D2D2B]/20 mt-2" />
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <span className="inline-block text-[#2D2D2B]/50 text-sm tracking-wide mb-2">{item.year}</span>
                    <h3 className="text-2xl font-cormorant font-semibold text-[#2D2D2B] mb-4">{item.title}</h3>
                    <p className="text-[#2D2D2B]/70 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          CERTIFICATIONS — Trust Through Credentials
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-[#F7EDE6] rounded-full filter blur-3xl opacity-50" />
        
        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="inline-block text-[#2D2D2B]/50 tracking-[0.2em] text-xs uppercase mb-4">
                <CheckCircle2 size={12} className="inline-block mr-1" />
                Credentials
              </span>
              <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] leading-tight mb-8">
                Licensed & <span className="italic">insured</span>
              </h2>
              
              <p className="text-lg text-[#2D2D2B]/70 mb-10 leading-relaxed">
                Virginia state licensure requires ongoing education and safety compliance. I maintain active certifications 
                and stay current with medical-grade sterilization protocols.
              </p>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-4 p-4 bg-[#F9F7F5] rounded-xl hover:bg-[#F7EDE6] transition-colors duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 rounded-full bg-[#E6DAD2] flex items-center justify-center flex-shrink-0">
                      <Award size={22} className="text-[#2D2D2B]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#2D2D2B]">{cert.title}</h4>
                      <p className="text-sm text-[#2D2D2B]/60">{cert.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://live.staticflickr.com/65535/54366208951_7b5cbbc391_o_d.jpg" 
                    alt="Inkmugi Studio - Professional PMU Environment" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating quote */}
                <motion.div 
                  className="absolute -bottom-8 -left-8 bg-[#2D2D2B] text-white rounded-2xl p-6 max-w-[280px] shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Quote size={24} className="text-[#E6DAD2]/50 mb-3" />
                  <p className="text-sm text-white/90 italic leading-relaxed">
                    "Your safety is non-negotiable. Every tool, every protocol, every decision centers on keeping you protected."
                  </p>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          STUDIO — The Space
          Philosophy: Environment matters. Show the care that goes into everything.
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-32 bg-[#F9F7F5] relative overflow-hidden">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-[#2D2D2B]/50 tracking-[0.2em] text-xs uppercase mb-4">
              The Studio
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium text-[#2D2D2B] leading-tight mb-6">
              Where <span className="italic">transformation</span> happens
            </h2>
            <p className="text-lg text-[#2D2D2B]/70 font-light max-w-xl mx-auto">
              A serene, professional environment designed for your comfort and safety.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Medical-Grade Sterilization', desc: 'Hospital-level protocols for every tool and surface' },
              { icon: Heart, title: 'Private Treatment Rooms', desc: 'Your comfort and privacy are paramount' },
              { icon: Droplets, title: 'Premium Vegan Pigments', desc: 'Only the highest quality, safest ingredients' },
              { icon: Star, title: 'Calming Atmosphere', desc: 'Designed to help you relax and feel at ease' },
            ].map((feature, index) => (
              <AnimatedSection key={index} delay={index * 2}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full group">
                  <div className="w-14 h-14 rounded-xl bg-[#F7EDE6] flex items-center justify-center mb-6 group-hover:bg-[#E6DAD2] transition-colors duration-300">
                    <feature.icon size={28} className="text-[#2D2D2B]" />
                  </div>
                  <h3 className="text-xl font-medium text-[#2D2D2B] mb-3">{feature.title}</h3>
                  <p className="text-[#2D2D2B]/70 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          ARTIST MANIFESTO — The Philosophy
          Philosophy: This is the soul of the brand. Raw, personal, differentiated.
          It converts the "I'm still deciding" visitor into someone who *needs* to book.
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 lg:py-32 bg-[#2D2D2B] text-white relative overflow-hidden">
        {/* Subtle atmospheric gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D2D2B] via-[#2D2D2B] to-[#3a3835]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#E6DAD2]/5 to-transparent rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <AnimatedSection variant="fade" className="text-center mb-16">
            <span className="inline-flex items-center gap-3 text-[#E6DAD2]/70 tracking-[0.3em] text-xs uppercase font-light mb-8">
              <span className="w-12 h-px bg-[#E6DAD2]/30" />
              My Manifesto
              <span className="w-12 h-px bg-[#E6DAD2]/30" />
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-light text-white leading-tight">
              What I <span className="italic font-medium text-[#E6DAD2]">believe</span>
            </h2>
          </AnimatedSection>

          {/* Manifesto pillars */}
          <div className="max-w-4xl mx-auto">
            <AnimatedSection stagger staggerInterval={0.2}>
              {[
                {
                  number: '01',
                  title: 'Your face is the blueprint.',
                  body: 'I don\'t bring a template. I bring precision tools, years of training, and genuine curiosity about *your* face. The best brow shape already exists in your bone structure, your natural growth pattern, your proportions. My job is to reveal it — not impose something on top of it.',
                },
                {
                  number: '02',
                  title: 'Healed is the only result that matters.',
                  body: 'Fresh work flatters every artist. Healed work tells the truth. That\'s why every photo in my portfolio is taken at 6+ weeks — when the pigment has settled, the skin has healed, and the brows look exactly like they will in real life. I don\'t hide behind filters or fresh-day swelling.',
                },
                {
                  number: '03',
                  title: 'Calm is not a luxury — it\'s a prerequisite.',
                  body: 'You\'re trusting someone with your face. That deserves an environment of quiet focus — not background music you didn\'t choose, not a rotating door of clients, not an artist who\'s watching the clock. Every session is private, unrushed, and entirely about you.',
                },
                {
                  number: '04',
                  title: 'Saying "no" is part of the service.',
                  body: 'If a shape won\'t age well, I\'ll tell you. If a technique isn\'t right for your skin type, I\'ll redirect. If now isn\'t the right time — maybe you\'re on retinol, or recently sunburned, or still undecided — I\'ll ask you to wait. Your long-term confidence matters more than today\'s booking.',
                },
                {
                  number: '05',
                  title: 'Transformation is about more than brows.',
                  body: 'The women who sit in my chair are navigating something — divorce, motherhood, career change, health recovery, identity shifts. Brows are the surface. What we\'re really doing here is restoring a piece of yourself that felt lost. I never take that lightly.',
                },
              ].map((pillar) => (
                <div key={pillar.number} className="flex gap-6 md:gap-10 mb-12 last:mb-0 group">
                  <div className="flex-shrink-0 pt-1">
                    <span className="text-3xl md:text-4xl font-cormorant font-light text-[#E6DAD2]/30 group-hover:text-[#E6DAD2]/60 transition-colors duration-500">
                      {pillar.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-cormorant font-medium text-white mb-3 group-hover:text-[#E6DAD2] transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed text-[15px]">
                      {pillar.body}
                    </p>
                  </div>
                </div>
              ))}
            </AnimatedSection>
          </div>

          {/* Closing signature */}
          <AnimatedSection variant="fade" className="text-center mt-16">
            <p className="text-lg md:text-xl font-cormorant italic text-[#E6DAD2]/80 max-w-xl mx-auto">
              "Every brow I create is a quiet promise: I will advocate for your face, even when it's hard."
            </p>
            <p className="text-sm text-white/40 mt-4 tracking-wider">— Mugi</p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          CTA — The Invitation
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-32 bg-[#2D2D2B] text-white relative overflow-hidden">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://live.staticflickr.com/65535/54363160242_7975c4f42c_o_d.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2B] via-[#2D2D2B]/90 to-[#2D2D2B]/70" />
        
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-[#E6DAD2]/70 tracking-[0.2em] text-xs uppercase mb-4">
              Ready?
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium leading-tight mb-6">
              Ready to see<br />
              <span className="text-[#E6DAD2]">if we're a fit?</span>
            </h2>
            <p className="text-lg text-white/70 mb-10 font-light max-w-lg mx-auto">
              Your consultation is a conversation, not a commitment. We'll discuss your goals, review healed results, 
              and determine if this is right for you. No pressure. Just clarity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/booking" 
                className="group inline-flex items-center gap-3 bg-[#E6DAD2] hover:bg-white text-[#2D2D2B] px-10 py-5 rounded-full font-medium transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
              >
                <span>Request a Consultation</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <span className="text-white/50 flex items-center">or</span>
              <a 
                href="tel:5712838228"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300"
              >
                <span>Call (571) 283-8228</span>
              </a>
            </div>
            
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
      </section>
    </>
  );
};

export default About;