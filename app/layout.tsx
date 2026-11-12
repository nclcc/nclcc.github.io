import type { Metadata, Viewport } from "next";
import { Inter, Fira_Code, Cormorant_Garamond } from "next/font/google";
import { SiteBrandLink, SiteHeaderControls, SiteFooterLinks, SiteSkipLink, TaxLabel } from "@/components/SiteNavigation";
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
        <script dangerouslySetInnerHTML={{ __html: 'document.documentElement.lang = /^\\/it(?:\\/|$)/.test(location.pathname) ? "it" : "en";' }} />
      </head>
      <body className="antialiased min-h-screen flex flex-col relative">
        <SiteSkipLink />
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
          <div className="site-header-inner max-w-4xl mx-auto">
            <SiteBrandLink>
              {/* Crop the asset's built-in margins so the actual wordmark,
                  rather than its empty canvas, determines the header size. */}
              <svg
                viewBox="70 70 860 260"
                role="img"
                aria-label="Complexa Labs"
                className="site-wordmark"
              >
                <image href="/complexa-logo.png" width="1200" height="400" />
              </svg>
            </SiteBrandLink>
            <SiteHeaderControls />
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
            <span className="min-w-0 leading-relaxed">© {new Date().getFullYear()} Nicolò Ciccarone · Complexa Labs · <TaxLabel /> IT09082330722</span>
            <SiteFooterLinks />
          </div>
        </footer>
      </body>
    </html>
  );
}
