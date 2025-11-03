export function MainprojectCard() {
  return (
    <div className="bg-gray-700 text-white grid grid-cols-2 p-5 rounded-lg shadow lg:col-start-3 lg:col-span-3 lg:row-start-5 space-y-4">
      <p className="text-sm border-r mr-4">
        <h2 className="text-xl font-semibold mb-2">Projects</h2>
        Visit my GitHub to see portfolio websites, admin dashboards, UI
        components, and fullstack apps.
        {/* Link to GitHub */}
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-300 underline mt-2 block"
        >
          View GitHub →
        </a>
      </p>
      {/* Project Highlights Section */}
      <div>
        <h3 className="font-semibold mb-1">Project Highlights:</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Responsive portfolio website with dynamic content</li>
          <li>Admin dashboard with real-time data visualization</li>
          <li>Reusable UI components library</li>
          <li>Fullstack e-commerce app with user authentication</li>
        </ul>
      </div>
    </div>
  );
}

export function IlustrationAbout() {
  return (
    <div className="bg-gray-900/90 shadow-2xl rounded-lg  lg:col-start-5 lg:row-span-4">
      <div className="bg-black rounded-t-2xl w-full  relative overflow-hidden h-72">
        <div className="relative text-center items-center px-10 sm:pt-[30%] z-1000 font-bold text-lg">
          Dedicated to optimizing page load times for enhanced user experience.
        </div>
        <div className="absolute gear-1 left-10 bottom-8">
          <svg width="80" height="80" viewBox="0 0 100 100">
            <path
              d="M50,20 L55,35 L70,30 L65,45 L80,50 L65,55 L70,70 L55,65 L50,80 L45,65 L30,70 L35,55 L20,50 L35,45 L30,30 L45,35 Z"
              fill="#6B7280"
              stroke="#4B5563"
              stroke-width="2"
            />
            <circle cx="50" cy="50" r="18" fill="#1F2937" />
          </svg>
        </div>

        <div className="absolute gear-2 left-28 top-20">
          <svg width="90" height="90" viewBox="0 0 100 100">
            <path
              d="M50,15 L56,32 L73,25 L67,42 L85,45 L72,58 L85,65 L67,68 L73,85 L56,78 L50,95 L44,78 L27,85 L33,68 L15,65 L28,58 L15,45 L33,42 L27,25 L44,32 Z"
              fill="#6B7280"
              stroke="#4B5563"
              stroke-width="2"
            />
            <circle cx="50" cy="50" r="20" fill="#1F2937" />
          </svg>
        </div>

        <div className="absolute gear-3 right-24 bottom-9">
          <svg width="75" height="75" viewBox="0 0 100 100">
            <path
              d="M50,22 L54,36 L68,32 L64,46 L78,50 L64,54 L68,68 L54,64 L50,78 L46,64 L32,68 L36,54 L22,50 L36,46 L32,32 L46,36 Z"
              fill="#6B7280"
              stroke="#4B5563"
              stroke-width="2"
            />
            <circle cx="50" cy="50" r="16" fill="#1F2937" />
          </svg>
        </div>

        <div className="absolute gear-4 -right-16 top-5">
          <svg width="140" height="140" viewBox="0 0 100 100">
            <path
              d="M50,10 L58,28 L76,20 L70,38 L90,42 L75,55 L90,62 L70,66 L76,84 L58,76 L50,94 L42,76 L24,84 L30,66 L10,62 L25,55 L10,42 L30,38 L24,20 L42,28 Z"
              fill="#6B7280"
              stroke="#4B5563"
              stroke-width="2"
            />
            <circle cx="50" cy="50" r="22" fill="#1F2937" />
          </svg>
        </div>
      </div>

      <div
        className="bg-linear-to-br from-black via-purple-950 to-blue-950 border-t-0 border-b-0  p-12 relative overflow-hidden border border-purple-500/30"
        style={{ height: 280 }}
      >
        <div className="relative text-center items-center sm:pt-6  z-1000 font-bold text-md">
          Learning neural network basics by experimenting with simple models.
        </div>
        {/* <!-- Background grid pattern --> */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="grid"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="cyan"
                  stroke-width="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* <!-- Neural network container --> */}
        <div className="brain-container absolute inset-0">
          <svg width="100%" height="100%" viewBox="0 0 400 280">
            {/* <!-- Connections --> */}
            <line
              className="connection"
              x1="80"
              y1="140"
              x2="160"
              y2="80"
              stroke="#8B5CF6"
              stroke-width="2"
              opacity="0.6"
            />
            <line
              className="connection"
              x1="80"
              y1="140"
              x2="160"
              y2="140"
              stroke="#06B6D4"
              stroke-width="2"
              opacity="0.6"
            />
            <line
              className="connection"
              x1="80"
              y1="140"
              x2="160"
              y2="200"
              stroke="#8B5CF6"
              stroke-width="2"
              opacity="0.6"
            />
            naclassName
            <line
              className="connection"
              x1="160"
              y1="80"
              x2="240"
              y2="100"
              stroke="#06B6D4"
              stroke-width="2"
              opacity="0.6"
            />
            <line
              className="connection"
              x1="160"
              y1="140"
              x2="240"
              y2="100"
              stroke="#8B5CF6"
              stroke-width="2"
              opacity="0.6"
            />
            <line
              className="connection"
              x1="160"
              y1="140"
              x2="240"
              y2="180"
              stroke="#06B6D4"
              stroke-width="2"
              opacity="0.6"
            />
            <line
              className="connection"
              x1="160"
              y1="200"
              x2="240"
              y2="180"
              stroke="#8B5CF6"
              stroke-width="2"
              opacity="0.6"
            />
            naclassName
            <line
              className="connection"
              x1="240"
              y1="100"
              x2="320"
              y2="140"
              stroke="#06B6D4"
              stroke-width="2"
              opacity="0.6"
            />
            <line
              className="connection"
              x1="240"
              y1="180"
              x2="320"
              y2="140"
              stroke="#8B5CF6"
              stroke-width="2"
              opacity="0.6"
            />
            {/* <!-- Nodes Layer 1 --> */}
            <circle
              className="node"
              cx="80"
              cy="140"
              r="12"
              fill="#8B5CF6"
              opacity="0.8"
            />
            <circle
              cx="80"
              cy="140"
              r="20"
              fill="none"
              stroke="#8B5CF6"
              stroke-width="1"
              opacity="0.3"
            />
            {/* <!-- Nodes Layer 2 --> */}
            <circle
              className="node"
              cx="160"
              cy="80"
              r="10"
              fill="#06B6D4"
              opacity="0.8"
            />
            <circle
              cx="160"
              cy="80"
              r="18"
              fill="none"
              stroke="#06B6D4"
              stroke-width="1"
              opacity="0.3"
            />
            <circle
              className="node"
              cx="160"
              cy="140"
              r="10"
              fill="#8B5CF6"
              opacity="0.8"
            />
            <circle
              cx="160"
              cy="140"
              r="18"
              fill="none"
              stroke="#8B5CF6"
              stroke-width="1"
              opacity="0.3"
            />
            <circle
              className="node"
              cx="160"
              cy="200"
              r="10"
              fill="#06B6D4"
              opacity="0.8"
            />
            <circle
              cx="160"
              cy="200"
              r="18"
              fill="none"
              stroke="#06B6D4"
              stroke-width="1"
              opacity="0.3"
            />
            {/* <!-- Nodes Layer 3 --> */}
            <circle
              className="node"
              cx="240"
              cy="100"
              r="10"
              fill="#8B5CF6"
              opacity="0.8"
            />
            <circle
              cx="240"
              cy="100"
              r="18"
              fill="none"
              stroke="#8B5CF6"
              stroke-width="1"
              opacity="0.3"
            />
            <circle
              className="node"
              cx="240"
              cy="180"
              r="10"
              fill="#06B6D4"
              opacity="0.8"
            />
            <circle
              cx="240"
              cy="180"
              r="18"
              fill="none"
              stroke="#06B6D4"
              stroke-width="1"
              opacity="0.3"
            />
            <circle
              className="node"
              cx="320"
              cy="140"
              r="12"
              fill="#06B6D4"
              opacity="0.8"
            />
            <circle
              cx="320"
              cy="140"
              r="20"
              fill="none"
              stroke="#06B6D4"
              stroke-width="1"
              opacity="0.3"
            />
          </svg>
        </div>

        <div className="absolute top-4 right-4 w-16 h-16 bg-purple-500 rounded-full blur-xl opacity-50"></div>
        <div className="absolute bottom-4 left-4 w-20 h-20 bg-cyan-500 rounded-full blur-xl opacity-40"></div>
      </div>

      <div
        className="bg-linear-to-br from-slate-950 via-blue-950  border-t-0 to-slate-950 rounded-b-2xl p-12 relative overflow-hidden border border-blue-500/30"
        style={{ height: "280px" }}
      >
        <div className="text-center right-6 left-6 absolute items-center sm:pt-6  z-1000 font-bold text-md">
          Familiar with core database design principles, including table
          structures, relationships, and normalization.
        </div>
        {/* <!-- Circuit board pattern background --> */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="circuit"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="20" cy="20" r="2" fill="#3B82F6" />
                <line
                  x1="20"
                  y1="0"
                  x2="20"
                  y2="40"
                  stroke="#3B82F6"
                  stroke-width="1"
                />
                <line
                  x1="0"
                  y1="20"
                  x2="40"
                  y2="20"
                  stroke="#3B82F6"
                  stroke-width="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        <svg width="100%" height="100%" viewBox="0 0 400 280">
          {/* <!-- Data flow lines --> */}
          <path
            className="data-line"
            d="M 200 50 L 200 90"
            stroke="#3B82F6"
            stroke-width="2"
            fill="none"
          />
          <path
            className="data-line"
            d="M 200 160 L 100 200"
            stroke="#10B981"
            stroke-width="2"
            fill="none"
          />
          <path
            className="data-line"
            d="M 200 160 L 300 200"
            stroke="#10B981"
            stroke-width="2"
            fill="none"
          />

          {/* <!-- Top Server/Cloud --> */}
          <g transform="translate(150, 20)">
            <rect
              x="0"
              y="0"
              width="100"
              height="30"
              rx="5"
              fill="#1E40AF"
              opacity="0.8"
            />
            <rect
              x="10"
              y="8"
              width="12"
              height="14"
              rx="2"
              fill="#3B82F6"
              className="server-light"
            />
            <rect
              x="28"
              y="8"
              width="12"
              height="14"
              rx="2"
              fill="#3B82F6"
              className="server-light"
            />
            <rect
              x="46"
              y="8"
              width="12"
              height="14"
              rx="2"
              fill="#3B82F6"
              className="server-light"
            />
            <text
              x="70"
              y="20"
              fill="#60A5FA"
              font-size="12"
              font-weight="bold"
            >
              API
            </text>
          </g>

          {/* <!-- Central Database Cylinders --> */}
          <g transform="translate(150, 100)">
            {/* <!-- First cylinder --> */}
            <g className="cylinder-1">
              <ellipse
                cx="50"
                cy="0"
                rx="40"
                ry="10"
                fill="#3B82F6"
                opacity="0.9"
              />
              <rect x="10" y="0" width="80" height="20" fill="#2563EB" />
              <ellipse cx="50" cy="20" rx="40" ry="10" fill="#1E40AF" />
            </g>

            {/* <!-- Second cylinder --> */}
            <g className="cylinder-2" transform="translate(0, 25)">
              <ellipse
                cx="50"
                cy="0"
                rx="40"
                ry="10"
                fill="#3B82F6"
                opacity="0.9"
              />
              <rect x="10" y="0" width="80" height="20" fill="#2563EB" />
              <ellipse cx="50" cy="20" rx="40" ry="10" fill="#1E40AF" />
            </g>

            {/* <!-- Third cylinder --> */}
            <g className="cylinder-3" transform="translate(0, 50)">
              <ellipse
                cx="50"
                cy="0"
                rx="40"
                ry="10"
                fill="#3B82F6"
                opacity="0.9"
              />
              <rect x="10" y="0" width="80" height="20" fill="#2563EB" />
              <ellipse cx="50" cy="20" rx="40" ry="10" fill="#1E40AF" />
            </g>
          </g>

          {/* <!-- Left Table/Schema --> */}
          <g transform="translate(40, 200)">
            <rect
              x="0"
              y="0"
              width="80"
              height="50"
              rx="4"
              fill="#059669"
              opacity="0.8"
              stroke="#10B981"
              stroke-width="2"
            />
            <line
              x1="0"
              y1="12"
              x2="80"
              y2="12"
              stroke="#10B981"
              stroke-width="2"
            />
            <line
              x1="25"
              y1="12"
              x2="25"
              y2="50"
              stroke="#10B981"
              stroke-width="1"
              opacity="0.5"
            />
            <circle cx="12" cy="26" r="3" fill="#34D399" />
            <circle cx="12" cy="38" r="3" fill="#34D399" />
            <text x="8" y="9" fill="#D1FAE5" font-size="8" font-weight="bold">
              Users
            </text>
          </g>

          {/* <!-- Right Table/Schema --> */}
          <g transform="translate(280, 200)">
            <rect
              x="0"
              y="0"
              width="80"
              height="50"
              rx="4"
              fill="#059669"
              opacity="0.8"
              stroke="#10B981"
              stroke-width="2"
            />
            <line
              x1="0"
              y1="12"
              x2="80"
              y2="12"
              stroke="#10B981"
              stroke-width="2"
            />
            <line
              x1="25"
              y1="12"
              x2="25"
              y2="50"
              stroke="#10B981"
              stroke-width="1"
              opacity="0.5"
            />
            <circle cx="12" cy="26" r="3" fill="#34D399" />
            <circle cx="12" cy="38" r="3" fill="#34D399" />
            <text x="8" y="9" fill="#D1FAE5" font-size="8" font-weight="bold">
              Orders
            </text>
          </g>

          {/* <!-- Security Lock Icon --> */}
          <g className="lock-icon" transform="translate(350, 100)">
            <rect
              x="0"
              y="15"
              width="24"
              height="20"
              rx="2"
              fill="#EAB308"
              opacity="0.8"
            />
            <path
              d="M 6 15 L 6 10 Q 6 5 12 5 Q 18 5 18 10 L 18 15"
              stroke="#EAB308"
              stroke-width="2"
              fill="none"
            />
            <circle cx="12" cy="25" r="3" fill="#FEF3C7" />
          </g>
        </svg>

        {/* <!-- Glowing effects --> */}
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-8 left-8 w-24 h-24 bg-green-500 rounded-full blur-2xl opacity-20"></div>
        <div className="absolute top-8 right-8 w-20 h-20 bg-yellow-500 rounded-full blur-2xl opacity-20"></div>
      </div>
    </div>
  );
}
