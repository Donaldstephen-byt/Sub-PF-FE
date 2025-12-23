import { Briefcase, Code2, PenLine, Mail, MapPin } from "lucide-react";
import clsx from "clsx";
export default function Footer({ className = "" }: { className?: string }) {
  return (
    <footer className={clsx("mt-24 px-6", className)}>
      {/* DECORATIVE DIVIDER */}
      <div className="mx-auto max-w-5xl">
        <div className="w-full h-px bg-linear-to-r from-transparent via-indigo-500/40 to-transparent" />
        <div className="mt-1 flex justify-center gap-1">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="h-1 w-1 rounded-full bg-indigo-500/40" />
          ))}
        </div>
      </div>

      {/* ICON ROW */}
      <div className="mt-8 flex justify-center gap-6">
        {[
          { Icon: Briefcase, label: "Work", href: "/case-studies" },
          { Icon: Code2, label: "Code", href: "https://github.com" },
          { Icon: PenLine, label: "Writing", href: "/notes" },
          { Icon: Mail, label: "Contact", href: "mailto:hello@email.com" },
          { Icon: MapPin, label: "Remote friendly", href: "#" },
        ].map(({ Icon, label, href }) => (
          <a
            key={label}
            href={href}
            title={label}
            className="
              group relative flex h-11 w-11 items-center justify-center
              rounded-xl
              border border-slate-200/60 dark:border-slate-700/60
              bg-white/60 dark:bg-slate-900/60
              backdrop-blur-md
              transition-all
              hover:-translate-y-1 hover:shadow-lg
            "
          >
            <Icon
              size={18}
              className="
                text-slate-600 dark:text-slate-300
                group-hover:text-indigo-500
                transition
              "
            />

            {/* subtle glow */}
            <span
              className="
              pointer-events-none absolute inset-0 rounded-xl
              opacity-0 group-hover:opacity-100
              ring-1 ring-indigo-500/30 transition
            "
            />
          </a>
        ))}
      </div>

      {/* FOOTNOTE */}
      <p className="mt-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Donald Uko · Built with care
      </p>
    </footer>
  );
}
