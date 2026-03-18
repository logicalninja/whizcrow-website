import type { TaskConfig } from 'payload'

export const seoAudit: TaskConfig<'seoAudit'> = {
    slug: 'seoAudit',
    schedule: [
        {
            cron: '0 0 * * *', // Daily at midnight
            queue: 'default',
        }
    ],
    handler: async ({ req: { payload }, input }) => {
        payload.logger.info('Starting Global SEO Audit...')

        const pages = await payload.find({
            collection: 'pages',
            depth: 0,
        })

        for (const page of pages.docs) {
            if (!page.metaTitle || !page.metaDescription) {
                payload.logger.warn(`SEO Missing: Page "${page.title}" is missing meta metadata.`)
            }
        }

        return {
            output: {
                lastRun: new Date().toISOString(),
                pagesAudited: pages.totalDocs,
            },
        }
    },
}
