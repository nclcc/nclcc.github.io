# Font Awesome 5 commands in the English CV

Matched to the `Application.pdf` content stream (Tectonic 0.17, `/tmp/fa-icons.pdf`). Slots are the `fontawesome5` encoding positions.

- Phone: `\faPhone` — FontAwesome5Free-Solid, octal `\203` (slot 131). Classic handset. `\faPhoneAlt` is undefined; `\faPhone*` is the vertical handset and is not this glyph.
- Email: `\faEnvelope[regular]` — FontAwesome5Free-Regular, character `#` (slot 35). Outline envelope. Bare `\faEnvelope` is the Solid filled envelope.
- LinkedIn: `\faLinkedin` — FontAwesome5Brands, octal `\357` (slot 239). Boxed “in”. `\faLinkedinIn` is the letters alone (slot 240).
- GitHub: `\faGithub` — FontAwesome5Brands, octal `\247` (slot 167).
- Date/entry separator: `\faBookmark` — FontAwesome5Free-Solid, character `]` (slot 93). Ribbon bookmark.

`\faEnvelope[regular]` does not crash Tectonic 0.17. The run exits 0, embeds FontAwesome5Free-Regular, and issues no style-substitution warning.

Contact row. Body roman is Cochineal, so the phone number stays Cochineal. Email and both URLs are Inconsolata via `\texttt`. Icons use `accent`, defined as `\definecolor{accent}{rgb}{0.57098,0.02196,0.19766}`.

```latex
{\small
\textcolor{accent}{\faPhone}\hspace{0.45em}+39 3663221036%
\hspace{1.55em}%
\textcolor{accent}{\faEnvelope[regular]}\hspace{0.45em}%
\texttt{niciccarone@gmail.com}\par
\vspace{1.2pt}%
\textcolor{accent}{\faLinkedin}\hspace{0.4em}%
\href{https://www.linkedin.com/in/nicolociccarone1997/}{\texttt{https://www.linkedin.com/in/nicolociccarone1997/}}%
\hspace{1.35em}%
\textcolor{accent}{\faGithub}\hspace{0.4em}\href{https://github.com/nclcc}{\texttt{https://github.com/nclcc}}\par}
```
