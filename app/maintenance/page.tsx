export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFF] dark:bg-slate-900">
      <header className="absolute inset-x-0 top-0 w-full p-6 z-10">
        <span
          aria-label="Azynex"
          className="bg-gradient-to-r from-[#2563EB] via-[#6366F1] to-[#8B5CF6]
               bg-clip-text text-transparent font-extrabold tracking-tight
               text-[clamp(2rem,4vw+1rem,3rem)]"
        >
          Azynex
        </span>
      </header>

      <div className="container max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Column - Content */}
          <div className="space-y-8 lg:pr-8">
            <div className="space-y-4">
              <h1 className="space-y-2">
                <div
                  className="text-4xl md:text-6xl font-black shimmer-gradient animate-fadeUp"
                  style={{ animationDelay: "0ms" }}
                >
                  Oops!
                </div>
                <div
                  className="text-3xl md:text-4xl font-bold text-[#0F172A] dark:text-[#F8FAFC] animate-fadeUp"
                  style={{ animationDelay: "120ms" }}
                >
                  <span className="typewriter animate-typing animate-caret">
                    Under Maintenance
                  </span>
                </div>
              </h1>

              <p
                className="text-lg text-[#475569] dark:text-slate-300 max-w-[70ch] animate-fadeUp"
                style={{ animationDelay: "240ms" }}
              >
                Azynex is performing scheduled maintenance. We're working to
                improve your experience and will be back shortly.
              </p>
            </div>

            <div className="animate-fadeUp" style={{ animationDelay: "360ms" }}>
              <a
                href="/status"
                className="inline-flex items-center rounded-xl bg-gradient-to-r from-[#2563EB] via-[#6366F1] to-[#8B5CF6] px-6 py-3 text-white font-semibold shadow-md transition-all duration-200 hover:brightness-95 hover:-translate-y-[1px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6366F1] dark:focus:ring-offset-slate-900"
              >
                MORE INFO
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="flex justify-center lg:justify-end">
            <svg
              className="w-full h-auto max-w-md"
              viewBox="0 0 400 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="maintenance-illustration"
            >
              <title id="maintenance-illustration">
                Construction and maintenance scene with crane, tools, and
                workers
              </title>

              {/* Background elements */}
              <circle cx="320" cy="80" r="50" fill="#E5E7EB" opacity="0.3" />
              <circle cx="80" cy="240" r="35" fill="#CBD5E1" opacity="0.2" />

              {/* Construction crane */}
              <rect x="50" y="100" width="8" height="180" fill="#94A3B8" />
              <rect x="58" y="120" width="120" height="6" fill="#94A3B8" />
              <rect x="170" y="110" width="6" height="20" fill="#94A3B8" />

              {/* Crane hook with bob animation */}
              <g className="animate-bob">
                <line
                  x1="175"
                  y1="130"
                  x2="175"
                  y2="160"
                  stroke="#8B5CF6"
                  strokeWidth="2"
                />
                <circle cx="175" cy="165" r="4" fill="#6366F1" />
              </g>

              {/* Main construction panel/board */}
              <rect
                x="120"
                y="200"
                width="160"
                height="100"
                rx="8"
                fill="#2563EB"
              />
              <rect
                x="130"
                y="210"
                width="140"
                height="80"
                rx="4"
                fill="#FFFFFF"
              />

              {/* Panel details */}
              <rect
                x="140"
                y="220"
                width="40"
                height="8"
                rx="4"
                fill="#CBD5E1"
              />
              <rect
                x="190"
                y="220"
                width="60"
                height="8"
                rx="4"
                fill="#CBD5E1"
              />
              <rect
                x="140"
                y="240"
                width="80"
                height="8"
                rx="4"
                fill="#CBD5E1"
              />
              <rect
                x="140"
                y="260"
                width="50"
                height="8"
                rx="4"
                fill="#CBD5E1"
              />

              {/* Worker figure */}
              <circle cx="90" cy="190" r="12" fill="#8B5CF6" />
              <rect
                x="85"
                y="202"
                width="10"
                height="25"
                rx="5"
                fill="#2563EB"
              />
              <rect
                x="82"
                y="210"
                width="16"
                height="8"
                rx="4"
                fill="#6366F1"
              />
              <rect x="87" y="227" width="6" height="15" fill="#94A3B8" />

              {/* Tools scattered around */}
              <g transform="rotate(25 320 200)">
                <rect
                  x="315"
                  y="190"
                  width="10"
                  height="40"
                  rx="5"
                  fill="#8B5CF6"
                />
                <circle cx="320" cy="185" r="6" fill="#6366F1" />
                <rect
                  x="314"
                  y="182"
                  width="12"
                  height="6"
                  rx="3"
                  fill="#2563EB"
                />
              </g>

              {/* Wrench */}
              <g transform="rotate(-15 250 180)">
                <rect
                  x="245"
                  y="170"
                  width="8"
                  height="35"
                  rx="4"
                  fill="#8B5CF6"
                />
                <ellipse cx="249" cy="165" rx="6" ry="4" fill="#6366F1" />
                <rect
                  x="243"
                  y="162"
                  width="12"
                  height="4"
                  rx="2"
                  fill="#2563EB"
                />
              </g>

              {/* Animated gears */}
              <g className="animate-gear">
                <circle
                  cx="300"
                  cy="140"
                  r="18"
                  fill="none"
                  stroke="#2563EB"
                  strokeWidth="3"
                />
                <circle cx="300" cy="140" r="10" fill="#8B5CF6" />
                <rect
                  x="296"
                  y="122"
                  width="8"
                  height="6"
                  rx="1"
                  fill="#2563EB"
                />
                <rect
                  x="296"
                  y="152"
                  width="8"
                  height="6"
                  rx="1"
                  fill="#2563EB"
                />
                <rect
                  x="282"
                  y="136"
                  width="6"
                  height="8"
                  rx="1"
                  fill="#2563EB"
                />
                <rect
                  x="312"
                  y="136"
                  width="6"
                  height="8"
                  rx="1"
                  fill="#2563EB"
                />
              </g>

              <g
                className="animate-gear"
                style={{ animationDirection: "reverse", animationDelay: "1s" }}
              >
                <circle
                  cx="330"
                  cy="170"
                  r="12"
                  fill="none"
                  stroke="#6366F1"
                  strokeWidth="2"
                />
                <circle cx="330" cy="170" r="6" fill="#8B5CF6" />
                <rect
                  x="328"
                  y="158"
                  width="4"
                  height="4"
                  rx="1"
                  fill="#6366F1"
                />
                <rect
                  x="328"
                  y="178"
                  width="4"
                  height="4"
                  rx="1"
                  fill="#6366F1"
                />
                <rect
                  x="318"
                  y="168"
                  width="4"
                  height="4"
                  rx="1"
                  fill="#6366F1"
                />
                <rect
                  x="338"
                  y="168"
                  width="4"
                  height="4"
                  rx="1"
                  fill="#6366F1"
                />
              </g>

              {/* Progress indicator */}
              <rect
                x="60"
                y="60"
                width="180"
                height="10"
                rx="5"
                fill="#E5E7EB"
              />
              <rect
                x="60"
                y="60"
                width="108"
                height="10"
                rx="5"
                fill="url(#progressGradient)"
              />
              <text
                x="150"
                y="85"
                textAnchor="middle"
                className="text-xs fill-[#475569]"
              >
                60% Complete
              </text>

              <defs>
                <linearGradient
                  id="progressGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#2563EB" />
                  <stop offset="50%" stopColor="#6366F1" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      <footer className="absolute bottom-0 left-0 w-full p-6 text-center">
        <p className="text-sm text-[#475569] dark:text-slate-400">
          © Azynex. We'll be back shortly. Thank you for your patience.
        </p>
      </footer>
    </div>
  );
}
