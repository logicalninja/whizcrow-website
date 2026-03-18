'use client'
import React, { useEffect, useState } from 'react'
import { Gutter } from '@payloadcms/ui'

export const SitemapCanvas: React.FC = () => {
    const [pages, setPages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchPages = async () => {
            const res = await fetch('/api/pages?limit=100')
            const data = await res.json()
            setPages(data.docs || [])
            setIsLoading(false)
        }
        fetchPages()
    }, [])

    return (
        <Gutter style={{ marginTop: '40px' }}>
            <h2 style={{ color: '#84CC16', marginBottom: '20px' }}>Site Connectivity Map</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
                {isLoading ? (
                    <p>Scanning library connectivity...</p>
                ) : (
                    pages.map((page: any) => {
                        const seoScore = page.metaTitle && page.metaDescription ? 'Perfect' : 'Action Required'
                        return (
                            <div key={page.id} style={{
                                background: '#fff',
                                padding: '20px',
                                border: '1px solid #eee',
                                borderRadius: '8px',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                            }}>
                                <div style={{ fontWeight: 'bold', fontSize: '16px', color: '#444' }}>{page.title}</div>
                                <div style={{ fontSize: '12px', color: '#8B5CF6', marginBottom: '15px' }}>/{page.slug}</div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontSize: '11px', textTransform: 'uppercase', color: '#999' }}>SEO Health</span>
                                    <span style={{
                                        fontSize: '11px',
                                        padding: '2px 8px',
                                        borderRadius: '12px',
                                        background: seoScore === 'Perfect' ? '#DCFCE7' : '#FEE2E2',
                                        color: seoScore === 'Perfect' ? '#166534' : '#991B1B'
                                    }}>
                                        {seoScore}
                                    </span>
                                </div>
                            </div>
                        )
                    })
                )}
            </div>

            <div style={{ marginTop: '40px', padding: '20px', background: '#F9FAFB', borderRadius: '8px', border: '1px dashed #DDD' }}>
                <h4 style={{ margin: '0 0 10px 0', fontSize: '14px' }}>System Logic</h4>
                <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>
                    Connections are automatically derived from block CTA links. Red status indicates missing high-authority metadata required for Phase 4 compliance.
                </p>
            </div>
        </Gutter>
    )
}
