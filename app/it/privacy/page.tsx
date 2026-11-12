import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Informativa privacy | Nicolò Ciccarone",
  description: "Informativa sul trattamento dei dati personali per navigazione e contatti, in italiano e inglese.",
};

export default function Privacy() {
  return (
    <LegalPage locale="it" title="Informativa privacy">
      <p>
        Informativa ai sensi dell’art. 13 del Regolamento (UE) 2016/679 (GDPR),
        relativa alla navigazione su https://nclcc.github.io e ai contatti avviati tramite il sito.
      </p>
      <h2>1. Titolare del trattamento</h2>
      <p>
        Nicolò Ciccarone, Piazza Caduti del Terrorismo, 10, Bitonto, Bari, Italia,
        partita IVA IT09082330722. Per informazioni e per esercitare i diritti:
        {" "}<a href="mailto:niciccarone@gmail.com">niciccarone@gmail.com</a>.
        Complexa Labs è il nome utilizzato sul sito per presentare le attività.
      </p>
      <h2>2. Dati trattati, finalità e basi giuridiche</h2>
      <ul>
        <li>
          <strong>Navigazione:</strong> per consegnare le pagine, GitHub Pages riceve dati
          tecnici, tra cui l’indirizzo IP e i dati della richiesta HTTP, come pagina richiesta,
          data e ora e informazioni sul browser. GitHub dichiara di registrare l’IP dei
          visitatori per sicurezza. L’erogazione sicura del sito risponde al legittimo interesse
          alla disponibilità del servizio e alla prevenzione degli abusi (art. 6.1.f GDPR).
          Il gestore non installa strumenti per misurare o profilare le visite.
        </li>
        <li>
          <strong>Richieste via email:</strong> sono trattati indirizzo email, nome, contenuto
          del messaggio ed eventuali allegati che decidi di inviare, per rispondere e gestire
          richieste di collaborazione o consulenza. Per richieste di un possibile incarico
          la base è l’esecuzione di misure precontrattuali richieste dall’interessato
          (art. 6.1.b); per altre comunicazioni o contatti di referenti aziendali è il legittimo
          interesse a gestire la corrispondenza professionale (art. 6.1.f).
        </li>
        <li>
          <strong>Obblighi di legge e tutela dei diritti:</strong> dati strettamente necessari
          possono essere conservati per adempiere obblighi legali (art. 6.1.c) o per accertare,
          esercitare o difendere un diritto (art. 6.1.f).
        </li>
      </ul>
      <p>
        Il conferimento dei dati tramite email è facoltativo; senza un recapito e le informazioni
        necessarie potrebbe non essere possibile rispondere. Evita di inviare dati sanitari,
        altre categorie particolari di dati o dati di terzi non necessari. I messaggi non
        sono pubblicati sul sito e non sono usati per newsletter o marketing.
      </p>
      <h2>3. Destinatari e servizi utilizzati</h2>
      <p>
        Il sito è ospitato da GitHub Pages; la casella di contatto usa Gmail. GitHub e Google,
        e i rispettivi fornitori di infrastruttura, possono trattare i dati necessari a erogare
        i servizi. Per i trattamenti di loro competenza e i relativi contatti consultare
        l’<a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">
          informativa di GitHub
        </a> e l’<a href="https://policies.google.com/privacy?hl=it">informativa di Google</a>.
      </p>
      <p>
        I dati possono essere comunicati ad autorità quando richiesto dalla legge e a consulenti
        legali o fiscali quando necessario per uno specifico obbligo o per tutelare un diritto.
        Non sono venduti né diffusi al pubblico. Gli eventuali trattamenti per un incarico
        professionale saranno descritti nelle informazioni relative all’incarico.
      </p>
      <h2>4. Trasferimenti fuori dallo Spazio economico europeo</h2>
      <p>
        L’utilizzo di GitHub Pages e Gmail può comportare il trattamento dei dati anche negli
        Stati Uniti e in altri Paesi fuori dallo SEE. I fornitori descrivono nelle proprie
        informative le garanzie utilizzate: decisioni di adeguatezza, incluso il Data Privacy
        Framework per i trasferimenti coperti, oppure clausole contrattuali standard, secondo
        il servizio e la destinazione. Maggiori dettagli e modalità per ottenere informazioni
        sulle garanzie sono disponibili nelle sezioni sui trasferimenti di
        {" "}<a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement#international-data-transfers">GitHub</a>
        {" "}e di <a href="https://policies.google.com/privacy/frameworks?hl=it">Google</a>;
        puoi inoltre contattare il titolare.
      </p>
      <h2>5. Tempi di conservazione</h2>
      <p>
        Le richieste che non si trasformano in incarichi sono eliminate entro 12 mesi dall’ultimo
        contatto. Se nasce un incarico, i documenti pertinenti sono conservati per la durata
        del rapporto e per i successivi termini previsti dagli obblighi applicabili; i documenti
        contabili soggetti all’art. 2220 del Codice civile sono conservati per 10 anni.
        In caso di controversie, si conserva solo quanto necessario per la loro gestione
        e fino alla scadenza dei termini di tutela applicabili.
      </p>
      <p>
        I log tecnici dell’hosting sono gestiti da GitHub: il gestore del sito non dispone di
        un archivio proprio degli IP dei visitatori e non stabilisce i tempi di conservazione
        di GitHub. I criteri del fornitore sono descritti nella sua
        {" "}<a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement#security-and-retention">informativa sulla conservazione</a>.
      </p>
      <h2>6. Diritti e reclami</h2>
      <p>
        Nei casi previsti dal GDPR puoi chiedere accesso, rettifica, cancellazione, limitazione
        e portabilità dei dati. Puoi opporti ai trattamenti basati sul legittimo interesse per
        motivi connessi alla tua situazione particolare. Se un trattamento si basa sul consenso,
        puoi revocarlo senza pregiudicare il trattamento precedente alla revoca.
      </p>
      <p>
        Scrivi a <a href="mailto:niciccarone@gmail.com">niciccarone@gmail.com</a>.
        Riceverai riscontro di regola entro un mese; in caso di proroga consentita dalla legge
        sarai informato entro lo stesso termine. Puoi proporre reclamo al
        {" "}<a href="https://www.garanteprivacy.it/home/diritti/come-agire-per-tutelare-i-tuoi-dati-personali">Garante per la protezione dei dati personali</a>
        {" "}o all’autorità competente nel Paese SEE di residenza, lavoro o presunta violazione.
      </p>
      <h2>7. Cookie, link e decisioni automatizzate</h2>
      <p>
        Il sito non utilizza profilazione o decisioni automatizzate con effetti giuridici o
        analogamente significativi. Per cookie e memoria del browser leggi
        l’<Link href="/it/cookies/">informativa cookie</Link>.
        I link esterni e i link email si attivano su tua iniziativa; i servizi di destinazione
        hanno proprie informative. Il widget di commenti Cusdis è disattivato.
      </p>

    </LegalPage>
  );
}
