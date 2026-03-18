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
                placeholder="Search Intelligence..."
                className="w-full bg-white border-2 border-stone-200 py-3 pl-12 pr-4 rounded-xl font-display font-bold text-stone-900 focus:border-purple-600 focus:ring-0 outline-none transition-all placeholder:text-stone-300 shadow-sm"
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
        // Simulated API call
        setTimeout(() => setStatus('success'), 1000);
    };

    return (
        <section className="bg-stone-900 rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative border border-white/10">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 leading-tight">
                        The Editorial <span className="text-purple-400">Dispatch</span>
                    </h3>
                    <p className="text-stone-400 font-medium text-lg max-w-sm">
                        Daily technical briefings on algorithmic warfare and reputation dominance.
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="relative">
                        <input
                            type="email"
                            required
                            placeholder="agent@company.com"
                            className="w-full bg-white/5 border-2 border-white/10 p-4 rounded-2xl text-white font-bold outline-none focus:border-purple-500 transition-all placeholder:text-stone-600"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            disabled={status !== 'idle'}
                            className="absolute right-2 top-2 bottom-2 bg-purple-600 hover:bg-purple-500 text-white font-bold px-6 rounded-xl flex items-center gap-2 transition-all disabled:opacity-50"
                        >
                            {status === 'loading' ? 'Encrypting...' : status === 'success' ? 'Deployed' : 'Join Unit'}
                            <ArrowRight size={16} strokeWidth={3} />
                        </button>
                    </div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-stone-500 px-2">
                        Zero Spam. 100% Signal. Opt-out anytime.
                    </p>
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
        <Link href={href} className="group block bg-white border-2 border-stone-900 p-8 rounded-[2rem] hover:bg-stone-900 transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
            <h4 className="text-2xl font-display font-bold text-stone-900 group-hover:text-white mb-2">{title}</h4>
            <p className="text-stone-500 group-hover:text-stone-400 font-medium mb-6">{description}</p>
            <div className="flex items-center gap-2 text-stone-900 group-hover:text-purple-400 font-bold uppercase tracking-widest text-xs">
                Initialize Protocol <ArrowRight size={16} />
            </div>
        </Link>
    );
}

// --- RSSLink ---
export function RSSLink() {
    return (
        <Link
            href="/insights/rss.xml"
            className="flex items-center gap-2 px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-full text-xs font-bold transition-all border border-stone-200"
        >
            <Rss size={14} /> RSS Feed
        </Link>
    );
}
