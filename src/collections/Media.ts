import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
    slug: 'media',
    admin: {
        useAsTitle: 'alt',
    },
    access: {
        read: () => true, // Make images public
    },
    upload: {
        staticDir: '../public/media',
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true,
            admin: {
                description: 'Crucial for SEO. Describe the image clearly.',
            },
        },
        {
            name: 'autoAlt',
            type: 'text',
            admin: {
                readOnly: true,
                description: 'AI-generated description. Copy to "Alt" if accurate.',
                position: 'sidebar',
            }
        },
    ],
    hooks: {
        beforeChange: [
            async ({ data, req: { payload } }) => {
                // Asset Performance Engine: AI Alt Simulation
                if (!data.alt && data.filename) {
                    // Simulate AI detection from filename
                    const suggestion = data.filename
                        .replace(/\.[^/.]+$/, "")
                        .replace(/[-_]/g, ' ')
                    data.autoAlt = `AI Suggestion: ${suggestion}`
                }
                return data
            }
        ]
    }
}
