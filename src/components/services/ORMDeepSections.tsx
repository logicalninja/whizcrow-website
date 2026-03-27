"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    Star, MessageSquare, TrendingUp, Clock, Shield,
    Globe, Users, ArrowRight, Building2, Heart,
    ShoppingCart, Landmark, Home, Cpu, Scale,
    GraduationCap, Car, Utensils, Plane, Stethoscope
} from "lucide-react";

// ─── OUTCOMES SECTION ────────────────────────────────────────────────────────

const outcomes = [
    {
        id: "ratings",
        icon: Star,
        metric: "4.8★",
        headline: "Ratings That Actually Convert",
        body: "We systematically raise your scores across Google Play, App Store, Trustpilot, G2, Capterra, and 50+ listing platforms. Not with fake reviews. With a proven framework that turns silent happy customers into vocal advocates.",
        featured: true,
        accent: "#98e600",
        tag: "Rating Elevation",
    },
    {
        id: "response",
        icon: Clock,
        metric: "<2 hrs",
        headline: "Average Response Time",
        body: "Every review. Every complaint. Every mention — acknowledged and addressed before it escalates into a crisis.",
        featured: false,
        accent: "#98e600",
        tag: "Response SLA",
    },
    {
        id: "reviews",
        icon: MessageSquare,
        metric: "All Platforms",
        headline: "Streamlined Reviews Management",
        body: "One unified system. Every platform moderated, tagged, and responded to — in your brand's voice, every single time.",
        featured: false,
        accent: "#9333ea",
        tag: "Reviews Management",
    },
    {
        id: "sentiment",
        icon: TrendingUp,
        metric: "+40%",
        headline: "Positive Sentiment Lift",
        body: "We shift the conversation. Precision-targeted engagement strategies that convert detractors into neutrals, and neutrals into brand advocates.",
        featured: false,
        accent: "#9333ea",
        tag: "Sentiment Improvement",
    },
    {
        id: "ops",
        icon: Shield,
        metric: "24/7",
        headline: "Reputation Operations",
        body: "Round-the-clock monitoring across news, forums, social, review sites, and AI-generated content. You are never caught off-guard.",
        featured: false,
        accent: "#f97316",
        tag: "Always-On",
    },
    {
        id: "multilingual",
        icon: Globe,
        metric: "40+",
        headline: "Languages Supported",
        body: "Global brands need global protection. Our multilingual response capability covers your markets across every continent and culture.",
        featured: false,
        accent: "#f97316",
        tag: "Multilingual",
    },
    {
        id: "team",
        icon: Users,
        metric: "Dedicated",
        headline: "ORM Specialist Team — Not Generalists",
        body: "Reputation analysts, response writers, crisis specialists, and legal liaisons. Experts who do this and only this — assigned to your account.",
        featured: false,
        accent: "#98e600",
        tag: "Specialist Team",
        wide: true,
    },
];

function OutcomeCard({ outcome, index }: { outcome: typeof outcomes[0]; index: number }) {
    const Icon = outcome.icon;
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07, duration: 0.5 }}
            className={`relative flex flex-col justify-between rounded-3xl p-8 border overflow-hidden group transition-all duration-500 hover:scale-[1.01] ${outcome.featured
                ? "md:col-span-2 min-h-[260px]"
                : outcome.wide
                    ? "md:col-span-2 min-h-[160px] flex-row items-center gap-8"
                    : "min-h-[200px]"
                }`}
            style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(255,255,255,0.07)",
            }}
        >
            {/* Glow */}
            <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-3xl pointer-events-none"
                style={{ background: outcome.accent }}
            />

            <div className={outcome.wide ? "flex items-center gap-8 flex-1" : ""}>
                {/* Tag + Icon */}
                <div className={`flex items-center gap-3 mb-5 ${outcome.wide ? "mb-0 flex-shrink-0" : ""}`}>
                    <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${outcome.accent}18`, border: `1px solid ${outcome.accent}30` }}
                    >
                        <Icon size={18} style={{ color: outcome.accent }} />
                    </div>
                    <span
                        className="text-[10px] font-black uppercase tracking-widest"
                        style={{ color: outcome.accent }}
                    >
                        {outcome.tag}
                    </span>
                </div>

                {!outcome.wide && (
                    <div
                        className={`font-black tracking-tighter text-white mb-3 ${outcome.featured ? "text-5xl md:text-7xl" : "text-3xl"}`}
                    >
                        {outcome.metric}
                    </div>
                )}

                <div className={outcome.wide ? "flex-1" : ""}>
                    <h3 className={`font-black text-white tracking-tight mb-2 ${outcome.featured ? "text-2xl md:text-3xl" : "text-lg"} ${outcome.wide ? "text-2xl" : ""}`}>
                        {outcome.headline}
                    </h3>
                    <p className={`text-stone-400 leading-relaxed font-medium ${outcome.featured ? "text-base max-w-lg" : "text-sm"}`}>
                        {outcome.body}
                    </p>
                </div>

                {outcome.wide && (
                    <div className="flex-shrink-0 hidden md:block">
                        <span
                            className="text-5xl font-black tracking-tighter"
                            style={{ color: outcome.accent }}
                        >
                            {outcome.metric}
                        </span>
                    </div>
                )}
            </div>
        </motion.div>
    );
}

export function ORMOutcomesSection() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: "#080808" }}>
            {/* Subtle radial glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-64 opacity-[0.06] pointer-events-none"
                style={{ background: "radial-gradient(ellipse, #98e600 0%, transparent 70%)" }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[10px] font-black uppercase tracking-[0.3em] mb-4"
                        style={{ color: "#98e600" }}
                    >
                        What We Deliver
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.95] mb-5"
                    >
                        Outcomes that move <br />
                        <span style={{ color: "#98e600" }}>the needle.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.14 }}
                        className="text-stone-400 text-lg leading-relaxed font-medium max-w-xl"
                    >
                        Reputation management isn't a one-time fix. It's an operation — engineered to compound over time and protect what you've built.
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Row 1: Featured (2-col) + Response */}
                    <div className="md:col-span-2 lg:col-span-2">
                        <OutcomeCard outcome={outcomes[0]} index={0} />
                    </div>
                    <OutcomeCard outcome={outcomes[1]} index={1} />

                    {/* Row 2: Reviews + Sentiment + 24/7 */}
                    <OutcomeCard outcome={outcomes[2]} index={2} />
                    <OutcomeCard outcome={outcomes[3]} index={3} />
                    <OutcomeCard outcome={outcomes[4]} index={4} />

                    {/* Row 3: Multilingual + Wide Team card */}
                    <OutcomeCard outcome={outcomes[5]} index={5} />
                    <div className="md:col-span-1 lg:col-span-2">
                        <OutcomeCard outcome={outcomes[6]} index={6} />
                    </div>
                </div>

                {/* CTA row */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-14 flex flex-col sm:flex-row items-center gap-5"
                >
                    <Link
                        href="/book"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-base transition-all active:scale-95"
                        style={{ background: "#98e600", color: "#080808" }}
                    >
                        Get a Free Reputation Audit
                        <ArrowRight size={18} />
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-base border transition-all hover:border-white/30"
                        style={{ borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }}
                    >
                        Talk to a Specialist
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}


// ─── WHO IT'S FOR + INDUSTRIES ───────────────────────────────────────────────

const personas = [
    {
        icon: Building2,
        title: "Founders & CEOs",
        pain: "Your name is your company's credibility. One damaging headline — true or not — can close doors, spook investors, and erode years of trust in a single news cycle.",
        accent: "#98e600",
    },
    {
        icon: ShoppingCart,
        title: "E-Commerce Brands",
        pain: "A 1-star review campaign, a Trustpilot attack, or a negative product thread on Reddit can crater your conversion rate overnight. We stop it and reverse it.",
        accent: "#9333ea",
    },
    {
        icon: Stethoscope,
        title: "Healthcare Providers",
        pain: "Patient trust is your most valuable asset — and the most fragile. One viral complaint or a competitor smear can disrupt referrals and bookings for months.",
        accent: "#98e600",
    },
    {
        icon: Landmark,
        title: "Financial Services & Fintech",
        pain: "Regulatory scrutiny meets public perception. Negative press in financial services compounds fast. We manage both fronts with precision and discretion.",
        accent: "#f97316",
    },
    {
        icon: Home,
        title: "Real Estate Developers",
        pain: "Buyers Google you before they sign anything. One bad project thread or a disgruntled contractor's review can cost you deals worth crore.",
        accent: "#9333ea",
    },
    {
        icon: Heart,
        title: "Public Figures & Celebrities",
        pain: "You live in the spotlight. The internet never forgets. We make sure what survives the search is the story you want told.",
        accent: "#f97316",
    },
];

const industries = [
    { icon: Plane, label: "Hospitality & Hotels" },
    { icon: Stethoscope, label: "Healthcare & Pharma" },
    { icon: ShoppingCart, label: "E-Commerce & Retail" },
    { icon: Landmark, label: "Financial Services" },
    { icon: Home, label: "Real Estate" },
    { icon: Cpu, label: "Technology & SaaS" },
    { icon: Scale, label: "Legal & Professional" },
    { icon: GraduationCap, label: "Education & EdTech" },
    { icon: Car, label: "Automotive" },
    { icon: Utensils, label: "Food & Beverage" },
    { icon: Globe, label: "Media & Publishing" },
    { icon: Users, label: "Government & Public Sector" },
];

export function ORMWhoItIsForSection() {
    return (
        <section className="py-24 md:py-32 bg-stone-950 relative overflow-hidden">
            {/* Background texture */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
                style={{
                    backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                    backgroundSize: "32px 32px"
                }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section header */}
                <div className="text-center mb-20">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[10px] font-black uppercase tracking-[0.3em] mb-4"
                        style={{ color: "#98e600" }}
                    >
                        Who Needs WhizORM
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.95] mb-5"
                    >
                        Reputation risk has no <br />
                        <span className="italic" style={{ color: "#98e600" }}>industry exception.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.14 }}
                        className="text-stone-400 text-lg max-w-2xl mx-auto leading-relaxed font-medium"
                    >
                        Whether you're a public company, a solo founder, or a global brand — your reputation is always on the line. Here's who we protect, and why it matters.
                    </motion.p>
                </div>

                {/* Persona cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
                    {personas.map((persona, i) => {
                        const Icon = persona.icon;
                        return (
                            <motion.div
                                key={persona.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.5 }}
                                className="relative rounded-3xl p-8 border flex flex-col gap-5 group overflow-hidden transition-all duration-500 hover:border-white/10"
                                style={{
                                    background: "rgba(255,255,255,0.03)",
                                    borderColor: "rgba(255,255,255,0.06)",
                                }}
                            >
                                {/* Hover glow */}
                                <div
                                    className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl"
                                    style={{ background: `linear-gradient(90deg, ${persona.accent}, transparent)` }}
                                />

                                <div
                                    className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                                    style={{ background: `${persona.accent}15`, border: `1px solid ${persona.accent}25` }}
                                >
                                    <Icon size={20} style={{ color: persona.accent }} />
                                </div>

                                <div>
                                    <h3 className="text-lg font-black text-white mb-2 tracking-tight">
                                        {persona.title}
                                    </h3>
                                    <p className="text-stone-400 text-sm leading-relaxed font-medium">
                                        {persona.pain}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Industries divider */}
                <div className="border-t mb-20" style={{ borderColor: "rgba(255,255,255,0.06)" }} />

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Industry heading */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p
                            className="text-[10px] font-black uppercase tracking-[0.3em] mb-4"
                            style={{ color: "#98e600" }}
                        >
                            Industries We Protect
                        </p>
                        <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[0.95] mb-6">
                            Every sector.<br />
                            <span className="italic text-stone-400">One standard of excellence.</span>
                        </h3>
                        <p className="text-stone-400 leading-relaxed text-base font-medium mb-10">
                            WhizORM operates across every major industry vertical. Wherever reputation matters — which is everywhere — we have the frameworks, the language, and the experience to protect and grow it.
                        </p>
                        <Link
                            href="/book"
                            className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-black text-sm transition-all active:scale-95"
                            style={{ background: "#98e600", color: "#080808" }}
                        >
                            Protect Your Reputation
                            <ArrowRight size={16} />
                        </Link>
                    </motion.div>

                    {/* Right: Industry pills grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="grid grid-cols-2 gap-3"
                    >
                        {industries.map((industry, i) => {
                            const Icon = industry.icon;
                            return (
                                <motion.div
                                    key={industry.label}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.05 + i * 0.04, duration: 0.4 }}
                                    className="flex items-center gap-3 rounded-2xl px-4 py-3.5 border transition-all duration-300 group hover:border-white/15 cursor-default"
                                    style={{
                                        background: "rgba(255,255,255,0.03)",
                                        borderColor: "rgba(255,255,255,0.06)",
                                    }}
                                >
                                    <div
                                        className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                                        style={{ background: "rgba(152,230,0,0.08)" }}
                                    >
                                        <Icon size={15} className="text-stone-400 group-hover:text-primary transition-colors" style={{ color: "rgba(152,230,0,0.6)" }} />
                                    </div>
                                    <span className="text-stone-300 text-sm font-semibold leading-tight">
                                        {industry.label}
                                    </span>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
