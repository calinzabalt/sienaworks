"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { chrome } from "@/content/chrome";
import { switchLocale } from "@/content/routes";
import type { Locale } from "@/content/types";
import { cn } from "@/lib/cn";

export function LanguageSwitcher({
  locale,
  onDark = false,
}: {
  locale: Locale;
  onDark?: boolean;
}) {
  const pathname = usePathname();
  const search = useSearchParams();
  const query = search.toString();
  const suffix = query ? `?${query}` : "";
  const copy = chrome(locale);

  const links: { locale: Locale; label: string }[] = [
    { locale: "en", label: "EN" },
    { locale: "ro", label: "RO" },
  ];

  return (
    <nav
      aria-label={copy.language}
      className={cn(
        "inline-flex rounded-full border p-0.5",
        onDark ? "border-white/15 bg-white/5" : "border-line bg-surface",
      )}
    >
      {links.map((link) => {
        const current = link.locale === locale;
        return (
          <Link
            key={link.locale}
            href={`${switchLocale(pathname, link.locale)}${suffix}`}
            hrefLang={link.locale}
            lang={link.locale}
            aria-current={current ? "true" : undefined}
            className={cn(
              "cursor-pointer rounded-full px-2.5 py-1.5 text-xs font-medium tracking-wide",
              current
                ? onDark
                  ? "bg-white text-navy"
                  : "bg-navy text-white"
                : onDark
                  ? "text-mist hover:text-white"
                  : "text-ink-soft hover:text-ink",
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
