# Decision log

Record each decision that changes how the site, content, hosting or agents work. Newest first. Do not record routine edits here.

## 2026-11-12: Audit enforces the documented SEO limits; agent ownership clarified
- Context: the rules said title 60 characters or fewer, description 120 to 160 and canonical on the canonical domain, but `scripts/audit.mjs` allowed 65, 70 to 165, and any https canonical. Agent files also disagreed on who owns `docs/`, `src/data/categories.ts` and `public/.htaccess`, and content-strategist was told to fetch sources and run the build without the tools to do so.
- Decision: the audit now enforces title 60 or fewer, description 120 to 160 (indexable pages), and canonical on `SITE.url` read from `src/data/site.ts`. content-strategist owns `docs/CONTENT_CALENDAR.md` and the intro text in `src/data/categories.ts`, gets sources from the brief or research-analyst, and hands build checks to qa-specialist. `public/.htaccess` and `public/.cpanel.yml` need user approval.
- Consequences: CI runs the audit, so a page outside these limits now blocks the deploy. All 68 pages passed when the change was made.

## 2026-11-12: Canonical domain is unitedautismtherapy.org
- Context: the site was on `unitedautismcenter.com`. The client's brand name is "United Autism Therapy", and the client chose `.org` as the primary domain.
- Decision: canonical, sitemap, schema, robots.txt and llms.txt use `https://unitedautismtherapy.org`. `unitedautismcenter.com` and `unitedautismthereapy.com` redirect with 301 and keep the path.
- Consequences: GA4 stream, Search Console, GBP, NPI and directories must point to `.org`. The `.com` hosting stays on until its redirects are confirmed.

## 2026-11-12: Deployment to GoDaddy by cPanel Git (not FTP)
- Context: FTP deploy from GitHub Actions failed because the FTP hostname did not resolve. A cPanel Git repository was created on the GoDaddy account.
- Decision: the GitHub FTP step was removed. The GoDaddy cPanel Git repository deploys from the `deploy` branch.
- Consequences: the `deploy` branch must be checked out in the cPanel repository, and "Update from Remote" then "Deploy HEAD Commit" is the deploy step.

## 2026-11-10: Multi-agent architecture uses existing user-level SEO agents
- Context: 20 `seo-*` agents already exist at user level.
- Decision: the project `seo-specialist` coordinates them and does not re-implement their checks. Subagents cannot call other subagents, so delegation goes through the Main Agent.
- Consequences: project agents are limited to content, development, QA, marketing planning and research.

## 2026-11-10: Analytics uses a separate GA4 stream per domain
- Context: the `.com` stream `G-YC8FWR5ZH3` was in use. A new `.org` stream was created.
- Decision: `ga4Id` in `src/data/site.ts` holds `G-C4D4F9N61W`, the `.org` stream. Both streams stay in the same GA4 property so history is kept.
