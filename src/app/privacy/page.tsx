import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { privacy } from "@/data/privacy";
import { site } from "@/data/site";
import { breadcrumbJsonLd } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Privacy",
  description: `How ${site.spokenName} uses personal data from the contact form and Google Analytics.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy", path: "/privacy" },
        ])}
      />
      <Container className="pb-16 md:pb-20">
        <PageHero
          eyebrow="Privacy"
          title="Privacy notice"
          description={privacy.intro}
          descriptionClassName="max-w-4xl"
        />
        <p className="mb-12 max-w-4xl text-[0.8125rem] text-muted">
          Last updated {privacy.lastUpdated}.
        </p>

        <div className="max-w-4xl space-y-12">
          {privacy.sections.map((section) => (
            <section key={section.title}>
              <h2 className="kicker text-ink">{section.title}</h2>
              <div className="mt-4 space-y-4 text-[1.05rem] leading-relaxed text-ink-soft">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </>
  );
}
