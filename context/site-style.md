# Site style — Jardin Parisien

Site: https://nclcc.github.io. Next.js static export; content width max-w-4xl.

Current design, selected 10 November 2026: muted sage, linen and antique brass. Soft and minimalist. This supersedes the former dark forest theme and the older cream manuscript palette.

- Sage #DFE7D7 page and #D2DEC7 surfaces; no pure-white backgrounds. Dark mode uses deep forest #14221C and #1E3328 surfaces.
- Deep espresso #352B28 text and headings; #584D46 secondary text and #6C6257 muted text.
- Bordeaux #642F3D primary actions, links and observed chart series. Hover #4E2330.
- Muted sage #7B8B70 counterfactual series; transparent sage at 16% for uncertainty bands.
- Antique brass #A58B56 and champagne #C4AF82 for restrained details, never small body text.
- Thin linen borders #D8D1C2, generous whitespace, minimal shadows.
- Cormorant Garamond editorial serif headings, Inter body and controls, Fira Code for small metadata.
- Keep the existing fractal identity: sage/brass hero and a very faint background tree. No liquid scroll effects have been added.
- Existing bk-* CSS tokens are semantic aliases for this palette; chart tokens explicitly distinguish observed/counterfactual/uncertainty.
- Keep homepage contact compact and legal links visible. Respect reduced motion and keyboard focus.

Voice: precise, concrete, affirmative. No hype. Complexa Labs is the brand; Nicolò Ciccarone is the person. Preserve substantive copy, legal notices, CV download and navigation when making visual changes.

The header has an accessible light/dark toggle. Theme choice is stored locally under complexa-theme; without a choice, follow the device preference. Keep action foreground and link colours legible in both themes.

Main homepage headline, Mandelbrot quote and attribution use --hero-accent: antique gold #6D5B20 in light mode and soft champagne yellow #DFCF8B in dark mode. Other headings remain espresso/linen.
