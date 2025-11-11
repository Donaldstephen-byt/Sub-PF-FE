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
import { VscVscode } from "react-icons/vsc";
import { MdApi } from "react-icons/md"; // For REST APIs
// import { DiMysql } from "react-icons/di";
import { GiProgression } from "react-icons/gi";
// import { type } from "os";

// ✅ Correct type for skills instead of profile
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

export function AboutCard() {
  const [about, setAbout] = useState<AboutResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_URL}/about/me`)
      .then((res) => res.json())
      .then((data: AboutResponse) => {
        console.log("✅ About data from API:", data);
        setAbout(data);
        setError(null);
      })
      .catch((err) => {
        console.log("❌ Error loading about:", err);
        setError("❌ Failed to load about info");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-slate-800/60  relative  flex flex-col gap-5 p-5 rounded-lg shadow lg:col-span-2 lg:row-span-2 border border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-[0_0_25px_-5px_rgba(99,102,241,0.4)]">
      {/*  Unique Spinner Overlay */}
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

      {/* 🌙 Card Content */}
      <div
        className={`transition-all duration-500 flex flex-col gap-8 ${
          loading ? "opacity-40 blur-sm" : "opacity-100"
        }`}
      >
        <div>
          <div className="text-2xl flex items-center gap-4 font-bold text-indigo-300 group-hover:text-indigo-400 transition mb-2">
            <h2>{about?.title || "Loading..."}</h2>
            <div className="flex">
              <PersonStanding className="w-8 h-6 text-indigo-300" />
              <PersonStanding className="w-8 h-6 text-indigo-300" />
              <PersonStanding className="w-8 h-6 text-indigo-300" />
            </div>
          </div>

          <p className="text-sm text-[#cbd5e1] leading-relaxed">
            {about?.content || "Fetching about details..."}
          </p>
        </div>

        <div>
          <h2 className="text-2xl text-[#38bdf8] font-bold mb-2">
            {about?.manner || "Loading..."}
          </h2>
          <ul className="list-disc pl-5 text-sm text-[#cbd5e1] space-y-1">
            <li>{about?.manner_1}</li>
            <li>{about?.manner_2}</li>
            <li>{about?.manner_3}</li>
            <li>{about?.manner_4}</li>
          </ul>
        </div>
      </div>

      {/* 🎨 Scoped Styles (won’t affect other components) */}
      <style>{`
        @keyframes about-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes about-spin-slow {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes about-pulse {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(0.95);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-about-spin {
          animation: about-spin 1s linear infinite;
        }

        .animate-about-spin-slow {
          animation: about-spin-slow 3s linear infinite;
        }

        .animate-about-pulse {
          animation: about-pulse 2s ease-in-out infinite;
        }
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
        console.log("✅ Experience data from API:", data);
        setExperience(data);
      })
      .catch((err) => {
        console.log("❌ Error loading", err);
        setError("❌ Failed to load  info");
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className="bg-linear-to-br relative from-black via-purple-950 text-white p-5 rounded-xl shadow lg:col-span-2 lg:row-start-3 lg:row-span-3 border border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-[0_0_25px_-5px_rgba(99,102,241,0.4)]">
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
      <div>
        <h2 className="text-xl font-semibold mb-2"> {Experience?.title} </h2>
        <p className="text-sm">{Experience?.text}</p>
      </div>
      <div className="w-full flex gap-4 flex-wrap mt-4 p-3">
        <div className="rounded-2xl p-2 bg-gray-900">
          <h3 className="font-semibold mb-4">Clean & Maintainable</h3>
          <p>
            {" "}
            Code Writing code that is easy to read, understand, and extend.
            Prioritizing clarity over cleverness to ensure long-term
            maintainability.
          </p>
        </div>
        <div className="rounded-2xl p-2 bg-gray-900">
          <h3 className="font-semibold mb-4">Efficient & Performant</h3>
          <p className="tex-xs">
            {" "}
            Writing code that runs optimally, making the best use of resources
            while avoiding premature optimization. Balancing speed and
            readability to deliver quality software that scales well.
          </p>
        </div>
        <div className="rounded-2xl p-2 bg-gray-900">
          <h3 className="font-semibold mb-4">Testable & Reliable </h3>
          <p className="tex-xs">
            {" "}
            Crafting code that can be easily tested to catch issues early,
            ensuring consistent behavior and reducing bugs. Emphasizing
            automated tests and thorough validation for dependable software.
          </p>
        </div>
      </div>
    </div>
  );
}
