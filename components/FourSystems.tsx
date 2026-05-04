"use client";

import Link from "next/link";

export default function FourSystems() {
  const systems = [
    {
      number: "01",
      badge: "Our Specialty",
      isMain: true,
      title: "AI Business Process Automation",
      description:
        "Onboarding, approvals, reporting, internal agents, tool integrations — anything manual and repetitive in your operations. The work that shouldn't need a person, finally doesn't.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      number: "02",
      tag: "for example",
      title: "AI Marketing Systems",
      description:
        "Social media automation across LinkedIn, Facebook, Instagram, X, Reddit — plus email marketing engines that segment, send, and follow up on autopilot.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
    },
    {
      number: "03",
      tag: "for example",
      title: "AI Sales Systems",
      description:
        "Lead qualification, follow-up automation, pipeline routing, sales-handoff flows. Stop letting warm leads go cold.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      number: "04",
      tag: "for example",
      title: "AI Communication Automation",
      description:
        "WhatsApp, Discord, and Slack workflows. Conversational AI that responds, qualifies, routes, and escalates across every messaging channel your business runs on.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="systems" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            The Four Systems
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight px-4 max-w-4xl mx-auto">
            Four systems.
            <span className="gradient-text-modern"> Built around your business,</span> not a template.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-light px-4">
            We don&apos;t pick from a menu. You tell us about your business — we tell you which systems you actually need.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {systems.map((sys, index) => (
            <div
              key={index}
              className={`group relative grid grid-cols-1 md:grid-cols-[80px_1fr_auto] gap-6 lg:gap-10 items-start p-6 sm:p-8 lg:p-10 rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                sys.isMain
                  ? "bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 border-blue-500 text-white shadow-2xl shadow-blue-500/20"
                  : "bg-white border-gray-200 hover:border-gray-900"
              }`}
            >
              {/* Animated blue border at top (non-main) */}
              {!sys.isMain && (
                <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-t-2xl" />
              )}

              {/* Number */}
              <div className={`text-5xl lg:text-6xl font-bold leading-none ${
                sys.isMain ? "text-white/40" : "text-blue-600/30"
              }`}>
                {sys.number}.
              </div>

              {/* Content */}
              <div className="relative z-10">
                {sys.badge && (
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    {sys.badge}
                  </span>
                )}
                {sys.tag && (
                  <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-xs font-semibold uppercase tracking-wider mb-4">
                    — {sys.tag}
                  </span>
                )}
                <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 leading-tight ${
                  sys.isMain ? "text-white" : "text-gray-900"
                }`}>
                  {sys.title}
                </h3>
                <p className={`text-sm sm:text-base leading-relaxed max-w-2xl ${
                  sys.isMain ? "text-blue-50" : "text-gray-600"
                }`}>
                  {sys.description}
                </p>
              </div>

              {/* Icon */}
              <div className={`hidden md:flex items-center justify-center w-32 h-32 rounded-2xl ${
                sys.isMain
                  ? "bg-white/10 text-white border border-white/20"
                  : "bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 border border-blue-100"
              }`}>
                {sys.icon}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Link
            href="/ai-systems"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-300"
          >
            <span>See all four systems in detail</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
