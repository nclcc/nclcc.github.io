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
    slug: "recommender-is-an-intervention",
    title: "A recommender is an intervention",
    date: "2026-06-06",
    excerpt:
      "A propensity score can pass every backtest and still break in production — because the model changes the data it was trained on.",
    tags: ["Causal Inference", "Recommenders", "Production ML"],
  },
  {
    slug: "welcome",
    title: "Why this site exists",
    date: "2026-05-28",
    excerpt:
      "A short note on what to expect here — and the philosophy that shapes every model I ship.",
    tags: ["Meta", "Philosophy"],
  },
];

// Sorted newest-first for the index page
export const POSTS_SORTED = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));

export function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function postBySlug(slug: string): PostMeta | undefined {
  return POSTS.find((p) => p.slug === slug);
}
