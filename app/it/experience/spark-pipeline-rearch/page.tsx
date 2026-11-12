import ExperienceLayout from "@/components/it/ExperienceLayout";

export const metadata = {
  title: "Riprogettazione di una pipeline di acquisizione distribuita · Nicolò Ciccarone",
};

export default function Page() {
  return (
    <ExperienceLayout
      sector="Data engineering"
      title="Riprogettazione di una pipeline di acquisizione distribuita"
      role="Data engineer senior"
      period="2026"
    >
      <h2>Il problema</h2>
      <p>
        Un flusso critico di acquisizione, scritto per l’elaborazione su un singolo nodo, stava raggiungendo i propri limiti: pressione sulla memoria con la crescita dei dati e capacità di elaborazione che frenava tutti i processi a valle.
      </p>

      <h2>Approccio</h2>
      <p>
        Riscrivere la pipeline con operazioni distribuite native, anziché avvolgere il vecchio codice, e affiancarle servizi di produzione per la lettura e i carichi asincroni.
      </p>

      <h2>Risultato</h2>
      <p>
        Un’acquisizione che cresce insieme ai dati, anziché entrare in conflitto con essi.
      </p>
    </ExperienceLayout>
  );
}
