export default function Problem() {
  const problems = [
    {
      number: "01",
      title: "The competitor you don't see",
      description:
        "A business your size is quietly installing AI into theirs. You won't notice them this quarter. You will in twelve months.",
      stat: "12 mo",
      statLabel: "Until the gap shows up",
      accent: "from-rose-500 to-orange-500",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "The bookmarks that don't help",
      description:
        "You've read the articles. You've bookmarked the tools. There's a gap between knowing it matters and knowing where to start.",
      stat: "0",
      statLabel: "Tabs that ship a system",
      accent: "from-blue-500 to-indigo-500",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M5 5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2H7a2 2 0 01-2-2V5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M14 3v5h5" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "The widening gap",
      description:
        "Businesses don't lose to better products anymore. They lose to better systems. The rest get acquired by them.",
      stat: "5 yr",
      statLabel: "Until markets consolidate",
      accent: "from-cyan-500 to-blue-600",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 17l6-6 4 4 8-8" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M14 7h7v7" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="problem"
      className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
      {/* Subtle backdrop pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.06),transparent_60%)]" />
      <div className="pointer-events-none absolute top-1/3 -left-40 w-[480px] h-[480px] rounded-full bg-blue-100/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -right-40 w-[480px] h-[480px] rounded-full bg-rose-100/40 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-100 text-rose-700 text-xs sm:text-sm font-semibold mb-6 sm:mb-7">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-600" />
            </span>
            The honest part
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-[-0.02em] px-4 max-w-4xl mx-auto leading-[1.1] mb-5 sm:mb-7 text-balance">
            Your competitor is already installing AI.{" "}
            <span className="gradient-text-modern">You just haven&apos;t seen them yet.</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-[1.6] px-4 text-pretty">
            Three quiet shifts already changing who wins the next five years.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {problems.map((problem) => (
            <article
              key={problem.number}
              className="group relative bg-white rounded-3xl border border-gray-200 p-8 sm:p-9 lg:p-10 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] hover:border-gray-300"
            >
              {/* Top accent bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${problem.accent} transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out`}
              />

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon + eyebrow */}
                <div className="flex items-center gap-3 mb-7 sm:mb-8">
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${problem.accent} text-white flex items-center justify-center shadow-md shadow-blue-500/10`}
                  >
                    {problem.icon}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-gray-400">
                    Shift {problem.number}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-[1.2] mb-3 tracking-[-0.01em]">
                  {problem.title}
                </h3>
                <p className="text-[15px] text-gray-600 leading-[1.65] mb-8 flex-1">
                  {problem.description}
                </p>

                {/* Stat strip — single focal point */}
                <div className="flex items-end gap-4 pt-6 border-t border-gray-100">
                  <div
                    className={`text-4xl sm:text-5xl font-black leading-none bg-gradient-to-r ${problem.accent} bg-clip-text text-transparent`}
                  >
                    {problem.stat}
                  </div>
                  <div className="text-xs text-gray-500 leading-snug pb-1.5 max-w-[60%]">
                    {problem.statLabel}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-14 sm:mt-16 text-center text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
          You don&apos;t need to panic. You do need a plan.
        </p>
      </div>
    </section>
  );
}
