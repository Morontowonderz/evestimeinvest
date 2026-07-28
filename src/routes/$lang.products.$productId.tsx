import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { ProductDetail } from "../components/ProductDetail";
import { getProduct, type Lang } from "../data/products";
import { buildProductHead } from "../lib/product-seo";

const SUPPORTED: readonly Lang[] = ["es", "pt"];

export const Route = createFileRoute("/$lang/products/$productId")({
  beforeLoad: ({ params }) => {
    if (params.lang === "en") {
      throw redirect({
        to: "/products/$productId",
        params: { productId: params.productId },
      });
    }
    if (!SUPPORTED.includes(params.lang as Lang)) {
      throw notFound();
    }
  },
  loader: ({ params }) => {
    const product = getProduct(params.productId);
    if (!product) throw notFound();
    return { product, lang: params.lang as Lang };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Product not found — Evestime Invest" }, { name: "robots", content: "noindex" }],
      };
    }
    return buildProductHead(loaderData.product, loaderData.lang);
  },
  component: LocalizedProductPage,
});

function LocalizedProductPage() {
  const { product, lang } = Route.useLoaderData();
  return <ProductDetail product={product} lang={lang} />;
}
