'use client'
import React, { useMemo } from 'react'
import { useForm } from '@payloadcms/ui'

export const SEOChecklist: React.FC = () => {
    const { getData } = useForm()
    const data: any = getData()

    const report = useMemo(() => {
        const checks = [
            { label: 'Meta Title Length', passing: data.metaTitle?.length >= 30 && data.metaTitle?.length <= 60 },
            { label: 'Meta Description Length', passing: data.metaDescription?.length >= 100 && data.metaDescription?.length <= 160 },
            { label: 'Keyword in Slug', passing: data.metaTitle && data.slug && data.metaTitle.toLowerCase().includes(data.slug.toLowerCase().replace(/-/g, ' ')) },
            { label: 'Content Blocks Present', passing: data.layout?.length > 0 },
        ]
        const score = (checks.filter(c => c.passing).length / checks.length) * 100
        return { checks, score }
    }, [data])

    const getScoreColor = (score: number) => {
        if (score >= 80) return '#84CC16' // Lime
        if (score >= 50) return '#8B5CF6' // Purple
        return '#EF4444' // Red
    }

    return (
        <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '4px', background: '#f9f9f9' }}>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '14px' }}>Automated SEO Audit</h4>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: getScoreColor(report.score), marginBottom: '10px' }}>
                {Math.round(report.score)}%
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '12px' }}>
                {report.checks.map((check, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
                        <span style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            background: check.passing ? '#84CC16' : '#EF4444',
                            marginRight: '8px'
                        }} />
                        {check.label}
                    </li>
                ))}
            </ul>
        </div>
    )
}
