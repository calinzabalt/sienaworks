"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { budgetOptions, projectTypes } from "@/data/contact";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";
import type { ProjectType } from "@/data/contact";

type Status =
  | { type: "idle" }
  | { type: "submitting" }
  | { type: "success" }
  | { type: "not_configured" }
  | { type: "error"; message: string };

const fieldClass =
  "mt-2 w-full min-h-11 border border-line bg-paper px-3 py-2.5 text-base text-ink outline-none transition-colors duration-200 placeholder:text-muted/70 focus:border-ink";

export function ContactForm({
  defaultProjectType,
}: {
  defaultProjectType?: string;
}) {
  const initialType = projectTypes.includes(defaultProjectType as ProjectType)
    ? (defaultProjectType as ProjectType)
    : "";

  const [status, setStatus] = useState<Status>({ type: "idle" });

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ type: "submitting" });

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const payload = (await response.json()) as {
        ok?: boolean;
        error?: string;
      };

      if (response.status === 503 && payload.error === "not_configured") {
        setStatus({ type: "not_configured" });
        return;
      }

      if (!response.ok) {
        setStatus({
          type: "error",
          message: payload.error ?? "Something went wrong. Please email us instead.",
        });
        return;
      }

      form.reset();
      setStatus({ type: "success" });
    } catch {
      setStatus({
        type: "error",
        message: "The form could not be sent. Please email us instead.",
      });
    }
  }

  return (
    <form onSubmit={onSubmit} className="relative grid gap-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field label="Company" name="company" autoComplete="organization" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
        <Field
          label="Website"
          name="website"
          placeholder="https://"
          autoComplete="url"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="projectType" className="text-[0.8125rem] font-medium">
            Project type
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            defaultValue={initialType}
            className={fieldClass}
          >
            <option value="" disabled>
              Select…
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="text-[0.8125rem] font-medium">
            Budget
          </label>
          <select id="budget" name="budget" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select…
            </option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="text-[0.8125rem] font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className={cn(fieldClass, "min-h-[10rem] resize-y")}
        />
      </div>

      <div className="sr-only" aria-hidden="true">
        <label htmlFor="honeypot">Company website</label>
        <input id="honeypot" name="honeypot" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit" disabled={status.type === "submitting"} className="w-full sm:w-auto">
          {status.type === "submitting" ? "Sending…" : "Send Enquiry"}
        </Button>
        <p className="text-[0.8125rem] text-muted">
          Or email{" "}
          <a className="text-ink underline decoration-line underline-offset-4" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>
      </div>
      <p className="text-[0.8125rem] text-muted">
        We use this to reply to your enquiry.{" "}
        <Link
          href="/privacy"
          className="text-ink underline decoration-line underline-offset-4"
        >
          Privacy notice
        </Link>
        .
      </p>

      <div aria-live="polite">
        {status.type === "success" ? (
          <p className="text-[0.95rem] text-ink">Enquiry sent. We will get back to you.</p>
        ) : null}
        {status.type === "not_configured" ? (
          <p className="text-[0.95rem] text-ink">
            This form is not connected to email delivery yet. Please send your enquiry to{" "}
            <a className="underline decoration-line underline-offset-4" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
        ) : null}
        {status.type === "error" ? (
          <p className="text-[0.95rem] text-accent">{status.message}</p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-[0.8125rem] font-medium">
        {label}
        {required ? <span className="sr-only"> (required)</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className={fieldClass}
      />
    </div>
  );
}
