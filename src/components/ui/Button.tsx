import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

/**
 * primary  teal, main action
 * ink      near-black
 * secondary white with a hairline border
 * ghost    text only
 * inverse  mint, for dark panels
 * outline  hairline border, for dark panels
 */
type Variant = "primary" | "ink" | "secondary" | "ghost" | "inverse" | "outline";
type LinkHref = ComponentProps<typeof Link>["href"];

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  arrow?: boolean;
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
  external?: boolean;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<Variant, string> = {
  primary: "btn btn-teal border border-accent bg-accent text-white hover:border-accent-hover hover:bg-accent-hover",
  ink: "btn border border-ink bg-ink text-white hover:border-[#262f3b] hover:bg-[#262f3b]",
  secondary: "btn border border-line-strong bg-surface text-ink hover:border-ink",
  ghost: "btn border border-transparent bg-transparent text-ink hover:border-line",
  inverse: "btn border border-mint bg-mint text-[#04201c] hover:bg-[#5eead4]",
  outline: "btn border border-white/30 bg-transparent text-white hover:border-white",
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

export function Button({ children, className, variant = "primary", arrow = true, ...props }: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-12 cursor-pointer items-center justify-center gap-2.5 rounded-xl px-5 py-2.5 text-[0.94rem] font-semibold",
    variants[variant],
    "disabled:cursor-not-allowed disabled:opacity-50",
    className,
  );
  const tail = arrow ? <Arrow /> : null;

  if (props.href !== undefined) {
    const href = props.href;
    const isExternal = typeof href === "string" && /^https?:\/\//.test(href);

    if (isExternal) {
      return (
        <a href={href} className={classes} onClick={props.onClick} target="_blank" rel="noopener">
          {children}
          {tail}
        </a>
      );
    }

    return (
      <Link href={href as LinkHref} className={classes} onClick={props.onClick}>
        {children}
        {tail}
      </Link>
    );
  }

  return (
    <button type={props.type ?? "button"} disabled={props.disabled} className={classes} onClick={props.onClick}>
      {children}
      {tail}
    </button>
  );
}
