import type { Block } from 'payload'
import { designControls } from '../fields/designControls'
import { RichTextBlock } from '../content/RichTextBlock'
import { MediaBlock } from '../content/MediaBlock'
import { ComponentSelectorBlock } from '../components/ComponentSelectorBlock'

// For simplicity, a GridRow can just hold a certain number of columns (each an array of blocks)
export const GridRowBlock: Block = {
    slug: 'gridRow',
    interfaceName: 'GridRowBlock',
    fields: [
        {
            name: 'columns',
            type: 'array',
            minRows: 1,
            maxRows: 4, // Max 4 columns usually standard
            fields: [
                {
                    name: 'columnSpan',
                    type: 'select',
                    defaultValue: '1',
                    admin: { description: 'How much space does this column take? e.g. 1/2, 1/3, 2/3' },
                    options: [
                        { label: 'Auto (Equal)', value: 'auto' },
                        { label: 'Full Width', value: '1' },
                        { label: 'One Half (1/2)', value: '1/2' },
                        { label: 'One Third (1/3)', value: '1/3' },
                        { label: 'Two Thirds (2/3)', value: '2/3' },
                        { label: 'One Quarter (1/4)', value: '1/4' },
                        { label: 'Three Quarters (3/4)', value: '3/4' },
                    ],
                },
                {
                    name: 'blocks',
                    type: 'blocks',
                    blocks: [
                        RichTextBlock,
                        MediaBlock,
                        ComponentSelectorBlock,
                        // Note: GridRow is deliberately omitted here to prevent infinite nested grids
                    ],
                }
            ],
        },
        ...designControls,
    ],
}
