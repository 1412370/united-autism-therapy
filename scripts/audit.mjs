/**
 * Post-build SEO audit: node scripts/audit.mjs (run after `npm run build`).
 * Checks every HTML page in dist/ for: one <h1>, title & description length,
 * canonical, valid JSON-LD, images with alt/width/height, and broken internal links.
 */
import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const files = [];
(function walk(d) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); fs.statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && files.push(p); } })(dist);

const exists = (href) => {
  const clean = href.split('#')[0].split('?')[0];
  if (!clean) return true;
  const p = path.join(dist, decodeURIComponent(clean));
  return fs.existsSync(p) && (fs.statSync(p).isFile() || fs.existsSync(path.join(p, 'index.html')));
};

let problems = 0;
const warn = (file, msg) => { problems++; console.log(`✗ ${path.relative(dist, file)}: ${msg}`); };
const titles = new Map();

for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) warn(file, `${h1s} <h1> elements`);
  const title = ((html.match(/<title>([^<]*)<\/title>/) || [])[1] || '').replace(/&amp;/g, '&').replace(/&#39;/g, "'");
  if (!title) warn(file, 'missing <title>');
  if (title.length > 65) warn(file, `title ${title.length} chars: ${title}`);
  titles.set(title, [...(titles.get(title) || []), file]);
  const noindex = /<meta name="robots" content="noindex/.test(html);
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  if (!noindex && (desc.length < 70 || desc.length > 165)) warn(file, `description ${desc.length} chars`);
  if (!/<link rel="canonical" href="https:\/\/[^"]+\/"/.test(html)) warn(file, 'missing/invalid canonical');
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]); } catch { warn(file, 'invalid JSON-LD'); }
  }
  for (const img of html.match(/<img\b[^>]*>/g) || []) {
    if (!/\salt(=|\s|>)/.test(img)) warn(file, `img without alt: ${img.slice(0, 80)}`);
    if (!/\bwidth="/.test(img) || !/\bheight="/.test(img)) warn(file, `img without width/height: ${img.slice(0, 80)}`);
  }
  for (const m of html.matchAll(/href="(\/[^"]*)"/g)) {
    if (m[1].startsWith('//')) continue;
    if (!exists(m[1])) warn(file, `broken link ${m[1]}`);
    else if (!/\/$|\.[a-z0-9]+$|#/.test(m[1].split('?')[0])) warn(file, `link without trailing slash ${m[1]}`);
  }
}
for (const [t, fs_] of titles) if (fs_.length > 1) { problems++; console.log(`✗ duplicate title "${t}" on ${fs_.length} pages`); }
console.log(`\nAudited ${files.length} pages — ${problems ? problems + ' issue(s)' : 'no issues found'}.`);
process.exitCode = problems ? 1 : 0;
