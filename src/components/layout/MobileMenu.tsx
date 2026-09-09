"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { NavLinks } from "./NavLinks";
import { cta } from "@/data/navigation";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) {
      if (wasOpen.current) buttonRef.current?.focus();
      wasOpen.current = false;
      return;
    }

    wasOpen.current = true;
    const html = document.documentElement;
    const previousHtml = html.style.overflow;
    const previousBody = document.body.style.overflow;
    html.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);

    const panel = document.getElementById(panelId);
    const first = panel?.querySelector("a, button");
    if (first instanceof HTMLElement) first.focus();

    return () => {
      html.style.overflow = previousHtml;
      document.body.style.overflow = previousBody;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, panelId]);

  const panel =
    open && mounted
      ? createPortal(
          <div
            id={panelId}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-x-0 bottom-0 z-40 bg-paper overflow-y-auto overscroll-contain px-5 py-8 sm:px-8"
            style={{
              top: "calc(var(--header-height) + env(safe-area-inset-top, 0px))",
            }}
          >
            <nav aria-label="Mobile">
              <NavLinks stacked onNavigate={() => setOpen(false)} />
            </nav>
            <div className="mt-10 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
              <Button
                href={cta.href}
                className="w-full sm:w-auto"
                onClick={() => setOpen(false)}
              >
                {cta.label}
              </Button>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        className="relative flex h-11 w-11 items-center justify-center touch-manipulation"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span
          aria-hidden="true"
          className="flex h-3.5 w-5 flex-col justify-between"
        >
          <span
            className={`block h-px w-full bg-ink origin-center transition-transform duration-200 ${open ? "translate-y-[6.5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-full bg-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-full bg-ink origin-center transition-transform duration-200 ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`}
          />
        </span>
      </button>
      {panel}
    </div>
  );
}
