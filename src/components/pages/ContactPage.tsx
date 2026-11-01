import { ContactForm } from "@/components/contact/ContactForm";
import { ContactMotion } from "@/components/ui/ContactMotion";
import { PageHero } from "@/components/ui/PageHero";
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
      ? "Descrie problema sau proiectul. Îți răspundem pe e-mail."
      : "Describe the issue or the project. We reply by email.";

  return (
    <>
      <PageHero eyebrow={locale === "ro" ? "Contact" : "Contact"} title={title} description={intro} />
      <div className="mx-auto grid w-full max-w-6xl items-start gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-12">
        <div className="order-2 min-w-0 lg:order-1">
          <ContactMotion locale={locale} />
        </div>
        <div className="order-1 min-w-0 lg:order-2">
          <ContactForm locale={locale} service={service} />
        </div>
      </div>
    </>
  );
}
