import { Coffee, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function BuyMeCoffeeApple() {
  return (
    <div className="flex flex-col items-center mt-10 select-none">
      {/* Apple Card Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="
      backdrop-blur-xl bg-white/5 border border-white/20
      rounded-3xl px-3 py-3
      shadow-[0_15px_30px_-10px_rgba(0,0,0,0.15)]
      flex flex-col items-center gap-2
      w-40 h-40
    "
      >
        {/* Animated Coffee Sticker */}
        <motion.div
          animate={{ y: [-2, 2, -2] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="
        w-9 h-9 rounded-2xl bg-white/80 border border-white/40
        shadow-[0_4px_15px_-3px_rgba(0,0,0,0.2)]
        flex items-center justify-center
      "
        >
          <Coffee className="w-4 h-4 text-yellow-700" />
        </motion.div>

        {/* Text Section */}
        <div className="text-center">
          <h2 className="text-sm font-semibold text-white tracking-tight">
            Buy Me a Coffee
          </h2>
          <p className="text-slate-300 text-[0.6rem] mt-1 flex items-center justify-center gap-1">
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
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="
        relative inline-flex items-center gap-1 px-2 py-1
        rounded-lg font-medium text-slate-900
        bg-gradient-to-r from-indigo-400 to-cyan-400  
        shadow-[0_4px_10px_-2px_rgba(234,179,8,0.5)]
        overflow-hidden text-[0.6rem]
      "
        >
          <span
            className="
          absolute inset-0 bg-gradient-to-r 
          from-transparent via-white/50 to-transparent
          translate-x-[-150%] animate-buyme-shine
        "
          />
          <Coffee className="w-3 h-3 text-yellow-700" />
          Support
        </motion.a>
      </motion.div>
    </div>
  );
}
