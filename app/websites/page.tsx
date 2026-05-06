"use client";

import { useState } from "react";
import TopNavigation from "@/components/TopNavigation";
import Footer from "@/components/Footer";
import { useCalendly } from "@/components/CalendlyProvider";

type PriceRow = {
  label: string;
  single: string;
  upTo5: string;
  fiveToTen: string;
  tenToFifteen: string;
  perPage?: string;
  turnaround: string;
};

type Tier = {
  id: "standard" | "premium" | "elite";
  name: string;
  symbol: string;
  tagline: string;
  highlight?: boolean;
  rows: PriceRow[];
};

type PackageDef = {
  id: "design" | "dev" | "bundle";
  name: string;
  shortName: string;
  description: string;
  startsAt: string;
  badge?: string;
  bestFor: string;
  tiers: Tier[];
};

// Prices derived from base white-label rates with a 40% uplift for direct clients,
// rounded to clean retail figures.
const packages: PackageDef[] = [
  {
    id: "design",
    name: "Website Design",
    shortName: "Design only",
    description:
      "Pixel-perfect Figma designs of every page, every breakpoint. You take the file to your own dev team or give it back to us to build.",
    startsAt: "From $245",
    bestFor: "Founders who already have a developer or design system, and just need a website designer for the next funding-grade marketing site.",
    tiers: [
      {
        id: "standard",
        name: "Standard",
        symbol: "⚡",
        tagline: "Template layout · clean colours, type, and spacing",
        rows: [
          { label: "Single page", single: "$245", upTo5: "$700", fiveToTen: "$980", tenToFifteen: "$1,190", perPage: "$98 / page", turnaround: "2 to 3 days" },
        ],
      },
      {
        id: "premium",
        name: "Premium",
        symbol: "✦",
        tagline: "Custom layout · brand typography · wireframes",
        highlight: true,
        rows: [
          { label: "Single page", single: "$490", upTo5: "$1,470", fiveToTen: "$1,960", tenToFifteen: "$2,450", perPage: "$196 / page", turnaround: "3 to 5 days" },
        ],
      },
      {
        id: "elite",
        name: "Elite",
        symbol: "♛",
        tagline: "Art direction · illustration · motion · brand book",
        rows: [
          { label: "Single page", single: "$910", upTo5: "$2,730", fiveToTen: "$3,710", tenToFifteen: "$4,690", perPage: "$350 / page", turnaround: "5 to 7 days" },
        ],
      },
    ],
  },
  {
    id: "dev",
    name: "WordPress Development",
    shortName: "Dev only",
    description:
      "You bring the design, we build it. Pixel-perfect, responsive, performant WordPress on the page builder of your choice.",
    startsAt: "From $196",
    bestFor: "Founders who already have a designer (or Figma file) and need a WordPress build with proper performance, on-page SEO, and CMS structure.",
    tiers: [
      {
        id: "standard",
        name: "Standard",
        symbol: "⚡",
        tagline: "Straightforward build · basic plugins",
        rows: [
          { label: "Single page", single: "$196", upTo5: "$560", fiveToTen: "$770", tenToFifteen: "$980", perPage: "$77 / page", turnaround: "3 to 5 days" },
        ],
      },
      {
        id: "premium",
        name: "Premium",
        symbol: "✦",
        tagline: "Custom build · animations · CRM integrations",
        highlight: true,
        rows: [
          { label: "Single page", single: "$392", upTo5: "$1,190", fiveToTen: "$1,680", tenToFifteen: "$2,100", perPage: "$154 / page", turnaround: "5 to 7 days" },
        ],
      },
      {
        id: "elite",
        name: "Elite",
        symbol: "♛",
        tagline: "Complex build · GSAP animations · performance audit",
        rows: [
          { label: "Single page", single: "$700", upTo5: "$2,100", fiveToTen: "$2,940", tenToFifteen: "$3,710", perPage: "$280 / page", turnaround: "7 to 10 days" },
        ],
      },
    ],
  },
  {
    id: "bundle",
    name: "Design + Development",
    shortName: "Design + Dev",
    description:
      "End-to-end. We design, we build, we ship. One brief, one team, one delivery. Bundle pricing applied automatically.",
    startsAt: "From $392",
    badge: "Most popular",
    bestFor: "Founders who want a single point of accountability for the whole site, and the best price-to-quality ratio across the three packages.",
    tiers: [
      {
        id: "standard",
        name: "Standard",
        symbol: "⚡",
        tagline: "Template layout, straightforward build",
        rows: [
          { label: "Single page", single: "$392", upTo5: "$1,225", fiveToTen: "$1,610", tenToFifteen: "$2,030", perPage: "$168 / page", turnaround: "5 to 7 days" },
        ],
      },
      {
        id: "premium",
        name: "Premium",
        symbol: "✦",
        tagline: "Custom layout, custom build, animations",
        highlight: true,
        rows: [
          { label: "Single page", single: "$784", upTo5: "$2,520", fiveToTen: "$3,430", tenToFifteen: "$4,270", perPage: "$336 / page", turnaround: "7 to 10 days" },
        ],
      },
      {
        id: "elite",
        name: "Elite",
        symbol: "♛",
        tagline: "Art direction, motion, complex build, performance pass",
        rows: [
          { label: "Single page", single: "$1,470", upTo5: "$4,690", fiveToTen: "$6,370", tenToFifteen: "$8,050", perPage: "$588 / page", turnaround: "10 to 14 days" },
        ],
      },
    ],
  },
];

const includedBonuses = [
  { label: "Competitor audit (3 sites)", value: "$250" },
  { label: "Speed optimisation pass (Core Web Vitals)", value: "$200" },
  { label: "Basic SEO setup (meta, alt tags, sitemap, schema)", value: "$300" },
  { label: "Launch kit (checklist, walkthrough)", value: "$150" },
];

const everyProject = [
  "Figma source files",
  "Fully responsive design",
  "2 revision rounds",
  "Project management workspace",
  "Dedicated Slack channel",
  "Page builder of your choice (Elementor, DIVI, Bricks, Kadence, Beaver Builder)",
];

export default function WebsitesPage() {
  const { openModal } = useCalendly();
  const [activePackage, setActivePackage] = useState<PackageDef["id"]>("bundle");
  const active = packages.find((p) => p.id === activePackage)!;

  return (
    <>
      <TopNavigation />
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
          <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-blue-300/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-indigo-300/20 blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                Websites for AI SaaS founders
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-[1.05] tracking-[-0.02em]">
                Websites that make
                <br />
                <span className="gradient-text-modern inline-block mt-2">AI SaaS products credible.</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-[1.6] max-w-3xl mx-auto">
                Three tiers, fixed prices, predictable turnarounds. Whether you need a single landing page or a 15-page marketing site, you know what you&apos;re paying before we start.
              </p>

              {/* Hero stat strip */}
              <div className="grid grid-cols-3 max-w-2xl mx-auto mt-10 sm:mt-12 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200/70 shadow-sm overflow-hidden divide-x divide-gray-200/70">
                {[
                  { value: "460+", label: "Websites delivered" },
                  { value: "4.9★", label: "Client satisfaction" },
                  { value: "0", label: "Missed deadlines" },
                ].map((s, i) => (
                  <div key={i} className="px-4 py-5 sm:py-6">
                    <div className="text-2xl sm:text-3xl font-bold gradient-text-modern leading-none mb-1.5">{s.value}</div>
                    <div className="text-[11px] sm:text-xs text-gray-600 font-medium leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why founders pick us */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-14">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] mb-4">
                Why AI SaaS founders <span className="gradient-text-modern">pick us.</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-[1.6]">
                A different kind of website partner. No retainer trap, no scope-creep games, no Fiverr quality.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {[
                {
                  title: "Fixed price. Always.",
                  body: "You pick a tier, you pick a page count. The price you see is the price you pay. No hourly billing, no surprise change orders.",
                },
                {
                  title: "Built for AI SaaS.",
                  body: "We design for buyers reviewing AI tools (founders, ops, IT). Trust, security cues, and product clarity built in.",
                },
                {
                  title: "Predictable timelines.",
                  body: "Every tier has a stated turnaround. Most builds ship inside 2 weeks. Zero missed deadlines on 460+ projects.",
                },
                {
                  title: "Your stack, your win.",
                  body: "WordPress on the page builder of your choice, or Next.js if you prefer code-first. Source files always handed over.",
                },
              ].map((b, i) => (
                <div
                  key={i}
                  className="group relative bg-white p-7 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)]"
                >
                  <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-blue-600 mb-3">0{i + 1}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-[1.3] mb-2.5">{b.title}</h3>
                  <p className="text-[15px] text-gray-600 leading-[1.7]">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Three packages overview */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-14">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-5">
                Three packages
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] mb-4">
                Pick how much of the build <span className="gradient-text-modern">you want us to handle.</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-[1.6]">
                Design only, WordPress development only, or the full thing end-to-end.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
              {packages.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setActivePackage(p.id);
                    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className={`group relative text-left rounded-2xl border-2 p-7 sm:p-8 transition-all duration-300 overflow-hidden ${
                    p.id === "bundle"
                      ? "bg-gradient-to-br from-blue-700 via-blue-700 to-indigo-700 text-white border-blue-700 shadow-2xl shadow-blue-600/25"
                      : "bg-white border-gray-200 hover:border-gray-900 hover:shadow-xl hover:-translate-y-0.5"
                  }`}
                >
                  {p.badge && (
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] mb-4 ${p.id === "bundle" ? "bg-white/15 text-white" : "bg-blue-100 text-blue-700"}`}>
                      <span className={`w-1 h-1 rounded-full ${p.id === "bundle" ? "bg-cyan-300" : "bg-blue-600"}`} />
                      {p.badge}
                    </span>
                  )}
                  <h3 className={`text-2xl sm:text-[26px] font-bold leading-[1.2] mb-2 tracking-[-0.01em] ${p.id === "bundle" ? "text-white" : "text-gray-900"}`}>
                    {p.name}
                  </h3>
                  <p className={`text-[15px] leading-[1.65] mb-5 ${p.id === "bundle" ? "text-blue-50/90" : "text-gray-600"}`}>
                    {p.description}
                  </p>
                  <div className={`text-2xl sm:text-3xl font-bold mb-1 ${p.id === "bundle" ? "text-white" : "text-blue-600"}`}>
                    {p.startsAt}
                  </div>
                  <div className={`text-xs ${p.id === "bundle" ? "text-blue-100/70" : "text-gray-500"}`}>per project, fixed</div>
                  <div className={`mt-6 pt-5 border-t ${p.id === "bundle" ? "border-white/15" : "border-gray-100"}`}>
                    <div className={`text-[10px] font-mono uppercase tracking-[0.22em] mb-2 ${p.id === "bundle" ? "text-cyan-200" : "text-gray-400"}`}>
                      Best for
                    </div>
                    <div className={`text-sm leading-[1.6] ${p.id === "bundle" ? "text-blue-50/80" : "text-gray-600"}`}>
                      {p.bestFor}
                    </div>
                  </div>
                  <div className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${p.id === "bundle" ? "text-white" : "text-blue-600"}`}>
                    See full pricing
                    <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing tables */}
        <section id="pricing" className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-5">
                Pricing
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] mb-4">
                Three tiers, four page counts. <span className="gradient-text-modern">No quotes needed.</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-[1.6]">
                Pick a tier based on how custom you want it. Pick a page count. The price is the price.
              </p>
            </div>

            {/* Package tabs */}
            <div className="flex justify-center mb-10 sm:mb-12">
              <div className="inline-flex rounded-full bg-gray-100 p-1.5 border border-gray-200">
                {packages.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setActivePackage(p.id)}
                    className={`px-4 sm:px-5 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                      activePackage === p.id
                        ? "bg-white text-blue-700 shadow-sm border border-gray-200"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {p.shortName}
                  </button>
                ))}
              </div>
            </div>

            {/* Active package pricing grid */}
            <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
              {active.tiers.map((tier) => (
                <div
                  key={tier.id}
                  className={`relative rounded-3xl p-7 sm:p-8 transition-all duration-300 ${
                    tier.highlight
                      ? "bg-gradient-to-br from-blue-700 via-blue-700 to-indigo-700 text-white border-2 border-blue-600 shadow-2xl shadow-blue-600/25 scale-[1.02]"
                      : "bg-white border-2 border-gray-200 hover:border-gray-300 shadow-sm"
                  }`}
                >
                  {tier.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-blue-700 text-[10px] font-bold uppercase tracking-[0.18em] shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      Most picked
                    </span>
                  )}

                  <div className={`flex items-center gap-3 mb-2 ${tier.highlight ? "text-white" : "text-gray-900"}`}>
                    <span className={`text-2xl ${tier.highlight ? "text-cyan-200" : "text-blue-500"}`}>{tier.symbol}</span>
                    <h3 className="text-2xl font-bold tracking-[-0.01em]">{tier.name}</h3>
                  </div>
                  <p className={`text-sm leading-[1.6] mb-7 ${tier.highlight ? "text-blue-50/90" : "text-gray-600"}`}>
                    {tier.tagline}
                  </p>

                  {tier.rows.map((row) => (
                    <div key={row.label} className="space-y-3.5">
                      {[
                        { label: "Single page", value: row.single, turn: row.turnaround },
                        { label: "Up to 5 pages", value: row.upTo5 },
                        { label: "5 to 10 pages", value: row.fiveToTen },
                        { label: "10 to 15 pages", value: row.tenToFifteen },
                      ].map((line, i) => (
                        <div
                          key={i}
                          className={`flex items-baseline justify-between gap-3 pb-3 ${
                            i === 3 ? "" : "border-b"
                          } ${tier.highlight ? "border-white/15" : "border-gray-100"}`}
                        >
                          <span className={`text-sm ${tier.highlight ? "text-blue-50/90" : "text-gray-600"}`}>{line.label}</span>
                          <span className={`text-base font-bold ${tier.highlight ? "text-white" : "text-gray-900"}`}>{line.value}</span>
                        </div>
                      ))}
                      {row.perPage && (
                        <div className={`flex items-baseline justify-between gap-3 pt-1`}>
                          <span className={`text-xs ${tier.highlight ? "text-blue-100/70" : "text-gray-500"}`}>15+ pages</span>
                          <span className={`text-sm font-semibold ${tier.highlight ? "text-cyan-200" : "text-blue-600"}`}>{row.perPage}</span>
                        </div>
                      )}
                    </div>
                  ))}

                  <div className={`mt-7 pt-5 border-t ${tier.highlight ? "border-white/15" : "border-gray-100"}`}>
                    <div className="flex items-center justify-between gap-3">
                      <div className={`text-[10px] font-mono uppercase tracking-[0.22em] ${tier.highlight ? "text-cyan-200" : "text-gray-400"}`}>
                        Turnaround
                      </div>
                      <div className={`text-sm font-semibold ${tier.highlight ? "text-white" : "text-gray-900"}`}>
                        {active.tiers.find((t) => t.id === tier.id)?.rows[0]?.turnaround}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={openModal}
                    className={`mt-6 w-full py-3 rounded-xl font-bold text-sm transition-all ${
                      tier.highlight
                        ? "bg-white text-blue-700 hover:bg-blue-50"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                  >
                    Start a {tier.name.toLowerCase()} build
                  </button>
                </div>
              ))}
            </div>

            {/* Note */}
            <p className="text-center text-sm text-gray-500 mt-8 max-w-3xl mx-auto leading-[1.6]">
              All prices in USD. Page counts include all unique templates (home, features, pricing, about, blog index, etc). Blog post and case study templates count once.
            </p>
          </div>
        </section>

        {/* Add-ons */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-14">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] mb-4">
                Optional <span className="gradient-text-modern">add-ons.</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-[1.6]">
                Bundle in copy or maintenance, or add later. Same fixed-price logic.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto">
              {/* Copywriting */}
              <article className="bg-white rounded-2xl border border-gray-200 p-7 sm:p-9">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Copywriting</h3>
                </div>
                <p className="text-[15px] text-gray-600 leading-[1.7] mb-6">
                  Conversion-focused copy written for AI SaaS buyers. Hero, sub-hero, features, social proof, FAQs, and the CTAs that actually convert.
                </p>
                <div className="space-y-3 text-sm">
                  {[
                    { label: "Single page", price: "$140", turn: "1 to 2 days" },
                    { label: "Up to 5 pages", price: "$420", turn: "3 to 4 days" },
                    { label: "5 to 10 pages", price: "$560", turn: "5 to 7 days" },
                    { label: "10 to 15 pages", price: "$700", turn: "7 to 10 days" },
                    { label: "15+ pages", price: "$56 / page", turn: "" },
                  ].map((row, i) => (
                    <div
                      key={i}
                      className={`grid grid-cols-[1fr_auto_auto] gap-4 items-baseline pb-3 ${i === 4 ? "" : "border-b border-gray-100"}`}
                    >
                      <span className="text-gray-600">{row.label}</span>
                      <span className="font-bold text-gray-900">{row.price}</span>
                      <span className="text-xs text-gray-400 min-w-[80px] text-right">{row.turn}</span>
                    </div>
                  ))}
                </div>
              </article>

              {/* Maintenance */}
              <article className="bg-white rounded-2xl border border-gray-200 p-7 sm:p-9">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Maintenance</h3>
                </div>
                <p className="text-[15px] text-gray-600 leading-[1.7] mb-6">
                  Once your site is live, we keep it that way. WordPress + plugin updates, weekly backups, uptime monitoring, security and performance scans, plus a monthly report and 5 change requests.
                </p>
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                  <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-gray-400 mb-1.5">Monthly retainer</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-gray-900">$170</span>
                    <span className="text-sm text-gray-500">/ month</span>
                  </div>
                  <ul className="mt-5 space-y-2 text-sm text-gray-700">
                    {[
                      "WordPress + plugin updates",
                      "Weekly backups",
                      "Uptime + security monitoring",
                      "Monthly performance report",
                      "5 change requests / month",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Free with every project */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
              <div>
                <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs sm:text-sm font-semibold mb-5">
                  Free with every project
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] mb-5">
                  $900 of bonuses, <span className="gradient-text-modern">on every build.</span>
                </h2>
                <p className="text-lg text-gray-600 leading-[1.65] mb-7">
                  Things most agencies upcharge for. We bundle them in by default because a website that loads slow, has bad meta tags, or no launch checklist isn&apos;t a finished website.
                </p>
                <ul className="space-y-3">
                  {everyProject.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] text-gray-700 leading-[1.6]">
                      <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-blue-50/40 to-indigo-50/40 p-7 sm:p-9">
                <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-blue-700 mb-5">Bonus value</div>
                <ul className="divide-y divide-gray-200">
                  {includedBonuses.map((b, i) => (
                    <li key={i} className="flex items-center justify-between gap-3 py-3.5">
                      <span className="text-[15px] text-gray-700 leading-[1.5]">{b.label}</span>
                      <span className="text-sm font-bold text-gray-900 whitespace-nowrap">{b.value}</span>
                    </li>
                  ))}
                  <li className="flex items-center justify-between gap-3 py-4 mt-1">
                    <span className="text-base font-bold text-gray-900">Total bonus value</span>
                    <span className="text-2xl font-bold gradient-text-modern">$900</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-white border border-gray-200 shadow-[0_30px_80px_-25px_rgba(0,0,0,0.18)] overflow-hidden">
              <div className="grid lg:grid-cols-[auto_1fr]">
                <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 p-8 sm:p-10 lg:w-[300px] flex flex-col items-start gap-5 text-white">
                  <span className="w-14 h-14 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-blue-200 mb-1.5">The guarantee</div>
                    <div className="text-2xl font-bold leading-[1.2]">Love it, or we redo it.</div>
                  </div>
                </div>
                <div className="p-8 sm:p-10 flex items-center">
                  <div>
                    <p className="text-base sm:text-lg text-gray-700 leading-[1.7] mb-4">
                      Not happy with the first deliverable? We redo it from scratch, free. If the launched site doesn&apos;t convert at the industry baseline for your category, we issue a full refund. No questions.
                    </p>
                    <p className="text-sm text-gray-500 leading-[1.6]">
                      We&apos;ve delivered 460+ projects and used this guarantee exactly twice. Both clients are still with us today.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-600 to-indigo-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-[-0.02em] leading-[1.1]">
              Ready to brief your website?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-10 leading-[1.6] max-w-2xl mx-auto">
              30 minutes, no pitch. Tell us about your AI SaaS, what pages you need, and we&apos;ll quote on the call.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openModal}
                className="btn-primary-light px-8 py-4 text-blue-700 rounded-xl font-semibold text-base sm:text-lg"
              >
                Book a discovery call
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
