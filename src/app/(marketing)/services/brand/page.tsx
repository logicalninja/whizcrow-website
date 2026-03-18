import React from "react";
import { Metadata } from "next";
import { ServiceLayout } from "@/components/marketing/ServiceLayout";

export const metadata: Metadata = {
    title: "WhizBrand | World-Class Identity Design & Strategy",
    description: "Look like who you are. WhizBrand creates spectacular brand identities and strategic messaging frameworks for brands ready to define their category.",
};

const brandPageData = {
    id: "brand",
    title: "WhizBrand",
    heroSubtitle: "Look Like Who You Are",
    heroDescription: "Your brand is what people say about you when you're not in the room. WhizBrand makes sure they say the right things through world-class identity design.",
    stats: [
        { label: "Consistency", value: "Absolute", icon: "Shield" },
        { label: "Aesthetic", value: "World-Class", icon: "Palette" },
        { label: "Clarity", value: "Strategic", icon: "MessageSquare" },
        { label: "Impact", value: "Immediate", icon: "Eye" }
    ],
    benefits: [
        { title: "Brand Strategy", desc: "Defining exactly who you are, who you're for, and what you stand for in a crowded market." },
        { title: "Logo Evolution", desc: "A timeless, scalable mark that you're proud to put on any surface, from apps to buildings." },
        { title: "Visual Identity", desc: "The complete system: colors, typography, and imagery that make you instantly recognizable." },
        { title: "Strategic Messaging", desc: "A language framework that ensures you say the right thing, the right way, every time." },
        { title: "Brand Guidelines", desc: "The 'Source of Truth' that ensures your brand stays consistent across every touchpoint." },
        { title: "Cultural Positioning", desc: "Aligning your brand values with the expectations of your most valuable customers." }
    ],
    targetAudience: [
        { title: "New Disruptors", desc: "You're launching a new category and need to look professional and credible from day one.", icon: "Rocket" },
        { title: "Scale-up Brands", desc: "You've outgrown your DIY roots and need a brand that matches the enterprise you've become.", icon: "TrendingUp" },
        { title: "Legacy Leaders", desc: "You're ready for a refresh or total re-brand to stay relevant for the next generation.", icon: "Anchor" },
        { title: "Portfolio Groups", desc: "You need a unified design language that works across multiple sub-brands and products.", icon: "Stars" }
    ],
    steps: [
        { title: "Discovery", desc: "A deep dive into your business, your market, your competitors, and your long-term goals." },
        { title: "Strategy", desc: "We define your unique positioning, your brand personality, and your core promise." },
        { title: "Design", desc: "Our team creates options, we iterate on your feedback, and we refine until it is perfect." },
        { title: "Launch", desc: "We deliver full guidelines, all asset files, and the confidence to go to market." }
    ],
    comparison: [
        { label: "Philosophy", others: "Design what looks pretty", us: "Design what communicates value" },
        { label: "Research", others: "Skip the strategy work", us: "Start with strategic foundations" },
        { label: "Integrity", others: "Deliver and disappear", us: "Set you up for long-term consistency" },
        { label: "Team", others: "Junior/Generalist designers", us: "Elite identity specialists" }
    ],
    results: [
        "A brand that commands premium pricing.",
        "Instant credibility with investors and partners.",
        "Total consistency across all physical and digital sites.",
        "A clear, powerful messaging framework.",
        "Design that stands the test of time."
    ],
    nextServices: [
        { title: "WhizContent", link: "/services/content" },
        { title: "WhizPR", link: "/services/pr" },
        { title: "WhizDigital", link: "/services/digital" }
    ]
};

export default function WhizBrandPage() {
    return <ServiceLayout {...brandPageData} />;
}
