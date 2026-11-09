# Education

Compiled with Tectonic 0.17 to `07-education.pdf`. No crash.

Gaps match `Application.pdf` (PDF points): title baseline to description 9.465 (English 9.464), degree description to the next title 14.94 (English 14.944), summer-school description to the next title 24.414 (English 24.409, one extra `\footnotesize` line). Bookmark origin to title origin is 16.15pt. The date column is right-aligned, then `\hspace{0.75cm}`, then a 9pt burgundy `\faBookmark`.

Two things do not match the English file:

- Cochineal here is OpenType (`proportional`, lining). In `Application.pdf` it is Type 1. `2021 – 2022` is about 2pt wider, so the bookmark sits a little to the right of the English x=89.4. `Luglio 2023` is the longest date, so it sets the column.
- English `July 2023` is `\footnotesize`. `Luglio 2023` is body size. The spec asks for `\footnotesize` on the description only, and shrinking the longest date would make it the smallest label.

Description dashes are en dashes (`--`), as in the Italian text. The English file uses hyphens there. Thesis titles are italic, including the final period. `\underline` covers only `Honours Programme`. `Voto finale` is italic and the mark is roman. Dates are `18 luglio` and `23 luglio`, with no superscript.
