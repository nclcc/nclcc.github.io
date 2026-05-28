"use client";

import { useMemo } from "react";

/**
 * Landing symbol for the homepage and post pages — a single centred fractal
 * tree that draws itself in on page load, trunk first then out to the tips.
 *
 * Separate from `FractalTreeBackground` (the static, full-viewport backdrop):
 * this one is a contained hero, sized to sit above the page's body so the
 * reader sees a symbol before they see text. With `quote` enabled, a pull
 * quote below the tree explains what the symbol stands for.
 *
 * Animation uses SVG `stroke-dasharray` / `stroke-dashoffset`: each branch
 * starts with `dashoffset = length` (invisible), then animates to 0 with a
 * delay proportional to (maxDepth − depth), which gives the trunk-first,
 * tips-last growth pattern. Keyframe `tree-grow` lives in globals.css.
 */

const HERO_DEPTH = 7;     // recursion depth — tweak for density
const STEP_MS    = 180;   // per-depth animation delay (slower = more visibly animated)
const DRAW_MS    = 900;   // how long each branch takes to draw

interface Branch {
  x1: number; y1: number; x2: number; y2: number;
  depth: number; maxDepth: number; length: number;
}

// See FractalTreeBackground.tsx — quantising sin/cos output keeps server
// and client SVG attribute strings byte-identical, eliminating the
// React hydration mismatch warning.
const q = (n: number) => Math.round(n * 1000) / 1000;

function buildBranches(
  x: number, y: number,
  angle: number, length: number,
  depth: number, maxDepth: number,
  spread: number, scale: number,
  acc: Branch[] = [],
): Branch[] {
  if (depth === 0 || length < 2) return acc;
  const rad = (angle * Math.PI) / 180;
  const x2 = q(x + length * Math.sin(rad));
  const y2 = q(y - length * Math.cos(rad));
  acc.push({ x1: x, y1: y, x2, y2, depth, maxDepth, length });
  const sp = spread + depth * 3;
  buildBranches(x2, y2, angle - sp, length * scale, depth - 1, maxDepth, spread, scale, acc);
  buildBranches(x2, y2, angle + sp, length * scale, depth - 1, maxDepth, spread, scale, acc);
  return acc;
}

function colorFor(b: Branch): string {
  const t = b.depth / b.maxDepth;
  if (t > 0.7) return "#4D9B70";   // teal — trunk / inner branches
  if (t > 0.4) return "#7EA890";   // muted teal — mid
  return "#C9A84C";                 // gold — tips
}

interface FractalTreeHeroProps {
  /** Show the Mandelbrot pull-quote below the tree. Off by default. */
  quote?: boolean;
}

export default function FractalTreeHero({ quote = false }: FractalTreeHeroProps) {
  const branches = useMemo(
    () => buildBranches(300, 290, 0, 90, HERO_DEPTH, HERO_DEPTH, 26, 0.72),
    [],
  );

  // Total animation time — used to fade the quote in *after* the tree
  // finishes drawing, so the meaning lands once the symbol exists.
  const totalAnimMs = HERO_DEPTH * STEP_MS + DRAW_MS;

  return (
    <div className="w-full flex flex-col items-center mb-6 sm:mb-8">
      {/* Opaque backdrop card — hides the faint full-page background tree
          *behind* the hero so the self-drawing animation reads cleanly,
          without the destination state being partly visible through it. */}
      <div
        className="w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl rounded-xl px-4 py-6 sm:px-8 sm:py-8 border"
        style={{
          background: "var(--bk-cream-lt)",
          borderColor: "var(--bk-rule)",
        }}
      >
      <svg
        aria-hidden
        viewBox="0 0 600 300"
        width="100%"
        height="auto"
        preserveAspectRatio="xMidYMax meet"
        style={{
          display: "block",
          overflow: "visible",
          transformOrigin: "50% 100%", // breathe from the trunk base, not the centre
          // Slow scale-breathe begins once the tree has finished drawing.
          animation: `tree-breathe 6s ease-in-out ${totalAnimMs}ms infinite`,
        }}
      >
        {branches.map((b, i) => {
          const t       = b.depth / b.maxDepth;
          const opacity = 0.6 + t * 0.4;
          const strokeW = Math.max(1, b.depth * 0.9);
          const delay   = (b.maxDepth - b.depth) * STEP_MS;
          // Pad dasharray slightly so subpixel rounding can't leave a stub.
          const dash    = b.length + 0.5;
          // Tip branches (gold) get a slow opacity pulse after their draw
          // completes — gives the canopy a living shimmer. Inner branches
          // just hold their drawn state.
          const isTip   = t <= 0.4;
          const pulse   = isTip
            ? `, tree-tip-pulse 3.2s ease-in-out ${delay + DRAW_MS}ms infinite`
            : "";
          return (
            <line
              key={i}
              x1={b.x1} y1={b.y1}
              x2={b.x2} y2={b.y2}
              stroke={colorFor(b)}
              strokeWidth={strokeW}
              strokeOpacity={opacity}
              strokeLinecap="round"
              style={{
                strokeDasharray: dash,
                strokeDashoffset: dash,
                animation: `tree-grow ${DRAW_MS}ms ease-out ${delay}ms forwards${pulse}`,
              }}
            />
          );
        })}
      </svg>
      </div>

      {quote && (
        <figure
          className="mt-4 sm:mt-5 max-w-md text-center px-4"
          style={{
            opacity: 0,
            animation: `fadeUp 0.8s ease ${totalAnimMs}ms forwards`,
          }}
        >
          <blockquote
            className="font-serif italic text-base sm:text-lg leading-snug"
            style={{ color: "var(--bk-ink-mid)" }}
          >
            &ldquo;Bottomless wonders spring from simple rules, which are
            repeated without end.&rdquo;
          </blockquote>
          <figcaption
            className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.18em] font-mono"
            style={{ color: "var(--bk-sienna)" }}
          >
            — Benoît Mandelbrot
          </figcaption>
        </figure>
      )}
    </div>
  );
}
