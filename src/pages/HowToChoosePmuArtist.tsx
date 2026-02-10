import React, {useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  CheckCircle,
  AlertTriangle,
  Award,
  Shield,
  Eye,
  MessageCircle,
  FileText,
  Camera,
  Heart,
  Target,
  ArrowRight,
  Sparkles,
  XCircle,
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import CTASection from '../components/CTASection';

const HowToChoosePmuArtist: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const greenFlags = [
    {
      icon: <Shield className="w-8 h-8 text-green-700" />,
      title: 'State License Number Visible',
      description: 'A legitimate PMU artist displays their state license number prominently on their website and in their studio. In Virginia, this is a Department of Professional and Occupational Regulation (DPOR) license.',
      check: 'Can you verify the license number on the state website?',
    },
    {
      icon: <Camera className="w-8 h-8 text-green-700" />,
      title: 'Extensive Portfolio with Healed Results',
      description: 'Fresh PMU always looks impressive. What matters is healed work — photos taken 6-8 weeks after the procedure. A quality artist shows both fresh and healed results.',
      check: 'Do they show healed work (not just day-of photos)?',
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-green-700" />,
      title: 'Says "No" to Clients',
      description: 'A responsible artist will turn away clients who aren't good candidates (wrong skin type, unrealistic expectations, health contraindications). If they accept everyone, they're prioritizing money over results.',
      check: 'Do they discuss who they DON'T work with?',
    },
    {
      icon: <FileText className="w-8 h-8 text-green-700" />,
      title: 'Transparent Pricing',
      description: 'Reputable artists display full pricing on their website. Hidden pricing often means they adjust rates based on perceived ability to pay.',
      check: 'Are all service prices clearly listed?',
    },
    {
      icon: <Eye className="w-8 h-8 text-green-700" />,
      title: 'Realistic Expectations Set',
      description: 'Quality artists discuss limitations, healing phases, and potential complications upfront. They don't promise permanent perfection.',
      check: 'Do they explain what can go wrong?',
    },
    {
      icon: <Heart className="w-8 h-8 text-green-700" />,
      title: 'Detailed Aftercare Instructions',
      description: 'Professional artists provide written, comprehensive aftercare protocols and text/email support during healing. This dramatically improves retention rates.',
      check: 'Do they give you a physical aftercare kit?',
    },
    {
      icon: <Award className="w-8 h-8 text-green-700" />,
      title: 'Specialization Focus',
      description: 'The best PMU artists specialize in 2-3 techniques rather than offering everything (brows, lips, eyeliner, scalp, areola). Specialization = mastery.',
      check: 'Do they focus on a few techniques or offer everything?',
    },
    {
      icon: <Target className="w-8 h-8 text-green-700" />,
      title: 'In-Person Consultation Required',
      description: 'Quality artists require you to come in for a consultation before booking. They need to assess your skin, discuss undertones, and set realistic expectations.',
      check: 'Can you book the procedure without meeting in person?',
    },
  ];

  const redFlags = [
    {
      icon: <XCircle className="w-8 h-8 text-red-700" />,
      title: 'No License Number Displayed',
      description: 'If they don't display a state-issued license number, they're either unlicensed or hiding it. Many operate out of home studios without proper credentials.',
      danger: 'This is illegal in Virginia and most states.',
    },
    {
      icon: <XCircle className="w-8 h-8 text-red-700" />,
      title: 'Only Shows Fresh Work (No Healed Photos)',
      description: 'Fresh PMU always looks bold and impressive. Artists who only show day-of photos are hiding poor retention or color issues that appear during healing.',
      danger: 'You're seeing the best-case scenario, not the final result.',
    },
    {
      icon: <XCircle className="w-8 h-8 text-red-700" />,
      title: 'Groupon / Heavy Discounting',
      description: 'Quality PMU requires premium pigments, sterile single-use supplies, ongoing education, and experience. Deep discounts mean corners are being cut somewhere.',
      danger: 'You get what you pay for. Correction work costs 2-3x more.',
    },
    {
      icon: <XCircle className="w-8 h-8 text-red-700" />,
      title: 'Promises Permanent Results',
      description: 'Semi-permanent makeup fades over 1-4 years. Anyone promising "permanent" or "lifetime" results doesn't understand pigment chemistry or is being dishonest.',
      danger: 'Overpromising indicates inexperience or dishonesty.',
    },
    {
      icon: <XCircle className="w-8 h-8 text-red-700" />,
      title: 'No Consultation Required',
      description: 'If you can book and pay online without meeting the artist, they're not assessing your suitability. This leads to poor matches and disappointed clients.',
      danger: 'Cookie-cutter approach ignores your unique needs.',
    },
    {
      icon: <XCircle className="w-8 h-8 text-red-700" />,
      title: 'Vague or Missing Aftercare Protocol',
      description: 'Proper healing requires specific instructions (when to wash, what to avoid, when to apply ointment). Vague advice like "keep it clean" = high failure rate.',
      danger: 'Poor aftercare = poor retention = wasted money.',
    },
    {
      icon: <XCircle className="w-8 h-8 text-red-700" />,
      title: 'Overly Aggressive Marketing',
      description: 'Be wary of artists who use high-pressure sales tactics, limited-time offers, or "act now" urgency. Quality work doesn't need to be pushed.',
      danger: 'Desperation marketing suggests lack of repeat clients.',
    },
    {
      icon: <XCircle className="w-8 h-8 text-red-700" />,
      title: 'No Clear Studio Address',
      description: 'Legitimate businesses have a verifiable physical address. "Home studio" or "mobile PMU" often means unlicensed and uninsured work.',
      danger: 'No recourse if something goes wrong.',
    },
  ];

  const questionsToAsk = [
    {
      question: 'What is your state license number, and can I verify it?',
      why: 'Ensures they're legally allowed to perform PMU in your state.',
    },
    {
      question: 'What technique do you recommend for my skin type and goals?',
      why: 'Tests their knowledge of different techniques and ability to assess your needs.',
    },
    {
      question: 'Can I see healed photos from 6-8 weeks post-procedure?',
      why: 'Reveals the true quality of their work after the healing process.',
    },
    {
      question: 'What pigment brands do you use, and are they vegan/hypoallergenic?',
      why: 'Quality pigments = better retention and safety. Cheap pigments cause discoloration.',
    },
    {
      question: 'What happens if I'm not happy with the result after healing?',
      why: 'Reveals whether they stand behind their work and offer corrections.',
    },
    {
      question: 'Who is NOT a good candidate for this procedure?',
      why: 'A quality artist knows when to say no. This shows professionalism and expertise.',
    },
    {
      question: 'How many procedures have you done with this technique?',
      why: 'Experience matters. 100+ procedures = competent. 500+ = expertise.',
    },
    {
      question: 'Do you have professional liability insurance?',
      why: 'Protects you in case of complications. Many home-based artists don't carry insurance.',
    },
    {
      question: 'Can I see your studio and sterilization process?',
      why: 'Ensures cleanliness, proper equipment, and professional setup.',
    },
    {
      question: 'What is included in the price (consultation, touch-up, aftercare kit)?',
      why: 'Avoids surprise charges. Quality artists include everything upfront.',
    },
  ];

  const decisionMatrix = [
    ['Feature', 'Quality Artist', 'Budget / Risky Artist'],
    ['License Display', '✅ Prominently shown', '❌ Hidden or absent'],
    ['Portfolio', '✅ Fresh & healed results', '❌ Only fresh work'],
    ['Pricing', '✅ $600-$900 transparent', '❌ $200-$400 or hidden'],
    ['Consultation', '✅ Required in-person', '❌ Book online directly'],
    ['Aftercare', '✅ Kit + written protocol', '❌ Verbal instructions only'],
    ['Experience', '✅ 300+ procedures', '❌ < 50 procedures'],
    ['Studio', '✅ Licensed commercial space', '❌ Home studio / mobile'],
    ['Red Flags', '✅ Says no to some clients', '❌ Accepts everyone'],
    ['Guarantees', '✅ Realistic expectations', '❌ "Permanent" promises'],
    ['Insurance', '✅ Liability coverage', '❌ No insurance'],
  ];

  return (
    <>
      <Helmet>
        <title>How to Choose a PMU Artist | 10 Green Flags & 8 Red Flags | Ink Mugi</title>
        <meta
          name="description"
          content="Expert guide to choosing a permanent makeup artist. Learn the 10 essential green flags and 8 red flags to avoid botched PMU. Questions to ask, what to look for, and how to protect yourself."
        />
        <meta
          name="keywords"
          content="how to choose PMU artist, permanent makeup artist red flags, how to find good microblading artist, PMU artist questions to ask, choosing eyebrow tattoo artist, permanent makeup safety, PMU artist green flags, how to avoid bad microblading, PMU artist checklist"
        />
        <link rel="canonical" href="https://www.inkmugi.com/how-to-choose-pmu-artist" />

        <meta property="og:title" content="How to Choose a PMU Artist | 10 Green Flags & 8 Red Flags" />
        <meta property="og:description" content="Expert guide to choosing a permanent makeup artist. Learn what to look for and what to avoid." />
        <meta property="og:image" content="https://www.inkmugi.com/og-image.jpg" />
        <meta property="og:url" content="https://www.inkmugi.com/how-to-choose-pmu-artist" />

        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'How to Choose a Permanent Makeup Artist: Complete Guide',
            description:
              'Comprehensive guide to selecting a permanent makeup artist. Covers green flags, red flags, questions to ask, and decision criteria.',
            author: {
              '@type': 'Person',
              name: 'Mugi Park',
              jobTitle: 'Licensed Permanent Makeup Artist',
              affiliation: {
                '@type': 'Organization',
                name: 'Ink Mugi',
              },
            },
            publisher: {
              '@type': 'Organization',
              name: 'Ink Mugi',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.inkmugi.com/logo.png',
              },
            },
            datePublished: '2026-02-10',
            dateModified: '2026-02-10',
            image: 'https://www.inkmugi.com/og-image.jpg',
            url: 'https://www.inkmugi.com/how-to-choose-pmu-artist',
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
                name: 'How to Choose a PMU Artist',
                item: 'https://www.inkmugi.com/how-to-choose-pmu-artist',
              },
            ],
          })}
        </script>

        {/* HowTo Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to Choose a Permanent Makeup Artist',
            description: 'Step-by-step guide to selecting a qualified, reputable permanent makeup artist.',
            step: [
              {
                '@type': 'HowToStep',
                position: 1,
                name: 'Verify State Licensing',
                text: 'Check that the artist displays their state license number and verify it on your state regulatory website.',
              },
              {
                '@type': 'HowToStep',
                position: 2,
                name: 'Review Portfolio for Healed Work',
                text: 'Look for healed results (6-8 weeks post-procedure), not just fresh work. This reveals true quality.',
              },
              {
                '@type': 'HowToStep',
                position: 3,
                name: 'Schedule In-Person Consultation',
                text: 'Quality artists require consultations to assess your skin type, undertones, and suitability.',
              },
              {
                '@type': 'HowToStep',
                position: 4,
                name: 'Ask Key Questions',
                text: 'Ask about experience level, pigment brands, insurance, who they turn away, and what's included in pricing.',
              },
              {
                '@type': 'HowToStep',
                position: 5,
                name: 'Check for Red Flags',
                text: 'Avoid artists with no license display, Groupon deals, no healed photos, or high-pressure sales tactics.',
              },
            ],
          })}
        </script>

        {/* WebPage Schema with SpeakableSpecification */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'How to Choose a PMU Artist | Ink Mugi',
            url: 'https://www.inkmugi.com/how-to-choose-pmu-artist',
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['h1', 'h2', '.summary-box'],
            },
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-[#2D2D2B] via-[#3D3D38] to-[#2D2D2B]">
          <div className="container-custom">
            <AnimatedSection className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <Shield className="w-4 h-4 text-[#E6DAD2]" />
                <span className="text-sm font-medium text-white">Decision Guide</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-cormorant font-light leading-tight mb-6 text-white">
                How to Choose a
                <span className="block text-[#E6DAD2] font-medium mt-2">Permanent Makeup Artist</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                10 Essential Green Flags, 8 Critical Red Flags, and Questions You Must Ask Before Booking
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
                  Choosing a PMU Artist at a Glance
                </h2>
                <p className="text-lg text-gray-800 leading-relaxed">
                  <strong>Look for visible state licensing, a portfolio with healed results (not just fresh work), transparent pricing, and an artist who says "no" to unsuitable candidates.</strong> Avoid Groupon deals, artists with no license display, high-pressure sales tactics, or anyone who promises "permanent" results. Always schedule an in-person consultation before booking — quality artists require this to assess your skin and set realistic expectations.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Why This Matters */}
        <section className="py-20 bg-gradient-to-b from-white to-[#F9F7F5]">
          <div className="container-custom">
            <AnimatedSection className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] mb-4">
                  Why This Decision Matters
                </h2>
                <p className="text-xl text-gray-600">
                  Permanent makeup is semi-permanent but not easily reversible
                </p>
              </div>

              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Unlike makeup you can wash off or bad haircuts that grow out, permanent makeup sits in your skin for 1-4 years. Correction work is expensive ($600-$900+), time-consuming (multiple sessions), and sometimes impossible without saline or laser removal first.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-8">
                  <h3 className="text-2xl font-semibold text-[#2D2D2B] mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6 text-amber-600" />
                    The Cost of a Bad Choice
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span><strong>Emotional toll:</strong> Looking at botched brows in the mirror every day</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span><strong>Financial cost:</strong> $600-$1,200 for correction + potential removal costs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span><strong>Time investment:</strong> 3-6 months of correction sessions and healing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span><strong>Health risks:</strong> Infections, scarring, allergic reactions from unlicensed work</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                  <strong>Spending an extra hour researching and an extra $200-$300 for quality work is always cheaper than correction.</strong> This guide helps you make that decision with confidence.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* 10 Green Flags */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <AnimatedSection className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] mb-4">
                  10 Green Flags: What to Look For
                </h2>
                <p className="text-xl text-gray-600">
                  Signs you've found a quality, reputable permanent makeup artist
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {greenFlags.map((flag, index) => (
                  <div key={index} className="bg-green-50 p-6 rounded-2xl border-2 border-green-200">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">{flag.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-[#2D2D2B] mb-2">{flag.title}</h3>
                        <p className="text-gray-700 mb-4">{flag.description}</p>
                        <div className="bg-white p-3 rounded-lg border border-green-300">
                          <p className="text-sm font-medium text-green-800">
                            <CheckCircle className="w-4 h-4 inline mr-2" />
                            {flag.check}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* 8 Red Flags */}
        <section className="py-20 bg-gradient-to-b from-[#F9F7F5] to-white">
          <div className="container-custom">
            <AnimatedSection className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] mb-4">
                  8 Red Flags: What to Avoid
                </h2>
                <p className="text-xl text-gray-600">
                  Warning signs that should make you walk away immediately
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {redFlags.map((flag, index) => (
                  <div key={index} className="bg-red-50 p-6 rounded-2xl border-2 border-red-200">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">{flag.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-[#2D2D2B] mb-2">{flag.title}</h3>
                        <p className="text-gray-700 mb-4">{flag.description}</p>
                        <div className="bg-white p-3 rounded-lg border border-red-300">
                          <p className="text-sm font-medium text-red-800">
                            <AlertTriangle className="w-4 h-4 inline mr-2" />
                            {flag.danger}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Questions to Ask */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <AnimatedSection className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] mb-4">
                  10 Questions You Must Ask
                </h2>
                <p className="text-xl text-gray-600">
                  Use these questions during your consultation to assess quality and professionalism
                </p>
              </div>

              <div className="space-y-6">
                {questionsToAsk.map((item, index) => (
                  <div key={index} className="bg-[#E6DAD2]/10 p-6 rounded-xl border border-[#E6DAD2]">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 bg-[#E6DAD2] text-[#2D2D2B] w-8 h-8 rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-[#2D2D2B] mb-2">{item.question}</h3>
                        <p className="text-gray-700 text-sm">
                          <strong>Why it matters:</strong> {item.why}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Decision Matrix */}
        <section className="py-20 bg-gradient-to-b from-[#F9F7F5] to-white">
          <div className="container-custom">
            <AnimatedSection className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] mb-4">
                  Quick Comparison: Quality vs. Risky
                </h2>
                <p className="text-xl text-gray-600">
                  At-a-glance decision matrix to evaluate any PMU artist
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                  <thead className="bg-[#2D2D2B] text-white">
                    <tr>
                      {decisionMatrix[0].map((header, i) => (
                        <th key={i} className="px-6 py-4 text-left font-semibold">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {decisionMatrix.slice(1).map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        {row.map((cell, j) => (
                          <td key={j} className="px-6 py-4 border-b border-gray-200">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Why Choose Ink Mugi */}
        <section className="py-20 bg-[#E6DAD2]/10">
          <div className="container-custom">
            <AnimatedSection className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] mb-4">
                  How Ink Mugi Meets These Standards
                </h2>
                <p className="text-xl text-gray-600">
                  Transparency in action
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#2D2D2B] mb-1">Virginia License #1231002471</h4>
                      <p className="text-sm text-gray-600">Displayed on every page, verifiable on DPOR website</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#2D2D2B] mb-1">523+ Documented Procedures</h4>
                      <p className="text-sm text-gray-600">With 0.19% complication rate tracked since 2021</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#2D2D2B] mb-1">Healed Work Portfolio</h4>
                      <p className="text-sm text-gray-600">Gallery shows both fresh and 6-8 week healed results</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#2D2D2B] mb-1">Transparent Pricing</h4>
                      <p className="text-sm text-gray-600">All service prices listed — no surprises</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#2D2D2B] mb-1">In-Person Consultation Required</h4>
                      <p className="text-sm text-gray-600">Skin assessment before booking — free, no obligation</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#2D2D2B] mb-1">"Says No" Philosophy</h4>
                      <p className="text-sm text-gray-600">Turns away unsuitable candidates — prioritizes results over revenue</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#2D2D2B] mb-1">Specialized Expertise</h4>
                      <p className="text-sm text-gray-600">Focus on brows (ombre, microshading, nano) — not everything</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#2D2D2B] mb-1">Licensed Commercial Studio</h4>
                      <p className="text-sm text-gray-600">7857 Heritage Dr #330, Annandale, VA — fully insured & compliant</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Link
                    to="/booking"
                    className="inline-flex items-center gap-2 bg-[#E6DAD2] hover:bg-[#F0E4D8] text-[#2D2D2B] font-semibold px-8 py-4 rounded-full transition-all"
                  >
                    Schedule Your Free Consultation
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <CTASection />

        {/* Related Links */}
        <section className="py-12 bg-[#F9F7F5]">
          <div className="container-custom">
            <AnimatedSection className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-cormorant font-medium text-[#2D2D2B] mb-6">
                Learn More About Our Services
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/signature-ombre-brows"
                  className="px-6 py-3 bg-white hover:bg-[#E6DAD2]/20 rounded-full border border-[#E6DAD2] transition-colors"
                >
                  Ombre Powder Brows
                </Link>
                <Link
                  to="/microshading-artistry"
                  className="px-6 py-3 bg-white hover:bg-[#E6DAD2]/20 rounded-full border border-[#E6DAD2] transition-colors"
                >
                  Microshading
                </Link>
                <Link
                  to="/nano-brows"
                  className="px-6 py-3 bg-white hover:bg-[#E6DAD2]/20 rounded-full border border-[#E6DAD2] transition-colors"
                >
                  Nano Brows
                </Link>
                <Link
                  to="/gallery"
                  className="px-6 py-3 bg-white hover:bg-[#E6DAD2]/20 rounded-full border border-[#E6DAD2] transition-colors"
                >
                  View Gallery
                </Link>
                <Link
                  to="/about"
                  className="px-6 py-3 bg-white hover:bg-[#E6DAD2]/20 rounded-full border border-[#E6DAD2] transition-colors"
                >
                  About Mugi
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
};

export default HowToChoosePmuArtist;
