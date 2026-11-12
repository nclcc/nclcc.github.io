// ─────────────────────────────────────────────────────────────────────────
//  Posts manifest
//  Add a new post by:
//    1. Creating app/posts/<slug>/page.mdx
//    2. Adding an entry below with the same slug
// ─────────────────────────────────────────────────────────────────────────

export interface PostMeta {
  slug: string;
  title: string;
  date: string;       // ISO 8601 — used for sort order + display
  excerpt: string;
  tags?: string[];
}

export const POSTS: PostMeta[] = [
  {
    slug: "no-single-study-has-the-answer",
    title: "Quando nessuno studio, da solo, ha la risposta",
    date: "2026-06-09",
    excerpt:
      "La meta-analisi calcola medie tra studi. Bareinboim e Pearl mostrano come combinare esperimenti su popolazioni diverse — e perché talvolta la risposta non si trova in nessuno studio preso da solo.",
    tags: ["Inferenza causale", "Trasportabilità", "Meta-analisi"],
  },
  {
    slug: "recommender-is-an-intervention",
    title: "Un sistema di raccomandazione è un intervento",
    date: "2026-06-06",
    excerpt:
      "Un propensity score può superare tutti i backtest e fallire in produzione, perché il modello modifica i dati su cui è stato addestrato.",
    tags: ["Inferenza causale", "Sistemi di raccomandazione", "ML in produzione"],
  },
  {
    slug: "welcome",
    title: "Perché esiste questo sito",
    date: "2026-05-28",
    excerpt:
      "Una breve nota su cosa troverai qui e sulla filosofia che guida ogni modello che porto in produzione.",
    tags: ["Meta", "Filosofia"],
  },
];

// Sorted newest-first for the index page
export const POSTS_SORTED = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));

export function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("it-IT", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function postBySlug(slug: string): PostMeta | undefined {
  return POSTS.find((p) => p.slug === slug);
}
