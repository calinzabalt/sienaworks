# SIENA — WordPress & Web Development Studio

Boutique studio website. Next.js (App Router), TypeScript, Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

| File | Purpose |
| --- | --- |
| `src/data/site.ts` | Brand name, email, URL, social links |
| `src/data/projects.ts` | Portfolio + case studies (`/work/[slug]`) |
| `src/data/services.ts` | Services (`/services/[slug]`) |
| `src/data/agency.ts` | Agency partners page |
| `src/data/seo-pages.ts` | Future SEO landing pages (not published) |
| `public/images/projects/` | Project screenshots |
| `public/images/services/` | Service image placeholders |

Set `NEXT_PUBLIC_SITE_URL` to `https://sienaworks.com` in production.

Contact form: set `BREVO_SMTP_USER` and `BREVO_SMTP_PASS` (see `.env.example`). Google Analytics is the gtag snippet in `src/app/layout.tsx` (`G-21EY3FFRM7`).

Replace social `href` values in `src/data/site.ts` when profiles are ready.
