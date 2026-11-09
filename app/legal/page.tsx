import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Note legali | Nicolò Ciccarone",
  description: "Identità, indirizzo e contatti del gestore del sito Complexa Labs.",
};

export default function Legal() {
  return (
    <LegalPage title="Note legali">
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
      <section id="english" lang="en" className="scroll-mt-8">
        <h2>Legal notice</h2>
        <p>Last updated: <time dateTime="2026-11-09">9 November 2026</time>.</p>
        <h3>Website operator and contact details</h3>
        <p>
          The website https://nclcc.github.io is operated by Nicolò Ciccarone and presents
          activities and content under the name Complexa Labs.
        </p>
        <address className="not-italic">
          Nicolò Ciccarone<br />
          Piazza Caduti del Terrorismo, 10<br />
          Bitonto, Bari, Italy<br />
          VAT number: IT09082330722<br />
          Email: <a href="mailto:niciccarone@gmail.com">niciccarone@gmail.com</a>
        </address>
        <h3>Content and services</h3>
        <p>
          This website presents professional experience, research and articles. You can
          send consulting enquiries by email. There are no online purchases, payments
          or automated contract formation. The scope, fees and terms of any engagement
          are agreed separately.
        </p>
        <p>
          Articles are provided for information and research. Examples, models and results
          must be considered in context and do not constitute investment recommendations.
        </p>
        <h3>Content rights</h3>
        <p>
          Rights in original content belong to their respective authors. Third-party names,
          trademarks and materials remain the property of their respective owners. For reuse
          beyond what the law or an explicit licence permits, contact the rights holder.
        </p>
        <h3>External links and reporting issues</h3>
        <p>
          External links lead to websites operated by third parties with their own terms
          and privacy notices. To report errors, accessibility issues or content concerns,
          email the address above and identify the page concerned.
        </p>
      </section>
    </LegalPage>
  );
}
