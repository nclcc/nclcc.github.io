import type { Metadata } from "next";
import ExperienceCard from "@/components/ExperienceCard";
import { experiences } from "./experiences";

export const metadata: Metadata = {
  title: "Selected engagements — Nicolò Ciccarone",
  description:
    "Quantitative modelling and data engineering engagements for enterprise clients across financial services, staffing, automotive SaaS, and public research.",
};

export default function ExperienceIndex() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 animate-fade-up">
      <div
        className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-mono mb-3"
        style={{ color: "var(--bk-eyebrow)" }}
      >
        Work
      </div>
      <h1
        className="font-serif text-3xl sm:text-4xl font-semibold leading-tight"
        style={{ color: "var(--bk-green-dk)", letterSpacing: "-0.01em" }}
      >
        Selected engagements
      </h1>
      <p className="mt-3 mb-8 leading-relaxed max-w-2xl" style={{ color: "var(--bk-ink-mid)" }}>
        Quantitative modelling and data engineering for enterprise clients across financial services,
        staffing, automotive SaaS, and public research. Each card opens a fuller writeup.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {experiences.map((e) => (
          <ExperienceCard key={e.slug} {...e} />
        ))}
      </div>
    </div>
  );
}
