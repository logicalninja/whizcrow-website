import { getPayload } from 'payload'
import config from '@payload-config'
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        const payload = await getPayload({ config })
        const { docs: pages } = await payload.find({ collection: 'pages', depth: 0 })

        const defaultDesignSettings = {
            backgroundColor: 'transparent',
            paddingTop: 'medium',
            paddingBottom: 'medium',
            textAlignment: 'left'
        }

        const createRichText = (nodes) => ({
            root: {
                type: 'root',
                format: '',
                indent: 0,
                version: 1,
                children: nodes.map(node => ({
                    ...node,
                    version: 1,
                }))
            }
        })

        const createTextNode = (text, type = 'paragraph', format = 0) => ({
            type: type,
            format: '',
            indent: 0,
            direction: 'ltr',
            children: [
                {
                    detail: 0,
                    format: format,
                    mode: 'normal',
                    style: '',
                    text: text,
                    type: 'text',
                    version: 1,
                }
            ]
        })

        const createListNode = (items) => ({
            type: 'list',
            listType: 'bullet',
            start: 1,
            tag: 'ul',
            direction: 'ltr',
            format: '',
            indent: 0,
            children: items.map(text => ({
                type: 'listitem',
                format: '',
                indent: 0,
                value: 1,
                direction: 'ltr',
                children: [
                    {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: text,
                        type: 'text',
                        version: 1,
                    }
                ]
            }))
        });

        const targetPages = [
            {
                slug: 'services/orm',
                data: {
                    title: 'WhizORM (Online Reputation Management)',
                    metaTitle: 'Online Reputation Management Agency | Remove Negative Search Results | WhizORM',
                    metaDescription: 'Protect your name. Remove negative search results. Crisis response. Wikipedia defense. Investor narrative. CMMI Level 5. ISO certified.',
                    layout: [
                        {
                            blockType: 'section',
                            containerWidth: 'standard',
                            ...defaultDesignSettings,
                            blocks: [
                                {
                                    blockType: 'hero',
                                    title: 'WhizORM. Protect Your Name.',
                                    subtitle: "When someone searches for you—or your company—what do they find? If the answer isn't 'exactly what I want them to see,' you need WhizORM. We remove what shouldn't be there. We respond when it matters. We control the narrative.",
                                    ctaText: 'Talk to Us About WhizORM',
                                    ctaLink: '/contact',
                                    showTrustLine: true,
                                    ...defaultDesignSettings
                                },
                                {
                                    blockType: 'richText',
                                    content: createRichText([
                                        createTextNode('What You Get', 'heading'),
                                        createListNode([
                                            'Negative search results removed: Done. Permanently or suppressed.',
                                            'A crisis happening right now: 24/7 response team. Within hours.',
                                            'Wikipedia pages under attack: Defense. Monitoring. Edits that stick.'
                                        ]),
                                        createTextNode('Other benefits include clean narratives for investor due diligence, protection for executives, and strategies to appear correctly in AI search results.')
                                    ]),
                                    ...defaultDesignSettings
                                },
                                {
                                    blockType: 'faq',
                                    title: 'Why WhizORM Works',
                                    subtitle: 'Here is how we differ from the rest.',
                                    items: [
                                        {
                                            question: 'What Others Do vs What We Do',
                                            answer: 'We use AI-powered analysis rather than hoping the problem goes away. We assign experienced teams, not juniors. We report on results, not just activity. We use custom strategy, not generic approaches.'
                                        }
                                    ],
                                    ...defaultDesignSettings
                                },
                                {
                                    blockType: 'hero',
                                    title: 'Ready to Protect Your Name?',
                                    subtitle: 'Get in touch today.',
                                    ctaText: 'Talk to Us',
                                    ctaLink: '/contact',
                                    showTrustLine: false,
                                    ...defaultDesignSettings
                                }
                            ]
                        }
                    ]
                }
            },
            {
                slug: 'services/digital',
                data: {
                    title: 'WhizDigital (Digital Marketing)',
                    metaTitle: 'Digital Marketing Agency | SEO, Content, Paid Ads, Lead Generation | WhizDigital',
                    metaDescription: 'SEO, content marketing, paid ads, lead generation, social media. Full-funnel digital marketing. CMMI Level 5. ISO certified. Google Partner.',
                    layout: [
                        {
                            blockType: 'section',
                            containerWidth: 'standard',
                            ...defaultDesignSettings,
                            blocks: [
                                {
                                    blockType: 'hero',
                                    title: 'WhizDigital. Get Found. Get Customers.',
                                    subtitle: "You need more than website visitors. You need customers. WhizDigital delivers full-funnel marketing that turns searches into sales.",
                                    ctaText: 'Talk to Us About WhizDigital',
                                    ctaLink: '/contact',
                                    showTrustLine: true,
                                    ...defaultDesignSettings
                                },
                                {
                                    blockType: 'richText',
                                    content: createRichText([
                                        createTextNode('What You Get', 'heading'),
                                        createListNode([
                                            'SEO: Show up on Google when people search for what you do.',
                                            'Content Marketing: Blogs, articles, resources that attract and convert.',
                                            'Paid Ads & Lead Generation: Spend that pays back and turn visitors into conversations.'
                                        ]),
                                        createTextNode('Our team starts with an audit, builds a strategy, executes across channels, and continuously measures and adjusts based on data.')
                                    ]),
                                    ...defaultDesignSettings
                                },
                                {
                                    blockType: 'hero',
                                    title: 'Ready to Get Found?',
                                    subtitle: 'Reach out to us to start growing.',
                                    ctaText: 'Talk to Us',
                                    ctaLink: '/contact',
                                    showTrustLine: false,
                                    ...defaultDesignSettings
                                }
                            ]
                        }
                    ]
                }
            },
            {
                slug: 'services/ai',
                data: {
                    title: 'WhizAI (AI Automation)',
                    metaTitle: 'AI Automation Agency | Websites, CRM, AI Receptionist, AI Sales Agent | WhizAI',
                    metaDescription: 'AI-powered websites, funnels, CRM, AI receptionists, AI sales agents. Set up once. Support always. ISO:42001 certified. CMMI Level 5.',
                    layout: [
                        {
                            blockType: 'section',
                            containerWidth: 'standard',
                            ...defaultDesignSettings,
                            blocks: [
                                {
                                    blockType: 'hero',
                                    title: 'WhizAI. Automate the Busy Work.',
                                    subtitle: "You didn't start a business to spend hours on the phone, chase leads, or figure out technology. WhizAI handles all of it. So you can focus on what matters.",
                                    ctaText: 'Talk to Us About WhizAI',
                                    ctaLink: '/contact',
                                    showTrustLine: true,
                                    ...defaultDesignSettings
                                },
                                {
                                    blockType: 'richText',
                                    content: createRichText([
                                        createTextNode('What You Get', 'heading'),
                                        createListNode([
                                            'Websites + Funnels: Professional sites that turn visitors into customers.',
                                            'CRM Setup: Track every lead. Never miss a follow-up.',
                                            'AI Receptionist & Sales Agent: Answers calls 24/7, books appointments, and qualifies prospects.'
                                        ]),
                                        createTextNode('Simple pricing packages from basic website to full stack support.')
                                    ]),
                                    ...defaultDesignSettings
                                },
                                {
                                    blockType: 'hero',
                                    title: 'Ready to Automate?',
                                    subtitle: 'Save time and get back to business.',
                                    ctaText: 'Talk to Us',
                                    ctaLink: '/contact',
                                    showTrustLine: false,
                                    ...defaultDesignSettings
                                }
                            ]
                        }
                    ]
                }
            },
            {
                slug: 'services/content',
                data: {
                    title: 'WhizContent (Content Marketing)',
                    metaTitle: 'Content Marketing Agency | Strategy, Copywriting, Blogs, Video Scripts | WhizContent',
                    metaDescription: 'Content strategy. Copywriting. Blogging. Video scripts. Newsletters. Words that work. CMMI Level 5. ISO certified.',
                    layout: [
                        {
                            blockType: 'section',
                            containerWidth: 'standard',
                            ...defaultDesignSettings,
                            blocks: [
                                {
                                    blockType: 'hero',
                                    title: 'WhizContent. Words That Work.',
                                    subtitle: "Content is how you get found, build trust, and convince people to buy. But only if it's good. Really good. WhizContent delivers content that actually works. Not filler.",
                                    ctaText: 'Talk to Us About WhizContent',
                                    ctaLink: '/contact',
                                    showTrustLine: true,
                                    ...defaultDesignSettings
                                },
                                {
                                    blockType: 'richText',
                                    content: createRichText([
                                        createTextNode('What You Get', 'heading'),
                                        createListNode([
                                            'Content Strategy & Copywriting: A complete plan and copy that converts.',
                                            'Blogging & Newsletters: Articles found on Google and emails people open.',
                                            'Reports, Whitepapers & Video Scripts: Demonstrate authority and keep viewers watching.'
                                        ])
                                    ]),
                                    ...defaultDesignSettings
                                },
                                {
                                    blockType: 'hero',
                                    title: 'Ready for Content That Works?',
                                    subtitle: 'Reach out today.',
                                    ctaText: 'Talk to Us',
                                    ctaLink: '/contact',
                                    showTrustLine: false,
                                    ...defaultDesignSettings
                                }
                            ]
                        }
                    ]
                }
            },
            {
                slug: 'services/brand',
                data: {
                    title: 'WhizBrand (Branding)',
                    metaTitle: 'Branding Agency | Strategy, Logo, Identity, Messaging | WhizBrand',
                    metaDescription: 'Brand strategy. Logo design. Visual identity. Messaging. Look like who you are. CMMI Level 5. ISO certified.',
                    layout: [
                        {
                            blockType: 'section',
                            containerWidth: 'standard',
                            ...defaultDesignSettings,
                            blocks: [
                                {
                                    blockType: 'hero',
                                    title: 'WhizBrand. Look Like Who You Are.',
                                    subtitle: "Your brand is what people say about you when you're not in the room. WhizBrand makes sure they say the right things.",
                                    ctaText: 'Talk to Us About WhizBrand',
                                    ctaLink: '/contact',
                                    showTrustLine: true,
                                    ...defaultDesignSettings
                                },
                                {
                                    blockType: 'richText',
                                    content: createRichText([
                                        createTextNode('What You Get', 'heading'),
                                        createListNode([
                                            "Brand Strategy: Who you are. Who you're for. What you stand for.",
                                            "Logo & Visual Identity: A mark to be proud of. Consistent, memorable colors and fonts.",
                                            "Messaging: What you say and how you say it."
                                        ])
                                    ]),
                                    ...defaultDesignSettings
                                },
                                {
                                    blockType: 'hero',
                                    title: 'Ready to Look Like Who You Are?',
                                    subtitle: "Let's build your brand.",
                                    ctaText: 'Talk to Us',
                                    ctaLink: '/contact',
                                    showTrustLine: false,
                                    ...defaultDesignSettings
                                }
                            ]
                        }
                    ]
                }
            },
            {
                slug: 'services/influence',
                data: {
                    title: 'WhizInfluence (Influencer Marketing)',
                    metaTitle: 'Influencer Marketing Agency | Creator Partnerships | WhizInfluence',
                    metaDescription: 'Influencer campaigns. Creator partnerships. Authentic reach. Let others tell your story. CMMI Level 5. ISO certified.',
                    layout: [
                        {
                            blockType: 'section',
                            containerWidth: 'standard',
                            ...defaultDesignSettings,
                            blocks: [
                                {
                                    blockType: 'hero',
                                    title: 'WhizInfluence. Let Others Tell Your Story.',
                                    subtitle: "People trust people more than they trust brands. WhizInfluence connects you with the right voices to tell your story.",
                                    ctaText: 'Talk to Us About WhizInfluence',
                                    ctaLink: '/contact',
                                    showTrustLine: true,
                                    ...defaultDesignSettings
                                },
                                {
                                    blockType: 'richText',
                                    content: createRichText([
                                        createTextNode('What You Get', 'heading'),
                                        createListNode([
                                            "Influencer Campaigns: Find the right voices, manage relationships, measure results.",
                                            "Creator Partnerships: Long-term relationships with creators who believe in you.",
                                            "Campaign Strategy & Tracking: Determine platforms, messages, and see the data."
                                        ])
                                    ]),
                                    ...defaultDesignSettings
                                },
                                {
                                    blockType: 'hero',
                                    title: 'Ready to Let Others Tell Your Story?',
                                    subtitle: 'Reach out to find your perfect creators.',
                                    ctaText: 'Talk to Us',
                                    ctaLink: '/contact',
                                    showTrustLine: false,
                                    ...defaultDesignSettings
                                }
                            ]
                        }
                    ]
                }
            },
            {
                slug: 'services/pr',
                data: {
                    title: 'WhizPR (Public Relations)',
                    metaTitle: 'Public Relations Agency | Media Outreach, Press Releases, Thought Leadership | WhizPR',
                    metaDescription: 'Media relations. Press releases. Thought leadership. Get talked about. CMMI Level 5. ISO certified.',
                    layout: [
                        {
                            blockType: 'section',
                            containerWidth: 'standard',
                            ...defaultDesignSettings,
                            blocks: [
                                {
                                    blockType: 'hero',
                                    title: 'WhizPR. Get Talked About.',
                                    subtitle: "You've built something worth talking about. WhizPR makes sure the right people hear about it.",
                                    ctaText: 'Talk to Us About WhizPR',
                                    ctaLink: '/contact',
                                    showTrustLine: true,
                                    ...defaultDesignSettings
                                },
                                {
                                    blockType: 'richText',
                                    content: createRichText([
                                        createTextNode('What You Get', 'heading'),
                                        createListNode([
                                            "Media Relations: Build relationships with journalists who cover your industry.",
                                            "Press Releases & Thought Leadership: Announce news, get leaders quoted.",
                                            "Crisis Communications & Media Training: Manage the narrative and prepare your team."
                                        ])
                                    ]),
                                    ...defaultDesignSettings
                                },
                                {
                                    blockType: 'hero',
                                    title: 'Ready to Get Talked About?',
                                    subtitle: "Let's shape your narrative.",
                                    ctaText: 'Talk to Us',
                                    ctaLink: '/contact',
                                    showTrustLine: false,
                                    ...defaultDesignSettings
                                }
                            ]
                        }
                    ]
                }
            },
            {
                slug: 'services/commerce',
                data: {
                    title: 'WhizCommerce (E-commerce)',
                    metaTitle: 'E-commerce Agency | Online Store Setup, Management, Optimization | WhizCommerce',
                    metaDescription: 'E-commerce solutions. Store setup. Management. Optimization. Sell more online. CMMI Level 5. ISO certified. Shopify Partner.',
                    layout: [
                        {
                            blockType: 'section',
                            containerWidth: 'standard',
                            ...defaultDesignSettings,
                            blocks: [
                                {
                                    blockType: 'hero',
                                    title: 'WhizCommerce. Sell More Online.',
                                    subtitle: "Your online store should be your best salesperson. WhizCommerce builds, manages, and optimizes e-commerce that actually sells.",
                                    ctaText: 'Talk to Us About WhizCommerce',
                                    ctaLink: '/contact',
                                    showTrustLine: true,
                                    ...defaultDesignSettings
                                },
                                {
                                    blockType: 'richText',
                                    content: createRichText([
                                        createTextNode('What You Get', 'heading'),
                                        createListNode([
                                            "Store Setup & Management: From zero to selling, including daily operations.",
                                            "Optimization: More traffic, better conversion, higher average order value.",
                                            "Platform Expertise: Shopify, WooCommerce, Custom."
                                        ])
                                    ]),
                                    ...defaultDesignSettings
                                },
                                {
                                    blockType: 'hero',
                                    title: 'Ready to Sell More Online?',
                                    subtitle: "Get in touch and let's scale your store.",
                                    ctaText: 'Talk to Us',
                                    ctaLink: '/contact',
                                    showTrustLine: false,
                                    ...defaultDesignSettings
                                }
                            ]
                        }
                    ]
                }
            },
            {
                slug: 'services/ads',
                data: {
                    title: 'WhizAds (Paid Advertising + Programmatic)',
                    metaTitle: 'Paid Ads & Programmatic Advertising Agency | Google, LinkedIn, Meta, Programmatic | WhizAds',
                    metaDescription: 'Paid ads on Google, LinkedIn, Meta. Plus programmatic advertising across thousands of websites. Spend smart. Get results. CMMI Level 5. Google Partner. Meta Partner.',
                    layout: [
                        {
                            blockType: 'section',
                            containerWidth: 'standard',
                            ...defaultDesignSettings,
                            blocks: [
                                {
                                    blockType: 'hero',
                                    title: 'WhizAds. Spend Smart. Get Results.',
                                    subtitle: "Paid advertising is the fastest way to get customers. But only if you spend wisely. WhizAds makes every rupee count—across search, social, and programmatic networks.",
                                    ctaText: 'Talk to Us About WhizAds',
                                    ctaLink: '/contact',
                                    showTrustLine: true,
                                    ...defaultDesignSettings
                                },
                                {
                                    blockType: 'richText',
                                    content: createRichText([
                                        createTextNode('What You Get', 'heading'),
                                        createListNode([
                                            "Google & Meta Ads: Show up when people search, engage visually on social.",
                                            "LinkedIn Ads: Target professionals by job title, company, industry.",
                                            "Programmatic Advertising: Automated ad buying across thousands of websites."
                                        ])
                                    ]),
                                    ...defaultDesignSettings
                                },
                                {
                                    blockType: 'hero',
                                    title: 'Ready to Spend Smart?',
                                    subtitle: 'Reach out to maximize your ROI.',
                                    ctaText: 'Talk to Us',
                                    ctaLink: '/contact',
                                    showTrustLine: false,
                                    ...defaultDesignSettings
                                }
                            ]
                        }
                    ]
                }
            },
            {
                slug: 'services/mice',
                data: {
                    title: 'WhizMICE (MICE Marketing)',
                    metaTitle: 'MICE Marketing Agency | Events, Conferences, Destinations Marketing | WhizMICE',
                    metaDescription: 'Marketing for Meetings, Incentives, Conferences, Exhibitions. Fill seats. Protect reputations. Drive registration. CMMI Level 5.',
                    layout: [
                        {
                            blockType: 'section',
                            containerWidth: 'standard',
                            ...defaultDesignSettings,
                            blocks: [
                                {
                                    blockType: 'hero',
                                    title: 'WhizMICE. Fill Seats. Build Buzz. Protect Reputations.',
                                    subtitle: "Events live and die by attendance and reputation. WhizMICE delivers marketing that fills seats and protects your brand.",
                                    ctaText: 'Talk to Us About WhizMICE',
                                    ctaLink: '/contact',
                                    showTrustLine: true,
                                    ...defaultDesignSettings
                                },
                                {
                                    blockType: 'richText',
                                    content: createRichText([
                                        createTextNode('What You Get', 'heading'),
                                        createListNode([
                                            "Event Promotion & Registration: Attract attendees and get sign-ups via email, ads, and content.",
                                            "Destination & Venue Marketing: Promote to event planners and protect online reputations.",
                                            "Post-Event Marketing & Crisis Protection: Capture leads and manage narratives if things go wrong."
                                        ])
                                    ]),
                                    ...defaultDesignSettings
                                },
                                {
                                    blockType: 'hero',
                                    title: 'Ready to Fill Seats?',
                                    subtitle: "Let's talk about your next event.",
                                    ctaText: 'Talk to Us',
                                    ctaLink: '/contact',
                                    showTrustLine: false,
                                    ...defaultDesignSettings
                                }
                            ]
                        }
                    ]
                }
            },
            {
                slug: 'work',
                data: {
                    title: 'Our Work (Case Studies)',
                    metaTitle: 'Case Studies | Client Results | WhizCrow',
                    metaDescription: 'Real work. Real results. See how we\'ve helped companies across industries.',
                    layout: [
                        {
                            blockType: 'section',
                            containerWidth: 'standard',
                            ...defaultDesignSettings,
                            blocks: [
                                {
                                    blockType: 'hero',
                                    title: 'Work we\'ve done. Results we\'ve delivered.',
                                    subtitle: 'Filter by ORM, Digital, AI, Content, Brand, Influence, PR, Commerce, Ads, MICE.',
                                    ctaText: 'Let\'s talk about your business',
                                    ctaLink: '/contact',
                                    showTrustLine: false,
                                    ...defaultDesignSettings
                                },
                                {
                                    blockType: 'richText',
                                    content: createRichText([
                                        createTextNode('Client: FinTech | The ask: Grow leads | What we did: SEO & Content | What happened: 200% traffic increase')
                                    ]),
                                    ...defaultDesignSettings
                                }
                            ]
                        }
                    ]
                }
            },
            {
                slug: 'blog',
                data: {
                    title: 'Blog',
                    metaTitle: 'Intelligence & Insights | WhizCrow Blog',
                    metaDescription: 'Read the latest thoughts on marketing, AI, and digital growth from WhizCrow.',
                    layout: [
                        {
                            blockType: 'section',
                            containerWidth: 'standard',
                            ...defaultDesignSettings,
                            blocks: [
                                {
                                    blockType: 'hero',
                                    title: 'Intelligence & Insights',
                                    subtitle: 'Read the latest thoughts on marketing, AI, and digital growth from the WhizCrow team.',
                                    ctaText: 'Talk to Us',
                                    ctaLink: '/contact',
                                    showTrustLine: false,
                                    ...defaultDesignSettings
                                }
                            ]
                        }
                    ]
                }
            },
            {
                slug: 'contact',
                data: {
                    title: 'Contact',
                    metaTitle: 'Contact WhizCrow | Let\'s Talk About Your Business',
                    metaDescription: 'Tell us where you are. We\'ll tell you what\'s next. Response within 24 hours.',
                    layout: [
                        {
                            blockType: 'section',
                            containerWidth: 'standard',
                            ...defaultDesignSettings,
                            blocks: [
                                {
                                    blockType: 'hero',
                                    title: 'Tell us where you are. We\'ll tell you what\'s next.',
                                    subtitle: "Within 24 hours. A real person. Who can actually help.",
                                    ctaText: 'Talk to Sales',
                                    ctaLink: '/contact',
                                    showTrustLine: false,
                                    ...defaultDesignSettings
                                },
                                {
                                    blockType: 'form',
                                    enableIntro: false,
                                    ...defaultDesignSettings
                                },
                                {
                                    blockType: 'faq',
                                    title: 'Quick Questions',
                                    subtitle: '',
                                    items: [
                                        {
                                            question: 'Do you work with small businesses?',
                                            answer: 'Yes. Every stage.'
                                        },
                                        {
                                            question: 'What if I don\'t know what I need?',
                                            answer: 'Tell us your situation. We\'ll guide you.'
                                        }
                                    ],
                                    ...defaultDesignSettings
                                },
                                {
                                    blockType: 'richText',
                                    content: createRichText([
                                        createTextNode('Alternative Contact: Email: you@whizcrow.com | Phone: [your-phone] | Office: [address]')
                                    ]),
                                    ...defaultDesignSettings
                                }
                            ]
                        }
                    ]
                }
            }
        ]

        for (const target of targetPages) {
            const existingPage = pages.find(p => p.slug === target.slug)
            if (existingPage) {
                await payload.update({
                    collection: 'pages',
                    id: existingPage.id,
                    data: { ...target.data, _status: 'published' }
                })
            } else {
                await payload.create({
                    collection: 'pages',
                    data: { slug: target.slug, _status: 'published', ...target.data }
                })
            }
        }

        return NextResponse.json({ success: true, message: 'Seeded successfully.' })
    } catch (err) {
        return NextResponse.json({ success: false, error: String(err) }, { status: 500 })
    }
}
