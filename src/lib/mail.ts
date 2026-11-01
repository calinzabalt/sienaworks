import { site } from "@/content/site";

export type MailMessage = {
  subject: string;
  text: string;
  html: string;
  replyTo: string;
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
      from: `"${site.name}" <${from}>`,
      to,
      cc: cc.length > 0 ? cc : undefined,
      replyTo: message.replyTo,
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
