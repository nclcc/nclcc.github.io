import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Informativa cookie | Nicolò Ciccarone",
  description: "Cookie, memoria del browser e servizi esterni su questo sito.",
};

export default function Cookies() {
  return (
    <LegalPage locale="it" title="Informativa cookie" updatedAt="2026-11-10">
      <h2>Cookie e memoria del browser</h2>
      <p>
        Il sito non imposta cookie e non utilizza sessionStorage. Usa localStorage esclusivamente per ricordare la scelta del tema chiaro o scuro.
        Non sono integrati strumenti di analisi delle visite, pubblicità, profilazione,
        pixel di tracciamento o fingerprinting.
      </p>
      <p>
        Non vengono caricati widget social o commenti di terze parti. I caratteri tipografici
        delle pagine principali sono distribuiti insieme al sito; non sono richiesti ai server
        di Google durante la visita. I file HTML accessori usano caratteri di sistema.
      </p>
      <h2>Preferenza del tema</h2>
      <p>
        La chiave <code>complexa-theme</code> contiene soltanto il valore <code>light</code> o <code>dark</code>,
        salvato quando usi il selettore del tema. È una preferenza funzionale: non contiene un identificativo,
        non viene trasmessa dal codice del sito a server e non serve al tracciamento. Resta nel browser
        finché cancelli i dati del sito o cambi la scelta. Senza una scelta salvata viene usata
        la preferenza chiaro/scuro del dispositivo. Se la memoria del browser non è disponibile,
        il selettore continua a funzionare durante la visita senza salvare il valore.
      </p>
      <h2>Perché non compare un banner</h2>
      <p>
        Nella configurazione attuale non vengono attivati strumenti che richiedono il consenso
        per l’accesso o l’archiviazione di informazioni sul dispositivo. Per questo motivo
        il sito non presenta un banner di consenso. La normale cache del browser serve
        a caricare le risorse e non viene usata dal sito per identificare i visitatori.
      </p>
      <p>
        Questa scelta segue le <a href="https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/9677876">
          Linee guida del Garante su cookie e altri strumenti di tracciamento
        </a>. Se saranno aggiunti servizi che richiedono consenso, dovranno restare bloccati
        fino alla scelta dell’utente, con possibilità di rifiutare e revocare il consenso.
      </p>
      <h2>Hosting e collegamenti esterni</h2>
      <p>
        Il sito è ospitato su GitHub Pages. La trasmissione dell’indirizzo IP al servizio
        di hosting è necessaria per ricevere le pagine ed è distinta dall’uso di cookie.
        Per dati di navigazione e trattamento da parte dell’hosting, consultare
        l’<Link href="/it/privacy/">informativa privacy</Link>.
      </p>
      <p>
        I link a LinkedIn, GitHub e altri siti non incorporano i loro contenuti: i servizi
        esterni vengono visitati quando si segue il collegamento. Da quel momento si
        applicano le loro informative e impostazioni sui cookie.
      </p>
      <h2>Contatti</h2>
      <p>Per domande: <a href="mailto:niciccarone@gmail.com">niciccarone@gmail.com</a>.</p>

    </LegalPage>
  );
}
