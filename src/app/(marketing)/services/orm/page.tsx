import React from "react";
import { Metadata } from "next";
import { ServiceLayout } from "@/components/marketing/ServiceLayout";

export const metadata: Metadata = {
    title: "WhizORM | Online Reputation Management & Wikipedia Defense",
    description: "Protect your name and control your narrative. WhizORM provides elite reputation management, negative content removal, and crisis response for high-profile brands and individuals.",
};

const ormPageData = {
    id: "orm",
    title: "WhizORM",
    heroSubtitle: "Protect Your Name",
    heroDescription: "When someone searches for you—or your company—what do they find? If the answer isn't \"exactly what I want them to see,\" you need WhizORM. We remove what shouldn't be there, respond when it matters, and control the narrative.",
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
    ]
};

export default function WhizORMPage() {
    return <ServiceLayout {...ormPageData} />;
}
