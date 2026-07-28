## Goals

1. Make sure every visible brand mention says **Evestime Invest** (homepage, checkout, product pages, footers, logos, i18n strings).
2. Add three new static routes: **/about**, **/privacy**, **/terms**, each with proper `head()` SEO metadata.
3. On the homepage, expand the testimonial/reviews section with more **crypto-focused testimonials** and add a **Current Crypto Trends** section.
4. Refresh SEO copy so titles/descriptions/OG tags consistently reflect the Evestime Invest brand, and add the new routes to `sitemap.xml`.

## Scope of brand pass

- `src/routes/index.tsx` — header logo text, footer copyright, hero copy still mentioning old brand, testimonial names/companies, meta tags.
- `src/routes/checkout.tsx` — already uses "Evestime Invest" in i18n `footer` / `orderTitle`; audit the EN/ES/PT `translations` block to catch any lingering "MirrorCaps"/"Apex Carbon" strings, unify brand voice.
- `src/routes/products.$productId.tsx` and `src/routes/$lang.products.$productId.tsx` — verify header/footer/logo strings via `ProductDetail`.
- `src/components/ProductDetail.tsx`, `src/components/ProductCard.tsx` — logo/footer text.
- `src/lib/product-seo.ts` — `siteName`, OG `site_name`, JSON-LD brand.
- `src/routes/__root.tsx` — default og:site_name / JSON-LD Organization name.
- `src/data/products.ts` — leave the physical product names ("BMW M-Series Carbon Mirror Caps", etc.) untouched: those are product identifiers, not brand names.

## New pages

Each is a leaf route with its own `head()` (title, description, og:title, og:description, og:url, twitter card, canonical). All use the existing dark theme + shared header/footer look.

- `src/routes/about.tsx` — Evestime Invest story, mission (crypto-forward investment platform), team blurb, values. Static copy, no backend.
- `src/routes/privacy.tsx` — standard privacy policy sections (data collected, cookies, third parties, retention, user rights, contact). Marked as informational, not legal advice.
- `src/routes/terms.tsx` — standard terms of service (eligibility, accounts, acceptable use, risk disclosure for crypto, limitation of liability, governing law placeholder Switzerland).

Add nav links to these in the homepage header (desktop + mobile) and in the footer of index/checkout/product pages.

## Homepage content additions

- **Crypto Testimonials**: extend the existing Trustpilot-style review wall with ~6 additional fictional reviewers whose copy is crypto-specific (BTC/ETH/SOL/staking/DCA stories). Keep the same card component/markup.
- **Current Crypto Trends**: new section above or below testimonials. Static grid of 6 trend cards (e.g. Bitcoin ETF inflows, Ethereum L2 growth, Solana DeFi, RWA tokenization, AI x crypto, stablecoin adoption) — each with a short paragraph and a mocked % change badge. Purely static/fictional content.

## SEO refresh

- Update `title` / `description` / OG on index, checkout, product routes to consistent "Evestime Invest — …" pattern.
- Ensure `og:site_name` = "Evestime Invest" in `__root.tsx`.
- Add `/about`, `/privacy`, `/terms` entries to `src/routes/sitemap[.]xml.ts` (`changefreq: monthly`, no `lastmod`).
- Keep robots.txt unchanged (already allows all).

## Out of scope

- Physical product names in `src/data/products.ts` (kept as-is).
- No backend / DB / auth changes.
- No image regeneration; reuse existing assets and dark theme tokens.

## Technical notes

- All new routes follow `createFileRoute("/about")({ head: () => ({...}), component: ... })` pattern with canonical `https://carbon-craft-connect.lovable.app/<path>` and self-referencing og:url.
- Testimonials + trends kept inline as typed const arrays; no new deps.
- Verification: after edits, `rg -n "MirrorCaps|MIRRORCAPS|Apex Carbon"` in `src/` should return 0 hits (product-name matches in `products.ts` remain intentional).
