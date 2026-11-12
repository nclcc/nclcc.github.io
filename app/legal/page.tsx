import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Legal notice | Nicolò Ciccarone",
  description: "Identity, address and contact information for the operator of Complexa Labs.",
};

export default function Legal() {
  return (
    <LegalPage title="Legal notice">
        <h3>Website operator and contact details</h3>
        <p>
          The website https://nclcc.github.io is operated by Nicolò Ciccarone and presents
          activities and content under the name Complexa Labs.
        </p>
        <address className="not-italic">
          Nicolò Ciccarone<br />
          Piazza Caduti del Terrorismo, 10<br />
          Bitonto, Bari, Italy<br />
          VAT number: IT09082330722<br />
          Email: <a href="mailto:niciccarone@gmail.com">niciccarone@gmail.com</a>
        </address>
        <h3>Content and services</h3>
        <p>
          This website presents professional experience, research and articles. You can
          send consulting enquiries by email. There are no online purchases, payments
          or automated contract formation. The scope, fees and terms of any engagement
          are agreed separately.
        </p>
        <p>
          Articles are provided for information and research. Examples, models and results
          must be considered in context and do not constitute investment recommendations.
        </p>
        <h3>Content rights</h3>
        <p>
          Rights in original content belong to their respective authors. Third-party names,
          trademarks and materials remain the property of their respective owners. For reuse
          beyond what the law or an explicit licence permits, contact the rights holder.
        </p>
        <h3>External links and reporting issues</h3>
        <p>
          External links lead to websites operated by third parties with their own terms
          and privacy notices. To report errors, accessibility issues or content concerns,
          email the address above and identify the page concerned.
        </p>

    </LegalPage>
  );
}
