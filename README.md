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
- Posts: see "Posts & comments" below
- CV PDF: [`public/cv.pdf`](public/cv.pdf) — replace to update the download link.
- Styling: [`app/globals.css`](app/globals.css) — adapted from the Complexa Labs brand kit
  (manuscript cream + forest green + sienna).

## Posts & comments

Posts are written as MDX inside `app/posts/(post)/<slug>/page.mdx`. The route group `(post)`
is invisible in the URL — a post at `app/posts/(post)/welcome/page.mdx` is served at
`/posts/welcome/`.

### Adding a new post

1. Create `app/posts/(post)/<slug>/page.mdx`. Use the existing
   [`welcome/page.mdx`](app/posts/(post)/welcome/page.mdx) as a template.
2. Append an entry to [`app/posts/posts.ts`](app/posts/posts.ts) with the same `slug`, a
   `title`, an ISO `date`, an `excerpt`, and optional `tags`.
3. Each post imports and renders `<CusdisComments title="..." />` at the bottom for the
   comment thread.

### Enabling comments (Cusdis)

Comments are powered by [Cusdis](https://cusdis.com) — privacy-friendly, no account required for
commenters, free tier handles ~1K views/mo. To enable:

1. Sign up at https://cusdis.com and create a new site for `https://nclcc.github.io`.
2. Copy the **App ID** (UUID) from the dashboard.
3. Add a GitHub Actions secret named `NEXT_PUBLIC_CUSDIS_APP_ID` to this repo:
   *Settings → Secrets and variables → Actions → New repository secret*.
4. Update the deploy workflow to forward it as a build-time env var (see
   [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)).
5. Push — comments go live on the next deploy.

For local development, create a `.env.local` file at the repo root containing:

```
NEXT_PUBLIC_CUSDIS_APP_ID=<your-uuid>
```

Comments are moderated from the Cusdis dashboard (you receive an email when a new comment is
submitted; you approve/reject from there).
