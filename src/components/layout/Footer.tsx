import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { chrome, serviceNav } from "@/content/chrome";
import { pathFor } from "@/content/routes";
import { operator, site } from "@/content/site";
import type { Locale } from "@/content/types";
import { CookieSettings } from "@/components/consent/CookieSettings";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";

export function Footer({ locale }: { locale: Locale }) {
  const copy = chrome(locale);
  const year = new Date().getFullYear();
  const company = [
    { href: pathFor("healthCheck", locale), label: copy.health },
    { href: pathFor("caseStudies", locale), label: copy.caseStudies },
    { href: pathFor("pricing", locale), label: copy.pricing },
    { href: pathFor("about", locale), label: copy.about },
    { href: pathFor("contact", locale), label: copy.contact },
  ];
  const legal = [
    { href: pathFor("privacy", locale), label: copy.privacy },
    { href: pathFor("cookies", locale), label: copy.cookies },
    { href: pathFor("terms", locale), label: copy.terms },
  ];

  return (
    <footer className="mt-auto overflow-hidden border-t border-line">
      <Container className="grid gap-12 pt-16 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <Logo locale={locale} />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">{copy.footerBlurb}</p>
          <p className="mono mt-5 grid gap-1 text-[0.8rem]">
            <a className="hover:text-accent" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a className="hover:text-accent" href={site.whatsapp}>
              WhatsApp {site.phone}
            </a>
          </p>
          <div className="mt-5">
            <LanguageSwitcher locale={locale} />
          </div>
        </div>
        <FooterColumn className="md:col-span-3" title={copy.footerServices} links={serviceNav(locale)} />
        <FooterColumn className="md:col-span-2" title={copy.footerCompany} links={company} />
        <div className="md:col-span-2">
          <FooterColumn title={copy.footerLegal} links={legal} />
          <div className="mt-2.5">
            <CookieSettings locale={locale} />
          </div>
        </div>
      </Container>
      <Container className="@container">
        {/* Decorative: the text comes from CSS, so it is not read out or checked as body text. */}
        <div className="wordmark mt-12" data-text={site.name} aria-hidden="true" />
      </Container>
      <Container>
        <div className="mono flex flex-col gap-1 border-t border-line py-6 text-xs text-soft sm:flex-row sm:justify-between">
          <span>
            © {year} {site.name}. {copy.rights}
          </span>
          <span>
            {operator.legalName} · CUI {operator.cui}
          </span>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  className,
}: {
  title: string;
  links: { href: string; label: string }[];
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="label-mono m-0 text-[0.68rem] text-soft">{title}</p>
      <ul className="m-0 mt-4 grid list-none gap-2.5 p-0">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="footer-link">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
