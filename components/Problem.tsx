export default function Problem() {
  const problems = [
    {
      number: "i.",
      title: "The competitor you don't see",
      description:
        "Somewhere out there, a business your size is quietly installing AI into theirs. They're cutting hours off operations. Answering customers at 3am. Processing leads while you sleep. You won't notice them this quarter. You will in twelve months.",
    },
    {
      number: "ii.",
      title: "The bookmarks that don't help",
      description:
        "You know AI matters. You've read the articles. You've bookmarked the tools. But there's a gap between knowing it matters and knowing where to start, what to trust, or who to hire.",
    },
    {
      number: "iii.",
      title: "The widening gap",
      description:
        "Businesses don't lose to better products anymore. They lose to better systems. The companies installing AI infrastructure now will own their markets in five years. The rest will be sold to them.",
    },
  ];

  return (
    <section id="problem" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            The Honest Part
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight px-4 max-w-4xl mx-auto">
            Your competitor is already installing AI.
            <br className="hidden sm:block" />
            <span className="gradient-text-modern"> You just haven&apos;t seen them yet.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 sm:p-8 rounded-2xl border-2 border-gray-200 hover:border-gray-900 transition-colors duration-300 overflow-hidden"
            >
              {/* Animated blue border at top */}
              <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-t-2xl" />

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              <div className="relative z-10">
                <div className="text-2xl font-bold text-blue-600 mb-4 italic">
                  {problem.number}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                  {problem.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
