import React from "react";
import { motion } from "framer-motion";
import { User, MapPin, Mail, Phone, Terminal, CheckCircle2 } from "lucide-react";

// --- 1. THE "CODE ROOM" BACKGROUND ANIMATION ---
// This simulates code scrolling on a monitor in a dark room
const CodeRoomBackground = () => {
    const codeLines = [
        "import { Future } from 'engineering';",
        "const portfolio = new Stack();",
        "portfolio.push('React');",
        "portfolio.push('Python');",
        "system.optimize({ security: 'MAX' });",
        "while (alive) { learn(); build(); }",
        "// TODO: Fix critical architecture",
        "if (bug) { feature = true; }",
        "deploy(production);",
        "git commit -m 'Legacy built'",
        "sudo apt-get install success",
    ];

    return (
        <div className="absolute inset-0 overflow-hidden bg-[#050816] z-0">
            {/* Dim Light overlay to make it look like a room */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 z-10"></div>

            {/* The Scrolling Code */}
            <motion.div
                animate={{ y: ["0%", "-50%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="opacity-20 font-mono text-[10px] text-[#915eff] p-4 leading-relaxed"
            >
                {[...codeLines, ...codeLines, ...codeLines, ...codeLines].map((line, i) => (
                    <div key={i} className="whitespace-nowrap">{line}</div>
                ))}
            </motion.div>
        </div>
    );
};

export const IdentityCard = () => {
    // HARDCODED DATA (No API)
    const profile = {
        name: "Donald Stephen",
        role: "Full Stack Engineer",
        location: "Abuja, Nigeria",
        email: "donalduko69@gmail.com",
        phone: "+234 814 340 5610",
    };

    return (
        // CONTAINER: Spans 2 Columns in your grid, matches the height of other cards
        <div className="md:col-span-2 relative h-full min-h-[240px] rounded-2xl overflow-hidden border border-[#915eff]/20 shadow-[0_0_20px_rgba(145,94,255,0.15)] group">

            {/* A. The "Code Room" Atmosphere */}
            <CodeRoomBackground />

            {/* B. Glass Overlay (The Card Itself) */}
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm z-10"></div>

            {/* C. The Content Layer */}
            <div className="relative z-20 h-full p-6 flex flex-col justify-between">

                {/* TOP: Identity Header */}
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">

                        {/* Avatar Placeholder / Icon */}
                        <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#915eff] to-[#6366f1] p-[2px]">
                            <div className="w-full h-full rounded-xl bg-[#151030] flex items-center justify-center overflow-hidden">
                                <User className="text-white opacity-80" size={24} />
                                {/* Put your real <img> here if you have one: 
                     <img src={yourPhoto} className="w-full h-full object-cover" /> 
                 */}
                            </div>
                            {/* Online Status Dot */}
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#050816] rounded-full flex items-center justify-center">
                                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></span>
                            </div>
                        </div>

                        {/* Name & Role */}
                        <div>
                            <h3 className="text-xl font-bold text-white tracking-wide">
                                {profile.name}
                            </h3>
                            <div className="flex items-center gap-1.5 text-[#915eff] text-sm font-mono mt-0.5">
                                <Terminal size={12} />
                                <span className="tracking-wider">{profile.role}</span>
                            </div>
                        </div>
                    </div>

                    {/* "Verified" Badge */}
                    <div className="bg-[#915eff]/10 border border-[#915eff]/30 px-2 py-1 rounded-full flex items-center gap-1.5">
                        <CheckCircle2 size={12} className="text-[#915eff]" />
                        <span className="text-[9px] font-bold text-indigo-200 uppercase tracking-widest">Verified</span>
                    </div>
                </div>

                {/* MIDDLE: Visual Divider */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-2"></div>

                {/* BOTTOM: Contact Actions */}
                <div className="grid gap-3">

                    {/* Location */}
                    <div className="flex items-center gap-3 text-slate-400 text-xs pl-1">
                        <MapPin size={14} className="text-[#915eff]" />
                        <span>{profile.location}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 mt-1">
                        {/* Email Button */}
                        <a
                            href={`mailto:${profile.email}`}
                            className="flex-1 min-w-[120px] flex items-center justify-center gap-2 py-2 rounded-lg bg-[#915eff]/10 border border-[#915eff]/20 hover:bg-[#915eff]/20 hover:border-[#915eff] transition-all group/btn"
                        >
                            <Mail size={14} className="text-indigo-300 group-hover/btn:scale-110 transition-transform" />
                            <span className="text-xs font-medium text-indigo-100">Email Me</span>
                        </a>

                        {/* Phone Button */}
                        <a
                            href={`tel:${profile.phone}`}
                            className="flex-1 min-w-[120px] flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-white/30 transition-all group/btn"
                        >
                            <Phone size={14} className="text-slate-300 group-hover/btn:scale-110 transition-transform" />
                            <span className="text-xs font-medium text-slate-300">Call Now</span>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};