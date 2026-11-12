import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Note legali | Nicolò Ciccarone",
  description: "Identità, indirizzo e contatti del gestore del sito Complexa Labs.",
};

export default function Legal() {
  return (
    <LegalPage locale="it" title="Note legali">
      <h2>Gestore e contatti</h2>
      <p>Il sito https://nclcc.github.io è gestito da Nicolò Ciccarone e presenta attività e contenuti con il nome Complexa Labs.</p>
      <address className="not-italic">
        Nicolò Ciccarone<br />
        Piazza Caduti del Terrorismo, 10<br />
        Bitonto, Bari, Italia<br />
        Partita IVA: IT09082330722<br />
        Email: <a href="mailto:niciccarone@gmail.com">niciccarone@gmail.com</a>
      </address>
      <h2>Contenuti e servizi</h2>
      <p>
        Il sito presenta esperienze professionali, ricerca e articoli. Le richieste di consulenza
        possono essere inviate via email; il sito non prevede acquisti, pagamenti o conclusione
        automatica di contratti online. Oggetto, compensi e condizioni di eventuali incarichi
        vengono concordati separatamente.
      </p>
      <p>
        Gli articoli hanno finalità informative e di ricerca. Esempi, modelli e risultati
        vanno valutati nel loro contesto e non costituiscono raccomandazioni di investimento.
      </p>
      <h2>Diritti sui contenuti</h2>
      <p>
        I diritti sui contenuti originali spettano ai rispettivi autori. Nomi, marchi e materiali
        di terzi restano dei rispettivi titolari. Per riutilizzi ulteriori rispetto a quelli
        consentiti dalla legge o da una licenza espressa, contattare il titolare dei diritti.
      </p>
      <h2>Collegamenti e segnalazioni</h2>
      <p>
        I collegamenti esterni portano a siti gestiti da terzi, con proprie condizioni e informative.
        Per errori, problemi di accessibilità o richieste relative ai contenuti, scrivere
        all’indirizzo email sopra indicato specificando la pagina interessata.
      </p>

    </LegalPage>
  );
}
