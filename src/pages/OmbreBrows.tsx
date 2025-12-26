import { Helmet } from 'react-helmet-async';

export default function OmbreBrows() {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Ombre Powder Brows | Coming Soon | Ink Mugi</title>
      </Helmet>
      <div className="min-h-screen bg-neutral-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-neutral-900 mb-8">Ombre Powder Brows</h1>
          <p className="text-neutral-600">Full content coming soon. In the meantime, explore our <a href="/signature-ombre-brows" className="text-primary underline">Signature Ombre Brows</a> page.</p>
        </div>
      </div>
    </>
  );
}
