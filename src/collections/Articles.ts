import type { CollectionConfig } from 'payload'

export const Articles: CollectionConfig = {
    slug: 'articles',
    admin: {
        useAsTitle: 'title',
        livePreview: {
            url: ({ data }) => {
                const serverURL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
                return `${serverURL}/insights/${data.slug}/?draft=true`
            },
        },
    },
    versions: {
        drafts: true,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
        },
        {
            name: 'excerpt',
            type: 'textarea',
            required: true,
        },
        {
            name: 'category',
            type: 'select',
            options: [
                'AI Strategy',
                'Technical SEO',
                'Crisis Management',
                'Asset Value',
                'Tech Defense',
                'Authority',
                'Legal Defense',
            ],
            required: true,
        },
        {
            name: 'date',
            type: 'date',
            required: true,
        },
        {
            name: 'readTime',
            type: 'text',
            required: true,
        },
        {
            name: 'author',
            type: 'text',
            required: true,
        },
        {
            name: 'authorRole',
            type: 'text',
            required: true,
        },
        {
            name: 'keyTakeaways',
            type: 'array',
            fields: [
                {
                    name: 'takeaway',
                    type: 'text',
                },
            ],
        },
        {
            name: 'content',
            type: 'richText',
            required: true,
        },
    ],
}
