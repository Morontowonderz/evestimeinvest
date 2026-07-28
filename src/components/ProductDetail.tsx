import { Link } from "@tanstack/react-router";
import type { Lang, Product } from "../data/products";

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER ?? "";

const ui = {
  en: {
    back: "← Back",
    order: "Order Now",
    inquire: "Ask on WhatsApp",
    price: "Price",
    overview: "Overview",
    inquireMessage: (name: string, price: string) =>
      `Hi, I'm interested in the ${name} (${price}).`,
  },
  es: {
    back: "← Volver",
    order: "Comprar ahora",
    inquire: "Consultar por WhatsApp",
    price: "Precio",
    overview: "Descripción",
    inquireMessage: (name: string, price: string) =>
      `Hola, me interesa ${name} (${price}).`,
  },
  pt: {
    back: "← Voltar",
    order: "Comprar agora",
    inquire: "Perguntar no WhatsApp",
    price: "Preço",
    overview: "Descrição",
    inquireMessage: (name: string, price: string) =>
      `Olá, tenho interesse em ${name} (${price}).`,
  },
} as const;

interface Props {
  product: Product;
  lang: Lang;
}

export function ProductDetail({ product, lang }: Props) {
  const t = ui[lang];
  const content = product.translations[lang];
  const homeTo = lang === "en" ? "/" : `/${lang}`;
  const message = encodeURIComponent(t.inquireMessage(content.name, product.price));
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans" lang={lang}>
      <header className="sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold tracking-wider rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
          >
            EVESTIME INVEST
          </Link>
          <a
            href={homeTo}
            className="text-sm text-gray-300 hover:text-white rounded px-2 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
          >
            {t.back}
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-2 gap-10">
        <div className="aspect-square rounded-2xl overflow-hidden border border-[#2A2A2A] bg-[#111]">
          <img
            src={product.image}
            alt={content.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <nav aria-label="Breadcrumb" className="text-xs text-gray-500 mb-3">
            <a href={homeTo} className="hover:text-white">
              Evestime Invest
            </a>
            <span className="mx-2">/</span>
            <span className="text-gray-300">{content.name}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold">{content.name}</h1>
          <div className="mt-3 text-2xl font-semibold text-[#25D366]">{product.price}</div>

          <h2 className="mt-8 text-sm uppercase tracking-widest text-gray-400">
            {t.overview}
          </h2>
          <p className="mt-2 text-gray-200 leading-relaxed">{content.longDescription}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/checkout"
              search={{ product: product.id, lang }}
              className="inline-flex items-center bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] focus-visible:ring-white"
            >
              {t.order}
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#20bd5a] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] focus-visible:ring-[#25D366]"
            >
              <span aria-hidden="true">📱</span>
              <span>{t.inquire}</span>
            </a>
          </div>
        </div>
      </main>

      <footer className="border-t border-[#2A2A2A] mt-16 py-8 text-center text-sm text-gray-500">
        <p>© 2026 Evestime Invest. All rights reserved.</p>
      </footer>
    </div>
  );
}
