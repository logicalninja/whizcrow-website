import { postgresAdapter } from '@payloadcms/db-postgres'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { redirectsPlugin } from '@payloadcms/plugin-redirects'
import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Articles } from './collections/Articles'
import { ReusableBlocks } from './collections/ReusableBlocks'
import { Leads } from './collections/Leads'
import { Templates } from './collections/Templates'
import { SiteSettings } from './globals/SiteSettings'
import { Campaigns } from './globals/Campaigns'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: 'users',
    components: {
      beforeDashboard: [
        '@/components/payload/MissionControl#MissionControl',
      ],
      afterDashboard: [
        '@/components/payload/SitemapCanvas#SitemapCanvas',
      ],
    },
  },
  collections: [
    Articles,
    Pages,
    Media,
    Users,
    ReusableBlocks,
    Leads,
    Templates,
  ],
  globals: [
    SiteSettings,
    Campaigns,
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
    push: true,
  }),
  plugins: [
    // 1. SEO Plugin - adds guided SEO panel to Pages and Articles
    seoPlugin({
      collections: ['pages', 'articles'],
      uploadsCollection: 'media',
      generateTitle: ({ doc }: any) => `WhizCrow | ${doc?.title || 'Page'}`,
      generateDescription: ({ doc }: any) => doc?.excerpt || '',
      generateURL: ({ doc, collectionConfig }: any) => {
        const serverURL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
        const slug = doc?.slug
        return slug ? `${serverURL}/${slug}` : serverURL
      },
    }),

    // 2. Form Builder Plugin - drag-and-drop lead form creation
    formBuilderPlugin({
      fields: {
        payment: false, // Disable payment field for now
      },
      defaultToEmail: process.env.FORM_EMAIL_RECIPIENT || 'hello@whizcrow.com',
    }),

    // 3. Redirects Plugin - manage 301/302 redirects natively in admin
    redirectsPlugin({
      collections: ['pages'],
    }),

    // 4. Nested Docs Plugin - drag-to-reorder page hierarchy with parent/breadcrumb fields
    nestedDocsPlugin({
      collections: ['pages'],
      generateLabel: (_, doc) => (doc as any).title || 'Page',
      generateURL: (docs) => docs.reduce((url, doc) => `${url}/${(doc as any).slug}`, ''),
    }),
  ],
  sharp,
})
