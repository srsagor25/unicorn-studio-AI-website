export default function Problem() {
  const problems = [
    {
      number: "01",
      title: "The competitor you don't see",
      description:
        "Somewhere out there, a business your size is quietly installing AI into theirs. They're cutting hours off operations, answering customers at 3am, and processing leads while you sleep. You won't notice them this quarter. You will in twelve months.",
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
        "You know AI matters. You've read the articles. You've bookmarked the tools. But there's a gap between knowing it matters and knowing where to start, what to trust, or who to hire.",
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
        "Businesses don't lose to better products anymore. They lose to better systems. The companies installing AI infrastructure now will own their markets in five years. The rest will be sold to them.",
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
      className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
      {/* Subtle backdrop pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.06),transparent_60%)]" />
      <div className="pointer-events-none absolute top-1/3 -left-40 w-[480px] h-[480px] rounded-full bg-blue-100/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -right-40 w-[480px] h-[480px] rounded-full bg-rose-100/40 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-100 text-rose-700 text-xs sm:text-sm font-semibold mb-5 sm:mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-600" />
            </span>
            The honest part
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight px-4 max-w-4xl mx-auto leading-[1.1] mb-4 sm:mb-6">
            Your competitor is already installing AI.
            <br className="hidden sm:block" />
            <span className="gradient-text-modern"> You just haven&apos;t seen them yet.</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-light px-4">
            Three quiet shifts already changing who wins the next five years.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {problems.map((problem) => (
            <article
              key={problem.number}
              className="group relative bg-white rounded-2xl border border-gray-200 p-6 sm:p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-gray-900"
            >
              {/* Top accent bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${problem.accent} transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out`}
              />
              {/* Background watermark number */}
              <div className="absolute -top-2 -right-2 text-[140px] sm:text-[160px] font-black leading-none text-gray-100/70 select-none pointer-events-none">
                {problem.number}
              </div>

              <div className="relative z-10">
                {/* Icon + label */}
                <div className="flex items-center justify-between mb-5 sm:mb-6">
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${problem.accent} text-white flex items-center justify-center shadow-lg`}
                  >
                    {problem.icon}
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.22em] text-gray-400">
                    Shift {problem.number}
                  </span>
                </div>

                <h3 className="text-xl sm:text-[22px] font-bold text-gray-900 leading-snug mb-3">
                  {problem.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed mb-6">
                  {problem.description}
                </p>

                {/* Stat strip */}
                <div className="flex items-end gap-3 pt-4 border-t border-gray-100">
                  <div
                    className={`text-3xl sm:text-4xl font-black leading-none bg-gradient-to-r ${problem.accent} bg-clip-text text-transparent`}
                  >
                    {problem.stat}
                  </div>
                  <div className="text-[11px] sm:text-xs text-gray-500 leading-tight pb-1 max-w-[60%]">
                    {problem.statLabel}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-10 sm:mt-12 text-center text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
          You don&apos;t need to panic. You do need a plan.
        </p>
      </div>
    </section>
  );
}
