# Header baselines

Coordinates are PDF user space: y up from the bottom of the A4 page. English values are from `Application.pdf` (name baseline in the content stream is 800.46; the phone line is moved −15.941, the second contact line −13.3). This file is `04-header.pdf`.

| Line | English y | This y | Delta |
| --- | ---: | ---: | ---: |
| Name, Cabin Bold `\LARGE` | 800.46 | 803.28 | +2.82 |
| Phone / email | 784.52 | 787.34 | +2.82 |
| LinkedIn / GitHub | 771.22 | 774.04 | +2.82 |

Gaps, which are what the 16pt and 13.35pt baselineskips set:

| Gap | English | This |
| --- | ---: | ---: |
| Name → phone line | 15.94 | 15.94 |
| Phone line → second contact line | 13.30 | 13.30 |

No spacing change. Every line is 2.82pt above the English line, which is under the 3pt threshold. OpenType Cabin Bold’s TeX height is shorter than the Type 1 Cabin in the English file, so the first baseline sits higher and both contact lines keep the same gap.

## What had to change to compile

Tectonic 0.17 segfaults (exit 139) at `\begin{document}` if `cochineal` is loaded before `cabin`. Cabin’s OTF branch ends with `\defaultfontfeatures{}`, which clears Cochineal’s `Extension=.otf`. Cochineal’s `\setmainfont` then asks for `Cochineal-Roman` with no file name and XeTeX dies. The same crash happens with an empty body. Loading `cabin` first compiles. That is the order in `04-header.tex`.

`\texttt` is not Inconsolata under XeTeX. `inconsolata.sty` only sets the Type 1 family `zi4`, and `TU/zi4/m/n` is undefined, so an untouched `\texttt` becomes Latin Modern. `\texttt` is declared as `T1/zi4` (scale 0.9). The PDF embeds `Inconsolatazi4-Regular` at 8.07pt, the same face as the English file. Phone digits are Cochineal proportional lining figures; the package default is tabular, which made `+39 3663221036` about 9pt wider than the English line.
