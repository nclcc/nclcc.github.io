import type { Metadata } from "next";
import ExperienceCard from "@/components/it/ExperienceCard";
import { experiences } from "./experiences";

export const metadata: Metadata = {
  title: "Progetti selezionati — Nicolò Ciccarone",
  description:
    "Direzione tecnica, sviluppo completo del prodotto, modellazione quantitativa e ingegneria dei dati per marketplace di eventi, risorse umane, mercato del lavoro, ricerca sul contenzioso climatico, servizi finanziari, SaaS automotive e ricerca pubblica.",
};

export default function ExperienceIndex() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 animate-fade-up">
      <div
        className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-mono mb-3"
        style={{ color: "var(--bk-eyebrow)" }}
      >
        Progetti
      </div>
      <h1
        className="font-serif text-3xl sm:text-4xl font-semibold leading-tight"
        style={{ color: "var(--bk-green-dk)", letterSpacing: "-0.01em" }}
      >
        Progetti selezionati
      </h1>
      <p className="mt-3 mb-8 leading-relaxed max-w-2xl" style={{ color: "var(--bk-ink-mid)" }}>
        Direzione tecnica, sviluppo completo del prodotto, modellazione quantitativa e ingegneria dei dati per marketplace di eventi, risorse umane, mercato del lavoro, ricerca sul contenzioso climatico, servizi finanziari, SaaS automotive e ricerca pubblica.
        Ogni scheda apre un approfondimento.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {experiences.map((e) => (
          <ExperienceCard key={e.slug} {...e} />
        ))}
      </div>
    </div>
  );
}
