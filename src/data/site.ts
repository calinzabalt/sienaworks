export const site = {
  name: "SIENA",
  spokenName: "Siena",
  legalName: "Siena",
  descriptor: "WordPress & Web Development Studio",
  headline:
    "WordPress & Web Development for Businesses and Digital Agencies",
  lede: "Custom WordPress, WooCommerce and modern web development for businesses that need reliable technical expertise.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sienaworks.com",
  email: "hello@sienaworks.com",
  locale: "en_GB",
  language: "en",
  regionNote: "Working with clients in the UK, US, Canada and Europe.",
  shortDescription:
    "A boutique WordPress and web development studio. Custom builds, WooCommerce, performance work and modern front-ends for businesses and digital agencies.",
  technologies: [
    "WordPress",
    "PHP",
    "JavaScript",
    "React",
    "Next.js",
    "WooCommerce",
    "ACF",
    "Headless WordPress",
    "REST APIs",
  ],
  social: [
    { name: "LinkedIn", href: "#" },
    { name: "GitHub", href: "#" },
    { name: "X", href: "#" },
  ],
} as const;

export type SocialLink = (typeof site.social)[number];
