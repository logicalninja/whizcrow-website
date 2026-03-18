import { getPayload } from 'payload'
import config from './src/payload.config'

async function seed() {
    const payload = await getPayload({ config })

    console.log('Starting homepage seed...')

    const homepageData: any = {
        title: "WhizCrow Intelligence",
        slug: "home",
        _status: "published",
        layout: [
            {
                blockType: "section",
                backgroundColor: "light",
                paddingTop: "large",
                paddingBottom: "medium",
                containerWidth: "standard",
                blocks: [
                    {
                        blockType: "hero",
                        title: "Marketing built on AI, data, and human judgment.",
                        subtitle: "CMMI Level 5. ISO certified. Google and Meta partners. One agency with capabilities across everything—ORM, digital, content, AI, brand, PR, ads, e-commerce, MICE.",
                        ctaText: "Find Your Service",
                        ctaLink: "/services",
                        showTrustLine: true
                    }
                ]
            },
            {
                blockType: "section",
                backgroundColor: "transparent",
                paddingTop: "none",
                paddingBottom: "large",
                containerWidth: "standard",
                blocks: [
                    {
                        blockType: "componentSelector",
                        componentName: "trust-marquee"
                    }
                ]
            },
            {
                blockType: "section",
                backgroundColor: "transparent",
                paddingTop: "medium",
                paddingBottom: "medium",
                containerWidth: "standard",
                blocks: [
                    {
                        blockType: "richText",
                        content: {
                            root: {
                                type: "root",
                                children: [
                                    {
                                        type: "heading",
                                        tag: "h2",
                                        children: [
                                            {
                                                "text": "One agency. Every stage."
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    },
                    {
                        blockType: "gridRow",
                        columns: [
                            {
                                columnSpan: "1/3",
                                blocks: [
                                    {
                                        blockType: "richText",
                                        content: {
                                            root: {
                                                type: "root",
                                                children: [
                                                    { "type": "paragraph", "children": [{ "text": "Building", "format": 1 }] },
                                                    { "type": "paragraph", "children": [{ "text": "You need a website. You need to be found. You need technology that handles the basics." }] },
                                                    { "type": "paragraph", "children": [{ "text": "WhizAI · WhizContent" }] }
                                                ]
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                columnSpan: "1/3",
                                blocks: [
                                    {
                                        blockType: "richText",
                                        content: {
                                            root: {
                                                type: "root",
                                                children: [
                                                    { "type": "paragraph", "children": [{ "text": "Scaling", "format": 1 }] },
                                                    { "type": "paragraph", "children": [{ "text": "You need more customers. You need marketing that delivers measurable returns." }] },
                                                    { "type": "paragraph", "children": [{ "text": "WhizDigital · WhizAds" }] }
                                                ]
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                columnSpan: "1/3",
                                blocks: [
                                    {
                                        blockType: "richText",
                                        content: {
                                            root: {
                                                type: "root",
                                                children: [
                                                    { "type": "paragraph", "children": [{ "text": "Established", "format": 1 }] },
                                                    { "type": "paragraph", "children": [{ "text": "You've built something significant. You need to protect it. You need senior thinking." }] },
                                                    { "type": "paragraph", "children": [{ "text": "WhizORM · WhizPR" }] }
                                                ]
                                            }
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                blockType: "section",
                backgroundColor: "light",
                paddingTop: "medium",
                paddingBottom: "medium",
                containerWidth: "standard",
                blocks: [
                    {
                        blockType: "componentSelector",
                        componentName: "services"
                    }
                ]
            },
            {
                blockType: "section",
                backgroundColor: "dark",
                paddingTop: "medium",
                paddingBottom: "medium",
                containerWidth: "standard",
                blocks: [
                    {
                        blockType: "componentSelector",
                        componentName: "intelligence"
                    }
                ]
            },
            {
                blockType: "section",
                backgroundColor: "transparent",
                paddingTop: "medium",
                paddingBottom: "medium",
                containerWidth: "standard",
                blocks: [
                    {
                        blockType: "componentSelector",
                        componentName: "revenue-impact"
                    }
                ]
            },
            {
                blockType: "section",
                backgroundColor: "light",
                paddingTop: "medium",
                paddingBottom: "medium",
                containerWidth: "standard",
                blocks: [
                    {
                        blockType: "componentSelector",
                        componentName: "testimonials"
                    }
                ]
            },
            {
                blockType: "section",
                backgroundColor: "dark",
                paddingTop: "medium",
                paddingBottom: "medium",
                containerWidth: "standard",
                blocks: [
                    {
                        blockType: "componentSelector",
                        componentName: "cta",
                        title: "Ready to talk?",
                        subtitle: "Wherever you are, we're ready. Tell us what's happening. We'll tell you how we can help.",
                        ctaText: "Contact Us",
                        ctaLink: "/contact"
                    }
                ]
            }
        ],
        meta: {
            title: "Full-Service Digital Marketing Agency | AI + Data + Human | WhizCrow",
            description: "SEO, ORM, AI automation, content, branding, PR, ads, e-commerce, and MICE marketing. One agency. Every stage. CMMI Level 5. ISO certified."
        }
    }

    try {
        const result = await payload.update({
            collection: 'pages',
            id: 25,
            data: homepageData,
        })
        console.log('Homepage seeded successfully:', result.id)
    } catch (error) {
        console.error('Error seeding homepage:', error)
    }

    process.exit(0)
}

seed()
