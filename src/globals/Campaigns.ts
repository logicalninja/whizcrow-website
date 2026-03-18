import type { GlobalConfig } from 'payload'

export const Campaigns: GlobalConfig = {
    slug: 'campaigns',
    admin: {
        group: 'Admin',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'active',
            type: 'checkbox',
            defaultValue: false,
            admin: {
                description: 'Enable site-wide campaign overrides.',
            },
        },
        {
            name: 'campaignName',
            type: 'text',
            required: true,
        },
        {
            name: 'visualOverrides',
            type: 'group',
            fields: [
                {
                    name: 'primaryColor',
                    type: 'text',
                    admin: {
                        description: 'Override global primary color (e.g., #FF0000).',
                    },
                },
                {
                    name: 'secondaryColor',
                    type: 'text',
                },
            ],
        },
        {
            name: 'scheduledExpiry',
            type: 'date',
            admin: {
                description: 'The campaign will automatically deactivate after this date.',
            },
        },
    ],
}
