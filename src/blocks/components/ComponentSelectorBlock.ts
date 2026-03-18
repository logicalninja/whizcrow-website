import type { Block } from 'payload'
import { designControls } from '../fields/designControls'

export const ComponentSelectorBlock: Block = {
    slug: 'componentSelector',
    labels: {
        singular: 'Component Selector',
        plural: 'Component Selectors',
    },
    fields: [
        {
            name: 'componentName',
            type: 'select',
            required: true,
            admin: {
                description: 'Select a pre-built dynamic React component to render here.',
            },
            options: [
                { label: 'Trust Marquee', value: 'trust-marquee' },
                { label: 'Services', value: 'services' },
                { label: 'Intelligence', value: 'intelligence' },
                { label: 'Revenue Impact', value: 'revenue-impact' },
                { label: 'Testimonials', value: 'testimonials' },
                { label: 'CTA', value: 'cta' },
            ],
        },
        {
            name: 'title',
            type: 'text',
        },
        {
            name: 'subtitle',
            type: 'textarea',
        },
        {
            name: 'ctaText',
            type: 'text',
        },
        {
            name: 'ctaLink',
            type: 'text',
        },
        ...designControls,
    ],
}
