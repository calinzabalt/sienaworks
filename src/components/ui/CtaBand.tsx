import { Button } from "./Button";
import { Container } from "./Container";
import { pathFor } from "@/content/routes";
import type { Locale } from "@/content/types";
import { keepHyphens } from "@/lib/text";

const defaults = {
  en: {
    kicker: "Next step",
    title: "Not sure what your website needs?",
    text: "Tell us what is happening, or start with a free website health check. We will help you understand the next practical step.",
    primary: "Check My Website",
    secondary: "Contact Sienaworks",
  },
  ro: {
    kicker: "Următorul pas",
    title: "Nu știi de unde să începi?",
    text: "Spune-ne ce problemă ai sau începe cu o verificare tehnică gratuită. Te ajutăm să înțelegi care este următorul pas.",
    primary: "Verifică gratuit site-ul",
    secondary: "Contactează Sienaworks",
  },
} as const;

/** Dark blueprint panel with crosshairs: the closing call to action. */
export function CtaBand({
  locale,
  kicker,
  title,
  text,
  primary,
  secondary,
}: {
  locale: Locale;
  kicker?: string;
  title?: string;
  text?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  const copy = defaults[locale];
  const first = primary ?? { label: copy.primary, href: pathFor("healthCheck", locale) };
  const second = secondary ?? { label: copy.secondary, href: pathFor("contact", locale) };

  return (
    <section className="pb-20 md:pb-24">
      <Container>
        <div className="dark-panel relative overflow-hidden rounded-[1.75rem] px-6 py-14 sm:px-12 md:px-16 md:py-20">
          <div className="grid-bg-dark" aria-hidden="true" />
          <span className="cross left-6 top-6" aria-hidden="true" />
          <span className="cross right-6 top-6" aria-hidden="true" />
          <span className="cross bottom-6 left-6" aria-hidden="true" />
          <span className="cross bottom-6 right-6" aria-hidden="true" />
          <div className="relative grid items-end gap-10 lg:grid-cols-[minmax(0,1.2fr)_auto]">
            <div>
              <p className="label-mono m-0 text-mint">{kicker ?? copy.kicker}</p>
              <h2 className="disp mt-4 max-w-3xl text-4xl leading-[1.02] text-white md:text-[3.75rem]">
                {keepHyphens(title ?? copy.title)}
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#b8c1cc]">{text ?? copy.text}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Button href={first.href} variant="inverse">
                {first.label}
              </Button>
              <Button href={second.href} variant="outline" arrow={false}>
                {second.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
