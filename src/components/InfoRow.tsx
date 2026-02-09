export function InfoRow({
    icon,
    label,
    value,
    href,
    highlight = false,
}: {
    icon: React.ReactNode;
    label: string;
    value: string;
    href?: string;
    highlight?: boolean;
}) {
    const content = href ? (
        <a
            href={href}
            className={`font-semibold ${highlight
                ? "text-indigo-400 hover:underline"
                : "text-slate-200 hover:text-indigo-300"
                } transition`}
        >
            {value}
        </a>
    ) : (
        <span className="font-semibold text-slate-200">{value}</span>
    );

    return (
        <div className="flex justify-between items-center bg-slate-800/50 border border-slate-700/70 rounded-lg px-4 py-2 hover:border-indigo-400/50 transition">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
                {icon}
                {label}
            </div>
            {content}
        </div>
    );
}