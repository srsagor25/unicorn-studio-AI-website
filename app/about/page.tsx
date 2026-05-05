"use client";

import TopNavigation from "@/components/TopNavigation";
import Footer from "@/components/Footer";
import { useCalendly } from "@/components/CalendlyProvider";

export default function AboutPage() {
  const { openModal } = useCalendly();

  const beliefs = [
    {
      number: "Belief 01",
      title: "Specialists beat generalists.",
      description:
        "Most agencies do too many things badly. We do four things well. The four we do are enough to transform almost any business.",
    },
    {
      number: "Belief 02",
      title: "Honest scope is a sales tool.",
      description:
        "Every other agency promises everything. We tell you exactly what we don't do (strategy, sales scripts, business outcomes). It's the most credible thing on our website.",
    },
    {
      number: "Belief 03",
      title: "You should own what we build.",
      description:
        "No proprietary lock-in. No black boxes. Every workflow, prompt, and integration we build is yours forever, even if you fire us.",
    },
    {
      number: "Belief 04",
      title: "Custom beats template, every time.",
      description:
        "We don't sell SaaS. We don't resell tools. We build systems specific to your business. That's slower and harder. It's also why they actually work.",
    },
    {
      number: "Belief 05",
      title: "The AI gap is real, and it's widening.",
      description:
        "Businesses installing AI infrastructure now will own their markets. The rest will be sold to them. We'd rather build for the first kind.",
      span: true,
    },
  ];

  const culture = [
    {
      number: "01",
      title: "We take fewer clients on purpose.",
      description:
        "Every system is custom-built. We cap onboarding so quality never slips. If we're full, we'll tell you and put you on the waitlist. We won't take your money and short-staff your build.",
    },
    {
      number: "02",
      title: "We don't pitch.",
      description:
        "The discovery call is genuinely a discovery call. If we're not the right fit, we'll tell you that on the call and recommend someone who is.",
    },
    {
      number: "03",
      title: "We don't disappear after launch.",
      description:
        "The team that built your system is the team that maintains it. No outsourced support. No \"your account manager has changed\" emails.",
    },
    {
      number: "04",
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

  return (
    <>
      <TopNavigation />
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-gradient-to-r from-blue-400/20 to-cyan-400/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-gradient-to-l from-indigo-400/20 to-purple-400/10 rounded-full blur-3xl animate-blob animation-delay-2000" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold mb-6 sm:mb-8">
                Who We Are · What We Believe
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-[1.1] tracking-tight">
                We build systems for the businesses that
                <br />
                <span className="gradient-text-modern inline-block mt-2">refuse to stay manual.</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Unicorn Studio is an AI systems specialist studio. Small team. Specific focus. We build four kinds of AI systems and we don&apos;t pretend to do anything else.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div>
                <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs sm:text-sm font-medium mb-4">
                  Our Story
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  How we <span className="gradient-text-modern">got here.</span>
                </h2>
              </div>
              <div className="space-y-5 text-gray-700 text-base sm:text-lg leading-relaxed">
                <p>
                  We didn&apos;t start as an AI company. We started as systems builders. The kind of work that, before AI, meant Zapier integrations, custom scripts, and a lot of duct tape between tools that refused to cooperate. The work was useful but slow. The ceiling was low.
                </p>
                <p>
                  Then AI arrived. Not the demo-day version. The version that could actually hold a conversation, follow instructions, and operate inside real business workflows. Suddenly the systems we&apos;d been building got dramatically more capable, and the businesses installing them got dramatically more leverage.
                </p>
                <p>
                  We watched a wave of agencies appear in 2024, branded around AI but missing the systems thinking that makes it actually work.{" "}
                  <span className="text-gray-900 font-semibold">
                    AI without good systems is a toy. AI on top of good systems is leverage.
                  </span>{" "}
                  We chose to build the second kind, and to specialize narrowly enough to be excellent at it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Beliefs */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs sm:text-sm font-medium mb-4">
                What We Believe
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Five things <span className="gradient-text-modern">we&apos;re certain about.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {beliefs.map((belief, index) => (
                <div
                  key={index}
                  className={`group relative bg-white p-6 sm:p-8 rounded-2xl border-2 border-gray-200 hover:border-gray-900 transition-colors duration-300 overflow-hidden ${
                    belief.span ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-t-2xl" />
                  <div className="relative z-10">
                    <div className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600 mb-3">
                      {belief.number}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                      {belief.title}
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      {belief.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs sm:text-sm font-medium mb-4">
                How We Work
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                A few things you should know
                <br />
                <span className="gradient-text-modern">about working with us.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {culture.map((c, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-blue-50/30 p-6 sm:p-8 rounded-2xl border border-gray-200"
                >
                  <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600 mb-3">
                    {c.number}
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                    {c.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{c.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fit */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs sm:text-sm font-medium mb-4">
                Who We Work With
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                We&apos;re a fit for some businesses.{" "}
                <span className="gradient-text-modern">Not all.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border-l-4 border-blue-500 border-y border-r border-gray-200 shadow-sm">
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                  You&apos;re a good fit if:
                </h4>
                <ul className="space-y-4">
                  {fitYes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border-l-4 border-gray-400 border-y border-r border-gray-200 shadow-sm">
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                  We&apos;re probably not a fit if:
                </h4>
                <ul className="space-y-4">
                  {fitNo.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-indigo-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              The best way to find out if we&apos;re a fit{" "}
              <span className="text-blue-200">is to talk.</span>
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              30 minutes. No pitch. You walk us through your business and we tell you honestly whether AI systems would help, which ones, and whether we&apos;re the right team to build them. You leave with a written process map either way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openModal}
                className="btn-primary-light px-8 py-4 text-blue-700 rounded-xl font-semibold text-lg"
              >
                Book a Free Discovery Call
              </button>
              <a
                href="mailto:contact@unicornstudio.io"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-xl font-semibold text-lg hover:bg-white/20 transition-colors"
              >
                contact@unicornstudio.io
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
