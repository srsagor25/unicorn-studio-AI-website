"use client";

import { useCalendly } from "./CalendlyProvider";

export default function CTA() {
  const { openModal } = useCalendly();

  const proofPoints = [
    {
      label: "Discovery call",
      value: "Free",
      detail: "30 minutes, no pitch.",
    },
    {
      label: "Process map",
      value: "Yours",
      detail: "Even if you don't hire us.",
    },
    {
      label: "Risk profile",
      value: "Reversed",
      detail: "We work free until it ships.",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#0a0f1f] via-[#0f1f4a] to-[#0a0f1f]"
    >
      {/* Background ambience */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_85%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/15 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 w-[600px] h-[600px] rounded-full bg-cyan-500/12 blur-3xl animate-blob animation-delay-2000" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-indigo-500/10 blur-3xl animate-blob animation-delay-4000" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center text-white">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm mb-8 sm:mb-10">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-xs sm:text-sm font-semibold text-blue-50">
              Available for new projects
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-[-0.02em] leading-[1.05] mb-6 sm:mb-8 max-w-4xl mx-auto px-2">
            Ready to build your{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
              unicorn?
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-blue-100/80 max-w-2xl mx-auto leading-[1.65] mb-12 sm:mb-14 px-2">
            Stop trading time for money. Start building products that scale. Let&apos;s turn your expertise into recurring revenue.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-16 sm:mb-20 px-4">
            <button
              onClick={openModal}
              className="group relative w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-4 bg-white text-gray-900 rounded-xl font-semibold text-base sm:text-lg shadow-[0_20px_50px_-12px_rgba(56,189,248,0.4)] hover:shadow-[0_25px_60px_-12px_rgba(56,189,248,0.55)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="flex items-center justify-center gap-2.5">
                <span>Book a free discovery call</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            <span className="text-sm text-blue-100/60">
              Usually responds within 2 hours.
            </span>
          </div>
        </div>

        {/* Proof strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {proofPoints.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm px-6 py-5 text-left"
            >
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-cyan-300/80 mb-2">
                {p.label}
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white leading-none mb-2">
                {p.value}
              </div>
              <div className="text-sm text-blue-100/70">{p.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
