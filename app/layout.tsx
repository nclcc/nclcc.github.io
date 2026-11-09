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
  referrer: "no-referrer",
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
        <a href="#main-content" className="skip-link">Skip to content</a>
        <FractalTreeBackground />
        <header
          className="border-b relative"
          style={{ borderColor: "var(--bk-rule)", zIndex: 1, background: "var(--bk-cream)" }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-2 sm:py-3 flex items-center justify-between gap-2 sm:gap-3">
            <Link
              href="/"
              className="shrink-0 inline-flex items-center"
              aria-label="Complexa Labs — home"
            >
              {/* Full horizontal wordmark at every breakpoint — sized smaller on
                  mobile so it shares the header with the nav cleanly. */}
              <img
                src="/complexa-logo.png"
                alt="Complexa Labs"
                className="h-10 sm:h-16 lg:h-20"
                style={{ objectFit: "contain", filter: "brightness(1.15) contrast(1.05)" }}
              />
            </Link>
            <nav aria-label="Main navigation" className="text-[11px] sm:text-sm flex gap-2.5 sm:gap-5 min-w-0" style={{ color: "var(--bk-ink-mid)" }}>
              <Link href="/philosophy/" className="hover:opacity-80">Philosophy</Link>
              <Link href="/experience/" className="hover:opacity-80">Experience</Link>
              <Link href="/posts/" className="hover:opacity-80">Posts</Link>
              <Link href="/#contact" className="hover:opacity-80">Contact</Link>
            </nav>
          </div>
        </header>
        <main id="main-content" tabIndex={-1} className="flex-1 relative" style={{ zIndex: 1 }}>{children}</main>
        <footer
          className="border-t mt-16 relative"
          style={{ borderColor: "var(--bk-rule)", zIndex: 1, background: "var(--bk-cream)" }}
        >
          <div
            className="max-w-4xl mx-auto px-6 py-6 text-sm flex flex-col sm:flex-row justify-between gap-2"
            style={{ color: "var(--bk-ink-lt)" }}
          >
            <span>© {new Date().getFullYear()} Nicolò Ciccarone · Complexa Labs · P.IVA IT09082330722</span>
            <nav aria-label="Legal information" className="flex flex-wrap gap-x-4 gap-y-2">
              <Link href="/privacy/" className="underline underline-offset-4">Privacy</Link>
              <Link href="/cookies/" className="underline underline-offset-4">Cookie</Link>
              <Link href="/legal/" className="underline underline-offset-4">Note legali</Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
