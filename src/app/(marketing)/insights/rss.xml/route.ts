import { getPayload } from 'payload'
import config from '@/payload.config'
import { NextResponse } from 'next/server'

export async function GET() {
    const payload = await getPayload({ config })
    const { docs: articles } = await payload.find({
        collection: 'articles',
        sort: '-date',
        limit: 100
    })

    const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>WhizCrow Strategic Intelligence Unit</title>
  <link>https://whizcrow.com/insights</link>
  <description>Technical briefings on algorithmic warfare and reputation dominance.</description>
  <language>en-us</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  <atom:link href="https://whizcrow.com/insights/rss.xml" rel="self" type="application/rss+xml" />
  ${articles.map(article => `
  <item>
    <title>${article.title}</title>
    <link>https://whizcrow.com/insights/${article.slug}</link>
    <guid>https://whizcrow.com/insights/${article.slug}</guid>
    <pubDate>${new Date(article.date).toUTCString()}</pubDate>
    <description>${article.excerpt}</description>
    <author>${article.author}</author>
    <category>${article.category}</category>
  </item>
  `).join('')}
</channel>
</rss>`

    return new NextResponse(rss, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 's-maxage=3600, stale-while-revalidate'
        }
    })
}
