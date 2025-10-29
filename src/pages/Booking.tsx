import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, CreditCard, CheckCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import BookingForm from '../components/BookingForm';

const Booking: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#F0E4D8]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Book Your Appointment
            </h1>
            <p className="text-lg md:text-xl text-[#2D2D2B]/80 max-w-3xl mx-auto">
              Take the first step towards effortlessly beautiful brows
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <BookingForm />
              </AnimatedSection>
            </div>

            <div>
              <AnimatedSection delay={2}>
                <div className="bg-white rounded-lg shadow-medium p-6">
                  <h2 className="text-2xl font-medium mb-6 text-[#2D2D2B]">Booking Information</h2>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start">
                      <div className="bg-[#2D2D2B]/10 p-2 rounded-full mr-4">
                        <Calendar size={20} className="text-[#2D2D2B]" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1 text-[#2D2D2B]">Availability</h3>
                        <p className="text-[#2D2D2B]/70">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 4:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-[#2D2D2B]/10 p-2 rounded-full mr-4">
                        <Clock size={20} className="text-[#2D2D2B]" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1 text-[#2D2D2B]">Duration</h3>
                        <p className="text-[#2D2D2B]/70">
                          Initial Procedure: 2-3 hours<br />
                          Touch-Up: 1-2 hours<br />
                          Consultation: 30 minutes
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-[#2D2D2B]/10 p-2 rounded-full mr-4">
                        <CreditCard size={20} className="text-[#2D2D2B]" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1 text-[#2D2D2B]">Deposit</h3>
                        <p className="text-[#2D2D2B]/70">
                          A $50 non-refundable deposit is required to secure your appointment. This amount will be applied to your service.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-[#F9F7F5] p-4 rounded-lg mb-6">
                    <h3 className="font-medium mb-2 text-[#2D2D2B]">Cancellation Policy</h3>
                    <p className="text-sm text-[#2D2D2B]/70">
                      We require 48 hours notice for cancellations or rescheduling. Cancellations with less than 48 hours notice will forfeit the deposit.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-medium mb-2 text-[#2D2D2B]">What to Expect</h3>
                    <div className="flex items-start">
                      <CheckCircle size={16} className="text-[#2D2D2B] mt-1 mr-2" />
                      <p className="text-sm text-[#2D2D2B]/70">
                        Thorough consultation and brow mapping
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={16} className="text-[#2D2D2B] mt-1 mr-2" />
                      <p className="text-sm text-[#2D2D2B]/70">
                        Custom color selection and design
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={16} className="text-[#2D2D2B] mt-1 mr-2" />
                      <p className="text-sm text-[#2D2D2B]/70">
                        Topical anesthetic for comfort
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={16} className="text-[#2D2D2B] mt-1 mr-2" />
                      <p className="text-sm text-[#2D2D2B]/70">
                        Detailed aftercare instructions
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={3} className="mt-8">
                <div className="bg-white rounded-lg shadow-medium p-6">
                  <h3 className="text-xl font-medium mb-4 text-[#2D2D2B]">Have Questions?</h3>
                  <p className="text-[#2D2D2B]/70 mb-4">
                    If you have any questions before booking, please don't hesitate to reach out.
                  </p>
                  <Link to="/contact" className="btn border-[#2D2D2B] text-[#2D2D2B] hover:bg-[#2D2D2B]/5 w-full">
                    Contact Us
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Preparation Tips */}
      <section className="py-20 bg-[#E6DAD2]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="section-title text-[#2D2D2B]">Preparation Tips</h2>
            <p className="section-subtitle text-[#2D2D2B]/80">
              How to prepare for your ombre powder brows appointment
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedSection delay={1}>
              <div className="bg-white p-6 rounded-lg shadow-soft h-full">
                <div className="w-12 h-12 bg-[#2D2D2B]/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#2D2D2B] font-medium text-xl">1</span>
                </div>
                <h3 className="text-lg font-medium mb-3 text-[#2D2D2B]">48 Hours Before</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-[#2D2D2B] mt-1 mr-2" />
                    <span className="text-[#2D2D2B]/70 text-sm">Avoid alcohol and caffeine</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-[#2D2D2B] mt-1 mr-2" />
                    <span className="text-[#2D2D2B]/70 text-sm">Avoid blood thinners (aspirin, ibuprofen)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-[#2D2D2B] mt-1 mr-2" />
                    <span className="text-[#2D2D2B]/70 text-sm">Avoid fish oil and vitamin E supplements</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <div className="bg-white p-6 rounded-lg shadow-soft h-full">
                <div className="w-12 h-12 bg-[#2D2D2B]/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#2D2D2B] font-medium text-xl">2</span>
                </div>
                <h3 className="text-lg font-medium mb-3 text-[#2D2D2B]">2 Weeks Before</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-[#2D2D2B] mt-1 mr-2" />
                    <span className="text-[#2D2D2B]/70 text-sm">Discontinue retinol products</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-[#2D2D2B] mt-1 mr-2" />
                    <span className="text-[#2D2D2B]/70 text-sm">Avoid chemical peels or facial treatments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-[#2D2D2B] mt-1 mr-2" />
                    <span className="text-[#2D2D2B]/70 text-sm">Avoid sun exposure and tanning</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={3}>
              <div className="bg-white p-6 rounded-lg shadow-soft h-full">
                <div className="w-12 h-12 bg-[#2D2D2B]/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#2D2D2B] font-medium text-xl">3</span>
                </div>
                <h3 className="text-lg font-medium mb-3 text-[#2D2D2B]">Day of Appointment</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-[#2D2D2B] mt-1 mr-2" />
                    <span className="text-[#2D2D2B]/70 text-sm">Arrive with clean brows, no makeup</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-[#2D2D2B] mt-1 mr-2" />
                    <span className="text-[#2D2D2B]/70 text-sm">Avoid caffeine before appointment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-[#2D2D2B] mt-1 mr-2" />
                    <span className="text-[#2D2D2B]/70 text-sm">Eat before your appointment</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={4}>
              <div className="bg-white p-6 rounded-lg shadow-soft h-full">
                <div className="w-12 h-12 bg-[#2D2D2B]/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#2D2D2B] font-medium text-xl">4</span>
                </div>
                <h3 className="text-lg font-medium mb-3 text-[#2D2D2B]">What to Bring</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-[#2D2D2B] mt-1 mr-2" />
                    <span className="text-[#2D2D2B]/70 text-sm">Reference photos of brows you like</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-[#2D2D2B] mt-1 mr-2" />
                    <span className="text-[#2D2D2B]/70 text-sm">List of medications you're taking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-[#2D2D2B] mt-1 mr-2" />
                    <span className="text-[#2D2D2B]/70 text-sm">Payment method for remaining balance</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2D2D2B] text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4">
                Ready to Transform Your Brows?
              </h2>
              <p className="text-lg text-[#F9F7F5]/90 mb-6">
                Our appointment slots fill quickly. Book your consultation today to secure your preferred date.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#booking-form" className="btn bg-[#E6DAD2] hover:bg-[#F0E4D8] text-[#2D2D2B] font-medium">
                  Book Now
                </a>
                <Link to="/faq" className="btn bg-transparent border border-[#F9F7F5] hover:bg-white/10 text-white">
                  View FAQs
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;