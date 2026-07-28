import { createFileRoute, Link } from "@tanstack/react-router";

const CANONICAL = "https://carbon-craft-connect.lovable.app/about";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Evestime Invest" },
      {
        name: "description",
        content:
          "Evestime Invest is a Swiss-inspired copy trading and digital-asset platform. Learn about our mission, values and the team building smarter finance technologies.",
      },
      { property: "og:title", content: "About — Evestime Invest" },
      {
        property: "og:description",
        content:
          "Learn about Evestime Invest — our mission, values and the team behind our copy trading and crypto research platform.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: CANONICAL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About — Evestime Invest" },
      {
        name: "twitter:description",
        content: "Meet Evestime Invest: copy trading, crypto research and regulated multi-asset execution.",
      },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
  component: AboutPage,
});

const VALUES = [
  { t: "Transparency", d: "Every leader we list publishes a verified track record — no cherry-picked screenshots." },
  { t: "Risk First", d: "Position sizing, drawdown caps and stop-copy triggers are built in, not bolted on." },
  { t: "Client Focus", d: "24/5 human support, plain-language fees and a mobile app people actually enjoy." },
  { t: "Innovation", d: "Copy trading, AI market buzz and tokenized RWA research under one roof." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white font-sans">
      <header className="sticky top-0 z-50 border-b border-white/5 backdrop-blur bg-[#0A0F1C]/95">
        <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-amber-300 to-blue-500 grid place-items-center font-black text-slate-900">
              E
            </div>
            <span className="font-bold tracking-wide">Evestime Invest</span>
          </Link>
          <nav className="text-sm text-slate-300 flex gap-5">
            <Link to="/" className="hover:text-white">Home</Link>
            <Link to="/privacy" className="hover:text-white">Privacy</Link>
            <Link to="/terms" className="hover:text-white">Terms</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-amber-300 font-semibold tracking-widest text-xs uppercase">About Evestime Invest</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
          Smarter finance for a new generation of investors.
        </h1>
        <p className="mt-5 text-slate-300 leading-relaxed">
          Evestime Invest is a copy trading and digital-asset platform built for people who want
          professional-grade execution without a bank-office schedule. Founded in Zürich in 2023,
          we combine regulated multi-asset brokerage with modern crypto research, so our clients
          can trade equities, forex and digital assets in one transparent workspace.
        </p>
        <p className="mt-4 text-slate-300 leading-relaxed">
          Our mission is simple: give retail investors the same tools, data and risk controls
          institutions have relied on for decades — and package them so anyone can start in
          minutes.
        </p>

        <section className="mt-14">
          <h2 className="text-2xl font-bold">What we stand for</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            {VALUES.map((v) => (
              <div key={v.t} className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
                <h3 className="font-semibold text-white">{v.t}</h3>
                <p className="mt-2 text-sm text-slate-400">{v.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-white/10 bg-gradient-to-br from-blue-600/10 to-amber-300/5 p-8">
          <h2 className="text-2xl font-bold">By the numbers</h2>
          <div className="mt-6 grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-black text-amber-300">500K+</div>
              <div className="text-xs text-slate-400 mt-1">Active clients</div>
            </div>
            <div>
              <div className="text-3xl font-black text-blue-400">$2.8B</div>
              <div className="text-xs text-slate-400 mt-1">Assets on platform</div>
            </div>
            <div>
              <div className="text-3xl font-black text-emerald-400">1,000+</div>
              <div className="text-xs text-slate-400 mt-1">Verified leaders</div>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold">Our story</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Evestime Invest was started by a small team of traders, engineers and risk managers
            who were frustrated with the state of retail copy trading. We wanted verifiable track
            records, real risk tooling and a UI that respects the user's time. Three years later,
            the same principles guide every feature we ship — from our AI Market Buzz sentiment
            engine to the one-tap "pause copying" button on our mobile app.
          </p>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-[#050914]">
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 Evestime Invest. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            <Link to="/" className="hover:text-white">Home</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
