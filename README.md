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
3. Each post imports and renders `<CusdisComments title="..." />` at the bottom for
   a private email discussion link.

### Privacy and legal notices

- `/privacy/`: Italian and English privacy notice for browsing and email enquiries.
- `/cookies/`: Italian and English cookie/browser-storage notice.
- `/legal/`: Italian and English operator, public business address, VAT and contact information.
- Every page links to the notices in the footer; the contact section links to privacy before sending an email.

Cusdis is disabled. `CusdisComments` now renders a private email discussion link and never loads a third-party script, even if an old `NEXT_PUBLIC_CUSDIS_APP_ID` secret remains configured. Do not restore an embed or add analytics without first checking its data processing, contracts, international transfers, retention and consent requirements. No cookie consent banner is needed for the current code, which sets no cookies/localStorage/sessionStorage and loads no tracking services. Fonts from `next/font` are self-hosted at build time; the accessory social-card HTML uses system fallbacks.

Owner-confirmed on 9 November 2026: Gmail contact mailbox; delete enquiries that do not become client work within 12 months of the last contact; public address Piazza Caduti del Terrorismo, 10, Bitonto, Bari, Italy. This retention rule requires actual mailbox housekeeping: delete expired messages/attachments and any local copies; a website change cannot delete mail automatically.

Before treating the entire business as compliant:

- Confirm the VAT holder/legal form and whether company/REA or regulated-profession registration disclosures apply. Add those details to `/legal/` where applicable; no registration or exemption is assumed.
- Review the actual GitHub/Gmail account terms, provider roles, any required processing agreement and transfer safeguards. The notice describes provider policies; it does not certify an account-specific contract or transfer assessment.
- Assess applicable accessibility obligations for the actual business and services (D.Lgs. 82/2022 and Law 4/2004). Keyboard focus, a skip link and reduced-motion support are included; no formal accessibility conformity is claimed. Include the downloadable CV and accessory HTML in any full accessibility audit.
- Provide any additional privacy/contract information needed for client engagements, invoicing, recruitment or future services outside this site's current browsing/enquiry scope.
- Deploy the changes and verify production cookies, network requests, HTTPS and footer links. GitHub Pages publishes on a push to `main`; local edits/builds do not update the live site.

Reference sources reviewed for this change:

- [Garante: cookie and tracking guidelines](https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/9677876)
- [GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj)
- [D.Lgs. 70/2003, Article 7](https://www.wipo.int/wipolex/en/legislation/details/13291)
- [GitHub Pages connection data](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [GitHub privacy](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement)
- [Google privacy](https://policies.google.com/privacy?hl=it)
- [AgID accessibility scope](https://accessibilita.agid.gov.it/faqs/a-chi-si-applica-il-decreto/)
