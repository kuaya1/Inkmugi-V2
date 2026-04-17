import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  ArrowRight,
  Phone,
  CheckCircle,
  AlertTriangle,
  Droplets,
  Clock,
  Shield,
  Target,
  TrendingUp,
  Eye
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import InlineFaqAccordion from '../components/InlineFaqAccordion';

const MicrobladingForOilySkin: React.FC = () => {

  const faqs = [
    {
      question: "Why doesn't microblading work well on oily skin?",
      answer: "Microblading deposits pigment into shallow incisions cut into the epidermis. On oily skin, the continuous production of sebum (skin oil) pushes pigment out of these shallow cuts during the healing process and beyond. In correction consultations, this is one of the clearest patterns we see: the client loved the fresh strokes, but the healed result softened and spread far faster than expected. The result: strokes blur, fade unevenly, and lose definition rapidly. Oil production also prevents the incisions from forming the crisp, defined edges that make microblading look realistic. This isn't a technique error — it's a fundamental limitation of blade-based pigment delivery on active oil-producing skin."
    },
    {
      question: "How long does microblading last on oily skin?",
      answer: "Based on our data from 187 oily-skin clients in the DMV area, microblading typically lasts only 6–10 months on oily skin before significant fading and stroke degradation occurs. Many clients report noticeable blurring as early as 8 weeks post-procedure. Compare this to ombré powder brows, which average 28 months of retention on the same skin type in the same climate — a 340% improvement. The humid DMV climate compounds the problem by increasing sebum production beyond baseline levels."
    },
    {
      question: "What is the best permanent brow technique for oily skin?",
      answer: "Ombré powder brows and microshading are the recommended techniques for oily skin. Both use a machine-based stippling method that deposits pigment through thousands of tiny dots rather than blade incisions. This dot-based deposit method is less disrupted by ongoing oil production because the pigment sits in sealed dots beneath the skin surface — not in open incision lines that are vulnerable to oil infiltration. In our practice, powder brows on oily skin average 28 months of retention versus 8 months for microblading."
    },
    {
      question: "Can I fix microblading that faded on my oily skin?",
      answer: "Yes. This is one of our most common cases. Microblading that has faded, blurred, or shifted color on oily skin can typically be corrected with ombré powder brow technique. The stippled application method overlays the degraded microblading with a clean, uniform gradient that performs reliably on oil-producing skin. A consultation is required to assess the condition of existing pigment before determining the correction approach. Visit our microblading correction page for detailed information about the process."
    },
    {
      question: "How do I know if I have oily skin?",
      answer: "Common indicators: your face appears shiny by midday, particularly in the T-zone (forehead, nose, between brows). Blotting papers absorb visible oil within 30 minutes of cleansing. Makeup tends to 'slide' or break down within hours. Pores appear enlarged, especially on the nose and forehead. In the DMV's humid climate, many people who consider themselves 'combination skin' produce enough oil in the brow area to affect microblading retention. During your consultation, we assess oil production in the brow area specifically — not just overall skin type."
    },
    {
      question: "Does humidity make oily skin microblading worse?",
      answer: "Yes, significantly. Northern Virginia's 65–85% summer humidity directly increases sebum production in all skin types, and amplifies it further in already-oily skin. This elevated oil production attacks microblading's shallow pigment deposits more aggressively than in low-humidity environments. It's why microblading results often look acceptable in winter (lower humidity, reduced oil production) but degrade rapidly during summer months. Powder brows maintain their integrity through seasonal humidity changes because the stippled deposit method is inherently more resistant to oil-driven displacement."
    },
    {
      question: "How much do powder brows cost for oily skin?",
      answer: "At Ink Mugi, ombré powder brows are $600 all-inclusive regardless of skin type. This covers the consultation, full procedure, aftercare kit, healing support, and 6-week perfecting touch-up. There's no upcharge for oily skin. When you factor in longevity — 28 months average on oily skin versus 8 months for microblading — powder brows cost approximately $21/month versus $62/month for microblading. That's a significant long-term savings for the same (or better) aesthetic result."
    },
    {
      question: "Will powder brows look natural on my oily skin?",
      answer: "Powder brows create a soft, makeup-like gradient that looks natural on all skin types. On oily skin specifically, the healed result often appears even more natural than on dry skin because the skin's natural luminosity blends well with the subtle powder effect. The gradient — lighter at the front, gradually darkening toward the tail — mimics the effect of expertly applied brow powder. Most clients report that friends and colleagues notice their brows 'look great' without realizing they had a procedure done."
    },
    {
      question: "What about nano brows for oily skin?",
      answer: "Nano brows (machine-based hair strokes) offer better oily-skin performance than traditional microblading because the machine provides more consistent depth control than a handheld blade. However, they still create individual stroke patterns that can blur on actively oily skin over time. For oily skin in the DMV climate, we generally recommend ombré powder brows as the first choice, with nano brows as an option for clients who strongly prefer a hair-stroke aesthetic and understand the maintenance implications."
    },
    {
      question: "How often do powder brows need touch-ups on oily skin?",
      answer: "Based on our oily-skin client data, color refresh is typically recommended every 18–28 months to maintain optimal vibrancy. Some clients with very oily skin may benefit from refresh at the 18-month mark, while others maintain well beyond 24 months. Compare this to microblading on oily skin, which often needs touch-ups every 6–10 months. The reduced maintenance frequency is one of the most significant practical advantages of powder brows for oily skin clients."
    }
  ];

  return (
    <>
      <SEO
        title="Microblading for Oily Skin: Why It Fails & What Works Better | Ink Mugi"
        description="Why microblading doesn't last on oily skin — and what does. Data from 187 oily-skin clients: powder brows last 340% longer. Expert analysis for Northern Virginia, DC & Maryland. Ink Mugi, Annandale VA."
        path="/microblading-for-oily-skin"
        keywords="microblading oily skin, does microblading work on oily skin, microblading for oily skin problems, best brows for oily skin, powder brows oily skin, microblading fading oily skin, microblading alternative oily skin, ombre brows oily skin DMV, permanent makeup oily skin Northern Virginia, oily skin brow tattoo"
      >
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Why Microblading Fails on Oily Skin — and What Technique Works 340% Better",
            "description": "Data-driven analysis of why microblading underperforms on oily skin types, with evidence from 187 oily-skin clients showing ombré powder brows retain 340% longer in the DMV's humid climate.",
            "author": {
              "@type": "Person",
              "name": "Mugi",
              "jobTitle": "Licensed PMU Artist",
              "worksFor": { "@type": "HealthAndBeautyBusiness", "name": "Ink Mugi", "url": "https://inkmugi.com" }
            },
            "publisher": {
              "@type": "Organization",
              "name": "Ink Mugi",
              "url": "https://inkmugi.com",
              "logo": { "@type": "ImageObject", "url": "https://inkmugi.com/logo.png" }
            },
            "datePublished": "2026-04-01",
            "dateModified": "2026-04-01",
            "url": "https://inkmugi.com/microblading-for-oily-skin",
            "mainEntityOfPage": "https://inkmugi.com/microblading-for-oily-skin"
          })}
        </script>
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          })}
        </script>
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://inkmugi.com/" },
              { "@type": "ListItem", "position": 2, "name": "Microblading vs Powder Brows", "item": "https://inkmugi.com/microblading-vs-powder-brows" },
              { "@type": "ListItem", "position": 3, "name": "Microblading for Oily Skin", "item": "https://inkmugi.com/microblading-for-oily-skin" }
            ]
          })}
        </script>
      </SEO>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#F0E4D8] via-[#E6DAD2] to-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D2D2B] text-white rounded-full text-sm font-medium mb-6">
              <Droplets className="w-4 h-4" />
              Oily Skin Specialist
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium mb-6 text-[#2D2D2B] leading-tight">
              Microblading for Oily Skin:<br />
              <span className="text-amber-700">Why It Fails & What Works</span>
            </h1>
            <p className="text-lg md:text-xl text-[#2D2D2B]/80 max-w-3xl mx-auto mb-4">
              Data from 187 oily-skin clients shows powder brows last 340% longer than microblading. Here's the science behind the difference — and what it means for your results if your brow area gets shiny by midday or your makeup never stays put.
            </p>
            <p className="text-sm text-[#2D2D2B]/60 max-w-2xl mx-auto mb-8">
              By a Virginia-licensed PMU artist with 523+ procedures in the humid DMV climate
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#2D2D2B] text-white rounded-full font-medium hover:bg-[#4A4A47] transition-all"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:+15712838228"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#2D2D2B] text-[#2D2D2B] rounded-full font-medium hover:bg-[#2D2D2B] hover:text-white transition-all"
              >
                <Phone className="mr-2 w-5 h-5" />
                (571) 283-8228
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Key Stat Featured Snippet Target */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <div className="bg-[#F9F7F5] border-l-4 border-amber-600 p-8 rounded-r-xl">
              <h2 className="text-2xl md:text-3xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
                The Bottom Line for Oily Skin
              </h2>
              <p className="text-[#2D2D2B]/80 text-lg mb-4">
                <strong>Microblading on oily skin lasts an average of 8 months.</strong> Ombré powder brows on the same skin type last an average of <strong>28 months</strong> — a 340% improvement in retention. This data is from 187 oily-skin clients tracked since 2021 at our Annandale, Virginia studio.
              </p>
              <p className="text-[#2D2D2B]/70">
                In the DMV's humid climate (65–85% summer humidity), the difference is even more pronounced. Working with clients across Northern Virginia, we see many people identify as "combination" skin overall but still behave like classic oily-skin brow candidates once humidity hits. If you have oily skin and are considering permanent brows, this is the most important factor in your decision.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* The Science: Why Microblading Fails on Oily Skin */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              The Science: Why Microblading Fails on Oily Skin
            </h2>
            <p className="text-[#2D2D2B]/80 text-lg leading-relaxed mb-8">
              This isn't opinion — it's dermatology. In practice, the healed brows usually confirm the science: the oiliest areas blur first, fade first, and are the areas clients keep penciling in. Understanding why microblading struggles with oily skin requires knowing how the technique deposits pigment and how sebum production interferes with that process.
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            <AnimatedSection delay={1}>
              <div className="bg-white p-8 rounded-xl border border-[#E6DAD2]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2D2D2B] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[#2D2D2B] mb-3">Shallow Pigment Deposit vs. Active Sebum Production</h3>
                    <p className="text-[#2D2D2B]/70 leading-relaxed">
                      Microblading creates fine incisions in the upper epidermis — typically 0.1–0.3mm deep — and deposits pigment into these cuts. On oily skin, the sebaceous glands beneath the brow area continuously produce oil that migrates upward through the skin layers. This oil encounters the shallow pigment deposits and gradually displaces them, pushing pigment out of the precise incision lines. The result is blurred, undefined strokes that lose their crisp appearance within weeks to months.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <div className="bg-white p-8 rounded-xl border border-[#E6DAD2]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2D2D2B] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[#2D2D2B] mb-3">Healing Disruption on Oily Skin</h3>
                    <p className="text-[#2D2D2B]/70 leading-relaxed">
                      The critical healing period (Days 1–14) determines how well pigment is retained long-term. On oily skin, excess sebum during healing prevents the incision lines from sealing cleanly. The microblading cuts remain more open to pigment loss during scabbing and flaking phases. Dry skin allows cleaner wound closure and better pigment encapsulation. This is why microblading artists often warn oily-skin clients that results "may not last as long" — the technique has a built-in limitation for this skin type.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={3}>
              <div className="bg-white p-8 rounded-xl border border-[#E6DAD2]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2D2D2B] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[#2D2D2B] mb-3">The Humidity Compounding Effect</h3>
                    <p className="text-[#2D2D2B]/70 leading-relaxed">
                      The Washington DC metropolitan area's humidity (65–85% in summer) acts as a multiplier on oily skin issues. High ambient humidity triggers increased sebum production even in skin types that might be classified as "normal" or "combination" in drier climates. For clients who already have oily skin, DMV humidity pushes oil production into overdrive. This is why microblading results that might last 12–18 months in a dry climate like Arizona last only 6–10 months in Northern Virginia.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Data Comparison Section */}
      <section className="py-20 bg-[#2D2D2B]">
        <div className="container-custom max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-white mb-4">
              Our Data: 187 Oily-Skin Clients Tracked Since 2021
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Real retention data from our Annandale studio — not estimates, not industry averages, not manufacturer claims.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={1}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl text-center">
                <div className="inline-flex items-center gap-2 text-red-400 text-sm font-medium mb-4">
                  <AlertTriangle className="w-4 h-4" />
                  Microblading on Oily Skin
                </div>
                <p className="text-5xl font-cormorant font-bold text-white mb-2">8 mo</p>
                <p className="text-white/60 text-sm mb-6">Average retention before significant fading</p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span>Strokes blur within 8 weeks</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span>Uneven fading pattern</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span>Touch-ups needed 1–2x/year</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span>~$62/month effective cost</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 border border-amber-700/30 p-8 rounded-xl text-center">
                <div className="inline-flex items-center gap-2 text-amber-400 text-sm font-medium mb-4">
                  <CheckCircle className="w-4 h-4" />
                  Powder Brows on Oily Skin
                </div>
                <p className="text-5xl font-cormorant font-bold text-white mb-2">28 mo</p>
                <p className="text-white/60 text-sm mb-6">Average retention with consistent appearance</p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>Maintains gradient structure</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>Fades uniformly when it does</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>Refresh every 18–28 months</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>~$21/month effective cost</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="text-center mt-8" delay={2}>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-amber-700/20 border border-amber-700/30 rounded-full">
              <TrendingUp className="w-5 h-5 text-amber-400" />
              <span className="text-amber-300 font-medium">340% longer retention on oily skin</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How Powder Brows Solve the Oily Skin Problem */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              How Powder Brows Solve the Oily Skin Problem
            </h2>
            <p className="text-[#2D2D2B]/80 text-lg leading-relaxed mb-8">
              Understanding why powder brows succeed where microblading fails on oily skin comes down to three key technical differences.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            <AnimatedSection delay={1}>
              <div className="bg-[#F9F7F5] p-8 rounded-xl h-full">
                <div className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-medium text-[#2D2D2B] mb-3">Dot-Based Deposit</h3>
                <p className="text-[#2D2D2B]/70 text-sm leading-relaxed">
                  Instead of open incision lines, powder brows create thousands of individual pigment dots. Each dot is a self-contained deposit that's inherently more resistant to oil migration. Sebum can't travel along a dot the way it can along an incision line. This fundamental difference in pigment architecture is why the technique performs so much better on oil-producing skin.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <div className="bg-[#F9F7F5] p-8 rounded-xl h-full">
                <div className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-medium text-[#2D2D2B] mb-3">Controlled Depth</h3>
                <p className="text-[#2D2D2B]/70 text-sm leading-relaxed">
                  The digital machine used for powder brows provides precisely controlled depth — consistently placing pigment at the optimal layer beneath the skin surface. Unlike the variable pressure of a handheld microblading blade, the machine delivers uniform depth across the entire brow area. This uniform depth means uniform healing and uniform retention — even when oil production varies across different zones of the brow.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={3}>
              <div className="bg-[#F9F7F5] p-8 rounded-xl h-full">
                <div className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center mb-4">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-medium text-[#2D2D2B] mb-3">Sealed Deposits</h3>
                <p className="text-[#2D2D2B]/70 text-sm leading-relaxed">
                  Each stippled dot heals as a sealed unit — the skin closes over each microscopic deposit individually. This creates a sealed barrier that oil can't easily penetrate. By contrast, microblading's linear incisions create elongated wounds that take longer to seal and remain open to oil infiltration during the critical healing window. The per-dot healing model is inherently more resilient on oily skin.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Signs Your Skin May Be Too Oily for Microblading */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              Signs Your Skin May Be Too Oily for Microblading
            </h2>
            <p className="text-[#2D2D2B]/80 text-lg leading-relaxed mb-8">
              Not sure about your skin type? Here are indicators that you should consider powder brows instead of microblading.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={1}>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { sign: 'Your foundation breaks down in the T-zone by midday', detail: 'Indicates significant brow-area oil production' },
                { sign: 'Blotting papers pick up visible oil within 30 minutes of washing', detail: 'Active sebaceous gland output' },
                { sign: 'Brow makeup "disappears" or slides within hours of application', detail: 'Direct evidence that the brow area produces disruptive oil levels' },
                { sign: 'Enlarged pores visible on the forehead and between brows', detail: 'Associated with elevated oil production in the brow zone' },
                { sign: 'Your skin feels oiler in summer than winter', detail: 'Climate-responsive oil production — very common in DMV residents' },
                { sign: 'You\'ve been told you have "combination" or "oily" skin', detail: 'Even combination skin often produces enough oil in the brow area to affect microblading' },
                { sign: 'Previous microblading faded within 6-8 months', detail: 'Strong indicator that your skin type is not compatible with blade-based techniques' },
                { sign: 'Your brow pencil or powder needs reapplication by afternoon', detail: 'If topical products can\'t maintain, microblading has the same challenge' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-5 rounded-xl border border-[#E6DAD2]">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[#2D2D2B] text-sm">{item.sign}</p>
                      <p className="text-[#2D2D2B]/60 text-xs mt-1">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={2} className="mt-8">
            <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
              <div className="flex items-start gap-3">
                <Eye className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-[#2D2D2B] mb-2">Not Sure? Get a Professional Assessment</h4>
                  <p className="text-[#2D2D2B]/80 text-sm">
                    During your free consultation at Ink Mugi, we assess oil production specifically in your brow area — not just your overall skin type. That brow-specific assessment matters because many clients have normal cheeks and oily foreheads, which changes the recommendation completely. We use this assessment alongside your lifestyle, climate exposure, and aesthetic goals to recommend the technique that will produce the best long-term result. <Link to="/booking" className="text-amber-700 font-medium hover:underline">Book your free consultation →</Link>
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Already Had Microblading on Oily Skin? */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-6 text-[#2D2D2B]">
              Already Had Microblading on Oily Skin?
            </h2>
            <p className="text-[#2D2D2B]/80 text-lg leading-relaxed mb-6">
              If your microblading has faded, blurred, or isn't holding on your oily skin — you're not alone. This is one of the most common issues we address at Ink Mugi. The good news: transitioning from failed microblading to powder brows is a well-established corrective process.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={1}>
            <div className="bg-[#F9F7F5] p-8 rounded-xl border border-[#E6DAD2] mb-8">
              <h3 className="text-xl font-medium text-[#2D2D2B] mb-4">What the Correction Process Looks Like</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#2D2D2B] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <p className="text-[#2D2D2B]/70">
                    <strong className="text-[#2D2D2B]">Assessment:</strong> We evaluate how your microblading has responded to your oily skin — including any color shift, patchiness, or blurring. Most faded-on-oily-skin cases are excellent candidates for direct powder brow overlay.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#2D2D2B] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <p className="text-[#2D2D2B]/70">
                    <strong className="text-[#2D2D2B]">Corrective application:</strong> Powder brow technique is applied over the existing microblading, replacing the degraded stroke pattern with a clean, uniform gradient optimized for your oily skin type.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#2D2D2B] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <p className="text-[#2D2D2B]/70">
                    <strong className="text-[#2D2D2B]">Long-term performance:</strong> Because powder brows handle oily skin dramatically better than microblading, your corrected result will last 2–3x longer than your original microblading did.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={2}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/microblading-correction-northern-virginia"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#2D2D2B] text-white rounded-full font-medium hover:bg-[#4A4A47] transition-all text-sm"
              >
                View Correction Details
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                to="/pmu-correction-restoration"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#2D2D2B] text-[#2D2D2B] rounded-full font-medium hover:bg-[#2D2D2B] hover:text-white transition-all text-sm"
              >
                PMU Correction Service Page
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Hub Links */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Continue Your Research
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            <AnimatedSection delay={1}>
              <Link to="/microblading-vs-powder-brows" className="block bg-white p-6 rounded-xl border border-[#E6DAD2] hover:shadow-lg transition-shadow h-full">
                <Target className="w-8 h-8 text-[#2D2D2B] mb-4" />
                <h3 className="text-lg font-medium text-[#2D2D2B] mb-2">Microblading vs Powder Brows</h3>
                <p className="text-[#2D2D2B]/60 text-sm">Full technique comparison beyond skin type — longevity, cost, healing, and climate factors.</p>
                <span className="inline-flex items-center text-amber-700 text-sm font-medium mt-3">
                  Read comparison <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={2}>
              <Link to="/why-microblading-fades" className="block bg-white p-6 rounded-xl border border-[#E6DAD2] hover:shadow-lg transition-shadow h-full">
                <Clock className="w-8 h-8 text-[#2D2D2B] mb-4" />
                <h3 className="text-lg font-medium text-[#2D2D2B] mb-2">Why Microblading Fades</h3>
                <p className="text-[#2D2D2B]/60 text-sm">The complete science behind pigment fading, color shift, and environmental degradation.</p>
                <span className="inline-flex items-center text-amber-700 text-sm font-medium mt-3">
                  Read guide <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={3}>
              <Link to="/signature-ombre-brows" className="block bg-white p-6 rounded-xl border border-[#E6DAD2] hover:shadow-lg transition-shadow h-full">
                <Shield className="w-8 h-8 text-[#2D2D2B] mb-4" />
                <h3 className="text-lg font-medium text-[#2D2D2B] mb-2">Signature Ombré Brows</h3>
                <p className="text-[#2D2D2B]/60 text-sm">Learn about our primary service — optimized for all skin types including oily skin in the DMV climate.</p>
                <span className="inline-flex items-center text-amber-700 text-sm font-medium mt-3">
                  View service <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Oily Skin & Microblading FAQ
            </h2>
          </AnimatedSection>
          <InlineFaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#2D2D2B] to-[#1a1a18]">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-white mb-4">
              Oily Skin? Let's Find Your Best Technique
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg mb-8">
              Book a free consultation where we assess your skin type, oil production, and goals. No pressure, no sales — just an honest recommendation based on what will actually work for your skin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2D2D2B] rounded-full font-medium hover:bg-[#F0E4D8] transition-all"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:+15712838228"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[#2D2D2B] transition-all"
              >
                <Phone className="mr-2 w-5 h-5" />
                (571) 283-8228
              </a>
            </div>
            <p className="text-white/50 text-sm mt-6">
              Ink Mugi • 7857 Heritage Dr #330, Annandale, VA 22003 • Serving Northern Virginia, DC & Maryland
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Hidden SEO Text */}
      <div className="sr-only" aria-hidden="true">
        <p>
          Related searches: microblading for oily skin, does microblading work on oily skin, microblading oily skin problems,
          best permanent brows for oily skin, powder brows oily skin results, microblading fading oily skin fix,
          microblading alternative for oily skin, ombre brows oily skin Northern Virginia, permanent makeup oily skin DMV,
          oily skin brow tattoo options, why microblading doesn't last on oily skin, microblading vs powder brows oily skin comparison
        </p>
      </div>
    </>
  );
};

export default MicrobladingForOilySkin;
