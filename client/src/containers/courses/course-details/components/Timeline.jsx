import { motion } from "framer-motion";
import { useState } from "react";
import { Typography } from "../../../../components";
import { BsTriangleFill } from "react-icons/bs";

const Timeline = ({ currentCourse }) => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  return (
    <>
      {currentCourse && currentCourse.modules && currentCourse.modules.length
        ? currentCourse?.modules?.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="timeline-node"
            >
              <div className="node" onClick={() => toggleAccordion(index)}>
                <motion.div
                  className="node-dot"
                  layout
                  initial={false}
                  animate={{
                    rotate: openAccordion === index ? 90 : 0,
                  }}
                >
                  <BsTriangleFill
                    className="rotate-90 text-[#D57C8C]"
                    size={16}
                  />
                </motion.div>
                <h3 className="node-title">{module.title}</h3>
              </div>
              {openAccordion === index && (
                <motion.div
                  className="accordion-content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Typography as="p" variant="small" color="lightGray">
                    {module.description}
                  </Typography>
                </motion.div>
              )}
            </motion.div>
          ))
        : ""}
    </>
  );
};

export default Timeline;
