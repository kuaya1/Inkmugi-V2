import { useEffect } from 'react';
import SEO from '../components/SEO';

export default function BookingRedirect() {
  useEffect(() => {
    // Redirect to Vagaro booking page
    window.location.href = 'https://www.vagaro.com/inkmugi';
  }, []);

  return (
    <>
      <SEO
        title="Redirecting to Booking | Ink Mugi"
        description="Redirecting to Ink Mugi's booking page."
        path="/booking"
        noindex
      />
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
          <p className="text-neutral-600">Redirecting to booking page...</p>
        </div>
      </div>
    </>
  );
}
