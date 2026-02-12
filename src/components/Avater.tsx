"use client";

import { useEffect, useState } from "react";

export default function SmartAvatar({
  mainImage,
  hoverImage,
  timedImage,
  alt = "Profile",
}: {
  mainImage: string;
  hoverImage: string;
  timedImage: string;
  alt?: string;
}) {
  const [showTimed, setShowTimed] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTimed(true);

      const timeout = setTimeout(() => {
        setShowTimed(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const showHover = isHovering && !showTimed;

  return (
    <div className="relative w-28 h-28">
      <div
        className={`
          relative w-full h-full overflow-hidden border border-indigo-400/40
          shadow-[0_0_20px_-5px_rgba(99,102,241,0.6)]
          transition-all duration-2000 ease-in-out
          ${showHover || showTimed ? "rounded-xl" : "rounded-2xl"}
        `}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* MAIN IMAGE */}
        <img
          src={mainImage}
          alt={alt}
          className={`
            absolute inset-0 w-full h-full object-cover
            transition-opacity duration-4000 ease-in-out
            ${showHover || showTimed ? "opacity-0" : "opacity-100"}
          `}
        />

        {/* HOVER IMAGE */}
        <img
          src={hoverImage}
          alt={alt}
          className={`
            absolute inset-0 w-full h-full object-cover
            transition-opacity duration-3000 ease-in-out
            ${showHover ? "opacity-100" : "opacity-0"}
          `}
        />

        {/* TIMED IMAGE */}
        <img
          src={timedImage}
          alt={alt}
          className={`
            absolute inset-0 w-full h-full object-cover
            transition-opacity duration-4000 ease-in-out
            ${showTimed ? "opacity-100" : "opacity-0"}
          `}
        />
      </div>
    </div>
  );
}
