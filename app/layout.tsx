import type { Metadata, Viewport } from "next";
import { Inter, Fira_Code, Source_Serif_4 } from "next/font/google";
import Link from "next/link";
import FractalTreeBackground from "@/components/FractalTreeBackground";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"] });
const sourceSerif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif", weight: ["400", "600"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const SITE_URL = "https://nclcc.github.io";
const SITE_TITLE = "Nicolò Ciccarone — Quantitative Modelling & Causal Inference";
const SITE_DESCRIPTION =
  "Quantitative models and data systems for enterprise clients across financial services, staffing, automotive SaaS, and public research, rooted in fractal theory and extreme value statistics.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Nicolò Ciccarone",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Nicolò Ciccarone — Quantitative modelling & causal inference",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable} ${sourceSerif.variable}`}>
      <body className="antialiased min-h-screen flex flex-col relative">
        <FractalTreeBackground />
        <header
          className="border-b relative"
          style={{ borderColor: "var(--bk-rule)", zIndex: 1, background: "var(--bk-cream)" }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex items-baseline justify-between gap-2 sm:gap-3">
            <Link
              href="/"
              className="font-serif text-sm sm:text-lg font-semibold shrink-0"
              style={{ color: "var(--bk-green-dk)" }}
            >
              <span className="sm:hidden">Nicolò</span>
              <span className="hidden sm:inline">Nicolò Ciccarone</span>
            </Link>
            <nav className="text-[11px] sm:text-sm flex gap-2.5 sm:gap-5 min-w-0" style={{ color: "var(--bk-ink-mid)" }}>
              <Link href="/#philosophy" className="hover:opacity-80">Philosophy</Link>
              <Link href="/#experience" className="hover:opacity-80">Experience</Link>
              <Link href="/#about" className="hidden sm:inline hover:opacity-80">About</Link>
              <Link href="/#contact" className="hover:opacity-80">Contact</Link>
            </nav>
          </div>
        </header>
        <main className="flex-1 relative" style={{ zIndex: 1 }}>{children}</main>
        <footer
          className="border-t mt-16 relative"
          style={{ borderColor: "var(--bk-rule)", zIndex: 1, background: "var(--bk-cream)" }}
        >
          <div
            className="max-w-4xl mx-auto px-6 py-6 text-sm flex flex-col sm:flex-row justify-between gap-2"
            style={{ color: "var(--bk-ink-lt)" }}
          >
            <span>© {new Date().getFullYear()} Nicolò Ciccarone · Complexa Labs</span>
            <span className="font-mono text-xs">v1.0 · built with Next.js</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
