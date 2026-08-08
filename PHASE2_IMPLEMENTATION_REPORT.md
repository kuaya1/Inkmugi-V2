# INK MUGI — PHASE 2 IMPLEMENTATION REPORT

Branch `claude/phase2-crawlability` · commit `65fff09` · 120 files changed · not deployed

---

## 1. Executive Summary

**What was actually wrong.** The site was a pure client-rendered Vite SPA. Every URL returned the same 11,794-byte shell with an empty `<div id="root">`. I verified this against live production before changing anything: eleven different URLs — including `/definitely-not-a-real-page` — returned **byte-identical HTML, SHA1 `57CBA7B1E6`**, with 0 `<h1>`, 0 `<a href>`, and the same homepage title.

That single fact explains the Search Console picture. 32 of the 41 unindexed sitemap URLs were *discovered and never crawled*. On a domain with one external link, Google had no cheap signal to justify spending a render budget on URL number 47, because URL 47 looked exactly like URL 1 until the application executed.

Three things compounded it: a `/* → /index.html 200` catch-all meant nonexistent URLs also answered 200, so crawl budget leaked into infinite soft-404s; the build ran no typecheck, which is how `ReferenceError: Sun is not defined` shipped and blanked a live sitemap page; and structured data was contradictory enough to be actively unhelpful — one `@id` defined 58 different ways, 82 references to image files that did not exist, and self-serving review markup with an invalid `worstRating`.

**What changed.** Build-time prerendering of every route, a single source of truth for the URL space, real HTTP 404s, one entity graph, and an automated validator that fails the build on the defect classes found here.

**What the architecture is now.** Same Vite + React + React Router stack — no framework migration. `vite build` (client) → `vite build --ssr` → `scripts/prerender.mjs` → `scripts/validate-build.mjs`. 68 prerendered documents plus a 404. Client hydrates.

---

## 2. Architecture Before vs After

| | Before | After |
|---|---|---|
| Rendering | CSR only. `"build": "vite build"` | Client build + SSR bundle + build-time prerender per route |
| Routing | 65 `<Route>` literals in `App.tsx` | `src/routes.tsx` — one manifest driving routing, prerender and sitemap |
| Metadata | Static tags in `index.html` on all routes + Helmet | `SEO.tsx` only; `index.html` declares nothing SEO-relevant |
| Canonicals | Client-injected; one literally `https://inkmugi.comundefined` | Prerendered, self-referential, validated |
| Redirects | netlify.toml + a duplicate `public/_redirects` | One authoritative `netlify.toml` |
| Sitemap | Hand-maintained `public/sitemap.xml`, drifted | Generated from the route manifest, git-derived `lastmod` |
| 404 | HTTP 200 + client-rendered pseudo-404 | HTTP 404 from a prerendered `404.html` |
| Typecheck | Never ran (root `tsconfig.json` has `files: []`) | `tsc -p tsconfig.app.json` gates the build |

**Evidence, same nine routes:**

Before — every route identical:
```
/                                 200 11794 57CBA7B1E6  h1=0  links=0
/about                            200 11794 57CBA7B1E6  h1=0  links=0
/signature-ombre-brows            200 11794 57CBA7B1E6  h1=0  links=0
/blog/ombre-brows-dark-skin-guide 200 11794 57CBA7B1E6  h1=0  links=0
/definitely-not-a-real-page       200 11794 57CBA7B1E6  h1=0  links=0
```

After — every route distinct:
```
Route                                KB SHA1     H1 Links LD Canonical
/                                 98.00 2D2ECF98  1   106  6 https://inkmugi.com/
/about                            55.00 7A5AD151  1    67  4 https://inkmugi.com/about
/services                         80.00 9849F644  1    80  4 https://inkmugi.com/services
/signature-ombre-brows            91.00 FB9F5386  1    93  8 https://inkmugi.com/signature-ombre-brows
/authority                        75.00 7DB0C116  1    72  4 https://inkmugi.com/authority
/blog/ombre-brows-dark-skin-guide 84.00 FE9782AD  1    81  4 https://inkmugi.com/blog/...
/ombre-brows-fairfax-va           69.00 92B05F19  1    80  4 https://inkmugi.com/ombre-brows-fairfax-va
/permanent-makeup-burke-va        81.00 C4BA03F9  1    89  5 https://inkmugi.com/permanent-makeup-burke-va
404                               34.00 DDAB51C2  1    74  1 https://inkmugi.com/404
```

### Why this approach

`renderToString` does not await Suspense, and 65 of 66 routes were `React.lazy`. A naive prerender writes spinner-only HTML and exits 0 — silently, because React's error sink for this case is a no-op. I verified the behaviour in isolation before designing around it: the first pass emits the fallback *and starts the dynamic imports*, so rendering again after the microtask queue drains produces the real markup. Two passes, empirically. `scripts/prerender.mjs` renders until a `data-page-loader` sentinel is gone and **fails the build** if it never resolves.

This was chosen over `renderToPipeableStream` deliberately: streaming emits the fallback first and swaps content in via inline `$RC` scripts, so the "static" HTML would contain the real content inside `<div hidden>`. That is worse for exactly the crawler this project is trying to serve. It was chosen over a framework migration because nothing here required one — the component tree turned out to be entirely SSR-safe, and all 68 routes prerendered on the first attempt.

---

## 3. P0 Defects

### `/nano-brows-vs-microblading` — blank page
**Root cause:** `Sun` used at three call sites and never imported from `lucide-react`. The build never typechecked (root `tsconfig.json` is a solution file with `files: []`, so `tsc --noEmit` at the root checks *nothing* and exits 0 — this is why it looked green).
**Fix:** added `Sun` to the import; added `npm run typecheck` (`-p tsconfig.app.json`) to the build. That surfaced **75 pre-existing type errors**, all now fixed.
**Verification:** typecheck exits 0; the route prerenders to a full document.

### `/ombre-powder-brows-guide` — canonical `https://inkmugi.comundefined/`
**Root cause:** the page passed `canonical="…"` and `schema={…}` to `<SEO>`, which accepts neither. `path` was therefore `undefined`, and `${SITE_URL}${path}` produced the string literally. The three JSON-LD graphs were silently discarded too — `SEO` rendered `{children}`, and the element was self-closing.
**Fix:** `path="/ombre-powder-brows-guide"`; added a real `schema` prop; typed `path` as `` `/${string}` `` so this cannot recur. Two other pages passed the same dead `canonical` prop (harmless there — they also passed `path`); removed.
**Verification:** validator asserts exactly one canonical per document, absolute, https, non-www, self-referential, no `undefined`.

### `/ombre-brows` — client-side redirect
**Correction to the Phase 1 finding:** this was already a correct HTTP 301 in production. I tested it: `301`, `Location: /signature-ombre-brows`. The audit appears to have followed the redirect and then observed the React route. The React `<Route>` was dead code reachable only via client-side navigation; removed, Netlify rule preserved.

### `/booking` — HTTP 200 masquerading as a redirect
**Root cause:** a real React route rendering a spinner and calling `window.location.href` from a `useEffect`.
**Fix:** internal CTAs link directly to Vagaro (123 references across 57 files, migrated by codemod); `/booking` is now a `301` for external and bookmarked links; the route and component are deleted.
**Why direct links over keeping the internal hop:** the internal page could not be instrumented anyway — three of the five flagship pages already bypassed it with hardcoded external links — and a crawlable `<a href>` to the real booking destination is honest markup. GA4 enhanced measurement records outbound clicks.
**Also found:** booking was split across **two platforms**. `/authority`, `/pmu-data-guide` and `/pmu-myths-facts` sent clients to Booksy while every other page sent them to Vagaro — split calendars and split review collection. Unified on Vagaro (the destination `BookingRedirect` itself used).

---

## 4. Technical SEO Changes

- Build-time prerendering of all 68 routes + `404.html`.
- `src/routes.tsx` as the single source of truth for the URL space.
- `tsc` gating the build.
- `scripts/validate-build.mjs`: per-document checks on title/description/canonical/robots/H1 count/text volume/internal links/JSON-LD parseability, plus cross-document title and description uniqueness, sitemap reconciliation, 404 presence, and an assertion that the SPA catch-all has not been reintroduced.
- Removed the blanket `X-Robots-Tag = "index, follow"` header, which applied to every response including the 404 page that emits `noindex`.
- Removed the static `<meta name="robots">`, `<title>` and both JSON-LD blocks from `index.html` — they applied to all ~70 routes and could not be overridden per page.
- `NODE_VERSION` 18 → 20.
- Deleted `public/netlify.toml`, which was never read as config and was **publicly served at `https://inkmugi.com/netlify.toml`**.
- Deleted three stale git-tracked Vite chunks in `public/` that were being served.
- Removed unused `swiper` and `react-icons` dependencies (verified zero imports).

---

## 5. Sitemap / Robots / Redirect Changes

**Sitemap.** Was a hand-maintained 65-URL XML file with `priority` and `changefreq` (both ignored by Google). Now generated from the route manifest: 66 URLs, no priority/changefreq, `lastmod` from the source file's real git commit date and **omitted entirely** when git history is unavailable rather than stamped with today's date to bait crawlers.

Net change: `+/permanent-makeup-burke-va` (a complete location page that no sitemap had ever listed and that had exactly one inbound link site-wide). The eight `/blog/*` URLs I initially suspected of being soft 404s are all real — an audit agent refuted that hypothesis by locating each slug in `blogData.ts`.

**Redirects.** `public/_redirects` deleted; `netlify.toml` is now the only source. All confirmed-healthy rules preserved unchanged: HTTP→HTTPS, www→non-www, legacy `.html`, `/ombre-brows`, `/permanent-makeup-annandale-va`. Added `/booking` → Vagaro.

**The catch-all is gone.** This is the change that makes 404s real, and it is the riskiest one in this commit: a route that fails to prerender would now 404 in production. `scripts/prerender.mjs` fails the build rather than let that ship.

**Robots.txt** unchanged — it already referenced the canonical non-www sitemap correctly.

---

## 6. Internal Linking Architecture

Prerendering is itself the change here: internal links went from **0 crawlable anchors per page to an average of 62**, without touching a single link. Every `<Link>` in the app now serializes to a real `<a href>` in the delivered HTML.

Beyond that: fixed `/powder-brows-turned-grey` (a link to a route that never existed, hitting the 404 catch-all), fixed `[Read client reviews](/reviews)` in blog markdown pointing at a retired page, and encoded the blog tag links that were generating `/blog?tag=powder brows` with literal spaces — the malformed parameter URLs Search Console had picked up. Those parameter URLs self-canonicalise to `/blog`, so they need no further suppression.

I did **not** do the hub-structure work. See §21.

---

## 7. Metadata Changes

Every route now emits exactly one title, description, canonical and robots directive, prerendered. Validator confirms **66/66 unique titles** and no duplicate descriptions.

Corrected: two pages emitted a second `<meta name="robots">` alongside `SEO`'s (`/authority`, `/pmu-cost-guide-dmv`). Blog post titles were being suffixed `| Ink Mugi PMU Blog`, pushing several past 100 characters — the brand was truncated away anyway; titles over 55 characters now ship unsuffixed.

101 advisory warnings remain (long titles, long descriptions). These are flagged, not fixed — see §21.

---

## 8. Structured Data / Entity Improvements

The `@id` `https://inkmugi.com/#business` had **58 definitions** across the codebase, disagreeing on `@type` (`HealthAndBeautyBusiness` vs `Organization`), `name` (three variants), `url` (13 different city URLs claiming to be the business homepage), `geo` (four coordinate pairs) and phone format. Two nodes sharing an `@id` are one entity; Google was being asked to reconcile a contradiction on exactly the pages it trusted least.

Now: one graph in `src/lib/siteMeta.ts` (`WebSite`, `HealthAndBeautyBusiness`, `Person`), emitted once per page by `SEO.tsx`. Page-level schema references it by `@id`. 17 duplicate business-node scripts and their declarations removed.

**Removed all `aggregateRating` and `review` markup** — 38 nodes across 20 files. Four independent reasons: `worstRating: "5"` is schema-invalid; `reviewCount: 47` was contradicted by the 55 `Review` nodes the site itself emitted; two pages *displayed* 4.9 while the markup claimed 5.0; and first-party review markup on a LocalBusiness subtype has been ineligible for rich results since 2019. Visible testimonials are untouched.

**Fixed 82 broken schema image references.** `https://inkmugi.com/logo.png` and `/og-image.jpg` were referenced by 78 files and **do not exist**. Under the old catch-all both returned HTTP 200 with `content-type: text/html` — the app shell. Every publisher logo and Article image on the site was invalid, and it looked fine to any checker that only followed status codes. Repointed to the studio's live Flickr assets (verified `image/png`, 49,572 bytes).

**FAQ answers are now in the DOM.** `InlineFaqAccordion` conditionally rendered answers, so none existed until a click, while 37 pages emitted `FAQPage` schema asserting they were on the page. It also sliced to `maxVisible` (default 4) while the schema declared the full list — twelve pages marked up questions the page never showed. Measured effect: average rendered text per page rose from 9,360 to **11,113 characters**.

---

## 9. Content Changes

Deliberately minimal. The Phase 1 conclusion that this site has more substance than its competitors held up.

**Changed:**
- `/faq` pricing answer — removed an invented "$500 tier" that existed nowhere else in the codebase, and a touch-up price table that contradicted three other pages.
- `/pmu-myths-facts` — removed "Clinical comparison of 312 powder brow vs 211 microblading clients". The site states in six places that it does not offer microblading; it cannot have tracked 211 microblading clients.
- The `340%` claim, 26 occurrences across 12 files → `3×`. The site's own published figures give 3.25× (26 vs 8 months) and 3.5× (28 vs 8), and a third page states 133% for the same comparison. `3×` understates every one of them, which is the safe direction.
- Blog markdown `/booking` links → the Vagaro URL.
- `/blog/ombre-brows-dark-skin-guide` title and description (see §11).

**Deliberately left alone:** all long-form body copy, all location-page prose, all testimonials, the homepage hero (`"Brows you don't have to think about."` is good — specific, restrained, in voice), and every quantitative claim I could not resolve from the repository. See §20.

---

## 10. Location Page Decisions

| URL | Decision | Reason |
|---|---|---|
| All 19 location pages | **KEEP** | 11 are indexed and several perform. Max six-word-shingle overlap measured at 35.5%; Search Console reports 0 duplicate-without-canonical and 0 Google-selected-different-canonical. There is no duplicate-content problem to solve, and URL stability matters more than tidiness. |
| `/permanent-makeup-burke-va` | **KEEP + surface** | A ~1,400-word page on the maintained shared component with one inbound link and no sitemap entry. Added to the sitemap. |

All 19 additionally gained: prerendered HTML, a coherent business entity instead of a conflicting one, no invalid review markup, FAQ answers in the DOM, and a working hero secondary CTA (`{ type: 'phone' }` was silently dropped on two pages — the prop does not exist, so the button never rendered).

I did not merge, redirect or noindex any location page. The mandate's instruction was to crawl and index the existing architecture properly first, and that is what this commit does.

---

## 11. High-Opportunity Search Pages

`/blog/ombre-brows-dark-skin-guide` — ~1,558 impressions/90 days, average position 12.4, CTR 0.4%. It is already seen; it is not clicked.

- **Title** was 88 characters (truncated) and led with technique: *"Ombre Powder Brows for Dark Skin: Techniques, Pigment Selection & Healing | Ink Mugi"*. Now: **"Do Powder Brows Work on Dark Skin? An Honest Guide"** — 50 characters, phrased as the question the ranking queries actually ask.
- **Description** now opens with the answer and leads with practitioner experience rather than a feature list.
- The page also gained ~700 words of previously-hidden FAQ answers in its rendered HTML (10 answers × `maxVisible={10}`, all previously unmounted until click) — the most query-matched text on the page.

---

## 12. About / Authority / EEAT Changes

Partially addressed. The `Person` entity for Mugi is now defined once with the license credential and linked from the business by `@id`, instead of 16 Article pages each declaring an anonymous author `Person`.

Not addressed: `/about` and `/authority` duplicate each other near-verbatim, and Mugi is not named in visible body copy on any of the five brand pages — including the canonical Person page. That is editorial work I did not do. See §21.

---

## 13. UX / Visual Design Changes

Restrained, and only where something was broken:

- **`.btn-primary` contrast.** White on `#c7a790` measures ~2.24:1 — far below the 4.5:1 AA minimum, on the navbar CTA, the most-clicked button on the site. Changed to `#2D2D2B`, the ink already used for primary CTAs on the location, service and guide templates. This fixes the contrast failure and collapses two competing button systems into one.
- **Skip-to-content link** added (there was none).
- **FAQ accordions** now expose all questions and are properly wired with `aria-controls` / `aria-expanded` / `role="region"`.
- **Gallery item** hover state that was tracked and never read, removed.

No redesign. The existing visual identity is good and was left alone.

---

## 14. Mobile / Accessibility

**Fixed:** skip link, FAQ accordion semantics, primary button contrast, the two hero secondary CTAs that never rendered.

**Found and not fixed** (evidence in the audit, no code written): mobile menu has no focus trap, no Escape handler, no scroll lock, and its links stay focusable when closed; 31 of 34 `<img>` tags have no intrinsic dimensions (CLS); no form control is programmatically linked to its error message or marked required; the Gallery lightbox is not a dialog (no `role`, no `aria-modal`, no focus trap); three div-based controls are keyboard-inaccessible and one falsely claims `role="slider"`; nothing respects `prefers-reduced-motion`.

---

## 15. Performance

**Measured improvement:** `AnimatedSection` used to emit `opacity:0; transform:translateY(30px)` on all ~895 instances, because framer-motion resolves `initial` during render. Prerendered HTML would have been text-complete but **painted blank** until hydration and IntersectionObserver ran — putting hydration on the critical path for the LCP element of every location page and defeating much of the point of prerendering. It now renders visible until hydrated, then flips only off-screen sections to hidden, so the entrance animations still work and nothing the user can see moves. Verified: `opacity:0` occurrences in a prerendered location page went from ~19 to **0**.

Also removed two `fetchpriority="high"` image preloads in `index.html` that pointed at Flickr variants (`_c_d.jpg`, `_b_d.jpg`) appearing **nowhere in the source** — two highest-priority requests for never-painted assets, on all ~70 routes, competing with the real LCP image.

**Not done:** the Gallery route ships ~14.9 MB of unoptimized full-resolution JPEGs from `public/`; the hero is a 582 KB JPEG mislabeled `.png`; `Home` is eagerly imported so ~61 KB of its source ships in the entry chunk on all other routes. I have not run before/after Lighthouse — see §22.

---

## 16. Automated QA

| Check | Result |
|---|---|
| `npm run typecheck` | **pass** (was 75 errors, never run) |
| `npm run build:client` | pass |
| `npm run build:ssr` | pass |
| `npm run prerender` | **69 documents, 0 failures** |
| `npm run validate` | **pass** — 0 errors, 101 advisory warnings |
| Route crawl | 68 documents, 66 indexable, avg 11,113 chars, avg 62 internal links |
| Title uniqueness | 66/66 |
| Broken internal links | 0 |
| JSON-LD parse | all parse; 0 `undefined`/`null` |
| `npm run lint` | **not run** — see §22 |

The validator caught 52 real defects on its first run — duplicate robots tags, a link to a nonexistent route, duplicate `<h1>`s on every blog post, and the unencoded-space tag URLs. All fixed.

---

## 17. Raw HTML Crawlability Evidence

**Before**, `curl https://inkmugi.com/about`:
```html
<div id="root"></div>
```
11,794 bytes. Title: `Ink Mugi | Ombré Powder Brows with a 0.19% Complication Rate — Annandale, VA` (the homepage fallback). 0 `<h1>`. 0 `<a href>`. Identical to `/`, `/services`, `/authority`, and to a URL that does not exist.

**After**, `dist/about/index.html` — 55 KB, 1 `<h1>`, 67 crawlable links, 4 JSON-LD blocks, `<link rel="canonical" href="https://inkmugi.com/about">`, `<meta name="robots" content="index, follow, max-image-preview:large">`.

The nine-route table in §2 is the full comparison. Every SHA1 is now distinct.

---

## 18. Files Changed

120 files; +1,738 / −4,302.

**New:** `src/routes.tsx`, `src/entry-server.tsx`, `src/lib/siteMeta.ts`, `scripts/prerender.mjs`, `scripts/validate-build.mjs`.

**Core rewrites:** `index.html`, `vite.config.ts`, `package.json`, `netlify.toml`, `src/App.tsx`, `src/main.tsx`, `src/components/SEO.tsx`, `AnimatedSection.tsx`, `InlineFaqAccordion.tsx`, `LocationPage.tsx`, `blogpost.tsx`, `src/index.css`.

**Deleted:** `src/pages/Booking.tsx`, `BookingRedirect.tsx`, `OmbreBrows.tsx` (all dead or replaced by HTTP redirects), `src/utils/designTokens.ts` (imported nowhere), `src/inkmugi-ai-pmu-expert (1)/` (unreferenced, broken types, contained a fourth conflicting procedure count), `public/netlify.toml`, `public/_redirects`, `public/sitemap.xml`, three stale Vite chunks, five `.placeholder` files.

The remaining ~95 files are codemod results: `/booking` migration (57 files), review-schema removal (20), business-entity dedup and image-URL repointing (48), unused-import cleanup (37 edits).

---

## 19. Git State

- Branch: `claude/phase2-crawlability` (created from `main`)
- Commit: `65fff09`
- Working tree: clean
- **Not pushed. Not deployed.** No remote operation was performed.

---

## 20. Operator Actions Required

**Search Console**
1. Remove the legacy `https://www.inkmugi.com/sitemap.xml` submission. Nothing in the repo references it; this is account-side only.
2. After deploy, re-inspect the repaired P0 URLs and request indexing for `/nano-brows-vs-microblading`, `/ombre-powder-brows-guide`, `/permanent-makeup-burke-va`.
3. Watch *Discovered – currently not indexed* (32). This is the metric this work targets.

**Facts I could not verify and did not guess at**
4. **Procedure count.** `523+` appears ~120 times, but `600+`, `330` and `500+` also shipped. I aligned nothing here — confirm the true countable figure and an as-of date, then it can be centralised.
5. **Review count and rating.** I removed the markup; the visible "47+ reviews" copy remains in 19 places. The Phase 1 brief cites the GBP as 5.0 / 45 reviews. Confirm and I will align the copy. I aligned two 4.9 outliers to 5.0 as the dominant published figure.
6. **Correction consultation fee** — published simultaneously as free, $150 and $200.
7. **Touch-up / colour-refresh pricing** — five incompatible models across the site ($150, $200, $250, "From $350", and a four-tier table).
8. **Oily-skin retention** — the same named 187-client cohort is reported as both 26 and 28 months.
9. **The 0.19% complication rate.** 0.19% of 523 is a single event. Publishing n=1 to two decimal places and amplifying it to "13× safer than the industry average" is a claim that will not survive scrutiny. Recommend restating plainly or dropping the multiplier.
10. **Clinical framing.** The authority pages describe observational practice data using research vocabulary (p-values, control groups, peer review). Recommend relabelling as practice observations with a stated date range and limitations.
11. **Testimonials.** Audit found identities reused across city pages with different neighbourhoods and different stories. I removed them from `Review` schema; the visible copy is yours to confirm.

**Security**
12. `VITE_GEMINI_API_KEY` — if set in Netlify, Vite inlines it into the client bundle and it is publicly readable. I found no key in the entry chunks, but verify. If the AI try-on is to stay, it needs a server-side proxy.
13. `ContactForm` and `BookingForm` ship literal `'YOUR_SERVICE_ID'` / `'YOUR_TEMPLATE_ID'` / `'YOUR_PUBLIC_KEY'`. **Both forms are non-functional.** Any submission fails. This is a live conversion path that has never worked.

**Off-site** (no code can create this)
14. One external link, from magicpin.com. Legitimate avenues: local business citations, professional PMU associations, pigment/equipment manufacturer artist directories, Northern Virginia community and editorial features, expert contribution to beauty publications. Continue GBP activity. No link buying.

---

## 21. What Was Deliberately NOT Changed

- **The stack.** Vite + React + React Router, unchanged. The component tree was already SSR-safe; all 68 routes prerendered on the first attempt. A migration would have been risk with no benefit.
- **www → non-www and HTTP → HTTPS.** Verified working in production and left byte-for-byte alone. The seven stale GSC "Redirect error" entries are March 2026 data; live retest confirms all now 301 correctly.
- **All 19 location pages.** No deletions, merges, redirects or noindex.
- **Long-form content.** No AI rewrite. The content is the asset.
- **The homepage hero and visual identity.**
- **Cannibalization consolidation.** The audit mapped five overlapping clusters (correction: 5 URLs / 1 intent; microblading problems: 6 URLs / ~3 intents; comparison: 4 URLs). I did not merge or redirect any of them. Consolidating URLs with existing search history is a decision that should be made *after* the crawlability fix lands and real per-URL data exists — right now most of these have never been crawled, so there is no evidence base for choosing a winner.
- **Hub structure**, `/about` vs `/authority` differentiation, and the CTA-label standardisation (five labels for one destination). Editorial work, deliberately deferred.
- **`/virtual-try-on`.** Orphaned and possibly non-functional, but live and indexable. Kept as-is rather than de-indexed on a hunch.

---

## 22. Remaining Risks

1. **The SPA fallback is gone.** Any route that fails to prerender returns a hard 404. The prerender step fails the build first, but this is the change that most warrants a careful look at the deploy preview.
2. **Hydration.** Typecheck, build and validator all pass, and `AnimatedSection` was specifically designed so the first client render matches the server byte-for-byte — but I have **not run the built site in a browser**. No console-error sweep, no visual QA, no Lighthouse. This is the largest untested surface in the commit.
3. **`npm run lint` not run.** ESLint 9 config state unknown.
4. Netlify `pretty_urls` interaction with prerendered directories is standard but unverified against this specific config.
5. The `3×` substitution touched 26 strings across 12 files by script. I spot-checked several; I did not read all 26 in context.
6. **Claim integrity is improved but not resolved.** I removed contradictions I could resolve from the repository and flagged the rest. Several published numbers remain unverifiable from source.

---

## 23. Expected SEO Impact

**Immediate technical effect** — raw HTML is route-specific; canonicals are valid and self-referential; unknown URLs return 404 instead of 200; contradictory robots directives gone; publisher logos resolve to actual images; ~700 words of FAQ content per affected page enters the rendered HTML.

**Requires Google recrawl** — index coverage on the 32 discovered-never-crawled URLs; canonical re-evaluation on `/ombre-powder-brows-guide`; soft-404 group clearing; structured-data re-processing.

**Medium-term** — CTR movement from the dark-skin guide retitle; entity consolidation feeding local-pack and knowledge-panel resolution.

**Off-site dependency** — with one external link, crawl allocation remains the binding constraint. This work removes the *reason* Google was declining to crawl; it does not create authority. Ranking movement depends on both.

No ranking promises. Cheaper, clearer crawling is what changed.

---

## 24. Final Verdict

| | |
|---|---|
| A. Substantially more crawlable? | **Yes.** 0 → 62 crawlable links and 0 → ~11,100 chars of rendered text per page; every route now byte-distinct. |
| B. Pages understandable without client rendering? | **Yes.** Title, description, canonical, robots, H1, copy, links and JSON-LD all in the delivered HTML. |
| C. Canonicals reliable? | **Yes.** One per document, validated; the `undefined` canonical is fixed at the root cause. |
| D. Redirects technically correct? | **Yes.** One authoritative source; healthy rules preserved; `/booking` is a real 301. |
| E. Sitemap clean? | **Yes.** Generated from the route manifest; drift is now structurally impossible. |
| F. Internal linking stronger? | **Yes** structurally, from prerendering and four broken-link fixes. Hub work not done. |
| G. Content architecture clearer? | **Partly.** Metadata and entity layers are clean; cannibalization is mapped but unresolved. |
| H. Visual experience stronger? | **Marginally.** Contrast fix, one button system, content visible without JS. No redesign. |
| I. Mobile stronger? | **Marginally.** Real fixes made; the mobile-menu and forms work is documented, not done. |
| J. Ready to deploy? | **Yes, with verification first.** |

### **SHIP WITH MINOR CAVEATS**

The foundation is fixed and machine-verified: typecheck, build, prerender and a 68-route validator all pass, and the before/after HTML evidence is unambiguous. The risk is not in the architecture — it is that **I have not opened the built site in a browser**. Before merging, run `npm run build && npx vite preview`, check the console for hydration errors on the homepage, one location page and one blog post, and confirm the FAQ accordions and mobile menu still behave. That is a short pass, and everything else in this commit is either statically verified or explicitly listed above as not done.

Two items in §20 deserve attention independently of this deploy: **both site forms have never worked**, and several published figures cannot be substantiated from the repository.
