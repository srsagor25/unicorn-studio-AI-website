"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Melissa from "@/public/testimonial/Melissa.jpeg";
import Daniel from "@/public/testimonial/Daniel.jpeg";
import Lokesh from "@/public/testimonial/Lokesh.jpeg";
import Tivan from "@/public/testimonial/Tivan.jpeg";

const testimonials = [
  {
    name: "Melissa Pancoast",
    role: "Operations Director",
    quote:
      "They built our SaaS MVP in just 4 weeks and we had paying customers within the first month. The subscription billing and admin dashboard worked flawlessly from day one.",
    stats: [
      { label: "4-week MVP", bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-100" },
      { label: "Paying customers in month 1", bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-100" },
    ],
    image: Melissa,
    tag: "SaaS MVP",
  },
  {
    name: "Daniel Luu",
    role: "CEO",
    quote:
      "Our mobile app hit 50K downloads in the first quarter. The native experience and push notifications drove incredible retention rates we never expected.",
    stats: [
      { label: "50K downloads", bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-100" },
      { label: "4.8 star rating", bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-100" },
    ],
    image: Daniel,
    tag: "Mobile App",
  },
  {
    name: "Lokesh Johri",
    role: "CTO & Co-Founder",
    quote:
      "The AI integration into our existing platform automated 80% of our manual workflows. Our team now focuses on strategy instead of repetitive tasks.",
    stats: [
      { label: "80% automation", bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-100" },
      { label: "3x team productivity", bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-100" },
    ],
    image: Lokesh,
    tag: "AI Integration",
  },
  {
    name: "Tivan Amour",
    role: "CTO",
    quote:
      "Our new product website tripled our conversion rate overnight. The copy, design, and SEO optimization were all dialed in perfectly.",
    stats: [
      { label: "3x conversions", bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-100" },
      { label: "Sub-second load time", bg: "bg-teal-50", text: "text-teal-700", border: "border-teal-100" },
    ],
    image: Tivan,
    tag: "Product Website",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Backdrop ambience */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-blue-100/30 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-6 sm:mb-7">
            Client outcomes
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] max-w-3xl mx-auto">
            Real results from <span className="gradient-text-modern">real businesses.</span>
          </h2>
        </div>

        {/* Featured testimonial card */}
        <div className="relative">
          <article className="relative bg-white rounded-3xl border border-gray-200 shadow-[0_30px_80px_-25px_rgba(0,0,0,0.18)] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr]">
              {/* Photo column */}
              <div className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 lg:w-[320px] xl:w-[360px] py-10 sm:py-12 lg:py-14 px-8 lg:px-10 flex flex-col items-start justify-between gap-8 border-b lg:border-b-0 lg:border-r border-gray-200">
                {/* Decorative quote mark */}
                <div className="absolute top-5 right-5 lg:top-6 lg:right-6 text-blue-200/80 select-none pointer-events-none">
                  <svg className="w-14 h-14 lg:w-16 lg:h-16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9.62 18.32H5.4v-4.21H8q.43 0 .69-.27a.93.93 0 0 0 .26-.66c0-.32-.13-.6-.4-.83-.27-.23-.66-.34-1.18-.34-.59 0-1.1.16-1.5.49v-2.94c.5-.34 1.16-.5 1.99-.5 1.13 0 2.04.36 2.71 1.07.68.71 1.02 1.69 1.02 2.93v5.26ZM18.6 18.32h-4.22v-4.21h2.6q.42 0 .69-.27a.93.93 0 0 0 .26-.66q0-.48-.4-.83c-.27-.23-.66-.34-1.18-.34-.59 0-1.1.16-1.5.49v-2.94c.5-.34 1.16-.5 1.99-.5 1.13 0 2.04.36 2.71 1.07.68.71 1.02 1.69 1.02 2.93v5.26Z" />
                  </svg>
                </div>

                {/* Avatar + name */}
                <div className="relative">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-white shadow-lg shadow-blue-500/10 mb-5">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="font-bold text-gray-900 text-base sm:text-lg leading-tight">{t.name}</div>
                  <div className="text-sm text-gray-500 mt-0.5">{t.role}</div>
                </div>

                {/* Tag */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[11px] font-bold uppercase tracking-[0.18em]">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  {t.tag}
                </span>
              </div>

              {/* Quote column */}
              <div className="p-8 sm:p-10 lg:p-14 flex flex-col justify-between gap-8">
                <blockquote className="text-xl sm:text-2xl lg:text-[28px] text-gray-900 font-medium leading-[1.45] tracking-[-0.01em]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Stat chips */}
                <div className="flex flex-wrap gap-3">
                  {t.stats.map((stat, i) => (
                    <span
                      key={i}
                      className={`inline-flex items-center gap-2 ${stat.bg} ${stat.text} ${stat.border} border text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
                      {stat.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute -left-3 sm:-left-5 lg:-left-7 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-700 w-11 h-11 lg:w-12 lg:h-12 rounded-full flex items-center justify-center shadow-lg border border-gray-200 transition-all hover:shadow-xl z-10"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute -right-3 sm:-right-5 lg:-right-7 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-700 w-11 h-11 lg:w-12 lg:h-12 rounded-full flex items-center justify-center shadow-lg border border-gray-200 transition-all hover:shadow-xl z-10"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-10 sm:mt-12">
          {testimonials.map((tm, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-blue-600 w-10" : "bg-gray-300 w-6 hover:bg-gray-400"
              }`}
              aria-label={`Show testimonial from ${tm.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
