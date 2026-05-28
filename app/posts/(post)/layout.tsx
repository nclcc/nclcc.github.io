import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/**
 * Shared chrome for any individual post under app/posts/(post)/<slug>/page.mdx.
 *
 * The route group `(post)` is invisible in the URL — a file at
 * `app/posts/(post)/welcome/page.mdx` is still served at `/posts/welcome/`.
 * This lets us share post-only layout without wrapping the /posts/ index.
 *
 * The Cusdis comment thread is rendered by each post page itself (or by a
 * wrapper component) so that the post can pass its own title in.
 */
export default function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 animate-fade-up">
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
