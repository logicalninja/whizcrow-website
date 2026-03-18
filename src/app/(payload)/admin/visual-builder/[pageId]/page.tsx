'use client'
import React, { useEffect, useState, useCallback } from 'react'
import { Puck, type Data } from '@measured/puck'
import '@measured/puck/puck.css'
import { puckConfig } from '@/puck/config'
import { payloadToPuck, puckToPayload } from '@/puck/bridge'

interface Props {
    params: Promise<{ pageId: string }>
}

export default function VisualBuilderPage({ params }: Props) {
    const { pageId } = React.use(params)
    const [initialData, setInitialData] = useState<Data | null>(null)
    const [pageTitle, setPageTitle] = useState('Page')
    const [isSaving, setIsSaving] = useState(false)
    const [saveStatus, setSaveStatus] = useState<'idle' | 'saved' | 'error'>('idle')

    // Fetch the Payload page and convert to Puck format
    useEffect(() => {
        const fetchPage = async () => {
            try {
                const res = await fetch(`/api/pages/${pageId}?depth=2`)
                const page = await res.json()
                setPageTitle(page.title || 'Untitled')
                setInitialData(payloadToPuck(page.layout || []))
            } catch (err) {
                console.error('Failed to load page:', err)
                setInitialData({ content: [], root: { props: {} } })
            }
        }
        fetchPage()
    }, [pageId])

    const handlePublish = useCallback(async (puckData: Data) => {
        setIsSaving(true)
        setSaveStatus('idle')
        try {
            const payloadLayout = puckToPayload(puckData)
            const res = await fetch(`/api/pages/${pageId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ layout: payloadLayout }),
            })
            if (!res.ok) throw new Error('Save failed')
            setSaveStatus('saved')
            setTimeout(() => setSaveStatus('idle'), 3000)
        } catch (err) {
            console.error('Save error:', err)
            setSaveStatus('error')
        } finally {
            setIsSaving(false)
        }
    }, [pageId])

    if (!initialData) {
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'Inter, sans-serif', color: '#84CC16', background: '#0a0a0a' }}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '48px', marginBottom: '12px' }}>⚡</div>
                    <div>Loading Visual Builder...</div>
                </div>
            </div>
        )
    }

    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Header Bar */}
            <div style={{
                background: '#0a0a0a',
                borderBottom: '2px solid #84CC16',
                padding: '12px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexShrink: 0,
            }}>
                <div style={{ color: '#84CC16', fontWeight: 700, fontFamily: 'Inter, sans-serif' }}>
                    ⚡ WhizCrow Visual Builder
                    <span style={{ color: '#666', fontWeight: 400, marginLeft: '12px', fontSize: '14px' }}>
                        Editing: {pageTitle}
                    </span>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    {saveStatus === 'saved' && (
                        <span style={{ color: '#84CC16', fontSize: '14px' }}>✓ Saved to CMS</span>
                    )}
                    {saveStatus === 'error' && (
                        <span style={{ color: '#ef4444', fontSize: '14px' }}>✗ Save failed</span>
                    )}
                    <a href={`/admin/collections/pages/${pageId}`} style={{
                        color: '#888', fontSize: '13px', textDecoration: 'none',
                    }}>← Back to CMS Admin</a>
                </div>
            </div>

            {/* Puck Editor */}
            <div style={{ flex: 1, overflow: 'hidden' }}>
                <Puck
                    config={puckConfig}
                    data={initialData}
                    onPublish={handlePublish}
                    headerTitle=" "
                />
            </div>
        </div>
    )
}
