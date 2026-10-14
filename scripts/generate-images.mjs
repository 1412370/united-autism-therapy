/**
 * Generates branded placeholder illustrations (no text, 1200×630 PNG) for any
 * blog post that doesn't have a featured image yet, plus the default social
 * image and touch icon. Astro converts these to WebP/AVIF at build time.
 *
 * Usage: npm run images
 * Replace any generated file with a real photo (same filename) whenever you like.
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const blogDir = path.join(root, 'src/content/blog');
const outDir = path.join(root, 'src/assets/blog');
fs.mkdirSync(outDir, { recursive: true });

const PALETTES = {
  'aba-therapy': { bg1: '#eef6fe', bg2: '#d6e8fa', a: '#0a5aa8', b: '#f7b500', c: '#fde6d6', motif: 'blocks' },
  'in-home-aba': { bg1: '#fff4e5', bg2: '#fde0bf', a: '#0a5aa8', b: '#3a9a1a', c: '#ffffff', motif: 'heart' },
  autism: { bg1: '#fff8df', bg2: '#fdeaa6', a: '#0a5aa8', b: '#f47b20', c: '#ffffff', motif: 'sparkle' },
  'parent-resources': { bg1: '#fde6d6', bg2: '#f9cdb0', a: '#08457f', b: '#3a9a1a', c: '#fff8df', motif: 'heart' },
  'speech-therapy': { bg1: '#e4f4dc', bg2: '#cbe8bd', a: '#0a5aa8', b: '#f7b500', c: '#ffffff', motif: 'speech' },
  'occupational-therapy': { bg1: '#e9f0fb', bg2: '#cfdcef', a: '#08457f', b: '#f47b20', c: '#fff8df', motif: 'hand' },
};

const hash = (s) => [...s].reduce((h, ch) => (h * 31 + ch.charCodeAt(0)) >>> 0, 7);
const rng = (seed) => () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 2 ** 32);

function motifSvg(kind, x, y, s, color) {
  const t = `transform="translate(${x} ${y}) scale(${s})"`;
  const common = `fill="none" stroke="${color}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"`;
  const shapes = {
    blocks: '<rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/><rect x="8" y="3" width="8" height="8" rx="1.5"/>',
    sparkle: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/>',
    heart: '<path d="M12 20s-7.5-4.6-9.2-9.4A5 5 0 0 1 12 6.3a5 5 0 0 1 9.2 4.3C19.5 15.4 12 20 12 20Z"/>',
    speech: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.8A8 8 0 1 1 21 12Z"/><path d="M8.5 12h.01M12 12h.01M15.5 12h.01"/>',
    hand: '<path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V11"/><path d="M11 10V4.5a1.5 1.5 0 0 1 3 0V11"/><path d="M14 10.5V6a1.5 1.5 0 0 1 3 0v7"/><path d="M8 13l-1.6-1.6a1.6 1.6 0 0 0-2.3 2.3L8 18c1.5 1.8 3.2 3 6 3h.5a5.5 5.5 0 0 0 5.5-5.5V9.5a1.5 1.5 0 0 0-3 0"/>',
  };
  return `<g ${t} ${common}>${shapes[kind]}</g>`;
}

function illustration(slug, category) {
  const p = PALETTES[category] ?? PALETTES['aba-therapy'];
  const r = rng(hash(slug));
  const blobs = Array.from({ length: 5 }, () => {
    const cx = Math.round(r() * 1200), cy = Math.round(r() * 630), rad = Math.round(60 + r() * 170);
    const fill = [p.bg2, p.c, '#ffffff'][Math.floor(r() * 3)];
    return `<circle cx="${cx}" cy="${cy}" r="${rad}" fill="${fill}" opacity="${(0.35 + r() * 0.4).toFixed(2)}"/>`;
  }).join('');
  const dots = Array.from({ length: 14 }, () =>
    `<circle cx="${Math.round(r() * 1200)}" cy="${Math.round(r() * 630)}" r="${Math.round(4 + r() * 8)}" fill="${[p.a, p.b][Math.floor(r() * 2)]}" opacity="0.5"/>`).join('');
  const flip = r() > 0.5;
  const gx = flip ? 250 : 950; // figures position
  const mx = flip ? 880 : 320; // motif card position
  // Adult + child figures (friendly, abstract, faceless)
  const figures = `
    <g transform="translate(${gx - 160} 150)">
      <ellipse cx="160" cy="455" rx="230" ry="26" fill="${p.a}" opacity="0.12"/>
      <circle cx="95" cy="80" r="58" fill="${p.a}"/>
      <path d="M10 450c0-150 40-250 85-250s85 100 85 250Z" fill="${p.a}"/>
      <circle cx="245" cy="200" r="44" fill="${p.b}"/>
      <path d="M180 450c0-110 28-190 65-190s65 80 65 190Z" fill="${p.b}"/>
      <path d="M150 290c30 20 60 22 95 5" stroke="${p.c}" stroke-width="18" stroke-linecap="round" fill="none"/>
    </g>`;
  const card = `
    <g transform="translate(${mx - 150} 145)">
      <rect width="300" height="300" rx="56" fill="#ffffff" opacity="0.92"/>
      <rect x="18" y="18" width="264" height="264" rx="44" fill="${p.bg1}"/>
      ${motifSvg(p.motif, 50, 50, 8.4, p.a)}
    </g>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${p.bg1}"/><stop offset="1" stop-color="${p.bg2}"/></linearGradient></defs>
    <rect width="1200" height="630" fill="url(#g)"/>${blobs}${dots}${card}${figures}
  </svg>`;
}

let made = 0;
for (const file of fs.readdirSync(blogDir).filter((f) => /\.mdx?$/.test(f))) {
  const src = fs.readFileSync(path.join(blogDir, file), 'utf8');
  const slug = (src.match(/^slug:\s*["']?([a-z0-9-]+)/m) ?? [])[1] ?? file.replace(/\.mdx?$/, '');
  const category = (src.match(/^category:\s*["']?([a-z-]+)/m) ?? [])[1] ?? 'aba-therapy';
  const out = path.join(outDir, `${slug}.png`);
  // Skip if any image already exists for this slug (e.g. a real .jpg photo).
  if (['png', 'jpg', 'jpeg', 'webp', 'avif'].some((ext) => fs.existsSync(path.join(outDir, `${slug}.${ext}`)))) continue;
  await sharp(Buffer.from(illustration(slug, category))).png({ compressionLevel: 9 }).toFile(out);
  made++;
}

// Brand assets (logo, favicon, OG image, hero banner) come from the client's files in
// docs/source-assets/ — see scripts/brand-assets.md. This script only fills in missing blog images.

console.log(`Generated ${made} placeholder blog image(s).`);
