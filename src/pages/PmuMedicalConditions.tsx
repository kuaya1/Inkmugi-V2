import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  CheckCircle,
  AlertTriangle,
  XCircle,
  Heart,
  Shield,
  Pill,
  Activity,
  Baby,
  ArrowRight,
  Sparkles,
  Info,
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import CTASection from '../components/CTASection';

const PmuMedicalConditions: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const safeConditions = [
    {
      condition: 'Alopecia (Hair Loss)',
      icon: <CheckCircle className="w-8 h-8 text-green-700" />,
      description:
        'PMU is excellent for alopecia areata, trichotillomania, or chemotherapy-related brow loss. The procedure creates natural-looking brows where hair no longer grows.',
      considerations: 'Must wait 6-12 months after chemotherapy completion. Skin must be fully healed if alopecia created scarring.',
    },
    {
      condition: 'Vitiligo',
      icon: <CheckCircle className="w-8 h-8 text-green-700" />,
      description:
        'PMU can be performed on stable vitiligo patches. The pigment may appear slightly different on depigmented skin but blends well overall.',
      considerations: 'Vitiligo must be stable (no new patches in 6+ months). Color selection requires expert assessment.',
    },
    {
      condition: 'Thyroid Conditions (Controlled)',
      icon: <CheckCircle className="w-8 h-8 text-green-700" />,
      description:
        'Hypothyroidism or hyperthyroidism that is well-controlled with medication does not prevent PMU. Many clients with thyroid conditions have successful procedures.',
      considerations: 'Must be on stable medication regimen. Obtain doctor clearance if condition is newly diagnosed.',
    },
    {
      condition: 'Anxiety / Depression',
      icon: <CheckCircle className="w-8 h-8 text-green-700" />,
      description:
        'Mental health conditions do not prevent PMU. Many clients report improved self-esteem and reduced morning anxiety after getting permanent makeup.',
      considerations: 'If you have body dysmorphia or extreme perfectionism, we discuss realistic expectations during consultation.',
    },
    {
      condition: 'Allergies (General)',
      icon: <CheckCircle className="w-8 h-8 text-green-700" />,
      description:
        'General environmental allergies (pollen, dust, pets) do not affect PMU eligibility. Vegan, hypoallergenic pigments are used at Ink Mugi.',
      considerations: 'If you have nickel, latex, or topical anesthetic allergies, inform your artist. Patch testing available.',
    },
    {
      condition: 'Rosacea',
      icon: <CheckCircle className="w-8 h-8 text-green-700" />,
      description:
        'Rosacea does not prevent brow PMU (eyebrows are rarely affected). Lip blush may be evaluated case-by-case if lips are affected.',
      considerations: 'Skin must not be actively inflamed at time of procedure. May require doctor clearance for lip blush.',
    },
  ];

  const cautionConditions = [
    {
      condition: 'Diabetes (Controlled)',
      icon: <AlertTriangle className="w-8 h-8 text-amber-600" />,
      description:
        'Well-controlled diabetes (HbA1c < 7%) with good wound healing history is acceptable. Uncontrolled diabetes significantly increases infection risk.',
      requirements: 'Must provide recent HbA1c test results. Doctor clearance required. Extra aftercare diligence needed.',
    },
    {
      condition: 'Autoimmune Conditions',
      icon: <AlertTriangle className="w-8 h-8 text-amber-600" />,
      description:
        'Lupus, Crohn's disease, rheumatoid arthritis, or other autoimmune conditions evaluated case-by-case. Depends on medications and disease activity.',
      requirements:
        'Doctor clearance required. If on immunosuppressants, healing may be affected. Must not be in active flare during procedure.',
    },
    {
      condition: 'Blood Thinners / Aspirin',
      icon: <AlertTriangle className="w-8 h-8 text-amber-600" />,
      description:
        'Blood thinners (Coumadin, Xarelto, Plavix) or daily aspirin increase bleeding during PMU. This affects pigment retention and increases bruising.',
      requirements:
        'Must obtain doctor approval to stop blood thinners 48-72 hours before procedure. Do NOT stop medication without doctor approval.',
    },
    {
      condition: 'Keloid or Hypertrophic Scarring',
      icon: <AlertTriangle className="w-8 h-8 text-amber-600" />,
      description:
        'History of keloid scars (especially on face) is a significant risk factor. PMU involves micro-wounds that could trigger keloid formation.',
      requirements:
        'If you've had keloids on your face, PMU is not recommended. If keloids occurred only on body (ear piercings), case-by-case evaluation.',
    },
    {
      condition: 'Accutane (Isotretinoin)',
      icon: <AlertTriangle className="w-8 h-8 text-amber-600" />,
      description:
        'Accutane significantly impairs skin healing and increases scarring risk. Absolutely cannot perform PMU while on Accutane or within 12 months of stopping.',
      requirements: 'Must be off Accutane for minimum 12 months. Some artists require 18-24 months. No exceptions.',
    },
    {
      condition: 'Active Acne (On Brows)',
      icon: <AlertTriangle className="w-8 h-8 text-amber-600" />,
      description:
        'Active acne breakouts, cystic acne, or open lesions on the brow area must be fully healed before PMU. Infection and scarring risk.',
      requirements: 'Reschedule until skin is clear. Topical treatments (benzoyl peroxide, retinol) must be stopped 2 weeks before.',
    },
  ];

  const contraindicatedConditions = [
    {
      condition: 'Pregnancy & Breastfeeding',
      icon: <XCircle className="w-8 h-8 text-red-700" />,
      reason:
        'While no studies show PMU harms pregnancy, topical anesthetics and body stress are not recommended. Most artists refuse pregnant/nursing clients.',
      alternative: 'Wait until after breastfeeding is complete (minimum 3 months post-weaning).',
    },
    {
      condition: 'Chemotherapy (Active)',
      icon: <XCircle className="w-8 h-8 text-red-700" />,
      reason:
        'Chemotherapy severely compromises immune function and wound healing. Infection risk is extremely high. Many chemo patients have low platelet counts.',
      alternative: 'Wait 6-12 months after final chemotherapy treatment. Oncologist clearance required.',
    },
    {
      condition: 'Uncontrolled Diabetes',
      icon: <XCircle className="w-8 h-8 text-red-700" />,
      reason:
        'Uncontrolled diabetes (HbA1c > 7-8%) significantly impairs wound healing and dramatically increases infection risk.',
      alternative: 'Work with your endocrinologist to stabilize blood sugar for 3-6 months before PMU.',
    },
    {
      condition: 'Active Skin Infections',
      icon: <XCircle className="w-8 h-8 text-red-700" />,
      reason:
        'Active cold sores (herpes simplex), impetigo, staph infections, or any open lesions on the face prevent PMU. Risk of spreading infection.',
      alternative: 'Heal infection completely. For cold sores: take Valtrex prophylactically 3 days before lip blush.',
    },
    {
      condition: 'Blood Clotting Disorders',
      icon: <XCircle className="w-8 h-8 text-red-700" />,
      reason:
        'Hemophilia, von Willebrand disease, or platelet disorders make PMU extremely high-risk due to uncontrollable bleeding.',
      alternative: 'Doctor clearance required. Many cases are not candidates for PMU.',
    },
    {
      condition: 'Recent Botox / Filler (Brow Area)',
      icon: <XCircle className="w-8 h-8 text-red-700" />,
      reason:
        'Botox or filler in the brow area can migrate during PMU or alter brow shape as it settles. Must wait for full settling.',
      alternative: 'Wait 4 weeks after brow Botox, 6-8 weeks after brow filler. Lip filler: wait 4 weeks before lip blush.',
    },
    {
      condition: 'Epilepsy (Uncontrolled)',
      icon: <XCircle className="w-8 h-8 text-red-700" />,
      reason:
        'Uncontrolled epilepsy poses safety risk during procedure. Seizures during PMU could cause injury or uneven pigment application.',
      alternative: 'Must be seizure-free for 12+ months with stable medication. Doctor clearance required.',
    },
    {
      condition: 'Pacemaker / Defibrillator',
      icon: <XCircle className="w-8 h-8 text-red-700" />,
      reason:
        'Some PMU machines use electrical currents that may interfere with pacemakers or defibrillators. Manual tools only for these clients.',
      alternative: 'Inform your artist immediately. Manual microblading or hand-tool techniques may be possible with doctor clearance.',
    },
  ];

  const medicationConcerns = [
    {
      medication: 'Blood Thinners',
      examples: 'Warfarin (Coumadin), Xarelto, Eliquis, Plavix, daily aspirin',
      impact: 'Increased bleeding, bruising, poor pigment retention',
      action: 'Doctor approval required to pause 48-72 hours before procedure',
    },
    {
      medication: 'Accutane (Isotretinoin)',
      examples: 'Accutane, Claravis, Absorica, Myorisan, Zenatane',
      impact: 'Severe scarring risk, impaired healing, pigment rejection',
      action: 'Must be off medication for 12-24 months minimum',
    },
    {
      medication: 'Immunosuppressants',
      examples: 'Prednisone, methotrexate, Humira, Enbrel, Remicade',
      impact: 'Compromised immune response, slow healing, infection risk',
      action: 'Doctor clearance required. May not be a candidate depending on dosage.',
    },
    {
      medication: 'Retinoids (Topical)',
      examples: 'Tretinoin (Retin-A), Differin, Tazorac, prescription retinol',
      impact: 'Skin thinning, increased sensitivity, poor healing',
      action: 'Stop using on treatment area 2-4 weeks before and 4 weeks after',
    },
    {
      medication: 'Antibiotics (Active Course)',
      examples: 'Any current antibiotic prescription',
      impact: 'May indicate active infection or compromised immunity',
      action: 'Reschedule after antibiotic course is complete',
    },
  ];

  const pregnancyFaq = [
    {
      question: 'Can I get PMU while pregnant?',
      answer:
        'No reputable PMU artist will perform procedures on pregnant clients. While there's no definitive research showing harm, the numbing agents used and the body's stress response are not worth the risk. Most professional organizations and insurance policies prohibit PMU during pregnancy.',
    },
    {
      question: 'Can I get PMU while breastfeeding?',
      answer:
        'Most artists also decline breastfeeding clients due to numbing agent transfer concerns and immune system changes. The conservative recommendation is to wait until 3 months after weaning to allow your body to fully return to baseline.',
    },
    {
      question: 'When can I get PMU after giving birth?',
      answer:
        'If not breastfeeding: wait 3-6 months postpartum for hormones and immune function to stabilize. If breastfeeding: wait 3 months after weaning. This ensures optimal healing and pigment retention.',
    },
  ];

  const mriConcern = {
    question: 'Can I get an MRI after permanent makeup?',
    answer:
      'Yes, in almost all cases. Modern PMU pigments contain minimal to no metallic content. Older permanent makeup (pre-2010) sometimes used iron oxide pigments that could cause mild warming or tingling during MRI. Current vegan pigments at Ink Mugi are MRI-safe. Always inform your MRI technician that you have permanent makeup — they may apply a cool compress as a precaution.',
  };

  return (
    <>
      <Helmet>
        <title>PMU & Medical Conditions | Safety Guide | Ink Mugi</title>
        <meta
          name="description"
          content="Complete guide to permanent makeup and medical conditions. Learn about contraindications, medications that affect PMU, pregnancy, diabetes, autoimmune conditions, and when PMU is safe."
        />
        <meta
          name="keywords"
          content="permanent makeup medical conditions, PMU contraindications, microblading pregnancy, PMU diabetes, PMU autoimmune disease, permanent makeup safety, PMU medications, can I get PMU with, permanent makeup health conditions"
        />
        <link rel="canonical" href="https://www.inkmugi.com/pmu-medical-conditions" />

        <meta property="og:title" content="PMU & Medical Conditions | Complete Safety Guide" />
        <meta property="og:description" content="Learn about medical conditions, medications, and health factors that affect permanent makeup eligibility and safety." />
        <meta property="og:image" content="https://www.inkmugi.com/og-image.jpg" />
        <meta property="og:url" content="https://www.inkmugi.com/pmu-medical-conditions" />

        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MedicalWebPage',
            headline: 'Permanent Makeup and Medical Conditions: Complete Safety Guide',
            description:
              'Comprehensive medical guide to permanent makeup eligibility covering contraindications, safe conditions, medication concerns, and health requirements.',
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
            url: 'https://www.inkmugi.com/pmu-medical-conditions',
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
                name: 'PMU & Medical Conditions',
                item: 'https://www.inkmugi.com/pmu-medical-conditions',
              },
            ],
          })}
        </script>

        {/* FAQPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              ...pregnancyFaq.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: { '@type': 'Answer', text: faq.answer },
              })),
              {
                '@type': 'Question',
                name: mriConcern.question,
                acceptedAnswer: { '@type': 'Answer', text: mriConcern.answer },
              },
            ],
          })}
        </script>

        {/* WebPage with SpeakableSpecification */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'PMU & Medical Conditions Safety Guide | Ink Mugi',
            url: 'https://www.inkmugi.com/pmu-medical-conditions',
            speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', '.summary-box'] },
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
                <span className="text-sm font-medium text-white">Medical Safety Guide</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-cormorant font-light leading-tight mb-6 text-white">
                Permanent Makeup &
                <span className="block text-[#E6DAD2] font-medium mt-2">Medical Conditions</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Complete guide to health conditions, medications, and contraindications
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/booking"
                  className="group bg-[#E6DAD2] hover:bg-[#F0E4D8] text-[#2D2D2B] font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Discuss Your Situation
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
                  PMU Medical Eligibility at a Glance
                </h2>
                <p className="text-lg text-gray-800 leading-relaxed">
                  <strong>Most people are candidates for permanent makeup.</strong> Alopecia, controlled thyroid conditions, anxiety/depression, and general allergies are typically safe. Pregnancy, active chemotherapy, uncontrolled diabetes, Accutane use, and active skin infections are absolute contraindications. Blood thinners, autoimmune conditions, and keloid history require doctor clearance and case-by-case evaluation.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-12 bg-amber-50 border-y-2 border-amber-200">
          <div className="container-custom">
            <AnimatedSection className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <Info className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-[#2D2D2B] mb-2">Medical Disclaimer</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    This guide is for educational purposes and does not replace medical advice from your physician. Always consult your doctor before getting permanent makeup if you have any health conditions or take prescription medications. Final eligibility is determined during your in-person consultation based on your complete medical history.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Safe Conditions */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <AnimatedSection className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] mb-4">
                  Safe Conditions for PMU
                </h2>
                <p className="text-xl text-gray-600">
                  These conditions generally do not prevent permanent makeup
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {safeConditions.map((item, index) => (
                  <div key={index} className="bg-green-50 p-6 rounded-2xl border-2 border-green-200">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">{item.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-[#2D2D2B] mb-2">{item.condition}</h3>
                        <p className="text-gray-700 mb-4">{item.description}</p>
                        <div className="bg-white p-3 rounded-lg border border-green-300">
                          <p className="text-sm text-gray-700">
                            <strong>Considerations:</strong> {item.considerations}
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

        {/* Caution Conditions */}
        <section className="py-20 bg-gradient-to-b from-[#F9F7F5] to-white">
          <div className="container-custom">
            <AnimatedSection className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] mb-4">
                  Caution: Case-by-Case Evaluation
                </h2>
                <p className="text-xl text-gray-600">
                  These conditions require doctor clearance and careful assessment
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {cautionConditions.map((item, index) => (
                  <div key={index} className="bg-amber-50 p-6 rounded-2xl border-2 border-amber-200">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">{item.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-[#2D2D2B] mb-2">{item.condition}</h3>
                        <p className="text-gray-700 mb-4">{item.description}</p>
                        <div className="bg-white p-3 rounded-lg border border-amber-300">
                          <p className="text-sm text-gray-700">
                            <strong>Requirements:</strong> {item.requirements}
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

        {/* Contraindicated Conditions */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <AnimatedSection className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] mb-4">
                  Absolute Contraindications
                </h2>
                <p className="text-xl text-gray-600">
                  These conditions prevent PMU until resolved or stabilized
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {contraindicatedConditions.map((item, index) => (
                  <div key={index} className="bg-red-50 p-6 rounded-2xl border-2 border-red-200">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">{item.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-[#2D2D2B] mb-2">{item.condition}</h3>
                        <p className="text-gray-700 mb-3">
                          <strong>Why not:</strong> {item.reason}
                        </p>
                        <div className="bg-white p-3 rounded-lg border border-red-300">
                          <p className="text-sm text-gray-700">
                            <strong>Alternative:</strong> {item.alternative}
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

        {/* Medications */}
        <section className="py-20 bg-gradient-to-b from-[#F9F7F5] to-white">
          <div className="container-custom">
            <AnimatedSection className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] mb-4">
                  Medications That Affect PMU
                </h2>
                <p className="text-xl text-gray-600">
                  Always disclose all medications during your consultation
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                  <thead className="bg-[#2D2D2B] text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Medication Type</th>
                      <th className="px-6 py-4 text-left font-semibold">Examples</th>
                      <th className="px-6 py-4 text-left font-semibold">Impact on PMU</th>
                      <th className="px-6 py-4 text-left font-semibold">Action Required</th>
                    </tr>
                  </thead>
                  <tbody>
                    {medicationConcerns.map((med, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 border-b border-gray-200 font-semibold">{med.medication}</td>
                        <td className="px-6 py-4 border-b border-gray-200 text-sm">{med.examples}</td>
                        <td className="px-6 py-4 border-b border-gray-200 text-sm">{med.impact}</td>
                        <td className="px-6 py-4 border-b border-gray-200 text-sm">{med.action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Pregnancy FAQ */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <AnimatedSection className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Baby className="w-16 h-16 text-[#E6DAD2] mx-auto mb-4" />
                <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] mb-4">
                  PMU, Pregnancy & Breastfeeding
                </h2>
                <p className="text-xl text-gray-600">
                  The most frequently asked medical question
                </p>
              </div>

              <div className="space-y-6">
                {pregnancyFaq.map((faq, index) => (
                  <div key={index} className="bg-[#E6DAD2]/10 p-6 rounded-xl border border-[#E6DAD2]">
                    <h3 className="text-xl font-bold text-[#2D2D2B] mb-3">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* MRI Concern */}
        <section className="py-20 bg-gradient-to-b from-[#F9F7F5] to-white">
          <div className="container-custom">
            <AnimatedSection className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Activity className="w-16 h-16 text-[#E6DAD2] mx-auto mb-4" />
                <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] mb-4">
                  PMU and MRI Scans
                </h2>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#E6DAD2]">
                <h3 className="text-2xl font-bold text-[#2D2D2B] mb-4">{mriConcern.question}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{mriConcern.answer}</p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Consultation CTA */}
        <section className="py-20 bg-[#E6DAD2]/10">
          <div className="container-custom">
            <AnimatedSection className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-cormorant font-medium text-[#2D2D2B] mb-6">
                Not Sure If You're a Candidate?
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Schedule a free consultation to discuss your specific medical history. We'll provide an honest assessment and work with your doctor if needed.
              </p>
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 bg-[#E6DAD2] hover:bg-[#F0E4D8] text-[#2D2D2B] font-semibold px-8 py-4 rounded-full transition-all"
              >
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
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
                Learn More About PMU Safety
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/permanent-makeup-safety-dmv"
                  className="px-6 py-3 bg-white hover:bg-[#E6DAD2]/20 rounded-full border border-[#E6DAD2] transition-colors"
                >
                  PMU Safety DMV
                </Link>
                <Link
                  to="/how-to-choose-pmu-artist"
                  className="px-6 py-3 bg-white hover:bg-[#E6DAD2]/20 rounded-full border border-[#E6DAD2] transition-colors"
                >
                  How to Choose an Artist
                </Link>
                <Link
                  to="/aftercare-guide"
                  className="px-6 py-3 bg-white hover:bg-[#E6DAD2]/20 rounded-full border border-[#E6DAD2] transition-colors"
                >
                  Aftercare Guide
                </Link>
                <Link
                  to="/faq"
                  className="px-6 py-3 bg-white hover:bg-[#E6DAD2]/20 rounded-full border border-[#E6DAD2] transition-colors"
                >
                  FAQs
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
};

export default PmuMedicalConditions;
