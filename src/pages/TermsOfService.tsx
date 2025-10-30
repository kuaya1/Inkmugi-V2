import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, AlertCircle, Shield, Scale, Clock } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const TermsOfService: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#F9F7F5] to-white">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E6DAD2]/20 rounded-full border border-[#E6DAD2]/30 mb-6">
              <FileText className="w-4 h-4 text-[#2D2D2B]" />
              <span className="text-sm font-medium text-[#2D2D2B]">Legal Agreement</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium text-[#2D2D2B] mb-6">
              Terms of Service
            </h1>
            
            <p className="text-lg text-[#2D2D2B]/80 leading-relaxed">
              Please read these terms carefully before using our services or website.
            </p>
            
            <p className="text-sm text-[#2D2D2B]/60 mt-4">
              Last Updated: October 29, 2025
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <div className="mb-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#E6DAD2]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-[#2D2D2B]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-cormorant font-medium text-[#2D2D2B] mb-3">Agreement to Terms</h2>
                    <p className="text-[#2D2D2B]/80 leading-relaxed">
                      By accessing or using the Ink Mugi website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
                    </p>
                  </div>
                </div>
              </div>

              {/* Services Description */}
              <div className="mb-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#E6DAD2]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-[#2D2D2B]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-cormorant font-medium text-[#2D2D2B] mb-3">Services Description</h2>
                    <div className="space-y-4 text-[#2D2D2B]/80">
                      <p>
                        Ink Mugi provides permanent makeup (PMU) services, including but not limited to ombre powder brows, microshading, and fine line tattoos. All services are performed by Virginia-licensed permanent cosmetic tattooer (License #1231002471) in accordance with state regulations.
                      </p>
                      <p className="font-medium text-[#2D2D2B]">
                        Our services are cosmetic in nature and are not intended to diagnose, treat, cure, or prevent any disease or medical condition.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Eligibility */}
              <div className="mb-12">
                <h2 className="text-2xl font-cormorant font-medium text-[#2D2D2B] mb-3">Eligibility Requirements</h2>
                <div className="space-y-2 text-[#2D2D2B]/80">
                  <p>To receive our PMU services, you must:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Be at least 18 years of age</li>
                    <li>Provide accurate and complete health information during consultation</li>
                    <li>Not be pregnant or nursing</li>
                    <li>Not have certain medical conditions or be taking medications that contraindicate PMU procedures</li>
                    <li>Provide valid government-issued identification</li>
                    <li>Sign all required consent forms and waivers</li>
                  </ul>
                </div>
              </div>

              {/* Booking and Appointments */}
              <div className="mb-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#E6DAD2]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#2D2D2B]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-cormorant font-medium text-[#2D2D2B] mb-3">Booking, Cancellation & Refund Policy</h2>
                    <div className="space-y-4 text-[#2D2D2B]/80">
                      <div>
                        <h3 className="font-medium text-[#2D2D2B] mb-2">Appointments</h3>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Consultations and procedures must be booked through our official booking system (Vagaro)</li>
                          <li>A deposit is required to secure your appointment</li>
                          <li>Appointments are confirmed only after deposit payment is received</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-medium text-[#2D2D2B] mb-2">Cancellation Policy</h3>
                        <ul className="list-disc pl-6 space-y-2">
                          <li><strong>48+ hours notice:</strong> Full refund of deposit or reschedule at no charge</li>
                          <li><strong>24-48 hours notice:</strong> 50% deposit refund or reschedule with 50% fee</li>
                          <li><strong>Less than 24 hours or no-show:</strong> Deposit is forfeited</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-medium text-[#2D2D2B] mb-2">Refund Policy</h3>
                        <p>
                          Once a procedure has been completed, refunds are not provided. We stand behind our work and offer complimentary touch-up sessions within 6-8 weeks to ensure your satisfaction. If you have concerns about your results, please contact us immediately to schedule a review consultation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Client Responsibilities */}
              <div className="mb-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#E6DAD2]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-[#2D2D2B]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-cormorant font-medium text-[#2D2D2B] mb-3">Client Responsibilities</h2>
                    <div className="space-y-4 text-[#2D2D2B]/80">
                      <p>As a client, you agree to:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Provide accurate and complete medical history information</li>
                        <li>Disclose all medications, supplements, and medical conditions</li>
                        <li>Follow all pre-procedure preparation instructions</li>
                        <li>Follow all aftercare instructions provided after your procedure</li>
                        <li>Attend your scheduled touch-up appointment within the designated timeframe</li>
                        <li>Contact us immediately if you experience any unusual symptoms or complications</li>
                        <li>Understand that results vary based on individual factors (skin type, lifestyle, aftercare compliance)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Risks and Consent */}
              <div className="mb-12">
                <div className="bg-[#F9F7F5] p-6 rounded-lg border-l-4 border-[#E6DAD2]">
                  <h3 className="font-medium text-[#2D2D2B] mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Understanding Risks
                  </h3>
                  <div className="space-y-3 text-[#2D2D2B]/80">
                    <p>
                      Permanent makeup procedures involve inherent risks, including but not limited to:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Allergic reactions to pigments or numbing agents</li>
                      <li>Infection (though rare with proper aftercare)</li>
                      <li>Scarring or keloid formation</li>
                      <li>Pigment migration or color changes over time</li>
                      <li>Asymmetry or dissatisfaction with aesthetic results</li>
                      <li>Need for color correction or removal procedures</li>
                    </ul>
                    <p className="font-medium text-[#2D2D2B] mt-3">
                      By booking a procedure, you acknowledge that you have been informed of these risks and accept them.
                    </p>
                  </div>
                </div>
              </div>

              {/* Results and Expectations */}
              <div className="mb-12">
                <h2 className="text-2xl font-cormorant font-medium text-[#2D2D2B] mb-3">Results and Expectations</h2>
                <div className="space-y-4 text-[#2D2D2B]/80">
                  <p>
                    While we strive for excellence in every procedure, individual results vary based on:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Skin type, texture, and condition</li>
                    <li>Age and skin elasticity</li>
                    <li>Lifestyle factors (sun exposure, skincare routine, medications)</li>
                    <li>Aftercare compliance</li>
                    <li>Individual healing response</li>
                  </ul>
                  <p className="mt-4">
                    <strong>Important:</strong> Pigment will appear darker immediately after the procedure and will lighten significantly during the healing process (4-6 weeks). Final results should be evaluated only after complete healing and after the touch-up session.
                  </p>
                </div>
              </div>

              {/* Photography and Marketing */}
              <div className="mb-12">
                <h2 className="text-2xl font-cormorant font-medium text-[#2D2D2B] mb-3">Photography & Marketing Use</h2>
                <p className="text-[#2D2D2B]/80 leading-relaxed">
                  We may take before and after photos for your records and our portfolio. With your written consent, these images may be used for marketing purposes on our website, social media, and promotional materials. Your identity will be kept confidential unless you specifically authorize us to use your name. You may withdraw consent for future use at any time by contacting us in writing.
                </p>
              </div>

              {/* Liability Limitations */}
              <div className="mb-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#E6DAD2]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Scale className="w-6 h-6 text-[#2D2D2B]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-cormorant font-medium text-[#2D2D2B] mb-3">Limitation of Liability</h2>
                    <p className="text-[#2D2D2B]/80 leading-relaxed mb-4">
                      To the maximum extent permitted by law, Ink Mugi shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services, including but not limited to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-[#2D2D2B]/80">
                      <li>Lost income or revenue</li>
                      <li>Emotional distress</li>
                      <li>Loss of data or business opportunities</li>
                      <li>Results that do not meet your expectations (provided procedures were performed according to industry standards)</li>
                    </ul>
                    <p className="text-[#2D2D2B]/80 leading-relaxed mt-4">
                      Our total liability shall not exceed the amount paid for the specific service in question.
                    </p>
                  </div>
                </div>
              </div>

              {/* Intellectual Property */}
              <div className="mb-12">
                <h2 className="text-2xl font-cormorant font-medium text-[#2D2D2B] mb-3">Intellectual Property</h2>
                <p className="text-[#2D2D2B]/80 leading-relaxed">
                  All content on the Ink Mugi website, including text, graphics, logos, images, and software, is the property of Ink Mugi and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.
                </p>
              </div>

              {/* Website Use */}
              <div className="mb-12">
                <h2 className="text-2xl font-cormorant font-medium text-[#2D2D2B] mb-3">Acceptable Website Use</h2>
                <div className="space-y-2 text-[#2D2D2B]/80">
                  <p>You agree not to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use our website for any unlawful purpose</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Transmit viruses, malware, or harmful code</li>
                    <li>Harass, abuse, or harm other users or our staff</li>
                    <li>Impersonate any person or entity</li>
                    <li>Collect or harvest information about other users</li>
                  </ul>
                </div>
              </div>

              {/* Third-Party Links */}
              <div className="mb-12">
                <h2 className="text-2xl font-cormorant font-medium text-[#2D2D2B] mb-3">Third-Party Services</h2>
                <p className="text-[#2D2D2B]/80 leading-relaxed">
                  Our website may contain links to third-party websites or services (such as our booking system, payment processors, or social media platforms). We are not responsible for the content, privacy policies, or practices of these third-party services. Your use of third-party services is at your own risk.
                </p>
              </div>

              {/* Dispute Resolution */}
              <div className="mb-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#E6DAD2]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Scale className="w-6 h-6 text-[#2D2D2B]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-cormorant font-medium text-[#2D2D2B] mb-3">Dispute Resolution</h2>
                    <div className="space-y-4 text-[#2D2D2B]/80">
                      <p>
                        If you have any concerns or disputes regarding our services, we encourage you to contact us directly first. We are committed to resolving issues amicably and professionally.
                      </p>
                      <p>
                        Any disputes arising from these Terms of Service or your use of our services shall be governed by the laws of the Commonwealth of Virginia, without regard to its conflict of law provisions. You agree to submit to the personal jurisdiction of the courts located in Fairfax County, Virginia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Changes to Terms */}
              <div className="mb-12">
                <h2 className="text-2xl font-cormorant font-medium text-[#2D2D2B] mb-3">Changes to Terms</h2>
                <p className="text-[#2D2D2B]/80 leading-relaxed">
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website with an updated "Last Updated" date. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.
                </p>
              </div>

              {/* Severability */}
              <div className="mb-12">
                <h2 className="text-2xl font-cormorant font-medium text-[#2D2D2B] mb-3">Severability</h2>
                <p className="text-[#2D2D2B]/80 leading-relaxed">
                  If any provision of these Terms of Service is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <div className="bg-[#F9F7F5] p-6 rounded-lg border border-[#E6DAD2]/30">
                  <h3 className="font-medium text-[#2D2D2B] mb-3">Questions About These Terms?</h3>
                  <p className="text-[#2D2D2B]/80 mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="space-y-1 text-[#2D2D2B]/80">
                    <p><strong>Ink Mugi</strong></p>
                    <p>7857 Heritage Dr #330, Annandale, VA 22003</p>
                    <p>Email: <a href="mailto:inkmugi@gmail.com" className="text-[#2D2D2B] font-medium hover:text-[#E6DAD2]">inkmugi@gmail.com</a></p>
                    <p>Phone: <a href="tel:5712838228" className="text-[#2D2D2B] font-medium hover:text-[#E6DAD2]">(571) 283-8228</a></p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-white to-[#F9F7F5]">
        <div className="container-custom">
          <AnimatedSection className="text-center">
            <div className="bg-white p-10 rounded-xl shadow-soft max-w-3xl mx-auto border border-[#E6DAD2]/30">
              <h3 className="text-2xl font-cormorant font-medium text-[#2D2D2B] mb-4">
                Ready to Begin Your Transformation?
              </h3>
              <p className="text-[#2D2D2B]/80 mb-6">
                By booking a consultation, you acknowledge that you have read, understood, and agree to these Terms of Service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://www.vagaro.com/bortemicroblading/book-now" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn bg-[#2D2D2B] hover:bg-[#2D2D2B]/80 text-white transition-all duration-300"
                >
                  Book Consultation
                </a>
                <Link to="/contact" className="btn btn-outline text-[#2D2D2B] border-[#2D2D2B] hover:bg-[#2D2D2B]/5 transition-all duration-300">
                  Contact Us
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default TermsOfService;
