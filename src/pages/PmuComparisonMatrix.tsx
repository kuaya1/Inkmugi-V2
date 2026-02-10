import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  CheckCircle,
  X,
  Sparkles,
  Clock,
  DollarSign,
  Droplets,
  Users,
  Target,
  Zap,
  Heart,
  Award,
  ArrowRight,
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import CTASection from '../components/CTASection';

const PmuComparisonMatrix: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const comparisonData = [
    {
      category: 'Technique',
      ombrePowderBrows: 'Digital machine stippling creates soft powder gradient',
      microshading: 'Manual hand-tool pixelated powder effect',
      nanoBrows: 'Ultra-fine digital needle creates hair strokes',
      microblading: 'Manual blade creates hair-like cuts in skin',
    },
    {
      category: 'Best For',
      ombrePowderBrows: 'All skin types, especially oily/combo',
      microshading: 'All skin types, softer look than ombre',
      nanoBrows: 'All skin types wanting hair-stroke realism',
      microblading: 'Dry/normal skin only (fades poorly on oily)',
    },
    {
      category: 'Longevity',
      ombrePowderBrows: '2-4 years',
      microshading: '18-36 months',
      nanoBrows: '12-24 months',
      microblading: '6-18 months (shorter on oily skin)',
    },
    {
      category: 'Pain Level',
      ombrePowderBrows: '2-3/10 with numbing',
      microshading: '2-3/10 with numbing',
      nanoBrows: '2-3/10 with numbing',
      microblading: '3-4/10 with numbing',
    },
    {
      category: 'Healing Time',
      ombrePowderBrows: '4-6 weeks full heal',
      microshading: '4-6 weeks full heal',
      nanoBrows: '4-6 weeks full heal',
      microblading: '4-6 weeks full heal (higher risk flaking)',
    },
    {
      category: 'Price Range (DMV)',
      ombrePowderBrows: '$500-$900',
      microshading: '$600-$1,200',
      nanoBrows: '$600-$1,000',
      microblading: '$400-$800',
    },
    {
      category: 'Oily Skin Performance',
      ombrePowderBrows: '★★★★★ Excellent retention',
      microshading: '★★★★★ Excellent retention',
      nanoBrows: '★★★★☆ Very good retention',
      microblading: '★★☆☆☆ Poor retention, blurs fast',
    },
    {
      category: 'Natural Look',
      ombrePowderBrows: 'Soft makeup-like finish',
      microshading: 'Ultra-soft, barely-there look',
      nanoBrows: 'Hyper-realistic hair strokes',
      microblading: 'Hair-like strokes (when fresh)',
    },
    {
      category: 'Maintenance',
      ombrePowderBrows: 'Touch-up every 2-3 years',
      microshading: 'Touch-up every 18-30 months',
      nanoBrows: 'Touch-up every 12-18 months',
      microblading: 'Touch-up every 8-14 months',
    },
    {
      category: 'Scarring Risk',
      ombrePowderBrows: 'Very low (superficial implantation)',
      microshading: 'Very low (superficial implantation)',
      nanoBrows: 'Very low (controlled needle depth)',
      microblading: 'Low-Medium (manual blade creates cuts)',
    },
    {
      category: 'Color Retention',
      ombrePowderBrows: 'Excellent (80-90%)',
      microshading: 'Excellent (80-90%)',
      nanoBrows: 'Very good (70-85%)',
      microblading: 'Fair (60-70%, fades faster)',
    },
    {
      category: 'Skin Trauma',
      ombrePowderBrows: 'Minimal (machine precision)',
      microshading: 'Minimal (hand-tool control)',
      nanoBrows: 'Minimal (ultra-fine needle)',
      microblading: 'Moderate (manual blade creates cuts)',
    },
  ];

  const techniqueSummaries = [
    {
      name: 'Ombre Powder Brows',
      icon: <Target className="w-10 h-10 text-[#E6DAD2]" />,
      tagline: 'The All-Rounder Champion',
      bestFor: ['Oily or combination skin', 'Anyone wanting makeup-like finish', 'Those who fill brows with pencil/powder', 'Active lifestyles (gym, swimming)'],
      notFor: ['Those wanting individual hair strokes only', 'People wanting ultra-subtle results'],
      price: '$600 at Ink Mugi',
      longevity: '2-4 years',
      maintenanceLevel: 'Low',
      link: '/signature-ombre-brows',
      color: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      name: 'Microshading',
      icon: <Sparkles className="w-10 h-10 text-[#E6DAD2]" />,
      tagline: 'The Subtle Perfectionist',
      bestFor: ['Anyone wanting softer than ombre', 'Mature skin', 'Those with naturally full brows', 'People seeking "barely there" enhancement'],
      notFor: ['Sparse brows needing dramatic transformation', 'Those wanting bold definition'],
      price: '$700 at Ink Mugi',
      longevity: '18-36 months',
      maintenanceLevel: 'Medium',
      link: '/microshading-artistry',
      color: 'bg-purple-50',
      borderColor: 'border-purple-200',
    },
    {
      name: 'Nano Brows',
      icon: <Zap className="w-10 h-10 text-[#E6DAD2]" />,
      tagline: 'The Realism Master',
      bestFor: ['Those wanting hyper-realistic hair strokes', 'Natural brow shape enhancement', 'People who distrust microblading', 'All skin types'],
      notFor: ['Those wanting soft powder fill', 'People with very oily T-zone (consider combo brows)'],
      price: '$650+ at Ink Mugi',
      longevity: '12-24 months',
      maintenanceLevel: 'Medium-High',
      link: '/nano-brows',
      color: 'bg-green-50',
      borderColor: 'border-green-200',
    },
    {
      name: 'Microblading',
      icon: <Heart className="w-10 h-10 text-[#E6DAD2]" />,
      tagline: 'The Original (Now Outdated)',
      bestFor: ['Dry or normal skin', 'Those on tight budgets', 'First-timers wanting to test PMU'],
      notFor: ['Oily or combination skin', 'Those wanting long-lasting results', 'Active lifestyles', 'Anyone with skin concerns'],
      price: '$400-$800 typical',
      longevity: '6-18 months',
      maintenanceLevel: 'High (annual touch-ups)',
      link: '',
      color: 'bg-gray-50',
      borderColor: 'border-gray-200',
    },
  ];

  const decisionGuide = [
    {
      question: 'I have oily skin',
      answer: 'Choose: Ombre Powder Brows or Microshading',
      reason: 'These techniques retain 340% better on oily skin than hair-stroke methods.',
    },
    {
      question: 'I want my brows to look natural, not "done"',
      answer: 'Choose: Microshading or Nano Brows',
      reason: 'Microshading creates soft, barely-there fill. Nano gives realistic hair strokes.',
    },
    {
      question: 'I want to wake up with perfect brows every day',
      answer: 'Choose: Ombre Powder Brows',
      reason: 'Delivers consistent makeup-like finish with longest retention.',
    },
    {
      question: 'I have sparse brows and want fullness',
      answer: 'Choose: Ombre Powder Brows or Combo Brows',
      reason: 'Powder techniques build density better than individual strokes.',
    },
    {
      question: 'I want the longest-lasting result',
      answer: 'Choose: Ombre Powder Brows',
      reason: '2-4 year longevity with excellent color retention.',
    },
    {
      question: 'I already have decent brows, just want enhancement',
      answer: 'Choose: Microshading or Nano Brows',
      reason: 'These add subtle definition without overpowering natural brows.',
    },
    {
      question: 'I\'m worried about pain',
      answer: 'Choose: Ombre, Microshading, or Nano (avoid microblading)',
      reason: 'Modern techniques are 2-3/10 pain with numbing vs 3-4/10 for microblading.',
    },
    {
      question: 'I have a tight budget',
      answer: 'Save another $200-300 and get it done right',
      reason: 'Cheap PMU ($300-400) often requires expensive correction. Better to wait.',
    },
  ];

  const clientScenarios = [
    {
      profile: 'Sarah, 32, Oily T-Zone, Active Gym-Goer',
      recommendation: 'Ombre Powder Brows',
      reasoning:
        'Oily skin needs powder techniques for longevity. Active lifestyle requires waterproof, smudge-proof results. Ombre delivers 2-4 years of consistent performance.',
    },
    {
      profile: 'Emma, 45, Mature Skin, Naturally Dense Brows',
      recommendation: 'Microshading',
      reasoning:
        'Mature skin benefits from softer implantation technique. Already has good brows, just needs subtle definition. Microshading won\'t look "overdone".',
    },
    {
      profile: 'Taylor, 28, Alopecia, Dry Skin, Wants Natural Look',
      recommendation: 'Nano Brows or Combo Brows',
      reasoning:
        'Alopecia needs hair-stroke realism. Dry skin can handle nano technique well. Combo adds density with powder base + nano hair strokes.',
    },
    {
      profile: 'Jessica, 35, Previous Microblading Faded Fast, Oily Skin',
      recommendation: 'Ombre Powder Brows',
      reasoning:
        'Classic microblading regret story. Oily skin makes microblading fade in 6-9 months. Ombre will last 3-4x longer with better retention.',
    },
    {
      profile: 'Rachel, 50, Sparse Brows from Overplucking, Wants Fullness',
      recommendation: 'Ombre Powder Brows',
      reasoning:
        'Sparse brows need density, which powder techniques build better. Ombre creates full, defined shape that mimics daily makeup application.',
    },
    {
      profile: 'Alex, 29, First Time PMU, Nervous About Looking "Fake"',
      recommendation: 'Microshading',
      reasoning:
        'First-timers often fear bold results. Microshading is ultra-subtle — won\'t look overdone even if slightly darker than expected during healing.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>PMU Comparison Matrix: Ombre vs Microshading vs Nano vs Microblading</title>
        <meta
          name="description"
          content="Complete side-by-side comparison of permanent makeup techniques. Ombre powder brows vs microshading vs nano brows vs microblading — longevity, costs, skin types, and which to choose."
        />
        <meta
          name="keywords"
          content="PMU comparison, ombre vs microblading, powder brows vs microblading, microshading vs ombre, nano brows vs microblading, permanent makeup techniques comparison, best PMU technique, which PMU technique"
        />
        <link rel="canonical" href="https://www.inkmugi.com/pmu-comparison-matrix" />

        <meta property="og:title" content="PMU Comparison Matrix: Which Technique Is Right for You?" />
        <meta
          property="og:description"
          content="Compare all permanent makeup techniques side-by-side to make an informed decision."
        />
        <meta property="og:image" content="https://www.inkmugi.com/og-image.jpg" />
        <meta property="og:url" content="https://www.inkmugi.com/pmu-comparison-matrix" />

        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'PMU Comparison Matrix: Complete Guide to Choosing Your Technique',
            description:
              'Comprehensive comparison of ombre powder brows, microshading, nano brows, and microblading techniques.',
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
            url: 'https://www.inkmugi.com/pmu-comparison-matrix',
          })}
        </script>

        {/* HowTo Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to Choose the Right PMU Technique',
            description: 'Decision guide for selecting between ombre, microshading, nano, and microblading.',
            step: [
              {
                '@type': 'HowToStep',
                name: 'Evaluate Your Skin Type',
                text: 'Oily skin = choose powder techniques (ombre/microshading). Dry skin = any technique works.',
              },
              {
                '@type': 'HowToStep',
                name: 'Define Your Desired Look',
                text: 'Makeup-like = ombre. Subtle = microshading. Hair-stroke realism = nano.',
              },
              {
                '@type': 'HowToStep',
                name: 'Consider Longevity Priorities',
                text: 'Longest lasting = ombre (2-4 years). Shorter commitment = nano (12-24 months).',
              },
              {
                '@type': 'HowToStep',
                name: 'Review Your Lifestyle',
                text: 'Active/athletic = choose ombre for best retention. Office/low-sweat = any technique.',
              },
              {
                '@type': 'HowToStep',
                name: 'Consult With Licensed Artist',
                text: 'Bring reference photos. Discuss skin analysis. Book consultation before committing.',
              },
            ],
          })}
        </script>

        {/* BreadcrumbList */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.inkmugi.com' },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'PMU Comparison Matrix',
                item: 'https://www.inkmugi.com/pmu-comparison-matrix',
              },
            ],
          })}
        </script>

        {/* WebPage with SpeakableSpecification */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'PMU Comparison Matrix | Ink Mugi',
            url: 'https://www.inkmugi.com/pmu-comparison-matrix',
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
                <Award className="w-4 h-4 text-[#E6DAD2]" />
                <span className="text-sm font-medium text-white">Decision Guide</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-cormorant font-light leading-tight mb-6 text-white">
                PMU Technique
                <span className="block text-[#E6DAD2] font-medium mt-2">Comparison Matrix</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                Side-by-side comparison of ombre powder brows, microshading, nano brows, and microblading — so you can choose with confidence
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/booking"
                  className="group bg-[#E6DAD2] hover:bg-[#F0E4D8] text-[#2D2D2B] font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Book Free Consultation
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
                  Quick Comparison Summary
                </h2>
                <p className="text-lg text-gray-800 leading-relaxed">
                  <strong>
                    Ombre powder brows offer the longest longevity (2-4 years) and best performance for oily skin.
                    Microshading creates the softest, most subtle look. Nano brows deliver hyper-realistic hair strokes using
                    digital precision. Microblading is the original manual technique but has largely been replaced by modern
                    methods.
                  </strong>{' '}
                  Your ideal choice depends on your skin type, desired aesthetic, lifestyle, and maintenance preferences.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Technique Summaries */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <AnimatedSection className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] mb-12 text-center">
                Technique Overviews
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {techniqueSummaries.map((technique, index) => (
                  <div
                    key={index}
                    className={`${technique.color} p-8 rounded-2xl border-2 ${technique.borderColor} hover:shadow-lg transition-all`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      {technique.icon}
                      <div>
                        <h3 className="text-2xl font-bold text-[#2D2D2B]">{technique.name}</h3>
                        <p className="text-sm text-gray-600 italic">{technique.tagline}</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-bold text-[#2D2D2B] mb-2 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          Best For:
                        </h4>
                        <ul className="space-y-1 ml-7">
                          {technique.bestFor.map((item, i) => (
                            <li key={i} className="text-sm text-gray-700">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-[#2D2D2B] mb-2 flex items-center gap-2">
                          <X className="w-5 h-5 text-red-600" />
                          Not Ideal For:
                        </h4>
                        <ul className="space-y-1 ml-7">
                          {technique.notFor.map((item, i) => (
                            <li key={i} className="text-sm text-gray-700">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-200">
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Price</div>
                          <div className="text-sm font-bold text-[#2D2D2B]">{technique.price}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Lasts</div>
                          <div className="text-sm font-bold text-[#2D2D2B]">{technique.longevity}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Maintenance</div>
                          <div className="text-sm font-bold text-[#2D2D2B]">{technique.maintenanceLevel}</div>
                        </div>
                      </div>
                    </div>

                    {technique.link && (
                      <Link
                        to={technique.link}
                        className="inline-flex items-center gap-2 text-[#2D2D2B] hover:text-[#E6DAD2] font-semibold transition-colors"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Detailed Comparison Table */}
        <section className="py-20 bg-gradient-to-b from-[#F9F7F5] to-white">
          <div className="container-custom">
            <AnimatedSection className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] mb-8 text-center">
                Side-by-Side Comparison
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Compare all key factors across techniques to make an informed decision
              </p>

              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-xl shadow-xl overflow-hidden">
                  <thead className="bg-[#2D2D2B] text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold">Factor</th>
                      <th className="px-6 py-4 text-left font-bold">Ombre Powder Brows</th>
                      <th className="px-6 py-4 text-left font-bold">Microshading</th>
                      <th className="px-6 py-4 text-left font-bold">Nano Brows</th>
                      <th className="px-6 py-4 text-left font-bold">Microblading</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 font-bold text-[#2D2D2B] border-r-2 border-[#E6DAD2]/30">
                          {row.category}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">{row.ombrePowderBrows}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{row.microshading}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{row.nanoBrows}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{row.microblading}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Decision Guide */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <AnimatedSection className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] mb-8 text-center">
                Decision Guide: "If I..., Then Choose..."
              </h2>
              <p className="text-center text-gray-600 mb-12">
                Match your situation to the right technique
              </p>

              <div className="space-y-4">
                {decisionGuide.map((item, index) => (
                  <div key={index} className="bg-[#F9F7F5] p-6 rounded-xl border-l-4 border-[#E6DAD2]">
                    <h3 className="text-lg font-bold text-[#2D2D2B] mb-2">"{item.question}"</h3>
                    <p className="text-green-700 font-bold mb-2">→ {item.answer}</p>
                    <p className="text-sm text-gray-600 italic">Why: {item.reason}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Client Scenarios */}
        <section className="py-20 bg-gradient-to-b from-[#F9F7F5] to-white">
          <div className="container-custom">
            <AnimatedSection className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] mb-8 text-center">
                Real Client Scenarios
              </h2>
              <p className="text-center text-gray-600 mb-12">
                See which technique fits different profiles and needs
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {clientScenarios.map((scenario, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-2 border-[#E6DAD2]/30">
                    <div className="flex items-start gap-3 mb-4">
                      <Users className="w-8 h-8 text-[#E6DAD2] flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-[#2D2D2B] mb-1">{scenario.profile}</h3>
                        <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                          ✓ {scenario.recommendation}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700">{scenario.reasoning}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <AnimatedSection className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-cormorant font-medium text-[#2D2D2B] mb-8 text-center">Key Takeaways</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
                  <h3 className="text-xl font-bold text-[#2D2D2B] mb-3 flex items-center gap-2">
                    <Target className="w-6 h-6 text-blue-600" />
                    Choose Ombre If...
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• You have oily or combination skin</li>
                    <li>• You want longest-lasting results (2-4 years)</li>
                    <li>• You love the makeup-filled brow look</li>
                    <li>• You have an active lifestyle (gym, swimming)</li>
                    <li>• You want best value per year of retention</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-200">
                  <h3 className="text-xl font-bold text-[#2D2D2B] mb-3 flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-purple-600" />
                    Choose Microshading If...
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• You want softer than ombre</li>
                    <li>• You have mature or sensitive skin</li>
                    <li>• You already have decent natural brows</li>
                    <li>• You want "barely there" enhancement</li>
                    <li>• You prefer ultra-natural results</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-200">
                  <h3 className="text-xl font-bold text-[#2D2D2B] mb-3 flex items-center gap-2">
                    <Zap className="w-6 h-6 text-green-600" />
                    Choose Nano Brows If...
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• You want hyper-realistic hair strokes</li>
                    <li>• You distrust manual microblading</li>
                    <li>• You want precision machine technique</li>
                    <li>• You have any skin type</li>
                    <li>• You value natural-looking hair simulation</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border-2 border-red-200">
                  <h3 className="text-xl font-bold text-[#2D2D2B] mb-3 flex items-center gap-2">
                    <X className="w-6 h-6 text-red-600" />
                    Avoid Microblading If...
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• You have oily or combination skin</li>
                    <li>• You want results lasting longer than 18 months</li>
                    <li>• You have skin concerns (sensitivity, scarring)</li>
                    <li>• You want best color retention</li>
                    <li>• Modern alternatives (nano, ombre) exist</li>
                  </ul>
                </div>
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
              <h3 className="text-3xl font-cormorant font-medium text-[#2D2D2B] mb-8 text-center">Learn More</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Link
                  to="/signature-ombre-brows"
                  className="p-6 bg-white hover:bg-[#E6DAD2]/10 rounded-xl border-2 border-[#E6DAD2]/30 hover:border-[#E6DAD2] transition-all group"
                >
                  <Target className="w-8 h-8 text-[#E6DAD2] mb-3" />
                  <h4 className="font-bold text-[#2D2D2B] mb-2">Ombre Powder Brows</h4>
                  <p className="text-sm text-gray-600">Complete technique guide</p>
                </Link>
                <Link
                  to="/microshading-artistry"
                  className="p-6 bg-white hover:bg-[#E6DAD2]/10 rounded-xl border-2 border-[#E6DAD2]/30 hover:border-[#E6DAD2] transition-all group"
                >
                  <Sparkles className="w-8 h-8 text-[#E6DAD2] mb-3" />
                  <h4 className="font-bold text-[#2D2D2B] mb-2">Microshading</h4>
                  <p className="text-sm text-gray-600">The subtle perfectionist</p>
                </Link>
                <Link
                  to="/nano-brows"
                  className="p-6 bg-white hover:bg-[#E6DAD2]/10 rounded-xl border-2 border-[#E6DAD2]/30 hover:border-[#E6DAD2] transition-all group"
                >
                  <Zap className="w-8 h-8 text-[#E6DAD2] mb-3" />
                  <h4 className="font-bold text-[#2D2D2B] mb-2">Nano Brows</h4>
                  <p className="text-sm text-gray-600">Hyper-realistic strokes</p>
                </Link>
                <Link
                  to="/ultimate-guide-permanent-makeup"
                  className="p-6 bg-white hover:bg-[#E6DAD2]/10 rounded-xl border-2 border-[#E6DAD2]/30 hover:border-[#E6DAD2] transition-all group"
                >
                  <Award className="w-8 h-8 text-[#E6DAD2] mb-3" />
                  <h4 className="font-bold text-[#2D2D2B] mb-2">Ultimate PMU Guide</h4>
                  <p className="text-sm text-gray-600">5,000+ word resource</p>
                </Link>
                <Link
                  to="/how-to-choose-pmu-artist"
                  className="p-6 bg-white hover:bg-[#E6DAD2]/10 rounded-xl border-2 border-[#E6DAD2]/30 hover:border-[#E6DAD2] transition-all group"
                >
                  <CheckCircle className="w-8 h-8 text-[#E6DAD2] mb-3" />
                  <h4 className="font-bold text-[#2D2D2B] mb-2">Choosing an Artist</h4>
                  <p className="text-sm text-gray-600">Red flags & green flags</p>
                </Link>
                <Link
                  to="/pmu-cost-guide-dmv"
                  className="p-6 bg-white hover:bg-[#E6DAD2]/10 rounded-xl border-2 border-[#E6DAD2]/30 hover:border-[#E6DAD2] transition-all group"
                >
                  <DollarSign className="w-8 h-8 text-[#E6DAD2] mb-3" />
                  <h4 className="font-bold text-[#2D2D2B] mb-2">DMV Cost Guide</h4>
                  <p className="text-sm text-gray-600">Pricing breakdown</p>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
};

export default PmuComparisonMatrix;
