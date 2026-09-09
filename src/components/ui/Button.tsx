import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "invert";
type LinkHref = ComponentProps<typeof Link>["href"];

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  size?: "sm" | "md";
  onClick?: () => void;
};

type ButtonAsButton = CommonProps & {
  href?: undefined;
  type?: "button" | "submit";
  disabled?: boolean;
};

type ButtonAsLink = CommonProps & {
  href: LinkHref | string;
  type?: never;
  disabled?: never;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-paper hover:bg-accent border border-ink hover:border-accent",
  secondary:
    "bg-transparent text-ink border border-ink/20 hover:border-ink hover:bg-ink hover:text-paper",
  ghost: "bg-transparent text-ink border border-transparent hover:border-ink/20",
  invert:
    "bg-paper text-ink border border-paper hover:bg-transparent hover:text-paper",
};

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 text-[0.8125rem] font-medium tracking-wide transition-colors duration-200 touch-manipulation",
    size === "md" ? "min-h-11 px-5 py-3" : "min-h-10 px-4 py-2",
    variants[variant],
    "disabled:cursor-not-allowed disabled:opacity-50",
    className,
  );

  if (props.href !== undefined) {
    const href = props.href;
    const external =
      typeof href === "string" && /^https?:\/\//.test(href);

    if (external) {
      return (
        <a
          href={href}
          className={classes}
          onClick={props.onClick}
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href as LinkHref}
        className={classes}
        onClick={props.onClick}
      >
        {children}
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
    </button>
  );
}
