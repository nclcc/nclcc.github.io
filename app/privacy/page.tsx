import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy notice | Nicolò Ciccarone",
  description: "Privacy information for browsing this website and contacting its operator.",
};

export default function Privacy() {
  return (
    <LegalPage title="Privacy notice">
        <p>
          This information is provided under Article 13 of Regulation (EU) 2016/679 (GDPR).
        </p>
        <p>
          This notice covers browsing https://nclcc.github.io and contacting its operator,
          Nicolò Ciccarone (Complexa Labs), VAT IT09082330722, Piazza Caduti del Terrorismo, 10,
          Bitonto, Bari, Italy. For privacy enquiries or rights requests, email
          {" "}<a href="mailto:niciccarone@gmail.com">niciccarone@gmail.com</a>.
        </p>
        <p>
          GitHub Pages receives connection data, including your IP address and HTTP request
          information, to deliver and secure the website. GitHub logs visitor IPs for security.
          Secure operation and abuse prevention serve a legitimate interest (GDPR Article 6(1)(f)).
          The operator does not maintain a separate visitor-IP database; GitHub determines
          retention of its infrastructure logs under its linked privacy statement.
        </p>
        <p>
          If you email us, your address, name, message and attachments are used to answer you.
          The basis is taking steps at your request before a contract (Article 6(1)(b)), or
          a legitimate interest in handling professional correspondence for other enquiries
          and business contacts (Article 6(1)(f)). Providing data is optional, but we may be
          unable to respond without the necessary details. Avoid unnecessary sensitive or
          third-party data. Messages are private and are not used for marketing.
        </p>
        <p>
          Non-client enquiries are deleted within 12 months of the last contact. Records
          needed for client work are retained for the engagement and applicable legal periods;
          accounting records covered by Italian Civil Code Article 2220 are retained for
          10 years. Necessary records may be kept for legal obligations (Article 6(1)(c)) or
          legal claims (Article 6(1)(f)) for the applicable obligation or claim period.
        </p>
        <p>
          GitHub hosts the website and Google provides the Gmail contact mailbox. Their
          infrastructure providers may process necessary service data. Authorities and legal
          or tax advisers may receive necessary data for specific obligations or claims.
          Data is not sold or publicly disclosed. Client engagements receive relevant
          processing information separately. Provider processing may take place in the US
          and other countries outside the EEA. Their linked policies describe adequacy
          decisions, the Data Privacy Framework where applicable, and standard contractual
          clauses; follow the transfer links above or contact us for safeguard information.
        </p>
        <p>
          Subject to GDPR conditions, you may request access, correction, erasure, restriction
          and portability, object to legitimate-interest processing on grounds relating to
          your situation, and withdraw consent where processing relies on it. We normally
          respond within one month and notify you within that month of any lawful extension.
          You may complain to the Italian Garante (linked above) or the competent EEA
          authority where you live, work or believe an infringement occurred.
        </p>
        <p>
          There are no analytics, marketing trackers, profiling or automated decisions with
          legal or similarly significant effects. The Cusdis comment embed is disabled.
          Read the <Link href="/cookies/">cookie notice</Link> for browser storage details.
          External websites and email services apply their own policies when you use their links.
        </p>

    </LegalPage>
  );
}
