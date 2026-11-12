"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { alternateLanguagePath, isItalianPath } from "@/lib/language";

export function SiteHeaderControls() {
  const pathname = usePathname();
  const italian = isItalianPath(pathname);
  const prefix = italian ? "/it" : "";

  useEffect(() => {
    document.documentElement.lang = italian ? "it" : "en";
  }, [italian]);

  return <>
    <nav aria-label={italian ? "Navigazione principale" : "Main navigation"} className="site-nav">
      <Link href={`${prefix}/philosophy/`} className="hover:opacity-80">{italian ? "Filosofia" : "Philosophy"}</Link>
      <Link href={`${prefix}/experience/`} className="hover:opacity-80">{italian ? "Esperienze" : "Experience"}</Link>
      <Link href={`${prefix}/posts/`} className="hover:opacity-80">{italian ? "Articoli" : "Posts"}</Link>
      <Link href={`${prefix}/#contact`} className="hover:opacity-80">{italian ? "Contatti" : "Contact"}</Link>
    </nav>
    <div className="site-header-controls">
      <ThemeToggle italian={italian} />
      <a
        href={alternateLanguagePath(pathname)}
        hrefLang={italian ? "en" : "it"}
        lang={italian ? "en" : "it"}
        className="language-toggle"
        aria-label={italian ? "Switch to English" : "Passa all’italiano"}
        title={italian ? "Switch to English" : "Passa all’italiano"}
        onClick={(event) => {
          event.currentTarget.href = `${alternateLanguagePath(window.location.pathname)}${window.location.search}${window.location.hash}`;
        }}
      >{italian ? "EN" : "IT"}</a>
    </div>
  </>;
}

export function SiteBrandLink({ children }: { children: React.ReactNode }) {
  const italian = isItalianPath(usePathname());
  return <Link href={italian ? "/it/" : "/"} className="site-brand" aria-label="Complexa Labs — home">{children}</Link>;
}

export function SiteFooterLinks() {
  const italian = isItalianPath(usePathname());
  const prefix = italian ? "/it" : "";
  return <nav aria-label={italian ? "Informazioni legali" : "Legal information"} className="flex shrink-0 flex-wrap gap-x-4 gap-y-2">
    <Link href={`${prefix}/privacy/`} className="underline underline-offset-4">Privacy</Link>
    <Link href={`${prefix}/cookies/`} className="underline underline-offset-4">Cookie</Link>
    <Link href={`${prefix}/legal/`} className="underline underline-offset-4">{italian ? "Note legali" : "Legal notice"}</Link>
  </nav>;
}

export function TaxLabel() {
  return <>{isItalianPath(usePathname()) ? "P.IVA" : "VAT"}</>;
}

export function SiteSkipLink() {
  return <a href="#main-content" className="skip-link">{isItalianPath(usePathname()) ? "Vai al contenuto" : "Skip to content"}</a>;
}
