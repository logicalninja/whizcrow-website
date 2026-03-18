"use client";

import React from 'react'
import { Hero } from '../home/Hero'
import { FAQ } from '../home/FAQ'
import { LogoMarquee } from '../home/LogoMarquee'
import { TrustMarquee } from '../home/TrustMarquee'
import { Newsletter } from '../home/Newsletter'
import { Testimonials } from '../home/Testimonials'
import { HomeCTA } from '../home/HomeCTA'
import { EmpoweredTechnologies } from '../home/EmpoweredTechnologies'
import { BramFramework } from '../home/BramFramework'
import { HighStakes } from '../home/HighStakes'
import { NarrativeEngineering } from '../home/NarrativeEngineering'
import { Outcomes } from '../home/Outcomes'
import { Intelligence } from '../home/Intelligence'
import { Guarantee } from '../home/Guarantee'
import { WhoWeAre } from '../home/WhoWeAre'
import { AntiPitch } from '../home/AntiPitch'
import { Benefits } from '../home/Benefits'
import { GrcFramework } from '../home/GrcFramework'
import { Innovation } from '../home/Innovation'
import { RevenueImpact } from '../home/RevenueImpact'
import { Services } from '../home/Services'
import { TargetAudience } from '../home/TargetAudience'
import { WhatWeDo } from '../home/WhatWeDo'
import { BramAnatomy } from '../bram/BramAnatomy'
import { InstitutionalImpact } from '../bram/InstitutionalImpact'
import { InstitutionalFoundations } from '../bram/InstitutionalFoundations'
import { DiscoveryProtocol } from '../contact/DiscoveryProtocol'
import { InstitutionalInquiryForm } from '../contact/InstitutionalInquiryForm'
import { RichText } from '../blog/RichText'

import { cn } from '@/lib/utils'

const componentMap: Record<string, React.ComponentType<any>> = {
    hero: Hero,
    features: EmpoweredTechnologies,
    cta: HomeCTA,
    testimonials: Testimonials,
    faq: FAQ,
    'logo-marquee': LogoMarquee,
    'trust-marquee': TrustMarquee,
    newsletter: Newsletter,
    'bram-framework': BramFramework,
    'high-stakes': HighStakes,
    'narrative-engineering': NarrativeEngineering,
    'outcomes': Outcomes,
    'intelligence': Intelligence,
    'guarantee': Guarantee,
    'who-we-are': WhoWeAre,
    'discovery-protocol': DiscoveryProtocol,
    'support-ops': InstitutionalInquiryForm,
    'anti-pitch': AntiPitch,
    'benefits': Benefits,
    'grc-framework': GrcFramework,
    'innovation': Innovation,
    'revenue-impact': RevenueImpact,
    'services': Services,
    'target-audience': TargetAudience,
    'what-we-do': WhatWeDo,
    'bram-anatomy': BramAnatomy,
    'institutional-impact': InstitutionalImpact,
    'institutional-foundations': InstitutionalFoundations,
    richText: RichText,
}

export const RenderBlocks = ({ blocks }: { blocks: any[] }) => {
    if (!blocks) return null

    return (
        <>
            {blocks.map((block, index) => {
                const { blockType } = block

                if (blockType === 'section') {
                    const paddingClasses = {
                        none: 'py-0',
                        small: 'py-12 md:py-16',
                        medium: 'py-20 md:py-32',
                        large: 'py-32 md:py-48',
                        xlarge: 'py-48 md:py-64',
                    }

                    const bgClasses = {
                        transparent: 'bg-transparent',
                        light: 'bg-stone-50',
                        dark: 'bg-stone-900 text-white',
                        accent: 'bg-primary text-onyx',
                    }

                    return (
                        <section
                            key={block.id || index}
                            id={block.blockName || undefined}
                            className={cn(
                                paddingClasses[block.paddingTop as keyof typeof paddingClasses] || 'py-20',
                                bgClasses[block.backgroundColor as keyof typeof bgClasses] || 'bg-white',
                                block.textAlignment === 'center' ? 'text-center' : '',
                                'relative overflow-hidden w-full'
                            )}
                        >
                            <div className={cn(
                                'container mx-auto px-6',
                                block.containerWidth === 'standard' ? 'max-w-7xl' : 'max-w-full'
                            )}>
                                {block.blocks && <RenderBlocks blocks={block.blocks} />}
                            </div>
                        </section>
                    )
                }

                if (blockType === 'formBlock') {
                    const FormComponent = block.formType === 'discovery' ? DiscoveryProtocol
                        : block.formType === 'institutional' ? InstitutionalInquiryForm
                            : Newsletter
                    return <FormComponent key={block.id || index} {...block} />
                }

                if (blockType === 'libraryBlock') {
                    const reusableBlock = block.reusableBlock
                    if (reusableBlock && typeof reusableBlock === 'object' && 'layout' in reusableBlock) {
                        return <RenderBlocks key={block.id || index} blocks={reusableBlock.layout as any} />
                    }
                }

                if (blockType === 'mediaBlock') {
                    const media = block.media
                    if (!media) return null
                    const url = typeof media === 'string' ? media : media.url
                    if (!url) return null

                    return (
                        <div key={block.id || index} className={cn("my-12", block.size === 'full' ? 'w-full' : 'max-w-4xl mx-auto')}>
                            <img src={url} alt={block.caption || ''} className="w-full h-auto rounded-xl shadow-lg" />
                            {block.caption && <p className="text-center text-stone-500 mt-4 text-sm font-medium">{block.caption}</p>}
                        </div>
                    )
                }

                // Check componentMap for all other block types
                const Component = componentMap[blockType] || (blockType === 'componentSelector' ? componentMap[block.componentName] : null)

                if (!Component) {
                    console.error(`[RenderBlocks] No component found for blockType: ${blockType}`);
                    return null;
                }

                // Technical diagnostic to catch "undefined" component error
                if (typeof Component !== 'function' && typeof Component !== 'string') {
                    console.error(`[RenderBlocks] INVALID component for blockType: ${blockType}. Type: ${typeof Component}, Value:`, Component);
                    return null;
                }

                return <Component key={block.id || index} {...block} />
            })}
        </>
    )
}
