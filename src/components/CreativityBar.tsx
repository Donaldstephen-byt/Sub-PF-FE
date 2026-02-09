import { motion } from "framer-motion";

export const CreativityBar = () => {
    return (
        <div className="w-full max-w-[767px] flex flex-col gap-2">

            {/* 1. TOP LABELS */}
            <div className="flex justify-between items-end px-1">
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                    </span>
                    <span className="text-[11px] font-mono font-bold text-indigo-300 tracking-widest uppercase">
                        CREATIVE_SYNAPSE
                    </span>
                </div>
                <span className="text-[10px] font-mono font-bold text-purple-300 animate-pulse">
                    100% // OVERCLOCKED
                </span>
            </div>

            {/* 2. THE BAR CONTAINER (Fixed Height 21px) */}
            <div className="relative w-full h-[21px] bg-slate-900/80 border border-slate-700/50 rounded-md overflow-hidden backdrop-blur-sm shadow-[0_0_15px_rgba(168,85,247,0.15)]">

                {/* A. The "FULL" Gradient (100% Width) */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-purple-600 to-pink-500 w-full"></div>

                {/* B. The "Neural Activity" Animation (Moving Texture) */}
                <motion.div
                    className="absolute inset-0 opacity-40 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[size:20px_20px]"
                    animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />

                {/* C. The "High Speed" Data Stream (Shooting Light) */}
                <motion.div
                    className="absolute top-0 bottom-0 width-[2px] bg-white blur-md shadow-[0_0_20px_white]"
                    style={{ width: "50px", skewX: "-20deg" }}
                    animate={{ x: ["-100%", "2000%"] }} // Shoots across the screen
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatDelay: 0.5
                    }}
                />

                {/* D. Glass Reflection (Top Half) */}
                <div className="absolute top-0 left-0 right-0 h-[50%] bg-white/10"></div>

            </div>

            {/* 3. BOTTOM GLOW (Optional: Makes it look powerful) */}
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent blur-sm"></div>
        </div>
    );
};



export const CreativityBarSD = () => {
    return (
        <div className="w-full max-w-[767px] flex flex-col gap-1.5">

            {/* 1. LABEL SECTION (Matches your Site's Text Styles) */}
            <div className="flex justify-between items-end px-1">
                <div className="flex items-center gap-2">
                    {/* Pulsing Dot - Using your site's purple */}
                    <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75 shadow-[0_0_8px_#6366f1]"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
                    </span>
                    <span className="text-[10px] font-mono font-bold text-slate-400 tracking-widest uppercase">
                        Creative_Engine
                    </span>
                </div>
                <span className="text-[9px] font-bold text-[#915eff] animate-pulse tracking-widest">
                    100% // SYNCHRONIZED
                </span>
            </div>

            {/* 2. THE BAR CONTAINER (Height 21px, Glass Effect) */}
            <div className="relative w-full h-[21px] bg-slate-900/80 border border-slate-700/50 rounded-full overflow-hidden backdrop-blur-sm shadow-inner group">

                {/* A. The "Fluid" Gradient (Your Portfolio Colors) */}
                {/* We use opacity-80 to keep it looking like liquid light, not solid plastic */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#915eff]/30 via-[#6366f1]/30 to-[#915eff]/30"
                    animate={{
                        backgroundPosition: ["0% 50%", "100% 50%"],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{ backgroundSize: "200% 100%" }}
                >
                    {/* Inner Glow to make it pop against the dark bg */}
                    <div className="absolute inset-0 shadow-[0_0_15px_rgba(145,94,255,0.4)]"></div>
                </motion.div>

                {/* B. The "Fast Learning" Data Stream (The White Flash) */}
                <motion.div
                    className="absolute top-0 bottom-0 w-[60px] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
                    animate={{ x: ["-150%", "1200%"] }} // Shoots across
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatDelay: 1
                    }}
                />

                {/* C. The Texture Overlay (Tech Grid) */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(90deg,transparent_2px,rgba(255,255,255,0.5)_2px)] bg-[size:10px_100%]"></div>

                {/* D. Center Text (Subtle Overlay) */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <span className="text-[8px] font-black text-white/20 tracking-[0.5em] mix-blend-overlay">
             ///////////////////
                    </span>
                </div>

            </div>
        </div>
    );
};


export const NeuralBar = ({ label = "NEURAL_ENGINE" }) => {
    return (
        // CONTAINER: Flex layout for Label + Bar
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full max-w-[767px]">

            {/* 1. THE LABEL (Tech Mono Style) */}
            <div className="flex items-center gap-2 min-w-fit">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_8px_#6366f1]"></span>
                <span className="text-[11px] font-mono font-bold tracking-widest text-indigo-300 uppercase">
                    {label}
                </span>
            </div>

            {/* 2. THE BAR CONTAINER (Fixed Height 21px) */}
            <div className="relative flex-1 h-[21px] bg-slate-900/80 border border-slate-700/50 rounded-md overflow-hidden backdrop-blur-sm shadow-inner group">

                {/* A. Background Grid (The "Structure") */}
                <div className="absolute inset-0 opacity-30 bg-[linear-gradient(90deg,transparent_2px,#1e293b_2px)] bg-[size:10px_100%]"></div>

                {/* B. The "Thinking" Gradient (Pulsing & Moving) */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-600/40 to-purple-500/40"
                    animate={{
                        x: ["-100%", "100%"], // Moves across
                        opacity: [0.3, 0.8, 0.3], // Pulses brightness
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                {/* C. The "Fast Learning" Data Stream (High Speed scanline) */}
                <motion.div
                    className="absolute top-0 bottom-0 w-[40px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-md opacity-60"
                    animate={{ x: ["-200%", "500%"] }} // Shoots across fast
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "circIn",
                        repeatDelay: 0.5
                    }}
                />

                {/* D. Center Text Overlay (Glass Effect) */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <span className="text-[9px] font-bold text-white/50 tracking-[0.3em] mix-blend-overlay">
                        PROCESSING_DATA_STREAMS
                    </span>
                </div>

            </div>
        </div>
    );
};