import Link from "next/link";
import { pathFor } from "@/content/routes";
import { site } from "@/content/site";
import type { Locale } from "@/content/types";
import { cn } from "@/lib/cn";

export function Logo({
  locale,
  invert = false,
}: {
  locale: Locale;
  invert?: boolean;
}) {
  return (
    <Link
      href={pathFor("home", locale)}
      className={cn(
        "logo-link inline-flex cursor-pointer items-center gap-2.5 font-semibold tracking-tight",
        invert ? "logo-on-dark text-white" : "text-ink",
      )}
    >
      <svg className="logo-mark size-8 shrink-0" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="8" className="logo-plate" />
        <path
          className="logo-s"
          d="M20.6 11.2C20.6 8.3 11.4 8.1 11.4 12.2c0 2.7 5.2 2.9 7.6 4 2.2.9 1.8 5.6-6.8 4.6"
          fill="none"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect className="logo-node" x="19.2" y="19.2" width="6.2" height="6.2" rx="1.4" />
        <rect className="logo-scan" x="8" y="8" width="16" height="1.4" rx="0.7" />
      </svg>
      <span>{site.name}</span>
    </Link>
  );
}
