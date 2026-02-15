import { useEffect, useState, useRef } from "react";
import { Coffee, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function BuyMeCoffeeApple() {
  const [visible, setVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  // Use ReturnType<typeof setTimeout> for compatibility with both Node and Browser environments
  const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 1. Activation Logic: Wait 40s before helping widget becomes active
  useEffect(() => {
    const activationTimer = setTimeout(() => {
      setIsActive(true);
    }, 40000);

    return () => clearTimeout(activationTimer);
  }, []);

  // 2. Visibility Logic: Once active, cycle visibility
  useEffect(() => {
    if (!isActive) return;

    // Show immediately when active
    setVisible(true);

    // Hide after 3 seconds
    const initialHideTimer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    // Loop every 40 seconds
    const interval = setInterval(() => {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 3000);
    }, 40000);

    return () => {
      clearTimeout(initialHideTimer);
      clearInterval(interval);
    };
  }, [isActive]);

  // 3. Hover Logic: 5-second hover reveal
  const handleHoverStart = () => {
    if (!isActive || visible) return;
    hoverTimerRef.current = setTimeout(() => {
      setVisible(true);
    }, 5000); 
  };

  const handleHoverEnd = () => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
  };

  return (
    <motion.div
      className="flex flex-col items-center mt-10 select-none relative group"
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      {isActive && <div className="absolute inset-0 w-40 h-40 z-0" />}

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{
          opacity: visible ? 1 : 0,
          x: visible ? 0 : 40,
          pointerEvents: visible ? "auto" : "none",
        }}
        // Slowed down transition for a "premium" feel
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="
          w-40 h-40 z-10
          backdrop-blur-2xl bg-white/10
          border border-white/20
          rounded-3xl p-3
          shadow-[0_20px_40px_-15px_rgba(0,0,0,0.35)]
          flex flex-col items-center justify-between
          cursor-pointer
        "
      >
        <motion.div
          animate={{ y: [-2, 2, -2] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="w-10 h-10 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/40 flex items-center justify-center"
        >
          <Coffee className="w-4 h-4 text-yellow-700" />
        </motion.div>

        <div className="text-center">
          <h2 className="text-sm font-semibold text-white tracking-tight">
            Buy Me a Coffee
          </h2>
          <p className="text-slate-300 text-[0.65rem] mt-1 flex items-center justify-center gap-1">
            <Heart className="w-2 h-2 text-pink-400" />
            Thank you
            <Sparkles className="w-2 h-2 text-yellow-300" />
          </p>
        </div>

        <motion.a
          href="https://buymeacoffee.com/donaldstephen"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="px-3 py-1.5 rounded-xl font-semibold text-slate-900 bg-gradient-to-br from-indigo-400 via-sky-400 to-cyan-300 text-[0.65rem] flex items-center gap-1 shadow-sm"
        >
          <Coffee className="w-3 h-3 text-yellow-700" />
          Support
        </motion.a>
      </motion.div>
    </motion.div>
  );
}