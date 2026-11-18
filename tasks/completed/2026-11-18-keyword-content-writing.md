# Task: keyword-content-writing
Owner agent: content-strategist
Depends on: 2026-11-18-keyword-content-research
Objective: Write one new article and expand two existing articles to cover the ABA/autism keywords that the site is missing, without creating pages that compete with existing ones.

Inputs:
- `.claude/agents/content-strategist.md`, `.claude/skills/article-production/SKILL.md`, `.claude/rules/content-guidelines.md`
- `docs/ARTICLE_BRIEF.md` (verified facts, voice, frontmatter template)
- `docs/research/2026-11-18-keyword-content-sources.md` (sources: use only those marked verified)
- `SEO_KEYWORD_MAP.md`, `src/content.config.ts` (frontmatter schema), 2 existing posts as style models: `src/content/blog/what-is-aba-therapy.md`, `src/content/blog/autism-meltdown-vs-tantrum.md`

Work:
1. NEW `src/content/blog/autism-treatment-options.md`
   - Primary keyword: "autism treatment options". Secondary: "autism therapy for children", "types of autism therapy", "autism services".
   - Angle: a parent's map of evidence-based options (ABA, speech, OT, developmental and parent-mediated approaches, early intervention), what medication can and cannot do, and how to spot unproven treatments. Link out to the existing deep-dive posts and service pages instead of repeating them.
   - Date: 2026-11-18 (not in the future). Follow the frontmatter template, include faqs, references (verified sources only), related posts and relatedService.
2. EXPAND `src/content/blog/bcba-vs-rbt.md`
   - Add a section answering "What is an ABA therapist?" (who uses the title, BCBA vs BCaBA vs RBT, how to verify a credential on the BACB registry).
   - Add "aba therapist" and "what does an aba therapist do" to secondaryKeywords. Add 1 FAQ. Set updatedDate: 2026-11-18. Keep title, slug and date.
3. EXPAND `src/content/blog/what-age-to-start-aba-therapy.md`
   - Strengthen the toddler content: an "ABA therapy for toddlers" H2 (what sessions look like for under-3s, play-based/naturalistic approaches, California Early Start and RCOC for birth to 36 months).
   - Keep "aba therapy for toddlers" as a secondary keyword. Add 1 FAQ. Set updatedDate: 2026-11-18. Keep title, slug and date.
4. Add the new article's row to `SEO_KEYWORD_MAP.md` sections 2 and 3, and a row to `docs/CONTENT_CALENDAR.md`. (Main Agent approves this one-time edit to the keyword map.)
5. Add a link to the new article from at least 2 existing posts (e.g. `understanding-autism-spectrum-disorder`, `early-intervention-for-autism`) via a contextual sentence or `related`.

Owned files (may write): the three blog files above, the 2 linking posts you choose, `SEO_KEYWORD_MAP.md`, `docs/CONTENT_CALENDAR.md`.
Read-only: everything else.

Acceptance criteria:
- No invented facts: staff names, credentials, reviews, prices, insurance plans beyond Medi-Cal, cities, languages, outcomes. The business does not diagnose autism.
- Every clinical claim cites a verified source from the research file. No "cure", "recover", "guaranteed", "100%".
- New article: title ≤ 60 chars, description 120–160 chars, no H1 in body, answer-first opening, Quick answer/Key takeaways, FAQ, References, internal links to service pages.
- Expansions do not change title, slug, date or existing claims beyond what the task asks.
- Build and audit: not run by this agent; handed to qa-specialist.
Status: done

## Result (2026-11-18)
- New: `/blog/autism-treatment-options/` (title 53, description 156, about 1,778 words, 5 FAQs, 16 verified references, 15 internal links: kept as a hub by Main Agent decision).
- Expanded: `bcba-vs-rbt` ("What is an ABA therapist?", credential verification) and `what-age-to-start-aba-therapy` ("ABA therapy for toddlers", Early Start/RCOC). Titles, slugs and dates unchanged.
- Inbound links from understanding-autism-spectrum-disorder, early-intervention-for-autism and what-age-to-start-aba-therapy. Keyword map and content calendar updated.
- qa-specialist: build 0 errors (1 known hint), audit "Audited 69 pages — no issues found", 13 claims traced to verified sources, no banned words, all links resolve.
- Open: real featured image (placeholder reuses understanding-autism-spectrum-disorder.jpg); pre-existing AAP 2020 reference in what-age-to-start is unverifiable (403); ARTICLE_BRIEF section 3 needs the source updates listed in the research file; BCBA/SLP/OT review recommended.
