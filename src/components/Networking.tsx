import { motion } from "framer-motion";
import { Shield, Lock, Globe, Activity } from "lucide-react";

const terminalLogs = [
    "root@kali:~# nmap -sS -p 1-65535 target_host",
    "> [LOG] Initiating TCP Syn Scan...",
    "> [LOG] Discovered open port: 443 (HTTPS)",
    "> [LOG] Discovered open port: 22 (SSH)",
    "root@kali:~# tcpdump -i eth0 -w capture.pcap",
    "> [INFO] Capturing packets on interface eth0...",
    "> [INFO] Handshake: SYN -> SYN-ACK -> ACK",
    "root@kali:~# traceroute google.com",
    "> [HOP 1] 192.168.1.1 (Gateway) - 2ms",
    "> [HOP 2] 10.0.0.1 (ISP Node) - 15ms",
    "> [SUCCESS] Connection Established.",
];



interface Stack {
    security: string[];
    frontend?: string[];
    backend?: string[];
}

interface Skills {
    stack: Stack;
}

const skills: Skills = {
    stack: {
        security: ["Kali Linux", "Burp Suite", "OWASP", "Cryptography"],
    },
};




export const SecurityCard = () => {
    return (
        <div className="md:col-span-2 relative overflow-hidden rounded-2xl bg-[#0f172a] border border-indigo-500/30 group shadow-2xl h-full min-h-[260px]">
            <div className="absolute inset-0 opacity-10 pointer-events-none select-none overflow-hidden bg-black/90">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f172a] z-10"></div>

                {/* cmd bg-*/}
                <motion.div
                    animate={{ y: ["0%", "-50%"] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="p-4 font-mono text-[10px] leading-relaxed text-emerald-500"
                >
                    {/* Duplicate list 4 times to ensure seamless infinite loop */}
                    {[...terminalLogs, ...terminalLogs, ...terminalLogs, ...terminalLogs].map((cmd, i) => (
                        <div key={i} className="whitespace-nowrap opacity-70">
                            {cmd}
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* ============================================== */}
            {/* LAYER 2: DECORATIVE RADAR ANIMATIONS           */}
            {/* ============================================== */}

            <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                <div className="text-[9px] font-mono text-indigo-300 animate-pulse uppercase">Net_Monitor: Active</div>
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-80"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
            </div>

            {/* Spinning Radar*/}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full border border-indigo-500/10 overflow-hidden">
                <div className="absolute inset-0 rounded-full bg-[conic-gradient(rgba(99,102,241,0.3)_0deg,transparent_60deg,transparent_360deg)] animate-[spin_3s_linear_infinite]"></div>
            </div>

            <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full border border-dashed border-indigo-500/20 animate-[spin_15s_linear_infinite_reverse]"></div>


            {/* ============================================== */}
            {/* LAYER 3: THE CONTENT                           */}
            {/* ============================================== */}
            <div className="relative z-20 p-6 h-full flex flex-col justify-between backdrop-blur-[1px]">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                            <Shield size={20} />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white tracking-wide leading-none">
                                Security & NetOps
                            </h4>
                            <span className="text-[10px] text-slate-500 font-mono uppercase">System Hardening & Audit</span>
                        </div>
                    </div>
                </div>
                <div className="space-y-5 mt-4">
                    <div>
                        <div className="flex items-center gap-2 mb-2 text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                            <Lock size={10} className="text-indigo-400" /> Offensive Security
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {skills?.stack?.security?.map((tool: string) => (
                                <span key={tool} className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-200 border border-indigo-500/20 hover:bg-indigo-500/20 hover:border-indigo-400 transition-colors cursor-crosshair">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="pt-3 border-t border-white/5">
                        <div className="flex items-center gap-2 mb-2 text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                            <Globe size={10} className="text-emerald-400" /> Network Stack
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {["TCP/IP", "OSI Model", "Packet Analysis", "DNS/DHCP", "Subnetting"].map((net) => (
                                <div key={net} className="flex items-center gap-1 text-[10px] px-2 py-1 rounded bg-slate-800/80 border border-slate-700 text-slate-300 hover:border-emerald-500/50 transition-colors cursor-default">
                                    <Activity size={8} className="text-emerald-400" />
                                    {net}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};