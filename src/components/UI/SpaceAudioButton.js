const SpaceAudioButton = ({ className, engineOn, toggleEngine }) => {
  return (
    <button
      onClick={toggleEngine}
      className={`font-scifi-reg flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 border rounded-full font-mono text-[10px] text-xs tracking-widest transition-all duration-300 cursor-pointer ${engineOn
        ? "border-cyan-500 bg-cyan-900/40 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
        : "border-red-500/50 bg-red-900/20 text-red-400 opacity-70 hover:opacity-100"
        } ${className}`}
    >
      <div className={`w-2 h-2 rounded-full ${engineOn ? "bg-cyan-400 animate-pulse" : "bg-red-500"}`} />
      {engineOn ? "ENGINE: ONLINE" : "ENGAGE AUDIO"}
    </button>
  );
};

export default SpaceAudioButton;