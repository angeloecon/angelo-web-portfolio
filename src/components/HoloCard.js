const HoloCard = ({ children, className = "" }) => {
  return (
    <div className={`relative group ${className}`}>
 
      <div className="absolute inset-0 rounded-md border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.15)] bg-slate-900/60 backdrop-blur-md overflow-hidden">
 
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />
 
        <div className="absolute top-0 left-0 w-full h-[20%] bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent animate-scanline pointer-events-none" />
 
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400 rounded-tr-md" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400 rounded-bl-md" />
      </div>

      <div className="relative z-10 p-6 text-cyan-50 font-mono">
        {children}
      </div>
    </div>
  );
};

export default HoloCard;