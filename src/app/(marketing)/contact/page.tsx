import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { InstitutionalInquiryForm } from "@/components/contact/InstitutionalInquiryForm";
import { Mail, Clock, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { WHATSAPP_URL } from "@/components/layout/WhatsAppLink";
import { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Contact WhizCrow — Marketing Agency Mumbai",
    description: "Contact WhizCrow, a full-service marketing agency in Mumbai. Reach us for SEO, paid ads, branding, PR, AI automation & more. Call +91 83692 19922 or email us.",
    openGraph: {
        title: "Contact WhizCrow — Marketing Agency Mumbai",
        description: "Contact WhizCrow, a full-service marketing agency in Mumbai. Reach us for SEO, paid ads, branding, PR, AI automation & more. Call +91 83692 19922 or email us.",
        url: "https://whizcrow.com/contact",
        type: "website",
    },
    alternates: {
        canonical: "https://whizcrow.com/contact",
    },
    robots: { index: true, follow: true },
};

const faqs = [
    {
        q: "What services does WhizCrow offer?",
        a: "We're a full-service marketing agency. We handle SEO, social media management, paid advertising (Google & Meta), content creation, email marketing, branding, website design, and MICE (events & conferences). Whether you need one service or a complete marketing team, we've got you covered."
    },
    {
        q: "How long before I start seeing results?",
        a: "It depends on the channel. Paid ads typically show results within the first week. SEO takes 3–6 months to build momentum. Social media growth is steady from month one. We set realistic expectations upfront and report progress every month so you're never in the dark."
    },
    {
        q: "Do you work with small businesses or only large companies?",
        a: "We work with businesses of all sizes — from startups finding their footing to established brands looking to scale. Our approach is tailored to your budget and goals, not a one-size-fits-all package."
    },
    {
        q: "How do I know which services are right for my business?",
        a: "Send us a message or give us a call and we'll have an honest conversation about where you are now and where you want to go. We'll recommend only what makes sense for your situation — no upselling, no fluff."
    },
    {
        q: "What makes WhizCrow different from other marketing agencies?",
        a: "We treat your business like our own. You get a dedicated team that understands your industry, communicates clearly, and focuses on outcomes — not just activity. We measure everything and tie our work directly to your business goals."
    }
];

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://whizcrow.com/#localbusiness",
    name: "WhizCrow",
    description: "WhizCrow is a full-service marketing agency in Mumbai offering SEO, paid ads, branding, content marketing, PR, influencer marketing, ORM, AI automation, e-commerce, and MICE event marketing.",
    url: "https://whizcrow.com",
    logo: "https://whizcrow.com/logos/blackbackground.png",
    image: "https://whizcrow.com/logos/blackbackground.png",
    telephone: "+91-83692-19922",
    email: "hello@whizcrow.com",
    foundingDate: "2017",
    priceRange: "$$",
    address: {
        "@type": "PostalAddress",
        streetAddress: "No. 516, 5th Floor, Options Primo Building, Off Cross Rd C, near Passport Office",
        addressLocality: "Andheri East, Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400093",
        addressCountry: "IN",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: 19.1203341,
        longitude: 72.8760731,
    },
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
        },
    ],
    sameAs: [
        "https://ae.linkedin.com/company/whizcrow",
        "https://www.instagram.com/whizcrow/",
        "https://x.com/whizcrow",
        "https://www.facebook.com/whizcrowtechnologies/",
    ],
    hasMap: "https://maps.google.com/?q=WhizCrow+Technologies+Andheri+East+Mumbai",
};

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-stone-50">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <JsonLd type="ContactPage" />
            <JsonLd type="FAQPage" data={faqs.map(f => ({ question: f.q, answer: f.a }))} />
            <JsonLd type="BreadcrumbList" data={{
                itemListElement: [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://whizcrow.com" },
                    { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://whizcrow.com/contact" }
                ]
            }} />
            <Header />

            <main className="flex-grow pt-24 md:pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-7xl">

                    {/* Hero & Form Split Section */}
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-24 md:mb-32">
                        {/* Left: Hero Copy */}
                        <div className="lg:col-span-6 pt-8 md:pt-12">
                            <h1 className="text-5xl md:text-7xl font-black text-stone-900 mb-8 tracking-tighter leading-[0.95]">
                                Contact Us for
                                <span className="text-primary italic"> Unfiltered Advice</span> on Marketing for Your Business.
                            </h1>
                            <p className="text-xl md:text-2xl text-stone-600 leading-relaxed font-medium max-w-xl">
                                Whether you want more customers, a stronger online presence, or a full marketing strategy — we&apos;re here to help. No sales pitch, just a real conversation.
                            </p>

                            <div className="mt-12 flex items-center gap-6">
                                <div className="flex -space-x-2">
                                    {[
                                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
                                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
                                        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
                                    ].map((src, i) => (
                                        <img
                                            key={i}
                                            src={src}
                                            alt="Corporate Leader"
                                            className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white object-cover"
                                        />
                                    ))}
                                </div>
                                <p className="text-xs md:text-sm font-bold text-stone-900">
                                    Trusted by 500+ <span className="text-stone-400">businesses across India</span>
                                </p>
                            </div>
                        </div>

                        {/* Right: High-Impact Inquiry Form */}
                        <div className="lg:col-span-6 relative group">
                            {/* Decorative background glow */}
                            <div className="absolute -inset-2 bg-primary/10 rounded-[3.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>

                            <div className="bg-stone-900 p-10 md:p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden ring-1 ring-white/10">
                                {/* Technical motif */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                                <div className="mb-10 relative z-10">
                                    <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">Let&apos;s Talk</h2>
                                    <p className="text-stone-400 font-medium text-sm">Fill in your details and we&apos;ll get back to you within one business day.</p>
                                </div>

                                <InstitutionalInquiryForm />

                                <div className="mt-10 pt-8 border-t border-white/5 text-[11px] text-stone-500 font-medium text-center">
                                    Your information is kept private and never shared with third parties.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Flow */}
                    <div className="space-y-24">
                        {/* Direct Channels Grid */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <a href="https://wa.me/918369219922?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20marketing%20services." target="_blank" rel="noopener noreferrer" className="p-8 bg-stone-900 border border-primary/30 rounded-[2.5rem] hover:shadow-[0_0_30px_rgba(255,215,0,0.1)] transition-all group lg:scale-105 shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                                <WhatsAppIcon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                                <div className="flex items-center gap-2 mb-2">
                                    <h3 className="text-[10px] font-black uppercase tracking-widest text-primary">WhatsApp</h3>
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                </div>
                                <p className="text-xl font-bold text-white tracking-tight">+91 83692 19922</p>
                                <p className="text-[10px] text-stone-500 font-bold uppercase mt-2">Chat with us anytime</p>
                            </a>
                            <a href="mailto:hello@whizcrow.com" className="p-8 bg-white border border-stone-200 rounded-[2.5rem] hover:shadow-xl transition-all group">
                                <Mail size={32} className="text-secondary mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xs font-black uppercase tracking-widest text-stone-400 mb-2">Email Us</h3>
                                <p className="text-xl font-bold text-stone-900">hello@whizcrow.com</p>
                            </a>
                            <a href="tel:+918369219922" className="p-8 bg-white border border-stone-200 rounded-[2.5rem] hover:shadow-xl transition-all group">
                                <Phone size={32} className="text-primary mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xs font-black uppercase tracking-widest text-stone-400 mb-2">Call Us</h3>
                                <p className="text-xl font-bold text-stone-900">+91 83692 19922</p>
                            </a>
                            <div className="p-8 bg-white border border-stone-200 rounded-[2.5rem]">
                                <Clock size={32} className="text-orange-500 mb-6" />
                                <h3 className="text-xs font-black uppercase tracking-widest text-stone-400 mb-2">Office Hours</h3>
                                <p className="text-lg font-bold text-stone-900 leading-tight">Mon–Fri: 9am – 6pm<br /><span className="text-stone-500 text-sm font-medium">IST (Mumbai)</span></p>
                            </div>
                        </div>

                        {/* Secondary Info Grid */}
                        <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-start">
                            <div className="lg:col-span-5 space-y-8">
                                {/* Social Presence */}
                                <div className="flex flex-col gap-6">
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400">Follow Us</span>
                                    <div className="flex gap-4">
                                        <a href="https://ae.linkedin.com/company/whizcrow" target="_blank" rel="noopener noreferrer" className="p-4 bg-white border border-stone-200 rounded-2xl hover:bg-stone-900 hover:text-white transition-all shadow-sm">
                                            <Linkedin size={24} />
                                        </a>
                                        <a href="https://x.com/whizcrow?lang=en" target="_blank" rel="noopener noreferrer" className="p-4 bg-white border border-stone-200 rounded-2xl hover:bg-stone-900 hover:text-white transition-all shadow-sm">
                                            <Twitter size={24} />
                                        </a>
                                        <a href="https://www.instagram.com/whizcrow/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white border border-stone-200 rounded-2xl hover:bg-stone-900 hover:text-white transition-all shadow-sm">
                                            <Instagram size={24} />
                                        </a>
                                        <a href="https://www.facebook.com/whizcrowtechnologies/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white border border-stone-200 rounded-2xl hover:bg-stone-900 hover:text-white transition-all shadow-sm">
                                            <Facebook size={24} />
                                        </a>
                                    </div>
                                </div>

                                {/* Office Address */}
                                <div className="flex flex-col gap-4 pt-8 border-t border-stone-200">
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400">Our Office</span>
                                    <div className="flex gap-3">
                                        <MapPin size={18} className="text-primary shrink-0 mt-1" />
                                        <p className="text-stone-700 font-medium leading-relaxed text-sm">
                                            No. 516, 5th Floor, Options Primo Building,<br />
                                            Off, Cross Rd C, near Passport Office,<br />
                                            opp. Maruti Service Center, Shree Krishna Nagar,<br />
                                            MIDC, Andheri East, Mumbai,<br />
                                            Maharashtra 400093, India
                                        </p>
                                    </div>
                                </div>

                                {/* Google Maps Embed */}
                                <div className="rounded-[2rem] overflow-hidden border border-stone-200 shadow-sm">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.710911881808!2d72.8760731!3d19.1203341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c94386774637%3A0x8dfa53f597fe102d!2sWhizCrow%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sae!4v1774045903114!5m2!1sen!2sae"
                                        width="100%"
                                        height="300"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="WhizCrow Office Location"
                                    />
                                </div>
                            </div>

                            {/* Strategic FAQs */}
                            <div className="lg:col-span-7 space-y-12">
                                <h2 className="text-3xl font-bold text-stone-900">Common Questions</h2>
                                <div className="space-y-10">
                                    {faqs.map((faq, i) => (
                                        <div key={i} className="group border-b border-stone-200 pb-10 last:border-0 hover:border-primary/30 transition-colors">
                                            <h4 className="text-xl md:text-2xl font-bold text-stone-900 mb-6 group-hover:text-primary transition-colors pr-12 relative">
                                                {faq.q}
                                            </h4>
                                            <p className="text-stone-500 font-medium leading-relaxed max-w-2xl text-lg">
                                                {faq.a}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
