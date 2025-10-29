import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import BookingRedirect from './pages/BookingRedirect';
import Blog from './pages/Blog';
import BlogPost from './components/blogpost';
import Authority from './pages/Authority';
import OmbreBrows from './pages/OmbreBrows';
import PermanentMakeupSafetyDMV from './pages/PermanentMakeupSafetyDMV';
import PMUDataGuide from './pages/PMUDataGuide';
import PMUMythsVsFacts from './pages/PMUMythsVsFacts';
import ClimatePerformanceAnalysis from './pages/ClimatePerformanceAnalysis';
import VirtualTryOn from './pages/VirtualTryOn';
import SignatureOmbreBrows from './pages/SignatureOmbreBrows';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <Navbar />
      <main className="flex-grow">
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
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;