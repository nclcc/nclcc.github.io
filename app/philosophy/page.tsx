import type { Metadata } from "next";
import PhilosophyTabs from "@/components/PhilosophyTabs";

export const metadata: Metadata = {
  title: "A philosophy of honest measurement — Nicolò Ciccarone",
  description:
    "Why complexity demands different tools, and why convenience is not a virtue in quantitative analysis. Six principles that shape every engagement.",
};

export default function PhilosophyPage() {
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
        A philosophy of honest measurement
      </h1>
      <p className="mt-3 mb-8 leading-relaxed max-w-2xl" style={{ color: "var(--bk-ink-mid)" }}>
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
    </div>
  );
}
