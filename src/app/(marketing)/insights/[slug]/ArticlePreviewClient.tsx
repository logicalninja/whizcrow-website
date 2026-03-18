'use client'

import { useLivePreview } from '@payloadcms/live-preview-react'
import React from 'react'

export const ArticlePreviewClient = ({
    initialData,
    children
}: {
    initialData: any,
    children: (data: any) => React.ReactNode
}) => {
    const { data } = useLivePreview({
        initialData,
        serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
        depth: 2,
    })

    return <>{children(data)}</>
}
