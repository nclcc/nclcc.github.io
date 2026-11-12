import ExperienceLayout from "@/components/it/ExperienceLayout";

export const metadata = {
  title: "Valore del cliente B2B e suggerimento del prossimo servizio · Nicolò Ciccarone",
};

export default function Page() {
  return (
    <ExperienceLayout
      sector="Risorse umane"
      title="Valore del cliente B2B e suggerimento del prossimo servizio"
      role="Responsabile dell’ingegneria quantitativa"
      period="2024 – 2026"
    >
      <h2>Il problema</h2>
      <p>
        I team commerciali raggruppavano i clienti B2B sulla base di euristiche. Serviva una visione metodologicamente fondata del valore di ogni relazione, della sua durata e del servizio complementare da proporre successivamente.
      </p>

      <h2>Approccio</h2>
      <p>
        Due componenti: un modello del valore del cliente nel ciclo di vita con incertezza esplicita e un sistema di suggerimento del prossimo servizio. Gli effetti di cross-selling vengono identificati causalmente, anziché dalla semplice compresenza, così le stime restano utilizzabili quando iniziano a guidare le azioni commerciali.
      </p>

      <h2>Risultato</h2>
      <p>
        Le stime del valore per cliente sostituiscono le regole empiriche settoriali; il sistema di raccomandazione include una procedura di valutazione offline, anziché affidarsi alla speranza che il miglioramento emerga in produzione.
      </p>
    </ExperienceLayout>
  );
}
