import type { Block } from 'payload'

export const LibraryBlock: Block = {
    slug: 'libraryBlock',
    labels: {
        singular: 'Library Item (Reusable)',
        plural: 'Library Items (Reusable)',
    },
    fields: [
        {
            name: 'reusableBlock',
            type: 'relationship',
            relationTo: 'reusable-blocks',
            required: true,
            admin: {
                description: 'Select a component from your Reusable Library to sync here.',
            },
        },
    ],
}
