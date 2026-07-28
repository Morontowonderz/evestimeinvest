const fallbackSiteUrl = "https://evestime.com";

export const SITE_URL = (import.meta.env.VITE_SITE_URL ?? fallbackSiteUrl).replace(/\/$/, "");

export function siteUrl(path = "/"): string {
  return new URL(path, `${SITE_URL}/`).toString();
}
