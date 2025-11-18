import { useEffect, useState } from "react";
import { BASE_URL } from "./config";
import { PersonStanding } from "lucide-react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaNpm,
} from "react-icons/fa";
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
    <div className="relative text-white p-5 rounded-lg shadow lg:col-start-3 lg:col-span-2 lg:row-span-4 overflow-hidden border-slate-700 bg-slate-800/60 border   transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_-5px_rgba(99,102,241,0.4)]">
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
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <PersonStanding className="w-8 h-8 text-indigo-400" />
          <h2 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">
            {skillSet?.title || "Loading..."}
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

        <div className="flex flex-wrap gap-4 mt-6 pt-2 w-full">
          <div className="sm:flex gap-4">
            <div className="bg-cyan-700/20 text-white flex flex-col gap-4 items-center justify-center p-4 h-63 rounded-2xl">
              <div className="text-sm font-bold">
                {skillSet?.titleforsubcard_1}
              </div>
              <div className="text-center text-sm font-['poppins']">
                {skillSet?.contenforsubcard_1}
              </div>
              <div className="flex justify-center items-center w-full pl-3">
                <TechIcons />
              </div>
            </div>

            <div className="bg-cyan-700/20 text-white flex flex-col gap-4 items-center justify-center p-5 rounded-2xl h-63">
              <div className="text-sm font-bold">
                {skillSet?.titleforsubcard_2}
              </div>
              <div className="text-center text-sm font-['poppins']">
                {skillSet?.contenforsubcard_2}
              </div>
              <BackendTechIcons />
            </div>
          </div>

          <div className="sm:flex gap-4">
            <div className="bg-[#42210b] border border-[#7c3aed] shadow-lg text-white flex flex-col gap-4 items-center justify-center p-4 rounded-2xl">
              <div className="text-sm text-[#fcd34d] font-bold">
                {skillSet?.titleforsubcard_3}
              </div>
              <div className="text-center text-[#f3e8ff] text-sm font-['poppins']">
                {skillSet?.contenforsubcard_3}
              </div>
            </div>

            <div className="bg-[#42210b] border border-[#7c3aed] shadow-lg flex flex-col gap-4 items-center justify-center p-4 rounded-2xl">
              <div className="text-sm text-[#fcd34d] font-bold">
                {skillSet?.titleforsubcard_4}
              </div>
              <div className="text-center text-sm font-['poppins']">
                {skillSet?.contenforsubcard_4}
              </div>
            </div>
          </div>

          <div className="bg-[#1e293b] border border-[#6366f1] shadow-lg flex flex-col gap-3 justify-center p-4 rounded-2xl w-full">
            <div className="flex flex-col items-center text-center">
              <div className="text-sm text-[#818cf8] font-bold">
                {skillSet?.titleforsubcard_5}
              </div>
              <div className="text-[#cbd5e1] text-sm font-['poppins']">
                {skillSet?.contenforsubcard_5}
              </div>
            </div>
            <div className="w-full flex justify-center">
              <ToolsIcons />
            </div>
          </div>

          <div className="bg-[#1e293b] border border-[#6366f1] shadow-lg flex items-center justify-center p-4 rounded-2xl w-full">
            <div className="text-sm text-[#818cf8] font-bold text-center">
              {skillSet?.titleforsubcard_6}
            </div>
            <div className="text-center text-[#cbd5e1] text-sm font-['poppins']">
              {skillSet?.contenforsubcard_6}
            </div>
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

type AboutResponse = {
  title: string;
  content: string;
  manner: string;
  manner_1: string;
  manner_2: string;
  manner_3: string;
  manner_4: string;
};

import { UserRound, Quote, HeartHandshake, Sparkles } from "lucide-react";

export function AboutCard() {
  const [about, setAbout] = useState<AboutResponse | null>(null);
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
    <div className="relative bg-slate-800/60 min-w-[20rem] min-h-[32rem] flex flex-col gap-7 p-7 rounded-3xl shadow-xl border border-slate-700 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-[0_0_35px_-5px_rgba(99,102,241,0.4)] lg:col-span-2 lg:row-span-2">
      {/* ───────────────── Loading Spinner Overlay ───────────────── */}
      {(loading || error) && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-20">
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
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-400/20 flex items-center justify-center shadow-inner">
              <UserRound className="w-6 h-6 text-indigo-300" />
            </div>

            <h2 className="text-2xl font-bold bg-linear-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              {about?.title || "Loading..."}
            </h2>
          </div>

          {/* Subheading */}
          <p className="text-sm text-slate-300 leading-relaxed mt-2 flex gap-2">
            <Quote className="w-4 h-4 text-indigo-300" />
            {about?.content || "Fetching about details..."}
          </p>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-linear-to-r from-transparent via-indigo-500/30 to-transparent"></div>

        {/* ░░ Values / Manner Section ░░ */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <HeartHandshake className="w-6 h-6 text-cyan-300" />
            <h3 className="text-xl font-semibold text-cyan-300">
              {about?.manner || "Core Values"}
            </h3>
          </div>

          <ul className="space-y-2 text-sm text-slate-300 pl-1">
            <li className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-indigo-300 mt-[3px]" />
              {about?.manner_1}
            </li>
            <li className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-indigo-300 mt-[3px]" />
              {about?.manner_2}
            </li>
            {/* <li className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-indigo-300 mt-[3px]" />
              {about?.manner_3}
            </li> */}
            <li className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-indigo-300 mt-[3px]" />
              {about?.manner_4}
            </li>
          </ul>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-linear-to-r from-transparent via-cyan-400/30 to-transparent"></div>

        {/* ░░ Highlights Section ░░ */}
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-indigo-300" />
          <p className="text-sm text-slate-300 italic">
            Dedicated to growth, clarity, and excellence in every project.
          </p>
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
      .then((data: ExperienceResponse) => {
        setExperience(data);
      })
      .catch(() => setError("❌ Failed to load info"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="relative lg:col-span-2 lg:row-start-3 lg:row-span-3">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative bg-linear-to-br from-[#0a0b1e]/70 h-full via-slate-950/90 to-[#0f172a]/50 border border-slate-800/70 rounded-2xl shadow-[0_0_25px_-5px_rgba(99,102,241,0.35)] p-6 overflow-hidden backdrop-blur-xl hover:border-indigo-500/50 transition-all duration-300"
      >
        {/* 🌀 Unique Spinner Overlay */}
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

        {/* Header */}
        <header className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <Cpu className="w-6 h-6 text-indigo-400" />
            <h2 className="text-lg sm:text-xl font-semibold text-white tracking-wide">
              {Experience?.title || "Philosophy & Focus"}
            </h2>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            {Experience?.text ||
              "I am committed to creating software that is efficient, maintainable, and adaptable. I prioritize learning best practices, exploring modern technologies, and ensuring thoughtfully designed solutions for both users and developers."}
          </p>
        </header>

        {/* Sub Cards */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="group sm:w-[8.5rem] sm:h-[14rem] bg-linear-to-br from-slate-900/80 to-slate-950/60
  p-3 rounded-xl border border-slate-700 hover:border-cyan-400/40 shadow-inner 
  transition-all backdrop-blur-sm relative overflow-hidden flex flex-col"
          >
            {/* Icon Box */}
            <div
              className="p-2 w-fit rounded-lg bg-cyan-500/10 border border-cyan-400/20 
    group-hover:bg-indigo-500/10 transition mx-auto mt-1"
            >
              <Code2 className="w-4 h-4 text-cyan-400 group-hover:text-indigo-400 transition" />
            </div>

            {/* Title */}
            <h3 className="text-center mt-2 text-[11px] font-semibold text-white tracking-wide">
              Clean Code
            </h3>

            {/* Divider */}
            <div className="mx-auto mt-1 w-6 h-[2px] bg-cyan-400/30 rounded-full"></div>

            {/* Main Text */}
            <p className="mt-3 text-[10px] text-slate-400 leading-snug line-clamp-6 text-center px-1">
              Writing maintainable, readable and scalable code with clarity,
              structure and best practices at the core of every component.
            </p>

            {/* Bottom Tag */}
            <div
              className="mt-auto mb-1 mx-auto px-2 py-1 text-[9px] rounded-md 
    bg-cyan-500/10 border border-cyan-400/20 text-cyan-300"
            >
              Quality First
            </div>

            {/* Glow */}
            <div
              className="absolute -right-3 -bottom-3 w-7 h-7 bg-cyan-500/10 rounded-full blur-xl opacity-70 
    group-hover:opacity-100 transition"
            ></div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="group w-[8.5rem] h-[14rem] bg-linear-to-br from-slate-900/80 to-slate-950/60
  p-3 rounded-xl border border-slate-700 hover:border-yellow-400/40 shadow-inner 
  transition-all backdrop-blur-sm relative overflow-hidden flex flex-col"
          >
            {/* Icon */}
            <div
              className="p-2 w-fit rounded-lg bg-yellow-500/10 border border-yellow-400/20
    group-hover:bg-indigo-500/10 transition mx-auto mt-1"
            >
              <Zap className="w-4 h-4 text-yellow-400 group-hover:text-indigo-400 transition" />
            </div>

            {/* Title */}
            <h3 className="text-center mt-2 text-[11px] font-semibold text-white tracking-wide">
              Efficient & Fast
            </h3>

            {/* Divider */}
            <div className="mx-auto mt-1 w-6 h-[2px] bg-yellow-400/30 rounded-full"></div>

            {/* Text */}
            <p className="mt-3 text-[10px] text-slate-400 leading-snug line-clamp-6 text-center px-1">
              Building performant features that balance speed, optimization, and
              clean architectural structure.
            </p>

            {/* Footer Tag */}
            <div
              className="mt-auto mb-1 mx-auto px-2 py-1 text-[9px] rounded-md 
    bg-yellow-500/10 border border-yellow-400/20 text-yellow-300"
            >
              Speed First
            </div>

            {/* Glow */}
            <div
              className="absolute -right-3 -bottom-3 w-7 h-7 bg-yellow-500/10 rounded-full blur-xl opacity-70 
    group-hover:opacity-100 transition"
            ></div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="group w-[8.5rem] h-[14rem] bg-gradient-to-br from-slate-900/80 to-slate-950/60
  p-3 rounded-xl border border-slate-700 hover:border-emerald-400/40 shadow-inner 
  transition-all backdrop-blur-sm relative overflow-hidden flex flex-col"
          >
            {/* Icon */}
            <div
              className="p-2 w-fit rounded-lg bg-emerald-500/10 border border-emerald-400/20
    group-hover:bg-indigo-500/10 transition mx-auto mt-1"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400 group-hover:text-indigo-400 transition" />
            </div>

            {/* Title */}
            <h3 className="text-center mt-2 text-[11px] font-semibold text-white tracking-wide">
              Testable & Reliable
            </h3>

            {/* Divider */}
            <div className="mx-auto mt-1 w-6 h-[2px] bg-emerald-400/30 rounded-full"></div>

            {/* Text */}
            <p className="mt-3 text-[10px] text-slate-400 leading-snug line-clamp-6 text-center px-1">
              Crafting stable components with solid testing, predictable
              behavior, and long-term maintainability.
            </p>

            {/* Footer Tag */}
            <div
              className="mt-auto mb-1 mx-auto px-2 py-1 text-[9px] rounded-md 
    bg-emerald-500/10 border border-emerald-400/20 text-emerald-300"
            >
              Stable Build
            </div>

            {/* Glow */}
            <div
              className="absolute -right-3 -bottom-3 w-7 h-7 bg-emerald-500/10 rounded-full blur-xl opacity-70 
    group-hover:opacity-100 transition"
            ></div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.04 }}
            className="group sm:mt-4 sm:w-[27rem] sm:h-[11.5rem] bg-gradient-to-br from-slate-900/80 to-slate-950/60 
    p-5 rounded-xl border border-slate-700 hover:border-orange-400/40 shadow-inner 
    backdrop-blur-md transition-all sm:col-span-2 relative overflow-hidden"
          >
            {/* Small glowing accent */}
            <div
              className="absolute right-2 top-2 w-3 h-3 rounded-full 
      bg-orange-400/40 blur-[3px] group-hover:bg-indigo-400/60 transition"
            ></div>

            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-400/20 group-hover:bg-indigo-500/10 transition">
                <Hammer className="w-5 h-5 text-orange-400 group-hover:text-indigo-400 transition" />
              </div>

              <div>
                <h3 className="font-semibold text-white text-[14px] tracking-wide">
                  Hands-On Builder
                </h3>
                <p className="text-[11px] text-slate-500 group-hover:text-slate-400 transition">
                  Practical. Efficient. Detail–driven.
                </p>
              </div>
            </div>

            {/* Body */}
            <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition mb-3">
              From concept to deployment — I take ownership of features, turning
              ideas into smooth, functional, and polished experiences.
            </p>

            {/* Extra highlights */}
            <div className="flex gap-3 text-[11px]">
              <span
                className="px-2 py-1 rounded-md bg-orange-500/10 border border-orange-400/20 
      text-orange-300 group-hover:bg-orange-500/20 transition"
              >
                Ownership
              </span>

              <span
                className="px-2 py-1 rounded-md bg-indigo-500/10 border border-indigo-400/20 
      text-indigo-300 group-hover:bg-indigo-500/20 transition"
              >
                Innovation
              </span>

              <span
                className="px-2 py-1 rounded-md bg-slate-700/30 border border-slate-600/50 
      text-slate-300 group-hover:text-white transition"
              >
                Quality
              </span>
            </div>
          </motion.div>
        </section>

        {/* Subtle bottom glow */}
        <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-linear-to-r from-indigo-500 via-cyan-400 to-transparent opacity-40"></div>
      </motion.div>
    </div>
  );
}
