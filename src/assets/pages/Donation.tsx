import { Coffee, ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function BuyMeCoffee({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`relative w-full py-20 px-4 overflow-hidden ${className}`}
    >
      {children}
      {/* Soft background glow */}
      <div
        className={`pointer-events-none absolute inset-0 flex justify-center ${className}`}
      >
        <div
        className={`h-[380px] w-[380px] rounded-full bg-amber-400/20 blur-[120px] ${className}`}
        />
      </div>

      <div className="relative mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-3xl border border-slate-200/60 dark:border-slate-800
                     bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl
                     shadow-xl p-8 md:p-10"
        >
          {/* Icon */}
          <div
            className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl
                          bg-amber-500/90 text-white shadow-lg"
          >
            <Coffee className="h-7 w-7" />
          </div>

          {/* Title */}
          <h2
            className="text-2xl md:text-3xl font-semibold tracking-tight
                         text-slate-900 dark:text-slate-100 mb-3"
          >
            Buy Me a Coffee
          </h2>

          {/* Copy */}
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-xl">
            If my work helped you or made your day a little easier, you can
            support me by buying me a coffee ☕ It keeps me energized to build,
            learn, and share more.
          </p>

          {/* Action row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <ShieldCheck className="h-4 w-4" />
              Secure payment via Paystack
            </div>

            <a
              href="https://paystack.com/pay/your-coffee-link"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2
                         rounded-2xl px-6 py-3.5 text-sm font-medium text-white
                         bg-amber-500 hover:bg-amber-600
                         transition-all shadow-lg"
            >
              Buy a coffee
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
