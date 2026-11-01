import { NextResponse } from "next/server";
import { parseHealthCheck } from "@/lib/enquiry";
import { websiteTypeOptions } from "@/content/forms";
import { noticeEmail, sendMail, viaSienaworks } from "@/lib/mail";
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
  const host = new URL(enquiry.url).hostname.replace(/^www\./, "");
  const websiteType =
    websiteTypeOptions("en").find((item) => item.value === enquiry.websiteType)?.label ??
    "Not specified";
  const notice = noticeEmail({
    kind: "Free website health check",
    who: enquiry.email,
    detail: enquiry.url,
    detailHref: enquiry.url,
    rows: [
      { label: "Type", value: websiteType },
      { label: "Access", value: "They confirmed they can authorise work on this site." },
    ],
    note: "Reply by email with a PDF within 24–48 working hours. Review it yourself. This form did not open the address.",
  });

  const result = await sendMail({
    replyTo: enquiry.email,
    fromName: viaSienaworks(host),
    subject: `Health check · ${host}`,
    ...notice,
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
