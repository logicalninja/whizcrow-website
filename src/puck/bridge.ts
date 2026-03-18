import type { Data } from '@measured/puck'

/**
 * PuckBridge: bidirectional converter between Payload block JSON and Puck content JSON.
 *
 * Payload layout format (array of SectionBlock):
 *   [{ blockType: 'sectionBlock', blockName: '...', components: [{ type, props }] }]
 *
 * Puck content format:
 *   { content: [{ type: string, props: Record<string, any> }], root: { props: {} } }
 */

export type PayloadBlock = {
    blockType: string
    blockName?: string
    id?: string
    [key: string]: any
}

// Re-export for convenience
export type { Data as PuckContent }

/** Convert a Payload `layout` array into Puck Data format */
export function payloadToPuck(layout: PayloadBlock[]): Data {
    const content = (layout || []).flatMap((section: any) => {
        // Each SectionBlock may have a `components` array inside
        const components = section.components || []
        if (components.length === 0) {
            // Treat the section itself as a block
            return [{
                type: blockTypeToPuckType(section.blockType),
                props: extractProps(section),
            }]
        }
        return components.map((comp: any) => ({
            type: blockTypeToPuckType(comp.type || comp.blockType || 'Generic'),
            props: extractProps(comp),
        }))
    })

    return {
        content,
        root: { props: {} },
    }
}

/** Convert Puck content format back into a Payload `layout` array */
export function puckToPayload(puckData: Data): PayloadBlock[] {
    return (puckData?.content || []).map((item: any) => ({
        blockType: 'sectionBlock',
        blockName: item.type,
        components: [
            {
                type: puckTypeToPuckBlockType(item.type),
                ...item.props,
            },
        ],
    }))
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function blockTypeToPuckType(blockType: string): string {
    const map: Record<string, string> = {
        sectionBlock: 'Section',
        heroBlock: 'Hero',
        faqBlock: 'FAQ',
        featuresBlock: 'Features',
        testimonialsBlock: 'Testimonials',
        ctaBlock: 'CTA',
        pricingBlock: 'Pricing',
        teamBlock: 'Team',
        statsBlock: 'Stats',
        newsletterBlock: 'Newsletter',
        Generic: 'Generic',
    }
    return map[blockType] || 'Generic'
}

function puckTypeToPuckBlockType(type: string): string {
    const map: Record<string, string> = {
        Section: 'sectionBlock',
        Hero: 'heroBlock',
        FAQ: 'faqBlock',
        Features: 'featuresBlock',
        Testimonials: 'testimonialsBlock',
        CTA: 'ctaBlock',
        Pricing: 'pricingBlock',
        Team: 'teamBlock',
        Stats: 'statsBlock',
        Newsletter: 'newsletterBlock',
        Generic: 'sectionBlock',
    }
    return map[type] || 'sectionBlock'
}

function extractProps(block: any): Record<string, any> {
    const { blockType, blockName, id, _order, ...rest } = block
    return rest
}
