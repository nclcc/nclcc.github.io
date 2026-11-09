import Link from "next/link";
import type { ReactNode } from "react";

export default function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article id="italiano" lang="it" className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--bk-eyebrow)" }}>
        Nicolò Ciccarone · Complexa Labs
      </p>
      <h1 className="font-serif text-3xl sm:text-4xl font-semibold" style={{ color: "var(--bk-green-dk)" }}>
        {title}
      </h1>
      <p className="mt-3 text-sm" style={{ color: "var(--bk-ink-lt)" }}>
        Ultimo aggiornamento: <time dateTime="2026-11-09">9 novembre 2026</time>
      </p>
      <nav aria-label="Informazioni legali" className="mt-6 flex flex-wrap gap-4 text-sm">
        <Link href="/privacy/" className="underline underline-offset-4">Privacy</Link>
        <Link href="/cookies/" className="underline underline-offset-4">Cookie</Link>
        <Link href="/legal/" className="underline underline-offset-4">Note legali</Link>
      </nav>
      <nav aria-label="Language / Lingua" className="mt-4 flex gap-4 text-sm">
        <a href="#italiano" lang="it" className="underline underline-offset-4">Italiano</a>
        <a href="#english" lang="en" className="underline underline-offset-4">English</a>
      </nav>
      <div className="prose-bk mt-8 break-words">{children}</div>
    </article>
  );
}
