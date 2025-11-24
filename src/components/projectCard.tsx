import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export function MainprojectCard() {
  return (
    <div className="bg-gray-900 text-white rounded-b-2xl   hover:border-indigo-400 transition-all duration-300 p-6 lg:grid lg:grid-cols-2 gap-6">
      {/* Left Column: GitHub Call-to-Action */}
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
          <FaGithub className="text-indigo-400" /> My GitHub
        </h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Visit my GitHub to explore <strong>portfolio websites</strong>,{" "}
          <strong>UI components</strong>, <strong>admin dashboards</strong>, and{" "}
          <strong>fullstack apps</strong>. Stay updated with my latest work and
          contributions.
        </p>
        <a
          // href=""
          // target="_blank"
          // rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 transition-colors text-white px-4 py-2 rounded-lg font-medium"
        >
          View GitHub <FaExternalLinkAlt />
        </a>
      </div>

      {/* Right Column: GitHub Stats / Highlights */}
      <div className="bg-gray-800 p-6 rounded-xl border border-gray-700/50 shadow-inner flex flex-col gap-4">
        <h3 className="font-semibold text-xl mb-2 flex items-center gap-2 text-indigo-400">
          GitHub Highlights
        </h3>
        <ul className="text-gray-300 text-sm space-y-2">
          <li className="flex items-center gap-2">⭐ Starred repositories</li>
          <li className="flex items-center gap-2">🛠️ Frequent contributions</li>
          <li className="flex items-center gap-2">
            📂 Organized projects & portfolios
          </li>
          <li className="flex items-center gap-2">🚀 Active in open source</li>
        </ul>
      </div>
    </div>
  );
}

import { Cpu, Zap, Database, Sparkles } from "lucide-react";

export function IlustrationAbout() {
  return (
    <div className="bg-[#0a0d14]/90  rounded-t-2xl grid grid-cols-3 border border-slate-800 overflow-hidden relative">
      {/* -------------------------------------------------------------
        LEFT COLUMN — PERFORMANCE ENGINEERING
      -------------------------------------------------------------- */}
      <div className="relative bg-black p-6 flex flex-col justify-center border-r border-slate-800">
        {/* Section Label */}
        <div className="absolute top-4 left-4 flex items-center gap-2 text-xs text-slate-500">
          <Zap className="w-3 h-3 text-yellow-400" />
          <span>Performance</span>
        </div>

        {/* Content */}
        <div className="relative z-20 text-center px-4">
          <h3 className="text-lg font-semibold text-gray-200 flex flex-col items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            Performance-Driven Frontend Development
          </h3>

          <p className="text-sm text-slate-400 mt-2 leading-relaxed">
            Optimizing load times, minimizing re-renders, and creating smooth,
            GPU-accelerated UI experiences.
          </p>

          {/* Mini Tags */}
          <div className="mt-4 flex justify-center gap-2 text-[10px]">
            <span className="px-2 py-1 rounded-md bg-yellow-500/10 text-yellow-300 border border-yellow-500/20">
              Speed
            </span>
            <span className="px-2 py-1 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
              Stability
            </span>
          </div>
        </div>

        {/* Gears (unchanged) */}
        <div className="absolute gear-1 left-10 bottom-6 opacity-80">
          {/* SVG */}
          <svg width="80" height="80" viewBox="0 0 100 100">
            {" "}
            <path
              d="M50,20 L55,35 L70,30 L65,45 L80,50 L65,55 L70,70 L55,65 L50,80 L45,65 L30,70 L35,55 L20,50 L35,45 L30,30 L45,35 Z"
              fill="#6B7280"
              stroke="#4B5563"
              strokeWidth="2"
            />{" "}
            <circle cx="50" cy="50" r="18" fill="#1F2937" />{" "}
          </svg>
        </div>
        <div className="absolute gear-2 left-24 top-12 opacity-70">
          {/* SVG */}
          <svg width="90" height="90" viewBox="0 0 100 100">
            {" "}
            <path
              d="M50,15 L56,32 L73,25 L67,42 L85,45 L72,58 L85,65 L67,68 L73,85 L56,78 L50,95 L44,78 L27,85 L33,68 L15,65 L28,58 L15,45 L33,42 L27,25 L44,32 Z"
              fill="#6B7280"
              stroke="#4B5563"
              strokeWidth="2"
            />{" "}
            <circle cx="50" cy="50" r="20" fill="#1F2937" />{" "}
          </svg>
        </div>
        <div className="absolute gear-3 right-24 bottom-9 opacity-70">
          {/* SVG */}
          <svg width="70" height="70" viewBox="0 0 100 100">
            {" "}
            <path
              d="M50,22 L54,36 L68,32 L64,46 L78,50 L64,54 L68,68 L54,64 L50,78 L46,64 L32,68 L36,54 L22,50 L36,46 L32,32 L46,36 Z"
              fill="#6B7280"
              stroke="#4B5563"
              strokeWidth="2"
            />{" "}
            <circle cx="50" cy="50" r="16" fill="#1F2937" />{" "}
          </svg>
        </div>
        <div className="absolute gear-4 -right-10 top-5 opacity-60">
          {/* SVG */}
          <svg width="140" height="140" viewBox="0 0 100 100">
            {" "}
            <path
              d="M50,10 L58,28 L76,20 L70,38 L90,42 L75,55 L90,62 L70,66 L76,84 L58,76 L50,94 L42,76 L24,84 L30,66 L10,62 L25,55 L10,42 L30,38 L24,20 L42,28 Z"
              fill="#6B7280"
              stroke="#4B5563"
              strokeWidth="2"
            />{" "}
            <circle cx="50" cy="50" r="22" fill="#1F2937" />{" "}
          </svg>
        </div>
      </div>

      {/* -------------------------------------------------------------
        MIDDLE COLUMN — NEURAL NETWORK / LEARNING
      -------------------------------------------------------------- */}
      <div className="relative bg-gradient-to-br from-black via-purple-950 to-blue-950 p-10 border-r border-slate-800">
        {/* Label */}
        <div className="absolute top-4 left-4 flex items-center gap-2 text-xs text-slate-400">
          <Cpu className="w-3 h-3 text-purple-400" />
          <span>Neural Systems</span>
        </div>

        {/* Header */}
        <div className="relative text-center z-20">
          <h3 className="text-gray-200 font-semibold flex flex-col items-center gap-2">
            <Cpu className="w-5 h-5 text-purple-400" />
            Exploring Neural Networks
          </h3>
          <p className="text-sm text-gray-400 mt-2 leading-relaxed">
            Running tiny inference models to understand data movement, weights,
            and decision flows.
          </p>
        </div>

        {/* SVG Grid Background (same) */}
        <div className="absolute inset-0 opacity-10">
          {/* SVG */}
          <svg width="100%" height="100%">
            {" "}
            <defs>
              {" "}
              <pattern
                id="grid"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                {" "}
                <path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="cyan"
                  strokeWidth="0.5"
                />{" "}
              </pattern>{" "}
            </defs>{" "}
            <rect width="100%" height="100%" fill="url(#grid)" />{" "}
          </svg>
        </div>

        {/* Neural Network SVG (same) */}
        <div className="absolute inset-0 brain-container">
          {/* SVG */}
          <svg width="100%" height="100%" viewBox="0 0 400 280">
            {" "}
            {/* All your nodes + lines remain unchanged */}{" "}
            {/* (I removed “naclassName” syntax errors) */}{" "}
            {/* --- Connections --- */}{" "}
            <line
              x1="80"
              y1="140"
              x2="160"
              y2="80"
              stroke="#8B5CF6"
              strokeWidth="2"
              opacity="0.6"
            />{" "}
            <line
              x1="80"
              y1="140"
              x2="160"
              y2="140"
              stroke="#06B6D4"
              strokeWidth="2"
              opacity="0.6"
            />{" "}
            <line
              x1="80"
              y1="140"
              x2="160"
              y2="200"
              stroke="#8B5CF6"
              strokeWidth="2"
              opacity="0.6"
            />{" "}
            <line
              x1="160"
              y1="80"
              x2="240"
              y2="100"
              stroke="#06B6D4"
              strokeWidth="2"
              opacity="0.6"
            />{" "}
            <line
              x1="160"
              y1="140"
              x2="240"
              y2="100"
              stroke="#8B5CF6"
              strokeWidth="2"
              opacity="0.6"
            />{" "}
            <line
              x1="160"
              y1="140"
              x2="240"
              y2="180"
              stroke="#06B6D4"
              strokeWidth="2"
              opacity="0.6"
            />{" "}
            <line
              x1="160"
              y1="200"
              x2="240"
              y2="180"
              stroke="#8B5CF6"
              strokeWidth="2"
              opacity="0.6"
            />{" "}
            <line
              x1="240"
              y1="100"
              x2="320"
              y2="140"
              stroke="#06B6D4"
              strokeWidth="2"
              opacity="0.6"
            />{" "}
            <line
              x1="240"
              y1="180"
              x2="320"
              y2="140"
              stroke="#8B5CF6"
              strokeWidth="2"
              opacity="0.6"
            />{" "}
            {/* --- Nodes --- */}{" "}
            <circle cx="80" cy="140" r="12" fill="#8B5CF6" opacity="0.8" />{" "}
            <circle
              cx="80"
              cy="140"
              r="20"
              fill="none"
              stroke="#8B5CF6"
              opacity="0.3"
            />{" "}
            <circle cx="160" cy="80" r="10" fill="#06B6D4" opacity="0.8" />{" "}
            <circle
              cx="160"
              cy="80"
              r="18"
              fill="none"
              stroke="#06B6D4"
              opacity="0.3"
            />{" "}
            <circle cx="160" cy="140" r="10" fill="#8B5CF6" opacity="0.8" />{" "}
            <circle
              cx="160"
              cy="140"
              r="18"
              fill="none"
              stroke="#8B5CF6"
              opacity="0.3"
            />{" "}
            <circle cx="160" cy="200" r="10" fill="#06B6D4" opacity="0.8" />{" "}
            <circle
              cx="160"
              cy="200"
              r="18"
              fill="none"
              stroke="#06B6D4"
              opacity="0.3"
            />{" "}
            <circle cx="240" cy="100" r="10" fill="#8B5CF6" opacity="0.8" />{" "}
            <circle
              cx="240"
              cy="100"
              r="18"
              fill="none"
              stroke="#8B5CF6"
              opacity="0.3"
            />{" "}
            <circle cx="240" cy="180" r="10" fill="#06B6D4" opacity="0.8" />{" "}
            <circle
              cx="240"
              cy="180"
              r="18"
              fill="none"
              stroke="#06B6D4"
              opacity="0.3"
            />{" "}
            <circle cx="320" cy="140" r="12" fill="#06B6D4" opacity="0.8" />{" "}
            <circle
              cx="320"
              cy="140"
              r="20"
              fill="none"
              stroke="#06B6D4"
              opacity="0.3"
            />{" "}
          </svg>
        </div>

        {/* Soft glows */}
        <div className="absolute top-6 right-6 w-14 h-14 bg-purple-500 rounded-full blur-xl opacity-40"></div>
        <div className="absolute bottom-6 left-6 w-16 h-16 bg-cyan-500 rounded-full blur-xl opacity-40"></div>

        {/* Small Info Card */}
        <div className="absolute bottom-4 right-4 bg-white/5 border border-white/10 backdrop-blur-lg rounded-md px-3 py-1 text-[10px] text-slate-300 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-cyan-300" />
          Pattern Recognition
        </div>
      </div>

      {/* -------------------------------------------------------------
        RIGHT COLUMN — DATABASE / BACKEND
      -------------------------------------------------------------- */}
      <div className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 p-10">
        {/* Label */}
        <div className="absolute top-4 left-4 flex items-center gap-2 text-xs text-slate-400">
          <Database className="w-3 h-3 text-blue-400" />
          <span>Data Engine</span>
        </div>

        {/* Header */}
        <div className="text-center z-20 relative">
          <h3 className="text-gray-200 font-semibold flex flex-col items-center gap-2">
            <Database className="w-5 h-5 text-blue-400" />
            Database & Schema Design
          </h3>
          <p className="text-sm text-gray-400 mt-2 leading-relaxed">
            Relational structures, schema planning, API → DB pipelines, and
            secure data handling.
          </p>
        </div>

        {/* Circuit board background */}
        <div className="absolute inset-0 opacity-10">
          {/* SVG */}
          <svg width="100%" height="100%">
            {" "}
            <defs>
              {" "}
              <pattern
                id="circuit"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                {" "}
                <circle cx="20" cy="20" r="2" fill="#3B82F6" />{" "}
                <line
                  x1="20"
                  y1="0"
                  x2="20"
                  y2="40"
                  stroke="#3B82F6"
                  strokeWidth="1"
                />{" "}
                <line
                  x1="0"
                  y1="20"
                  x2="40"
                  y2="20"
                  stroke="#3B82F6"
                  strokeWidth="1"
                />{" "}
              </pattern>{" "}
            </defs>{" "}
            <rect width="100%" height="100%" fill="url(#circuit)" />{" "}
          </svg>
        </div>

        {/* Database Diagram (same) */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* SVG */}
          <svg width="100%" height="100%" viewBox="0 0 400 280">
            {" "}
            {/* data lines */}{" "}
            <path
              d="M 200 50 L 200 90"
              stroke="#3B82F6"
              strokeWidth="2"
              fill="none"
            />{" "}
            <path
              d="M 200 160 L 100 200"
              stroke="#10B981"
              strokeWidth="2"
              fill="none"
            />{" "}
            <path
              d="M 200 160 L 300 200"
              stroke="#10B981"
              strokeWidth="2"
              fill="none"
            />{" "}
            {/* API box */}{" "}
            <g transform="translate(150, 20)">
              {" "}
              <rect
                x="0"
                y="0"
                width="100"
                height="30"
                rx="5"
                fill="#1E40AF"
                opacity="0.85"
              />{" "}
              <text
                x="55"
                y="19"
                fill="#93C5FD"
                fontSize="12"
                fontWeight="bold"
              >
                {" "}
                API{" "}
              </text>{" "}
            </g>{" "}
            {/* Cylinders */}{" "}
            <g transform="translate(150, 100)">
              {" "}
              {/* 3 stacked cylinders */}{" "}
              <g>
                {" "}
                <ellipse
                  cx="50"
                  cy="0"
                  rx="40"
                  ry="10"
                  fill="#3B82F6"
                  opacity="0.9"
                />{" "}
                <rect x="10" y="0" width="80" height="20" fill="#2563EB" />{" "}
                <ellipse cx="50" cy="20" rx="40" ry="10" fill="#1E40AF" />{" "}
              </g>{" "}
              <g transform="translate(0, 25)">
                {" "}
                <ellipse
                  cx="50"
                  cy="0"
                  rx="40"
                  ry="10"
                  fill="#3B82F6"
                  opacity="0.9"
                />{" "}
                <rect x="10" y="0" width="80" height="20" fill="#2563EB" />{" "}
                <ellipse cx="50" cy="20" rx="40" ry="10" fill="#1E40AF" />{" "}
              </g>{" "}
              <g transform="translate(0, 50)">
                {" "}
                <ellipse
                  cx="50"
                  cy="0"
                  rx="40"
                  ry="10"
                  fill="#3B82F6"
                  opacity="0.9"
                />{" "}
                <rect x="10" y="0" width="80" height="20" fill="#2563EB" />{" "}
                <ellipse cx="50" cy="20" rx="40" ry="10" fill="#1E40AF" />{" "}
              </g>{" "}
            </g>{" "}
            {/* Tables */}{" "}
            <g transform="translate(40, 200)">
              {" "}
              <rect
                width="80"
                height="50"
                rx="5"
                fill="#059669"
                opacity="0.9"
                stroke="#10B981"
                strokeWidth="2"
              />{" "}
              <line
                x1="0"
                y1="12"
                x2="80"
                y2="12"
                stroke="#10B981"
                strokeWidth="2"
              />{" "}
              <text x="8" y="9" fill="#D1FAE5" fontSize="8" fontWeight="bold">
                {" "}
                Users{" "}
              </text>{" "}
            </g>{" "}
            <g transform="translate(280, 200)">
              {" "}
              <rect
                width="80"
                height="50"
                rx="5"
                fill="#059669"
                opacity="0.9"
                stroke="#10B981"
                strokeWidth="2"
              />{" "}
              <line
                x1="0"
                y1="12"
                x2="80"
                y2="12"
                stroke="#10B981"
                strokeWidth="2"
              />{" "}
              <text x="8" y="9" fill="#D1FAE5" fontSize="8" fontWeight="bold">
                {" "}
                Orders{" "}
              </text>{" "}
            </g>{" "}
            {/* Lock */}{" "}
            <g transform="translate(350, 100)">
              {" "}
              <rect
                x="0"
                y="15"
                width="24"
                height="20"
                rx="2"
                fill="#EAB308"
                opacity="0.8"
              />{" "}
              <path
                d="M 6 15 L 6 10 Q 6 5 12 5 Q 18 5 18 10 L 18 15"
                stroke="#EAB308"
                strokeWidth="2"
                fill="none"
              />{" "}
              <circle cx="12" cy="25" r="3" fill="#FEF3C7" />{" "}
            </g>{" "}
          </svg>
        </div>

        {/* Soft glows */}
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-green-500 rounded-full blur-xl opacity-20"></div>

        {/* Mini Card */}
        <div className="absolute top-4 right-4 bg-blue-500/10 text-blue-300 text-[10px] px-2 py-1 rounded border border-blue-500/20">
          ACID Safe
        </div>
      </div>
    </div>
  );
}
