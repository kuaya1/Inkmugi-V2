import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

export default function OmbreBrows() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/signature-ombre-brows', { replace: true });
  }, [navigate]);

  return (
    <>
      <SEO
        title="Ombre Powder Brows in Annandale, VA | Ink Mugi"
        description="Professional ombre powder brows at Ink Mugi in Annandale, VA. See healed results, learn the process, and book a consultation."
        path="/ombre-brows"
        noindex
      />
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <p className="text-neutral-600">Redirecting...</p>
      </div>
    </>
  );
}
