import type { ProjectType } from "./contact";

export type ServiceCapability = {
  title: string;
  description: string;
};

export type ServiceProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  title: string;
  navLabel: string;
  cardDescription: string;
  headline: string;
  lede: string;
  intro: string;
  capabilities: ServiceCapability[];
  technologies: string[];
  relatedProjectSlugs: string[];
  process?: ServiceProcessStep[];
  ctaLabel: string;
  enquiryType: ProjectType;
  seo: {
    title: string;
    description: string;
  };
};

/**
 * Service catalogue. Add a new object here, then it appears on /services,
 * in the sitemap, and at /services/[slug] via generateStaticParams.
 */
export const services: Service[] = [
  {
    slug: "wordpress-development",
    title: "WordPress Development",
    navLabel: "WordPress",
    cardDescription:
      "Custom themes, ACF, PHP and JavaScript — new sites, existing sites and integrations.",
    headline: "Custom WordPress development without unnecessary complexity.",
    lede: "New websites, existing websites, custom functionality, integrations and performance improvements.",
    intro:
      "WordPress work that is written for the project: custom themes, structured content with ACF, PHP and JavaScript, and careful changes to sites that are already live.",
    capabilities: [
      {
        title: "Custom WordPress development",
        description: "Themes and functionality built for the brief, not stacked with extra plugins.",
      },
      {
        title: "Custom themes & ACF",
        description: "Editable content with Advanced Custom Fields and a theme that matches the design.",
      },
      {
        title: "PHP & JavaScript",
        description: "Server-side logic and front-end behaviour where the project actually needs it.",
      },
      {
        title: "API integrations",
        description: "Connecting WordPress to third-party services, CRMs and internal tools.",
      },
      {
        title: "Existing website improvements",
        description: "Refactoring, new features and cleanup on WordPress sites already in production.",
      },
      {
        title: "WordPress migrations",
        description: "Moving sites between hosts or into a cleaner WordPress setup, with care for URLs and content.",
      },
    ],
    technologies: ["WordPress", "PHP", "ACF", "JavaScript", "REST API"],
    relatedProjectSlugs: ["abcrypto", "carsanitar", "gartdev"],
    ctaLabel: "Start a Project",
    enquiryType: "WordPress Development",
    seo: {
      title: "WordPress Development",
      description:
        "Custom WordPress development: themes, ACF, PHP, JavaScript, integrations, migrations and improvements to existing sites.",
    },
  },
  {
    slug: "woocommerce-development",
    title: "WooCommerce Development",
    navLabel: "WooCommerce",
    cardDescription:
      "Custom product behaviour, checkout, integrations and work on existing WooCommerce stores.",
    headline: "WooCommerce that fits the way you actually sell.",
    lede: "Custom product functionality, checkout, integrations and performance work on new or existing stores.",
    intro:
      "WooCommerce development for shops that have outgrown a default setup — or never fitted one. Custom features, checkout changes, integrations and practical performance work.",
    capabilities: [
      {
        title: "Custom WooCommerce",
        description: "Product types, pricing rules and store behaviour written for the catalogue you have.",
      },
      {
        title: "Checkout",
        description: "Checkout fields, flows and validation that match how orders should be placed.",
      },
      {
        title: "Integrations",
        description: "Shipping, ERP, CRM and other services connected to WooCommerce.",
      },
      {
        title: "Custom features",
        description: "Store functionality that plugins only approximate — built as proper WordPress code.",
      },
      {
        title: "Performance",
        description: "Leaner product queries, fewer bottlenecks at scale, and a faster storefront.",
      },
      {
        title: "Existing store improvements",
        description: "Work on WooCommerce sites already live: bugs, features and cleanup.",
      },
    ],
    technologies: ["WooCommerce", "WordPress", "PHP", "JavaScript"],
    relatedProjectSlugs: ["gartdev"],
    ctaLabel: "Discuss Your WooCommerce Project",
    enquiryType: "WooCommerce",
    seo: {
      title: "WooCommerce Development",
      description:
        "Custom WooCommerce development: product functionality, checkout, integrations, performance and improvements to existing stores.",
    },
  },
  {
    slug: "wordpress-performance",
    title: "WordPress Performance",
    navLabel: "Performance",
    cardDescription:
      "Speed work on WordPress: queries, caching, plugins, Core Web Vitals and the server stack.",
    headline: "Make WordPress faster.",
    lede: "Technical performance work: database, caching, queries, plugins, Core Web Vitals and the front-end.",
    intro:
      "WordPress is often slow because of queries, plugins, templates and the server — not because “it needs a cache plugin”. This is an engineering pass, not a theme swap.",
    capabilities: [
      {
        title: "WordPress speed optimisation",
        description: "Finding what actually costs time on page load and server response.",
      },
      {
        title: "Database & query optimisation",
        description: "Heavy queries, autoloaded options and template logic that does too much work.",
      },
      {
        title: "Caching",
        description: "Page, object and server caching that fits the host and the site — not a stack of conflicting plugins.",
      },
      {
        title: "Plugin analysis",
        description: "Identifying plugins that are expensive, redundant or poorly configured.",
      },
      {
        title: "Core Web Vitals",
        description: "Front-end and server work aimed at LCP, INP and CLS — without promising a score.",
      },
      {
        title: "PHP, server & frontend",
        description: "PHP execution, hosting constraints, assets, images and CSS/JS weight.",
      },
    ],
    technologies: ["WordPress", "PHP", "MySQL", "Caching", "Core Web Vitals"],
    relatedProjectSlugs: [],
    process: [
      {
        number: "01",
        title: "Audit",
        description: "Measure the site as it is: templates, queries, plugins, assets and hosting.",
      },
      {
        number: "02",
        title: "Identify bottlenecks",
        description: "Separate what is slow from what merely looks messy.",
      },
      {
        number: "03",
        title: "Implement improvements",
        description: "Change the code, configuration and stack where it will actually help.",
      },
      {
        number: "04",
        title: "Measure results",
        description: "Re-test against the same conditions. No guaranteed PageSpeed scores.",
      },
    ],
    ctaLabel: "Start a Project",
    enquiryType: "Performance",
    seo: {
      title: "WordPress Performance",
      description:
        "WordPress speed optimisation: database, caching, query optimisation, plugin analysis, Core Web Vitals and server-side work.",
    },
  },
  {
    slug: "react-headless-development",
    title: "React & Headless Development",
    navLabel: "React / Headless",
    cardDescription:
      "React, Next.js and headless WordPress — CMS flexibility with a modern frontend.",
    headline: "CMS flexibility with a modern frontend.",
    lede: "React, Next.js and headless WordPress. Content in WordPress, or a standalone front-end talking to APIs.",
    intro:
      "When a conventional WordPress theme is the wrong fit, the studio builds React and Next.js front-ends — including headless WordPress — and applications that consume REST or external APIs.",
    capabilities: [
      {
        title: "React & Next.js",
        description: "Modern front-end applications with a clear component structure.",
      },
      {
        title: "Headless WordPress",
        description: "WordPress as the CMS, with a separate React/Next.js front-end.",
      },
      {
        title: "REST APIs",
        description: "WordPress REST API and other HTTP APIs as the data layer.",
      },
      {
        title: "External APIs",
        description: "Third-party services wired into the application, not just the marketing site.",
      },
      {
        title: "Modern frontend applications",
        description: "Product UIs and marketing fronts that need more than a PHP theme.",
      },
    ],
    technologies: ["React", "Next.js", "WordPress", "REST APIs", "JavaScript"],
    relatedProjectSlugs: ["simplevids-ai", "montare-panouri"],
    ctaLabel: "Start a Project",
    enquiryType: "React / Headless",
    seo: {
      title: "React & Headless Development",
      description:
        "React, Next.js and headless WordPress development. CMS flexibility with a modern frontend, REST APIs and external integrations.",
    },
  },
];

export const supportService = {
  title: "Ongoing Development & Support",
  description:
    "Retainers and project-based work after launch: fixes, new features, WordPress care and technical support.",
  href: "/contact?type=Ongoing%20Support",
} as const;

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs() {
  return services.map((service) => service.slug);
}
