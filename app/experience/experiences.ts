// Shared catalogue of selected engagements. Rendered as cards on the
// /experience index; each `slug` has a fuller writeup at /experience/<slug>/.
export interface Experience {
  slug: string;
  sector: string;
  title: string;
  summary: string;
  tags: string[];
  period?: string;
}

export const experiences: Experience[] = [
  {
    slug: "time2fill",
    sector: "Staffing",
    period: "2027",
    title: "Time2Fill — vacancy fill forecasting",
    summary:
      "Daily forecasts of remaining time-to-fill for open vacancies, using survival models that update as the hiring process unfolds.",
    tags: ["Survival analysis", "Forecasting"],
  },
  {
    slug: "labourlens",
    sector: "Labour market",
    period: "2027",
    title: "LabourLens — labour-market dynamics",
    summary:
      "A market-dynamics model that reads external job-ad flow so delivery can see whether the labour market is tightening or easing.",
    tags: ["Market forecasting", "Job-ad demand"],
  },
  {
    slug: "climpact",
    sector: "Climate litigation",
    period: "2027",
    title: "Climpact — open-weight expert on climate trials",
    summary:
      "Fine-tuning open-weight models on a golden set of court trials so the project has a specialist reader, not a generic chatbot.",
    tags: ["Open-weight fine-tuning", "Golden set"],
  },
  {
    slug: "staffing-cltv-nbp",
    sector: "Staffing",
    period: "2024 – 2026",
    title: "B2B lifetime value & next-best-product recommender",
    summary:
      "Client-level value estimates with uncertainty, and a recommender for which service to propose next — built so the scores stay valid once they start shaping commercial action.",
    tags: ["Lifetime value", "Recommendation", "Causal inference"],
  },
  {
    slug: "automotive-nlp",
    sector: "Automotive",
    period: "2025",
    title: "NLP for unstructured operational text",
    summary:
      "Language-model pipelines that turn large volumes of unstructured text into structured signal for reporting and search.",
    tags: ["NLP", "Information extraction"],
  },
  {
    slug: "macro-scenario-simulation",
    sector: "Financial services",
    period: "2025",
    title: "Macroeconomic scenario simulation",
    summary:
      "Constrained optimisation over linked macroeconomic variables, so scenario work can ask what is feasible — not only what happens if.",
    tags: ["Optimisation", "Scenario analysis"],
  },
  {
    slug: "spark-pipeline-rearch",
    sector: "Data engineering",
    period: "2026",
    title: "Distributed ingest pipeline re-architecture",
    summary:
      "Moved a growing ingest pipeline off single-node processing onto a distributed engine so throughput scales with the data.",
    tags: ["Data engineering", "Spark"],
  },
  {
    slug: "air-pollution-hia",
    sector: "Public research",
    period: "2025 – 2026",
    title: "Air-pollution mortality Health Impact Assessment",
    summary:
      "Epidemiological assessment of mortality burden from urban air pollution under alternative traffic scenarios.",
    tags: ["Epidemiology", "Health impact assessment"],
  },
];
