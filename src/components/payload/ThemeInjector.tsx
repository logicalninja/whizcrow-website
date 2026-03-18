import { getPayload } from 'payload'
import config from '@payload-config'

export default async function ThemeInjector() {
    const payload = await getPayload({ config })
    const siteSettings = await payload.findGlobal({
        slug: 'site-settings',
    })

    const campaign = await payload.findGlobal({
        slug: 'campaigns',
    })

    let primaryColor = siteSettings.primaryColor || '#84CC16'
    let secondaryColor = siteSettings.secondaryColor || '#8B5CF6'

    // Apply Campaign Overrides
    if (campaign.active && campaign.visualOverrides) {
        const now = new Date()
        const expiry = campaign.scheduledExpiry ? new Date(campaign.scheduledExpiry) : null
        if (!expiry || now < expiry) {
            if (campaign.visualOverrides.primaryColor) primaryColor = campaign.visualOverrides.primaryColor
            if (campaign.visualOverrides.secondaryColor) secondaryColor = campaign.visualOverrides.secondaryColor
        }
    }

    const backgroundColor = siteSettings.backgroundColor || '#000000'
    const textColor = siteSettings.textColor || '#FFFFFF'

    const headingFont = siteSettings.headingFont === 'font-serif' ? 'serif' :
        siteSettings.headingFont === 'font-mono' ? 'monospace' : 'sans-serif'

    const bodyFont = siteSettings.bodyFont === 'font-serif' ? 'serif' : 'sans-serif'

    return (
        <style
            precedence="default"
            href="theme-injector"
            dangerouslySetInnerHTML={{
                __html: `
            :root {
                --primary: ${primaryColor};
                --secondary: ${secondaryColor};
                --background: ${backgroundColor};
                --foreground: ${textColor};
                --font-heading: ${headingFont};
                --font-body: ${bodyFont};
            }
            
            h1, h2, h3, h4, h5, h6 {
                font-family: var(--font-heading), sans-serif !important;
            }
            
            body {
                font-family: var(--font-body), sans-serif !important;
            }
            
            .text-primary { color: var(--primary) !important; }
            .bg-primary { background-color: var(--primary) !important; }
            .text-secondary { color: var(--secondary) !important; }
            .bg-secondary { background-color: var(--secondary) !important; }
            .border-primary { border-color: var(--primary) !important; }
        `}} />
    )
}
