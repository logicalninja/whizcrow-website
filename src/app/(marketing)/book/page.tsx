import BookingFlow from "@/components/booking/BookingFlow";
import JsonLd from "@/components/seo/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Book a Reputation Audit | WhizCrow Advisors",
    description: "Schedule an institutional discovery call with our senior strategy team to secure your digital asset value.",
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
