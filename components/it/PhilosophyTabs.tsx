"use client";

import Base from "@/components/PhilosophyTabs";

const TABS = [
  {
    title: "Gli estremi non sono rari",
    body:
      "Molte analisi presumono che il futuro assomigli alla media del passato: che gli shock siano poco comuni e le grandi sorprese incidenti isolati. Per i sistemi politici, i mercati finanziari e le istituzioni umane, questa ipotesi è sbagliata. Crisi, crolli ed eventi fuori controllo non sono anomalie da accantonare. Sono il modo in cui questi sistemi cambiano davvero.",
  },
  {
    title: "Che cosa si può prevedere",
    body:
      "Nei sistemi in cui i piccoli shock si amplificano e i vecchi schemi continuano a riecheggiare, prevedere eventi specifici — chi vincerà un’elezione, quando cederà un mercato — non è solo difficile. Oltre un certo orizzonte smette di avere significato matematico. Si può invece conoscere lo stato attuale del sistema: stabile, sotto stress o vicino a un punto critico. Una buona analisi risponde soltanto alle domande che ammettono risposte oneste.",
  },
  {
    title: "Le crisi viaggiano insieme",
    body:
      "Nessuna crisi seria avviene in isolamento. I prezzi alimentari salgono e la politica si frammenta. Le banche vacillano e le filiere si bloccano. La rabbia pubblica cresce e le istituzioni si indeboliscono. Il moltiplicatore nascosto di ogni rottura è la propagazione tra ambiti apparentemente scollegati. Un’analisi che li osserva separatamente non la coglie. I segnali di allarme si trovano nel loro movimento congiunto.",
  },
  {
    title: "Metodi rigorosi, risposte oneste",
    body:
      "Usare metodi statistici costruiti per l’insolito e il raro, anziché per ciò che è comodo e familiare, serve a evitare di ingannarsi. La statistica standard funziona bene su dati regolari. Quando i dati non lo sono, produce risposte sbagliate con grande sicurezza. Il percorso onesto consiste nel riconoscere dove gli strumenti ordinari falliscono e costruirne di migliori, che prendano sul serio code pesanti, memoria lunga e cambiamenti strutturali.",
  },
  {
    title: "Gli schemi si ripetono a ogni scala",
    body:
      "I sistemi complessi si ripetono su diversi orizzonti temporali. La forma dello stress nei dati giornalieri riecheggia quella dei dati mensili e annuali: nella struttura, non nell’intensità. Non è una curiosità matematica, ma uno strumento. Leggere contemporaneamente la stessa firma di fondo su orizzonti brevi, medi e lunghi trasforma un flusso rumoroso di dati in una lettura continua dello stato reale del sistema e della sua evoluzione.",
  },
  {
    title: "La conoscenza ha una durata",
    body:
      "La conoscenza del funzionamento di un sistema ha una durata, che si accorcia quanto più il sistema contiene soggetti che pensano e agiscono. La fisica è più stabile perché la materia non costruisce modelli di sé stessa. Gli ecosistemi sono più difficili. Le economie ancora di più. Oggi, mentre gli esseri umani modificano atmosfera ed ecosistemi e introducono materiali senza precedenti evolutivi, anche la biosfera entra nell’elenco. Più attività intelligente è presente in un sistema, maggiore è il rigore necessario.",
  },
];

const CLOSING =
  "Questi principi non derivano soltanto dalla teoria. Sono maturati nella pratica su scala aziendale, nel divario persistente tra ciò che i modelli comodi prevedono e ciò che i sistemi complessi fanno davvero.";

export default function PhilosophyTabs() {
  return <Base tabs={TABS} closing={CLOSING} label="Principi della filosofia" />;
}
