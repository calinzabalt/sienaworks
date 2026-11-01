import { NextResponse } from "next/server";
import { serviceOptions } from "@/content/forms";
import { parseContact } from "@/lib/enquiry";
import { noticeEmail, sendMail, viaSienaworks } from "@/lib/mail";
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

  const notice = noticeEmail({
    kind: "Contact form",
    who: enquiry.name,
    detail: enquiry.email,
    detailHref: `mailto:${enquiry.email}`,
    rows: [
      { label: "Service", value: service },
      ...(enquiry.website
        ? [{ label: "Website", value: enquiry.website, href: enquiry.website }]
        : []),
    ],
    message: enquiry.message,
  });

  const result = await sendMail({
    replyTo: enquiry.email,
    replyName: enquiry.name,
    fromName: viaSienaworks(enquiry.name),
    subject: `Contact form · ${enquiry.name} · ${service}`,
    ...notice,
  });

  if (result.ok) return NextResponse.json({ ok: true });
  if (result.code === "not_configured") {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }
  return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
}
