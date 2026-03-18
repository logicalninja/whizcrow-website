"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, ArrowUpRight, Filter } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import JsonLd from "@/components/seo/JsonLd";

// ─────────────────────────────────────────────
// CASE STUDY DATA
// ─────────────────────────────────────────────
const caseStudies = [
    {
        id: 1,
        category: "Digital",
        client: "Jansamarth",
        industry: "FinTech / Government",
        headline: "Needed massive scale in qualified loan applications, fast.",
        stat: "+340%",
        statLabel: "Qualified Leads",
        outcome:
            "Full-funnel digital strategy combining SEO, paid search and conversion-optimised landing pages drove a 340% surge in qualified loan applications within six months.",
        tags: ["SEO", "Paid Ads", "Lead Gen"],
        accent: "dark",
        gradient: "from-stone-900 via-stone-800 to-stone-950",
        size: "large",
    },
    {
        id: 2,
        category: "Digital",
        client: "PSBLoans",
        industry: "Banking / FinTech",
        headline: "A digital presence that didn't match their market ambition.",
        stat: "10×",
        statLabel: "Brand Reach",
        outcome:
            "Content marketing, social strategy and paid amplification engineered a tenfold expansion in organic brand reach, making PSBLoans synonymous with digital lending.",
        tags: ["Content", "Social", "Ads"],
        accent: "lime",
        gradient: "from-lime-900 via-stone-900 to-stone-950",
        size: "regular",
    },
    {
        id: 3,
        category: "Commerce",
        client: "Aura Benaras",
        industry: "Luxury / Heritage Textiles",
        headline: "Beautiful product. Invisible online store.",
        stat: "+150%",
        statLabel: "Revenue",
        outcome:
            "Rebuilt the Shopify storefront around storytelling and search, then layered targeted traffic campaigns. Revenue doubled in under a year with improved average order value.",
        tags: ["Shopify", "SEO", "Paid Ads"],
        accent: "light",
        gradient: "from-amber-50 to-stone-100",
        size: "regular",
    },
    {
        id: 4,
        category: "ORM",
        client: "Global Sports OTT Platform",
        industry: "Media / Entertainment",
        headline: "Public crisis threatening licensing deals across three markets.",
        stat: "100%",
        statLabel: "Crisis Stabilised",
        outcome:
            "Rapid narrative management, search suppression of negative content and proactive Wikipedia stabilisation contained reputational damage within 72 hours across all markets.",
        tags: ["ORM", "Crisis", "Wikipedia"],
        accent: "dark",
        gradient: "from-slate-900 via-blue-950 to-stone-950",
        size: "large",
    },
    {
        id: 5,
        category: "Brand",
        client: "Zillion Ventures",
        industry: "B2B / Venture",
        headline:
            "Agency-quality ambitions. Student-project brand identity to match.",
        stat: "New",
        statLabel: "Brand Identity",
        outcome:
            "Complete brand strategy, visual identity, messaging framework, and pitch deck design delivered in three weeks. Zillion closed their first institutional round six months later.",
        tags: ["Brand Strategy", "Design", "Messaging"],
        accent: "teal",
        gradient: "from-teal-900 via-stone-900 to-stone-950",
        size: "regular",
    },
    {
        id: 6,
        category: "Ads",
        client: "D2C Fashion Label",
        industry: "Fashion / Retail",
        headline: "Burning ad budget with zero attribution visibility.",
        stat: "4.8×",
        statLabel: "ROAS",
        outcome:
            "Rebuilt Meta and Google campaign structure from scratch. Introduced creative testing cadence and proper attribution tracking. Ad spend became profitable in the first 60 days.",
        tags: ["Meta Ads", "Google Ads", "CRO"],
        accent: "orange",
        gradient: "from-orange-950 via-stone-900 to-stone-950",
        size: "regular",
    },
    {
        id: 7,
        category: "AI",
        client: "Regional Healthcare Group",
        industry: "Healthcare",
        headline: "Front desk overwhelmed. Appointments missed. Revenue leaking.",
        stat: "24 / 7",
        statLabel: "AI Receptionist Live",
        outcome:
            "Deployed WhizAI receptionist and CRM setup. The practice now handles appointment booking, follow-ups and FAQ responses automatically, reducing missed calls by 80%.",
        tags: ["AI Receptionist", "CRM", "Automation"],
        accent: "dark",
        gradient: "from-indigo-950 via-stone-900 to-stone-950",
        size: "regular",
    },
    {
        id: 8,
        category: "Content",
        client: "SaaS Analytics Platform",
        industry: "Technology / SaaS",
        headline: "Great product, zero organic visibility against established rivals.",
        stat: "+220%",
        statLabel: "Organic Traffic",
        outcome:
            "Developed a keyword-clustered content strategy targeting decision-stage buyers. Within 9 months, the blog became the #1 traffic source and a reliable pipeline driver.",
        tags: ["SEO", "Blogging", "Thought Leadership"],
        accent: "light",
        gradient: "from-sky-50 to-stone-100",
        size: "regular",
    },
    {
        id: 9,
        category: "ORM",
        client: "Senior Corporate Executive",
        industry: "Finance / Leadership",
        headline: "Decade-old media coverage surfacing on executive's name search.",
        stat: "#1",
        statLabel: "SERP Controlled",
        outcome:
            "Built authoritative owned content, secured guest columns in tier-1 publications, and suppressed legacy negative URLs. First page of Google now reflects the executive's current narrative.",
        tags: ["ORM", "PR", "Content"],
        accent: "dark",
        gradient: "from-zinc-900 via-stone-900 to-stone-950",
        size: "regular",
    },
    {
        id: 10,
        category: "MICE",
        client: "International Tech Conference",
        industry: "Events / B2B",
        headline: "Ticket sales stalling three months before the event date.",
        stat: "+85%",
        statLabel: "Registrations",
        outcome:
            "Multi-channel campaign using email, LinkedIn ads, retargeting, and affiliate speakers drove an 85% surge in registrations — selling out three weeks before the event.",
        tags: ["Event Marketing", "LinkedIn Ads", "Email"],
        accent: "lime",
        gradient: "from-lime-950 via-stone-900 to-stone-950",
        size: "regular",
    },
    {
        id: 11,
        category: "PR",
        client: "HealthTech Startup",
        industry: "Healthcare / Technology",
        headline: "Series A raise. Zero media presence to support the story.",
        stat: "32",
        statLabel: "Media Placements",
        outcome:
            "Crafted a compelling founder story and product narrative. Secured 32 placements across national and industry media within the quarter, including an exclusive in Economic Times.",
        tags: ["PR", "Media", "Thought Leadership"],
        accent: "teal",
        gradient: "from-teal-950 via-stone-900 to-stone-950",
        size: "regular",
    },
    {
        id: 12,
        category: "Brand",
        client: "Agri-Tech Platform",
        industry: "Agriculture / Technology",
        headline: "Tech platform that farmers couldn't connect with emotionally.",
        stat: "↑63%",
        statLabel: "Brand Sentiment",
        outcome:
            "Repositioned the brand around farmer empowerment rather than technology. New visual identity and messaging framework increased brand trust scores by 63% in a six-month tracking study.",
        tags: ["Brand Strategy", "Messaging", "Design"],
        accent: "dark",
        gradient: "from-emerald-950 via-stone-900 to-stone-950",
        size: "regular",
    },
];

const filterCategories = [
    "All",
    "ORM",
    "Digital",
    "AI",
    "Content",
    "Brand",
    "Commerce",
    "Ads",
    "MICE",
    "PR",
];

// ─────────────────────────────────────────────
// ACCENT HELPERS
// ─────────────────────────────────────────────
function getCardStyles(accent: string) {
    switch (accent) {
        case "lime":
            return {
                bg: "bg-stone-950",
                border: "border-[#98e600]/20",
                stat: "text-[#98e600]",
                pill: "bg-[#98e600]/10 text-[#98e600] border-[#98e600]/20",
                text: "text-white",
                sub: "text-stone-400",
                tag: "bg-white/5 text-stone-400 border-white/10",
                icon: "text-[#98e600]",
            };
        case "teal":
            return {
                bg: "bg-stone-950",
                border: "border-teal-400/20",
                stat: "text-teal-400",
                pill: "bg-teal-400/10 text-teal-400 border-teal-400/20",
                text: "text-white",
                sub: "text-stone-400",
                tag: "bg-white/5 text-stone-400 border-white/10",
                icon: "text-teal-400",
            };
        case "orange":
            return {
                bg: "bg-stone-950",
                border: "border-orange-400/20",
                stat: "text-orange-400",
                pill: "bg-orange-400/10 text-orange-400 border-orange-400/20",
                text: "text-white",
                sub: "text-stone-400",
                tag: "bg-white/5 text-stone-400 border-white/10",
                icon: "text-orange-400",
            };
        case "light":
            return {
                bg: "bg-white",
                border: "border-stone-200",
                stat: "text-stone-900",
                pill: "bg-stone-100 text-stone-600 border-stone-200",
                text: "text-stone-900",
                sub: "text-stone-500",
                tag: "bg-stone-100 text-stone-600 border-stone-200",
                icon: "text-stone-700",
            };
        default: // dark
            return {
                bg: "bg-stone-950",
                border: "border-white/10",
                stat: "text-white",
                pill: "bg-white/10 text-stone-300 border-white/10",
                text: "text-white",
                sub: "text-stone-400",
                tag: "bg-white/5 text-stone-400 border-white/10",
                icon: "text-white",
            };
    }
}

// ─────────────────────────────────────────────
// WORK CARD
// ─────────────────────────────────────────────
function WorkCard({
    study,
    index,
}: {
    study: (typeof caseStudies)[0];
    index: number;
}) {
    const styles = getCardStyles(study.accent);
    const isLarge = study.size === "large";

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.4, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative rounded-3xl overflow-hidden border ${styles.bg} ${styles.border} flex flex-col ${isLarge ? "md:col-span-2" : ""
                }`}
        >
            {/* Image / Gradient Background Banner */}
            <div className={`relative h-48 bg-gradient-to-br ${study.gradient} overflow-hidden flex-shrink-0`}>
                {/* Decorative noise overlay */}
                <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOCIgbnVtT2N0YXZlcz0iNCIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIxIi8+PC9zdmc+')]" />
                {/* Top row: category pill + arrow */}
                <div className="absolute top-5 left-5 right-5 flex justify-between items-center z-10">
                    <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border backdrop-blur-sm ${styles.pill}`}>
                        {study.category}
                    </span>
                    <Link
                        href="/contact"
                        className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                        <ArrowUpRight size={16} className="text-white" />
                    </Link>
                </div>

                {/* Stat overlay — bottom of image area */}
                <div className="absolute bottom-5 left-5 z-10">
                    <div className={`text-4xl md:text-5xl font-black tracking-tighter leading-none ${styles.stat}`}>
                        {study.stat}
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/60 mt-0.5">
                        {study.statLabel}
                    </div>
                </div>

                {/* Scale on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} transition-transform duration-700 group-hover:scale-105`} />
            </div>

            {/* Content area */}
            <div className="flex flex-col flex-grow p-6 gap-4">
                <div>
                    <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${styles.sub}`}>
                        {study.industry}
                    </p>
                    <h3 className={`text-base font-bold leading-snug ${styles.text}`}>
                        {study.client}
                    </h3>
                </div>

                <p className={`text-sm font-medium leading-relaxed flex-grow ${styles.sub}`}>
                    {study.outcome}
                </p>

                <div className="flex flex-wrap gap-1.5">
                    {study.tags.map((tag) => (
                        <span
                            key={tag}
                            className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${styles.tag}`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <Link
                    href="/contact"
                    className={`inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest mt-auto hover:gap-3 transition-all ${styles.icon}`}
                >
                    Get similar results
                    <ArrowRight size={14} />
                </Link>
            </div>
        </motion.div>
    );
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function WorkPage() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filtered =
        activeFilter === "All"
            ? caseStudies
            : caseStudies.filter((s) => s.category === activeFilter);

    const fadeIn = {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#F9FAFB] selection:bg-primary selection:text-black">
            <JsonLd type="WebPage" />
            <Header />

            <main className="flex-grow">
                {/* ── HERO ─────────────────────────────────── */}
                <section className="relative pt-48 pb-28 overflow-hidden bg-[#121212]">
                    {/* Lime radial glow */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-[-10%] left-[-5%] w-[60vw] h-[60vw] rounded-full bg-[#98e600]/5 blur-[120px]" />
                        <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] rounded-full bg-teal-500/5 blur-[100px]" />
                    </div>

                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center gap-4 mb-10"
                        >
                            <span className="px-3 py-1 rounded-md bg-white/5 text-stone-400 text-[10px] font-black uppercase tracking-[0.2em] border border-white/10">
                                Our Portfolio
                            </span>
                            <div className="h-px w-8 bg-white/10" />
                            <span className="text-stone-500 font-bold text-[10px] uppercase tracking-[0.2em]">
                                Est. 2017
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-5xl md:text-[6rem] lg:text-[7rem] font-black text-white mb-8 tracking-tighter leading-[0.9]"
                        >
                            Work we&apos;ve done.
                            <br />
                            <span className="text-[#98e600] italic font-serif">
                                Results we&apos;ve delivered.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="text-xl md:text-2xl text-stone-400 font-medium max-w-2xl leading-relaxed"
                        >
                            Design. Digital. Advertising. E-commerce. Branding. PR. Reputation. AI.
                            Across industries. Across markets. All delivered.
                        </motion.p>

                        {/* Stats row */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex flex-wrap gap-8 mt-14"
                        >
                            {[
                                { num: "500+", label: "Projects Delivered" },
                                { num: "12+", label: "Service Lines" },
                                { num: "8 yrs", label: "In Business" },
                                { num: "5000+", label: "Leaders Served" },
                            ].map((s) => (
                                <div key={s.label} className="flex flex-col gap-1">
                                    <span className="text-3xl font-black text-white">{s.num}</span>
                                    <span className="text-[11px] font-black uppercase tracking-widest text-stone-500">
                                        {s.label}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ── FILTER BAR ─────────────────────────────── */}
                <section className="sticky top-0 z-30 bg-white/90 backdrop-blur-xl border-b border-stone-200 shadow-sm">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide">
                            <Filter size={14} className="text-stone-400 shrink-0 mr-1" />
                            {filterCategories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveFilter(cat)}
                                    className={`shrink-0 px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all ${activeFilter === cat
                                            ? "bg-stone-900 text-white"
                                            : "bg-stone-100 text-stone-500 hover:bg-stone-200 hover:text-stone-800"
                                        }`}
                                >
                                    {cat}
                                    {cat !== "All" && (
                                        <span className="ml-1.5 opacity-60">
                                            {caseStudies.filter((s) => s.category === cat).length}
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── WORK GRID ──────────────────────────────── */}
                <section className="py-16 bg-[#F9FAFB]">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <AnimatePresence mode="wait">
                            {filtered.length === 0 ? (
                                <motion.div
                                    key="empty"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-center py-24 text-stone-400"
                                >
                                    <p className="text-xl font-bold">No work in this category yet.</p>
                                    <p className="mt-2 text-sm">Check back soon — we&apos;re always delivering.</p>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key={activeFilter}
                                    layout
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                                >
                                    {filtered.map((study, i) => (
                                        <WorkCard key={study.id} study={study} index={i} />
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </section>

                {/* ── SECTOR TAGS ───────────────────────────── */}
                <section className="py-16 bg-white border-y border-stone-100">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-10"
                        >
                            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-stone-400">
                                Industries We&apos;ve Served
                            </span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap justify-center gap-3"
                        >
                            {[
                                "FinTech",
                                "BFSI",
                                "Healthcare",
                                "SaaS",
                                "E-commerce",
                                "D2C",
                                "Real Estate",
                                "Luxury & Lifestyle",
                                "Media & Entertainment",
                                "Government",
                                "Education",
                                "Manufacturing",
                                "Hospitality & MICE",
                                "FMCG",
                                "Agriculture",
                                "Retail",
                                "Legal & Professional Services",
                                "IT Services",
                            ].map((sector) => (
                                <span
                                    key={sector}
                                    className="px-4 py-2 rounded-full border border-stone-200 text-stone-600 text-xs font-bold hover:border-stone-900 hover:text-stone-900 transition-colors cursor-default"
                                >
                                    {sector}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ── CONTENT TYPES SHOWCASE ─────────────────── */}
                <section className="py-24 bg-[#F9FAFB]">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-14"
                        >
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400">
                                What we&apos;ve built
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black text-stone-900 tracking-tighter mt-3 leading-none">
                                Work across every{" "}
                                <span className="text-[#98e600] italic">discipline.</span>
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {[
                                { label: "Brand Identities", count: "80+", color: "bg-purple-50 border-purple-200 text-purple-700" },
                                { label: "E-commerce Stores", count: "60+", color: "bg-amber-50 border-amber-200 text-amber-700" },
                                { label: "SEO Campaigns", count: "200+", color: "bg-[#98e600]/10 border-[#98e600]/30 text-[#5a8800]" },
                                { label: "Paid Ad Accounts", count: "150+", color: "bg-orange-50 border-orange-200 text-orange-700" },
                                { label: "Reputation Cases", count: "100+", color: "bg-slate-50 border-slate-200 text-slate-700" },
                                { label: "AI Automations", count: "40+", color: "bg-teal-50 border-teal-200 text-teal-700" },
                                { label: "Content Programmes", count: "300+", color: "bg-sky-50 border-sky-200 text-sky-700" },
                                { label: "PR Placements", count: "500+", color: "bg-rose-50 border-rose-200 text-rose-700" },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, scale: 0.97 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.06 }}
                                    className={`p-6 rounded-2xl border ${item.color} flex flex-col gap-2`}
                                >
                                    <span className="text-3xl font-black">{item.count}</span>
                                    <span className="text-xs font-black uppercase tracking-wider opacity-80">
                                        {item.label}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA ──────────────────────────────────────── */}
                <section className="py-32 bg-[#121212] relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute bottom-0 left-[20%] w-[50vw] h-[50vw] rounded-full bg-[#98e600]/5 blur-[120px]" />
                    </div>
                    <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block px-3 py-1 bg-[#98e600] text-black text-[9px] font-black uppercase tracking-widest rounded-full mb-10">
                                Your Turn
                            </span>
                            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-8">
                                Your results <br />
                                <span className="text-[#98e600] italic font-serif">
                                    could be next.
                                </span>
                            </h2>
                            <p className="text-xl text-stone-400 font-medium max-w-2xl mx-auto leading-relaxed mb-12">
                                Tell us where you are. We&apos;ll tell you exactly what needs to happen
                                next — backed by data, delivered by experts.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-3 px-10 py-5 bg-[#F97316] text-white font-black text-base rounded-full hover:bg-orange-400 transition-all active:scale-95 group"
                                >
                                    Talk to Us
                                    <ArrowRight
                                        size={20}
                                        className="group-hover:translate-x-1 transition-transform"
                                    />
                                </Link>
                                <Link
                                    href="/services"
                                    className="inline-flex items-center gap-3 px-10 py-5 bg-white/5 border border-white/10 text-white font-bold text-base rounded-full hover:bg-white/10 transition-all"
                                >
                                    Explore Services
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
