import ExperienceLayout from "@/components/ExperienceLayout";

export const metadata = {
  title: "Air pollution Health Impact Assessment · Nicolò Ciccarone",
};

export default function Page() {
  return (
    <ExperienceLayout
      client="National research institute"
      sector="Public research — epidemiology"
      title="Mortality burden of air pollution — Health Impact Assessment"
      role="Quantitative researcher"
      period="2021 – 2022"
    >
      <h2>The problem</h2>
      <p>
        The institute needed a rigorous quantification of the mortality burden attributable to
        urban air pollution — specifically PM10, PM2.5, and NO₂ — under counterfactual traffic
        scenarios. The output had to be defensible to policy stakeholders and methodologically
        consistent with the epidemiological Health Impact Assessment (HIA) literature.
      </p>

      <h2>Approach</h2>

      <h3>The HIA backbone</h3>
      <p>
        The standard HIA pipeline links exposure-response functions from cohort studies to
        population-level exposure distributions and baseline mortality rates, yielding{" "}
        <strong>attributable fractions</strong> and counterfactual mortality counts under
        scenario perturbations. I implemented this end-to-end with traceable assumptions —
        every concentration–response coefficient, every baseline rate, every population stratum
        could be inspected, swapped, and re-run.
      </p>

      <h3>Statistical modelling of pollutant effects</h3>
      <ul>
        <li>
          <strong>Poisson regression</strong> for count outcomes — the workhorse for mortality
          counts at the area-period level, with overdispersion handled where the variance
          inflation justified it.
        </li>
        <li>
          <strong>Panel fixed-effects models</strong> exploiting within-unit variation across
          time, controlling for unobserved area-level confounders that would otherwise bias
          naive cross-sectional estimates.
        </li>
        <li>
          Traffic-scenario counterfactuals translated into pollutant exposure shifts via the
          institute&apos;s atmospheric dispersion outputs, then propagated through the
          attributable-fraction machinery.
        </li>
      </ul>

      <h3>Causal methods on the perception survey</h3>
      <p>
        Beyond the mortality work, the institute had a large-scale air-quality{" "}
        <strong>perception survey</strong> — what citizens believed about local air quality and
        how that belief drove behaviour. Naively regressing perception on measured pollutant
        levels conflates the genuine effect with confounders like media exposure, socioeconomic
        status, and area-level priors. I applied:
      </p>
      <ul>
        <li>
          <strong>Causal forests</strong> to recover heterogeneous treatment effects across
          respondent subgroups — surfacing where the link between objective pollution and
          perceived pollution diverged most strongly.
        </li>
        <li>
          <strong>Double/debiased Machine Learning (Double ML)</strong> for the average treatment
          effect under high-dimensional confounding controls — the orthogonalisation step
          letting flexible nuisance models (gradient boosting on both treatment and outcome
          residuals) coexist with valid inference on the effect of interest.
        </li>
      </ul>

      <h2>Outcome</h2>
      <p>
        The HIA delivered a defensible, scenario-conditional mortality burden estimate that
        the institute could put in front of policy stakeholders. The causal analysis of the
        perception survey added a complementary picture — how citizens read the air around
        them — that the mortality numbers alone did not capture.
      </p>

      <h2>Stack</h2>
      <p>
        <strong>Python · statsmodels · linearmodels (panel FE) · econml (causal forest,
        DoubleML) · R for HIA-specific tooling · spatial joins on dispersion outputs.</strong>
      </p>
    </ExperienceLayout>
  );
}
