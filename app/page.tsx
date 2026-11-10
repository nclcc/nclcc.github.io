import Link from "next/link";
import { Download, Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import FractalTreeHero from "@/components/FractalTreeHero";

const proofs = [
  {
    href: "/experience/time2fill/",
    eyebrow: "Staffing · 2027",
    title: "Time2Fill vacancy forecasts",
  },
  {
    href: "/experience/labourlens/",
    eyebrow: "Labour market · 2027",
    title: "LabourLens market dynamics",
  },
  {
    href: "/experience/climpact/",
    eyebrow: "Climate litigation · 2027",
    title: "Open-weight climate-trial expert",
  },
];

const explore = [
  {
    href: "/experience/",
    eyebrow: "Work",
    title: "Selected engagements",
    desc: "Quantitative modelling and data engineering across staffing, labour markets, research, and enterprise.",
  },
  {
    href: "/philosophy/",
    eyebrow: "Approach",
    title: "A philosophy of honest measurement",
    desc: "Six principles on why complexity demands different tools — and why convenience is not a virtue.",
  },
];

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-6 sm:pt-12 sm:pb-8 animate-fade-up">
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section id="about" className="mb-14">
        <h1
          className="font-serif text-3xl sm:text-4xl md:text-[2.75rem] font-semibold leading-[1.15] max-w-3xl"
          style={{ color: "var(--bk-green-dk)", letterSpacing: "-0.02em" }}
        >
          Models that take the inconvenient case seriously.
        </h1>
        <p
          className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed"
          style={{ color: "var(--bk-ink-mid)" }}
        >
          Extreme-value and causal work for systems where averages lie — finance, staffing, and public research.
        </p>

        <div className="mt-8">
          <FractalTreeHero quote />
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {proofs.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group block border rounded-md px-4 py-3.5 transition hover:shadow-sm"
              style={{ borderColor: "var(--bk-rule)", background: "var(--bk-cream-lt)" }}
            >
              <div className="flex items-start justify-between gap-2">
                <div
                  className="text-[10px] uppercase tracking-wider font-mono"
                  style={{ color: "var(--bk-eyebrow)" }}
                >
                  {p.eyebrow}
                </div>
                <ArrowUpRight
                  size={14}
                  className="mt-0.5 shrink-0 opacity-40 group-hover:opacity-100 transition"
                  style={{ color: "var(--bk-sienna)" }}
                />
              </div>
              <div
                className="mt-1.5 font-serif text-[15px] font-semibold leading-snug"
                style={{ color: "var(--bk-green-dk)" }}
              >
                {p.title}
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-6 text-base sm:text-lg leading-relaxed" style={{ color: "var(--bk-ink-mid)" }}>
          Most quantitative tooling assumes stationarity, finite variance, and independent shocks. The work I take
          on does not. Research runs through{" "}
          <a
            href="https://www.linkedin.com/company/complexalabs/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-1 underline-offset-2"
            style={{ color: "var(--bk-sienna)" }}
          >
            Complexa Labs
          </a>
          .
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="mailto:niciccarone@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition"
            style={{ background: "var(--bk-green)", color: "var(--bk-cream)" }}
          >
            <Mail size={16} /> Email
          </a>
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium border transition hover:bg-[var(--bk-cream-dk)]"
            style={{ borderColor: "var(--bk-rule)", color: "var(--bk-ink)" }}
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
        <hr className="hr-bk mb-6" />
        <h2
          className="font-serif text-2xl font-semibold mb-3"
          style={{ color: "var(--bk-green-dk)" }}
        >
          Get in touch
        </h2>
        <p className="text-sm leading-relaxed" style={{ color: "var(--bk-ink-mid)" }}>
          For consulting, research collaboration, or questions about the work:{" "}
          <a
            href="mailto:niciccarone@gmail.com"
            className="underline decoration-1 underline-offset-2"
            style={{ color: "var(--bk-sienna)" }}
          >
            niciccarone@gmail.com
          </a>
          .
        </p>
        <p className="mt-2 text-xs leading-relaxed" style={{ color: "var(--bk-ink-lt)" }}>
          Email is used to handle your enquiry. Non-client enquiries are deleted within 12 months of the last contact. Read the{" "}
          <Link href="/privacy/" className="underline underline-offset-4" style={{ color: "var(--bk-sienna)" }}>
            privacy notice / informativa privacy
          </Link>{" "}
          before writing.
        </p>
      </section>
    </div>
  );
}
