import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Calendar, Share2, Bookmark, Clock } from 'lucide-react'
import { AuthorCard, BlogNewsletter } from '@/components/blog/BlogComponents'
import { RichText } from '@/components/blog/RichText'
import JsonLd from '@/components/seo/JsonLd'

export const ArticlePageContent = ({ article }: { article: any }) => {
    return (
        <article className="pt-32 md:pt-48 pb-24">
            <JsonLd type="BlogPosting" data={article} />

            <div className="container mx-auto px-6 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-stone-400 hover:text-stone-900 font-bold uppercase tracking-widest text-[10px] mb-12 transition-all group">
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Blog
                </Link>

                <div className="flex flex-wrap items-center gap-6 mb-10">
                    <span className="px-3 py-1 bg-stone-900 text-white text-[10px] font-black uppercase tracking-widest rounded-sm">
                        {article.category}
                    </span>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-stone-400 uppercase tracking-widest">
                        <Clock size={12} className="text-purple-600" />
                        {article.readTime || '5 min read'}
                    </div>
                </div>

                <h1 className="text-4xl md:text-7xl font-display font-bold text-stone-900 leading-[1.05] tracking-tight mb-12">
                    {article.title}
                </h1>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-stone-100 mb-16">
                    <AuthorCard author={article.author} role={article.authorRole || 'Author'} />
                    <div className="flex items-center gap-4">
                        <button className="p-3 rounded-full bg-stone-50 text-stone-400 hover:text-purple-600 hover:bg-stone-100 transition-all border border-stone-100">
                            <Share2 size={18} />
                        </button>
                        <button className="p-3 rounded-full bg-stone-50 text-stone-400 hover:text-purple-600 hover:bg-stone-100 transition-all border border-stone-100">
                            <Bookmark size={18} />
                        </button>
                    </div>
                </div>

                <div className="max-w-none">
                    <p className="text-2xl md:text-3xl font-display font-medium text-stone-900 mb-20 leading-tight tracking-tight opacity-90 border-l-4 border-purple-600 pl-8 py-2">
                        {article.excerpt}
                    </p>

                    <div className="flex items-center gap-6 text-[10px] text-stone-400 font-bold uppercase tracking-widest mb-12">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Published
                        </div>
                        <div className="w-1 h-1 rounded-full bg-stone-200" />
                        <div className="flex items-center gap-2 font-mono">
                            <Calendar size={12} className="text-purple-600" />
                            {article.date}
                        </div>
                    </div>

                    <div className="lg:col-span-8">
                        <div className="my-16">
                            <RichText content={article.content} />
                        </div>

                        <div className="bg-stone-50 border border-stone-200/50 p-10 rounded-[2rem] italic text-stone-600 text-base mb-24 text-center text-balance shadow-sm font-medium">
                            <p className="max-w-xl mx-auto">
                                This article represents our current perspective on the subject. 
                                <br />To learn more about how we apply these insights for our clients, please get in touch.
                            </p>
                        </div>
                    </div>
                </div>

                <BlogNewsletter />
            </div>
        </article>
    )
}
