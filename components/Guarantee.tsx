export default function Guarantee() {
  const guarantees = [
    {
      number: "01",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      content: (
        <>
          We refund <strong>100% of your setup fee</strong> — no negotiation, no fine print.
        </>
      ),
    },
    {
      number: "02",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      content: (
        <>
          We keep working with you <strong>at no cost</strong> until the system is running as scoped.
        </>
      ),
    },
    {
      number: "03",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      content: (
        <>
          You keep <strong>every workflow, prompt, and asset</strong> we built — yours forever.
        </>
      ),
    },
  ];

  return (
    <section id="guarantee" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            The Reverse-Risk Guarantee
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight px-4">
            Built and Running,
            <span className="gradient-text-modern"> Or We Work Free.</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-light px-4">
            We agree on scope and timeline upfront — in writing — before any build begins. If we don&apos;t deliver what we agreed to, when we agreed to:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {guarantees.map((g, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 sm:p-8 rounded-2xl border-2 border-gray-200 hover:border-blue-500 transition-colors duration-300 overflow-hidden shadow-sm hover:shadow-xl"
            >
              {/* Animated blue border at top */}
              <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-t-2xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                    {g.icon}
                  </div>
                  <span className="text-3xl font-bold text-blue-600/30">
                    {g.number}
                  </span>
                </div>
                <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                  {g.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto p-5 sm:p-6 rounded-xl bg-gray-50 border border-gray-200">
          <p className="text-sm sm:text-base text-gray-600 italic leading-relaxed text-center">
            We guarantee the system is built, integrated, and operational as scoped. We don&apos;t guarantee business outcomes — those depend on your strategy, your offer, and the inputs you feed it. We guarantee the infrastructure works. The rest is up to you.
          </p>
        </div>
      </div>
    </section>
  );
}
