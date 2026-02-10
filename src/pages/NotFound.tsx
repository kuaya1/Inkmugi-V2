import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, Search, ArrowRight, Phone, BookOpen, MapPin } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Ink Mugi</title>
        <meta name="robots" content="noindex, follow" />
        <meta name="description" content="This page doesn't exist. Find ombre powder brows services, pricing, gallery, and booking at Ink Mugi in Annandale, VA." />
      </Helmet>

      <section className="pt-32 pb-20 bg-gradient-to-b from-[#F0E4D8] to-[#F9F7F5] min-h-screen">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-8xl font-cormorant font-bold text-[#9A7B69]/30 mb-4">404</p>
            <h1 className="text-3xl md:text-4xl font-cormorant font-medium text-[#2D2D2B] mb-4">
              This Page Doesn't Exist
            </h1>
            <p className="text-lg text-[#2D2D2B]/70 mb-12">
              The page you're looking for may have moved or no longer exists. Let's get you back on track.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              <Link
                to="/"
                className="flex items-center gap-3 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
              >
                <Home className="w-6 h-6 text-[#9A7B69]" />
                <div className="text-left">
                  <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Homepage</p>
                  <p className="text-sm text-[#2D2D2B]/50">Start here</p>
                </div>
              </Link>

              <Link
                to="/services"
                className="flex items-center gap-3 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
              >
                <Search className="w-6 h-6 text-[#9A7B69]" />
                <div className="text-left">
                  <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Services & Pricing</p>
                  <p className="text-sm text-[#2D2D2B]/50">See all services</p>
                </div>
              </Link>

              <Link
                to="/gallery"
                className="flex items-center gap-3 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
              >
                <BookOpen className="w-6 h-6 text-[#9A7B69]" />
                <div className="text-left">
                  <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Before & After Gallery</p>
                  <p className="text-sm text-[#2D2D2B]/50">View healed results</p>
                </div>
              </Link>

              <Link
                to="/booking"
                className="flex items-center gap-3 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
              >
                <ArrowRight className="w-6 h-6 text-[#9A7B69]" />
                <div className="text-left">
                  <p className="font-medium text-[#2D2D2B] group-hover:text-[#9A7B69] transition-colors">Book Consultation</p>
                  <p className="text-sm text-[#2D2D2B]/50">Free, no obligation</p>
                </div>
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-cormorant font-medium text-[#2D2D2B] mb-4">Looking for a Specific Location?</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <Link to="/ombre-brows-arlington-va" className="flex items-center gap-2 text-sm text-[#2D2D2B]/70 hover:text-[#9A7B69]">
                  <MapPin className="w-3 h-3" /> Arlington, VA
                </Link>
                <Link to="/ombre-brows-alexandria-va" className="flex items-center gap-2 text-sm text-[#2D2D2B]/70 hover:text-[#9A7B69]">
                  <MapPin className="w-3 h-3" /> Alexandria, VA
                </Link>
                <Link to="/ombre-brows-fairfax-va" className="flex items-center gap-2 text-sm text-[#2D2D2B]/70 hover:text-[#9A7B69]">
                  <MapPin className="w-3 h-3" /> Fairfax, VA
                </Link>
                <Link to="/permanent-makeup-dc" className="flex items-center gap-2 text-sm text-[#2D2D2B]/70 hover:text-[#9A7B69]">
                  <MapPin className="w-3 h-3" /> Washington, DC
                </Link>
                <Link to="/faq" className="flex items-center gap-2 text-sm text-[#2D2D2B]/70 hover:text-[#9A7B69]">
                  <Search className="w-3 h-3" /> FAQ
                </Link>
                <Link to="/blog" className="flex items-center gap-2 text-sm text-[#2D2D2B]/70 hover:text-[#9A7B69]">
                  <BookOpen className="w-3 h-3" /> Blog
                </Link>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="tel:+15712838228"
                className="inline-flex items-center gap-2 text-[#9A7B69] hover:text-[#2D2D2B] transition-colors"
              >
                <Phone className="w-4 h-4" />
                Need help? Call (571) 283-8228
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
