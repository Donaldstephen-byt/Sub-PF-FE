import { useEffect, useState } from "react";
import { BASE_URL } from "./config";
import {
  // PersonStanding,
  // HeartHandshake,
  // PenNib,
  // Icon,
  UserRound,
  Quote,
  Sparkles,
  Layers,
  BadgeCheck,
  Wrench,
  Target,
  BrainCircuit,
  CheckCircle2,
  Flame,
  Compass,
  BookOpen,
  Rocket,
  Book,
  Puzzle,
  Award,
  Globe2,
  Lightbulb,
  Crosshair,
} from "lucide-react";
import { PenNib } from "@phosphor-icons/react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaBootstrap,
  FaGem,
} from "react-icons/fa"; // Font Awesome (works well with Bulma)
// import {
//   BsBootstrap,
//   BsFillAlarmFill,
//   BsFillCheckCircleFill,
//   BsUmbrella,
// } from "react-icons/bs"; // Bootstrap icons
// import { Bootstrap } from "react-bootstrap-icons";

import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiJson,
  SiAuth0,
  SiPostman,
} from "react-icons/si";
import { Code2, Zap, ShieldCheck, Cpu, Hammer } from "lucide-react";
import { motion } from "framer-motion";
import { VscVscode } from "react-icons/vsc";
import { MdApi } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
// import { type } from "os";

type SkillsResponse = {
  title: string;
  items: string[];
  brief: string;
  titleforsubcard_1: string;
  contenforsubcard_1: string;
  titleforsubcard_2: string;
  contenforsubcard_2: string;
  titleforsubcard_3: string;
  contenforsubcard_3: string;
  titleforsubcard_4: string;
  contenforsubcard_4: string;
  titleforsubcard_5: string;
  contenforsubcard_5: string;
  titleforsubcard_6: string;
  contenforsubcard_6: string;
};

type AboutResponse = {
  title: string;
  content: string;
  manner: string;
  core_principles: {
    manner_1: string;
    manner_2: string;
    manner_3: string;
    manner_4: string;
  };
};

export function AboutCard() {
  const [About, setAbout] = useState<AboutResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_URL}/about/me`)
      .then((res) => res.json())
      .then((data: AboutResponse) => {
        setAbout(data);
        setError(null);
      })
      .catch(() => setError("Failed to load about info"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="relative bg-slate-800/60  flex flex-col gap-7 p-7 rounded-3xl shadow-xl border border-slate-700 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-[0_0_35px_-5px_rgba(99,102,241,0.4)]">
      {/* ───────────────── Loading Spinner Overlay ───────────────── */}
      {(loading || error) && (
        <div className="absolute inset-0 flex items-center rounded-3xl justify-center bg-black/40 backdrop-blur-sm z-20">
          <div className="relative flex items-center justify-center">
            {/* Outer rotating ring */}
            <div className="w-14 h-14 rounded-full border-4 border-transparent border-t-[#38bdf8] border-l-[#38bdf8] animate-about-spin"></div>

            {/* Inner ring */}
            <div className="absolute w-10 h-10 rounded-full border-4 border-transparent border-b-[#7c3aed] border-r-[#7c3aed] animate-about-spin-slow"></div>

            {/* Center glowing dot */}
            <div className="absolute w-3 h-3 bg-[#38bdf8] rounded-full shadow-[0_0_15px_#38bdf8,0_0_30px_#7c3aed]"></div>

            {/* Loading text */}
            <div className="absolute top-14 text-[10px] tracking-widest text-[#38bdf8] animate-about-pulse font-semibold">
              LOADING
            </div>
          </div>
        </div>
      )}

      {/* ───────────────── Card Content ───────────────── */}
      <div
        className={`${
          loading ? "opacity-30 blur-sm" : "opacity-100"
        } transition-all duration-500 flex flex-col gap-8`}
      >
        {/* ░░ Primary Header ░░ */}
        <div className="space-y-6">
          {/* ───────── ABOUT ME ───────── */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-400/20 flex items-center justify-center shadow-inner">
                <UserRound className="w-6 h-6 text-indigo-300" />
              </div>

              <h2 className="text-2xl font-bold bg-linear-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                {About?.title || "About Me"}
              </h2>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mt-2 flex gap-2">
              <Quote className="w-4 h-4 text-indigo-300" />
              {About?.content || "Fetching about me content..."}
            </p>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-linear-to-r from-transparent via-indigo-500/30 to-transparent"></div>

          {/* ───────── MY APPROACH ───────── */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <BrainCircuit className="w-6 h-6 text-cyan-300" />
              <h3 className="text-xl font-semibold text-cyan-300">
                {About?.manner || "My Approach"}
              </h3>
            </div>

            <ul className="space-y-2 text-sm text-slate-300 pl-1">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-300 mt-[3px]" />
                {About?.core_principles.manner_1 ||
                  "Clean, readable, and maintainable code."}
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-300 mt-[3px]" />
                {About?.core_principles.manner_2 ||
                  "Scalable architecture with thoughtful system design."}
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-300 mt-[3px]" />
                {About?.core_principles.manner_3 ||
                  "Modern, innovative problem–solving with precision."}
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-300 mt-[3px]" />
                {About?.core_principles.manner_4 ||
                  "Detail-oriented and structured engineering mindset."}
              </li>
            </ul>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-linear-to-r from-transparent via-cyan-400/30 to-transparent"></div>

          {/* ───────── WHAT DRIVES ME ───────── */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Flame className="w-6 h-6 text-orange-300" />
              <h3 className="text-xl font-semibold text-orange-300">
                What Drives Me
              </h3>
            </div>

            <ul className="space-y-2 text-sm text-slate-300 pl-1">
              <li className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-purple-300 mt-[3px]" />
                Growth — always learning, improving, and refining my craft.
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-purple-300 mt-[3px]" />
                Clarity — building simple, elegant solutions.
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-purple-300 mt-[3px]" />
                Excellence — consistent quality in UI, logic, and performance.
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-purple-300 mt-[3px]" />
                Impact — creating products people actually use and rely on.
              </li>
            </ul>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-linear-to-r from-transparent via-indigo-500/30 to-transparent"></div>

          {/* ───────── TECH INTERESTS ───────── */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Cpu className="w-6 h-6 text-blue-300" />
              <h3 className="text-xl font-semibold text-blue-300">
                Technical Interests
              </h3>
            </div>

            <ul className="space-y-2 text-sm text-slate-300 pl-1">
              <li className="flex items-start gap-2">
                <Code2 className="w-4 h-4 text-cyan-300 mt-[3px]" />
                Frontend engineering (JavaScript, React, TailwindCSS).
              </li>
              <li className="flex items-start gap-2">
                <Code2 className="w-4 h-4 text-cyan-300 mt-[3px]" />
                UI/UX design with modern animations and clean layouts.
              </li>
              <li className="flex items-start gap-2">
                <Code2 className="w-4 h-4 text-cyan-300 mt-[3px]" />
                API integration and component architecture.
              </li>
              <li className="flex items-start gap-2">
                <Code2 className="w-4 h-4 text-cyan-300 mt-[3px]" />
                Performance optimization, clean workflows & Git/GitHub.
              </li>
            </ul>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-linear-to-r from-transparent via-cyan-400/30 to-transparent"></div>

          {/* ───────── BEYOND CODE ───────── */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Compass className="w-6 h-6 text-teal-300" />
              <h3 className="text-xl font-semibold text-teal-300">
                Beyond Code
              </h3>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed flex gap-2">
              <BookOpen className="w-4 h-4 text-indigo-300 shrink-0 mt-0.5" />
              Outside of engineering, I spend time exploring system design
              concepts, reading case studies, and experimenting with UI layouts
              that challenge traditional interface patterns. I enjoy breaking
              down complex problems into simple, understandable parts.
            </p>

            <p className="text-sm text-slate-300 leading-relaxed flex gap-2">
              <PenNib className="w-4 h-4 text-indigo-300 shrink-0 mt-0.5" />I
              also love sketching concepts for interactive components, refining
              color systems, and creating micro-interactions that make
              interfaces feel alive, responsive, and intentional.
            </p>

            <p className="text-sm text-slate-300 leading-relaxed flex gap-2">
              <Globe2 className="w-4 h-4 text-indigo-300 shrink-0 mt-0.5" />
              When I’m not designing or coding, I explore tech communities,
              observe emerging trends, and study how different engineering teams
              build, scale, and maintain software in the real world.
            </p>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-linear-to-r from-transparent via-indigo-500/30 to-transparent my-4"></div>

          {/* ───────── PERSONAL PHILOSOPHY ───────── */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="w-6 h-6 text-yellow-300" />
              <h3 className="text-xl font-semibold text-yellow-300">
                Personal Philosophy
              </h3>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed flex gap-2">
              <Quote className="w-4 h-4 text-indigo-300 shrink-0 mt-0.5" />I
              believe great engineering comes from curiosity, discipline, and
              consistency. Every small improvement compounds over time. I strive
              to make each project cleaner, faster, and more intentional than
              the one before.
            </p>

            <p className="text-sm text-slate-300 leading-relaxed flex gap-2">
              <Crosshair className="w-4 h-4 text-cyan-300 shrink-0 mt-0.5" />
              My end goal is simple: build meaningful digital experiences that
              combine logic, design, and long-term thinking. I want everything I
              create to feel thoughtful, stable, and purpose-driven.
            </p>
          </div>

          {/* ───────── FINAL NOTE ───────── */}
          <div className="flex items-start gap-2 pt-2">
            <Target className="w-5 h-5 text-indigo-300" />
            <p className="text-sm text-slate-300 italic leading-relaxed">
              I’m dedicated to growth, clarity, and excellence. Every project is
              an opportunity to build something meaningful and refine my
              engineering mindset.
            </p>
          </div>
        </div>
      </div>

      {/* ───────────────── Custom Animations ───────────────── */}
      <style>{`
        @keyframes about-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes about-spin-slow {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes about-pulse {
          0%, 100% { opacity: .4; transform: scale(.95); }
          50% { opacity: 1; transform: scale(1); }
        }
        .animate-about-spin { animation: about-spin 1s linear infinite; }
        .animate-about-spin-slow { animation: about-spin-slow 3s linear infinite; }
        .animate-about-pulse { animation: about-pulse 2s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

export function SkillsCard() {
  const [skillSet, setSkillSet] = useState<SkillsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_URL}/about/skills`)
      .then((res) => res.json())
      .then((data: SkillsResponse) => {
        console.log("✅ Skills data from API:", data);
        setSkillSet(data);
        setError(null);
      })
      .catch((error) => {
        console.log("❌ Error loading skills:", error);
        setError("❌ Failed to load skills");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="relative  text-white   p-5 rounded-3xl shadow  overflow-hidden border-slate-700 bg-slate-800/60 border   transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_-5px_rgba(99,102,241,0.4)]">
      {/* Overlay spinner */}
      {(loading || error) && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-20">
          <div className="relative flex items-center justify-center">
            {/* Outer rotating ring */}
            <div className="w-14 h-14 rounded-full border-4 border-transparent border-t-[#38bdf8] border-l-[#38bdf8] animate-about-spin"></div>

            {/* Inner ring */}
            <div className="absolute w-10 h-10 rounded-full border-4 border-transparent border-b-[#7c3aed] border-r-[#7c3aed] animate-about-spin-slow"></div>

            {/* Center glowing dot */}
            <div className="absolute w-3 h-3 bg-[#38bdf8] rounded-full shadow-[0_0_15px_#38bdf8,0_0_30px_#7c3aed]"></div>

            {/* Text pulse */}
            <div className="absolute top-14 text-[10px] tracking-widest text-[#38bdf8] animate-about-pulse font-semibold">
              LOADING
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div
        className={`${
          loading ? "opacity-40 blur-sm" : "opacity-100"
        } transition-all duration-500`}
      >
        {/* HEADER */}
        <div className="flex items-center gap-3 mb-6">
          <Code2 className="w-8 h-8 text-indigo-400" />
          <h2 className="text-2xl font-bold bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            {skillSet?.title || "Skills"}
          </h2>
        </div>

        {/* Brief */}
        <div className="bg-slate-900/50 border border-indigo-500/20 rounded-2xl shadow-lg p-6 mb-6 backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)]">
          <h3 className="text-indigo-400 font-semibold text-lg mb-2">
            Overview
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            {skillSet?.brief || "Fetching skill description..."}
          </p>
        </div>

        {/* DIVIDER */}
        <div className="h-px w-full my-6 bg-linear-to-r from-transparent via-indigo-500/30 to-transparent"></div>

        <div className="flex flex-wrap gap-4 mt-6 pt-2 w-full">
          <div className="sm:flex gap-4">
            {/* FRONTEND */}
            <div className="bg-slate-900/40 border border-cyan-400/20 rounded-2xl p-5 flex flex-col items-center gap-4 shadow-lg hover:shadow-[0_0_20px_-5px_rgba(34,211,238,0.3)] transition">
              <Layers className="w-6 h-6 text-cyan-300" />
              <h4 className="font-bold text-sm text-cyan-300">
                {skillSet?.titleforsubcard_1}
              </h4>
              <p className="text-center text-sm text-slate-300 font-['Poppins']">
                {skillSet?.contenforsubcard_1}
              </p>
              <div className="pt-2">
                <TechIcons />
              </div>
            </div>

            {/* BACKEND */}
            <div className="bg-slate-900/40 border border-cyan-400/20 rounded-2xl p-5 flex flex-col items-center gap-4 shadow-lg hover:shadow-[0_0_20px_-5px_rgba(34,211,238,0.3)] transition">
              <Cpu className="w-6 h-6 text-cyan-300" />
              <h4 className="font-bold text-sm text-cyan-300">
                {skillSet?.titleforsubcard_2}
              </h4>
              <p className="text-center text-sm text-slate-300 font-['Poppins']">
                {skillSet?.contenforsubcard_2}
              </p>
              <BackendTechIcons />
            </div>
          </div>

          <div className="sm:flex gap-4">
            {/* SPECIALTY 1 */}
            <div className="bg-[#2a1a10] border border-[#7c3aed] rounded-2xl p-5 flex flex-col items-center gap-3 shadow-lg">
              <BadgeCheck className="w-5 h-5 text-[#fcd34d]" />
              <h4 className="text-sm font-bold text-[#fcd34d]">
                {skillSet?.titleforsubcard_3}
              </h4>
              <p className="text-center text-sm text-[#f3e8ff] font-['Poppins']">
                {skillSet?.contenforsubcard_3}
              </p>
            </div>

            {/* SPECIALTY 2 */}
            <div className="bg-[#2a1a10] border border-[#7c3aed] rounded-2xl p-5 flex flex-col items-center gap-3 shadow-lg">
              <BadgeCheck className="w-5 h-5 text-[#fcd34d]" />
              <h4 className="text-sm font-bold text-[#fcd34d]">
                {skillSet?.titleforsubcard_4}
              </h4>
              <p className="text-center text-sm text-[#f3e8ff] font-['Poppins']">
                {skillSet?.contenforsubcard_4}
              </p>
            </div>
          </div>

          {/* TOOLS */}
          <div className="bg-slate-900/50 border border-[#6366f1] rounded-2xl p-6 flex flex-col items-center gap-4 shadow-lg w-full">
            <Wrench className="w-5 h-5 text-indigo-300" />
            <h4 className="text-sm font-bold text-indigo-300">
              {skillSet?.titleforsubcard_5}
            </h4>
            <p className="text-center text-sm text-[#cbd5e1] font-['Poppins']">
              {skillSet?.contenforsubcard_5}
            </p>

            <ToolsIcons />
          </div>

          {/* GOALS */}
          <div className="bg-slate-900/50 border border-[#6366f1] rounded-2xl p-6 flex flex-col items-center gap-4 shadow-lg w-full">
            <Target className="w-5 h-5 text-indigo-300" />
            <h4 className="text-sm font-bold text-indigo-300">
              {skillSet?.titleforsubcard_6}
            </h4>
            <p className="text-center text-sm text-[#cbd5e1] font-['Poppins']">
              {skillSet?.contenforsubcard_6}
            </p>
          </div>

          {/* EMERGING TECHNOLOGY */}

          <div className="relative bg-slate-800/60   flex flex-col gap-4 p-4 rounded-2xl shadow-lg border border-slate-700 backdrop-blur-sm">
            {/* Header */}
            <div className="flex items-center gap-3 mb-2">
              <Rocket className="w-6 h-6 text-indigo-300" />
              <h2 className="text-lg font-bold bg-linear-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                Emerging Skills
              </h2>
            </div>

            {/* Content */}
            <ul className="text-sm text-slate-300 space-y-2">
              <li className="flex items-start gap-2">
                <Book className="w-4 h-4 text-cyan-300 mt-0.5" />
                Exploring TypeScript advanced patterns and architecture best
                practices.
              </li>
              <li className="flex items-start gap-2">
                <Puzzle className="w-4 h-4 text-indigo-300 mt-0.5" />
                Experimenting with React 18 features: concurrent rendering and
                suspense.
              </li>
              <li className="flex items-start gap-2">
                <Award className="w-4 h-4 text-yellow-300 mt-0.5" />
                Participating in hackathons and coding challenges to improve
                problem-solving speed.
              </li>
              <li className="flex items-start gap-2">
                <Rocket className="w-4 h-4 text-purple-300 mt-0.5" />
                Learning modern deployment workflows with Vercel, Netlify, and
                Docker.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TechIcons() {
  const icons = [
    { icon: <FaHtml5 color="#E34F26" />, name: "HTML5" },
    { icon: <FaCss3Alt color="#1572B6" />, name: "CSS3" },
    { icon: <SiJavascript color="#F7DF1E" />, name: "JavaScript" },
    { icon: <SiTypescript color="#3178C6" />, name: "TypeScript" },
    { icon: <FaReact color="#61DAFB" />, name: "React" },
    { icon: <SiTailwindcss color="#38BDF8" />, name: "Tailwind" },
    { icon: <FaBootstrap color="#563D7C" />, name: "Bootstrap" },
    // { icon: <BsUmbrella color="#563D7C" />, name: "Bulma" },
    { icon: <FaGem color="#7F52FF" />, name: "Bulma" },
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {icons.map((tech, index) => (
        <div
          key={index}
          className="w-11 h-11 rounded-full bg-gray-800 flex flex-col justify-center items-center text-white shadow-lg cursor-pointer
                     hover:animate-spin transition duration-500"
        >
          <span className="text-2xl">{tech.icon}</span>
        </div>
      ))}
    </div>
  );
}

export function BackendTechIcons() {
  const backendIcons = [
    { icon: <FaNodeJs color="#3C873A" />, name: "Node.js" },
    { icon: <SiExpress color="#FFFFFF" />, name: "Express.js" },
    { icon: <MdApi />, name: "REST API" },
    { icon: <SiJson color="#F5A623" />, name: "JSON" },
    { icon: <SiAuth0 color="#EB5424" />, name: "Authentication" },
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {backendIcons.map((tech, index) => (
        <div
          key={index}
          className="w-10 h-10 rounded-full bg-gray-800 flex justify-center items-center shadow-lg cursor-pointer
                     hover:animate-spin transition duration-500"
        >
          <span className="text-2xl">{tech.icon}</span>
        </div>
      ))}
    </div>
  );
}

export function ToolsIcons() {
  const tools = [
    { icon: <FaGitAlt color="#F05032" />, name: "Git" },
    { icon: <FaGithub color="#ffffff" />, name: "GitHub" },
    { icon: <VscVscode color="#007ACC" />, name: "VS Code" },
    { icon: <SiPostman color="#FF6C37" />, name: "Postman" },
    { icon: <FaNpm color="#CB0000" />, name: "npm" },
    { icon: <GiProgression color="#22c55e" />, name: "Agile" },
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {tools.map((tool, index) => (
        <div
          key={index}
          className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center shadow-lg cursor-pointer hover:rotate-6 transition duration-500"
        >
          <span className="text-xl">{tool.icon}</span>
        </div>
      ))}
    </div>
  );
}

type ExperienceResponse = {
  title: string;
  description: string;
  text: string;
  items?: string[];
};

export function ExperienceCard() {
  const [Experience, setExperience] = useState<ExperienceResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${BASE_URL}/focus`)
      .then((res) => res.json())
      .then((data: ExperienceResponse) => setExperience(data))
      .catch(() => setError("❌ Failed to load info"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative h-full bg-linear-to-br from-[#0b0e20]/70 via-[#0a0f1f]/60 to-[#0f172a]/60
        border border-slate-800/60 rounded-2xl shadow-[0_0_20px_-6px_rgba(99,102,241,0.35)]
        p-7 overflow-hidden backdrop-blur-xl hover:border-indigo-500/50 transition-all duration-300"
      >
        {/* Loader */}
        {(loading || error) && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-20">
            <div className="relative flex items-center justify-center">
              <div className="w-14 h-14 rounded-full border-4 border-transparent border-t-[#38bdf8] border-l-[#38bdf8] animate-about-spin"></div>
              <div className="absolute w-10 h-10 rounded-full border-4 border-transparent border-b-[#7c3aed] border-r-[#7c3aed] animate-about-spin-slow"></div>
              <div className="absolute w-3 h-3 bg-[#38bdf8] rounded-full shadow-[0_0_15px_#38bdf8,0_0_30px_#7c3aed]"></div>
              <div className="absolute top-14 text-[10px] tracking-widest text-[#38bdf8] animate-about-pulse font-semibold">
                LOADING
              </div>
            </div>
          </div>
        )}

        {/* Header */}
        <header className="mb-7">
          <div className="flex items-center gap-3 mb-2">
            <Cpu className="w-6 h-6 text-indigo-400" />
            <h2 className="text-xl font-semibold text-white tracking-wide">
              {Experience?.title || "Engineering Philosophy"}
            </h2>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed">
            {Experience?.text ||
              "I believe great engineering comes from clarity, discipline, and purposeful execution. I focus on writing scalable systems, crafting reliable components, and building user-centered experiences that create long-lasting impact."}
          </p>
        </header>

        {/* SUB CARDS */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {/* Clean Code */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="group bg-[#0b0f19]/80 p-4 rounded-xl border border-slate-700 
            hover:border-cyan-400/40 transition-all backdrop-blur-sm shadow-inner relative flex flex-col"
          >
            <div className="p-2 w-fit mx-auto rounded-lg bg-cyan-500/10 border border-cyan-400/20 group-hover:bg-cyan-500/20 transition">
              <Code2 className="w-4 h-4 text-cyan-400" />
            </div>

            <h3 className="text-center mt-2 text-sm font-semibold text-white tracking-wide">
              Clean Code
            </h3>

            <p className="mt-2 text-[12px] text-slate-400 leading-snug text-center px-1">
              Readable, modular, and scalable code built with long-term quality
              in mind.
            </p>

            <span className="mx-auto mt-3 px-2 py-1 text-[10px] rounded-md bg-cyan-500/10 border border-cyan-400/20 text-cyan-300">
              Quality First
            </span>
          </motion.div>

          {/* Performance */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="group bg-[#0b0f19]/80 p-4 rounded-xl border border-slate-700 
            hover:border-yellow-400/40 transition-all backdrop-blur-sm shadow-inner relative flex flex-col"
          >
            <div className="p-2 w-fit mx-auto rounded-lg bg-yellow-500/10 border border-yellow-400/20 group-hover:bg-yellow-500/20 transition">
              <Zap className="w-4 h-4 text-yellow-400" />
            </div>

            <h3 className="text-center mt-2 text-sm font-semibold text-white tracking-wide">
              High Performance
            </h3>

            <p className="mt-2 text-[12px] text-slate-400 leading-snug text-center px-1">
              Systems optimized for speed, responsiveness, and smooth execution.
            </p>

            <span className="mx-auto mt-3 px-2 py-1 text-[10px] rounded-md bg-yellow-500/10 border border-yellow-400/20 text-yellow-300">
              Fast & Efficient
            </span>
          </motion.div>

          {/* Reliability */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="group bg-[#0b0f19]/80 p-4 rounded-xl border border-slate-700 
            hover:border-emerald-400/40 transition-all backdrop-blur-sm shadow-inner relative flex flex-col"
          >
            <div className="p-2 w-fit mx-auto rounded-lg bg-emerald-500/10 border border-emerald-400/20 group-hover:bg-emerald-500/20 transition">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>

            <h3 className="text-center mt-2 text-sm font-semibold text-white tracking-wide">
              Reliable Systems
            </h3>

            <p className="mt-2 text-[12px] text-slate-400 leading-snug text-center px-1">
              Stable, predictable components engineered for long-term
              maintainability.
            </p>

            <span className="mx-auto mt-3 px-2 py-1 text-[10px] rounded-md bg-emerald-500/10 border border-emerald-400/20 text-emerald-300">
              Consistency
            </span>
          </motion.div>
          <div className="sm:col-span-2 lg:col-span-3 h-px w-full my-2 bg-linear-to-r from-transparent via-indigo-500/30 to-transparent"></div>

          {/* second row cards */}

          <div className="sm:flex sm:min-w-290 gap-5 ">
            {/* Builder */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="group sm:w-[50%] sm:col-span-2 bg-[#0b0f19]/80 p-5 rounded-xl border border-slate-700 
            hover:border-orange-400/40 backdrop-blur-md shadow-inner relative flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-400/20 group-hover:bg-orange-500/20 transition">
                  <Hammer className="w-5 h-5 text-orange-400" />
                </div>

                <div>
                  <h3 className="font-semibold text-white text-[15px]">
                    Hands-On Builder
                  </h3>
                  <p className="text-[12px] text-slate-500 group-hover:text-slate-400 transition">
                    Practical. Efficient. Detail-driven.
                  </p>
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition mb-3">
                From idea → design → implementation → refinement. I deliver
                solutions with precision, ownership, and a builder’s mindset.
              </p>

              <div className="flex gap-3 text-[11px]">
                <span className="px-2 py-1 rounded-md bg-orange-500/10 border border-orange-400/20 text-orange-300">
                  Ownership
                </span>
                <span className="px-2 py-1 rounded-md bg-indigo-500/10 border border-indigo-400/20 text-indigo-300">
                  Innovation
                </span>
                <span className="px-2 py-1 rounded-md bg-slate-700/30 border border-slate-600/50 text-slate-300">
                  Craftsmanship
                </span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.04 }}
              className="group mt-6 sm:mt-0 sm:w-[50%] sm:col-span-2 bg-[#0b0f19]/80 p-5 rounded-xl border border-slate-700 
  hover:border-blue-400/40 backdrop-blur-md shadow-inner relative flex flex-col"
            >
              {/* ICON + HEADER */}
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-400/20 group-hover:bg-blue-500/20 transition">
                  <Compass className="w-5 h-5 text-blue-400" />
                </div>

                <div>
                  <h3 className="font-semibold text-white text-[15px]">
                    Strategic Thinker
                  </h3>
                  <p className="text-[12px] text-slate-500 group-hover:text-slate-400 transition">
                    Clarity. Direction. Smart execution.
                  </p>
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition mb-3">
                I approach every project with intentionality — analyzing the
                challenge, understanding constraints, and shaping solutions that
                balance innovation, scalability, and practical outcomes.
              </p>

              {/* TAGS */}
              <div className="flex gap-3 text-[11px]">
                <span className="px-2 py-1 rounded-md bg-blue-500/10 border border-blue-400/20 text-blue-300">
                  Strategy
                </span>
                <span className="px-2 py-1 rounded-md bg-emerald-500/10 border border-emerald-400/20 text-emerald-300">
                  Insight
                </span>
                <span className="px-2 py-1 rounded-md bg-slate-700/30 border border-slate-600/50 text-slate-300">
                  Direction
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bottom Glow */}
        <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-linear-to-r from-indigo-500 via-cyan-400 to-transparent opacity-40"></div>
      </motion.div>
    </div>
  );
}
