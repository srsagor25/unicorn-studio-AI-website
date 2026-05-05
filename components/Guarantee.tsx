export default function Guarantee() {
  const guarantees = [
    {
      number: "01",
      title: "Full setup-fee refund",
      body: "We refund 100% of your setup fee. No negotiation, no fine print, no exit clause to argue.",
      accent: "from-emerald-500 to-teal-500",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "We keep building, free",
      body: "We keep working with you at zero cost until the system is running exactly as we scoped it.",
      accent: "from-blue-500 to-indigo-600",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "You own everything",
      body: "Every workflow, prompt, integration, and asset we built stays yours. Forever. Even if you fire us tomorrow.",
      accent: "from-purple-500 to-fuchsia-500",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="guarantee"
      className="relative py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/40 to-white overflow-hidden"
    >
      {/* Decorative backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(37,99,235,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[680px] h-[680px] rounded-full bg-blue-200/30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-14 sm:mb-18 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold shadow-sm mb-6 sm:mb-7">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            The Reverse-Risk Guarantee
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-[-0.02em] px-4 max-w-4xl mx-auto leading-[1.1] mb-5 sm:mb-7">
            Built and running,
            <span className="gradient-text-modern"> or we work free.</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-[1.6] px-4">
            We agree on scope and timeline upfront, in writing, before any build begins. If we don&apos;t deliver what we agreed to, when we agreed to:
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 mb-14 sm:mb-18 max-w-6xl mx-auto">
          {guarantees.map((g) => (
            <article
              key={g.number}
              className="group relative rounded-3xl bg-white border border-gray-200 p-8 sm:p-9 lg:p-10 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Top accent bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${g.accent}`}
              />
              {/* Watermark number */}
              <div className="absolute -bottom-6 -right-2 text-[160px] font-black leading-none text-gray-50 select-none pointer-events-none">
                {g.number}
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${g.accent} text-white flex items-center justify-center shadow-lg shadow-blue-500/20 mb-7`}
                >
                  {g.icon}
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.24em] text-gray-400 mb-3">
                  Promise {g.number}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-[1.25] mb-4">
                  {g.title}
                </h3>
                <p className="text-[15px] sm:text-base text-gray-600 leading-[1.7]">
                  {g.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Reassurance / proof strip */}
        <div className="relative max-w-5xl mx-auto rounded-2xl sm:rounded-3xl border border-gray-200 bg-white shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-0 items-stretch">
            {/* Left badge column */}
            <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 p-6 sm:p-8 flex md:flex-col items-center md:items-start gap-4 text-white">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center backdrop-blur-sm">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.22em] text-blue-200 mb-1">
                  Fine print
                </div>
                <div className="text-base sm:text-lg font-bold leading-tight">
                  Honest scope. <br className="hidden md:block" />Honest fence.
                </div>
              </div>
            </div>
            {/* Right copy */}
            <div className="p-6 sm:p-8 flex items-center">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                We guarantee the system is built, integrated, and operational as scoped. We don&apos;t guarantee business outcomes. Those depend on your strategy, your offer, and the inputs you feed it. We guarantee the infrastructure works. The rest is up to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
