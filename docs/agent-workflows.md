# Agent workflows

How the Main Agent turns a request into delegated tasks, runs them, checks the results and integrates them. CLAUDE.md section 5 has the principles; this file has the procedures.

## 1. Routing: request type to agents

| Request | Agents | Order |
|---|---|---|
| New blog article | research-analyst (sources) in parallel with content-strategist (draft); then qa-specialist | Research and draft in parallel, then QA |
| Service page or copy change | content-strategist, then qa-specialist | Sequential |
| Site bug or feature under `src/` | web-developer, then qa-specialist | Sequential |
| Content and code change together | content-strategist and web-developer in parallel (disjoint files), then qa-specialist | Parallel, then QA |
| SEO audit or technical question | seo-specialist returns a delegation list; Main Agent calls the user-level `seo-*` agents; then web-developer if fixes are needed; then qa-specialist | Sequential |
| Campaign or ad plan | research-analyst and marketing-specialist in parallel | Parallel, no QA (documents only) |
| Competitor or market research | research-analyst | Single agent |
| Verify a change | qa-specialist | Single agent |

If a request does not match a row, the Main Agent decides the agents and says so in the plan.

## 2. Task decomposition

Each delegated task is written as a file in `tasks/active/<YYYY-MM-DD>-<short-name>.md`:

```
# Task: <short name>
Owner agent: <agent name>
Depends on: <task ids or none>
Objective: <one sentence>
Inputs: <files or URLs the agent must read first>
Owned files (may write): <explicit list>
Read-only files: <list>
Acceptance criteria:
- <checkable item>
Status: pending | in_progress | review | done | blocked
```

When the task is done, the Main Agent moves the file to `tasks/completed/`.

## 3. Delegation rules

- Only the Main Agent delegates. A subagent never calls another subagent.
- A delegated prompt must include: the objective, the files to read, the files it may write, the acceptance criteria, and the report format from its agent file.
- An agent gets only the context it needs. Do not paste whole documents when a path is enough.
- Use the cheapest route that works: if the task is one file and under ten minutes of work, the Main Agent does it or delegates to one agent.

## 4. Execution order

- **Parallel** only when both conditions hold: no dependency between tasks, and the owned file sets do not overlap.
- **Sequential** when one task reads what another writes, or when both touch the same file.
- After every write task, a verification task runs before the change is reported.

## 5. File ownership

Each file has one owner at a time. Read-only agents own nothing.

| Path | Owner | Notes |
|---|---|---|
| `src/content/blog/*`, `src/content/services/*` | content-strategist | New articles follow article-production |
| `docs/CONTENT_CALENDAR.md` | content-strategist | Status and blockers |
| `docs/marketing/*` | marketing-specialist | Planning documents only |
| `src/data/categories.ts` (intro text only) | content-strategist | Structure, keys and slugs stay with web-developer |
| `src/pages/*`, `src/components/*`, `src/layouts/*`, `src/styles/*`, `src/utils/*`, `public/*` (except `.htaccess` and `.cpanel.yml`), `scripts/*` | web-developer | Build must pass |
| `src/data/*` (except `categories.ts` intro text) | web-developer | Shared data; content-strategist asks first |
| `CLAUDE.md`, `.claude/**`, `docs/**` (except calendar and marketing above), `README.md`, `SEO_*.md`, `CONTENT_STRATEGY.md` | Main Agent | Changes need user approval |
| `.github/**`, `astro.config.mjs`, `public/.htaccess`, `public/.cpanel.yml` | Main Agent, with user approval | Affects deploy or hosting |
| `src/data/site.ts` | web-developer with Main Agent review | Changes to phone, address, domain or GA4 ID need user approval |

Two agents must never edit the same file in the same time window. If a task needs a file owned by another agent, the Main Agent queues it.

## 6. Review and integration

1. Each agent returns the report format from its agent file.
2. The Main Agent reads the report and checks it against the acceptance criteria.
3. For a write task, qa-specialist runs the verification sequence in `site-verification`.
4. If two outputs conflict (for example two different phone numbers or two counties claims), the Main Agent checks the source file in `docs/ARTICLE_BRIEF.md` or `src/data/site.ts` and uses that. If the source itself is unclear, the Main Agent asks the user.
5. The Main Agent updates `docs/decision-log.md` for any decision that changes the site, hosting, analytics or agent setup.
6. The Main Agent reports to the user: tasks done, agents involved, files changed, checks run, and what remains. Nothing is committed.

## 7. Failure handling

- **Blocked source or tool:** the agent records the blocker and stops that part. It does not work around access restrictions.
- **Failed verification:** return the task to the owner agent once with the failing output. If it fails again, the Main Agent reports the failure and asks the user.
- **Missing file or reference:** the Main Agent creates the file only if it is in the approved structure; otherwise it asks.

## 8. Approval gates (always ask the user first)

- Git commit, push, merge, or any change to `main` or `deploy`
- Deploy or hosting changes: document roots, DNS, FTP, cPanel
- Deleting or overwriting an existing file
- Changes to `.github/`, `astro.config.mjs`, or the canonical domain
- Installing a new dependency
- Anything that sends content or data to an external service
