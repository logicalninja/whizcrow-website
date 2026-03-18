import type { Block } from 'payload'
import { designControls } from '../fields/designControls'

export const HeroBlock: Block = {
    slug: 'hero',
    labels: {
        singular: 'Hero Section',
        plural: 'Hero Sections',
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Content',
                    fields: [
                        {
                            name: 'title',
                            type: 'text',
                            required: true,
                            admin: {
                                description: 'Main headline for the hero section.',
                            },
                        },
                        {
                            name: 'subtitle',
                            type: 'textarea',
                            admin: {
                                description: 'Supporting subheadline or description.',
                            },
                        },
                        {
                            type: 'row',
                            fields: [
                                {
                                    name: 'ctaText',
                                    type: 'text',
                                    label: 'CTA Text',
                                    defaultValue: 'Speak with an Expert',
                                },
                                {
                                    name: 'ctaLink',
                                    type: 'text',
                                    label: 'CTA Link',
                                    defaultValue: '/book',
                                },
                            ],
                        },
                        {
                            name: 'showTrustLine',
                            type: 'checkbox',
                            label: 'Show "Trusted by" line',
                            defaultValue: true,
                        },
                    ],
                },
                ...((designControls[0] as any).tabs),
            ],
        },
    ],
}
