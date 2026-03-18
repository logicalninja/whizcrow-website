import type { Block } from 'payload'
import { designControls } from '../fields/designControls'

export const FormBlock: Block = {
    slug: 'formBlock',
    labels: {
        singular: 'Form Section',
        plural: 'Form Sections',
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
                        },
                        {
                            name: 'formType',
                            type: 'select',
                            required: true,
                            options: [
                                { label: 'Discovery Protocol', value: 'discovery' },
                                { label: 'Institutional Inquiry', value: 'institutional' },
                                { label: 'Newsletter Signup', value: 'newsletter' },
                            ],
                        },
                    ],
                },
                ...((designControls[0] as any).tabs),
            ],
        },
    ],
}
