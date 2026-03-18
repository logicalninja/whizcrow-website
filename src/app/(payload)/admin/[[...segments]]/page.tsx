import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import configPromise from '@payload-config'
import { importMap } from '../importMap'

export default async function Page({ params, searchParams }: any) {
    return RootPage({
        config: configPromise,
        importMap,
        params,
        searchParams,
    })
}

export async function generateMetadata({ params, searchParams }: any) {
    return generatePageMetadata({
        config: configPromise,
        params,
        searchParams,
    })
}
