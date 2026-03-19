# lkilpatrick.com

**[lkilpatrick.com](https://lkilpatrick.com)** — personal site for Luke Kilpatrick.

> Developer Experience · Product Marketing · Applied AI · Monterey Bay

---

## The site

Five pages. No fluff.

| Page | Purpose |
|---|---|
| [Home](https://lkilpatrick.com) | Who I am and what I do |
| [Work](https://lkilpatrick.com/work) | Production systems, developer portals, and documentation built from zero |
| [Content](https://lkilpatrick.com/content) | Technical writing, conference talks, and product launch videos |
| [Impact](https://lkilpatrick.com/impact) | Four capabilities, proof points, and the scenarios where I make the biggest difference |
| [About](https://lkilpatrick.com/about) | Ocean first. Builder always. |

---

## Stack

- **Next.js 16** — App Router, static export
- **TypeScript** — strict mode
- **TailwindCSS** — utility styling
- **Firebase Hosting** — deployed via GitHub Actions on push to `main`
- No CMS. No database. No backend. Just a fast static site that ships.

---

## Local dev

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploy

Push to `main` — GitHub Actions handles the Firebase deploy automatically.

To deploy manually:

```bash
npm run build
firebase deploy --only hosting
```

---

## Structure

```
app/
  page.tsx              # Home
  work/                 # Work page
  content/              # Content page
  impact/               # Impact page
  about/                # About page
  components/           # All UI components
  data/portfolio.ts     # Single source of truth for all content
public/
  screenshots/          # Portal and content screenshots
  profile.jpg           # Hero photo
  *.pdf                 # Downloadable chapter PDFs
```

All content lives in `app/data/portfolio.ts`. Changing a job title, stat, or link is a one-line edit.

---

## About

15+ years building developer programs, documentation, and communities at Atlassian, Nutanix, Hazelcast, LinearB, and Harness.

PADI Divemaster. Sailor. Author of the [Mia Kingtide Ocean Adventures](https://miakingtide.com) series. Sand City, CA.

→ [lkilpatrick.com](https://lkilpatrick.com)
