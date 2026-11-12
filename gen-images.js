// Generates original SVG illustrations (no licensing or hotlinking). Run from project root: node tools/gen-images.js
const fs = require('fs');
const wrap = (b, c, body) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0b1b3a"/><stop offset="1" stop-color="${b}"/></linearGradient><radialGradient id="r" cx=".85" cy=".15" r=".7"><stop offset="0" stop-color="${c}" stop-opacity=".55"/><stop offset="1" stop-color="${c}" stop-opacity="0"/></radialGradient><pattern id="p" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#fff" stroke-opacity=".06"/></pattern></defs><rect width="1200" height="630" fill="url(#g)"/><rect width="1200" height="630" fill="url(#p)"/><rect width="1200" height="630" fill="url(#r)"/>${body}</svg>`;
const star = (x, y, s, f) => `<path transform="translate(${x} ${y}) scale(${s})" fill="${f}" d="M0-40L9-9L40 0L9 9L0 40L-9 9L-40 0L-9-9z"/>`;
const out = {};
// 1. Tools grid
const gl = [
  '<rect x="-38" y="-28" width="76" height="50" rx="12"/><path d="M-14 20l-4 20 22-20z"/>',
  '<rect x="-38" y="-24" width="76" height="8" rx="4"/><rect x="-38" y="-6" width="76" height="8" rx="4"/><rect x="-38" y="12" width="48" height="8" rx="4"/>',
  '<rect x="-40" y="-30" width="80" height="60" rx="10" fill="none" stroke="#fff" stroke-width="6"/><path d="M-30 20l20-24 14 14 10-10 22 20z"/>',
  '<circle cx="-6" cy="-6" r="24" fill="none" stroke="#fff" stroke-width="7"/><path d="M12 12l26 26" stroke="#fff" stroke-width="9" stroke-linecap="round"/>',
  '<path d="M0-40L9-9L40 0L9 9L0 40L-9 9L-40 0L-9-9z"/>',
  '<path d="M-28-38h38l20 20v56h-58z" fill="none" stroke="#fff" stroke-width="6" stroke-linejoin="round"/><rect x="-14" y="2" width="30" height="6" rx="3"/>'];
let t = '';
gl.forEach((g, i) => { const x = 325 + (i % 3) * 190, y = 155 + Math.floor(i / 3) * 170; t += `<rect x="${x}" y="${y}" width="170" height="150" rx="22" fill="#fff" fill-opacity=".1" stroke="#fff" stroke-opacity=".25" stroke-width="2"/><g transform="translate(${x + 85} ${y + 75})" fill="#fff">${g}</g>`; });
out['best-free-ai-tools-for-beginners-2026'] = wrap('#1d4ed8', '#38bdf8', t + star(1000, 120, 1.6, '#7dd3fc') + star(190, 500, .9, '#93c5fd'));
// 2. Chat + checklist
out['how-to-use-chatgpt-to-improve-productivity'] = wrap('#0f766e', '#2dd4bf',
  `<rect x="170" y="150" width="440" height="110" rx="26" fill="#fff" fill-opacity=".14"/><rect x="205" y="185" width="300" height="12" rx="6" fill="#fff" fill-opacity=".7"/><rect x="205" y="215" width="200" height="12" rx="6" fill="#fff" fill-opacity=".5"/><rect x="300" y="300" width="440" height="130" rx="26" fill="#2563eb"/><rect x="335" y="338" width="340" height="12" rx="6" fill="#fff" fill-opacity=".85"/><rect x="335" y="368" width="250" height="12" rx="6" fill="#fff" fill-opacity=".6"/><rect x="790" y="140" width="250" height="350" rx="24" fill="#fff"/>` +
  [0, 1, 2].map(i => `<circle cx="835" cy="${205 + i * 95}" r="20" fill="#14b8a6"/><path d="M826 ${205 + i * 95}l7 8 12-15" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><rect x="870" y="${198 + i * 95}" width="125" height="14" rx="7" fill="#0b1b3a" fill-opacity=".75"/>`).join('') + star(120, 470, .8, '#5eead4'));
// 3. Book, bulb, cap
let rays = ''; for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4; rays += `<line x1="${600 + 64 * Math.cos(a)}" y1="${140 + 64 * Math.sin(a)}" x2="${600 + 82 * Math.cos(a)}" y2="${140 + 82 * Math.sin(a)}" stroke="#fde68a" stroke-width="6" stroke-linecap="round"/>`; }
out['best-ai-tools-for-students'] = wrap('#4338ca', '#a78bfa',
  `<path d="M600 440C520 408 410 406 330 430V262C410 238 520 242 600 280Z" fill="#fff" fill-opacity=".95"/><path d="M600 440C680 408 790 406 870 430V262C790 238 680 242 600 280Z" fill="#e0e7ff"/><path d="M600 280V440" stroke="#0b1b3a" stroke-opacity=".3" stroke-width="3"/>` +
  [0, 1, 2].map(i => `<path d="M365 ${300 + i * 32}Q460 ${282 + i * 32} 565 ${314 + i * 32}" stroke="#0b1b3a" stroke-opacity=".25" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M635 ${314 + i * 32}Q740 ${282 + i * 32} 835 ${300 + i * 32}" stroke="#0b1b3a" stroke-opacity=".25" stroke-width="6" fill="none" stroke-linecap="round"/>`).join('') +
  `<circle cx="600" cy="140" r="46" fill="#fde68a"/><rect x="580" y="182" width="40" height="18" rx="4" fill="#cbd5e1"/>${rays}<path d="M880 150l90-34 90 34-90 34z" fill="#fff" fill-opacity=".92"/><path d="M915 175v42c30 24 80 24 110 0v-42l-55 21z" fill="#fff" fill-opacity=".7"/><path d="M1060 150v60" stroke="#fde68a" stroke-width="5"/>`);
// 4. Marketing chart
out['how-ai-is-changing-digital-marketing'] = wrap('#1e3a8a', '#22d3ee',
  [90, 140, 190, 250, 320].map((h, i) => `<rect x="${330 + i * 120}" y="${480 - h}" width="80" height="${h}" rx="10" fill="${i == 4 ? '#22d3ee' : '#60a5fa'}" fill-opacity="${.45 + i * .12}"/>`).join('') +
  `<polyline points="330,390 470,330 600,350 760,230 880,170" fill="none" stroke="#fff" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M915 150l-50 6 24 38z" fill="#fff"/><circle cx="1020" cy="320" r="80" fill="none" stroke="#fff" stroke-opacity=".8" stroke-width="8"/><circle cx="1020" cy="320" r="50" fill="none" stroke="#fff" stroke-opacity=".8" stroke-width="8"/><circle cx="1020" cy="320" r="20" fill="#fb7185"/>` + star(180, 130, 1, '#67e8f9'));
// 5. Neural network
const L = [[3, 300], [4, 500], [4, 700], [2, 900]], P = L.map(([n, x]) => Array.from({ length: n }, (_, i) => [x, 315 + (i - (n - 1) / 2) * 95]));
let nn = ''; for (let l = 0; l < 3; l++) P[l].forEach(a => P[l + 1].forEach(b => nn += `<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="#fff" stroke-opacity=".2" stroke-width="2"/>`));
P.forEach((ns, l) => ns.forEach(([x, y]) => nn += `<circle cx="${x}" cy="${y}" r="24" fill="${['#7dd3fc', '#a5b4fc', '#c4b5fd', '#fde68a'][l]}" stroke="#fff" stroke-width="3"/>`));
out['beginners-guide-to-artificial-intelligence'] = wrap('#312e81', '#6366f1', nn + star(1040, 110, 1.4, '#c7d2fe'));
for (const [k, v] of Object.entries(out)) fs.writeFileSync(`assets/images/${k}.svg`, v);
console.log('SVGs:', Object.keys(out).length);
