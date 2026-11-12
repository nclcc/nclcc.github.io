import ExperienceLayout from "@/components/it/ExperienceLayout";

export const metadata = {
  title: "Simulazione di scenari macroeconomici · Nicolò Ciccarone",
};

export default function Page() {
  return (
    <ExperienceLayout
      sector="Servizi finanziari"
      title="Simulazione di scenari macroeconomici"
      role="Ingegnere quantitativo"
      period="2025"
    >
      <h2>Il problema</h2>
      <p>
        L’analisi di scenario permetteva di simulare traiettorie future di variabili macroeconomiche collegate. Non permetteva di chiedere quale traiettoria realizzabile fosse migliore, dato un insieme di vincoli.
      </p>

      <h2>Approccio</h2>
      <p>
        Riformulare ogni scenario come un problema di ottimizzazione non lineare vincolata, con un livello di risoluzione capace di gestire superfici obiettivo sia regolari sia difficili, e un’interfaccia utilizzabile dagli esperti di dominio senza scrivere codice per il risolutore.
      </p>

      <h2>Risultato</h2>
      <p>
        Progettazione di scenari che risponde a &quot;che cosa è realizzabile&quot;, oltre a &quot;che cosa succede se&quot;.
      </p>
    </ExperienceLayout>
  );
}
