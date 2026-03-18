import type { Block } from 'payload'
import { designControls } from '../fields/designControls'

export const RichTextBlock: Block = {
    slug: 'richText',
    interfaceName: 'RichTextBlock',
    fields: [
        {
            name: 'content',
            type: 'richText',
            required: true,
        },
        ...designControls,
    ],
}
