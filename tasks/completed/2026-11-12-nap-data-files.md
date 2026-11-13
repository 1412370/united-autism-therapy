# Task: nap-data-files
Owner agent: web-developer
Depends on: tasks/completed/2026-11-12-nap-from-site-data.md (done)
Objective: Finish moving phone, address and hours to `BUSINESS` in src/data/site.ts: fix the remaining literals in four data files, fix the "closed on Sunday" wording, and guard the closed-days sentences.
Inputs: CLAUDE.md, .claude/rules/coding-standards.md, .claude/skills/site-verification/SKILL.md, src/data/site.ts, tasks/completed/2026-11-12-nap-from-site-data.md (QA findings)
Owned files (may write):
- src/data/faqs.ts (known: line ~54 phone, ~64 address)
- src/data/services.ts (known: line ~72 phone, ~198 address and hours)
- src/data/locations.ts (known: line ~16 address)
- src/data/highlights.ts (known: line ~26 street)
- src/data/site.ts: only (a) the derived helpers added in the previous task, and (b) `mapsQuery` may be changed to derive from the address fields ONLY if the resulting string is byte-identical to today's value. Do not change any other existing value. Leave `hoursShort` as it is.
- src/pages/locations/index.astro, src/pages/locations/[slug].astro (only the sentences that use closedDaysText)
Read-only files: everything else, including src/content/, county prose, and the "Beach Blvd in Westminster" prose lines.
Acceptance criteria:
- No literal "(714) 709-7819", "+17147097819", "13571 Beach Blvd", "92683" or opening-hours text remains in the four data files; they read from BUSINESS or the site.ts helpers. Watch for circular imports (site.ts must not import these files).
- Westminster FAQ reads naturally with a plural (for example "We are closed on Sundays."), built from site data, not a hardcoded day.
- Sentences that use closedDaysText do not render broken text if BUSINESS.hours has no closed day (guard or alternative sentence). Explain the approach.
- `mapsQuery`: either derived with an identical result, or left unchanged with a reason.
- Every visible wording change listed (before, then after). Meaning preserved.
- `npm run build` 0 errors and `npm run audit` no issues.
Status: done

## Result (Main Agent, 2026-11-12)
- web-developer changed 7 owned files: faqs.ts, services.ts, locations.ts, highlights.ts, site.ts (closedDaysPluralText added; mapsQuery now a getter with identical output), locations/index.astro, locations/[slug].astro.
- qa-specialist: all criteria PASS. Build 0 errors, audit no issues, 68/68 JSON-LD parse, all 93 Maps URLs unchanged, getter not affected by any spread/serialization.
- Visible change: /faq/, /services/center-based-aba/ and /locations/westminster-ca/ hours now "Monday – Saturday, 8:00 AM – 6:00 PM"; Westminster FAQ back to "closed on Sundays".
- Follow-up (content-strategist, not done): hours/phone/address still written in src/content/services/center-based-aba.md, in-home-aba.md and ~10 blog posts; center-based-aba page now shows two hours styles.
- scripts/audit.mjs change was made by the Main Agent earlier (audit tightening, see docs/decision-log.md).
