import { useEffect, useState } from "react";
import { BASE_URL } from "./config";
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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${BASE_URL}/about/skills`)
      .then((res) => res.json())
      .then((data: SkillsResponse) => {
        console.log("✅ Skills data from API:", data);
        setSkillSet(data);
      })
      .catch((error) => {
        console.log("❌ Error loading skills:", error);
        setError("❌ Failed to load skills");
      });
  }, []);
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="bg-gradient-custom text-white p-5 rounded-lg shadow lg:col-start-3 lg:col-span-2 lg:row-span-4 grid grid-cols-rows">
      {/* Skills Section */}
      <div>
        <h2 className="text-xl  font-semibold mb-2">{skillSet?.title}</h2>
        <ul className="list-disc ml-2 text-sm space-y-1 rounded-2xl border shadow-2xl p-2 bg-cyan-700/20">
          {skillSet?.brief}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2 mt-4 pt-2 w-full">
        <div className="sm:flex gap-4">
          <div className=" bg-cyan-700/20 text-white flex flex-col gap-4 items-center justify-center p-4 h-63 rounded-2xl">
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
          <div className="bg-purple-700/20 text-white flex flex-col gap-4 items-center justify-center p-5 rounded-2xl h-63">
            <div className="text-sm font-bold">
              {skillSet?.titleforsubcard_2}
            </div>
            <div className="text-center text-sm font-['poppins']">
              {skillSet?.contenforsubcard_2}
            </div>
            <div>
              <BackendTechIcons />
            </div>
          </div>
        </div>
        <div className="sm:flex gap-4">
          <div className="bg-[#42210b] border border-[#7c3aed] shadow-lg text-white flex flex-col gap-4 items-center justify-center p-4 rounded-2xl lg:row-start-2 lg:col-span-3 lg:row-span-1">
            <div className="text-sm text-[#fcd34d] font-bold">
              {skillSet?.titleforsubcard_3}
            </div>
            <div className="text-center text-[#f3e8ff] text-sm font-['poppins']">
              {skillSet?.contenforsubcard_3}
            </div>
          </div>
          <div className="bg-[#42210b] border border-[#7c3aed] shadow-lg flex flex-col gap-4  items-center justify-center p-4 rounded-2xl lg:row-start-2 lg:col-span-3 lg:row-span-1">
            <div className="text-sm text-[#fcd34d] font-bold">
              {skillSet?.titleforsubcard_4}
            </div>
            <div className="text-center text-sm font-['poppins']">
              {skillSet?.contenforsubcard_4}
            </div>
          </div>
        </div>
        <div className="bg-[#1e293b] border border-[#6366f1] shadow-lg text-whiteitems-center gap-3 flex flex-col justify-center p-4 rounded-2xl w-full">
          <div className="flex w-full">
            <div className="text-sm text-[#818cf8] font-bold text-center">
              {skillSet?.titleforsubcard_5}
            </div>
            <div className="text-center text-[#cbd5e1] text-sm font-['poppins']">
              {skillSet?.contenforsubcard_5}
            </div>
          </div>
          <div className="w-full flex justify-center">
            <ToolsIcons />
          </div>
        </div>
        <div className="bg-[#1e293b] border border-[#6366f1] shadow-lg  text-white flex items-center justify-center p-4 rounded-2xl w-full ">
          <div className="text-sm text-[#818cf8] font-bold text-center">
            {skillSet?.titleforsubcard_6}
          </div>
          <div className="text-center text-[#cbd5e1] text-sm font-['poppins']">
            {skillSet?.contenforsubcard_6}
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
  const [About, setAbout] = useState<AboutResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${BASE_URL}/about/me`)
      .then((res) => res.json())
      .then((data: AboutResponse) => {
        console.log("✅ About data from API:", data);
        setAbout(data);
      })
      .catch((error) => {
        console.log("❌ Error loading skills:", error);
        setError("❌ Failed to load skills");
      });
  }, []);
  if (error) return <p className="text-red-500">{error}</p>;
  return (
    <div className="bg-gray-900/90 border border-[#334155]  flex flex-col gap-5 p-5 rounded-lg shadow lg:col-span-2 lg:row-span-2">
      <div>
        <h2 className="text-2xl font-bold text-[#38bdf8] mb-2">
          {" "}
          {About?.title}{" "}
        </h2>
        <p className="text-sm text-[#cbd5e1] leading-relaxed">
          {About?.content}
        </p>
      </div>
      <div>
        <h2 className="text-2xl text-[#38bdf8] font-bold mb-2">
          {" "}
          {About?.manner}{" "}
        </h2>
        <ul className="list list-disc pl-5">
          <li> {About?.manner_1} </li>
          <li> {About?.manner_2} </li>
          <li> {About?.manner_3} </li>
          <li> {About?.manner_4} </li>
        </ul>
      </div>
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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${BASE_URL}/focus`)
      .then((res) => res.json())
      .then((data: ExperienceResponse) => {
        console.log("✅ Experience data from API:", data);
        setExperience(data);
      })
      .catch((error) => {
        console.log("❌ Error loading skills:", error);
        setError("❌ Failed to load skills");
      });
  }, []);
  if (error) return <p className="text-red-500">{error}</p>;
  return (
    <div className="bg-gray-800 text-white p-5 border border-[#334155] rounded-xl shadow lg:col-span-2 lg:row-start-3 lg:row-span-3">
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
          <h3 className="font-semibold mb-4">Clean & Maintainable</h3>
          <p>
            {" "}
            Code Writing code that is easy to read, understand, and extend.
            Prioritizing clarity over cleverness to ensure long-term
            maintainability.
          </p>
        </div>
        <div className="rounded-2xl p-2 bg-gray-900">
          <h3 className="font-semibold mb-4">Clean & Maintainable</h3>
          <p>
            {" "}
            Code Writing code that is easy to read, understand, and extend.
            Prioritizing clarity over cleverness to ensure long-term
            maintainability.
          </p>
        </div>
      </div>
    </div>
  );
}
