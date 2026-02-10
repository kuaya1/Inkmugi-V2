import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, FileText, Mail } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Ink Mugi</title>
        <meta name="description" content="Ink Mugi's privacy policy. Learn how we collect, use, and protect your personal information when you visit our site or book permanent makeup services." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.inkmugi.com/privacy-policy" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#F9F7F5] to-white">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E6DAD2]/20 rounded-full border border-[#E6DAD2]/30 mb-6">
              <Shield className="w-4 h-4 text-[#2D2D2B]" />
              <span className="text-sm font-medium text-[#2D2D2B]">Your Privacy Matters</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-medium text-[#2D2D2B] mb-6">
              Privacy Policy
            </h1>
            
            <p className="text-lg text-[#2D2D2B]/80 leading-relaxed">
              At Ink Mugi, we are committed to protecting your personal information and your right to privacy.
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
                    <h2 className="text-2xl font-cormorant font-medium text-[#2D2D2B] mb-3">Introduction</h2>
                    <p className="text-[#2D2D2B]/80 leading-relaxed">
                      This Privacy Policy describes how Ink Mugi ("we," "us," or "our") collects, uses, and shares your personal information when you visit our website or use our services. We are committed to maintaining the trust and confidence of our clients and website visitors.
                    </p>
                  </div>
                </div>
              </div>

              {/* Information We Collect */}
              <div className="mb-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#E6DAD2]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-[#2D2D2B]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-cormorant font-medium text-[#2D2D2B] mb-3">Information We Collect</h2>
                    <div className="space-y-4 text-[#2D2D2B]/80">
                      <div>
                        <h3 className="font-medium text-[#2D2D2B] mb-2">Personal Information You Provide</h3>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Name, email address, and phone number when you book a consultation or appointment</li>
                          <li>Medical history and skin information relevant to PMU services</li>
                          <li>Payment information (processed securely through third-party payment processors)</li>
                          <li>Photos and images for consultation and before/after documentation (with your consent)</li>
                          <li>Communications when you contact us via email, phone, or contact forms</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-medium text-[#2D2D2B] mb-2">Information Automatically Collected</h3>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Device information (browser type, operating system, IP address)</li>
                          <li>Usage data (pages visited, time spent on site, referring website)</li>
                          <li>Cookies and similar tracking technologies</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div className="mb-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#E6DAD2]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-[#2D2D2B]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-cormorant font-medium text-[#2D2D2B] mb-3">How We Use Your Information</h2>
                    <div className="space-y-2 text-[#2D2D2B]/80">
                      <p>We use the information we collect to:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Provide, maintain, and improve our PMU services</li>
                        <li>Process appointments and consultations</li>
                        <li>Maintain medical and service records as required by Virginia law</li>
                        <li>Send appointment reminders and aftercare instructions</li>
                        <li>Respond to your inquiries and customer service requests</li>
                        <li>Send marketing communications (with your consent)</li>
                        <li>Analyze website usage and improve user experience</li>
                        <li>Comply with legal obligations and protect our rights</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Information Sharing */}
              <div className="mb-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#E6DAD2]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-[#2D2D2B]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-cormorant font-medium text-[#2D2D2B] mb-3">Information Sharing and Disclosure</h2>
                    <div className="space-y-4 text-[#2D2D2B]/80">
                      <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Service Providers:</strong> Third-party vendors who assist with booking systems (Vagaro), payment processing, email communications, and website hosting</li>
                        <li><strong>Legal Requirements:</strong> When required by law or to protect our rights, safety, or property</li>
                        <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition of our business</li>
                        <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information (e.g., testimonials, before/after photos)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Security */}
              <div className="mb-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#E6DAD2]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-[#2D2D2B]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-cormorant font-medium text-[#2D2D2B] mb-3">Data Security</h2>
                    <p className="text-[#2D2D2B]/80 leading-relaxed">
                      We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                    </p>
                  </div>
                </div>
              </div>

              {/* Your Rights */}
              <div className="mb-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#E6DAD2]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-[#2D2D2B]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-cormorant font-medium text-[#2D2D2B] mb-3">Your Privacy Rights</h2>
                    <div className="space-y-2 text-[#2D2D2B]/80">
                      <p>You have the right to:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Access and receive a copy of your personal information</li>
                        <li>Correct inaccurate or incomplete information</li>
                        <li>Request deletion of your personal information (subject to legal requirements)</li>
                        <li>Opt-out of marketing communications</li>
                        <li>Withdraw consent for specific data processing activities</li>
                      </ul>
                      <p className="mt-4">
                        To exercise these rights, please contact us at <a href="mailto:inkmugi@gmail.com" className="text-[#2D2D2B] font-medium hover:text-[#E6DAD2]">inkmugi@gmail.com</a> or call <a href="tel:+15712838228" className="text-[#2D2D2B] font-medium hover:text-[#E6DAD2]">(571) 283-8228</a>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cookies */}
              <div className="mb-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#E6DAD2]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-[#2D2D2B]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-cormorant font-medium text-[#2D2D2B] mb-3">Cookies and Tracking Technologies</h2>
                    <p className="text-[#2D2D2B]/80 leading-relaxed mb-4">
                      We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand where our visitors are coming from. You can control cookies through your browser settings.
                    </p>
                    <p className="text-[#2D2D2B]/80 leading-relaxed">
                      Types of cookies we use: essential cookies (necessary for website functionality), analytics cookies (to understand usage patterns), and marketing cookies (with your consent).
                    </p>
                  </div>
                </div>
              </div>

              {/* Third-Party Links */}
              <div className="mb-12">
                <div className="bg-[#F9F7F5] p-6 rounded-lg border border-[#E6DAD2]/30">
                  <h3 className="font-medium text-[#2D2D2B] mb-3">Third-Party Websites</h3>
                  <p className="text-[#2D2D2B]/80 leading-relaxed">
                    Our website may contain links to third-party websites (e.g., Vagaro booking system, social media platforms). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
                  </p>
                </div>
              </div>

              {/* Children's Privacy */}
              <div className="mb-12">
                <h2 className="text-2xl font-cormorant font-medium text-[#2D2D2B] mb-3">Children's Privacy</h2>
                <p className="text-[#2D2D2B]/80 leading-relaxed">
                  Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from minors. If you believe we have inadvertently collected information from a minor, please contact us immediately.
                </p>
              </div>

              {/* Changes to Policy */}
              <div className="mb-12">
                <h2 className="text-2xl font-cormorant font-medium text-[#2D2D2B] mb-3">Changes to This Privacy Policy</h2>
                <p className="text-[#2D2D2B]/80 leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on this page with a new "Last Updated" date.
                </p>
              </div>

              {/* Contact */}
              <div className="mb-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#E6DAD2]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#2D2D2B]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-cormorant font-medium text-[#2D2D2B] mb-3">Contact Us</h2>
                    <p className="text-[#2D2D2B]/80 leading-relaxed mb-4">
                      If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                    </p>
                    <div className="space-y-2 text-[#2D2D2B]/80">
                      <p><strong>Ink Mugi</strong></p>
                      <p>7857 Heritage Dr #330<br />Annandale, VA 22003</p>
                      <p>Email: <a href="mailto:inkmugi@gmail.com" className="text-[#2D2D2B] font-medium hover:text-[#E6DAD2]">inkmugi@gmail.com</a></p>
                      <p>Phone: <a href="tel:+15712838228" className="text-[#2D2D2B] font-medium hover:text-[#E6DAD2]">(571) 283-8228</a></p>
                    </div>
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
                Questions About Your Privacy?
              </h3>
              <p className="text-[#2D2D2B]/80 mb-6">
                We're here to address any concerns you may have about how we handle your personal information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn bg-[#2D2D2B] hover:bg-[#2D2D2B]/80 text-white transition-all duration-300">
                  Contact Us
                </Link>
                <Link to="/" className="btn btn-outline text-[#2D2D2B] border-[#2D2D2B] hover:bg-[#2D2D2B]/5 transition-all duration-300">
                  Return Home
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
