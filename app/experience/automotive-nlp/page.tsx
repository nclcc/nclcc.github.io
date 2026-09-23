import ExperienceLayout from "@/components/ExperienceLayout";

export const metadata = {
  title: "NLP for unstructured operational text · Nicolò Ciccarone",
};

export default function Page() {
  return (
    <ExperienceLayout
      sector="Automotive"
      title="NLP for unstructured operational text"
      role="NLP engineer"
      period="2025"
    >
      <h2>The problem</h2>
      <p>
        Large volumes of operational text sat unused because reporting could not query it
        systematically.
      </p>

      <h2>Approach</h2>
      <p>
        Language-model pipelines for information extraction and search, with structured
        outputs that downstream reporting can actually consume.
      </p>

      <h2>Outcome</h2>
      <p>
        Unstructured text becomes a first-class input to analytics rather than a dark
        archive.
      </p>
    </ExperienceLayout>
  );
}
