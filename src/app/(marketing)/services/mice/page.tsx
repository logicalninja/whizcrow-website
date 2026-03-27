import React from "react";
import { Metadata } from "next";
import { ServiceLayout } from "@/components/marketing/ServiceLayout";

export const metadata: Metadata = {
    title: "MICE Marketing Agency & Event Marketing India",
    description: "WhizMICE is a specialist MICE marketing agency and event marketing partner in India. We fill conferences, drive registrations, and promote global destinations.",
    openGraph: {
        title: "MICE Marketing Agency & Event Marketing India",
        description: "WhizMICE is a specialist MICE marketing agency and event marketing partner in India. We fill conferences, drive registrations, and promote global destinations.",
        url: "https://whizcrow.com/services/mice",
        type: "website",
    },
    alternates: {
        canonical: "https://whizcrow.com/services/mice",
    },
    robots: { index: true, follow: true },
};

const micePageData = {
    id: "mice",
    title: "WhizMICE",
    heroSubtitle: "Corporate Events Without the Headache",
    heroDescription: "From global conferences to high-impact corporate meetings, WhizMICE handles the full marketing picture — so you can focus on delivering an event that leaves a lasting impression.",
    stats: [
        { label: "Reach", value: "Destination", icon: "MapPin" },
        { label: "Impact", value: "Event-Scale", icon: "Zap" },
        { label: "Booking", value: "High Flow", icon: "Ticket" },
        { label: "Network", value: "Global", icon: "Globe" }
    ],
    benefits: [
        { title: "Event Promotion", desc: "Strategic marketing to ensure your conference or meeting is fully booked with the right people." },
        { title: "Destination PR", desc: "Getting your venue or destination talked about in the right travel and industry circles." },
        { title: "Attendee Acquisition", desc: "Targeted digital campaigns and outreach to drive registrations and ticket sales." },
        { title: "Partnership Growth", desc: "Connecting event organizers with high-value sponsors and strategic partners." },
        { title: "Content Coverage", desc: "Creating the 'Fear of Missing Out' with elite pre-event and live event content." },
        { title: "MICE Analytics", desc: "Clear reporting on registration sources, attendee intent, and event ROI." }
    ],
    targetAudience: [
        { title: "Event Organizers", desc: "You have a major conference and need a marketing team that understands the stakes.", icon: "Calendar" },
        { title: "Venues & Hotels", desc: "You have world-class facilities and need the right eyes on your capabilities.", icon: "MapPin" },
        { title: "Destination Bureaus", desc: "You need to put your city or region on the map for major global events.", icon: "Globe" },
        { title: "Corporate Teams", desc: "You are hosting critical strategic meetings and need perfectly executed promotion.", icon: "Users" }
    ],
    steps: [
        { title: "Discovery", desc: "We understand your event goals, your target attendee profile, and your USPs." },
        { title: "Campaign Launch", desc: "We activate multichannel marketing across search, social, and industry press." },
        { title: "Real-time Scale", desc: "We monitor registration velocity and ramp up spend for maximum impact." },
        { title: "Live & Post Ops", desc: "We manage live coverage and build the narrative for your next successful event." }
    ],
    comparison: [
        { label: "Network", others: "Limited local reach", us: "Global destination authority" },
        { label: "Speed", others: "Slow, generic planning", us: "Event-critical high velocity" },
        { label: "Expertise", others: "General PR companies", us: "Specialized MICE consultants" },
        { label: "Reporting", others: "Vague sentiment reports", us: "Hard registration and ROI data" }
    ],
    results: [
        "Fully booked conference and event seats.",
        "Increased destination visibility globally.",
        "High-value sponsor and partner interest.",
        "Professional event content and authority.",
        "Measurable registration and engagement data."
    ],
    nextServices: [
        { title: "WhizPR", link: "/services/pr" },
        { title: "WhizDigital", link: "/services/digital" },
        { title: "WhizAds", link: "/services/ads" }
    ],
    faqs: [
        {
            question: "What does MICE stand for?",
            answer: "MICE stands for Meetings, Incentives, Conferences, and Exhibitions. It refers to the business events industry — from internal corporate meetings and team incentive trips to large-scale international conferences and trade exhibitions. WhizMICE handles the complete marketing picture for all these event types."
        },
        {
            question: "Do you handle both domestic and international events?",
            answer: "Yes. We work with event organisers, venues, hotels, and destination bureaus across India and internationally. Whether you're marketing a conference in Mumbai, a corporate retreat in Bali, or a trade expo in Dubai, we build attendee acquisition campaigns and destination marketing strategies tailored to each geography."
        },
        {
            question: "How early should we engage you before an event?",
            answer: "For major conferences or multi-day events, we recommend engaging at least 3–4 months before the event date to allow sufficient time for campaign launch, registration buildup, and media outreach. For smaller corporate events or standing series, 6–8 weeks can suffice. The earlier we start, the more effectively we can build anticipation and fill seats."
        },
        {
            question: "Can you drive delegate registration and ticket sales?",
            answer: "That's our primary objective. We build full-funnel attendee acquisition campaigns using paid media (Google, LinkedIn, Meta), email marketing to targeted industry lists, influencer and media partnerships, SEO for event keywords, and retargeting to convert warm audiences. Every tactic is tied to registration volume."
        },
        {
            question: "Do you produce event content during and after the event?",
            answer: "Yes. Live social media coverage, real-time highlights, photography direction, speaker and session content, post-event recap articles, video edit briefs, and testimonial capture. Strong event content marketing extends your ROI far beyond the event itself and builds credibility for future editions."
        },
        {
            question: "Can you help us attract sponsors and exhibitors?",
            answer: "Yes. Sponsor acquisition requires a completely different approach from delegate marketing — it's a B2B sales process. We develop sponsorship decks, identify and target relevant brand sponsors, build outreach campaigns to potential exhibitors, and support your team in converting interest into signed commitments."
        }
    ]
};

export default function WhizMICEPage() {
    return <ServiceLayout {...micePageData} />;
}
