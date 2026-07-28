export type Lang = "en" | "es" | "pt";

export interface ProductLocaleContent {
  name: string;
  description: string;
  longDescription: string;
}

export interface Product {
  id: string;
  price: string;
  image: string;
  // Legacy default (EN) fields for existing consumers
  name: string;
  description: string;
  translations: Record<Lang, ProductLocaleContent>;
}

const raw: Array<
  Omit<Product, "name" | "description"> & { translations: Record<Lang, ProductLocaleContent> }
> = [
  {
    id: "bmw-m-carbon",
    price: "$249",
    image: "https://placehold.co/1200x1200/1A1A1A/FFFFFF?text=BMW+M+Carbon",
    translations: {
      en: {
        name: "BMW M-Series Carbon Mirror Caps",
        description: "OEM-fit twill weave for F/G chassis M cars.",
        longDescription:
          "Precision-molded 2x2 twill carbon fiber mirror caps engineered for BMW F/G chassis M-Series. UV-stable clear coat, direct OEM replacement, no adhesives required.",
      },
      es: {
        name: "Cubiertas de Espejo BMW Serie M en Carbono",
        description: "Ajuste OEM en trenzado twill para chasis F/G de la serie M.",
        longDescription:
          "Cubiertas de espejo de fibra de carbono con trenzado 2x2 twill, moldeadas con precisión para BMW Serie M chasis F/G. Barniz resistente a UV, reemplazo OEM directo, sin adhesivos.",
      },
      pt: {
        name: "Capas de Retrovisor BMW Série M em Carbono",
        description: "Encaixe OEM em trama twill para chassis F/G da Série M.",
        longDescription:
          "Capas de retrovisor em fibra de carbono trama 2x2 twill, moldadas com precisão para BMW Série M chassis F/G. Verniz resistente a UV, substituição OEM direta, sem adesivos.",
      },
    },
  },
  {
    id: "audi-rs-carbon",
    price: "$239",
    image: "https://placehold.co/1200x1200/1A1A1A/FFFFFF?text=Audi+RS+Carbon",
    translations: {
      en: {
        name: "Audi RS Carbon Mirror Caps",
        description: "Direct replacement for B9/B10 RS and S models.",
        longDescription:
          "Genuine carbon fiber mirror caps that clip onto B9/B10 Audi RS and S-line vehicles. Autoclave-cured for aerospace-grade durability.",
      },
      es: {
        name: "Cubiertas de Espejo Audi RS en Carbono",
        description: "Reemplazo directo para modelos RS y S B9/B10.",
        longDescription:
          "Cubiertas de espejo en fibra de carbono auténtica que se encajan en Audi RS y S-line B9/B10. Curadas en autoclave para durabilidad de grado aeroespacial.",
      },
      pt: {
        name: "Capas de Retrovisor Audi RS em Carbono",
        description: "Substituição direta para modelos RS e S B9/B10.",
        longDescription:
          "Capas de retrovisor em fibra de carbono autêntica que encaixam nos Audi RS e S-line B9/B10. Curadas em autoclave para durabilidade de nível aeroespacial.",
      },
    },
  },
  {
    id: "mercedes-amg-carbon",
    price: "$259",
    image: "https://placehold.co/1200x1200/1A1A1A/FFFFFF?text=AMG+Carbon",
    translations: {
      en: {
        name: "Mercedes-AMG Carbon Mirror Caps",
        description: "Precision-molded for C, E, and S-Class AMG.",
        longDescription:
          "AMG-spec carbon caps for W205, W213, and W222 chassis. Deep-gloss finish, exact panel gaps, ready to install in under 10 minutes.",
      },
      es: {
        name: "Cubiertas de Espejo Mercedes-AMG en Carbono",
        description: "Moldeadas con precisión para AMG Clase C, E y S.",
        longDescription:
          "Cubiertas de carbono especificación AMG para chasis W205, W213 y W222. Acabado ultrabrillante, tolerancias exactas, instalación en menos de 10 minutos.",
      },
      pt: {
        name: "Capas de Retrovisor Mercedes-AMG em Carbono",
        description: "Moldadas com precisão para AMG Classe C, E e S.",
        longDescription:
          "Capas em carbono especificação AMG para chassis W205, W213 e W222. Acabamento ultrabrilhante, tolerâncias exatas, instalação em menos de 10 minutos.",
      },
    },
  },
  {
    id: "tesla-model-carbon",
    price: "$199",
    image: "https://placehold.co/1200x1200/1A1A1A/FFFFFF?text=Tesla+Carbon",
    translations: {
      en: {
        name: "Tesla Model 3 / Y Carbon Mirror Caps",
        description: "Snap-on install, no tools required.",
        longDescription:
          "Lightweight snap-on carbon caps designed for Tesla Model 3 and Model Y. Aero-optimized profile that keeps the factory sensor line.",
      },
      es: {
        name: "Cubiertas de Espejo Tesla Model 3 / Y en Carbono",
        description: "Instalación a presión, sin herramientas.",
        longDescription:
          "Cubiertas ligeras a presión en carbono, diseñadas para Tesla Model 3 y Model Y. Perfil optimizado aerodinámicamente que respeta la línea de sensores de fábrica.",
      },
      pt: {
        name: "Capas de Retrovisor Tesla Model 3 / Y em Carbono",
        description: "Instalação por encaixe, sem ferramentas.",
        longDescription:
          "Capas leves em carbono com encaixe direto, projetadas para Tesla Model 3 e Model Y. Perfil aerodinâmico que preserva a linha de sensores de fábrica.",
      },
    },
  },
  {
    id: "forged-carbon-universal",
    price: "$289",
    image: "https://placehold.co/1200x1200/1A1A1A/FFFFFF?text=Forged+Carbon",
    translations: {
      en: {
        name: "Forged Carbon Mirror Caps",
        description: "Signature marbled forged finish.",
        longDescription:
          "Compression-molded forged carbon caps with our signature chaotic marbled pattern. Every set is unique.",
      },
      es: {
        name: "Cubiertas de Espejo en Carbono Forjado",
        description: "Acabado forjado marmoleado exclusivo.",
        longDescription:
          "Cubiertas de carbono forjado moldeadas por compresión con nuestro patrón marmoleado caótico distintivo. Cada juego es único.",
      },
      pt: {
        name: "Capas de Retrovisor em Carbono Forjado",
        description: "Acabamento forjado marmorizado exclusivo.",
        longDescription:
          "Capas em carbono forjado moldadas por compressão com nosso padrão marmorizado caótico exclusivo. Cada conjunto é único.",
      },
    },
  },
  {
    id: "bmw-g-series-carbon",
    price: "$229",
    image: "https://placehold.co/1200x1200/1A1A1A/FFFFFF?text=BMW+G+Carbon",
    translations: {
      en: {
        name: "BMW G-Series Carbon Mirror Caps",
        description: "3, 4, 5, and 8 Series G-chassis fitment.",
        longDescription:
          "Direct-fit carbon caps for BMW G20, G22, G30, and G15 chassis. Includes fitting clips and installation guide.",
      },
      es: {
        name: "Cubiertas de Espejo BMW Serie G en Carbono",
        description: "Compatibles con Series 3, 4, 5 y 8 chasis G.",
        longDescription:
          "Cubiertas de carbono de ajuste directo para BMW G20, G22, G30 y G15. Incluye clips de fijación y guía de instalación.",
      },
      pt: {
        name: "Capas de Retrovisor BMW Série G em Carbono",
        description: "Compatíveis com Séries 3, 4, 5 e 8 chassis G.",
        longDescription:
          "Capas de carbono com encaixe direto para BMW G20, G22, G30 e G15. Inclui clipes de fixação e guia de instalação.",
      },
    },
  },
];

export const products: Product[] = raw.map((p) => ({
  ...p,
  name: p.translations.en.name,
  description: p.translations.en.description,
}));

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export { SITE_URL } from "../lib/site-url";
