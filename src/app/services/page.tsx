import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/cta/CTASection";
import { ServiceGrid } from "@/components/service/ServiceGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { services, supportService } from "@/data/services";
import { breadcrumbJsonLd } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Web Development Services",
  description:
    "WordPress development, WooCommerce, WordPress performance, React and headless development, plus ongoing support.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <Container className="pb-16 md:pb-20">
        <PageHero
          eyebrow="Services"
          title="Web Development Services"
          description="WordPress at the centre, with WooCommerce, performance work and modern front-ends when the project needs them."
        />
        <ServiceGrid services={services} />
        <aside className="mt-5 border border-line p-6 md:px-8 md:py-7 md:flex md:items-end md:justify-between md:gap-10">
          <div>
            <p className="font-mono text-[0.75rem] text-accent">05</p>
            <h2 className="mt-3 font-display text-2xl tracking-[-0.02em]">
              {supportService.title}
            </h2>
            <p className="mt-3 max-w-xl text-muted leading-relaxed">
              {supportService.description}
            </p>
          </div>
          <Link
            href={supportService.href}
            className="mt-6 md:mt-0 inline-flex min-h-11 items-center gap-2 text-[0.8125rem] font-medium tracking-wide shrink-0 hover:text-accent transition-colors duration-200"
          >
            Enquire about support
            <span aria-hidden="true">→</span>
          </Link>
        </aside>
      </Container>
      <CTASection />
    </>
  );
}
