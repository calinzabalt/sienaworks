import type { Locale, RouteId } from "@/content/types";
import { AboutPage } from "./AboutPage";
import { CaseStudiesPage } from "./CaseStudiesPage";
import { HealthCheckPage } from "./HealthCheckPage";
import { HomePage } from "./HomePage";
import { LegalPage } from "./LegalPage";
import { PricingPage } from "./PricingPage";
import { ServicePageView } from "./ServicePageView";

const serviceRoutes = {
  performance: "performance",
  fix: "fix",
  maintenance: "maintenance",
  development: "development",
  custom: "custom",
} as const;

export function PageView({ routeId, locale }: { routeId: RouteId; locale: Locale }) {
  if (routeId === "home") return <HomePage locale={locale} />;
  if (routeId in serviceRoutes) {
    return (
      <ServicePageView
        locale={locale}
        id={serviceRoutes[routeId as keyof typeof serviceRoutes]}
      />
    );
  }
  if (routeId === "pricing") return <PricingPage locale={locale} />;
  if (routeId === "about") return <AboutPage locale={locale} />;
  if (routeId === "healthCheck") return <HealthCheckPage locale={locale} />;
  if (routeId === "caseStudies") return <CaseStudiesPage locale={locale} />;
  if (routeId === "privacy") return <LegalPage locale={locale} kind="privacy" />;
  if (routeId === "cookies") return <LegalPage locale={locale} kind="cookies" />;
  if (routeId === "terms") return <LegalPage locale={locale} kind="terms" />;
  return null;
}
