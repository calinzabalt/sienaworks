import { cn } from "@/lib/cn";
import { TRAP_FIELD } from "@/lib/enquiry";

export function Field({
  label,
  name,
  type = "text",
  autoComplete,
  inputMode,
  error,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  inputMode?: "text" | "email" | "url";
  error?: string;
  className?: string;
}) {
  const errorId = error ? `${name}-error` : undefined;
  return (
    <label className={cn("field-label", className)}>
      <span>{label}</span>
      <input
        className="field"
        name={name}
        type={type}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={error ? true : undefined}
        aria-describedby={errorId}
      />
      {error ? (
        <span id={errorId} className="font-normal text-danger">
          {error}
        </span>
      ) : null}
    </label>
  );
}

export function SelectField({
  label,
  name,
  defaultValue = "",
  children,
  className,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("field-label", className)}>
      <span>{label}</span>
      <select className="field" name={name} defaultValue={defaultValue}>
        {children}
      </select>
    </label>
  );
}

export function AreaField({
  label,
  name,
  className,
  maxLength,
}: {
  label: string;
  name: string;
  className?: string;
  /** Matches the server limit, so a long message stops at the limit instead of being rejected. */
  maxLength?: number;
}) {
  return (
    <label className={cn("field-label", className)}>
      <span>{label}</span>
      <textarea className="field" name={name} maxLength={maxLength} />
    </label>
  );
}

export function CheckField({
  children,
  className,
  name,
  value,
  checked,
  disabled = false,
  onChange,
}: {
  children: React.ReactNode;
  className?: string;
  name?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label className={cn("check", disabled && "is-disabled", className)}>
      <input
        className="check-input"
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <span className="check-box" aria-hidden="true" />
      <span>{children}</span>
    </label>
  );
}

/**
 * Hidden spam trap: bots fill it, people never see it. The name must mean nothing to browser
 * autofill: it used to be "company_website", which Chrome filled in for real visitors, so their
 * forms were rejected with "The form could not be read". The data-* attributes ask LastPass,
 * 1Password and Bitwarden to skip it too.
 */
export function Honeypot() {
  return (
    <div className="absolute left-[-9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
      <label>
        Leave blank
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          name={TRAP_FIELD}
          data-lpignore="true"
          data-1p-ignore="true"
          data-bwignore="true"
          data-form-type="other"
        />
      </label>
    </div>
  );
}
