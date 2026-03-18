import { getPayload } from 'payload'
import config from '@/payload.config'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StrategicCTA } from '@/components/blog/BlogComponents'
import { ReadingProgress } from '@/components/blog/ReadingProgress'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Share2 } from 'lucide-react'
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

    const payload = await getPayload({ config })

    const { docs: articles } = await payload.find({
        collection: 'articles',
        where: {
            slug: { equals: slug }
        },
        limit: 1,
        draft: isDraft,
    })

    const article = articles[0]

    if (!article) {
        notFound()
    }

    // Fetch related articles
    const { docs: related } = await payload.find({
        collection: 'articles',
        where: {
            and: [
                { slug: { not_equals: slug } },
                { category: { equals: article.category } }
            ]
        },
        limit: 2
    })

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
                <section className="py-24 bg-stone-50 border-t border-stone-200">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="flex items-center justify-between mb-12">
                            <h3 className="text-3xl font-display font-bold text-stone-900 tracking-tight">Recommended <span className="text-purple-600">Intelligence</span></h3>
                            <Link href="/insights" className="text-xs font-black uppercase tracking-widest text-stone-400 hover:text-stone-900 flex items-center gap-2 transition-all">
                                View Full Index <ArrowLeft size={14} className="rotate-180" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {related.map((a) => (
                                <Link key={a.slug} href={`/insights/${a.slug}`} className="group relative bg-white border border-stone-200 p-8 rounded-[2.5rem] hover:border-purple-600/30 transition-all hover:shadow-xl hover:shadow-stone-200/50">
                                    <span className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-4 block group-hover:text-purple-600 transition-colors">{a.category}</span>
                                    <h4 className="text-2xl font-display font-bold text-stone-900 mb-4 leading-tight">{a.title}</h4>
                                    <p className="text-stone-500 text-sm leading-relaxed mb-8 line-clamp-2 italic">&quot;{a.excerpt}&quot;</p>
                                    <div className="flex items-center gap-2 text-stone-900 font-bold uppercase tracking-widest text-[10px]">
                                        Initialize Protocol <Share2 size={12} className="rotate-90" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <div className="container mx-auto px-6 max-w-7xl pb-24">
                <StrategicCTA
                    title="Threat Response Protocol"
                    description="Immediate action for active reputational crises. Our agents deploy in < 60 minutes."
                    href="/contact"
                />
            </div>

            <Footer />
        </main>
    )
}
