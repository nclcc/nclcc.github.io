import ExperienceLayout from "@/components/it/ExperienceLayout";

export const metadata = {
  title: "NLP per testi operativi non strutturati · Nicolò Ciccarone",
};

export default function Page() {
  return (
    <ExperienceLayout
      sector="Automotive"
      title="NLP per testi operativi non strutturati"
      role="Ingegnere NLP"
      period="2025"
    >
      <h2>Il problema</h2>
      <p>
        Grandi volumi di testi operativi restavano inutilizzati perché gli strumenti di reportistica non potevano interrogarli sistematicamente.
      </p>

      <h2>Approccio</h2>
      <p>
        Pipeline basate su modelli linguistici per estrazione di informazioni e ricerca, con risultati strutturati effettivamente utilizzabili dalla reportistica a valle.
      </p>

      <h2>Risultato</h2>
      <p>
        Il testo non strutturato diventa una fonte utilizzabile per l’analisi, anziché un archivio inesplorato.
      </p>
    </ExperienceLayout>
  );
}
