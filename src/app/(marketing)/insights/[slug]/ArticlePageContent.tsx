import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Clock, Share2, Bookmark } from 'lucide-react'
import { AuthorCard, BlogNewsletter } from '@/components/blog/BlogComponents'
import { RichText } from '@/components/blog/RichText'
import JsonLd from '@/components/seo/JsonLd'

export const ArticlePageContent = ({ article }: { article: any }) => {
    return (
        <article className="pt-32 md:pt-48 pb-24">
            <JsonLd type="BlogPosting" data={article} />

            <div className="container mx-auto px-6 max-w-4xl">
                <Link href="/insights" className="inline-flex items-center gap-2 text-stone-400 hover:text-stone-900 font-bold uppercase tracking-widest text-[10px] mb-12 transition-all group">
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Intelligence
                </Link>

                <div className="flex items-center gap-3 mb-8">
                    <span className="px-3 py-1 bg-stone-900 text-white text-[10px] font-black uppercase tracking-widest rounded-sm">
                        {article.category}
                    </span>
                    <div className="h-px w-8 bg-stone-200" />
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest flex items-center gap-1">
                        <Clock size={12} /> {article.readTime}
                    </span>
                </div>

                <h1 className="text-4xl md:text-7xl font-display font-bold text-stone-900 leading-[1.05] tracking-tight mb-12">
                    {article.title}
                </h1>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-stone-100 mb-16">
                    <AuthorCard author={article.author} role={article.authorRole || 'Intelligence Analyst'} />
                    <div className="flex items-center gap-4">
                        <button className="p-3 rounded-full bg-stone-50 text-stone-400 hover:text-purple-600 hover:bg-stone-100 transition-all border border-stone-100">
                            <Share2 size={18} />
                        </button>
                        <button className="p-3 rounded-full bg-stone-50 text-stone-400 hover:text-purple-600 hover:bg-stone-100 transition-all border border-stone-100">
                            <Bookmark size={18} />
                        </button>
                    </div>
                </div>

                <div className="prose prose-stone max-w-none prose-h2:font-display prose-h2:text-3xl prose-h2:font-bold prose-h2:tracking-tight prose-p:text-lg prose-p:leading-relaxed prose-p:text-stone-600 prose-strong:text-stone-900 prose-blockquote:border-l-4 prose-blockquote:border-purple-600 prose-blockquote:bg-stone-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-2xl">
                    <p className="text-2xl font-medium text-stone-900 mb-12 leading-relaxed opacity-80 italic">
                        &quot;{article.excerpt}&quot;
                    </p>

                    <div className="my-16 p-8 md:p-12 bg-stone-900 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
                        <h3 className="text-white text-xl font-display font-bold mb-6 flex items-center gap-3 relative z-10">
                            <span className="w-8 h-px bg-purple-500" /> Key Strategic Takeaways
                        </h3>
                        <ul className="space-y-6 relative z-10">
                            {article.keyTakeaways?.map((t: any, i: number) => (
                                <li key={i} className="flex gap-4 text-stone-400 font-medium">
                                    <span className="text-purple-500 font-black font-mono">0{i + 1}</span>
                                    {typeof t === 'string' ? t : t.takeaway}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="my-12">
                        <RichText content={article.content} />
                    </div>

                    <div className="bg-stone-50 border border-stone-100 p-8 rounded-2xl italic text-stone-500 text-sm mb-20 text-center text-balance">
                        Detailed algorithmic breakdown is currently limited to authorized personnel.
                        <br />For the full technical dossier, please contact our Strategy Unit.
                    </div>
                </div>

                <BlogNewsletter />
            </div>
        </article>
    )
}
