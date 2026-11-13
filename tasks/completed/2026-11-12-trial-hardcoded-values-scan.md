# Task: trial-hardcoded-values-scan
Owner agent: web-developer
Depends on: none
Objective: Trial run of the agent system. Check that components, layouts and pages follow coding-standards.md (no hardcoded phone, address, domain or tracking ID) and run the site-verification skill. Report only; no edits.
Inputs: CLAUDE.md, .claude/rules/coding-standards.md, .claude/skills/site-verification/SKILL.md, src/data/site.ts
Owned files (may write): none (read-only trial)
Read-only files: everything under src/, public/, scripts/, dist/
Acceptance criteria:
- Every hardcoded phone, street address, domain or GA4/Ads ID found in src/pages, src/components, src/layouts, src/utils is listed with file:line, or the report states none were found.
- site-verification sequence steps 2 to 6 are run and reported in the skill's report block with actual output.
- No file is created or modified (git status unchanged apart from dist/).
- Report uses the 7-part format from the agent file.
Status: done

## Result (Main Agent, 2026-11-12)
- All acceptance criteria met. No files changed. Build 0 errors, audit no issues.
- Found: 11 hardcoded phone/address lines in 6 files (contact, locations/index, locations/orange-county-ca, services/index, ContactForm). Confirmed by qa-specialist.
- Note: project agents were not loaded in this session (opened in the parent folder); run used general-purpose agents following the agent files.
