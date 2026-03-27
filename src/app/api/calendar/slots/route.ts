import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const GHL_API_KEY = process.env.GHL_API_KEY!;
  const GHL_CALENDAR_ID = process.env.GHL_CALENDAR_ID!;

  const { searchParams } = new URL(req.url);
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  const timezone = searchParams.get("timezone") || "UTC";

  if (!startDate || !endDate) {
    return NextResponse.json(
      { error: "startDate and endDate are required" },
      { status: 400 }
    );
  }

  try {
    const url = new URL(
      `https://services.leadconnectorhq.com/calendars/${GHL_CALENDAR_ID}/free-slots`
    );
    url.searchParams.set("startDate", startDate);
    url.searchParams.set("endDate", endDate);
    url.searchParams.set("timezone", timezone);

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        Authorization: `Bearer ${GHL_API_KEY}`,
        Version: "2021-07-28",
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("[calendar/slots] GHL error:", response.status, errorData);
      return NextResponse.json(
        { error: "Failed to fetch calendar slots", details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("[calendar/slots] Unexpected error:", error);
    return NextResponse.json(
      { error: "Internal server error", message: error.message },
      { status: 500 }
    );
  }
}
