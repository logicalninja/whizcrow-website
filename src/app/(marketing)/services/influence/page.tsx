import React from "react";
import { Metadata } from "next";
import { ServiceLayout } from "@/components/marketing/ServiceLayout";

export const metadata: Metadata = {
    title: "WhizInfluence | Authentic Creator & Influencer Marketing",
    description: "Let others tell your story. WhizInfluence connects brands with authentic voices and creators to build trust and reach the exact audience you need.",
};

const influencePageData = {
    id: "influence",
    title: "WhizInfluence",
    heroSubtitle: "Let Others Tell Your Story",
    heroDescription: "People trust people more than they trust brands. WhizInfluence connects you with the right voices to tell your story to the exact audience you need to reach.",
    stats: [
        { label: "Trust Factor", value: "High", icon: "Heart" },
        { label: "Alignment", value: "Verified", icon: "CheckCircle" },
        { label: "Scale", value: "Unlimited", icon: "Globe" },
        { label: "Effect", value: "Immediate", icon: "Zap" }
    ],
    benefits: [
        { title: "Influencer Campaigns", desc: "Finding the right voices, managing the complex relationships, and measuring every result." },
        { title: "Creator Partners", desc: "Long-term relationships with creators who actually believe in your product and values." },
        { title: "Strategic Roadmap", desc: "What kind of content? Which platforms? What is the core message that converts?" },
        { title: "Performance Data", desc: "Did it actually work? We show you the hard data on reach, engagement, and direct ROI." },
        { title: "Content Rights", desc: "Elite management of usage rights so you can use creator content in your own ads." },
        { title: "Cultural Seeding", desc: "Getting your brand into the conversations that matter most to your demographic." }
    ],
    targetAudience: [
        { title: "Consumer Brands", desc: "You need massive reach, social proof, and people talking about your latest launch.", icon: "Megaphone" },
        { title: "D2C Companies", desc: "You need sales, high-converting sales content, and authentic reviews at scale.", icon: "Target" },
        { title: "Established Brands", desc: "You need to stay culturally relevant and find fresh voices to update your appeal.", icon: "Heart" },
        { title: "Lifestyle Products", desc: "You need to be seen in the right hands and the right places to build desire.", icon: "Share2" }
    ],
    steps: [
        { title: "Strategy", desc: "We define who your audience is, who they trust, and which voices actually matter." },
        { title: "Discovery", desc: "We find the right creators. Not just the ones with the biggest following, but the ones with the right fit." },
        { title: "Management", desc: "We handle the full lifecycle: outreach, legal negotiation, creative briefing, and approvals." },
        { title: "Measurement", desc: "We track metrics from reach to direct sales and provide a transparent impact report." }
    ],
    comparison: [
        { label: "Selection", others: "Find the biggest follower counts", us: "Find the right strategic alignment" },
        { label: "Validation", others: "Hope the content works", us: "Data-backed strategy first" },
        { label: "Reporting", others: "Report on vanity hearts/likes", us: "Report on real business outcomes" },
        { label: "Execution", others: "Junior teams managing chaos", us: "Experienced relationship professionals" }
    ],
    results: [
        "Trusted endorsements from key industry voices.",
        "Massive spike in social reach and awareness.",
        "High-performing creative for your own ads.",
        "Transparent data on reach and conversion.",
        "Deep cultural relevance within your niche."
    ],
    nextServices: [
        { title: "WhizPR", link: "/services/pr" },
        { title: "WhizDigital", link: "/services/digital" },
        { title: "WhizContent", link: "/services/content" }
    ]
};

export default function WhizInfluencePage() {
    return <ServiceLayout {...influencePageData} />;
}
