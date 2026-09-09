import Link from "next/link";
import { cn } from "@/lib/cn";

export function SectionHeading({
  kicker,
  title,
  action,
  invert = false,
}: {
  kicker?: string;
  title: string;
  action?: React.ReactNode;
  invert?: boolean;
}) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between border-b pb-6 md:pb-7",
        invert ? "border-dark-line" : "border-line",
      )}
    >
      <div>
        {kicker ? (
          <p className={cn("kicker", invert && "text-dark-muted")}>{kicker}</p>
        ) : null}
        <h2
          className={cn(
            "font-display text-3xl md:text-[2.6rem] leading-[1.1] tracking-[-0.03em]",
            kicker && "mt-3",
            invert ? "text-paper" : "text-ink",
          )}
        >
          {title}
        </h2>
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

export function TextLink({
  href,
  children,
  invert = false,
}: {
  href: string;
  children: React.ReactNode;
  invert?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group/link inline-flex items-center gap-2 text-[0.8125rem] font-medium tracking-wide transition-colors duration-200",
        invert ? "text-paper hover:text-paper" : "text-ink hover:text-accent",
      )}
    >
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-200 group-hover/link:translate-x-0.5"
      >
        →
      </span>
    </Link>
  );
}
