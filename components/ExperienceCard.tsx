import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ExperienceCardProps {
  slug: string;
  client: string;
  sector: string;
  title: string;
  summary: string;
  tags: string[];
}

export default function ExperienceCard({ slug, client, sector, title, summary, tags }: ExperienceCardProps) {
  return (
    <Link
      href={`/experience/${slug}/`}
      className="group block border rounded-md p-5 transition hover:shadow-sm"
      style={{
        borderColor: "var(--bk-rule)",
        background: "var(--bk-cream-lt)",
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div
            className="text-xs uppercase tracking-wider font-mono mb-1"
            style={{ color: "var(--bk-ink-lt)" }}
          >
            {sector} · {client}
          </div>
          <h3
            className="font-serif text-lg font-semibold leading-snug"
            style={{ color: "var(--bk-green-dk)" }}
          >
            {title}
          </h3>
        </div>
        <ArrowUpRight
          size={18}
          className="mt-1 opacity-40 group-hover:opacity-100 transition"
          style={{ color: "var(--bk-sienna)" }}
        />
      </div>
      <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--bk-ink-mid)" }}>
        {summary}
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {tags.map((t) => (
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
    </Link>
  );
}
