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
    <header className="site-header sticky top-0 z-40">
      <Container className="flex h-[var(--header-height)] items-center justify-between gap-4">
        <Logo locale={locale} />
        <DesktopNav
          locale={locale}
          label={copy.navLabel}
          servicesLabel={copy.services}
          links={[
            { href: pathFor("caseStudies", locale), label: copy.caseStudies },
            { href: pathFor("pricing", locale), label: copy.pricing },
            { href: pathFor("about", locale), label: copy.about },
            { href: pathFor("contact", locale), label: copy.contact },
          ]}
          services={services}
        />
        <div className="hidden items-center gap-5 lg:flex">
          <LanguageSwitcher locale={locale} />
          <Button href={pathFor("healthCheck", locale)} variant="ink" arrow={false} className="min-h-11 px-[1.1rem] text-sm">
            {copy.health}
          </Button>
        </div>
        <MobileNav locale={locale} services={services} />
      </Container>
    </header>
  );
}
