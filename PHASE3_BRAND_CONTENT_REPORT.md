# INK MUGI — PHASE 3 BRAND CONTENT REFINEMENT REPORT

Branch `claude/phase2-crawlability` · commit `b783038` · 63 files, +234 / −165 · not pushed, not deployed

---

## 1. Editorial Verdict

Ink Mugi had built an evidence dossier that happened to sell brows.

I measured the drift rather than assuming it. Across the 68 prerendered documents, before this pass: **"523" appeared 257 times. "licence/licensed" 226. "documented" 167. "0.19%" 101. "47+" 82.** `/about` ran 959 words without naming Mugi once. `/authority` ran 1,511 words with no first-person voice at all. The blog — written in her own voice — runs 31–33 first-person markers per post.

A code comment in `Home.tsx` set the intended mix at `Tone: 10% Artistic / 30% Safe / 60% Data`, and the copy delivered exactly that. The clearest symptom was the first sentence a visitor read:

> "After 523 documented procedures, the difference is no longer aesthetic preference."

The site's opening line denied the existence of the thing the client is actually buying.

So the weak scores were not a writing-quality problem. They were a **casting** problem: a practitioner brand with almost no practitioner in it, and no room left for one after the proof.

---

## 2. Brand Positioning After Refinement

Ink Mugi is one licensed practitioner in Annandale who does a narrow thing carefully, thinks in terms of how brows will look months from now rather than on the day, and is willing to tell you no. The evidence is still there — it now explains why her judgement can be trusted, instead of standing in for it.

---

## 3. Voice Principles

Seven rules, applied consistently:

1. **Name her.** Mugi is the source of the judgement; say so on the pages that sell it.
2. **Result before proof.** Describe what the client gets before proving it deliverable — except on safety-intent pages, where proof *is* the answer.
3. **One proof per claim.** Never stack licence + count + rate + dataset + reviews in one section.
4. **Say it once.** If the paragraph makes the point, the next sentence must not remake it.
5. **Plain over clinical** where the clinical word isn't working.
6. **No guarantees, no superlatives, no manufactured urgency.**
7. **Keep the search terms.** Service names, cities and the questions people type all stay.

---

## 4. Major Homepage Changes

**H1** — "Ombré powder brows / designed for predictable healed results." → **"Ombré powder brows / you stop thinking about."** An engineering specification became an outcome. The service name stays in first position. (Git history shows an earlier hero, "Brows you don't have to think about" — the site had this instinct and edited it out.)

**Subhead** — was a procedure count followed by five technical nouns. Now:

> "Mugi maps the shape to your face, keeps the first pass light, and judges the work at six weeks rather than on the day. After 523 procedures, most of the skill is knowing what not to do."

She is named in the studio's own voice for the first time. The count moves to the final clause, where it *explains the restraint* rather than leading with volume.

**Trust bar** — four numbers to three. Dropped the unverifiable "5.0 Rating (47+ Reviews)" and moved "0.19% Documented Complication Rate" off the second screen. A visitor should not be thinking about complications before she has pictured a result; the rate keeps its place on `/authority` and the safety pages.

**Availability line** — removed `Currently reviewing new consultation requests for {month}`. Manufactured scarcity, and a real defect: computed with `new Date()` during render, so the month was baked into the prerendered HTML at build time and recomputed at view time. Verified in the built output: `…requests for <!-- -->October 2026`. Once a build aged past a month, server and client disagreed — a hydration mismatch, and a stale month for anyone reading without JavaScript.

**Page title** — "Ombré Powder Brows with a 0.19% Complication Rate — Annandale, VA" → "Ombré Powder Brows in Annandale, VA | Ink Mugi". It was the only title in its results page mentioning complications at all.

**Healed-results intro** — four sentences making one point, ending on "This is the standard." Now two, and the second earns its place.

---

## 5. Mugi / Practitioner Voice

`/about` H1: "The practitioner behind Ink Mugi." → **"I'm Mugi. Ink Mugi is just me."** followed by "No associates, no rotating staff — the person you consult with is the person who does the work."

That is both the warmest and the most commercially useful sentence available, because it is a real differentiator against chain studios and it costs nothing to verify.

**Pages naming Mugi in visible copy went from 41/68 to 68/68** — largely because the footer now does.

Notably, before this pass the homepage named her four times and *all four were inside client testimonials*. The studio had never once named her in its own voice.

---

## 6. Healed-First Philosophy

I kept the idea and demoted the slogan.

Healed-first is a *documentation standard* — it describes what Mugi photographs, not what the client gets. As an organizing idea it had also worn out: "documented" ×167.

The stronger organizing idea was already written, buried on About:

> "the work is less about style and more about judgment: knowing when to proceed, when to stay conservative, and when to say no"

**Judgment is the brand; healed-first is the method that proves it.** So healed-first now appears where it does work — the gallery intro, the location-page section header, the six-week stat — and stops appearing as a self-congratulatory refrain.

---

## 7. Evidence / Statistics

| Claim | Action |
|---|---|
| "13x lower than the industry average of 2.5%" | **Removed** (19 pages). 0.19% of 523 is one event; a comparative safety claim built on n=1 does not survive scrutiny. |
| "5.0 rating from 47+ verified reviews" + star row | **Removed** (19 pages + homepage). Not verifiable from anything in the repository; a rating a business awards itself is the weakest proof on a page that already carries real client words. |
| "that's our guarantee" | **Removed.** |
| 0.19% complication rate | **Preserved**, relocated. Off the homepage's second screen; retained on `/authority` and `/permanent-makeup-safety-dmv` where the query is about safety. |
| 523+ procedures | **Preserved**, demoted. Kept once in the homepage subhead as the reason for restraint. |
| Licence, insurance, single-use | **Preserved**, consolidated into one calm card instead of three stacked claims. |

Net across 68 documents: 523 → 256, 0.19% → 99, documented → 160, 47+ → 80. "Licensed" rose (226 → 294) because the consolidated safety card states the licence plainly on 19 pages where it was previously buried in a stack — a trade I'd make again.

---

## 8. Clarity Improvements

**Gallery intro** — was: "…evaluated and photographed after the full healing process — six weeks minimum. In our practice, healed documentation matters more than same-day beauty shots because healed brows are the outcome clients actually live with. Fresh-day images are excluded from our documentation. This is the standard."

Now: "Every result here was photographed at six weeks or later, never on the day. Fresh brows always look good — the pigment is still sitting on the surface, the shape is at its sharpest, and nothing has settled yet. What you see below is what these clients woke up to months afterwards."

Same length, but the second sentence now explains *why* fresh photos mislead instead of restating the rule.

**Authority hero** — was meta-copy about itself: "This page explains how Ink Mugi approaches… It is not a service pitch. It is a risk-control explanation." Now opens with what actually decides the outcome and admits the possibility of declining the work.

---

## 9. Premium Tone Improvements

The footer tagline — on every page — was:

> "Where artistry meets precision in permanent beauty. Transforming lives through bespoke ombre powder brows that enhance your natural elegance and daily confidence."

Six category clichés in two sentences, describing nobody. Now:

> "Ombré powder brows by Mugi, a Virginia-licensed permanent cosmetic tattooer in Annandale. One practitioner, one client at a time, results judged at six weeks."

Premium arrived by removing every word that was trying to sound premium.

Also cut from `/authority`: "That is what premium pricing is actually paying for" — a paragraph defending the price rather than describing the work.

---

## 10. Human Warmth / Emotional Resonance

The location mid-page CTA (19 pages) was "Ready to wake up with perfect brows?" over "see why hundreds of Northern Virginia clients trust Ink Mugi." Now:

> **Not sure powder brows are right for you?**
> That is what the consultation is for. Bring photos of brows you like and ones you do not — knowing what you want to avoid is often more useful than knowing what you want.

This is the single edit I'd point to. It replaces a generic promise with a practitioner giving you something useful before you have paid her anything, and it quietly signals that "no" is an acceptable outcome.

---

## 11. Artistic Personality

The three location stat cards were: procedure count, complication rate, design approval — all proof. They are now three *decisions*:

- **The shape is decided before any pigment** — "You see the shape on your face, in the mirror, and it is adjusted until you actually like it."
- **The first pass is deliberately light** — "Pigment is easy to add and difficult to take back… Softer than you expect on day one is usually right."
- **Licensed, insured, single-use** — "This is the part of the work you should not have to think about."

The second card is the aesthetic point of view the site was missing: an artist explaining why she deliberately under-delivers on day one. It is supported by existing site content ("conservative technique", "knowing when to stay conservative") — no new technical belief was invented.

---

## 12. Restraint / Content Removed

- Four homepage statistics → three.
- Four sentences of gallery intro → two.
- Eight stacked proof claims across three location cards → three claims.
- `/authority` published "Technique matters, but judgment matters more." **twice** — once in the hero aphorism cards and again 450 lines later. The second instance is now a different thought: *"Almost none of this is visible in the finished brows."*
- The homepage availability line, the star row, the guarantee, and the 13x comparison are simply gone.

---

## 13. Generic Language Removed

| Before | After |
|---|---|
| "Where artistry meets precision in permanent beauty. Transforming lives through bespoke…" | "Ombré powder brows by Mugi, a Virginia-licensed permanent cosmetic tattooer in Annandale." |
| "Ready to wake up with perfect brows?" | "Not sure powder brows are right for you?" |
| "Ready to Transform Your Brows?" (×2) | "Still have a question?" / "Want to talk through your own brows?" |
| "Your Journey to Perfect Brows" | "What the appointment actually involves" |
| "Follow Our Journey" | "From the studio" |
| "your brows stay flawless" | "the shape stays put" |
| "Begin Your Journey" | "Request a Consultation" |
| "Data-Driven Artistry {city} Clients Rely On" | "How Mugi works" |

**CTA system: 48 distinct booking labels → 3.** "Request a Consultation" (330 uses), "Request a Correction Assessment" (the separate paid appointment — honest differentiation, not drift), and inline prose links inside blog markdown deliberately left as sentences rather than converted to title-case buttons.

---

## 14. Pages Deliberately Left Mostly Untouched

- **The blog.** It is already the best writing on the site and the tonal reference for everything else. Editing it toward the brand pages would have been backwards.
- **The microblading problem cluster.** Card copy like "Why pigment shifts to grey or ashy tones — and how correction restores natural warmth" is the most efficient writing on the site: one cause, one remedy, no hedging.
- **The exclusions list** (pregnancy, chemotherapy, keloid tendency, blood thinners). Unglamorous, specific, useful — publishing what you decline is a restraint signal no adjective can buy.
- **"That conversation may end with a treatment plan, a recommendation to wait, or a recommendation not to proceed at all. Good permanent makeup starts with accurate screening, not persuasion."** The most persuasive thing on the site, and it persuades by refusing to.
- **"Most unsatisfactory brows are not caused by one dramatic mistake; they come from a series of small technical decisions that were made too quickly or without enough restraint."** The target voice, fully achieved, already in the file.
- **Client testimonials.** "At eight weeks healed, they look like they have always been there" is the most effective clause on the homepage, and it lands precisely because it is in a client's mouth.
- **Location page bodies.** Tone fixed at the shared-component level; no fabricated local colour added.
- **All educational guides' substance.** Search intent intact; no service name, city or user question was removed.

---

## 15. Factual Claims Requiring Operator Verification

Unchanged from the Phase 2.5 table — this pass **introduced no new numbers and altered no price**. Still open:

1. **Procedure count** — 523+ dominant, but 600+, 330 and 500+ also ship.
2. **0.19% complication rate** — arithmetically one event in 523. Published to two decimals. I removed the "13x safer" derivation; the rate itself is preserved pending your confirmation.
3. **Review count and rating** — removed from markup and from location pages. "47+" still appears in some body copy.
4. **Correction consultation fee** — simultaneously free, $150 and $200.
5. **Touch-up / colour-refresh pricing** — five incompatible models.
6. **Oily-skin retention** — 26 vs 28 months, both figures inside the same files.
7. **Clinical framing** — authority pages still use research vocabulary for practice observation.

---

## 16. Files Changed

63 files, +234 / −165. Highest-leverage: `src/components/Footer.tsx`, `LocationPage.tsx`, `LocationMidCTA.tsx`, `LocationHero.tsx` (each rendering on 19–68 pages), plus `src/pages/Home.tsx`, `About.tsx`, `Authority.tsx`, `Faq.tsx`, `Gallery.tsx`, `SignatureOmbreBrows.tsx`, `OmbrePowderBrowsGuide.tsx`. The remaining ~50 are CTA-label normalisation.

---

## 17. Tests

| Check | Result |
|---|---|
| `npm run typecheck` | **pass** |
| `npm run build` (client + SSR + prerender + validate) | **pass** |
| Prerender | 69 documents, 0 failures |
| Validator | 0 errors; 66/68 indexable; **66/66 unique titles** |
| `npm run lint` | **0 errors**, 63 warnings (pre-existing `react-refresh` noise) |
| Avg rendered text | 11,121 chars/page (was 11,109 — the pass was net-neutral in length, not a cut for its own sake) |

No schema, routing, canonical, sitemap or layout system was touched.

---

## 18. Final Brand Scorecard

| Dimension | Before | After | Why |
|---|---|---|---|
| Differentiation | 9.2 | **9.4** | "Ink Mugi is just me" and the deliberate-under-fill philosophy are things competitors cannot copy. |
| Authority | 9.4 | **9.2** | Slightly down, deliberately. Removing the 13x claim and the self-awarded rating costs asserted authority and buys credibility. |
| Credibility | 9.1 | **9.5** | Every claim now standing is one that survives being checked. |
| Specialist positioning | 9.3 | **9.3** | Untouched; it was already right. |
| Clarity | 8.4 | **9.2** | One idea per paragraph; the page title and H1 say what the page is. |
| Premium tone | 8.0 | **9.0** | The footer alone. Premium by subtraction. |
| Restraint | 7.6 | **9.2** | 4 stats → 3, 8 stacked proofs → 3, 48 CTAs → 3, duplicate aphorism removed. |
| Artistic personality | 7.5 | **8.8** | The light-first-pass card gives her a visible aesthetic position. Still thinner than I'd like on the service pages. |
| Human warmth | 7.4 | **8.9** | She is named on 68/68 pages and speaks in her own voice on About and Authority. |
| Emotional resonance | 7.2 | **8.6** | "You stop thinking about"; "bring photos of brows you do not like". Real but not yet everywhere. |

---

## 19. Final Verdict

### YES, WITH MINOR GAPS

The site now reads as a specialist practice with a person in it. The opening line describes an outcome instead of denying that aesthetics matter; the footer describes a named practitioner instead of a category; the location pages present three decisions instead of eight proofs; and every claim left standing is one that survives checking.

The gaps, honestly:

- **Service-page interiors** got tone fixes at the shared-component level and CTA normalisation, but their body copy did not receive the sentence-level attention the homepage, About, Authority and the location template did. `/signature-ombre-brows` and `/nano-brows` still lead with specification more than with result.
- **Artistic personality is concentrated**, not distributed. The strongest expression of her eye is now on the location template and the homepage; the guides still explain more than they judge.
- **The claims in §15 remain open.** Warmth cannot fully land while a reader who checks the arithmetic finds 0.19% resolving to a single event. That is a decision only you can make, and it is the largest single remaining constraint on credibility.

What I did not do, deliberately: rewrite the blog, touch the exclusions list, invent local colour for location pages, or run the whole site through a rewriting pass. Roughly 90% of the words are unchanged. The 10% that moved were the ones doing the damage.
