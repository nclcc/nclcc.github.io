import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { POSTS_SORTED, formatDate } from "./posts";

export const metadata = {
  title: "Posts · Nicolò Ciccarone",
  description:
    "Short essays on fractal theory, extreme value statistics, and the limits of standard quantitative methods.",
};

export default function PostsIndex() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 animate-fade-up">
      <p
        className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-mono mb-3"
        style={{ color: "var(--bk-sienna)" }}
      >
        Notes &amp; essays
      </p>
      <h1
        className="font-serif text-3xl sm:text-4xl font-semibold leading-tight"
        style={{ color: "var(--bk-green-dk)", letterSpacing: "-0.01em" }}
      >
        Posts
      </h1>
      <p
        className="mt-3 mb-10 leading-relaxed max-w-2xl"
        style={{ color: "var(--bk-ink-mid)" }}
      >
        Short essays on fractal theory, extreme value statistics, and the recurring places where
        standard methods quietly stop working.
      </p>

      <hr className="hr-bk mb-8" />

      <ul className="space-y-6">
        {POSTS_SORTED.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/posts/${p.slug}/`}
              className="group block rounded-md border p-4 sm:p-5 transition hover:shadow-sm"
              style={{
                borderColor: "var(--bk-rule)",
                background: "var(--bk-cream-lt)",
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div
                    className="text-[10px] sm:text-xs uppercase tracking-wider font-mono mb-1"
                    style={{ color: "var(--bk-ink-lt)" }}
                  >
                    {formatDate(p.date)}
                  </div>
                  <h2
                    className="font-serif text-lg sm:text-xl font-semibold leading-snug"
                    style={{ color: "var(--bk-green-dk)" }}
                  >
                    {p.title}
                  </h2>
                </div>
                <ArrowUpRight
                  size={18}
                  className="mt-1 opacity-40 group-hover:opacity-100 transition shrink-0"
                  style={{ color: "var(--bk-sienna)" }}
                />
              </div>
              <p
                className="mt-3 text-sm leading-relaxed"
                style={{ color: "var(--bk-ink-mid)" }}
              >
                {p.excerpt}
              </p>
              {p.tags && p.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2 py-0.5 rounded"
                      style={{
                        background: "var(--bk-cream-dk)",
                        color: "var(--bk-green-dk)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
