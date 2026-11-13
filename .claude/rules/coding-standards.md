# Coding standards (Astro site)

Applies to: `src/`, `public/`, `astro.config.mjs`, `scripts/`. Safety rules and verification commands are in CLAUDE.md; do not repeat them here.

## Structure
- Site-wide values live in `src/data/site.ts` (name, URL, phone, address, hours, counties, integration IDs). Components read from there. Do not hardcode a phone number, address, domain or tracking ID in a component or page.
- Canonical domain: `SITE.url` in `src/data/site.ts`. `astro.config.mjs` `SITE_URL` must match it. Change both together.
- Blog content is in `src/content/blog/`, service content in `src/content/services/`. Validation is done by the schema in `src/content.config.ts`.
- Shared components are in `src/components/`; layouts in `src/layouts/`. Reuse an existing component before creating a new one.

## Changes
- Make the smallest change that meets the task. Do not refactor unrelated code.
- Do not add a dependency unless the task cannot be done without it. State the reason in the report.
- Keep existing behavior unless the task changes it. Describe any behavior change in the report.
- Accessibility: images need alt text, form fields need labels, interactive elements must be keyboard reachable.

## Verification
- `npm run build` must return 0 errors. `npm run audit` must report no issues. Run both after every change.
- Report the actual command output summary, not a claim of success.

## Ownership
- One agent owns a file at a time. Do not edit files owned by another agent (see each agent's "Owned files" section).
- Do not edit `.github/` or `astro.config.mjs` without explicit approval from the user.
