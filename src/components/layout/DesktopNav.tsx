"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isCurrentPath, pathFor } from "@/content/routes";
import type { Locale } from "@/content/types";
import { ServicesMenu } from "./ServicesMenu";

export function DesktopNav({
  locale,
  label,
  servicesLabel,
  health,
  pricing,
  caseStudies,
  services,
}: {
  locale: Locale;
  label: string;
  servicesLabel: string;
  health: string;
  pricing: string;
  caseStudies: string;
  services: { href: string; label: string }[];
}) {
  const pathname = usePathname();
  const links = [
    { href: pathFor("healthCheck", locale), label: health },
    { href: pathFor("pricing", locale), label: pricing },
    { href: pathFor("caseStudies", locale), label: caseStudies },
  ];
  const servicesActive = services.some((item) => isCurrentPath(pathname, item.href));

  return (
    <nav className="hidden items-center gap-7 lg:flex" aria-label={label}>
      <ServicesMenu label={servicesLabel} items={services} active={servicesActive} />
      {links.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="nav-link"
          aria-current={isCurrentPath(pathname, item.href) ? "page" : undefined}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
