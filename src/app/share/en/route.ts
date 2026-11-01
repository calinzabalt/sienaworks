import { renderOg } from "@/lib/og";

export function GET() {
  return renderOg(
    "Technical website services that keep your business moving.",
    "Fixes, performance, maintenance and development.",
  );
}
