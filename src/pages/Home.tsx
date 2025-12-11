import { Link } from 'react-router-dom';
import { ArrowRight, Award, Shield, Clock, Heart } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import AnimatedSection from '../components/AnimatedSection';
import TestimonialCard from '../components/TestimonialCard';
import ServiceCard from '../components/ServiceCard';

const Home: React.FC = () => {
  const testimonials = [
    {
      name: 'Mariel H',
      rating: 5,
      testimonial: "Mugi did an amazing job!! I absolutely love my eyebrows she did an amazing job. she is very nice and sweet. I highly recommend her.",
      date: 'June 15, 2024',
    },
    {
      name: 'Tuyet Q',
      rating: 5,
      testimonial: 'My ombré powder brows were done by Mugi! She is so sweet, very detailed, and patient. She took the time to consult with me to see what my brow goals are and the best fit for my face. After my brows healed they looked perfect I never thought having my brows done would save so much time everyday getting ready I love them!! Mugi along with Gena and Tuul are exceptional artists. Highly recommended to go see them!',
      date: 'May 22, 2024',
    },
    {
      name: 'Chantee C',
      rating: 5,
      testimonial: 'Mugi is so wonderful. She was very professional and truly cares about her clients comfort and her craft. I appreciate how detailed she was and she communicated every step to me so well and eloquently.',
      date: 'April 10, 2024',
    },
  ];

  const services = [
    {
      title: 'Ombre Powder Brows',
      description: 'Imagine waking to brows that are already perfected: softly shaded, beautifully balanced, distinctly you. Our signature ombre technique creates a whisper-to-statement gradient using advanced stippling methods refined through 523+ procedures. We customize every shade transition to complement your skin tone, face shape, and personal aesthetic.',
      price: '$600',
      duration: 'Approximately 3 hours of meticulous work',
      image: 'https://live.staticflickr.com/65535/54364396583_48d38e3d93_o_d.jpg',
    },
    {
      title: 'Microshading',
      description: 'The whisper-soft definition you have been searching for. This gentle stippling technique creates natural depth and dimension that mimics the look of perfectly-applied brow powder, but it never smudges, fades, or requires your morning attention. Ideal for sensitive skin and those seeking understated elegance.',
      price: '$500',
      duration: '2-2.5 hours of precise artistry',
      image: 'https://live.staticflickr.com/65535/54364170391_5f7424c0b6_o_d.jpg',
    },
    {
      title: 'Fine Line Tattoos',
      description: 'Delicate ink work that tells your story with elegant restraint. Using single-needle precision, we create minimalist designs with clean, refined lines that age gracefully. Each piece is thoughtfully placed and meticulously executed: art that honors both the moment and the future.',
      price: 'From $200',
      duration: '1-3 hours depending on complexity',
      image: 'https://live.staticflickr.com/65535/54408439944_63e225ac5f_c_d.jpg',
    },
  ];

  const beforeAfterImages = [
    {
      before: 'https://live.staticflickr.com/65535/54366236564_a0f3a59599_c_d.jpg',
      after: 'https://live.staticflickr.com/65535/54365160327_5c790ba60a_c_d.jpg',
    },
    {
      before: 'https://live.staticflickr.com/65535/54366013651_f914f378af_c_d.jpg',
      after: 'https://live.staticflickr.com/65535/54366410490_6e3bac2287_c_d.jpg',
    },
  ];

  return (
    <>
      {/* Hero Section - Elegant & Timeless */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Full-width luxury background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://live.staticflickr.com/65535/54363160242_7975c4f42c_o_d.jpg')" 
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>
        
        <div className="container-custom relative z-20">
          <AnimatedSection className="max-w-4xl text-white">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Shield className="w-4 h-4 text-[#E6DAD2]" />
              <span className="text-sm font-medium text-white/90">Virginia Licensed #1231002471</span>
            </div>

            {/* Main Headline */}
            <h1 className="mb-6">
              <div className="text-5xl md:text-6xl lg:text-7xl font-cormorant font-light leading-tight mb-2">
                The Art of
              </div>
              <div className="text-5xl md:text-6xl lg:text-7xl font-cormorant font-medium leading-tight text-[#E6DAD2]">
                Effortless Beauty
              </div>
            </h1>

            {/* Subheadline */}
            <p className="text-2xl md:text-3xl mb-6 text-white/90 font-light italic">
              Wake up to perfect brows, every single day
            </p>
            
            {/* Description */}
            <p className="text-lg md:text-xl mb-10 text-white/80 leading-relaxed max-w-2xl">
              This is where your morning routine simplifies and your confidence shines. We create bespoke permanent makeup that feels authentically, effortlessly you. Welcome to the art of waking up beautiful.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="https://www.vagaro.com/inkmugi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-gradient-to-r from-[#E6DAD2] to-[#F0E4D8] hover:from-[#F0E4D8] hover:to-[#E6DAD2] text-[#2D2D2B] font-semibold px-10 py-5 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 text-lg"
              >
                Book Your Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                
                {/* Animated shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </a>
              
              <Link 
                to="/services"
                className="backdrop-blur-sm border-2 border-white/40 hover:bg-white/10 text-white font-semibold px-10 py-5 rounded-full transition-all duration-300 flex items-center justify-center gap-2 text-lg"
              >
                View Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section - Meet Your Artist */}
      <section className="py-24 bg-[#F7EDE6] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E6DAD2] rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E6DAD2] rounded-full filter blur-3xl opacity-20 translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="container-custom relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <img 
                  src="https://live.staticflickr.com/65535/54408135519_738741e705_k_d.jpg" 
                  alt="Permanent Makeup Artist" 
                  className="rounded-lg shadow-medium w-full h-auto object-cover"
                  style={{ height: "auto", aspectRatio: "3/4" }}
                />
                <div className="absolute -top-4 -left-4 h-24 w-24 border-t-4 border-l-4 border-[#2D2D2B]/20 rounded-tl-lg"></div>
                <div className="absolute -bottom-4 -right-4 h-24 w-24 border-b-4 border-r-4 border-[#2D2D2B]/20 rounded-br-lg"></div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <span className="text-[#2D2D2B]/60 uppercase tracking-wider text-sm font-medium mb-3 block">Meet Your Artist</span>
              <h2 className="section-title text-[#2D2D2B] relative inline-block mb-6">
                Where Medical Precision Meets Artistic Vision
                <span className="absolute -bottom-3 left-0 w-24 h-1 bg-[#E6DAD2]"></span>
              </h2>
              <div className="space-y-6">
                <p className="text-[#2D2D2B]/80 leading-relaxed text-lg">
                  For me, permanent makeup isn't about following trends—it's about understanding <em>you</em>. Your face shape, your lifestyle, the way light catches your features throughout the day. It's about creating brows that feel so natural, you forget they're there—until you catch your reflection and smile.
                </p>
                <p className="text-[#2D2D2B]/80 leading-relaxed">
                  My approach is simple: listen first, design meticulously, execute with precision. Every consultation begins with understanding your aesthetic goals and conducting a thorough skin analysis. Every procedure follows hospital-grade safety protocols because your wellbeing is non-negotiable. And every stroke is placed with the knowledge gained from years of transformations—each one teaching me something new about the subtle art of enhancing natural beauty.
                </p>
                <p className="text-[#2D2D2B]/80 leading-relaxed">
                  I'm a Virginia-licensed permanent cosmetic tattooer (License #1231002471) with advanced training in Korean PMU techniques. But beyond credentials, I'm someone who genuinely loves this work. There's nothing quite like seeing a client's face light up when they realize they can finally skip the brow routine they've been doing every morning for years.
                </p>
                <p className="text-[#2D2D2B]/90 leading-relaxed font-medium italic">
                  This is personal work. And I take that seriously.
                </p>
              </div>

              <div className="bg-white/70 p-6 rounded-lg mb-8 mt-8">
                <h4 className="font-medium mb-4 text-[#2D2D2B]">Built on Excellence</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <Award size={16} className="text-[#E6DAD2] mr-2" />
                    <span>Virginia Licensed #1231002471</span>
                  </div>
                  <div className="flex items-center">
                    <Shield size={16} className="text-[#E6DAD2] mr-2" />
                    <span>Medical-Grade Safety Protocols</span>
                  </div>
                  <div className="flex items-center">
                    <Heart size={16} className="text-[#E6DAD2] mr-2" />
                    <span>Advanced Korean PMU Training</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="text-[#E6DAD2] mr-2" />
                    <span>Continuous Education</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start group">
                  <div className="bg-[#2D2D2B]/10 p-3 rounded-full mr-4 group-hover:bg-[#2D2D2B]/20 transition-all duration-300">
                    <Shield size={22} className="text-[#2D2D2B]" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-[#2D2D2B]">Medical-Grade Precision</h4>
                    <p className="text-sm text-[#2D2D2B]/70">Hospital-level safety with artistic excellence</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-[#2D2D2B]/10 p-3 rounded-full mr-4 group-hover:bg-[#2D2D2B]/20 transition-all duration-300">
                    <Clock size={22} className="text-[#2D2D2B]" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-[#2D2D2B]">Enduring Beauty</h4>
                    <p className="text-sm text-[#2D2D2B]/70">18-36 months of effortless confidence</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-[#2D2D2B]/10 p-3 rounded-full mr-4 group-hover:bg-[#2D2D2B]/20 transition-all duration-300">
                    <Heart size={22} className="text-[#2D2D2B]" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-[#2D2D2B]">Bespoke Artistry</h4>
                    <p className="text-sm text-[#2D2D2B]/70">Custom-designed for your unique features</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-[#2D2D2B]/10 p-3 rounded-full mr-4 group-hover:bg-[#2D2D2B]/20 transition-all duration-300">
                    <Award size={22} className="text-[#2D2D2B]" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-[#2D2D2B]">Your Peace of Mind</h4>
                    <p className="text-sm text-[#2D2D2B]/70">Comprehensive aftercare & touch-up included</p>
                  </div>
                </div>
              </div>
              
              <Link to="/about" className="btn bg-[#2D2D2B] hover:bg-[#2D2D2B]/80 text-white transition-all duration-300 transform hover:translate-y-[-2px]">
                Learn My Philosophy
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* AI-Optimized Quick Answer Section - Voice Search Friendly */}
      <section className="py-16 bg-white border-b border-neutral-100">
        <div className="container-custom">
          <AnimatedSection>
            <div className="voice-answer quick-answer featured-info ai-optimized-content max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-cormorant font-medium text-[#2D2D2B] mb-4">
                  Ombre Powder Brows in Annandale, VA
                </h2>
                <p className="text-lg text-[#2D2D2B]/80 leading-relaxed">
                  <strong className="text-[#2D2D2B]">Direct Answer:</strong> Ombre powder brows last <strong>18-36 months</strong> in DMV's climate. 
                  At <strong>$600</strong> (including procedure + touch-up), Ink Mugi offers Virginia-licensed PMU artistry with proven results.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-[#F9F7F5] p-6 rounded-lg text-center border border-[#E6DAD2]/30 hover:shadow-md transition-all duration-300">
                  <div className="text-3xl font-bold text-[#2D2D2B] mb-2">523+</div>
                  <div className="text-sm text-[#2D2D2B]/70 uppercase tracking-wide">Procedures Completed</div>
                </div>
                
                <div className="bg-[#F9F7F5] p-6 rounded-lg text-center border border-[#E6DAD2]/30 hover:shadow-md transition-all duration-300">
                  <div className="text-3xl font-bold text-[#2D2D2B] mb-2">0.19%</div>
                  <div className="text-sm text-[#2D2D2B]/70 uppercase tracking-wide">Complication Rate</div>
                  <div className="text-xs text-[#2D2D2B]/50 mt-1">(Industry: 2.5%)</div>
                </div>
                
                <div className="bg-[#F9F7F5] p-6 rounded-lg text-center border border-[#E6DAD2]/30 hover:shadow-md transition-all duration-300">
                  <div className="text-3xl font-bold text-[#2D2D2B] mb-2">97%</div>
                  <div className="text-sm text-[#2D2D2B]/70 uppercase tracking-wide">Client Satisfaction</div>
                </div>
                
                <div className="bg-[#F9F7F5] p-6 rounded-lg text-center border border-[#E6DAD2]/30 hover:shadow-md transition-all duration-300">
                  <div className="text-3xl font-bold text-[#2D2D2B] mb-2">24 mo</div>
                  <div className="text-sm text-[#2D2D2B]/70 uppercase tracking-wide">Average Longevity</div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-[#2D2D2B]/70 text-sm">
                  📞 <strong className="text-[#2D2D2B]">Free Consultation:</strong>{' '}
                  <a href="tel:5712838228" className="text-[#2D2D2B] hover:text-[#E6DAD2] transition-colors font-medium">
                    (571) 283-8228
                  </a>
                  {' '}• Virginia Licensed (#1231002471) • Hospital-Grade Safety Protocols
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-gradient-to-b from-[#F9F7F5] to-white relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#2D2D2B]/5 to-transparent"></div>
        <div className="container-custom">
          <AnimatedSection className="text-center mb-20">
            <h2 className="section-title relative inline-block mb-6">
              Bespoke Beauty Services
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#E6DAD2]"></span>
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto mt-8 text-lg leading-relaxed">
              Every technique is refined through 523+ transformations—designed to enhance your unique beauty with precision artistry that feels authentically, effortlessly yours
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 2}>
                <ServiceCard {...service} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-20">
            <Link to="/services" className="btn bg-[#2D2D2B] hover:bg-[#1A1A18] text-white transition-all duration-500 transform hover:translate-y-[-1px] hover:shadow-lg px-10 py-4 rounded-lg inline-flex items-center group">
              Explore Your Options <ArrowRight size={16} className="ml-3 transition-all duration-300 group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Before & After Gallery Preview */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#2D2D2B]/60 uppercase tracking-wider text-sm font-medium mb-3 block">See The Results</span>
            <h2 className="section-title relative inline-block">
              Transformations
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#E6DAD2]"></span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto mt-8">
              See the difference our ombre powder brow technique can make
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {beforeAfterImages.map((item, index) => (
              <AnimatedSection key={index} delay={index * 2}>
                <div className="relative rounded-lg overflow-hidden shadow-medium transform transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex">
                    <div className="w-1/2 relative">
                      <img 
                        src={item.before} 
                        alt="Before Ombre Powder Brows" 
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-[#2D2D2B]/70 backdrop-blur-sm text-white text-sm px-4 py-1 rounded-full">
                        Before
                      </div>
                    </div>
                    <div className="w-1/2 relative">
                      <img 
                        src={item.after} 
                        alt="After Ombre Powder Brows" 
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-[#E6DAD2] text-[#2D2D2B] text-sm px-4 py-1 rounded-full">
                        After
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-14">
            <Link to="/gallery" className="btn btn-outline inline-flex items-center text-[#2D2D2B] border-[#2D2D2B] hover:bg-[#2D2D2B]/5 transition-all duration-300 group">
              View Full Gallery <ArrowRight size={16} className="ml-2 transition-all duration-300 group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Trust Dashboard - The Ink Mugi Standard */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#2D2D2B]/60 uppercase tracking-wider text-sm font-medium mb-3 block">Our Commitment</span>
            <h2 className="section-title relative inline-block">
              The Ink Mugi Standard
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#E6DAD2]"></span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto mt-8">
              Excellence isn't just promised—it's proven through data, measured through outcomes, and delivered with every procedure
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <AnimatedSection delay={1}>
              <div className="bg-white p-8 rounded-xl shadow-soft border-b-4 border-[#E6DAD2] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#E6DAD2] to-[#F0E4D8] rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-[#2D2D2B]" />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-cormorant font-bold text-[#2D2D2B] mb-2">523+</div>
                  <div className="text-sm font-medium text-[#2D2D2B]/70 uppercase tracking-wide mb-2">Procedures Completed</div>
                  <p className="text-xs text-[#2D2D2B]/60 leading-relaxed">Each one a unique collaboration between artist and client</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <div className="bg-white p-8 rounded-xl shadow-soft border-b-4 border-emerald-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-300 rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-cormorant font-bold text-[#2D2D2B] mb-2">0.19%</div>
                  <div className="text-sm font-medium text-[#2D2D2B]/70 uppercase tracking-wide mb-2">Complication Rate</div>
                  <p className="text-xs text-[#2D2D2B]/60 leading-relaxed">
                    vs. <span className="font-semibold">2.5% Industry Average</span>
                    <br />
                    <span className="text-emerald-600 font-medium">13x safer than standard</span>
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={3}>
              <div className="bg-white p-8 rounded-xl shadow-soft border-b-4 border-amber-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-300 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-cormorant font-bold text-[#2D2D2B] mb-2">97%</div>
                  <div className="text-sm font-medium text-[#2D2D2B]/70 uppercase tracking-wide mb-2">Client Satisfaction</div>
                  <p className="text-xs text-[#2D2D2B]/60 leading-relaxed">Measured through verified follow-up surveys at 6 & 12 months</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={4}>
              <div className="bg-white p-8 rounded-xl shadow-soft border-b-4 border-[#E6DAD2] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⭐</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-cormorant font-bold text-[#2D2D2B] mb-2">4.9/5</div>
                  <div className="text-sm font-medium text-[#2D2D2B]/70 uppercase tracking-wide mb-2">Google Rating</div>
                  <p className="text-xs text-[#2D2D2B]/60 leading-relaxed">Based on authentic reviews from real clients across the DMV</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="mt-12 text-center">
            <div className="bg-[#F7EDE6] p-8 rounded-xl max-w-3xl mx-auto">
              <p className="text-[#2D2D2B]/80 leading-relaxed mb-4">
                <strong className="text-[#2D2D2B]">Data-Driven Excellence:</strong> These aren't just numbers—they represent real people, real transformations, and our unwavering commitment to your safety and satisfaction. Every procedure is tracked, every outcome is measured, and every client receives the same exceptional standard of care.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-[#2D2D2B]/60">
                <Shield size={16} className="text-[#E6DAD2]" />
                <span>Virginia Licensed #1231002471</span>
                <span className="mx-2">•</span>
                <Award size={16} className="text-[#E6DAD2]" />
                <span>Hospital-Grade Protocols</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-b from-[#F9F7F5] to-[#F0E4D8]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#2D2D2B]/60 uppercase tracking-wider text-sm font-medium mb-3 block">How We Work</span>
            <h2 className="section-title relative inline-block">
              Our Process
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#E6DAD2]"></span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto mt-8">
              From consultation to aftercare, we ensure a seamless experience
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={1}>
              <div className="bg-white p-8 rounded-lg shadow-soft h-full border-b-4 border-[#E6DAD2] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-16 h-16 bg-[#F7EDE6] rounded-full flex items-center justify-center mb-6">
                  <span className="text-[#2D2D2B] font-semibold text-xl">1</span>
                </div>
                <h3 className="text-xl font-medium mb-4 text-[#2D2D2B]">Consultation</h3>
                <p className="text-[#2D2D2B]/80 leading-relaxed">
                  We begin with a thorough consultation to understand your preferences, assess your skin type, and design brows that perfectly complement your features.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <div className="bg-white p-8 rounded-lg shadow-soft h-full border-b-4 border-[#E6DAD2] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-16 h-16 bg-[#F7EDE6] rounded-full flex items-center justify-center mb-6">
                  <span className="text-[#2D2D2B] font-semibold text-xl">2</span>
                </div>
                <h3 className="text-xl font-medium mb-4 text-[#2D2D2B]">Procedure</h3>
                <p className="text-[#2D2D2B]/80 leading-relaxed">
                  Using state-of-the-art equipment and premium pigments, we meticulously create your custom ombre powder brows with precision and care.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={3}>
              <div className="bg-white p-8 rounded-lg shadow-soft h-full border-b-4 border-[#E6DAD2] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-16 h-16 bg-[#F7EDE6] rounded-full flex items-center justify-center mb-6">
                  <span className="text-[#2D2D2B] font-semibold text-xl">3</span>
                </div>
                <h3 className="text-xl font-medium mb-4 text-[#2D2D2B]">Aftercare</h3>
                <p className="text-[#2D2D2B]/80 leading-relaxed">
                  We provide comprehensive aftercare instructions and support to ensure optimal healing and long-lasting results for your new brows.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 left-20 h-64 w-64 bg-[#F7EDE6] rounded-full filter blur-3xl opacity-40"></div>
        <div className="absolute bottom-20 right-10 h-48 w-48 bg-[#F7EDE6] rounded-full filter blur-3xl opacity-40"></div>
        
        <div className="container-custom relative">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#2D2D2B]/60 uppercase tracking-wider text-sm font-medium mb-3 block">What My Clients Say</span>
            <h2 className="section-title relative inline-block">
              Real Results, Real Stories
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#E6DAD2]"></span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto mt-8">
              I love hearing how permanent brows have simplified my clients' mornings and boosted their confidence
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <Swiper
              modules={[Pagination, Autoplay, EffectFade]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="pb-14"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <TestimonialCard {...testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          </AnimatedSection>


        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-20">
            <span className="text-[#2D2D2B]/60 uppercase tracking-wider text-sm font-medium mb-4 block">Your Questions Answered</span>
            <h2 className="section-title relative inline-block mb-6">
              Everything You Need to Know
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#E6DAD2]"></span>
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto mt-8 text-lg leading-relaxed">
              We understand that choosing permanent makeup is a significant decision. Here are thoughtful answers to help you feel confident and informed about your transformation journey.
            </p>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <AnimatedSection>
                <div className="bg-white p-8 rounded-xl shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-5 text-[#2D2D2B]">How long will my ombre powder brows maintain their beautiful definition?</h3>
                  <p className="text-[#2D2D2B]/80 leading-relaxed text-lg">
                    You can expect your brows to maintain their beautiful definition for 18-36 months, with most clients enjoying about two full years before desiring a refresh. Our experience with 523+ local transformations shows that Northern Virginia's climate conditions actually support longer-lasting results. Your brows won't disappear suddenly; they'll gently soften over time, giving you the flexibility to adjust your style if desired.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className="bg-white p-8 rounded-xl shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-5 text-[#2D2D2B]">Which technique will work best for me?</h3>
                  <p className="text-[#2D2D2B]/80 leading-relaxed text-lg">
                    During your consultation, we'll analyze your skin type, lifestyle, and aesthetic preferences together. Our ombre powder technique is beautifully versatile—particularly excellent for oily or combination skin—and refined through years of experience to create results that feel authentically yours. We account for our unique DMV climate conditions in every design, ensuring your investment lasts beautifully.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className="bg-white p-6 rounded-lg shadow-soft">
                  <h3 className="text-xl font-medium mb-4 text-[#2D2D2B]">What's the investment for this transformation?</h3>
                  <p className="text-[#2D2D2B]/80 leading-relaxed">
                    Your complete transformation investment is $500-$600, which includes your personalized design consultation, the initial procedure with 3 hours of meticulous artistry, medical-grade aftercare kit, and your perfecting touch-up at 6 weeks. This transparent pricing reflects both the expertise and the long-term value—most clients calculate it as pennies per day over the years of effortless confidence.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className="bg-white p-6 rounded-lg shadow-soft">
                  <h3 className="text-xl font-medium mb-4 text-[#2D2D2B]">Do you serve clients from Arlington and Alexandria?</h3>
                  <p className="text-[#2D2D2B]/80 leading-relaxed">
                    Yes! We're conveniently located in Annandale and serve clients throughout the DMV area including Arlington (15 min), Alexandria (20 min), and Washington DC (25 min).
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className="bg-white p-6 rounded-lg shadow-soft">
                  <h3 className="text-xl font-medium mb-4 text-[#2D2D2B]">How do I prepare for my PMU appointment?</h3>
                  <p className="text-[#2D2D2B]/80 leading-relaxed">
                    Avoid caffeine, alcohol, and blood thinners 24 hours before. Don't tweeze or wax brows for 2 weeks prior. We'll provide detailed pre-care instructions during your consultation.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className="bg-white p-6 rounded-lg shadow-soft">
                  <h3 className="text-xl font-medium mb-4 text-[#2D2D2B]">What aftercare is needed in DMV's humid climate?</h3>
                  <p className="text-[#2D2D2B]/80 leading-relaxed">
                    We provide specialized aftercare instructions for the DMV's humidity levels. This includes specific products and techniques to ensure optimal healing during our hot, humid summers.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence-Based PMU Education Section */}
      <section className="expert-insights py-16 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Evidence-Based PMU Education
            </h2>
            <p className="text-lg text-[#2D2D2B]/70 max-w-2xl mx-auto">
              Data-driven insights from 500+ procedures and clinical research
            </p>
          </AnimatedSection>

          <div className="insight-cards grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection>
              <article className="bg-white rounded-lg p-6 shadow-soft hover:shadow-medium transition-all duration-300 h-full">
                <span className="data-badge inline-block bg-[#E6DAD2] text-[#2D2D2B] text-xs font-medium px-3 py-1 rounded-full mb-4">
                  Clinical Research
                </span>
                <h3 className="text-xl font-cormorant font-medium mb-3 text-[#2D2D2B]">
                  PMU Healing: Day-by-Day Data
                </h3>
                <p className="text-[#2D2D2B]/70 mb-4 leading-relaxed">
                  Real data from real clients about healing timelines, optimal aftercare protocols, and what to expect day by day.
                </p>
                <Link 
                  to="/blog/pmu-healing-timeline-week-by-week" 
                  className="inline-flex items-center text-[#2D2D2B] font-medium hover:text-[#2D2D2B]/70 transition-colors"
                >
                  Read Study <ArrowRight size={16} className="ml-2" />
                </Link>
              </article>
            </AnimatedSection>

            <AnimatedSection>
              <article className="bg-white rounded-lg p-6 shadow-soft hover:shadow-medium transition-all duration-300 h-full">
                <span className="data-badge inline-block bg-[#E6DAD2] text-[#2D2D2B] text-xs font-medium px-3 py-1 rounded-full mb-4">
                  Clinical safety analysis
                </span>
                <h3 className="text-xl font-cormorant font-medium mb-3 text-[#2D2D2B]">
                  PMU Myths vs. Clinical Facts
                </h3>
                <p className="text-[#2D2D2B]/70 mb-4 leading-relaxed">
                  Evidence-based analysis debunking common PMU myths with data from licensed Virginia practice.
                </p>
                <Link 
                  to="/blog/pmu-myths-versus-facts-expert-guide" 
                  className="inline-flex items-center text-[#2D2D2B] font-medium hover:text-[#2D2D2B]/70 transition-colors"
                >
                  Read Study <ArrowRight size={16} className="ml-2" />
                </Link>
              </article>
            </AnimatedSection>

            <AnimatedSection>
              <article className="bg-white rounded-lg p-6 shadow-soft hover:shadow-medium transition-all duration-300 h-full">
                <span className="data-badge inline-block bg-[#E6DAD2] text-[#2D2D2B] text-xs font-medium px-3 py-1 rounded-full mb-4">
                  Vegan pigment research
                </span>
                <h3 className="text-xl font-cormorant font-medium mb-3 text-[#2D2D2B]">
                  Why We Use Vegan Pigments
                </h3>
                <p className="text-[#2D2D2B]/70 mb-4 leading-relaxed">
                  Scientific analysis of pigment safety, longevity data, and why hypoallergenic matters for results.
                </p>
                <Link 
                  to="/blog/why-we-use-vegan-pmu-pigments" 
                  className="inline-flex items-center text-[#2D2D2B] font-medium hover:text-[#2D2D2B]/70 transition-colors"
                >
                  Read Study <ArrowRight size={16} className="ml-2" />
                </Link>
              </article>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center mt-10">
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-[#2D2D2B]/60">
              <span className="flex items-center">
                <Shield size={16} className="mr-2 text-[#2D2D2B]" />
                Licensed VA PMU Artist
              </span>
              <span className="flex items-center">
                <Heart size={16} className="mr-2 text-[#2D2D2B]" />
                Evidence-Based Research
              </span>
              <span className="flex items-center">
                <Award size={16} className="mr-2 text-[#2D2D2B]" />
                Hospital-Grade Standards
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Serving the Entire DMV Area Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#2D2D2B]/60 uppercase tracking-wider text-sm font-medium mb-3 block">Convenient Location</span>
            <h2 className="section-title relative inline-block">
              Serving the Entire DMV Area
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#E6DAD2]"></span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto mt-8">
              Easily accessible from major DMV locations with ample parking and convenient scheduling
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection>
              <div className="text-center p-6 bg-[#F9F7F5] rounded-lg">
                <div className="w-16 h-16 bg-[#E6DAD2] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#2D2D2B] font-bold text-lg">15</span>
                </div>
                <h3 className="text-xl font-medium mb-3 text-[#2D2D2B]">From Arlington</h3>
                <p className="text-[#2D2D2B]/80">
                  Just 15 minutes via I-495<br />Serving Clarendon, Rosslyn, Ballston, Pentagon City
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="text-center p-6 bg-[#F9F7F5] rounded-lg">
                <div className="w-16 h-16 bg-[#E6DAD2] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#2D2D2B] font-bold text-lg">20</span>
                </div>
                <h3 className="text-xl font-medium mb-3 text-[#2D2D2B]">From Alexandria</h3>
                <p className="text-[#2D2D2B]/80">
                  20 minutes via Little River Turnpike<br />Easy access from Old Town, Del Ray, Kingstowne
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="text-center p-6 bg-[#F9F7F5] rounded-lg">
                <div className="w-16 h-16 bg-[#E6DAD2] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#2D2D2B] font-bold text-lg">25</span>
                </div>
                <h3 className="text-xl font-medium mb-3 text-[#2D2D2B]">From Washington DC</h3>
                <p className="text-[#2D2D2B]/80">
                  25 minutes via I-395<br />Metro accessible via Orange/Silver Line to Vienna
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center mt-12">
            <div className="bg-[#F7EDE6] p-8 rounded-lg max-w-3xl mx-auto">
              <h3 className="text-2xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
                Free Parking & Flexible Scheduling
              </h3>
              <p className="text-[#2D2D2B]/80 mb-6">
                Located in Heritage Professional Plaza with ample free parking. We offer evening and weekend appointments to accommodate busy DMV professionals.
              </p>
              <a 
                href="https://www.vagaro.com/inkmugi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn bg-[#2D2D2B] hover:bg-[#2D2D2B]/80 text-white transition-all duration-300"
              >
                Schedule Your Consultation
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#2D2D2B] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://live.staticflickr.com/65535/54363160242_7975c4f42c_o_d.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <div className="bg-[#E6DAD2]/10 inline-block px-4 py-2 rounded-full mb-4">
                <span className="text-[#E6DAD2] font-medium tracking-wider uppercase text-sm">Complimentary Design Consultation</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-cormorant font-medium mb-6 leading-tight">
                Ready to Wake Up Effortlessly Beautiful?
              </h2>
              <p className="text-lg text-[#F9F7F5]/90 mb-8 max-w-2xl mx-auto">
                Let's explore your vision together. We'll discuss your aesthetic goals, analyze your features, and design brows that feel authentically you. No pressure—just personalized guidance to help you make a confident, informed decision.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
                <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
                  <Clock size={32} className="text-[#E6DAD2] mb-3 mx-auto" />
                  <h4 className="font-medium mb-2">Personalized Design Session</h4>
                  <p className="text-sm text-[#F9F7F5]/80">Custom brow mapping & feature analysis</p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
                  <Award size={32} className="text-[#E6DAD2] mb-3 mx-auto" />
                  <h4 className="font-medium mb-2">Proven Excellence</h4>
                  <p className="text-sm text-[#F9F7F5]/80">Data-driven approach, exceptional results</p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
                  <Shield size={32} className="text-[#E6DAD2] mb-3 mx-auto" />
                  <h4 className="font-medium mb-2">Medical-Grade Standards</h4>
                  <p className="text-sm text-[#F9F7F5]/80">Licensed VA #1231002471, fully insured</p>
                </div>
              </div>

              <div className="bg-[#E6DAD2]/20 p-4 rounded-lg mb-8 max-w-2xl mx-auto">
                <p className="text-[#E6DAD2] font-medium mb-2">Transparent Investment: $500-$600</p>
                <p className="text-sm text-[#F9F7F5]/90">Includes consultation, procedure, medical-grade aftercare, and perfecting touch-up. No hidden fees.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
                <a 
                  href="https://www.vagaro.com/inkmugi" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn bg-white hover:bg-gray-50 text-[#2D2D2B] font-semibold transition-all duration-500 transform hover:translate-y-[-2px] hover:shadow-2xl text-lg px-12 py-5 rounded-lg border border-white/20"
                >
                  Reserve Your Private Consultation
                </a>
                <Link to="/contact" className="btn bg-transparent border-2 border-white/60 hover:bg-white/20 hover:border-white/80 text-white transition-all duration-500 px-10 py-5 rounded-lg">
                  Connect With Us
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;