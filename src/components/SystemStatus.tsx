import  { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Activity, Cpu, Zap, ShieldCheck, Globe, Lock, 
} from "lucide-react";

const SystemToast = () => {
    const [msg, setMsg] = useState(0);
    const messages = [
        { text: "React Build: Stable", icon: <Globe size={10} />, color: "text-blue-400" },
        { text: "FastAPI: Online", icon: <Zap size={10} />, color: "text-yellow-400" },
        { text: "NetSec Scan: Clean", icon: <ShieldCheck size={10} />, color: "text-emerald-400" },
        { text: "WAF: Active", icon: <Lock size={10} />, color: "text-purple-400" },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setMsg((prev) => (prev + 1) % messages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [messages.length]);

    return (
        <div className="min-w-[140px] h-6 relative flex justify-end">
            <AnimatePresence mode="wait">
                <motion.div
                    key={msg}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-700/50 backdrop-blur-md"
                >
                    <span className={messages[msg].color}>{messages[msg].icon}</span>
                    <span className="text-[9px] font-mono text-slate-300 font-medium whitespace-nowrap">
                        {messages[msg].text}
                    </span>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

// --- 2. HEADER: Process Monitor ---
const ProcessMonitor = () => {
    const [task, setTask] = useState(0);
    const tasks = [
        "Hydrating Vue Components...",
        "Optimizing React Virtual DOM...",
        "FastAPI Middleware Check...",
        "Penetration Testing [OWASP]...",
        "Handshake [SYN, ACK]...",
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setTask((prev) => (prev + 1) % tasks.length);
        }, 2000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="h-6 overflow-hidden relative w-full">
            <AnimatePresence mode="wait">
                <motion.div
                    key={task}
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -15, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-xs text-indigo-200 font-mono flex items-center gap-2"
                >
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                    {tasks[task]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

// --- 3. BACKGROUND: Scrolling Code (Upward Motion) ---
const LiveCodeBackground = () => {
    const [text, setText] = useState("");

    // Longer code snippet to support scrolling effect
    const fullCode = `
import { FastAPI } from "fastapi";
import { Security } from "./netsec";

// INITIALIZING CORE SUBSYSTEMS...
app = FastAPI()

@app.get("/secure-data")
async def root():
    if not Security.verify_token():
        return {"error": "Access Denied"}
    return {"status": "Encryption Active"}

// FRONTEND SYNC...
const Dashboard = () => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    // Establishing Secure WebSocket
    socket.connect('wss://api.secure/stream');
    
    return () => socket.disconnect();
  }, []);
}

// > Vue.js Mount Point Detected... [OK]
// > Starting Gunicorn Server... [OK]
// > CSRF Tokens Generated... [OK]
// > SYSTEM READY. LISTENING...
  `;

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullCode.substring(0, i));
            i++;
            if (i > fullCode.length) i = 0;
        }, 50); // Typing speed
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden bg-[#050816] z-0">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 blur-[50px] rounded-full"></div>

            {/* SCROLLING CONTAINER */}
            <motion.div
                initial={{ y: "10%" }}
                animate={{ y: "-40%" }} // Moves UP slowly, keeping text centered longer
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute w-full px-4"
            >
                <pre className="text-[10px] font-mono text-green-400/50 leading-relaxed pointer-events-none whitespace-pre-wrap">
                    {text}
                    <span className="w-2 h-4 bg-green-400 inline-block animate-pulse align-middle ml-1"></span>
                </pre>
            </motion.div>

            {/* GRADIENT FADE (Top & Bottom) - Keeps focus in the middle */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-transparent to-[#050816] z-10 pointer-events-none"></div>
        </div>
    );
};

// --- 4. METRIC BARS ---
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

// --- MAIN EXPORTED COMPONENT ---
export const SystemStatusCard = () => {
    return (
        <div className="md:col-span-2 relative h-full min-h-[240px] rounded-2xl overflow-hidden border border-indigo-500/20 shadow-[0_0_30px_rgba(99,102,241,0.15)] group bg-[#050816]">

            <LiveCodeBackground />
            <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-[1px] z-10"></div>

            {/* Content Layer */}
            <div className="relative z-20 p-6 h-full flex flex-col justify-between">

                {/* HEADER ROW */}
                <div>
                    <div className="flex items-center justify-between mb-6">
                        {/* Left: Stack Badge */}
                        <div className="flex items-center gap-2 px-2 py-1 rounded bg-white/5 border border-white/10 backdrop-blur-md">
                            <Activity size={12} className="text-green-400 animate-pulse" />
                            <span className="text-[10px] font-bold text-white tracking-widest uppercase">
                                Full Stack Runtime
                            </span>
                        </div>

                        {/* Right: Fixed System Toast */}
                        <SystemToast />
                    </div>

                    <div className="flex items-start gap-4">
                        {/* Icon: Pulsing CPU */}
                        <div className="p-3 rounded-xl bg-gradient-to-br from-slate-800 to-black border border-indigo-500/30 shadow-lg shadow-indigo-500/10">
                            <Cpu size={24} className="text-indigo-400 animate-[pulse_3s_ease-in-out_infinite]" />
                        </div>

                        {/* Text: Process Monitor */}
                        <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-bold text-white tracking-wide mb-1">
                                Execution Core
                            </h3>
                            <ProcessMonitor />
                        </div>
                    </div>
                </div>

                {/* BOTTOM METRICS ROW */}
                <div className="grid grid-cols-2 gap-4 mt-4 bg-black/60 p-4 rounded-xl border border-white/5 backdrop-blur-md">
                    {/* Specific Stack Metrics */}
                    <MetricBar label="VIRTUAL_DOM" color="bg-gradient-to-r from-blue-500 to-cyan-400" />
                    <MetricBar label="API_LATENCY" color="bg-gradient-to-r from-yellow-500 to-orange-400" />
                    <MetricBar label="NET_SEC" color="bg-gradient-to-r from-emerald-500 to-green-400" />

                    {/* Animated Activity Graph */}
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