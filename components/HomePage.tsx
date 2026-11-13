import Link from "next/link";
import Image from "next/image";
import { Download, Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import FractalTreeHero from "@/components/FractalTreeHero";

const proofsEN = [
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

const exploreEN = [
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


const en = {
  proofs: proofsEN,
  explore: exploreEN,
  headline: "Models that take the inconvenient case seriously.",
  intro: "Extreme-value and causal work for systems where averages lie — finance, staffing, and public research.",
  method: "Most quantitative tooling assumes stationarity, finite variance, and independent shocks. The work I take on does not. Research runs through",
  download: "Download CV",
  contactTitle: "Get in touch",
  contactIntro: "For consulting, research collaboration, or questions about the work:",
  privacyIntro: "Email is used to handle your enquiry. Non-client enquiries are deleted within 12 months of the last contact. Read the",
  privacyLabel: "privacy notice / informativa privacy",
  beforeWriting: "before writing.",
};

const proofsIT = [
  {
    href: "/it/experience/time2fill/",
    eyebrow: "Risorse umane · 2027",
    title: "Time2Fill: previsioni sulle posizioni aperte",
  },
  {
    href: "/it/experience/labourlens/",
    eyebrow: "Mercato del lavoro · 2027",
    title: "LabourLens: dinamiche del mercato",
  },
  {
    href: "/it/experience/climpact/",
    eyebrow: "Contenzioso climatico · 2027",
    title: "Un modello a pesi aperti per i processi sul clima",
  },
];

const exploreIT = [
  {
    href: "/it/experience/",
    eyebrow: "Progetti",
    title: "Progetti selezionati",
    desc: "Modellazione quantitativa e ingegneria dei dati per risorse umane, mercato del lavoro, ricerca e imprese.",
  },
  {
    href: "/it/philosophy/",
    eyebrow: "Approccio",
    title: "Una filosofia della misurazione onesta",
    desc: "Sei principi sul perché la complessità richiede strumenti diversi — e la comodità non è una virtù.",
  },
];


const it = {
  proofs: proofsIT,
  explore: exploreIT,
  headline: "Modelli che prendono sul serio i casi scomodi.",
  intro: "Valori estremi e inferenza causale per sistemi in cui le medie ingannano — finanza, risorse umane e ricerca pubblica.",
  method: "La maggior parte degli strumenti quantitativi presuppone stazionarietà, varianza finita e shock indipendenti. Il mio lavoro parte da altre premesse. La ricerca passa da",
  download: "Scarica il CV",
  contactTitle: "Contattami",
  contactIntro: "Per consulenze, collaborazioni di ricerca o domande sul lavoro:",
  privacyIntro: "L’email viene utilizzata per gestire la richiesta. Le richieste che non diventano incarichi vengono eliminate entro 12 mesi dall’ultimo contatto. Leggi l’",
  privacyLabel: "informativa privacy",
  beforeWriting: "prima di scrivere.",
};

export default function HomePage({ italian = false }: { italian?: boolean }) {
  const copy = italian ? it : en;
  const { proofs, explore } = copy;
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-6 sm:pt-16 sm:pb-8 animate-fade-up">
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section id="about" className="mb-9 sm:mb-14">
        <h1
          className="font-serif text-3xl sm:text-4xl md:text-[3.5rem] font-medium leading-[1.08] max-w-3xl"
          style={{ color: "var(--hero-accent)", letterSpacing: "-0.02em" }}
        >
          {copy.headline}
        </h1>
        <p
          className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed"
          style={{ color: "var(--bk-ink-mid)" }}
        >
          {copy.intro}
        </p>

        <div className="mt-8">
          <FractalTreeHero quote italian={italian} />
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {proofs.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group block border rounded-md px-4 py-3.5 transition-colors hover:border-[var(--brass)]"
              style={{ borderColor: "var(--bk-rule)", background: "var(--bk-cream-lt)" }}
            >
              <div className="flex items-start justify-between gap-2">
                <div
                  className="text-xs sm:text-[10px] uppercase tracking-wider font-mono"
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
                className="mt-1.5 font-serif text-xl sm:text-[17px] font-semibold leading-snug"
                style={{ color: "var(--text-espresso)" }}
              >
                {p.title}
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-6 text-base sm:text-lg leading-relaxed" style={{ color: "var(--bk-ink-mid)" }}>
          {copy.method}{" "}
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

        <div className="home-actions mt-7 grid grid-cols-2 sm:flex sm:flex-wrap gap-3">
          <a
            href="mailto:niciccarone@gmail.com"
            className="primary-action inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition"
            style={{ background: "var(--bk-green)", color: "var(--action-foreground)" }}
          >
            <Mail size={16} /> Email
          </a>
          <a
            href={italian ? "/cv-it.pdf" : "/cv.pdf"}
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium border transition hover:bg-[var(--bk-cream-dk)]"
            style={{ borderColor: "var(--bk-rule)", color: "var(--hero-accent)" }}
          >
            <Download size={16} /> {copy.download}
          </a>
          <a
            href="https://www.linkedin.com/in/nicolociccarone1997/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium border transition hover:bg-[var(--bk-cream-dk)]"
            style={{ borderColor: "var(--bk-rule)", color: "var(--hero-accent)" }}
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href="https://github.com/nclcc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium border transition hover:bg-[var(--bk-cream-dk)]"
            style={{ borderColor: "var(--bk-rule)", color: "var(--hero-accent)" }}
          >
            <Github size={16} /> GitHub
          </a>
        </div>
      </section>

      <hr className="hr-bk" />

      {/* ── Explore — pathways to the philosophy & experience pages ──── */}
      <section className="mt-8 sm:mt-12 grid gap-4 sm:grid-cols-2">
        {explore.map((e) => (
          <Link
            key={e.href}
            href={e.href}
            className="group block border rounded-md p-5 transition-colors hover:border-[var(--brass)]"
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
      <section id="contact" className="mt-10 sm:mt-16">
        <hr className="hr-bk mb-6" />
        <div className="grid grid-cols-[minmax(0,1fr)_min(44vw,11rem)] sm:grid-cols-[8rem_minmax(0,1fr)] items-center sm:items-start gap-x-4 sm:gap-x-6 gap-y-3">
          <Image
            src="/nicolo-contact.webp"
            alt="Nicolò Ciccarone"
            width={640}
            height={585}
            sizes="(min-width: 640px) 128px, (min-width: 400px) 176px, 44vw"
            className="col-start-2 row-start-1 sm:col-start-1 sm:row-span-2 w-full sm:w-32 h-auto rounded-lg"
          />
          <div className="col-start-1 row-start-1 sm:col-start-2 min-w-0">
            <h2
              className="font-serif text-2xl font-semibold mb-3"
              style={{ color: "var(--bk-green-dk)" }}
            >
              {copy.contactTitle}
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--bk-ink-mid)" }}>
              {copy.contactIntro}{" "}
              <span className="whitespace-nowrap text-[11px] sm:text-sm">
                <a
                  href="mailto:niciccarone@gmail.com"
                  className="underline decoration-1 underline-offset-2"
                  style={{ color: "var(--bk-sienna)" }}
                >
                  niciccarone@gmail.com
                </a>.
              </span>
            </p>
          </div>
          <p className="col-span-2 sm:col-span-1 sm:col-start-2 text-sm sm:text-xs leading-relaxed" style={{ color: "var(--bk-ink-lt)" }}>
            {copy.privacyIntro}{" "}
            <Link href={italian ? "/it/privacy/" : "/privacy/"} className="underline underline-offset-4" style={{ color: "var(--bk-sienna)" }}>
              {copy.privacyLabel}
            </Link>{" "}
            {copy.beforeWriting}
          </p>
        </div>
      </section>
    </div>
  );
}
