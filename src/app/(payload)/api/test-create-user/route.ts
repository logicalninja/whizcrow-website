export const dynamic = 'force-dynamic'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function GET() {
    try {
        const payload = await getPayload({ config: configPromise })

        // 0. Force Update SiteSettings with Original Branding
        await payload.updateGlobal({
            slug: 'site-settings',
            data: {
                primaryColor: '#84CC16',
                secondaryColor: '#8B5CF6',
                backgroundColor: '#000000',
                textColor: '#FFFFFF',
                headingFont: 'font-sans',
                bodyFont: 'font-sans',
                voiceRules: 'Modern, Energetic, Digital-First, Professional.',
            }
        })

        // 1. Create the Bookings Hub as a Reusable Block
        const existingLib = await payload.find({
            collection: 'reusable-blocks',
            where: { title: { equals: 'Standard Bookings Hub' } }
        })

        let bookingsHubId = existingLib.docs[0]?.id
        if (!bookingsHubId) {
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
            bookingsHubId = bookingsHub.id
        }

        const pages = [
            {
                title: 'Home',
                slug: 'home',
                layout: [
                    {
                        blockType: 'hero',
                        title: 'Marketing built on AI, data, and human judgment.',
                        subtitle: 'CMMI Level 5. ISO certified. Google and Meta partners. One agency with capabilities across everything—ORM, digital, content, AI, brand, PR, ads, e-commerce, MICE.',
                        ctaText: 'Find Your Service',
                        ctaLink: '/services',
                    }
                ],
                metaTitle: 'Full-Service Digital Marketing Agency | AI + Data + Human | WhizCrow',
                metaDescription: 'SEO, ORM, AI automation, content, branding, PR, ads, e-commerce, and MICE marketing. One agency. Every stage.',
            },
            {
                title: 'Services Overview',
                slug: 'services',
                layout: [
                    {
                        blockType: 'hero',
                        title: 'Full-Service Marketing. One Standard.',
                        subtitle: 'You need marketing that works. Not guesswork. We start with data, apply AI where it makes sense, and bring human judgment to every decision.',
                        ctaText: 'Tell Us What You Need',
                        ctaLink: '/contact',
                    }
                ],
                metaTitle: 'Full-Service Digital Marketing Agency | Services Overview | WhizCrow',
                metaDescription: 'Explore our full range of services: ORM, Digital, AI, Content, Brand, Influence, PR, Commerce, Ads, and MICE.',
            },
            {
                title: 'WhizORM (Online Reputation Management)',
                slug: 'services/orm',
                layout: [
                    {
                        blockType: 'hero',
                        title: 'WhizORM. Protect Your Name.',
                        subtitle: 'We remove what shouldn\'t be there. We respond when it matters. We control the narrative.',
                        ctaText: 'Talk to Us About WhizORM',
                        ctaLink: '/contact',
                    },
                    {
                        blockType: 'libraryBlock',
                        reusableBlock: bookingsHubId,
                    }
                ],
                metaTitle: 'Online Reputation Management Agency | Remove Negative Search Results | WhizORM',
                metaDescription: 'Protect your name. Remove negative search results. Crisis response. Wikipedia defense.',
            },
            {
                title: 'WhizDigital (Digital Marketing)',
                slug: 'services/digital',
                layout: [
                    {
                        blockType: 'hero',
                        title: 'WhizDigital. Get Found. Get Customers.',
                        subtitle: 'Full-funnel marketing that turns searches into sales. SEO, Content, Ads, Lead Gen.',
                        ctaText: 'Talk to Us About WhizDigital',
                        ctaLink: '/contact',
                    }
                ],
                metaTitle: 'Digital Marketing Agency | SEO, Content, Paid Ads, Lead Generation | WhizDigital',
                metaDescription: 'Full-funnel digital marketing. SEO, content marketing, paid ads, lead generation, social media.',
            },
            {
                title: 'WhizAI (AI Automation)',
                slug: 'services/ai',
                layout: [
                    {
                        blockType: 'hero',
                        title: 'WhizAI. Automate the Busy Work.',
                        subtitle: 'Websites, funnels, CRM, AI receptionists, AI sales agents. Focus on what matters.',
                        ctaText: 'Talk to Us About WhizAI',
                        ctaLink: '/contact',
                    }
                ],
                metaTitle: 'AI Automation Agency | Websites, CRM, AI Receptionist, AI Sales Agent | WhizAI',
                metaDescription: 'AI-powered websites, funnels, CRM, AI receptionists, AI sales agents. Set up once. Support always.',
            },
            {
                title: 'WhizContent (Content Marketing)',
                slug: 'services/content',
                layout: [
                    {
                        blockType: 'hero',
                        title: 'WhizContent. Words That Work.',
                        subtitle: 'Content is how you get found, build trust, and convince people to buy. But only if it\'s good.',
                        ctaText: 'Talk to Us About WhizContent',
                        ctaLink: '/contact',
                    }
                ],
                metaTitle: 'Content Marketing Agency | Strategy, Copywriting, Blogs, Video Scripts | WhizContent',
                metaDescription: 'Content strategy. Copywriting. Blogging. Video scripts. Newsletters. Words that work.',
            },
            {
                title: 'WhizBrand (Branding)',
                slug: 'services/brand',
                layout: [
                    {
                        blockType: 'hero',
                        title: 'WhizBrand. Look Like Who You Are.',
                        subtitle: 'Your brand is what people say about you when you\'re not in the room. We make sure they say the right things.',
                        ctaText: 'Talk to Us About WhizBrand',
                        ctaLink: '/contact',
                    }
                ],
                metaTitle: 'Branding Agency | Strategy, Logo, Identity, Messaging | WhizBrand',
                metaDescription: 'Brand strategy. Logo design. Visual identity. Messaging. Look like who you are.',
            },
            {
                title: 'WhizInfluence (Influencer Marketing)',
                slug: 'services/influence',
                layout: [
                    {
                        blockType: 'hero',
                        title: 'WhizInfluence. Let Others Tell Your Story.',
                        subtitle: 'People trust people more than they trust brands. We connect you with the right voices.',
                        ctaText: 'Talk to Us About WhizInfluence',
                        ctaLink: '/contact',
                    }
                ],
                metaTitle: 'Influencer Marketing Agency | Creator Partnerships | WhizInfluence',
                metaDescription: 'Influencer campaigns. Creator partnerships. Authentic reach. Let others tell your story.',
            },
            {
                title: 'WhizPR (Public Relations)',
                slug: 'services/pr',
                layout: [
                    {
                        blockType: 'hero',
                        title: 'WhizPR. Get Talked About.',
                        subtitle: 'You\'ve built something worth talking about. We make sure the right people hear about it.',
                        ctaText: 'Talk to Us About WhizPR',
                        ctaLink: '/contact',
                    }
                ],
                metaTitle: 'Public Relations Agency | Media Outreach, Press Releases, Thought Leadership | WhizPR',
                metaDescription: 'Media relations. Press releases. Thought leadership. Get talked about.',
            },
            {
                title: 'WhizCommerce (E-commerce)',
                slug: 'services/commerce',
                layout: [
                    {
                        blockType: 'hero',
                        title: 'WhizCommerce. Sell More Online.',
                        subtitle: 'Your online store should be your best salesperson. We build, manage, and optimize.',
                        ctaText: 'Talk to Us About WhizCommerce',
                        ctaLink: '/contact',
                    }
                ],
                metaTitle: 'E-commerce Agency | Online Store Setup, Management, Optimization | WhizCommerce',
                metaDescription: 'E-commerce solutions. Store setup. Management. Optimization. Sell more online.',
            },
            {
                title: 'WhizAds (Paid Advertising)',
                slug: 'services/ads',
                layout: [
                    {
                        blockType: 'hero',
                        title: 'WhizAds. Spend Smart. Get Results.',
                        subtitle: 'Paid advertising across search, social, and programmatic networks. Every rupee counts.',
                        ctaText: 'Talk to Us About WhizAds',
                        ctaLink: '/contact',
                    }
                ],
                metaTitle: 'Paid Ads & Programmatic Advertising Agency | Google, LinkedIn, Meta | WhizAds',
                metaDescription: 'Paid ads on Google, LinkedIn, Meta. Plus programmatic advertising across thousands of websites.',
            },
            {
                title: 'WhizMICE (MICE Marketing)',
                slug: 'services/mice',
                layout: [
                    {
                        blockType: 'hero',
                        title: 'WhizMICE. Fill Seats. Build Buzz.',
                        subtitle: 'Events live and die by attendance and reputation. We deliver marketing that fills seats.',
                        ctaText: 'Talk to Us About WhizMICE',
                        ctaLink: '/contact',
                    }
                ],
                metaTitle: 'MICE Marketing Agency | Events, Conferences, Destinations Marketing | WhizMICE',
                metaDescription: 'Marketing for Meetings, Incentives, Conferences, Exhibitions. Fill seats. Protect reputations.',
            },
            {
                title: 'About Us',
                slug: 'about',
                layout: [
                    {
                        blockType: 'hero',
                        title: 'WhizCrow. Marketing agency. Since 2017.',
                        subtitle: 'CMMI Level 5. ISO:9001. ISO:42001 for AI. Built slowly. Delivered consistently.',
                        ctaText: 'See Our Work',
                        ctaLink: '/work',
                    }
                ],
                metaTitle: 'About WhizCrow | Marketing Agency | CMMI Level 5 | ISO Certified',
                metaDescription: 'We\'re WhizCrow. Marketing agency since 2017. CMMI Level 5. ISO:9001. ISO:42001 (AI).',
            },
            {
                title: 'Our Work (Case Studies)',
                slug: 'work',
                layout: [
                    {
                        blockType: 'hero',
                        title: 'Work we\'ve done. Results we\'ve delivered.',
                        subtitle: 'Real work. Real results. See how we\'ve helped companies across industries.',
                        ctaText: 'Let\'s Talk About Your Business',
                        ctaLink: '/contact',
                    }
                ],
                metaTitle: 'Case Studies | Client Results | WhizCrow',
                metaDescription: 'Real work. Real results. See how we\'ve helped companies across industries.',
            },
            {
                title: 'Blog',
                slug: 'blog',
                layout: [
                    {
                        blockType: 'hero',
                        title: 'Insights from the front lines of digital marketing.',
                        subtitle: 'We share what we learn. SEO, ORM, AI, and more.',
                        ctaText: 'Subscribe to Newsletter',
                        ctaLink: '#newsletter',
                    }
                ],
                metaTitle: 'WhizCrow Blog | Digital Marketing Insights & AI News',
                metaDescription: 'Read the latest from WhizCrow. Insights on SEO, ORM, AI automation, and more.',
            },
            {
                title: 'Contact',
                slug: 'contact',
                layout: [
                    {
                        blockType: 'hero',
                        title: 'Tell us where you are. We\'ll tell you what\'s next.',
                        subtitle: 'Response within 24 hours. A real person. Who can actually help.',
                        ctaText: 'Send a Message',
                        ctaLink: '#form',
                    },
                    {
                        blockType: 'formBlock',
                        formType: 'institutional',
                    }
                ],
                metaTitle: 'Contact WhizCrow | Let\'s Talk About Your Business',
                metaDescription: 'Tell us where you are. We\'ll tell you what\'s next. Response within 24 hours.',
            }
        ]

        for (const pageData of pages) {
            await payload.delete({
                collection: 'pages',
                where: { slug: { equals: pageData.slug } }
            })
            await payload.create({
                collection: 'pages',
                data: pageData,
            })
        }

        return Response.json({ success: true, message: 'Migration executed. Reusable blocks and Pages created.' })
    } catch (error: any) {
        console.error('Migration error:', error)
        return Response.json({ success: false, error: error.message, stack: error.stack })
    }
}
