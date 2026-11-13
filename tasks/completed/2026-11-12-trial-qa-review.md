# Task: trial-qa-review
Owner agent: qa-specialist
Depends on: 2026-11-12-trial-hardcoded-values-scan
Objective: Independently verify the web-developer trial report: re-run the checks and confirm or reject each finding.
Inputs: CLAUDE.md, .claude/skills/site-verification/SKILL.md, the web-developer report (supplied by the Main Agent)
Owned files (may write): none
Read-only files: all
Acceptance criteria:
- Build and audit re-run with the result lines quoted.
- Each web-developer finding marked confirmed or not reproduced, with evidence.
- Any issue web-developer missed is listed separately.
- Report uses the 7-part format from the agent file.
Status: done

## Result (Main Agent, 2026-11-12)
- All claims A–G confirmed with evidence. Also found: hours hardcoded in 6 more places (about, llms.txt.ts, locations/orange-county-ca, locations/[slug], thank-you, ContactForm) and county names/count hardcoded in page prose.
- Skill gap: site-verification step 5 expects unitedautismcenter.com in dist/.htaccess; the file now uses a generic "not .org" rule.
