# Task: nap-from-site-data
Owner agent: web-developer
Depends on: none (findings from tasks/completed/2026-11-12-trial-*.md)
Objective: Replace hardcoded phone, street address and opening hours in pages and components with values read from `BUSINESS` in `src/data/site.ts`, so a change in site.ts updates every page.
Inputs: CLAUDE.md, .claude/rules/coding-standards.md, .claude/skills/site-verification/SKILL.md, src/data/site.ts, tasks/completed/2026-11-12-trial-qa-review.md
Owned files (may write):
- src/pages/contact.astro
- src/pages/locations/index.astro
- src/pages/locations/orange-county-ca.astro
- src/pages/locations/[slug].astro
- src/pages/services/index.astro
- src/pages/about.astro
- src/pages/llms.txt.ts
- src/pages/thank-you.astro
- src/components/ContactForm.astro
- src/utils/* (only to add a small formatting helper if needed)
- src/data/site.ts (only to add a derived helper or constant; do NOT change any existing value)
Read-only files: everything else. Not in scope: county names/count in prose, the "Beach Blvd in Westminster" prose lines, src/content/.
Acceptance criteria:
- No literal "(714) 709-7819", "+17147097819", "13571 Beach Blvd", "92683" or opening-hours text ("8:00 AM", "8 AM", "6 PM", "6:00 PM", "closed Sunday"/"Sundays") remains in the owned page/component files; all come from BUSINESS (or a helper derived from it).
- ContactForm client-side messages get the phone from the server (define:vars or a data attribute), not a literal.
- Rendered text keeps the same meaning. Format may change slightly (for example the hours wording); list every visible wording change in the report.
- No existing value in site.ts changes. No new dependency.
- `npm run build` 0 errors and `npm run audit` no issues.
Status: done

## Result (Main Agent, 2026-11-12)
- web-developer changed 10 owned files; site.ts got 3 derived exports (openHoursText, closedDaysText, hoursText), no value changed.
- qa-specialist: all acceptance criteria PASS. Build 0 errors, audit no issues, FAQ JSON-LD valid, no literal phone in the form script.
- Visible change: hours now read "Monday – Saturday, 8:00 AM – 6:00 PM" everywhere. Westminster FAQ now says "closed on Sunday" (was "Sundays").
- Follow-up (not done): literals remain in src/data/faqs.ts, services.ts, locations.ts, highlights.ts; mapsQuery and hoursShort duplicate site values; closedDaysText sentences have no empty-value guard.
