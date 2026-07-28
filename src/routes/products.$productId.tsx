import { createFileRoute, notFound } from "@tanstack/react-router";
import { ProductDetail } from "../components/ProductDetail";
import { getProduct } from "../data/products";
import { buildProductHead } from "../lib/product-seo";

export const Route = createFileRoute("/products/$productId")({
  loader: ({ params }) => {
    const product = getProduct(params.productId);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Product not found — Evestime Invest" }, { name: "robots", content: "noindex" }],
      };
    }
    return buildProductHead(loaderData.product, "en");
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  return <ProductDetail product={product} lang="en" />;
}
