# AI Tech Journal

Static site: HTML, CSS, vanilla JS. `content.js` (settings + articles) and `build.js` generate `dist/`. Free, no backend.

## Structure
```
content.js      site settings, categories, articles (edit here)
build.js        generator -> dist/ (pages, sitemap.xml, robots.txt, search index)
assets/         style.css, main.js
dist/           ready-to-deploy output (rebuild with: node build.js)
```

## Preview locally
1. `node build.js` (Node 18+ from nodejs.org)
2. `cd dist && python3 -m http.server 8000` (or `npx serve dist`)
3. Open http://localhost:8000

## Before launch
- In `content.js` set your real `url`, `email`; set `sample: false` once you have reviewed and rewritten articles.
- Rewrite About with your real name/standards, and have the Privacy Policy and Disclaimer reviewed.
- Add original images you own (or properly licensed) to articles if you want them.

## Deploy free on Cloudflare Pages
1. Push this folder to a GitHub repo.
2. Cloudflare dashboard > Workers & Pages > Create > Pages > Connect to Git.
3. Build command: `node build.js` Output directory: `dist`. Deploy.
4. (Alternative) Pages > Direct Upload, upload the `dist` folder.
5. Add a custom domain under the project's Custom domains tab, then update `url` in content.js and rebuild.

## Google Search Console
1. search.google.com/search-console > Add property. Use "Domain" (DNS TXT record, Cloudflare adds it in one click) or "URL prefix" (copy the HTML tag code into `gsc` in content.js, rebuild, deploy, click Verify).
2. Sitemaps > submit `sitemap.xml`.
3. URL Inspection > request indexing for the home page and each article.
4. Check Pages and Performance reports weekly.

## Prepare for Google AdSense
Approval is not guaranteed and is Google's decision. Review the AdSense program policies first.
- Publish substantial original articles you have written or heavily edited; Google sets no fixed number, so focus on genuine usefulness. Expand these 5 samples first.
- Keep About, Contact, Privacy Policy and Disclaimer live and accurate. Own a domain and keep the site easy to navigate.
- Never click your own ads or ask others to.
- Apply at adsense.google.com, add the site, and put your publisher ID in `adsense` in content.js (adds Google's script site-wide). Rebuild and deploy.
- After approval, create an `ads.txt` file in `dist` (the line AdSense gives you) and set up a consent message if you have visitors in the EEA/UK.
