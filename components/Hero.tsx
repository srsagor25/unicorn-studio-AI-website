"use client";

import LogoCarousel from "./LogoCarousel";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white pt-28 sm:pt-36 pb-16 sm:pb-24"
    >
      {/* Soft mesh gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 mesh-gradient opacity-50" />

      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />

      {/* Two ambient orbs (reduced from many overlapping) */}
      <div className="pointer-events-none absolute -top-20 -left-32 w-[520px] h-[520px] bg-gradient-to-br from-blue-400/25 to-cyan-300/15 rounded-full blur-3xl animate-blob" />
      <div className="pointer-events-none absolute -bottom-20 -right-32 w-[520px] h-[520px] bg-gradient-to-tl from-indigo-400/25 to-purple-300/15 rounded-full blur-3xl animate-blob animation-delay-2000" />

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-200/70 text-blue-700 text-xs sm:text-sm font-semibold mb-8 sm:mb-10 animate-fadeIn shadow-sm shadow-blue-100/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
            </span>
            AI System Specialists
          </div>

          {/* Main heading */}
          <h1 className="text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.25rem] font-bold text-gray-900 leading-[1.05] tracking-[-0.02em] mb-7 sm:mb-9 max-w-4xl mx-auto text-balance">
            Integrate AI into your business{" "}
            <span className="gradient-text-modern">before your competitor does.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-[1.6] sm:leading-[1.65] mb-10 sm:mb-12 px-2 text-pretty">
            Tell us about your business. We&apos;ll find what can be automated, build the AI systems that do it, and stay on it until it&apos;s running. Guaranteed, or we work for free until it does.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-16 sm:mb-20 px-4">
            <a
              href="#contact"
              className="btn-primary group w-full sm:w-auto px-8 py-4 text-white rounded-xl font-semibold text-base text-center inline-flex items-center justify-center gap-2"
            >
              <span className="relative z-10">Book a Free Discovery Call</span>
              <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#services"
              className="btn-secondary w-full sm:w-auto px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold text-base border border-gray-300 text-center"
            >
              See the Four Systems
            </a>
          </div>

          {/* Hero stats — compact, refined */}
          <div className="mx-auto max-w-3xl mb-14 sm:mb-20">
            <div className="grid grid-cols-3 divide-x divide-gray-200/70 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200/70 shadow-sm overflow-hidden">
              {[
                { value: "04", label: "systems we specialize in" },
                { value: "100%", label: "custom-built per business" },
                { value: "Limited", label: "new clients per month" },
              ].map((s, i) => (
                <div key={i} className="px-4 py-5 sm:px-6 sm:py-7">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text-modern leading-none mb-1.5 sm:mb-2">
                    {s.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-gray-600 font-medium leading-snug">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <LogoCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
