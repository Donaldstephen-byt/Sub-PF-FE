import { useEffect, useState } from "react";
import * as React from "react";
import {
  Github,
  Linkedin,
  // Twitter,
  Instagram,
  Facebook,
  Mail,
  MapPin,
  Phone,
  // Clock,
  Cpu,
  Code,
  Heart,
  Terminal,
  GitBranch,
  Globe,
  Server,
  Box,
  ShieldCheck, Layers, Database, Zap,
  Activity,
} from "lucide-react";
import { BASE_URL } from "./config";
import { motion } from "framer-motion";
import { XIcon } from "./TweeterSvg";
import { FaWhatsapp } from "react-icons/fa";
import { SecurityCard } from './Networking'
import { CreativityBarSD, } from './CreativityBar'
import { SystemStatusCard } from './SystemStatus'

type Profile = {
  fullName: string;
  email: string;
  avatar: string;
  role: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  twitter: string;
  instagram: string;
  facebook: string;
};

interface Stats {
  experience: string;
  projects: string;
  status: string;
  optimization: string
  current_focus: string;
}

interface Stack {
  frontend: string[];
  backend: string[];
  security: string[]
}

type SkillProfile = {
  title: string;
  description: string;
  full_name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  hobbies: string[];
  dislikes: string[];
  tagline: string;
  stats: Stats;
  stack: Stack
};



/*--------reusable section cards---------- */
/*---------------------------------------- */
/*---------------------------------------- */

function SectionCard({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        borderColor: "rgba(99,102,241,0.4)",
        boxShadow: "0 0 25px -8px rgba(99,102,241,0.4)",
      }}
      className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/70 shadow-sm backdrop-blur-md transition-all overflow-hidden"
    >
      <h4 className="font-semibold text-indigo-300 mb-2">{title}</h4>
      {children}
    </motion.div>
  );
}

function InfoTag({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      className="flex items-center gap-2 text-slate-200 text-sm px-3 py-2 rounded-lg border border-slate-700/70 bg-slate-900/40 hover:border-indigo-400/40 transition-all"
    >
      <span className="text-indigo-400">{icon}</span> {label}
    </motion.div>
  );
}

/* ------------------------ Subcomponents for profile card----------------------------- */
/* -------------------------------- --------------------------------------------------- */
/* -------------------------------- --------------------------------------------------- */
function SidebarInfo({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        borderColor: "rgba(99,102,241,0.5)",
        boxShadow: "0 0 12px -3px rgba(99,102,241,0.4)",
      }}
      className="flex items-center gap-2 bg-slate-800/50 border border-slate-700/70 rounded-xl px-3 py-2 text-sm text-slate-300 transition-all"
    >
      <span className="text-indigo-400">{icon}</span>
      <span className="truncate">{label}</span>
    </motion.div>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        scale: 1.15,
        y: -2,
        color: "#a78bfa",
      }}
      className="flex justify-center items-center p-2 bg-slate-800/60 border border-slate-700/70 rounded-xl text-slate-400 hover:text-indigo-400 transition-all"
    >
      {icon}
    </motion.a>
  );
}

const CyberBackground = () => (
  <div className="absolute inset-0 overflow-hidden rounded-3xl -z-10">
    {/* Static Grid
    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(99,102,241,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.2)_1px,transparent_1px)] bg-[size:30px_30px]"></div> */}

    {/* Moving Scanner Beam */}
    <motion.div
      animate={{ top: ["-10%", "110%"] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      className="absolute w-full h-[20%] bg-gradient-to-b from-transparent via-indigo-500/10 to-transparent blur-sm"
    />
  </div>
);



const TechRow = ({ title, icon, items, color }: { title: string, icon: React.ReactNode, items: string[], color: React.ReactNode }) => (
  <div>
    <div className={`flex items-center gap-2 mb-3 ${color}`}>
      {icon}
      <h4 className="font-bold text-slate-200 text-sm">{title}</h4>
    </div>
    <div className="flex flex-wrap gap-2">
      {items?.map((item: string) => (
        <span key={item} className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-700/30 rounded-lg border border-white/5 hover:bg-slate-700/60 hover:border-white/20 transition-all cursor-default">
          {item}
        </span>
      ))}
    </div>
  </div>);

const StatItem = ({
  label,
  value,
  icon,
  highlight,
}: {
  label: React.ReactNode;
  value?: string;
  icon: React.ReactElement<{ size?: number }>;
  highlight?: boolean;
}) => (
  <div className={`p-3 rounded-xl border transition-colors ${highlight ? 'bg-indigo-500/10 border-indigo-500/30' : 'bg-slate-800/30 border-white/5 hover:border-white/10'}`}>
    <div className="flex items-center gap-2 mb-1 text-slate-400">
      {React.cloneElement(icon, { size: 14 })}
      <span className="text-[10px] uppercase tracking-wider">{label}</span>
    </div>
    <div className={`text-base sm:text-lg font-semibold ${highlight ? 'text-indigo-300' : 'text-slate-200'}`}>
      {value || "--"}
    </div>
  </div>
);

/* ---------------profile card----------------- */
/* -------------------------------------------- */
/* -------------------------------------------- */
/* -------------------------------------------- */

export function Sidebar({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch(`${BASE_URL}/profile`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch profile");
        return res.json();
      })
      .then((data: Profile) => {
        if (!cancelled) setProfile(data);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <motion.section
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative flex flex-col items-center gap-6 bg-slate-900/70 border border-slate-700/80 rounded-3xl p-6 w-full md:max-w-[280px] backdrop-blur-xl shadow-lg hover:border-indigo-500/50 hover:shadow-[0_0_35px_-5px_rgba(99,102,241,0.4)] transition-all overflow-hidden ${className}`}
    >
      {children}
      {/* Loader */}
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

      {/* Background glow layer */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 via-purple-500/10 to-transparent blur-3xl opacity-70 -z-10"></div>
      {/* Avatar Section */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative flex flex-col items-center text-center"
      >
        <div className="relative">
          <img
            src={profile?.avatar}
            alt={profile?.fullName}
            className="w-28 h-28 rounded-2xl object-cover border border-indigo-400/40 shadow-[0_0_20px_-5px_rgba(99,102,241,0.6)]"
          />
          <motion.span
            className="absolute bottom-2 right-2 w-3.5 h-3.5 bg-green-500 border-2 border-slate-900 rounded-full shadow-md"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
        <h2 className="mt-3 text-lg font-semibold text-indigo-300">
          {profile?.fullName}
        </h2>
        <p className="text-sm text-slate-400">{profile?.role}</p>
      </motion.div>
      {/* Contact Info */}
      <div className="flex flex-col gap-3 w-full">
        <SidebarInfo icon={<Mail size={16} />} label={profile?.email || ""} />
        <SidebarInfo icon={<Phone size={16} />} label={profile?.phone || ""} />
        <SidebarInfo
          icon={<MapPin size={16} />}
          label={profile?.location || ""}
        />
      </div>
      {/* ---------Divider Line ---------*/}
      {/* ------------------------------ */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-indigo-500/40 to-transparent my-4"></div>
      {/* ------Social Links -----------*/}
      {/* ----------------------------- */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-3 gap-3 w-full"
      >
        <SocialIcon href={profile?.github || ""} icon={<Github size={18} />} />
        <SocialIcon
          href={profile?.linkedin || ""}
          icon={<Linkedin size={18} />}
        />
        <SocialIcon href={profile?.twitter || ""} icon={<XIcon size={18} />} />
        <SocialIcon
          href={profile?.instagram || ""}
          icon={<Instagram size={18} />}
        />
        <SocialIcon
          href={profile?.facebook || ""}
          icon={<Facebook size={18} />}
        />
        <SocialIcon
          href={`https://wa.me/${profile?.phone || ""}`}
          icon={<FaWhatsapp size={18} />}
        />
      </motion.nav>
      {/* ---Subtle rotating gear (depth element)--- */}
      {/* ------------------------------------------ */}
      <motion.div
        className="absolute -left-8 bottom-10 -z-50 opacity-[0.08]"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <svg width="130" height="130" viewBox="0 0 100 100">
          <path
            d="M50,15 L56,32 L73,25 L67,42 L85,45 L72,58 L85,65 L67,68 L73,85 L56,78 L50,95 L44,78 L27,85 L33,68 L15,65 L28,58 L15,45 L33,42 L27,25 L44,32 Z"
            fill="#6B7280"
            stroke="#4B5563"
            strokeWidth="2"
          />
          <circle cx="50" cy="50" r="20" fill="#1F2937" />
        </svg>
      </motion.div>
    </motion.section>
  );
}



/* --------------- second home card --------------- */
/* ------------------------------------------------ */
/* ------------------------------------------------ */

export function LefIndexCard() {
  const [skills, setSkills] = useState<SkillProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const devTools = [
    { name: "Linux (Kali)", icon: <Terminal size={14} />, color: "text-green-400" },
    { name: "Git/GitHub", icon: <GitBranch size={14} />, color: "text-orange-400" },
    { name: "Docker", icon: <Box size={14} />, color: "text-blue-400" },
    { name: "Postman", icon: <Globe size={14} />, color: "text-orange-500" },
    { name: "VS Code", icon: <Code size={14} />, color: "text-blue-300" },
    { name: "Vercel", icon: <Server size={14} />, color: "text-white" },
  ];

  const architecture = [
    { name: "RESTful APIs", icon: <Globe size={14} /> },
    { name: "JWT Auth", icon: <ShieldCheck size={14} /> },
    { name: "Microservices", icon: <Layers size={14} /> },
    { name: "PostgreSQL", icon: <Database size={14} /> },
  ];


  useEffect(() => {
    const controller = new AbortController();

    fetch(`${BASE_URL}/skills`, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch skills");
        return res.json();
      })
      .then((data: SkillProfile) => setSkills(data))
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);
  return (
    <motion.main
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="relative sm:min-w-302 flex flex-col gap-6 bg-slate-900/70 border border-slate-700/80 rounded-3xl shadow-lg p-6 backdrop-blur-xl overflow-hidden group hover:border-indigo-500/50 hover:shadow-[0_0_35px_-5px_rgba(99,102,241,0.4)] transition-all"
    >
      <CyberBackground />
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

      <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 via-slate-800/40 to-transparent opacity-60 blur-3xl -z-10"></div>

      {/* Header Section */}
      {/* <div className="flex items-center justify-between mb-2">
        <h3 className="text-2xl font-bold bg-linear-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
          {skills?.title || "Engineer Profile"}
        </h3>
        <Clock className="text-indigo-400 animate-pulse" size={22} />
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        {skills?.description || "Building scalable digital solutions..."}
      </p> */}

      {/* --- HEADER --- */}
      <div className="flex justify-between">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 relative z-10">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <Terminal className="text-indigo-400" size={28} />
              {skills?.title || "System Architecture"}
            </h3>
            <p className="text-slate-400 mt-2 text-sm max-w-lg leading-relaxed">
              {skills?.tagline}
            </p>
          </div>
        </div>

        <div className="relative mt-1">
          <motion.div
            className="absolute inset-0 rounded-xl blur-xl opacity-50"
            animate={{ opacity: [0.25, 0.6, 0.25] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background:
                "radial-gradient(circle at center, rgba(99,102,241,0.65), transparent 70%)",
            }}
          />
          <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 shadow-lg backdrop-blur">
            <motion.div
              className="absolute left-1 right-1 h-[2px] rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(99,102,241,0.9), transparent)",
              }}
              animate={{ top: [6, 36, 6] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute inset-0 rounded-xl border border-indigo-400/30"
              animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
            />
            <Terminal className="h-5 w-5 text-indigo-300" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 relative z-10">
        <div className="md:col-span-4 p-5 rounded-2xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-md">
          <div className="flex items-center gap-2 mb-4 text-xs font-bold text-indigo-300 uppercase tracking-widest">
            <Activity size={14} /> Performance Metrics
          </div>



          <div className="grid grid-cols-2 gap-4">
            <StatItem label="Experience" value={skills?.stats?.experience} icon={<Layers />} highlight />
            <StatItem label="Projects" value={skills?.stats?.projects} icon={<Code />} />
            <StatItem label="Code Quality" value={skills?.stats?.optimization} icon={<Zap />} highlight />
            <StatItem label="Core Focus" value={skills?.stats?.current_focus} icon={<Cpu />} />
          </div>

          <div className="mt-6">
            <CreativityBarSD />
            {/* <NeuralBar label="CREATIVE_SYNAPSE" /> */}
          </div>
        </div>

        {/* 2. SECURITY MODULE*/}
        <SecurityCard />

        <div className="md:col-span-3 p-5 rounded-2xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-md">
          <TechRow title="Frontend Core" icon={<Cpu size={18} />} items={skills?.stack?.frontend ?? []} color="text-blue-400" />
        </div>
        <div className="md:col-span-3 p-5 rounded-2xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-md">
          <TechRow title="Backend Systems" icon={<Server size={18} />} items={skills?.stack?.backend ?? []} color="text-emerald-400" />
        </div>
      </div>

      <SectionCard title="⚡ Core Focus">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <InfoTag icon={<Cpu />} label="Frontend Architecture" />
          <InfoTag icon={<Code />} label="Clean Code" />
          <InfoTag icon={<Heart />} label="UI/UX Aesthetics" />
          <InfoTag icon={<Cpu />} label="Performance Optimization" />
          <InfoTag icon={<Code />} label="Reusable Components" />
        </div>
      </SectionCard>




      {/* ---------- Dev Arsenal & Architecture ---------- */}

      <div className="grid md:grid-cols-2 gap-4">
        <SectionCard title="🛠️ Dev Arsenal">
          <div className="grid grid-cols-2 gap-2">
            {devTools.map((tool, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:bg-slate-700/50 transition-colors group cursor-default"
              >
                <span className={`${tool.color} group-hover:scale-110 transition-transform`}>
                  {tool.icon}
                </span>
                <span className="text-sm text-slate-300">{tool.name}</span>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* 2. Architecture & Security (Replaces Dislikes) */}
        <SectionCard title="🏗️ Architecture">
          <div className="flex flex-wrap gap-2 content-start">
            {architecture.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3 py-1.5 bg-indigo-900/20 border border-indigo-500/20 rounded-full text-sm text-indigo-200 hover:border-indigo-400/50 hover:bg-indigo-900/30 transition-all cursor-default"
              >
                <span className="opacity-70">{item.icon}</span>
                {item.name}
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <SystemStatusCard />

      {/* ---------- Live Clock Card ---------- */}
      <SectionCard title="⏱ Live Time">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center items-center py-3"
        >
          <p data-testid="test-user-time" className="text-xl font-mono text-indigo-300">
            {new Date().toLocaleTimeString()}
          </p>
        </motion.div>
      </SectionCard>
    </motion.main>
  );
}


