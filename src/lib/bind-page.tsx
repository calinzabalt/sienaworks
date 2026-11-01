import { PageView } from "@/components/pages/PageView";
import type { Locale, RouteId } from "@/content/types";
import { createMetadata } from "@/lib/seo";

export function bindPage(routeId: RouteId, locale: Locale) {
  return {
    generateMetadata() {
      return createMetadata({ locale, routeId });
    },
    Page() {
      return <PageView routeId={routeId} locale={locale} />;
    },
  };
}
