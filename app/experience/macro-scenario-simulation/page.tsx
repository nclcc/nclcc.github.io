import ExperienceLayout from "@/components/ExperienceLayout";

export const metadata = {
  title: "Macroeconomic scenario simulation · Nicolò Ciccarone",
};

export default function Page() {
  return (
    <ExperienceLayout
      sector="Financial services"
      title="Macroeconomic scenario simulation"
      role="Quantitative engineer"
      period="2025"
    >
      <h2>The problem</h2>
      <p>
        Scenario work could simulate forward paths of linked macroeconomic variables. It
        could not ask, under a set of constraints, what feasible path is best.
      </p>

      <h2>Approach</h2>
      <p>
        Recast each scenario as constrained non-linear optimisation, with a solver layer
        that can handle both smooth and awkward objective surfaces, and an interface that
        domain experts can run without writing solver code.
      </p>

      <h2>Outcome</h2>
      <p>
        Scenario design that answers &quot;what is achievable&quot; rather than only
        &quot;what happens if&quot;.
      </p>
    </ExperienceLayout>
  );
}
