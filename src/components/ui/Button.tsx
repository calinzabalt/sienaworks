import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "inverse";
type LinkHref = ComponentProps<typeof Link>["href"];

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
};

type ButtonAsButton = CommonProps & {
  href?: undefined;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

type ButtonAsLink = CommonProps & {
  href: LinkHref | string;
  type?: never;
  disabled?: never;
  onClick?: () => void;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<Variant, string> = {
  primary:
    "btn btn-primary bg-accent text-white border border-accent hover:bg-accent-hover hover:border-accent-hover",
  secondary:
    "btn border border-line-strong bg-surface text-ink hover:border-ink hover:bg-bg",
  ghost: "btn border border-transparent bg-transparent text-ink hover:border-line",
  inverse: "btn border border-white bg-white text-navy hover:bg-transparent hover:text-white",
};

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" className="btn-arrow size-4 shrink-0" aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-[var(--radius)] px-5 py-2.5 text-sm font-semibold",
    variants[variant],
    "disabled:cursor-not-allowed disabled:opacity-50",
    className,
  );

  if (props.href !== undefined) {
    const href = props.href;
    const external = typeof href === "string" && /^https?:\/\//.test(href);

    if (external) {
      return (
        <a href={href} className={classes} onClick={props.onClick}>
          {children}
          <Arrow />
        </a>
      );
    }

    return (
      <Link href={href as LinkHref} className={classes} onClick={props.onClick}>
        {children}
        <Arrow />
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      disabled={props.disabled}
      className={classes}
      onClick={props.onClick}
    >
      {children}
      <Arrow />
    </button>
  );
}
