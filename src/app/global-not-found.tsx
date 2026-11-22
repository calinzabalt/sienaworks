import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { fontClassName } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Page not found | Sienaworks",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${fontClassName} h-full antialiased`}>
      <body className="relative flex min-h-full items-center overflow-hidden bg-bg px-4 text-ink sm:px-6">
        <div className="dots-bg" aria-hidden="true" />
        <main className="relative mx-auto w-full max-w-[1240px] py-24">
          <div className="mono flex flex-wrap items-center gap-x-7 gap-y-2 border-y border-b-line border-t-ink py-3.5 text-xs uppercase tracking-[0.1em] text-soft">
            <span>Error · No. 404</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-2.5 py-1 tracking-[0.04em] text-accent-hover sm:ml-auto">
              ● Not found · Pagina nu există
            </span>
          </div>
          <h1 className="disp m-0 mt-12 max-w-3xl text-[3rem] leading-[0.98] tracking-[-0.04em] sm:text-7xl">
            This page <span className="mark-hl">does not exist</span>.
          </h1>
          <p className="lead mt-6 max-w-xl text-[1.15rem] text-ink-soft">
            The address may be old or mistyped. Start from the homepage, or ask for a free website check.
          </p>
          <p className="mt-2 max-w-xl text-ink-soft" lang="ro">
            Adresa poate fi veche sau greșită. Începe de pe prima pagină sau cere o verificare gratuită.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/ro">Pagina principală</Button>
            <Button href="/" variant="secondary">
              English homepage
            </Button>
            <Button href="/ro/verificare-gratuita-site" variant="ghost">
              Verificare gratuită
            </Button>
          </div>
        </main>
      </body>
    </html>
  );
}
