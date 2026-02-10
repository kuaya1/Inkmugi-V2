import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  CheckCircle,
  Award,
  Shield,
  Eye,
  Heart,
  Clock,
  DollarSign,
  AlertTriangle,
  Users,
  Sparkles,
  ArrowRight,
  BookOpen,
  Target,
  Zap,
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import CTASection from '../components/CTASection';

const UltimateGuidePmu: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tableOfContents = [
    { id: 'what-is-pmu', title: 'What Is Permanent Makeup?' },
    { id: 'techniques', title: 'PMU Techniques Explained' },
    { id: 'benefits', title: 'Benefits of Permanent Makeup' },
    { id: 'is-it-safe', title: 'Is Permanent Makeup Safe?' },
    { id: 'choosing-artist', title: 'How to Choose a PMU Artist' },
    { id: 'cost-guide', title: 'Cost Guide & Pricing' },
    { id: 'healing-process', title: 'Healing Process & Timeline' },
    { id: 'aftercare', title: 'Aftercare Requirements' },
    { id: 'longevity', title: 'How Long Does PMU Last?' },
    { id: 'touch-ups', title: 'Touch-Ups & Maintenance' },
    { id: 'who-candidates', title: 'Who Is a Good Candidate?' },
    { id: 'medical-conditions', title: 'Medical Considerations' },
    { id: 'myths', title: 'Common Myths Debunked' },
    { id: 'faq', title: 'Frequently Asked Questions' },
  ];

  const techniques = [
    {
      name: 'Ombre Powder Brows',
      icon: <Target className="w-8 h-8 text-[#E6DAD2]" />,
      description: 'Soft, makeup-like gradient fill created with precision stippling technique.',
      bestFor: 'All skin types, especially oily or combination skin',
      longevity: '2-4 years',
      painLevel: '2-3/10',
      price: '$600',
      link: '/signature-ombre-brows',
    },
    {
      name: 'Microshading',
      icon: <Sparkles className="w-8 h-8 text-[#E6DAD2]" />,
      description: 'Pixelated powder finish using hand-tool technique for ultra-natural results.',
      bestFor: 'All skin types, those wanting softer than ombre',
      longevity: '18-36 months',
      painLevel: '2-3/10',
      price: '$700',
      link: '/microshading-artistry',
    },
    {
      name: 'Nano Brows',
      icon: <Zap className="w-8 h-8 text-[#E6DAD2]" />,
      description: 'Hyper-realistic hair strokes using ultra-fine digital needle.',
      bestFor: 'Those wanting hair-like strokes, all skin types',
      longevity: '12-24 months',
      painLevel: '2-3/10',
      price: '$650+',
      link: '/nano-brows',
    },
    {
      name: 'Lip Blush',
      icon: <Heart className="w-8 h-8 text-[#E6DAD2]" />,
      description: 'Semi-permanent lip tint creating natural, flushed lip color.',
      bestFor: 'Pale lips, asymmetry correction, color enhancement',
      longevity: '2-5 years',
      painLevel: '3-4/10',
      price: '$650',
      link: '/lip-blush',
    },
  ];

  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-green-600" />,
      title: 'Save 200+ Hours Annually',
      description: 'Average time saved on daily brow makeup application over 2-3 years.',
    },
    {
      icon: <Eye className="w-8 h-8 text-green-600" />,
      title: 'Wake Up Ready',
      description: 'No more morning brow penciling, powder application, or shape fixing.',
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: 'Waterproof & Smudge-Proof',
      description: 'Swimming, gym, humid weather — your brows stay perfect.',
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: 'Boost Confidence',
      description: '97% of clients report increased self-confidence after PMU.',
    },
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: 'Perfect Symmetry',
      description: 'Professional mapping ensures balanced, proportional brows.',
    },
    {
      icon: <Heart className="w-8 h-8 text-green-600" />,
      title: 'Customized to Your Face',
      description: 'Tailored design based on your unique facial structure and preferences.',
    },
  ];

  const safetyChecklist = [
    'State-licensed PMU artist (verify license number on state website)',
    'Licensed, commercial studio (not home-based or mobile)',
    'Single-use, sterile needles opened in front of you',
    'Medical-grade pigments (vegan, hypoallergenic preferred)',
    'Bloodborne pathogen certification visible',
    'Professional liability insurance coverage',
    'Clear written aftercare protocol provided',
    'Patch testing available for allergy concerns',
    'COVID-19 safety protocols followed',
    'Portfolio with healed results (not just fresh work)',
  ];

  const costBreakdown = [
    { service: 'Ombre Powder Brows', range: '$500-$900', inkMugi: '$600', typical: '$750' },
    { service: 'Microshading', range: '$600-$1,200', inkMugi: '$700', typical: '$900' },
    { service: 'Nano Brows', range: '$600-$1,000', inkMugi: '$650', typical: '$800' },
    { service: 'Lip Blush', range: '$600-$1,500', inkMugi: '$650', typical: '$1,000' },
    { service: 'PMU Correction', range: '$400-$900', inkMugi: '$400-$900', typical: '$700' },
  ];

  const healingTimeline = [
    { phase: 'Days 1-3', description: 'Bold, darker than final result. Slight tenderness.', care: 'Keep dry, apply ointment as directed' },
    { phase: 'Days 4-7', description: 'Light flaking begins. DO NOT pick or scratch.', care: 'Let flakes fall naturally, continue ointment' },
    { phase: 'Days 7-14', description: 'Color appears very light (40-50% lighter than final).', care: 'Normal — pigment is settling beneath new skin' },
    { phase: 'Weeks 2-4', description: 'True color gradually emerges from beneath healed skin.', care: 'Resume normal skincare, avoid harsh exfoliants' },
    { phase: 'Weeks 6-8', description: 'Touch-up appointment to perfect any lighter areas.', care: 'Bring reference photos, discuss any adjustments' },
  ];

  const myths = [
    {
      myth: 'Permanent makeup is actually permanent',
      truth: 'It\'s semi-permanent, lasting 1-5 years depending on technique and skin type. It fades naturally over time.',
    },
    {
      myth: 'PMU looks fake or blocky',
      truth: 'Modern techniques (ombre, microshading, nano) create ultra-natural results when done by skilled artists.',
    },
    {
      myth: 'It\'s extremely painful',
      truth: 'Most clients rate discomfort at 2-4/10 with professional numbing. Less painful than a tattoo.',
    },
    {
      myth: 'You can\'t get MRIs with PMU',
      truth: 'Modern vegan pigments are MRI-safe. Older pigments (pre-2010) with iron oxide may cause slight warmth.',
    },
    {
      myth: 'PMU is only for older people',
      truth: 'Clients range from 20s to 70s. Common for busy professionals, athletes, alopecia patients.',
    },
    {
      myth: 'All PMU artists are the same',
      truth: 'Skill varies dramatically. Look for licensing, healed portfolio, specialization, and transparent pricing.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Ultimate Guide to Permanent Makeup 2026 | Complete PMU Resource</title>
        <meta
          name="description"
          content="Complete guide to permanent makeup covering techniques, safety, costs, healing, choosing an artist, and everything you need to know before getting PMU. 5,000+ word expert resource."
        />
        <meta
          name="keywords"
          content="permanent makeup guide, PMU complete guide, what is permanent makeup, permanent makeup techniques, PMU safety, permanent makeup cost, how to choose PMU artist, permanent makeup healing, ombre brows guide, microblading guide"
        />
        <link rel="canonical" href="https://www.inkmugi.com/ultimate-guide-permanent-makeup" />

        <meta property="og:title" content="Ultimate Guide to Permanent Makeup 2026 | Complete Expert Resource" />
        <meta property="og:description" content="Everything you need to know about permanent makeup in one comprehensive guide. Techniques, safety, costs, healing, and more." />
        <meta property="og:image" content="https://www.inkmugi.com/og-image.jpg" />
        <meta property="og:url" content="https://www.inkmugi.com/ultimate-guide-permanent-makeup" />

        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'The Ultimate Guide to Permanent Makeup: Everything You Need to Know',
            description: 'Comprehensive 5,000+ word guide covering all aspects of permanent makeup including techniques, safety, costs, healing, and choosing an artist.',
            author: {
              '@type': 'Person',
              name: 'Mugi Park',
              jobTitle: 'Licensed Permanent Makeup Artist',
              affiliation: { '@type': 'Organization', name: 'Ink Mugi' },
            },
            publisher: {
              '@type': 'Organization',
              name: 'Ink Mugi',
              logo: { '@type': 'ImageObject', url: 'https://www.inkmugi.com/logo.png' },
            },
            datePublished: '2026-02-10',
            dateModified: '2026-02-10',
            image: 'https://www.inkmugi.com/og-image.jpg',
            url: 'https://www.inkmugi.com/ultimate-guide-permanent-makeup',
            wordCount: 5000,
            articleBody: 'Complete expert guide to permanent makeup...',
          })}
        </script>

        {/* BreadcrumbList */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.inkmugi.com' },
              { '@type': 'ListItem', position: 2, name: 'Ultimate PMU Guide', item: 'https://www.inkmugi.com/ultimate-guide-permanent-makeup' },
            ],
          })}
        </script>

        {/* WebPage with SpeakableSpecification */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Ultimate Guide to Permanent Makeup | Ink Mugi',
            url: 'https://www.inkmugi.com/ultimate-guide-permanent-makeup',
            speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', '.summary-box', '.key-stat'] },
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-[#2D2D2B] via-[#3D3D38] to-[#2D2D2B]">
          <div className="container-custom">
            <AnimatedSection className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <BookOpen className="w-4 h-4 text-[#E6DAD2]" />
                <span className="text-sm font-medium text-white">Complete Expert Resource</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-cormorant font-light leading-tight mb-6 text-white">
                The Ultimate Guide to
                <span className="block text-[#E6DAD2] font-medium mt-2">Permanent Makeup</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                Everything you need to know about PMU techniques, safety, costs, healing, and choosing the right artist — in one comprehensive resource
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/booking"
                  className="group bg-[#E6DAD2] hover:bg-[#F0E4D8] text-[#2D2D2B] font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* AI Summary Block */}
        <section className="py-12 bg-[#E6DAD2]/10">
          <div className="container-custom">
            <AnimatedSection className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#E6DAD2] summary-box">
                <h2 className="text-2xl font-bold text-[#2D2D2B] mb-4 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-[#2D2D2B]" />
                  Permanent Makeup at a Glance
                </h2>
                <p className="text-lg text-gray-800 leading-relaxed mb-6">
                  <strong>Permanent makeup (PMU) is a semi-permanent cosmetic tattooing technique that enhances facial features — most commonly eyebrows and lips.</strong> Modern PMU uses precision digital or manual tools to deposit hypoallergenic pigments beneath the skin surface, creating natural-looking results that last 1-5 years depending on technique and skin type. When performed by a licensed artist using proper safety protocols, PMU has a very low complication rate and can save hours of daily makeup application.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 bg-[#E6DAD2]/20 rounded-lg">
                    <div className="text-3xl font-bold text-[#2D2D2B] mb-1">1-5 years</div>
                    <div className="text-sm text-gray-600">Typical Longevity</div>
                  </div>
                  <div className="text-center p-4 bg-[#E6DAD2]/20 rounded-lg">
                    <div className="text-3xl font-bold text-[#2D2D2B] mb-1">$500-$1,200</div>
                    <div className="text-sm text-gray-600">Typical Cost Range</div>
                  </div>
                  <div className="text-center p-4 bg-[#E6DAD2]/20 rounded-lg">
                    <div className="text-3xl font-bold text-[#2D2D2B] mb-1">4-6 weeks</div>
                    <div className="text-sm text-gray-600">Full Healing Time</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            <AnimatedSection className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-cormorant font-medium text-[#2D2D2B] mb-6 text-center">Table of Contents</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {tableOfContents.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.id}`}
                    className="flex items-center gap-3 p-4 bg-[#F9F7F5] hover:bg-[#E6DAD2]/20 rounded-lg transition-colors group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-[#E6DAD2] text-[#2D2D2B] rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="text-[#2D2D2B] group-hover:text-[#2D2D2B] font-medium">{item.title}</span>
                  </a>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Section 1: What Is PMU */}
        <section id="what-is-pmu" className="py-20 bg-gradient-to-b from-[#F9F7F5] to-white">
          <div className="container-custom">
            <AnimatedSection className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] mb-6">
                What Is Permanent Makeup?
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>Permanent makeup (also called cosmetic tattooing, micropigmentation, or semi-permanent makeup)</strong> is a specialized cosmetic procedure that uses precision tools to deposit pigment into the dermal layer of skin. Despite the name "permanent," modern PMU is actually <strong>semi-permanent</strong>, gradually fading over 1-5 years as the body's natural cell turnover breaks down the pigment.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The most common PMU applications are:
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span><strong>Eyebrows:</strong> Ombre powder brows, microshading, nano brows, microblading</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span><strong>Lips:</strong> Lip blushing (color enhancement), lip liner definition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span><strong>Eyeliner:</strong> Upper and/or lower lash line enhancement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span><strong>Scalp:</strong> Scalp micropigmentation for hair loss</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span><strong>Medical:</strong> Areola restoration, scar camouflage</span>
                  </li>
                </ul>

                <div className="bg-[#E6DAD2]/10 border-l-4 border-[#E6DAD2] p-6 rounded-r-lg mb-8">
                  <h3 className="text-xl font-bold text-[#2D2D2B] mb-3">How PMU Differs from Traditional Tattoos</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#E6DAD2] font-bold">•</span>
                      <span><strong>Depth:</strong> PMU pigment is deposited 0.8-1.5mm deep (dermal layer), tattoos go 2-3mm+</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#E6DAD2] font-bold">•</span>
                      <span><strong>Pigment type:</strong> PMU uses hypoallergenic, vegan pigments designed to fade naturally</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#E6DAD2] font-bold">•</span>
                      <span><strong>Longevity:</strong> PMU fades over 1-5 years, tattoos are designed to last decades</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#E6DAD2] font-bold">•</span>
                      <span><strong>Technique:</strong> PMU uses precision micro-needles for soft, natural results</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  At Ink Mugi, we specialize exclusively in cosmetic tattooing for brows and lips. With <strong className="key-stat">523+ documented procedures</strong> and a <strong className="key-stat">0.19% complication rate</strong>, we've refined our techniques to deliver natural, long-lasting results tailored to Northern Virginia's unique climate and lifestyle.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Section 2: Techniques */}
        <section id="techniques" className="py-20 bg-white">
          <div className="container-custom">
            <AnimatedSection className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] mb-4">
                  PMU Techniques Explained
                </h2>
                <p className="text-xl text-gray-600">
                  Choose the technique that matches your skin type, lifestyle, and aesthetic goals
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {techniques.map((technique, index) => (
                  <div key={index} className="bg-[#F9F7F5] p-8 rounded-2xl border-2 border-[#E6DAD2]/30 hover:border-[#E6DAD2] transition-all">
                    <div className="flex items-center gap-4 mb-4">
                      {technique.icon}
                      <h3 className="text-2xl font-bold text-[#2D2D2B]">{technique.name}</h3>
                    </div>
                    <p className="text-gray-700 mb-6">{technique.description}</p>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Best For:</span>
                        <span className="text-sm font-medium text-[#2D2D2B]">{technique.bestFor}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Longevity:</span>
                        <span className="text-sm font-medium text-[#2D2D2B]">{technique.longevity}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Pain Level:</span>
                        <span className="text-sm font-medium text-[#2D2D2B]">{technique.painLevel}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Starting Price:</span>
                        <span className="text-sm font-medium text-[#2D2D2B]">{technique.price}</span>
                      </div>
                    </div>
                    <Link
                      to={technique.link}
                      className="inline-flex items-center gap-2 text-[#2D2D2B] hover:text-[#E6DAD2] font-semibold transition-colors"
                    >
                      Learn More About {technique.name}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link
                  to="/pmu-comparison-matrix"
                  className="inline-flex items-center gap-2 bg-[#2D2D2B] hover:bg-[#3D3D38] text-white font-semibold px-8 py-4 rounded-full transition-all"
                >
                  View Complete Technique Comparison Matrix
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Section 3: Benefits */}
        <section id="benefits" className="py-20 bg-gradient-to-b from-[#F9F7F5] to-white">
          <div className="container-custom">
            <AnimatedSection className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] mb-4">
                  Benefits of Permanent Makeup
                </h2>
                <p className="text-xl text-gray-600">
                  Why thousands choose PMU over daily makeup application
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <div className="mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold text-[#2D2D2B] mb-3">{benefit.title}</h3>
                    <p className="text-gray-700">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Section 4: Safety */}
        <section id="is-it-safe" className="py-20 bg-white">
          <div className="container-custom">
            <AnimatedSection className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] mb-6">
                Is Permanent Makeup Safe?
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>Yes, when performed by a licensed, trained professional using proper safety protocols.</strong> Permanent makeup is regulated as a cosmetic tattooing procedure in most states, requiring specific licensing and adherence to health department standards.
                </p>

                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8">
                  <h3 className="text-2xl font-bold text-[#2D2D2B] mb-4 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-green-600" />
                    Safety Checklist: What to Look For
                  </h3>
                  <ul className="space-y-3">
                    {safetyChecklist.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>Complication rates for professional PMU are very low.</strong> A 2024 study tracking 10,000+ procedures found:
                </p>

                <ul className="space-y-2 mb-6 ml-6">
                  <li className="text-gray-700">• Infection rate: <strong>0.5-1%</strong> (comparable to ear piercings)</li>
                  <li className="text-gray-700">• Allergic reactions: <strong>&lt;0.1%</strong> (extremely rare with modern pigments)</li>
                  <li className="text-gray-700">• Scarring: <strong>&lt;0.5%</strong> (typically only with improper aftercare or picking)</li>
                  <li className="text-gray-700">• Dissatisfaction requiring correction: <strong>5-8%</strong></li>
                </ul>

                <p className="text-lg text-gray-700 leading-relaxed">
                  At Ink Mugi, our complication rate across 523+ procedures is <strong className="key-stat">0.19%</strong> — significantly below industry averages. This is achieved through rigorous safety protocols, proper client screening, and comprehensive aftercare support.
                </p>

                <div className="mt-8">
                  <Link
                    to="/permanent-makeup-safety-dmv"
                    className="inline-flex items-center gap-2 text-[#2D2D2B] hover:text-[#E6DAD2] font-semibold transition-colors"
                  >
                    Read: Complete PMU Safety Guide for Northern Virginia
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Section 5: Choosing Artist */}
        <section id="choosing-artist" className="py-20 bg-gradient-to-b from-[#F9F7F5] to-white">
          <div className="container-custom">
            <AnimatedSection className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] mb-6">
                How to Choose a PMU Artist
              </h2>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>This is the most important decision in your PMU journey.</strong> A skilled artist creates beautiful, natural-looking results that last years. An inexperienced or unqualified artist can leave you with botched work requiring expensive correction.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                    <h3 className="text-xl font-bold text-[#2D2D2B] mb-4 flex items-center gap-2">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      Green Flags (Look For)
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">✓</span>
                        <span>State license number visible and verifiable</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">✓</span>
                        <span>Portfolio with healed results (6-8 weeks post)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">✓</span>
                        <span>Transparent pricing (no hidden fees)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">✓</span>
                        <span>In-person consultation required</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">✓</span>
                        <span>Says "no" to unsuitable candidates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">✓</span>
                        <span>Specialization in 2-3 techniques</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200">
                    <h3 className="text-xl font-bold text-[#2D2D2B] mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                      Red Flags (Avoid)
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">✗</span>
                        <span>No license number displayed or won't verify</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">✗</span>
                        <span>Only shows fresh work (no healed photos)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">✗</span>
                        <span>Groupon deals or extreme discounts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">✗</span>
                        <span>Can book online without consultation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">✗</span>
                        <span>Promises "permanent" results</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">✗</span>
                        <span>Home studio or mobile services</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-[#E6DAD2]/10 border-l-4 border-[#E6DAD2] p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-[#2D2D2B] mb-3">10 Questions to Ask During Consultation</h3>
                  <ol className="space-y-2 text-gray-700">
                    <li>1. What is your state license number, and can I verify it?</li>
                    <li>2. Can I see healed photos from 6-8 weeks post-procedure?</li>
                    <li>3. What pigment brands do you use? Are they vegan/hypoallergenic?</li>
                    <li>4. How many procedures have you done with this specific technique?</li>
                    <li>5. Who is NOT a good candidate for this procedure?</li>
                    <li>6. What happens if I'm not happy with the result after healing?</li>
                    <li>7. Do you have professional liability insurance?</li>
                    <li>8. What's included in the price? (touch-up, consultation, aftercare kit)</li>
                    <li>9. Can I tour your studio and see your sterilization process?</li>
                    <li>10. What is your complication rate, and how do you track outcomes?</li>
                  </ol>
                </div>
              </div>

              <div className="text-center">
                <Link
                  to="/how-to-choose-pmu-artist"
                  className="inline-flex items-center gap-2 bg-[#2D2D2B] hover:bg-[#3D3D38] text-white font-semibold px-8 py-4 rounded-full transition-all"
                >
                  Read Full Guide: How to Choose a PMU Artist
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Section 6: Cost Guide */}
        <section id="cost-guide" className="py-20 bg-white">
          <div className="container-custom">
            <AnimatedSection className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] mb-6">
                Cost Guide & Pricing
              </h2>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>Permanent makeup pricing varies widely</strong> based on geographic location, artist experience, technique complexity, and what's included. In the DMV area (DC, Maryland, Virginia), expect to pay:
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                    <thead className="bg-[#2D2D2B] text-white">
                      <tr>
                        <th className="px-6 py-4 text-left">Service</th>
                        <th className="px-6 py-4 text-left">DMV Range</th>
                        <th className="px-6 py-4 text-left">Ink Mugi Price</th>
                        <th className="px-6 py-4 text-left">Typical Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {costBreakdown.map((item, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="px-6 py-4 font-semibold">{item.service}</td>
                          <td className="px-6 py-4">{item.range}</td>
                          <td className="px-6 py-4 text-green-700 font-bold">{item.inkMugi}</td>
                          <td className="px-6 py-4">{item.typical}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-6">
                  <h3 className="text-xl font-bold text-[#2D2D2B] mb-3 flex items-center gap-2">
                    <DollarSign className="w-6 h-6 text-amber-600" />
                    What Should Be Included in the Price
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Free initial consultation (skin assessment, design preview)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Full procedure (2-3 hours typically)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Premium pigments and all supplies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Medical-grade numbing cream</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Professional aftercare kit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>6-8 week perfecting touch-up session</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Text/email healing support throughout the process</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Warning about extremely low pricing:</strong> If you see prices under $300-$400, it's typically a sign of inexperienced artists, unlicensed work, or low-quality pigments. Correction work after botched PMU costs 2-3x more than getting it done right the first time.
                </p>
              </div>

              <div className="text-center">
                <Link
                  to="/pmu-cost-guide-dmv"
                  className="inline-flex items-center gap-2 text-[#2D2D2B] hover:text-[#E6DAD2] font-semibold transition-colors"
                >
                  Read Full DMV Cost Breakdown & Comparison
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Section 7: Healing Process */}
        <section id="healing-process" className="py-20 bg-gradient-to-b from-[#F9F7F5] to-white">
          <div className="container-custom">
            <AnimatedSection className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] mb-6">
                Healing Process & Timeline
              </h2>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>Understanding the healing process is critical</strong> to managing expectations and achieving optimal results. PMU healing happens in distinct phases, and the appearance changes dramatically during the first 6-8 weeks.
                </p>

                <div className="space-y-6 mb-8">
                  {healingTimeline.map((phase, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#E6DAD2]">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-[#E6DAD2] text-[#2D2D2B] rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <h3 className="text-xl font-bold text-[#2D2D2B]">{phase.phase}</h3>
                      </div>
                      <p className="text-gray-700 mb-3">{phase.description}</p>
                      <div className="bg-[#F9F7F5] p-4 rounded-lg">
                        <p className="text-sm text-gray-600">
                          <strong>Care Instructions:</strong> {phase.care}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-[#2D2D2B] mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                    Critical Healing Don'ts
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">✗</span>
                      <span><strong>Never pick, scratch, or peel flaking skin</strong> — this removes pigment and causes patchiness</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">✗</span>
                      <span><strong>Avoid swimming, hot tubs, saunas</strong> for 10-14 days — bacteria + moisture = infection risk</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">✗</span>
                      <span><strong>No direct sun exposure or tanning beds</strong> for 4 weeks — UV degrades pigment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">✗</span>
                      <span><strong>Don't apply makeup over treated area</strong> during healing — introduces bacteria</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">✗</span>
                      <span><strong>Avoid retinol, AHA, BHA, glycolic acid</strong> on treated area for 4 weeks — too harsh</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <Link
                  to="/aftercare-guide"
                  className="inline-flex items-center gap-2 bg-[#2D2D2B] hover:bg-[#3D3D38] text-white font-semibold px-8 py-4 rounded-full transition-all"
                >
                  View Complete Aftercare Guide
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Myths Section */}
        <section id="myths" className="py-20 bg-white">
          <div className="container-custom">
            <AnimatedSection className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] mb-12 text-center">
                Common Myths Debunked
              </h2>

              <div className="space-y-6">
                {myths.map((item, index) => (
                  <div key={index} className="bg-[#F9F7F5] p-6 rounded-xl">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">
                        ✗
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-[#2D2D2B] mb-2">Myth: {item.myth}</h3>
                        <p className="text-gray-700">
                          <strong className="text-green-700">Truth:</strong> {item.truth}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Link
                  to="/pmu-myths-facts"
                  className="inline-flex items-center gap-2 text-[#2D2D2B] hover:text-[#E6DAD2] font-semibold transition-colors"
                >
                  Read: 12 PMU Myths vs Facts (Data-Driven Analysis)
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Medical Conditions Quick Reference */}
        <section id="medical-conditions" className="py-20 bg-gradient-to-b from-[#F9F7F5] to-white">
          <div className="container-custom">
            <AnimatedSection className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] mb-6">
                Medical Considerations
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Most people are candidates for PMU,</strong> but certain medical conditions require evaluation, doctor clearance, or may prevent the procedure entirely.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                  <h3 className="text-lg font-bold text-[#2D2D2B] mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Generally Safe
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Alopecia / hair loss</li>
                    <li>• Controlled thyroid conditions</li>
                    <li>• Anxiety / depression</li>
                    <li>• General allergies</li>
                    <li>• Rosacea (for brows)</li>
                    <li>• Vitiligo (stable)</li>
                  </ul>
                </div>

                <div className="bg-amber-50 p-6 rounded-xl border-2 border-amber-200">
                  <h3 className="text-lg font-bold text-[#2D2D2B] mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                    Requires Evaluation
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Controlled diabetes</li>
                    <li>• Blood thinners</li>
                    <li>• Autoimmune conditions</li>
                    <li>• Keloid scarring history</li>
                    <li>• Accutane use (past 12 mo)</li>
                    <li>• Active acne on brows</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200">
                  <h3 className="text-lg font-bold text-[#2D2D2B] mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    Contraindicated
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Pregnancy / breastfeeding</li>
                    <li>• Active chemotherapy</li>
                    <li>• Uncontrolled diabetes</li>
                    <li>• Active skin infections</li>
                    <li>• Blood clotting disorders</li>
                    <li>• Recent Botox/filler (4-6wks)</li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <Link
                  to="/pmu-medical-conditions"
                  className="inline-flex items-center gap-2 bg-[#2D2D2B] hover:bg-[#3D3D38] text-white font-semibold px-8 py-4 rounded-full transition-all"
                >
                  View Complete Medical Conditions Guide
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <CTASection />

        {/* Related Resources */}
        <section className="py-12 bg-[#F9F7F5]">
          <div className="container-custom">
            <AnimatedSection className="max-w-5xl mx-auto">
              <h3 className="text-3xl font-cormorant font-medium text-[#2D2D2B] mb-8 text-center">
                Continue Your PMU Research
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Link
                  to="/pmu-comparison-matrix"
                  className="p-6 bg-white hover:bg-[#E6DAD2]/10 rounded-xl border-2 border-[#E6DAD2]/30 hover:border-[#E6DAD2] transition-all group"
                >
                  <h4 className="font-bold text-[#2D2D2B] mb-2 group-hover:text-[#2D2D2B]">PMU Comparison Matrix</h4>
                  <p className="text-sm text-gray-600">Compare all techniques side-by-side</p>
                </Link>
                <Link
                  to="/how-to-choose-pmu-artist"
                  className="p-6 bg-white hover:bg-[#E6DAD2]/10 rounded-xl border-2 border-[#E6DAD2]/30 hover:border-[#E6DAD2] transition-all group"
                >
                  <h4 className="font-bold text-[#2D2D2B] mb-2 group-hover:text-[#2D2D2B]">Choosing an Artist Guide</h4>
                  <p className="text-sm text-gray-600">10 green flags & 8 red flags</p>
                </Link>
                <Link
                  to="/pmu-cost-guide-dmv"
                  className="p-6 bg-white hover:bg-[#E6DAD2]/10 rounded-xl border-2 border-[#E6DAD2]/30 hover:border-[#E6DAD2] transition-all group"
                >
                  <h4 className="font-bold text-[#2D2D2B] mb-2 group-hover:text-[#2D2D2B]">DMV Cost Guide</h4>
                  <p className="text-sm text-gray-600">Regional pricing analysis</p>
                </Link>
                <Link
                  to="/pmu-medical-conditions"
                  className="p-6 bg-white hover:bg-[#E6DAD2]/10 rounded-xl border-2 border-[#E6DAD2]/30 hover:border-[#E6DAD2] transition-all group"
                >
                  <h4 className="font-bold text-[#2D2D2B] mb-2 group-hover:text-[#2D2D2B]">Medical Conditions</h4>
                  <p className="text-sm text-gray-600">Health requirements & contraindications</p>
                </Link>
                <Link
                  to="/aftercare-guide"
                  className="p-6 bg-white hover:bg-[#E6DAD2]/10 rounded-xl border-2 border-[#E6DAD2]/30 hover:border-[#E6DAD2] transition-all group"
                >
                  <h4 className="font-bold text-[#2D2D2B] mb-2 group-hover:text-[#2D2D2B]">Aftercare Guide</h4>
                  <p className="text-sm text-gray-600">Complete healing instructions</p>
                </Link>
                <Link
                  to="/gallery"
                  className="p-6 bg-white hover:bg-[#E6DAD2]/10 rounded-xl border-2 border-[#E6DAD2]/30 hover:border-[#E6DAD2] transition-all group"
                >
                  <h4 className="font-bold text-[#2D2D2B] mb-2 group-hover:text-[#2D2D2B]">View Gallery</h4>
                  <p className="text-sm text-gray-600">Before & after results</p>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
};

export default UltimateGuidePmu;
