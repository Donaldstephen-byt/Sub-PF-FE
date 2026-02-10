import { useEffect, useState } from "react";
import { Activity, ShieldCheck, Server } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
export const SystemToast = () => {
    const [msg, setMsg] = useState(0);
    const messages = [
        { text: "Optimizing Database...", icon: <Activity size={12} />, color: "text-blue-400" },
        { text: "Security Scan Passed", icon: <ShieldCheck size={12} />, color: "text-emerald-400" },
        { text: "Deploying to Vercel", icon: <Server size={12} />, color: "text-white" },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setMsg((prev) => (prev + 1) % messages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [messages.length]);

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={msg}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/50 backdrop-blur-md shadow-lg z-30"
            >
                <span className={messages[msg].color}>{messages[msg].icon}</span>
                <span className="text-[10px] font-mono text-slate-300">{messages[msg].text}</span>
            </motion.div>
        </AnimatePresence>
    );
};