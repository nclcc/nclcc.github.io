import ExperienceLayout from "@/components/ExperienceLayout";

export const metadata = {
  title: "Time2Fill — vacancy fill forecasting · Nicolò Ciccarone",
};

export default function Page() {
  return (
    <ExperienceLayout
      sector="Staffing"
      title="Time2Fill — vacancy fill forecasting"
      role="Lead quantitative engineer"
      period="2027"
    >
      <h2>The problem</h2>
      <p>
        Open vacancies need a forecast that can be revised as the process unfolds — not a
        one-shot estimate at posting time. The questions are whether a vacancy is likely to
        fill within a useful horizon, and how much remaining time should still be expected.
      </p>

      <h2>Approach</h2>
      <p>
        Time-to-fill is modelled as accelerated failure time. Vacancies still open at the
        cut-off are treated as censored. Daily process information enters as time-varying
        covariates; applications are covariates only.
      </p>

      <h2>Outcome</h2>
      <p>
        A daily read on the open book: which vacancies look likely to fill soon, and which
        look stalled.
      </p>
    </ExperienceLayout>
  );
}
