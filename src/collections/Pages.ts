import type { CollectionConfig } from 'payload'
import { SectionBlock } from '../blocks/layout/SectionBlock'
import { AIAssistant } from '../components/payload/AIAssistant'
import { SEOChecklist } from '../components/payload/SEOChecklist'
import { VisualEditorLink } from '../components/payload/VisualEditorLink'

export const Pages: CollectionConfig = {
    slug: 'pages',
    admin: {
        useAsTitle: 'title',
        livePreview: {
            url: ({ data }) => {
                const serverURL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
                let slug = data.slug === 'home' || !data.slug ? '' : data.slug
                if (slug.startsWith('/')) slug = slug.substring(1)
                return `${serverURL}/${slug}?preview=true`
            },
        },
    },
    access: {
        read: () => true,
        create: () => true,
        update: () => true,
    },
    versions: {
        drafts: true,
    },
    fields: [
        {
            name: 'visualEditorLink',
            type: 'ui',
            admin: {
                components: {
                    Field: '@/components/payload/VisualEditorLink#VisualEditorLink',
                },
                position: 'sidebar',
            }
        },
        {
            name: 'aiAssistant',
            type: 'ui',
            admin: {
                components: {
                    Field: '@/components/payload/AIAssistant#AIAssistant',
                },
                position: 'sidebar',
            }
        },
        {
            name: 'seoChecklist',
            type: 'ui',
            admin: {
                components: {
                    Field: '@/components/payload/SEOChecklist#SEOChecklist',
                },
                position: 'sidebar',
            }
        },
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Content',
                    fields: [
                        {
                            name: 'title',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'slug',
                            type: 'text',
                            required: true,
                            unique: true,
                            admin: {
                                description: 'The URL path (e.g. /about). Use "home" for the root page.',
                            },
                        },
                        {
                            name: 'layout',
                            type: 'blocks',
                            required: true,
                            admin: {
                                description: 'Add layout sections to build the page structure.',
                            },
                            blocks: [
                                SectionBlock,
                            ],
                            minRows: 1,
                        },
                    ],
                },
                {
                    label: 'Advanced Meta',
                    fields: [
                        {
                            name: 'headerScripts',
                            type: 'code',
                            label: 'Header Scripts',
                            admin: {
                                language: 'html',
                            },
                        },
                        {
                            name: 'footerScripts',
                            type: 'code',
                            label: 'Footer Scripts',
                            admin: {
                                language: 'html',
                            },
                        },
                    ],
                },
            ],
        },
    ],
    hooks: {
        beforeChange: [
            async ({ data, req: { payload } }) => {
                // 1. Broken Link Guard
                const layout = data.layout || []
                for (const section of layout) {
                    if (section.blocks) {
                        for (const block of section.blocks) {
                            if (block.ctaLink && block.ctaLink.startsWith('/')) {
                                const pageSlug = block.ctaLink.substring(1)
                                if (pageSlug) {
                                    const exists = await payload.find({
                                        collection: 'pages',
                                        where: { slug: { equals: pageSlug } },
                                        depth: 0,
                                    })
                                    if (exists.totalDocs === 0) {
                                        payload.logger.warn(`Broken Link Guard: Target page "${pageSlug}" does not exist.`)
                                    }
                                }
                            }

                            // 2. Brand Voice Sentinel
                            const brandVoiceWatchlist = ['brutalist', 'financial authority', 'traditional', 'legacy', 'corporate grey']
                            const contentString = JSON.stringify(block).toLowerCase()
                            for (const term of brandVoiceWatchlist) {
                                if (contentString.includes(term)) {
                                    payload.logger.warn(`Brand Voice Sentinel: Potential tone clash detected. Found term: "${term}". WhizCrow voice should be Digital-First and Energetic.`)
                                }
                            }
                        }
                    }
                }

                // 3. Dynamic Lead Placer
                const hasLeadForm = layout.some((s: any) => s.blocks?.some((b: any) => b.blockType === 'formBlock'))
                if (layout.length >= 4 && !hasLeadForm) {
                    payload.logger.warn(`Dynamic Lead Placer: This page is getting long (${layout.length} sections) but has no Lead Form. We recommend adding a Form Block to maximize conversion high-authority traffic.`)
                }

                return data
            },
        ],
    },
}
