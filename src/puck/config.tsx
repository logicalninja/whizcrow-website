import type { Config } from '@measured/puck'

const BRAND = {
    primary: '#84CC16',
    secondary: '#8B5CF6',
    dark: '#0a0a0a',
    text: '#ffffff',
}

const sharedStyles: React.CSSProperties = {
    fontFamily: 'Inter, system-ui, sans-serif',
    color: BRAND.text,
}

export const puckConfig: Config = {
    components: {
        Hero: {
            label: '🚀 Hero Section',
            fields: {
                headline: { type: 'text', label: 'Headline' },
                subheadline: { type: 'textarea', label: 'Subheadline' },
                ctaLabel: { type: 'text', label: 'CTA Button Text' },
                ctaLink: { type: 'text', label: 'CTA Link' },
                alignment: {
                    type: 'select',
                    label: 'Alignment',
                    options: [
                        { label: 'Center', value: 'center' },
                        { label: 'Left', value: 'left' },
                    ],
                },
            },
            defaultProps: {
                headline: 'Headline Here',
                subheadline: 'Supporting copy designed to convert.',
                ctaLabel: 'Get Started',
                ctaLink: '/contact',
                alignment: 'center',
            },
            render: ({ headline, subheadline, ctaLabel, ctaLink, alignment }) => (
                <div style={{
                    ...sharedStyles,
                    background: `linear-gradient(135deg, ${BRAND.dark} 0%, #1a1a2e 100%)`,
                    padding: '80px 40px',
                    textAlign: alignment as any,
                    borderBottom: `3px solid ${BRAND.primary}`,
                }}>
                    <h1 style={{ fontSize: '52px', fontWeight: 800, color: BRAND.primary, margin: '0 0 20px' }}>{headline}</h1>
                    <p style={{ fontSize: '20px', color: '#ccc', maxWidth: '600px', margin: alignment === 'center' ? '0 auto 30px' : '0 0 30px' }}>{subheadline}</p>
                    <a href={ctaLink} style={{
                        display: 'inline-block', background: BRAND.primary, color: BRAND.dark,
                        padding: '14px 32px', borderRadius: '6px', fontWeight: 700, textDecoration: 'none',
                    }}>{ctaLabel}</a>
                </div>
            ),
        },

        Features: {
            label: '✨ Features Grid',
            fields: {
                title: { type: 'text', label: 'Section Title' },
                feature1: { type: 'text', label: 'Feature 1' },
                feature2: { type: 'text', label: 'Feature 2' },
                feature3: { type: 'text', label: 'Feature 3' },
            },
            defaultProps: {
                title: 'Why WhizCrow',
                feature1: 'AI-powered workflows',
                feature2: 'Real-time analytics',
                feature3: 'Enterprise security',
            },
            render: ({ title, feature1, feature2, feature3 }) => (
                <div style={{ ...sharedStyles, background: BRAND.dark, padding: '60px 40px' }}>
                    <h2 style={{ color: BRAND.primary, textAlign: 'center', fontSize: '36px', marginBottom: '40px' }}>{title}</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                        {[feature1, feature2, feature3].map((f, i) => (
                            <div key={i} style={{ background: '#111', border: `1px solid ${BRAND.secondary}33`, borderRadius: '12px', padding: '30px' }}>
                                <div style={{ color: BRAND.secondary, fontSize: '24px', marginBottom: '12px' }}>◆</div>
                                <p style={{ color: '#ddd', margin: 0 }}>{f}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ),
        },

        FAQ: {
            label: '❓ FAQ Section',
            fields: {
                title: { type: 'text', label: 'Title' },
                q1: { type: 'text', label: 'Question 1' },
                a1: { type: 'textarea', label: 'Answer 1' },
                q2: { type: 'text', label: 'Question 2' },
                a2: { type: 'textarea', label: 'Answer 2' },
            },
            defaultProps: {
                title: 'Frequently Asked Questions',
                q1: 'What is WhizCrow?',
                a1: 'WhizCrow is an AI-powered digital services platform.',
                q2: 'How do I get started?',
                a2: 'Book a free discovery call and our team will scope your project.',
            },
            render: ({ title, q1, a1, q2, a2 }) => (
                <div style={{ ...sharedStyles, background: '#0f0f0f', padding: '60px 40px' }}>
                    <h2 style={{ color: BRAND.primary, fontSize: '32px', marginBottom: '40px' }}>{title}</h2>
                    {[[q1, a1], [q2, a2]].map(([q, a], i) => (
                        <div key={i} style={{ borderTop: `1px solid #222`, padding: '24px 0' }}>
                            <h3 style={{ color: '#fff', margin: '0 0 12px' }}>{q}</h3>
                            <p style={{ color: '#999', margin: 0 }}>{a}</p>
                        </div>
                    ))}
                </div>
            ),
        },

        CTA: {
            label: '📣 Call to Action',
            fields: {
                heading: { type: 'text', label: 'Heading' },
                body: { type: 'textarea', label: 'Body' },
                buttonText: { type: 'text', label: 'Button Text' },
                buttonLink: { type: 'text', label: 'Button Link' },
            },
            defaultProps: {
                heading: 'Ready to transform your digital stack?',
                body: 'Book a free strategy call. No commitments.',
                buttonText: 'Book a Call',
                buttonLink: '/contact',
            },
            render: ({ heading, body, buttonText, buttonLink }) => (
                <div style={{
                    ...sharedStyles,
                    background: `linear-gradient(135deg, ${BRAND.secondary}22, ${BRAND.primary}22)`,
                    border: `1px solid ${BRAND.primary}44`,
                    borderRadius: '16px', margin: '40px', padding: '60px 40px', textAlign: 'center',
                }}>
                    <h2 style={{ fontSize: '36px', color: '#fff', marginBottom: '16px' }}>{heading}</h2>
                    <p style={{ color: '#ccc', marginBottom: '32px' }}>{body}</p>
                    <a href={buttonLink} style={{
                        background: BRAND.primary, color: BRAND.dark, padding: '14px 36px',
                        borderRadius: '6px', fontWeight: 700, textDecoration: 'none', fontSize: '16px',
                    }}>{buttonText}</a>
                </div>
            ),
        },

        Stats: {
            label: '📊 Stats Bar',
            fields: {
                stat1Value: { type: 'text', label: 'Stat 1 Value' },
                stat1Label: { type: 'text', label: 'Stat 1 Label' },
                stat2Value: { type: 'text', label: 'Stat 2 Value' },
                stat2Label: { type: 'text', label: 'Stat 2 Label' },
                stat3Value: { type: 'text', label: 'Stat 3 Value' },
                stat3Label: { type: 'text', label: 'Stat 3 Label' },
            },
            defaultProps: {
                stat1Value: '200+', stat1Label: 'Projects Delivered',
                stat2Value: '98%', stat2Label: 'Client Satisfaction',
                stat3Value: '3x', stat3Label: 'Average ROI',
            },
            render: ({ stat1Value, stat1Label, stat2Value, stat2Label, stat3Value, stat3Label }) => (
                <div style={{ ...sharedStyles, background: '#111', padding: '40px', display: 'flex', justifyContent: 'center', gap: '60px' }}>
                    {[[stat1Value, stat1Label], [stat2Value, stat2Label], [stat3Value, stat3Label]].map(([val, label], i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '42px', fontWeight: 800, color: BRAND.primary }}>{val}</div>
                            <div style={{ color: '#888', fontSize: '14px', marginTop: '4px' }}>{label}</div>
                        </div>
                    ))}
                </div>
            ),
        },

        Generic: {
            label: '📦 Generic Section',
            fields: {
                content: { type: 'textarea', label: 'Content' },
                background: { type: 'text', label: 'Background Color' },
            },
            defaultProps: {
                content: 'Custom content here.',
                background: '#0a0a0a',
            },
            render: ({ content, background }) => (
                <div style={{ ...sharedStyles, background, padding: '60px 40px' }}>
                    <p style={{ color: '#ddd' }}>{content}</p>
                </div>
            ),
        },
    },
}
