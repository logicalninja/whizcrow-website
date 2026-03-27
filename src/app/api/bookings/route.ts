import { NextRequest, NextResponse } from "next/server";

const GHL_API_KEY = process.env.GHL_API_KEY!;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID!;
const GHL_CALENDAR_ID = process.env.GHL_CALENDAR_ID!;
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

async function upsertContact(data: {
  name: string;
  email: string;
  phone: string;
  company: string;
  goal: string;
  budget: string;
  service: string;
  timeline: string;
  source: string;
}) {
  const [firstName, ...rest] = data.name.trim().split(" ");
  const lastName = rest.join(" ") || "";

  const payload = {
    locationId: GHL_LOCATION_ID,
    firstName,
    lastName,
    email: data.email,
    phone: data.phone,
    companyName: data.company,
    source: "website booking form",
    tags: ["website booking form", data.service?.split(" — ")[0] ?? ""].filter(Boolean),
    customFields: [
      { key: "marketing_goal", field_value: data.goal },
      { key: "marketing_budget", field_value: data.budget },
      { key: "service_interest", field_value: data.service },
      { key: "engagement_timeline", field_value: data.timeline },
      { key: "referral_source", field_value: data.source },
    ],
  };

  const response = await fetch(`${GHL_BASE}/contacts/upsert`, {
    method: "POST",
    headers: GHL_HEADERS,
    body: JSON.stringify(payload),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      `Contact upsert failed: ${response.status} - ${JSON.stringify(result)}`
    );
  }

  return result.contact;
}

async function createAppointment(
  contactId: string,
  startTime: string,
  name: string,
  email: string,
  phone: string
) {
  // startTime is an ISO string e.g. "2026-03-21T09:00:00Z"
  const start = new Date(startTime);
  const end = new Date(start.getTime() + 30 * 60 * 1000); // 30 mins

  const payload = {
    calendarId: GHL_CALENDAR_ID,
    locationId: GHL_LOCATION_ID,
    contactId,
    startTime: start.toISOString(),
    endTime: end.toISOString(),
    title: `WhizCrow Strategy Call – ${name}`,
    appointmentStatus: "confirmed",
    ignoreDateRange: false,
    toNotify: true,
    address: "Video Call",
    assignedUserId: undefined,
  };

  const response = await fetch(`${GHL_BASE}/calendars/events/appointments`, {
    method: "POST",
    headers: GHL_HEADERS,
    body: JSON.stringify(payload),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      `Appointment creation failed: ${response.status} - ${JSON.stringify(result)}`
    );
  }

  return result;
}

async function addContactNote(contactId: string, noteBody: string) {
  try {
    await fetch(`${GHL_BASE}/contacts/${contactId}/notes`, {
      method: "POST",
      headers: GHL_HEADERS,
      body: JSON.stringify({ userId: contactId, body: noteBody }),
    });
  } catch {
    // Note creation is best-effort, don't fail the booking
  }
}

export async function POST(req: NextRequest) {
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const {
    name,
    email,
    phone,
    company,
    goal,
    budget,
    service,
    timeline,
    source,
    selectedSlotRaw,
    captchaToken,
  } = body;

  // Validate required fields
  if (!name || !email || !phone || !selectedSlotRaw) {
    return NextResponse.json(
      { error: "Missing required fields: name, email, phone, selectedSlotRaw" },
      { status: 400 }
    );
  }

  // Verify reCAPTCHA
  if (captchaToken) {
    const valid = await verifyRecaptcha(captchaToken);
    if (!valid) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed" },
        { status: 403 }
      );
    }
  }

  try {
    // Step 1: Create or update the contact in GHL
    const contact = await upsertContact({
      name,
      email,
      phone,
      company,
      goal,
      budget,
      service,
      timeline,
      source,
    });

    const contactId: string = contact.id;

    // Step 2: Add a qualification note
    const noteBody = `Booking Request — WhizCrow Strategy Call\n\nMarketing Goal: ${goal || "N/A"}\nService Interest: ${service || "N/A"}\nBudget: ${budget || "N/A"}\nTimeline: ${timeline || "N/A"}\nSource: ${source || "N/A"}`;
    await addContactNote(contactId, noteBody);

    // Step 3: Book the calendar appointment
    const appointment = await createAppointment(
      contactId,
      selectedSlotRaw,
      name,
      email,
      phone
    );

    return NextResponse.json({
      success: true,
      contactId,
      appointmentId: appointment?.id,
      message: "Booking confirmed",
    });
  } catch (error: any) {
    console.error("[bookings] Error:", error.message);
    return NextResponse.json(
      { error: "Booking failed", message: error.message },
      { status: 500 }
    );
  }
}
