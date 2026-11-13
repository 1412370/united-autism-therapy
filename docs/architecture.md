# Architecture

## Components

```
Website (Astro static site)
  src/content/        blog and service content (validated by src/content.config.ts)
  src/data/           site-wide facts and IDs (site.ts), categories, FAQs
  src/components/     reusable UI
  src/layouts/        page shells
  src/pages/          routes
  scripts/audit.mjs   post-build audit (links, metadata)
  public/             static files, .htaccess, .cpanel.yml

Delivery
  GitHub Actions (.github/workflows/deploy-branch.yml): build -> audit -> publish dist/ to branch "deploy"
  cPanel Git (GoDaddy, unitedautismtherapy.org): deploy branch -> public_html
  cPanel (other host, unitedautismcenter.com): intended to serve the deploy branch and the 301 redirect to .org.
    Status 2026-11-12: NOT working. unitedautismcenter.com shows a GoDaddy parking page (200, JS redirect to /lander)
    and unitedautismthereapy.com still serves the old site (200). Fix in the domain/DNS panel, not in the repo.

Analytics and search
  GA4 property (stream per domain), Google Ads tag, Search Console domain property
  Google Business Profile, NPI, directories (external, manual updates)

Agent system (Claude Code)
  CLAUDE.md                   project instructions (Main Agent reads first)
  .claude/agents/             six project subagents
  .claude/rules/              shared rules, referenced by agents
  .claude/skills/             repeatable workflows
  docs/agent-workflows.md     routing, ownership, review and integration procedures
  tasks/                      task files for delegated work (active and completed)
```

## Key data flows

- **Facts:** `src/data/site.ts` is the single source for phone, address, hours, counties, domain and IDs. Components, schema, llms.txt and the sitemap read from it.
- **Content:** Markdown in `src/content/` is validated at build time. A bad field fails the build rather than shipping.
- **Deploy:** push to `main` starts the build. The `deploy` branch is the artifact both hosts pull from.

## Constraints

- Subagents cannot call other subagents. All coordination runs through the Main Agent.
- The canonical domain is `https://unitedautismtherapy.org`. The `.com` domain is kept only for redirects.
- Hosting changes (document roots, DNS, FTP) are done in the provider's control panel, not from the repo.

## Known gaps

- The GoDaddy cPanel and the other host both deploy the same branch; keep them in sync when a deploy changes `.htaccess`.
- Field CWV data (CrUX) is not yet available for the domain.
- Local listings (GBP, NPI, directories) are maintained manually.
