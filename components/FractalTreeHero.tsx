"use client";

import { useMemo, type CSSProperties } from "react";

/**
 * Landing symbol for the homepage and post pages — a single centred fractal
 * tree that draws itself in on page load, trunk first then out to the tips.
 *
 * Separate from `FractalTreeBackground` (the static, full-viewport backdrop):
 * this one is a contained hero, sized to sit above the page's body so the
 * reader sees a symbol before they see text. With `quote` enabled, a pull
 * quote below the tree explains what the symbol stands for.
 *
 * The tree is built as a *node tree* (each branch knows its children) and
 * rendered recursively, which is what lets the two fractal animations below
 * read as self-similar:
 *
 *  • Draw-in — each branch animates `stroke-dashoffset` from its length to 0
 *    with a delay ∝ (maxDepth − depth): trunk first, tips last.
 *  • Self-similar sway ("fractal wind") — every branch sits in its own <g>
 *    that rotates a little around its base joint. Because the groups nest, a
 *    parent's sway carries its whole sub-tree and each child *adds* its own,
 *    so the motion compounds across scales and the tips sway most — the same
 *    rule applied at every level, which is the fractal idea.
 *  • Sprouting micro-trees — at a few tips a tiny copy of the whole tree
 *    blooms and recedes on a loop: the generating rule "repeated without end"
 *    at a smaller scale.
 *
 * Keyframes (`tree-grow`, `tree-breathe`, `tree-tip-pulse`, `tree-twinkle`,
 * `tree-sway`, `sprout-draw`, `sprout-fade`) live in globals.css.
 */

const HERO_DEPTH = 7;     // recursion depth — tweak for density
const STEP_MS    = 180;   // per-depth draw delay (slower = more visibly animated)
const DRAW_MS    = 900;   // how long each branch takes to draw

// Total draw time — the ambient loops (breathe, sway, sprout) all start once
// the tree has finished drawing so nothing fights the growth animation.
const TOTAL_MS = HERO_DEPTH * STEP_MS + DRAW_MS;

interface TreeNode {
  x1: number; y1: number; x2: number; y2: number;
  depth: number; maxDepth: number; length: number;
  children: TreeNode[];
}

// See FractalTreeBackground.tsx — quantising sin/cos output keeps server
// and client SVG attribute strings byte-identical, eliminating the
// React hydration mismatch warning.
const q = (n: number) => Math.round(n * 1000) / 1000;

function buildTree(
  x: number, y: number,
  angle: number, length: number,
  depth: number, maxDepth: number,
  spread: number, scale: number,
): TreeNode | null {
  if (depth === 0 || length < 2) return null;
  const rad = (angle * Math.PI) / 180;
  const x2 = q(x + length * Math.sin(rad));
  const y2 = q(y - length * Math.cos(rad));
  const sp = spread + depth * 3;
  const children = [
    buildTree(x2, y2, angle - sp, length * scale, depth - 1, maxDepth, spread, scale),
    buildTree(x2, y2, angle + sp, length * scale, depth - 1, maxDepth, spread, scale),
  ].filter((c): c is TreeNode => c !== null);
  return { x1: x, y1: y, x2, y2, depth, maxDepth, length, children };
}

function flatten(node: TreeNode, acc: TreeNode[] = []): TreeNode[] {
  acc.push(node);
  for (const c of node.children) flatten(c, acc);
  return acc;
}

// Colour as a continuous function of *scale*: a branch's colour is set by how
// far out (how many recursion levels from the trunk) it sits, deep teal at the
// base flowing through sage to warm gold at the tips. Mapping colour to depth
// makes the self-similar structure legible — the same gradient repeats inside
// every sub-tree, since each sub-tree spans the same depth range.
const GRADIENT: [number, string][] = [
  [0.0,  "#2F7F5C"], // trunk — deep teal-green
  [0.45, "#6FA06B"], // inner — sage
  [0.75, "#B7A85A"], // upper — olive-gold
  [1.0,  "#E2BE70"], // tips  — warm gold
];

function lerpHex(a: string, b: string, t: number): string {
  const pa = [1, 3, 5].map((i) => parseInt(a.slice(i, i + 2), 16));
  const pb = [1, 3, 5].map((i) => parseInt(b.slice(i, i + 2), 16));
  const ch = pa.map((v, i) => Math.round(v + (pb[i] - v) * t));
  return "#" + ch.map((v) => v.toString(16).padStart(2, "0")).join("");
}

function colorFor(depth: number, maxDepth: number): string {
  // f = 0 at the trunk, 1 at the tips.
  const f = maxDepth > 1 ? (maxDepth - depth) / (maxDepth - 1) : 1;
  for (let i = 1; i < GRADIENT.length; i++) {
    const [p0, c0] = GRADIENT[i - 1];
    const [p1, c1] = GRADIENT[i];
    if (f <= p1) return lerpHex(c0, c1, (f - p0) / (p1 - p0));
  }
  return GRADIENT[GRADIENT.length - 1][1];
}

const key = (n: TreeNode) => `${n.x2}_${n.y2}`;

/** A tiny tree that blooms and recedes at a tip — the rule, one scale down. */
function Sprout({ node, phaseMs }: { node: TreeNode; phaseMs: number }) {
  // Direction of the parent tip branch, so the sprout grows "outward".
  const angle = (Math.atan2(node.x2 - node.x1, -(node.y2 - node.y1)) * 180) / Math.PI;
  const micro = useMemo(
    () => buildTree(node.x2, node.y2, angle, 13, 3, 3, 24, 0.66),
    [node.x2, node.y2, angle],
  );
  const lines = useMemo(() => (micro ? flatten(micro) : []), [micro]);
  const CYCLE = 9; // seconds per bloom→recede loop
  return (
    <g filter="url(#tip-glow)">
      {lines.map((m, i) => {
        const dash = m.length + 0.5;
        return (
          <line
            key={i}
            x1={m.x1} y1={m.y1}
            x2={m.x2} y2={m.y2}
            stroke="#E2BE70"
            strokeWidth={Math.max(0.8, m.depth * 0.7)}
            strokeLinecap="round"
            style={{
              strokeDasharray: dash,
              ["--dash" as keyof CSSProperties as string]: `${dash}`,
              animation:
                `sprout-draw ${CYCLE}s ease-out ${TOTAL_MS + phaseMs}ms infinite` +
                `, sprout-fade ${CYCLE}s ease-in-out ${TOTAL_MS + phaseMs}ms infinite`,
            } as CSSProperties}
          />
        );
      })}
    </g>
  );
}

/** One branch + its sub-tree, wrapped in a self-similar sway group. */
function Branch({ node, sproutKeys }: { node: TreeNode; sproutKeys: Set<string> }) {
  const { x1, y1, x2, y2, depth, maxDepth, length, children } = node;
  const t        = depth / maxDepth;
  const opacity  = 0.6 + t * 0.4;
  const strokeW  = Math.max(1, depth * 0.9);
  const drawDelay = (maxDepth - depth) * STEP_MS;
  const drawDone = drawDelay + DRAW_MS;
  const dash     = length + 0.5;
  const isTip    = t <= 0.4;

  // Sway: amplitude grows toward the tips; period varies per branch (no RNG —
  // derived from geometry so server/client markup match) so the canopy drifts
  // out of phase and reads as wind, not a metronome.
  const amp = q(0.14 + (maxDepth - depth) * 0.16);          // degrees
  const dur = q(4.2 + (depth % 3) * 0.5 + (Math.round(x2) % 5) * 0.3); // seconds

  const swayStyle: CSSProperties = {
    ["--amp" as keyof CSSProperties as string]: `${amp}deg`,
    transformOrigin: `${x1}px ${y1}px`,
    transformBox: "view-box",
    animation: `tree-sway ${dur}s ease-in-out ${TOTAL_MS}ms infinite`,
  } as CSSProperties;

  const pulse = isTip
    ? `, tree-tip-pulse 3.2s ease-in-out ${drawDone}ms infinite`
    : "";

  return (
    <g style={swayStyle}>
      <line
        x1={x1} y1={y1}
        x2={x2} y2={y2}
        stroke={colorFor(depth, maxDepth)}
        strokeWidth={strokeW}
        strokeOpacity={opacity}
        strokeLinecap="round"
        filter={isTip ? "url(#tip-glow)" : undefined}
        style={{
          strokeDasharray: dash,
          strokeDashoffset: dash,
          animation: `tree-grow ${DRAW_MS}ms ease-out ${drawDelay}ms forwards${pulse}`,
        }}
      />

      {/* Twinkling gold node at every terminal tip. Outer <g> fades it in
          once; inner <circle> twinkles forever (SVG opacity multiplies so the
          two never fight over the same property). */}
      {isTip && (
        <g filter="url(#tip-glow)" style={{ opacity: 0, animation: `fadeUp 0.7s ease ${drawDone}ms forwards` }}>
          <circle
            cx={x2}
            cy={y2}
            r={2.1}
            fill="#E2BE70"
            style={{ animation: `tree-twinkle ${q(2.6 + (Math.round(x2) % 5) * 0.45)}s ease-in-out ${drawDone}ms infinite` }}
          />
        </g>
      )}

      {/* A few tips sprout a tiny self-similar tree on a loop. Rendered inside
          this branch's sway group, so the sprout drifts with its parent tip. */}
      {isTip && sproutKeys.has(key(node)) && (
        <Sprout node={node} phaseMs={(Math.round(x2) % 6) * 1500} />
      )}

      {children.map((c, i) => (
        <Branch key={i} node={c} sproutKeys={sproutKeys} />
      ))}
    </g>
  );
}

interface FractalTreeHeroProps {
  /** Show the Mandelbrot pull-quote below the tree. Off by default. */
  quote?: boolean;
}

export default function FractalTreeHero({ quote = false }: FractalTreeHeroProps) {
  const tree = useMemo(
    () => buildTree(300, 290, 0, 90, HERO_DEPTH, HERO_DEPTH, 26, 0.72),
    [],
  );

  // Pick a sparse, evenly-spread set of tips to sprout micro-trees from.
  const sproutKeys = useMemo(() => {
    if (!tree) return new Set<string>();
    const leaves = flatten(tree).filter((n) => n.children.length === 0);
    const set = new Set<string>();
    for (let i = 0; i < leaves.length; i += 9) set.add(key(leaves[i]));
    return set;
  }, [tree]);

  if (!tree) return null;

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
          animation: `tree-breathe 6s ease-in-out ${TOTAL_MS}ms infinite`,
        }}
      >
        <defs>
          {/* Bloom for the gold tips — a soft blur merged under the crisp
              source so the canopy reads as lit points, not flat strokes. */}
          <filter id="tip-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="2.6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Warm radial backlight behind the canopy for depth. */}
          <radialGradient id="tree-backlight" cx="50%" cy="42%" r="55%">
            <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.22" />
            <stop offset="55%" stopColor="#C9A84C" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Backlight glow — fades in once the tree has drawn. */}
        <ellipse
          cx={300}
          cy={150}
          rx={250}
          ry={170}
          fill="url(#tree-backlight)"
          style={{ opacity: 0, animation: `fadeUp 1.4s ease ${TOTAL_MS}ms forwards` }}
        />

        <Branch node={tree} sproutKeys={sproutKeys} />
      </svg>
      </div>

      {quote && (
        <figure
          className="mt-4 sm:mt-5 max-w-md text-center px-4"
          style={{
            opacity: 0,
            animation: `fadeUp 0.8s ease ${TOTAL_MS}ms forwards`,
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
            style={{ color: "var(--bk-eyebrow)" }}
          >
            — Benoît Mandelbrot
          </figcaption>
        </figure>
      )}
    </div>
  );
}
