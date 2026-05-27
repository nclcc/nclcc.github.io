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
        Complexa Labs&apos; in-house investment platform: an adaptive trading engine that watches
        financial markets through a multi-sensor measurement stack, classifies each instrument
        into a statistical regime, and runs a portfolio of regime-gated strategies whose weights
        update online from realised performance. The system is built around three commitments
        that distinguish it from conventional algorithmic platforms:
      </p>
      <ul>
        <li>
          <strong>Measure complexity, not just price.</strong> The engine detects regime shifts
          and volatility clustering at multiple time-scales rather than fitting a single
          trend-or-mean-reversion model at one horizon.
        </li>
        <li>
          <strong>Strategies are regime-gated.</strong> A mean-reversion template refuses to act
          in a crisis regime; a trend template downsizes when the engine anticipates an imminent
          transition. The engine does the judgment, the strategy does the execution.
        </li>
        <li>
          <strong>Weights update online, conditional on regime.</strong> The portfolio framework
          learns from its own live history which strategy earns its keep in which regime, and
          rebalances accordingly.
        </li>
      </ul>

      <h2>The measurement layer</h2>
      <p>
        Each instrument is observed through a sensor stack that decomposes its behaviour at three
        speeds:
      </p>
      <ul>
        <li>
          <strong>Character (slow).</strong> Mean-reverting vs trending, smooth vs rough
          volatility, thin vs fat tails — properties that drift on weekly-to-monthly timescales.
        </li>
        <li>
          <strong>State (fast).</strong> A four-regime classification (calm, restructuring,
          crisis, crisis-unstable) with calibrated confidence, plus a structural-break detector
          that flags when the model and the data start to disagree.
        </li>
        <li>
          <strong>Forecast.</strong> Conditional volatility and Value-at-Risk over the relevant
          forward horizon, used by every sizing decision downstream.
        </li>
        <li>
          <strong>Cross-asset structure.</strong> Which instruments lead or lag under stress, and
          which share their regime.
        </li>
      </ul>

      <h3>How regimes are inferred</h3>
      <p>
        The engine fits a <strong>Liu multivariate Markov-Switching Multifractal (MSM)</strong>{" "}
        model to capture cascade dynamics across timescales, with an{" "}
        <strong>Unscented Kalman Filter</strong> tracking the cascade hyperparameters as they
        drift. A regime classifier then maps the joint sensor state onto the four-regime
        partition. The bet behind the architecture is statistical: regimes are persistent (calm
        markets stay calm for weeks; crises stay crises for weeks), whereas individual price moves
        are mostly noise. Predicting regimes is a tractable problem; predicting prices directly is
        not.
      </p>

      <h2>The strategy catalogue</h2>
      <p>
        Thirteen strategy templates sit on top of the measurement layer. They are not
        alternatives — most run simultaneously, each operating in the regimes where it has a
        documented edge:
      </p>
      <ul>
        <li>Regime-conditional mean reversion and trend following.</li>
        <li>Volatility-state arbitrage and the short-variance harvester (regime-gated VRP).</li>
        <li>Contagion-aware hedging and the tail-risk overlay.</li>
        <li>Regime-transition fade and regime-transition gamma.</li>
        <li>Cross-asset pairs / statistical arbitrage and cross-sectional momentum.</li>
        <li>Carry, Hurst-conditional horizon selection, volatility-targeted portfolio construction.</li>
      </ul>

      <h3>Online weight allocation</h3>
      <p>
        Each strategy carries a <strong>Methodology Fit Score (MFS)</strong> — a Bayesian online
        estimate of how well it has been performing in the current regime, accounting for
        diversification with the rest of the book and for cost erosion at the executed scale. The
        portfolio framework allocates capital toward strategies whose composite MFS is currently
        high, with diversification clustering to prevent crowded bets. Hard filters cut any
        strategy whose realised performance falls outside its regime-conditional confidence band.
      </p>

      <h2>System architecture</h2>
      <p>
        The platform is organised as eight layers, each with a single responsibility:
      </p>
      <ul>
        <li><strong>Data layer</strong> — ingest, validate, store market and reference data.</li>
        <li><strong>Selection layer</strong> — apply MFS scoring and diversification clustering.</li>
        <li><strong>Engine layer</strong> — fit MSM/UKF/classifier; emit sensor readings.</li>
        <li><strong>Strategy layer</strong> — evaluate the thirteen templates against the readings.</li>
        <li><strong>Risk layer</strong> — gross/net limits, VaR caps, regime-conditional sizing.</li>
        <li><strong>Execution layer</strong> — broker integration, order routing, slippage controls.</li>
        <li><strong>Operations & monitoring</strong> — health checks, structured logs, anomaly alerts.</li>
        <li><strong>Partner interface</strong> — the trust-gradient controls below.</li>
      </ul>

      <h3>The trust gradient</h3>
      <p>
        The partner interface implements an explicit gradient between observation-only and fully
        automated operation. A design partner can start in <strong>observe mode</strong> (the
        engine surfaces signals, no orders are placed), progress to{" "}
        <strong>approval mode</strong> (each order requires human confirmation), and ultimately to{" "}
        <strong>auto-execution</strong> for any subset of strategies whose live track record
        warrants it. The gradient is not a UI flourish; it is the safety contract.
      </p>

      <h2>Connection to the broader Complexa framework</h2>
      <p>
        The trading engine is the financial-markets instantiation of the same power-law causal
        framework that underpins the rest of Complexa Labs&apos; work — political stability
        monitoring, climate-systems analysis, biological cascade dynamics. The mathematical
        backbone (multifractal cascades, regime detection, scale-conditional inference) is
        shared; the domain adapters change.
      </p>

      <h2>Status</h2>
      <p>
        Pre-implementation planning is complete (Phase 0). The engine, strategy catalogue, MFS
        scoring, and trust-gradient design are documented in the internal planning artifact{" "}
        <em>Complexa Trading Engine — Strategies and System Architecture</em> (Complexa Labs,
        2026). Build is now in progress.
      </p>

      <h2>Stack</h2>
      <p>
        <strong>Python · NumPy · scipy · custom MSM / UKF implementations · regime classifier
        with calibrated confidence · Bayesian online learning · FastAPI for the partner
        interface · Next.js front end.</strong>
      </p>
    </ExperienceLayout>
  );
}
