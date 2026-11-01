import { renderOg } from "@/lib/og";

export function GET() {
  return renderOg(
    "Servicii tehnice pentru site-uri care trebuie să funcționeze.",
    "Reparații, performanță, mentenanță și dezvoltare.",
  );
}
