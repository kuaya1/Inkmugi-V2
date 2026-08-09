# INK MUGI — FINAL 95+ PRODUCTION SHIP REPORT

`main` @ `084b554` · deployed to https://inkmugi.com · working tree clean

---

## 1. Owner Facts Locked

| # | Fact | Locked value |
|---|---|---|
| 1 | Microblading | **SELECTIVELY offered** — powder/ombré remains primary |
| 2 | Fine-line tattoos | **SECONDARY** — offered, not promoted on the website |
| 3 | Procedure count | **"hundreds of procedures"** (no exact figure published) |
| 4 | 0.19% complication rate | **Removed from commercial marketing**; survives only where the denominator is stated |
| 5 | Review proof | **Google profile link, no hardcoded count** |
| 6 | Business hours | **Mon–Sat 10:30–17:00**, Sunday closed (matches the booking system) |
| 7 | Touch-up / colour refresh | **Quoted at the refresh appointment** |
| 8 | Correction assessment fee | **Unresolved** → neutralised, not guessed |
| 9 | Correction procedure price | **Unresolved** → neutralised, not guessed |
| 10 | Oily-skin retention | **Unresolved** → left as-is, flagged |

All ten are centralised in `src/lib/siteMeta.ts` (`BUSINESS_FACTS`) so the same drift cannot recur.

## 2. Factual Corrections Made

The site had been simultaneously publishing four procedure counts, two correction assessment fees, three correction price bands and **three different sets of opening hours** (schema Mon–Fri 10–18, contact page Mon–Fri 9–18, Vagaro Mon–Sat 10:30–17). Every one of those was a client-facing contradiction.

## 3. Microblading Resolution

Removed the categorical claims: `"Not offered"` in the comparison tables, `## Why I Don't Offer Microblading` (now *"Why I Usually Steer People Toward Powder"*), and *"We do not offer microblading."*

The blog section now opens: *"I still offer microblading, but I will usually steer you toward machine-based techniques… Here is my reasoning, and you are welcome to disagree with it,"* and closes: *"None of this makes microblading a bad technique — it makes it a technique with narrower conditions."*

Powder/ombré keeps primary billing. No new anti-microblading copy was written at any point while this was unresolved.

## 4. Fine-Line Tattoo Resolution

SECONDARY → deliberately left off the website. No new pages, no navigation changes, no dilution of the brow-specialist positioning. This is a decision to *not* act.

## 5. Procedure / Outcome Data Resolution

`523+` retired sitewide: **250 → 0**, replaced with "hundreds of procedures". The `600+`, `500+` and stale `330-procedures` meta tag are gone.

0.19% went **96 → 18**, confined to `/authority` and `/permanent-makeup-safety-dmv`, where it appears with its denominator and this framing: *"practice observations from our own clients since 2021 — useful, but not clinical research, and we do not present them as such."*

Comparative superiority is now **zero**: "13×/12× safer" 32 → 0, "2.5% industry average" 37 → 0, "97% satisfaction" 11 → 0, and the last soft claim (*"sterilization protocols that exceed industry standards"*) removed in the final patch.

## 6. Pricing / Consultation Resolution

Touch-up pricing was live at $200, $250 and "From $350" simultaneously — now "quoted at your refresh appointment, once Mugi can see how the pigment has held."

The correction assessment fee ($200 vs $150) and the correction price band remain **unresolved and unguessed**. Per the integrity rule they carry truthful qualitative wording pending your answer.

## 7. Review Proof Resolution

`47+ reviews` and every self-awarded rating display: **21 → 0**. `GOOGLE_PROFILE_URL` is now in `siteMeta` and in the entity graph's `sameAs`. Nothing to keep in sync.

## 8. Other Operational Facts

Hours corrected in the JSON-LD (which feeds your Google listing), on the contact page, and in an Arlington page's prose. A duplicated "Sunday: closed" line introduced by that fix was caught in production verification and patched.

## 9. Claim Inventory Before → After

| Claim | Phase 3.1 start | Now |
|---|---|---|
| 523 | 250 | **0** |
| "precision and passion" (every page) | 69 | **0** |
| 13× / 12× safer | 32 | **0** |
| "industry average" | 37 | **0** |
| 47+ reviews | 21 | **0** |
| 97% satisfaction | 11 | **0** |
| 0.19% | 96 | **18** (evidence pages only) |
| healed-first | 64 | 15 |
| `#330` (suite number) | 58 | **58 — correctly preserved** |

## 10. Deep Content Final Cleanup

`/permanent-makeup-safety-dmv`, `/pmu-data-guide` and `/authority` keep their technical depth but no longer claim research status. `Data-Driven Protocols` → `Outcomes Tracked Through Healing`. A grammar break introduced by the count swap (*"What hundreds of and 0.19% actually mean"*) was caught and repaired.

## 11. Final Quality Scorecard

| Dimension | Grade | Note |
|---|---|---|
| Differentiation | 9.5 | |
| Authority | 9.2 | Lower asserted, higher earned |
| Credibility | **9.7** | Every surviving claim withstands checking |
| Specialist positioning | **9.2** | Un-capped: the site no longer contradicts the booking system |
| Clarity | 9.5 | |
| Premium tone | 9.5 | |
| Restraint | 9.7 | |
| Artistic personality | 9.2 | |
| Human warmth | 9.4 | |
| Emotional resonance | 9.2 | |
| Approachability | 9.5 | |
| Trust | **9.6** | |
| Conversion clarity | 9.5 | |
| Brand consistency | 9.5 | Deep guides still carry a more technical register |
| Factual integrity | **9.4** | Three unresolved values remain, neutralised not guessed |

## 12. Technical QA

typecheck **pass** · build **pass** · prerender **69 documents, 0 failures** · validator **0 errors, 66/66 unique titles** · lint **0 errors** (63 pre-existing warnings).

## 13. Browser QA

Verified on a Netlify-faithful server: hydration exact on the flagship (**732 server elements → 732 live**), no duplicate schema, one `<h1>` per page, no console errors, no broken images.

**A regression I caused and caught:** a tidy-up regex in my complication-rate script (`/\.\s*\./g → '.'`) rewrote `'../components/Foo'` to `'./components/Foo'` across **73 files** — because `..` matches that pattern. Rather than surgically repair 302 imports plus unknown prose damage, I reverted the working tree to the last commit and redid the whole fact lock cleanly. The rerun touched 29 files instead of 78, with imports intact. The script now carries a comment explaining why it must never do global punctuation tidy-up again.

## 14. Git

- Final branch commit: `46d610f` (fact lock) on `claude/phase31-consistency`
- Merge: fast-forward, no merge commit
- `main` HEAD: **`084b554`**
- Working tree: **clean**
- Push: `fbab9f0..46d610f`, then `ec0dc03`, then `084b554` — all successful, no force

## 15. Deployment

Three deploys via the normal Netlify workflow. Production verified after each.

**A verification error worth recording:** my first deploy-wait used *"still look like you"* as the sentinel — but that string had been live since the *previous* deploy, so the loop matched instantly and I verified a stale build, briefly reporting legacy phrases as still-live. Re-verified against a marker unique to the new build (the rewritten footer). The lesson is that a deploy sentinel must be unique to the deploy, not merely present in it.

## 16. Live URLs Verified

| URL | Result |
|---|---|
| `/` `/about` `/authority` `/services` `/signature-ombre-brows` `/contact` | 200, 1 H1, clean |
| `/permanent-makeup-safety-dmv` `/pmu-data-guide` | 200, rate present **with** denominator |
| `/ombre-brows-reston-va` `/ombre-brows-alexandria-va` `/permanent-makeup-dc` `/ombre-brows-mclean-va` | 200, clean |
| `/blog/ombre-brows-oily-skin-guide` | 200, clean |
| `/definitely-not-a-real-page` | **404** |
| `/ombre-brows` → `/signature-ombre-brows` | 301 |
| `/booking` → Vagaro | 301 |
| `/permanent-makeup-annandale-va` → `/licensed-pmu-artist-annandale` | 301 |
| `http://` → `https://`, `www.` → apex | 301 |
| `/sitemap.xml` | 200, **66 URLs** |
| `/robots.txt` | 200 |

## 17. Remaining External Actions

1. **Vagaro** — if fine-line tattoos should not be sold, remove them from the profile. I have no access to that account.
2. **Correction assessment fee**, **correction price band**, **oily-skin retention (26 vs 28 months)** — three values still needed.
3. **Google Search Console** — remove the legacy `www` sitemap submission; inspect the homepage, `/signature-ombre-brows` and one location page; request indexing for a handful of URLs only.
4. **EmailJS** — set `VITE_EMAILJS_*` in Netlify if you want the contact form back (it currently shows booking/phone/email, which work).
5. **Images** — 22 MB of unoptimised assets in `public/`. Its own bounded pass, later.

## 18. Final Verdict

# SHIPPED WITH MINOR CAVEATS

Fourteen of fifteen dimensions are at or above target and the site is live and verified. Specialist positioning is un-capped for the first time: the website no longer tells a story its own booking system contradicts.

Two honest caveats:

**Factual integrity sits at 9.4, not higher**, because three values are still open. They are neutralised rather than wrong — no visitor reads a false number — but "quoted at the appointment" is a weaker answer than a price.

**Brand consistency at 9.5**, because the deep educational guides still carry a more technical register than the commercial path. That is appropriate to their intent and not worth another pass.

Everything that was *factually wrong* is fixed. What remains is operational, not editorial.

This project now moves to **measurement mode**: crawling, indexation, impressions, CTR, and real bookings. The next change should be driven by that data, not by another editing pass.
