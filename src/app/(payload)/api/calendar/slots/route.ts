import { NextResponse } from 'next/server';

const GHL_API_KEY = process.env.GHL_API_KEY;
const GHL_CALENDAR_ID = process.env.GHL_CALENDAR_ID;
const BASE_URL = 'https://services.leadconnectorhq.com';

// Date key pattern: YYYY-MM-DD
const DATE_KEY_REGEX = /^\d{4}-\d{2}-\d{2}$/;

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const startDate = searchParams.get('startDate'); // in ms
    const endDate = searchParams.get('endDate'); // in ms
    const timezone = searchParams.get('timezone') || 'UTC';

    console.log('[Slots API] Fetching free slots', { calendarId: GHL_CALENDAR_ID, startDate, endDate, timezone });

    if (!GHL_API_KEY || !GHL_CALENDAR_ID) {
        console.error('[Slots API] GHL configuration missing');
        return NextResponse.json({ error: 'GHL calendar not configured' }, { status: 500 });
    }

    if (!startDate || !endDate) {
        return NextResponse.json({ error: 'startDate and endDate are required' }, { status: 400 });
    }

    try {
        const url = `${BASE_URL}/calendars/${GHL_CALENDAR_ID}/free-slots?startDate=${startDate}&endDate=${endDate}&timezone=${timezone}`;
        console.log('[Slots API] GHL request URL:', url);

        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${GHL_API_KEY}`,
                'Version': '2021-07-28',
                'Content-Type': 'application/json'
            }
        });

        const rawData = await response.json();
        console.log('[Slots API] GHL response status:', response.status, '| keys:', Object.keys(rawData || {}));

        if (!response.ok) {
            console.error('[Slots API] GHL error:', rawData);
            return NextResponse.json({ error: 'Failed to fetch free slots', details: rawData }, { status: response.status });
        }

        // GHL returns { "YYYY-MM-DD": { slots: [...] }, ..., traceId: "..." }
        // Strip non-date keys (traceId, etc.) so the frontend only sees date entries
        const cleanedData: Record<string, { slots: string[] }> = {};
        for (const [key, value] of Object.entries(rawData || {})) {
            if (DATE_KEY_REGEX.test(key) && value && typeof value === 'object' && 'slots' in value) {
                cleanedData[key] = value as { slots: string[] };
            }
        }

        const dateCount = Object.keys(cleanedData).length;
        console.log(`[Slots API] Returning ${dateCount} dates with available slots`);

        return NextResponse.json(cleanedData);

    } catch (error: any) {
        console.error('[Slots API] Error:', error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
