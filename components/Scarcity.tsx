export default function Scarcity() {
  const reasons = [
    {
      number: "01",
      title: "Limited new clients per month",
      description: "Every system is custom-built. We cap onboarding so quality never slips.",
      caption: "Quality over scale",
    },
    {
      number: "02",
      title: "Founding rate locked for life",
      description: "As we scale, prices rise. Today's clients lock theirs forever.",
      caption: "Price holds. Permanently.",
    },
    {
      number: "03",
      title: "The AI gap is widening monthly",
      description: "Every week you wait, a competitor compounds their advantage.",
      caption: "Compounding, not linear",
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Subtle ambient backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-end mb-14 sm:mb-18 lg:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-xs sm:text-sm font-semibold mb-6 sm:mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Why now
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1]">
              A few <span className="gradient-text-modern">honest</span> reasons not to wait.
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 leading-[1.65]">
            We&apos;d rather you understand the cost of waiting than the cost of working with us. Here&apos;s the part most agencies won&apos;t put in writing.
          </p>
        </div>

        {/* Ledger-style list */}
        <ol className="rounded-3xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 overflow-hidden shadow-sm">
          {reasons.map((reason, index) => (
            <li
              key={reason.number}
              className={`group relative grid grid-cols-[auto_1fr] sm:grid-cols-[140px_1fr_auto] gap-5 sm:gap-10 items-center px-6 sm:px-10 lg:px-14 py-8 sm:py-10 lg:py-12 ${
                index !== reasons.length - 1 ? "border-b border-gray-200" : ""
              } transition-colors hover:bg-blue-50/40`}
            >
              {/* Big numeral */}
              <div className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent leading-none">
                {reason.number}
              </div>

              {/* Title + body */}
              <div className="col-span-2 sm:col-span-1">
                <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-gray-900 leading-[1.2] mb-2 sm:mb-2.5">
                  {reason.title}
                </h3>
                <p className="text-[15px] sm:text-base text-gray-600 leading-[1.7] max-w-2xl">
                  {reason.description}
                </p>
              </div>

              {/* Right caption */}
              <div className="hidden sm:block text-right">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                  <span className="w-1 h-1 rounded-full bg-blue-500" />
                  {reason.caption}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
