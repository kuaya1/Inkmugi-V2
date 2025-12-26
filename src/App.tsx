import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Critical routes - loaded immediately
import Home from './pages/Home';

// Lazy-loaded routes for better initial load performance
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const Faq = lazy(() => import('./pages/Faq'));
const BookingRedirect = lazy(() => import('./pages/BookingRedirect'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./components/blogpost'));
const Authority = lazy(() => import('./pages/Authority'));
const OmbreBrows = lazy(() => import('./pages/OmbreBrows'));
const PermanentMakeupSafetyDMV = lazy(() => import('./pages/PermanentMakeupSafetyDMV'));
const PMUDataGuide = lazy(() => import('./pages/PMUDataGuide'));
const PMUMythsVsFacts = lazy(() => import('./pages/PMUMythsVsFacts'));
const ClimatePerformanceAnalysis = lazy(() => import('./pages/ClimatePerformanceAnalysis'));
const VirtualTryOn = lazy(() => import('./pages/VirtualTryOn'));
const SignatureOmbreBrows = lazy(() => import('./pages/SignatureOmbreBrows'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
// City Landing Pages
const OmbreBrowsArlington = lazy(() => import('./pages/OmbreBrowsArlington'));
const OmbreBrowsAlexandria = lazy(() => import('./pages/OmbreBrowsAlexandria'));
const OmbreBrowsFairfax = lazy(() => import('./pages/OmbreBrowsFairfax'));
const PermanentMakeupDC = lazy(() => import('./pages/PermanentMakeupDC'));

// Loading fallback for lazy routes
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#F9F7F5]">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-[#E6DAD2] border-t-[#2D2D2B] rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-[#2D2D2B]/70 text-sm">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
          <Route path="/virtual-try-on" element={<VirtualTryOn />} />
          <Route path="/signature-ombre-brows" element={<SignatureOmbreBrows />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/booking" element={<BookingRedirect />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/authority" element={<Authority />} />
          <Route path="/ombre-brows" element={<OmbreBrows />} />
          <Route path="/permanent-makeup-safety-dmv" element={<PermanentMakeupSafetyDMV />} />
          <Route path="/pmu-data-guide" element={<PMUDataGuide />} />
          <Route path="/pmu-myths-facts" element={<PMUMythsVsFacts />} />
          <Route path="/climate-performance-analysis" element={<ClimatePerformanceAnalysis />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          {/* City Landing Pages */}
          <Route path="/ombre-brows-arlington-va" element={<OmbreBrowsArlington />} />
          <Route path="/ombre-brows-alexandria-va" element={<OmbreBrowsAlexandria />} />
          <Route path="/ombre-brows-fairfax-va" element={<OmbreBrowsFairfax />} />
          <Route path="/permanent-makeup-dc" element={<PermanentMakeupDC />} />
        </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;