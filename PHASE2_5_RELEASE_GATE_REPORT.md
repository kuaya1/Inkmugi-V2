# INK MUGI — PHASE 2.5 RELEASE GATE REPORT

Branch `claude/phase2-crawlability` · 3 commits · working tree clean · nothing pushed, nothing deployed

---

## Executive Verdict

**SHIP WITH MINOR CAVEATS.**

The Phase 2 architecture holds up under real-browser verification. Hydration is exact, every route serves distinct prerendered HTML, 404s and redirects behave correctly, and there are no console errors.

The gate found and fixed one genuine release blocker (a live contact form that could never send), a second wave of the phantom-asset defect Phase 2 only partially cleared, and eleven lint errors — two of which Phase 2 introduced.

It also produced one important methodological correction: **`vite preview` serves `index.html` for every path**, so my first pass measured all twelve routes as byte-identical. That is the exact failure signature Phase 2 was meant to eliminate. The `dist` files were correct all along; the server was wrong. Everything below was re-verified against a Netlify-faithful static server that applies the `netlify.toml` redirect table, resolves directory indexes, and falls through to `404.html`.

---

## Browser/Hydration Results

Console across `/`, `/contact`, `/ombre-brows-fairfax-va`, `/blog/ombre-brows-dark-skin-guide`, `/nano-brows-vs-microblading`: **no errors, no warnings, no failed requests.** React 18 reports recoverable hydration errors through `onRecoverableError` even in production builds, so silence here is evidence, not absence of instrumentation.

Structural proof — server markup compared against the live DOM after hydration:

| Route | Server elements | Live elements | Server `<a>` | Live `<a>` | H1 match |
|---|---|---|---|---|---|
| `/` | 771 | 771 | 106 | 106 | yes |
| `/ombre-brows-fairfax-va` | 523 | 523 | 80 | 80 | yes |
| `/blog/ombre-brows-dark-skin-guide` | 669 | 669 | — | — | yes |

Identical counts mean React **hydrated** the server markup rather than discarding and client-rendering it. The `AnimatedSection` design goal — first client render byte-identical to the server — is confirmed, not assumed.

**No duplicate schema after hydration.** `/blog/ombre-brows-dark-skin-guide` has 4 JSON-LD blocks in the served HTML and 4 in the live DOM. react-helmet-async stamps `data-rh` on its SSR output and replaces those nodes on hydration rather than appending, so the prerendered graph is not doubled.

### A measurement trap worth recording

The mobile menu initially measured as **broken**: `aria-expanded` flipped to `true`, the classes correctly became `max-h-screen opacity-100`, but computed style stayed `max-height: 0px; opacity: 0`. The CSS rules existed in the bundle (`.max-h-screen{max-height:100vh}`).

Cause: the Browser pane is not compositing frames, which freezes CSS transitions mid-flight, so `getComputedStyle` returns the start value forever. With transitions disabled the menu behaves correctly:

```
closed  -> height 0,   max-height 0px,   opacity 0
open    -> height 588, max-height 812px, opacity 1, white background, 12 links
reclosed-> height 0,   max-height 0px,   opacity 0
```

**No defect. Nothing changed.** The same artifact explains an earlier reading of "16 elements at opacity 0" that settled to 1 (the collapsed mobile menu) on re-measure. Any paint-timing metric from this environment is unreliable, which is why no Lighthouse numbers appear below.

---

## Visual QA Results

Homepage renders correctly at desktop width: hero image, headline, subhead, CTA, phone, and the stat row all present and positioned.

One thing I flagged and then cleared: the hero subhead *looks* like two overlapping paragraphs in a screenshot. The DOM disproves it — a single `<p>`, top 430 → bottom 542, height 112, `transform: none`. It is one paragraph of light text over a busy photograph. Legibility is mediocre; layout is correct. **Pre-existing, not a prerendering regression, not changed** (no redesign in this phase).

No blank sections, no broken grids, no missing content on any route inspected. Section ordering and typography are unchanged from the pre-Phase-2 design — prerendering did not alter the visual system.

---

## Mobile QA Results

Tested at 375×812 with mobile emulation.

| Route | Horizontal overflow | Overflowing elements |
|---|---|---|
| `/contact` | none (`scrollWidth` 375) | none |
| `/nano-brows-vs-microblading` | none | tables extend to 394px **inside a parent with `overflow-x: auto` that is scrollable** — correct containment |
| `/blog/ombre-brows-dark-skin-guide` | none | none |

Mobile menu verified working (above). All 12 menu entries present, including the Vagaro CTA and tap-to-call.

**Not fixed, pre-existing:** 42 tap targets below 32px on `/contact`, mostly footer/social icons at 20×20 and inline text links at 20–29px tall. Real, but a pre-existing design characteristic rather than a release regression, and out of scope for this gate.

---

## Form Status

**This was the release blocker.**

`/contact` rendered a live form with a "Send Message" button and five fields. `ContactForm.onSubmit` called:

```js
await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current!, 'YOUR_PUBLIC_KEY');
```

Every submission threw, was caught, and displayed *"There was an error sending your message. Please try again later"* — inviting the visitor to retry something that could never work. Reachable, customer-facing, and silently losing enquiries.

I did not invent credentials and did not commit secrets. Resolution (option A + C from the brief):

- Credentials read from `VITE_EMAILJS_SERVICE_ID` / `_TEMPLATE_ID` / `_PUBLIC_KEY`.
- When all three are set, the form works exactly as designed.
- When they are not — the current state — the page renders the contact routes that genuinely work: **request a consultation (Vagaro), call/text (571) 283-8228, email inkmugi@gmail.com.** All three are real, already published site-wide, and now present in the prerendered HTML.
- Setting the variables in Netlify restores the form with no code change.
- The error state now points at phone and email instead of suggesting a retry.
- Accessibility: inputs marked `required`, errors linked by `aria-describedby`, status region `aria-live="polite"`.

`BookingForm.tsx` had the same placeholder credentials and was **imported nowhere** — deleted.

Verified in-browser after the fix: `formCount: 0`, no "Send Message" button, contact channels present in the served HTML (`serverHasChannels: true`). No form was submitted during QA.

---

## Booking Flow Status

**Final destination: `https://www.vagaro.com/inkmugi`.** No Booksy links remain anywhere in `src/` (verified by grep; five Booksy anchors across `/authority`, `/pmu-data-guide` and `/pmu-myths-facts` were migrated).

On `/contact`: 4 Vagaro links, 0 Booksy. Mobile menu CTA → Vagaro. `/booking` → **301 → Vagaro** (single hop), preserving external and bookmarked links.

---

## Business Claim Conflicts

No claim values were changed in this phase except one demonstrable contradiction (below). Per the freeze, everything else is tabulated, not resolved.

| Claim | Current values found | Files / components | Publicly visible? | Source in repo? | Action required |
|---|---|---|---|---|---|
| Procedure count | `523+` (59 files); `600+ Successful` (1); `330-procedures` meta (1); `500+` (1) | Home, About, Authority, LocationPage, OmbrePowderBrowsGuide, PMUDataGuide | Yes | **No** | Owner states the countable figure + as-of date; then centralise |
| Complication rate | `0.19%` (110 occurrences) | sitewide | Yes | **No** | 0.19% of 523 is **one event**. Two-decimal precision on n=1 is not defensible. Recommend restating plainly |
| "13× lower/safer than industry average of 2.5%" | 17 occurrences | LocationPage + problem pages | Yes | **No** | Derived from the n=1 figure above and an uncited industry number. Recommend removing the multiplier |
| Correction consultation fee | `$200` (MicrobladingCorrectionNorthernVirginia, MicrobladingFadingTooFast, PmuCorrectionRestoration ×2); `$150` (PmuCostGuideDmv); "free consultation" (144 occurrences) | 6 files | Yes | **No** | Owner confirms one figure and whether the paid correction assessment is carved out of "free consultation" |
| Correction procedure price | `$600`; `$400–900`; `$600–800` / `$800–1,200`; "Consultation required" | PmuCorrectionRestoration, PmuCostGuideDmv, MicrobladingGoneWrong, BotchedMicrobladingFix, MicrobladingTurningGrey, Services | Yes | **No** | Owner confirms one band; one page owns it, others link |
| Oily-skin retention | `26 months` and `28 months` — **both appear within the same files** (ClimatePerformanceAnalysis, PMUDataGuide) | 8 files, 26 occurrences | Yes | Partial | May be two different cohorts. **Not unified** — needs owner definition of each |
| Rating / review count | `5.0` sitewide; visible "47+ reviews" in 19 places; GBP reportedly 5.0 / 45 | 19 files | Yes | **No** | Schema markup already removed in Phase 2. Visible count still needs confirming |
| Clinical framing | p-values, control groups, peer review, adverse-event protocols | Authority-hub pages | Yes | **No** | Observational practice data presented as clinical research. Recommend relabelling with date range and limitations |
| Microshading price | **$700 sitewide vs $500 in site.webmanifest** | public/site.webmanifest | Yes (scraped, installable) | Yes — $700 is consistent everywhere else | **FIXED** — prices removed from the manifest rather than a number picked |

---

## Raw HTML Verification

Fetched pre-JS from the Netlify-faithful server:

| Route | Status | KB | SHA1 | H1 | Links | JSON-LD | Robots | Canonical |
|---|---|---|---|---|---|---|---|---|
| `/` | 200 | 101 | `8C6682CD` | 1 | 106 | 6 | index, follow | `/` |
| `/about` | 200 | 55 | `55A84E7E` | 1 | 67 | 4 | index, follow | `/about` |
| `/services` | 200 | 82 | `68315B49` | 1 | 80 | 4 | index, follow | `/services` |
| `/signature-ombre-brows` | 200 | 91 | `C4D7ADA1` | 1 | 93 | 8 | index, follow | `/signature-ombre-brows` |
| `/authority` | 200 | 75 | `22564D57` | 1 | 72 | 4 | index, follow | `/authority` |
| `/blog/ombre-brows-dark-skin-guide` | 200 | 91 | `AB391233` | 1 | 81 | 4 | index, follow | `/blog/…` |
| `/ombre-brows-fairfax-va` | 200 | 68 | `BD587F37` | 1 | 80 | 3 | index, follow | `/ombre-brows-fairfax-va` |
| `/permanent-makeup-burke-va` | 200 | 83 | `EAD67793` | 1 | 89 | 4 | index, follow | `/permanent-makeup-burke-va` |
| `/contact` | 200 | 40 | `35ECEFA7` | 1 | 72 | 3 | index, follow | `/contact` |
| `/nano-brows-vs-microblading` | 200 | 84 | `58AF3CDB` | 1 | 98 | 4 | index, follow | `/nano-brows-vs-microblading` |
| `/microblading-gone-wrong` | 200 | 82 | `F30435C9` | 1 | 83 | 4 | index, follow | `/microblading-gone-wrong` |
| `/gallery` | 200 | 69 | `1FE1FBBE` | 1 | 66 | 3 | index, follow | `/gallery` |

Every hash distinct. **The old pattern — one 11,794-byte empty document for every URL — is gone.**

---

## Canonical Verification

68 documents, every one carrying exactly one self-referential `https://inkmugi.com` canonical, enforced by `scripts/validate-build.mjs` (single tag, absolute, https, non-www, no `undefined`, no double slash, matches its own URL). 66/66 unique titles, no duplicate descriptions.

---

## Redirect Verification

HTTP-level, single hop each:

| From | Status | To |
|---|---|---|
| `/ombre-brows` | 301 | `/signature-ombre-brows` |
| `/booking` | 301 | `https://www.vagaro.com/inkmugi` |
| `/permanent-makeup-annandale-va` | 301 | `/licensed-pmu-artist-annandale` |
| `/services.html` | 301 | `/services` |

No chains, no loops.

**Not testable locally:** `http → https` and `www → non-www` are host-scoped rules that cannot be exercised over `localhost`. Their `netlify.toml` entries are byte-for-byte unchanged from the configuration verified working against production during Phase 2 (`https://www.inkmugi.com/about` → 301). Re-confirm on the deploy preview.

---

## 404 Verification

| Route | Status | Robots | H1 |
|---|---|---|---|
| `/definitely-not-a-real-page` | **404** | `noindex, nofollow` | 1 |
| `/blog/no-such-post` | **404** | `noindex, nofollow` | 1 |

The second is the Phase 2 blog fix confirmed end-to-end: unknown blog slugs previously returned HTTP 200 with no robots directive and the homepage title.

The 404 page is a useful Ink Mugi page — 34 KB, 74 navigation links back into the site. No server error, no homepage metadata. Its canonical is `https://inkmugi.com/404`; harmless behind a 404 + noindex, and left alone.

---

## Structured Data Verification

Inspected in the built DOM across homepage, service, article, location and authority templates. All JSON-LD parses (validator enforces). Business identity resolves to one `@id`. No `aggregateRating`, no `Review` nodes anywhere. No duplicate graph after hydration.

**FAQ / visible-content agreement, `/blog/ombre-brows-dark-skin-guide`:**
- `FAQPage` declares 10 questions
- questions missing from the served HTML: **0**
- **answers** missing from the served HTML: **0**

The Phase 2 fix is confirmed at the level that matters: answer text is in the delivered document, not injected on click. Same result on the location template (3 of 3).

---

## Asset Verification

Automated sweep over all 69 documents — `<img src>`, `<source srcset>`, icon/manifest links, `og:image`, `twitter:image`, JSON-LD image fields, and CSS `url()` — resolving each and checking status, MIME type and file magic bytes.

**Before:** 48 unique references, 13 broken.

| Problem | Detail |
|---|---|
| 8 phantom JSON-LD images | `consultation.jpg`, `brow-mapping.jpg`, `numbing.jpg`, `microshading-application.jpg`, `healing.jpg`, `ombre-powder-brows-guide-hero.jpg`, `og-safety-trust.jpg` — all returned `text/html`. Same defect class Phase 2 fixed; its codemod matched only `logo.png` and `og-image.jpg` by name |
| 2 placeholder icons | `favicon-16x16.png` and `apple-touch-icon.png` are 51 bytes containing the text `[binary file copied from Untitled design (33).png]`, referenced from every page |
| 3 missing case-study photos | `/gallery/correction-*.jpg` on `/pmu-correction-restoration` — captioned "healed result documented at 6 weeks" |

**After:** 36 unique references, **0 broken** (the one remaining flag is `site.webmanifest`, correctly not an image).

Fixes: HowToStep `image` dropped (optional in schema — repointing five steps at one unrelated photo would assert it depicts each step); Article/business images use the real studio photo; icons repointed at the one valid 500×500 brand PNG; the case-study `<figure>` renders only when an image exists, keeping the written case record.

The schema logo also moved **off Flickr onto first-party `/android-chrome-512x512.png`**. The Flickr original-size variant the navbar hotlinks returns **HTTP 429** under repeated requests — I hit it during QA. A publisher logo a crawler must fetch should not sit behind a rate limiter.

---

## Internal Link Crawl

`scripts/validate-build.mjs` crawls all 68 documents on every build and fails on: links to undeclared routes, links to redirect sources, `www.inkmugi.com` links, `http://` links, unencoded spaces in hrefs, empty `href`, and fewer than five crawlable internal links per page.

**Result: 0 errors.** Average 62 internal links per page.

---

## Performance Results

No Lighthouse run. The Browser pane does not composite frames, which freezes CSS transitions and makes any paint metric from this environment untrustworthy — reporting a fabricated LCP would be worse than reporting none. Byte-level measurements instead:

| Metric | Value |
|---|---|
| `dist/index.html` | 103,376 B (was 11,794 B empty shell) |
| Location page HTML | 69,407 B |
| Critical JS + CSS | 495,959 B uncompressed (~150 KB gzip) |
| Total `dist` | 29.55 MB / 163 files |

The HTML is larger by design — that is content arriving without waiting for JavaScript, and it is what moves FCP off the JS critical path.

**Dominant remaining issue, unchanged and pre-existing: 22.30 MB of unoptimised images in `public/`,** including a single 4.1 MB JPEG (`IMG_1324.jpg`) and five more over 1.5 MB, served at full resolution to the Gallery. This is the largest performance item on the site and it is untouched by this branch.

---

## Accessibility Results

Verified: skip-to-content link present; exactly one `<h1>` on all 68 documents; FAQ accordions expose `aria-expanded`, `aria-controls`, `role="region"` and `aria-labelledby`; mobile menu opens, closes and exposes all links; contact fields now `required` with `aria-describedby` error wiring and an `aria-live` status region; no horizontal overflow at 375px; wide tables contained in scrollable parents.

**Found, not fixed** (pre-existing; a full a11y pass is explicitly out of scope): no focus trap, Escape handler or scroll lock on the mobile menu, and its links remain focusable while collapsed; 42 sub-32px tap targets on `/contact`; most `<img>` lack intrinsic dimensions; Gallery lightbox is not a dialog.

---

## Fixes Made During Release Gate

1. `/contact` form — env-driven credentials; working contact channels when unconfigured; honest error state; a11y wiring
2. Deleted `BookingForm.tsx` (placeholder credentials, imported nowhere)
3. 8 phantom JSON-LD image URLs
4. 2 placeholder icon files repointed
5. 3 broken case-study images on `/pmu-correction-restoration`
6. Schema logo moved to a first-party, non-rate-limited asset
7. `site.webmanifest` microshading price contradiction
8. `eslint.config.js` — ignore `dist-ssr` (**Phase 2 regression**)
9. Unused `_data` parameter (**Phase 2 regression**)
10. Two unnecessary regex escapes; one `any` typed as `InstagramMedia`
11. `.env.example` documents the EmailJS and Instagram variables

---

## Files Changed

15 files, +202 / −504. `.env.example`, `eslint.config.js`, `index.html`, `public/site.webmanifest`, `src/components/ContactForm.tsx`, `src/components/blogpost.tsx`, `src/lib/siteMeta.ts`, `src/pages/{Blog,Gallery,MicroshadingArtistry,OmbrePowderBrowsGuide,PermanentMakeupSafetyDMV,PmuCorrectionRestoration}.tsx`, `src/services/instagramService.ts`. Deleted: `src/components/BookingForm.tsx`.

---

## Tests

| Check | Result |
|---|---|
| `npm run typecheck` | **pass** |
| `npm run build:client` / `build:ssr` | **pass** |
| `npm run prerender` | **pass** — 69 documents, 0 failures |
| `npm run validate` | **pass** — 0 errors, 101 advisory warnings |
| `npm run lint` | **pass** — **0 errors**, 63 warnings (all `react-refresh/only-export-components` from the route manifest; dev-experience only) |
| Route crawl | 68 documents, 66 indexable, avg 11,109 chars, avg 62 links, 66/66 unique titles |
| Asset sweep | 36 references, 0 broken |
| Redirect / 404 | all correct, single hop |
| Unit tests | none configured in this repository |

---

## Git Status

- Branch `claude/phase2-crawlability`, working tree clean
- `de1b9cf` Release-gate fixes
- `0bf108f` Phase 2 implementation report
- `65fff09` Prerender every route
- **Not pushed. Not deployed.**

---

## Remaining Operator Inputs

1. **EmailJS** — set `VITE_EMAILJS_SERVICE_ID`, `_TEMPLATE_ID`, `_PUBLIC_KEY` in Netlify to bring the contact form back. Until then `/contact` offers booking, phone and email.
2. **Business claims** — the nine rows in the table above, most importantly the procedure count, the 0.19% / "13× safer" pair, and the correction consultation fee.
3. **Icons** — supply real 16×16 and 180×180 files; the current ones are text stubs.
4. **Correction case-study photos** — three narrated cases are running without imagery.
5. **Images** — 22.3 MB in `public/` needs compression and modern formats.
6. **`VITE_GEMINI_API_KEY`** — if set, it is inlined into the client bundle and publicly readable.
7. **Search Console** — remove the legacy `www` sitemap submission; re-inspect the repaired P0 URLs after deploy.

---

## Deployment Checklist

1. Merge to `main` and let Netlify build a deploy preview.
2. On the preview, confirm: `/about` differs from `/`; `/definitely-not-a-real-page` returns **404** (not 200); `/ombre-brows` and `/booking` return **301**.
3. Confirm `http://` and `https://www.` both 301 to the apex — the two rules that cannot be tested locally.
4. Open the homepage and one location page; check the console is clean.
5. Confirm `https://inkmugi.com/sitemap.xml` lists 66 URLs and no longer references anything that 404s.
6. Set the EmailJS variables if the contact form should be live at launch.
7. After deploy, re-inspect the repaired P0 URLs in Search Console and request indexing for `/nano-brows-vs-microblading`, `/ombre-powder-brows-guide`, `/permanent-makeup-burke-va`.

---

## Final Release Decision

# SHIP WITH MINOR CAVEATS

The architecture is verified, not asserted. Hydration matches element-for-element on three templates; every route serves distinct prerendered HTML with correct canonicals and robots; 404s are real; redirects are single-hop; FAQ answers and their schema agree; no duplicate graph after hydration; assets all resolve; typecheck, build, prerender, validator and lint are all green.

The caveats are deployment-time, not code-time:

- **Two redirect rules cannot be tested locally** (`http→https`, `www→non-www`). They are unchanged from configuration confirmed working in production, but confirm them on the preview.
- **The SPA catch-all is gone**, which is what makes 404s real. A route that failed to prerender would hard-404. The prerender step fails the build first, and all 68 routes render — but this is the change to watch on the preview.
- **`/contact` has no form until the EmailJS variables are set.** That is deliberate and strictly better than the broken form it replaces, but it is a visible change the owner should expect.
- **Business claims remain unresolved.** They were not introduced by this work and are not deployment blockers, but the 0.19% rate and the "13× safer" claim built on it are the kind of thing that does not survive scrutiny.

Nothing found in this gate argues against deploying. The one true blocker — a customer-facing form that could never send — is fixed.
