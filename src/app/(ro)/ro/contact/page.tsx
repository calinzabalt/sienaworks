import { ContactPage } from "@/components/pages/ContactPage";
import { isEnquiryService } from "@/lib/enquiry";
import { createMetadata } from "@/lib/seo";

export function generateMetadata() {
  return createMetadata({ locale: "ro", routeId: "contact" });
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ service?: string | string[] }>;
}) {
  const params = await searchParams;
  const value = Array.isArray(params.service) ? params.service[0] : params.service;
  const service = value && isEnquiryService(value) ? value : undefined;
  return <ContactPage locale="ro" service={service} />;
}
