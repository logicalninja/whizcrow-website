import '@payloadcms/next/css'
import configPromise from '@payload-config'
import { RootLayout } from '@payloadcms/next/layouts'
import React from 'react'
import { serverFunction } from './serverFunction'
import { importMap } from './admin/importMap'

export default async function Layout({ children }: { children: React.ReactNode }) {
    console.log('Payload Layout Rendering...')
    console.log('Config Promise defined:', !!configPromise)
    console.log('Import Map keys:', Object.keys(importMap).length)
    return (
        <RootLayout
            config={configPromise}
            importMap={importMap}
            serverFunction={serverFunction}
            htmlProps={{ suppressHydrationWarning: true }}
        >
            {children}
        </RootLayout>
    )
}
