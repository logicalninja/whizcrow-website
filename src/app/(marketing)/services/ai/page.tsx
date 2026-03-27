import React from "react";
import { Metadata } from "next";
import { ServiceLayout } from "@/components/marketing/ServiceLayout";

export const metadata: Metadata = {
    title: "AI Marketing Automation Agency — WhizAI India",
    description: "WhizAI is an AI marketing automation agency in India. We deploy intelligent AI sales agents, receptionists, CRM automation, and custom AI workflows 24/7.",
    openGraph: {
        title: "AI Marketing Automation Agency — WhizAI India",
        description: "WhizAI is an AI marketing automation agency in India. We deploy intelligent AI sales agents, receptionists, CRM automation, and custom AI workflows 24/7.",
        url: "https://whizcrow.com/services/ai",
        type: "website",
    },
    alternates: {
        canonical: "https://whizcrow.com/services/ai",
    },
    robots: { index: true, follow: true },
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
    ],
    faqs: [
        {
            question: "What is an AI receptionist and how does it work?",
            answer: "An AI receptionist is an intelligent agent deployed on your website, WhatsApp, or phone line that handles inbound queries 24/7 — answering questions, qualifying leads, booking appointments, and routing urgent requests to your team. It's trained on your specific business data, speaks your brand voice, and connects directly to your CRM."
        },
        {
            question: "Will AI automation replace my existing team?",
            answer: "No — it frees them. Our AI deployments are designed to eliminate repetitive, low-value tasks: answering FAQs, sending follow-up emails, logging CRM entries, scheduling calls. Your human team focuses on relationships, strategy, and the high-value conversations that actually require judgment. Most clients see productivity increase significantly within the first month."
        },
        {
            question: "What CRMs and tools do you integrate with?",
            answer: "We integrate with the tools you already use. Primary integrations include Salesforce, GoHighLevel, HubSpot, Zoho, Google Calendar, WhatsApp Business API, and most major website platforms. If you use something else, we assess integration feasibility during onboarding — most common business tools are supported."
        },
        {
            question: "How long does it take to deploy AI automation?",
            answer: "A standard AI receptionist or sales agent deployment takes 2–4 weeks from kickoff to go-live. More complex multi-system automations may take 4–8 weeks. We work in sprints: define the workflow, build and test, then train your team before handover. You're involved at every checkpoint."
        },
        {
            question: "Can we customise the AI's tone and responses?",
            answer: "Completely. Every AI we deploy is trained on your brand guidelines, FAQs, product/service catalogue, and tone of voice. You approve the conversation flows before launch. If a response needs updating — new offering, policy change, seasonal message — we update it for you or train your team to do it themselves."
        },
        {
            question: "Is AI automation expensive for a growing business?",
            answer: "It's more affordable than hiring. A well-deployed AI receptionist typically costs less per month than a part-time employee, while operating 24/7 with zero sick days, zero training overhead, and instant scale. We scope each deployment to your budget and current stage — there's no minimum size requirement to get started."
        }
    ]
};

export default function WhizAIPage() {
    return <ServiceLayout {...aiPageData} />;
}
