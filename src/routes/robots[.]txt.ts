import { createFileRoute } from "@tanstack/react-router";

import { siteUrl } from "../lib/site-url";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: () =>
        new Response(`User-agent: *\nAllow: /\nDisallow: /checkout\n\nSitemap: ${siteUrl("/sitemap.xml")}\n`, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        }),
    },
  },
});
