import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Newsletter } from '@/components/home/Newsletter'
import { RenderBlocks } from '@/components/payload/RenderBlocks'
import { LivePreview } from '@/components/payload/LivePreview'

type PageProps = {
    params: Promise<{ slug?: string[] }>
    searchParams: Promise<{ preview?: string }>
}

export async function generateMetadata({ params }: PageProps) {
    const { slug = [] } = await params
    const payload = await getPayload({ config })

    const actualSlug = slug.length === 0 ? 'home' : slug.join('/')

    const result = await payload.find({
        collection: 'pages',
        where: {
            slug: {
                equals: actualSlug,
            },
        },
    })

    const page = result.docs[0] as any

    if (!page) {
        return {}
    }

    return {
        title: page.metaTitle || 'WhizCrow Intelligence',
        description: page.metaDescription,
        alternates: {
            canonical: page.canonicalURL || `https://whizcrow.com/${actualSlug}`,
        },
    }
}

export default async function Page({ params, searchParams }: PageProps) {
    const { slug = [] } = await params
    const { preview } = await searchParams
    const isPreview = preview === 'true'

    const payload = await getPayload({ config })

    let actualSlug = slug.length === 0 ? 'home' : slug.join('/')

    // Normalize
    if (actualSlug === 'index') actualSlug = 'home'

    // Support slugs that might have been saved with leading slash
    const possibleSlugs = [actualSlug, `/${actualSlug}`]

    const result = await payload.find({
        collection: 'pages',
        where: {
            slug: {
                in: possibleSlugs,
            },
        },
        draft: isPreview,
    })

    const page = result.docs[0] as any

    if (!page) {
        return notFound()
    }

    return (
        <div className="flex flex-col min-h-screen bg-stone-50">
            {page.headerScripts && (
                <div dangerouslySetInnerHTML={{ __html: page.headerScripts }} />
            )}

            <Header />

            <main className="flex-grow">
                {isPreview ? (
                    <LivePreview
                        initialData={page}
                        serverURL={process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'}
                    />
                ) : (
                    <RenderBlocks blocks={page.layout} />
                )}
            </main>

            <Newsletter />
            <Footer />

            {page.footerScripts && (
                <div dangerouslySetInnerHTML={{ __html: page.footerScripts }} />
            )}
        </div>
    )
}
