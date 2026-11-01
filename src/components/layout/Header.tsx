import { Suspense } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { chrome, serviceNav } from "@/content/chrome";
import { pathFor } from "@/content/routes";
import type { Locale } from "@/content/types";
import { DesktopNav } from "./DesktopNav";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";

export function Header({ locale }: { locale: Locale }) {
  const copy = chrome(locale);
  const services = serviceNav(locale);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg shadow-[0_10px_30px_-24px_rgba(12,27,42,0.65)]">
      <Container className="flex h-[var(--header-height)] items-center justify-between gap-4">
        <Logo locale={locale} />
        <DesktopNav
          locale={locale}
          label={copy.navLabel}
          servicesLabel={copy.services}
          health={copy.health}
          pricing={copy.pricing}
          caseStudies={copy.caseStudies}
          services={services}
        />
        <div className="hidden items-center gap-3 lg:flex">
          <Suspense fallback={null}>
            <LanguageSwitcher locale={locale} />
          </Suspense>
          <Button href={pathFor("contact", locale)}>{copy.contactCta}</Button>
        </div>
        <MobileNav locale={locale} services={services} />
      </Container>
    </header>
  );
}
