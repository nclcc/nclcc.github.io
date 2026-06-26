import Link from "next/link";
import { Download, Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import FractalTreeHero from "@/components/FractalTreeHero";

// Pathways from the landing page into the two main sections, now their own
// pages (/philosophy, /experience) rather than sections of this scroll.
const explore = [
  {
    href: "/philosophy/",
    eyebrow: "Approach",
    title: "A philosophy of honest measurement",
    desc: "Six principles on why complexity demands different tools — and why convenience is not a virtue.",
  },
  {
    href: "/experience/",
    eyebrow: "Work",
    title: "Selected engagements",
    desc: "Quantitative modelling and data engineering for enterprise clients across four sectors.",
  },
];

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 animate-fade-up">
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section id="about" className="mb-14">
        {/* Tagline is sized + width-constrained to match the tree panel
            beneath it, so it reads as a cap over the symbol rather than a
            free-floating line across the full content column. */}
        <p
          className="max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto text-center text-base sm:text-lg md:text-xl uppercase tracking-[0.1em] sm:tracking-[0.15em] font-mono mb-5 sm:mb-6 leading-snug"
          style={{ color: "var(--bk-eyebrow)", overflowWrap: "anywhere" }}
        >
          Quantitative modelling · Data engineering · Extreme value theory · Causal inference
        </p>

        {/* Landing symbol — self-drawing tree + Mandelbrot quote, naming the
            site's thesis: simple recursive rules generating complex outcomes. */}
        <FractalTreeHero quote />

        <p className="mt-3 text-base sm:text-lg leading-relaxed" style={{ color: "var(--bk-ink-mid)" }}>
          We build quantitative models and data systems for enterprise clients across financial services,
          staffing, and public research.
        </p>

        <ul className="mt-4 space-y-3 text-base sm:text-lg leading-relaxed" style={{ color: "var(--bk-ink-mid)" }}>
          {[
            <>
              Rooted in <strong style={{ color: "var(--bk-green-dk)" }}>fractal theory</strong> and{" "}
              <strong style={{ color: "var(--bk-green-dk)" }}>extreme value theory</strong> — the mathematics of
              self-similarity across scales, heavy tails, and the rare events that disproportionately drive outcomes
              in complex systems.
            </>,
            <>
              Most quantitative tooling is built for the convenient case: stationarity, finite variance, and
              independent shocks.
            </>,
            <>
              The models we build take the inconvenient case seriously instead — and the systems they live inside
              survive deployment because of it.
            </>,
            <>
              Most of our research runs through{" "}
              <a
                href="https://www.linkedin.com/company/complexalabs/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-1 underline-offset-2"
                style={{ color: "var(--bk-sienna)" }}
              >
                Complexa Labs
              </a>
              , our research vehicle for quantitative work on complex systems.
            </>,
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span aria-hidden className="mt-px shrink-0 font-mono" style={{ color: "var(--bk-green)" }}>
                ›
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition"
            style={{ background: "var(--bk-green)", color: "var(--bk-cream)" }}
          >
            <Download size={16} /> Download CV
          </a>
          <a
            href="https://www.linkedin.com/in/nicolociccarone1997/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium border transition hover:bg-[var(--bk-cream-dk)]"
            style={{ borderColor: "var(--bk-rule)", color: "var(--bk-ink)" }}
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href="https://github.com/nclcc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium border transition hover:bg-[var(--bk-cream-dk)]"
            style={{ borderColor: "var(--bk-rule)", color: "var(--bk-ink)" }}
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="mailto:niciccarone@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium border transition hover:bg-[var(--bk-cream-dk)]"
            style={{ borderColor: "var(--bk-rule)", color: "var(--bk-ink)" }}
          >
            <Mail size={16} /> Email
          </a>
        </div>
      </section>

      <hr className="hr-bk" />

      {/* ── Explore — pathways to the philosophy & experience pages ──── */}
      <section className="mt-12 grid gap-4 sm:grid-cols-2">
        {explore.map((e) => (
          <Link
            key={e.href}
            href={e.href}
            className="group block border rounded-md p-5 transition hover:shadow-sm"
            style={{ borderColor: "var(--bk-rule)", background: "var(--bk-cream-lt)" }}
          >
            <div className="flex items-start justify-between gap-4">
              <div
                className="text-[10px] sm:text-xs uppercase tracking-wider font-mono mb-1"
                style={{ color: "var(--bk-eyebrow)" }}
              >
                {e.eyebrow}
              </div>
              <ArrowUpRight
                size={18}
                className="mt-0.5 opacity-40 group-hover:opacity-100 transition"
                style={{ color: "var(--bk-sienna)" }}
              />
            </div>
            <h2
              className="font-serif text-lg font-semibold leading-snug"
              style={{ color: "var(--bk-green-dk)" }}
            >
              {e.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--bk-ink-mid)" }}>
              {e.desc}
            </p>
          </Link>
        ))}
      </section>

      {/* ── Contact ────────────────────────────────────────────────── */}
      <section id="contact" className="mt-16">
        <hr className="hr-bk mb-8" />
        <h2
          className="font-serif text-2xl font-semibold mb-3"
          style={{ color: "var(--bk-green-dk)" }}
        >
          Get in touch
        </h2>
        <p style={{ color: "var(--bk-ink-mid)" }}>
          For consulting enquiries, research collaboration, or to discuss any of the engagements:{" "}
          <a
            href="mailto:niciccarone@gmail.com"
            className="underline decoration-1 underline-offset-2"
            style={{ color: "var(--bk-sienna)" }}
          >
            niciccarone@gmail.com
          </a>
          .
        </p>
      </section>
    </div>
  );
}
