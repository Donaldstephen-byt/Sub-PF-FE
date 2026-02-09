import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Activity, Cpu,
    Zap
} from "lucide-react";

// --- 1. BACKGROUND: Live Typing Code (Brighter & Clearer) ---
const LiveCodeBackground = () => {
    const [text, setText] = useState("");
    const fullCode = `
// EXECUTING CORE LOGIC...
import { Optimization } from '@neural/engine';

async function runProcess() {
  const latency = await checkPing();
  if (latency < 20ms) {
     return "STABLE";
  }
  return optimize(latency);
}
// Allocate Memory... [OK]
// Fetching Dependencies... [OK]
  `;

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullCode.substring(0, i));
            i++;
            if (i > fullCode.length) i = 0;
        }, 40);
        return () => clearInterval(interval);
    }, [fullCode]);

    return (
        <div className="absolute inset-0 overflow-hidden bg-[#050816] z-0">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 blur-[50px] rounded-full"></div>
            <pre className="p-4 text-[10px] font-mono text-green-400/50 leading-relaxed pointer-events-none">
                {text}
                <span className="w-2 h-4 bg-green-400 inline-block animate-pulse align-middle ml-1"></span>
            </pre>
        </div>
    );
};

// --- 2. HEADER: Live Task Cycler (Replaces Personal Info) ---
const ProcessMonitor = () => {
    const [task, setTask] = useState(0);
    const tasks = [
        "Compiling React Modules...",
        "Optimizing Database Queries...",
        "Verifying Security Tokens...",
        "Synchronizing State...",
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setTask((prev) => (prev + 1) % tasks.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [tasks.length]);

    return (
        <div className="h-6 overflow-hidden relative">
            <AnimatePresence mode="wait">
                <motion.div
                    key={task}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    className="text-xs text-indigo-200 font-mono flex items-center gap-2"
                >
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                    {tasks[task]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

// --- 3. METRIC BARS ---
const MetricBar = ({ label, color }: { label: string, color: string }) => (
    <div className="space-y-1">
        <div className="flex justify-between text-[10px] text-slate-400 font-mono">
            <span>{label}</span>
            <span className="text-white">ACTIVE</span>
        </div>
        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <motion.div
                className={`h-full ${color}`}
                initial={{ width: "90%" }}
                animate={{ width: ["92%", "98%", "95%", "99%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
        </div>
    </div>
);

// --- MAIN CARD ---
export const SystemStatusCard = () => {
    return (
        <div className="md:col-span-2 relative h-full min-h-[240px] rounded-2xl overflow-hidden border border-indigo-500/20 shadow-[0_0_30px_rgba(99,102,241,0.15)] group bg-[#050816]">


            <LiveCodeBackground />
            <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-[0.5px] z-10"></div>

            {/* Content Layer */}
            <div className="relative z-20 p-6 h-full flex flex-col justify-between">

                {/* HEADER SECTION */}
                <div>
                    {/* Top Label: "Active Runtime" */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 px-2 py-1 rounded bg-white/5 border border-white/10 backdrop-blur-md">
                            <Activity size={12} className="text-green-400 animate-pulse" />
                            <span className="text-[10px] font-bold text-white tracking-widest uppercase">
                                Live Runtime
                            </span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-500">PID: 8492</span>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-slate-800 to-black border border-indigo-500/30 shadow-lg shadow-indigo-500/10">
                            <Cpu size={24} className="text-indigo-400 animate-[pulse_3s_ease-in-out_infinite]" />
                        </div>

                        {/* NEW TEXT: Process Monitor */}
                        <div className="flex-1">
                            <h3 className="text-lg font-bold text-white tracking-wide mb-1">
                                Core Process
                            </h3>
                            <ProcessMonitor /> {/* Cycles through "Compiling..." etc. */}
                        </div>
                    </div>
                </div>

                {/* BOTTOM METRICS */}
                <div className="grid grid-cols-2 gap-4 mt-6 bg-black/60 p-4 rounded-xl border border-white/5 backdrop-blur-md">
                    <MetricBar label="MEMORY_ALLOC" color="bg-gradient-to-r from-blue-500 to-cyan-400" />
                    <MetricBar label="ENCRYPTION" color="bg-gradient-to-r from-emerald-500 to-green-400" />
                    <MetricBar label="CPU_LOAD" color="bg-gradient-to-r from-purple-500 to-indigo-400" />

                    {/* Animated CPU Activity Graph */}
                    <div className="flex items-center justify-between gap-1 px-2 border-l border-white/10 pl-3">
                        <Zap size={16} className="text-yellow-400" />
                        <div className="flex gap-0.5 items-end h-4 w-full justify-end">
                            {[1, 2, 3, 4, 5, 6].map(i => (
                                <motion.div
                                    key={i}
                                    animate={{ height: ["20%", "80%", "30%"] }}
                                    transition={{ duration: 0.4, repeat: Infinity, delay: i * 0.1, repeatType: "reverse" }}
                                    className="w-1 bg-indigo-500 rounded-sm"
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};