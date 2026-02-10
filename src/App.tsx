import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyMobileBookingBar from './components/StickyMobileBookingBar';

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
// Month 2 — Geographic Expansion City Pages
const PermanentMakeupAnnandale = lazy(() => import('./pages/PermanentMakeupAnnandale'));
const OmbreBrowsMcLean = lazy(() => import('./pages/OmbreBrowsMcLean'));
const PermanentMakeupTysons = lazy(() => import('./pages/PermanentMakeupTysons'));
const PermanentMakeupFallsChurch = lazy(() => import('./pages/PermanentMakeupFallsChurch'));
const PermanentMakeupSpringfield = lazy(() => import('./pages/PermanentMakeupSpringfield'));
const OmbreBrowsVienna = lazy(() => import('./pages/OmbreBrowsVienna'));
// New Service Pages
const MicroshadingArtistry = lazy(() => import('./pages/MicroshadingArtistry'));
const PmuCorrectionRestoration = lazy(() => import('./pages/PmuCorrectionRestoration'));
const NanoBrows = lazy(() => import('./pages/NanoBrows'));
const SalineTattooRemoval = lazy(() => import('./pages/SalineTattooRemoval'));
const LipBlush = lazy(() => import('./pages/LipBlush'));
// Content Pages
const AftercareGuide = lazy(() => import('./pages/AftercareGuide'));
const PmuCostGuideDmv = lazy(() => import('./pages/PmuCostGuideDmv'));
// 404
const NotFound = lazy(() => import('./pages/NotFound'));

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
          {/* Month 2 — Geographic Expansion */}
          <Route path="/permanent-makeup-annandale-va" element={<PermanentMakeupAnnandale />} />
          <Route path="/ombre-brows-mclean-va" element={<OmbreBrowsMcLean />} />
          <Route path="/permanent-makeup-tysons-va" element={<PermanentMakeupTysons />} />
          <Route path="/permanent-makeup-falls-church-va" element={<PermanentMakeupFallsChurch />} />
          <Route path="/permanent-makeup-springfield-va" element={<PermanentMakeupSpringfield />} />
          <Route path="/ombre-brows-vienna-va" element={<OmbreBrowsVienna />} />
          {/* New Service Pages */}
          <Route path="/microshading-artistry" element={<MicroshadingArtistry />} />
          <Route path="/pmu-correction-restoration" element={<PmuCorrectionRestoration />} />
          <Route path="/nano-brows" element={<NanoBrows />} />
          <Route path="/saline-tattoo-removal" element={<SalineTattooRemoval />} />
          <Route path="/lip-blush" element={<LipBlush />} />
          {/* Content Pages */}
          <Route path="/aftercare-guide" element={<AftercareGuide />} />
          <Route path="/pmu-cost-guide-dmv" element={<PmuCostGuideDmv />} />
          {/* 404 Catch-All — MUST be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </main>
      <Footer />
      <StickyMobileBookingBar />
    </div>
  );
}

export default App;