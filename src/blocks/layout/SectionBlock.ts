import type { Block } from 'payload'
import { designControls } from '../fields/designControls'
import { RichTextBlock } from '../content/RichTextBlock'
import { MediaBlock } from '../content/MediaBlock'
import { ComponentSelectorBlock } from '../components/ComponentSelectorBlock'
import { HeroBlock } from '../content/HeroBlock'
import { FAQBlock } from '../content/FAQBlock'
import { FormBlock } from '../content/FormBlock'
import { LibraryBlock } from '../content/LibraryBlock'
import { GridRowBlock } from './GridRowBlock'

// Section is the topmost layout container
export const SectionBlock: Block = {
    slug: 'section',
    interfaceName: 'SectionBlock',
    fields: [
        {
            name: 'blocks',
            type: 'blocks',
            blocks: [
                GridRowBlock,
                RichTextBlock,
                MediaBlock,
                ComponentSelectorBlock,
                HeroBlock,
                FAQBlock,
                FormBlock,
                LibraryBlock,
            ],
        },
        {
            name: 'containerWidth',
            type: 'select',
            defaultValue: 'standard',
            options: [
                { label: 'Standard (Boxed)', value: 'standard' },
                { label: 'Full Width', value: 'full' },
                { label: 'Narrow (Reading)', value: 'narrow' },
            ],
        },
        ...designControls,
    ],
}
