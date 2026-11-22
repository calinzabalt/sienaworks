import { renderOg } from "@/lib/og";

// Rendered once at build time (fonts are fetched then), served as a static image.
export const dynamic = "force-static";

export function GET() {
  return renderOg({
    title: "Technical website services that keep your business moving.",
    subtitle: "Fixes, performance, maintenance and development.",
    label: "Spec sheet · Sienaworks",
    status: "Free health check",
  });
}
