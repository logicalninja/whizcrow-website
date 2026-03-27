import type { Metadata } from "next";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
    title: "About WhizCrow — Marketing Agency Team Mumbai",
    description: "Learn about WhizCrow, a full-service marketing agency founded in Mumbai in 2017. Meet our team of MarComm, AI, and data specialists driving real business growth.",
    openGraph: {
        title: "About WhizCrow — Marketing Agency Team Mumbai",
        description: "Learn about WhizCrow, a full-service marketing agency founded in Mumbai in 2017. Meet our team of MarComm, AI, and data specialists driving real business growth.",
        url: "https://whizcrow.com/about",
        type: "website",
    },
    alternates: {
        canonical: "https://whizcrow.com/about",
    },
    robots: { index: true, follow: true },
};

export default function AboutPage() {
    return <AboutPageContent />;
}
