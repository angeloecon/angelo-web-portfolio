import { GradHatIcon } from "../Icons";
import { motion } from "framer-motion";

const EduCard = ({ school, degree, year, details, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group relative p-6 bg-slate-900/80 border border-purple-500/30 backdrop-blur-md rounded-xl overflow-hidden hover:border-purple-400/60 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
        >

            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                <GradHatIcon className={"w-12 h-12 text-purple-500"} />

            </div>

            <h3 className="font-scifi-reg text-xl md:text-2xl font-bold text-white font-mono mb-1 pr-16">{school}</h3>
            <h4 className="text-sm text-purple-400 font-mono mb-4">{degree}</h4>
            <div className="inline-block px-3 py-1 mb-4 text-xs font-bold text-purple-900 bg-purple-200 rounded-full">
                {year}
            </div>
            <p className="text-slate-300 font-sans">
                {details}
            </p>

        </motion.div>
    );
};

export default EduCard;