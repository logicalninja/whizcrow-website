import type { CollectionConfig } from 'payload'
import { SectionBlock } from '../blocks/layout/SectionBlock'

export const Templates: CollectionConfig = {
    slug: 'templates',
    admin: {
        useAsTitle: 'name',
        group: 'Config',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'description',
            type: 'textarea',
        },
        {
            name: 'layout',
            type: 'blocks',
            required: true,
            blocks: [
                SectionBlock,
            ],
        },
    ],
}
