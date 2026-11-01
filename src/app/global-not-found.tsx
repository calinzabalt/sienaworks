import type { Metadata } from "next";
import Link from "next/link";
import { fontClassName } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Page not found | Sienaworks",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${fontClassName} h-full antialiased`}>
      <body className="flex min-h-full items-center bg-bg px-6 text-ink">
        <main className="mx-auto max-w-lg py-24">
          <p className="kicker">404</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">Page not found</h1>
          <p className="mt-4 leading-relaxed text-ink-soft">
            That address is not a page on this site.
          </p>
          <p className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link className="underline underline-offset-4" href="/">
              English home
            </Link>
            <Link className="underline underline-offset-4" href="/ro">
              Pagina în română
            </Link>
          </p>
        </main>
      </body>
    </html>
  );
}
