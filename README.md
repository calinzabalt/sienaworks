# Sienaworks

Technical website services site. Next.js (App Router), TypeScript, Tailwind CSS. English is the default language. Romanian lives under `/ro`.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

Copy `.env.example` to `.env.local`. Variable names are documented there. Do not commit secrets.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL. Use `https://sienaworks.com` in production |
| `BREVO_SMTP_HOST` / `BREVO_SMTP_PORT` | Brevo SMTP host and port |
| `BREVO_SMTP_USER` / `BREVO_SMTP_PASS` | Brevo SMTP login |
| `CONTACT_FROM_EMAIL` | Sender, default `hello@sienaworks.com` |
| `CONTACT_TO_EMAIL` | Inbox for every form, default `hello@sienaworks.com` |
| `CONTACT_CC_EMAIL` | Copy of every form, default `calin.cozmax@gmail.com` |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Analytics, loaded only after consent |
| `NEXT_PUBLIC_ADS_CONVERSION_ID` | Optional ads events, only after marketing consent |

The health-check form validates addresses and can email a request. It does not run a scan.

## Content

| File | Purpose |
| --- | --- |
| `src/content/routes.ts` | English and Romanian paths |
| `src/content/pricing.ts` | RON starters and separate EUR fields |
| `src/content/services.ts` | Service pages |
| `src/content/case-studies.ts` | Approved case studies. Empty until supplied |

Set `NEXT_PUBLIC_SITE_URL` to `https://sienaworks.com` in production.
