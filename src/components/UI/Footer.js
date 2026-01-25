const SpaceFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full border-t border-cyan-500/30 bg-slate-950/80 backdrop-blur-md mt-20">

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50" />

      <div className="max-w-5xl mx-auto px-6 py-8 md:py-12 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* LEFT: system status for the char */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2 px-3 py-1 border border-cyan-500/30 rounded-full bg-cyan-900/10">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]" />
            <span className="text-[10px] font-mono text-cyan-300 tracking-widest uppercase">
              System Nominal
            </span>
          </div>
          <p className="text-cyan-100/40 text-xs font-mono mt-1">
            ID: PILOT-{currentYear}-V4
          </p>
        </div>

        {/* CENTER:: Decoration:: */}
        <div className="hidden md:flex flex-col items-center opacity-50">
          <div className="w-1 h-8 bg-cyan-500 mb-2 animate-pulse" />
          <span className="text-[10px] text-cyan-500 tracking-[0.5em] font-mono">END_TRANSMISSION</span>
        </div>

        {/* RIGHT: Comms Channels (Socials) */}
        {/* No LinkedIn Yet and Must add Resume*/}
        <div className="flex flex-col items-center md:items-end gap-3">
          <h3 className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest mb-1">
            // Secure Channels
          </h3>
          <div className="flex gap-4">
            <a
              href="https://github.com/angeloecon"
              target="_blank"
              className="text-cyan-100/60 hover:text-cyan-400 transition-colors text-sm hover:scale-110 transform duration-200"
            >
              GITHUB
            </a>
            <span className="text-cyan-500/30">|</span>
            <a
              href="#"
              target="_blank"
              className="text-cyan-100/60 hover:text-cyan-400 transition-colors text-sm hover:scale-110 transform duration-200"
            >
              LINKEDIN
            </a>
            <span className="text-cyan-500/30">|</span>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=econ7341@gmail.com"
              target="_blank"
              className="text-cyan-100/60 hover:text-cyan-400 transition-colors text-sm hover:scale-110 transform duration-200"
            >
              EMAIL
            </a>
          </div>
        </div>

      </div>

      {/* © */}
      <div className="w-full text-center py-2 border-t border-cyan-500/10 bg-black/20">
        <p className="text-[9px] text-cyan-100/20 font-mono tracking-wider">
          © {currentYear} Angelo Econ // CREATED WITH REACT NEXT.JS // RENDERED IN TAILWIND CSS
        </p>
      </div>
    </footer>
  );
};

export default SpaceFooter; 