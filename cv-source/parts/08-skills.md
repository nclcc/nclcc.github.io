# Skills

Compiled with Tectonic 0.17 to `08-skills.pdf`. Cabin is not loaded. Cochineal is OpenType with `[proportional]` (lining), same as `07-education.tex` and `09-awards.tex`.

Three rows, no section heading. Label is Cochineal Roman, right-aligned. Then `\hspace{21.285bp}`, then a 9pt burgundy `\faBookmark` in a `\makebox[16.148bp][l]`, then the value. Those two lengths are the English gaps (`Application.pdf`, and the same pair in `09-awards.tex`): label edge to icon origin, icon origin to text origin. The icon sits in the column separator, so wrapped lines share the value's left edge. Accent is `rgb(0.57098,0.02196,0.19766)`.

`\arraystretch` 1.25 puts 14.95pt between the previous row's last baseline and the next row's first (English 14.94). Lines inside a row are the 12pt body `\baselineskip` (11.96 PDF points).

`\sk` sets the name in Cochineal Bold and the level in Cochineal Italic. Parentheses and the comma after them are roman: the parenthesis is outside `\textit`. Language names are capitalised the way the English row is: Italiano, Inglese, Francese, Tedesco. The languages row ends with a period. The IT list and the cloud list do not.

`\LaTeX` is the logo command, in bold, because skill names are bold. The macro keeps a space before `(esperto)`. In `Application.pdf` that space is missing: `\LaTeX` swallowed it. The raised A (7pt) and the lowered E match the English logo.

English `Languages` is 8pt. That size is the footnotesize leak from the last education line, not the skills style. `IT & coding` and `Cloud services` are body size, and so is `Lingue`.

Cloud line: bold `AWS`, roman list, em dash, bold `Azure`, roman list, em dash, bold `GCP`, and the products on the next line. `IT e programmazione` is wider than `Cloud services`, so the value measure is about 26pt narrower than the English skills column and `Fabric — GCP:` does not fit after `Monitor,`. Two `\newline`s keep `Fabric — GCP:` together and put `Vertex AI Workbench, Colab Enterprise` on the following line. The first cloud line is not justified, so its spaces stay near 2.1pt. Hyphenation is off in the value column.

The em dashes are `---`, as in `Application.pdf`. `10-copy.md` writes `--` for this line.
