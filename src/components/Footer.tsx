import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin, Star } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-custom-800 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-cormorant font-semibold">
              Ink Mugi
            </Link>
            <p className="text-neutral-300 text-sm mt-4 max-w-xs">
              Where artistry meets precision in permanent beauty. Transforming lives through bespoke ombre powder brows that enhance your natural elegance and daily confidence.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.instagram.com/inkmugi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/inkmugi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://maps.app.goo.gl/3GSCY6K3AyzSHmXL8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors duration-300"
                aria-label="Google Business Profile"
              >
                <Star size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-primary transition-colors duration-300 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-primary transition-colors duration-300 text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-300 hover:text-primary transition-colors duration-300 text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-neutral-300 hover:text-primary transition-colors duration-300 text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-neutral-300 hover:text-primary transition-colors duration-300 text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/authority" className="text-neutral-300 hover:text-primary transition-colors duration-300 text-sm">
                  Authority
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-neutral-300 hover:text-primary transition-colors duration-300 text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* PMU Education */}
          <div>
            <h3 className="text-lg font-medium mb-4">PMU Education</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/pmu-data-guide" className="text-neutral-300 hover:text-primary transition-colors duration-300 text-sm">
                  Safety Data & Statistics
                </Link>
              </li>
              <li>
                <Link to="/pmu-myths-facts" className="text-neutral-300 hover:text-primary transition-colors duration-300 text-sm">
                  PMU Myths vs Facts
                </Link>
              </li>
              <li>
                <Link to="/permanent-makeup-safety-dmv" className="text-neutral-300 hover:text-primary transition-colors duration-300 text-sm">
                  PMU Safety in DMV
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-neutral-300 hover:text-primary transition-colors duration-300 text-sm">
                  PMU Guides & Tips
                </Link>
              </li>
            </ul>
          </div>

          {/* Artistry Services */}
          <div>
            <h3 className="text-lg font-medium mb-4">Artistry Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/ombre-brows" className="text-neutral-300 hover:text-primary transition-colors duration-300 text-sm">
                  Signature Ombre Powder Brows
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-300 hover:text-primary transition-colors duration-300 text-sm">
                  Precision Touch-Up Sessions
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-300 hover:text-primary transition-colors duration-300 text-sm">
                  Transformation Corrections
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-300 hover:text-primary transition-colors duration-300 text-sm">
                  Private Design Consultation
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-neutral-300 hover:text-primary transition-colors duration-300 text-sm">
                  Reserve Your Session
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 text-primary" />
                <span className="text-neutral-300 text-sm">Heritage Center<br />7857 Heritage Dr #330<br />Annandale, VA 22003</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-primary" />
                <a href="tel:+15712838228" className="text-neutral-300 hover:text-primary transition-colors duration-300 text-sm">
                  (571) 283-8228
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-primary" />
                <a href="mailto:inkmugi@gmail.com" className="text-neutral-300 hover:text-primary transition-colors duration-300 text-sm">
                  inkmugi@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Star size={18} className="mr-2 text-primary" />
                <a 
                  href="https://maps.app.goo.gl/3GSCY6K3AyzSHmXL8" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-neutral-300 hover:text-primary transition-colors duration-300 text-sm"
                >
                  Google Business Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-700 text-center text-neutral-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Ink Mugi. All rights reserved. Crafted with precision and passion.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;