import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function GET() {
    try {
        const payload = await getPayload({ config: configPromise })

        // 1. Fetch Lead data
        const leads = await payload.find({
            collection: 'leads',
            limit: 100,
        })

        // 2. Mock AI Analysis logic
        // In production: Send lead density and traffic logs to Gemini 1.5 Pro
        const totalValue = leads.docs.reduce((acc, lead: any) => acc + (lead.conversionValue || 0), 0)

        const summary = `Total leads increased by 14% this week. WhizORM remains your highest converting service page (42% of all leads). Meta Ads performance is exceeding organic growth in the APAC region. Recommendation: Increase spend on WhizAI focus keywords.`

        return Response.json({
            success: true,
            summary,
            stats: {
                totalLeads: leads.totalDocs,
                estimatedRevenue: totalValue
            }
        })
    } catch (err) {
        return Response.json({ error: 'Failed to generate summary' }, { status: 500 })
    }
}
