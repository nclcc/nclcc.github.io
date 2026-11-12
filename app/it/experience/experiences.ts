// Shared catalogue of selected engagements. Rendered as cards on the
// /experience index; each `slug` has a fuller writeup at /experience/<slug>/.
export interface Experience {
  slug: string;
  sector: string;
  title: string;
  summary: string;
  tags: string[];
  period?: string;
}

export const experiences: Experience[] = [
  {
    slug: "partyclick",
    sector: "Marketplace di eventi",
    period: "In corso",
    title: "PartyClick — marketplace per feste",
    summary:
      "Responsabile tecnico e sviluppatore end-to-end di PartyClick, un marketplace per feste, con responsabilità sulla direzione tecnica e sullo sviluppo del prodotto.",
    tags: ["Direzione tecnica", "Sviluppo end-to-end"],
  },
  {
    slug: "time2fill",
    sector: "Risorse umane",
    period: "2027",
    title: "Time2Fill — previsioni sulla copertura delle posizioni",
    summary:
      "Previsioni giornaliere del tempo residuo per coprire le posizioni aperte, con modelli di sopravvivenza aggiornati durante il processo di selezione.",
    tags: ["Analisi di sopravvivenza", "Previsioni"],
  },
  {
    slug: "labourlens",
    sector: "Mercato del lavoro",
    period: "2027",
    title: "LabourLens — dinamiche del mercato del lavoro",
    summary:
      "Un modello delle dinamiche di mercato che legge il flusso esterno di annunci per capire se il mercato del lavoro si sta restringendo o allentando.",
    tags: ["Previsioni di mercato", "Domanda negli annunci di lavoro"],
  },
  {
    slug: "climpact",
    sector: "Contenzioso climatico",
    period: "2027",
    title: "Climpact — modello a pesi aperti per i processi sul clima",
    summary:
      "Fine-tuning di modelli a pesi aperti su un insieme di riferimento di procedimenti giudiziari, per offrire al progetto un lettore specializzato anziché un chatbot generico.",
    tags: ["Fine-tuning a pesi aperti", "Insieme di riferimento"],
  },
  {
    slug: "staffing-cltv-nbp",
    sector: "Risorse umane",
    period: "2024 – 2026",
    title: "Valore del cliente B2B e suggerimento del prossimo servizio",
    summary:
      "Stime del valore per cliente con incertezza esplicita e un sistema che suggerisce il servizio successivo, progettato per mantenere valide le stime quando iniziano a guidare le azioni commerciali.",
    tags: ["Valore nel ciclo di vita", "Raccomandazione", "Inferenza causale"],
  },
  {
    slug: "automotive-nlp",
    sector: "Automotive",
    period: "2025",
    title: "NLP per testi operativi non strutturati",
    summary:
      "Pipeline basate su modelli linguistici che trasformano grandi volumi di testo non strutturato in informazioni utilizzabili per report e ricerca.",
    tags: ["NLP", "Estrazione di informazioni"],
  },
  {
    slug: "macro-scenario-simulation",
    sector: "Servizi finanziari",
    period: "2025",
    title: "Simulazione di scenari macroeconomici",
    summary:
      "Ottimizzazione vincolata su variabili macroeconomiche collegate, per chiedersi quali scenari siano realizzabili, oltre a cosa accadrebbe se.",
    tags: ["Ottimizzazione", "Analisi di scenario"],
  },
  {
    slug: "spark-pipeline-rearch",
    sector: "Data engineering",
    period: "2026",
    title: "Riprogettazione di una pipeline di acquisizione distribuita",
    summary:
      "Migrazione di una pipeline di acquisizione in crescita da un singolo nodo a un motore distribuito, per far crescere la capacità insieme ai dati.",
    tags: ["Data engineering", "Spark"],
  },
  {
    slug: "air-pollution-hia",
    sector: "Ricerca pubblica",
    period: "2025 – 2026",
    title: "Valutazione dell’impatto sanitario della mortalità da inquinamento atmosferico",
    summary:
      "Valutazione epidemiologica del carico di mortalità dovuto all’inquinamento atmosferico urbano in scenari di traffico alternativi.",
    tags: ["Epidemiologia", "Valutazione dell’impatto sanitario"],
  },
];
