# Content Calendar — United Autism Therapy

Last updated: 2026-11-04. Owner: content lead. Cadence follows CONTENT_STRATEGY.md (2 articles per month, then 2–4 per month driven by Search Console data).

## How items move through the calendar

1. **Keyword** is taken from SEO_KEYWORD_MAP.md, or added there first with its cluster.
2. **Sources** must be fetched and checked before writing. Only facts from those pages, or from the verified list in docs/ARTICLE_BRIEF.md section 1, go into an article.
3. **Draft** follows docs/ARTICLE_BRIEF.md (frontmatter, summary, structure, word count).
4. **Build** passes `npm run build` and `npm run audit` with no errors.
5. **Review** by a named BCBA (and an SLP or OT for their topics) before `reviewedBy` is added. This review is recommended, not yet done for any article.

## Published in this run (drafts ready to commit)

| Publish date | Slug | Category | Primary keyword | Cluster / pillar | Funnel | Notes |
|---|---|---|---|---|---|---|
| 2026-11-09 | how-to-request-rcoc-intake-for-autism | parent-resources | rcoc intake autism | Parent resources / parent-training | MOFU | Source: RCOC intake pages (verified). Image is a placeholder from autism-support-orange-county-parents.jpg |
| 2026-11-16 | regional-center-eligibility-autism | autism | regional center eligibility autism | Autism / aba-therapy | MOFU | Source: RCOC Lanterman page (verified). Image placeholder from early-intervention-for-autism.jpg |
| 2026-11-23 | functional-communication-training-aba | aba-therapy | functional communication training | ABA therapy / aba-therapy | MOFU | Source: CDC treatment page (verified). Image placeholder from aba-therapy-goals.jpg |

Why these three: each targets a keyword that is not in SEO_KEYWORD_MAP.md's current table, so there is no cannibalization. Each is linked from at least one existing article or service page, or is linked from the other new articles. Add links from existing pages once the articles are live (see "Internal link follow-ups").

## Queue (not yet written, with blockers)

| Target week | Candidate slug | Keyword | Blocker before writing |
|---|---|---|---|
| 2026-11-30 | echolalia-in-autism | echolalia autism | The ASHA autism page cited in the brief returns 404. Find a replacement source and get SLP review. |
| 2026-12-07 | toilet-training-autism | toilet training autism | No verified source yet. Fetch CDC or AAP content on toileting and autism before drafting. |
| 2026-12-14 | picky-eating-autism-ot | picky eating autism | The AOTA "What is OT" page returned no content on fetch. Verify manually and get OT review. |
| 2027-01-11 | commercial-insurance-aba-california | commercial insurance ABA California | Needs DMHC or other official source for plan rules. Do not name plans without verification. |

## Not scheduled (business input needed)

| Idea | Why it waits |
|---|---|
| Careers / RBT jobs in Westminster | Needs confirmed openings from the business. |
| Vietnamese- or Spanish-language pages | Needs verified bilingual staff. Do not publish language claims otherwise. |
| Team bios for /about/ | Needs real names and credentials from the business. The current template must not ship. |
| Visual schedules printable | Needs design work and a decision on whether to host a file. |
| Social skills groups | Not confirmed as a service. Do not target. |

## Internal link follow-ups (existing pages, after these articles are live)

- Add a link from `/blog/autism-support-orange-county-parents/` to `how-to-request-rcoc-intake-for-autism` in its RCOC section. This is an edit to an existing article, so the owner should approve it.
- Add a link from `/blog/early-intervention-for-autism/` to `regional-center-eligibility-autism` near the age-3 transition section.
- Add a link from `/blog/aba-therapy-goals/` or `/blog/how-does-aba-therapy-work/` to `functional-communication-training-aba`.

## Source problems found during this run

| URL in brief or repo | Status | Action |
|---|---|---|
| https://www.asha.org/public/speech/disorders/autism/ | 404 | Replace in docs/ARTICLE_BRIEF.md and in any article that cites it. |
| https://www.dds.ca.gov/services/early-start/ | 403 to automated fetch | Check manually in a browser before citing it. |
| https://www.aota.org/about/what-is-ot | Empty content to automated fetch | Check manually before citing it. |

## Measurement

- Track impressions and clicks in Search Console for the three new keywords at 8 weeks and 16 weeks after publication.
- Search volume for these keywords is **not verified**. The keyword map states that no paid keyword tool was used. Confirm volume in Google Keyword Planner before expanding a cluster.
- Re-check RCOC facts every 6 months, since eligibility pages and phone numbers can change.

## Publishing dates

The brief's example dates (2026-06-01 to 2026-09-30) are out of date. The dates above are scheduled publish dates, so the article list is in order. Update `date` in frontmatter if the schedule moves.
