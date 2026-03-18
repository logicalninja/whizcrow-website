// Script to populate Payload CMS with the exact content from Website Content Revamp.md

async function updatePage(slug, data) {
    // 1. Check if page exists
    const q = slug === '/' ? 'home' : slug
    const res = await fetch(`http://localhost:3000/api/pages?where[slug][equals]=${q}`)
    const existing = await res.json()

    if (existing.docs && existing.docs.length > 0) {
        const id = existing.docs[0].id
        console.log(`Updating existing page: ${q} (ID: ${id})`)
        const updateRes = await fetch(`http://localhost:3000/api/pages/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        if (!updateRes.ok) console.error(`Failed to update ${q}:`, await updateRes.text())
        else console.log(`✓ Updated ${q}`)
    } else {
        console.log(`Creating new page: ${q}`)
        const createRes = await fetch(`http://localhost:3000/api/pages`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ slug: q, _status: 'published', ...data })
        })
        if (!createRes.ok) console.error(`Failed to create ${q}:`, await createRes.text())
        else console.log(`✓ Created ${q}`)
    }
}

async function run() {
    // 1. HOME PAGE
    await updatePage('home', {
        title: 'Home',
        metaTitle: 'Full-Service Digital Marketing Agency | AI + Data + Human | WhizCrow',
        metaDescription: 'SEO, ORM, AI automation, content, branding, PR, ads, e-commerce, and MICE marketing. One agency. Every stage. CMMI Level 5. ISO certified. Google Partner.',
        layout: [
            {
                blockType: 'sectionBlock',
                components: [
                    {
                        type: 'Hero',
                        headline: 'Marketing built on AI, data, and human judgment.',
                        subheadline: "CMMI Level 5. ISO certified. Google and Meta partners. One agency with capabilities across everything—ORM, digital, content, AI, brand, PR, ads, e-commerce, MICE.",
                        ctaLabel: 'Find Your Service',
                        ctaLink: '/services',
                        alignment: 'center'
                    },
                    {
                        type: 'Stats',
                        stat1Value: 'Level 5',
                        stat1Label: 'CMMI Appraised',
                        stat2Value: '42001',
                        stat2Label: 'ISO AI Certified',
                        stat3Value: 'Google',
                        stat3Label: 'Premier Partner'
                    },
                    {
                        type: 'Features',
                        title: 'One agency. Every stage.',
                        feature1: 'Building: You need a website. You need to be found. You need technology that handles the basics. (WhizAI, WhizContent, WhizDigital)',
                        feature2: 'Scaling: You need more customers and measurable returns to scale without breaking. (WhizDigital, WhizAds, WhizCommerce)',
                        feature3: 'Established: You need to protect your empire. Senior thinking and work matching your ambition. (WhizORM, WhizPR, WhizInfluence)'
                    },
                    {
                        type: 'FAQ',
                        title: 'Services built over years. For where you are today.',
                        q1: 'WhizORM & WhizDigital',
                        a1: 'Protect your name, remove negatives, respond to crises. Get found on Google and get customers through content and ads.',
                        q2: 'WhizAI & WhizContent',
                        a2: 'Automate the busy work: websites, funnels, CRM, AI receptionists. Words that work: strategy, copywriting, video scripts.'
                    },
                    {
                        type: 'CTA',
                        heading: 'Ready to talk?',
                        body: "Wherever you are, we're ready. Tell us what's happening. We'll tell you how we can help.",
                        buttonText: 'Contact Us',
                        buttonLink: '/contact'
                    }
                ]
            }
        ]
    })

    // 2. SERVICES PAGE
    await updatePage('services', {
        title: 'Services Overview',
        metaTitle: 'Services Ecosystem | AI + Data + Human | WhizCrow',
        metaDescription: 'Explore our full-service marketing ecosystem. SEO, AI automation, Branding, Content, PR, E-commerce, ORM.',
        layout: [
            {
                blockType: 'sectionBlock',
                components: [
                    {
                        type: 'Hero',
                        headline: 'Full-Service Marketing. One Standard.',
                        subheadline: "You need marketing that works. Not guesswork. Start with data, apply AI where it makes sense, and bring human judgment to every decision.",
                        ctaLabel: 'Talk to Us',
                        ctaLink: '/contact',
                        alignment: 'center'
                    },
                    {
                        type: 'Features',
                        title: 'How Every Service Works',
                        feature1: 'AI Analyzes: Millions of data points faster than any human could to see what\'s happening before it becomes obvious.',
                        feature2: 'Data Informs: What\'s real, what\'s working, what\'s next. No opinions, no guesses.',
                        feature3: 'Humans Decide: Strategy, creativity, judgement. The things machines can\'t do.'
                    },
                    {
                        type: 'CTA',
                        heading: 'Not Sure Where to Start?',
                        body: 'We will figure it out together. From websites and automation to more customers and reputation protection.',
                        buttonText: 'Explore All Services',
                        buttonLink: '/services'
                    }
                ]
            }
        ]
    })

    // 3. ABOUT PAGE
    await updatePage('about', {
        title: 'About Us',
        metaTitle: 'About WhizCrow | Our Story and Mission',
        metaDescription: 'Learn about WhizCrow, a CMMI Level 5, ISO certified digital marketing and AI agency.',
        layout: [
            {
                blockType: 'sectionBlock',
                components: [
                    {
                        type: 'Hero',
                        headline: 'About WhizCrow',
                        subheadline: "We are an elite technology-driven marketing agency. CMMI Level 5. ISO certified. Google Partner.",
                        ctaLabel: 'Our Work',
                        ctaLink: '/work',
                        alignment: 'left'
                    },
                    {
                        type: 'Generic',
                        content: "WhizCrow represents the intersection of data-driven intelligence and elite marketing strategy. Operating globally.",
                        background: '#0a0a0a'
                    }
                ]
            }
        ]
    })

    console.log("Seeding complete.")
}

run()
