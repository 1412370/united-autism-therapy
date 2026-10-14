/**
 * /llms.txt — a plain-text map of the site for AI assistants and answer
 * engines (proposed llmstxt.org convention). Generated at build time from the
 * same data as the site, so facts stay consistent with the visible pages.
 */
import type { APIRoute } from 'astro';
import { SITE, BUSINESS, fullAddress } from '../data/site';
import { CORE_SERVICES, ABA_SETTINGS } from '../data/services';
import { CATEGORIES } from '../data/categories';
import { getPosts } from '../utils/posts';

export const GET: APIRoute = async () => {
  const posts = (await getPosts()).filter((p) => !p.data.noindex);
  const u = (path: string) => new URL(path, SITE.url).toString();
  const lines: string[] = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.legalName} provides in-home ABA (Applied Behavior Analysis) therapy for children with autism in Westminster, California, with in-home services across ${BUSINESS.countiesShort}. Programs are designed and supervised by Board Certified Behavior Analysts (BCBAs) and delivered with Registered Behavior Technicians (RBTs), with parent training included. ${SITE.tagline}`,
    '',
    '## Key facts',
    `- Address: ${fullAddress}`,
    `- Phone: ${BUSINESS.phone}`,
    `- Hours: Monday–Saturday 8:00 AM–6:00 PM; closed Sunday`,
    `- Service area: Westminster, CA; in-home services in ${BUSINESS.counties.join(', ')}, California`,
    `- Insurance: many plans, including Medi-Cal, cover ABA for children with an autism diagnosis; coverage varies by plan`,
    `- Does not provide autism diagnostic evaluations`,
    `- First step: free consultation (${u('/contact/')})`,
    '',
    '## Services',
    ...CORE_SERVICES.map((s) => `- [${s.name}](${u(`/services/${s.slug}/`)}): ${s.summary}`),
    '',
    '## Ways to receive ABA',
    ...ABA_SETTINGS.map((s) => `- [${s.name}](${u(`/services/${s.slug}/`)}): ${s.summary}`),
    '',
    '## Key pages',
    `- [Insurance & Medi-Cal](${u('/insurance/')})`,
    `- [FAQ](${u('/faq/')})`,
    `- [About](${u('/about/')})`,
    `- [Westminster location](${u('/locations/westminster-ca/')})`,
    `- [Orange County service area](${u('/locations/orange-county-ca/')})`,
    `- [Contact / free consultation](${u('/contact/')})`,
    '',
    ...CATEGORIES.flatMap((c) => {
      const list = posts.filter((p) => p.data.category === c.slug);
      return list.length
        ? [`## ${c.name} articles`, ...list.map((p) => `- [${p.data.h1 ?? p.data.title}](${u(`/blog/${p.id}/`)}): ${p.data.summary ?? p.data.description}`), '']
        : [];
    }),
    '## Notes',
    '- Content is general education, not medical advice. Each article lists its sources and last-updated date.',
  ];
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
