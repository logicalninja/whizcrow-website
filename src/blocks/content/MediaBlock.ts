import type { Block } from 'payload'
import { designControls } from '../fields/designControls'

export const MediaBlock: Block = {
    slug: 'mediaBlock',
    interfaceName: 'MediaBlock',
    fields: [
        {
            name: 'media',
            type: 'upload',
            relationTo: 'media', // We need a media collection for this
            required: true,
        },
        {
            name: 'caption',
            type: 'text',
            admin: {
                description: 'Optional caption to display under the media.',
            }
        },
        {
            name: 'size',
            type: 'select',
            defaultValue: 'normal',
            options: [
                { label: 'Normal', value: 'normal' },
                { label: 'Wide', value: 'wide' },
                { label: 'Full Width', value: 'full' },
            ],
        },
        ...designControls,
    ],
}
