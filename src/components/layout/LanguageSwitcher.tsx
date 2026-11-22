"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { MouseEvent } from "react";
import { chrome } from "@/content/chrome";
import { switchLocale } from "@/content/routes";
import type { Locale } from "@/content/types";
import { cn } from "@/lib/cn";

/**
 * "RO / EN" in mono, the current language in ink.
 * The links are built from the pathname only, so they are in the server HTML.
 * A query string (e.g. ?service=… on contact) is carried over on click instead
 * of being read with useSearchParams, which would make this render client-only.
 */
export function LanguageSwitcher({ locale, onDark = false }: { locale: Locale; onDark?: boolean }) {
  const pathname = usePathname();
  const router = useRouter();
  const copy = chrome(locale);
  const order: Locale[] = locale === "ro" ? ["ro", "en"] : ["en", "ro"];

  function keepQuery(event: MouseEvent<HTMLAnchorElement>, href: string) {
    const query = window.location.search;
    if (!query || event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
    event.preventDefault();
    router.push(`${href}${query}`);
  }

  return (
    <nav aria-label={copy.language} className="mono flex items-center gap-2 text-xs">
      {order.map((code, index) => {
        const current = code === locale;
        const href = switchLocale(pathname, code);
        return (
          <span key={code} className="flex items-center gap-2">
            {index > 0 ? (
              <span aria-hidden="true" className={onDark ? "text-white/40" : "text-faint"}>
                /
              </span>
            ) : null}
            <Link
              href={href}
              onClick={(event) => keepQuery(event, href)}
              hrefLang={code}
              lang={code}
              aria-current={current ? "true" : undefined}
              className={cn(
                "inline-flex min-h-8 items-center px-0.5 uppercase",
                current
                  ? onDark
                    ? "font-medium text-white"
                    : "font-medium text-ink"
                  : onDark
                    ? "text-white/60 hover:text-white"
                    : "text-soft hover:text-ink",
              )}
            >
              {code}
            </Link>
          </span>
        );
      })}
    </nav>
  );
}
