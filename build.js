// Static site generator: node build.js  ->  dist/
const fs = require('fs'), path = require('path'), C = require('./content.js');
const S = C.site, OUT = 'dist';
fs.rmSync(OUT, { recursive: true, force: true });
const w = (p, s) => { const f = path.join(OUT, p); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, s); };
const e = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const strip = h => h.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
C.articles.forEach(a => { a.text = strip(a.body); a.read = Math.max(1, Math.ceil(a.text.split(' ').length / 200)); });
const cats = Object.entries(C.cats);
const card = a => `<article class="card" data-cat="${a.cat}"><a class="thumb t-${a.cat}" href="/articles/${a.slug}/" tabindex="-1" aria-hidden="true"><span>${C.cats[a.cat].name}</span></a><div class="cb"><a class="tag" href="/${a.cat}/">${C.cats[a.cat].name}</a><h3><a href="/articles/${a.slug}/">${a.title}</a></h3><p>${a.desc}</p><small>${a.date} · ${a.read} min read</small></div></article>`;
const side = `<aside class="side"><section><h2>Editor's picks</h2><ol>${C.articles.slice(0, 4).map(a => `<li><a href="/articles/${a.slug}/">${a.title}</a></li>`).join('')}</ol></section><section><h2>Categories</h2><ul>${cats.map(([k, v]) => `<li><a href="/${k}/">${v.name}</a></li>`).join('')}</ul></section></aside>`;
const layout = ({ t, d, p, main, ld = '', og = 'website', home = false }) => {
  const title = home ? `${S.name}: AI and Technology Guides` : `${t} | ${S.name}`;
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${e(title)}</title><meta name="description" content="${e(d)}"><link rel="canonical" href="${S.url}${p}">
<meta property="og:type" content="${og}"><meta property="og:title" content="${e(title)}"><meta property="og:description" content="${e(d)}"><meta property="og:url" content="${S.url}${p}"><meta property="og:site_name" content="${S.name}"><meta name="twitter:card" content="summary">
${S.gsc ? `<meta name="google-site-verification" content="${S.gsc}">` : ''}${S.adsense ? `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${S.adsense}" crossorigin="anonymous"></script>` : ''}
<link rel="stylesheet" href="/assets/style.css">${ld ? `<script type="application/ld+json">${ld}</script>` : ''}</head><body>
<a class="skip" href="#main">Skip to content</a>
<header class="hd"><div class="wrap bar"><a class="logo" href="/">AI Tech <b>Journal</b></a><button class="mb" aria-expanded="false" aria-controls="nv">Menu</button>
<nav id="nv" aria-label="Primary"><a href="/">Home</a>${cats.map(([k, v]) => `<a href="/${k}/">${v.name}</a>`).join('')}<a href="/about/">About</a><a href="/contact/">Contact</a></nav>
<form class="sf" action="/search/" role="search"><input type="search" name="q" placeholder="Search articles" aria-label="Search articles"><button>Search</button></form></div></header>
<div class="wrap lay"><main id="main">${main}</main>${side}</div>
<footer class="ft"><div class="wrap"><p><strong>${S.name}</strong>: ${S.tagline}</p><nav aria-label="Footer"><a href="/about/">About</a><a href="/contact/">Contact</a><a href="/privacy-policy/">Privacy Policy</a><a href="/disclaimer/">Disclaimer</a><a href="/sitemap.xml">Sitemap</a></nav><p>© ${new Date().getFullYear()} ${S.name}. All rights reserved.</p></div></footer>
<script src="/assets/main.js"></script></body></html>`;
};
const page = (p, t, d, main, extra = {}) => w(p + 'index.html', layout({ t, d, p, main, ...extra }));
// Home
const f = a => a;
page('/', '', S.tagline + ' Free guides to AI tools, tutorials and technology.', `<section class="hero"><span class="tag">Featured</span><h1><a href="/articles/${C.articles[0].slug}/">${C.articles[0].title}</a></h1><p>${C.articles[0].desc}</p></section>
<h2>Latest articles</h2><div class="f" role="group" aria-label="Filter by category"><button data-c="all" aria-pressed="true">All</button>${cats.map(([k, v]) => `<button data-c="${k}" aria-pressed="false">${v.name}</button>`).join('')}</div>
<div class="grid">${C.articles.map(card).join('')}</div>`, { home: true });
// Categories
cats.forEach(([k, v]) => page(`/${k}/`, v.name, v.desc, `<h1>${v.name}</h1><p class="lead">${v.desc}</p><div class="grid">${C.articles.filter(a => a.cat === k).map(card).join('')}</div>`));
// Articles
C.articles.forEach(a => {
  const url = `${S.url}/articles/${a.slug}/`;
  const ld = JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: a.title, description: a.desc, datePublished: a.date, dateModified: a.date, author: { '@type': 'Organization', name: S.name }, publisher: { '@type': 'Organization', name: S.name }, mainEntityOfPage: url });
  page(`/articles/${a.slug}/`, a.title, a.desc, `<nav class="bc" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/${a.cat}/">${C.cats[a.cat].name}</a></nav><article><h1>${a.title}</h1><p class="meta">By ${S.name} · <time datetime="${a.date}">${a.date}</time> · ${a.read} min read</p>${S.sample ? '<p class="note"><strong>Sample content:</strong> this article needs editorial review, fact-checking and expansion with your own experience before publishing.</p>' : ''}${a.body}</article>`, { ld, og: 'article' });
});
// Static pages
const T = (h, body) => `<h1>${h}</h1>${body}`;
page('/about/', 'About Us', `About ${S.name}, a publication explaining AI and technology in plain language.`, T('About Us', `<p>${S.name} publishes practical, plain-language guides to artificial intelligence and everyday technology. Our goal is to help beginners understand new tools and use them responsibly.</p><p>We aim to test claims before repeating them, explain the limits of the tools we cover, and correct mistakes when readers point them out. <em>Editor: replace this page with your real name, background and editorial standards.</em></p>`));
page('/contact/', 'Contact Us', `Contact ${S.name} with questions, corrections or partnership requests.`, T('Contact Us', `<p>Questions, corrections or ideas? Write to <a href="mailto:${S.email}">${S.email}</a> or use the form, which opens your email app.</p><form id="cf" data-to="${S.email}"><label>Name<input name="n" required></label><label>Subject<input name="s" required></label><label>Message<textarea name="m" rows="6" required></textarea></label><button class="btn">Send email</button></form>`));
page('/privacy-policy/', 'Privacy Policy', `How ${S.name} handles visitor data, cookies and advertising.`, T('Privacy Policy', `<p><em>Template: have it reviewed and adapt it to the services you actually use. Last updated ${new Date().toISOString().slice(0, 10)}.</em></p><h2>Information we collect</h2><p>This site does not require accounts. If you email us, we receive the information you send. Our hosting provider may keep standard server logs such as IP address and browser type.</p><h2>Cookies and advertising</h2><p>If we enable Google AdSense, Google and its partners may use cookies to show personalized or non-personalized ads. You can manage ad personalization in Google's Ads Settings. Where required by law, we show a consent notice.</p><h2>Analytics</h2><p>If we add an analytics service, we will describe it here.</p><h2>Third-party links</h2><p>We link to other sites and are not responsible for their privacy practices.</p><h2>Contact</h2><p>Privacy questions: <a href="mailto:${S.email}">${S.email}</a>.</p>`));
page('/disclaimer/', 'Disclaimer', `Disclaimer for ${S.name}: content is informational and not professional advice.`, T('Disclaimer', `<p>The content on ${S.name} is for general information only and is not professional, legal, financial or academic advice. AI tools and their pricing, features and limits change often; check the provider's website before relying on them. We may mention third-party products, and any advertising or affiliate relationships will be disclosed. We make reasonable efforts to be accurate but cannot guarantee completeness.</p>`));
page('/search/', 'Search', `Search ${S.name} articles.`, `<h1>Search results</h1><ul id="res" class="res"></ul><noscript>Search needs JavaScript.</noscript>`);
// Assets and SEO files
fs.mkdirSync(OUT + '/assets', { recursive: true });
['style.css', 'main.js'].forEach(n => fs.copyFileSync('assets/' + n, `${OUT}/assets/${n}`));
w('search-index.json', JSON.stringify(C.articles.map(a => ({ title: a.title, desc: a.desc, url: `/articles/${a.slug}/`, text: a.text }))));
const urls = ['/', ...cats.map(([k]) => `/${k}/`), '/about/', '/contact/', '/privacy-policy/', '/disclaimer/', ...C.articles.map(a => `/articles/${a.slug}/`)];
w('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `<url><loc>${S.url}${u}</loc></url>`).join('\n')}\n</urlset>`);
w('robots.txt', `User-agent: *\nAllow: /\nDisallow: /search/\n\nSitemap: ${S.url}/sitemap.xml\n`);
console.log('Built', urls.length, 'pages');
