import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { footerNav, footerServices } from "@/data/navigation";
import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper border-t border-dark-line">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-12 lg:col-span-5">
            <Logo invert />
            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-dark-muted">
              {site.shortDescription}
            </p>
            <p className="mt-4 text-[0.8125rem] text-dark-muted">
              {site.regionNote}
            </p>
          </div>

          <div className="md:col-span-4 lg:col-span-2">
            <p className="kicker text-dark-muted">Navigation</p>
            <ul className="mt-4 space-y-2">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-block py-1 text-[0.95rem] text-paper/90 transition-colors duration-200 hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-2">
            <p className="kicker text-dark-muted">Services</p>
            <ul className="mt-4 space-y-2">
              {footerServices.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-block py-1 text-[0.95rem] text-paper/90 transition-colors duration-200 hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-3 min-w-0">
            <p className="kicker text-dark-muted">Contact</p>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-block py-1 text-[0.95rem] text-paper/90 transition-colors duration-200 hover:text-paper whitespace-nowrap"
                >
                  {site.email}
                </a>
              </li>
              {site.social.map((item) => {
                const placeholder = !item.href || item.href === "#";
                return (
                  <li key={item.name}>
                    {placeholder ? (
                      <span className="text-[0.95rem] text-dark-muted">
                        {item.name}
                      </span>
                    ) : (
                      <a
                        href={item.href}
                        className="inline-block py-1 text-[0.95rem] text-paper/90 transition-colors duration-200 hover:text-paper"
                        rel="noreferrer"
                        target="_blank"
                      >
                        {item.name}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-dark-line pt-6 text-[0.75rem] text-dark-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. {site.descriptor}.
          </p>
          <Link
            href="/privacy"
            rel="privacy-policy"
            className="transition-colors duration-200 hover:text-paper"
          >
            Privacy
          </Link>
        </div>
      </Container>
    </footer>
  );
}
