const map = {
  indigo: "bg-indigo-500/10 text-indigo-200 border-indigo-400/20",
  cyan: "bg-cyan-500/10 text-cyan-200 border-cyan-400/20",
  emerald: "bg-emerald-500/10 text-emerald-200 border-emerald-400/20",
  purple: "bg-purple-500/10 text-purple-200 border-purple-400/20",
} as const;

type ColorKey = keyof typeof map;

export const StatChip = ({
//   icon: Icon,
  label,
  value,
  color = "indigo",
}: {
  label: string;
  value: string;
  color?: ColorKey;
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-mono tracking-wide ${map[color]}`}
    >
      {/* <Icon size={14} className="opacity-90" /> */}
      <span className="opacity-80">{label}</span>
      <span className="font-semibold opacity-100">{value}</span>
    </div>
  );
};
