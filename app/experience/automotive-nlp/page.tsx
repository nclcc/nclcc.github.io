import ExperienceLayout from "@/components/ExperienceLayout";

export const metadata = {
  title: "Automotive NLP · Nicolò Ciccarone",
};

export default function Page() {
  return (
    <ExperienceLayout
      client="Global automotive retail software provider"
      sector="Automotive SaaS"
      title="Enterprise-scale NLP for unstructured text"
      role="NLP engineer"
      period="2023 – 2024"
    >
      <h2>The problem</h2>
      <p>
        Automotive retail platforms accumulate enormous volumes of unstructured text — customer
        communications, service notes, dealer feedback, after-sales reports — that the operating
        teams could not query systematically. Reporting and analytics workflows treated this corpus
        as opaque, even though it contained the highest-resolution signal on customer intent, dealer
        performance, and product issues anywhere in the data estate.
      </p>

      <h2>Approach</h2>

      <h3>Modern language-model techniques, applied pragmatically</h3>
      <p>
        I built an NLP layer that extracted structured signal from the corpus using modern
        language-model techniques — instruction-tuned transformers and embedding pipelines —
        engineered around the operational constraints of an enterprise SaaS environment: latency
        budgets, deterministic outputs where needed, audit trails, and bounded cost per document.
      </p>

      <h3>Information extraction at scale</h3>
      <ul>
        <li>
          Domain-specific entity and relation extraction (vehicles, parts, service codes, dealer
          identifiers, customer-intent categories) that respected the client&apos;s existing
          taxonomies rather than imposing model-internal ones.
        </li>
        <li>
          Semantic search over the document base via embedding indices, with hybrid retrieval
          (BM25 + dense) tuned for the recall–precision tradeoffs that the analytics use cases
          actually required.
        </li>
        <li>
          Structured output validation so downstream pipelines could rely on schema-conformant
          extractions instead of free-text post-processing.
        </li>
      </ul>

      <h3>Production hardening</h3>
      <p>
        The pipeline ran across the client&apos;s production data estate — millions of documents,
        multi-tenant — with the usual concerns: prompt-injection resistance for any text routed
        through LLM components, deterministic re-runs for compliance, telemetry on extraction
        confidence, and cost guardrails on the LLM spend.
      </p>

      <h2>Outcome</h2>
      <p>
        Analytics workflows that previously could not touch the unstructured tier of the data
        estate gained first-class access to it — opening up customer-intent dashboards, dealer
        quality signals, and after-sales pattern detection on data that had been effectively
        dark.
      </p>

      <h2>Stack</h2>
      <p>
        <strong>Python · transformers · vector indices · hybrid retrieval · structured prompting ·
        cloud-native deployment.</strong>
      </p>
    </ExperienceLayout>
  );
}
