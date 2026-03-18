import { getPayload } from 'payload'
import config from '@/payload.config'
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        const payload = await getPayload({ config })

        console.log('WhizCrow SEO Agent: Starting daily research (API Triggered)...')

        // WhizBRAM Pillar Focus: Authority (A) & Trust (T)
        const suggestedTopic = {
            title: 'The SERP Countermeasures: Reclaiming Page-1 Authority via WhizBRAM Protocol',
            slug: `serp-countermeasures-whizbram-authority-${Date.now()}`,
            excerpt: 'A technical deep-dive into neutralizing negative algorithmic signals and reinforcing Page-1 dominance using the WhizBRAM composite index.',
            category: 'Authority',
            author: 'WhizCrow AI Strategy Unit',
            authorRole: 'Automated Insight Agent',
            readTime: '8 min read',
        }

        const newDraft = await payload.create({
            collection: 'articles',
            data: {
                ...suggestedTopic,
                date: new Date().toISOString(),
                keyTakeaways: [
                    { takeaway: 'WhizBRAM Authority pillar (A) accounts for 20% of the total reputation score.' },
                    { takeaway: 'SERP ownership must exceed 70% to trigger the Authority defensive barrier.' },
                    { takeaway: 'Algorithmic countermeasures involve entity reinforcement and sentiment weighting.' },
                ],
                content: {
                    root: {
                        type: 'root',
                        format: '',
                        indent: 0,
                        version: 1,
                        children: [
                            {
                                type: 'paragraph',
                                children: [
                                    {
                                        type: 'text',
                                        text: "SYSTEM INITIALIZED: This draft is structured around the WhizBRAM Authority pillar. The goal is to provide a diagnostic compass for Page-1 dominance. [AI-AGENT: PROCEED WITH HUMAN-COMPLIMENTARY WRITING]",
                                        version: 1,
                                    },
                                ],
                                direction: 'ltr',
                                format: '',
                                indent: 0,
                                version: 1,
                            },
                        ],
                        direction: 'ltr',
                    },
                } as any,
                _status: 'draft',
            } as any,
        })

        return NextResponse.json({
            message: 'SEO Agent run successful',
            articleId: newDraft.id,
            topic: suggestedTopic.title
        })
    } catch (error: any) {
        console.error('SEO Agent failed:', error)
        return NextResponse.json({ message: 'SEO Agent failed', error: error.message }, { status: 500 })
    }
}
