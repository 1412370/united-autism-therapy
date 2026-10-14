/**
 * Builds preview/ — a copy of dist/ that works when you double-click
 * index.html (file://), with no web server.
 *
 * The real site (dist/) uses root-relative URLs like /_astro/style.css and
 * /about/, which are correct on a web host but break when opened as a local
 * file. This script rewrites them to relative paths (../_astro/style.css,
 * ../about/index.html). Use preview/ only for looking at the site locally —
 * always upload dist/ to your hosting.
 *
 * Usage: npm run build && npm run preview:offline
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist');
const out = path.resolve('preview');
if (!fs.existsSync(root)) throw new Error('Run `npm run build` first.');
fs.rmSync(out, { recursive: true, force: true });
fs.cpSync(root, out, { recursive: true });

const walk = (d) => fs.readdirSync(d).flatMap((f) => {
  const p = path.join(d, f);
  return fs.statSync(p).isDirectory() ? walk(p) : [p];
});

/** Convert "/about/#x" into a path relative to `fromDir`. */
function rel(url, fromDir) {
  if (!url.startsWith('/') || url.startsWith('//')) return url;
  const [pathPart, hash = ''] = url.split('#');
  const clean = pathPart.split('?')[0];
  let target = clean.endsWith('/') ? clean + 'index.html' : clean;
  // Directory without trailing slash (e.g. "/about") → index.html
  const abs = path.join(out, target);
  if (!path.extname(target) && fs.existsSync(path.join(abs, 'index.html'))) target += '/index.html';
  let r = path.relative(fromDir, path.join(out, target)).split(path.sep).join('/');
  if (!r.startsWith('.')) r = './' + r;
  return r + (hash ? '#' + hash : '');
}

let count = 0;
for (const file of walk(out)) {
  const dir = path.dirname(file);
  if (file.endsWith('.html')) {
    let html = fs.readFileSync(file, 'utf8');
    html = html.replace(/\b(href|src|action)="(\/[^"]*)"/g, (_, a, u) => `${a}="${rel(u, dir)}"`);
    html = html.replace(/\bsrcset="([^"]*)"/g, (_, set) =>
      `srcset="${set.split(',').map((part) => { const [u, w] = part.trim().split(/\s+/); return `${rel(u, dir)}${w ? ' ' + w : ''}`; }).join(', ')}"`);
    html = html.replace(/url\((\/[^)]+)\)/g, (_, u) => `url(${rel(u, dir)})`);
    // Offline banner so nobody mistakes this copy for the upload build.
    html = html.replace('<body>', '<body><div style="background:#fdf1d3;color:#1b2b34;text-align:center;padding:6px;font:600 13px system-ui">Offline preview — upload the <code>dist</code> folder to your hosting, not this one.</div>');
    fs.writeFileSync(file, html);
    count++;
  } else if (file.endsWith('.css')) {
    const css = fs.readFileSync(file, 'utf8').replace(/url\((\/[^)]+)\)/g, (_, u) => `url(${rel(u, dir)})`);
    fs.writeFileSync(file, css);
  }
}
for (const f of ['.htaccess', 'sitemap.xml', 'robots.txt']) fs.rmSync(path.join(out, f), { force: true });
console.log(`Offline preview written to preview/ (${count} pages). Open preview/index.html in your browser.`);
