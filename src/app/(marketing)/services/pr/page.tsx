import React from "react";
import { Metadata } from "next";
import { ServiceLayout } from "@/components/marketing/ServiceLayout";

export const metadata: Metadata = {
    title: "PR Agency Mumbai — Public Relations Agency India",
    description: "WhizPR is a strategic PR agency in Mumbai and India. We secure earned media, tier-1 press placements, thought leadership, and crisis communications for brands.",
    openGraph: {
        title: "PR Agency Mumbai — Public Relations Agency India",
        description: "WhizPR is a strategic PR agency in Mumbai and India. We secure earned media, tier-1 press placements, thought leadership, and crisis communications for brands.",
        url: "https://whizcrow.com/services/pr",
        type: "website",
    },
    alternates: {
        canonical: "https://whizcrow.com/services/pr",
    },
    robots: { index: true, follow: true },
};

const prPageData = {
    id: "pr",
    title: "WhizPR",
    heroSubtitle: "Earn the Coverage You Deserve",
    heroDescription: "Paid ads stop the moment you stop paying. Earned media lasts. WhizPR secures genuine press coverage, builds journalist relationships, and positions you as the authority in your space — so your story reaches the right people at the right time.",
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
    ],
    faqs: [
        {
            question: "What's the difference between PR and paid media?",
            answer: "Paid media stops the moment you stop spending. Earned media — press coverage, journalist features, podcast appearances — has indefinite shelf life, carries independent credibility, and compounds over time with SEO backlink value. PR builds authority that advertising fundamentally cannot buy."
        },
        {
            question: "How do you secure coverage in major publications?",
            answer: "Through real journalist relationships, not press release blasts. We maintain active relationships with editors and writers at India's leading business, technology, and lifestyle publications. We pitch stories that are genuinely newsworthy to their readers — not product announcements dressed up as news. That's why our placement rate is high."
        },
        {
            question: "What publications can you get us coverage in?",
            answer: "Our network spans national and trade publications including Economic Times, Business Standard, Mint, YourStory, Inc42, Forbes India, Hindustan Times, and numerous vertical-specific outlets. For international coverage, we coordinate with our network across UAE, UK, and Singapore media. Coverage is never guaranteed — honest pitching is."
        },
        {
            question: "How long does a PR campaign take to build momentum?",
            answer: "Typical PR programmes begin generating placements within 4–8 weeks of onboarding. Real momentum — a consistent cadence of earned coverage, journalist relationships, and growing media authority — develops over 3–6 months. PR is a long game, and the brands that commit to it consistently outperform those who treat it as a one-off project."
        },
        {
            question: "Do you handle crisis communications?",
            answer: "Yes — and we treat crisis PR as a distinct speciality. Whether it's a damaging article, a viral social media situation, or a regulatory issue, our team can mobilise quickly to help you craft the right response, manage media enquiries, and protect your narrative. Speed and precision are everything in a crisis, and we're built for it."
        },
        {
            question: "Can you secure podcast appearances and speaking opportunities?",
            answer: "Yes. Podcast placements and speaking slots at industry conferences are increasingly valuable for building executive thought leadership. We identify the right platforms for your specific expertise, prepare briefing materials, handle pitch outreach, and brief speakers beforehand to ensure maximum impact from each appearance."
        }
    ]
};

export default function WhizPRPage() {
    return <ServiceLayout {...prPageData} />;
}
