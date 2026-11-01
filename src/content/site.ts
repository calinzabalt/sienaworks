export const site = {
  name: "Sienaworks",
  email: "hello@sienaworks.com",
  phone: "+40 740 691 940",
  whatsapp: "https://wa.me/40740691940",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sienaworks.com",
  positioning: "Technical website services that keep your business moving.",
} as const;

export const operator = {
  legalName: "Cozma Viorel-Călin PFA",
  form: "PFA",
  cui: "41208077",
  registry: "F2/575/2019",
  seat: "Sat Zăbalț, comuna Ususău, județul Arad, România",
} as const;

export function absoluteUrl(path: string) {
  const base = site.url.replace(/\/$/, "");
  if (path === "/") return `${base}/`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
