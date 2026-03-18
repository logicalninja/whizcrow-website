'use client'
import React from 'react'
import { useDocumentInfo } from '@payloadcms/ui'

export function VisualEditorLink() {
    const { id } = useDocumentInfo()

    if (!id) {
        return (
            <div style={{
                padding: '12px 16px',
                background: '#111',
                borderRadius: '8px',
                border: '1px solid #222',
                marginBottom: '16px',
                fontFamily: 'Inter, sans-serif',
            }}>
                <div style={{ color: '#555', fontSize: '12px' }}>
                    💡 Save this page first to open the Visual Builder.
                </div>
            </div>
        )
    }

    return (
        <div style={{
            padding: '12px 16px',
            background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
            borderRadius: '8px',
            border: '1px solid #84CC1644',
            marginBottom: '16px',
            fontFamily: 'Inter, sans-serif',
        }}>
            <div style={{ color: '#84CC16', fontSize: '11px', fontWeight: 600, marginBottom: '8px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                ⚡ Visual Editor
            </div>
            <a
                href={`/admin/visual-builder/${id}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: '#84CC16',
                    color: '#0a0a0a',
                    padding: '10px 16px',
                    borderRadius: '6px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    fontSize: '13px',
                    transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
                <span>🎨</span>
                <span>Open Visual Builder →</span>
            </a>
            <div style={{ color: '#444', fontSize: '11px', marginTop: '8px', lineHeight: '1.4' }}>
                Drag-and-drop visual canvas. Changes sync back to the CMS.
            </div>
        </div>
    )
}
