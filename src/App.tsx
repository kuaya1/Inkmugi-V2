import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyMobileBookingBar from './components/StickyMobileBookingBar';
import NotFound from './pages/NotFound';
import { routes } from './routes';

/*
 * data-page-loader is the sentinel the prerenderer looks for: renderToString
 * does not await Suspense, so a first pass that still contains this attribute
 * means the route's lazy chunk has not resolved yet and the page must be
 * rendered again. If it survives every pass, the build fails loudly rather
 * than shipping a document whose only content is a spinner.
 */
const PageLoader = () => (
  <div data-page-loader className="min-h-screen flex items-center justify-center bg-[#F9F7F5]">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-[#E6DAD2] border-t-[#2D2D2B] rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-[#2D2D2B]/70 text-sm">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-[#2D2D2B] focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            {/* Catch-all. In production this is only reachable through
                client-side navigation: unknown URLs are served dist/404.html
                by Netlify with a real HTTP 404. */}
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
