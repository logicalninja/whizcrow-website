interface JsonLdProps {
    type?: 'Organization' | 'Service' | 'FAQPage' | 'BreadcrumbList' | 'WebSite' | 'AboutPage' | 'ContactPage' | 'SoftwareApplication' | 'BlogPosting' | 'CollectionPage' | 'DigitalDocument' | 'WebPage';
    data?: any;
}

export default function JsonLd({ type = 'Organization', data }: JsonLdProps) {
    let jsonLd: any = {
        '@context': 'https://schema.org',
    };

    if (type === 'Organization') {
        jsonLd = {
            ...jsonLd,
            '@type': 'Organization',
            name: 'WhizCrow Intelligence',
            alternateName: 'WhizCrow',
            url: 'https://whizcrow.com',
            logo: 'https://whizcrow.com/favicon-custom.png',
            description: 'WhizCrow is an elite technology-driven digital intelligence agency dedicated to the preservation of institutional valuation and executive authority.',
            email: 'hello@whizcrow.com',
            sameAs: [
                'https://ae.linkedin.com/company/whizcrow',
                'https://x.com/whizcrow',
                'https://www.instagram.com/whizcrow/',
                'https://www.facebook.com/whizcrowtechnologies/'
            ],
            contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-83692-19922',
                contactType: 'customer service',
                availableLanguage: ['English']
            },
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Dubai',
                addressCountry: 'UAE'
            }
        };
    } else if (type === 'WebSite') {
        jsonLd = {
            ...jsonLd,
            '@type': 'WebSite',
            name: 'WhizCrow',
            url: 'https://whizcrow.com',
            potentialAction: {
                '@type': 'SearchAction',
                target: 'https://whizcrow.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string'
            }
        };
    } else if (type === 'AboutPage') {
        jsonLd = {
            ...jsonLd,
            '@type': 'AboutPage',
            name: 'About WhizCrow',
            description: 'Learn about WhizCrow, an elite technology-driven intelligence agency dedicated to institutional valuation and executive authority.',
            mainEntity: {
                '@type': 'Organization',
                name: 'WhizCrow Intelligence'
            }
        };
    } else if (type === 'ContactPage') {
        jsonLd = {
            ...jsonLd,
            '@type': 'ContactPage',
            name: 'Contact WhizCrow',
            description: 'Get in touch with WhizCrow for reputation management and crisis defense.',
            mainEntity: {
                '@type': 'Organization',
                name: 'WhizCrow Intelligence'
            }
        };
    } else if (type === 'FAQPage' && data) {
        jsonLd = {
            ...jsonLd,
            '@type': 'FAQPage',
            mainEntity: data.map((faq: any) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer
                }
            }))
        };
    } else if (type === 'Service' && data) {
        jsonLd = {
            ...jsonLd,
            '@type': 'Service',
            serviceType: data.name,
            provider: {
                '@type': 'Organization',
                name: 'WhizCrow'
            },
            description: data.description,
            areaServed: 'Worldwide'
        };
    } else if (type === 'SoftwareApplication' && data) {
        jsonLd = {
            ...jsonLd,
            '@type': 'SoftwareApplication',
            name: data.name,
            operatingSystem: 'All',
            applicationCategory: 'BusinessApplication',
            offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD'
            }
        };
    } else if (type === 'BlogPosting' && data) {
        jsonLd = {
            ...jsonLd,
            '@type': 'BlogPosting',
            headline: data.title,
            description: data.excerpt,
            author: {
                '@type': 'Person',
                name: data.author,
                jobTitle: data.authorRole || 'Intelligence Analyst'
            },
            datePublished: data.date,
            image: data.image || 'https://whizcrow.com/favicon-custom.png',
            publisher: {
                '@type': 'Organization',
                name: 'WhizCrow Intelligence',
                logo: {
                    '@type': 'ImageObject',
                    url: 'https://whizcrow.com/favicon-custom.png'
                }
            },
            wordCount: data.content?.split(' ').length,
            timeRequired: data.readTime,
            mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': `https://whizcrow.com/insights/${data.slug}`
            }
        };
        // Add takeaways as 'about' or custom structured data if needed
        if (data.keyTakeaways) {
            jsonLd.abstract = typeof data.keyTakeaways[0] === 'string'
                ? data.keyTakeaways.join(' ')
                : data.keyTakeaways.map((t: any) => t.takeaway).join(' ');
        }
    } else if (type === 'CollectionPage' && data) {
        jsonLd = {
            ...jsonLd,
            '@type': 'CollectionPage',
            name: data.name,
            description: data.description,
            hasPart: data.items.map((item: any) => ({
                '@type': 'WebPage',
                name: item.title,
                url: `https://whizcrow.com/insights/${item.slug}`
            }))
        };
    } else if (type === 'DigitalDocument' && data) {
        jsonLd = {
            ...jsonLd,
            '@type': 'DigitalDocument',
            name: data.name,
            description: data.description,
            fileFormat: 'application/pdf',
            url: data.url
        };
    } else if (type === 'WebPage' && data) {
        jsonLd = {
            ...jsonLd,
            '@type': 'WebPage',
            name: data.name,
            description: data.description
        };
    } else if (data) {
        jsonLd = {
            ...jsonLd,
            ...data
        };
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
