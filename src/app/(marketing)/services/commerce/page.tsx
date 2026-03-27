import React from "react";
import { Metadata } from "next";
import { ServiceLayout } from "@/components/marketing/ServiceLayout";

export const metadata: Metadata = {
    title: "E-Commerce Marketing Agency & Shopify Marketing India",
    description: "WhizCommerce is an e-commerce marketing agency in India. Shopify store setup, optimisation, paid traffic, and retention strategies that grow your online revenue.",
    openGraph: {
        title: "E-Commerce Marketing Agency & Shopify Marketing India",
        description: "WhizCommerce is an e-commerce marketing agency in India. Shopify store setup, optimisation, paid traffic, and retention strategies that grow your online revenue.",
        url: "https://whizcrow.com/services/commerce",
        type: "website",
    },
    alternates: {
        canonical: "https://whizcrow.com/services/commerce",
    },
    robots: { index: true, follow: true },
};

const commercePageData = {
    id: "commerce",
    title: "WhizCommerce",
    heroSubtitle: "Sell More Online",
    heroDescription: "Your online store should be your best salesperson. WhizCommerce builds, manages, and optimizes e-commerce engines that drive predictable revenue.",
    stats: [
        { label: "Performance", value: "High Sales", icon: "Zap" },
        { label: "UX Quality", value: "Conversion+", icon: "LayoutGrid" },
        { label: "Efficiency", value: "Automated", icon: "Settings" },
        { label: "ROI", value: "Data-Driven", icon: "Target" }
    ],
    benefits: [
        { title: "End-to-End Setup", desc: "Taking you from zero to first sale with platform selection, design, and payment integration." },
        { title: "Daily Store Ops", desc: "We handle the daily management of your inventory, orders, and basic customer service." },
        { title: "Growth Optimization", desc: "Driving more traffic, improving conversion rates, and increasing average order value." },
        { title: "Platform Experts", desc: "Deep technical expertise in Shopify, WooCommerce, and custom-built e-commerce stacks." },
        { title: "Checkout Science", desc: "Reducing abandoned carts and streamlining the purchase journey for maximum speed." },
        { title: "Retention Flow", desc: "Using email, SMS, and loyalty programs to keep your customers coming back for more." }
    ],
    targetAudience: [
        { title: "New Sellers", desc: "You're launching your first store and need a professional setup done right the first time.", icon: "MousePointerClick" },
        { title: "Growing Brands", desc: "You have local sales and are ready to scale to global markets with expert support.", icon: "TrendingUp" },
        { title: "Established Retail", desc: "You need optimization, technical performance, and a partner that can scale your spend.", icon: "ShoppingBag" },
        { title: "D2C Disruptors", desc: "You need a high-velocity store that matches your aggressive social media growth.", icon: "Zap" }
    ],
    steps: [
        { title: "Foundation", desc: "We organize products, design a beautiful interface, and make checkout seamless." },
        { title: "Traffic Generation", desc: "We optimize product pages for SEO and launch ads that convert instantly." },
        { title: "Conversion Push", desc: "We analyze user behavior and optimize the journey to reduce friction and sales loss." },
        { title: "Retention Loop", desc: "We implement systems to keep your existing customers buying again and again." }
    ],
    comparison: [
        { label: "Ownership", others: "Build and then disappear", us: "Build and optimize continuously" },
        { label: "Philosophy", others: "Hope for organic sales", us: "Aggressively drive conversion" },
        { label: "Expertise", others: "Junior generalist teams", us: "Experienced commerce professionals" },
        { label: "Approach", others: "Rigid, generic templates", us: "Bespoke, brand-aligned design" }
    ],
    results: [
        "A beautiful, high-performing online store.",
        "Higher average order values (AOV).",
        "Significant reduction in cart abandonment.",
        "Transparent reporting on sales and spend.",
        "Smooth, automated backend operations."
    ],
    nextServices: [
        { title: "WhizDigital", link: "/services/digital" },
        { title: "WhizAds", link: "/services/ads" },
        { title: "WhizContent", link: "/services/content" }
    ],
    faqs: [
        {
            question: "Which e-commerce platforms do you work with?",
            answer: "Shopify is our primary platform — we're an official Shopify Partner. We also work with WooCommerce, Magento, and custom-built stores. For new stores, we recommend Shopify for most businesses due to its reliability, ecosystem, and conversion-optimised infrastructure. We advise on platform selection before you commit."
        },
        {
            question: "Do you build stores from scratch or only optimise existing ones?",
            answer: "Both. For new stores, we handle full setup: store architecture, theme selection or custom development, product catalogue upload, payment gateway integration, tax and shipping configuration, and launch. For existing stores, we conduct a conversion audit first to identify the highest-impact improvements before changing anything."
        },
        {
            question: "How do you improve conversion rates on an existing store?",
            answer: "Conversion rate optimisation is systematic, not guesswork. We analyse heatmaps, session recordings, funnel drop-off data, and checkout abandonment rates. Then we test improvements to product pages, add-to-cart flows, checkout UX, trust signals, and page speed. Every change is measured against a control so we know what actually worked."
        },
        {
            question: "Can you manage our store's ongoing operations?",
            answer: "Yes. WhizCommerce includes ongoing store management for clients who need it: product listing, inventory updates, promotional banner changes, discount code setup, customer service integration, and monthly performance reporting. We effectively act as your e-commerce operations team."
        },
        {
            question: "Do you handle driving traffic to the store as well?",
            answer: "Yes — a great store with no traffic generates nothing. WhizCommerce integrates with WhizAds for paid media, WhizDigital for SEO and organic traffic, and WhizInfluence for creator partnerships. We treat store performance and traffic acquisition as one connected system, not separate disciplines."
        },
        {
            question: "What does a typical WhizCommerce engagement look like?",
            answer: "Week 1–2: Audit and strategy. Week 3–6: Store build or optimisation implementation. Week 7–8: Testing, QA, and launch. Month 2 onwards: Traffic acquisition, CRO testing, retention flows, and monthly reporting. You have a dedicated account manager throughout, and we align milestones to your revenue targets — not just deliverables."
        }
    ]
};

export default function WhizCommercePage() {
    return <ServiceLayout {...commercePageData} />;
}
