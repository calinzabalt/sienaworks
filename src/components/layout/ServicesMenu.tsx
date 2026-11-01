"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { isCurrentPath } from "@/content/routes";
import { cn } from "@/lib/cn";

export function ServicesMenu({
  label,
  items,
  active = false,
}: {
  label: string;
  items: { href: string; label: string }[];
  active?: boolean;
}) {
  const pathname = usePathname();
  const [hoverPath, setHoverPath] = useState<string | null>(null);
  const [pinnedOn, setPinnedOn] = useState<string | null>(null);
  const hover = hoverPath === pathname;
  const pinned = pinnedOn === pathname;
  const open = hover || pinned;
  const ref = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    function onPointer(event: MouseEvent) {
      if (!ref.current?.contains(event.target as Node)) setPinnedOn(null);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setPinnedOn(null);
        setHoverPath(null);
      }
    }
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setHoverPath(pathname)}
      onMouseLeave={() => setHoverPath(null)}
    >
      <button
        type="button"
        className={cn("nav-link gap-1.5", (open || active) && "is-active")}
        aria-expanded={open}
        aria-controls={menuId}
        aria-current={active ? "page" : undefined}
        onClick={() => setPinnedOn((value) => (value === pathname ? null : pathname))}
      >
        {label}
        <svg
          viewBox="0 0 16 16"
          className={cn("size-3.5 transition-transform duration-200", open && "rotate-180")}
          aria-hidden="true"
        >
          <path
            d="M3.5 6.25 8 10.75l4.5-4.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open ? (
        <div id={menuId} className="menu-panel absolute left-0 top-full z-50 w-72 pt-3">
          <ul className="rounded-xl border border-line bg-surface p-1.5 shadow-[0_16px_40px_-24px_rgba(12,27,42,0.55)]">
            {items.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="menu-link"
                  aria-current={isCurrentPath(pathname, item.href) ? "page" : undefined}
                >
                  <span className="font-mono text-[0.68rem] text-accent-hover">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
