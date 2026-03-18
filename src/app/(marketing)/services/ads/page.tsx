import React from "react";
import { Metadata } from "next";
import { ServiceLayout } from "@/components/marketing/ServiceLayout";

export const metadata: Metadata = {
    title: "WhizAds | High-ROI Paid Search & Social Advertising",
    description: "Spend smart and scale fast. WhizAds manages high-performance campaigns across Google, Meta, and LinkedIn to deliver measurable return on ad spend.",
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
    ]
};

export default function WhizAdsPage() {
    return <ServiceLayout {...adsPageData} />;
}
