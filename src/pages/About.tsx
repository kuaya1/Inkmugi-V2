import React, { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import {
  ArrowDown,
  ArrowRight,
  Award,
  BarChart3,
  CheckCircle2,
  Droplets,
  Eye,
  Shield,
} from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const About: React.FC = () => {
  const [isHeroLoaded, setIsHeroLoaded] = useState(false);

  useEffect(() => {
    setIsHeroLoaded(true);
  }, []);

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://inkmugi.com/#mugi',
    name: 'Mugi',
    jobTitle: 'Licensed Permanent Cosmetic Tattooer',
    description:
      'Virginia-licensed permanent makeup artist in Annandale, VA specializing in ombre powder brows with 523+ documented procedures, healed-first standards, and a 0.19% complication rate.',
    image: 'https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg',
    url: 'https://inkmugi.com/about',
    worksFor: {
      '@id': 'https://inkmugi.com/#business',
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'license',
        name: 'Virginia Permanent Cosmetic Tattooer License',
        identifier: '1231002471',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Virginia Board for Barbers and Cosmetology',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: 'Bloodborne Pathogens Certification',
        recognizedBy: {
          '@type': 'Organization',
          name: 'OSHA',
        },
      },
    ],
    knowsAbout: [
      'Ombre Powder Brows',
      'Microshading',
      'Permanent Makeup Safety Protocols',
      'PMU Healing Process',
      'Oily Skin PMU Techniques',
      'Korean PMU Techniques',
      'Color Theory for Permanent Makeup',
      'Skin Analysis for PMU',
      'PMU Aftercare',
      'Humid Climate PMU Performance',
    ],
    sameAs: ['https://www.instagram.com/browsby.mugi/'],
  };

  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    '@id': 'https://inkmugi.com/#business',
    name: 'Ink Mugi',
    url: 'https://inkmugi.com/',
    logo: 'https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg',
    image: 'https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg',
    telephone: '+1-571-283-8228',
    founder: {
      '@id': 'https://inkmugi.com/#mugi',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '7857 Heritage Dr #330',
      addressLocality: 'Annandale',
      addressRegion: 'VA',
      postalCode: '22003',
      addressCountry: 'US',
    },
    priceRange: '$$$',
    areaServed: [
      { '@type': 'City', name: 'Annandale', containedInPlace: { '@type': 'State', name: 'Virginia' } },
      { '@type': 'City', name: 'Arlington', containedInPlace: { '@type': 'State', name: 'Virginia' } },
      { '@type': 'City', name: 'Alexandria', containedInPlace: { '@type': 'State', name: 'Virginia' } },
      { '@type': 'City', name: 'Fairfax', containedInPlace: { '@type': 'State', name: 'Virginia' } },
      { '@type': 'City', name: 'Washington', containedInPlace: { '@type': 'State', name: 'District of Columbia' } },
    ],
    knowsAbout: [
      'Ombre Powder Brows',
      'Microshading',
      'Permanent Makeup',
      'PMU Safety Protocols',
      'Cosmetic Tattooing',
    ],
  };

  const authorityLines = [
    'Most mistakes in PMU happen before the procedure begins.',
    'Good brows do not announce themselves.',
    'Restraint is what separates natural from noticeable.',
  ];

  const standards = [
    {
      icon: Eye,
      title: 'Assessment Before Approval',
      description:
        'Skin type, brow history, prior PMU, healing tendencies, and medical considerations are reviewed before a treatment plan is approved.',
    },
    {
      icon: Award,
      title: 'Mapping Before Pigment',
      description:
        'Shape is built to facial structure and reviewed on the face first. Nothing permanent begins until the design makes sense in proportion and in motion.',
    },
    {
      icon: Shield,
      title: 'Single-Use Sterile Setup',
      description:
        'Every client receives single-use, individually packaged needles and cartridges. Surfaces are disinfected with EPA-registered products and sterile-field discipline is maintained throughout the procedure.',
    },
    {
      icon: Droplets,
      title: 'Pigment Chosen for Healing',
      description:
        'Pigment is selected for undertone, skin behavior, and healed stability. Vegan, gamma-ray sterilized, hypoallergenic pigments are used from certified suppliers.',
    },
    {
      icon: BarChart3,
      title: 'Healed-First Review',
      description:
        'Fresh brows are not treated as proof. Results are judged after healing because that is the version the client actually lives with.',
    },
  ];

  const proofPoints = [
    {
      title: '523+ documented procedures',
      description:
        'Enough hands-on work to recognize repeat patterns in retention, oily skin behavior, undertone shift, prior microblading, and when a case should be redirected.',
      icon: BarChart3,
    },
    {
      title: '0.19% complication rate',
      description:
        'Low risk does not mean no risk. It means outcomes are tracked, reviewed, and reduced through screening, sterile protocol, conservative technique, and follow-up.',
      icon: Shield,
    },
    {
      title: 'Virginia licensed',
      description:
        'Permanent Cosmetic Tattooer License #1231002471, with bloodborne pathogens training and professional liability coverage maintained as part of studio standards.',
      icon: Award,
    },
    {
      title: 'Healed results over volume',
      description:
        'Ink Mugi is not structured as a volume-based PMU studio. The standard is selectivity, controlled pacing, and outcomes that still make sense after healing.',
      icon: Eye,
    },
  ];

  const refinementStages = [
    {
      label: 'Training',
      title: 'Foundation in technique and safety',
      description:
        'Initial training covered Korean PMU methods, color theory, skin analysis, and medical-grade safety protocol. Virginia licensure formalized the baseline requirement: work must be technically sound and legally compliant before it is aesthetic.',
    },
    {
      label: 'Repetition',
      title: 'Judgment built through pattern recognition',
      description:
        'Over hundreds of procedures, the same questions become easier to answer: which fronts will heal too dense, which undertones will shift, which skin will retain softly, and which cases should be declined or corrected instead of pushed through.',
    },
    {
      label: 'Current Standard',
      title: 'Selective, healed-result-focused work',
      description:
        'Today the process is built for Northern Virginia clients who research carefully and expect the work to hold up in ordinary life, not only in fresh photos. The emphasis is long-term coherence, not fast turnover.',
    },
  ];

  return (
    <>
      <SEO
        title="About Mugi | Licensed Permanent Makeup Artist in Annandale, VA"
        description="Mugi is a Virginia-licensed permanent makeup artist in Annandale, VA with 523+ documented procedures, a 0.19% complication rate, healed-first standards, and a disciplined ombre powder brow process."
        path="/about"
        ogType="profile"
        keywords="Mugi permanent makeup artist, ombre powder brows Annandale VA, licensed PMU artist Virginia, permanent makeup Northern Virginia, healed-first PMU artist, Ink Mugi about"
      >
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://inkmugi.com' },
              { '@type': 'ListItem', position: 2, name: 'About', item: 'https://inkmugi.com/about' },
            ],
          })}
        </script>
      </SEO>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/70 z-10" />
        <div
          className="absolute inset-0 z-[11] opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
          }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-[2000ms]"
          style={{
            backgroundImage: "url('https://live.staticflickr.com/65535/54366426370_64dd9b761b_k_d.jpg')",
            backgroundPosition: 'center 20%',
            transform: isHeroLoaded ? 'scale(1)' : 'scale(1.1)',
          }}
        />

        <div className="container-custom relative z-20 text-white pt-20">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: isHeroLoaded ? 1 : 0, y: isHeroLoaded ? 0 : 40 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <motion.div
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-3 text-[#E6DAD2]/90 tracking-[0.3em] text-xs uppercase font-light">
                <span className="w-12 h-px bg-[#E6DAD2]/50" />
                Founder Standards
                <span className="w-12 h-px bg-[#E6DAD2]/50" />
              </span>
            </motion.div>

            <h1 className="mb-8 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-cormorant font-medium leading-[1.06] tracking-tight">
              The practitioner behind Ink Mugi.
            </h1>

            <motion.p
              className="text-lg md:text-xl text-white/80 font-light max-w-4xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              I am a Virginia-licensed permanent cosmetic tattooer in Annandale, VA. After 523+ documented procedures, the work is less about style and more about judgment: knowing when to proceed, when to stay conservative, and when to say no because the healed result will matter more than the booking.
            </motion.p>

            <motion.div
              className="grid gap-4 md:grid-cols-3 max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              {authorityLines.map((line) => (
                <div key={line} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5 text-sm md:text-base text-white/88 leading-relaxed">
                  {line}
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-8 text-sm text-white/60 mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              <span className="flex items-center gap-2">
                <Shield size={14} className="text-[#E6DAD2]" />
                VA Licensed #1231002471
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#E6DAD2]" />
                523+ Documented Procedures
              </span>
              <span className="flex items-center gap-2">
                <Award size={14} className="text-[#E6DAD2]" />
                0.19% Documented Complication Rate
              </span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 2, duration: 0.5 },
            y: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
          }}
        >
          <ArrowDown size={24} className="text-white/50" />
        </motion.div>
      </section>

      <section className="py-24 bg-[#F9F7F5] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-[#E6DAD2]/30 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <AnimatedSection className="lg:col-span-5">
              <div className="relative">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg"
                    alt="Mugi - PMU artist at work"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                <motion.div
                  className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 max-w-[240px]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#E6DAD2] flex items-center justify-center">
                      <Award size={20} className="text-[#2D2D2B]" />
                    </div>
                    <span className="text-3xl font-cormorant font-semibold text-[#2D2D2B]">523+</span>
                  </div>
                  <p className="text-sm text-[#2D2D2B]/70">Documented procedures informing current standards</p>
                </motion.div>

                <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-[#E6DAD2] rounded-2xl -z-10" />
              </div>
            </AnimatedSection>

            <AnimatedSection className="lg:col-span-7" delay={0.2}>
              <span className="inline-block text-[#2D2D2B]/50 tracking-[0.2em] text-xs uppercase mb-4">
                Founder Narrative
              </span>
              <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] leading-tight mb-8">
                Experience changes what gets noticed.
              </h2>

              <div className="space-y-5 text-[#2D2D2B]/78 leading-relaxed">
                <p>
                  Early in PMU, many artists focus on shape and surface beauty. Over time, different questions become more important: how the front will soften, how the undertone will settle, whether the skin can tolerate more density, whether prior work has already narrowed the margin for error, and whether the client is a strong candidate at all.
                </p>
                <p>
                  That is the difference hundreds of procedures create. Pattern recognition becomes sharper. Restraint becomes more valuable. A good result is no longer judged by how impressive it looks fresh, but by how balanced it looks after healing and how quietly it fits the face months later.
                </p>
                <p>
                  Most clients who book here are Northern Virginia professionals who have already spent time comparing healed results, safety standards, and corrective work. They are not looking for more brow. They are looking for a process that is disciplined enough to trust.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/gallery"
                  className="group inline-flex items-center gap-3 bg-[#2D2D2B] hover:bg-[#2D2D2B]/90 text-white px-8 py-4 rounded-full font-medium transition-all duration-300"
                >
                  <span>Review Healed Results</span>
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/authority"
                  className="inline-flex items-center gap-2 text-[#2D2D2B] font-medium hover:gap-3 transition-all duration-300 px-4 py-4"
                >
                  <span>Read the Authority Standards</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#2D2D2B] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />

        <div className="container-custom relative">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-[#E6DAD2]/70 tracking-[0.2em] text-xs uppercase mb-4">
              Standards
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium leading-tight mb-6">
              What defines the work.
            </h2>
            <p className="text-lg text-white/60 font-light max-w-2xl mx-auto">
              The studio is not built for speed, volume, or dramatic fresh results. It is built for selectivity, control, and brows that hold up after healing.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">
            {standards.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.08}>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-7 border border-white/10 hover:bg-white/10 hover:border-[#E6DAD2]/30 transition-all duration-500 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-xl bg-[#E6DAD2]/20 flex items-center justify-center mb-5">
                    <item.icon size={26} className="text-[#E6DAD2]" />
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-white">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed flex-grow">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-[#F7EDE6] rounded-full filter blur-3xl opacity-50" />

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <AnimatedSection className="lg:col-span-5">
              <span className="inline-block text-[#2D2D2B]/50 tracking-[0.2em] text-xs uppercase mb-4">
                Operational Proof
              </span>
              <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] leading-tight mb-8">
                Why the trust signals matter.
              </h2>
              <div className="space-y-5 text-[#2D2D2B]/75 leading-relaxed">
                <p>
                  Data on this page is not meant to decorate the brand. It exists because operational standards can be tracked. 523+ procedures means enough real cases to see recurring patterns, not just enough appointments to claim experience.
                </p>
                <p>
                  The 0.19% complication rate is useful only because it is tied to screening, sterile setup, conservative technique, and follow-up. It does not mean zero risk. It means risk is managed deliberately instead of being left to luck.
                </p>
                <p>
                  Licensing, single-use components, bloodborne-pathogen compliance, and pigment standards should not be treated as optional trust add-ons. In permanent makeup, they are part of the work itself.
                </p>
              </div>
            </AnimatedSection>

            <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">
              {proofPoints.map((item, index) => (
                <AnimatedSection key={item.title} delay={index * 0.08}>
                  <div className="bg-[#F9F7F5] rounded-2xl p-7 border border-[#E6DAD2]/25 h-full">
                    <div className="w-12 h-12 rounded-xl bg-[#E6DAD2] flex items-center justify-center mb-5">
                      <item.icon size={22} className="text-[#2D2D2B]" />
                    </div>
                    <h3 className="text-2xl font-cormorant font-medium text-[#2D2D2B] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[#2D2D2B]/68 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F9F7F5] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-[#E6DAD2]/40 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

        <div className="container-custom relative">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-[#2D2D2B]/50 tracking-[0.2em] text-xs uppercase mb-4">
              Refinement
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium text-[#2D2D2B] leading-tight mb-6">
              How the judgment was built.
            </h2>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto space-y-6">
            {refinementStages.map((item, index) => (
              <AnimatedSection key={item.label} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#E6DAD2]/20">
                  <span className="inline-block text-[#2D2D2B]/45 text-sm tracking-wide mb-2">{item.label}</span>
                  <h3 className="text-2xl md:text-3xl font-cormorant font-medium text-[#2D2D2B] mb-4">{item.title}</h3>
                  <p className="text-[#2D2D2B]/72 leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#2D2D2B] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://live.staticflickr.com/65535/54363160242_7975c4f42c_o_d.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2B] via-[#2D2D2B]/90 to-[#2D2D2B]/70" />

        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="inline-block text-[#E6DAD2]/70 tracking-[0.2em] text-xs uppercase mb-4">
              Consultation
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium leading-tight mb-6">
              If you book, it starts with review.
            </h2>
            <p className="text-lg text-white/70 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
              A consultation is used to review your brow history, skin behavior, prior PMU, healed expectations, and whether the right decision is to proceed, wait, or choose a different plan. That is the standard for a high-consideration procedure on the face.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/booking"
                className="group inline-flex items-center gap-3 bg-[#E6DAD2] hover:bg-white text-[#2D2D2B] px-10 py-5 rounded-full font-medium transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
              >
                <span>Request a Consultation Review</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 px-4 py-5"
              >
                <span>View Healed Results</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm text-white/60">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#E6DAD2]" />
                Annandale VA studio serving Northern Virginia professionals
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#E6DAD2]" />
                Single-use sterile protocol and healed-first review
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#E6DAD2]" />
                Selective scheduling, not volume-based booking
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default About;