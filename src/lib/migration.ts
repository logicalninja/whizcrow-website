import { getPayload } from 'payload'
import configPromise from '@payload-config'

async function migrate() {
    const payload = await getPayload({ config: configPromise })

    // 1. Create the Bookings Hub as a Reusable Block if it doesn't exist
    const bookingsHub = await payload.create({
        collection: 'reusable-blocks',
        data: {
            title: 'Standard Bookings Hub',
            layout: [
                {
                    blockType: 'section',
                    containerWidth: 'standard',
                    blocks: [
                        {
                            blockType: 'formBlock',
                            title: 'Discovery Protocol',
                            formType: 'discovery',
                        }
                    ]
                }
            ]
        }
    })

    const pages = [
        {
            title: 'Home',
            slug: 'index',
            layout: [
                {
                    blockType: 'hero',
                    title: 'Marketing built on AI, data, and human judgment.',
                    subtitle: 'CMMI Level 5. ISO certified. Google and Meta partners. One agency with capabilities across everything—ORM, digital, content, AI, brand, PR, ads, e-commerce, MICE.',
                    ctaText: 'Find Your Service',
                    ctaLink: '/services',
                }
                // More blocks for home would go here
            ],
            meta: {
                title: 'Full-Service Digital Marketing Agency | AI + Data + Human | WhizCrow',
                description: 'SEO, ORM, AI automation, content, branding, PR, ads, e-commerce, and MICE marketing. One agency. Every stage. CMMI Level 5. ISO certified. Google Partner.',
            }
        },
        {
            title: 'WhizORM (Online Reputation Management)',
            slug: 'services/orm',
            layout: [
                {
                    blockType: 'hero',
                    title: 'WhizORM: The Elite Online Reputation Management Agency',
                    subtitle: 'Protect your name. Remove negatives. Respond to crises. We control the narrative.',
                    ctaText: 'Talk to Us About WhizORM',
                    ctaLink: '/contact',
                },
                {
                    blockType: 'faq',
                    faqs: [
                        { question: 'Do you remove negativ results removed?', answer: 'Done. Permanently or suppressed.' },
                        { question: 'What about Wikipedia defense?', answer: 'Defense. Monitoring. Edits that stick.' }
                    ]
                },
                {
                    blockType: 'libraryBlock',
                    reusableBlock: bookingsHub.id,
                }
            ],
            meta: {
                title: 'Online Reputation Management Agency | Remove Negative Search Results | WhizORM',
                description: 'Protect your name. Remove negative search results. Crisis response. Wikipedia defense. Investor narrative. CMMI Level 5. ISO certified.',
            }
        }
    ]

    for (const pageData of pages) {
        // Delete if exists to avoid dupes during revamp
        await payload.delete({
            collection: 'pages',
            where: {
                slug: {
                    equals: pageData.slug
                }
            }
        })

        console.log(`Pushing page: ${pageData.title} to slug: ${pageData.slug}`)
        await payload.create({
            collection: 'pages',
            data: pageData,
        })
    }

    console.log('Migration complete.')
}

migrate().catch(console.error)
