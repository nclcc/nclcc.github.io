# Site style — Jardin Parisien

Site: https://nclcc.github.io. Next.js static export; content width max-w-4xl.

Current direction, selected 10 November 2026: a colourful luxury product with rich emerald, sage, deep Bordeaux and warm gold. Editorial serif typography, measured whitespace, thin borders and minimal shadows. This supersedes all former dark/light palettes.

| Role | Light | Dark |
| --- | --- | --- |
| Page | #CEDDBF | #0E3025 |
| Surfaces | #BFD2AB | #184534 |
| Primary action | #7A3049 | #9C445D |
| Text | #293426 | #F0EBD5 |
| Secondary text | #3F4B36 | #D1DCC6 |
| Muted text | #435139 | #B4C7A2 |
| Homepage headline and Mandelbrot quote | #6D501A | #E8C776 |
| Hero panel | #143D2C | #0A241B |
| Brass details | #9B7836 | #C9A650 |

- The hero tree sits on an emerald panel in both themes, without an outline, with sage/gold branches. Keep background trees very faint.
- Cormorant Garamond editorial headings, Inter body and controls, Fira Code metadata.
- All non-body text uses the gold/yellow accent: headings, labels, metadata, navigation, links, controls and footer. Body paragraphs retain espresso/linen colouring. Light mode uses the deeper antique-gold counterpart for contrast.
- Explicit chart tokens: Bordeaux observed, sage counterfactual, transparent sage uncertainty bands. No chart has been added solely to display these tokens.
- The accessible header toggle remembers light/dark choice in localStorage as complexa-theme; without a saved choice, follow the device preference. Document this functional storage in the cookie notice.
- Keep the homepage contact compact and legal links visible. Respect reduced motion and keyboard focus.
- Preserve substantive copy, legal notices, CV download and navigation during visual changes. No liquid scroll effects have been added.

Voice: precise, concrete, affirmative. No hype. Complexa Labs is the brand; Nicolò Ciccarone is the person.

The fractal hero panel is borderless. Card and structural borders elsewhere remain thin. Primary Bordeaux buttons are deep enough for pale-yellow labels.

Use one consistent creamy white (#F0EBD5, --text-cream) for the Complexa Labs wordmark, header navigation, theme icon, footer and homepage proof-card titles in both themes. Do not use pure white for these elements.

Header navigation links and the light/dark toggle icon match the creamy wordmark; this overrides the general pale-yellow rule for non-body text.

Footer copyright, VAT details and legal navigation use the same cream as the header.

Mobile: 44px navigation and action targets, two-column homepage actions, larger proof-card titles, compact section spacing and wrapping footer. Validate at 320px and 375px as well as tablet/desktop widths.
