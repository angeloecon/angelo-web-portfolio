import { motion } from "framer-motion";

const WorkExCard = ({ role, company, period, description, tech, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative pl-8 md:pl-12"
    >

      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-cyan-900 border-2 border-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-pulse" />


      <div className="group relative p-6 bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md rounded-xl overflow-hidden transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_0_50px_rgba(34,211,238,0.2)]">
        {/* Scanline Effect ___________*/}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 animate-scanline pointer-events-none" />

        <div className="flex justify-between items-start mb-2">
          <h3 className="font-scifi-reg text-xl md:text-2xl font-bold text-cyan-50 font-mono group-hover:text-cyan-400 transition-colors">
            {role}
          </h3>
          <div className="flex gap-1 mt-2">
            <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse" />
            <div className="w-1.5 h-1.5 bg-cyan-500/50 rounded-full group-hover:bg-green-400" />
          </div>
        </div>

        <h4 className="font-scifi-reg text-md text-cyan-400 font-mono mb-4">@ {company} // {period}</h4>
        <p className="text-slate-300 mb-6 font-sans leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="font-scifi-reg px-3 py-1 text-xs font-mono text-cyan-300 bg-cyan-900/30 border border-cyan-500/30 rounded-full">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WorkExCard;
