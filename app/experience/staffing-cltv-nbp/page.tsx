import ExperienceLayout from "@/components/ExperienceLayout";

export const metadata = {
  title: "B2B staffing — CLTV pipeline & NBP recommender · Nicolò Ciccarone",
};

export default function Page() {
  return (
    <ExperienceLayout
      client="€3B+ European staffing group"
      sector="Staffing"
      title="B2B customer segmentation & next-best-product recommender"
      role="Lead quantitative engineer"
      period="2024 – present"
    >
      <h2>The problem</h2>
      <p>
        The client serves tens of thousands of B2B accounts across temporary staffing, permanent placement,
        outsourcing, training, and HR consulting. The commercial organisation was operating on
        sector-and-headcount heuristics: rules of thumb that grouped clients into segments without any
        principled estimate of how much each relationship would actually be worth, how long it would last,
        or which adjacent service should be offered next.
      </p>
      <p>
        Two interlocking deliverables came out of the engagement: a <strong>customer lifetime value pipeline</strong>{" "}
        that put a calibrated number — with uncertainty — on every active client, and a{" "}
        <strong>next-best-product recommender</strong> built on the power-law causal framework developed at
        Complexa Labs that decides which service to propose, to whom, and when.
      </p>

      <h2>1 · The CLTV pipeline</h2>

      <h3>Mixture cure survival</h3>
      <p>
        Standard survival models assume every client eventually churns. In B2B staffing this is wrong: a
        meaningful share of clients form indefinitely-active relationships, and forcing a Weibull or
        Cox model onto them inflates churn risk and depresses LTV across the entire book. A{" "}
        <strong>mixture cure model</strong> separates two latent populations — the &quot;cured&quot; clients who
        are functionally permanent and the &quot;susceptible&quot; clients who will churn on a estimable
        timeline — and fits both jointly. This gave the commercial team two numbers per client (cure
        probability and conditional survival curve) instead of one opaque churn score.
      </p>

      <h3>Quantile regression for margin uncertainty</h3>
      <p>
        Average-margin point estimates are the wrong object when sales decisions are loss-averse. We fit{" "}
        <strong>quantile regression</strong> across the margin distribution (10th / 50th / 90th percentile)
        per client and contract type. The commercial team now sees a margin <em>band</em> rather than a
        single number — and can decide whether to chase a deal based on its downside, not just its mean.
      </p>

      <h3>GBM ensembles for cross-sell propensity</h3>
      <p>
        Gradient-boosted ensembles (LightGBM, with monotone constraints on a handful of intuitive features
        and cluster-bootstrap confidence intervals) generate per-product propensity scores from billing
        history, placement counts, sector, and macro indicators. These feed the segmentation layer and
        seed the NBP recommender below.
      </p>

      <h3>Calibrated A/B testing framework</h3>
      <p>
        A bespoke experimentation harness sits on top of the modelling stack:
      </p>
      <ul>
        <li>
          <strong>Stratified re-randomisation</strong> on a balance score over pre-treatment covariates,
          eliminating the chance imbalance that plagues simple Bernoulli assignment in heavy-tailed B2B
          panels.
        </li>
        <li>
          <strong>CATE analysis</strong> via causal forests on the resulting experiments — so we recover
          not just average treatment effects but the conditional heterogeneity that justifies (or kills)
          a roll-out decision.
        </li>
        <li>
          Power calculations grounded in the historical client variance, so experiments are sized to detect
          economically meaningful effects rather than statistically convenient ones.
        </li>
      </ul>

      <h2>2 · The next-best-product recommender</h2>

      <p>
        The second deliverable extends segmentation into <em>recommendation</em>: given a client&apos;s
        current state, which service should the salesforce propose next? Off-the-shelf propensity scorers
        fail in this setting for four reasons — statelessness, no sequential dynamics, confounding of
        correlation with causation, and the deployment-feedback loop in which the recommender itself
        becomes part of the data-generating process.
      </p>

      <h3>Grounded in the Complexa Labs causal framework</h3>
      <p>
        The recommender is an applied instantiation of the power-law causal framework developed at
        Complexa Labs. Each client carries a latent vector of <strong>need intensities</strong> across the
        product portfolio. Purchase events enter as <strong>exogenous causal shocks</strong> through a
        structured matrix <code>B</code>, whose non-zero entries encode genuine cross-product mechanisms
        (e.g. temporary staffing → training, recruitment → outplacement) rather than the spurious
        co-occurrence that confounds correlation-based scorers.
      </p>

      <h3>Causal identification offline</h3>
      <p>
        The non-zero entries of <code>B</code> are identified offline through quasi-experimental designs,
        not through joint maximum-likelihood (which would re-confound them):
      </p>
      <ul>
        <li>
          <strong>Staggered Callaway–Sant&apos;Anna difference-in-differences</strong> for most cross-product
          edges, using the natural rollout of products across clients as the source of identifying
          variation.
        </li>
        <li>
          <strong>Regression discontinuity</strong> on Italian labour-law headcount thresholds for the
          temp-to-outsourcing pathway, where statutory cutoffs generate sharp, exogenous shifts in
          contract-mix incentives.
        </li>
        <li>
          Each fitted edge carries a point estimate, a customer-cluster bootstrap confidence interval,
          a pre-trend diagnostic, and a status flag (<code>fixed</code>, <code>soft_prior</code>,{" "}
          <code>null</code>, <code>dropped</code>) so downstream consumers know how much to trust each
          pathway.
        </li>
        <li>
          A five-quantile <strong>tiered variant</strong> splits the same fit by client size, exposing
          effect heterogeneity that a global average would smear out.
        </li>
      </ul>

      <h3>Online inference</h3>
      <p>
        Client trajectories are tracked through a <strong>Rao–Blackwellised particle filter</strong> that
        samples the regression coefficients, latent state, and transition matrix jointly per particle —
        letting the causal pathways drift over time as the market evolves. The filter is built through a
        single calibrated entry point (<code>RBPFRecommender.from_calibration(...)</code>); every numerical
        knob is fit from data.
      </p>

      <h3>Why this matters in deployment</h3>
      <p>
        Because cross-product effects are identified causally rather than correlationally, the recommender{" "}
        <strong>remains valid once its scores start shaping sales actions</strong>. A correlational model
        degrades the moment it becomes part of the data-generating process; a causally-identified one does
        not.
      </p>

      <h2>Outcomes</h2>
      <ul>
        <li>
          A calibrated client-level LTV with explicit margin uncertainty replaces sector heuristics across
          the entire B2B book.
        </li>
        <li>
          The NBP recommender ships with a documented offline evaluation harness — including saturation
          adjustment, propensity-weighted lift estimates, and tier-conditional metrics — closing the loop
          between research and production.
        </li>
        <li>
          The methodology paper is published as a Complexa Labs working paper (
          <em>Causal State-Space Models for Next Best Product Recommendation</em>, 2026).
        </li>
      </ul>

      <h2>Stack</h2>
      <p>
        <strong>Python · Polars · NumPy · scikit-learn · LightGBM · scipy · statsmodels · custom particle filter ·
        Spark for ingest · MongoDB / Azure for storage · FastAPI + Celery for serving.</strong>
      </p>
    </ExperienceLayout>
  );
}
