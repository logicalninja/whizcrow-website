import { getPayload } from 'payload'
import config from '../payload.config'
import { articles } from '../lib/articles'

async function migrate() {
    const payload = await getPayload({ config })

    console.log(`Starting migration of ${articles.length} articles...`)

    for (const article of articles) {
        try {
            await payload.create({
                collection: 'articles',
                data: {
                    title: article.title,
                    slug: article.slug,
                    excerpt: article.excerpt,
                    category: article.category as any,
                    date: new Date(article.date).toISOString(),
                    readTime: article.readTime,
                    author: article.author,
                    authorRole: article.authorRole,
                    keyTakeaways: article.keyTakeaways.map((t) => ({ takeaway: t })),
                    content: article.content as any, // Content is HTML, lexical might need conversion or just string for now
                },
            })
            console.log(`Migrated: ${article.title}`)
        } catch (error) {
            console.error(`Failed to migrate ${article.title}:`, error)
        }
    }

    console.log('Migration complete.')
    process.exit(0)
}

migrate()
