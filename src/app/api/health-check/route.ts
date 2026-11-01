import { NextResponse } from "next/server";
import { parseHealthCheck } from "@/lib/enquiry";
import { escapeHtml, sendMail } from "@/lib/mail";
import { allowRequest, clientKey } from "@/lib/rate-limit";

export const runtime = "nodejs";

/**
 * Emails a health-check request when SMTP is configured.
 * The review is done by hand afterwards. This route does not fetch the URL.
 */
export async function POST(request: Request) {
  if (!allowRequest(clientKey(request, "health-check"))) {
    return NextResponse.json({ error: "rate_limited", scan: "unavailable" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid", scan: "unavailable" }, { status: 400 });
  }

  const parsed = parseHealthCheck(body);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error, scan: "unavailable" }, { status: 400 });
  }

  const enquiry = parsed.data;
  const result = await sendMail({
    replyTo: enquiry.email,
    subject: `Health check request — ${enquiry.url}`,
    text: [
      "Website health check request",
      "Review this by hand and reply by email with a PDF within 24-48 working hours.",
      "The website did not fetch the URL.",
      "",
      `URL: ${enquiry.url}`,
      `Email: ${enquiry.email}`,
      `Website type: ${enquiry.websiteType || "—"}`,
      "Ownership confirmed: yes",
    ].join("\n"),
    html: `<p>Website health check request</p>
<p>Review this by hand and reply by email with a PDF within 24-48 working hours. The website did not fetch the URL.</p>
<p><strong>URL:</strong> ${escapeHtml(enquiry.url)}<br>
<strong>Email:</strong> ${escapeHtml(enquiry.email)}<br>
<strong>Website type:</strong> ${escapeHtml(enquiry.websiteType || "—")}<br>
<strong>Ownership confirmed:</strong> yes</p>`,
  });

  if (result.ok) {
    return NextResponse.json({ ok: true, review: "manual", delivery: "sent" });
  }
  if (result.code === "not_configured") {
    return NextResponse.json(
      { error: "not_configured", scan: "unavailable" },
      { status: 503 },
    );
  }
  return NextResponse.json(
    { error: "delivery_failed", scan: "unavailable" },
    { status: 502 },
  );
}
