import ExperienceLayout from "@/components/ExperienceLayout";

export const metadata = {
  title: "LabourLens — labour-market dynamics · Nicolò Ciccarone",
};

export default function Page() {
  return (
    <ExperienceLayout
      sector="Labour market"
      title="LabourLens — labour-market dynamics"
      role="Lead quantitative engineer"
      period="2027"
    >
      <h2>The problem</h2>
      <p>
        Delivery planning depends on where labour demand is heading, not only on what
        closed last month. Internal history is a partial view. The wider market — what is
        being posted, in which occupations and industries — is the missing input.
      </p>

      <h2>Approach</h2>
      <p>
        LabourLens is a market-dynamics model built from observed job-ad flow, mapped onto
        occupation and industry taxonomies so the series can be compared over time.
      </p>

      <h2>Outcome</h2>
      <p>
        An external read on whether the labour market around a book of work is tightening
        or easing.
      </p>
    </ExperienceLayout>
  );
}
