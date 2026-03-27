import React from "react";
import { Metadata } from "next";
import { ServiceLayout } from "@/components/marketing/ServiceLayout";

export const metadata: Metadata = {
    title: "Branding Agency Mumbai — Brand Identity Design",
    description: "WhizBrand is a leading branding agency in Mumbai delivering world-class brand identity design, brand strategy, visual systems, and messaging frameworks.",
    openGraph: {
        title: "Branding Agency Mumbai — Brand Identity Design",
        description: "WhizBrand is a leading branding agency in Mumbai delivering world-class brand identity design, brand strategy, visual systems, and messaging frameworks.",
        url: "https://whizcrow.com/services/brand",
        type: "website",
    },
    alternates: {
        canonical: "https://whizcrow.com/services/brand",
    },
    robots: { index: true, follow: true },
};

const brandPageData = {
    id: "brand",
    title: "WhizBrand",
    heroSubtitle: "Branding Done Right",
    heroDescription: "A strong brand isn't just a logo — it's the feeling people get every time they interact with you. WhizBrand builds cohesive, compelling identities that make you instantly recognisable and impossible to ignore.",
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
    ],
    faqs: [
        {
            question: "What does a full brand identity project include?",
            answer: "A complete WhizBrand engagement covers brand strategy (positioning, messaging, competitive differentiation), visual identity (logo, colour palette, typography, iconography), brand guidelines document, and application across key touchpoints — business cards, letterhead, social media templates, and digital assets. We also build the messaging framework your whole team can use."
        },
        {
            question: "How long does a branding project take?",
            answer: "A full brand identity project typically takes 6–10 weeks. Brand strategy takes 2 weeks of discovery and workshops. Visual identity design runs 3–5 weeks including feedback rounds. Final delivery and guidelines take 1–2 weeks. If you need certain assets faster, we can stage delivery to match your launch timeline."
        },
        {
            question: "Do you handle brand strategy or just visual design?",
            answer: "Both — and we believe you can't do good visual design without solid strategy first. We start every brand project with a strategic foundation: who you are, who you're for, what you stand for, and how you're different. The visual identity flows directly from that. Logo-first branding without strategy is decoration, not brand-building."
        },
        {
            question: "Can you rebrand an existing business without losing brand equity?",
            answer: "Yes, and we do this carefully. Rebranding isn't starting from zero — it's identifying what's worth keeping, what's holding you back, and how to evolve with continuity. We audit your existing brand equity, map stakeholder perceptions, and design a transition that feels fresh to the market without confusing your existing customers."
        },
        {
            question: "What files and deliverables do I receive at the end?",
            answer: "You receive everything in full. Vector source files (AI, EPS, SVG), print-ready PDFs, digital formats (PNG, JPG, WebP), dark and light logo variants, favicon and app icon files, and a comprehensive brand guidelines PDF. Every file is yours to use however you need, with no ongoing licensing."
        },
        {
            question: "How many revision rounds are included?",
            answer: "Our standard engagement includes three structured revision rounds — enough for meaningful iteration without scope creep. Each round is anchored to clear feedback, not vague preferences. We find that structured rounds consistently produce better results than open-ended revisions, and we're transparent about what's included before we start."
        }
    ]
};

export default function WhizBrandPage() {
    return <ServiceLayout {...brandPageData} />;
}
