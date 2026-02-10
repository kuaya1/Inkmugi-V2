import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  Droplets, 
  Sun, 
  Shield,
  ArrowRight,
  Phone,
  Heart,
  Ban,
  ThermometerSun,
  Sparkles
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const AftercareGuide: React.FC = () => {
  const aftercareSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Ombre Powder Brows Aftercare: Complete Healing Guide",
    "description": "Step-by-step ombre powder brows aftercare guide from a licensed PMU artist with 523+ procedures. Covers the full 6-week healing timeline, what to avoid, and how to protect your results in DMV humidity.",
    "image": "https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg",
    "totalTime": "PT42D",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "supply": [
      { "@type": "HowToSupply", "name": "Aftercare ointment (provided in kit)" },
      { "@type": "HowToSupply", "name": "Clean cotton pads" },
      { "@type": "HowToSupply", "name": "Gentle, fragrance-free cleanser" },
      { "@type": "HowToSupply", "name": "SPF 30+ sunscreen (after day 14)" }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Days 1-3: Initial Healing",
        "text": "Gently blot brows with a clean cotton pad every 2-3 hours to absorb excess lymph fluid. Do not touch with fingers. Keep brows completely dry. Apply thin layer of aftercare ointment only if instructed.",
        "position": 1
      },
      {
        "@type": "HowToStep",
        "name": "Days 4-7: Flaking Phase",
        "text": "Brows will appear darker, then begin to flake. DO NOT pick, peel, or scratch the flaking skin. Let scabs fall off naturally. Continue keeping brows dry — no water, sweat, or steam on the area.",
        "position": 2
      },
      {
        "@type": "HowToStep",
        "name": "Days 7-14: Color Lightening",
        "text": "Color may appear very light or 'ghosted' — this is normal. The pigment is still settling beneath the healed skin layer. You can gently wash face, avoiding direct water pressure on brows. Begin using fragrance-free moisturizer lightly.",
        "position": 3
      },
      {
        "@type": "HowToStep",
        "name": "Days 14-28: Pigment Return",
        "text": "True color begins emerging as skin fully regenerates. Brows will gradually darken to their intended shade. You can return to normal skincare routine, avoiding active ingredients (retinol, glycolic acid) directly on brows.",
        "position": 4
      },
      {
        "@type": "HowToStep",
        "name": "Days 28-42: Final Healing",
        "text": "By week 6, brows are fully healed. Color is settled, shape is defined. Apply SPF 30+ when outdoors to protect pigment longevity. Schedule touch-up appointment if needed.",
        "position": 5
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does ombre powder brow aftercare last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The active aftercare phase lasts approximately 14 days, with full healing completing by 6 weeks (42 days). During the first 14 days, you'll need to follow specific care instructions to protect your results. After that, the brows continue to heal and settle on their own."
        }
      },
      {
        "@type": "Question",
        "name": "Can I wash my face after getting ombre brows?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For the first 7 days, avoid getting water directly on your brows. You can wash the rest of your face carefully, but keep the brow area dry. After day 7, you can gently cleanse around the brows. After day 14, you can wash normally but avoid scrubbing the brow area."
        }
      },
      {
        "@type": "Question",
        "name": "Why do my ombre brows look too dark after the procedure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This is completely normal! Fresh ombre brows appear 30-50% darker than the final healed result. The color will lighten significantly during the flaking phase (days 4-7) and may even appear too light during the 'ghosting' phase (days 7-14). The true color emerges by weeks 4-6. Trust the process — I've guided 523+ clients through this exact timeline."
        }
      },
      {
        "@type": "Question",
        "name": "What should I avoid after getting ombre powder brows?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For the first 14 days, avoid: sweating/exercise, swimming, saunas/steam rooms, direct sun exposure, makeup on or near brows, retinol/AHA/BHA products near brows, picking or scratching flaking skin, sleeping face-down, and alcohol consumption (first 24 hours). These can cause pigment loss, infection risk, or uneven healing."
        }
      },
      {
        "@type": "Question",
        "name": "How does DMV humidity affect ombre brow healing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The DMV's humidity (70-85% in summer) can extend the flaking phase by 1-2 days and increase lymph fluid production in the first 48 hours. I adjust pigment saturation and technique depth based on seasonal conditions. Summer clients may need to blot more frequently, while winter clients should use slightly more aftercare ointment to prevent dryness. This climate optimization is why our results last 18-36 months."
        }
      },
      {
        "@type": "Question",
        "name": "When can I exercise after ombre brows?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Avoid exercise and heavy sweating for at least 10-14 days after your procedure. Sweat can push pigment out of the skin and cause patchy healing. Light walking is fine after day 3. After day 14, you can gradually return to your workout routine. If you exercise outdoors in the DMV heat, wait the full 14 days."
        }
      }
    ]
  };

  const healingTimeline = [
    {
      phase: "Days 1-3",
      title: "Initial Healing",
      icon: <Droplets className="w-6 h-6" />,
      color: "bg-red-50 text-red-600",
      description: "Brows appear bold and defined. Light swelling and redness are normal.",
      dos: [
        "Gently blot with clean cotton pad every 2-3 hours",
        "Keep brows completely dry",
        "Sleep on your back, elevated if possible",
        "Apply thin layer of aftercare ointment if instructed"
      ],
      donts: [
        "Touch brows with fingers",
        "Get brows wet (shower carefully)",
        "Apply makeup on or near brows",
        "Exercise or sweat"
      ]
    },
    {
      phase: "Days 4-7",
      title: "Flaking & Scabbing Phase",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "bg-amber-50 text-amber-600",
      description: "Brows darken, then flake. This is the 'OMG they're too dark!' phase — it's normal.",
      dos: [
        "Let scabs fall off naturally — this is critical",
        "Continue keeping brows dry",
        "Be patient — this phase is temporary",
        "Text me if you're worried (that's what I'm here for)"
      ],
      donts: [
        "Pick, peel, or scratch flaking skin",
        "Use any products on brows",
        "Swim, sauna, or steam",
        "Panic — the color WILL lighten"
      ]
    },
    {
      phase: "Days 7-14",
      title: "Color Ghosting Phase",
      icon: <Sparkles className="w-6 h-6" />,
      color: "bg-blue-50 text-blue-600",
      description: "Brows may look very light or almost invisible. Pigment is settling beneath healed skin.",
      dos: [
        "Gently wash face (avoid direct water pressure on brows)",
        "Apply fragrance-free moisturizer lightly",
        "Trust the process — color is coming back",
        "Continue avoiding sun exposure"
      ],
      donts: [
        "Assume the procedure didn't work",
        "Apply retinol or acids near brows",
        "Start intense exercise yet",
        "Book a touch-up yet — wait for full healing"
      ]
    },
    {
      phase: "Weeks 3-4",
      title: "Pigment Return",
      icon: <Heart className="w-6 h-6" />,
      color: "bg-green-50 text-green-600",
      description: "True color emerges as skin fully regenerates. Shape becomes more defined.",
      dos: [
        "Return to normal skincare routine",
        "Begin using SPF on brows when outdoors",
        "Resume normal exercise",
        "Appreciate your new brows forming!"
      ],
      donts: [
        "Use retinol directly ON brows for 30 days total",
        "Get chemical peels near the brow area",
        "Expose brows to prolonged direct sun",
        "Judge final results yet — wait until week 6"
      ]
    },
    {
      phase: "Weeks 5-6",
      title: "Fully Healed",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "bg-emerald-50 text-emerald-600",
      description: "Brows are fully healed. This is your true result — the color and shape you'll enjoy for 18-36 months.",
      dos: [
        "Apply SPF 30+ daily (the #1 way to extend longevity)",
        "Schedule touch-up if needed (minor adjustments)",
        "Take healed photos to compare with day 1",
        "Enjoy your effortless morning routine!"
      ],
      donts: [
        "Skip sunscreen — UV degrades pigment faster than anything",
        "Use harsh exfoliants directly on brows",
        "Compare to day-1 photos without considering healing"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Ombre Brows Aftercare Guide: Complete Healing Timeline | Ink Mugi</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Complete ombre powder brows aftercare guide from a VA-licensed artist with 523+ procedures. Day-by-day healing timeline, what to avoid, DMV humidity tips, and when to schedule your touch-up." />
        <meta name="keywords" content="ombre brows aftercare, powder brows healing, PMU aftercare guide, ombre brows healing timeline, permanent makeup aftercare, brow tattoo aftercare" />
        <link rel="canonical" href="https://www.inkmugi.com/aftercare-guide" />
        <meta property="og:title" content="Ombre Brows Aftercare Guide: Complete Healing Timeline | Ink Mugi" />
        <meta property="og:description" content="Day-by-day aftercare guide from a licensed PMU artist. 523+ procedures, DMV climate-optimized healing tips." />
        <meta property="og:url" content="https://www.inkmugi.com/aftercare-guide" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ombre Brows Aftercare Guide | Ink Mugi" />
        <meta name="twitter:description" content="Complete healing timeline from a VA-licensed PMU artist with 523+ procedures." />
        <meta name="twitter:image" content="https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg" />
        <script type="application/ld+json">{JSON.stringify(aftercareSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.inkmugi.com" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.inkmugi.com/services" },
              { "@type": "ListItem", "position": 3, "name": "Aftercare Guide", "item": "https://www.inkmugi.com/aftercare-guide" }
            ]
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#F0E4D8] to-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <nav className="flex items-center justify-center gap-2 text-sm text-[#2D2D2B]/50 mb-6">
              <Link to="/" className="hover:text-[#9A7B69]">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-[#9A7B69]">Services</Link>
              <span>/</span>
              <span className="text-[#2D2D2B]">Aftercare Guide</span>
            </nav>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D2D2B] text-white rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              From 523+ Procedures
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium mb-6 text-[#2D2D2B] leading-tight">
              Ombre Brows Aftercare<br />
              <span className="text-[#9A7B69]">Complete Healing Guide</span>
            </h1>
            <p className="text-lg text-[#2D2D2B]/70 max-w-2xl mx-auto mb-8">
              Everything you need to know about healing, from day 1 through week 6. Written by Mugi — VA-licensed PMU artist with 523+ documented procedures and a 0.19% complication rate.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-[#2D2D2B]/60">
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6-week healing timeline</span>
              <span className="flex items-center gap-1"><ThermometerSun className="w-4 h-4" /> DMV climate-optimized</span>
              <span className="flex items-center gap-1"><Shield className="w-4 h-4" /> Evidence-based care</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-12 bg-white border-b border-[#E6DAD2]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="bg-[#F9F7F5] rounded-2xl p-8">
                <h2 className="text-2xl font-cormorant font-medium text-[#2D2D2B] mb-4">Key Takeaways</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#9A7B69] mt-0.5 flex-shrink-0" />
                    <p className="text-[#2D2D2B]/80"><strong>Days 1-7:</strong> Keep brows completely dry. Don't touch, pick, or peel.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#9A7B69] mt-0.5 flex-shrink-0" />
                    <p className="text-[#2D2D2B]/80"><strong>Days 7-14:</strong> Color will "ghost" — this is normal, it comes back.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#9A7B69] mt-0.5 flex-shrink-0" />
                    <p className="text-[#2D2D2B]/80"><strong>Weeks 3-6:</strong> True color emerges. Full healing by week 6.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#9A7B69] mt-0.5 flex-shrink-0" />
                    <p className="text-[#2D2D2B]/80"><strong>#1 tip:</strong> SPF 30+ daily after day 14 = longest-lasting results.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Healing Timeline */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-[#2D2D2B] mb-4">
              Your Healing Timeline
            </h2>
            <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
              What to expect at each phase — based on 523+ documented healing journeys in the DMV climate.
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-8">
            {healingTimeline.map((phase, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-[#F9F7F5] rounded-2xl overflow-hidden">
                  <div className={`${phase.color} px-6 py-4 flex items-center gap-3`}>
                    {phase.icon}
                    <div>
                      <p className="font-semibold">{phase.phase}</p>
                      <p className="text-sm opacity-80">{phase.title}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[#2D2D2B]/80 mb-6 italic">{phase.description}</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="font-medium text-[#2D2D2B] mb-3 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" /> DO:
                        </p>
                        <ul className="space-y-2">
                          {phase.dos.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-[#2D2D2B]/70">
                              <span className="text-green-500 mt-0.5">✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium text-[#2D2D2B] mb-3 flex items-center gap-2">
                          <Ban className="w-4 h-4 text-red-600" /> DON'T:
                        </p>
                        <ul className="space-y-2">
                          {phase.donts.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-[#2D2D2B]/70">
                              <span className="text-red-500 mt-0.5">✗</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* DMV Climate Section */}
      <section className="py-20 bg-[#F0E4D8]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-[#2D2D2B] mb-4">
                DMV Climate & Your Healing
              </h2>
              <p className="text-[#2D2D2B]/70 max-w-2xl mx-auto">
                Northern Virginia's unique climate affects PMU healing. Here's what I've learned from 523+ procedures in this region.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-6">
              <AnimatedSection>
                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Sun className="w-8 h-8 text-amber-500" />
                    <h3 className="text-xl font-cormorant font-medium text-[#2D2D2B]">Summer Healing (June-Sept)</h3>
                  </div>
                  <ul className="space-y-3 text-sm text-[#2D2D2B]/70">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#9A7B69] mt-0.5 flex-shrink-0" /> Humidity (70-85%) extends flaking phase by 1-2 days</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#9A7B69] mt-0.5 flex-shrink-0" /> Blot lymph fluid more frequently (every 1-2 hours on day 1)</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#9A7B69] mt-0.5 flex-shrink-0" /> Avoid outdoor activities that cause sweating</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#9A7B69] mt-0.5 flex-shrink-0" /> SPF is critical — UV exposure degrades pigment 40% faster</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#9A7B69] mt-0.5 flex-shrink-0" /> I adjust pigment saturation 10-15% for summer procedures</li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <ThermometerSun className="w-8 h-8 text-blue-500" />
                    <h3 className="text-xl font-cormorant font-medium text-[#2D2D2B]">Winter Healing (Nov-March)</h3>
                  </div>
                  <ul className="space-y-3 text-sm text-[#2D2D2B]/70">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#9A7B69] mt-0.5 flex-shrink-0" /> Dry indoor heat can cause premature flaking</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#9A7B69] mt-0.5 flex-shrink-0" /> Apply slightly more aftercare ointment to prevent dryness</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#9A7B69] mt-0.5 flex-shrink-0" /> Use a humidifier while sleeping during healing</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#9A7B69] mt-0.5 flex-shrink-0" /> Cold wind exposure is fine — just avoid rubbing brows</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#9A7B69] mt-0.5 flex-shrink-0" /> Winter is ideal for healing — less sweat = smoother results</li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* What to Avoid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-[#2D2D2B] mb-4">
                What to Avoid (First 14 Days)
              </h2>
            </AnimatedSection>

            <AnimatedSection>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { icon: <Droplets className="w-5 h-5" />, text: "Swimming, hot tubs, saunas" },
                  { icon: <Sun className="w-5 h-5" />, text: "Direct sun exposure" },
                  { icon: <ThermometerSun className="w-5 h-5" />, text: "Heavy exercise / sweating" },
                  { icon: <Ban className="w-5 h-5" />, text: "Picking or scratching brows" },
                  { icon: <Sparkles className="w-5 h-5" />, text: "Retinol, AHA, BHA near brows" },
                  { icon: <Ban className="w-5 h-5" />, text: "Makeup on/near brow area" },
                  { icon: <Droplets className="w-5 h-5" />, text: "Steam rooms / facial steaming" },
                  { icon: <Ban className="w-5 h-5" />, text: "Sleeping face-down" },
                  { icon: <AlertTriangle className="w-5 h-5" />, text: "Alcohol (first 24 hours)" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-red-50 rounded-xl p-4">
                    <div className="text-red-500">{item.icon}</div>
                    <span className="text-sm text-[#2D2D2B]/80">{item.text}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* When to Contact */}
      <section className="py-16 bg-[#F9F7F5]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-8 border-l-4 border-[#9A7B69]">
                <h2 className="text-2xl font-cormorant font-medium text-[#2D2D2B] mb-4">
                  When to Contact Me During Healing
                </h2>
                <p className="text-[#2D2D2B]/70 mb-4">
                  Text me anytime during your healing — that's what I'm here for. But definitely reach out if you notice:
                </p>
                <ul className="space-y-2 text-sm text-[#2D2D2B]/70">
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5" /> Unusual swelling or redness after day 3</li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5" /> Any signs of infection (pus, hot to touch, fever)</li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5" /> Extreme itching that doesn't subside</li>
                  <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5" /> You accidentally got them very wet or picked a scab</li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href="tel:+15712838228"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#2D2D2B] text-white rounded-full text-sm font-medium hover:bg-[#4A4A47] transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    Call (571) 283-8228
                  </a>
                  <Link
                    to="/faq"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-[#2D2D2B] text-[#2D2D2B] rounded-full text-sm font-medium hover:bg-[#2D2D2B] hover:text-white transition-all"
                  >
                    View Full FAQ
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-cormorant font-medium text-[#2D2D2B]">
              Related Resources
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Link to="/blog/pmu-healing-timeline-week-by-week" className="bg-[#F9F7F5] rounded-xl p-5 hover:shadow-md transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors text-sm">Week-by-Week Healing Guide</p>
              <p className="text-xs text-[#2D2D2B]/50 mt-1">Detailed blog post</p>
            </Link>
            <Link to="/climate-performance-analysis" className="bg-[#F9F7F5] rounded-xl p-5 hover:shadow-md transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors text-sm">DMV Climate Performance</p>
              <p className="text-xs text-[#2D2D2B]/50 mt-1">Research data</p>
            </Link>
            <Link to="/pmu-data-guide" className="bg-[#F9F7F5] rounded-xl p-5 hover:shadow-md transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors text-sm">523+ Procedure Data</p>
              <p className="text-xs text-[#2D2D2B]/50 mt-1">Safety statistics</p>
            </Link>
            <Link to="/services" className="bg-[#F9F7F5] rounded-xl p-5 hover:shadow-md transition-shadow group">
              <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors text-sm">Services & Pricing</p>
              <p className="text-xs text-[#2D2D2B]/50 mt-1">All-inclusive pricing</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#2D2D2B] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://live.staticflickr.com/65535/54363160242_7975c4f42c_o_d.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-cormorant font-medium mb-6">
              Ready to Start Your<br />Brow Transformation?
            </h2>
            <p className="text-lg text-[#F9F7F5]/90 mb-8">
              Every client receives a comprehensive aftercare kit, written instructions, and direct text support throughout the entire healing process. No guesswork.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#E6DAD2] text-[#2D2D2B] rounded-full font-medium hover:bg-[#F0E4D8] transition-all"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center justify-center px-8 py-4 border border-white text-white rounded-full font-medium hover:bg-white/10 transition-all"
              >
                View Healed Results
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default AftercareGuide;
