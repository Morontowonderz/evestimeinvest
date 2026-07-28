# EVESTIME

Production-oriented TanStack Start application (Lovable export undergoing senior architecture refactor).

## Requirements

- Node.js `>=22.12.0`
- npm only (do not use bun/yarn/pnpm lockfiles)

## Setup

```sh
cp .env.example .env
npm i
npm run dev
```

### Environment variables

| Variable               | Purpose                                                                |
| ---------------------- | ---------------------------------------------------------------------- |
| `VITE_SITE_URL`        | Absolute site origin, no trailing slash (canonicals, sitemap, JSON-LD) |
| `VITE_WHATSAPP_NUMBER` | WhatsApp digits for checkout / inquire CTAs                            |

Set the same values in the Vercel project for preview and production. Keep `public/robots.txt` Sitemap URL aligned with `VITE_SITE_URL` until robots is served dynamically.

## Scripts

```sh
npm run dev
npm run lint
npm run build
```

## Stack

- TanStack Start / Router
- React 19
- TypeScript
- Tailwind CSS 4
- Vercel Pro (target host)
# evestimeinvest
