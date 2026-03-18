import type { Field } from 'payload'

export const designControls: Field[] = [
    {
        type: 'tabs',
        tabs: [
            {
                label: 'Design & Style',
                fields: [
                    {
                        name: 'backgroundColor',
                        type: 'select',
                        defaultValue: 'transparent',
                        options: [
                            { label: 'Transparent', value: 'transparent' },
                            { label: 'Light', value: 'light' },
                            { label: 'Dark', value: 'dark' },
                            { label: 'Accent', value: 'accent' },
                        ],
                        admin: {
                            description: 'Set the background color for this block.',
                        }
                    },
                    {
                        type: 'row',
                        fields: [
                            {
                                name: 'paddingTop',
                                type: 'select',
                                defaultValue: 'medium',
                                options: [
                                    { label: 'None', value: 'none' },
                                    { label: 'Small', value: 'small' },
                                    { label: 'Medium', value: 'medium' },
                                    { label: 'Large', value: 'large' },
                                    { label: 'Extra Large', value: 'xlarge' },
                                ],
                            },
                            {
                                name: 'paddingBottom',
                                type: 'select',
                                defaultValue: 'medium',
                                options: [
                                    { label: 'None', value: 'none' },
                                    { label: 'Small', value: 'small' },
                                    { label: 'Medium', value: 'medium' },
                                    { label: 'Large', value: 'large' },
                                    { label: 'Extra Large', value: 'xlarge' },
                                ],
                            },
                        ],
                    },
                    {
                        name: 'textAlignment',
                        type: 'select',
                        defaultValue: 'left',
                        options: [
                            { label: 'Left', value: 'left' },
                            { label: 'Center', value: 'center' },
                            { label: 'Right', value: 'right' },
                        ],
                        admin: {
                            condition: (_, siblingData) => !siblingData?.disableTextAlignment,
                        }
                    },
                ],
            },
        ],
    },
]
