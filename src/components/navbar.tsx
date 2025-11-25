// src/components/Navbar.jsx
import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Profile", href: "/profile" },
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
    const rotateY = px * 4; // degrees
    const rotateX = -py * 3; // degrees
    setTiltStyle({
      transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`,
    });
  }

  function handleMouseLeave() {
    setTiltStyle({
      transform: "perspective(900px) rotateX(0deg) rotateY(0deg)",
    });
  }

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
          
          
          {/* to be implemented when I get my laptop fixed*/}
          
          <div className="hidden md:flex flex-1 justify-center px-3">
            <label htmlFor="nav-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full max-w-md">
              <input
                id="nav-search"
                type="search"
                placeholder="Search projects, posts..."
                className="w-full rounded-xl bg-white/60 backdrop-blur-sm border border-white/30
                           px-4 py-1 text-sm text-slate-800 placeholder:text-slate-500
                           focus:outline-none focus:ring-2 focus:ring-cyan-300 transition"
                aria-label="Search"
              />
              <button
                aria-label="Search"
                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-sm
                           bg-cyan-400 text-white hover:brightness-95 transition"
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
                className="flex items-center gap-2 rounded-xl px-2 py-1 hover:-translate-y-0.5 transition"
              >
                <span className="hidden sm:inline text-sm text-slate-700 dark:text-slate-200">
                  Donald
                </span>
                {/* small avatar circle */}
                <div
                  className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-slate-700 flex items-center justify-center
                             text-sm font-semibold text-slate-900 dark:text-slate-100 shadow"
                  aria-hidden
                >
                  DS
                </div>
              </button>

              {/* Profile dropdown */}
              {profileOpen && (
                <div
                  role="menu"
                  aria-label="Profile options"
                  className="absolute right-0 mt-2 w-48 rounded-xl bg-white/75 backdrop-blur-sm border border-white/20
                             shadow-md py-2 ring-1 ring-black/5"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                    role="menuitem"
                  >
                    My Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                    role="menuitem"
                  >
                    Settings
                  </a>
                  <div className="border-t border-white/30 my-1" />
                  <button
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    role="menuitem"
                    onClick={() => {
                      /* handle logout placeholder */
                      alert("Logout clicked");
                    }}
                  >
                    Logout
                  </button>
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
    </>
  );
}
