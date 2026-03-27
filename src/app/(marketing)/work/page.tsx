import type { Metadata } from "next";
import WorkPageContent from "./WorkPageContent";

export const metadata: Metadata = {
    title: "Marketing Case Studies & Digital Results — Our Work",
    description: "Explore WhizCrow's marketing case studies. Real results in SEO, paid ads, branding, ORM, AI automation, and e-commerce across 500+ client projects.",
    openGraph: {
        title: "Marketing Case Studies & Digital Results — Our Work",
        description: "Explore WhizCrow's marketing case studies. Real results in SEO, paid ads, branding, ORM, AI automation, and e-commerce across 500+ client projects.",
        url: "https://whizcrow.com/work",
        type: "website",
    },
    alternates: {
        canonical: "https://whizcrow.com/work",
    },
    robots: { index: true, follow: true },
};

export default function WorkPage() {
    return <WorkPageContent />;
}
