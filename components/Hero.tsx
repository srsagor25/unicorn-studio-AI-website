"use client";

import LogoCarousel from "./LogoCarousel";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white pt-24 sm:pt-32 pb-8 sm:pb-10">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient opacity-60" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Enhanced animated gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-gradient-to-r from-blue-400/30 to-cyan-400/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-gradient-to-l from-indigo-400/30 to-purple-400/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-blue-300/20 to-cyan-300/10 rounded-full blur-3xl animate-blob animation-delay-4000" />

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-[10%] w-20 h-20 border-2 border-blue-200/40 rounded-2xl rotate-12 animate-float" />
      <div className="absolute bottom-32 right-[15%] w-16 h-16 border-2 border-purple-200/40 rounded-full animate-float animation-delay-2000" />
      <div className="absolute top-1/3 right-[8%] w-12 h-12 border-2 border-cyan-200/40 rounded-lg -rotate-12 animate-float animation-delay-4000" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center mb-4 sm:mb-12">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/60 text-blue-700 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 animate-fadeIn shadow-lg shadow-blue-100/50 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            AI System Specialists
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-[1.1] tracking-tight px-2">
            Integrate AI Into Your Business
            <br />
            <span className="gradient-text-modern inline-block mt-2">Before Your Competitor Does</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
            Tell us about your business. We&apos;ll find what can be automated, build the AI systems that do it, and stay on it until it&apos;s running. Guaranteed, or we work for free until it does.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4 w-full max-w-md sm:max-w-none mx-auto">
            <a
              href="#contact"
              className="btn-primary group w-full sm:w-auto px-8 py-4 text-white rounded-xl font-semibold text-base text-center flex items-center justify-center gap-2"
            >
              <span className="relative z-10">Book a Free Discovery Call</span>
              <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#services"
              className="btn-secondary w-full sm:w-auto px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold text-base border-2 border-gray-300 text-center backdrop-blur-sm"
            >
              <span className="relative z-10">See the Four Systems</span>
            </a>
          </div>

          {/* Hero stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12 sm:mb-16 px-4">
            <div className="text-center p-4 sm:p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/60 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                04
              </div>
              <div className="text-xs sm:text-sm text-gray-600 font-semibold">systems we specialize in</div>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/60 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-xs sm:text-sm text-gray-600 font-semibold">custom-built per business</div>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/60 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                Limited
              </div>
              <div className="text-xs sm:text-sm text-gray-600 font-semibold">new clients per month</div>
            </div>
          </div>

          <div className="mt-1 sm:mt-12">
            <LogoCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
