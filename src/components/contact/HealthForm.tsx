"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CheckField, Field, Honeypot, SelectField } from "@/components/ui/FormFields";
import { formError, healthFormCopy, websiteTypeOptions } from "@/content/forms";
import { site } from "@/content/site";
import type { Locale } from "@/content/types";
import { track } from "@/lib/consent";
import { parseHealthCheck, type ParseError } from "@/lib/enquiry";

type Status =
  | { type: "idle" }
  | { type: "submitting" }
  | { type: "success" }
  | { type: "not_configured" }
  | { type: "error"; message: string };

export function HealthForm({ locale }: { locale: Locale }) {
  const copy = healthFormCopy(locale);
  const types = websiteTypeOptions(locale);
  const [status, setStatus] = useState<Status>({ type: "idle" });

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = parseHealthCheck({ ...data, ownership: data.ownership === "true" });

    if (!parsed.ok) {
      setStatus({ type: "error", message: formError(locale, parsed.error) });
      return;
    }

    setStatus({ type: "submitting" });

    try {
      const response = await fetch("/api/health-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, ownership: data.ownership === "true" }),
      });
      const payload = (await response.json()) as {
        error?: ParseError | "not_configured" | "delivery_failed" | "rate_limited";
        scan?: string;
      };

      if (response.status === 429) {
        setStatus({ type: "error", message: copy.limited });
        return;
      }

      if (response.status === 503 || payload.error === "not_configured") {
        setStatus({ type: "not_configured" });
        return;
      }

      if (!response.ok) {
        const message =
          payload.error === "delivery_failed"
            ? copy.failed
            : formError(locale, isParseError(payload.error) ? payload.error : "invalid");
        setStatus({ type: "error", message });
        return;
      }

      form.reset();
      setStatus({ type: "success" });
      track("generate_lead", { form: "health_check" });
    } catch {
      setStatus({ type: "error", message: copy.failed });
    }
  }

  return (
    <form onSubmit={onSubmit} className="card form-panel form-grid relative p-5 sm:p-6" noValidate>
      <p className="form-span text-sm text-muted">{copy.requiredNote}</p>
      <Honeypot />
      <Field label={`${copy.url} *`} name="url" type="url" inputMode="url" autoComplete="url" />
      <Field label={`${copy.email} *`} name="email" type="email" autoComplete="email" />
      <SelectField label={`${copy.type} (${copy.typeHint})`} name="websiteType">
        <option value="">{locale === "ro" ? "Opțional" : "Optional"}</option>
        {types.map((type) => (
          <option key={type.value} value={type.value}>
            {type.label}
          </option>
        ))}
      </SelectField>
      <CheckField className="form-span" name="ownership" value="true">
        {copy.ownership}
      </CheckField>
      <div className="form-span">
        <Button type="submit" className="w-full" disabled={status.type === "submitting"}>
          {status.type === "submitting" ? copy.sending : copy.submit}
        </Button>
      </div>
      {status.type === "success" ? (
        <p role="status" className="form-span rounded-[var(--radius)] bg-ok-bg px-4 py-3 text-sm text-ok">
          {copy.success}
        </p>
      ) : null}
      {status.type === "not_configured" ? (
        <p role="alert" className="form-span rounded-[var(--radius)] bg-danger-bg px-4 py-3 text-sm text-danger">
          {copy.notConfigured} {site.email}
        </p>
      ) : null}
      {status.type === "error" ? (
        <p role="alert" className="form-span rounded-[var(--radius)] bg-danger-bg px-4 py-3 text-sm text-danger">
          {status.message}
        </p>
      ) : null}
    </form>
  );
}

function isParseError(value: unknown): value is ParseError {
  return (
    value === "invalid" ||
    value === "email" ||
    value === "ownership" ||
    value === "url" ||
    value === "blocked_url"
  );
}
