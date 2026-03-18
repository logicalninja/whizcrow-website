import type { CollectionConfig } from 'payload'
import { SectionBlock } from '../blocks/layout/SectionBlock'

export const ReusableBlocks: CollectionConfig = {
    slug: 'reusable-blocks',
    admin: {
        useAsTitle: 'title',
        group: 'Config',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'layout',
            type: 'blocks',
            required: true,
            maxRows: 1,
            blocks: [
                SectionBlock,
            ],
        },
    ],
}
