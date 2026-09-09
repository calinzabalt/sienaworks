import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/cta/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { agency } from "@/data/agency";
import { site } from "@/data/site";
import { breadcrumbJsonLd } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Agency Partners",
  description: agency.lede,
  path: "/agency-partners",
});

const enquiryHref = "/contact?type=Agency%20Partnership";

export default function AgencyPartnersPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Agency Partners", path: "/agency-partners" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "White-label WordPress development for agencies",
          description: agency.lede,
          url: `${site.url.replace(/\/$/, "")}/agency-partners`,
          provider: {
            "@type": "Organization",
            name: site.legalName,
            url: site.url,
          },
          audience: {
            "@type": "Audience",
            audienceType: "Digital agencies",
          },
          serviceType: "White-label web development",
        }}
      />

      <Container>
        <PageHero eyebrow="For agencies" title={agency.headline} description={agency.lede}>
          <Button href={enquiryHref} className="w-full sm:w-auto">
            {agency.ctaLabel}
          </Button>
        </PageHero>

        <div className="grid gap-8 border-t border-line py-10 md:grid-cols-[minmax(0,12rem)_minmax(0,1fr)] md:gap-16 md:py-14">
          <h2 className="kicker text-ink">How it works</h2>
          <div className="max-w-2xl space-y-5 text-[1.05rem] leading-relaxed text-ink-soft">
            <p>{agency.intro}</p>
            <p>{agency.why}</p>
          </div>
        </div>
      </Container>

      <section className="bg-ink text-paper">
        <Container className="py-16 md:py-20">
          <p className="kicker text-dark-muted">What we take on</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl tracking-[-0.03em]">
            White-label development, as capacity.
          </h2>
          <ul className="mt-10 grid sm:grid-cols-2 border-b border-dark-line">
            {agency.services.map((item, index) => (
              <li
                key={item}
                className="flex gap-4 border-t border-dark-line py-4"
              >
                <span className="font-mono text-[0.6875rem] text-accent shrink-0 pt-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[1.02rem]">{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Container>
        <div className="py-16 md:py-20">
          <p className="kicker text-ink">Process</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl tracking-[-0.03em]">
            Four steps. Then delivery.
          </h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {agency.process.map((step) => (
              <li key={step.number} className="border-t border-line pt-5">
                <p className="font-display text-3xl text-accent/80 tracking-[-0.03em]">
                  {step.number}
                </p>
                <h3 className="mt-4 text-lg tracking-tight">{step.title}</h3>
                <p className="mt-2 text-muted leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>

      <CTASection
        title="Need development capacity?"
        description={`White-label WordPress and web development for agencies. ${site.regionNote}`}
        buttonLabel={agency.ctaLabel}
        buttonHref={enquiryHref}
      />
    </>
  );
}
