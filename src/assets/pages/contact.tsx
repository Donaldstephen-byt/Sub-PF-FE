import React, { useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Send,
  User,
} from "lucide-react";
import { BASE_URL_LOCAL } from "../../components/config";
/**
 * SpiderClockContactCard
 * - Real-time spider clock (hour/minute/second represented by spider legs)
 * - Smooth motion with requestAnimationFrame
 * - Circle of icons around the clock (hover glow + tooltip)
 * - Glassy card design with web background and subtle animations
 *
 * Usage: <SpiderClockContactCard />
 *
 * Tailwind requirements: backdrop-blur, transform utilities, and custom utilities available by default.
 */

export default function SpiderClockContactCard() {
  const secondRef = useRef<HTMLDivElement | null>(null);
  const minuteRef = useRef<HTMLDivElement | null>(null);
  const hourRef = useRef<HTMLDivElement | null>(null);
  const otherLegsRef = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);

  // Set up requestAnimationFrame loop to update hand rotations smoothly
  useEffect(() => {
    const update = () => {
      const now = new Date();
      const ms = now.getMilliseconds();
      const s = now.getSeconds() + ms / 1000;
      const m = now.getMinutes() + s / 60;
      const h = (now.getHours() % 12) + m / 60;

      // Degrees:
      const secondDeg = (s / 60) * 360; // 0-360
      const minuteDeg = (m / 60) * 360;
      const hourDeg = (h / 12) * 360;

      if (secondRef.current) {
        secondRef.current.style.transform = `rotate(${secondDeg}deg)`;
      }
      if (minuteRef.current) {
        minuteRef.current.style.transform = `rotate(${minuteDeg}deg)`;
      }
      if (hourRef.current) {
        hourRef.current.style.transform = `rotate(${hourDeg}deg)`;
      }

      // gentle breathing motion for decorative legs
      otherLegsRef.current.forEach((el, idx) => {
        if (!el) return;
        const shift = Math.sin(Date.now() / 1200 + idx) * 4; // +-4deg subtle
        el.style.transform = `rotate(${shift}deg)`;
      });

      rafRef.current = requestAnimationFrame(update);
    };

    rafRef.current = requestAnimationFrame(update);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // icon circle positions (angle in degrees)
  const iconSet: {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    label: string;
    href: string;
  }[] = [
    { Icon: Mail, label: "Email", href: "mailto:Donalduko69@gmail.com" },
    { Icon: Phone, label: "Phone", href: "tel:08143867205" },
    { Icon: MapPin, label: "Location", href: "#" },
    { Icon: Linkedin, label: "LinkedIn", href: "#" },
    { Icon: Github, label: "GitHub", href: "#" },
      { Icon: Twitter, label: "Twitter", href: "#" },
    ];
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const res = await fetch(`${BASE_URL_LOCAL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error();

      // silent success UX
      alert("Message sent successfully ✅");
      form.reset();
    } catch {
      alert("Something went wrong. Please try again.");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <div className="max-w-4xl w-full grid lg:grid-cols-2 gap-8 items-stretch">
        {/* Left: Spider Clock Card */}
        <div className="relative bg-slate-900/60 border border-slate-700 rounded-3xl p-6 shadow-2xl backdrop-blur-md overflow-hidden group">
          {/* subtle web background (SVG) */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg viewBox="0 0 300 300" className="w-full h-full">
              <defs>
                <radialGradient id="g" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="#0f172a" stopOpacity="0.0" />
                  <stop offset="100%" stopColor="#0f172a" stopOpacity="0.2" />
                </radialGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#g)" />
              {/* concentric rings */}
              <g
                transform="translate(150,150)"
                stroke="white"
                strokeWidth="0.3"
                opacity="0.06"
              >
                <circle r="120" fill="none" />
                <circle r="90" fill="none" />
                <circle r="60" fill="none" />
                <circle r="30" fill="none" />
                {/* radial lines */}
                {[...Array(16)].map((_, i) => {
                  const angle = (i * 360) / 16;
                  const rad = (angle * Math.PI) / 180;
                  const x = Math.cos(rad) * 130;
                  const y = Math.sin(rad) * 130;
                  return <line key={i} x1="0" y1="0" x2={x} y2={y} />;
                })}
              </g>
            </svg>
          </div>

          {/* glowing halo */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-24 w-72 h-72 rounded-full blur-3xl opacity-20 bg-linear-to-r from-indigo-500 via-cyan-400 to-blue-500 transform-gpu transition-opacity group-hover:opacity-40"></div>

          {/* Title & subtitle */}
          <div className="relative z-10 flex flex-col items-center gap-3 pb-4">
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-indigo-300 to-cyan-300">
              Reach Out
            </h3>
            <p className="text-sm text-slate-400 text-center max-w-xs">
              I build delightful web experiences. Want to collaborate or just
              say hi? Use the clock portal below or the form to the right.
            </p>
          </div>

          {/* clock + icons container */}
          <div className="relative z-10 flex items-center justify-center py-6">
            {/* outer ring */}
            <div className="relative w-[260px] h-[260px] flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-slate-700/30" />

              {/* icons around circle */}
              <div className="absolute  inset-0">
                {iconSet.map((it, idx) => {
                  const angle = (idx / iconSet.length) * 360 - 90; // start top
                  return (
                    <a
                      key={it.label}
                      href={it.href}
                      title={it.label}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                      style={{
                        transform: `rotate(${angle}deg) translate(0, -130px) rotate(${-angle}deg)`,
                      }}
                    >
                      <div className="w-11 h-11 rounded-full bg-slate-800/60 border border-slate-700 flex items-center justify-center shadow-sm transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(99,102,241,0.14)]">
                        <it.Icon className="w-5 h-5 text-slate-200" />
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* clock face */}
              <div
                className="relative w-40 h-40 rounded-full bg-linear-to-b from-slate-800/70 to-slate-900/60 border border-slate-700/40 flex items-center justify-center shadow-inner"
                aria-hidden={false}
              >
                {/* hour ticks */}
                <svg
                  viewBox="0 0 160 160"
                  className="absolute inset-0 w-full h-full"
                >
                  <g transform="translate(80,80)">
                    {[...Array(12)].map((_, i) => {
                      const ang = i * 30 * (Math.PI / 180);
                      const x1 = Math.cos(ang) * 62;
                      const y1 = Math.sin(ang) * 62;
                      const x2 = Math.cos(ang) * 70;
                      const y2 = Math.sin(ang) * 70;
                      const small = i % 3 !== 0;
                      return (
                        <line
                          key={i}
                          x1={x1}
                          y1={y1}
                          x2={x2}
                          y2={y2}
                          stroke="#9CA3AF"
                          strokeWidth={small ? 0.8 : 1.8}
                          opacity={small ? 0.18 : 0.28}
                        />
                      );
                    })}
                  </g>
                </svg>

                {/* spider center */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ transformOrigin: "50% 50%" }}
                  >
                    {/* HOUR legs */}
                    <div ref={hourRef} className="absolute">
                      <svg width="160" height="160" viewBox="0 0 160 160">
                        <g transform="translate(80,80) rotate(-25)">
                          <path
                            d="M0 0 C -28 -8 -56 -18 -70 -36"
                            stroke="#c7b8ff"
                            strokeWidth="3.6"
                            strokeLinecap="round"
                            fill="none"
                          />
                        </g>
                        <g transform="translate(80,80) rotate(155)">
                          <path
                            d="M0 0 C -28 -8 -56 -18 -70 -36"
                            stroke="#c7b8ff"
                            strokeWidth="3.6"
                            strokeLinecap="round"
                            fill="none"
                          />
                        </g>
                      </svg>
                    </div>

                    {/* MINUTE legs */}
                    <div ref={minuteRef} className="absolute">
                      <svg width="160" height="160" viewBox="0 0 160 160">
                        <g transform="translate(80,80) rotate(-70)">
                          <path
                            d="M0 0 C -36 -10 -68 -8 -86 -20"
                            stroke="#7dd3fc"
                            strokeWidth="2.8"
                            strokeLinecap="round"
                            fill="none"
                          />
                        </g>
                        <g transform="translate(80,80) rotate(110)">
                          <path
                            d="M0 0 C -36 -10 -68 -8 -86 -20"
                            stroke="#7dd3fc"
                            strokeWidth="2.8"
                            strokeLinecap="round"
                            fill="none"
                          />
                        </g>
                      </svg>
                    </div>

                    {/* SECOND legs */}
                    <div ref={secondRef} className="absolute">
                      <svg width="160" height="160" viewBox="0 0 160 160">
                        <g transform="translate(80,80) rotate(-120)">
                          <path
                            d="M0 0 C -44 -6 -84 6 -96 20"
                            stroke="#f472b6"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            fill="none"
                          />
                        </g>
                        <g transform="translate(80,80) rotate(60)">
                          <path
                            d="M0 0 C -44 -6 -84 6 -96 20"
                            stroke="#f472b6"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            fill="none"
                          />
                        </g>
                      </svg>
                    </div>

                    {/* Decorative legs */}
                    {[0, 1].map((_, idx) => (
                      <div
                        key={`other-${idx}`}
                        ref={(el) => {
                          otherLegsRef.current[idx] = el;
                        }}
                        className="absolute"
                      >
                        <svg width="160" height="160" viewBox="0 0 160 160">
                          <g
                            transform={`translate(80,80) rotate(${
                              idx === 0 ? -30 : 150
                            })`}
                          >
                            <path
                              d="M0 0 C -20 -6 -40 -6 -56 -14"
                              stroke="#94a3b8"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              fill="none"
                              opacity="0.7"
                            />
                          </g>
                        </svg>
                      </div>
                    ))}

                    {/* spider body */}
                    <div className="absolute w-12 h-12 rounded-full bg-black/85 border border-slate-600 flex items-center justify-center shadow-[0_8px_30px_rgba(2,6,23,0.6)]">
                      <div className="w-7 h-7 rounded-full bg-linear-to-br from-slate-800 to-slate-900 border border-slate-600 flex items-center justify-center">
                        <div className="w-3.5 h-3.5 rounded-full bg-indigo-400/90 blur-sm" />
                      </div>
                    </div>

                    {/* small glossy abdomen highlight */}
                    <div className="absolute w-2.5 h-2.5 rounded-full bg-white/30 top-[42%] left-[52%] transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* bottom contact quick actions */}
          <div className="relative z-10 mt-4 flex items-center justify-between gap-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-indigo-300" />
                <span className="text-slate-200 font-semibold">Donald U.</span>
              </div>
              <div className="text-xs text-slate-400">
                Front-end Developer • Lagos
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="mailto:donald@example.com"
                className="inline-flex items-center gap-2 bg-indigo-600/90 px-4 py-2 rounded-full text-sm font-medium shadow hover:scale-[1.02] transition-transform"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
              <button
                className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700 px-4 py-2 rounded-full text-sm hover:bg-slate-800/70 transition"
                onClick={() => {
                  const el = document.getElementById("contactFormName");
                  if (el)
                    el.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
              >
                <Send className="w-4 h-4" />
                Message
              </button>
            </div>
          </div>
        </div>

        {/* Right: Contact Form Card */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 shadow-xl backdrop-blur-sm">
          <h4 className="text-2xl font-semibold text-indigo-300 mb-3">
            Send Me a Message
          </h4>
          <p className="text-sm text-slate-400 mb-6">
            Quick message or detailed brief — I’ll get back within 48 hours.
          </p>

          <form
            id="contactForm"
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                id="contactFormName"
                name="name"
                placeholder="Your name"
                className="p-3 rounded-xl bg-slate-900/60 border border-slate-700 outline-none text-slate-100 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                className="p-3 rounded-xl bg-slate-900/60 border border-slate-700 outline-none text-slate-100 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                required
              />
            </div>

            <textarea
              name="message"
              rows={5}
              placeholder="Tell me about your project..."
              className="p-3 rounded-xl bg-slate-900/60 border border-slate-700 outline-none text-slate-100 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 resize-none"
              required
            />

            <div className="flex items-center justify-between gap-3">
              <div className="text-sm text-slate-400">
                Prefer a quick call? +234 123 456 7890
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-linear-to-r from-indigo-600 to-cyan-500 text-white font-medium py-2 px-4 rounded-xl hover:opacity-95 transition"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </div>

            <div className="mt-4 text-xs text-slate-500">
              By sending you agree to my friendly spam-free policy.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
