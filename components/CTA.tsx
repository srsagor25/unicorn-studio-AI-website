"use client";

import { useCalendly } from "./CalendlyProvider";

export default function CTA() {
  const { openModal } = useCalendly();

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100 overflow-hidden"
    >
      {/* Soft ambient backdrop */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-blue-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-0 w-[500px] h-[500px] rounded-full bg-indigo-100/30 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[minmax(0,360px)_1fr] gap-10 lg:gap-16 items-center">
          {/* Left — identity card */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-6">
              {/* Avatar ring */}
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 p-[3px] shadow-[0_20px_50px_-12px_rgba(59,130,246,0.4)]">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <span className="text-4xl sm:text-5xl font-bold tracking-[-0.02em] gradient-text-modern">
                    US
                  </span>
                </div>
              </div>
              {/* Online presence dot */}
              <span className="absolute bottom-2 right-2 flex items-center justify-center">
                <span className="absolute inline-flex w-5 h-5 rounded-full bg-emerald-400 opacity-60 animate-ping" />
                <span className="relative inline-flex w-4 h-4 rounded-full bg-emerald-500 border-[3px] border-white" />
              </span>
            </div>

            <div className="font-bold text-gray-900 text-base">Unicorn Studio</div>
            <div className="text-sm text-gray-500 mb-4">AI Systems Specialists</div>

            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Available · Replies under 2 hrs
            </div>
          </div>

          {/* Right — conversation + actions */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-[-0.02em] leading-[1.1] mb-5 text-balance">
              Got an idea?{" "}
              <span className="gradient-text-modern">Let&apos;s chat.</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-[1.65] mb-8 max-w-xl text-pretty">
              30 minutes. No pitch. Walk us through your business and we&apos;ll tell you honestly which AI systems would help, which won&apos;t, and whether we&apos;re the right team to build them. You leave with a written process map — yours either way.
            </p>

            {/* Contact channels — connekt-style stacked rows */}
            <div className="space-y-3 max-w-xl">
              {/* Discovery call (primary) */}
              <button
                onClick={openModal}
                className="group w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 bg-gray-900 text-white rounded-2xl hover:bg-gray-800 transition-colors text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-[15px] sm:text-base">Book a discovery call</div>
                    <div className="text-xs sm:text-[13px] text-gray-400 truncate">30 min · Calendly · Free</div>
                  </div>
                </div>
                <svg className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              {/* Email */}
              <a
                href="mailto:contact@unicornstudio.io"
                className="group w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 bg-white border-2 border-gray-200 hover:border-gray-900 text-gray-900 rounded-2xl transition-colors"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-[15px] sm:text-base">Email us</div>
                    <div className="text-xs sm:text-[13px] text-gray-500 truncate">contact@unicornstudio.io</div>
                  </div>
                </div>
                <svg className="w-5 h-5 flex-shrink-0 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/?text=Hi%20Unicorn%20Studio%20%E2%80%94%20I%27d%20like%20to%20chat%20about%20an%20AI%20system."
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 bg-white border-2 border-gray-200 hover:border-gray-900 text-gray-900 rounded-2xl transition-colors"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a9.869 9.869 0 0 1-1.516-5.26c0-5.445 4.455-9.885 9.942-9.885a9.86 9.86 0 0 1 7.022 2.91 9.788 9.788 0 0 1 2.916 6.99c-.005 5.444-4.46 9.885-9.945 9.885zM20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a12.062 12.062 0 0 0 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-[15px] sm:text-base">Message on WhatsApp</div>
                    <div className="text-xs sm:text-[13px] text-gray-500 truncate">Quick questions get quick answers</div>
                  </div>
                </div>
                <svg className="w-5 h-5 flex-shrink-0 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
