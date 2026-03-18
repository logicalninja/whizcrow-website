import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { source, captchaToken, ...data } = body;

        const apiKey = process.env.GHL_API_KEY;
        const locationId = process.env.GHL_LOCATION_ID;
        const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;

        let isBotSuspected = false;
        let botScore = 1.0;
        let botDetails: any = null;

        // Verify reCAPTCHA if secret is configured
        if (recaptchaSecret && recaptchaSecret !== 'YOUR_RECAPTCHA_SECRET_KEY_HERE') {
            if (!captchaToken) {
                console.warn('[reCAPTCHA] Token missing for submission - marking as high bot risk');
                isBotSuspected = true;
            } else {
                try {
                    console.log(`[reCAPTCHA] Verifying token: ${captchaToken.substring(0, 20)}...`);
                    const verifyResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        body: new URLSearchParams({
                            secret: recaptchaSecret,
                            response: captchaToken
                        }).toString()
                    });

                    const verifyResult = await verifyResponse.json();
                    botScore = verifyResult.score ?? 1.0;
                    botDetails = verifyResult;

                    if (!verifyResult.success || (verifyResult.score !== undefined && verifyResult.score < 0.5)) {
                        console.error('[reCAPTCHA] Verification Failed (Soft Fail):', verifyResult);
                        isBotSuspected = true;
                    } else {
                        console.log(`[reCAPTCHA] Verified successfully. Score: ${botScore}`);
                    }
                } catch (err: any) {
                    console.error('[reCAPTCHA] Verification Exception (Soft Fail):', err.message);
                    isBotSuspected = true;
                }
            }
        }

        // We will try to use the public API endpoint for creating a contact.
        // Documentation for GHL API v1/v2 usually requires:
        // Header: Authorization: Bearer <API_KEY>

        // Common GHL Contact Create Endpoint
        const ghlUrl = 'https://services.leadconnectorhq.com/contacts/';

        // Map data to GHL fields
        const tags = [source, 'website-capture'];
        if (isBotSuspected) {
            tags.push('bot-risk');
        }

        const payload: any = {
            firstName: data.firstName || (data.name ? data.name.split(' ')[0] : ''),
            lastName: data.lastName || (data.name ? data.name.split(' ').slice(1).join(' ') : ''),
            email: data.email,
            phone: data.phone,
            companyName: data.companyName || data.company,
            website: data.website || data.url,
            source: isBotSuspected ? `Website (Bot Risk: ${botScore})` : 'Website form',
            tags,
            customFields: [
                { key: 'source_form', value: source }
            ]
        };

        if (isBotSuspected) {
            payload.customFields.push({ key: 'bot_score', value: botScore.toString() });
        }

        // Add additional tags based on data
        if (data.need) payload.tags.push(`need:${data.need}`);
        if (data.budget) payload.tags.push(`budget:${data.budget}`);
        if (data.isCrisis) payload.tags.push('crisis-active');
        if (data.industry) payload.tags.push(`industry:${data.industry}`);
        if (data.revenue) payload.customFields.push({ key: 'estimated_revenue', value: data.revenue });

        // Remove undefined/empty first level fields
        Object.keys(payload).forEach(key => {
            if (payload[key] === undefined || payload[key] === '' || payload[key] === null) {
                delete payload[key];
            }
        });

        // If the key starts with 'pit-', it is likely a Location API Key that acts as a Bearer token.
        // Endpoint: https://services.leadconnectorhq.com/contacts/upsert
        // We use upsert to avoid duplicates error.

        // Add locationId and upsertOption
        const requestBody = {
            ...payload,
            locationId: locationId
        };

        console.log('Sending to GHL:', requestBody);

        const response = await fetch('https://services.leadconnectorhq.com/contacts/upsert', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Version': '2021-07-28',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        const result = await response.json();

        if (!response.ok) {
            console.error('GHL API Error:', result);
            return NextResponse.json({ success: false, error: result }, { status: response.status });
        }

        return NextResponse.json({ success: true, daa: result });

    } catch (error) {
        console.error('GHL Submission Error:', error);
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}
