import BookingFlow from "@/components/booking/BookingFlow";
import JsonLd from "@/components/seo/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Book a Free Marketing Strategy Call — WhizCrow",
    description: "Book a free marketing strategy consultation with WhizCrow's senior team. Get an honest plan for SEO, paid ads, branding, or your full marketing strategy.",
    openGraph: {
        title: "Book a Free Marketing Strategy Call — WhizCrow",
        description: "Book a free marketing strategy consultation with WhizCrow's senior team. Get an honest plan for SEO, paid ads, branding, or your full marketing strategy.",
        url: "https://whizcrow.com/book",
        type: "website",
    },
    alternates: {
        canonical: "https://whizcrow.com/book",
    },
    robots: { index: true, follow: true },
};

export default function BookPage() {
    return (
        <>
            <JsonLd type="ContactPage" data={{
                name: "Book a Reputation Audit",
                description: "Book an institutional discovery call with WhizCrow advisors."
            }} />
            <JsonLd type="BreadcrumbList" data={{
                itemListElement: [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://whizcrow.com" },
                    { "@type": "ListItem", "position": 2, "name": "Book Audit", "item": "https://whizcrow.com/book" }
                ]
            }} />
            <BookingFlow />
        </>
    );
}
