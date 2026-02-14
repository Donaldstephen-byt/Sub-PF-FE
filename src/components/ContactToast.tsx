"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  TriangleAlert,
  XCircle,
  Info,
  Send,
  // ShieldCheck,
  // Cpu,
  // ChevronRight,
} from "lucide-react";

type ToastType = "success" | "warning" | "error" | "info";

interface ToastStyle {
  label: string;
  icon: React.ElementType;
  accent: string;
  border: string;
  iconPlate: string;
  title: string;
  desc: string;
  glow: string;
  bar: string;
}

const TOAST_STYLES: Record<ToastType, ToastStyle> = {
  success: {
    label: "SUCCESS",
    icon: CheckCircle2,
    accent: "emerald",
    border: "border-emerald-400/25",
    iconPlate: "bg-emerald-500/10 border-emerald-400/25",
    title: "text-emerald-100",
    desc: "text-emerald-200/70",
    glow: "from-emerald-500/25 via-cyan-400/15 to-indigo-500/20",
    bar: "from-emerald-300 via-cyan-300 to-indigo-300",
  },
  warning: {
    label: "WARNING",
    icon: TriangleAlert,
    accent: "amber",
    border: "border-amber-400/25",
    iconPlate: "bg-amber-500/10 border-amber-400/25",
    title: "text-amber-100",
    desc: "text-amber-200/70",
    glow: "from-amber-500/25 via-orange-400/15 to-indigo-500/15",
    bar: "from-amber-300 via-orange-300 to-indigo-300",
  },
  error: {
    label: "DELIVERY FAILED",
    icon: XCircle,
    accent: "rose",
    border: "border-rose-400/25",
    iconPlate: "bg-rose-500/10 border-rose-400/25",
    title: "text-rose-100",
    desc: "text-rose-200/70",
    glow: "from-rose-500/25 via-red-400/15 to-indigo-500/15",
    bar: "from-rose-300 via-red-300 to-indigo-300",
  },
  info: {
    label: "SYSTEM NOTICE",
    icon: Info,
    accent: "indigo",
    border: "border-indigo-400/25",
    iconPlate: "bg-indigo-500/10 border-indigo-400/25",
    title: "text-indigo-100",
    desc: "text-indigo-200/70",
    glow: "from-indigo-500/25 via-cyan-400/10 to-purple-500/15",
    bar: "from-indigo-300 via-cyan-300 to-purple-300",
  },
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function use3DTilt() {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const ry = clamp((x - 0.5) * 18, -10, 10);
    const rx = clamp(-(y - 0.5) * 18, -10, 10);

    setTilt({ rx, ry });
  };

  const onLeave = () => setTilt({ rx: 0, ry: 0 });

  return { tilt, onMove, onLeave };
}

function HudBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* soft fog glow */}
      <div className="absolute inset-0 bg-cyan-400/5" />
      <div className="absolute -left-10 top-6 w-72 h-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl" />

      {/* scanline */}
      <motion.div
        className="absolute left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-cyan-200 to-transparent opacity-40 blur-sm"
        animate={{ top: ["-20%", "120%"] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
      />

      {/* HUD SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-55"
        viewBox="0 0 800 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* main cyan stroke */}
        <g stroke="rgba(34,211,238,0.65)" strokeWidth="2">
          {/* big ring */}
          <circle cx="360" cy="210" r="86" />
          <circle cx="360" cy="210" r="64" strokeDasharray="6 6" />
          <circle
            cx="360"
            cy="210"
            r="44"
            strokeDasharray="2 8"
            opacity="0.6"
          />

          {/* cross lines */}
          <line x1="360" y1="96" x2="360" y2="20" opacity="0.5" />
          <line x1="360" y1="400" x2="360" y2="296" opacity="0.5" />
          <line x1="244" y1="210" x2="140" y2="210" opacity="0.4" />
          <line x1="476" y1="210" x2="660" y2="210" opacity="0.35" />

          {/* square target */}
          <rect x="330" y="180" width="60" height="60" rx="8" opacity="0.7" />
          <circle cx="398" cy="240" r="8" opacity="0.6" />

          {/* wireframe panels */}
          <path d="M140 70 H320 V150 H200 L140 70 Z" opacity="0.45" />
          <path d="M500 60 H720 V140 H560 L500 60 Z" opacity="0.4" />
          <path d="M80 290 H300 V380 H140 L80 290 Z" opacity="0.25" />

          {/* right partial circle */}
          <circle cx="740" cy="210" r="60" opacity="0.25" />
          <path d="M700 210 A40 40 0 0 1 780 210" opacity="0.4" />
        </g>

        {/* tiny ticks around ring */}
        <g stroke="rgba(34,211,238,0.55)" strokeWidth="1">
          {Array.from({ length: 36 }).map((_, i) => {
            const a = (i * Math.PI * 2) / 36;
            const x1 = 360 + Math.cos(a) * 86;
            const y1 = 210 + Math.sin(a) * 86;
            const x2 = 360 + Math.cos(a) * 92;
            const y2 = 210 + Math.sin(a) * 92;
            return (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} opacity="0.55" />
            );
          })}
        </g>

        {/* micro text blocks */}
        <g fill="rgba(255,255,255,0.35)" fontFamily="monospace" fontSize="10">
          <text x="150" y="60">
            MODEL MEDIUM
          </text>
          <text x="150" y="76">
            STACK 180H
          </text>
          <text x="150" y="92">
            .386
          </text>
          <text x="150" y="108">
            DATA
          </text>
          <text x="150" y="124">
            FIRST DW 0
          </text>
          <text x="150" y="140">
            SECOND DW 0
          </text>

          <text x="540" y="55">
            MODEL MEDIUM
          </text>
          <text x="540" y="71">
            STACK 180H
          </text>
          <text x="540" y="87">
            .386
          </text>
          <text x="540" y="103">
            DATA
          </text>
          <text x="540" y="119">
            FIRST DW 0
          </text>
          <text x="540" y="135">
            SECOND DW 0
          </text>

          <text x="520" y="290">
            2736.19
          </text>
        </g>
      </svg>

      {/* bottom HUD bar */}
      <div className="absolute bottom-0 left-0 right-0 h-10 opacity-30">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-cyan-400/30 to-transparent" />
        <div className="absolute top-3 left-10 right-10 h-px bg-cyan-300/40" />
        <div className="absolute top-6 left-24 right-24 h-px bg-cyan-300/20" />
      </div>
    </div>
  );
}

function HudRing() {
  return (
    <div className="absolute -left-10 -top-10 w-44 h-44 opacity-35 pointer-events-none">
      <div className="absolute inset-0 rounded-full border border-white/20" />
      <div className="absolute inset-4 rounded-full border border-dashed border-white/15" />
      <div className="absolute inset-9 rounded-full border border-dotted border-white/10" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-6 bg-white/20" />
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[2px] h-6 bg-white/20" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-6 h-[2px] bg-white/20" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-6 h-[2px] bg-white/20" />
    </div>
  );
}

interface HoloToastProps {
  open: boolean;
  type?: string;
  title?: string;
  description?: string;
  duration?: number;
  onClose?: () => void;
}

export function HoloToast({
  open,
  type = "success",
  title = "Message sent",
  description = "Transmission complete. Your message is now in my inbox.",
  duration = 4200,
  onClose,
}: HoloToastProps) {
  const style = TOAST_STYLES[type as ToastType] || TOAST_STYLES.info;
  const Icon = style.icon;

  const { tilt, onMove, onLeave } = use3DTilt();
  const id = useMemo(() => Math.random().toString(36).slice(2), []);

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => onClose?.(), duration);
    return () => clearTimeout(t);
  }, [open, duration, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key={id}
          initial={{ opacity: 0, x: 420, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 420, scale: 0.98 }}
          transition={{
            x: { type: "spring", stiffness: 520, damping: 28, mass: 0.9 },
            opacity: { duration: 0.18, ease: "easeOut" },
            scale: { duration: 0.18, ease: "easeOut" },
          } as const}
          className="fixed top-20 right-5 z-[9999]"
        >
          <motion.div
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            className={[
              "relative w-[380px] max-w-[92vw]",
              "rounded-2xl overflow-hidden isolate",
              "bg-[#050816]/85 backdrop-blur-xl",
              "border shadow-2xl",
              style.border,
            ].join(" ")}
            style={{
              transformStyle: "preserve-3d",
              transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
              clipPath: "inset(0 round 16px)",
            }}
          >
            <HudBackground />
            <HudRing />

            {/* content */}
            <div className="relative z-10 p-4 flex items-start gap-3">
              {/* icon plate */}
              <div
                className={[
                  "relative w-11 h-11 rounded-xl border flex items-center justify-center shrink-0",
                  style.iconPlate,
                ].join(" ")}
                style={{ transform: "translateZ(22px)" }}
              >
                <div className="absolute inset-0 rounded-xl shadow-[inset_0_0_18px_rgba(255,255,255,0.06)]" />
                <Icon size={20} className={style.title} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-[10px] font-mono tracking-widest uppercase text-white/60">
                    {style.label}
                  </div>

                  <button
                    onClick={onClose}
                    className="text-slate-400 hover:text-white text-xs transition"
                    aria-label="Close toast"
                  >
                    ✕
                  </button>
                </div>

                <div className="mt-1 flex items-center gap-2">
                  <Send size={14} className="text-white/40" />
                  <div className="text-sm font-bold text-white truncate">
                    {title}
                  </div>
                </div>

                <div
                  className={["mt-1 text-xs leading-relaxed", style.desc].join(
                    " "
                  )}
                >
                  {description}
                </div>

                {/* mini chips */}
                {/* <div className="mt-3 flex items-center gap-2 text-[10px] font-mono text-white/35">
                  <span className="inline-flex items-center gap-2 px-2 py-1 rounded-full border border-white/10 bg-white/5">
                    <ShieldCheck size={14} />
                    SECURE
                  </span>

                  <span className="inline-flex items-center gap-2 px-2 py-1 rounded-full border border-white/10 bg-white/5">
                    <Cpu size={14} />
                    AI MODE
                  </span>

                  <ChevronRight size={16} className="ml-auto opacity-40" />
                </div> */}
              </div>
            </div>

            {/* progress bar */}
            <div className="relative h-[3px] w-full bg-white/5">
              <motion.div
                className={[
                  "absolute inset-y-0 left-0 bg-linear-to-r",
                  style.bar,
                ].join(" ")}
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: duration / 1000, ease: "linear" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
