export default function Plan() {
  const steps = [
    {
      number: 1,
      title: "Tell us",
      description:
        "Free discovery call. You walk us through your business. We listen, we ask, we don't pitch.",
      meta: "30 min · Zoom or in-person",
    },
    {
      number: 2,
      title: "We map it",
      description:
        "You get a written breakdown of every task in your business AI can take over, with realistic timelines and scope. Yours to keep, even if you don't hire us.",
      meta: "Detailed scope doc · No commitment",
    },
    {
      number: 3,
      title: "We build it",
      description:
        "Custom AI system, scoped to your business. We install, integrate, and stay on it until it's running. Then we maintain it.",
      meta: "Typical build: 5 to 8 weeks",
    },
  ];

  return (
    <section
      id="process"
      className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#0b1224] via-[#0f1f4a] to-[#0b1224] text-white"
    >
      {/* Background ambience */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="pointer-events-none absolute -top-40 left-1/4 w-[520px] h-[520px] rounded-full bg-blue-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 w-[520px] h-[520px] rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-blue-100 text-xs sm:text-sm font-semibold backdrop-blur-sm mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
            The Plan
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight px-4 leading-[1.1] mb-4 sm:mb-5">
            Three steps.
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent"> No surprises.</span>
          </h2>
          <p className="text-base sm:text-lg text-blue-100/70 max-w-2xl mx-auto font-light px-4">
            From first call to a system running in your business.
          </p>
        </div>

        {/* Vertical timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 -translate-x-1/2 md:-translate-x-px w-px bg-white/15" aria-hidden="true" />
          {/* Active gradient overlay along the line */}
          <div className="absolute left-6 md:left-1/2 top-2 -translate-x-1/2 md:-translate-x-px w-px bg-gradient-to-b from-cyan-300 via-blue-400 to-transparent" style={{ height: "85%" }} aria-hidden="true" />

          <ol className="space-y-12 sm:space-y-16 md:space-y-20">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <li
                  key={step.number}
                  className="relative md:grid md:grid-cols-2 md:gap-12 items-center"
                >
                  {/* Node */}
                  <div className="absolute left-6 md:left-1/2 top-0 -translate-x-1/2 z-10">
                    <div className="relative">
                      <span className="absolute inset-0 rounded-full bg-cyan-400/30 blur-xl" />
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-blue-900 flex items-center justify-center font-bold text-lg sm:text-xl shadow-[0_0_0_4px_rgba(11,18,36,1),0_0_0_5px_rgba(56,189,248,0.5)]">
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`pl-20 md:pl-0 ${
                      isLeft
                        ? "md:col-start-1 md:pr-12 md:text-right"
                        : "md:col-start-2 md:pl-12 md:text-left"
                    }`}
                  >
                    <div
                      className={`group inline-block max-w-md w-full text-left ${
                        isLeft ? "md:text-right" : ""
                      }`}
                    >
                      <div className={`text-[11px] sm:text-xs font-mono uppercase tracking-[0.22em] text-cyan-300/90 mb-2`}>
                        Step 0{step.number}
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base text-blue-100/80 leading-relaxed mb-3">
                        {step.description}
                      </p>
                      <div
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs text-blue-100/80 font-medium`}
                      >
                        <svg className="w-3.5 h-3.5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {step.meta}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating columns */}
                  <div
                    className={`hidden md:block ${
                      isLeft ? "md:col-start-2" : "md:col-start-1"
                    }`}
                  />
                </li>
              );
            })}
          </ol>
        </div>

        {/* Footer line */}
        <div className="text-center mt-14 sm:mt-20">
          <div className="inline-flex items-center gap-2 text-sm text-blue-100/70">
            <span className="w-8 h-px bg-white/20" />
            <span>Same process for every build.</span>
            <span className="w-8 h-px bg-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
