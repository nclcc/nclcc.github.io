import ExperienceLayout from "@/components/it/ExperienceLayout";

export const metadata = {
  title: "Time2Fill — previsioni sulla copertura delle posizioni · Nicolò Ciccarone",
};

export default function Page() {
  return (
    <ExperienceLayout
      sector="Risorse umane"
      title="Time2Fill — previsioni sulla copertura delle posizioni"
      role="Responsabile dell’ingegneria quantitativa"
      period="2027"
    >
      <h2>Il problema</h2>
      <p>
        Le posizioni aperte richiedono una previsione aggiornabile durante il processo, oltre a una stima iniziale al momento della pubblicazione. Le domande sono se una posizione verrà probabilmente coperta entro un orizzonte utile e quanto tempo residuo ci si debba ancora attendere.
      </p>

      <h2>Approccio</h2>
      <p>
        Il tempo di copertura viene modellato con un modello a tempo di fallimento accelerato. Le posizioni ancora aperte alla data di osservazione sono trattate come censurate. Le informazioni giornaliere del processo entrano come covariate variabili nel tempo; le candidature sono esclusivamente covariate.
      </p>

      <h2>Risultato</h2>
      <p>
        Una lettura quotidiana delle posizioni aperte: quali sembrano prossime alla copertura e quali risultano bloccate.
      </p>
    </ExperienceLayout>
  );
}
