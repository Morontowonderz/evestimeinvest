import { Link } from "@tanstack/react-router";

import type { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
  phoneNumber: string;
}

export function ProductCard({ product, phoneNumber }: ProductCardProps) {
  const message = encodeURIComponent(
    `Hi, I'm interested in the ${product.name} (${product.price}).`,
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl overflow-hidden flex flex-col hover:border-[#3A3A3A] transition-colors">
      <div className="aspect-square bg-[#0F0F0F] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-400 flex-1">{product.description}</p>
        <div className="mt-4 flex items-center justify-between gap-2">
          <span className="text-xl font-bold">{product.price}</span>
          <div className="flex items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center space-x-1 bg-[#25D366] text-black px-3 py-2 rounded-full text-sm font-semibold hover:bg-[#20bd5a] transition-colors"
              aria-label={`Ask about ${product.name} on WhatsApp`}
            >
              <span>📱</span>
            </a>
            <Link
              to="/products/$productId"
              params={{ productId: product.id }}
              className="inline-flex items-center bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1A1A] focus-visible:ring-white"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
