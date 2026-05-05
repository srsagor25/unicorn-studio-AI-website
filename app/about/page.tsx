"use client";

import TopNavigation from "@/components/TopNavigation";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

const beliefs = [
  {
    title: "Specialists beat generalists.",
    description:
      "Most agencies do too many things badly. We do four things well. The four we do are enough to transform almost any business.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Honest scope is a sales tool.",
    description:
      "Every other agency promises everything. We tell you exactly what we don't do (strategy, sales scripts, business outcomes). It's the most credible thing on our website.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "You should own what we build.",
    description:
      "No proprietary lock-in. No black boxes. Every workflow, prompt, and integration we build is yours forever, even if you fire us.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Custom beats template, every time.",
    description:
      "We don't sell SaaS. We don't resell tools. We build systems specific to your business. That's slower and harder. It's also why they actually work.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    title: "The AI gap is real, and it's widening.",
    description:
      "Businesses installing AI infrastructure now will own their markets. The rest will be sold to them. We'd rather build for the first kind.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    span: true,
  },
];

const culture = [
  {
    title: "We take fewer clients on purpose.",
    description:
      "Every system is custom-built. We cap onboarding so quality never slips. If we're full, we'll tell you and put you on the waitlist. We won't take your money and short-staff your build.",
  },
  {
    title: "We don't pitch.",
    description:
      "The discovery call is genuinely a discovery call. If we're not the right fit, we'll tell you that on the call and recommend someone who is.",
  },
  {
    title: "We don't disappear after launch.",
    description:
      "The team that built your system is the team that maintains it. No outsourced support. No \"your account manager has changed\" emails.",
  },
  {
    title: "We're not the cheapest.",
    description:
      "We're not trying to be. Custom builds, ongoing maintenance, real specialists, real guarantees: that costs more than templates and offshore subcontractors. We think the math still works.",
  },
];

const fitYes = [
  "You're already running a real business with real revenue",
  "You have repeated, manual processes draining your team's time",
  "You have a clear idea of what your business does, even if you don't know how AI fits in",
  "You're willing to invest in custom infrastructure rather than chase the cheapest tool",
];

const fitNo = [
  "You're pre-revenue and looking for AI to make up for an unclear business",
  "You want strategy, copywriting, or marketing knowledge bundled in",
  "You expect business outcome guarantees (we guarantee infrastructure, not outcomes)",
  "You're shopping primarily on price",
];

const stats = [
  { value: "04", label: "Systems we specialize in" },
  { value: "100%", label: "Custom-built per business" },
  { value: "10+", label: "Products shipped" },
  { value: "<2h", label: "Average response time" },
];

export default function AboutPage() {
  return (
    <>
      <TopNavigation />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-50/40 via-white to-white" />
          <div className="pointer-events-none absolute -top-20 -right-32 w-[500px] h-[500px] rounded-full bg-blue-100/50 blur-3xl" />

          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-200/70 text-blue-700 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              About Unicorn Studio
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-gray-900 leading-[1.05] tracking-[-0.02em] mb-6 sm:mb-8 max-w-4xl mx-auto text-balance">
              We build systems for the businesses that{" "}
              <span className="gradient-text-modern">refuse to stay manual.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-[1.6] max-w-2xl mx-auto text-pretty">
              Unicorn Studio is an AI systems specialist studio. Small team. Specific focus. We build four kinds of AI systems and we don&apos;t pretend to do anything else.
            </p>
          </div>
        </section>

        {/* Stats strip */}
        <section className="px-4 sm:px-6 lg:px-8 -mt-2 sm:-mt-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-200/80 rounded-3xl border border-gray-200/80 bg-white shadow-[0_30px_60px_-30px_rgba(15,23,42,0.18)] overflow-hidden">
              {stats.map((s, i) => (
                <div key={i} className="px-5 sm:px-8 py-7 sm:py-8 text-center lg:text-left">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] gradient-text-modern leading-none mb-2">
                    {s.value}
                  </div>
                  <div className="text-[12px] sm:text-sm text-gray-600 font-medium leading-snug">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-[minmax(0,360px)_1fr] gap-10 lg:gap-20 items-start">
              <div className="lg:sticky lg:top-28">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">
                  Our Story
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.1] tracking-[-0.02em] text-balance">
                  How we <span className="gradient-text-modern">got here.</span>
                </h2>
              </div>
              <div className="space-y-5 sm:space-y-6 text-gray-700 text-base sm:text-lg leading-[1.7] text-pretty">
                <p>
                  We didn&apos;t start as an AI company. We started as systems builders. The kind of work that, before AI, meant Zapier integrations, custom scripts, and a lot of duct tape between tools that refused to cooperate. The work was useful but slow. The ceiling was low.
                </p>
                <p>
                  Then AI arrived. Not the demo-day version. The version that could actually hold a conversation, follow instructions, and operate inside real business workflows. Suddenly the systems we&apos;d been building got dramatically more capable, and the businesses installing them got dramatically more leverage.
                </p>
                <p>
                  We watched a wave of agencies appear in 2024, branded around AI but missing the systems thinking that makes it actually work.
                </p>
                <blockquote className="relative pl-6 border-l-2 border-blue-500 my-2">
                  <p className="text-xl sm:text-2xl font-semibold text-gray-900 leading-snug tracking-[-0.01em]">
                    AI without good systems is a toy. AI on top of good systems is leverage.
                  </p>
                </blockquote>
                <p>
                  We chose to build the second kind, and to specialize narrowly enough to be excellent at it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Beliefs */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">
                What We Believe
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] text-balance">
                Five things <span className="gradient-text-modern">we&apos;re certain about.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {beliefs.map((belief, index) => (
                <div
                  key={index}
                  className={`group relative bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/80 hover:border-gray-900 hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-xl ${
                    belief.span ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {belief.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400 mb-1.5">
                        Belief 0{index + 1}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-snug tracking-[-0.01em] text-balance">
                        {belief.title}
                      </h3>
                      <p className="text-[15px] sm:text-base text-gray-600 leading-[1.65] text-pretty">
                        {belief.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture / How we work */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">
                How We Work
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] text-balance">
                A few things you should know{" "}
                <span className="gradient-text-modern">about working with us.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {culture.map((c, index) => (
                <div
                  key={index}
                  className="relative bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/80 hover:border-gray-900 transition-colors duration-300"
                >
                  <div className="flex items-baseline gap-4 mb-3">
                    <div className="text-3xl sm:text-4xl font-bold gradient-text-modern leading-none">
                      0{index + 1}
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug tracking-[-0.01em] text-balance">
                      {c.title}
                    </h4>
                  </div>
                  <p className="text-[15px] sm:text-base text-gray-600 leading-[1.65] text-pretty pl-0">
                    {c.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fit */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">
                Who We Work With
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] text-balance">
                We&apos;re a fit for some businesses.{" "}
                <span className="gradient-text-modern">Not all.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-sm">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[11px] font-bold uppercase tracking-[0.18em] mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  Good fit
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5 tracking-[-0.01em]">
                  You&apos;re a good fit if:
                </h4>
                <ul className="space-y-3.5">
                  {fitYes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 leading-[1.55]">
                      <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[15px] sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-sm">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-600 text-[11px] font-bold uppercase tracking-[0.18em] mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                  Not for everyone
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5 tracking-[-0.01em]">
                  We&apos;re probably not a fit if:
                </h4>
                <ul className="space-y-3.5">
                  {fitNo.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 leading-[1.55]">
                      <svg className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M20 12H4" />
                      </svg>
                      <span className="text-[15px] sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Personal CTA — connekt-inspired */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
