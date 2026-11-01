import Link from "next/link";
import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { chrome, serviceNav } from "@/content/chrome";
import { pathFor } from "@/content/routes";
import { site } from "@/content/site";
import type { Locale } from "@/content/types";
import { CookieSettings } from "@/components/consent/CookieSettings";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";

export function Footer({ locale }: { locale: Locale }) {
  const copy = chrome(locale);
  const year = new Date().getFullYear();
  const company = [
    { href: pathFor("healthCheck", locale), label: copy.health },
    { href: pathFor("pricing", locale), label: copy.pricing },
    { href: pathFor("caseStudies", locale), label: copy.caseStudies },
    { href: pathFor("about", locale), label: copy.about },
    { href: pathFor("contact", locale), label: copy.contact },
  ];
  const legal = [
    { href: pathFor("privacy", locale), label: copy.privacy },
    { href: pathFor("cookies", locale), label: copy.cookies },
    { href: pathFor("terms", locale), label: copy.terms },
  ];

  return (
    <footer className="site-footer mt-auto text-white">
      <Container className="grid gap-12 py-16 md:grid-cols-12 md:gap-10 md:py-20">
        <div className="md:col-span-5">
          <Logo locale={locale} invert />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist">{copy.footerBlurb}</p>
          <a className="footer-mail" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <div className="mt-6">
            <Suspense fallback={null}>
              <LanguageSwitcher locale={locale} onDark />
            </Suspense>
          </div>
        </div>
        <FooterColumn title={copy.footerServices} links={serviceNav(locale)} />
        <FooterColumn title={copy.footerCompany} links={company} />
        <div className="md:col-span-2">
          <FooterColumn title={copy.footerLegal} links={legal} bare />
          <div className="mt-2.5">
            <CookieSettings locale={locale} />
          </div>
        </div>
      </Container>
      <Container className="footer-base">
        © {year} {site.name}. {copy.rights}
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  bare = false,
}: {
  title: string;
  links: { href: string; label: string }[];
  bare?: boolean;
}) {
  const body = (
    <>
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#99f6e4]">{title}</p>
      <ul className="mt-4 grid gap-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="footer-link">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );

  if (bare) return body;

  return <div className="md:col-span-2">{body}</div>;
}
