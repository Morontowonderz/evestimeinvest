import { createFileRoute, Link } from "@tanstack/react-router";

const CANONICAL = "https://carbon-craft-connect.lovable.app/terms";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Evestime Invest" },
      {
        name: "description",
        content:
          "The terms that govern your use of Evestime Invest — eligibility, accounts, acceptable use, crypto risk disclosures and limitation of liability.",
      },
      { property: "og:title", content: "Terms of Service — Evestime Invest" },
      {
        property: "og:description",
        content: "Read the Evestime Invest Terms of Service before opening an account.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: CANONICAL },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Terms of Service — Evestime Invest" },
      { name: "twitter:description", content: "Terms governing your use of Evestime Invest." },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
  component: TermsPage,
});

const SECTIONS: { h: string; p: string }[] = [
  {
    h: "1. Acceptance of terms",
    p: "By creating an Evestime Invest account or using our services you agree to these Terms of Service. If you do not agree, do not use the platform.",
  },
  {
    h: "2. Eligibility",
    p: "You must be at least 18 years old, legally able to enter into a binding contract, and not resident in a jurisdiction where our services are restricted.",
  },
  {
    h: "3. Accounts & KYC",
    p: "You agree to provide accurate information and complete identity verification. You are responsible for keeping your credentials confidential and for all activity under your account.",
  },
  {
    h: "4. Acceptable use",
    p: "Do not use the platform for money laundering, market manipulation, unauthorized automated access or any activity that violates applicable law. We may suspend accounts that breach these rules.",
  },
  {
    h: "5. Copy trading disclosures",
    p: "Copy trading involves mirroring the trades of another user. Past performance does not guarantee future results. You retain full responsibility for your allocations and may pause or stop copying at any time.",
  },
  {
    h: "6. Crypto & market risk",
    p: "Digital assets and leveraged instruments are volatile and can lose value rapidly. Only trade with capital you can afford to lose. Nothing on this site is investment advice.",
  },
  {
    h: "7. Fees",
    p: "Applicable spreads, commissions and copy-performance fees are disclosed in your account dashboard before any transaction. We may update fees with reasonable notice.",
  },
  {
    h: "8. Intellectual property",
    p: "All Evestime Invest software, branding and content are our property or licensed to us. You receive a limited, revocable licence to use the platform for its intended purpose.",
  },
  {
    h: "9. Limitation of liability",
    p: "To the maximum extent permitted by law, Evestime Invest is not liable for indirect, incidental or consequential damages, or for losses arising from market movements or third-party service interruptions.",
  },
  {
    h: "10. Governing law",
    p: "These terms are governed by the laws of Switzerland. Disputes are subject to the exclusive jurisdiction of the courts of Zürich, unless mandatory local law provides otherwise.",
  },
  {
    h: "11. Contact",
    p: "Questions about these terms? Email legal@evestimeinvest.com or write to Evestime Invest, Bahnhofstrasse 42, 8001 Zürich, Switzerland.",
  },
];

function TermsPage() {
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
            <Link to="/about" className="hover:text-white">About</Link>
            <Link to="/privacy" className="hover:text-white">Privacy</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-amber-300 font-semibold tracking-widest text-xs uppercase">Legal</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-extrabold">Terms of Service</h1>
        <p className="mt-3 text-slate-400 text-sm">Last updated: January 2026</p>
        <p className="mt-6 text-slate-300 leading-relaxed">
          These Terms of Service govern your access to and use of Evestime Invest. This is
          informational content and does not constitute legal advice; consult a qualified
          professional for advice on your situation.
        </p>
        <div className="mt-10 space-y-8">
          {SECTIONS.map((s) => (
            <section key={s.h}>
              <h2 className="text-xl font-bold">{s.h}</h2>
              <p className="mt-2 text-slate-300 leading-relaxed">{s.p}</p>
            </section>
          ))}
        </div>
      </main>

      <footer className="border-t border-white/5 bg-[#050914]">
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 Evestime Invest. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/about" className="hover:text-white">About</Link>
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/" className="hover:text-white">Home</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
