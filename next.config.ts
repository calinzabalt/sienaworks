import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  serverExternalPackages: ["nodemailer"],
  experimental: {
    globalNotFound: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      { source: "/work", destination: "/case-studies", permanent: true },
      { source: "/work/:slug", destination: "/case-studies", permanent: true },
      { source: "/agency-partners", destination: "/about", permanent: true },
      { source: "/services", destination: "/", permanent: true },
      {
        source: "/services/wordpress-performance",
        destination: "/services/website-performance",
        permanent: true,
      },
      {
        source: "/services/wordpress-development",
        destination: "/services/website-development",
        permanent: true,
      },
      {
        source: "/services/woocommerce-development",
        destination: "/services/website-development",
        permanent: true,
      },
      {
        source: "/services/react-headless-development",
        destination: "/services/custom-development",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
