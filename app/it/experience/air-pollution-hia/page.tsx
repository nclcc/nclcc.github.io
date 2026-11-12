import ExperienceLayout from "@/components/it/ExperienceLayout";

export const metadata = {
  title: "Valutazione dell’impatto sanitario della mortalità da inquinamento atmosferico · Nicolò Ciccarone",
};

export default function Page() {
  return (
    <ExperienceLayout
      sector="Ricerca pubblica"
      title="Valutazione dell’impatto sanitario della mortalità da inquinamento atmosferico"
      role="Ricercatore quantitativo"
      period="2025 – 2026"
    >
      <figure className="mb-8 -mt-1">
        <div
          className="overflow-hidden rounded-lg border"
          style={{ borderColor: "var(--bk-rule)" }}
        >
          <img
            src="/it/experience/air-pollution-3d.png?v=5"
            alt="Schermata del gioco 3D Aria Pulita: una mappa urbana con alberi, parchi e piste ciclabili"
            className="block w-full h-auto"
          />
        </div>
        <figcaption
          className="mt-3 text-sm font-mono leading-relaxed"
          style={{ color: "var(--bk-eyebrow)" }}
        >
          Dal gioco 3D realizzato per questo progetto: la città dopo le missioni per l’aria pulita, alberi compresi.
        </figcaption>
      </figure>

      <h2>Il problema</h2>
      <p>
        Una stima solida della mortalità attribuibile all’inquinamento atmosferico urbano, in scenari di traffico alternativi, da presentare a chi prende decisioni di politica pubblica.
      </p>

      <h2>Approccio</h2>
      <p>
        Una valutazione epidemiologica standard dell’impatto sanitario: funzioni esposizione-risposta collegate all’esposizione della popolazione e alla mortalità di base, con ipotesi tracciabili, verificabili e replicabili. A complemento, un’analisi causale di come le persone percepiscono la qualità dell’aria locale.
      </p>

      <h2>Risultato</h2>
      <p>
        Stime del carico di mortalità condizionate allo scenario e un gioco 3D che permette di esplorare la città sulla mappa, oltre a leggere una tabella.
      </p>
    </ExperienceLayout>
  );
}
