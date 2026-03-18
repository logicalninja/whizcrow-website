import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const GHL_API_KEY = process.env.GHL_API_KEY;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;
const GHL_CALENDAR_ID = process.env.GHL_CALENDAR_ID;
const GHL_API_VERSION = '2021-07-28';
const BASE_URL = 'https://services.leadconnectorhq.com';

const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY;

function logDebug(message: string, data?: any) {
    const logPath = path.join(process.cwd(), 'ghl_debug.log');
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ${message} ${data ? JSON.stringify(data, null, 2) : ''}\n`;
    fs.appendFileSync(logPath, logEntry);
    console.log(`GHL Debug: ${message}`, data || '');
}

export async function POST(req: Request) {
    logDebug('Received booking request');
    try {
        const body = await req.json();
        logDebug('Request Body', body);

        const {
            name,
            email,
            phone,
            company,
            challenge,
            revenue,
            crisis,
            timeline,
            source,
            selectedDate,
            selectedTime,
            selectedSlotRaw,
            captchaToken
        } = body;

        let isBotSuspected = false;
        let botScore = 1.0;
        let botDetails: any = null;

        // 1. Verify reCAPTCHA (Resiliently)
        if (RECAPTCHA_SECRET && RECAPTCHA_SECRET !== 'YOUR_RECAPTCHA_SECRET_KEY_HERE') {
            if (!captchaToken) {
                logDebug('reCAPTCHA token missing - marking as high bot risk');
                isBotSuspected = true;
            } else {
                logDebug('Verifying reCAPTCHA token', { tokenPreview: captchaToken.substring(0, 20) + '...' });
                try {
                    const verifyResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        body: new URLSearchParams({
                            secret: RECAPTCHA_SECRET,
                            response: captchaToken
                        }).toString()
                    });

                    const verifyResult = await verifyResponse.json();
                    botScore = verifyResult.score ?? 1.0;
                    botDetails = verifyResult;

                    if (!verifyResult.success || (verifyResult.score !== undefined && verifyResult.score < 0.5)) {
                        logDebug('reCAPTCHA Verification Failed (Soft Fail)', verifyResult);
                        isBotSuspected = true;
                    } else {
                        logDebug('reCAPTCHA verified successfully', { score: botScore });
                    }
                } catch (recaptchaErr: any) {
                    logDebug('reCAPTCHA verification exception (Soft Fail)', recaptchaErr.message);
                    isBotSuspected = true;
                }
            }
        }

        const nameParts = (name || '').trim().split(' ');
        const firstName = nameParts[0] || 'Web';
        const lastName = nameParts.slice(1).join(' ') || 'User';

        if (!GHL_API_KEY || !GHL_LOCATION_ID) {
            logDebug('GHL Configuration missing', { hasKey: !!GHL_API_KEY, hasLocation: !!GHL_LOCATION_ID });
            return NextResponse.json({ error: 'GHL integration is not fully configured' }, { status: 500 });
        }

        const locationId = GHL_LOCATION_ID;
        const tags = ['website booking form'];
        if (isBotSuspected) {
            tags.push('bot-risk');
            logDebug('Adding bot-risk tag to lead');
        }

        logDebug(`Creating/Updating contact for ${email} in location ${locationId}`);

        // 2. Create or Update Contact (PRIORITY CAPTURE)
        const contactResponse = await fetch(`${BASE_URL}/contacts/`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${GHL_API_KEY}`,
                'Version': GHL_API_VERSION,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                phone,
                companyName: company,
                locationId,
                tags,
                source: isBotSuspected ? `Website (Bot Risk: ${botScore})` : 'Website booking form'
            })
        });

        const contactData = await contactResponse.json();
        logDebug('Contact Response', { status: contactResponse.status, data: contactData });

        let contactId = contactData.contact?.id;

        // If contact already exists, GHL returns 400 with the existing ID in meta
        if (!contactId && contactResponse.status === 400 && contactData.meta?.contactId) {
            logDebug('Contact duplicate detected, using existing ID', { contactId: contactData.meta.contactId });
            contactId = contactData.meta.contactId;

            // Try to update the tags of existing contact if it was marked as bot risk
            if (isBotSuspected) {
                try {
                    await fetch(`${BASE_URL}/contacts/${contactId}/tags`, {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${GHL_API_KEY}`,
                            'Version': GHL_API_VERSION,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ tags: ['bot-risk'] })
                    });
                } catch (e) {
                    logDebug('Failed to update bot-risk tag on existing contact');
                }
            }
        }

        if (!contactId) {
            logDebug('Failed to get contact ID', contactData);
            return NextResponse.json({ error: 'Failed to capture lead info', details: contactData }, { status: contactResponse.status });
        }

        // 3. Create Note
        logDebug(`Appending note to contact ID: ${contactId}`);
        const noteBody = `--- WEBSITE BOOKING DETAILS ---\nDate: ${selectedDate}\nTime: ${selectedTime}\nChallenge: ${challenge}\nRevenue: ${revenue}\nCrisis: ${crisis}\nTimeline: ${timeline}\nSource: ${source}` +
            (isBotSuspected ? `\n\n[SECURITY WARNING] reCAPTCHA failed. Score: ${botScore}. Error: ${JSON.stringify(botDetails?.['error-codes'] || 'None')}` : '');

        const noteResponse = await fetch(`${BASE_URL}/contacts/${contactId}/notes`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${GHL_API_KEY}`,
                'Version': GHL_API_VERSION,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ body: noteBody })
        });

        if (!noteResponse.ok) {
            const noteError = await noteResponse.json();
            logDebug('Note Creation Error', noteError);
        }

        // 4. Create Calendar Appointment
        if (GHL_CALENDAR_ID && selectedDate && selectedTime) {
            logDebug(`Scheduling appointment in calendar: ${GHL_CALENDAR_ID}`);

            let startISO = selectedSlotRaw;

            if (!startISO) {
                logDebug('No raw slot provided, attempting fallback parsing', { selectedDate, selectedTime });
                try {
                    const dateClean = selectedDate.includes(', ') ? selectedDate.split(', ')[1] : selectedDate;
                    const currentYear = new Date().getFullYear();
                    const d = new Date(`${dateClean} ${currentYear} ${selectedTime}`);
                    if (!isNaN(d.getTime())) {
                        if (d.getTime() < Date.now()) {
                            d.setFullYear(currentYear + 1);
                        }
                        startISO = d.toISOString();
                    }
                } catch (e) {
                    logDebug('Date fallback parsing failed');
                }
            }

            if (startISO) {
                logDebug('Using startTime for appointment', { startISO });
                try {
                    const appointmentUrl = `${BASE_URL}/calendars/appointments`;
                    const eventResponse = await fetch(appointmentUrl, {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${GHL_API_KEY}`,
                            'Version': GHL_API_VERSION,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            calendarId: GHL_CALENDAR_ID,
                            locationId: GHL_LOCATION_ID,
                            contactId: contactId,
                            startTime: startISO,
                            title: `WhizCrow Discovery: ${name}`,
                            description: `Challenge: ${challenge}\nSource: ${source}`
                        })
                    });

                    const eventData = await eventResponse.json();
                    logDebug('Event Creation Response', { status: eventResponse.status, data: eventData });
                } catch (e: any) {
                    logDebug('Event Creation Exception', e.message);
                }
            } else {
                logDebug('Skipping appointment creation: No valid startISO');
            }
        }

        return NextResponse.json({
            success: true,
            contactId,
            warning: isBotSuspected ? 'Security verification issue - data captured as fallback' : null
        });

    } catch (error: any) {
        logDebug('Integration Error', error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
