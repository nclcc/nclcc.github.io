# nicolociccarone.github.io

Personal site — quantitative modelling and data engineering experience.

Built with Next.js 16 + React 19 + Tailwind v4 + TypeScript 6, configured for static export to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

Static output lands in `./out/`.

## Deploy

The site is published as a GitHub Pages **user site** at https://nclcc.github.io, served from a
repo named `nclcc.github.io` under the `nclcc` GitHub account. The included workflow at
`.github/workflows/deploy.yml` builds and publishes on every push to `main`.

One-time setup on GitHub:

1. Create the repo `nclcc.github.io` under the `nclcc` account.
2. In **Settings → Pages**, set **Source: GitHub Actions**.
3. From this directory, add the remote and push:
   ```bash
   git remote add origin git@github.com:nclcc/nclcc.github.io.git
   git commit -m "Initial site"
   git push -u origin main
   ```

> **Note:** the local folder is named `nicolociccarone.github.io` for clarity, but the GitHub repo
> is `nclcc.github.io` (the username-matched name required for a user site).

The site will be available at https://nclcc.github.io.

## Content

- Landing page: [`app/page.tsx`](app/page.tsx)
- Experience pages: [`app/experience/*/page.tsx`](app/experience/)
- CV PDF: [`public/cv.pdf`](public/cv.pdf) — replace to update the download link.
- Styling: [`app/globals.css`](app/globals.css) — adapted from the Complexa Labs brand kit
  (manuscript cream + forest green + sienna).
