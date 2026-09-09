import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/data/site";
import { breadcrumbJsonLd } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Start a WordPress, WooCommerce, performance or React project — or discuss an agency partnership.",
  path: "/contact",
});

export default async function ContactPage({
  searchParams,
}: PageProps<"/contact">) {
  const params = await searchParams;
  const type = typeof params.type === "string" ? params.type : undefined;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <Container className="pb-16 md:pb-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16 md:items-start">
          <div className="md:col-span-5">
            <PageHero
              className="pt-12 md:pt-16 pb-6 md:pb-0"
              eyebrow="Contact"
              title="Let's talk about your project."
              description="Brief, designs, a current site, or a rough idea — enough to start a conversation."
            />
            <div className="space-y-3 text-[0.95rem] text-muted md:mt-8">
              <p>
                Email{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="text-ink underline decoration-line underline-offset-4 break-all"
                >
                  {site.email}
                </a>
              </p>
              <p>{site.regionNote}</p>
            </div>
          </div>
          <div className="md:col-span-7 md:pt-16">
            <ContactForm defaultProjectType={type} />
          </div>
        </div>
      </Container>
    </>
  );
}
