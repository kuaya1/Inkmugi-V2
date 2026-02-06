import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export default function BookingRedirect() {
  useEffect(() => {
    // Redirect to Vagaro booking page
    window.location.href = 'https://www.vagaro.com/inkmugi';
  }, []);

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Redirecting to Booking | Ink Mugi</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
          <p className="text-neutral-600">Redirecting to booking page...</p>
        </div>
      </div>
    </>
  );
}
