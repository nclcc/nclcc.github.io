import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie notice | Nicolò Ciccarone",
  description: "Cookies, browser storage and external services on this website.",
};

export default function Cookies() {
  return (
    <LegalPage title="Cookie notice" updatedAt="2026-11-10">
        <h3>Cookies and browser storage</h3>
        <p>
          The website sets no cookies and does not use sessionStorage. It uses localStorage only to remember your light or dark theme choice.
          It includes no visitor analytics, advertising, profiling, tracking pixels or
          fingerprinting tools.
        </p>
        <p>
          No third-party social widgets or comment embeds are loaded. Fonts on the main
          pages are distributed with the website and are not requested from Google’s
          servers during your visit. Accessory HTML files use system fonts.
        </p>
        <h3>Theme preference</h3>
        <p>
          The <code>complexa-theme</code> key stores only <code>light</code> or <code>dark</code> when you
          use the theme toggle. This functional preference contains no identifier and is not transmitted
          to servers by the website code or used for tracking. It stays in your browser until you clear
          site data or change the choice. Without a saved choice, the device’s colour-scheme preference
          is used. If browser storage is unavailable, the toggle works for the current visit without saving.
        </p>
        <h3>Why there is no consent banner</h3>
        <p>
          The current configuration does not activate tools requiring consent to access
          or store information on your device, so the site does not display a consent
          banner. The browser’s normal cache helps load resources and is not used by
          the site to identify visitors.
        </p>
        <p>
          This follows the Italian data protection authority’s
          {" "}<a href="https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/9677876">guidelines on cookies and other tracking tools</a>.
          If services requiring consent are added, they must remain blocked until you
          choose to enable them, with options to refuse and withdraw consent.
        </p>
        <h3>Hosting and external links</h3>
        <p>
          GitHub Pages hosts this website. Sending your IP address to the hosting service
          is necessary to receive pages and is distinct from using cookies. See the
          {" "}<Link href="/privacy/#english">English privacy notice</Link> for connection
          data and hosting-related processing.
        </p>
        <p>
          Links to LinkedIn, GitHub and other websites do not embed their content.
          You visit those services when you follow a link; their own privacy notices
          and cookie settings then apply.
        </p>
        <h3>Contact</h3>
        <p>For questions, email <a href="mailto:niciccarone@gmail.com">niciccarone@gmail.com</a>.</p>

    </LegalPage>
  );
}
