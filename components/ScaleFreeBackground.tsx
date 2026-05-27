"use client";

import { useRef, useEffect } from "react";

/**
 * Animated scale-free network (Barabási–Albert) used as a subtle backdrop.
 * Adapted from the Complexa Labs platform — light-palette only here, since
 * the personal site has a single (cream) theme.
 */

const N_NODES = 90;
const M_ATTACH = 2;
const SEED_SIZE = 6;

interface Node { x: number; y: number; vx: number; vy: number; degree: number }
interface Edge { a: number; b: number }

function buildGraph(W: number, H: number): { nodes: Node[]; edges: Edge[] } {
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  const rndNode = (cx: number, cy: number, spread: number): Node => ({
    x: cx + (Math.random() - 0.5) * spread,
    y: cy + (Math.random() - 0.5) * spread,
    vx: (Math.random() - 0.5) * 0.18,
    vy: (Math.random() - 0.5) * 0.18,
    degree: 0,
  });

  for (let i = 0; i < SEED_SIZE; i++)
    nodes.push(rndNode(W * 0.5, H * 0.5, Math.min(W, H) * 0.25));

  for (let i = 0; i < SEED_SIZE; i++)
    for (let j = i + 1; j < SEED_SIZE; j++) {
      edges.push({ a: i, b: j });
      nodes[i].degree++;
      nodes[j].degree++;
    }

  for (let i = SEED_SIZE; i < N_NODES; i++) {
    nodes.push(rndNode(Math.random() * W, Math.random() * H, 0));
    const pool: number[] = [];
    for (let j = 0; j < i; j++)
      for (let k = 0; k < nodes[j].degree + 1; k++) pool.push(j);

    const targets = new Set<number>();
    let att = 0;
    while (targets.size < Math.min(M_ATTACH, i) && att++ < 400) {
      const pick = pool[Math.floor(Math.random() * pool.length)];
      if (!targets.has(pick)) targets.add(pick);
    }
    for (const t of targets) {
      edges.push({ a: i, b: t });
      nodes[i].degree++;
      nodes[t].degree++;
    }
  }

  return { nodes, edges };
}

// Brand-kit palette (dark mode — Complexa DWS-style)
const HUB =  { r: 201, g: 168, b:  76 };   // gold — high-degree hubs
const MID =  { r: 126, g: 168, b: 144 };   // muted teal — mid-degree
const LEAF = { r:  20, g:  61, b:  43 };   // dark green — peripheral, fades into bg

const rgba = (c: { r: number; g: number; b: number }, a: number) =>
  `rgba(${c.r},${c.g},${c.b},${a})`;

export default function ScaleFreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<{ nodes: Node[]; edges: Edge[]; t: number } | null>(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const g = buildGraph(W, H);
    stateRef.current = { ...g, t: 0 };

    function draw() {
      const s = stateRef.current;
      if (!s || !ctx) return;
      const { nodes, edges, t } = s;

      ctx.clearRect(0, 0, W, H);
      const maxDeg = nodes.reduce((m, n) => Math.max(m, n.degree), 1);

      // Edges
      for (const e of edges) {
        const na = nodes[e.a];
        const nb = nodes[e.b];
        ctx.beginPath();
        ctx.moveTo(na.x, na.y);
        ctx.lineTo(nb.x, nb.y);
        ctx.strokeStyle = rgba(MID, 0.18);
        ctx.lineWidth = 0.7;
        ctx.stroke();
      }

      // Nodes
      for (const n of nodes) {
        const norm = n.degree / maxDeg;
        const r = 2 + norm * 9;
        const pulse = norm > 0.5 ? 1 + 0.12 * Math.sin(t * 0.025 + n.x * 0.01) : 1;
        const rr = r * pulse;
        const col = norm > 0.58 ? HUB : norm > 0.22 ? MID : LEAF;

        if (norm > 0.5) {
          const gr = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, rr * 4);
          gr.addColorStop(0, rgba(HUB, 0.35));
          gr.addColorStop(1, rgba(HUB, 0));
          ctx.beginPath();
          ctx.arc(n.x, n.y, rr * 4, 0, Math.PI * 2);
          ctx.fillStyle = gr;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, rr, 0, Math.PI * 2);
        ctx.fillStyle = rgba(col, norm > 0.5 ? 0.85 : 0.55);
        ctx.fill();
      }

      // Drift
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      }
      s.t++;
    }

    function loop() {
      draw();
      rafRef.current = requestAnimationFrame(loop);
    }
    rafRef.current = requestAnimationFrame(loop);

    function onResize() {
      W = window.innerWidth;
      H = window.innerHeight;
      if (!canvas) return;
      canvas.width = W;
      canvas.height = H;
      const g2 = buildGraph(W, H);
      stateRef.current = { ...g2, t: 0 };
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.7,
      }}
    />
  );
}
