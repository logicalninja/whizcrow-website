'use client'
import React, { useState } from 'react'
import { useForm, useField } from '@payloadcms/ui'
import { Button } from '@payloadcms/ui'

export const AIAssistant: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { fields, dispatchFields } = useForm()

    const handleGenerate = async () => {
        setIsLoading(true)
        // Access form data via fields
        const titleField: any = fields?.title
        const slugField: any = fields?.slug

        try {
            const response = await fetch('/api/ai-draft', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    prompt: 'Generate an elite content structure',
                    pageTitle: titleField?.value || 'Untitled Page',
                    pageSlug: slugField?.value || 'untitled'
                })
            })

            const result = await response.json()
            if (result.success) {
                // Update meta metadata
                dispatchFields({
                    type: 'UPDATE',
                    path: 'metaTitle',
                    value: result.data.suggestedTitle
                })
                dispatchFields({
                    type: 'UPDATE',
                    path: 'metaDescription',
                    value: result.data.suggestedMetaDescription
                })
                // Update layout blocks
                dispatchFields({
                    type: 'UPDATE',
                    path: 'layout',
                    value: result.data.suggestedLayout
                })
                alert('Draft generated and applied!')
            }
        } catch (err) {
            console.error('AI Draft failed:', err)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div style={{ marginBottom: '20px' }}>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#84CC16' }}>WhizCrow AI Strategy</h4>
            <Button
                size="small"
                onClick={handleGenerate}
                disabled={isLoading}
            >
                {isLoading ? 'Generating Elite Draft...' : 'Draft with AI'}
            </Button>
            <p style={{ fontSize: '11px', color: '#666', marginTop: '8px' }}>
                Uses Gemini 1.5 Pro to architect your page layout.
            </p>
        </div>
    )
}
