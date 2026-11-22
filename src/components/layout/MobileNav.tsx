"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { chrome } from "@/content/chrome";
import { isCurrentPath, pathFor } from "@/content/routes";
import type { Locale } from "@/content/types";
import { LanguageSwitcher } from "./LanguageSwitcher";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
    </svg>
  );
}

export function MobileNav({
  locale,
  services,
}: {
  locale: Locale;
  services: { href: string; label: string }[];
}) {
  const copy = chrome(locale);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // Close the menu whenever the page changes (a link, the logo, or the back button).
  // Remembering "opened on page X" instead made it reopen on a later return to X.
  const [shownPath, setShownPath] = useState(pathname);
  if (shownPath !== pathname) {
    setShownPath(pathname);
    setOpen(false);
  }
  const close = () => setOpen(false);
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
        setOpen(false);
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
        className="inline-grid size-11 place-items-center rounded-xl border border-line bg-surface text-ink"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? copy.closeMenu : copy.openMenu}
        onClick={() => setOpen(!open)}
      >
        <MenuIcon open={open} />
      </button>
      {open
        ? createPortal(
        <div
          id="mobile-navigation"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label={copy.menuLabel}
          className="fixed inset-0 z-50 overflow-y-auto bg-bg px-5 lg:hidden pb-10 pt-[max(1.25rem,env(safe-area-inset-top))]"
        >
          <div className="mb-6 flex items-center justify-between">
            <LanguageSwitcher locale={locale} />
            <button
              type="button"
              className="inline-grid size-11 place-items-center rounded-xl border border-line bg-surface text-ink"
              aria-label={copy.closeMenu}
              onClick={close}
            >
              <MenuIcon open />
            </button>
          </div>
          <p className="label-mono m-0 px-3 text-accent">{copy.services}</p>
          <ul className="mt-3 grid gap-1">
            {services.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="mobile-link"
                  onClick={close}
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
                  onClick={close}
                  aria-current={isCurrentPath(pathname, item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={pathFor("healthCheck", locale)}
            onClick={close}
            className="btn btn-teal mt-8 flex min-h-12 items-center justify-center rounded-xl border border-accent bg-accent px-5 text-sm font-semibold text-white"
          >
            {copy.health}
          </Link>
        </div>,
            document.body,
          )
        : null}
    </div>
  );
}
