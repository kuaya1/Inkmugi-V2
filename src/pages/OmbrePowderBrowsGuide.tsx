import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  ArrowRight,
  BookOpen,
  Clock,
  Droplets,
  Eye,
  Heart,
  Palette,
  Shield,
  Sparkles,
  Star,
  Sun,
  Target,
  Users,
  Zap,
  MapPin,
  CheckCircle,
  Phone,
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import CTASection from '../components/CTASection';

const OmbrePowderBrowsGuide: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* ─── Hub Content Cards ─── */
  const guideCards = [
    {
      icon: <BookOpen className="w-7 h-7 text-[#9A7B69]" />,
      title: 'The Complete Ombré Powder Brows Guide',
      description:
        'Everything you need to know — from how the technique works and what to expect during your appointment, to realistic before-and-after timelines.',
      link: '/blog/ombre-powder-brows-complete-guide',
      tag: 'Start Here',
    },
    {
      icon: <Clock className="w-7 h-7 text-[#9A7B69]" />,
      title: 'PMU Healing Timeline: Week by Week',
      description:
        'A detailed walkthrough of every healing phase — Days 1-3 darkening, the dreaded flaking stage, the ghosting phase, and when your true color finally emerges.',
      link: '/blog/pmu-healing-timeline-week-by-week',
      tag: 'Healing',
    },
    {
      icon: <Sun className="w-7 h-7 text-[#9A7B69]" />,
      title: 'Ombré Brows for Dark & Melanin-Rich Skin',
      description:
        'Why melanocyte density matters, how to avoid post-inflammatory hyperpigmentation, and the machine-speed adjustments that protect deeper complexions.',
      link: '/blog/ombre-brows-dark-skin-guide',
      tag: 'Skin Science',
    },
    {
      icon: <Droplets className="w-7 h-7 text-[#9A7B69]" />,
      title: 'Ombré Brows for Oily Skin',
      description:
        'Why powder brows outperform microblading on oily skin types, retention strategies, and how sebum production affects pigment longevity.',
      link: '/blog/ombre-brows-oily-skin-guide',
      tag: 'Oily Skin',
    },
    {
      icon: <Target className="w-7 h-7 text-[#9A7B69]" />,
      title: 'Nano Brows vs. Microblading: Full Comparison',
      description:
        'An honest comparison of techniques — hair strokes vs. powder fill, longevity differences, skin-type suitability, and which delivers the best ROI.',
      link: '/blog/nano-brows-vs-microblading-comparison',
      tag: 'Compare',
    },
    {
      icon: <Shield className="w-7 h-7 text-[#9A7B69]" />,
      title: 'How to Fix Botched Microblading',
      description:
        'Correction options when previous work has gone wrong — color correction theory, saline removal, and how ombré powder brows can restore natural beauty.',
      link: '/blog/fix-botched-microblading-guide',
      tag: 'Correction',
    },
    {
      icon: <Palette className="w-7 h-7 text-[#9A7B69]" />,
      title: 'PMU Pigment Science & Quality',
      description:
        'Understanding pigment formulations, why cheap pigments turn blue or grey, organic vs. inorganic bases, and what medical-grade really means.',
      link: '/blog/pmu-pigment-science-quality-importance',
      tag: 'Pigment',
    },
    {
      icon: <Heart className="w-7 h-7 text-[#9A7B69]" />,
      title: 'Aftercare Guide: Protect Your Investment',
      description:
        'The complete post-procedure protocol — what to avoid, how to cleanse, when to moisturize, and the habits that maximize pigment retention.',
      link: '/aftercare-guide',
      tag: 'Aftercare',
    },
  ];

  /* ─── Why Powder Brows Section ─── */
  const advantages = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Suits All Skin Types',
      description: 'Unlike microblading, powder brows work beautifully on oily, mature, and sensitive skin.',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Lasts 2–4 Years',
      description: 'Superior pigment retention compared to hair-stroke techniques, with graceful fading.',
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Natural Soft-Makeup Look',
      description: 'Mimics the appearance of perfectly applied brow powder — never blocky or tattooed.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Less Trauma to Skin',
      description: 'Stippling technique causes minimal scarring risk versus blade-based methods.',
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Waterproof & Smudge-Proof',
      description: 'Gym, pool, humid Virginia summers — your brows stay flawless.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Faster Healing',
      description: 'Most clients see their true color emerge within 4–6 weeks with minimal downtime.',
    },
  ];

  /* ─── Service Locations ─── */
  const locations = [
    { name: 'Annandale, VA (Studio)', link: '/licensed-pmu-artist-annandale', primary: true },
    { name: 'Reston, VA', link: '/ombre-brows-reston-va', primary: false },
    { name: 'Manassas, VA', link: '/ombre-brows-manassas-va', primary: false },
    { name: 'Woodbridge, VA', link: '/ombre-brows-woodbridge-va', primary: false },
    { name: 'Arlington, VA', link: '/ombre-brows-arlington-va', primary: false },
    { name: 'Fairfax, VA', link: '/ombre-brows-fairfax-va', primary: false },
    { name: 'McLean, VA', link: '/ombre-brows-mclean-va', primary: false },
    { name: 'Alexandria, VA', link: '/ombre-brows-alexandria-va', primary: false },
  ];

  /* ─── FAQ ─── */
  const faqs = [
    {
      q: 'What is the difference between ombré brows and powder brows?',
      a: 'They refer to the same technique. "Ombré brows" emphasizes the gradient (lighter at the front, darker at the tail), while "powder brows" describes the soft, filled-in finish. At Ink Mugi, we use both terms interchangeably because our signature method delivers the gradient shading that defines the ombré look.',
    },
    {
      q: 'How long do ombré powder brows last?',
      a: 'Typically 2–4 years, depending on skin type, lifestyle, and aftercare. Oily skin types may see faster fading (18–24 months), while drier skin types can retain pigment for 3–4+ years. A perfecting session at 6–8 weeks optimizes longevity.',
    },
    {
      q: 'Are ombré powder brows suitable for oily skin?',
      a: 'Yes — powder brows are the best PMU technique for oily skin. The stippling method deposits pigment below the surface without creating cuts like microblading, which means pigment holds better even with higher sebum production.',
    },
    {
      q: 'How painful is the procedure?',
      a: 'Most clients rate discomfort at 2–3 out of 10. We apply professional-grade topical numbing before and during the procedure. Many clients describe the sensation as a light vibration rather than pain.',
    },
    {
      q: 'Can ombré powder brows fix bad microblading?',
      a: 'In most cases, yes. Ombré powder brows are one of the most effective correction techniques for old microblading that has faded to grey, turned patchy, or developed an unnatural shape. A consultation determines the best correction approach.',
    },
    {
      q: 'What does the healing process look like?',
      a: 'Days 1–3: brows appear 30–40% darker than the final result. Days 4–7: light flaking begins. Days 7–14: the "ghosting phase" where color looks very light. Weeks 4–6: true color gradually emerges. A perfecting session at 6–8 weeks finalizes the result.',
    },
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Ombré Powder Brows Guide – Healing, Skin Types, Results & Expert Advice | Ink Mugi',
    description:
      'Your complete knowledge hub for ombré powder brows. Explore healing timelines, skin-type guidance, correction options, pigment science, and expert aftercare advice from Ink Mugi in Northern Virginia.',
    author: { '@type': 'Person', name: 'Yuliya' },
    publisher: {
      '@type': 'Organization',
      name: 'Ink Mugi',
      url: 'https://www.inkmugi.com',
      logo: { '@type': 'ImageObject', url: 'https://www.inkmugi.com/android-chrome-512x512.png' },
    },
    datePublished: '2026-03-09',
    dateModified: '2026-03-09',
    mainEntityOfPage: 'https://www.inkmugi.com/ombre-powder-brows-guide',
    image: 'https://www.inkmugi.com/images/ombre-powder-brows-guide-hero.jpg',
    wordCount: 3200,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.inkmugi.com/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.inkmugi.com/blog' },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Ombré Powder Brows Guide',
        item: 'https://www.inkmugi.com/ombre-powder-brows-guide',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <SEO
        title="Ombré Powder Brows Guide – Healing, Results & Expert Advice | Ink Mugi"
        description="Your complete ombré powder brows knowledge hub. Explore healing timelines, skin-type suitability, pigment science, correction options, and expert aftercare advice from Ink Mugi in Northern Virginia."
        canonical="https://www.inkmugi.com/ombre-powder-brows-guide"
        schema={[articleSchema, breadcrumbSchema, faqSchema]}
      />

      {/* ─── Hero Section ─── */}
      <section className="relative bg-gradient-to-b from-[#F0E4D8] via-[#F7EDE6] to-[#F9F7F5] pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center justify-center gap-2 text-sm text-[#2D2D2B]/60">
                <li>
                  <Link to="/" className="hover:text-[#2D2D2B] transition-colors">Home</Link>
                </li>
                <li>/</li>
                <li>
                  <Link to="/blog" className="hover:text-[#2D2D2B] transition-colors">Blog</Link>
                </li>
                <li>/</li>
                <li className="text-[#2D2D2B] font-medium">Ombré Powder Brows Guide</li>
              </ol>
            </nav>

            <span className="inline-block bg-[#9A7B69]/10 text-[#9A7B69] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
              Knowledge Hub
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D2D2B] mb-6 font-cormorant leading-tight">
              The Complete Guide to<br />
              <span className="text-[#9A7B69]">Ombré Powder Brows</span>
            </h1>

            <p className="text-lg md:text-xl text-[#2D2D2B]/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              Everything you need to know — healing stages, skin-type suitability, pigment science, correction
              options, and expert aftercare — curated by Yuliya at Ink Mugi.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center gap-2 bg-[#2D2D2B] text-white px-8 py-3.5 rounded-full font-medium hover:bg-[#2D2D2B]/90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Schedule a Consultation
              </Link>
              <a
                href="#guides"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#2D2D2B] text-[#2D2D2B] px-8 py-3.5 rounded-full font-medium hover:bg-[#2D2D2B] hover:text-white transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                Explore Guides
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Why Ombré Powder Brows? ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2B] mb-4 font-cormorant">
                Why Ombré Powder Brows?
              </h2>
              <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
                The fastest-growing PMU technique in Northern Virginia — and for good reason. Here's why ombré
                powder brows have become the gold standard for semi-permanent brow enhancement.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.08}>
                <div className="bg-[#F9F7F5] rounded-2xl p-6 h-full border border-[#E6DAD2]/40 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[#E6DAD2]/50 rounded-xl flex items-center justify-center text-[#9A7B69] mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[#2D2D2B] mb-2 font-cormorant">{item.title}</h3>
                  <p className="text-sm text-[#2D2D2B]/70 leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Guide Cards Grid ─── */}
      <section id="guides" className="py-20 bg-[#F9F7F5]">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2B] mb-4 font-cormorant">
                Explore Our Ombré Powder Brows Guides
              </h2>
              <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
                Dive into expert-written resources covering every aspect of the ombré powder brows journey — from
                your first consultation to long-term maintenance.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {guideCards.map((card, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.06}>
                <Link
                  to={card.link}
                  className="group block bg-white rounded-2xl p-6 md:p-8 border border-[#E6DAD2]/40 hover:shadow-xl hover:border-[#9A7B69]/30 transition-all h-full"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#F0E4D8]/60 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#E6DAD2] transition-colors">
                      {card.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold tracking-widest uppercase text-[#9A7B69] bg-[#9A7B69]/10 px-2.5 py-0.5 rounded-full">
                          {card.tag}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-[#2D2D2B] mb-2 font-cormorant group-hover:text-[#9A7B69] transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-sm text-[#2D2D2B]/65 leading-relaxed">{card.description}</p>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-[#9A7B69] mt-4 group-hover:gap-2 transition-all">
                        Read guide <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Quick-Answer Section ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2B] mb-4 font-cormorant">
                Quick Answers: Ombré Powder Brows FAQ
              </h2>
              <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
                The most common questions we hear from clients considering ombré powder brows.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.06}>
                <details className="group bg-[#F9F7F5] rounded-xl border border-[#E6DAD2]/40 overflow-hidden">
                  <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-[#2D2D2B] font-medium hover:bg-[#F0E4D8]/30 transition-colors">
                    <span className="text-left pr-4">{faq.q}</span>
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#E6DAD2]/60 text-[#2D2D2B] text-sm font-bold group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-5 text-sm text-[#2D2D2B]/75 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Service Locations ─── */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="max-w-5xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2B] mb-4 font-cormorant">
                Ombré Powder Brows Near You
              </h2>
              <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
                Ink Mugi's licensed PMU studio is located in Annandale, Virginia, serving clients across the
                entire Northern Virginia and Washington, D.C. metro area.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {locations.map((loc, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.05}>
                <Link
                  to={loc.link}
                  className={`group flex items-center gap-3 rounded-xl px-5 py-4 border transition-all ${
                    loc.primary
                      ? 'bg-[#2D2D2B] text-white border-transparent hover:bg-[#2D2D2B]/90'
                      : 'bg-white text-[#2D2D2B] border-[#E6DAD2]/50 hover:border-[#9A7B69]/40 hover:shadow-md'
                  }`}
                >
                  <MapPin className={`w-4 h-4 flex-shrink-0 ${loc.primary ? 'text-[#E6DAD2]' : 'text-[#9A7B69]'}`} />
                  <span className="text-sm font-medium">{loc.name}</span>
                  <ArrowRight className={`w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity ${loc.primary ? 'text-white' : 'text-[#9A7B69]'}`} />
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Related Services ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2B] mb-4 font-cormorant">
                Related PMU Services
              </h2>
              <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
                Explore Ink Mugi's full range of permanent makeup solutions.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Signature Ombré Brows',
                desc: 'Our flagship service — custom gradient powder brows tailored to your face shape and skin tone.',
                link: '/signature-ombre-brows',
                icon: <Sparkles className="w-6 h-6" />,
              },
              {
                title: 'Microshading Artistry',
                desc: 'Hand-tool pixelated powder for an ultra-soft, barely-there brow finish.',
                link: '/microshading-artistry',
                icon: <Palette className="w-6 h-6" />,
              },
              {
                title: 'PMU Correction & Restoration',
                desc: 'Expert correction for old microblading, faded PMU, or color shifts — we restore confidence.',
                link: '/pmu-correction-restoration',
                icon: <Shield className="w-6 h-6" />,
              },
            ].map((svc, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <Link
                  to={svc.link}
                  className="group block bg-[#F9F7F5] rounded-2xl p-6 border border-[#E6DAD2]/40 hover:shadow-lg hover:border-[#9A7B69]/30 transition-all h-full"
                >
                  <div className="w-11 h-11 bg-[#E6DAD2]/50 rounded-xl flex items-center justify-center text-[#9A7B69] mb-4 group-hover:bg-[#E6DAD2] transition-colors">
                    {svc.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[#2D2D2B] mb-2 font-cormorant group-hover:text-[#9A7B69] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-[#2D2D2B]/65 leading-relaxed mb-4">{svc.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[#9A7B69] group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Trust Bar ─── */}
      <section className="py-14 bg-[#F0E4D8]/40">
        <div className="max-w-5xl mx-auto px-4">
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm text-[#2D2D2B]/70">
              {[
                'Virginia Licensed PMU Artist',
                'Bloodborne Pathogen Certified',
                '600+ Successful Procedures',
                '4.9★ Google Rating',
                'Medical-Grade Pigments Only',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <CTASection />
    </>
  );
};

export default OmbrePowderBrowsGuide;
