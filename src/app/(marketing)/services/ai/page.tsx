import React from "react";
import { Metadata } from "next";
import { ServiceLayout } from "@/components/marketing/ServiceLayout";

export const metadata: Metadata = {
    title: "WhizAI | Automated AI Marketing & Intelligent Search",
    description: "Automate the busy work. WhizAI deploys intelligent sales agents and AI receptionists to handle follow-ups and scale your business growth 24/7.",
};

const aiPageData = {
    id: "ai",
    title: "WhizAI",
    heroSubtitle: "Automate the Busy Work",
    heroDescription: "You didn't start a business to spend hours on the phone or chase leads. WhizAI deploys intelligent agents to handle the complexity, so you can focus on growth.",
    stats: [
        { label: "Availability", value: "24/7/365", icon: "Clock" },
        { label: "Efficiency", value: "AI-First", icon: "Cpu" },
        { label: "Scalability", value: "Unlimited", icon: "Zap" },
        { label: "Support", value: "Always-On", icon: "Headphones" }
    ],
    benefits: [
        { title: "Websites + Funnels", desc: "Professional, high-speed sites engineered to turn anonymous visitors into paying customers." },
        { title: "CRM Intelligence", desc: "Track every lead and never miss a follow-up with enterprise-grade CRM automation." },
        { title: "AI Receptionist", desc: "Intelligent voice agents that answer calls, book appointments, and take messages while you sleep." },
        { title: "AI Sales Agents", desc: "Automated follow-up sequences that qualify prospects and schedule demos at high velocity." },
        { title: "Conversational AI", desc: "Web chat that actually understands your business and helps customers instantly." },
        { title: "Process Engineering", desc: "Custom automation workflows that eliminate repetitive tasks across your entire organization." }
    ],
    targetAudience: [
        { title: "Early Startups", desc: "You need to scale fast and professionalize your intake without a massive headcount.", icon: "Rocket" },
        { title: "Fast-Growing Teams", desc: "You need follow-ups that never fail and tracking that keeps pace with your growth.", icon: "Users" },
        { title: "Established Firms", desc: "You want to pilot AI in specific departments to drive efficiency and cut overhead.", icon: "Lock" },
        { title: "Service Businesses", desc: "You need your phones answered and appointments booked 24/7 without a front desk.", icon: "Sparkles" }
    ],
    steps: [
        { title: "Intake", desc: "A brief 30-minute discovery call to understand your pain points and business logic." },
        { title: "Build", desc: "Our engineering team builds your custom agent or workflow in 1-2 weeks." },
        { title: "Launch", desc: "We handle the full technical deployment and train your team on the new tools." },
        { title: "Support", desc: "Ongoing monthly refinement to ensure your AI agents stay sharp and accurate." }
    ],
    comparison: [
        { label: "Engagement", others: "Sell software and disappear", us: "Set up, support, and refine" },
        { label: "Complexity", others: "Assume you are technical", us: "Assume you are busy (we do it for you)" },
        { label: "Service", others: "Generic support tickets", us: "Dedicated elite account managers" },
        { label: "Logic", others: "Rigid, basic templates", us: "Deep custom process engineering" }
    ],
    results: [
        "Calls answered 24/7 without new hires.",
        "Leads tracked and nurtured automatically.",
        "Sales follow-ups happening at 10x speed.",
        "Technology that works for you, not against you.",
        "Hundreds of hours reclaimed every single month."
    ],
    nextServices: [
        { title: "WhizDigital", link: "/services/digital" },
        { title: "WhizContent", link: "/services/content" },
        { title: "WhizORM", link: "/services/orm" }
    ]
};

export default function WhizAIPage() {
    return <ServiceLayout {...aiPageData} />;
}
