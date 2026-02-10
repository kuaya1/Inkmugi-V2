import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin, Star } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-custom-800 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-12">
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
                href="https://www.instagram.com/browsby.mugi/"
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
              <li>
                <Link to="/booking" className="text-neutral-300 hover:text-primary transition-colors duration-300 text-sm">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-medium mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/ombre-brows" className="text-neutral-300 hover:text-primary transition-colors duration-300 text-sm">
                  Ombre Powder Brows
                </Link>
              </li>
              <li>
                <Link to="/microshading-artistry" className="text-neutral-300 hover:text-primary transition-colors duration-300 text-sm">
                  Microshading Artistry
                </Link>
              </li>
              <li>
                <Link to="/nano-brows" className="text-neutral-300 hover:text-primary transition-colors duration-300 text-sm">
                  Nano Brows
                </Link>
              </li>
              <li>
                <Link to="/lip-blush" className="text-neutral-300 hover:text-primary transition-colors duration-300 text-sm">
                  Lip Blush
                </Link>
              </li>
              <li>
                <Link to="/pmu-correction-restoration" className="text-neutral-300 hover:text-primary transition-colors duration-300 text-sm">
                  PMU Correction
                </Link>
              </li>
              <li>
                <Link to="/saline-tattoo-removal" className="text-neutral-300 hover:text-primary transition-colors duration-300 text-sm">
                  Saline Tattoo Removal
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-300 hover:text-primary transition-colors duration-300 text-sm">
                  All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-medium mb-4">Service Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/permanent-makeup-annandale" className="text-neutral-300 hover:text-primary transition-colors duration-300 text-sm">
                  Annandale, VA
                </Link>
              </li>
              <li>
                <Link to="/permanent-makeup-arlington" className="text-neutral-300 hover:text-primary transition-colors duration-300 text-sm">
                  Arlington, VA
                </Link>
              </li>
              <li>
                <Link to="/permanent-makeup-alexandria" className="text-neutral-300 hover:text-primary transition-colors duration-300 text-sm">
                  Alexandria, VA
                </Link>
              </li>
              <li>
                <Link to="/permanent-makeup-fairfax" className="text-neutral-300 hover:text-primary transition-colors duration-300 text-sm">
                  Fairfax, VA
                </Link>
              </li>
              <li>
                <Link to="/permanent-makeup-dc" className="text-neutral-300 hover:text-primary transition-colors duration-300 text-sm">
                  Washington, DC
                </Link>
              </li>
              <li>
                <Link to="/permanent-makeup-mclean" className="text-neutral-300 hover:text-primary transition-colors duration-300 text-sm">
                  McLean, VA
                </Link>
              </li>
              <li>
                <Link to="/permanent-makeup-tysons" className="text-neutral-300 hover:text-primary transition-colors duration-300 text-sm">
                  Tysons, VA
                </Link>
              </li>
              <li>
                <Link to="/permanent-makeup-falls-church" className="text-neutral-300 hover:text-primary transition-colors duration-300 text-sm">
                  Falls Church, VA
                </Link>
              </li>
              <li>
                <Link to="/permanent-makeup-springfield" className="text-neutral-300 hover:text-primary transition-colors duration-300 text-sm">
                  Springfield, VA
                </Link>
              </li>
              <li>
                <Link to="/permanent-makeup-vienna" className="text-neutral-300 hover:text-primary transition-colors duration-300 text-sm">
                  Vienna, VA
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