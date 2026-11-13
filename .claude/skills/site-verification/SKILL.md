---
name: site-verification
description: Runs the verification sequence for the United Autism Therapy website (install check, build, audit, metadata length check, canonical domain check) and reports the actual results. Use after any change under src/, public/ or src/content/, and before reporting a change as complete.
---

# Site verification

Verification commands are listed in CLAUDE.md section 2. This skill defines the order, the checks that go beyond the build, and the report format.

## Sequence

1. **Dependencies.** If `node_modules` is missing, run `npm ci`. Do not install anything else.
2. **Build.** Run `npm run build`. Expected: 0 errors. Record the "Result" line.
3. **Audit.** Run `npm run audit`. Expected: no issues. Record the final line.
4. **Metadata lengths.** Read every built `dist/**/index.html`. Confirm each `<title>` is 60 characters or fewer and each meta description is 120 to 160 characters, except the 404 and thank-you pages.
5. **Canonical domain.** Confirm no built page contains `unitedautismcenter.com` except in `dist/.htaccess` (redirect rule) and `dist/.cpanel.yml` (comment). Confirm `dist/sitemap.xml` lists only `https://unitedautismtherapy.org` URLs.
6. **Schema.** Confirm the homepage JSON-LD `url` is `https://unitedautismtherapy.org`.

## Report

```
Build:      <0 errors / N errors> (<Result line>)
Audit:      <no issues / N issues>
Metadata:   <pass / list of pages over the limit>
Canonical:  <pass / list of offending matches>
Schema:     <pass / details>
Files:      <changed files, if known>
```

Do not write "passed" for a check you did not run. Write "not run" and the reason.

## Notes
- The metadata check reads `dist/`, so run it after the build, not before.
- A live-site check (curl) is a separate step. Run it only when asked, and report the status codes.
