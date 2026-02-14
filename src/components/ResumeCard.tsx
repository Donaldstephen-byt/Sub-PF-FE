import { motion } from "framer-motion";
import { FileText, Eye, ChevronRight, ShieldCheck, Lock } from "lucide-react";

const HolographicCube = () => {
  return (
    <div className="relative w-24 h-24 flex items-center justify-center perspective-midrange">
      <motion.div
        className="relative w-12 h-12 preserve-3d"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {[
          "translateZ(24px)",
          "rotateY(180deg) translateZ(24px)",
          "rotateY(90deg) translateZ(24px)",
          "rotateY(-90deg) translateZ(24px)",
          "rotateX(90deg) translateZ(24px)",
          "rotateX(-90deg) translateZ(24px)",
        ].map((transform, i) => (
          <div
            key={i}
            className="absolute inset-0 border border-cyan-400/50 bg-cyan-900/20 backdrop-blur-sm shadow-[0_0_15px_rgba(34,211,238,0.2)]"
            style={{ transform }}
          >
            {/* Inner Crosshair / Tech Detail */}
            <div className="absolute inset-2 border border-dashed border-cyan-400/30"></div>
            <div className="absolute center w-1 h-1 bg-cyan-400 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        ))}
      </motion.div>

      <motion.div
        className="absolute inset-0 border border-dashed border-indigo-500/30 rounded-full"
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-2 border border-dotted border-purple-500/30 rounded-full"
        animate={{ rotate: -360, scale: [1, 0.9, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export const ResumeCard = () => {
  return (
    <div className="md:col-span-2 relative h-full min-h-[180px] rounded-2xl overflow-hidden border border-indigo-500/20 shadow-lg group hover:border-indigo-500/50 transition-all duration-500">
      {/* scanning line */}
      <div className="absolute inset-0 opacity-25 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ top: ["-100%", "220%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-indigo-400 to-transparent blur-sm"
        />
      </div>

      {/* glow blobs */}
      <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-indigo-600/10 blur-[70px] rounded-full group-hover:bg-indigo-600/20 transition-all"></div>
      <div className="absolute -left-10 -top-10 w-44 h-44 bg-cyan-500/10 blur-[70px] rounded-full group-hover:bg-cyan-500/20 transition-all"></div>

      <div className="relative z-10 p-6 flex flex-col md:flex-row md:items-center md:justify-between h-full gap-6">
        {/* LEFT */}
        <div className="flex flex-col items-start gap-4 flex-1">
          {/* top label */}
          <div className="flex items-center gap-2">
            <FileText size={18} className="text-indigo-400" />
            <span className="text-[10px] font-mono text-indigo-300 tracking-widest uppercase">
              Resume
            </span>

            <span className="ml-2 inline-flex items-center gap-2 px-2 py-0.5 rounded-full border border-emerald-400/20 bg-emerald-500/10 text-emerald-200 text-[10px] font-mono">
              <ShieldCheck size={14} />
              VERIFIED
            </span>
          </div>

          {/* title */}
          <div>
            <p className="text-xs text-slate-400 mt-1 max-w-[420px] leading-relaxed">
              A résumé built around hands‑on learning, thoughtful projects, and
              a strong foundation in engineering principles.
            </p>
          </div>

          {/* chips */}
          {/* <div className="flex flex-wrap gap-2">
            <StatChip
              icon={Lock}
              label="Encryption"
              value="AES-256"
              color="cyan"
            />
            <StatChip
              icon={Cpu}
              label="Ops Mode"
              value="Stealth"
              color="purple"
            />
            <StatChip
              icon={Activity}
              label="Signal"
              value="High"
              color="emerald"
            />
          </div> */}

          {/* progress */}
          <div className="w-full max-w-[360px]">
            <div className="sm:col-span-2 lg:col-span-3 w-full my-6">
              <div className="w-full h-px bg-linear-to-r from-transparent via-indigo-500/40 to-transparent"></div>
              <div className="mt-1 flex justify-center gap-1"></div>
            </div>

            {/* <div className="relative mt-2 h-2 w-full rounded-full bg-white/5 border border-white/10 overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-linear-to-r from-indigo-500 via-cyan-400 to-purple-500"
                initial={{ width: "0%" }}
                animate={{ width: "92%" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />

              
              <motion.div
                className="absolute inset-0 bg-white/15 skew-x-12"
                initial={{ x: "-120%" }}
                animate={{ x: "220%" }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
              />
            </div> */}

            <div className="mt-2 text-[10px] font-mono text-slate-500">
              Last update: <span className="text-slate-300">recent</span> •
              Access: <span className="text-indigo-200">public read</span>
            </div>
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-3 px-6 py-2 rounded-full
  border border-cyan-400/25 bg-cyan-950/20 backdrop-blur-md
  text-xs font-bold uppercase tracking-widest text-cyan-100
  shadow-[0_0_25px_rgba(34,211,238,0.12)]
  hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]
  transition-all duration-300 group/cta
  active:scale-[0.98]"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-cyan-500/10 via-indigo-500/10 to-purple-500/10 opacity-70" />

            <div
              className="absolute inset-0 rounded-full opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)",
                backgroundSize: "14px 14px",
              }}
            />

            <motion.div
              className="absolute left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-cyan-300 to-transparent blur-sm opacity-60"
              animate={{ top: ["-20%", "120%"] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-0 rounded-xl bg-white/10 skew-x-12"
              initial={{ x: "-120%" }}
              whileHover={{ x: "220%" }}
              transition={{ duration: 0.55 }}
            />

            <div className="relative z-10 flex items-center gap-3">
              <motion.div
                className="relative w-9 h-7 rounded-lg border border-cyan-400/25 bg-cyan-500/10 flex items-center justify-center"
                whileHover={{ rotateX: 12, rotateY: -14 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 rounded-lg shadow-[inset_0_0_18px_rgba(34,211,238,0.12)]" />
                <Eye size={16} className="text-cyan-200" />
              </motion.div>

              <div className="flex flex-col leading-none">
                <span className="text-[11px] text-cyan-100">Access Resume</span>
              </div>

              <ChevronRight
                size={16}
                className="ml-1 opacity-80 group-hover/cta:translate-x-1 transition-transform"
              />
            </div>

            {/* bottom glow */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-cyan-500/20 blur-2xl rounded-full" />
          </a>
        </div>

        {/* RIGHT */}
        <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center shrink-0 mx-auto md:mx-0">
          {/* scan line */}
          <motion.div
            className="absolute w-full h-[2px] bg-cyan-400/50 blur-sm z-20"
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />

          {/* KEEP CUBE */}
          <HolographicCube />

          {/* overlays ON cube (without changing cube) */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="absolute -top-1 right-2 text-[9px] font-mono tracking-widest text-cyan-200/80">
              100% Creative ✓
            </div>

            <div className="absolute -bottom-1 left-1 text-[9px] font-mono tracking-widest text-indigo-200/70">
              SYNC ✓
            </div>

            <div className="absolute bottom-3 right-1 inline-flex items-center gap-1 px-2 py-1 rounded-full border border-cyan-400/20 bg-cyan-500/10 text-cyan-200 text-[9px] font-mono">
              <Lock size={12} />
              SECURED
            </div>
          </div>

          <div className="absolute bottom-0 w-16 h-4 bg-cyan-500/20 blur-xl rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
