import { useEffect, useState } from "react";
import { Coffee, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function BuyMeCoffeeApple() {
  const [visible, setVisible] = useState(true);

  // Show 10s → Hide 10s → Loop
  useEffect(() => {
    let showing = true;

    const cycle = () => {
      showing = !showing;
      setVisible(showing);
    };

    const interval = setInterval(cycle, 10000); // every 10s toggle

    return () => clearInterval(interval);
  }, []);

  // When hovered → FORCE show
  const handleHoverStart = () => setVisible(true);

  // When hover ends → do nothing (cycle continues normally)
  const handleHoverEnd = () => {};

  return (
    <motion.div
      className="flex flex-col items-center mt-10 select-none"
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      {/* Hover detection wrapper */}
      <motion.div
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        animate={{
          opacity: visible ? 1 : 0,
          x: visible ? 0 : 60, // slide away when hidden
          pointerEvents: visible ? "auto" : "none",
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="
          w-40 h-40
          backdrop-blur-2xl bg-white/10
          border border-white/20
          rounded-3xl p-3
          shadow-[0_20px_40px_-15px_rgba(0,0,0,0.35)]
          flex flex-col items-center justify-between
          cursor-pointer
          border-animate
        "
      >
        {/* Floating sticker */}
        <motion.div
          animate={{ y: [-3, 3, -3] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
          className="
            w-10 h-10 rounded-2xl
            bg-white/70 backdrop-blur-xl
            border border-white/40
            shadow-[0_6px_20px_-5px_rgba(0,0,0,0.25)]
            flex items-center justify-center
          "
        >
          <Coffee className="w-4 h-4 text-yellow-700" />
        </motion.div>

        {/* Text */}
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

        {/* Button */}
        <motion.a
          href="https://buymeacoffee.com/yourname"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          className="
            relative inline-flex items-center gap-1 px-3 py-1.5
            rounded-xl font-semibold text-slate-900
            bg-gradient-to-br from-indigo-400 via-sky-400 to-cyan-300  
            shadow-[0_6px_18px_-4px_rgba(0,0,0,0.25)]
            text-[0.65rem]
          "
        >
          <Coffee className="w-3 h-3 text-yellow-700" />
          Support
        </motion.a>
        {/* <span
          className="
          h-4 w-6
              absolute inset-0 bg-gradient-to-r 
              from-transparent via-white/40 to-transparent
              translate-x-[-150%] animate-buyme-shine
            "
        /> */}
      </motion.div>
    </motion.div>
  );
}
