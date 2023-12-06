import { Link } from "react-scroll";
import cv from '../../assets/docs/cv.pdf';
import { PersonalAvatar } from "../../constants/images";
import { IoChevronDown } from "react-icons/io5";
import { motion } from "framer-motion"

const Header = () => {

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.3 },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 0,
      y: 100,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };


  return (
    <header className="header" id = "Inicio">
      <div 
      className="header-intro"
      >
        <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="overflow-hidden"
        >
          <motion.h1 
          variants={child}
          className="leading-none"
          >
            Hola <span className="block" />
            <span>soy Anto!</span>
          </motion.h1>
        </motion.div>
        <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="overflow-hidden"
        >
          <motion.p 
          className="mt-8"
          variants={child}
          >
            Soy diseñadora gráfica y de indumentaria recibida en la Universidad de
            Buenos Aires. Me especializo en ilustración y fotografía,
            conceptualización y comunicación.
            <span className="block" />
            Contame tu idea y hagámosla realidad!
          </motion.p>
        </motion.div>
        <div className="header-btn-container">
          <Link className = 'btn' href="#" to='Contacto' spy={true} smooth={true} offset={-50} duration={500}>Trabajemos</Link>
          <a href = {cv} className= 'btn'>Mirar CV ➜</a>
        </div>
      </div>
      <div className="header-img">
        <img className="personal-img" src={PersonalAvatar} alt ={"Avatar"}></img>
      </div>
      <Link to='Cursos' href="#" spy={true} smooth={true} offset={-50} duration={500} className="bottom-panel"><IoChevronDown/></Link>
    </header>
  );
}
export default Header
