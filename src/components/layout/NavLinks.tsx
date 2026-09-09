"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { mainNav } from "@/data/navigation";

export function NavLinks({
  invert = false,
  onNavigate,
  stacked = false,
}: {
  invert?: boolean;
  onNavigate?: () => void;
  stacked?: boolean;
}) {
  const pathname = usePathname();

  return (
    <ul className={cn("flex", stacked ? "flex-col gap-1" : "items-center gap-7")}>
      {mainNav.map((item) => {
        const current =
          pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              aria-current={current ? "page" : undefined}
              className={cn(
                "transition-colors duration-200",
                stacked
                  ? "block py-3 font-display text-[1.75rem] sm:text-3xl tracking-[-0.03em]"
                  : "text-[0.8125rem] tracking-wide",
                invert
                  ? current
                    ? "text-paper"
                    : "text-dark-muted hover:text-paper"
                  : current
                    ? "text-ink"
                    : "text-muted hover:text-ink",
                item.href === "/agency-partners" &&
                  !stacked &&
                  !current &&
                  (invert ? "text-paper/80" : "text-ink-soft"),
              )}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
