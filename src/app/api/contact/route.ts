import { NextResponse } from "next/server";
import { site } from "@/data/site";
import { parseEnquiry, sendEnquiry } from "@/lib/contact";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const parsed = parseEnquiry(body);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  const result = await sendEnquiry(parsed.data);

  if (result.ok) {
    return NextResponse.json({ ok: true });
  }

  if (result.code === "not_configured") {
    return NextResponse.json(
      { error: "not_configured", email: site.email },
      { status: 503 },
    );
  }

  return NextResponse.json(
    { error: "The enquiry could not be delivered." },
    { status: 502 },
  );
}
