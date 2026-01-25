"use client";
import { ShardIcon } from "../Icons";
import { useState } from "react";

const NavigatorGem = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-10 md:right-10 z-50 flex flex-col items-center justify-center scale-75 md:scale-100 origin-bottom-right">

      <div
        className={`mb-4 px-4 py-2 bg-slate-900/80 border border-cyan-500/30 rounded-full text-cyan-300 text-xs font-mono tracking-widest uppercase backdrop-blur-md transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
      >
        WARP TO TOP
      </div>

      <div
        className="relative w-16 h-16 cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        style={{ perspective: "1000px" }}
      >
        <div className="w-full h-full animate-float">
          {/* New SVG Shard Design */}
          <ShardIcon className="w-full h-full drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-transform duration-500 group-hover:rotate-180" />
        </div>

        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-12 h-2 bg-cyan-500/20 blur-md rounded-full animate-pulse" />
      </div>
    </div>
  );
};

export default NavigatorGem;