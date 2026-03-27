import React from "react";
import { Metadata } from "next";
import { ServiceLayout } from "@/components/marketing/ServiceLayout";

export const metadata: Metadata = {
    title: "Influencer Marketing Agency India — WhizInfluence",
    description: "WhizInfluence is a leading influencer marketing agency in India. We connect brands with authentic creators, manage campaigns, and deliver measurable ROI.",
    openGraph: {
        title: "Influencer Marketing Agency India — WhizInfluence",
        description: "WhizInfluence is a leading influencer marketing agency in India. We connect brands with authentic creators, manage campaigns, and deliver measurable ROI.",
        url: "https://whizcrow.com/services/influence",
        type: "website",
    },
    alternates: {
        canonical: "https://whizcrow.com/services/influence",
    },
    robots: { index: true, follow: true },
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
    ],
    faqs: [
        {
            question: "How do you find and vet the right influencers for our brand?",
            answer: "We go beyond follower count. We analyse engagement rate, audience demographics, content quality, brand alignment, past partnership performance, and audience authenticity (to filter out fake followers). Every shortlist we present has been manually reviewed — not just scraped from a database."
        },
        {
            question: "What's the difference between macro, micro, and nano influencers?",
            answer: "Macro influencers (100K–1M+ followers) deliver wide reach and brand awareness. Micro influencers (10K–100K) offer higher engagement and more targeted audiences at lower cost. Nano influencers (1K–10K) have the highest trust and conversion rates within tight communities. The right mix depends entirely on your campaign goals — we advise based on data, not defaults."
        },
        {
            question: "Do you handle influencer contracts and payments?",
            answer: "Yes. We manage the full commercial relationship: brief preparation, rate negotiation, contract drafting, content approval workflows, posting verification, and payment processing. You stay focused on your business while we handle the operational complexity."
        },
        {
            question: "How do you measure the ROI of influencer campaigns?",
            answer: "We track what matters: reach and impressions, engagement rate, click-through, promo code redemptions, affiliate link conversions, and direct attribution where trackable. We build measurement frameworks before launch so every campaign has clear KPIs — and we report against them honestly, not selectively."
        },
        {
            question: "Do you work with influencers outside India?",
            answer: "Yes. We run campaigns across India, the UAE, Southeast Asia, the UK, and beyond. For international campaigns, we work with a vetted regional network and manage the campaign centrally so you have one point of contact regardless of geography."
        },
        {
            question: "Can you run always-on influencer programmes rather than one-off campaigns?",
            answer: "Absolutely — and we recommend it. One-off activations create spikes. Always-on programmes build sustained trust and recall. We design ongoing ambassador and affiliate programmes that keep your brand in regular conversation with the audiences you care about, at a predictable monthly investment."
        }
    ]
};

export default function WhizInfluencePage() {
    return <ServiceLayout {...influencePageData} />;
}
