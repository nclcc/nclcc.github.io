import type { Metadata, Viewport } from "next";
import { Inter, Fira_Code, Cormorant_Garamond } from "next/font/google";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { themeInitializationScript } from "@/lib/theme";
import FractalTreeBackground from "@/components/FractalTreeBackground";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"] });
const editorialSerif = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-serif", weight: ["400", "500", "600"] });

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
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${firaCode.variable} ${editorialSerif.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitializationScript }} />
      </head>
      <body className="antialiased min-h-screen flex flex-col relative">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <FractalTreeBackground />
        <svg aria-hidden="true" width="0" height="0" className="absolute pointer-events-none">
          <defs>
            <filter id="wordmark-cream" colorInterpolationFilters="sRGB">
              {/* Convert the monochrome mark to the same cream as the text,
                  using its luminance as alpha to remove the old backdrop. */}
              <feColorMatrix type="matrix" values="0 0 0 0 0.941176  0 0 0 0 0.921569  0 0 0 0 0.835294  1 0 0 0 0" />
            </filter>
          </defs>
        </svg>
        <header
          className="border-b relative"
          style={{ borderColor: "var(--bk-rule)", zIndex: 1, background: "var(--bk-cream)" }}
        >
          <div className="site-header-inner max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 sm:gap-3">
            <Link
              href="/"
              className="shrink-0 inline-flex items-center"
              aria-label="Complexa Labs — home"
            >
              {/* Crop the asset's built-in margins so the actual wordmark,
                  rather than its empty canvas, determines the header size. */}
              <svg
                viewBox="70 70 860 260"
                role="img"
                aria-label="Complexa Labs"
                className="site-wordmark h-14 sm:h-16 w-auto"
              >
                <image href="/complexa-logo.png" width="1200" height="400" />
              </svg>
            </Link>
            <nav aria-label="Main navigation" className="site-nav order-3 basis-full justify-between sm:order-none sm:basis-auto sm:ml-auto text-sm flex gap-2 sm:gap-6 min-w-0">
              <Link href="/philosophy/" className="hover:opacity-80">Philosophy</Link>
              <Link href="/experience/" className="hover:opacity-80">Experience</Link>
              <Link href="/posts/" className="hover:opacity-80">Posts</Link>
              <Link href="/#contact" className="hover:opacity-80">Contact</Link>
            </nav>
            <ThemeToggle />
          </div>
        </header>
        <main id="main-content" tabIndex={-1} className="flex-1 relative" style={{ zIndex: 1 }}>{children}</main>
        <footer
          className="site-footer border-t mt-16 relative"
          style={{ borderColor: "var(--bk-rule)", zIndex: 1, background: "var(--bk-cream)" }}
        >
          <div
            className="max-w-4xl mx-auto px-4 sm:px-6 py-5 sm:py-6 text-sm flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-6"
            style={{ color: "var(--text-cream)" }}
          >
            <span className="min-w-0 leading-relaxed">© {new Date().getFullYear()} Nicolò Ciccarone · Complexa Labs · P.IVA IT09082330722</span>
            <nav aria-label="Legal information" className="flex shrink-0 flex-wrap gap-x-4 gap-y-2">
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
