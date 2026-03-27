import { getArticles, getArticleBySlug } from '@/lib/articles'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ReadingProgress } from '@/components/blog/ReadingProgress'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { ArticlePageContent } from './ArticlePageContent'
import { ArticlePreviewClient } from './ArticlePreviewClient'

export default async function Page({
    params,
    searchParams
}: {
    params: Promise<{ slug: string }>,
    searchParams: Promise<{ draft?: string }>
}) {
    const { slug } = await params
    const { draft } = await searchParams
    const isDraft = draft === 'true'

    const article = await getArticleBySlug(slug)

    if (!article) {
        notFound()
    }

    const allArticles = await getArticles()
    const related = allArticles
        .filter((a: any) => a.slug !== slug && a.category === article.category)
        .slice(0, 2)

    if (!article) {
        notFound()
    }



    return (
        <main className="min-h-screen bg-white text-stone-900 selection:bg-purple-100 selection:text-purple-900">
            <Header />
            <ReadingProgress />

            {isDraft ? (
                <ArticlePreviewClient initialData={article}>
                    {(data) => <ArticlePageContent article={data} />}
                </ArticlePreviewClient>
            ) : (
                <ArticlePageContent article={article} />
            )}

            {related.length > 0 && (
                <section className="py-20 bg-stone-50 border-t border-stone-100">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <div className="flex items-center justify-between mb-10">
                            <h3 className="text-2xl font-display font-bold text-stone-900">You Might Also Like</h3>
                            <Link href="/blog" className="text-xs font-bold text-purple-600 hover:text-purple-800 flex items-center gap-1.5 transition-all">
                                See all posts <ArrowRight size={13} />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {related.map((a) => (
                                <Link key={a.slug} href={`/blog/${a.slug}`} className="group bg-white border border-stone-200 rounded-2xl p-7 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                                    <span className="text-[10px] font-bold text-purple-600 uppercase tracking-widest mb-3 block">{a.category}</span>
                                    <h4 className="text-lg font-bold text-stone-900 mb-3 leading-snug group-hover:text-purple-700 transition-colors">{a.title}</h4>
                                    <p className="text-stone-500 text-sm leading-relaxed mb-5 line-clamp-2">{a.excerpt}</p>
                                    <div className="flex items-center gap-2 text-xs font-semibold text-stone-400">
                                        <Clock size={12} /> {a.readTime || '5 min read'}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <div className="container mx-auto px-6 max-w-5xl py-16">
                <div className="bg-purple-600 rounded-2xl p-10 md:p-14 text-white text-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-purple-200 mb-3">Work With Us</p>
                    <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">Ready to Elevate Your Marketing?</h3>
                    <p className="text-purple-100 text-lg max-w-xl mx-auto mb-8">
                        Whether you want to grow your brand, boost your digital presence, or run high-impact campaigns — our team is ready to help.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-3.5 rounded-full hover:bg-purple-50 transition-all shadow-lg">
                        Book a Free Consultation <ArrowRight size={16} />
                    </Link>
                </div>
            </div>

            <Footer />
        </main>
    )
}
