import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nicolò Ciccarone — Modellazione quantitativa e inferenza causale",
  description: "Modelli quantitativi e sistemi di dati per imprese, servizi finanziari, risorse umane e ricerca pubblica, con teoria dei frattali e statistica dei valori estremi.",
  openGraph: {
    locale: "it_IT",
    title: "Nicolò Ciccarone — Modellazione quantitativa e inferenza causale",
    description: "Modelli quantitativi e sistemi di dati per imprese e ricerca pubblica.",
    url: "https://nclcc.github.io/it/",
    images: ["/og.png"],
  },
};

export default function ItalianLayout({ children }: { children: React.ReactNode }) {
  return <div lang="it">{children}</div>;
}
