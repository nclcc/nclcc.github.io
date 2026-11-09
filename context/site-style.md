# Site style — context for ChatGPT

Use this when writing, designing, or editing anything for Nicolò Ciccarone / Complexa Labs. The live site is the current dark theme. The previous site is the cream manuscript theme. They share one layout and one voice. Do not mix their colours.

Site: https://nclcc.github.io
Stack: Next.js, Tailwind, static export. Content width is `max-w-4xl`.

## Voice

Precise, short, concrete. The claim is that averages lie and the inconvenient case is the one worth modelling: extreme value, heavy tails, causal work, staffing, finance, public research.

Say things in the affirmative. Prefer a named number, a named system, or a named failure over a slogan. No emoji, no hype, no “excited to share”, no startup cadence. Complexa Labs can speak as “we”. The person is Nicolò Ciccarone.

Eyebrows are labels, not sentences: `Staffing · 2027`, `Nicolò Ciccarone · Complexa Labs`.

## What both sites share

- Type: Inter (or system sans) for body, Source Serif / Georgia for headings, Fira Code / mono for eyebrows, dates, and meta.
- Headlines are serif, semibold, tight line-height, slight negative tracking.
- Eyebrows are mono, uppercase, wide letter-spacing, about 10–12px.
- Body copy is about 17px, line-height 1.7. Secondary text is a step quieter than the main ink.
- Pages are a single centered column. Sections stack. Cards are a 1px hairline, slightly rounded (`rounded-md`), with a small lift on hover. No heavy shadows, no gradients, no glass, no neon.
- A fractal tree is the symbol (Mandelbrot). It is a drawing, not a decoration sprinkled everywhere.
- Header: Complexa Labs wordmark, then Philosophy, Experience, Posts, Contact.
- Footer: name, Complexa Labs, P.IVA, a mono version line.
- Links are the only place the warm accent means “click”. Headings use the emphasis colour. Meta labels stay cool and quiet.
- Prose: serif h2/h3, underline links with a 3px offset, code in a small tinted chip, blockquote with a 3px left bar.

## Current site (use this)

Dark forest page, gold for emphasis, sage for labels, terracotta only for links. Token names are inherited from the cream site, so `--bk-green` is gold and `--bk-cream` is the page background. Trust the values, not the names.

| Role | Token | Hex |
|---|---|---|
| Page background | `--bk-cream` | `#0C1A14` |
| Card / elevated surface | `--bk-cream-lt` | `#163328` |
| Tag, code chip, hover surface | `--bk-cream-dk` | `#1F4234` |
| Emphasis, strong | `--bk-green` | `#C9A84C` |
| Headings | `--bk-green-dk` | `#E2BE70` |
| Dim gold | `--bk-green-lt` | `#8C7235` |
| Eyebrows, captions | `--bk-eyebrow` | `#A4C4B3` |
| Links | `--bk-sienna` | `#EC9F84` |
| Link hover | `--bk-sienna-lt` | `#F4B9A2` |
| Body text | `--bk-ink` | `#F2EDD6` |
| Secondary text | `--bk-ink-mid` | `#D2E8DD` |
| Muted text | `--bk-ink-lt` | `#A2C2B1` |
| Hairline | `--bk-rule` | `#2E5A46` |

Colour rules:

- Gold means importance: titles, the hero claim, a number that matters.
- Sage means a label: eyebrow, caption, index. It does not mean a link.
- Terracotta means clickable, and nothing else.
- Backgrounds stay deep and slightly desaturated so the gold reads. Do not lighten the page toward a generic dark UI grey.

Selection is gold with forest text. Scrollbar thumb is the hairline.

## Previous site (do not revive unless asked)

Manuscript cream paper, forest green for headings, sienna for links, near-black ink. Same tokens, opposite values. The README still describes this kit in one line: “manuscript cream + forest green + sienna.”

| Role | Token | Hex |
|---|---|---|
| Page background | `--bk-cream` | `#F0E6C8` |
| Card | `--bk-cream-lt` | `#F8F1DE` |
| Darker cream (chips, rules’ neighbour) | `--bk-cream-dk` | `#E5D9B5` |
| Accent / links’ neighbour green | `--bk-green` | `#1D4D3E` |
| Headings | `--bk-green-dk` | `#143A2F` |
| Lighter green | `--bk-green-lt` | `#2E6354` |
| Links | `--bk-sienna` | `#B8543A` |
| Link hover | `--bk-sienna-lt` | `#D17157` |
| Body text | `--bk-ink` | `#1A1A1A` |
| Secondary text | `--bk-ink-mid` | `#4A4A4A` |
| Muted text | `--bk-ink-lt` | `#6E6E6E` |
| Hairline | `--bk-rule` | `#D4C896` |

There was no separate sage eyebrow colour. Meta text used the muted ink. Green carried both headings and the primary accent. Sienna was the only warm accent, and it was for links.

A later dark pass, before the current tuned palette, used a greener night background (`#0A2018` / `#143D2B` / `#1A4A36`), the same gold, a hotter sienna (`#D17157`), and no split between sage labels and gold headings. The current values above replaced that. If something has to match the live site, use the current table, not this intermediate one.

## When making a new page or image

Match the current site. One column, serif claim, mono eyebrow, one chart or one idea if it is a picture, hairline card if it needs a surface. Gold for the thing that matters, terracotta only if it is a link, sage for the label. Leave the cream manuscript palette in the past unless the task is explicitly to restore or compare it.
