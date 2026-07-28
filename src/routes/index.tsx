import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  Copy,
  Shield,
  BarChart3,
  Zap,
  Users,
  Target,
  TrendingUp,
  DollarSign,
  Building2,
  CheckCircle2,
  Star,
  MessageCircle,
  HelpCircle,
  Mail,
  Phone,
  Calendar,
  LineChart,
  Bot,
  Sparkles,
  Signal,
  Wallet,
  Coins,
  UsersRound,
  Timer,
  UserRound,
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Twitter,
  Instagram,
  Linkedin,
  Apple,
  Play,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Evestime Invest — Copy Trading & Innovative Finance Technologies" },
      {
        name: "description",
        content:
          "Evestime Invest: cutting-edge copy trading, real-time analytics, and regulated multi-asset execution. Trade smarter with elite traders in one click.",
      },
      { property: "og:title", content: "Evestime Invest — Copy Trading & Innovative Finance Technologies" },
      {
        property: "og:description",
        content:
          "Evestime Invest: cutting-edge copy trading, real-time analytics, and regulated multi-asset execution. Trade smarter with elite traders in one click.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://carbon-craft-connect.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Evestime Invest — Copy Trading" },
      { name: "twitter:description", content: "Copy elite traders in one click. Regulated multi-asset execution." },
    ],
    links: [{ rel: "canonical", href: "https://carbon-craft-connect.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://carbon-craft-connect.lovable.app/#org",
              name: "Evestime Invest",
              url: "https://carbon-craft-connect.lovable.app/",
              logo: "https://carbon-craft-connect.lovable.app/favicon.ico",
              sameAs: [
                "https://twitter.com/evestimeinvest",
                "https://www.linkedin.com/company/evestimeinvest",
              ],
              contactPoint: [{
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "support@evestimeinvest.com",
                areaServed: "Worldwide",
                availableLanguage: ["English", "Spanish", "Portuguese"],
              }],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Bahnhofstrasse 42",
                addressLocality: "Zürich",
                postalCode: "8001",
                addressCountry: "CH",
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://carbon-craft-connect.lovable.app/#website",
              url: "https://carbon-craft-connect.lovable.app/",
              name: "Evestime Invest",
              publisher: { "@id": "https://carbon-craft-connect.lovable.app/#org" },
              inLanguage: ["en", "es", "pt"],
              potentialAction: {
                "@type": "SearchAction",
                target: "https://carbon-craft-connect.lovable.app/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "FinancialService",
              name: "Evestime Invest Copy Trading",
              provider: { "@id": "https://carbon-craft-connect.lovable.app/#org" },
              areaServed: "Worldwide",
              serviceType: "Copy trading, crypto and multi-asset execution",
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "What is copy trading?", acceptedAnswer: { "@type": "Answer", text: "Copy trading automatically mirrors the trades of verified expert traders in your own account, with full transparency and risk controls." } },
                { "@type": "Question", name: "Is Evestime Invest regulated?", acceptedAnswer: { "@type": "Answer", text: "Evestime Invest partners with regulated brokerage counterparties and follows KYC/AML obligations across supported jurisdictions." } },
                { "@type": "Question", name: "Which assets can I trade?", acceptedAnswer: { "@type": "Answer", text: "Crypto (BTC, ETH, SOL and more), forex, indices, commodities, share CFDs and ETFs from a single account." } },
                { "@type": "Question", name: "How much do I need to start?", acceptedAnswer: { "@type": "Answer", text: "Accounts can be opened from $100. Copy allocations start from as little as $10 per leader." } },
              ],
            },
            {
              "@type": "AggregateRating",
              itemReviewed: { "@id": "https://carbon-craft-connect.lovable.app/#org" },
              ratingValue: "4.6",
              reviewCount: "2782",
              bestRating: "5",
              worstRating: "1",
            },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

// ---------- Design tokens (Evestime Invest palette) ----------
const C = {
  bodydark: "#0A0F1C",
  panel: "#0F172A",
  brandblue: "#2563EB",
  amber: "#FCD34D",
};

// ---------- Header ----------
type MegaCol = { heading?: string; links: string[] };
type NavItem = { label: string; cols?: MegaCol[]; promo?: { title: string; body: string } };

const NAV: NavItem[] = [
  {
    label: "Company",
    cols: [
      { heading: "About Us", links: ["About Us", "Why Choose Us", "Our Infrastructure", "Awards", "Careers", "Regulations"] },
      { heading: "More", links: ["Support", "Compare Account", "Expert Trader", "FAQ", "Insurance", "Leverage"] },
    ],
    promo: { title: "Trading Excellence", body: "Global infrastructure, tier-1 liquidity and 24/5 client support." },
  },
  {
    label: "Markets",
    cols: [
      { heading: "Products", links: ["Bonds", "Share CFDs", "Indices", "Forex", "Commodities"] },
      { heading: " ", links: ["Crypto", "ETFs", "Spreads", "Trading Hours"] },
    ],
    promo: { title: "Access the Global Forex Market", body: "Deep liquidity across 60+ currency pairs, tight spreads from 0.0 pips." },
  },
  {
    label: "Platforms",
    cols: [
      { heading: "Trading Platforms", links: ["MetaTrader 4", "MetaTrader 5", "TradingView"] },
      { heading: "Tools", links: ["Technical View", "Trade VPS", "Trade Signals"] },
    ],
    promo: { title: "Advanced Trading Platforms", body: "Blazing-fast execution, algo trading and pro charting on desktop & mobile." },
  },
  {
    label: "Mirror Trading",
    cols: [
      { heading: "Copy Trading Services", links: ["Mirror Trading", "How It Works", "Browse Traders"] },
    ],
    promo: { title: "Mirror Trading", body: "Follow verified strategies with transparent performance and risk controls." },
  },
  { label: "Recap" },
];

function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  return (
    <header
      className="sticky top-0 z-50 border-b border-white/5 backdrop-blur"
      style={{ backgroundColor: `${C.bodydark}f2` }}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between text-white">
        <a href="#" className="flex items-center gap-2 shrink-0">
          <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-amber-300 to-blue-500 grid place-items-center font-black text-slate-900">
            M
          </div>
          <span className="font-bold tracking-wide">Evestime Invest</span>
        </a>

        <nav className="hidden lg:flex items-center gap-1" onMouseLeave={() => setOpen(null)}>
          {NAV.map((item) => (
            <div key={item.label} className="relative" onMouseEnter={() => setOpen(item.cols ? item.label : null)}>
              <button className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-white inline-flex items-center gap-1">
                {item.label}
                {item.cols && <ChevronDown className="h-3.5 w-3.5 opacity-70" />}
              </button>
              {item.cols && open === item.label && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-3"
                  style={{ width: item.cols.length === 1 ? 480 : 700 }}
                >
                  <div className="rounded-2xl border border-white/10 bg-slate-900/95 shadow-2xl p-6 grid gap-6"
                       style={{ gridTemplateColumns: `repeat(${item.cols.length + (item.promo ? 1 : 0)}, minmax(0,1fr))` }}>
                    {item.cols.map((col, i) => (
                      <div key={i}>
                        {col.heading && (
                          <div className="text-[11px] font-bold tracking-widest text-amber-300 mb-3 uppercase">
                            {col.heading}
                          </div>
                        )}
                        <ul className="space-y-2">
                          {col.links.map((l) => (
                            <li key={l}>
                              <a href="#" className="text-sm text-slate-300 hover:text-white block">{l}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    {item.promo && (
                      <div className="rounded-xl bg-gradient-to-br from-blue-600/20 to-amber-300/10 border border-white/10 p-4">
                        <div className="font-semibold text-white">{item.promo.title}</div>
                        <p className="mt-2 text-xs text-slate-300 leading-relaxed">{item.promo.body}</p>
                        <a href="#" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-amber-300">
                          Learn more <ArrowRight className="h-3 w-3" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-1 text-xs text-slate-300">
            <span className="h-5 w-5 rounded-sm bg-gradient-to-br from-red-500 via-white to-blue-600" aria-hidden />
            <span>EN</span>
            <ChevronDown className="h-3 w-3" />
          </div>
          <a
            href="#"
            className="relative inline-flex rounded-md p-[1px] bg-gradient-to-r from-amber-300 to-blue-400"
          >
            <span className="rounded-[5px] bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Login</span>
          </a>
          <button className="lg:hidden text-white" onClick={() => setMobile((v) => !v)} aria-label="Menu">
            {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobile && (
        <div className="lg:hidden border-t border-white/10 bg-slate-950 text-white">
          <div className="px-6 py-4 space-y-2">
            {NAV.map((n) => (
              <details key={n.label} className="group">
                <summary className="flex items-center justify-between py-2 cursor-pointer text-sm font-medium">
                  {n.label}
                  {n.cols && <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform" />}
                </summary>
                {n.cols && (
                  <div className="pl-3 pb-3 space-y-1">
                    {n.cols.flatMap((c) => c.links).map((l) => (
                      <a key={l} href="#" className="block py-1 text-sm text-slate-300">{l}</a>
                    ))}
                  </div>
                )}
              </details>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

// ---------- Hero ----------
function Hero() {
  return (
    <section id="heroSection" className="relative overflow-hidden" style={{ backgroundColor: C.bodydark }}>
      <div className="absolute inset-0 opacity-40 pointer-events-none"
           style={{ background: "radial-gradient(600px 300px at 20% 20%, rgba(37,99,235,0.35), transparent), radial-gradient(500px 300px at 80% 30%, rgba(252,211,77,0.15), transparent)" }} />
      <div className="max-w-[1400px] mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center relative">
        <div className="text-white">
          <p className="text-amber-300 font-semibold tracking-wide text-sm uppercase">
            Empower your financial journey with our cutting-edge stock trading platform.
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] bg-gradient-to-tr from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            Expert Trading Skills Only One Click Away.
          </h1>
          <p className="mt-5 text-slate-300 max-w-xl">
            Copy verified strategies from top-performing traders in real time. Regulated,
            insured and built for serious investors.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 px-6 py-3 font-semibold">
              Get Started <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold hover:bg-white/5">
              Explore Features
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-1"><Shield className="h-4 w-4 text-amber-300" /> Regulated</div>
            <div className="flex items-center gap-1"><Star className="h-4 w-4 text-amber-300" /> 4.6 Trustpilot</div>
            <div className="flex items-center gap-1"><Users className="h-4 w-4 text-amber-300" /> 500K+ users</div>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-2xl">
            <div className="flex items-center justify-between text-slate-300 text-xs">
              <span>Portfolio · Live</span>
              <span className="text-green-400">+12.4%</span>
            </div>
            <div className="mt-4 h-56 rounded-xl bg-slate-950/60 border border-white/5 relative overflow-hidden">
              <svg viewBox="0 0 400 200" className="absolute inset-0 h-full w-full">
                <defs>
                  <linearGradient id="hg" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#2563EB" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,160 C40,140 70,120 110,110 C150,100 180,130 220,100 C260,70 300,60 340,40 L400,30 L400,200 L0,200 Z" fill="url(#hg)" />
                <path d="M0,160 C40,140 70,120 110,110 C150,100 180,130 220,100 C260,70 300,60 340,40 L400,30" fill="none" stroke="#60A5FA" strokeWidth="2" />
              </svg>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { l: "AUM", v: "$2.8B" },
                { l: "Traders", v: "1,240" },
                { l: "Win rate", v: "72%" },
              ].map((k) => (
                <div key={k.l} className="rounded-lg bg-slate-900 border border-white/5 p-3">
                  <div className="text-[10px] uppercase text-slate-400">{k.l}</div>
                  <div className="mt-1 font-semibold text-white">{k.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Why Choose ----------
const WHY = [
  { icon: Copy, title: "Copy Elite Traders", desc: "Follow verified professional traders in one click." },
  { icon: Shield, title: "Risk Management", desc: "Stop-loss, position sizing and drawdown controls." },
  { icon: BarChart3, title: "Real-Time Analytics", desc: "Live P/L, exposure and performance dashboards." },
  { icon: Zap, title: "Instant Execution", desc: "Ultra-low-latency order routing to tier-1 liquidity." },
];
function WhyChoose() {
  return (
    <section className="py-20" style={{ backgroundColor: C.bodydark }}>
      <div className="max-w-[1400px] mx-auto px-6 text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Why Choose Our <span className="bg-gradient-to-r from-amber-300 to-blue-500 bg-clip-text text-transparent">Copy Trading Platform</span>
        </h2>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 hover:border-blue-500/40 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-blue-600/20 text-blue-400 grid place-items-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- How It Works ----------
const STEPS = [
  { n: "01", icon: Users, title: "Browse Top Traders", desc: "Explore verified profiles with transparent history." },
  { n: "02", icon: Target, title: "Select & Allocate", desc: "Choose traders and allocate your capital." },
  { n: "03", icon: Copy, title: "Start Copying", desc: "Trades mirror to your account automatically." },
  { n: "04", icon: TrendingUp, title: "Track Performance", desc: "Monitor P/L and rebalance any time." },
];
function HowItWorks() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
          How <span className="text-blue-600">Copy Trading</span> Works
        </h2>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map(({ n, icon: Icon, title, desc }, i) => (
            <div key={n} className="relative rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
              <div className="text-4xl font-black text-amber-300">{n}</div>
              <div className="mt-3 h-11 w-11 rounded-lg bg-blue-600 text-white grid place-items-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{desc}</p>
              {i < STEPS.length - 1 && (
                <ArrowRight className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Crypto Ticker ----------
const COINS = ["BTC","ETH","BNB","XRP","USDC","SOL","TRX","DOGE","ADA","LINK","XLM","LTC","AVAX","HBAR","SHIB","UNI","DOT","NEAR","ICP","ETC","AAVE","ATOM","ALGO","FIL","VET","DASH","XTZ","COMP","MKR","FTM"];
function Ticker({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden mc-fade-mask">
      <div className={`flex gap-6 w-max ${reverse ? "mc-marquee-rev" : "mc-marquee"}`}>
        {doubled.map((c, i) => (
          <div key={`${c}-${i}`} className="shrink-0 h-14 min-w-32 px-6 rounded-xl bg-slate-900/50 border border-white/10 flex items-center gap-3 text-white">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-300 to-blue-500 grid place-items-center text-[10px] font-black text-slate-900">
              {c.slice(0, 3)}
            </div>
            <span className="font-semibold text-sm">{c}</span>
            <span className="text-xs text-green-400">+{(Math.abs(c.charCodeAt(0) % 9) + 0.4).toFixed(2)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
function CryptoTicker() {
  return (
    <section className="py-10 space-y-4" style={{ backgroundColor: C.bodydark }}>
      <Ticker items={COINS} />
      <Ticker items={[...COINS].reverse()} reverse />
    </section>
  );
}

// ---------- Stock Cards ----------
const STOCKS = [
  { i: "TS", from: "from-red-500", to: "to-orange-500", n: "Tesla", t: "Revolutionizing the Automotive Industry", d: "Leading the EV transition with vertically integrated manufacturing and energy." },
  { i: "MT", from: "from-blue-500", to: "to-indigo-600", n: "Meta", t: "Shaping the Future of Social Connectivity", d: "Massive engagement moat plus aggressive AI and reality-lab investments." },
  { i: "NV", from: "from-green-500", to: "to-emerald-600", n: "NVIDIA", t: "Powering the Computing Evolution", d: "The de-facto compute layer for modern AI workloads and datacenters." },
  { i: "AP", from: "from-slate-500", to: "to-slate-700", n: "Apple", t: "Innovation and Reliability Leader", d: "A cash-generating hardware + services ecosystem with premium retention." },
];
function StockGrid() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
          Investment Rationale for <span className="text-blue-600">Top Stocks</span>
        </h2>
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {STOCKS.map((s) => (
            <div key={s.n} className="rounded-2xl bg-white border border-slate-200 p-6 flex gap-5 shadow-sm">
              <div className={`h-16 w-16 shrink-0 rounded-2xl bg-gradient-to-br ${s.from} ${s.to} grid place-items-center text-white font-bold text-lg`}>
                {s.i}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">{s.n}</h3>
                <p className="text-blue-600 font-medium text-sm mt-1">{s.t}</p>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{s.d}</p>
                <button className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700">
                  View Analysis <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Security ----------
function Security() {
  return (
    <section className="py-20 text-white" style={{ backgroundColor: C.bodydark }}>
      <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Security of Funds</h2>
          <p className="mt-3 text-amber-300 font-bold tracking-wide">$1 MILLION EXCESS LOSS INSURANCE PER ACCOUNT</p>
          <p className="mt-4 text-slate-300 max-w-xl">
            Client funds are held in segregated tier-1 bank accounts and protected by insurance
            underwritten at Lloyd's of London — so your capital is safe at every layer.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-200">
            {[
              { i: Shield, t: "Lloyd's of London insurance" },
              { i: DollarSign, t: "Up to $1M protection per account" },
              { i: Building2, t: "Segregated tier-1 bank funds" },
            ].map(({ i: Icon, t }) => (
              <li key={t} className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-blue-600/20 text-blue-400 grid place-items-center">
                  <Icon className="h-4 w-4" />
                </div>
                {t}
              </li>
            ))}
          </ul>
          <a href="#" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 px-5 py-3 font-semibold">
            Learn More About Security <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="rounded-3xl bg-slate-900/70 border border-white/10 p-6">
          <div className="text-sm text-slate-300 font-semibold">Protected Funds Overview</div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-slate-950/60 border border-white/5 p-4">
              <div className="text-3xl font-black text-amber-300">$2.8B+</div>
              <div className="text-xs text-slate-400 mt-1">Assets protected</div>
            </div>
            <div className="rounded-xl bg-slate-950/60 border border-white/5 p-4">
              <div className="text-3xl font-black text-blue-400">500K+</div>
              <div className="text-xs text-slate-400 mt-1">Active accounts</div>
            </div>
          </div>
          <div className="mt-4 h-52 rounded-xl bg-slate-950/60 border border-white/5 relative overflow-hidden">
            <svg viewBox="0 0 400 200" className="absolute inset-0 h-full w-full">
              <defs>
                <linearGradient id="sg" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#FCD34D" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,170 L40,150 L80,160 L120,120 L160,130 L200,90 L240,110 L280,70 L320,80 L360,40 L400,50 L400,200 L0,200 Z" fill="url(#sg)" />
              <path d="M0,170 L40,150 L80,160 L120,120 L160,130 L200,90 L240,110 L280,70 L320,80 L360,40 L400,50" fill="none" stroke="#FCD34D" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Platforms ----------
const PLATFORMS = [
  { n: "TradingView", i: "TV", feats: ["Advanced charting", "Custom indicators", "Alerts & scripts", "Multi-broker sync"] },
  { n: "Mastermind Traders", i: "MT", feats: ["Verified strategies", "Auto-copy engine", "Risk scoring", "Portfolio manager"] },
  { n: "RoboForex", i: "RF", feats: ["ECN pricing", "Instant deposits", "Bonus programs", "Islamic accounts"] },
  { n: "cOption", i: "CO", feats: ["Options screener", "Greeks analytics", "Backtesting", "Paper trading"] },
  { n: "DEGIRO", i: "DG", feats: ["Low-cost equities", "Global exchanges", "Portfolio reports", "Tax tools"] },
  { n: "IQ Option", i: "IQ", feats: ["Mobile-first UX", "150+ assets", "Fast withdrawals", "Practice account"] },
];
function Platforms() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
          Trading <span className="text-blue-600">Platforms</span>
        </h2>
        <p className="mt-3 text-center text-slate-600">Connect the tools you already love.</p>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLATFORMS.map((p) => (
            <div key={p.n} className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white grid place-items-center font-bold">
                  {p.i}
                </div>
                <h3 className="font-bold text-slate-900">{p.n}</h3>
              </div>
              <ul className="mt-5 space-y-2">
                {p.feats.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <button className="mt-5 w-full rounded-lg border border-slate-200 hover:border-blue-500 hover:text-blue-600 py-2 text-sm font-semibold text-slate-700">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Top Traders ----------
const TRADERS = [
  { n: "Alex Thompson", roi: "+127.3%", followers: "2.4K", risk: "Medium", riskColor: "bg-amber-100 text-amber-700", stars: 5 },
  { n: "Sarah Chen", roi: "+89.7%", followers: "1.8K", risk: "Low", riskColor: "bg-green-100 text-green-700", stars: 5 },
  { n: "Mike Rodriguez", roi: "+156.2%", followers: "3.1K", risk: "High", riskColor: "bg-red-100 text-red-700", stars: 4 },
];
function TopTraders() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
          Top Performing <span className="text-blue-600">Traders</span>
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {TRADERS.map((t, i) => (
            <div key={t.n} className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <div className={`h-14 w-14 rounded-full grid place-items-center text-white font-bold bg-gradient-to-br ${["from-blue-500 to-indigo-600","from-emerald-500 to-teal-600","from-orange-500 to-red-600"][i]}`}>
                  {t.n.split(" ").map(w => w[0]).join("")}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{t.n}</div>
                  <div className="flex items-center gap-0.5 mt-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className={`h-3.5 w-3.5 ${s < t.stars ? "fill-amber-400 text-amber-400" : "text-slate-300"}`} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-xs text-slate-500">12M ROI</div>
                  <div className="font-bold text-green-600">{t.roi}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Followers</div>
                  <div className="font-bold text-slate-900">{t.followers}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Risk</div>
                  <span className={`inline-block mt-0.5 px-2 py-0.5 rounded-full text-[10px] font-semibold ${t.riskColor}`}>{t.risk}</span>
                </div>
              </div>
              <button className="mt-5 w-full rounded-lg bg-blue-600 hover:bg-blue-500 text-white py-2.5 font-semibold text-sm">
                Copy Trader
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Trust & Regulated ----------
const BADGES = [
  { i: Shield, t: "CySEC Regulated" },
  { i: CheckCircle2, t: "FCA Licensed" },
  { i: Building2, t: "Bank-Level Security" },
  { i: DollarSign, t: "€20K Protection" },
];
const STATS = [
  { v: "500K+", l: "Active Users Worldwide" },
  { v: "$2.8B", l: "Total Trading Volume" },
  { v: "4.8★", l: "Trustpilot Rating" },
];
function Trust() {
  return (
    <section className="py-20 text-white" style={{ backgroundColor: C.bodydark }}>
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Trusted & Regulated</h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {BADGES.map(({ i: Icon, t }) => (
            <div key={t} className="rounded-xl border border-white/10 bg-slate-900/50 p-5 flex items-center gap-3">
              <Icon className="h-6 w-6 text-amber-300" />
              <span className="font-semibold">{t}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {STATS.map((s) => (
            <div key={s.l} className="text-center rounded-2xl border border-white/10 bg-gradient-to-br from-blue-600/10 to-amber-300/5 py-8">
              <div className="text-4xl font-black bg-gradient-to-r from-amber-300 to-blue-400 bg-clip-text text-transparent">{s.v}</div>
              <div className="mt-2 text-slate-300 text-sm">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Mobile App ----------
function MobileApp() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">Mobile</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">Copy Trade On-The-Go</h2>
          <p className="mt-4 text-slate-600 max-w-lg">
            The full Evestime Invest experience in your pocket — biometric login, push alerts and one-tap copy.
          </p>
          <ul className="mt-6 space-y-2 text-slate-700 text-sm">
            {["Biometric secure login","Real-time push alerts","One-tap copy & pause","Portfolio & risk analytics"].map((f) => (
              <li key={f} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> {f}</li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white px-5 py-3">
              <Apple className="h-5 w-5" />
              <div className="text-left leading-tight">
                <div className="text-[10px]">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white px-5 py-3">
              <Play className="h-5 w-5" />
              <div className="text-left leading-tight">
                <div className="text-[10px]">Get it on</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-64 h-[520px] rounded-[2.5rem] bg-slate-900 p-3 shadow-2xl border-4 border-slate-800">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 h-5 w-24 rounded-full bg-slate-950" />
            <div className="h-full w-full rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-5 text-white overflow-hidden">
              <div className="text-xs text-slate-400 mt-4">Portfolio</div>
              <div className="text-2xl font-bold mt-1">$48,290.12</div>
              <div className="text-green-400 text-xs">+ $612.40 today</div>
              <div className="mt-4 h-24 rounded-lg bg-white/5 relative overflow-hidden">
                <svg viewBox="0 0 200 100" className="absolute inset-0 h-full w-full">
                  <path d="M0,80 C30,60 60,70 90,50 C120,30 150,55 180,20 L200,10 L200,100 L0,100 Z" fill="#2563EB" fillOpacity="0.35" />
                  <path d="M0,80 C30,60 60,70 90,50 C120,30 150,55 180,20 L200,10" fill="none" stroke="#60A5FA" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="mt-4 space-y-2">
                {[["Alex T.", "+12%"], ["Sarah C.", "+8%"], ["Mike R.", "+21%"]].map(([n, p]) => (
                  <div key={n} className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 text-xs">
                    <span>{n}</span>
                    <span className="text-green-400 font-semibold">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Support ----------
const SUPPORT = [
  { i: MessageCircle, t: "Live Chat", d: "Chat with a specialist 24/5.", cta: "Start Chat" },
  { i: HelpCircle, t: "Help Center", d: "Guides, tutorials and FAQs.", cta: "Browse Articles" },
  { i: Mail, t: "Email Support", d: "Reply within 4 business hours.", cta: "Send Email" },
  { i: Phone, t: "Phone Support", d: "Speak to us across regions.", cta: "Call Now" },
];
function Support() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">Need Help?</h2>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SUPPORT.map(({ i: Icon, t, d, cta }) => (
            <div key={t} className="rounded-2xl border border-slate-200 p-6 text-center hover:border-blue-500 transition-colors">
              <div className="mx-auto h-14 w-14 rounded-2xl bg-blue-600/10 text-blue-600 grid place-items-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-slate-900">{t}</h3>
              <p className="mt-1 text-sm text-slate-600">{d}</p>
              <button className="mt-4 text-sm font-semibold text-blue-600 hover:text-blue-700">{cta} →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Features ----------
const FEATURES = [
  { i: Calendar, t: "Premium Economic Calendar", d: "Global macro events with instant alerts." },
  { i: LineChart, t: "Technical Views", d: "Analyst-grade chart setups delivered daily." },
  { i: Bot, t: "Alpha EA", d: "Automated strategies for MT4/MT5 accounts." },
  { i: Sparkles, t: "AI Market Buzz", d: "LLM-powered sentiment from news + social." },
  { i: Signal, t: "Trade Signals", d: "Curated entries, TP and SL in real time." },
  { i: Wallet, t: "Cashback Bonus", d: "Get rebated on every executed lot." },
];
function Features() {
  return (
    <section id="features" className="py-20 text-white" style={{ background: "linear-gradient(180deg,#020617,#0a0f1c 60%,#0A0F1C)" }}>
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Everything you need to <span className="bg-gradient-to-r from-amber-300 to-blue-400 bg-clip-text text-transparent">trade smarter</span>
        </h2>
        <div className="mt-12 grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {FEATURES.map(({ i: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 hover:border-amber-300/40 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-amber-300/10 text-amber-300 grid place-items-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-bold">{t}</h3>
              <p className="mt-2 text-sm text-slate-400">{d}</p>
              <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-amber-300">
                Find out more <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Benefits ----------
const BENEFITS = [
  { i: Coins, t: "Trade with others' knowledge for FREE" },
  { i: UsersRound, t: "Join a thriving community of traders" },
  { i: Timer, t: "Save time creating your own strategy" },
  { i: UserRound, t: "Share your own strategy and profit" },
];
function Benefits() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          How you can benefit from <span className="text-blue-600">Copy Trading</span>?
        </h2>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map(({ i: Icon, t }) => (
            <div key={t} className="rounded-2xl border border-slate-200 p-6">
              <div className="mx-auto h-14 w-14 rounded-2xl bg-gradient-to-br from-amber-300 to-blue-500 grid place-items-center">
                <Icon className="h-6 w-6 text-slate-900" />
              </div>
              <p className="mt-4 font-semibold text-slate-800">{t}</p>
            </div>
          ))}
        </div>
        <a href="#" className="mt-10 inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 font-semibold">
          Start Copying <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

// ---------- Leaders (1000+) ----------
const LEADERS = [
  { n: "Thinh Ph...", gain: 48, all: 50, risk: "Medium", followers: 62, last7: 14, color: "#22c55e" },
  { n: "Maximuz",   gain: 122, all: 295, risk: "High", followers: 218, last7: 32, color: "#60a5fa" },
  { n: "Axion",     gain: 35, all: 236, risk: "Low", followers: 480, last7: 9, color: "#f59e0b" },
  { n: "DT Trading",gain: 74, all: 141, risk: "Medium", followers: 156, last7: 21, color: "#a78bfa" },
  { n: "EA Trader", gain: 61, all: 188, risk: "Medium", followers: 92, last7: 12, color: "#ec4899" },
  { n: "VIP GU HY", gain: 210, all: 512, risk: "High", followers: 402, last7: 58, color: "#10b981" },
];
function riskChip(r: string) {
  return r === "Low" ? "bg-green-100 text-green-700"
    : r === "High" ? "bg-red-100 text-red-700"
    : "bg-amber-100 text-amber-700";
}
function Sparkline({ color, seed }: { color: string; seed: number }) {
  const pts = useMemo(() => {
    const rnd = (x: number) => Math.abs(Math.sin(x * seed) * 20 + 20);
    return Array.from({ length: 12 }).map((_, i) => `${i * 10},${50 - rnd(i + 1)}`).join(" ");
  }, [seed]);
  return (
    <svg viewBox="0 0 120 50" className="h-14 w-full">
      <polyline points={pts} fill="none" stroke={color} strokeWidth="2" />
    </svg>
  );
}
function Leaders() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
          More than <span className="text-blue-600">1000 leaders</span> to choose from
        </h2>
        <p className="mt-3 text-center text-slate-600">Interactive Evestime Invest Copy — transparent, ranked, verified.</p>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEADERS.map((l, i) => (
            <div key={l.n} className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-gradient-to-br from-slate-300 to-slate-500 grid place-items-center text-white font-bold text-sm">
                    {l.n.slice(0, 2)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{l.n}</div>
                    <div className="text-[11px] text-slate-500">Verified strategy</div>
                  </div>
                </div>
                <button className="rounded-full bg-green-500 hover:bg-green-600 text-white text-xs font-bold px-4 py-1.5">COPY</button>
              </div>
              <div className="mt-4 flex items-end justify-between">
                <div>
                  <div className="text-3xl font-black text-green-600">+{l.gain}%</div>
                  <div className="text-[11px] text-slate-500">All time gain +{l.all}%</div>
                </div>
                <div className="w-28"><Sparkline color={l.color} seed={i + 1} /></div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-[11px]">
                <span className={`px-2 py-0.5 rounded-full font-semibold ${riskChip(l.risk)}`}>{l.risk} risk</span>
                <span className="text-slate-500">· {l.followers} followers</span>
                <span className="text-slate-500">· {l.last7} last 7d</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 font-semibold">
            Start Copying <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------- Trustpilot ----------
const REVIEWS = [
  { n: "Alex Johnson", t: "Copy trading works for me", b: "I've tried a lot of platforms — Evestime Invest has the best trader transparency I've seen." },
  { n: "David Wilson", t: "Speed of light.", b: "Execution and withdrawals are lightning fast. Support answered inside 3 minutes." },
  { n: "Maria Garcia", t: "Great analytics", b: "The risk dashboard alone is worth switching. Finally see my true exposure." },
  { n: "Peter Novak", t: "Trustworthy", b: "Regulated, insured and clear on fees. Exactly what a serious retail trader wants." },
  { n: "Aisha Rahman", t: "Copy + AI signals combo", b: "Combining Alpha EA with a top leader has been a game changer for my account." },
  { n: "Chris Yamamoto", t: "Simple and clean", b: "The onboarding is genuinely simple. My grandma could copy a trader." },
  { n: "Elena Petrova", t: "Best customer support", b: "24/5 chat that actually helps and doesn't paste macros. Rare these days." },
  { n: "Marco Rossi", t: "Solid mobile app", b: "Push alerts, biometric login, and one-tap copy. Almost never open desktop now." },
  { n: "Lukas Meier", t: "Best BTC DCA setup", b: "Automated my Bitcoin DCA across two leaders and finally stopped timing tops. Up 34% YTD." },
  { n: "Priya Shah", t: "ETH staking made easy", b: "The Ethereum staking flow is one tap. Rewards land daily and the tax export is a lifesaver." },
  { n: "Tomás Álvarez", t: "SOL trader worth every sat", b: "Copied a Solana momentum leader through the last cycle — clean risk controls, no rug drama." },
  { n: "Nadia Okafor", t: "Stablecoin yield done right", b: "Parked idle USDC in the low-risk vault; transparent APY and instant redemptions when I needed it." },
  { n: "Hiroshi Tanaka", t: "AI x crypto signals", b: "The AI Market Buzz caught the L2 narrative early. Rotated into ETH L2s two weeks before the pump." },
  { n: "Sofia Fernandes", t: "RWA & BTC ETF exposure", b: "Love that I can copy leaders trading tokenized T-bills alongside spot BTC ETF baskets in one portfolio." },
];
function Trustpilot() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            We're rated <span className="text-green-600">Excellent</span> on Trustpilot
          </h2>
          <div className="mt-4 flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-7 w-7 bg-green-500 grid place-items-center">
                <Star className="h-4 w-4 fill-white text-white" />
              </div>
            ))}
          </div>
          <p className="mt-3 text-slate-600">Rated <span className="font-bold text-slate-900">4.6 / 5</span> based on 2,782 reviews on Trustpilot</p>
          <p className="text-sm text-slate-500">Showing our 4 & 5 star reviews</p>
        </div>
        <div className="mt-10 max-h-[600px] overflow-y-auto pr-2">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {REVIEWS.concat(REVIEWS).map((r, i) => (
              <div key={i} className="rounded-xl border border-slate-200 p-5 bg-white">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <div key={s} className="h-4 w-4 bg-green-500 grid place-items-center">
                      <Star className="h-2.5 w-2.5 fill-white text-white" />
                    </div>
                  ))}
                </div>
                <h3 className="mt-3 font-bold text-slate-900 text-sm">{r.n}</h3>
                <h4 className="text-sm font-semibold text-slate-800 mt-1">{r.t}</h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">{r.b}</p>
                <div className="mt-3 text-[10px] text-slate-400 font-semibold">Evestime Invest Reviews</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Liquidity Providers ----------
const LP = ["Bank of Louisville", "GoldenBridge", "TitanFX Prime", "Ocean Liquidity", "NorthPeak", "Meridian Bank", "AtlasFX", "Zenith Capital"];
function Liquidity() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Liquidity Providers</h2>
        <p className="mt-3 text-slate-600">Direct market access via tier-1 banks and prime brokers.</p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {LP.map((n) => (
            <div key={n} className="h-20 rounded-xl bg-white border border-slate-200 grid place-items-center text-slate-500 font-semibold text-sm">
              {n}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- FAQ ----------
const FAQ_CATS = [
  "All Questions",
  "Account & Registration",
  "Trading & Platforms",
  "Deposits & Withdrawals",
  "Security & Regulation",
  "Copy Trading",
];
const FAQ_ITEMS: { q: string; a: string; c: string }[] = [
  { c: "Account & Registration", q: "How do I open a trading account with Evestime Invest?", a: "Click 'Get Started', complete the KYC form, verify your identity and email, then fund your account. Most accounts are approved within 24 hours." },
  { c: "Account & Registration", q: "What documents do I need to verify my identity?", a: "A government-issued photo ID and a recent proof of address (utility bill or bank statement dated within 3 months)." },
  { c: "Trading & Platforms", q: "Which trading platforms are supported?", a: "MetaTrader 4, MetaTrader 5, TradingView and our proprietary web/mobile terminals." },
  { c: "Trading & Platforms", q: "Can I use trading bots or Expert Advisors?", a: "Yes. MT4/MT5 support EAs and our Alpha EA marketplace lets you deploy curated strategies in one click." },
  { c: "Deposits & Withdrawals", q: "What deposit methods are available?", a: "Bank transfer, cards, and major stablecoins. Deposits are usually credited within minutes." },
  { c: "Deposits & Withdrawals", q: "How long do withdrawals take?", a: "Card and crypto withdrawals process within 24 hours. Bank wires take 1–3 business days." },
  { c: "Security & Regulation", q: "Is Evestime Invest regulated?", a: "Yes — Evestime Invest operates under CySEC and FCA regulation, with client funds segregated in tier-1 banks." },
  { c: "Security & Regulation", q: "Are my funds insured?", a: "Yes, up to $1M per account via a Lloyd's of London excess-loss policy in addition to statutory investor protection." },
  { c: "Copy Trading", q: "How does copy trading work?", a: "Choose a verified leader, allocate capital, and your account mirrors their trades proportionally. You can pause or stop copying at any time." },
  { c: "Copy Trading", q: "Do I control risk when copying?", a: "Yes — set max drawdown, position size caps and stop-copy triggers. You always keep full control of your funds." },
];
function FAQ() {
  const [cat, setCat] = useState("All Questions");
  const [q, setQ] = useState("");
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const counts = useMemo(() => {
    const map: Record<string, number> = { "All Questions": FAQ_ITEMS.length };
    FAQ_ITEMS.forEach((x) => { map[x.c] = (map[x.c] || 0) + 1; });
    return map;
  }, []);
  const filtered = FAQ_ITEMS.filter((x) => (cat === "All Questions" || x.c === cat) && (x.q.toLowerCase().includes(q.toLowerCase()) || x.a.toLowerCase().includes(q.toLowerCase())));
  return (
    <section className="py-20 text-white" style={{ background: "linear-gradient(180deg,#020617,#0f172a,#020617)" }}>
      <div className="max-w-[1000px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Frequently Asked{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Questions</span>
        </h2>
        <div className="mt-8 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search questions..."
            className="w-full rounded-xl bg-slate-900/70 border border-white/10 pl-11 pr-4 py-3 text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          {FAQ_CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`text-xs font-semibold px-4 py-2 rounded-full border transition-colors ${
                cat === c
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 border-transparent text-white"
                  : "border-white/10 text-slate-300 hover:border-white/30"
              }`}
            >
              {c} <span className="opacity-70">({counts[c] || 0})</span>
            </button>
          ))}
        </div>
        <div className="mt-8 space-y-4">
          {filtered.map((it, i) => {
            const open = openIdx === i;
            return (
              <div key={it.q} className="rounded-xl border border-white/10 bg-slate-900/50 overflow-hidden">
                <button
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="w-full flex items-center justify-between text-left px-5 py-4 hover:bg-white/5"
                >
                  <div>
                    <h3 className="font-semibold">{it.q}</h3>
                    <div className="text-[11px] text-blue-300 mt-1">{it.c}</div>
                  </div>
                  <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
                </button>
                {open && (
                  <div className="px-5 pb-5 text-sm text-slate-300 leading-relaxed">{it.a}</div>
                )}
              </div>
            );
          })}
          {filtered.length === 0 && (
            <p className="text-center text-slate-400 text-sm py-8">No questions match your search.</p>
          )}
        </div>
      </div>
    </section>
  );
}

// ---------- Footer ----------
function Footer() {
  return (
    <footer className="text-slate-300" style={{ backgroundColor: "#050914" }}>
      <div className="max-w-[1400px] mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-md bg-gradient-to-tr from-amber-300 to-blue-500 grid place-items-center font-black text-slate-900">M</div>
            <span className="font-bold text-white text-lg">Evestime Invest</span>
          </div>
          <p className="mt-3 text-sm text-slate-400 max-w-xs">
            Cutting-edge finance technologies that transform how you interact with digital markets.
          </p>
          <div className="mt-5 flex gap-3">
            {[Twitter, Instagram, Linkedin].map((I, i) => (
              <a key={i} href="#" className="h-9 w-9 rounded-full bg-white/5 hover:bg-blue-600 grid place-items-center transition-colors">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="text-white font-semibold">Products</div>
          <ul className="mt-4 space-y-2 text-sm">
            {["Trading Platform", "Mobile App", "AI Assistant", "Data Analytics"].map((l) => (
              <li key={l}><a href="#" className="hover:text-white">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold">Company</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold">Contact Info</div>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li>
              <div className="text-slate-300 font-semibold">London Office</div>
              24/25th Floor, One Canada Square, Canary Wharf, London, E14 5AB, UK
            </li>
            <li>
              <div className="text-slate-300 font-semibold">US Office</div>
              85/88 Willow Road, Menlo Park, California 94025, USA
            </li>
            <li>support@evestimeinvest.com</li>
          </ul>
          <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 rounded-md bg-white/5 border border-white/10 px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
            />
            <button className="rounded-md bg-blue-600 hover:bg-blue-500 px-4 py-2 text-sm font-semibold text-white">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 Evestime Invest. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            <Link to="/about" className="hover:text-white">About</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ---------- Current Crypto Trends ----------
const CRYPTO_TRENDS = [
  { sym: "BTC", name: "Bitcoin ETF Inflows", change: "+8.4%", body: "Spot Bitcoin ETFs pulled in $1.2B this week as institutional allocators rotate into hard-capped assets.", from: "from-amber-400", to: "to-orange-500" },
  { sym: "ETH", name: "Ethereum L2 Growth", change: "+12.7%", body: "Layer-2 TVL just broke a new all-time high. Base, Arbitrum and OP dominate DEX volume rankings.", from: "from-indigo-500", to: "to-blue-600" },
  { sym: "SOL", name: "Solana DeFi Surge", change: "+15.1%", body: "Solana daily DEX volume is outpacing Ethereum mainnet for the third week in a row.", from: "from-fuchsia-500", to: "to-purple-600" },
  { sym: "RWA", name: "RWA Tokenization", change: "+6.9%", body: "Tokenized US Treasuries crossed $2.4B in AUM as more funds move short-duration yield on-chain.", from: "from-emerald-500", to: "to-teal-600" },
  { sym: "AI", name: "AI × Crypto Narrative", change: "+18.3%", body: "AI-agent and compute tokens continue to outperform on strong on-chain usage and new integrations.", from: "from-cyan-500", to: "to-sky-600" },
  { sym: "USD", name: "Stablecoin Adoption", change: "+4.2%", body: "Combined stablecoin supply hit $180B — a fresh record as EM users lean on dollar rails.", from: "from-green-500", to: "to-emerald-600" },
];
function CryptoTrends() {
  return (
    <section className="py-20 text-white" style={{ backgroundColor: C.bodydark }}>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center">
          <span className="text-amber-300 text-xs font-bold tracking-widest uppercase">Live market pulse</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">
            Current <span className="bg-gradient-to-r from-amber-300 to-blue-400 bg-clip-text text-transparent">Crypto Trends</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto">
            The narratives driving this cycle — tracked by Evestime Invest research and reflected in our top leader strategies.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CRYPTO_TRENDS.map((t) => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 hover:border-amber-300/40 transition-colors">
              <div className="flex items-center justify-between">
                <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${t.from} ${t.to} grid place-items-center font-black text-slate-900`}>
                  {t.sym}
                </div>
                <span className="rounded-full bg-green-500/15 text-green-400 text-xs font-bold px-3 py-1">
                  {t.change} · 7d
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{t.name}</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">{t.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-[11px] text-slate-500">
          Illustrative market context. Not financial advice. Crypto assets are volatile — trade responsibly.
        </p>
      </div>
    </section>
  );
}

// ---------- Crypto Testimonials Slider ----------
const CRYPTO_REVIEWS = [
  { n: "Lukas Meier", loc: "Zürich, CH", asset: "BTC", t: "Best BTC DCA setup", b: "Automated my Bitcoin DCA across two leaders and finally stopped timing tops. Up 34% YTD with clear drawdown limits." },
  { n: "Priya Shah", loc: "Mumbai, IN", asset: "ETH", t: "ETH staking made easy", b: "The Ethereum staking flow is one tap. Rewards land daily and the tax export is a lifesaver at year-end." },
  { n: "Tomás Álvarez", loc: "Madrid, ES", asset: "SOL", t: "SOL trader worth every sat", b: "Copied a Solana momentum leader through the whole cycle — clean risk controls, no rug drama." },
  { n: "Nadia Okafor", loc: "Lagos, NG", asset: "USDC", t: "Stablecoin yield done right", b: "Parked idle USDC in the low-risk vault; transparent APY and instant redemptions when I needed liquidity." },
  { n: "Hiroshi Tanaka", loc: "Tokyo, JP", asset: "AI", t: "AI × crypto signals", b: "The AI Market Buzz caught the L2 narrative early. Rotated into ETH L2s two weeks before the pump." },
  { n: "Sofia Fernandes", loc: "Lisbon, PT", asset: "RWA", t: "RWA & BTC ETF exposure", b: "Love that I can copy leaders trading tokenized T-bills alongside spot BTC ETF baskets in one portfolio." },
  { n: "Ryan Chen", loc: "Singapore, SG", asset: "BTC", t: "Halving cycle nailed", b: "Followed a macro leader through the halving — sized in early, trimmed on strength. Textbook execution." },
  { n: "Amara Diallo", loc: "Dakar, SN", asset: "ETH", t: "L2 rotations", b: "Base and Arbitrum plays surfaced days before mainstream feeds. Feels like an edge, not a lag." },
];
function CryptoTestimonialsSlider() {
  const [idx, setIdx] = useState(0);
  const [perView, setPerView] = useState(1);
  useEffect(() => {
    const calc = () => setPerView(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);
  const maxIdx = Math.max(0, CRYPTO_REVIEWS.length - perView);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i >= maxIdx ? 0 : i + 1)), 5000);
    return () => clearInterval(id);
  }, [maxIdx]);
  const clampedIdx = Math.min(idx, maxIdx);
  return (
    <section className="py-20 text-white" style={{ backgroundColor: C.panel }} aria-labelledby="crypto-reviews-heading">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="text-amber-300 text-xs font-bold tracking-widest uppercase">Crypto trader stories</span>
            <h2 id="crypto-reviews-heading" className="mt-2 text-3xl md:text-4xl font-bold">
              Real traders. <span className="bg-gradient-to-r from-amber-300 to-blue-400 bg-clip-text text-transparent">Real crypto results.</span>
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => setIdx((i) => Math.max(0, i - 1))}
              className="h-11 w-11 rounded-full border border-white/15 grid place-items-center hover:bg-white/5 disabled:opacity-40"
              disabled={clampedIdx === 0}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => setIdx((i) => Math.min(maxIdx, i + 1))}
              className="h-11 w-11 rounded-full border border-white/15 grid place-items-center hover:bg-white/5 disabled:opacity-40"
              disabled={clampedIdx >= maxIdx}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="mt-10 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${clampedIdx * (100 / perView)}%)` }}
          >
            {CRYPTO_REVIEWS.map((r) => (
              <div
                key={r.n}
                className="shrink-0 px-3"
                style={{ width: `${100 / perView}%` }}
              >
                <article className="h-full rounded-2xl border border-white/10 bg-slate-900/60 p-6 hover:border-amber-300/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-full bg-gradient-to-tr from-amber-300 to-blue-500 grid place-items-center font-black text-slate-900">
                      {r.n.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold">{r.n}</div>
                      <div className="text-xs text-slate-400">{r.loc} · {r.asset}</div>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-1" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-300 text-amber-300" />
                    ))}
                  </div>
                  <h3 className="mt-3 font-semibold">{r.t}</h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">{r.b}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label="Testimonial pages">
          {Array.from({ length: maxIdx + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === clampedIdx}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setIdx(i)}
              className={`h-2 rounded-full transition-all ${i === clampedIdx ? "w-8 bg-amber-300" : "w-2 bg-white/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Cookie Consent ----------
const COOKIE_KEY = "evestime-cookie-consent-v1";
function CookieConsent() {
  const [choice, setChoice] = useState<"unknown" | "accepted" | "rejected">("unknown");
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(COOKIE_KEY);
      if (stored === "accepted" || stored === "rejected") setChoice(stored);
    } catch {
      /* ignore */
    }
  }, []);
  const decide = (value: "accepted" | "rejected") => {
    try {
      window.localStorage.setItem(COOKIE_KEY, value);
    } catch {
      /* ignore */
    }
    setChoice(value);
  };
  if (choice !== "unknown") return null;
  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-3 bottom-3 z-[60] md:inset-x-auto md:right-6 md:left-6 md:bottom-6"
    >
      <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-[#0A0F1C]/95 backdrop-blur px-5 py-4 md:px-6 md:py-5 shadow-2xl text-white">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1 text-sm text-slate-300 leading-relaxed">
            <p className="font-semibold text-white">We use cookies</p>
            <p className="mt-1">
              Evestime Invest uses cookies to run the site, remember your preferences and measure aggregate usage.
              Read our{" "}
              <Link to="/privacy" className="underline text-amber-300 hover:text-amber-200">Privacy Policy</Link>
              {" "}and{" "}
              <Link to="/terms" className="underline text-amber-300 hover:text-amber-200">Terms of Service</Link>.
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            <button
              type="button"
              onClick={() => decide("rejected")}
              className="min-h-11 px-4 rounded-full border border-white/20 text-sm font-semibold hover:bg-white/5"
            >
              Reject
            </button>
            <button
              type="button"
              onClick={() => decide("accepted")}
              className="min-h-11 px-5 rounded-full bg-amber-300 text-slate-900 text-sm font-bold hover:bg-amber-200"
            >
              Accept all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- Page ----------
function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: C.bodydark }}>
      <Header />
      <main>
        <Hero />
        <WhyChoose />
        <HowItWorks />
        <CryptoTicker />
        <CryptoTrends />
        <CryptoTestimonialsSlider />
        <StockGrid />
        <Security />
        <Platforms />
        <TopTraders />
        <Trust />
        <MobileApp />
        <Support />
        <Features />
        <Benefits />
        <Leaders />
        <Trustpilot />
        <Liquidity />
        <FAQ />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}


