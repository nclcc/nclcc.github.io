import ExperienceLayout from "@/components/ExperienceLayout";

export const metadata = {
  title: "Climpact — open-weight expert on climate trials · Nicolò Ciccarone",
};

export default function Page() {
  return (
    <ExperienceLayout
      sector="Climate litigation"
      title="Climpact — open-weight expert on climate trials"
      role="Technical implementation"
      period="2027"
    >
      <h2>The problem</h2>
      <p>
        Climate litigation is expanding worldwide. The research question behind{" "}
        <a href="https://www.climpact.it/" target="_blank" rel="noopener noreferrer">
          Climpact
        </a>{" "}
        is whether it actually works: if, how, when, and why courtroom action translates
        into real-world change.
      </p>
      <p>
        Generic language models are the wrong instrument. They have read the internet; they
        have not been held to a <strong>golden set of court trials</strong>. The work is to
        make an open-weight model expert on that set.
      </p>

      <h2>Approach</h2>
      <p>
        Fine-tune openly released weights on a curated golden set of climate-litigation
        trials. Training and evaluation stay on that labelled set.
      </p>

      <h2>Outcome</h2>
      <p>
        An open-weight model specialised on a golden set of court trials — a climate-trial
        expert the project can own, rather than a generic assistant.
      </p>
    </ExperienceLayout>
  );
}
