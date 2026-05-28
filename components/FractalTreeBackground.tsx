"use client";

import { useMemo } from "react";

/**
 * Fractal-tree backdrop (port of the AnimatedTree visual from the Complexa
 * platform). Renders a static SVG behind page content as a fixed-position
 * full-viewport layer.
 *
 * Two layouts are rendered — desktop (wide, with corner sprouts) and mobile
 * (portrait, single tree, more breathing space) — and CSS shows whichever
 * matches the viewport. This avoids the "trunk-runs-through-the-text" issue
 * that an over-zoomed slice would produce on narrow screens.
 */

const MAX_DEPTH      = 6;
const CORNER_DEPTH   = 4;
const MOBILE_DEPTH   = 5;

interface Branch {
  x1: number; y1: number; x2: number; y2: number;
  depth: number; maxDepth: number;
}

function buildBranches(
  x: number, y: number,
  angle: number, length: number,
  depth: number,
  maxDepth: number,
  spread: number,
  scale: number,
  acc: Branch[] = [],
): Branch[] {
  if (depth === 0 || length < 2) return acc;
  const rad = (angle * Math.PI) / 180;
  const x2 = x + length * Math.sin(rad);
  const y2 = y - length * Math.cos(rad);
  acc.push({ x1: x, y1: y, x2, y2, depth, maxDepth });
  const sp = spread + depth * 4;
  buildBranches(x2, y2, angle - sp, length * scale, depth - 1, maxDepth, spread, scale, acc);
  buildBranches(x2, y2, angle + sp, length * scale, depth - 1, maxDepth, spread, scale, acc);
  return acc;
}

function colorFor(b: Branch): string {
  const t = b.depth / b.maxDepth;
  if (t > 0.7) return "#4D9B70";   // soft teal — trunk / inner
  if (t > 0.4) return "#7EA890";   // muted teal — mid
  return "#C9A84C";                 // gold — tips
}

function renderBranches(branches: Branch[]) {
  return branches.map((b, i) => {
    const t = b.depth / b.maxDepth;
    const opacity = 0.55 + t * 0.4;
    const strokeW = Math.max(1, b.depth * 0.95);
    return (
      <line
        key={i}
        x1={b.x1} y1={b.y1}
        x2={b.x2} y2={b.y2}
        stroke={colorFor(b)}
        strokeWidth={strokeW}
        strokeOpacity={opacity}
        strokeLinecap="round"
      />
    );
  });
}

export default function FractalTreeBackground() {
  // Desktop / tablet: wide layout with corner sprouts
  const desktopBranches = useMemo(() => {
    const main  = buildBranches(600, 790, 0,    200, MAX_DEPTH,    MAX_DEPTH,    36, 0.66, []);
    const left  = buildBranches(0,   0,   125,   85, CORNER_DEPTH, CORNER_DEPTH, 28, 0.70, []);
    const right = buildBranches(1200, 0, -125,   85, CORNER_DEPTH, CORNER_DEPTH, 28, 0.70, []);
    return [...main, ...left, ...right];
  }, []);

  // Mobile: narrower viewBox, single tree, no corner sprouts (would clip)
  // Lower depth for a less busy backdrop behind dense text.
  const mobileBranches = useMemo(() => {
    return buildBranches(250, 880, 0, 170, MOBILE_DEPTH, MOBILE_DEPTH, 32, 0.66, []);
  }, []);

  const wrapStyle: React.CSSProperties = {
    position: "fixed",
    inset: 0,
    width: "100vw",
    height: "100vh",
    pointerEvents: "none",
    zIndex: 0,
    overflow: "hidden",
  };

  return (
    <div aria-hidden style={wrapStyle}>
      {/* Desktop / tablet (>=640px) */}
      <svg
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMax slice"
        width="100%"
        height="100%"
        className="hidden sm:block"
        style={{ display: undefined, opacity: 0.7 }}
      >
        {renderBranches(desktopBranches)}
      </svg>

      {/* Mobile (<640px) */}
      <svg
        viewBox="0 0 500 900"
        preserveAspectRatio="xMidYMax slice"
        width="100%"
        height="100%"
        className="block sm:hidden"
        style={{ opacity: 0.4 }}
      >
        {renderBranches(mobileBranches)}
      </svg>
    </div>
  );
}
