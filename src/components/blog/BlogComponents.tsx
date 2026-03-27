"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Mail, ArrowRight, Rss, User, Clock, ChevronRight } from 'lucide-react';
import Link from 'next/link';

// --- BlogSearch ---
export function BlogSearch({ articles, onSearch }: { articles: any[], onSearch: (filtered: any[]) => void }) {
    const [query, setQuery] = useState('');

    useEffect(() => {
        const filtered = articles.filter(a =>
            a.title.toLowerCase().includes(query.toLowerCase()) ||
            a.excerpt.toLowerCase().includes(query.toLowerCase()) ||
            a.category.toLowerCase().includes(query.toLowerCase())
        );
        onSearch(filtered);
    }, [query, articles, onSearch]);

    return (
        <div className="relative group w-full max-w-md">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-stone-400 group-focus-within:text-purple-600 transition-colors">
                <Search size={18} strokeWidth={2.5} />
            </div>
            <input
                type="text"
                placeholder="Search articles..."
                className="w-full bg-white border-2 border-stone-200 py-3 pl-12 pr-4 rounded-xl font-display font-black text-stone-900 focus:border-purple-600 focus:ring-0 outline-none transition-all placeholder:text-stone-300 shadow-sm"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    );
}

// --- BlogNewsletter ---
export function BlogNewsletter() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setTimeout(() => setStatus('success'), 1000);
    };

    return (
        <section className="bg-stone-900 rounded-2xl p-10 md:p-14 overflow-hidden relative">
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-3">WhizCrow Blog</p>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 leading-tight">
                        Marketing tips, delivered fresh
                    </h3>
                    <p className="text-stone-400 text-base leading-relaxed">
                        Practical guides, campaign ideas and digital marketing trends from our team — straight to your inbox. No spam, ever.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="relative">
                        <input
                            type="email"
                            required
                            placeholder="your@email.com"
                            className="w-full bg-white/5 border border-white/10 p-4 pr-36 rounded-xl text-white outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all placeholder:text-stone-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            disabled={status !== 'idle'}
                            className="absolute right-2 top-2 bottom-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-5 rounded-lg flex items-center gap-2 transition-all disabled:opacity-50 text-sm"
                        >
                            {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : 'Subscribe'}
                            {status === 'idle' && <ArrowRight size={15} />}
                        </button>
                    </div>
                    <p className="text-xs text-stone-500 px-1">Unsubscribe anytime. We respect your privacy.</p>
                </form>
            </div>
        </section>
    );
}

// --- AuthorCard ---
export function AuthorCard({ author, role, image }: { author: string, role: string, image?: string }) {
    return (
        <div className="flex items-center gap-4 bg-white border border-stone-200 p-4 rounded-2xl shadow-sm">
            <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 overflow-hidden border border-stone-100">
                {image ? <img src={image} alt={author} className="w-full h-full object-cover" /> : <User size={24} />}
            </div>
            <div>
                <h4 className="font-display font-bold text-stone-900 leading-none mb-1">{author}</h4>
                <p className="text-[10px] uppercase tracking-widest font-bold text-purple-600">{role}</p>
            </div>
        </div>
    );
}

// --- StrategicCTA ---
export function StrategicCTA({ title, description, href }: { title: string, description: string, href: string }) {
    return (
        <Link 
            href={href} 
            className="group block bg-white border border-stone-200 p-10 rounded-[2.5rem] hover:border-purple-600/30 transition-all duration-500 relative overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1"
        >
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ArrowRight size={32} className="text-purple-600 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
            </div>
            
            <h4 className="text-3xl font-display font-black text-stone-900 mb-4 tracking-tight group-hover:text-purple-600 transition-colors uppercase">{title}</h4>
            <p className="text-stone-500 font-body font-medium text-lg mb-10 leading-relaxed max-w-md">{description}</p>
            
            <div className="inline-flex items-center gap-3 py-3 px-6 bg-stone-900 text-white rounded-xl font-black uppercase tracking-[0.2em] text-[10px] group-hover:bg-purple-600 transition-colors shadow-lg shadow-stone-900/10">
                Secure Your Narrative <ArrowRight size={14} strokeWidth={3} />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-600/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
        </Link>
    );
}

// --- RSSLink ---
export function RSSLink() {
    return (
        <Link
            href="/blog/rss.xml"
            className="flex items-center gap-2 px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-full text-xs font-bold transition-all border border-stone-200"
        >
            <Rss size={14} /> RSS Feed
        </Link>
    );
}
