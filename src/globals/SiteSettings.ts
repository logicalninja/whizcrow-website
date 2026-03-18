import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
    slug: 'site-settings',
    admin: {
        group: 'Config',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Theme & Branding',
                    fields: [
                        {
                            type: 'row',
                            fields: [
                                {
                                    name: 'primaryColor',
                                    type: 'text',
                                    defaultValue: '#84CC16',
                                    admin: {
                                        description: 'Main brand color (Lime).',
                                    },
                                },
                                {
                                    name: 'secondaryColor',
                                    type: 'text',
                                    defaultValue: '#8B5CF6',
                                    admin: {
                                        description: 'Secondary brand color (Purple).',
                                    },
                                },
                            ],
                        },
                        {
                            type: 'row',
                            fields: [
                                {
                                    name: 'backgroundColor',
                                    type: 'text',
                                    defaultValue: '#000000',
                                    admin: {
                                        description: 'OLED Black background.',
                                    },
                                },
                                {
                                    name: 'textColor',
                                    type: 'text',
                                    defaultValue: '#FFFFFF',
                                },
                            ],
                        },
                        {
                            type: 'row',
                            fields: [
                                {
                                    name: 'headingFont',
                                    type: 'select',
                                    defaultValue: 'font-sans',
                                    options: [
                                        { label: 'Sans Serif (Modern)', value: 'font-sans' },
                                        { label: 'Serif (Classic)', value: 'font-serif' },
                                        { label: 'Mono (Technical)', value: 'font-mono' },
                                    ],
                                },
                                {
                                    name: 'bodyFont',
                                    type: 'select',
                                    defaultValue: 'font-sans',
                                    options: [
                                        { label: 'Sans Serif', value: 'font-sans' },
                                        { label: 'Serif', value: 'font-serif' },
                                    ],
                                },
                            ],
                        },
                        {
                            name: 'enableBookings',
                            type: 'checkbox',
                            label: 'Enable Global Bookings Hub',
                            defaultValue: true,
                            admin: {
                                description: 'Turn off to disable the bookings features sitewide.',
                            },
                        },
                        {
                            name: 'logo',
                            type: 'upload',
                            relationTo: 'media',
                            required: true,
                        },
                        {
                            name: 'favicon',
                            type: 'upload',
                            relationTo: 'media',
                        },
                    ],
                },
                {
                    label: 'Navigation',
                    fields: [
                        {
                            name: 'headerLinks',
                            type: 'array',
                            fields: [
                                {
                                    type: 'row',
                                    fields: [
                                        {
                                            name: 'label',
                                            type: 'text',
                                            required: true,
                                        },
                                        {
                                            name: 'link',
                                            type: 'text',
                                            required: true,
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'Footer',
                    fields: [
                        {
                            name: 'copyrightText',
                            type: 'text',
                            defaultValue: '© 2024 WhizCrow. All rights reserved.',
                        },
                        {
                            name: 'footerLinks',
                            type: 'array',
                            fields: [
                                {
                                    type: 'row',
                                    fields: [
                                        {
                                            name: 'label',
                                            type: 'text',
                                            required: true,
                                        },
                                        {
                                            name: 'link',
                                            type: 'text',
                                            required: true,
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            name: 'socialLinks',
                            type: 'group',
                            fields: [
                                { name: 'linkedin', type: 'text' },
                                { name: 'twitter', type: 'text' },
                                { name: 'instagram', type: 'text' },
                            ],
                        },
                    ],
                },
                {
                    label: 'Brand Guidelines',
                    fields: [
                        {
                            name: 'messagingPillars',
                            type: 'array',
                            admin: {
                                description: 'Core messages that every page must communicate.',
                            },
                            fields: [
                                { name: 'pillar', type: 'text' },
                            ],
                        },
                        {
                            name: 'voiceRules',
                            type: 'textarea',
                            admin: {
                                description: 'Tone rules (e.g., "Direct, Scientific, No Filler").',
                            },
                            defaultValue: 'Modern, Energetic, Digital-First, Professional.',
                        },
                    ],
                },
            ],
        },
    ],
}
