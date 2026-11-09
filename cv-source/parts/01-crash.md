# Tectonic segfault (`application-it.tex`)

Tectonic 0.17 (XeTeX) dies with SIGSEGV (exit 139 / -11) at `\begin{document}`, before xdvipdfmx. The body is never reached, which is why a header-only cut crashes too.

`cochineal.sty` installs fontspec defaults (`Ligatures=TeX`, `Extension=.otf`, `SmallCapsFeatures={Letters=SmallCaps}`) and only calls `\setmainfont` from `\AtEndPreamble`. `cabin.sty` on XeTeX ends its OTF branch with `\defaultfontfeatures{}`. Loaded after `cochineal`, that wipe is still in force when Cochineal finally selects the roman font. The last engine line is `Requested font "Cochineal-Roman"` with no `.otf` file name, then the segfault. `cochineal` alone, `cabin` alone, and `cabin` then `cochineal` all compile. `\usepackage{cochineal}` followed only by `\defaultfontfeatures{}` crashes the same way. Putting the Cochineal defaults back after `cabin`, or loading `cabin` with the `type1` option (that branch never clears `\defaultfontfeatures`), also compiles.

## 1. Smallest document that still segfaults

```latex
\documentclass{minimal}
\usepackage{cochineal}
\defaultfontfeatures{}
\begin{document}
\end{document}
```

Same crash, as triggered by the CV (empty body is enough):

```latex
\documentclass{article}
\usepackage{cochineal}
\usepackage{cabin}
\begin{document}
\end{document}
```

`\usepackage{cabin}` then `\usepackage{cochineal}` does not crash.

## 2. Preamble that compiles

`cabin` is loaded before `cochineal`. The `inconsolata` package is not loaded: this bundle’s `inconsolata.sty` (v1.12, `inconsolata-zi4`) only switches `\ttdefault` to the Type 1 family `zi4`, and `TU/zi4/m/n` is undefined, so `\texttt` becomes Latin Modern. `\setmonofont{Inconsolatazi4}` is the XeTeX stand-in (scale 0.9, same as the package option).

Compiled with Tectonic on this machine (empty body, and again with a one-line probe using `\sffamily`, `\LARGE`, `\texttt`, `\faEnvelope[regular]`, `\faBookmark`, `\href`, `\underline`, and `ĳ`). PDF embeds Cabin, Cochineal, Inconsolatazi4, and Font Awesome 5.

```latex
\documentclass[10pt,a4paper]{article}

\usepackage[margin=0.9cm]{geometry}
\usepackage{iftex}
\ifPDFTeX
  \usepackage[T1]{fontenc}
  \usepackage[utf8]{inputenc}
\fi
\usepackage[italian]{babel}
\usepackage[scale=.95]{cabin}
\usepackage{cochineal}
\setmonofont{Inconsolatazi4}[
  Scale=0.9,
  Extension=.otf,
  UprightFont=*-Regular,
  BoldFont=*-Bold]
\usepackage{fontawesome5}
\usepackage{xcolor}
\usepackage{enumitem}
\usepackage{tabularx}
\usepackage{hyperref}

\definecolor{accent}{rgb}{0.57098,0.02196,0.19766}
\definecolor{rulecolor}{rgb}{0.72,0.8047,0.42589}

\hypersetup{
  hidelinks,
  pdftitle={Nicolò Ciccarone},
  pdfauthor={Nicolò Ciccarone}
}
\urlstyle{tt}

\pagestyle{empty}
\setlength{\parindent}{0pt}
\setlength{\parskip}{0pt}
\setlist[itemize]{
  leftmargin=1.15em,
  itemsep=1.5pt,
  topsep=1.5pt,
  parsep=0pt,
  partopsep=0pt,
  label=\textbullet
}

\newcommand{\cvsection}[1]{%
  \par\vspace{9.5pt}%
  {\sffamily\bfseries\Large #1\par}%
  \vspace{1.6pt}%
  \noindent\textcolor{rulecolor}{\rule{\textwidth}{2.15pt}}\par%
  \vspace{5.5pt}%
}
\newcommand{\cvsub}[1]{%
  \par\vspace{7pt}%
  {\sffamily\bfseries\large #1\par}%
  \vspace{3.5pt}%
}
\newcommand{\sep}{\textcolor{accent}{\faBookmark}\hspace{0.42em}}
\newcommand{\role}[1]{\textbf{#1}}
\newcommand{\org}[1]{\textbf{\textit{#1}}}

\newcommand{\cvrow}[2]{%
  #1 & \sep #2\tabularnewline
}
```

A copy of `application-it.tex` with only `\usepackage[scale=.95]{cabin}` moved above `\usepackage{cochineal}` (and with `\usepackage{inconsolata}` left in) also compiles to PDF, including the `ĳ` in Vrĳe. `\texttt` in that build is Latin Modern, not Inconsolata.

## 3. What must be avoided

- `\usepackage{cabin}` after `\usepackage{cochineal}` on XeTeX (the OTF branch). Load Cabin first.
- Any `\defaultfontfeatures` reset that drops `Extension=.otf` after `cochineal` and before `\begin{document}`. `cabin.sty`’s trailing `\defaultfontfeatures{}` is the one that fires here. Do not clear those defaults later in the preamble either: Cochineal’s `\setmainfont` runs at `\AtEndPreamble` and will segfault the same way.
- `\usepackage{inconsolata}` under this XeTeX, if the mono font is supposed to be Inconsolata. It does not segfault; `TU/zi4/m/n` is undefined and `\texttt` / `\urlstyle{tt}` fall back to Latin Modern. Use `\setmonofont{Inconsolatazi4}` as in the preamble above.

Not the crash, and fine once the fontspec defaults survive until `\begin{document}`: `babel` italian, `fontawesome5` (`\faEnvelope[regular]`, `\faBookmark`, `\faPhone`, `\faLinkedin`, `\faGithub`), `hyperref`, `\href`, `enumitem`, `tabularx`, `\underline`, `\LARGE`, and the character `ĳ`.
