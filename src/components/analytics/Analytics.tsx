"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  ANALYTICS_CONSENT_KEY,
  getGaMeasurementId,
  type AnalyticsConsent,
} from "@/lib/analytics";

type ConsentState = AnalyticsConsent | "unknown";

export function Analytics() {
  const measurementId = getGaMeasurementId();
  const [consent, setConsent] = useState<ConsentState>("unknown");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
    if (stored === "granted" || stored === "denied") {
      setConsent(stored);
    }
    setReady(true);
  }, []);

  function choose(next: AnalyticsConsent) {
    window.localStorage.setItem(ANALYTICS_CONSENT_KEY, next);
    setConsent(next);
  }

  if (!measurementId) return null;

  return (
    <>
      {consent === "granted" ? <GoogleAnalytics id={measurementId} /> : null}
      {ready && consent === "unknown" ? (
        <ConsentBanner
          onAccept={() => choose("granted")}
          onReject={() => choose("denied")}
        />
      ) : null}
    </>
  );
}

function GoogleAnalytics({ id }: { id: string }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}

function ConsentBanner({
  onAccept,
  onReject,
}: {
  onAccept: () => void;
  onReject: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-banner-title"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-dark-line bg-ink text-paper pb-[env(safe-area-inset-bottom,0px)]"
    >
      <Container className="py-5 md:py-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-10">
          <div className="max-w-xl">
            <p id="cookie-banner-title" className="kicker text-dark-muted">
              Analytics
            </p>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-paper/90">
              Optional Google Analytics cookies help us see which pages are
              useful. The site works without them.{" "}
              <Link
                href="/privacy"
                className="underline decoration-dark-line underline-offset-4 hover:text-paper"
              >
                Privacy notice
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center shrink-0">
            <Button
              type="button"
              variant="invert"
              className="w-full sm:w-auto"
              onClick={onAccept}
            >
              Accept
            </Button>
            <button
              type="button"
              onClick={onReject}
              className="inline-flex min-h-11 items-center justify-center px-4 text-[0.8125rem] font-medium tracking-wide text-paper/80 transition-colors duration-200 hover:text-paper"
            >
              Reject
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
