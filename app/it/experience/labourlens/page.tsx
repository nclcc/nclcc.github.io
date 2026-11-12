import ExperienceLayout from "@/components/it/ExperienceLayout";

export const metadata = {
  title: "LabourLens — dinamiche del mercato del lavoro · Nicolò Ciccarone",
};

export default function Page() {
  return (
    <ExperienceLayout
      sector="Mercato del lavoro"
      title="LabourLens — dinamiche del mercato del lavoro"
      role="Responsabile dell’ingegneria quantitativa"
      period="2027"
    >
      <h2>Il problema</h2>
      <p>
        La pianificazione operativa dipende dalla direzione della domanda di lavoro, oltre che da quanto è stato chiuso il mese scorso. Lo storico interno offre una visione parziale. Il dato mancante è il mercato più ampio: quali annunci vengono pubblicati, per quali professioni e in quali settori.
      </p>

      <h2>Approccio</h2>
      <p>
        LabourLens è un modello delle dinamiche di mercato costruito sul flusso osservato di annunci di lavoro, ricondotto a tassonomie di professioni e settori per rendere le serie confrontabili nel tempo.
      </p>

      <h2>Risultato</h2>
      <p>
        Una lettura esterna di quanto il mercato del lavoro attorno al portafoglio di attività si stia restringendo o allentando.
      </p>
    </ExperienceLayout>
  );
}
