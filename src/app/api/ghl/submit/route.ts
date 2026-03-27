import { NextRequest, NextResponse } from "next/server";

const GHL_API_KEY = process.env.GHL_API_KEY!;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID!;
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY!;

const GHL_BASE = "https://services.leadconnectorhq.com";
const GHL_HEADERS = {
  Authorization: `Bearer ${GHL_API_KEY}`,
  Version: "2021-07-28",
  "Content-Type": "application/json",
};

async function verifyRecaptcha(token: string): Promise<boolean> {
  try {
    const res = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
      { method: "POST" }
    );
    const data = await res.json();
    return data.success === true && data.score > 0.3;
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { name, email, company, website, message, captchaToken } = body;

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
  }

  // Verify reCAPTCHA
  if (captchaToken) {
    const valid = await verifyRecaptcha(captchaToken);
    if (!valid) {
      return NextResponse.json({ error: "reCAPTCHA verification failed" }, { status: 403 });
    }
  }

  try {
    const [firstName, ...rest] = name.trim().split(" ");
    const lastName = rest.join(" ") || "";

    // Upsert contact in GHL
    const contactPayload = {
      locationId: GHL_LOCATION_ID,
      firstName,
      lastName,
      email,
      companyName: company || "",
      website: website || "",
      source: "website contact form",
      tags: ["website contact form"],
      customFields: [
        { key: "contact_message", field_value: message || "" },
        { key: "website_url", field_value: website || "" },
      ],
    };

    const contactRes = await fetch(`${GHL_BASE}/contacts/upsert`, {
      method: "POST",
      headers: GHL_HEADERS,
      body: JSON.stringify(contactPayload),
    });

    const contactData = await contactRes.json();

    if (!contactRes.ok) {
      throw new Error(`Contact upsert failed: ${contactRes.status} - ${JSON.stringify(contactData)}`);
    }

    const contactId: string = contactData.contact?.id;

    // Add note with the message
    if (contactId && message) {
      const noteBody = `Website Enquiry\n\nCompany: ${company || "N/A"}\nWebsite: ${website || "N/A"}\n\nMessage:\n${message}`;
      await fetch(`${GHL_BASE}/contacts/${contactId}/notes`, {
        method: "POST",
        headers: GHL_HEADERS,
        body: JSON.stringify({ userId: contactId, body: noteBody }),
      }).catch(() => {
        // Best-effort — don't fail the request if note fails
      });
    }

    return NextResponse.json({ success: true, contactId });
  } catch (error: any) {
    console.error("[ghl/submit] Error:", error.message);
    return NextResponse.json({ error: "Submission failed", message: error.message }, { status: 500 });
  }
}
