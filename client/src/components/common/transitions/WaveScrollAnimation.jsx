import { motion, useTransform, useViewportScroll } from "framer-motion";

const WaveScrollAnimation = ({ color }) => {
  const { scrollYProgress } = useViewportScroll(); // Obtiene el progreso del scroll
  const pathVariants = {
    hidden:
      "M0,0L0,0C0,0,0,0,0,0C0,0,0,0,0,0C0,0,0,0,0,0C0,0,0,0,0,0C0,0,0,0,0,0C0,0,0,0,0,0L0,0L0,320L0,320C0,320,0,320,0,320C0,320,0,320,0,320C0,320,0,320,0,320C0,320,0,320,0,320C0,320,0,320,0,320C0,320,0,320,0,320L0,320Z",
    visible:
      "M0,192L48,176C96,160,192,128,288,138.7C384,149,480,203,576,218.7C672,235,768,213,864,176C960,139,1056,85,1152,90.7C1248,96,1344,160,1392,192L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
  };

  const pathAnimation = useTransform(
    scrollYProgress,
    [0, 0.5],
    [pathVariants.hidden, pathVariants.visible]
  );

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className="absolute -top-24 left-0 z-0 pointer-events-none"
      initial="hidden"
      animate={{ d: pathAnimation }}
      transition={{ duration: 2, ease: [0.075, 0.82, 0.165, 1] }} // Usando cubic-bezier para la transición
    >
      <motion.path
        fill="#000"
        fillOpacity="1"
        style={{ pathLength: pathAnimation }}
      ></motion.path>
    </motion.svg>
  );
};

export default WaveScrollAnimation;
