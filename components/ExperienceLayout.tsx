import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ExperienceLayoutProps {
  sector: string;
  title: string;
  role: string;
  period: string;
  children: React.ReactNode;
  italian?: boolean;
}

export default function ExperienceLayout({
  sector,
  title,
  role,
  period,
  children,
  italian = false,
}: ExperienceLayoutProps) {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 animate-fade-up">
      <Link
        href={italian ? "/it/experience/" : "/experience/"}
        className="inline-flex items-center gap-1.5 text-sm mb-8 hover:opacity-80"
        style={{ color: "var(--bk-sienna)" }}
      >
        <ArrowLeft size={14} /> {italian ? "Torna alle esperienze" : "Back to experience"}
      </Link>

      <div
        className="text-[10px] sm:text-xs uppercase tracking-[0.12em] sm:tracking-[0.18em] font-mono mb-3 break-words"
        style={{ color: "var(--bk-eyebrow)" }}
      >
        {sector}
      </div>
      <h1
        className="font-serif text-2xl sm:text-4xl font-semibold leading-tight"
        style={{ color: "var(--bk-green-dk)", letterSpacing: "-0.01em" }}
      >
        {title}
      </h1>
      <div
        className="mt-3 text-sm font-mono"
        style={{ color: "var(--bk-eyebrow)" }}
      >
        {role} · {period}
      </div>

      <hr className="hr-bk mt-8 mb-2" />

      <div className="prose-bk">{children}</div>
    </article>
  );
}
