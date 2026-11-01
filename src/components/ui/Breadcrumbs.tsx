import Link from "next/link";
import { cn } from "@/lib/cn";

export function Breadcrumbs({
  items,
  onDark = false,
}: {
  items: { label: string; href?: string }[];
  onDark?: boolean;
}) {
  return (
    <nav aria-label="Breadcrumb" className={cn("min-w-0", onDark ? "mb-8" : "border-b border-line bg-bg")}>
      <ol className={cn("crumbs", onDark ? "text-mist" : "mx-auto w-full max-w-6xl px-5 py-3 text-muted sm:px-8")}>
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`}>
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {item.href && !last ? (
                <Link
                  href={item.href}
                  className={cn("shrink-0", onDark ? "text-white/80 hover:text-white" : "hover:text-ink")}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={last ? "page" : undefined}
                  className={cn("crumb-current", last ? (onDark ? "text-white" : "text-ink") : undefined)}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
