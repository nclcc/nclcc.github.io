import Link from "next/link";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import ExperienceCard from "@/components/ExperienceCard";
import PhilosophyTabs from "@/components/PhilosophyTabs";
import FractalTreeHero from "@/components/FractalTreeHero";

const experiences = [
  {
    slug: "complexa-investment-strategy",
    client: "Complexa Labs",
    sector: "Quantitative finance — in-house",
    title: "Adaptive regime-aware trading engine",
    summary:
      "Designing and building an adaptive multi-strategy trading engine for Complexa Labs: a regime-classification stack rooted in multifractal cascades and extreme value statistics feeds a portfolio of regime-gated strategies whose weights update online via Bayesian learning.",
    tags: ["Regime detection", "Multifractal models", "Bayesian online learning", "Risk management"],
  },
  {
    slug: "staffing-cltv-nbp",
    client: "€3B+ staffing group",
    sector: "Staffing",
    title: "B2B customer segmentation & next-best-product recommender",
    summary:
      "End-to-end CLTV pipeline (mixture cure survival, quantile regression, GBM ensembles, calibrated A/B framework) followed by a causal state-space next-best-product recommender with cross-product effects identified via difference-in-differences and regression discontinuity.",
    tags: ["Survival analysis", "Causal inference", "DiD/RDD", "Particle filter", "A/B testing"],
  },
  {
    slug: "automotive-nlp",
    client: "Global automotive retail software provider",
    sector: "Automotive SaaS",
    title: "Enterprise-scale NLP for unstructured text",
    summary:
      "Applied modern language-model techniques to extract structure and insight from unstructured text across a global automotive retail platform.",
    tags: ["NLP", "LLMs", "Information extraction"],
  },
  {
    slug: "macro-scenario-simulation",
    client: "Financial consultancy",
    sector: "Financial services",
    title: "Macroeconomic scenario simulation framework",
    summary:
      "Non-linear constrained optimisation framework spanning 500+ interdependent variables across multiple planning horizons, integrating IPOPT, CMA-ES, and differential evolution solvers.",
    tags: ["IPOPT", "CMA-ES", "Differential evolution", "Scenario analysis"],
  },
  {
    slug: "spark-pipeline-rearch",
    client: "Enterprise data platform",
    sector: "Data engineering",
    title: "Pandas → Spark-native pipeline re-architecture",
    summary:
      "Re-architected a critical ingestion pipeline from pandas to Spark-native operations across a MongoDB/Azure environment, alongside production Python/PySpark microservices with FastAPI endpoints and Celery task orchestration.",
    tags: ["PySpark", "MongoDB", "Azure", "FastAPI", "Celery"],
  },
  {
    slug: "air-pollution-hia",
    client: "National research institute",
    sector: "Public research",
    title: "Mortality burden of air pollution — epidemiological HIA",
    summary:
      "Modelled PM10/PM2.5/NO₂ effects on mortality under traffic scenarios via Poisson and panel fixed-effects models; applied causal forest and Double ML to air-quality perception survey data.",
    tags: ["Epidemiology", "Panel models", "Causal forest", "Double ML"],
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
          style={{ color: "var(--bk-sienna)", overflowWrap: "anywhere" }}
        >
          Quantitative modelling · Data engineering · Extreme value theory · Causal inference
        </p>

        {/* Landing symbol — self-drawing tree + Mandelbrot quote, naming the
            site's thesis: simple recursive rules generating complex outcomes. */}
        <FractalTreeHero quote />

        <p className="mt-3 text-base sm:text-lg leading-relaxed" style={{ color: "var(--bk-ink-mid)" }}>
          We build quantitative models and data systems for enterprise clients across financial services,
          staffing, and public research. Our work is rooted in <strong style={{ color: "var(--bk-green-dk)" }}>fractal
          theory</strong> and <strong style={{ color: "var(--bk-green-dk)" }}>extreme value theory</strong> — the
          mathematics of self-similarity across scales, heavy tails, and the rare events that disproportionately drive
          outcomes in complex systems. Most quantitative tooling is built for the convenient case: stationarity,
          finite variance, independent shocks. The models we build take the inconvenient case seriously instead — and
          the systems they live inside survive deployment because of it. Most of our research runs through{" "}
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
        </p>

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

      {/* ── Philosophy ─────────────────────────────────────────────── */}
      <section id="philosophy" className="mt-12">
        <div
          className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-mono mb-3"
          style={{ color: "var(--bk-sienna)" }}
        >
          Complexa Labs
        </div>
        <h2
          className="font-serif text-3xl font-semibold leading-tight"
          style={{ color: "var(--bk-green-dk)", letterSpacing: "-0.01em" }}
        >
          A philosophy of honest measurement
        </h2>
        <p className="mt-3 mb-7 leading-relaxed max-w-2xl" style={{ color: "var(--bk-ink-mid)" }}>
          Why complexity demands different tools — and why convenience is not a virtue in
          quantitative analysis. Six principles that shape every engagement we take on.
        </p>

        <div
          className="rounded-md border p-4 sm:p-8"
          style={{
            background: "var(--bk-cream-lt)",
            borderColor: "var(--bk-rule)",
          }}
        >
          <PhilosophyTabs />
        </div>
      </section>

      <hr className="hr-bk mt-14" />

      {/* ── Experience ─────────────────────────────────────────────── */}
      <section id="experience" className="mt-12">
        <h2
          className="font-serif text-2xl font-semibold mb-2"
          style={{ color: "var(--bk-green-dk)" }}
        >
          Selected engagements
        </h2>
        <p className="text-sm mb-7" style={{ color: "var(--bk-ink-lt)" }}>
          Quantitative modelling and data engineering for enterprise clients across financial services,
          staffing, and public research. Each card opens a fuller writeup.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {experiences.map((e) => (
            <ExperienceCard key={e.slug} {...e} />
          ))}
        </div>
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
          For consulting enquiries, research collaboration, or to discuss any of the engagements above:{" "}
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
