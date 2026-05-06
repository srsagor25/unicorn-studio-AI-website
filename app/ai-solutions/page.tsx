"use client";

import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';

import { useCalendly } from '@/components/CalendlyProvider';

export default function AISolutionsPage() {
  const { openModal } = useCalendly();
  return (
    <>
      <TopNavigation />
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-[1.05] tracking-[-0.02em]">
              Build AI products that
              <br />
              <span className="gradient-text-modern inline-block mt-2">actually solve problems.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-[1.65] max-w-2xl mx-auto">
              Custom AI products that deliver real value, not just fancy demos.
            </p>
          </div>
        </div>
      </section>

      {/* What Real AI Solutions Look Like */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Real AI Solutions Look Like
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <div className="text-[10px] font-mono uppercase tracking-[0.24em] text-rose-600 mb-3">What we don&apos;t build</div>
              <ul className="space-y-3.5">
                {[
                  "Generic ChatGPT wrappers anyone could make.",
                  "&ldquo;AI-powered&rdquo; labels on basic if-then logic.",
                  "Solutions looking for problems to solve.",
                  "One-size-fits-all templates with AI buzzwords.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    <span className="text-[15px] text-gray-700 leading-[1.6]" dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <div className="text-[10px] font-mono uppercase tracking-[0.24em] text-emerald-600 mb-3">What we actually build</div>
              <ul className="space-y-3.5">
                {[
                  "Custom AI architectures for your use case.",
                  "Systems that learn and improve from real usage.",
                  "AI that enhances human capability, not replaces it.",
                  "Products where AI creates real competitive advantage.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-[15px] text-gray-700 leading-[1.6]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions We Create */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              AI Solutions We Create
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Intelligent Automation",
                description: "Replace manual workflows with AI that understands context, makes decisions, and handles edge cases like a human would."
              },
              {
                title: "Predictive Analytics",
                description: "Turn historical data into future insights. From demand forecasting to churn prediction, we build models that drive decisions."
              },
              {
                title: "Natural Language Processing",
                description: "Chat interfaces, semantic search, document analysis - make unstructured data work for your business."
              },
              {
                title: "Computer Vision",
                description: "Image recognition, quality control, visual search - extract value from visual data at scale."
              },
              {
                title: "Recommendation Engines",
                description: "Personalization that drives engagement. Netflix-style recommendations for your industry."
              },
              {
                title: "AI Agents",
                description: "Autonomous systems that plan, execute, and learn. From customer service to complex workflows."
              }
            ].map((solution, index) => (
              <div key={index} className="group relative bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-gray-900 transition-colors duration-300 overflow-hidden">
                {/* Animated blue border at top - moves left to right */}
                <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-t-2xl" />

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our AI Development Process */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our AI Development Process
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                phase: "Week 1-2",
                title: "Problem Definition",
                description: "We start with the problem, not the technology. Deep dive into your business logic, data, and success metrics. No AI for AI's sake."
              },
              {
                phase: "Week 3-4",
                title: "Architecture Design",
                description: "Custom model selection, prompt engineering, data pipelines. We design systems that scale and improve over time."
              },
              {
                phase: "Week 5-8",
                title: "Build & Train",
                description: "Development with continuous testing. Real data, real scenarios, real validation. We build for production, not demos."
              },
              {
                phase: "Week 9+",
                title: "Deploy & Optimize",
                description: "Launch with monitoring, feedback loops, and continuous improvement. Your AI gets smarter every day."
              }
            ].map((step, index) => (
              <div key={index} className="relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200">
                <div className="absolute -top-4 left-8 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  {step.phase}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 mt-2">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement shapes */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-14">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-5">
              Engagement shapes
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] mb-4">
              Three ways most teams <span className="gradient-text-modern">work with us.</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-[1.6]">
              From a focused proof of concept to a multi-system rollout. All fixed-scope, all quoted in writing before we start.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                name: "AI proof of concept",
                description: "Test the hypothesis with real users before betting on the full build.",
                features: [
                  "Feasibility study",
                  "Working prototype on real data",
                  "Performance benchmarks and tradeoffs",
                  "Cost-per-user model",
                  "Roughly 3-week build window",
                ],
                highlighted: false,
              },
              {
                name: "Complete AI product",
                description: "Production-ready AI solution with the infrastructure to scale.",
                features: [
                  "Custom architecture",
                  "Model selection, evaluation, and routing",
                  "API and admin for the team",
                  "Cost guardrails and monitoring",
                  "90-day stabilisation alongside",
                ],
                highlighted: true,
              },
              {
                name: "AI transformation",
                description: "AI rolled out across multiple workflows and systems.",
                features: [
                  "Multi-system integration",
                  "Shared retrieval and eval layer",
                  "Custom fine-tunes where they earn it",
                  "Internal team training and handoff",
                  "Six-month partnership",
                ],
                highlighted: false,
              },
            ].map((tier, index) => (
              <div
                key={index}
                className={`group relative bg-white p-8 rounded-2xl border-2 transition-all duration-300 flex flex-col ${
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
                    Most picked
                  </div>
                )}

                <div className="relative z-10 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-[-0.01em]">{tier.name}</h3>
                  <p className="text-gray-600 mb-6 text-[15px] leading-[1.6]">{tier.description}</p>
                  <ul className="space-y-3 mb-7 flex-1">
                    {tier.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2.5">
                        <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-[15px] leading-[1.55]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={openModal}
                    className={`block w-full text-center py-3 px-6 rounded-xl font-bold text-sm transition-all duration-300 ${
                      tier.highlighted
                        ? "btn-primary text-white"
                        : "bg-white text-gray-900 border-2 border-gray-300 hover:border-gray-900"
                    }`}
                  >
                    Scope this engagement
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing note */}
          <div className="max-w-3xl mx-auto mt-12 sm:mt-14 rounded-2xl border border-gray-200 bg-white/70 p-6 sm:p-7 text-center">
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-blue-600 mb-2">Pricing</div>
            <p className="text-base sm:text-lg text-gray-700 leading-[1.7]">
              Every solution is custom. Pricing depends on the data, the workflow, the model choice, and what infrastructure you&apos;re bringing in. We quote in writing on the discovery call, before any work begins.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Case Studies
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                name: "RecruitAI - Semantic Talent Matching",
                metrics: [
                  "100K+ candidate profiles indexed",
                  "85% reduction in screening time",
                  "OpenAI embeddings + custom ranking"
                ]
              },
              {
                name: "InventoryIQ - Demand Prediction",
                metrics: [
                  "40% reduction in stockouts",
                  "$2M saved in first year",
                  "Custom ML pipeline on AWS"
                ]
              },
              {
                name: "SupportBot - Intelligent Customer Service",
                metrics: [
                  "70% query resolution without human",
                  "24/7 availability",
                  "Multi-language support"
                ]
              }
            ].map((caseStudy, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200 hover:border-gray-900 transition-colors duration-300 overflow-hidden">
                {/* Animated blue border at top - moves left to right */}
                <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-t-2xl" />

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">{caseStudy.name}</h3>
                  <ul className="space-y-3">
                    {caseStudy.metrics.map((metric, mIndex) => (
                      <li key={mIndex} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700 text-sm">{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section id="contact" className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Real AI?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Let's skip the hype and build AI that transforms your business.
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
