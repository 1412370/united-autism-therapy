# Task: keyword-content-research
Owner agent: research-analyst
Depends on: none
Objective: Find and verify authoritative sources for one new article and two article expansions, so content-strategist can write them without web access.

Inputs:
- `.claude/agents/research-analyst.md`
- `docs/ARTICLE_BRIEF.md` (section 3: approved sources; section 1: verified business facts)
- `SEO_KEYWORD_MAP.md`

Topics:
1. NEW article: "Autism treatment options for children" (primary keyword: autism treatment options; secondary: autism therapy for children, types of autism therapy, autism services). Needs sources on: evidence-based behavioral approaches incl. ABA; speech-language therapy; occupational therapy; developmental/naturalistic approaches; parent-mediated interventions; early intervention; what medication can and cannot do (co-occurring symptoms only); treatments to avoid / unproven claims. Prefer CDC, AAP (2020 clinical report), NICHD, NIMH, ASHA, AOTA, FDA (warnings on unproven autism products), DHCS.
2. EXPAND `/blog/bcba-vs-rbt/`: add "ABA therapist" as a keyword. Sources: BACB (BCBA, BCaBA, RBT credential definitions and RBT supervision requirements), and the BACB certificant registry (how parents verify a credential).
3. EXPAND `/blog/what-age-to-start-aba-therapy/`: a fuller "ABA therapy for toddlers" section. Sources: CDC (signs and early intervention), AAP, California Early Start (DDS) and RCOC Early Start (birth to 36 months), any guidance on how ABA is adapted for toddlers (naturalistic developmental behavioral interventions).

Owned files (may write): `docs/research/2026-11-18-keyword-content-sources.md` only.
Read-only files: everything else.

Acceptance criteria:
- Each source: exact URL, publisher, title, date if shown, HTTP status you saw, and the specific claim(s) it supports in 1–2 sentences of your own words (no long quotes).
- Mark each source "verified (fetched)" or "not fetched (blocked)". Never list a source you did not fetch as verified.
- Note any claim you looked for and could not support.
- Do not bypass bot checks.
Status: done

## Result (2026-11-18)
- Sources file: `docs/research/2026-11-18-keyword-content-sources.md`.
- Verified for all three topics: CDC (treatment, signs, early intervention), NICHD sub-pages, NIMH brochure 2025, ASHA Practice Portal, CHSA AAC, Schreibman 2015 NDBI, FDA health fraud and chelation, RCOC intake and Early Start, BACB credential pages and Certificant Registry.
- Not supported (do not use): AAP 2020 content, FDA HBOT/MMS/stem-cell warnings, DHCS BHT re-check, DDS Early Start, any ABA hours figure, RBT eligibility details, best age to start ABA.
- Stale approved sources (ASHA autism URL 404, ASHA AAC redirect, NIMH topic page) are listed at the end of the research file for an ARTICLE_BRIEF update by the Main Agent.
