import React from "react";
import { Metadata } from "next";
import { ServiceLayout } from "@/components/marketing/ServiceLayout";

export const metadata: Metadata = {
    title: "WhizContent | High-Converting Copywriting & Authority Building",
    description: "Words that work. WhizContent delivers high-authority strategy and elite copywriting that establishes your expertise and drives measurable conversions.",
};

const contentPageData = {
    id: "content",
    title: "WhizContent",
    heroSubtitle: "Words That Work",
    heroDescription: "Content is how you get found, build trust, and convince people to buy. But only if it's world-class. WhizContent delivers words that work, engineered for authority.",
    stats: [
        { label: "Quality", value: "Elite", icon: "Award" },
        { label: "Depth", value: "Strategic", icon: "Library" },
        { label: "Engagement", value: "High-Touch", icon: "UserCheck" },
        { label: "Authority", value: "Expert", icon: "BookOpen" }
    ],
    benefits: [
        { title: "Content Strategy", desc: "A comprehensive plan for what to say, where to say it, and why it matters to your bottom line." },
        { title: "Conversion Copy", desc: "Website copy, landing pages, and sales emails that turn interest into measurable conversions." },
        { title: "Expert Blogging", desc: "Deep-dive articles that rank on search engines and are actually read by human beings." },
        { title: "Video Scripting", desc: "Scripts for ads and content that people actually watch, remember, and take action on." },
        { title: "Elite Newsletters", desc: "Industry-leading emails that people look forward to opening, not deleting." },
        { title: "Whitepapers", desc: "Authoritative, researched content that establishes you as the undisputed category leader." }
    ],
    targetAudience: [
        { title: "Building Phase", desc: "You need to explain exactly what you do to customers, investors, and strategic partners.", icon: "PenTool" },
        { title: "Scaling Phase", desc: "You need to rank for high-intent keywords and stand out from a sea of noisy competitors.", icon: "Search" },
        { title: "Established Firms", desc: "You need thought leadership that demonstrates your unique expertise and opens big doors.", icon: "Award" },
        { title: "Digital First Ops", desc: "You need consistent, high-quality production to maintain your market positioning.", icon: "Library" }
    ],
    steps: [
        { title: "Understand", desc: "We learn your business, your audience, and your specific strategic voice." },
        { title: "Architect", desc: "We build a plan deciding which topics, formats, and channels will move the needle." },
        { title: "Create", desc: "Our elite writers produce, polish, and perfect every word until it is ready for launch." },
        { title: "Measure", desc: "We track performance to see what's getting traction and what we optimize next." }
    ],
    comparison: [
        { label: "Focus", others: "Write what sounds good", us: "Write what works based on data" },
        { label: "Delivery", others: "Submit words and disappear", us: "Connect content to real business goals" },
        { label: "Writer Level", others: "Junior generalist writers", us: "Experienced strategic thinkers" },
        { label: "Structure", others: "Generic SEO templates", us: "Custom high-authority narratives" }
    ],
    results: [
        "Measurable increase in organic search traffic.",
        "Significantly better conversion rates on landing pages.",
        "Content that actually gets read and shared.",
        "A clear, consistent, and powerful brand voice.",
        "Marketing materials you are proud to represent."
    ],
    nextServices: [
        { title: "WhizDigital", link: "/services/digital" },
        { title: "WhizBrand", link: "/services/brand" },
        { title: "WhizPR", link: "/services/pr" }
    ]
};

export default function WhizContentPage() {
    return <ServiceLayout {...contentPageData} />;
}
