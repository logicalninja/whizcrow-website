import { getPayload } from 'payload'
import config from '@/payload.config'
import IntelligencePageContent from './IntelligencePageContent'

export default async function Page() {
    const payload = await getPayload({ config })

    const { docs: articles } = await payload.find({
        collection: 'articles',
        sort: '-date',
        limit: 100,
    })

    // Grouping takeaways back into the format expected by the frontend
    const formattedArticles = articles.map(article => ({
        ...article,
        keyTakeaways: article.keyTakeaways?.map((t: any) => t.takeaway) || [],
    }))

    return <IntelligencePageContent articles={formattedArticles as any} />
}
