"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { chrome } from "@/content/chrome";
import { isCurrentPath, pathFor } from "@/content/routes";
import type { Locale } from "@/content/types";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function MobileNav({
  locale,
  services,
}: {
  locale: Locale;
  services: { href: string; label: string }[];
}) {
  const copy = chrome(locale);
  const pathname = usePathname();
  const [openedAt, setOpenedAt] = useState<string | null>(null);
  const open = openedAt === pathname;
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const previous = document.activeElement as HTMLElement | null;
    const focusable = panel
      ? Array.from(panel.querySelectorAll<HTMLElement>("a, button"))
      : [];
    focusable[0]?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenedAt(null);
        return;
      }
      if (event.key !== "Tab" || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = original;
      previous?.focus();
    };
  }, [open]);

  const links = [
    { href: pathFor("healthCheck", locale), label: copy.health },
    { href: pathFor("pricing", locale), label: copy.pricing },
    { href: pathFor("caseStudies", locale), label: copy.caseStudies },
    { href: pathFor("about", locale), label: copy.about },
    { href: pathFor("contact", locale), label: copy.contact },
  ];

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        className="inline-flex min-h-11 items-center rounded-[var(--radius)] border border-line px-3 text-sm"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpenedAt(open ? null : pathname)}
      >
        {open ? copy.closeMenu : copy.openMenu}
      </button>
      {open ? (
        <div
          id="mobile-navigation"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label={copy.menuLabel}
          className="fixed inset-0 z-50 overflow-y-auto bg-bg px-5 pb-10 pt-[max(1.25rem,env(safe-area-inset-top))]"
        >
          <div className="mb-6 flex items-center justify-between">
            <LanguageSwitcher locale={locale} />
            <button
              type="button"
              className="min-h-11 rounded-[var(--radius)] border border-line px-3 text-sm"
              onClick={() => setOpenedAt(null)}
            >
              {copy.closeMenu}
            </button>
          </div>
          <p className="kicker">{copy.services}</p>
          <ul className="mt-3 grid gap-1">
            {services.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="mobile-link"
                  aria-current={isCurrentPath(pathname, item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-6 grid gap-1 border-t border-line pt-4">
            {links.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="mobile-link"
                  aria-current={isCurrentPath(pathname, item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
