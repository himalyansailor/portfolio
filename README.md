# Sachin Sharma — Portfolio

Portfolio site for Sachin Sharma, full-stack AI engineer. A pastel keyboard that spells PORTFOLIO works as the main navigation, followed by selected work, experience, skills, research and contact. Built with Next.js (App Router) and exported as a static site.

## Run it

Requires Node.js 18.18 or newer.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
npm start        # serve ./out at http://localhost:4173
```

`./out` is plain static HTML, CSS and JS, so you can deploy it to any static host (Vercel, Netlify, GitHub Pages, S3).

## Contact links

The site doesn't show an email address. Every contact action (header "Let's talk ↗", the Contact Me and Enter keys, the dialog button and the contact section) goes to one value in `config/site.js`:

```js
export const CONTACT_URL = LINKS.linkedin;
```

To use a professional email later, set it to a `mailto:` link, e.g. `"mailto:you@yourdomain.com"`.

## Other content

All copy lives in `config/site.js`:

- `EXPERIENCE_START`: the date the live experience clock (years, months, days, hours, minutes, seconds) counts from (`2015-06-01`). It is computed in the visitor's browser, so it stays current without a rebuild.
- `PROFILE`, `LINKS`: name, intro line, and LinkedIn, GitHub and Instagram URLs. The site deliberately shows no location, email or phone.
- `PROJECTS`: the Selected Work cards. `href` and `note` are optional.
- `EXPERIENCE`, `SKILLS`, `RESEARCH`, `EDUCATION`: the remaining sections.
- `DIALOGS`: the About Me and How I Work dialogs.
- `KEYS`: key letters, captions, colours, positions and what each key does (`href` to a section or page, `external: true` to open in a new tab, or `dialog`).
- `MARQUEE_MESSAGE`: the marquee sentence.

## SEO and deploying

Live address: **https://himalayansailor.vercel.app** (Vercel project name `himalayansailor`).

- `config/seo.js`: page title, description, keywords and the schema.org `Person` data. `SITE_URL` resolves automatically: `NEXT_PUBLIC_SITE_URL` if set, otherwise the Vercel production domain (including a custom domain once you add one), otherwise `https://himalayansailor.vercel.app`.
- `app/sitemap.js` → `/sitemap.xml`, `app/robots.js` → `/robots.txt`.
- `app/opengraph-image.png` and `app/twitter-image.png`: the 1200 × 630 card shown when the link is shared. They're static images, so update them if your title changes.
- `app/icon.svg`: favicon.

After the first deploy, add the site to [Google Search Console](https://search.google.com/search-console) and submit `/sitemap.xml` so Google indexes it quickly.

## Structure

```
app/
  layout.jsx         fonts (Satoshi bundled locally, Inter and Instrument Serif via next/font)
  page.jsx           header, hero, marquee, sections, contact, footer
  globals.css        all styles, in numbered sections
  fonts/             Satoshi woff2 files and their licence (Fontshare FFL)
components/
  DialogProvider.jsx  the native <dialog>, focus return, and the open/closed state
  Header.jsx
  Keyboard.jsx        keys, automatic press sequence, pause rules
  Marquee.jsx         seamless two-group marquee
  Sections.jsx        work, experience, skills, research & education
config/site.js        contact link, projects, copy, key data
config/seo.js         site URL, title, description, keywords, structured data
```

## Notes

- The keyboard is laid out on a 900 × 312 px grid and scaled as a single unit with CSS: `min(1, (container width − 20px) / 900)`. Its wrapper's height follows the scaled height.
- The automatic press sequence stops while a pointer is over the keyboard, while a key has keyboard focus, while a dialog is open, while the tab is hidden, and when `prefers-reduced-motion` is set.
- In reduced-motion mode the marquee stops and shows the sentence once as static, wrapping text.
- Fonts: Satoshi © Indian Type Foundry, used under the ITF Free Font License (`app/fonts/Satoshi-License.txt`). Inter and Instrument Serif are served from Google Fonts by `next/font` at build time. Georgia is the fallback serif.
