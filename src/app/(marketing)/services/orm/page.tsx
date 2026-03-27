import React from "react";
import { Metadata } from "next";
import { ServiceLayout } from "@/components/marketing/ServiceLayout";
import { WhizBRAMSection } from "@/components/services/WhizBRAMSection";
import { ORMOutcomesSection, ORMWhoItIsForSection } from "@/components/services/ORMDeepSections";

export const metadata: Metadata = {
    title: "Online Reputation Management & ORM Services India",
    description: "WhizORM provides elite online reputation management and ORM services in India. Negative removal, crisis response, Wikipedia defense, and AI search protection.",
    openGraph: {
        title: "Online Reputation Management & ORM Services India",
        description: "WhizORM provides elite online reputation management and ORM services in India. Negative removal, crisis response, Wikipedia defense, and AI search protection.",
        url: "https://whizcrow.com/services/orm",
        type: "website",
    },
    alternates: {
        canonical: "https://whizcrow.com/services/orm",
    },
    robots: { index: true, follow: true },
};

const ormPageData = {
    id: "orm",
    title: "WhizORM",
    heroSubtitle: "Protect Your Reputation",
    heroDescription: "What shows up when someone Googles you? If it's not what you want them to see, that's a problem we fix. WhizORM monitors, repairs, and actively shapes your online reputation — so your first impression is always your best one.",
    stats: [
        { label: "Alert Response", value: "24/7 Live", icon: "Clock" },
        { label: "Clean Records", value: "99.9%", icon: "Target" },
        { label: "Crisis Speed", value: "High Velocity", icon: "Zap" },
        { label: "Protection", value: "Enterprise", icon: "Shield" }
    ],
    benefits: [
        { title: "Negative Removal", desc: "Negative search results removed. Done. Permanently or suppressed using elite technical protocols." },
        { title: "Crisis Response", desc: "A crisis happening right now? Our 24/7 response team activates within hours to contain the fallout." },
        { title: "Wikipedia Defense", desc: "Wikipedia pages under attack? We provide defense, monitoring, and edits that stick." },
        { title: "Due Diligence", desc: "Investor due diligence coming up? We ensure a clean narrative and controlled search results." },
        { title: "AI Search Protection", desc: "Command how you appear in AI search results like ChatGPT, Perplexity, and Google Gemini." },
        { title: "Executive Shield", desc: "Bespoke protection for founders, CEOs, and leadership teams whose names are assets." }
    ],
    targetAudience: [
        { title: "Public Companies", desc: "IPOs. Investor scrutiny. Market cap protection. One negative article can cost millions. We make sure it doesn't.", icon: "Factory" },
        { title: "Founders & Executives", desc: "Your personal reputation is tied to your company's value. We protect both with absolute discretion.", icon: "UserRound" },
        { title: "Growing Brands", desc: "Negative reviews or competitor attacks? We clean it up so you can move forward with confidence.", icon: "TrendingUp" },
        { title: "High-Profile Individuals", desc: "Public figures and celebrities. When you're in the spotlight, we're in the background defending your name.", icon: "Search" }
    ],
    steps: [
        { title: "Discovery", desc: "We analyze everything online about you. Search results, social media, news, forums, and AI citations." },
        { title: "Strategy", desc: "Based on data, we build a plan. What to remove, what to suppress, and what high-authority narratives to create." },
        { title: "Execution", desc: "Our team gets to work. Legal where needed, technical where possible, strategic always." },
        { title: "Monitoring", desc: "We don't stop. 24/7 monitoring ensures your name stays protected against new threats." }
    ],
    comparison: [
        { label: "Action Plan", others: "Hope the problem goes away", us: "AI-powered analysis and action" },
        { label: "Team Depth", others: "Assign juniors to your account", us: "Experienced strategic veterans" },
        { label: "Reporting", others: "Report on vanity activity", us: "Report on measurable results" },
        { label: "Approach", others: "Generic, slow suppressions", us: "Precision technical neutralization" }
    ],
    results: [
        "Negative results on page 1? Moved or removed.",
        "Wikipedia accurate, stable, and monitored.",
        "Investor due diligence searches stay clean.",
        "AI citations optimized for accuracy.",
        "Emergency crises contained in record time."
    ],
    nextServices: [
        { title: "WhizDigital", link: "/services/digital" },
        { title: "WhizAI", link: "/services/ai" },
        { title: "WhizPR", link: "/services/pr" }
    ],
    faqs: [
        {
            question: "How long does it take to remove negative search results?",
            answer: "It depends on the source and severity. Content hosted on platforms we can directly address — reviews, forum posts, or low-authority sites — can often be removed or suppressed within 30–90 days. Deeply embedded news articles may take 3–6 months of strategic suppression. We give you a realistic timeline during your initial assessment, not an optimistic one."
        },
        {
            question: "Can you remove content from Google permanently?",
            answer: "In many cases, yes — especially content that violates Google's policies, is factually incorrect, or can be removed from the source. Where full removal isn't possible, we deploy proven suppression techniques that push negative results off page one and replace them with positive, authoritative content you control."
        },
        {
            question: "What is WhizBRAM™ and how is my score calculated?",
            answer: "WhizBRAM™ is our proprietary Brand Reputation Assessment Model — a 6-point diagnostic that gives your online reputation a single score from 0–100. It measures Sentiment (30%), Page-1 Authority (20%), Executive Influence (15%), Crisis Resilience (15%), Engagement (10%), and Trust & Compliance (10%). We run this audit at the start of every engagement so you know exactly where you stand and where we're taking you."
        },
        {
            question: "Do you handle Wikipedia page defense?",
            answer: "Yes. Wikipedia is one of the most visible and vulnerable surfaces for reputation attacks. Our team includes experienced Wikipedia editors who monitor pages for vandalism, respond to inaccurate edits, build talk-page consensus, and ensure your article is stable, neutral, and properly sourced."
        },
        {
            question: "Can you protect my reputation on AI tools like ChatGPT and Perplexity?",
            answer: "Yes — this is a rapidly growing and critical area. AI search tools pull from indexed web content and citations. We build high-authority, factually accurate content across the right sources so that when AI models generate summaries about you, they surface the narrative you control, not outdated or inaccurate information."
        },
        {
            question: "Is ORM work completely confidential?",
            answer: "Absolutely. Every WhizORM engagement operates under strict NDA. We do not disclose client names, do not publish case studies without explicit consent, and our team operates with full information security protocols certified under ISO 27001. Your situation stays private."
        }
    ]
};

export default function WhizORMPage() {
    const extraSections = (
        <>
            <WhizBRAMSection />
            <ORMOutcomesSection />
            <ORMWhoItIsForSection />
        </>
    );
    return <ServiceLayout {...ormPageData} extraSection={extraSections} showTechLogos />;
}
