import { budgetOptions, isProjectType } from "@/data/contact";
import type { BudgetOption, ProjectType } from "@/data/contact";
import { site } from "@/data/site";

export type Enquiry = {
  name: string;
  company: string;
  email: string;
  website: string;
  projectType: ProjectType;
  budget: BudgetOption;
  message: string;
};

export type SendEnquiryResult =
  | { ok: true }
  | { ok: false; code: "not_configured" | "delivery_failed" };

function isBudget(value: string): value is BudgetOption {
  return (budgetOptions as readonly string[]).includes(value);
}

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function parseEnquiry(
  input: unknown,
): { ok: true; data: Enquiry } | { ok: false; error: string } {
  if (!input || typeof input !== "object") {
    return { ok: false, error: "Invalid request." };
  }

  const body = input as Record<string, unknown>;

  if (asString(body.honeypot)) {
    return { ok: false, error: "Invalid request." };
  }

  const name = asString(body.name);
  const email = asString(body.email);
  const message = asString(body.message);
  const projectType = asString(body.projectType);
  const budget = asString(body.budget);

  if (!name) return { ok: false, error: "Please enter your name." };
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (!isProjectType(projectType)) {
    return { ok: false, error: "Please choose a project type." };
  }
  if (!isBudget(budget)) {
    return { ok: false, error: "Please choose a budget range." };
  }
  if (!message) return { ok: false, error: "Please add a short message." };

  return {
    ok: true,
    data: {
      name,
      company: asString(body.company),
      email,
      website: asString(body.website),
      projectType,
      budget,
      message,
    },
  };
}

function smtpConfigured() {
  return Boolean(
    process.env.BREVO_SMTP_USER?.trim() && process.env.BREVO_SMTP_PASS?.trim(),
  );
}

/**
 * Sends via Brevo SMTP when BREVO_SMTP_USER and BREVO_SMTP_PASS are set.
 * CONTACT_WEBHOOK_URL remains an optional fallback.
 * Until a provider is configured this returns `not_configured`.
 */
export async function sendEnquiry(
  enquiry: Enquiry,
): Promise<SendEnquiryResult> {
  if (smtpConfigured()) {
    return sendViaSmtp(enquiry);
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL?.trim();
  if (webhook) {
    return sendViaWebhook(enquiry, webhook);
  }

  return { ok: false, code: "not_configured" };
}

async function sendViaSmtp(enquiry: Enquiry): Promise<SendEnquiryResult> {
  try {
    const nodemailer = (await import("nodemailer")).default;

    const from = process.env.CONTACT_FROM_EMAIL?.trim() || site.email;
    const to = process.env.CONTACT_TO_EMAIL?.trim() || site.email;
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
      replyTo: enquiry.email,
      subject: `Enquiry: ${enquiry.projectType} — ${enquiry.name}`,
      text: enquiryText(enquiry),
      html: enquiryHtml(enquiry),
    });

    return { ok: true };
  } catch (error) {
    console.error("Contact SMTP delivery failed.", error);
    return { ok: false, code: "delivery_failed" };
  }
}

async function sendViaWebhook(
  enquiry: Enquiry,
  webhook: string,
): Promise<SendEnquiryResult> {
  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...enquiry,
        source: "website-contact-form",
      }),
    });

    if (!response.ok) {
      return { ok: false, code: "delivery_failed" };
    }

    return { ok: true };
  } catch {
    return { ok: false, code: "delivery_failed" };
  }
}

function enquiryText(enquiry: Enquiry) {
  const company = enquiry.company || "—";
  const website = enquiry.website || "—";

  return [
    "New website enquiry",
    "",
    `Name: ${enquiry.name}`,
    `Company: ${company}`,
    `Email: ${enquiry.email}`,
    `Website: ${website}`,
    `Project type: ${enquiry.projectType}`,
    `Budget: ${enquiry.budget}`,
    "",
    "Message:",
    enquiry.message,
  ].join("\n");
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function enquiryHtml(enquiry: Enquiry) {
  const rows: [string, string][] = [
    ["Name", enquiry.name],
    ["Company", enquiry.company || "—"],
    ["Email", enquiry.email],
    ["Website", enquiry.website || "—"],
    ["Project type", enquiry.projectType],
    ["Budget", enquiry.budget],
  ];

  const details = rows
    .map(
      ([label, value]) =>
        `<tr><th align="left" style="padding:4px 16px 4px 0;font-weight:500">${escapeHtml(label)}</th><td style="padding:4px 0">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  return `<p>New website enquiry</p>
<table>${details}</table>
<p style="margin-top:16px"><strong>Message</strong></p>
<p style="white-space:pre-wrap">${escapeHtml(enquiry.message)}</p>`;
}
