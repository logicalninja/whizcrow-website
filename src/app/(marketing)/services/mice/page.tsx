import React from "react";
import { Metadata } from "next";
import { ServiceLayout } from "@/components/marketing/ServiceLayout";

export const metadata: Metadata = {
    title: "WhizMICE | Event Marketing & Global Destination Strategy",
    description: "Fill the seats for your event. WhizMICE delivers elite marketing for global conferences, meetings, and high-impact destination promotion.",
};

const micePageData = {
    id: "mice",
    title: "WhizMICE",
    heroSubtitle: "Fill the Seats",
    heroDescription: "Scaling major events requires more than just ads. WhizMICE provides elite marketing strategies for global conferences, destinations, and high-impact meetings.",
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
    ]
};

export default function WhizMICEPage() {
    return <ServiceLayout {...micePageData} />;
}
