import { notFound } from 'next/navigation'

type PageProps = {
    params: Promise<{ slug?: string[] }>
    searchParams: Promise<{ preview?: string }>
}

export async function generateMetadata() {
    return {}
}

export default async function Page() {
    return notFound()
}
