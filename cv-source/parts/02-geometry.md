# English CV geometry

Source: `Application.pdf`, page 1. Units are PDF points. Origin is the bottom-left corner. Page 595.276 × 841.890.

Positions are text baselines and path coordinates from the content stream. Colors were checked on a 288 dpi render of the same page.

## Margins and text width

| | pt |
|---|---:|
| Left margin | 25.512 |
| Right margin | 25.512 |
| Text width | 544.252 |
| Text right edge | 569.764 |

Left margin is the leftmost text origin (name, and the longest date/year labels). Justified lines end at 569.764.

## Baselines

| Item | y |
|---|---:|
| Name | 800.460 |
| Contact line 1 (phone, email) | 784.519 |
| Contact line 2 (LinkedIn, GitHub) | 771.219 |
| Employment History | 741.797 |
| Education | 448.210 |
| Skills | 301.573 |
| Relevant experiences | 157.426 |
| Certification & Courses | 134.183 |
| Awards and Achievements | 86.363 |

## Section rules

Each rule is one horizontal gradient bar. `y` is the bottom edge.

| Section | x | y | width | height |
|---|---:|---:|---:|---:|
| Employment History | 25.562 | 737.483 | 544.15936 | 2.49069 |
| Education | 25.562 | 443.896 | 544.15936 | 2.49069 |
| Skills | 25.562 | 297.259 | 544.15936 | 2.49069 |
| Relevant experiences | 25.562 | 153.112 | 544.15936 | 2.49069 |

Colors, confirmed by sampling the bar and the icons:

| Role | PDF rgb | PNG sample |
|---|---|---|
| Solid olive (left edge of each rule) | 0.72 0.8047 0.42589 | 184, 205, 109 |
| Lighter olive (midpoint of each rule) | 0.86 0.90234 0.71294 | 219, 230, 182 |
| Icon burgundy (flat fill) | 0.57098 0.02196 0.19766 | 146, 6, 50 |

The bar runs solid olive at the left edge, lighter olive at the midpoint, and white at the right edge. The same two olive values and the burgundy value are in the PDF shading and fill operators.

## Burgundy separator

`icon x` is the bookmark glyph origin. `text x` is the origin of the text that follows it. The same pair repeats on every row of that block, except the IT & coding row.

| Block | icon x | text x |
|---|---:|---:|
| Employment | 176.670 | 192.818 |
| Education | 89.397 | 105.546 |
| Skills (Languages, Cloud services) | 106.433 | 122.582 |
| Skills (IT & coding) | 106.433 | 125.356 |
| Awards | 63.056 | 79.204 |
| Certification & Courses | 63.056 | 79.204 |

## Job bullets and title

Same x on all three jobs.

| | x |
|---|---:|
| Job title | 192.818 |
| Job bullet | 209.826 |
| Bullet text | 217.725 |

## Baseline skips

| | pt |
|---|---:|
| Wrapped bullet line to its continuation | 9.464 |
| Job-title line to its first bullet | 14.446 |
| Bullet line to the next bullet | 13.450 |

Two later wrapped lines are 9.465, the third title-to-bullet gap is 14.445, and one bullet-to-bullet gap is 13.449 (PDF rounding of these same skips).

## Bottom of the last line

| | pt |
|---|---:|
| Last baseline (2018 award line) | 53.486 |
| Bottom of that line (descenders) | 51.334 |
| Distance from that bottom to the page edge | 51.334 |
