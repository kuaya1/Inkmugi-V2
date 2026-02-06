import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function OmbreBrows() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/signature-ombre-brows', { replace: true });
  }, [navigate]);

  return (
    <>
      <Helmet>
        <title>Ombre Powder Brows in Annandale, VA | Ink Mugi</title>
        <meta name="description" content="Professional ombre powder brows at Ink Mugi in Annandale, VA. See healed results, learn the process, and book a consultation." />
        <link rel="canonical" href="https://www.inkmugi.com/signature-ombre-brows" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <p className="text-neutral-600">Redirecting...</p>
      </div>
    </>
  );
}
