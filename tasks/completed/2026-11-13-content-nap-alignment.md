# Task: content-nap-alignment
Owner agent: content-strategist
Depends on: 2026-11-12-nap-data-files (done)
Objective: Make the hours wording in `src/content/` match the site data, and confirm every phone number and address in content matches `src/data/site.ts`.

Background: Markdown in `src/content/` cannot read `src/data/site.ts`, so these values stay as text. Pages and data files now render hours as "Monday – Saturday, 8:00 AM – 6:00 PM" (from `BUSINESS.hours`). Content uses three other styles ("Monday through Saturday, 8:00 AM to 6:00 PM", "Monday through Saturday, 8 AM to 6 PM", "8 AM to 6 PM"). `/services/center-based-aba/` now shows two styles on one page.

Inputs:
- `.claude/agents/content-strategist.md`, `.claude/rules/content-guidelines.md`
- `src/data/site.ts` (`BUSINESS.phone`, `BUSINESS.address`, `BUSINESS.hours`): read only
- `docs/ARTICLE_BRIEF.md` section 1

Owned files (may write): only the hours sentences in these files:
- `src/content/services/center-based-aba.md` (line 37)
- `src/content/services/in-home-aba.md` (line 70)
- `src/content/blog/autism-in-orange-county.md` (line 149)
- `src/content/blog/autism-support-orange-county-parents.md` (lines 173, 188)
- `src/content/blog/autism-therapy-orange-county.md` (line 139)
- `src/content/blog/does-medi-cal-cover-aba-therapy.md` (line 184)
- `src/content/blog/early-intervention-for-autism.md` (line 184)
- `src/content/blog/early-signs-of-autism.md` (line 193)
- `src/content/blog/how-to-start-in-home-aba-therapy.md` (line 169)
- `src/content/blog/when-to-get-an-autism-evaluation.md` (line 191)

Read-only files: everything else, including all frontmatter (dates, slugs, titles, descriptions).

Acceptance criteria:
- Every hours mention in `src/content/` uses the days and times exactly as in `BUSINESS.hours`: "Monday – Saturday, 8:00 AM – 6:00 PM". Edit only enough surrounding words for the sentence to read correctly.
- No other wording, links, frontmatter or file outside the list changes.
- Report confirms every `(714) 709-7819`, `tel:+17147097819` and `13571 Beach Blvd` in `src/content/` matches `src/data/site.ts` (no edits expected).
- Build and audit: not run by this agent; handed to qa-specialist.
Status: done

## Result (2026-11-13)
- content-strategist changed 10 sentences in 10 files (2 services, 8 blog posts). Only the hours phrase changed. Frontmatter, links, phone and address are untouched.
- Not edited: `autism-support-orange-county-parents.md:173`. It states the hours of Comfort Connection (RCOC), not ours. Those hours match ours exactly, which may be a copy error. Left for the user to decide: check the RCOC page or drop the hours.
- Phone `(714) 709-7819`, `tel:+17147097819` and `13571 Beach Blvd` in `src/content/` all match `src/data/site.ts`. No mismatch found.
- qa-specialist: build 0 errors (1 known hint), audit "Audited 68 pages — no issues found.", en dash renders correctly as U+2013, and `/services/center-based-aba/` shows one hours style in 3 places.
- Pre-existing, outside scope: the header and footer use `BUSINESS.hoursShort` ("Mon–Sat 8 AM–6 PM").
- Follow-up 2026-11-13 (user decision): the hours were removed from the Comfort Connection sentence at `autism-support-orange-county-parents.md:173`. It now reads "You can reach Comfort Connection at (714) 558-5400." Build 0 errors, audit no issues, and no old hours style is left in `src/content/` or `dist/`.
