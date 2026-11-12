import type { Metadata } from "next";
import PhilosophyTabs from "@/components/it/PhilosophyTabs";

export const metadata: Metadata = {
  title: "Una filosofia della misurazione onesta — Nicolò Ciccarone",
  description:
    "Perché la complessità richiede strumenti diversi e la comodità non è una virtù nell’analisi quantitativa. Sei principi che guidano ogni incarico.",
};

export default function FilosofiaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 animate-fade-up">
      <div
        className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-mono mb-3"
        style={{ color: "var(--bk-eyebrow)" }}
      >
        Complexa Labs
      </div>
      <h1
        className="font-serif text-3xl sm:text-4xl font-semibold leading-tight"
        style={{ color: "var(--bk-green-dk)", letterSpacing: "-0.01em" }}
      >
        Una filosofia della misurazione onesta
      </h1>
      <p className="mt-3 mb-8 leading-relaxed max-w-2xl" style={{ color: "var(--bk-ink-mid)" }}>
        Perché la complessità richiede strumenti diversi — e la comodità non è una virtù nell’analisi quantitativa. Sei principi che guidano ogni incarico.
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
    </div>
  );
}
