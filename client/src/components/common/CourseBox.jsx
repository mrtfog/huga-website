import { motion } from "framer-motion";

export function CourseBox({ courseName, image, modal, courseId, delay }) {
  return (
    <motion.article
      className="course-box"
      initial={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5, delay: delay }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <img src={image} alt={`${courseName} image`} />
      <motion.div className="course-box-info" transition={{ delay: 0.3 }}>
        <h3>{courseName}</h3>
        <button name={courseId} onClick={modal} className="btn">
          Ver más
        </button>
      </motion.div>
    </motion.article>
  );
}
