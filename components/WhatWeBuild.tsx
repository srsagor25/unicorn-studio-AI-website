"use client";

import { useState } from "react";
import Link from "next/link";

export default function WhatWeBuild() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      name: "AI Systems",
      category: "AI",
      description: "Custom AI infrastructure that automates the manual, repetitive work in your business. Process automation, marketing, sales, and communication systems built around your operations, not a template.",
      link: "/ai-systems",
      linkText: "Explore AI Systems"
    },
    {
      name: "AI Integrations",
      category: "AI",
      description: "Enhance your existing products with AI capabilities. OpenAI, Claude, Gemini, or custom models. We integrate intelligence where it matters most.",
      link: "/ai-integrations",
      linkText: "Explore AI Integrations"
    },
    {
      name: "AI Solutions",
      category: "AI",
      description: "Custom AI implementations that solve real business problems. From intelligent automation to predictive analytics, we make AI work for your specific use case.",
      link: "/ai-solutions",
      linkText: "Explore AI Solutions"
    },
    {
      name: "SaaS Products",
      category: "Product",
      description: "From first commit to full-scale SaaS. We build, test, and launch alongside you.",
      link: "/saas-products",
      linkText: "Explore SaaS Products"
    },
    {
      name: "Mobile Apps",
      category: "Product",
      description: "Native and cross-platform apps that users love. iOS, Android, or React Native. We choose the right approach for your audience and budget.",
      link: "/mobile-apps",
      linkText: "Explore Mobile Apps"
    },
    {
      name: "Product Websites",
      category: "Product",
      description: "High-converting web experiences that tell your story. From landing pages to full marketing sites, designed to turn visitors into customers.",
      link: "/product-websites",
      linkText: "Explore Product Websites"
    },
    {
      name: "Branding",
      category: "Brand",
      description: "Strategic brand identity that sets you apart. Logo, visual system, and messaging that resonate with your target market.",
      link: "/branding",
      linkText: "Explore Branding"
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-6 sm:mb-7">
            Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 sm:mb-7 tracking-[-0.02em] px-4 max-w-4xl mx-auto leading-[1.1]">
            What we <span className="gradient-text-modern">build.</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-[1.6] px-4">
            Three AI services and four product builds. Pick the one that fits, or let us help you choose.
          </p>
          <div className="mt-8 sm:mt-9 flex flex-wrap justify-center gap-2 px-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[11px] sm:text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              AI · 3 services
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-[11px] sm:text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
              Product · 3 builds
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-[11px] sm:text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
              Brand · 1 service
            </span>
          </div>
        </div>

        {/* Mobile Accordion View */}
        <div className="lg:hidden space-y-2">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                activeService === index
                  ? "border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg"
                  : "border-gray-200 bg-white"
              }`}
            >
              {/* Animated blue border at top - moves left to right on active */}
              <div className={`absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform transition-transform duration-700 ease-out rounded-t-2xl ${
                activeService === index ? "translate-x-0" : "translate-x-[-100%]"
              }`} />
              {/* Service Header - Always Visible */}
              <button
                onClick={() => setActiveService(index)}
                className="w-full p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  {/* Number Badge */}
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-colors duration-300 ${
                    activeService === index
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}>
                    {index + 1}
                  </div>

                  {/* Service Name */}
                  <h3 className={`text-base font-bold text-left transition-colors duration-300 ${
                    activeService === index ? "text-blue-900" : "text-gray-900"
                  }`}>
                    {service.name}
                  </h3>
                </div>

                {/* Expand/Collapse Icon */}
                <svg
                  className={`w-5 h-5 transition-all duration-300 flex-shrink-0 ${
                    activeService === index ? "text-blue-600 rotate-180" : "text-gray-400"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Expandable Content */}
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  activeService === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 pb-4">
                  <div className="pl-11 pr-2">
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">
                      {service.description}
                    </p>
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors duration-300"
                    >
                      {service.linkText}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Service Counter */}
          <div className="text-center pt-4">
            <p className="text-xs text-gray-500 font-medium">
              {activeService + 1} of {services.length} services
            </p>
          </div>
        </div>

        {/* Desktop Tab Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left Column - Service Tabs */}
          <div className="space-y-3.5">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                  activeService === index
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl scale-105"
                    : "bg-white border-2 border-gray-200 text-gray-900 hover:border-blue-500 hover:shadow-lg"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className={`inline-flex items-center justify-center w-7 h-7 rounded-md text-[11px] font-bold tracking-tight ${
                      activeService === index
                        ? "bg-white/20 text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className={`text-xl font-bold ${
                      activeService === index ? "text-white" : "text-gray-900"
                    }`}>
                      {service.name}
                    </h3>
                    <span className={`hidden xl:inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      activeService === index
                        ? "bg-white/20 text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}>
                      {service.category}
                    </span>
                  </div>
                  <svg
                    className={`w-6 h-6 transition-transform duration-300 ${
                      activeService === index ? "text-white rotate-90" : "text-gray-400"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>

          {/* Right Column - Content Display */}
          <div className="sticky top-28">
            <div className="relative bg-gradient-to-br from-gray-50 to-blue-50/30 p-12 lg:p-14 rounded-3xl border border-gray-200 shadow-xl min-h-[400px] flex items-center overflow-hidden">
              {/* Animated blue border at top - moves left to right */}
              <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] transition-transform duration-700 ease-out rounded-t-3xl animate-border"
                key={activeService}
                style={{ animation: 'slideIn 700ms ease-out forwards' }}
              />

              <div className="relative z-10 w-full">
                <span className="inline-block px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-[0.18em] mb-5">
                  {services[activeService].category}
                </span>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 tracking-[-0.01em] leading-[1.15]">
                  {services[activeService].name}
                </h3>
                <p className="text-lg text-gray-700 leading-[1.7] mb-8">
                  {services[activeService].description}
                </p>
                <Link
                  href={services[activeService].link}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {services[activeService].linkText}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
