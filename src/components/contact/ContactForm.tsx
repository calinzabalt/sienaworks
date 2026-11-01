"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { AreaField, CheckField, Field, Honeypot, SelectField } from "@/components/ui/FormFields";
import { contactFormCopy, formError, serviceOptions } from "@/content/forms";
import { pathFor } from "@/content/routes";
import { site } from "@/content/site";
import type { Locale } from "@/content/types";
import { track } from "@/lib/consent";
import { parseContact, type EnquiryService, type ParseError } from "@/lib/enquiry";

type Status =
  | { type: "idle" }
  | { type: "submitting" }
  | { type: "success" }
  | { type: "not_configured" }
  | { type: "error"; message: string };

export function ContactForm({
  locale,
  service,
}: {
  locale: Locale;
  service?: EnquiryService;
}) {
  const copy = contactFormCopy(locale);
  const options = serviceOptions(locale);
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = parseContact(data);

    if (!parsed.ok) {
      setErrors({ form: formError(locale, parsed.error) });
      setStatus({ type: "error", message: formError(locale, parsed.error) });
      return;
    }

    setErrors({});
    setStatus({ type: "submitting" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, consent: data.consent === "true" }),
      });
      const payload = (await response.json()) as { error?: ParseError | "not_configured" | "delivery_failed" | "rate_limited" };

      if (response.status === 429) {
        setStatus({ type: "error", message: copy.limited });
        return;
      }

      if (response.status === 503 || payload.error === "not_configured") {
        setStatus({ type: "not_configured" });
        return;
      }

      if (!response.ok) {
        const code = isParseError(payload.error) ? payload.error : "invalid";
        const message =
          payload.error === "delivery_failed" ? copy.failed : formError(locale, code);
        setStatus({ type: "error", message });
        return;
      }

      form.reset();
      setStatus({ type: "success" });
      track("generate_lead", { form: "contact" });
    } catch {
      setStatus({ type: "error", message: copy.failed });
    }
  }

  return (
    <form onSubmit={onSubmit} className="card form-panel form-grid relative p-5 sm:p-6" noValidate>
      <p className="form-span text-sm text-muted">{copy.requiredNote}</p>
      <Honeypot />
      <Field label={`${copy.name} *`} name="name" autoComplete="name" error={errors.name} />
      <Field label={`${copy.email} *`} name="email" type="email" autoComplete="email" error={errors.email} />
      <Field
        label={`${copy.website} (${copy.websiteHint})`}
        name="website"
        type="url"
        autoComplete="url"
        error={errors.website}
      />
      <SelectField label={`${copy.service} *`} name="service" defaultValue={service ?? ""}>
        <option value="">{locale === "ro" ? "Alege" : "Choose"}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectField>
      <AreaField className="form-span" label={`${copy.message} *`} name="message" />
      <CheckField className="form-span" name="consent" value="true">
        {copy.consent}{" "}
        <a className="text-accent-hover underline underline-offset-4" href={pathFor("privacy", locale)}>
          {copy.privacy}
        </a>
      </CheckField>
      <div className="form-span">
        <Button type="submit" disabled={status.type === "submitting"}>
          {status.type === "submitting" ? copy.sending : copy.submit}
        </Button>
      </div>
      <StatusMessage status={status} copy={copy} />
      <p className="form-span text-sm text-muted">
        {copy.emailInstead}{" "}
        <a className="text-ink underline underline-offset-4" href={`mailto:${site.email}`}>
          {site.email}
        </a>
      </p>
    </form>
  );
}

function StatusMessage({
  status,
  copy,
}: {
  status: Status;
  copy: ReturnType<typeof contactFormCopy>;
}) {
  if (status.type === "success") {
    return (
      <p role="status" className="form-span rounded-[var(--radius)] bg-ok-bg px-4 py-3 text-sm text-ok">
        {copy.success}
      </p>
    );
  }
  if (status.type === "not_configured") {
    return (
      <p role="alert" className="form-span rounded-[var(--radius)] bg-danger-bg px-4 py-3 text-sm text-danger">
        {copy.notConfigured} {site.email}
      </p>
    );
  }
  if (status.type === "error") {
    return (
      <p role="alert" className="form-span rounded-[var(--radius)] bg-danger-bg px-4 py-3 text-sm text-danger">
        {status.message}
      </p>
    );
  }
  return null;
}

function isParseError(value: unknown): value is ParseError {
  return typeof value === "string";
}

