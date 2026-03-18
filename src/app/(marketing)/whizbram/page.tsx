import { Metadata } from "next";
import WhizBramClient from "./WhizBramClient";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "WhizBRAM™: The Institutional Standard | WhizCrow",
    description: "The proprietary Brand Reputation & Authority Matrix (0-100) and institutional framework for digital trust and corporate governance.",
};

export default function WhizBramPage() {
    return (
        <>
            <JsonLd type="WebPage" data={{
                name: "The WhizBRAM™ Framework",
                description: "The proprietary Brand Reputation & Authority Matrix (0-100) and institutional framework for digital trust and corporate governance."
            }} />
            <JsonLd type="BreadcrumbList" data={{
                itemListElement: [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://whizcrow.com" },
                    { "@type": "ListItem", "position": 2, "name": "WhizBRAM", "item": "https://whizcrow.com/whizbram" }
                ]
            }} />
            <WhizBramClient />
        </>
    );
}
