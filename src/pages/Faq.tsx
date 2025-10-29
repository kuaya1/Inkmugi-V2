import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronUp, AlertCircle, CheckCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const Faq: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter((item) => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'procedure', name: 'The Procedure' },
    { id: 'aftercare', name: 'Aftercare' },
    { id: 'results', name: 'Results & Longevity' },
    { id: 'booking', name: 'Booking & Pricing' },
  ];

  const faqItems: FaqItem[] = [
    {
      question: 'What is the difference between microblading and ombre powder brows?',
      answer: 'Microblading creates hair-like strokes using a manual tool, while ombre powder brows use a machine to create a soft, shaded effect similar to brow powder makeup. Powder brows typically last longer and work better for oily skin types. They also provide a more defined, makeup-like appearance compared to the more natural look of microblading.',
      category: 'procedure',
    },
    {
      question: 'Is the procedure painful?',
      answer: 'We use a topical anesthetic to minimize discomfort. Most clients describe the sensation as mild to moderate, similar to threading or plucking. Your comfort is our priority throughout the procedure, and we can apply additional numbing if needed.',
      category: 'procedure',
    },
    {
      question: 'How long does the procedure take?',
      answer: 'The initial ombre powder brows procedure typically takes 2-3 hours. This includes the consultation, brow mapping, color selection, and the actual procedure. Touch-up appointments usually take 1-2 hours.',
      category: 'procedure',
    },
    {
      question: 'How should I prepare for my appointment?',
      answer: 'Avoid blood thinners (alcohol, aspirin) for 48 hours before, retinol products for 2 weeks before, and caffeine on the day of your procedure. Arrive with clean brows and no makeup in the area. Avoid sun exposure and tanning before your appointment. If you\'re on any medications, please inform us during your consultation.',
      category: 'procedure',
    },
    {
      question: 'What is the healing process like?',
      answer: 'The healing process takes about 4-6 weeks in total. Initially, your brows will appear 30-40% darker and more defined than the final result. Around days 3-7, you\'ll experience flaking and the color will appear to fade significantly. By days 10-14, the color will begin to return, and by day 30, you\'ll see the true color and definition. A touch-up appointment 6-8 weeks after the initial procedure ensures optimal results.',
      category: 'aftercare',
    },
    {
      question: 'What aftercare is required?',
      answer: 'For the first 7-10 days, keep the area clean and dry. Avoid makeup on the area, swimming, saunas, and excessive sweating. Apply the provided aftercare balm as directed. Avoid picking or scratching at the flaking skin. After the initial healing period, protect your brows from sun exposure with SPF to maintain the color longevity.',
      category: 'aftercare',
    },
    {
      question: 'Can I wear makeup after the procedure?',
      answer: 'Avoid makeup on the brow area for at least 10 days after the procedure to prevent infection and ensure proper healing. After the initial healing period, you can resume wearing makeup as usual. One of the benefits of permanent makeup is that you\'ll need less makeup overall!',
      category: 'aftercare',
    },
    {
      question: 'When will I see the final results?',
      answer: 'The true color and definition of your ombre powder brows will be visible after about 30 days, once the skin has fully healed and the pigment has settled. However, the complete process includes a touch-up appointment 6-8 weeks after the initial procedure, which perfects the shape and color for optimal results.',
      category: 'results',
    },
    {
      question: 'How long do ombre powder brows last?',
      answer: 'Results typically last 1-3 years, depending on skin type, lifestyle, sun exposure, and skincare routine. Oily skin types may experience faster fading. Touch-ups are recommended every 12-18 months to maintain optimal appearance. Using sunscreen on the area can help extend the life of your brows.',
      category: 'results',
    },
    {
      question: 'Can I get ombre powder brows if I have existing microblading?',
      answer: 'Yes, powder brows can be done over faded microblading. We\'ll assess your current brows during consultation and create a plan to achieve your desired results, which may include color correction. In some cases, we may recommend waiting until the previous work has faded more before proceeding.',
      category: 'procedure',
    },
    {
      question: 'What if I don\'t like the results?',
      answer: 'We take great care during the consultation and mapping process to ensure you\'ll love your results. However, if you\'re unhappy with any aspect, please contact us. Minor adjustments can be made during your touch-up appointment. For significant changes, we may recommend waiting for the pigment to fade or discuss removal options. This is why our thorough consultation process is so important!',
      category: 'results',
    },
    {
      question: 'How much does it cost?',
      answer: 'Ombre powder brows start at $400 for the initial procedure. Microshading starts at $500. We offer free brow consultations. Touch-up pricing varies by time elapsed: 1-3 months ($100), 3-6 months ($150), 6-12 months ($200), and 1-2 years ($250). All initial procedures include one follow-up session within the first 8 weeks. We offer a detailed pricing breakdown during your consultation based on your specific needs.',
      category: 'booking',
    },
    {
      question: 'Do you require a deposit?',
      answer: 'Yes, we require a $50 non-refundable deposit to secure your appointment, which is applied toward your service. This ensures commitment from our clients and allows us to maintain our schedule efficiently.',
      category: 'booking',
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'We require 48 hours notice for cancellations or rescheduling. Cancellations with less than 48 hours notice will forfeit the deposit. We understand emergencies happen, and these situations are handled on a case-by-case basis.',
      category: 'booking',
    },
    {
      question: 'Is there anyone who shouldn\'t get ombre powder brows?',
      answer: 'Permanent makeup may not be suitable for everyone. Contraindications include pregnancy, nursing, uncontrolled diabetes, autoimmune disorders, blood-thinning medications, recent chemotherapy, keloid scarring, and certain skin conditions in the brow area. During your consultation, we\'ll review your medical history to ensure the procedure is safe for you.',
      category: 'procedure',
    },
    {
      question: 'What pigments do you use?',
      answer: 'We use premium, hypoallergenic pigments that are specifically formulated for permanent makeup. Our pigments are iron-oxide based, vegan, and cruelty-free. We select colors that complement your skin tone, hair color, and personal preference to achieve the most natural-looking results.',
      category: 'procedure',
    },
    {
      question: 'Do you offer other permanent makeup services?',
      answer: 'Currently, we specialize exclusively in ombre powder brows to ensure we deliver the highest quality results in our area of expertise. This specialization allows us to perfect our technique and provide exceptional results for our clients.',
      category: 'booking',
    },
  ];

  const filteredFaqs = activeCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#F0E4D8]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-[#2D2D2B]/80 max-w-3xl mx-auto">
              Find answers to common questions about our permanent makeup services
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          {/* Categories */}
          <AnimatedSection className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    activeCategory === category.id
                      ? 'bg-[#2D2D2B] text-white'
                      : 'bg-[#E6DAD2] text-[#2D2D2B] hover:bg-[#F0E4D8]'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* FAQ Items */}
          <div className="max-w-3xl mx-auto">
            {filteredFaqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index % 5} className="mb-4">
                <div className="border border-[#E6DAD2] rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-[#F9F7F5] transition-colors"
                  >
                    <span className="font-medium text-[#2D2D2B]">{faq.question}</span>
                    {openItems.includes(index) ? (
                      <ChevronUp size={20} className="text-[#2D2D2B]" />
                    ) : (
                      <ChevronDown size={20} className="text-[#2D2D2B]/60" />
                    )}
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openItems.includes(index) ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="p-4 bg-[#F9F7F5] border-t border-[#E6DAD2]">
                      <p className="text-[#2D2D2B]/80">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          {/* Missing closing div for container-custom */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#2D2D2B] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://live.staticflickr.com/65535/54363160242_7975c4f42c_o_d.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <span className="inline-block text-[#E6DAD2] font-light tracking-wider mb-4 uppercase text-sm">Get Started</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-cormorant font-medium mb-6 leading-tight">
                Ready to Transform Your Brows?
              </h2>
              <p className="text-lg text-[#F9F7F5]/90 mb-10 max-w-2xl mx-auto">
                Book your consultation today and take the first step towards effortlessly beautiful brows that enhance your natural features.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link to="/booking" className="btn bg-[#E6DAD2] hover:bg-[#F0E4D8] text-[#2D2D2B] font-medium transition-all duration-300 transform hover:translate-y-[-2px]">
                  Book Now
                </Link>
                <Link to="/contact" className="btn bg-transparent border border-[#F9F7F5] hover:bg-white/10 text-white transition-all duration-300">
                  Contact Us
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;