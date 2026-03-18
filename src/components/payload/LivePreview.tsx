"use client";

import React from 'react'
import { useLivePreview } from '@payloadcms/live-preview-react'
import { RenderBlocks } from './RenderBlocks'

export const LivePreview = ({
    initialData,
    serverURL
}: {
    initialData: any,
    serverURL: string
}) => {
    const { data } = useLivePreview({
        initialData,
        serverURL,
        depth: 2,
    })

    return <RenderBlocks blocks={data.layout} />
}
