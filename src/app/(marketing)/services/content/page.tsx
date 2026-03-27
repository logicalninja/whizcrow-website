import React from "react";
import { Metadata } from "next";
import { ServiceLayout } from "@/components/marketing/ServiceLayout";

export const metadata: Metadata = {
    title: "Content Marketing Agency & Content Writing Services India",
    description: "WhizContent is a content marketing agency delivering expert content writing services across India. SEO blogs, conversion copy, whitepapers, and video scripts.",
    openGraph: {
        title: "Content Marketing Agency & Content Writing Services India",
        description: "WhizContent is a content marketing agency delivering expert content writing services across India. SEO blogs, conversion copy, whitepapers, and video scripts.",
        url: "https://whizcrow.com/services/content",
        type: "website",
    },
    alternates: {
        canonical: "https://whizcrow.com/services/content",
    },
    robots: { index: true, follow: true },
};

const contentPageData = {
    id: "content",
    title: "WhizContent",
    heroSubtitle: "Content That Sticks",
    heroDescription: "Great content doesn't just fill a page — it builds authority, earns trust, and drives action long after it's published. WhizContent creates strategic, high-quality content that gets found, gets read, and gets results.",
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
    ],
    faqs: [
        {
            question: "Who writes the content — humans, AI, or both?",
            answer: "Experienced human strategists and writers lead every project. We use AI as a research and drafting tool where it adds speed, but every piece is written, edited, and quality-checked by specialists who understand your industry, your brand voice, and what it takes for content to rank and convert. You'll never receive raw, unreviewed AI output."
        },
        {
            question: "How do you make sure content ranks on Google?",
            answer: "We approach every content project as an SEO asset first. That means in-depth keyword research, search intent mapping, competitor gap analysis, proper on-page structure (titles, H-tags, schema), internal linking strategy, and content length benchmarked against what's currently ranking. We don't write content that gets posted and forgotten."
        },
        {
            question: "What types of content do you produce?",
            answer: "The full stack. SEO blog posts and long-form guides, website copy (homepage, service pages, landing pages), email sequences, LinkedIn thought leadership, video scripts, whitepapers and reports, case studies, social media copy, and product descriptions for e-commerce. If your business needs words, we cover it."
        },
        {
            question: "How long before content marketing shows results?",
            answer: "Content marketing is a compounding investment, not a quick fix. Well-optimised content typically starts gaining search traction in 3–5 months as pages get indexed and build authority. By month 6–12, a well-executed content programme delivers consistent, high-intent organic traffic that keeps growing without additional ad spend."
        },
        {
            question: "Do you develop a content strategy, or just write what I tell you?",
            answer: "We build the strategy. At the start of every engagement we conduct a content audit, identify your highest-value topics, map content to your buyer journey, and create an editorial calendar aligned to your business goals. We write what will move the needle — not just what fills a content schedule."
        },
        {
            question: "Can you write for technical or niche industries?",
            answer: "Yes. We've produced content for fintech, healthcare, legal, B2B SaaS, real estate, manufacturing, and luxury sectors, among others. For specialist industries, we pair you with a writer who has direct domain knowledge and run every piece past a subject-matter review process before delivery."
        }
    ]
};

export default function WhizContentPage() {
    return <ServiceLayout {...contentPageData} />;
}
