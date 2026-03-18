import type { Block } from 'payload'
import { designControls } from '../fields/designControls'

export const FAQBlock: Block = {
    slug: 'faq',
    labels: {
        singular: 'FAQ Section',
        plural: 'FAQ Sections',
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
                            defaultValue: 'Honest Answers.',
                        },
                        {
                            name: 'subtitle',
                            type: 'text',
                            defaultValue: 'We believe in transparency before transaction.',
                        },
                        {
                            name: 'faqs',
                            type: 'array',
                            fields: [
                                {
                                    name: 'question',
                                    type: 'text',
                                    required: true,
                                },
                                {
                                    name: 'answer',
                                    type: 'textarea',
                                    required: true,
                                },
                            ],
                        },
                    ],
                },
                ...((designControls[0] as any).tabs),
            ],
        },
    ],
}
