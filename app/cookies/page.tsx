import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Informativa cookie | Nicolò Ciccarone",
  description: "Cookie, memoria del browser e servizi esterni su questo sito.",
};

export default function Cookies() {
  return (
    <LegalPage title="Informativa cookie" updatedAt="2026-11-10">
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
        l’<Link href="/privacy/">informativa privacy</Link>.
      </p>
      <p>
        I link a LinkedIn, GitHub e altri siti non incorporano i loro contenuti: i servizi
        esterni vengono visitati quando si segue il collegamento. Da quel momento si
        applicano le loro informative e impostazioni sui cookie.
      </p>
      <h2>Contatti</h2>
      <p>Per domande: <a href="mailto:niciccarone@gmail.com">niciccarone@gmail.com</a>.</p>
      <section id="english" lang="en" className="scroll-mt-8">
        <h2>Cookie notice</h2>
        <p>Last updated: <time dateTime="2026-11-10">10 November 2026</time>.</p>
        <h3>Cookies and browser storage</h3>
        <p>
          The website sets no cookies and does not use sessionStorage. It uses localStorage only to remember your light or dark theme choice.
          It includes no visitor analytics, advertising, profiling, tracking pixels or
          fingerprinting tools.
        </p>
        <p>
          No third-party social widgets or comment embeds are loaded. Fonts on the main
          pages are distributed with the website and are not requested from Google’s
          servers during your visit. Accessory HTML files use system fonts.
        </p>
        <h3>Theme preference</h3>
        <p>
          The <code>complexa-theme</code> key stores only <code>light</code> or <code>dark</code> when you
          use the theme toggle. This functional preference contains no identifier and is not transmitted
          to servers by the website code or used for tracking. It stays in your browser until you clear
          site data or change the choice. Without a saved choice, the device’s colour-scheme preference
          is used. If browser storage is unavailable, the toggle works for the current visit without saving.
        </p>
        <h3>Why there is no consent banner</h3>
        <p>
          The current configuration does not activate tools requiring consent to access
          or store information on your device, so the site does not display a consent
          banner. The browser’s normal cache helps load resources and is not used by
          the site to identify visitors.
        </p>
        <p>
          This follows the Italian data protection authority’s
          {" "}<a href="https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/9677876">guidelines on cookies and other tracking tools</a>.
          If services requiring consent are added, they must remain blocked until you
          choose to enable them, with options to refuse and withdraw consent.
        </p>
        <h3>Hosting and external links</h3>
        <p>
          GitHub Pages hosts this website. Sending your IP address to the hosting service
          is necessary to receive pages and is distinct from using cookies. See the
          {" "}<Link href="/privacy/#english">English privacy notice</Link> for connection
          data and hosting-related processing.
        </p>
        <p>
          Links to LinkedIn, GitHub and other websites do not embed their content.
          You visit those services when you follow a link; their own privacy notices
          and cookie settings then apply.
        </p>
        <h3>Contact</h3>
        <p>For questions, email <a href="mailto:niciccarone@gmail.com">niciccarone@gmail.com</a>.</p>
      </section>
    </LegalPage>
  );
}
