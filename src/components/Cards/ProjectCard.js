import { motion } from "framer-motion";

import Image from "next/image";


const ProjectCard = ({ title, description, tech, image, link, itemVariants }) => {
  return (
    <motion.div variants={itemVariants}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block group relative h-full"
      >

        <div className="relative overflow-hidden rounded-xl border border-cyan-500/30 bg-slate-900/80 backdrop-blur-sm transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] h-full flex flex-col">

          <div className="relative w-full aspect-video overflow-hidden">

            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110 opacity-80 group-hover:opacity-100"
            />

            <div className="absolute inset-0 bg-cyan-900/40 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-0" />

            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20" />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
              <span className="font-scifi-reg px-4 py-2 border border-cyan-400 text-cyan-400 font-mono text-sm tracking-widest uppercase bg-black/60 backdrop-blur-md rounded">
                Launch Mission &gt;&gt;
              </span>
            </div>
          </div>

          <div className="p-5 border-t border-cyan-500/30">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-scifi-reg text-xl font-bold text-cyan-50 font-mono group-hover:text-cyan-400 transition-colors">
                {title}
              </h3>
              <div className="flex gap-1 mt-2">
                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse" />
                <div className="w-1.5 h-1.5 bg-cyan-500/50 rounded-full group-hover:bg-green-400" />
              </div>
            </div>

            <p className="text-sm text-cyan-200/70 mb-4 line-clamp-2">
              {description}
            </p>

            <div className="flex flex-wrap gap-2">
              {tech.map((t, i) => (
                <span
                  key={i}
                  className="font-scifi-reg text-[10px] uppercase tracking-wider px-2 py-1 rounded border border-cyan-500/20 bg-cyan-900/20 text-cyan-300/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>
      </a>
    </motion.div>
  );
};

export default ProjectCard;