import { lazy } from 'react';
import type { ComponentType, LazyExoticComponent } from 'react';

/**
 * Single source of truth for the site's URL space.
 *
 * App.tsx renders from this list, entry-server.tsx prerenders from it, and
 * scripts/prerender.mjs generates sitemap.xml from it. Previously the routes
 * lived in App.tsx while the sitemap was a hand-maintained XML file, and the
 * two had drifted: /permanent-makeup-burke-va was a real page that no sitemap
 * ever mentioned. Keeping one list makes that class of drift impossible.
 */
export interface RouteDef {
  path: string;
  Component: LazyExoticComponent<ComponentType> | ComponentType;
  /** include in sitemap.xml — true means "we want this ranking in organic search" */
  sitemap: boolean;
  /** page emits noindex */
  noindex?: boolean;
  /** source file, used for a truthful sitemap <lastmod> */
  sourceFile: string;
  /** page intentionally canonicalises somewhere other than its own URL */
  canonicalOverride?: boolean;
}

/* Home is eager: it is the most-requested route and its chunk is already in the
   main bundle, so lazy-loading it would only add a request to the critical path. */
import Home from './pages/Home';

/* Every other route is lazy. The import specifiers are literal on purpose:
   Vite needs them static to code-split, and the prerenderer relies on those
   chunks resolving deterministically. */
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const Faq = lazy(() => import('./pages/Faq'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./components/blogpost'));
const Authority = lazy(() => import('./pages/Authority'));
const PermanentMakeupSafetyDMV = lazy(() => import('./pages/PermanentMakeupSafetyDMV'));
const PMUDataGuide = lazy(() => import('./pages/PMUDataGuide'));
const PMUMythsVsFacts = lazy(() => import('./pages/PMUMythsVsFacts'));
const ClimatePerformanceAnalysis = lazy(() => import('./pages/ClimatePerformanceAnalysis'));
const VirtualTryOn = lazy(() => import('./pages/VirtualTryOn'));
const SignatureOmbreBrows = lazy(() => import('./pages/SignatureOmbreBrows'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));

/* Location pages */
const OmbreBrowsArlington = lazy(() => import('./pages/OmbreBrowsArlington'));
const OmbreBrowsAlexandria = lazy(() => import('./pages/OmbreBrowsAlexandria'));
const OmbreBrowsFairfax = lazy(() => import('./pages/OmbreBrowsFairfax'));
const PermanentMakeupDC = lazy(() => import('./pages/PermanentMakeupDC'));
const PermanentMakeupAnnandale = lazy(() => import('./pages/PermanentMakeupAnnandale'));
const OmbreBrowsMcLean = lazy(() => import('./pages/OmbreBrowsMcLean'));
const PermanentMakeupTysons = lazy(() => import('./pages/PermanentMakeupTysons'));
const PermanentMakeupFallsChurch = lazy(() => import('./pages/PermanentMakeupFallsChurch'));
const PermanentMakeupSpringfield = lazy(() => import('./pages/PermanentMakeupSpringfield'));
const OmbreBrowsVienna = lazy(() => import('./pages/OmbreBrowsVienna'));
const PermanentMakeupFairfaxCounty = lazy(() => import('./pages/PermanentMakeupFairfaxCounty'));
const OmbreBrowsLoudounCounty = lazy(() => import('./pages/OmbreBrowsLoudounCounty'));
const OmbreBrowsReston = lazy(() => import('./pages/OmbreBrowsReston'));
const OmbreBrowsHerndon = lazy(() => import('./pages/OmbreBrowsHerndon'));
const OmbreBrowsChantilly = lazy(() => import('./pages/OmbreBrowsChantilly'));
const OmbreBrowsCentreville = lazy(() => import('./pages/OmbreBrowsCentreville'));
const PermanentMakeupBurke = lazy(() => import('./pages/PermanentMakeupBurke'));
const OmbreBrowsManassas = lazy(() => import('./pages/OmbreBrowsManassas'));
const OmbreBrowsWoodbridge = lazy(() => import('./pages/OmbreBrowsWoodbridge'));

/* Blog pages with dedicated components */
const OmbreBrowsDarkSkinGuide = lazy(() => import('./pages/blog/OmbreBrowsDarkSkinGuide'));

/* Service pages */
const MicroshadingArtistry = lazy(() => import('./pages/MicroshadingArtistry'));
const PmuCorrectionRestoration = lazy(() => import('./pages/PmuCorrectionRestoration'));
const NanoBrows = lazy(() => import('./pages/NanoBrows'));
const NanoBrowsVsMicroblading = lazy(() => import('./pages/NanoBrowsVsMicroblading'));

/* Microblading cluster */
const MicrobladingVsPowderBrows = lazy(() => import('./pages/MicrobladingVsPowderBrows'));
const MicrobladingCorrectionNorthernVirginia = lazy(() => import('./pages/MicrobladingCorrectionNorthernVirginia'));
const MicrobladingForOilySkin = lazy(() => import('./pages/MicrobladingForOilySkin'));
const WhyMicrobladingFades = lazy(() => import('./pages/WhyMicrobladingFades'));
const MicrobladingTurningGrey = lazy(() => import('./pages/MicrobladingTurningGrey'));
const BotchedMicrobladingFix = lazy(() => import('./pages/BotchedMicrobladingFix'));
const PatchyMicroblading = lazy(() => import('./pages/PatchyMicroblading'));
const MicrobladingFadingTooFast = lazy(() => import('./pages/MicrobladingFadingTooFast'));
const MicrobladingGoneWrong = lazy(() => import('./pages/MicrobladingGoneWrong'));
const MicrobladingProblems = lazy(() => import('./pages/MicrobladingProblems'));
const PowderBrowsOverMicroblading = lazy(() => import('./pages/PowderBrowsOverMicroblading'));
const MicrobladingRemovalVsCorrection = lazy(() => import('./pages/MicrobladingRemovalVsCorrection'));
const MicrobladingCorrectionCaseStudy = lazy(() => import('./pages/MicrobladingCorrectionCaseStudy'));

/* Guides */
const OmbrePowderBrowsGuide = lazy(() => import('./pages/OmbrePowderBrowsGuide'));
const AftercareGuide = lazy(() => import('./pages/AftercareGuide'));
const PmuCostGuideDmv = lazy(() => import('./pages/PmuCostGuideDmv'));
const HowToChoosePmuArtist = lazy(() => import('./pages/HowToChoosePmuArtist'));
const PmuMedicalConditions = lazy(() => import('./pages/PmuMedicalConditions'));
const UltimateGuidePmu = lazy(() => import('./pages/UltimateGuidePmu'));
const PmuComparisonMatrix = lazy(() => import('./pages/PmuComparisonMatrix'));

const p = 'src/pages';

export const routes: RouteDef[] = [
  /* ---- core ---- */
  { path: '/', Component: Home, sitemap: true, sourceFile: `${p}/Home.tsx` },
  { path: '/about', Component: About, sitemap: true, sourceFile: `${p}/About.tsx` },
  { path: '/services', Component: Services, sitemap: true, sourceFile: `${p}/Services.tsx` },
  { path: '/gallery', Component: Gallery, sitemap: true, sourceFile: `${p}/Gallery.tsx` },
  { path: '/contact', Component: Contact, sitemap: true, sourceFile: `${p}/Contact.tsx` },
  { path: '/faq', Component: Faq, sitemap: true, sourceFile: `${p}/Faq.tsx` },
  { path: '/authority', Component: Authority, sitemap: true, sourceFile: `${p}/Authority.tsx` },
  { path: '/blog', Component: Blog, sitemap: true, sourceFile: `${p}/Blog.tsx` },

  /* ---- services ---- */
  { path: '/signature-ombre-brows', Component: SignatureOmbreBrows, sitemap: true, sourceFile: `${p}/SignatureOmbreBrows.tsx` },
  { path: '/nano-brows', Component: NanoBrows, sitemap: true, sourceFile: `${p}/NanoBrows.tsx` },
  { path: '/microshading-artistry', Component: MicroshadingArtistry, sitemap: true, sourceFile: `${p}/MicroshadingArtistry.tsx` },
  { path: '/pmu-correction-restoration', Component: PmuCorrectionRestoration, sitemap: true, sourceFile: `${p}/PmuCorrectionRestoration.tsx` },

  /* ---- comparison ---- */
  { path: '/nano-brows-vs-microblading', Component: NanoBrowsVsMicroblading, sitemap: true, sourceFile: `${p}/NanoBrowsVsMicroblading.tsx` },
  { path: '/microblading-vs-powder-brows', Component: MicrobladingVsPowderBrows, sitemap: true, sourceFile: `${p}/MicrobladingVsPowderBrows.tsx` },
  { path: '/powder-brows-over-microblading', Component: PowderBrowsOverMicroblading, sitemap: true, sourceFile: `${p}/PowderBrowsOverMicroblading.tsx` },
  { path: '/pmu-comparison-matrix', Component: PmuComparisonMatrix, sitemap: true, sourceFile: `${p}/PmuComparisonMatrix.tsx` },

  /* ---- microblading problem intent ---- */
  { path: '/microblading-problems', Component: MicrobladingProblems, sitemap: true, sourceFile: `${p}/MicrobladingProblems.tsx` },
  { path: '/microblading-gone-wrong', Component: MicrobladingGoneWrong, sitemap: true, sourceFile: `${p}/MicrobladingGoneWrong.tsx` },
  { path: '/botched-microblading-fix', Component: BotchedMicrobladingFix, sitemap: true, sourceFile: `${p}/BotchedMicrobladingFix.tsx` },
  { path: '/patchy-microblading', Component: PatchyMicroblading, sitemap: true, sourceFile: `${p}/PatchyMicroblading.tsx` },
  { path: '/microblading-turning-grey', Component: MicrobladingTurningGrey, sitemap: true, sourceFile: `${p}/MicrobladingTurningGrey.tsx` },
  { path: '/microblading-fading-too-fast', Component: MicrobladingFadingTooFast, sitemap: true, sourceFile: `${p}/MicrobladingFadingTooFast.tsx` },
  { path: '/why-microblading-fades', Component: WhyMicrobladingFades, sitemap: true, sourceFile: `${p}/WhyMicrobladingFades.tsx` },
  { path: '/microblading-for-oily-skin', Component: MicrobladingForOilySkin, sitemap: true, sourceFile: `${p}/MicrobladingForOilySkin.tsx` },
  { path: '/microblading-correction-northern-virginia', Component: MicrobladingCorrectionNorthernVirginia, sitemap: true, sourceFile: `${p}/MicrobladingCorrectionNorthernVirginia.tsx` },
  { path: '/microblading-removal-vs-correction', Component: MicrobladingRemovalVsCorrection, sitemap: true, sourceFile: `${p}/MicrobladingRemovalVsCorrection.tsx` },
  { path: '/microblading-correction-case-study', Component: MicrobladingCorrectionCaseStudy, sitemap: true, sourceFile: `${p}/MicrobladingCorrectionCaseStudy.tsx` },

  /* ---- guides / evidence ---- */
  { path: '/ombre-powder-brows-guide', Component: OmbrePowderBrowsGuide, sitemap: true, sourceFile: `${p}/OmbrePowderBrowsGuide.tsx` },
  { path: '/ultimate-guide-permanent-makeup', Component: UltimateGuidePmu, sitemap: true, sourceFile: `${p}/UltimateGuidePmu.tsx` },
  { path: '/aftercare-guide', Component: AftercareGuide, sitemap: true, sourceFile: `${p}/AftercareGuide.tsx` },
  { path: '/pmu-cost-guide-dmv', Component: PmuCostGuideDmv, sitemap: true, sourceFile: `${p}/PmuCostGuideDmv.tsx` },
  { path: '/how-to-choose-pmu-artist', Component: HowToChoosePmuArtist, sitemap: true, sourceFile: `${p}/HowToChoosePmuArtist.tsx` },
  { path: '/pmu-medical-conditions', Component: PmuMedicalConditions, sitemap: true, sourceFile: `${p}/PmuMedicalConditions.tsx` },
  { path: '/permanent-makeup-safety-dmv', Component: PermanentMakeupSafetyDMV, sitemap: true, sourceFile: `${p}/PermanentMakeupSafetyDMV.tsx` },
  { path: '/pmu-data-guide', Component: PMUDataGuide, sitemap: true, sourceFile: `${p}/PMUDataGuide.tsx` },
  { path: '/pmu-myths-facts', Component: PMUMythsVsFacts, sitemap: true, sourceFile: `${p}/PMUMythsVsFacts.tsx` },
  { path: '/climate-performance-analysis', Component: ClimatePerformanceAnalysis, sitemap: true, sourceFile: `${p}/ClimatePerformanceAnalysis.tsx` },

  /* ---- locations ---- */
  { path: '/licensed-pmu-artist-annandale', Component: PermanentMakeupAnnandale, sitemap: true, sourceFile: `${p}/PermanentMakeupAnnandale.tsx` },
  { path: '/ombre-brows-arlington-va', Component: OmbreBrowsArlington, sitemap: true, sourceFile: `${p}/OmbreBrowsArlington.tsx` },
  { path: '/ombre-brows-alexandria-va', Component: OmbreBrowsAlexandria, sitemap: true, sourceFile: `${p}/OmbreBrowsAlexandria.tsx` },
  { path: '/ombre-brows-fairfax-va', Component: OmbreBrowsFairfax, sitemap: true, sourceFile: `${p}/OmbreBrowsFairfax.tsx` },
  { path: '/ombre-brows-mclean-va', Component: OmbreBrowsMcLean, sitemap: true, sourceFile: `${p}/OmbreBrowsMcLean.tsx` },
  { path: '/ombre-brows-vienna-va', Component: OmbreBrowsVienna, sitemap: true, sourceFile: `${p}/OmbreBrowsVienna.tsx` },
  { path: '/ombre-brows-reston-va', Component: OmbreBrowsReston, sitemap: true, sourceFile: `${p}/OmbreBrowsReston.tsx` },
  { path: '/ombre-brows-herndon-va', Component: OmbreBrowsHerndon, sitemap: true, sourceFile: `${p}/OmbreBrowsHerndon.tsx` },
  { path: '/ombre-brows-chantilly-va', Component: OmbreBrowsChantilly, sitemap: true, sourceFile: `${p}/OmbreBrowsChantilly.tsx` },
  { path: '/ombre-brows-centreville-va', Component: OmbreBrowsCentreville, sitemap: true, sourceFile: `${p}/OmbreBrowsCentreville.tsx` },
  { path: '/ombre-brows-manassas-va', Component: OmbreBrowsManassas, sitemap: true, sourceFile: `${p}/OmbreBrowsManassas.tsx` },
  { path: '/ombre-brows-woodbridge-va', Component: OmbreBrowsWoodbridge, sitemap: true, sourceFile: `${p}/OmbreBrowsWoodbridge.tsx` },
  { path: '/ombre-brows-loudoun-county-va', Component: OmbreBrowsLoudounCounty, sitemap: true, sourceFile: `${p}/OmbreBrowsLoudounCounty.tsx` },
  { path: '/permanent-makeup-tysons-va', Component: PermanentMakeupTysons, sitemap: true, sourceFile: `${p}/PermanentMakeupTysons.tsx` },
  { path: '/permanent-makeup-falls-church-va', Component: PermanentMakeupFallsChurch, sitemap: true, sourceFile: `${p}/PermanentMakeupFallsChurch.tsx` },
  { path: '/permanent-makeup-springfield-va', Component: PermanentMakeupSpringfield, sitemap: true, sourceFile: `${p}/PermanentMakeupSpringfield.tsx` },
  { path: '/permanent-makeup-burke-va', Component: PermanentMakeupBurke, sitemap: true, sourceFile: `${p}/PermanentMakeupBurke.tsx` },
  { path: '/permanent-makeup-fairfax-county', Component: PermanentMakeupFairfaxCounty, sitemap: true, sourceFile: `${p}/PermanentMakeupFairfaxCounty.tsx` },
  { path: '/permanent-makeup-dc', Component: PermanentMakeupDC, sitemap: true, sourceFile: `${p}/PermanentMakeupDC.tsx` },

  /* ---- blog articles with dedicated components ---- */
  { path: '/blog/ombre-brows-dark-skin-guide', Component: OmbreBrowsDarkSkinGuide, sitemap: true, sourceFile: `${p}/blog/OmbreBrowsDarkSkinGuide.tsx` },

  /* ---- tools ---- */
  /* Kept indexable and in the sitemap as it is today. It is orphaned (the nav
     link is commented out in Navbar.tsx) but it has real content and search
     history, and de-indexing a live URL is not a change to make on a hunch. */
  { path: '/virtual-try-on', Component: VirtualTryOn, sitemap: true, sourceFile: `${p}/VirtualTryOn.tsx` },

  /* ---- indexable, deliberately not in the sitemap (no organic intent) ---- */
  { path: '/privacy-policy', Component: PrivacyPolicy, sitemap: false, sourceFile: `${p}/PrivacyPolicy.tsx` },
  { path: '/terms-of-service', Component: TermsOfService, sitemap: false, sourceFile: `${p}/TermsOfService.tsx` },

  /* ---- dynamic ---- */
  { path: '/blog/:slug', Component: BlogPost, sitemap: false, sourceFile: 'src/components/blogpost.tsx' },
];
