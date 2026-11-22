import { ContactAside } from "@/components/contact/ContactAside";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { chrome } from "@/content/chrome";
import { pathFor } from "@/content/routes";
import type { EnquiryService } from "@/lib/enquiry";
import type { Locale } from "@/content/types";

export function ContactPage({
  locale,
  service,
}: {
  locale: Locale;
  service?: EnquiryService;
}) {
  const title = locale === "ro" ? "Spune-ne ce se întâmplă." : "Tell us what is happening.";
  const intro =
    locale === "ro"
      ? "Descrie problema sau proiectul. Poți scrie pe WhatsApp sau pe e-mail."
      : "Describe the issue or the project. You can write on WhatsApp or by email.";

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={title}
        description={intro}
        crumbs={[{ label: chrome(locale).home, href: pathFor("home", locale) }, { label: "Contact" }]}
      />
      <div className="mx-auto grid w-full max-w-[1240px] items-start gap-10 px-5 pb-24 pt-4 sm:px-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-14">
        <div className="min-w-0">
          <ContactAside locale={locale} />
        </div>
        <div className="min-w-0">
          <ContactForm locale={locale} service={service} />
        </div>
      </div>
    </>
  );
}
