import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#F0E4D8]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium mb-4 text-[#2D2D2B]">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-[#2D2D2B]/80 max-w-3xl mx-auto">
              We'd love to hear from you. Reach out with any questions about our services.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <h2 className="text-2xl font-medium mb-6 text-[#2D2D2B]">Get In Touch</h2>
              <p className="text-[#2D2D2B]/80 mb-8">
                Whether you have questions about our services, pricing, or want to schedule a consultation, we're here to help. Fill out the form, and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-[#2D2D2B]/10 p-2 rounded-full mr-4">
                    <MapPin size={20} className="text-[#2D2D2B]" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 text-[#2D2D2B]">Our Location</h3>
                    <p className="text-[#2D2D2B]/70">
                      Heritage Center<br />
                      7857 Heritage Dr #330<br />
                      Annandale, VA 22003
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#2D2D2B]/10 p-2 rounded-full mr-4">
                    <Phone size={20} className="text-[#2D2D2B]" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 text-[#2D2D2B]">Phone</h3>
                    <p className="text-[#2D2D2B]/70">
                      <a href="tel:+15712838228" className="hover:text-[#2D2D2B] transition-colors">
                        (571) 283-8228
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#2D2D2B]/10 p-2 rounded-full mr-4">
                    <Mail size={20} className="text-[#2D2D2B]" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 text-[#2D2D2B]">Email</h3>
                    <p className="text-[#2D2D2B]/70">
                      <a href="mailto:inkmugi@gmail.com" className="hover:text-[#2D2D2B] transition-colors">
                        inkmugi@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#2D2D2B]/10 p-2 rounded-full mr-4">
                    <Clock size={20} className="text-[#2D2D2B]" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 text-[#2D2D2B]">Hours</h3>
                    <p className="text-[#2D2D2B]/70">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-3 text-[#2D2D2B]">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/browsby.mugi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#2D2D2B]/10 p-3 rounded-full text-[#2D2D2B] hover:bg-[#2D2D2B] hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#2D2D2B]/10 p-3 rounded-full text-[#2D2D2B] hover:bg-[#2D2D2B] hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <div className="bg-white rounded-lg shadow-medium p-6 md:p-8">
                <h2 className="text-2xl font-medium mb-6 text-[#2D2D2B]">Send Us a Message</h2>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 bg-[#E6DAD2]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="section-title text-[#2D2D2B]">Find Us</h2>
            <p className="section-subtitle text-[#2D2D2B]/80">
              Conveniently located in Heritage Center, Annandale
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="rounded-lg overflow-hidden shadow-medium h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.8673831584387!2d-77.20073492374367!3d38.82766595223721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64c3c02d0d82d%3A0x7810a71613a8f614!2s7857%20Heritage%20Dr%20%23330%2C%20Annandale%2C%20VA%2022003!5e0!3m2!1sen!2sus!4v1709697436099!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Studio Location"
              ></iframe>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mt-8 bg-white p-6 rounded-lg shadow-soft">
            <div className="flex items-start">
              <MapPin size={24} className="text-[#2D2D2B] mt-1 mr-3" />
              <div>
                <h3 className="text-xl font-medium mb-2 text-[#2D2D2B]">Parking Information</h3>
                <p className="text-[#2D2D2B]/80">
                  Free parking is available in the Heritage Center parking lot. The building is easily accessible with ample parking space for our clients.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="section-title text-[#2D2D2B]">Frequently Asked Questions</h2>
            <p className="section-subtitle text-[#2D2D2B]/80">
              Quick answers to common questions
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-white p-6 rounded-lg shadow-soft">
                <h3 className="text-lg font-medium mb-2 text-[#2D2D2B]">Do I need to book an appointment?</h3>
                <p className="text-[#2D2D2B]/80">
                  Yes, all services require an appointment. We recommend booking at least 2-3 weeks in advance to secure your preferred date and time.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <div className="bg-white p-6 rounded-lg shadow-soft">
                <h3 className="text-lg font-medium mb-2 text-[#2D2D2B]">What is your cancellation policy?</h3>
                <p className="text-[#2D2D2B]/80">
                  We require 48 hours notice for cancellations. Cancellations with less than 48 hours notice will forfeit the deposit.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={3}>
              <div className="bg-white p-6 rounded-lg shadow-soft">
                <h3 className="text-lg font-medium mb-2 text-[#2D2D2B]">Do you offer gift certificates?</h3>
                <p className="text-[#2D2D2B]/80">
                  Yes, we offer gift certificates for all our services. They can be purchased in-studio or by phone and are valid for one year from the date of purchase.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={4}>
              <div className="bg-white p-6 rounded-lg shadow-soft">
                <h3 className="text-lg font-medium mb-2 text-[#2D2D2B]">What forms of payment do you accept?</h3>
                <p className="text-[#2D2D2B]/80">
                  We accept all major credit cards, cash, and digital payment methods including Apple Pay, Google Pay, and Venmo.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2D2D2B] text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-cormorant font-medium mb-4">
                Ready to Schedule Your Appointment?
              </h2>
              <p className="text-lg text-[#F9F7F5]/90 mb-8">
                Book your consultation today and take the first step toward beautiful, effortless brows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/booking" className="btn bg-[#E6DAD2] hover:bg-[#F0E4D8] text-[#2D2D2B] font-medium">
                  Book Now
                </a>
                <a href="tel:+15712838228" className="btn bg-transparent border border-[#F9F7F5] hover:bg-white/10 text-white">
                  Call Us
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;