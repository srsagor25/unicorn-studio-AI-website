export default function Plan() {
  const steps = [
    {
      number: "i",
      title: "Tell us",
      description: "Free discovery call. You walk us through your business. We listen, we ask, we don't pitch.",
    },
    {
      number: "ii",
      title: "We map it",
      description: "You get a written breakdown of every task in your business AI can take over — with realistic timelines and scope. Yours to keep, even if you don't hire us.",
    },
    {
      number: "iii",
      title: "We build it",
      description: "Custom AI system, scoped to your business. We install, integrate, and stay on it until it's running. Then we maintain it.",
    },
  ];

  return (
    <section id="process" className="py-12 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            The Plan
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight px-4">
            Three steps.<span className="gradient-text-modern"> No surprises.</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-light px-4">
            From first call to a system running in your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
          {/* Connecting line - desktop only */}
          <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 -z-0" />

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              {/* Number circle */}
              <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 flex items-center justify-center text-white text-3xl sm:text-4xl font-bold italic shadow-xl shadow-blue-500/40 mb-6">
                {step.number}
              </div>

              {/* Card */}
              <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 p-6 sm:p-8 rounded-2xl border border-gray-200 w-full hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
