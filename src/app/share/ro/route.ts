import { renderOg } from "@/lib/og";

// Rendered once at build time (fonts are fetched then), served as a static image.
export const dynamic = "force-static";

export function GET() {
  return renderOg({
    title: "Servicii tehnice pentru site-uri care trebuie să funcționeze.",
    subtitle: "Reparații, performanță, mentenanță și dezvoltare.",
    label: "Fișa tehnică · Sienaworks",
    status: "Verificare gratuită",
  });
}
