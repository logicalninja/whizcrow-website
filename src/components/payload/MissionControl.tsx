'use client'
import React, { useState, useEffect } from 'react'
import { Button } from '@payloadcms/ui'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export const MissionControl: React.FC = () => {
    const [summary, setSummary] = useState<string | null>(null)
    const [isLoadingSummary, setIsLoadingSummary] = useState(false)
    const [stats, setStats] = useState({ leads: 0, revenue: 0 })

    const generateSummary = async () => {
        setIsLoadingSummary(true)
        try {
            const res = await fetch('/api/ai-mission-summary')
            const data = await res.json()
            setSummary(data.summary)
        } catch (err) {
            console.error('Failed to generate mission summary:', err)
        } finally {
            setIsLoadingSummary(false)
        }
    }

    // Mock data for the chart
    const data = [
        { name: 'Mon', leads: 4 },
        { name: 'Tue', leads: 7 },
        { name: 'Wed', leads: 12 },
        { name: 'Thu', leads: 9 },
        { name: 'Fri', leads: 15 },
        { name: 'Sat', leads: 6 },
        { name: 'Sun', leads: 8 },
    ]

    return (
        <div style={{ padding: '20px', background: '#fff', borderRadius: '8px', border: '1px solid #ddd' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <h2 style={{ margin: 0, color: '#84CC16', fontSize: '24px' }}>WhizCrow Mission Control</h2>
                <Button size="small" onClick={generateSummary} disabled={isLoadingSummary}>
                    {isLoadingSummary ? 'Analyzing Traffic...' : 'AI Executive Summary'}
                </Button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '30px' }}>
                {/* Analytics Chart */}
                <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
                    <h3 style={{ marginTop: 0, fontSize: '16px', color: '#444' }}>Lead Acquisition Trend</h3>
                    <div style={{ height: '300px', width: '100%' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                                <Tooltip />
                                <Line type="monotone" dataKey="leads" stroke="#8B5CF6" strokeWidth={3} dot={{ r: 4, fill: '#8B5CF6' }} activeDot={{ r: 6 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* AI Executive Summary Sidebar */}
                <div style={{ borderLeft: '1px solid #eee', paddingLeft: '30px' }}>
                    <h3 style={{ marginTop: 0, fontSize: '16px', color: '#444' }}>Intelligence Feed</h3>
                    {summary ? (
                        <div style={{ fontSize: '13px', lineHeight: '1.6', color: '#555' }}>
                            <div style={{ background: '#F5F3FF', padding: '15px', borderRadius: '6px', borderLeft: '4px solid #8B5CF6' }}>
                                <strong>AI Insight:</strong> {summary}
                            </div>
                        </div>
                    ) : (
                        <p style={{ fontSize: '12px', color: '#999' }}>Click the button above to generate a real-time intelligence report from your PostHog and Lead data.</p>
                    )}
                </div>
            </div>
        </div>
    )
}
