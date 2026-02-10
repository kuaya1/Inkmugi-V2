import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { DollarSign, MapPin, CheckCircle, AlertTriangle, ArrowRight, Star, Shield, Award, TrendingUp, BarChart3 } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import InlineFaqAccordion from '../components/InlineFaqAccordion';

const pricingData = [
  {
    technique: 'Ombre Powder Brows',
    inkMugi: '$600',
    dcAvg: '$800–1,200',
    tysonsAvg: '$800–1,100',
    arlingtonAvg: '$700–1,000',
    nationalAvg: '$400–800',
    notes: 'Most popular, best longevity, all skin types',
  },
  {
    technique: 'Microshading',
    inkMugi: '$700',
    dcAvg: '$900–1,400',
    tysonsAvg: '$900–1,200',
    arlingtonAvg: '$800–1,100',
    nationalAvg: '$500–900',
    notes: 'Hand-tool pixelated technique, natural finish',
  },
  {
    technique: 'Microblading',
    inkMugi: 'Not offered',
    dcAvg: '$600–1,000',
    tysonsAvg: '$600–900',
    arlingtonAvg: '$500–900',
    nationalAvg: '$300–700',
    notes: 'Hair strokes, fades fast on oily skin / humidity',
  },
  {
    technique: 'Nano Brows',
    inkMugi: 'Starting at $600',
    dcAvg: '$800–1,200',
    tysonsAvg: '$800–1,100',
    arlingtonAvg: '$700–1,000',
    nationalAvg: '$500–900',
    notes: 'Machine hair strokes, better retention than blade',
  },
  {
    technique: 'PMU Correction',
    inkMugi: '$400–900',
    dcAvg: '$600–1,500',
    tysonsAvg: '$600–1,200',
    arlingtonAvg: '$500–1,100',
    nationalAvg: '$400–1,000',
    notes: 'Fixing botched, faded, or discolored work',
  },
];

const hiddenCosts = [
  {
    name: 'Touch-up fee',
    warning: 'Many studios charge $200–400 extra for the mandatory 6-8 week touch-up',
    inkMugi: 'Included in $600 — always',
  },
  {
    name: 'Consultation fee',
    warning: 'Some studios charge $50–150 for consultations, non-refundable',
    inkMugi: 'Free — always',
  },
  {
    name: 'Numbing cream',
    warning: 'Budget studios skip numbing or charge $25–50 extra',
    inkMugi: 'Medical-grade numbing included',
  },
  {
    name: 'Aftercare kit',
    warning: 'Often sold separately for $30–60',
    inkMugi: 'Included in your price',
  },
  {
    name: 'Pigment upgrade',
    warning: '"Premium pigment" upsell of $50–100 is common',
    inkMugi: 'EU-compliant vegan pigments standard',
  },
  {
    name: 'Parking',
    warning: 'DC/Tysons studios: $5–20 parking fees per visit',
    inkMugi: 'Free parking at Heritage Center',
  },
];

const redFlags = [
  'Price under $300 for brows (materials alone cost $80–120)',
  'Groupon or deep-discount deals (highest correction rate in my practice)',
  'No touch-up included — this is industry standard and should always be bundled',
  'Artist can\'t show healed photos (only fresh/same-day results)',
  'No license number displayed or verifiable',
  'Pressure to book same-day without consultation',
  'Vague about pigment brands or sterilization protocols',
  'No written aftercare instructions provided',
];

const faqs = [
  {
    question: 'How much do ombre powder brows cost in the DMV area?',
    answer: 'In the DC/Maryland/Virginia area, ombre powder brows typically range from $600 to $1,200 depending on location and artist experience. DC studios average $800–1,200, Tysons/McLean studios average $800–1,100, and Arlington averages $700–1,000. At Ink Mugi in Annandale, ombre powder brows are $600 all-inclusive — consultation, procedure, premium pigments, aftercare kit, and 6-8 week touch-up all included.',
  },
  {
    question: 'Why is permanent makeup so expensive?',
    answer: 'Quality PMU requires significant investment: premium EU-compliant pigments ($80–120 per client), single-use sterilized equipment ($40–60), ongoing training and certification, Virginia state licensing, liability insurance, studio overhead, and 3-4 hours of artist time per procedure. The real question isn\'t "why is it expensive?" but "what are you getting for the price?" A $300 procedure cutting corners on materials and using a weekend-trained artist is far more expensive when you need $400–900 in corrections.',
  },
  {
    question: 'Is expensive always better for PMU?',
    answer: 'No. Price doesn\'t guarantee quality. A $1,200 Georgetown studio and a $600 Annandale studio can produce identical results — or the more expensive one could be worse. What matters: healed result photos (not fresh), procedure volume, complication rates, pigment quality, and licensing. My $600 price point reflects efficient overhead (free parking, reasonable rent) — not inferior quality. My 5.0-star rating across 47+ reviews and 523+ procedures demonstrate the results.',
  },
  {
    question: 'What should be included in the PMU price?',
    answer: 'A reputable all-inclusive price should cover: (1) free consultation, (2) custom brow mapping and design, (3) medical-grade numbing, (4) the full 2-3 hour procedure, (5) premium pigments, (6) aftercare kit with instructions, and (7) a follow-up touch-up at 6-8 weeks. If any of these are billed separately, you\'re paying more than the sticker price suggests. At Ink Mugi, all seven are included in the $600.',
  },
  {
    question: 'How much does a PMU touch-up cost?',
    answer: 'The initial 6-8 week touch-up should be included in your procedure price (it is at Ink Mugi). After that, annual color refreshes typically cost $150–300 in the DMV area. At Ink Mugi, annual color boosts are $200. This maintenance keeps your brows looking fresh and extends total longevity to 3+ years. Think of it like hair color maintenance — a fraction of the original cost.',
  },
  {
    question: 'Is it worth driving to Annandale from DC or Tysons to save money?',
    answer: 'Consider this: a 15-20 minute drive saves you $200–600 on the procedure, $0–20 on parking, and gets you free consultation + touch-up that other studios charge extra for. Plus, Ink Mugi\'s 523+ procedures and 5.0-star rating mean you\'re not sacrificing quality for price. Many DC and Tysons professionals are already making this drive — check our reviews from clients across the DMV.',
  },
  {
    question: 'How much does microblading correction cost?',
    answer: 'Microblading correction at Ink Mugi ranges from $400–900 depending on complexity. Minor corrections (color refresh, slight shape adjustment) are $400–500. Major corrections (full color correction + reshape) are $600–800. Complete cover-ups are $700–900. A $150 assessment consultation is required first (credited toward your correction). See full details on our PMU Correction page.',
  },
  {
    question: 'Can I finance permanent makeup?',
    answer: 'While Ink Mugi doesn\'t currently offer financing plans, many clients use their HSA/FSA cards, CareCredit, or personal payment plans. At $600 all-inclusive, our pricing is already the most competitive in the DMV for premium results. Some clients also split their savings across two paychecks — book the consultation now (free), then schedule the procedure when you\'re ready.',
  },
];

export default function PmuCostGuideDmv() {
  return (
    <>
      <Helmet>
        <title>PMU Cost Guide: DC, Maryland & Virginia Pricing (2026) | Ink Mugi</title>
        <meta
          name="description"
          content="Complete 2026 permanent makeup cost guide for the DMV area. Compare ombre brows, microblading, microshading & correction prices across DC, Tysons, Arlington & Annandale. Hidden fees exposed."
        />
        <link rel="canonical" href="https://www.inkmugi.com/pmu-cost-guide-dmv" />

        <meta property="og:title" content="PMU Cost Guide: DC, Maryland & Virginia Pricing (2026) | Ink Mugi" />
        <meta property="og:description" content="Compare permanent makeup prices across the DMV. Ombre brows $600–1,200, microblading $300–1,000, corrections $400–1,500. Plus hidden fees most studios don't tell you about." />
        <meta property="og:url" content="https://www.inkmugi.com/pmu-cost-guide-dmv" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Ink Mugi" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PMU Cost Guide: DC, Maryland & Virginia Pricing (2026)" />
        <meta name="twitter:description" content="Compare permanent makeup prices across the DMV. Hidden fees exposed. From a VA-licensed artist with 523+ procedures." />

        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Article',
                headline: 'PMU Cost Guide: DC, Maryland & Virginia Pricing (2026)',
                description: 'Complete permanent makeup pricing comparison for the DMV area — ombre brows, microblading, microshading, and correction costs across DC, Tysons, Arlington, and Annandale.',
                author: {
                  '@type': 'Person',
                  name: 'Mugi',
                  jobTitle: 'Licensed Permanent Cosmetic Tattooer',
                  worksFor: {
                    '@type': 'HealthAndBeautyBusiness',
                    name: 'Ink Mugi',
                    address: {
                      '@type': 'PostalAddress',
                      streetAddress: '7857 Heritage Dr #330',
                      addressLocality: 'Annandale',
                      addressRegion: 'VA',
                      postalCode: '22003',
                    },
                  },
                },
                publisher: {
                  '@type': 'Organization',
                  name: 'Ink Mugi',
                  url: 'https://www.inkmugi.com',
                },
                datePublished: '2026-02-09',
                dateModified: '2026-02-09',
                mainEntityOfPage: 'https://www.inkmugi.com/pmu-cost-guide-dmv',
              },
              {
                '@type': 'FAQPage',
                mainEntity: faqs.map((faq) => ({
                  '@type': 'Question',
                  name: faq.question,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                  },
                })),
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.inkmugi.com/' },
                  { '@type': 'ListItem', position: 2, name: 'Authority Hub', item: 'https://www.inkmugi.com/authority' },
                  { '@type': 'ListItem', position: 3, name: 'PMU Cost Guide DMV', item: 'https://www.inkmugi.com/pmu-cost-guide-dmv' },
                ],
              },
            ],
          })}
        </script>
      </Helmet>

      {/* Breadcrumb */}
      <div className="bg-amber-50 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center text-sm text-amber-900/60">
            <Link to="/" className="hover:text-amber-700">Home</Link>
            <span className="mx-2">›</span>
            <Link to="/authority" className="hover:text-amber-700">Research Hub</Link>
            <span className="mx-2">›</span>
            <span className="text-amber-900 font-medium">PMU Cost Guide DMV</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-amber-50 to-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <BarChart3 className="w-4 h-4" />
              2026 Pricing Research
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              PMU Cost Guide:<br />
              <span className="text-amber-700">DC, Maryland & Virginia</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transparent pricing comparison across the DMV — what you should pay, what's included,
              and the hidden fees most studios don't mention. Based on market research and 523+ procedures.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/booking"
                className="bg-amber-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-800 transition-colors"
              >
                Book Free Consultation
              </Link>
              <Link
                to="/services"
                className="border-2 border-amber-700 text-amber-700 px-8 py-3 rounded-full font-semibold hover:bg-amber-50 transition-colors"
              >
                View Our Pricing
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Key Takeaway */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection>
            <div className="bg-amber-50 border-l-4 border-amber-600 rounded-r-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Key Takeaway</h2>
              <p className="text-gray-700 leading-relaxed">
                In the DMV, permanent makeup prices range from <strong>$300 to $1,400+</strong> depending
                on technique, location, and artist experience. But the sticker price is only part of the
                story — hidden fees (touch-ups, consultations, pigment upgrades, parking) can add
                <strong> $200–500</strong> to your total cost. Always ask: <em>"What's included in this price?"</em>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Price Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                DMV Permanent Makeup Prices by Technique
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Average price ranges based on market research across DC, Tysons, Arlington, and the broader Northern Virginia area. Updated February 2026.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl shadow-lg">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="text-left p-4 font-semibold">Technique</th>
                    <th className="text-center p-4 font-semibold">
                      <span className="text-amber-400">Ink Mugi</span>
                      <br />
                      <span className="text-xs font-normal text-gray-300">Annandale, VA</span>
                    </th>
                    <th className="text-center p-4 font-semibold">
                      DC
                      <br />
                      <span className="text-xs font-normal text-gray-300">Georgetown, DuPont</span>
                    </th>
                    <th className="text-center p-4 font-semibold">
                      Tysons
                      <br />
                      <span className="text-xs font-normal text-gray-300">McLean area</span>
                    </th>
                    <th className="text-center p-4 font-semibold">
                      Arlington
                      <br />
                      <span className="text-xs font-normal text-gray-300">Clarendon, Ballston</span>
                    </th>
                    <th className="text-center p-4 font-semibold hidden lg:table-cell">
                      National Avg
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((row, i) => (
                    <tr key={row.technique} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-4 font-medium text-gray-900">
                        {row.technique}
                        <span className="block text-xs text-gray-500 mt-1">{row.notes}</span>
                      </td>
                      <td className="p-4 text-center font-bold text-amber-700">{row.inkMugi}</td>
                      <td className="p-4 text-center text-gray-600">{row.dcAvg}</td>
                      <td className="p-4 text-center text-gray-600">{row.tysonsAvg}</td>
                      <td className="p-4 text-center text-gray-600">{row.arlingtonAvg}</td>
                      <td className="p-4 text-center text-gray-400 hidden lg:table-cell">{row.nationalAvg}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-4 text-center">
              * Prices based on publicly listed rates and market research as of February 2026.
              Actual prices may vary. Ink Mugi prices are all-inclusive (see breakdown below).
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What's Included at Ink Mugi */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What's Included in Ink Mugi's $600
              </h2>
              <p className="text-gray-600">
                No hidden fees. No surprise charges. Here's exactly what your $600 covers.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { item: 'Free Consultation', detail: '30-minute in-person assessment, brow design preview, skin type analysis' },
                { item: 'Custom Brow Mapping', detail: 'Precise measurements using facial proportions — you approve before we start' },
                { item: 'Medical-Grade Numbing', detail: 'Premium topical anesthetic for maximum comfort throughout the procedure' },
                { item: 'Full Procedure (2-3 hours)', detail: 'Meticulous ombre powder brow application by a VA-licensed artist' },
                { item: 'EU-Compliant Vegan Pigments', detail: 'Premium pigments tested for color stability and safety — no cheap alternatives' },
                { item: 'Aftercare Kit', detail: 'Everything you need for proper healing with detailed written instructions' },
                { item: '6-8 Week Touch-Up', detail: 'Follow-up appointment to perfect your results — always included' },
                { item: 'Free Parking', detail: 'Heritage Center lot — no meters, no garages, no fees. Ever.' },
              ].map((inclusion) => (
                <div key={inclusion.item} className="flex gap-3 p-4 bg-green-50 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">{inclusion.item}</p>
                    <p className="text-sm text-gray-600">{inclusion.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Hidden Costs Exposed */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Hidden Costs Most Studios Don't Mention
              </h2>
              <p className="text-gray-600">
                That $500 price tag might actually be $800+ after add-ons. Here's what to watch for.
              </p>
            </div>
            <div className="space-y-4">
              {hiddenCosts.map((cost) => (
                <div key={cost.name} className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="w-4 h-4 text-orange-500" />
                        <h3 className="font-bold text-gray-900">{cost.name}</h3>
                      </div>
                      <p className="text-sm text-gray-600">{cost.warning}</p>
                    </div>
                    <div className="md:w-64 bg-green-50 rounded-lg p-3 flex-shrink-0">
                      <p className="text-sm font-medium text-green-800">
                        <span className="text-xs text-green-600 block">At Ink Mugi:</span>
                        {cost.inkMugi}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Cost per Year Breakdown */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The Real Cost: Price Per Year of Wear
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                PMU that lasts longer costs less per year. Here's the math that changes how you think about pricing.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 text-center relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  BEST VALUE
                </div>
                <h3 className="text-lg font-bold text-gray-900 mt-2">Ink Mugi Ombre Brows</h3>
                <p className="text-4xl font-bold text-amber-700 my-4">$200<span className="text-lg text-gray-500">/year</span></p>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /> $600 all-inclusive</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /> Lasts 2-3 years</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /> Touch-up included</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /> $200/year annual boost</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
                <h3 className="text-lg font-bold text-gray-900 mt-2">DC Studio Ombre Brows</h3>
                <p className="text-4xl font-bold text-gray-600 my-4">$400+<span className="text-lg text-gray-400">/year</span></p>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li className="flex items-start gap-2"><DollarSign className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" /> $800–1,200 procedure</li>
                  <li className="flex items-start gap-2"><DollarSign className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" /> Lasts 2-3 years</li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" /> Touch-up often extra $200-400</li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" /> Parking $10-20/visit</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
                <h3 className="text-lg font-bold text-gray-900 mt-2">Daily Brow Makeup</h3>
                <p className="text-4xl font-bold text-gray-600 my-4">$500+<span className="text-lg text-gray-400">/year</span></p>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li className="flex items-start gap-2"><DollarSign className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" /> Pencils, pomades, gels: $15-40/month</li>
                  <li className="flex items-start gap-2"><DollarSign className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" /> 10-15 min daily = 60-90 hrs/year</li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" /> Smudges, melts in humidity</li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" /> Can't swim, sweat, or sleep in</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Red Flags */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                8 Pricing Red Flags to Watch For
              </h2>
              <p className="text-gray-600">
                If a PMU studio does any of these, proceed with extreme caution.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {redFlags.map((flag, i) => (
                <div key={i} className="flex gap-3 bg-white rounded-xl p-4 border border-red-100">
                  <div className="w-7 h-7 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-sm">{i + 1}</span>
                  </div>
                  <p className="text-gray-700 text-sm">{flag}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Ink Mugi's Pricing Makes Sense */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Ink Mugi Charges $600 (Not $1,000)
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                You might wonder how we offer premium results at a lower price point. It's not a discount — it's smart economics.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <MapPin className="w-10 h-10 text-amber-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Location Economics</h3>
                <p className="text-gray-600 text-sm">
                  Annandale rent is 40-60% less than Georgetown or Tysons. Free parking means zero garage costs.
                  These savings go directly to you — same quality, lower overhead.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <TrendingUp className="w-10 h-10 text-amber-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Volume & Efficiency</h3>
                <p className="text-gray-600 text-sm">
                  523+ procedures means efficiency through experience. I don't need 4 hours for what
                  I can do expertly in 2.5. My time efficiency benefits you financially.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <Shield className="w-10 h-10 text-amber-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">No Markup Games</h3>
                <p className="text-gray-600 text-sm">
                  No "premium pigment" upsells. No consultation fees. No separate touch-up charges.
                  One honest price that covers everything — because that's how it should be.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Credentials Strip */}
      <section className="py-12 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-2 text-amber-900">
              <Award className="w-5 h-5 text-amber-700" />
              <span className="text-sm font-medium">VA License #1231002471</span>
            </div>
            <div className="flex items-center gap-2 text-amber-900">
              <Star className="w-5 h-5 text-amber-700" />
              <span className="text-sm font-medium">5.0★ · 47+ Reviews</span>
            </div>
            <div className="flex items-center gap-2 text-amber-900">
              <Shield className="w-5 h-5 text-amber-700" />
              <span className="text-sm font-medium">0.19% Complication Rate</span>
            </div>
            <div className="flex items-center gap-2 text-amber-900">
              <BarChart3 className="w-5 h-5 text-amber-700" />
              <span className="text-sm font-medium">523+ Procedures</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                PMU Pricing FAQ
              </h2>
              <p className="text-gray-600">
                Common questions about permanent makeup costs in the DMV area.
              </p>
            </div>
            <InlineFaqAccordion faqs={faqs} maxVisible={8} />
          </AnimatedSection>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Related Resources</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Services & Pricing', to: '/services', sub: 'Full menu' },
                { label: 'PMU Corrections', to: '/pmu-correction-restoration', sub: '$400–900' },
                { label: 'Microshading', to: '/microshading-artistry', sub: '$700 all-inclusive' },
                { label: 'Aftercare Guide', to: '/aftercare-guide', sub: 'Healing timeline' },
                { label: 'Safety Data', to: '/permanent-makeup-safety-dmv', sub: '0.19% complication rate' },
                { label: 'Authority Hub', to: '/authority', sub: '523+ procedure data' },
                { label: 'View Gallery', to: '/gallery', sub: 'Healed results' },
                { label: 'Book Now', to: '/booking', sub: 'Free consultation' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
                >
                  <p className="font-semibold text-gray-900 group-hover:text-amber-700 transition-colors text-sm">
                    {link.label}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{link.sub}</p>
                  <ArrowRight className="w-4 h-4 text-amber-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-4">
              Get Premium Results at an Honest Price
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              $600 all-inclusive ombre powder brows. Free consultation. Free parking. No hidden fees.
              523+ procedures and a 5.0-star reputation backing every result.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/booking"
                className="bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-500 transition-colors"
              >
                Book Free Consultation
              </Link>
              <Link
                to="/gallery"
                className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                View Healed Results
              </Link>
            </div>
            <p className="text-gray-400 mt-6 text-sm">
              Or call/text: <a href="tel:+15712838228" className="text-amber-400 hover:text-amber-300 font-medium">(571) 283-8228</a>
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
