import ExperienceLayout from "@/components/ExperienceLayout";

export const metadata = {
  title: "Spark pipeline re-architecture · Nicolò Ciccarone",
};

export default function Page() {
  return (
    <ExperienceLayout
      client="Enterprise data platform"
      sector="Data engineering"
      title="Pandas → Spark-native pipeline re-architecture"
      role="Senior data engineer"
      period="2022 – 2023"
    >
      <h2>The problem</h2>
      <p>
        A critical ingestion pipeline had been written in pandas and was hitting a hard wall:
        vertical scaling on a single executor, memory pressure as the source data grew, and an
        operational model that required ever-larger boxes to keep up. Throughput had become a
        constraint on downstream analytics, and the on-call team was tired of OOM incidents.
      </p>

      <h2>Approach</h2>

      <h3>Spark-native rewrite, not a wrapper</h3>
      <p>
        The wrong way to do this is to wrap pandas code in <code>spark.createDataFrame</code> and
        hope. I rewrote the pipeline as <strong>Spark-native operations</strong>: native joins
        instead of merge loops, window functions instead of group-apply, broadcast hints where
        cardinality justified them, predicate pushdown into the storage layer, and skew-aware
        partitioning on the join keys that mattered.
      </p>

      <h3>MongoDB / Azure environment</h3>
      <p>
        The pipeline ran across a MongoDB source-of-record into an Azure-based analytics tier.
        That meant tuning the MongoDB connector for partitioned reads, sizing executors for the
        Azure VM family in use, and being careful about the boundary where Spark output landed
        back into transactional stores.
      </p>

      <h3>Production microservices around the pipeline</h3>
      <p>
        Alongside the core pipeline I built and maintained the surrounding production
        microservices:
      </p>
      <ul>
        <li>
          <strong>FastAPI endpoints</strong> for the synchronous read-path — typed, validated,
          OpenAPI-documented, instrumented for latency and error budgets.
        </li>
        <li>
          <strong>Celery task orchestration</strong> for the asynchronous workload — fan-out
          jobs, retries, dead-letter queues, idempotent task design so retries didn&apos;t
          double-write.
        </li>
        <li>
          Python/PySpark services with the usual production hygiene: structured logging, health
          checks, graceful shutdown, dependency pinning.
        </li>
      </ul>

      <h2>Outcome</h2>
      <p>
        Significant throughput gains and — more importantly — <strong>horizontal scalability</strong>:
        the pipeline now grows with the data instead of fighting it. The OOM class of incident
        went away, and downstream analytics were no longer rate-limited by ingest.
      </p>

      <h2>Stack</h2>
      <p>
        <strong>PySpark · MongoDB Spark connector · Azure · FastAPI · Celery · Redis (broker) ·
        Pytest · structured logging.</strong>
      </p>
    </ExperienceLayout>
  );
}
