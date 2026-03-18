import { LegalLayout } from "@/components/legal/LegalLayout";
import { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Terms of Service | Service Agreement",
    description: "Legal terms governing the use of WhizCrow services, subject to Indian Jurisdiction.",
};

export default function TermsOfService() {
    return (
        <>
            <JsonLd type="WebPage" data={{
                name: "Terms of Service | WhizCrow",
                description: "Legal terms governing the use of WhizCrow services, subject to Indian Jurisdiction."
            }} />
            <JsonLd type="BreadcrumbList" data={{
                itemListElement: [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://whizcrow.com" },
                    { "@type": "ListItem", "position": 2, "name": "Legal", "item": "https://whizcrow.com/legal/terms" },
                    { "@type": "ListItem", "position": 3, "name": "Terms of Service", "item": "https://whizcrow.com/legal/terms" }
                ]
            }} />
            <LegalLayout title="Terms of Service" lastUpdated="January 1, 2026">
                <p className="lead">
                    These Terms of Service ("Terms") constitute a legally binding agreement between you ("Client", "User") and <strong>WhizCrow Technologies Pvt. Ltd.</strong> ("WhizCrow"), a company incorporated under the Companies Act, 2013, having its registered office in Mumbai, India.
                </p>
                <p>
                    By accessing our platform, engaging our services, or utilizing the WhizBRAM™ framework, you expressly agree to be bound by these Terms. If you are entering into this agreement on behalf of a corporation, you warrant that you have the authority to bind that entity.
                </p>

                <hr className="my-8 border-stone-200" />

                <h2 id="1-services-and-mandate">1. Services & Ethical Mandate</h2>
                <p>WhizCrow provides specialized reputation intelligence, search engineering, and crisis management services. Our operations are governed by a strict <strong>White-Hat Mandate</strong>:</p>
                <ul>
                    <li>We do not engage in "Dark PR," synthetic defamation, hacking, or DDoS attacks.</li>
                    <li>We do not guarantee specific search rankings or removals, as these are controlled by third-party platforms (Google, etc.), though we employ best-in-class methodologies to influence them.</li>
                    <li>Services are strictly for the restoration and amplification of truthful, verifiable narratives.</li>
                </ul>

                <h2 id="2-intellectual-property">2. Intellectual Property Rights</h2>
                <p>
                    <strong>WhizBRAM™ License:</strong> The Brand Reputation Authority Metric (WhizBRAM™) framework, including its algorithms, scoring logic, and diagnostic reports, remains the sole intellectual property of WhizCrow.
                </p>
                <p>
                    Clients are granted a limited, non-exclusive, non-transferable license to utilize the reports and insights generated for internal business strategy only. You may not reverse-engineer, resell, or publicly disclose the proprietary methodologies underlying our services without written consent.
                </p>

                <h2 id="3-payments-and-taxes">3. Payments, GST & Refunds</h2>
                <ul>
                    <li><strong>Fees:</strong> All fees are payable in advance or as per the specific Service Order.</li>
                    <li><strong>Taxes:</strong> For Indian clients, Goods and Services Tax (GST) at 18% will be levied on all invoices as per applicable laws. International clients may be subject to reverse charge mechanisms in their respective jurisdictions.</li>
                    <li><strong>Refunds:</strong> Due to the resource-intensive nature of our work (real-time monitoring, content production), all fees paid are non-refundable unless explicitly stated in a specific Statement of Work (SOW).</li>
                </ul>

                <h2 id="4-confidentiality">4. Confidentiality</h2>
                <p>
                    We recognize the sensitive nature of reputation management. WhizCrow executes strict Non-Disclosure Agreements (NDAs) for all corporate engagements. We shall not disclose the existence of our relationship or any client data to third parties, except:
                </p>
                <ul>
                    <li>Where required by law (e.g., court order).</li>
                    <li>Where the Client has provided explicit written consent (e.g., for a case study).</li>
                    <li>To our vetted sub-processors (e.g., cloud providers) solely for service delivery.</li>
                </ul>

                <h2 id="5-limitation-of-liability">5. Limitation of Liability</h2>
                <p>
                    To the maximum extent permitted by Indian law, WhizCrow shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, market capitalization, or goodwill.
                </p>
                <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500 my-4 not-prose">
                    <p className="text-sm text-stone-800 font-medium">
                        Our liability for any claim arising out of these Terms shall not exceed the total amount paid by the Client to WhizCrow in the six (6) months preceding the event giving rise to the claim. We are not liable for "Acts of God," independent viral events, or pre-existing reputation debt.
                    </p>
                </div>

                <h2 id="6-dispute-resolution">6. Jurisdiction & Dispute Resolution</h2>
                <p>
                    These Terms shall be governed by and construed in accordance with the laws of the <strong>Republic of India</strong>.
                </p>
                <ul>
                    <li><strong>Amicable Settlement:</strong> Parties shall first attempt to resolve disputes amicably within 30 days.</li>
                    <li><strong>Arbitration:</strong> Failing settlement, disputes shall be referred to sole arbitration in accordance with the <strong>Arbitration and Conciliation Act, 1996</strong>. The seat and venue of arbitration shall be <strong>Mumbai, India</strong>. The language shall be English.</li>
                    <li><strong>Exclusive Jurisdiction:</strong> Subject to arbitration, the Courts in Mumbai, India shall have exclusive jurisdiction over any matters arising from these Terms.</li>
                </ul>

                <h2 id="7-force-majeure">7. Force Majeure</h2>
                <p>
                    WhizCrow is not liable for failure to perform its obligations if such failure is as a result of Acts of God (including fire, flood, earthquake, storm, hurricane or other natural disaster), war, invasion, act of foreign enemies, hostilities (regardless of whether war is declared), civil war, rebellion, revolution, insurrection, military or usurped power or confiscation, terrorist activities, nationalization, government sanction, blockage, embargo, labor dispute, strike, lockout or interruption or failure of electricity or telephone service.
                </p>
            </LegalLayout>
        </>
    );
}
