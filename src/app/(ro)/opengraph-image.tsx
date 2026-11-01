import { renderOg, ogSize } from "@/lib/og";

export const alt = "Sienaworks — servicii tehnice pentru site-uri";
export const size = ogSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return renderOg(
    "Servicii tehnice pentru site-uri care trebuie să funcționeze.",
    "Reparații, performanță, mentenanță și dezvoltare.",
  );
}
