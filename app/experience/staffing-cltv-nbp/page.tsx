import ExperienceLayout from "@/components/ExperienceLayout";

export const metadata = {
  title: "B2B lifetime value & next-best-product recommender · Nicolò Ciccarone",
};

export default function Page() {
  return (
    <ExperienceLayout
      sector="Staffing"
      title="B2B lifetime value & next-best-product recommender"
      role="Lead quantitative engineer"
      period="2024 – 2026"
    >
      <h2>The problem</h2>
      <p>
        Commercial teams were grouping B2B accounts on heuristics. They needed a principled
        view of how much a relationship was worth, how long it would last, and which
        adjacent service to propose next.
      </p>

      <h2>Approach</h2>
      <p>
        Two pieces of work: a customer-lifetime-value model with explicit uncertainty, and
        a next-best-product recommender. Cross-sell effects are identified causally rather
        than from co-occurrence, so the scores remain usable once they start shaping
        commercial action.
      </p>

      <h2>Outcome</h2>
      <p>
        Account-level value estimates replace sector rules of thumb, and the recommender
        ships with an offline evaluation harness rather than a hope that lift will appear
        in production.
      </p>
    </ExperienceLayout>
  );
}
