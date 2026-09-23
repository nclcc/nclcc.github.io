import ExperienceLayout from "@/components/ExperienceLayout";

export const metadata = {
  title: "Distributed ingest pipeline re-architecture · Nicolò Ciccarone",
};

export default function Page() {
  return (
    <ExperienceLayout
      sector="Data engineering"
      title="Distributed ingest pipeline re-architecture"
      role="Senior data engineer"
      period="2026"
    >
      <h2>The problem</h2>
      <p>
        A critical ingest path written for single-node processing was running out of room:
        memory pressure as the source grew, and throughput that capped everything
        downstream.
      </p>

      <h2>Approach</h2>
      <p>
        Rewrite the pipeline as native distributed operations rather than wrapping the old
        code, and put production services around it for the read path and the asynchronous
        workload.
      </p>

      <h2>Outcome</h2>
      <p>
        Ingest that scales with the data instead of fighting it.
      </p>
    </ExperienceLayout>
  );
}
