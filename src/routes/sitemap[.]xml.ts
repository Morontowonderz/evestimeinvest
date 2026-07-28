import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "../lib/site-url";
import type {} from "@tanstack/react-start";

import { products, type Lang } from "../data/products";

const BASE_URL = SITE_URL;
const LOCALES: Lang[] = ["en", "es", "pt"];

interface SitemapEntry {
  loc: string;
  changefreq?: "weekly" | "monthly";
  priority?: string;
  alternates?: { hrefLang: string; href: string }[];
}

function productPath(lang: Lang, id: string) {
  return lang === "en" ? `/products/${id}` : `/${lang}/products/${id}`;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { loc: `${BASE_URL}/`, changefreq: "weekly", priority: "1.0" },
          { loc: `${BASE_URL}/about`, changefreq: "monthly", priority: "0.6" },
          { loc: `${BASE_URL}/privacy`, changefreq: "monthly", priority: "0.3" },
          { loc: `${BASE_URL}/terms`, changefreq: "monthly", priority: "0.3" },
        ];

        for (const p of products) {
          const alternates = LOCALES.map((l) => ({
            hrefLang: l,
            href: `${BASE_URL}${productPath(l, p.id)}`,
          }));
          for (const l of LOCALES) {
            entries.push({
              loc: `${BASE_URL}${productPath(l, p.id)}`,
              changefreq: "monthly",
              priority: "0.8",
              alternates,
            });
          }
        }

        const urls = entries.map((e) => {
          const links = (e.alternates ?? [])
            .map(
              (a) =>
                `    <xhtml:link rel="alternate" hreflang="${a.hrefLang}" href="${a.href}"/>`,
            )
            .join("\n");
          return [
            `  <url>`,
            `    <loc>${e.loc}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            links || null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n");
        });

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
