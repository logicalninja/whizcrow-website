import type { CollectionConfig } from 'payload'

export const Leads: CollectionConfig = {
    slug: 'leads',
    admin: {
        useAsTitle: 'email',
        defaultColumns: ['email', 'sourcePage', 'status', 'createdAt'],
    },
    access: {
        create: () => true, // Public can submit leads
        read: () => true,
    },
    fields: [
        {
            name: 'email',
            type: 'email',
            required: true,
        },
        {
            name: 'name',
            type: 'text',
        },
        {
            name: 'sourcePage',
            type: 'relationship',
            relationTo: 'pages',
            admin: {
                description: 'The page where the lead was captured.',
            }
        },
        {
            name: 'status',
            type: 'select',
            defaultValue: 'new',
            options: [
                { label: 'New', value: 'new' },
                { label: 'Qualified', value: 'qualified' },
                { label: 'Lost', value: 'lost' },
            ],
        },
        {
            name: 'conversionValue',
            type: 'number',
            admin: {
                description: 'Estimated value of this lead.',
            }
        },
    ],
}
