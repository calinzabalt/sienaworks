import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading, TextLink } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/cta/CTASection";
import { ProjectGrid } from "@/components/project/ProjectGrid";
import { ServiceGrid } from "@/components/service/ServiceGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { agency } from "@/data/agency";
import { getFeaturedProjects } from "@/data/projects";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { padIndex } from "@/lib/format";
import { professionalServiceJsonLd } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...createMetadata({
    title: `${site.name} — ${site.descriptor}`,
    description: site.lede,
    path: "/",
  }),
  title: {
    absolute: `${site.name} — ${site.descriptor}`,
  },
};

const reasons = [
  {
    title: "Custom development",
    text: "Built around the project — not a generic theme with extra plugins stacked on top.",
  },
  {
    title: "Performance-focused",
    text: "Attention to queries, assets and the server, not just how the site looks in a browser.",
  },
  {
    title: "Direct communication",
    text: "You work with the developer doing the work. No account layers.",
  },
  {
    title: "Flexible project support",
    text: "New builds, existing sites, overflow work and retainers.",
  },
  {
    title: "Long-term partnerships",
    text: "Available after launch for improvements, care and the next piece of work.",
  },
];

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      <JsonLd data={professionalServiceJsonLd()} />

      <section className="relative border-b border-line">
        <Container className="pt-16 pb-16 md:pt-28 md:pb-24">
          <p className="kicker">{site.descriptor}</p>
          <h1 className="mt-6 font-display text-[2.35rem] sm:text-[3.4rem] md:text-[4.4rem] lg:text-[5rem] leading-[1.05] sm:leading-[0.98] tracking-[-0.035em] max-w-5xl text-pretty">
            {site.headline}
          </h1>
          <p className="mt-7 max-w-xl text-[1.05rem] leading-relaxed text-muted">
            {site.lede}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" className="w-full sm:w-auto">
              Start a Project
            </Button>
            <Button href="/work" variant="secondary" className="w-full sm:w-auto">
              View Our Work
            </Button>
          </div>
          <p className="mt-10 text-[0.8125rem] text-muted">{site.regionNote}</p>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionHeading
            kicker="Portfolio"
            title="Selected work"
            action={<TextLink href="/work">All projects</TextLink>}
          />
          <ProjectGrid projects={featured} featuredFirst />
        </Container>
      </Section>

      <Section className="border-y border-line bg-paper-2/60">
        <Container>
          <SectionHeading kicker="What we do" title="Services" />
          <ServiceGrid services={services} />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-4 md:sticky md:top-24 md:self-start">
              <p className="kicker">Approach</p>
              <h2 className="mt-3 font-display text-3xl md:text-[2.6rem] leading-[1.1] tracking-[-0.03em]">
                Why work with us
              </h2>
            </div>
            <ol className="md:col-span-8 min-w-0">
              {reasons.map((reason, index) => (
                <li
                  key={reason.title}
                  className="grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-1 border-t border-line py-6 md:grid-cols-[3.5rem_minmax(0,13rem)_minmax(0,1fr)] md:gap-8 md:py-7 last:border-b"
                >
                  <span className="font-mono text-[0.75rem] text-accent pt-1">
                    {padIndex(index)}
                  </span>
                  <h3 className="text-[1.05rem] tracking-tight">{reason.title}</h3>
                  <p className="col-start-2 md:col-start-auto text-muted leading-relaxed">
                    {reason.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <section className="bg-ink text-paper border-t border-ink">
        <Container className="py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <p className="kicker text-dark-muted">For agencies</p>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.08] tracking-[-0.03em] max-w-xl">
                Need additional WordPress development capacity?
              </h2>
              <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-dark-muted">
                White-label WordPress, WooCommerce and technical development for
                digital agencies. You keep the client. We take the build.
              </p>
              <div className="mt-8">
                <Button href="/agency-partners" variant="invert" className="w-full sm:w-auto">
                  Agency Partnerships
                </Button>
              </div>
            </div>
            <ul className="lg:col-span-6 grid sm:grid-cols-2 border-b border-dark-line">
              {agency.services.map((item, index) => (
                <li
                  key={item}
                  className="flex gap-4 border-t border-dark-line py-4"
                >
                  <span className="font-mono text-[0.6875rem] text-accent shrink-0 pt-1">
                    {padIndex(index)}
                  </span>
                  <span className="text-[0.98rem] text-paper/90 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
