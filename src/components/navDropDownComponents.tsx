const Section = ({ title, children }) => (
  <div className="px-4 pb-2">
    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
      {title}
    </p>
    <div className="mt-2 space-y-1 text-slate-700 dark:text-slate-200">
      {children}
    </div>
  </div>
);

const Divider = () => (
  <div className="border-t border-slate-200/60 dark:border-slate-700/60 my-2" />
);

const Dot = ({ color, text }) => (
  <div className="flex items-center gap-2 text-sm">
    <span className={`h-2 w-2 rounded-full ${color}`} />
    {text}
  </div>
);

const QuickLink = ({ href, label }) => (
  <a
    href={href}
    className="block rounded-md px-2 py-1 text-sm
               text-slate-600 dark:text-slate-300
               hover:bg-slate-100 dark:hover:bg-slate-800"
  >
    {label}
  </a>
);
export { Section, Divider, Dot, QuickLink };