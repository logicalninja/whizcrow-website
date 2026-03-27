import React from "react";
import { Metadata } from "next";
import { ServiceLayout } from "@/components/marketing/ServiceLayout";

export const metadata: Metadata = {
    title: "SEO & Digital Marketing Agency in Mumbai — WhizDigital",
    description: "WhizDigital delivers full-funnel SEO and digital marketing in Mumbai. Search engine optimisation, content, paid ads, and lead generation — all data-driven.",
    openGraph: {
        title: "SEO & Digital Marketing Agency in Mumbai — WhizDigital",
        description: "WhizDigital delivers full-funnel SEO and digital marketing in Mumbai. Search engine optimisation, content, paid ads, and lead generation — all data-driven.",
        url: "https://whizcrow.com/services/digital",
        type: "website",
    },
    alternates: {
        canonical: "https://whizcrow.com/services/digital",
    },
    robots: { index: true, follow: true },
};

const digitalPageData = {
    id: "digital",
    title: "WhizDigital",
    heroSubtitle: "Get Found. Get Customers",
    heroDescription: "You need more than website visitors. You need customers. WhizDigital delivers full-funnel marketing that turns searches into sales through data-driven precision.",
    stats: [
        { label: "Traffic Quality", value: "High Intent", icon: "Target" },
        { label: "Growth Index", value: "+240% Avg.", icon: "TrendingUp" },
        { label: "Optimization", value: "Velocity", icon: "Zap" },
        { label: "Reach", value: "Global", icon: "Globe" }
    ],
    benefits: [
        { title: "SEO Domination", desc: "Show up on Google when people search for what you do. We win the keywords that drive revenue." },
        { title: "Content Marketing", desc: "Blogs, articles, and resources that attract strangers and convert them into loyal customers." },
        { title: "Paid Performance", desc: "Google, LinkedIn, and Meta ads. Every rupee spent is engineered to deliver a multiplier return." },
        { title: "Social Authority", desc: "Build an audience that actually cares about your brand, not just vanity metrics like follower counts." },
        { title: "Lead Generation", desc: "Turn passive visitors into active conversations with high-converting funnels and landing pages." },
        { title: "Retention Email", desc: "Stay top of mind with email marketing that provides value and drives repeat business." }
    ],
    targetAudience: [
        { title: "Growing Companies", desc: "You need more customers and marketing that delivers measurable returns without breaking the bank.", icon: "TrendingUp" },
        { title: "E-commerce Brands", desc: "You need more sales, traffic that converts, and ads that pay for themselves instantly.", icon: "MousePointerClick" },
        { title: "B2B Companies", desc: "You need qualified leads and content that demonstrates your deep strategic expertise.", icon: "Users" },
        { title: "Enterprise Teams", desc: "You need senior thinking, business alignment, and reporting that makes sense to leadership.", icon: "BarChart3" }
    ],
    steps: [
        { title: "Audit", desc: "Where are you today? We start with deep data analysis of your current performance and competitors." },
        { title: "Strategy", desc: "Based on your specific goals, we build a plan with clear budgets and timelines." },
        { title: "Execution", desc: "Our specialist teams get to work on SEO, content creation, and high-velocity ad management." },
        { title: "Measure & Adjust", desc: "We track everything. If it works, we scale. If it doesn't, we pivot. No ego, just results." }
    ],
    comparison: [
        { label: "Decision Basis", others: "Guess what might work", us: "Data-driven signals only" },
        { label: "Goal Focus", others: "Report on vanity metrics", us: "Report on business revenue" },
        { label: "Management", others: "Account managers/juniors", us: "Strategic category experts" },
        { label: "Optimization", others: "Monthly set-and-forget", us: "Continuous daily refinement" }
    ],
    results: [
        "Higher rankings for the keywords that matter.",
        "Significant increase in high-intent traffic.",
        "Higher conversion rates across the funnel.",
        "Predictable lower cost per acquisition.",
        "Radical transparency in performance reporting."
    ],
    nextServices: [
        { title: "WhizAI", link: "/services/ai" },
        { title: "WhizAds", link: "/services/ads" },
        { title: "WhizContent", link: "/services/content" }
    ],
    faqs: [
        {
            question: "How long does SEO take to show results?",
            answer: "Honest answer: most campaigns see meaningful movement in 3–6 months, with compounding gains through months 6–12. It depends on your domain's existing authority, keyword competition, and how much ground needs to be covered technically. We share a clear roadmap with milestones so you always know what to expect and when."
        },
        {
            question: "What exactly is included in WhizDigital?",
            answer: "WhizDigital covers the full digital marketing stack: technical SEO, on-page and off-page optimisation, content strategy and creation, local SEO, link building, social media authority, and lead generation. We treat these as one connected system — not separate activities — because that's how compounding growth actually works."
        },
        {
            question: "Do you guarantee first-page rankings?",
            answer: "No ethical SEO agency can guarantee specific rankings — search algorithms change, and anyone who promises otherwise is misleading you. What we guarantee is rigorous, transparent execution of proven strategy. Our track record across 200+ campaigns consistently delivers strong page-one presence for the keywords that matter to your business."
        },
        {
            question: "How do you measure success?",
            answer: "We don't report on vanity metrics. WhizDigital reports on the numbers that actually affect your bottom line: organic traffic growth, keyword ranking improvements, conversion rates, cost per acquisition, and qualified leads entering your CRM. You see exactly what changed and what drove it."
        },
        {
            question: "Do you handle technical SEO and site audits?",
            answer: "Yes — technical SEO is foundational to everything else we do. We conduct comprehensive site audits covering page speed, crawlability, indexation, mobile usability, Core Web Vitals, structured data, internal linking, and canonicalisation. Problems here limit every other investment, so we fix them first."
        },
        {
            question: "Can you help with local SEO for a Mumbai-based business?",
            answer: "Absolutely. Local SEO — Google Business Profile optimisation, local citations, geo-targeted content, and review management — is a major strength. Whether you're targeting customers in Andheri, across Mumbai, or in multiple Indian cities, we build the local visibility that puts you ahead of nearby competitors."
        }
    ]
};

export default function WhizDigitalPage() {
    return <ServiceLayout {...digitalPageData} />;
}
