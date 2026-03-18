import React from "react";
import { Metadata } from "next";
import { ServiceLayout } from "@/components/marketing/ServiceLayout";

export const metadata: Metadata = {
    title: "WhizDigital | Full-Funnel Digital Marketing & SEO",
    description: "Get found and get customers. WhizDigital delivers predictable search visibility and high-intent lead generation through data-driven digital strategies.",
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
    ]
};

export default function WhizDigitalPage() {
    return <ServiceLayout {...digitalPageData} />;
}
