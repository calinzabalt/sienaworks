import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { TechnologyList } from "@/components/ui/TechnologyList";
import { CTASection } from "@/components/cta/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/data/site";
import { padIndex } from "@/lib/format";
import { breadcrumbJsonLd } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Boutique WordPress and web development studio led by an experienced developer. WordPress, PHP, JavaScript, React, Next.js, WooCommerce and headless work.",
  path: "/about",
});

const projectTypes = [
  "Custom WordPress websites",
  "WooCommerce stores",
  "Performance work on existing WordPress sites",
  "React and Next.js front-ends",
  "Headless WordPress",
  "White-label work for digital agencies",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <Container className="pb-16 md:pb-20">
        <PageHero
          eyebrow="About"
          title="A boutique development studio, not an agency floor."
          description={`${site.spokenName} is led by an experienced developer working directly with businesses and digital agencies. The work is WordPress-first, with modern front-ends when they are the better tool.`}
        />

        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <figure className="max-w-xs md:max-w-none">
              <div className="relative overflow-hidden border border-line bg-paper-2 aspect-[4/5]">
                <Image
                  src="/images/about/portrait.jpg"
                  alt={`Portrait of the developer behind ${site.spokenName}`}
                  fill
                  sizes="(min-width: 768px) 320px, 80vw"
                  priority
                  className="object-cover object-[center_20%]"
                />
              </div>
            </figure>
          </div>

          <div className="md:col-span-8 space-y-12">
            <section>
              <h2 className="kicker text-ink">Approach</h2>
              <div className="mt-4 max-w-2xl space-y-4 text-[1.05rem] leading-relaxed text-ink-soft">
                <p>
                  Direct communication, custom development, and enough process to
                  keep a project clear — without the overhead of a large team.
                </p>
                <p>
                  Most of the work is WordPress and WooCommerce. When a project
                  needs a modern front-end, that is React, Next.js and, where it
                  fits, headless WordPress.
                </p>
                <p>{site.regionNote}</p>
              </div>
            </section>

            <section>
              <h2 className="kicker text-ink">Technologies</h2>
              <div className="mt-5">
                <TechnologyList items={[...site.technologies]} />
              </div>
            </section>

            <section>
              <h2 className="kicker text-ink">Types of projects</h2>
              <ul className="mt-5 divide-y divide-line border-y border-line max-w-xl">
                {projectTypes.map((item, index) => (
                  <li key={item} className="flex gap-4 py-3.5 text-ink-soft">
                    <span className="font-mono text-[0.6875rem] text-accent pt-1">
                      {padIndex(index)}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/contact" className="w-full sm:w-auto">
                  Start a Project
                </Button>
              </div>
            </section>
          </div>
        </div>
      </Container>
      <CTASection
        title="Have a project in mind?"
        description="Tell us what you're building."
      />
    </>
  );
}
