import { Analytics } from "@/components/consent/Analytics";
import { CookieConsent } from "@/components/consent/CookieConsent";
import { JsonLd } from "@/components/seo/JsonLd";
import { chrome } from "@/content/chrome";
import type { Locale } from "@/content/types";
import { fontClassName } from "@/lib/fonts";
import { organizationJsonLd, websiteJsonLd } from "@/lib/schema";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Document({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const copy = chrome(locale);

  return (
    <html lang={locale} data-scroll-behavior="smooth" className={`${fontClassName} h-full antialiased`}>
      <body className="flex min-h-full min-w-0 flex-col bg-bg text-ink">
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd(locale)} />
        <a href="#main" className="skip-link">
          {copy.skip}
        </a>
        <Header locale={locale} />
        <main id="main" className="min-w-0 flex-1">
          {children}
        </main>
        <Footer locale={locale} />
        <CookieConsent locale={locale} />
        <Analytics />
      </body>
    </html>
  );
}
