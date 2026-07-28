import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE_URL } from "../lib/site-url";
import { useMemo, useState } from "react";
import { z } from "zod";

import { products } from "../data/products";

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER ?? "";

export const Route = createFileRoute("/checkout")({
  validateSearch: (search: Record<string, unknown>) => ({
    product: typeof search.product === "string" ? search.product : undefined,
    lang:
      search.lang === "es" || search.lang === "pt" || search.lang === "en"
        ? (search.lang as Lang)
        : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Checkout — Evestime Invest" },
      {
        name: "description",
        content:
          "Place your Evestime Invest order. We'll send your summary to WhatsApp for fast processing.",
      },
      { property: "og:title", content: "Checkout — Evestime Invest" },
      {
        property: "og:description",
        content: "Place your Evestime Invest order via WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/checkout` },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Checkout — Evestime Invest" },
      { name: "twitter:description", content: "Place your Evestime Invest order via WhatsApp." },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/checkout` }],
  }),
  component: CheckoutPage,
});

type Lang = "en" | "es" | "pt";

const translations = {
  en: {
    back: "← Back to shop",
    title: "Checkout",
    subtitle:
      "Fill in your details and we'll send your order summary to WhatsApp for confirmation and payment.",
    submitted:
      "Your order summary was opened in WhatsApp. If nothing happened, please allow popups and try again.",
    sections: { order: "Order", customer: "Customer", shipping: "Shipping & Vehicle" },
    fields: {
      product: "Product",
      quantity: "Quantity",
      name: "Full name",
      email: "Email",
      phone: "Phone",
      vehicle: "Vehicle (year, make, model)",
      address: "Shipping address",
      notes: "Notes (optional)",
    },
    placeholders: {
      phone: "+41 44 668 18 00",
      vehicle: "2023 BMW M4 Competition",
      notes: "Anything else we should know?",
      address: "Bahnhofstrasse 42\n8001 Zürich\nSwitzerland",
    },
    submit: "Send Order via WhatsApp",
    disclaimer:
      "By submitting, your order details will open in WhatsApp so our team can confirm availability and payment.",
    orderTitle: "New Evestime Invest Order",
    customerTitle: "Customer",
    productLabel: "Product",
    priceLabel: "Price",
    quantityLabel: "Quantity",
    nameLabel: "Name",
    emailLabel: "Email",
    phoneLabel: "Phone",
    vehicleLabel: "Vehicle",
    addressLabel: "Shipping Address",
    notesLabel: "Notes",
    langLabel: "Language",
    footer: "© 2026 Evestime Invest. All rights reserved.",
    errors: {
      productId: "Please select a product",
      quantityNumber: "Quantity must be a number",
      quantityInt: "Quantity must be a whole number",
      quantityMin: "Minimum quantity is 1",
      quantityMax: "Maximum quantity is 20",
      nameRequired: "Name is required",
      nameMax: "Name must be less than 100 characters",
      emailInvalid: "Invalid email address",
      emailMax: "Email must be less than 255 characters",
      phoneRequired: "Phone number is required",
      phoneMax: "Phone number must be less than 30 characters",
      phoneChars: "Phone number contains invalid characters",
      vehicleRequired: "Vehicle year/make/model is required",
      vehicleMax: "Vehicle must be less than 120 characters",
      addressRequired: "Shipping address is required",
      addressMax: "Address must be less than 300 characters",
      notesMax: "Notes must be less than 500 characters",
    },
  },
  es: {
    back: "← Volver a la tienda",
    title: "Finalizar pedido",
    subtitle:
      "Completa tus datos y enviaremos el resumen de tu pedido a WhatsApp para confirmar y pagar.",
    submitted:
      "El resumen de tu pedido se abrió en WhatsApp. Si no ocurrió nada, permite las ventanas emergentes e inténtalo de nuevo.",
    sections: { order: "Pedido", customer: "Cliente", shipping: "Envío y vehículo" },
    fields: {
      product: "Producto",
      quantity: "Cantidad",
      name: "Nombre completo",
      email: "Correo electrónico",
      phone: "Teléfono",
      vehicle: "Vehículo (año, marca, modelo)",
      address: "Dirección de envío",
      notes: "Notas (opcional)",
    },
    placeholders: {
      phone: "+41 44 668 18 00",
      vehicle: "2023 BMW M4 Competition",
      notes: "¿Algo más que debamos saber?",
      address: "Rue du Rhône 62\n1204 Genève\nSuiza",
    },
    submit: "Enviar pedido por WhatsApp",
    disclaimer:
      "Al enviar, los detalles de tu pedido se abrirán en WhatsApp para que nuestro equipo confirme disponibilidad y pago.",
    orderTitle: "Nuevo pedido Evestime Invest",
    customerTitle: "Cliente",
    productLabel: "Producto",
    priceLabel: "Precio",
    quantityLabel: "Cantidad",
    nameLabel: "Nombre",
    emailLabel: "Correo",
    phoneLabel: "Teléfono",
    vehicleLabel: "Vehículo",
    addressLabel: "Dirección de envío",
    notesLabel: "Notas",
    langLabel: "Idioma",
    footer: "© 2026 Evestime Invest. Todos los derechos reservados.",
    errors: {
      productId: "Selecciona un producto",
      quantityNumber: "La cantidad debe ser un número",
      quantityInt: "La cantidad debe ser un número entero",
      quantityMin: "La cantidad mínima es 1",
      quantityMax: "La cantidad máxima es 20",
      nameRequired: "El nombre es obligatorio",
      nameMax: "El nombre debe tener menos de 100 caracteres",
      emailInvalid: "Correo electrónico no válido",
      emailMax: "El correo debe tener menos de 255 caracteres",
      phoneRequired: "El teléfono es obligatorio",
      phoneMax: "El teléfono debe tener menos de 30 caracteres",
      phoneChars: "El teléfono contiene caracteres no válidos",
      vehicleRequired: "El año/marca/modelo del vehículo es obligatorio",
      vehicleMax: "El vehículo debe tener menos de 120 caracteres",
      addressRequired: "La dirección de envío es obligatoria",
      addressMax: "La dirección debe tener menos de 300 caracteres",
      notesMax: "Las notas deben tener menos de 500 caracteres",
    },
  },
  pt: {
    back: "← Voltar à loja",
    title: "Finalizar pedido",
    subtitle:
      "Preencha seus dados e enviaremos o resumo do pedido para o WhatsApp para confirmação e pagamento.",
    submitted:
      "O resumo do seu pedido foi aberto no WhatsApp. Se nada aconteceu, permita pop-ups e tente novamente.",
    sections: { order: "Pedido", customer: "Cliente", shipping: "Envio e veículo" },
    fields: {
      product: "Produto",
      quantity: "Quantidade",
      name: "Nome completo",
      email: "E-mail",
      phone: "Telefone",
      vehicle: "Veículo (ano, marca, modelo)",
      address: "Endereço de entrega",
      notes: "Observações (opcional)",
    },
    placeholders: {
      phone: "+41 44 668 18 00",
      vehicle: "2023 BMW M4 Competition",
      notes: "Algo mais que devamos saber?",
      address: "Freie Strasse 38\n4001 Basel\nSuíça",
    },
    submit: "Enviar pedido pelo WhatsApp",
    disclaimer:
      "Ao enviar, os detalhes do seu pedido serão abertos no WhatsApp para que nossa equipe confirme disponibilidade e pagamento.",
    orderTitle: "Novo pedido Evestime Invest",
    customerTitle: "Cliente",
    productLabel: "Produto",
    priceLabel: "Preço",
    quantityLabel: "Quantidade",
    nameLabel: "Nome",
    emailLabel: "E-mail",
    phoneLabel: "Telefone",
    vehicleLabel: "Veículo",
    addressLabel: "Endereço de entrega",
    notesLabel: "Observações",
    langLabel: "Idioma",
    footer: "© 2026 Evestime Invest. Todos os direitos reservados.",
    errors: {
      productId: "Selecione um produto",
      quantityNumber: "A quantidade deve ser um número",
      quantityInt: "A quantidade deve ser um número inteiro",
      quantityMin: "A quantidade mínima é 1",
      quantityMax: "A quantidade máxima é 20",
      nameRequired: "O nome é obrigatório",
      nameMax: "O nome deve ter menos de 100 caracteres",
      emailInvalid: "E-mail inválido",
      emailMax: "O e-mail deve ter menos de 255 caracteres",
      phoneRequired: "O telefone é obrigatório",
      phoneMax: "O telefone deve ter menos de 30 caracteres",
      phoneChars: "O telefone contém caracteres inválidos",
      vehicleRequired: "Ano/marca/modelo do veículo é obrigatório",
      vehicleMax: "O veículo deve ter menos de 120 caracteres",
      addressRequired: "O endereço de entrega é obrigatório",
      addressMax: "O endereço deve ter menos de 300 caracteres",
      notesMax: "As observações devem ter menos de 500 caracteres",
    },
  },
} as const;

function makeSchema(t: (typeof translations)[Lang]) {
  return z.object({
    productId: z.string().min(1, { message: t.errors.productId }),
    quantity: z
      .number({ message: t.errors.quantityNumber })
      .int({ message: t.errors.quantityInt })
      .min(1, { message: t.errors.quantityMin })
      .max(20, { message: t.errors.quantityMax }),
    name: z.string().trim().min(1, { message: t.errors.nameRequired }).max(100, { message: t.errors.nameMax }),
    email: z.string().trim().email({ message: t.errors.emailInvalid }).max(255, { message: t.errors.emailMax }),
    phone: z
      .string()
      .trim()
      .min(5, { message: t.errors.phoneRequired })
      .max(30, { message: t.errors.phoneMax })
      .regex(/^[+\d\s()-]+$/, { message: t.errors.phoneChars }),
    vehicle: z
      .string()
      .trim()
      .min(1, { message: t.errors.vehicleRequired })
      .max(120, { message: t.errors.vehicleMax }),
    address: z
      .string()
      .trim()
      .min(1, { message: t.errors.addressRequired })
      .max(300, { message: t.errors.addressMax }),
    notes: z.string().trim().max(500, { message: t.errors.notesMax }).optional().or(z.literal("")),
  });
}

type OrderFormState = {
  productId: string;
  quantity: string;
  name: string;
  email: string;
  phone: string;
  vehicle: string;
  address: string;
  notes: string;
};

type FieldErrors = Partial<Record<keyof OrderFormState, string>>;

const initialForm: OrderFormState = {
  productId: products[0]?.id ?? "",
  quantity: "1",
  name: "",
  email: "",
  phone: "",
  vehicle: "",
  address: "",
  notes: "",
};

function CheckoutPage() {
  const search = Route.useSearch();
  const [lang, setLang] = useState<Lang>(search.lang ?? "en");
  const t = translations[lang];

  const preselected =
    search.product && products.some((p) => p.id === search.product)
      ? search.product
      : initialForm.productId;
  const [form, setForm] = useState<OrderFormState>({
    ...initialForm,
    productId: preselected,
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const selectedProduct = useMemo(
    () => products.find((p) => p.id === form.productId),
    [form.productId],
  );

  function update<K extends keyof OrderFormState>(key: K, value: OrderFormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const parsed = makeSchema(t).safeParse({
      ...form,
      quantity: Number(form.quantity),
    });

    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof OrderFormState | undefined;
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      // Focus the first invalid field for keyboard users
      const firstKey = Object.keys(fieldErrors)[0];
      if (firstKey) {
        const el = document.getElementById(`field-${firstKey}`);
        el?.focus();
      }
      return;
    }

    const data = parsed.data;
    const product = products.find((p) => p.id === data.productId);
    if (!product) {
      setErrors({ productId: t.errors.productId });
      return;
    }

    const lines = [
      `*${t.orderTitle}*`,
      "",
      `*${t.productLabel}:* ${product.name}`,
      `*${t.priceLabel}:* ${product.price}`,
      `*${t.quantityLabel}:* ${data.quantity}`,
      "",
      `*${t.customerTitle}*`,
      `${t.nameLabel}: ${data.name}`,
      `${t.emailLabel}: ${data.email}`,
      `${t.phoneLabel}: ${data.phone}`,
      "",
      `*${t.vehicleLabel}:* ${data.vehicle}`,
      `*${t.addressLabel}:* ${data.address}`,
    ];
    if (data.notes) {
      lines.push("", `*${t.notesLabel}:* ${data.notes}`);
    }

    const message = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    setSubmitted(true);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans" lang={lang}>
      <a
        href="#checkout-main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-md focus:outline-none focus:ring-2 focus:ring-[#25D366]"
      >
        Skip to main content
      </a>
      <header className="sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="text-2xl font-bold tracking-wider rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
          >
            EVESTIME INVEST
          </Link>
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 text-sm">
              <span className="sr-only sm:not-sr-only text-gray-400">{t.langLabel}:</span>
              <select
                aria-label={t.langLabel}
                value={lang}
                onChange={(e) => setLang(e.target.value as Lang)}
                className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-md text-sm px-2 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
              >
                <option value="en">EN</option>
                <option value="es">ES</option>
                <option value="pt">PT</option>
              </select>
            </label>
            <Link
              to="/"
              className="text-sm text-gray-300 hover:text-white rounded px-2 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
            >
              {t.back}
            </Link>
          </div>
        </div>
      </header>

      <main id="checkout-main" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold">{t.title}</h1>
        <p className="mt-2 text-gray-400 text-sm">{t.subtitle}</p>

        {submitted && (
          <div
            role="status"
            aria-live="polite"
            className="mt-6 rounded-xl border border-[#25D366]/40 bg-[#25D366]/10 p-4 text-sm"
          >
            {t.submitted}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">
          <Section title={t.sections.order}>
            <Field id="field-productId" label={t.fields.product} error={errors.productId}>
              <select
                id="field-productId"
                value={form.productId}
                onChange={(e) => update("productId", e.target.value)}
                aria-invalid={!!errors.productId}
                aria-describedby={errors.productId ? "err-productId" : undefined}
                className="input-dark"
              >
                {products.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} — {p.price}
                  </option>
                ))}
              </select>
            </Field>

            <Field id="field-quantity" label={t.fields.quantity} error={errors.quantity}>
              <input
                id="field-quantity"
                type="number"
                min={1}
                max={20}
                value={form.quantity}
                onChange={(e) => update("quantity", e.target.value)}
                aria-invalid={!!errors.quantity}
                aria-describedby={errors.quantity ? "err-quantity" : undefined}
                className="input-dark"
              />
            </Field>

            {selectedProduct && (
              <div className="rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] p-4 flex items-center gap-4">
                <img
                  src={selectedProduct.image}
                  alt=""
                  aria-hidden="true"
                  className="w-16 h-16 rounded-lg object-cover bg-[#0F0F0F]"
                />
                <div className="flex-1 min-w-0">
                  <div className="font-semibold truncate">{selectedProduct.name}</div>
                  <div className="text-sm text-gray-400">{selectedProduct.price}</div>
                </div>
              </div>
            )}
          </Section>

          <Section title={t.sections.customer}>
            <Field id="field-name" label={t.fields.name} error={errors.name}>
              <input
                id="field-name"
                type="text"
                maxLength={100}
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "err-name" : undefined}
                className="input-dark"
                autoComplete="name"
              />
            </Field>
            <Field id="field-email" label={t.fields.email} error={errors.email}>
              <input
                id="field-email"
                type="email"
                maxLength={255}
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "err-email" : undefined}
                className="input-dark"
                autoComplete="email"
              />
            </Field>
            <Field id="field-phone" label={t.fields.phone} error={errors.phone}>
              <input
                id="field-phone"
                type="tel"
                maxLength={30}
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "err-phone" : undefined}
                className="input-dark"
                autoComplete="tel"
                placeholder={t.placeholders.phone}
              />
            </Field>
          </Section>

          <Section title={t.sections.shipping}>
            <Field id="field-vehicle" label={t.fields.vehicle} error={errors.vehicle}>
              <input
                id="field-vehicle"
                type="text"
                maxLength={120}
                value={form.vehicle}
                onChange={(e) => update("vehicle", e.target.value)}
                aria-invalid={!!errors.vehicle}
                aria-describedby={errors.vehicle ? "err-vehicle" : undefined}
                className="input-dark"
                placeholder={t.placeholders.vehicle}
              />
            </Field>
            <Field id="field-address" label={t.fields.address} error={errors.address}>
              <textarea
                id="field-address"
                rows={3}
                maxLength={300}
                value={form.address}
                onChange={(e) => update("address", e.target.value)}
                aria-invalid={!!errors.address}
                aria-describedby={errors.address ? "err-address" : undefined}
                className="input-dark resize-none"
                autoComplete="street-address"
                placeholder={t.placeholders.address}
              />
            </Field>
            <Field id="field-notes" label={t.fields.notes} error={errors.notes}>
              <textarea
                id="field-notes"
                rows={2}
                maxLength={500}
                value={form.notes}
                onChange={(e) => update("notes", e.target.value)}
                aria-invalid={!!errors.notes}
                aria-describedby={errors.notes ? "err-notes" : undefined}
                className="input-dark resize-none"
                placeholder={t.placeholders.notes}
              />
            </Field>
          </Section>

          <button
            type="submit"
            className="w-full min-h-11 flex items-center justify-center gap-2 bg-[#25D366] text-black px-6 py-3 rounded-full text-base font-semibold hover:bg-[#20bd5a] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] focus-visible:ring-[#25D366]"
          >
            <span aria-hidden="true">📱</span>
            <span>{t.submit}</span>
          </button>

          <p className="text-xs text-gray-500 text-center">{t.disclaimer}</p>
        </form>
      </main>

      <footer className="border-t border-[#2A2A2A] py-8 text-center text-sm text-gray-500">
        <p>{t.footer}</p>
      </footer>

      <style>{`
        .input-dark {
          width: 100%;
          background-color: #1A1A1A;
          border: 1px solid #2A2A2A;
          color: #fff;
          border-radius: 0.75rem;
          padding: 0.65rem 0.9rem;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.15s, box-shadow 0.15s;
          min-height: 2.75rem;
        }
        .input-dark:focus-visible {
          border-color: #25D366;
          box-shadow: 0 0 0 2px rgba(37, 211, 102, 0.4);
        }
        .input-dark::placeholder {
          color: #6b7280;
        }
      `}</style>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section aria-label={title} className="rounded-2xl border border-[#2A2A2A] bg-[#111111] p-5 sm:p-6 space-y-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      {children}
    </section>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  const errId = `err-${id.replace(/^field-/, "")}`;
  return (
    <div className="block">
      <label htmlFor={id} className="text-sm text-gray-300">
        {label}
      </label>
      <div className="mt-1.5">{children}</div>
      {error && (
        <span id={errId} role="alert" className="mt-1 block text-xs text-red-400">
          {error}
        </span>
      )}
    </div>
  );
}
