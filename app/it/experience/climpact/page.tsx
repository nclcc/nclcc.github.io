import ExperienceLayout from "@/components/it/ExperienceLayout";

export const metadata = {
  title: "Climpact — modello a pesi aperti per i processi sul clima · Nicolò Ciccarone",
};

export default function Page() {
  return (
    <ExperienceLayout
      sector="Contenzioso climatico"
      title="Climpact — modello a pesi aperti per i processi sul clima"
      role="Implementazione tecnica"
      period="2027"
    >
      <h2>Il problema</h2>
      <p>
        Il contenzioso climatico si sta espandendo in tutto il mondo. La domanda di ricerca alla base di{" "}
        <a href="https://www.climpact.it/" target="_blank" rel="noopener noreferrer">
          Climpact
        </a>{" "}
        è se funzioni davvero: se, come, quando e perché l’azione giudiziaria si traduca in cambiamenti concreti.
      </p>
      <p>
        I modelli linguistici generici sono lo strumento sbagliato. Hanno letto internet, ma non sono stati verificati su un <strong>insieme di riferimento di procedimenti giudiziari</strong>. Il lavoro consiste nel rendere un modello a pesi aperti esperto di quell’insieme.
      </p>

      <h2>Approccio</h2>
      <p>
        Eseguire il fine-tuning di pesi pubblicamente disponibili su un insieme di riferimento curato di processi sul clima. Addestramento e valutazione restano su quell’insieme etichettato.
      </p>

      <h2>Risultato</h2>
      <p>
        Un modello a pesi aperti specializzato su un insieme di riferimento di procedimenti giudiziari: un esperto di processi sul clima di cui il progetto può disporre direttamente, anziché un assistente generico.
      </p>
    </ExperienceLayout>
  );
}
