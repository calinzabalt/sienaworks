"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isCurrentPath } from "@/content/routes";
import type { Locale } from "@/content/types";
import { ServicesMenu } from "./ServicesMenu";

export function DesktopNav({
  label,
  servicesLabel,
  links,
  services,
}: {
  locale: Locale;
  label: string;
  servicesLabel: string;
  links: { href: string; label: string }[];
  services: { href: string; label: string }[];
}) {
  const pathname = usePathname();
  const servicesActive = services.some((item) => isCurrentPath(pathname, item.href));

  return (
    <nav className="hidden items-center gap-8 lg:flex" aria-label={label}>
      <ServicesMenu label={servicesLabel} items={services} active={servicesActive} />
      {links.map((item) => {
        const current = isCurrentPath(pathname, item.href) || pathname.startsWith(`${item.href}/`);
        return (
          <Link key={item.href} href={item.href} className="nav-link" aria-current={current ? "page" : undefined}>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
