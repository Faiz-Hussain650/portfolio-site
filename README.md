# Faiz Hussain — Portfolio

Personal portfolio site. Plain HTML, CSS and JavaScript, built with Vite and hosted on Vercel. English and Italian, dark and light theme, no framework.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
npm run preview    # serve the built site at http://localhost:4173
```

Requires Node 18 or newer.

## Before you publish: 4 things to do

1. **Add your CV.** Put the PDF in `public/` and name it exactly `Faiz_Hussain_CV.pdf`. The "Download CV" buttons point there.
2. **Set your domain.** Search for `faiz-hussain.vercel.app` in `index.html` and replace it with your real URL (4 places: canonical, og:url, og:image, JSON-LD).
3. **Add certificate links.** In `src/content.js`, set `verify:` on each AWS cert to your Credly badge URL. A "Verify" link appears automatically.
4. **Check the projects.** Projects P—04 to P—06 have `repo: null`, so they show "Walkthrough on request". When you publish the code, paste the GitHub URL into `projectBase` in `src/content.js`.

## Deploy on Vercel (about 5 minutes)

```bash
git init
git add .
git commit -m "Portfolio v1"
git branch -M main
git remote add origin https://github.com/Faiz-Hussain650/portfolio-site.git
git push -u origin main
```

Then go to vercel.com → **Add New → Project** → import the repo. Vercel detects Vite on its own (build command `npm run build`, output `dist`). Click **Deploy**. Every later `git push` redeploys automatically.

Custom domain: Vercel → Project → **Settings → Domains**.

## How the code is organised

```
index.html          Page shell, SEO/Open Graph tags, JSON-LD, nav
src/content.js      ALL text, in English and Italian. Edit this to update the site.
src/main.js         Renders content.js, plus language/theme toggles, mobile menu,
                    active-section nav, scroll reveal, hero terminal animation,
                    copy-email button
src/style.css       Design tokens (colours, fonts, spacing) and all styles
public/             Files served as-is: favicon.svg, og.png (link preview), robots.txt, your CV
```

### Editing content

Everything lives in `src/content.js`. Each language has the same keys:

| Key | What it controls |
|---|---|
| `hero` | Status pill, name, role, pitch, terminal log lines, pipeline stage names |
| `stats` | The four numbers under the hero |
| `about` | Paragraphs and the facts box |
| `skills.items` | Bento cards. `wide: true` makes a card span two columns |
| `projects.items` | `featured: true` shows the large layout; others go in the 3-column grid |
| `journey.items` | Timeline entries |
| `certs.items` | Certification cards |
| `contact` | Closing call to action |

Change a value in `en`, then change the same value in `it`.

### Changing the look

All colours are CSS variables at the top of `src/style.css`. Change `--accent` in `:root` (dark) and `:root[data-theme='light']` to recolour the whole site.

## Features

- English / Italian toggle, remembered per visitor, defaults to the browser language
- Dark / light theme, remembered per visitor, applied before first paint (no flash)
- Animated hero terminal showing a train → registry → deploy → monitor pipeline
- Respects `prefers-reduced-motion`: animations off, all content shown
- Keyboard accessible: skip link, visible focus rings, Escape closes the menu
- SEO: meta description, canonical URL, Open Graph image, Person schema (JSON-LD)
- About 12 KB of gzipped JavaScript, fonts self-hosted (no Google Fonts request)

## Credits

Fonts: Space Grotesk and JetBrains Mono (SIL Open Font License), via Fontsource.
