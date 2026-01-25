import { motion } from "framer-motion";

const SectionTitleHeader = ({ title, titleClassName, underlineClassName }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <h2 className={`text-3xl md:text-5xl font-scifi-header text-transparent mb-4 bg-clip-text bg-gradient-to-r ${titleClassName}`}>
        {title}
      </h2>
      <div className={`h-1 w-32 ${underlineClassName}`} />
    </motion.div>
  );
};

export default SectionTitleHeader;