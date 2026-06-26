// Shared catalogue of selected engagements. Rendered as cards on the
// /experience index; each `slug` has a fuller writeup at /experience/<slug>/.
export interface Experience {
  slug: string;
  client: string;
  sector: string;
  title: string;
  summary: string;
  tags: string[];
}

export const experiences: Experience[] = [
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
