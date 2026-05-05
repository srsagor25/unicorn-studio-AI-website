"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How quickly can we launch?",
      answer:
        "Most MVPs ship in 4 to 8 weeks. Mobile apps in 8 to 12 weeks. Product websites in 2 to 3 weeks. We've launched focused products in as fast as 10 days.",
    },
    {
      question: "Do you handle everything from branding to development?",
      answer:
        "Yes. We're a full-service studio. You work with one team from strategy through launch, ensuring consistency and efficiency across every stage.",
    },
    {
      question: "What if I'm not technical?",
      answer:
        "Perfect. We translate between business and technology. You focus on the problem and customers. We handle everything else.",
    },
    {
      question: "Can you work with our existing brand or code?",
      answer:
        "Absolutely. We can work within existing brand guidelines or codebases. We're comfortable inheriting and improving what you've already built.",
    },
    {
      question: "What about after launch?",
      answer:
        "We offer ongoing partnerships for updates, scaling, and feature development. Or we can hand off to your team with comprehensive documentation.",
    },
    {
      question: "Which AI models do you work with?",
      answer:
        "All major providers: OpenAI, Claude, Gemini, plus open-source models. We choose based on your specific needs and budget.",
    },
    {
      question: "Why “Unicorn Studio”?",
      answer:
        "We help build the rare ones: products that achieve product-market fit, sustainable growth, and real impact. Your unicorn doesn't need a billion-dollar valuation. It needs to solve real problems profitably.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header (split layout for visual interest) */}
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start mb-10 sm:mb-12 lg:mb-14">
          <div className="lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-6 sm:mb-7">
              FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] mb-5 sm:mb-7">
              Frequently asked <span className="gradient-text-modern">questions.</span>
            </h2>
            <p className="text-lg text-gray-600 leading-[1.65] mb-8">
              Most-asked things, answered honestly. Don&apos;t see your question?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
            >
              <span>Ask on a discovery call</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Questions */}
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-white border-blue-200 shadow-[0_15px_40px_-15px_rgba(37,99,235,0.18)]"
                      : "bg-white border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full px-6 sm:px-7 py-5 sm:py-6 flex items-center justify-between gap-6 text-left"
                  >
                    <span
                      className={`text-base sm:text-lg font-semibold leading-[1.4] ${
                        isOpen ? "text-blue-900" : "text-gray-900"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-blue-600 text-white rotate-45"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 sm:px-7 pb-6 sm:pb-7">
                        <p className="text-[15px] sm:text-base text-gray-600 leading-[1.7]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
