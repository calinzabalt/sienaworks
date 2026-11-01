import { NextResponse } from "next/server";
import { serviceOptions } from "@/content/forms";
import { parseContact } from "@/lib/enquiry";
import { escapeHtml, sendMail } from "@/lib/mail";
import { allowRequest, clientKey } from "@/lib/rate-limit";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!allowRequest(clientKey(request, "contact"))) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const parsed = parseContact(body);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  const enquiry = parsed.data;
  const service =
    serviceOptions("en").find((item) => item.value === enquiry.service)?.label ??
    enquiry.service;

  const result = await sendMail({
    replyTo: enquiry.email,
    subject: `Enquiry: ${service} — ${enquiry.name}`,
    text: [
      "New website enquiry",
      "",
      `Name: ${enquiry.name}`,
      `Email: ${enquiry.email}`,
      `Website: ${enquiry.website || "—"}`,
      `Service: ${service}`,
      "",
      enquiry.message,
    ].join("\n"),
    html: `<p>New website enquiry</p>
<p><strong>Name:</strong> ${escapeHtml(enquiry.name)}<br>
<strong>Email:</strong> ${escapeHtml(enquiry.email)}<br>
<strong>Website:</strong> ${escapeHtml(enquiry.website || "—")}<br>
<strong>Service:</strong> ${escapeHtml(service)}</p>
<p style="white-space:pre-wrap">${escapeHtml(enquiry.message)}</p>`,
  });

  if (result.ok) return NextResponse.json({ ok: true });
  if (result.code === "not_configured") {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }
  return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
}
