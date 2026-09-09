export type ProjectStatus = "live" | "in-progress";

export type Project = {
  slug: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  gallery: { src: string; alt: string }[];
  featured: boolean;
  status: ProjectStatus;
  liveUrl?: string;
  overview: string;
  challenge: string;
  solution: string;
  contribution: string;
  technologyNotes: string;
  seo: {
    title: string;
    description: string;
  };
};

/**
 * Portfolio entries. Add a new object here and it will appear on
 * /work, the homepage (if featured), the sitemap, and /work/[slug].
 *
 * Do not add metrics unless they come from the project owner.
 */
export const projects: Project[] = [
  {
    slug: "abcrypto",
    title: "ABCrypto",
    description:
      "WordPress membership platform for crypto education — courses, Stripe billing and custom trading tools.",
    category: "WordPress",
    technologies: [
      "WordPress",
      "PHP",
      "ACF",
      "JavaScript",
      "Stripe",
      "Custom plugins",
    ],
    image: "/images/projects/abcrypto.jpg",
    imageAlt:
      "ABCrypto Romania homepage — crypto education platform with club, calculator and account access",
    gallery: [],
    featured: true,
    status: "live",
    liveUrl: "https://abcryptoromania.com/",
    overview:
      "ABCrypto Romania is an education platform: market analysis, a paid club with video courses, a Discord community, and tools for risk calculation, portfolio simulation and a trading journal. The public site is in Romanian.",
    challenge:
      "This is not a brochure WordPress site. Members need accounts, paid access, courses and several custom tools — calculator, simulator and journal — alongside Stripe billing and partner integrations.",
    solution:
      "A custom WordPress build with ACF, PHP and JavaScript, plus custom plugins for the member tools and Stripe subscriptions. Active memberships produce more than 100 monthly recurring sales.",
    contribution:
      "WordPress theme and plugin development, ACF content structure, Stripe subscriptions, user accounts, course access and the custom calculator, simulator and journal integrations.",
    technologyNotes:
      "WordPress, PHP, Advanced Custom Fields, JavaScript, Stripe, custom plugins, member accounts and course access.",
    seo: {
      title: "ABCrypto",
      description:
        "Custom WordPress membership platform for ABCrypto Romania: courses, Stripe subscriptions, ACF and custom trading tools.",
    },
  },
  {
    slug: "montare-panouri",
    title: "Montare Panouri",
    description:
      "Next.js marketing site for solar and battery installation — no database, built for speed.",
    category: "Next.js",
    technologies: ["Next.js", "React", "Performance"],
    image: "/images/projects/montare-panouri.jpg",
    imageAlt:
      "MontarePanouri.ro homepage — solar panel and battery installation lead generation site",
    gallery: [],
    featured: true,
    status: "live",
    liveUrl: "https://montarepanouri.ro/",
    overview:
      "A Romanian lead-generation site for turnkey solar and battery installation, focused on Arad, Timișoara and the west of the country. Services, project gallery, guides and quote forms — no CMS database behind it.",
    challenge:
      "The site needed to rank for local installation queries and convert quote requests, without the weight of WordPress or a database.",
    solution:
      "A Next.js site with no database. Pages, forms and content are in the codebase. Lighthouse Performance, SEO, Accessibility and Best Practices score 100.",
    contribution:
      "Full Next.js build: information architecture, service and location pages, gallery, blog/guides, quote forms and performance work.",
    technologyNotes:
      "Next.js and React, with no database. Lighthouse Performance, SEO and the other categories score 100.",
    seo: {
      title: "Montare Panouri",
      description:
        "Next.js site for MontarePanouri.ro — solar and battery installation, no database. Lighthouse Performance, SEO and related scores at 100.",
    },
  },
  {
    slug: "carsanitar",
    title: "C.A.R. Sanitar",
    description:
      "WordPress site for a credit union, assembled from ACF flexible content blocks.",
    category: "WordPress",
    technologies: ["WordPress", "ACF", "Flexible content", "PHP"],
    image: "/images/projects/carsanitar.jpg",
    imageAlt:
      "C.A.R. Sanitar Râmnicu Sărat homepage — membership, loans and savings association",
    gallery: [],
    featured: true,
    status: "live",
    liveUrl: "https://carsanitar.ro/",
    overview:
      "Website for Asociația C.A.R. Sanitar in Râmnicu Sărat: membership, loans, savings, standard forms and financial-education articles. Editors need to rearrange page sections without a developer.",
    challenge:
      "A service organisation with mixed page types — hero, benefits, process, articles, contact — that had to stay editable in WordPress without locking layout into a rigid theme.",
    solution:
      "A custom WordPress theme driven by ACF flexible content. Pages are built from blocks the client can reorder: services, membership steps, articles and contact.",
    contribution:
      "Custom WordPress theme, ACF flexible content layouts, templates for services, forms and the article listing.",
    technologyNotes:
      "WordPress, PHP and Advanced Custom Fields flexible content.",
    seo: {
      title: "C.A.R. Sanitar",
      description:
        "Custom WordPress site for C.A.R. Sanitar, built with ACF flexible content.",
    },
  },
  {
    slug: "simplevids-ai",
    title: "SimpleVids",
    description:
      "Next.js product for AI short-form video — generation, subtitles and auto-publish.",
    category: "Next.js",
    technologies: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "OpenAI",
      "APIs",
    ],
    image: "/images/projects/simplevids-ai.jpg",
    imageAlt:
      "SimpleVids marketing site — AI generator for TikToks, Shorts and Reels",
    gallery: [],
    featured: true,
    status: "live",
    liveUrl: "https://www.simplevids.ai/",
    overview:
      "SimpleVids is a product, not a brochure: users generate short-form video, add captions and publish to TikTok, YouTube Shorts and Reels. The public site is the product marketing layer; the application sits behind it.",
    challenge:
      "Video generation, subtitles and scheduled publishing need a real application stack — accounts, a database and third-party APIs — not a WordPress theme.",
    solution:
      "A Next.js application with Prisma and PostgreSQL. OpenAI and other APIs handle generation, subtitle work and auto-publish. The marketing site and product share the same stack.",
    contribution:
      "Next.js application work: Prisma/PostgreSQL data layer, OpenAI and video APIs, subtitle generation, auto-publish integrations and the public site.",
    technologyNotes:
      "Next.js, Prisma, PostgreSQL, OpenAI, video-generation APIs, subtitle generation and auto-publish integrations.",
    seo: {
      title: "SimpleVids",
      description:
        "Next.js application for SimpleVids: Prisma, PostgreSQL, OpenAI, video generation, subtitles and auto-publish.",
    },
  },
  {
    slug: "gartdev",
    title: "Gart",
    description:
      "WooCommerce shop from a custom Figma theme — filters, Romanian company checkout, auctions and multilingual.",
    category: "WooCommerce",
    technologies: [
      "WordPress",
      "WooCommerce",
      "ACF",
      "PHP",
      "Multilingual",
    ],
    image: "/images/projects/gartdev-1.jpg",
    imageAlt: "Gart homepage — fashion shop, currently on staging",
    gallery: [
      {
        src: "/images/projects/gartdev-2.jpg",
        alt: "Gart shop collection with active auction products",
      },
      {
        src: "/images/projects/gartdev-3.jpg",
        alt: "Gart about page from the custom WordPress theme",
      },
    ],
    featured: true,
    status: "in-progress",
    liveUrl: "https://gartdev.wpenginepowered.com/en/home/",
    overview:
      "Gart is a fashion shop for retail and B2B, in Romanian and English. The storefront is still on WP Engine staging.",
    challenge:
      "The design already existed in Figma. A catalogue theme would not cover auctions next to regular products, or checkout for Romanian companies that should fill company details automatically instead of a long form.",
    solution:
      "A custom WooCommerce theme built to that file. Editorial pages use ACF flexible content. Auctions are their own product flow. Checkout autocompletes Romanian company billing details.",
    contribution:
      "Theme from Figma, product filters, auction wiring, bilingual storefront and the company autocomplete field at checkout.",
    technologyNotes:
      "WordPress, WooCommerce, PHP and ACF. Custom filters, auctions and multilingual.",
    seo: {
      title: "Gart",
      description:
        "WooCommerce fashion shop from a custom Figma theme: filters, auctions, multilingual and Romanian company checkout. In progress.",
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getProjectsBySlugs(slugs: string[]) {
  return slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is Project => Boolean(project));
}

export function getAllProjectSlugs() {
  return projects.map((project) => project.slug);
}
