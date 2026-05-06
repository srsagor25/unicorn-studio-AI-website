"use client";

import TopNavigation from "@/components/TopNavigation";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

import { useCalendly } from "@/components/CalendlyProvider";

const aiSolutionsFaqs = [
  {
    question: "When does multi-agent orchestration beat a single agent?",
    answer:
      "When the work spans different skills (research vs writing vs verification), needs human handoffs at specific points, or has long-horizon steps where a single prompt would lose context. We start every engagement by checking if a single well-designed agent works first. If it does, we ship that.",
  },
  {
    question: "Why fine-tune instead of just prompting?",
    answer:
      "Fine-tuning earns its keep when prompts can&apos;t express the pattern reliably (your tone, your taxonomy, your edge cases), when latency or cost matters (a smaller fine-tuned model often beats a large prompted one), or when domain quality has a hard floor that off-the-shelf models can&apos;t hit. We benchmark before recommending it.",
  },
  {
    question: "Which models do you fine-tune on?",
    answer:
      "Open-source first (Llama 3, Mistral, Qwen, Gemma) when you want to own the weights and run inference yourself. OpenAI, Anthropic via Bedrock, or Google when you want hosted endpoints. We pick based on your data sensitivity, latency targets, and ops budget.",
  },
  {
    question: "How do you evaluate quality?",
    answer:
      "Eval harness from week one. We co-build a test set with you that captures your real edge cases, then run every model and prompt change against it. Quality is a number you can watch, not a feeling.",
  },
  {
    question: "Will I own the models, prompts, and orchestration code?",
    answer:
      "Fully. Source code, prompt graphs, orchestration logic, fine-tuned weights, and infrastructure config are all yours. We deploy to your cloud, your accounts, your provider keys, and hand over everything at launch.",
  },
  {
    question: "What's a typical project size?",
    answer:
      "Three shapes: a 3-week proof of concept to validate the approach, an 8-week complete build for one of the two offerings end-to-end, or a multi-month engagement covering both orchestration and fine-tunes across several workflows. Picked on the discovery call.",
  },
];

const offerings = [
  {
    eyebrow: "Solution 01",
    name: "Multi-Agent Orchestration",
    summary:
      "When one agent isn&apos;t enough. We design and build systems of specialized agents that plan, hand off, and verify each other&apos;s work, with humans in the loop where they belong.",
    bullets: [
      "Agent graphs with explicit roles, tools, and handoffs",
      "Shared memory, retrieval, and structured state across agents",
      "Human-in-the-loop checkpoints for review and approval",
      "Observability: traces, costs, and failure modes per agent",
      "Frameworks we use: LangGraph, OpenAI Agents SDK, custom",
    ],
    bestFor:
      "Research workflows, sales and support automation, content production pipelines, vertical workflow agents, anything multi-step where a single LLM call wasn&apos;t enough.",
    accent: "from-blue-600 to-indigo-600",
  },
  {
    eyebrow: "Solution 02",
    name: "LLM & Custom Model Fine-Tuning",
    summary:
      "When prompts can&apos;t reliably express what you need. We fine-tune open-source or hosted models on your domain, your voice, and your edge cases, with the eval harness to prove it&apos;s actually better.",
    bullets: [
      "Dataset curation, cleaning, and synthetic augmentation",
      "LoRA, full fine-tuning, instruction tuning, or DPO depending on the goal",
      "Side-by-side eval against the off-the-shelf baseline you&apos;d otherwise ship",
      "Inference setup with cost and latency budget built in",
      "Open-source (Llama, Mistral, Qwen) or hosted (OpenAI, Bedrock)",
    ],
    bestFor:
      "Domain language (legal, clinical, fintech), brand voice at scale, internal taxonomies, latency or cost targets a large model can&apos;t meet, or a quality floor prompts keep slipping through.",
    accent: "from-fuchsia-500 to-purple-600",
  },
];

const useCases = [
  {
    title: "Research and synthesis agents",
    body: "A planner agent breaks the brief into steps. Researcher agents browse, retrieve, and quote. A verifier agent checks claims against sources. A writer agent assembles the report. Humans approve before delivery.",
    tag: "Orchestration",
  },
  {
    title: "Domain-tuned classifier or extractor",
    body: "A small open-source model fine-tuned on your tagged data. Beats the off-the-shelf 4B-token model on your specific task at a tenth of the inference cost.",
    tag: "Fine-tuning",
  },
  {
    title: "Vertical workflow agents",
    body: "Legal review, clinical notes, fintech reconciliation. Specialised agents that know your domain&apos;s vocabulary and rules, with audit trails for every decision.",
    tag: "Orchestration",
  },
  {
    title: "Brand-voice content engine",
    body: "Fine-tune a base model on your existing long-form writing and brand guidelines. The result writes in your voice without the prompt becoming a 2,000-word essay.",
    tag: "Fine-tuning",
  },
  {
    title: "Sales and support agent fleets",
    body: "An intake agent qualifies. A research agent enriches. A drafter writes. A reviewer flags risks before send. Each one tested against real conversations before going live.",
    tag: "Orchestration",
  },
  {
    title: "Cost or latency optimisation",
    body: "When the prompt is right but GPT-4-class pricing or speed isn&apos;t. We distill behaviour into a smaller, faster model that hits the same quality bar on your specific task.",
    tag: "Fine-tuning",
  },
];

export default function AISolutionsPage() {
  const { openModal } = useCalendly();
  return (
    <>
      <TopNavigation />
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
          <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-blue-300/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-indigo-300/20 blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                AI Solutions · Custom intelligence built for your domain
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-[1.05] tracking-[-0.02em]">
                Intelligent AI Solutions that
                <br />
                <span className="gradient-text-modern inline-block mt-2">solve real problems.</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-[1.65] max-w-2xl mx-auto">
                Two specialisms: multi-agent orchestration when one model isn&apos;t enough, and fine-tuning when prompts can&apos;t reliably express what you need.
              </p>
            </div>
          </div>
        </section>

        {/* The two offerings */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-14">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-5">
                What we build
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] mb-4">
                Two specialisms. <span className="gradient-text-modern">No buzzword grab-bag.</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-[1.6]">
                Most AI work falls into one of these two shapes. We do both well, and we&apos;ll tell you on the call which one fits your problem.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
              {offerings.map((o) => (
                <article
                  key={o.name}
                  className="relative rounded-3xl border border-gray-200 bg-white p-7 sm:p-9 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                >
                  <div
                    className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${o.accent}`}
                  />

                  <div className="text-[10px] font-mono uppercase tracking-[0.24em] text-gray-400 mb-3">
                    {o.eyebrow}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-[1.15] tracking-[-0.01em] mb-4">
                    {o.name}
                  </h3>
                  <p
                    className="text-[15px] sm:text-base text-gray-600 leading-[1.7] mb-6"
                    dangerouslySetInnerHTML={{ __html: o.summary }}
                  />

                  <ul className="space-y-3 mb-7">
                    {o.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span
                          className={`flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${o.accent}`}
                        />
                        <span className="text-[15px] text-gray-700 leading-[1.6]">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-5 border-t border-gray-100">
                    <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-blue-600 mb-2">
                      Best for
                    </div>
                    <p
                      className="text-sm text-gray-600 leading-[1.6]"
                      dangerouslySetInnerHTML={{ __html: o.bestFor }}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-14">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-5">
                Use cases
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] mb-4">
                Six shapes we&apos;ve <span className="gradient-text-modern">shipped before.</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-[1.6]">
                Tagged by which specialism they lean on. If your problem rhymes with one of these, we already have a head start.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {useCases.map((u, i) => (
                <article
                  key={i}
                  className="group relative bg-white p-7 sm:p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)]"
                >
                  <div className="absolute top-0 left-0 h-[3px] w-full bg-gradient-to-r from-blue-500 to-indigo-500 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                  <div className="relative z-10">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] mb-4 ${
                        u.tag === "Orchestration"
                          ? "bg-blue-50 text-blue-700"
                          : "bg-fuchsia-50 text-fuchsia-700"
                      }`}
                    >
                      <span
                        className={`w-1 h-1 rounded-full ${
                          u.tag === "Orchestration" ? "bg-blue-600" : "bg-fuchsia-600"
                        }`}
                      />
                      {u.tag}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-[1.3] mb-3">
                      {u.title}
                    </h3>
                    <p
                      className="text-[15px] text-gray-600 leading-[1.7]"
                      dangerouslySetInnerHTML={{ __html: u.body }}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement shapes (kept, with copy refined for the two offerings) */}
        <section className="py-16 sm:py-20 bg-white">
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
                  description:
                    "Validate that an agent graph or fine-tune actually beats the off-the-shelf baseline before betting on the full build.",
                  features: [
                    "Working prototype on your real data",
                    "Eval harness with your edge cases",
                    "Side-by-side benchmarks vs. baseline",
                    "Cost and latency model",
                    "Roughly 3-week build window",
                  ],
                  highlighted: false,
                },
                {
                  name: "Complete AI solution",
                  description:
                    "End-to-end build of one of the two offerings: orchestration system or production fine-tune, ready to scale.",
                  features: [
                    "Full architecture or training pipeline",
                    "Production deployment to your cloud",
                    "Observability, evals, cost guardrails",
                    "API, admin, and team handoff",
                    "90-day stabilisation alongside",
                  ],
                  highlighted: true,
                },
                {
                  name: "Combined engagement",
                  description:
                    "Both specialisms across multiple workflows: orchestration where the work is multi-step, fine-tunes where quality or cost demands it.",
                  features: [
                    "Multi-system orchestration",
                    "One or more domain fine-tunes",
                    "Shared retrieval, eval, and observability layer",
                    "Internal team training and handoff",
                    "Multi-month partnership",
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-[-0.01em]">
                      {tier.name}
                    </h3>
                    <p className="text-gray-600 mb-6 text-[15px] leading-[1.6]">
                      {tier.description}
                    </p>
                    <ul className="space-y-3 mb-7 flex-1">
                      {tier.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2.5">
                          <svg
                            className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700 text-[15px] leading-[1.55]">
                            {feature}
                          </span>
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
                      Let&apos;s Build
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing note */}
            <div className="max-w-3xl mx-auto mt-12 sm:mt-14 rounded-2xl border border-gray-200 bg-gray-50/60 p-6 sm:p-7 text-center">
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-blue-600 mb-2">
                Pricing
              </div>
              <p className="text-base sm:text-lg text-gray-700 leading-[1.7]">
                Every solution is custom. Pricing depends on the data, the model choice, and what infrastructure you&apos;re bringing in. We quote in writing on the discovery call, before any work begins.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ
          faqs={aiSolutionsFaqs}
          eyebrow="AI Solutions FAQ"
          headingLead="Common questions"
          headingHighlight="about AI solutions."
          lead="The ones founders ask before committing to a custom AI build. Don&rsquo;t see yours?"
        />

        {/* CTA */}
        <section
          id="contact"
          className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-indigo-600"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-[-0.02em] leading-[1.1]">
              Got an orchestration or fine-tuning problem?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-10 leading-[1.6] max-w-2xl mx-auto">
              30 minutes, no pitch. Walk us through the workflow and we&apos;ll tell you whether it&apos;s a multi-agent shape, a fine-tune shape, or both.
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
