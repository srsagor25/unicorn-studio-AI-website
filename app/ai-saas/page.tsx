"use client";

import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';

import FlipCard from '@/components/FlipCard';
import { useCalendly } from '@/components/CalendlyProvider';

export default function AISaaSPage() {
  const { openModal } = useCalendly();
  return (
    <>
      <TopNavigation />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
          <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-blue-300/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-indigo-300/20 blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                AI SaaS · End-to-end product builds
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-[1.05] tracking-[-0.02em]">
                From AI idea to
                <br />
                <span className="gradient-text-modern inline-block mt-2">recurring revenue.</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-[1.6] max-w-3xl mx-auto">
                We design, build, and launch AI SaaS products that real users pay for. Strategy, model selection, infrastructure, UX, and growth, under one roof.
              </p>
            </div>
          </div>
        </section>

        {/* AI SaaS that actually succeeds */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] mb-4">
                AI SaaS that actually <span className="gradient-text-modern">succeeds.</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-[1.6]">
                Most AI products fail not because the model isn&apos;t good enough. They fail because the product around the model isn&apos;t.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              <div className="bg-rose-50/70 p-8 sm:p-9 rounded-2xl border border-rose-100">
                <h3 className="text-xl sm:text-2xl font-bold text-rose-900 mb-6">What kills most AI SaaS:</h3>
                <ul className="space-y-4">
                  {[
                    "Wrapping a single LLM call in a UI and calling it a product",
                    "Burning runway on infra before there&apos;s a real user",
                    "No moat: the underlying model gets the credit, not your brand",
                    "Token costs that wreck unit economics at scale",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-rose-500 text-lg leading-tight mt-0.5">✕</span>
                      <span className="text-gray-700 leading-[1.6]" dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-emerald-50/70 p-8 sm:p-9 rounded-2xl border border-emerald-100">
                <h3 className="text-xl sm:text-2xl font-bold text-emerald-900 mb-6">How we build differently:</h3>
                <ul className="space-y-4">
                  {[
                    "Validate the wedge before writing model code",
                    "Design for activation and retention, not demo magic",
                    "Architecture that survives a model swap (and price hike)",
                    "Eval harness, observability, and cost guardrails from day one",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-emerald-500 text-lg leading-tight mt-0.5">✓</span>
                      <span className="text-gray-700 leading-[1.6]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our AI SaaS Playbook */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1]">
                Our AI SaaS <span className="gradient-text-modern">playbook.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  phase: "Weeks 1-2",
                  title: "Discovery & Wedge",
                  description: "Customer interviews, competitive landscape, and AI capability mapping. We pick the wedge worth building before a single API key is pulled."
                },
                {
                  phase: "Weeks 3-4",
                  title: "Design & Architecture",
                  description: "Product flows, model selection, eval criteria, and cost modelling. Every decision is benchmarked against an activation, retention, or unit-economics metric."
                },
                {
                  phase: "Weeks 5-10",
                  title: "MVP Build",
                  description: "Core flows only. Production-grade infrastructure, observability, and an evaluation harness so you can ship model improvements with confidence."
                },
                {
                  phase: "Weeks 11+",
                  title: "Launch & Iteration",
                  description: "Go-to-market, design partner onboarding, and tight feedback loops. We help you find product-market fit, not just ship code."
                }
              ].map((step, index) => (
                <FlipCard key={index} phase={step.phase} title={step.title} description={step.description} />
              ))}
            </div>
          </div>
        </section>

        {/* AI SaaS Categories */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] mb-4">
                AI SaaS categories <span className="gradient-text-modern">we excel at.</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-[1.6]">
                Five shapes of AI product we&apos;ve shipped repeatedly, with the architecture playbooks to match.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  title: "AI Agents & Copilots",
                  description: "Vertical agents that take action, not just answer questions. Tools, memory, and human-in-the-loop done right.",
                },
                {
                  title: "AI-Native B2B Tools",
                  description: "CRM, project, ops, and analytics products where AI is the core differentiator. Built for procurement, security, and SOC 2.",
                },
                {
                  title: "Vertical AI Products",
                  description: "Industry-specific AI for legal, health, fintech, real estate. Domain knowledge baked into the prompts and the data model.",
                },
                {
                  title: "AI Developer Tools",
                  description: "APIs, SDKs, eval frameworks, and infrastructure that other engineers integrate, not bypass.",
                },
                {
                  title: "AI Marketplaces",
                  description: "Two-sided platforms for prompts, agents, fine-tunes, or models. Trust, payments, and discovery from day one.",
                },
                {
                  title: "AI Workflow Products",
                  description: "Replace a multi-step internal workflow with one AI-native interface. Migrations, drafting, summarisation, and review.",
                },
              ].map((category, index) => (
                <article
                  key={index}
                  className="group relative bg-white p-7 sm:p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)]"
                >
                  <div className="absolute top-0 left-0 h-[3px] w-full bg-gradient-to-r from-blue-500 to-indigo-500 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-[1.25] mb-3">{category.title}</h3>
                    <p className="text-[15px] text-gray-600 leading-[1.7]">{category.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Tiers */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] mb-4">
                Investment <span className="gradient-text-modern">tiers.</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-[1.6]">
                Two starting points, both fixed-price. Where you start depends on whether you&apos;re validating a wedge or scaling a known one.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "AI SaaS MVP",
                  description: "Validate the wedge with paying users, fast.",
                  price: "From $14,000",
                  features: [
                    "One core AI workflow, end-to-end",
                    "Authentication, billing, and admin",
                    "Eval harness and basic observability",
                    "Production deploy, 4 to 6 weeks",
                  ],
                  highlighted: false,
                },
                {
                  name: "Complete AI SaaS Build",
                  description: "Production-grade AI product built to scale.",
                  price: "From $38,000",
                  features: [
                    "Full feature set, multi-tenant",
                    "Model selection, fine-tunes, fallbacks",
                    "Cost guardrails and unit economics modelling",
                    "API, webhooks, and analytics",
                    "10 to 14 week build",
                  ],
                  highlighted: true,
                },
              ].map((tier, index) => (
                <div
                  key={index}
                  className={`group relative bg-white p-9 sm:p-10 rounded-2xl border-2 transition-all duration-300 ${
                    tier.highlighted
                      ? "border-blue-500 shadow-2xl scale-[1.02] overflow-visible"
                      : "border-gray-200 hover:border-gray-900 overflow-hidden"
                  }`}
                >
                  {!tier.highlighted && (
                    <>
                      <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-t-2xl" />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                    </>
                  )}
                  {tier.highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-1 rounded-full text-sm font-bold z-20">
                      Most Popular
                    </div>
                  )}

                  <div className="relative z-10">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 tracking-[-0.01em]">{tier.name}</h3>
                    <p className="text-gray-600 mb-6 text-[15px] leading-[1.6]">{tier.description}</p>
                    <p className="text-3xl sm:text-4xl font-bold text-blue-600 mb-8">{tier.price}</p>
                    <ul className="space-y-3.5 mb-10">
                      {tier.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700 text-[15px] leading-[1.6]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={openModal}
                      className={`block w-full text-center py-3.5 px-8 rounded-xl font-bold text-base transition-all duration-300 ${
                        tier.highlighted
                          ? "btn-primary text-white"
                          : "bg-white text-gray-900 border-2 border-gray-300 hover:border-gray-900"
                      }`}
                    >
                      Start a build
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Our AI SaaS Succeeds */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1]">
                Why our AI SaaS products <span className="gradient-text-modern">succeed.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Wedge-first thinking",
                  description: "We don&apos;t build feature lists. We pick the one workflow you&apos;ll be world-class at and make every other decision serve that.",
                },
                {
                  title: "Model-agnostic architecture",
                  description: "Swap GPT for Claude or a fine-tune without rewriting your product. Your moat is the system, not the model.",
                },
                {
                  title: "Evaluation as a first-class citizen",
                  description: "Eval harness, regression suites, and quality dashboards from week one. Ship model upgrades without holding your breath.",
                },
                {
                  title: "Unit economics from day one",
                  description: "We model token cost, latency, and per-user margin into the architecture, so growth doesn&apos;t collapse the business.",
                },
              ].map((reason, index) => (
                <article
                  key={index}
                  className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200 hover:border-blue-300 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-t-2xl" />
                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 leading-[1.25]">{reason.title}</h3>
                    <p
                      className="text-[15px] text-gray-700 leading-[1.7]"
                      dangerouslySetInnerHTML={{ __html: reason.description }}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-600 to-indigo-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-[-0.02em] leading-[1.1]">
              Ready to build your AI SaaS?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-10 leading-[1.6] max-w-2xl mx-auto">
              30 minutes, no pitch. Walk us through the wedge and we&apos;ll tell you whether it&apos;s an MVP or a full build, and what it should cost.
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
