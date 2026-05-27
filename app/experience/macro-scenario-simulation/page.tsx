import ExperienceLayout from "@/components/ExperienceLayout";

export const metadata = {
  title: "Macro scenario simulation framework · Nicolò Ciccarone",
};

export default function Page() {
  return (
    <ExperienceLayout
      client="Financial consultancy"
      sector="Financial services"
      title="Macroeconomic scenario simulation framework"
      role="Quantitative engineer"
      period="2022 – 2023"
    >
      <h2>The problem</h2>
      <p>
        The consultancy ran scenario-planning exercises for institutional clients across multiple
        planning horizons — short-term tactical, medium-term strategic, long-term structural. Each
        scenario involved <strong>500+ interdependent macroeconomic variables</strong> linked by
        accounting identities, equilibrium constraints, and policy levers. The existing tooling
        could simulate forward paths but could not <em>optimise</em> them: it could not answer
        &quot;under these constraints, what is the best feasible path for variable X?&quot;
      </p>

      <h2>Approach</h2>

      <h3>Framing as non-linear constrained optimisation</h3>
      <p>
        Each scenario was re-cast as a non-linear constrained optimisation problem over the joint
        trajectory of the 500+ variables across the simulation horizon. Constraints encoded the
        accounting identities, range bounds on policy levers, and equilibrium conditions; the
        objective encoded the client&apos;s planning preference (smoothing, target-hitting,
        risk-weighted cost).
      </p>

      <h3>Multi-solver architecture</h3>
      <p>
        No single solver handles every scenario well — gradient-based methods stall on
        non-differentiable cost surfaces, evolutionary methods are slow on smooth-but-large
        problems, and pure global searches are infeasible at this dimensionality. I built a
        solver-routing layer over three complementary engines:
      </p>
      <ul>
        <li>
          <strong>IPOPT</strong> for smooth, gradient-tractable formulations — the workhorse for
          most production scenarios. Sparse Jacobians and warm-starts kept it tractable at the
          500-variable scale.
        </li>
        <li>
          <strong>CMA-ES</strong> for non-smooth or noisy objective landscapes where local
          gradients lie about the true descent direction.
        </li>
        <li>
          <strong>Differential evolution</strong> for global exploration when local minima were a
          known risk — typically the first pass on a new scenario class, before warm-starting
          IPOPT.
        </li>
      </ul>

      <h3>Engineering for the analyst workflow</h3>
      <p>
        The framework was used directly by economists, not just by engineers. That shaped the
        interface: scenarios were declared in structured configuration rather than code; solver
        choice was automatic with sensible escape hatches; convergence diagnostics and constraint
        violations surfaced in human-readable form. The point was to let domain experts run
        rigorous optimisation without writing solver code.
      </p>

      <h2>Outcome</h2>
      <p>
        The consultancy went from forward-only simulation to genuine constrained-optimisation
        scenario design — supporting more sophisticated client engagements where the question was
        &quot;what is achievable&quot; rather than &quot;what happens if&quot;.
      </p>

      <h2>Stack</h2>
      <p>
        <strong>Python · IPOPT · CMA-ES · scipy.optimize (differential evolution) · NumPy ·
        sparse Jacobian tooling.</strong>
      </p>
    </ExperienceLayout>
  );
}
