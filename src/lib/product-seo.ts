import { getProduct, SITE_URL, type Lang, type Product } from "../data/products";

const localeTags: Record<Lang, string> = {
  en: "en",
  es: "es",
  pt: "pt",
};

const ogLocale: Record<Lang, string> = {
  en: "en_US",
  es: "es_ES",
  pt: "pt_BR",
};

const seoCopy = {
  en: {
    titleSuffix: "Evestime Invest",
    descPrefix: "Buy",
  },
  es: {
    titleSuffix: "Evestime Invest",
    descPrefix: "Compra",
  },
  pt: {
    titleSuffix: "Evestime Invest",
    descPrefix: "Compre",
  },
} as const;

export function productUrl(lang: Lang, productId: string): string {
  return lang === "en"
    ? `${SITE_URL}/products/${productId}`
    : `${SITE_URL}/${lang}/products/${productId}`;
}

export function buildProductHead(product: Product, lang: Lang) {
  const content = product.translations[lang];
  const copy = seoCopy[lang];
  const url = productUrl(lang, product.id);
  const title = `${content.name} — ${copy.titleSuffix}`;
  const description = `${copy.descPrefix}: ${content.description} ${product.price}.`.trim();

  const alternates = (Object.keys(product.translations) as Lang[]).map((l) => ({
    rel: "alternate",
    hreflang: localeTags[l],
    href: productUrl(l, product.id),
  }));

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "product" },
      { property: "og:url", content: url },
      { property: "og:image", content: product.image },
      { property: "og:locale", content: ogLocale[lang] },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: product.image },
    ],
    links: [
      { rel: "canonical", href: url },
      ...alternates,
      { rel: "alternate", hreflang: "x-default", href: productUrl("en", product.id) },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: content.name,
          description: content.longDescription,
          image: product.image,
          sku: product.id,
          brand: { "@type": "Brand", name: "Evestime Invest" },
          offers: {
            "@type": "Offer",
            url,
            priceCurrency: "USD",
            price: product.price.replace(/[^0-9.]/g, ""),
            availability: "https://schema.org/InStock",
          },
        }),
      },
    ],
  };
}

export { getProduct };
