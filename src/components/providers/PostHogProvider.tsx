'use client'
import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { useEffect } from 'react'

export function PostHogProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || '', {
            api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com',
            person_profiles: 'identified_only',
            capture_pageview: false,
            disable_session_recording: true, // Disable session recording locally to fix console error
            debug: true
        })
    }, [])

    return <PHProvider client={posthog}>{children}</PHProvider>
}
