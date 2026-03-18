import React from "react";
import { Metadata } from "next";
import { ServiceLayout } from "@/components/marketing/ServiceLayout";

export const metadata: Metadata = {
    title: "WhizCommerce | E-Commerce Strategy & Store Optimization",
    description: "Sell more online. WhizCommerce provides end-to-end e-commerce management and optimization to drive predictable sales and revenue growth.",
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
    ]
};

export default function WhizCommercePage() {
    return <ServiceLayout {...commercePageData} />;
}
