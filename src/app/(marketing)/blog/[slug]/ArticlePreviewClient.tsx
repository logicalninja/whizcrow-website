'use client'

import React from 'react'

export const ArticlePreviewClient = ({
    initialData,
    children
}: {
    initialData: any,
    children: (data: any) => React.ReactNode
}) => {
    return <>{children(initialData)}</>
}
