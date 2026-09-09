/**
 * Architecture for future SEO landing pages.
 *
 * Do not publish these until a real page exists under src/app.
 * When you add a page, move the entry into `publishedSeoPages`
 * so it is included in the sitemap automatically.
 *
 * Planned (not built):
 *  /wordpress-development-agency
 *  /wordpress-developer
 *  /white-label-wordpress-development
 *  /woocommerce-development
 *  /wordpress-performance-optimization
 *  /headless-wordpress-development
 *
 * Planned location pages (not built):
 *  /uk/wordpress-development
 *  /us/wordpress-development
 *  /canada/wordpress-development
 */

export type SeoLandingPage = {
  path: string;
  title: string;
  description: string;
  changeFrequency?: "weekly" | "monthly" | "yearly";
  priority?: number;
};

export const publishedSeoPages: SeoLandingPage[] = [];

export const plannedSeoPages: SeoLandingPage[] = [
  {
    path: "/wordpress-development-agency",
    title: "WordPress Development Agency",
    description: "Boutique WordPress development for businesses and digital agencies.",
  },
  {
    path: "/wordpress-developer",
    title: "WordPress Developer",
    description: "Custom WordPress development — themes, ACF, PHP and JavaScript.",
  },
  {
    path: "/white-label-wordpress-development",
    title: "White-label WordPress Development",
    description: "White-label WordPress and WooCommerce development for digital agencies.",
  },
  {
    path: "/woocommerce-development",
    title: "WooCommerce Development",
    description: "Custom WooCommerce development for product catalogues and checkout.",
  },
  {
    path: "/wordpress-performance-optimization",
    title: "WordPress Performance Optimization",
    description: "Technical WordPress speed work: queries, caching, plugins and Core Web Vitals.",
  },
  {
    path: "/headless-wordpress-development",
    title: "Headless WordPress Development",
    description: "Headless WordPress with React and Next.js front-ends.",
  },
];
