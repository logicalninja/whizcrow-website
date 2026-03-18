'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ShareResultsProps {
    revenueLoss: number;
    rating: number;
    industry: string;
}

export default function ShareResults({ revenueLoss, rating, industry }: ShareResultsProps) {
    const [copied, setCopied] = useState(false);

    const shareData = {
        title: 'My Reputation Revenue Impact',
        text: `I just found out my business could be losing ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(revenueLoss)} annually due to our ${rating}⭐ rating. Check your impact here:`,
        url: typeof window !== 'undefined' ? window.location.href : 'https://calculator.whizcrow.com',
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    const handleShare = async (platform: 'twitter' | 'linkedin' | 'email') => {
        let url = '';
        const encodedText = encodeURIComponent(shareData.text);
        const encodedUrl = encodeURIComponent(shareData.url);

        switch (platform) {
            case 'twitter':
                url = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
                break;
            case 'linkedin':
                url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
                break;
            case 'email':
                url = `mailto:?subject=${encodeURIComponent(shareData.title)}&body=${encodedText}%0A%0A${encodedUrl}`;
                break;
        }

        window.open(url, '_blank', 'width=600,height=400');
    };

    return (
        <div className="mt-8 pt-8 border-t border-white/10">
            <h4 className="text-center text-xl font-display font-bold text-white mb-6">
                Share Your Results
            </h4>

            <div className="flex justify-center gap-6">
                <button
                    onClick={() => handleShare('twitter')}
                    className="p-4 bg-white/5 border border-white/10 hover:bg-blue-500/10 text-stone-400 hover:text-[#1DA1F2] rounded-2xl transition-all"
                    title="Share on Twitter"
                >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                </button>

                <button
                    onClick={() => handleShare('linkedin')}
                    className="p-4 bg-white/5 border border-white/10 hover:bg-blue-600/10 text-stone-400 hover:text-[#0A66C2] rounded-2xl transition-all"
                    title="Share on LinkedIn"
                >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                </button>

                <button
                    onClick={() => handleShare('email')}
                    className="p-4 bg-white/5 border border-white/10 hover:bg-white/10 text-stone-400 hover:text-white rounded-2xl transition-all"
                    title="Share via Email"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </button>

                <div className="relative">
                    <button
                        onClick={handleCopy}
                        className="p-4 bg-white/5 border border-white/10 hover:bg-white/10 text-stone-400 hover:text-white rounded-2xl transition-all"
                        title="Copy Link"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                    </button>

                    <AnimatePresence>
                        {copied && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1.5 bg-primary text-onyx text-xs font-bold rounded-lg shadow-lg whitespace-nowrap"
                            >
                                Copied!
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
