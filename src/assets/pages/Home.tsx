import { Sidebar, LefIndexCard } from "../../components/HomeComponents";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import Footer from "../../components/Footer";

const techStacks = [
  { icon: <FaHtml5 className="text-orange-500 text-4xl" />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-blue-500 text-4xl" />, name: "CSS3" },
  {
    icon: <SiTailwindcss className="text-cyan-400 text-4xl" />,
    name: "Tailwind",
  },
  { icon: <FaReact className="text-sky-400 text-4xl" />, name: "React" },
  {
    icon: <SiTypescript className="text-blue-400 text-4xl" />,
    name: "TypeScript",
  },
  { icon: <FaNodeJs className="text-green-500 text-4xl" />, name: "Node.js" },
  { icon: <FaPython className="text-yellow-400 text-4xl" />, name: "Python" },
  { icon: <FaGitAlt className="text-red-500 text-4xl" />, name: "Git" },
];

function Home() {
  return (
    <div className="flex mb-4 flex-wrap w-full justify-center gap-4 items-center mt-4 min-h-screen text-slate-100">
      <div
        className="py-4 relative flex flex-col md:flex-row
justify-start md:justify-between
gap-4 md:gap-2 md:p-6 gap-2 
  bg-slate-900/70 border border-slate-700/80 rounded-3xl shadow-lg 
  p-6 backdrop-blur-xl overflow-hidden group 
  hover:border-indigo-500/50 hover:shadow-[0_0_35px_-5px_rgba(99,102,241,0.4)]
  transition-all w-full max-w-302"
      >
        {/* Sidebar */}
        <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 via-slate-800/40 to-transparent opacity-60 blur-3xl -z-10"></div>
        <Sidebar />

        {/* Personal Info Section */}
        <div className="personal-info flex-1 grid grid-cols gap-6 p-4 sm:pl-4 sm:pr-0">
          {/* Profile / About Card...*/}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{
              y: -6,
              borderColor: "rgba(99,102,241,0.6)",
              boxShadow: "0 0 30px -5px rgba(99,102,241,0.5)",
            }}
            className="relative rounded-3xl sm:rounded-none sm:rounded-e-3xl h-full w-full  mt-1 border border-slate-500/70 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-[0_0_25px_-5px_rgba(99,102,241,0.4)]"
          >
            {/* Content 1 */}
            <div className="relative z-10 text-center px-8 py-10 font-semibold text-lg">
              <h2 className="text-2xl font-bold mb-3 text-indigo-400">
                👋 Hey, I'm Donald
              </h2>
              <p className="text-slate-300 leading-relaxed">
                A Frontend Developer passionate about crafting elegant UI/UX
                experiences with clean code and scalable architecture. I love
                blending creativity with technology.
              </p>
              <div className="mt-6">
                <p className="text-sm text-slate-400">
                  Specialized in React, TypeScript, and modern web design
                </p>
              </div>
            </div>

            {/* Background Gears */}
            <motion.div
              className="absolute left-10 bottom-8 opacity-40"
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            >
              <svg width="80" height="80" viewBox="0 0 100 100">
                <path
                  d="M50,20 L55,35 L70,30 L65,45 L80,50 L65,55 L70,70 L55,65 L50,80 L45,65 L30,70 L35,55 L20,50 L35,45 L30,30 L45,35 Z"
                  fill="#6B7280"
                  stroke="#4B5563"
                  strokeWidth="2"
                />
                <circle cx="50" cy="50" r="18" fill="#1F2937" />
              </svg>
            </motion.div>

            <motion.div
              className="absolute right-24 top-10 opacity-40"
              animate={{ rotate: -360 }}
              transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
            >
              <svg width="100" height="100" viewBox="0 0 100 100">
                <path
                  d="M50,10 L58,28 L76,20 L70,38 L90,42 L75,55 L90,62 L70,66 L76,84 L58,76 L50,94 L42,76 L24,84 L30,66 L10,62 L25,55 L10,42 L30,38 L24,20 L42,28 Z"
                  fill="#6B7280"
                  stroke="#4B5563"
                  strokeWidth="2"
                />
                <circle cx="50" cy="50" r="22" fill="#1F2937" />
              </svg>
            </motion.div>

            {/* Extra subtle rotating gear (depth layer) */}
            <motion.div
              className="absolute -right-10 bottom-10 opacity-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
              <svg width="120" height="120" viewBox="0 0 100 100">
                <path
                  d="M50,15 L56,32 L73,25 L67,42 L85,45 L72,58 L85,65 L67,68 L73,85 L56,78 L50,95 L44,78 L27,85 L33,68 L15,65 L28,58 L15,45 L33,42 L27,25 L44,32 Z"
                  fill="#6B7280"
                  stroke="#4B5563"
                  strokeWidth="2"
                />
                <circle cx="50" cy="50" r="20" fill="#1F2937" />
              </svg>
            </motion.div>
          </motion.div>

          {/* Tech Stack Card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            whileHover={{
              y: -6,
              borderColor: "rgba(99,102,241,0.6)",
              boxShadow: "0 0 30px -5px rgba(99,102,241,0.5)",
            }}
            className="relative rounded-3xl sm:rounded-none sm:rounded-e-3xl h-full w-full mr-3 mt-1 border border-slate-500/70 bg-slate-800/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-[0_0_25px_-5px_rgba(99,102,241,0.4)] flex flex-col overflow-hidden"
          >
            <h3 className="text-xl font-bold text-indigo-400 mb-3 z-10 pl-4 pt-4">
              ⚡ Tech Stack
            </h3>

            <div className="grid grid-cols-5 gap-3 mt-2 px-4 z-10">
              {techStacks.map((stack, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{
                    scale: 1.1,
                    rotate: 1.5,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  className="group flex flex-col items-center justify-center p-2.5 bg-linear-to-br from-slate-900/60 to-slate-800/40 rounded-xl border border-slate-700/80 hover:border-indigo-400/60 cursor-pointer transition-all hover:shadow-[0_0_15px_-3px_rgba(99,102,241,0.5)] hover:scale-105 backdrop-blur-md relative overflow-hidden"
                >
                  {/* Soft gradient glow behind icon */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-linear-to-br from-indigo-500/20 via-purple-500/10 to-transparent blur-2xl" />

                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      rotateY: 360,
                      transition: { duration: 0.9, ease: "easeInOut" },
                    }}
                    className="text-3xl text-transparent bg-clip-text bg-linear-to-br from-indigo-400 via-blue-400 to-purple-400 drop-shadow-[0_0_6px_rgba(99,102,241,0.5)]"
                  >
                    {stack.icon}
                  </motion.div>

                  {/* Label */}
                  <p className="text-xs mt-2 text-slate-300 font-medium tracking-wide group-hover:text-indigo-300 transition-all duration-300 text-center">
                    {stack.name}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Subtle rotating gear behind icons */}
            <motion.div
              className="absolute left-5 bottom-6 opacity-15"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <svg width="100" height="100" viewBox="0 0 100 100">
                <path
                  d="M50,15 L56,32 L73,25 L67,42 L85,45 L72,58 L85,65 L67,68 L73,85 L56,78 L50,95 L44,78 L27,85 L33,68 L15,65 L28,58 L15,45 L33,42 L27,25 L44,32 Z"
                  fill="#6B7280"
                  stroke="#4B5563"
                  strokeWidth="2"
                />
                <circle cx="50" cy="50" r="20" fill="#1F2937" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <LefIndexCard />
      <Footer className="md:hidden" />
    </div>
  );
}

export default Home;
