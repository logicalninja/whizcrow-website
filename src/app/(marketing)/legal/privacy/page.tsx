import { LegalLayout } from "@/components/legal/LegalLayout";
import { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Privacy Policy | Data Sovereignty & DPDP Compliance",
    description: "WhizCrow's commitment to data privacy under the Digital Personal Data Protection Act, 2023 (India) and GDPR.",
};

export default function PrivacyPolicy() {
    return (
        <>
            <JsonLd type="WebPage" data={{
                name: "Privacy Policy | WhizCrow",
                description: "WhizCrow's commitment to data privacy under the Digital Personal Data Protection Act, 2023 (India) and GDPR."
            }} />
            <JsonLd type="BreadcrumbList" data={{
                itemListElement: [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://whizcrow.com" },
                    { "@type": "ListItem", "position": 2, "name": "Legal", "item": "https://whizcrow.com/legal/privacy" },
                    { "@type": "ListItem", "position": 3, "name": "Privacy Policy", "item": "https://whizcrow.com/legal/privacy" }
                ]
            }} />
            <LegalLayout title="Privacy Policy" lastUpdated="January 1, 2026">
                <p className="lead">
                    <strong>WhizCrow Technologies Pvt. Ltd.</strong> ("WhizCrow", "We", "Us") serves as a global steward of reputation intelligence. Headquartered in Mumbai, India, we recognize data privacy not merely as a compliance requirement but as a fundamental tenet of corporate integrity.
                </p>
                <p>
                    This Privacy Policy outlines our comprehensive framework for data processing, aligned with the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> of India, the <strong>Information Technology Act, 2000</strong>, and international standards including the <strong>GDPR</strong> (EU) and <strong>CCPA</strong> (California).
                </p>

                <hr className="my-8 border-stone-200" />

                <h2 id="1-governance-and-jurisdiction">1. Governance & Jurisdiction</h2>
                <p>
                    As an Indian-registered entity, our primary data governance framework is mandated by the laws of the Republic of India. However, recognizing the borderless nature of digital reputation, we implement a "highest common denominator" approach to privacy:
                </p>
                <ul>
                    <li><strong>India:</strong> Compliance with the DPDP Act, 2023 and the IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.</li>
                    <li><strong>European Union:</strong> Adherence to Articles 13 & 14 of the GDPR for data principals within the EEA.</li>
                    <li><strong>United States:</strong> Compliance with CCPA/CPRA for California residents.</li>
                </ul>

                <h2 id="2-data-collection">2. Corporate & Personal Data Collection</h2>
                <p>We distinguish between "Corporate Intelligence" (publicly available data) and "Personal Data" (identifiable information).</p>

                <h3>2.1 Personal Data We Process</h3>
                <p>We collect only what is strictly necessary ("Data Minimization"):</p>
                <ul>
                    <li><strong>Identity Data:</strong> Full Name, Professional Designation, Corporate Email ID.</li>
                    <li><strong>Authentication Data:</strong> Login credentials, API keys, and device telemetry (IP address, User Agent) for security auditing.</li>
                    <li><strong>Financial Data:</strong> GSTIN, PAN (for Indian clients), and billing coordinates. Payment processing is handled by PCI-DSS Level 1 certified gateways (e.g., Stripe, Razorpay); we do not store raw card data.</li>
                </ul>

                <h3>2.2 Reputation Intelligence Data</h3>
                <p>
                    The WhizBRAM™ engine aggregates <strong>publicly available data</strong> from the open web (news sites, social media, forums, search indices). This processing is based on the legal ground of "Legitimate Interest" to provide reputation analysis services. We do not scrape private profiles or breach platform Terms of Service.
                </p>

                <h2 id="3-purpose-of-processing">3. Purpose of Processing</h2>
                <p>Your data is utilized for specific, lawful purposes:</p>
                <ul>
                    <li><strong>Service Delivery:</strong> To generate Reputation Impact Scores, Crisis Alerts, and Search Analysis.</li>
                    <li><strong>Security & Integrity:</strong> To detect bot farms, synthetic traffic anomalies, and unauthorized access attempts.</li>
                    <li><strong>Legal Compliance:</strong> To establish audit trails as required by the IT Act, 2000 and for tax/GST filing purposes.</li>
                    <li><strong>Communication:</strong> To send critical service alerts, crisis notifications, and ROI reports.</li>
                </ul>

                <h2 id="4-data-localization-and-transfer">4. Data Localization & International Transfer</h2>
                <p>
                    <strong>For Indian Data Principals:</strong> Critical personal and financial data is stored on secure servers located within India (AWS Mumbai Region), complying with data localization norms where applicable.
                </p>
                <p>
                    <strong>Cross-Border Transfer:</strong> For operational redundancy or global analysis, data may flow to servers in the US or EU. Such transfers are protected via <strong>Standard Contractual Clauses (SCCs)</strong> and strict Data Processing Agreements (DPAs) ensuring equivalent levels of protection.
                </p>

                <h2 id="5-data-security-practices">5. Security Infrastructure</h2>
                <p>
                    We do not rely on "reasonable" security; we employ <strong>maximum</strong> security.
                </p>
                <ul>
                    <li><strong>Encryption:</strong> AES-256 bit encryption for data at rest; TLS 1.3 for data in transit.</li>
                    <li><strong>Access Control:</strong> Strict Role-Based Access Control (RBAC) enforced with Multi-Factor Authentication (MFA).</li>
                    <li><strong>Audit Logs:</strong> Immutable logs of all data access and modifications are retained for forensic analysis.</li>
                </ul>

                <h2 id="6-rights-of-data-principals">6. Rights of Data Principals</h2>
                <p>Under the DPDP Act and GDPR, you possess the following non-negotiable rights:</p>
                <ul>
                    <li><strong>Right to Access:</strong> Request a summary of personal data being processed.</li>
                    <li><strong>Right to Correction:</strong> Demand rectification of inaccurate or misleading data.</li>
                    <li><strong>Right to Erasure:</strong> Request deletion of personal data once the purpose is served, barring statutory retention requirements (e.g., Tax Laws).</li>
                    <li><strong>Right to Grievance Redressal:</strong> The right to readily available means of grievance resolution.</li>
                </ul>

                <div className="bg-stone-100 p-6 rounded-xl border-l-4 border-stone-900 mt-8 not-prose">
                    <h3 className="font-bold text-lg text-stone-900 mb-2">Grievance Redressal Mechanism</h3>
                    <p className="text-sm text-stone-600 mb-4">
                        In accordance with the Information Technology Act, 2000 and the DPDP Act, 2023, please direct privacy concerns to our appointed officer:
                    </p>
                    <div className="space-y-1 text-sm font-medium text-stone-800">
                        <p><strong>Grievance Officer:</strong> Head of Legal Compliance</p>
                        <p><strong>Address:</strong> WhizCrow Technologies Pvt. Ltd., Mumbai, Maharashtra, India</p>
                        <p><strong>Email:</strong> <a href="mailto:hello@whizcrow.com" className="text-primary hover:underline">hello@whizcrow.com</a></p>
                        <p><strong>Response Time:</strong> Within 72 hours of receipt.</p>
                    </div>
                </div>
            </LegalLayout>
        </>
    );
}
