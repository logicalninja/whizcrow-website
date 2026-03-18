import React from "react";
import { Metadata } from "next";
import { ServiceLayout } from "@/components/marketing/ServiceLayout";

export const metadata: Metadata = {
    title: "WhizPR | Strategic Media Relations & Thought Leadership",
    description: "Get talked about. WhizPR secures high-impact media coverage, press placements, and thought leadership positioning for category-leading brands.",
};

const prPageData = {
    id: "pr",
    title: "WhizPR",
    heroSubtitle: "Get Talked About",
    heroDescription: "You've built something worth talking about. WhizPR makes sure the right people hear about it through meaningful media coverage and strategic earned authority.",
    stats: [
        { label: "Credibility", value: "Tier 1", icon: "Newspaper" },
        { label: "Network", value: "Verified", icon: "Globe" },
        { label: "Strategic", value: "Senior-Led", icon: "Target" },
        { label: "Response", value: "Immediate", icon: "Zap" }
    ],
    benefits: [
        { title: "Media Relations", desc: "Building real, lasting relationships with the journalists who cover your specific industry." },
        { title: "Press Releases", desc: "Professional distribution for product launches, major milestones, fundrails, and news." },
        { title: "Thought Leadership", desc: "Getting your leaders quoted, featured, and published in the most influential outlets." },
        { title: "Crisis Comms", desc: "When something goes wrong, we ensure you say the right thing at exactly the right time." },
        { title: "Media Training", desc: "Preparing your executive team for high-stakes interviews, panels, and live press events." },
        { title: "Earned Authority", desc: "Securing the 'As Seen In' badges that provide instant trust for your website and sales team." }
    ],
    targetAudience: [
        { title: "Growing Companies", desc: "You have major news to share and need help translating it for a wider media audience.", icon: "Megaphone" },
        { title: "Established Firms", desc: "You need to maintain high visibility and sustain your position as a category expert.", icon: "BookOpen" },
        { title: "Public Figures", desc: "You need to manage your public image with counsel that is both strategic and discreet.", icon: "Quote" },
        { title: "High-Risk Sectors", desc: "You need a partner ready to handle crisis communication and complex reputation threats.", icon: "ShieldAlert" }
    ],
    steps: [
        { title: "Story Discovery", desc: "We identify what in your business is actually newsworthy and interesting to the press." },
        { title: "Media Mapping", desc: "We map out exactly who covers your space and which stories they are looking for." },
        { title: "Targeted Outreach", desc: "We don't blast emails. We pitch meaningful stories and build real relationships." },
        { title: "Placement", desc: "The payoff: you get seen, you get quoted, and your brand authority scales instantly." }
    ],
    comparison: [
        { label: "Strategy", others: "Blast releases to everyone", us: "Targeted pitches to the right people" },
        { label: "Execution", others: "Hope something sticks", us: "Relationship-driven outreach" },
        { label: "Account Team", others: "Junior account executives", us: "Senior strategic professionals" },
        { label: "Focus", others: "Report on total 'clips'", us: "Report on real business impact" }
    ],
    results: [
        "Features in industry-leading publications.",
        "Increased trust and immediate brand authority.",
        "Executive team established as experts.",
        "Professional handling of sensitive news.",
        "SEO benefits from high-authority media links."
    ],
    nextServices: [
        { title: "WhizORM", link: "/services/orm" },
        { title: "WhizInfluence", link: "/services/influence" },
        { title: "WhizContent", link: "/services/content" }
    ]
};

export default function WhizPRPage() {
    return <ServiceLayout {...prPageData} />;
}
