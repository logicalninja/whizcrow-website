import type { Metadata } from "next";
import { getArticles } from '@/lib/articles'
import IntelligencePageContent from './InsightsPageContent'

export const metadata: Metadata = {
    title: "Marketing Insights & Digital Marketing Blog",
    description: "Explore WhizCrow's marketing insights blog. Expert articles on SEO, paid advertising, branding, AI marketing, content strategy, and digital marketing in India.",
    openGraph: {
        title: "Marketing Insights & Digital Marketing Blog",
        description: "Explore WhizCrow's marketing insights blog. Expert articles on SEO, paid advertising, branding, AI marketing, content strategy, and digital marketing in India.",
        url: "https://whizcrow.com/blog",
        type: "website",
    },
    alternates: {
        canonical: "https://whizcrow.com/blog",
    },
    robots: { index: true, follow: true },
};

export default async function Page() {
    const articles = await getArticles()

    return <IntelligencePageContent articles={articles} />
}
