import React from "react";
import { Metadata } from "next";
import { ServiceLayout } from "@/components/marketing/ServiceLayout";

export const metadata: Metadata = {
    title: "Paid Advertising Agency & Google Ads Agency Mumbai",
    description: "WhizAds is a high-performance paid advertising agency in Mumbai. Google Ads, Meta Ads, LinkedIn campaigns — engineered for maximum ROAS and scalable growth.",
    openGraph: {
        title: "Paid Advertising Agency & Google Ads Agency Mumbai",
        description: "WhizAds is a high-performance paid advertising agency in Mumbai. Google Ads, Meta Ads, LinkedIn campaigns — engineered for maximum ROAS and scalable growth.",
        url: "https://whizcrow.com/services/ads",
        type: "website",
    },
    alternates: {
        canonical: "https://whizcrow.com/services/ads",
    },
    robots: { index: true, follow: true },
};

const adsPageData = {
    id: "ads",
    title: "WhizAds",
    heroSubtitle: "Spend Smart. Get Results",
    heroDescription: "Paid advertising is the fastest way to get customers. WhizAds makes every rupee count across search, social, and programmatic networks.",
    stats: [
        { label: "Performance", value: "High ROI", icon: "TrendingUp" },
        { label: "Targeting", value: "Precision", icon: "Target" },
        { label: "Reach", value: "Multichannel", icon: "Globe" },
        { label: "Scale", value: "High Velocity", icon: "Zap" }
    ],
    benefits: [
        { title: "Google Ads (SEM)", desc: "Show up at the top of search when people are actively looking for what you do." },
        { title: "LinkedIn Ads", desc: "Reach senior decision-makers and professionals with surgical accuracy by job role." },
        { title: "Meta Ads Performance", desc: "Facebook and Instagram ads that are visual, engaging, and highly scalable for D2C." },
        { title: "Programmatic Reach", desc: "Automated ad buying across thousands of premium websites to reach your target anywhere." },
        { title: "Omnichannel Strategy", desc: "A unified plan deciding exactly what to say, where to spend, and who to target." },
        { title: "Continuous ROI", desc: "Daily optimization to lower your costs and increase your measurable results." }
    ],
    targetAudience: [
        { title: "Growing Companies", desc: "You have a validated product, have budget, and need expert scale now.", icon: "TrendingUp" },
        { title: "E-commerce Brands", desc: "You need consistent sales and profitable returns on every dollar of ad spend.", icon: "MousePointer2" },
        { title: "B2B Lead Gen", desc: "You need high-quality leads and need to be seen by the right industry leaders.", icon: "PieChart" },
        { title: "Brand Defenders", desc: "You need to protect your brand keywords and maintain category dominance.", icon: "ShieldCheck" }
    ],
    steps: [
        { title: "Discovery", desc: "We audit your past performance and map your competitors' spend and strategy." },
        { title: "Setup", desc: "We build your campaigns, set up tracking, and create high-performing ad creative." },
        { title: "Launch & Test", desc: "We go live with multiple variations to find the winning combinations fast." },
        { title: "Daily Mastery", desc: "We never stop. We optimize keywords, bids, and creatives every single day." }
    ],
    comparison: [
        { label: "Logic", others: "Set and forget campaigns", us: "Daily high-velocity optimization" },
        { label: "Focus", others: "Report on high Impressions", us: "Report on real ROAS and Revenue" },
        { label: "Network", others: "Limited to just one platform", us: "Full-scale programmatic & social" },
        { label: "Team", others: "Junior ad managers", us: "Senior performance strategists" }
    ],
    results: [
        "Drastically lower cost per acquisition.",
        "Significant increase in profitable sales.",
        "Total market saturation for key terms.",
        "Clear, high-velocity performance data.",
        "Consistent brand reach across the web."
    ],
    nextServices: [
        { title: "WhizDigital", link: "/services/digital" },
        { title: "WhizCommerce", link: "/services/commerce" },
        { title: "WhizAI", link: "/services/ai" }
    ],
    faqs: [
        {
            question: "Which ad platforms do you manage?",
            answer: "We run campaigns across Google Ads (Search, Display, Shopping, YouTube), Meta Ads (Facebook and Instagram), LinkedIn Ads, TikTok Ads, Snapchat, Pinterest, X (Twitter), and programmatic display networks. Platform selection is driven by where your audience actually is and what delivers the best return for your specific goals."
        },
        {
            question: "What is the minimum ad budget you work with?",
            answer: "We generally recommend a minimum media spend of ₹50,000–₹1,00,000 per month to generate enough data for meaningful optimisation. Below that threshold, campaigns don't have sufficient volume to learn and compound. Our management fee is separate from your media spend. We're transparent about what's realistic at each budget level."
        },
        {
            question: "How do you optimise campaigns once they're live?",
            answer: "Daily. We monitor spend pacing, audience performance, creative fatigue, bid strategy, and conversion data every day — not weekly. When something works, we scale it quickly. When something doesn't, we fix it or cut it. This daily attention to detail is one of the primary reasons our clients' ROAS consistently outperforms industry benchmarks."
        },
        {
            question: "Do you handle ad creative and copy as well?",
            answer: "Yes — we handle the full campaign: strategy, targeting, creative (static images, carousels, video ads), ad copy, landing page recommendations, tracking setup, and ongoing optimisation. You can bring your own creative or use ours. We've found that campaigns with purpose-built creative consistently outperform those with repurposed brand assets."
        },
        {
            question: "What ROAS can we realistically expect?",
            answer: "It varies significantly by industry, product, and competition. Rather than give you a number that sounds good, we do a proper account audit or competitive analysis before projecting any return. What we can tell you is that across our active client portfolio, average ROAS consistently improves quarter over quarter — and we show you the data to prove it."
        },
        {
            question: "Do you manage retargeting and remarketing campaigns?",
            answer: "Yes — retargeting is one of the highest-ROI activities in paid media. We set up full funnel retargeting across Google and Meta, segmented by visitor behaviour (viewed product, added to cart, abandoned checkout, past purchaser). We also build lookalike audiences from your best customers to find new prospects at scale."
        }
    ]
};

export default function WhizAdsPage() {
    return <ServiceLayout {...adsPageData} />;
}
