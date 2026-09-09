import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { TechnologyList } from "@/components/ui/TechnologyList";
import { CTASection } from "@/components/cta/CTASection";
import { ProjectGrid } from "@/components/project/ProjectGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { getProjectsBySlugs } from "@/data/projects";
import type { Service } from "@/data/services";
import { padIndex } from "@/lib/format";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/schema";

function enquiryHref(type: string) {
  return `/contact?type=${encodeURIComponent(type)}`;
}

export function ServicePageLayout({ service }: { service: Service }) {
  const related = getProjectsBySlugs(service.relatedProjectSlugs);

  return (
    <>
      <JsonLd data={serviceJsonLd(service)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ])}
      />
      <Container className="pb-16 md:pb-20">
        <header className="pt-12 md:pt-16 pb-10 md:pb-12">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.title },
            ]}
          />
          <p className="kicker mt-6">{service.navLabel}</p>
          <h1 className="mt-4 font-display text-[2.15rem] sm:text-5xl md:text-[3.35rem] leading-[1.08] tracking-[-0.03em] max-w-4xl text-pretty">
            {service.headline}
          </h1>
          <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-muted">
            {service.lede}
          </p>
          <div className="mt-8">
            <Button href={enquiryHref(service.enquiryType)} className="w-full sm:w-auto">
              {service.ctaLabel}
            </Button>
          </div>
        </header>

        <div className="grid gap-8 border-t border-line py-10 md:grid-cols-[minmax(0,12rem)_minmax(0,1fr)] md:gap-16 md:py-14">
          <h2 className="kicker text-ink">Overview</h2>
          <p className="max-w-2xl text-[1.05rem] leading-relaxed text-ink-soft">
            {service.intro}
          </p>
        </div>

        <div className="border-t border-line py-10 md:py-14">
          <h2 className="kicker text-ink">Capabilities</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {service.capabilities.map((item, index) => (
              <li
                key={item.title}
                className="border border-line p-6 md:p-7"
              >
                <span className="font-mono text-[0.75rem] text-accent">
                  {padIndex(index)}
                </span>
                <h3 className="mt-4 font-display text-xl tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="mt-2 text-muted leading-relaxed">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>

        {service.process ? (
          <div className="border-t border-line py-10 md:py-14">
            <h2 className="kicker text-ink">Process</h2>
            <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {service.process.map((step) => (
                <li key={step.number} className="border-t border-line pt-5">
                  <p className="font-mono text-[0.75rem] text-accent">{step.number}</p>
                  <h3 className="mt-3 font-display text-xl tracking-[-0.02em]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-muted leading-relaxed">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        ) : null}

        <div className="border-t border-line py-10 md:py-14">
          <h2 className="kicker text-ink">Technology</h2>
          <div className="mt-6">
            <TechnologyList items={service.technologies} />
          </div>
        </div>

        {related.length > 0 ? (
          <div className="border-t border-line py-10 md:py-14">
            <h2 className="kicker text-ink">Selected work</h2>
            <div className="mt-8">
              <ProjectGrid projects={related} />
            </div>
          </div>
        ) : null}
      </Container>
      <CTASection
        title="Have a project in mind?"
        description="Tell us what you're building."
        buttonLabel={service.ctaLabel}
        buttonHref={enquiryHref(service.enquiryType)}
      />
    </>
  );
}
