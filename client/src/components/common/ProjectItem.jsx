import { motion } from "framer-motion";

export const ProjectItem = ({ data }) => {
  return (
    <motion.article 
    layout 
    className="project-item"
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }} 
    exit={{ opacity: 0 }}
    >
      <img src={data.imageUrl} alt ={data.category}></img>
    </motion.article>
  );
};
