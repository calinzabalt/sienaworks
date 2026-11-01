import { renderOg, ogSize } from "@/lib/og";

export const alt = "Sienaworks — technical website services";
export const size = ogSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return renderOg(
    "Technical website services that keep your business moving.",
    "Fixes, performance, maintenance and development.",
  );
}
