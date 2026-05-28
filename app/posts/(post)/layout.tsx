import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import FractalTreeHero from "@/components/FractalTreeHero";

/**
 * Shared chrome for any individual post under app/posts/(post)/<slug>/page.mdx.
 *
 * The route group `(post)` is invisible in the URL — a file at
 * `app/posts/(post)/welcome/page.mdx` is still served at `/posts/welcome/`.
 * This lets us share post-only layout without wrapping the /posts/ index.
 *
 * The Cusdis comment thread is rendered by each post page itself (or by a
 * wrapper component) so that the post can pass its own title in.
 *
 * `FractalTreeHero` is the landing symbol — a self-drawing tree shown above
 * the back link so the reader sees a symbol before any text. The faint
 * background tree (FractalTreeBackground) still runs underneath everything.
 */
export default function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-10 animate-fade-up">
      <FractalTreeHero />

      <Link
        href="/posts/"
        className="inline-flex items-center gap-1.5 text-sm mb-8 hover:opacity-80"
        style={{ color: "var(--bk-sienna)" }}
      >
        <ArrowLeft size={14} /> All posts
      </Link>

      <div className="prose-bk">{children}</div>
    </article>
  );
}
