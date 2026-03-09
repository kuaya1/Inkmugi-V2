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
// County-Level Authority Pages
const PermanentMakeupFairfaxCounty = lazy(() => import('./pages/PermanentMakeupFairfaxCounty'));
const OmbreBrowsLoudounCounty = lazy(() => import('./pages/OmbreBrowsLoudounCounty'));
// Month 3 — Western Fairfax County Expansion
const OmbreBrowsReston = lazy(() => import('./pages/OmbreBrowsReston'));
const OmbreBrowsHerndon = lazy(() => import('./pages/OmbreBrowsHerndon'));
const OmbreBrowsChantilly = lazy(() => import('./pages/OmbreBrowsChantilly'));
const OmbreBrowsCentreville = lazy(() => import('./pages/OmbreBrowsCentreville'));
// Burke — Fairfax County Expansion
const PermanentMakeupBurke = lazy(() => import('./pages/PermanentMakeupBurke'));
// Prince William County Expansion
const OmbreBrowsManassas = lazy(() => import('./pages/OmbreBrowsManassas'));
const OmbreBrowsWoodbridge = lazy(() => import('./pages/OmbreBrowsWoodbridge'));
// Blog Pages
const OmbreBrowsDarkSkinGuide = lazy(() => import('./pages/blog/OmbreBrowsDarkSkinGuide'));
// New Service Pages
const MicroshadingArtistry = lazy(() => import('./pages/MicroshadingArtistry'));
const PmuCorrectionRestoration = lazy(() => import('./pages/PmuCorrectionRestoration'));
const NanoBrows = lazy(() => import('./pages/NanoBrows'));
const NanoBrowsVsMicroblading = lazy(() => import('./pages/NanoBrowsVsMicroblading'));
// Microblading Hub Pages
const MicrobladingVsPowderBrows = lazy(() => import('./pages/MicrobladingVsPowderBrows'));
const MicrobladingCorrectionNorthernVirginia = lazy(() => import('./pages/MicrobladingCorrectionNorthernVirginia'));
const MicrobladingForOilySkin = lazy(() => import('./pages/MicrobladingForOilySkin'));
const WhyMicrobladingFades = lazy(() => import('./pages/WhyMicrobladingFades'));
// Microblading Problem-Intent Pages (Phase 2)
const MicrobladingTurningGrey = lazy(() => import('./pages/MicrobladingTurningGrey'));
const BotchedMicrobladingFix = lazy(() => import('./pages/BotchedMicrobladingFix'));
const PatchyMicroblading = lazy(() => import('./pages/PatchyMicroblading'));
const MicrobladingFadingTooFast = lazy(() => import('./pages/MicrobladingFadingTooFast'));
const MicrobladingGoneWrong = lazy(() => import('./pages/MicrobladingGoneWrong'));
const MicrobladingProblems = lazy(() => import('./pages/MicrobladingProblems'));
// Microblading Authority Layer (Phase 3)
const PowderBrowsOverMicroblading = lazy(() => import('./pages/PowderBrowsOverMicroblading'));
const MicrobladingRemovalVsCorrection = lazy(() => import('./pages/MicrobladingRemovalVsCorrection'));
const MicrobladingCorrectionCaseStudy = lazy(() => import('./pages/MicrobladingCorrectionCaseStudy'));
// Knowledge Hub Pages
const OmbrePowderBrowsGuide = lazy(() => import('./pages/OmbrePowderBrowsGuide'));
// Content Pages
const AftercareGuide = lazy(() => import('./pages/AftercareGuide'));
const PmuCostGuideDmv = lazy(() => import('./pages/PmuCostGuideDmv'));
const HowToChoosePmuArtist = lazy(() => import('./pages/HowToChoosePmuArtist'));
const PmuMedicalConditions = lazy(() => import('./pages/PmuMedicalConditions'));
const UltimateGuidePmu = lazy(() => import('./pages/UltimateGuidePmu'));
const PmuComparisonMatrix = lazy(() => import('./pages/PmuComparisonMatrix'));
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
          <Route path="/licensed-pmu-artist-annandale" element={<PermanentMakeupAnnandale />} />
          <Route path="/ombre-brows-mclean-va" element={<OmbreBrowsMcLean />} />
          <Route path="/permanent-makeup-tysons-va" element={<PermanentMakeupTysons />} />
          <Route path="/permanent-makeup-falls-church-va" element={<PermanentMakeupFallsChurch />} />
          <Route path="/permanent-makeup-springfield-va" element={<PermanentMakeupSpringfield />} />
          <Route path="/ombre-brows-vienna-va" element={<OmbreBrowsVienna />} />
          {/* County-Level Authority Pages */}
          <Route path="/permanent-makeup-fairfax-county" element={<PermanentMakeupFairfaxCounty />} />
          <Route path="/ombre-brows-loudoun-county-va" element={<OmbreBrowsLoudounCounty />} />
          {/* Month 3 — Western Fairfax County */}
          <Route path="/ombre-brows-reston-va" element={<OmbreBrowsReston />} />
          <Route path="/ombre-brows-herndon-va" element={<OmbreBrowsHerndon />} />
          <Route path="/ombre-brows-chantilly-va" element={<OmbreBrowsChantilly />} />
          <Route path="/ombre-brows-centreville-va" element={<OmbreBrowsCentreville />} />
          {/* Burke — Fairfax County Expansion */}
          <Route path="/permanent-makeup-burke-va" element={<PermanentMakeupBurke />} />
          {/* Prince William County Expansion */}
          <Route path="/ombre-brows-manassas-va" element={<OmbreBrowsManassas />} />
          <Route path="/ombre-brows-woodbridge-va" element={<OmbreBrowsWoodbridge />} />
          {/* Blog Pages */}
          <Route path="/blog/ombre-brows-dark-skin-guide" element={<OmbreBrowsDarkSkinGuide />} />
          {/* New Service Pages */}
          <Route path="/microshading-artistry" element={<MicroshadingArtistry />} />
          <Route path="/pmu-correction-restoration" element={<PmuCorrectionRestoration />} />
          <Route path="/nano-brows" element={<NanoBrows />} />
          <Route path="/nano-brows-vs-microblading" element={<NanoBrowsVsMicroblading />} />
          {/* Microblading Hub Pages */}
          <Route path="/microblading-vs-powder-brows" element={<MicrobladingVsPowderBrows />} />
          <Route path="/microblading-correction-northern-virginia" element={<MicrobladingCorrectionNorthernVirginia />} />
          <Route path="/microblading-for-oily-skin" element={<MicrobladingForOilySkin />} />
          <Route path="/why-microblading-fades" element={<WhyMicrobladingFades />} />
          {/* Microblading Problem-Intent Pages (Phase 2) */}
          <Route path="/microblading-turning-grey" element={<MicrobladingTurningGrey />} />
          <Route path="/botched-microblading-fix" element={<BotchedMicrobladingFix />} />
          <Route path="/patchy-microblading" element={<PatchyMicroblading />} />
          <Route path="/microblading-fading-too-fast" element={<MicrobladingFadingTooFast />} />
          <Route path="/microblading-gone-wrong" element={<MicrobladingGoneWrong />} />
          <Route path="/microblading-problems" element={<MicrobladingProblems />} />
          {/* Microblading Authority Layer (Phase 3) */}
          <Route path="/powder-brows-over-microblading" element={<PowderBrowsOverMicroblading />} />
          <Route path="/microblading-removal-vs-correction" element={<MicrobladingRemovalVsCorrection />} />
          <Route path="/microblading-correction-case-study" element={<MicrobladingCorrectionCaseStudy />} />
          {/* Knowledge Hub Pages */}
          <Route path="/ombre-powder-brows-guide" element={<OmbrePowderBrowsGuide />} />
          {/* Content Pages */}
          <Route path="/aftercare-guide" element={<AftercareGuide />} />
          <Route path="/pmu-cost-guide-dmv" element={<PmuCostGuideDmv />} />
          <Route path="/how-to-choose-pmu-artist" element={<HowToChoosePmuArtist />} />
          <Route path="/pmu-medical-conditions" element={<PmuMedicalConditions />} />
          <Route path="/ultimate-guide-permanent-makeup" element={<UltimateGuidePmu />} />
          <Route path="/pmu-comparison-matrix" element={<PmuComparisonMatrix />} />
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