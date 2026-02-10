import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Sparkles, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Authority', path: '/authority' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-soft py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <div className="flex-shrink-0 pt-1.5">
          <Link to="/" className="flex items-center">
            <img 
              src="https://live.staticflickr.com/65535/54408080424_9b71cd2f74_o_d.png" 
              alt="Logo"
              className={`transition-all duration-300 w-auto object-contain ${
                isScrolled 
                  ? 'h-[42px] md:h-[52px] brightness-0' 
                  : 'h-[55px] md:h-[65px]'
              }`}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 flex-grow justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors duration-300 ${
                location.pathname === link.path
                  ? 'text-primary'
                  : 'text-neutral-700 hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Buttons - Desktop */}
        <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
          {/* Tap-to-Call */}
          <a
            href="tel:+15712838228"
            className="flex items-center gap-2 text-neutral-700 hover:text-primary transition-colors duration-300 font-medium text-sm"
            aria-label="Call (571) 283-8228"
          >
            <Phone size={18} />
            <span className="hidden lg:inline">(571) 283-8228</span>
          </a>
          
          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.instagram.com/browsby.mugi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 hover:text-primary transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/inkmugi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 hover:text-primary transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>
          
          {/* AI Try-On Button - Featured */}
          {/* DISABLED - Temporarily hidden
          <Link
            to="/virtual-try-on"
            className="relative group bg-gradient-to-r from-[#2D2D2B] to-[#4A4A47] hover:from-[#3D3D3B] hover:to-[#5A5A57] text-white text-sm py-2 px-5 rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Sparkles size={16} className="animate-pulse" />
            <span>Try AI Brows</span>
            <span className="absolute -top-1 -right-1 bg-[#E6DAD2] text-[#2D2D2B] text-[10px] font-bold px-1.5 py-0.5 rounded-full">
              NEW
            </span>
          </Link>
          */}
          
          <Link
            to="/booking"
            className="btn btn-primary text-sm py-2 px-4"
          >
            Request a Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden focus:outline-none ${
            isScrolled ? 'text-neutral-700' : 'text-neutral-100'
          }`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container-custom py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium py-2 transition-colors duration-300 ${
                location.pathname === link.path
                  ? 'text-primary'
                  : 'text-neutral-700 hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* AI Try-On Button - Mobile Featured */}
          {/* DISABLED - Temporarily hidden
          <Link
            to="/virtual-try-on"
            className="relative bg-gradient-to-r from-[#2D2D2B] to-[#4A4A47] text-white text-sm py-3 rounded-lg flex items-center justify-center gap-2 shadow-lg"
          >
            <Sparkles size={16} />
            <span>Try AI Virtual Brows</span>
            <span className="absolute -top-1 -right-1 bg-[#E6DAD2] text-[#2D2D2B] text-[10px] font-bold px-1.5 py-0.5 rounded-full">
              NEW
            </span>
          </Link>
          */}
          
          {/* Tap-to-Call - Mobile */}
          <a
            href="tel:+15712838228"
            className="flex items-center justify-center gap-2 bg-[#E6DAD2] text-[#2D2D2B] text-sm py-3 rounded-lg font-medium"
            aria-label="Call (571) 283-8228"
          >
            <Phone size={18} />
            <span>Call (571) 283-8228</span>
          </a>
          
          <Link
            to="/booking"
            className="btn btn-primary text-sm py-2 w-full"
          >
            Request a Consultation
          </Link>

          {/* Social Icons - Mobile */}
          <div className="flex items-center space-x-4 pt-2">
            <a
              href="https://www.instagram.com/browsby.mugi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 hover:text-primary transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/inkmugi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 hover:text-primary transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;