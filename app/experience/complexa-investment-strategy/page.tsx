import ExperienceLayout from "@/components/ExperienceLayout";

export const metadata = {
  title: "Complexa adaptive trading engine · Nicolò Ciccarone",
};

export default function Page() {
  return (
    <ExperienceLayout
      client="Complexa Labs"
      sector="Quantitative finance — in-house"
      title="Adaptive regime-aware trading engine"
      role="Designer & lead engineer"
      period="2025 – present"
    >
      <h2>What it is</h2>
      <p>
        Complexa Labs&apos; in-house investment platform: an adaptive trading engine built on
        fractal and extreme-value statistics. The system observes each instrument through a
        multi-scale measurement stack, classifies its current statistical regime, and runs a
        portfolio of regime-gated strategies whose weights update online from realised
        performance.
      </p>
      <p>
        Three commitments distinguish it from conventional algorithmic platforms:
      </p>
      <ul>
        <li>
          <strong>Measure complexity, not just price.</strong> The engine detects regime shifts
          and volatility clustering at multiple time-scales rather than fitting a single
          trend-or-mean-reversion model at one horizon.
        </li>
        <li>
          <strong>Strategies are regime-gated.</strong> Directional strategies downsize or
          disengage when the engine detects stressed or transitioning conditions.
        </li>
        <li>
          <strong>Allocation updates online.</strong> The portfolio framework learns from its own
          live history which strategies earn their keep in which regimes, and rebalances
          accordingly.
        </li>
      </ul>

      <h2>The measurement layer</h2>
      <p>
        Each instrument is observed through a sensor stack that decomposes its behaviour at
        three speeds:
      </p>
      <ul>
        <li>
          <strong>Character (slow).</strong> Mean-reverting vs trending, smooth vs rough
          volatility, thin vs fat tails — properties that drift on weekly-to-monthly timescales.
        </li>
        <li>
          <strong>State (fast).</strong> A regime classification with calibrated confidence,
          plus a structural-break detector that flags when the model and the data start to
          disagree.
        </li>
        <li>
          <strong>Forecast.</strong> Conditional volatility and Value-at-Risk over the relevant
          forward horizon, used by every sizing decision downstream.
        </li>
        <li>
          <strong>Cross-asset structure.</strong> Which instruments lead or lag under stress,
          and which share their regime.
        </li>
      </ul>

      <h3>Why regimes, not prices</h3>
      <p>
        The bet behind the architecture is statistical: regimes are persistent (calm markets stay
        calm for weeks; crises stay crises for weeks), whereas individual price moves are mostly
        noise. Predicting regimes is a tractable problem; predicting prices directly is not.
      </p>

      <h2>Methodology</h2>
      <p>
        The methodological backbone draws on three traditions that complement each other when
        markets refuse to behave:
      </p>
      <ul>
        <li>
          <strong>Multifractal cascade models</strong> for capturing volatility dynamics across
          timescales — a natural fit when standard GARCH-family models break under heavy tails
          and long memory.
        </li>
        <li>
          <strong>Extreme value statistics</strong> for tail risk, drawdown forecasting, and the
          regime transitions that ordinary Gaussian assumptions miss.
        </li>
        <li>
          <strong>Bayesian online learning</strong> for the weight-allocation layer — updating
          beliefs about which strategies are working as new evidence arrives, with explicit
          uncertainty quantification.
        </li>
      </ul>

      <h2>Stack</h2>
      <p>
        <strong>Python · NumPy · scipy · custom regime-detection and filtering implementations ·
        Bayesian online learning · FastAPI for the partner interface · Next.js front end.</strong>
      </p>
    </ExperienceLayout>
  );
}
