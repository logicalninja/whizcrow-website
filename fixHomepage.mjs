import { getPayload } from 'payload';
import config from './src/payload.config.ts';

async function fixHomepage() {
    const payload = await getPayload({ config });

    console.log('--- Reconstructing WhizCrow Homepage ---');

    const homepageData = {
        title: 'WhizCrow Intelligence',
        slug: 'home',
        _status: 'published',
        layout: [
            // 1. HERO SECTION
            {
                blockType: 'section',
                backgroundColor: 'light',
                paddingTop: 'large',
                paddingBottom: 'medium',
                containerWidth: 'standard',
                blocks: [
                    {
                        blockType: 'hero',
                        title: 'Marketing built on AI, data, and human judgment.',
                        subtitle: 'CMMI Level 5. ISO certified. Google and Meta partners. One agency with capabilities across everything—ORM, digital, content, AI, brand, PR, ads, e-commerce, MICE.',
                        ctaText: 'Find Your Service',
                        ctaLink: '/services',
                        showTrustLine: true
                    }
                ]
            },
            // 2. CREDENTIALS STRIP
            {
                blockType: 'section',
                backgroundColor: 'transparent',
                paddingTop: 'none',
                paddingBottom: 'large',
                containerWidth: 'standard',
                blocks: [
                    {
                        blockType: 'componentSelector',
                        componentName: 'trust-marquee'
                    }
                ]
            },
            // 3. ONE AGENCY MATRIX
            {
                blockType: 'section',
                backgroundColor: 'white',
                paddingTop: 'medium',
                paddingBottom: 'medium',
                containerWidth: 'standard',
                blocks: [
                    {
                        blockType: 'richText',
                        content: {
                            root: {
                                type: 'root',
                                children: [
                                    {
                                        type: 'heading',
                                        tag: 'h2',
                                        children: [{ text: 'One agency. Every stage.' }]
                                    }
                                ]
                            }
                        }
                    },
                    {
                        blockType: 'gridRow',
                        columns: [
                            {
                                columnSpan: '1/3',
                                blocks: [
                                    {
                                        blockType: 'richText',
                                        content: {
                                            root: {
                                                type: 'root',
                                                children: [
                                                    { type: 'heading', tag: 'h4', children: [{ text: 'Building' }] },
                                                    { type: 'paragraph', children: [{ text: 'You need a website. You need to be found. You need technology that handles the basics while you focus on everything else.' }] },
                                                    { type: 'paragraph', children: [{ text: 'Start here: ', format: 1 }, { text: 'WhizAI · WhizContent · WhizDigital essentials' }] }
                                                ]
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                columnSpan: '1/3',
                                blocks: [
                                    {
                                        blockType: 'richText',
                                        content: {
                                            root: {
                                                type: 'root',
                                                children: [
                                                    { type: 'heading', tag: 'h4', children: [{ text: 'Scaling' }] },
                                                    { type: 'paragraph', children: [{ text: 'You need more customers. You need marketing that delivers measurable returns. You need to scale without breaking.' }] },
                                                    { type: 'paragraph', children: [{ text: 'Start here: ', format: 1 }, { text: 'WhizDigital · WhizAds · WhizCommerce' }] }
                                                ]
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                columnSpan: '1/3',
                                blocks: [
                                    {
                                        blockType: 'richText',
                                        content: {
                                            root: {
                                                type: 'root',
                                                children: [
                                                    { type: 'heading', tag: 'h4', children: [{ text: 'Established' }] },
                                                    { type: 'paragraph', children: [{ text: "You've built something significant. You need to protect it. You need senior thinking. You need work that matches your ambition." }] },
                                                    { type: 'paragraph', children: [{ text: 'Start here: ', format: 1 }, { text: 'WhizORM · WhizPR · WhizInfluence' }] }
                                                ]
                                            }
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        blockType: 'richText',
                        content: {
                            root: {
                                type: 'root',
                                children: [
                                    { type: 'paragraph', children: [{ text: 'Not sure? ' }, { text: 'Tell us what is happening', link: '/contact' }, { text: ". We'll point you where to look." }] }
                                ]
                            }
                        }
                    }
                ]
            },
            // 4. SERVICES OVERVIEW
            {
                blockType: 'section',
                backgroundColor: 'light',
                paddingTop: 'medium',
                paddingBottom: 'medium',
                containerWidth: 'standard',
                blocks: [
                    {
                        blockType: 'componentSelector',
                        componentName: 'services'
                    }
                ]
            },
            // 5. PHILOSOPHY
            {
                blockType: 'section',
                backgroundColor: 'dark',
                paddingTop: 'medium',
                paddingBottom: 'medium',
                containerWidth: 'standard',
                blocks: [
                    {
                        blockType: 'componentSelector',
                        componentName: 'intelligence'
                    }
                ]
            },
            // 6. RESULTS
            {
                blockType: 'section',
                backgroundColor: 'white',
                paddingTop: 'medium',
                paddingBottom: 'medium',
                containerWidth: 'standard',
                blocks: [
                    {
                        blockType: 'componentSelector',
                        componentName: 'revenue-impact'
                    }
                ]
            },
            // 7. TESTIMONIALS
            {
                blockType: 'section',
                backgroundColor: 'light',
                paddingTop: 'medium',
                paddingBottom: 'medium',
                containerWidth: 'standard',
                blocks: [
                    {
                        blockType: 'componentSelector',
                        componentName: 'testimonials'
                    }
                ]
            },
            // 8. FINAL CTA
            {
                blockType: 'section',
                backgroundColor: 'dark',
                paddingTop: 'medium',
                paddingBottom: 'medium',
                containerWidth: 'standard',
                blocks: [
                    {
                        blockType: 'componentSelector',
                        componentName: 'cta',
                        title: 'Ready to talk?',
                        subtitle: "Wherever you are, we're ready. Tell us what's happening. We'll tell you how we can help.",
                        ctaText: 'Contact Us',
                        ctaLink: '/contact'
                    }
                ]
            }
        ],
        meta: {
            title: 'Full-Service Digital Marketing Agency | AI + Data + Human | WhizCrow',
            description: 'SEO, ORM, AI automation, content, branding, PR, ads, e-commerce, and MICE marketing. One agency. Every stage. CMMI Level 5. ISO certified.'
        }
    };

    // Find and update the homepage
    const result = await payload.find({
        collection: 'pages',
        where: { slug: { equals: 'home' } },
    });

    if (result.totalDocs > 0) {
        const id = result.docs[0].id;
        await payload.update({
            collection: 'pages',
            id,
            data: homepageData,
        });
        console.log(`Successfully updated Homepage (ID: ${id})`);
    } else {
        await payload.create({
            collection: 'pages',
            data: homepageData,
        });
        console.log('Successfully created Homepage');
    }

    process.exit(0);
}

fixHomepage();
