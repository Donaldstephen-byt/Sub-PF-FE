// src/components/Navbar.jsx
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { projects } from "./projectsData";
import { useNavigate } from "react-router-dom";
import { Section, Divider, Dot, QuickLink } from "./NavDropdown";
import { Briefcase } from "lucide-react";
import { Signal } from "lucide-react";
import { Clock } from "lucide-react";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Profile", href: "/profile" },
  // { name: "Profile", href: "/profile" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [tiltStyle, setTiltStyle] = useState({});
  const navRef = useRef<HTMLElement | null>(null);
  const profileRef = useRef<HTMLDivElement | null>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target as Node)
      ) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  // Subtle 3D tilt based on mouse position
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = navRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within element
    const y = e.clientY - rect.top; // y position within element
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const px = (x - cx) / cx; // -1 .. 1
    const py = (y - cy) / cy; // -1 .. 1
    const rotateY = px * 2; // degrees
    const rotateX = -py * 3; // degrees
    const enableRotateY = true;
    const rotateToY = enableRotateY ? `rotateY(${rotateY}deg)` : "";
    const enableRotateX = false;
    const totateToX = enableRotateX ? `rotateX(${rotateX}deg)` : "";

    setTiltStyle({
      transform: `perspective(900px) ${totateToX} ${rotateToY} translateZ(0)`,
    });
  }

  function handleMouseLeave() {
    setTiltStyle({
      transform: "perspective(900px) rotateX(0deg) rotateY(0deg)",
    });
  }

  type projectType = {
    title: string;
    desc: string;
    tech: string[];
    link: string;
    id: string;
  };

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<projectType[]>([]);
  const [open, setOpen] = useState(false);

  // Debounce
  useEffect(() => {
    const delay = setTimeout(() => {
      if (query.trim() === "") {
        setResults([]);
        return;
      }

      const filtered = projects.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase())
      );

      setResults(filtered);
    }, 300);

    return () => clearTimeout(delay);
  }, [query]);

  const navigate = useNavigate();

  function handleSelect(projectId: string) {
    navigate(`/projects?highlight=${projectId}`);
    setOpen(false); // close search modal if needed
  }
  // const navigate = useNavigate();

  // function handleSelect(projectId: string) {
  //   navigate(`/projects?highlight=${projectId}`);
  //   }

  const [quickOpen, setQuickOpen] = useState(false);

  const STATUS = {
    available: {
      label: "Available",
      icon: Briefcase,
      color: "emerald",
    },
    open: {
      label: "Open to roles",
      icon: Signal,
      color: "indigo",
    },
    busy: {
      label: "Currently busy",
      icon: Clock,
      color: "amber",
    },
  };

  const current = STATUS.available;
  const Icon = current.icon;

  return (
    <>
      {/* Top fixed navbar centered */}
      <header
        ref={navRef}
        data-testid={Headers}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="fixed top-4 left-1/2 z-50 w-[92%] max-w-5xl -translate-x-1/2"
        aria-hidden={false}
      >
        <div
          style={tiltStyle}
          className="group flex items-center justify-between gap-4 rounded-[36px]
                     bg-white/35 backdrop-blur-md border border-white/20
                     shadow-lg px-4 py-2 transition-transform duration-150
                     hover:shadow-2xl dark:bg-slate-800/40 dark:border-slate-700/40"
          role="navigation"
          aria-label="Top navigation"
        >
          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3 no-underline">
              <span className="tracking-tight text-transparent bg-clip-text bg-linear-to-br from-indigo-400 via-purple-500 to-blue-500 text-2xl font-semibold">
                Donald U.
              </span>
            </a>

            {/* Desktop nav links */}
            <nav
              className="hidden md:flex items-center gap-2"
              aria-label="Primary"
            >
              {NAV_ITEMS.slice(0, 4).map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-1 rounded-md text-sm font-medium text-slate-700 dark:text-slate-200
                             hover:translate-y-[-3px] hover:shadow-sm transition transform"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Center: search (desktop) */}

          {/* SEARCH INPUT */}
          <div className="hidden md:flex flex-1 justify-center px-3">
            <label htmlFor="nav-search" className="sr-only">
              Search
            </label>

            <div className="relative w-full max-w-md">
              <input
                id="nav-search"
                type="search"
                placeholder="Search projects, posts..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setOpen(true);
                }}
                className="
        w-full rounded-xl bg-[#0a0d14]/90 
        border border-cyan-400/20
        px-4 py-2 text-sm text-white placeholder:text-gray-400
        focus:outline-none focus:ring-2 focus:ring-cyan-400/40
        shadow-inner
      "
              />

              <button
                aria-label="Search"
                className="
        absolute right-2 top-1/2 -translate-y-1/2 
        rounded-lg px-2 py-1 text-sm
        bg-cyan-500 text-white hover:bg-cyan-400 transition
      "
              >
                🔍
              </button>
            </div>
          </div>

          {/* Right: actions */}
          <div className="flex items-center gap-3">
            {/* Mobile Hamburger */}
            <button
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((s) => !s)}
              className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-white/20 transition"
            >
              <span className="sr-only">Toggle menu</span>
              {/* hamburger icon */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* Profile area */}
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setProfileOpen((s) => !s)}
                aria-haspopup="true"
                aria-expanded={profileOpen}
                className="
    group flex items-center gap-2
    rounded-xl px-3 py-1.5
    bg-white/60 dark:bg-slate-900/60
    border border-slate-200/60 dark:border-slate-700/60
    backdrop-blur-md
    hover:-translate-y-0.5 hover:shadow-md
    transition-all
  "
              >
                {/* ICON */}
                <Icon
                  size={16}
                  className={`text-${current.color}-600 dark:text-${current.color}-400`}
                />

                {/* LABEL */}
                <span className="hidden sm:inline text-sm font-medium text-slate-700 dark:text-slate-200">
                  Availability
                </span>

                {/* STATUS INDICATOR */}
                <span className="relative flex h-2.5 w-2.5">
                  <span
                    className="absolute inline-flex h-full w-full
      rounded-full bg-emerald-400 opacity-60 group-hover:animate-ping"
                  />
                  <span
                    className="relative inline-flex h-2.5 w-2.5
      rounded-full bg-emerald-500"
                  />
                </span>
              </button>
              {/* Profile dropdown */}
              {/* to oltip menu  */}
              {profileOpen && (
                <div className="relative">
                  {/* Tooltip arrow */}
                  <div
                    className="absolute top-0 right-4 w-3 h-3 bg-white/80 dark:bg-slate-900/90
                 transform -translate-y-1/2 rotate-45
                 border-t border-l border-slate-200/60 dark:border-slate-700/60"
                  />

                  {/* Menu */}
                  <div
                    role="menu"
                    className="absolute right-0 mt-1 w-72 rounded-xl
                 bg-white/80 dark:bg-slate-900/90 backdrop-blur-md
                 border border-slate-200/60 dark:border-slate-700/60
                 shadow-lg py-3 ring-1 z-100 ring-black/5"
                  >
                    {/* STATUS */}
                    <Section title="Status">
                      <Dot
                        color="bg-emerald-500"
                        text="Available for freelance"
                      />
                      <Dot
                        color="bg-indigo-500"
                        text="Open to full-time roles"
                      />
                    </Section>

                    <Divider />

                    {/* NOW */}
                    <Section title="Now">
                      <p className="text-sm">
                        🛠 Building <b>Portfolio v2</b>
                      </p>
                    </Section>

                    <Divider />

                    {/* LOCATION */}
                    <Section title="Location">
                      <p className="text-sm">
                        📍 Remote / Hybrid (EU-friendly)
                      </p>
                    </Section>

                    <Divider />

                    {/* QUICK ACCESS */}
                    <div className="px-4">
                      <button
                        onClick={() => setQuickOpen((s) => !s)}
                        className="flex w-full items-center justify-between
                     text-sm font-medium text-slate-700 dark:text-slate-200
                     hover:text-indigo-600 transition"
                      >
                        Quick access
                        <span
                          className={`transition ${
                            quickOpen ? "rotate-90" : ""
                          }`}
                        >
                          ›
                        </span>
                      </button>

                      {quickOpen && (
                        <div className="mt-2 ml-2 space-y-1">
                          <QuickLink
                            href="/case-studies"
                            label="🧩 Case studies"
                          />
                          <QuickLink
                            href="/ui-experiments"
                            label="🎨 UI experiments"
                          />
                          <QuickLink
                            href="/performance"
                            label="⚡ Performance lab"
                          />
                          <QuickLink
                            href="/design-system"
                            label="📐 Design system"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile menu — slides down */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            className="mt-2 rounded-xl bg-white/60 backdrop-blur-md border border-white/20 shadow-md p-3 md:hidden"
            role="menu"
            aria-label="Mobile Menu"
          >
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-100"
                  role="menuitem"
                >
                  {item.name}
                </a>
              ))}

              <div className="mt-2">
                <label htmlFor="mobile-search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <input
                    id="mobile-search"
                    type="search"
                    placeholder="Search..."
                    className="w-full rounded-lg px-3 py-2 border border-white/30"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* spacer so page content doesn't tuck behind fixed header */}
      <div className="h-20" aria-hidden />

      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-lg z-[100]"
            />

            {/* MODAL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: -20 }}
              transition={{ duration: 0.22 }}
              className="
          fixed top-32 left-1/2 -translate-x-1/2 
          w-full max-w-2xl z-[101]
          bg-[#0b0f19] border border-white/10
          backdrop-blur-2xl rounded-2xl shadow-2xl overflow-hidden
        "
            >
              {/* SEARCH INPUT */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
                <Search className="w-4 h-4 text-cyan-300" />

                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search anything..."
                  className="w-full bg-transparent text-sm text-gray-200 placeholder:text-gray-500 outline-none"
                />

                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-500 hover:text-white transition"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* RESULTS */}
              <div className="max-h-[320px] overflow-y-auto px-3 py-4 space-y-2">
                {results.length > 0 ? (
                  results.map((r, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      onClick={() => handleSelect(r.id)}
                      className="
                  bg-white/5 hover:bg-white/10 
                  border border-white/10 hover:border-cyan-400/30
                  transition cursor-pointer p-4 rounded-xl
                "
                    >
                      <div className="flex justify-between">
                        <span className="text-gray-200 font-medium">
                          {r.title}
                        </span>
                        <span className="text-[11px] text-cyan-300">
                          {r.tech.join(", ")}
                        </span>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center text-gray-500 py-16">
                    <Search className="w-8 h-8 mx-auto mb-3 text-gray-600" />
                    <p>No results found</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Try using different keywords.
                    </p>
                  </div>
                )}
              </div>

              {/* FOOTER */}
              <div className="px-5 py-3 border-t border-slate-700/40 text-[11px] text-gray-500 flex justify-end">
                Press <span className="text-cyan-300 mx-1">⌘ + K</span> to open
                search
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
