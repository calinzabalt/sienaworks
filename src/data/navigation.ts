export const mainNav = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/agency-partners", label: "For Agencies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerNav = mainNav;

export const footerServices = [
  { href: "/services/wordpress-development", label: "WordPress" },
  { href: "/services/woocommerce-development", label: "WooCommerce" },
  { href: "/services/wordpress-performance", label: "Performance" },
  { href: "/services/react-headless-development", label: "React / Headless" },
] as const;

export const cta = {
  label: "Start a Project",
  href: "/contact",
} as const;
