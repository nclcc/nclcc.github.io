# Section rules

`05-rules.pdf`, Tectonic 0.17. TikZ compiled. Cabin Bold `\Large` (14.4pt, PDF size 14.346) for sections, Cabin Bold `\large` (12pt, PDF size 11.955) for subsections. Subsections have no bar.

The bar is a TikZ axis shading, `\shade[left color=rulecolor, right color=white]`, height `2.5pt` (2.49069 in the content stream), width `\textwidth` (544.259 on this engine; the English pdfTeX file measures 544.159). Left edge is the 0.9cm margin, 25.512. `rulecolor` is `rgb(0.72,0.8047,0.42589)`. The shading stops are white, `rgb(0.86,0.90234,0.71294)`, then that olive, with the olive solid at the left edge and white at the right edge.

## Gap

Title baseline to the bottom of the bar, from the content stream of the first heading (baseline 805.619, bar bottom 801.305):

**4.314 pt**

The other three headings measure the same (4.31387 pt). That is the `4.33pt` node coordinate; the English file’s Employment History baseline sits 4.314 pt above its bar (741.797 − 737.483).

## Macros

```latex
\definecolor{rulecolor}{rgb}{0.72,0.8047,0.42589}

\newcommand{\cvsection}[1]{%
  \par\vspace{12pt}%
  \noindent\begin{tikzpicture}[line width=0pt]
    \shade[left color=rulecolor, right color=white]
      (0,0) rectangle (\textwidth,2.5pt);
    \node[anchor=base west, inner xsep=1.2pt, inner ysep=0pt, outer sep=0pt,
          font=\sffamily\bfseries\Large] at (0,4.33pt) {#1};
  \end{tikzpicture}\par
}
\newcommand{\cvsub}[1]{%
  \par\vspace{8pt}%
  \noindent{\sffamily\bfseries\large #1}\par
}
```

`inner xsep=1.2pt` puts the title origin 1.196 pt to the right of the bar (English file: 1.195 pt).
