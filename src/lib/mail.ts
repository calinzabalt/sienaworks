import { site } from "@/content/site";

export type MailMessage = {
  subject: string;
  text: string;
  html: string;
  replyTo: string;
  /** Inbox label, for example "Ana Pop via Sienaworks". The address stays the verified sender. */
  fromName: string;
  replyName?: string;
};

export type NoticeRow = {
  label: string;
  value: string;
  href?: string;
};

export type SendResult =
  | { ok: true }
  | { ok: false; code: "not_configured" | "delivery_failed" };

const copyInbox = "calin.cozmax@gmail.com";

function configured() {
  return Boolean(
    process.env.BREVO_SMTP_USER?.trim() && process.env.BREVO_SMTP_PASS?.trim(),
  );
}

function addresses(value: string | undefined, fallback: string) {
  return (value?.trim() || fallback)
    .split(/[,;]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function recipients() {
  const to = addresses(process.env.CONTACT_TO_EMAIL, site.email);
  const cc = addresses(process.env.CONTACT_CC_EMAIL, copyInbox).filter(
    (address) => !to.some((item) => item.toLowerCase() === address.toLowerCase()),
  );
  return { to, cc };
}

export async function sendMail(message: MailMessage): Promise<SendResult> {
  if (!configured()) {
    const webhook = process.env.CONTACT_WEBHOOK_URL?.trim();
    if (!webhook) return { ok: false, code: "not_configured" };
    return sendViaWebhook(message, webhook);
  }

  try {
    const nodemailer = (await import("nodemailer")).default;
    const from = process.env.CONTACT_FROM_EMAIL?.trim() || site.email;
    const { to, cc } = recipients();
    const host = process.env.BREVO_SMTP_HOST?.trim() || "smtp-relay.brevo.com";
    const port = Number(process.env.BREVO_SMTP_PORT ?? 587);

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user: process.env.BREVO_SMTP_USER,
        pass: process.env.BREVO_SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: { name: headerName(message.fromName), address: from },
      to,
      cc: cc.length > 0 ? cc : undefined,
      replyTo: message.replyName
        ? { name: headerName(message.replyName), address: message.replyTo }
        : message.replyTo,
      subject: message.subject,
      text: message.text,
      html: message.html,
    });

    return { ok: true };
  } catch (error) {
    console.error("Email delivery failed.", error);
    return { ok: false, code: "delivery_failed" };
  }
}

async function sendViaWebhook(message: MailMessage, webhook: string): Promise<SendResult> {
  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...message, ...recipients(), source: "website-form" }),
    });
    if (!response.ok) return { ok: false, code: "delivery_failed" };
    return { ok: true };
  } catch {
    return { ok: false, code: "delivery_failed" };
  }
}

export function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function viaSienaworks(label: string) {
  const clean = label.replace(/[\r\n<>"]/g, " ").replace(/\s+/g, " ").trim().slice(0, 60);
  return `${clean || "Website"} via Sienaworks`;
}

function headerName(value: string) {
  return value.replace(/[\r\n<>"]/g, " ").replace(/\s+/g, " ").trim().slice(0, 80) || site.name;
}

function safeHref(href: string | undefined) {
  if (!href) return undefined;
  if (/^mailto:[^\s<>"]+$/i.test(href)) return href;
  if (/^https?:\/\/[^\s<>"]+$/i.test(href)) return href;
  return undefined;
}

export function noticeEmail(input: {
  kind: string;
  who: string;
  detail: string;
  detailHref?: string;
  rows: NoticeRow[];
  message?: string;
  note?: string;
}) {
  const who = escapeHtml(input.who);
  const detailHref = safeHref(input.detailHref);
  const detail = escapeHtml(input.detail);
  const detailHtml = detailHref
    ? `<a href="${escapeHtml(detailHref)}" style="color:#0f766e;text-decoration:none;">${detail}</a>`
    : detail;

  const rows = input.rows
    .map((row) => {
      const href = safeHref(row.href);
      const value = escapeHtml(row.value);
      const valueHtml = href
        ? `<a href="${escapeHtml(href)}" style="color:#0c1b2a;text-decoration:none;">${value}</a>`
        : value;
      return `<tr>
        <td style="padding:11px 0;border-top:1px solid #d5dee6;font:600 12px/1.4 Arial,Helvetica,sans-serif;letter-spacing:.04em;text-transform:uppercase;color:#3e5163;width:132px;vertical-align:top;">${escapeHtml(row.label)}</td>
        <td style="padding:11px 0 11px 12px;border-top:1px solid #d5dee6;font:15px/1.45 Arial,Helvetica,sans-serif;color:#101820;vertical-align:top;">${valueHtml}</td>
      </tr>`;
    })
    .join("");

  const message = input.message
    ? `<p style="margin:22px 0 8px;font:600 12px/1.4 Arial,Helvetica,sans-serif;letter-spacing:.06em;text-transform:uppercase;color:#3e5163;">Message</p>
       <div style="background:#f3f5f7;border-radius:12px;padding:16px 18px;font:16px/1.55 Arial,Helvetica,sans-serif;color:#101820;white-space:pre-wrap;">${escapeHtml(input.message)}</div>`
    : "";

  const note = input.note
    ? `<div style="margin-top:22px;background:#e7f4f2;border-radius:12px;padding:14px 16px;font:14px/1.5 Arial,Helvetica,sans-serif;color:#115e59;">${escapeHtml(input.note)}</div>`
    : "";

  const html = `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#f3f5f7;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f5f7;">
      <tr>
        <td align="center" style="padding:28px 12px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;">
            <tr>
              <td style="background:#0c1b2a;padding:22px 28px 20px;">
                <div style="font:700 12px/1 Arial,Helvetica,sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#2dd4bf;">Sienaworks</div>
                <div style="margin-top:10px;font:700 22px/1.25 Arial,Helvetica,sans-serif;color:#ffffff;">${escapeHtml(input.kind)}</div>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 28px 0;">
                <div style="margin-top:22px;background:#e7f4f2;border-radius:14px;padding:16px 18px;">
                  <div style="font:700 12px/1 Arial,Helvetica,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#0f766e;">From</div>
                  <div style="margin-top:8px;font:700 26px/1.2 Arial,Helvetica,sans-serif;color:#0c1b2a;">${who}</div>
                  <div style="margin-top:6px;font:16px/1.4 Arial,Helvetica,sans-serif;">${detailHtml}</div>
                </div>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:8px;">${rows}</table>
                ${message}
                ${note}
              </td>
            </tr>
            <tr>
              <td style="padding:22px 28px 26px;font:13px/1.5 Arial,Helvetica,sans-serif;color:#3e5163;">
                Sent from the website form on sienaworks.com. Reply goes to the address above.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const text = [
    input.kind.toUpperCase(),
    "",
    `From: ${input.who}`,
    input.detail,
    "",
    ...input.rows.map((row) => `${row.label}: ${row.value}`),
  ];
  if (input.message) text.push("", input.message);
  if (input.note) text.push("", input.note);
  text.push("", "Sent from the website form on sienaworks.com. Reply goes to the address above.");

  return { html, text: text.join("\n") };
}
