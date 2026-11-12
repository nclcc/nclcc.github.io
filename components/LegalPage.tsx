import Link from "next/link";
import type { ReactNode } from "react";

const dateFormats = {
  en: new Intl.DateTimeFormat("en-GB", { dateStyle: "long", timeZone: "UTC" }),
  it: new Intl.DateTimeFormat("it-IT", { dateStyle: "long", timeZone: "UTC" }),
};

export default function LegalPage({ title, children, updatedAt = "2026-11-09", locale = "en" }: { title: string; children: ReactNode; updatedAt?: string; locale?: "en" | "it" }) {
  const italian = locale === "it";
  const prefix = italian ? "/it" : "";
  const legalDateFormat = dateFormats[locale];
  return (
    <article id={italian ? "italiano" : "english"} lang={locale} className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--bk-eyebrow)" }}>
        Nicolò Ciccarone · Complexa Labs
      </p>
      <h1 className="font-serif text-3xl sm:text-4xl font-semibold" style={{ color: "var(--bk-green-dk)" }}>
        {title}
      </h1>
      <p className="mt-3 text-sm" style={{ color: "var(--hero-accent)" }}>
        {italian ? "Ultimo aggiornamento: " : "Last updated: "}<time dateTime={updatedAt}>{legalDateFormat.format(new Date(`${updatedAt}T12:00:00Z`))}</time>
      </p>
      <nav aria-label={italian ? "Informazioni legali" : "Legal information"} className="mt-6 flex flex-wrap gap-4 text-sm">
        <Link href={`${prefix}/privacy/`} className="underline underline-offset-4">Privacy</Link>
        <Link href={`${prefix}/cookies/`} className="underline underline-offset-4">Cookie</Link>
        <Link href={`${prefix}/legal/`} className="underline underline-offset-4">{italian ? "Note legali" : "Legal notice"}</Link>
      </nav>
      <div className="prose-bk mt-8 break-words">{children}</div>
    </article>
  );
}
