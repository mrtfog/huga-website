import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { menuSlide, slide, scale } from "./anim";

const navItems = [
  {
    title: "Inicio",
    href: "Inicio",
  },
  {
    title: "Cursos",
    href: "Cursos",
  },
  {
    title: "Proyectos",
    href: "Proyectos",
  },
  {
    title: "Servicios",
    href: "Servicios",
  },
  {
    title: "Contacto",
    href: "Contacto",
  },
];

function CustomLink({ data, isActive, setSelectedIndicator }) {
  const { title, href, index } = data;

  return (
    <motion.div
      className="relative flex items-center"
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className="w-2.5 h-2.5 bg-[#ecc03c] rounded-full absolute left-[-30px]"
      ></motion.div>

      <ScrollLink
        to={href}
        spy={true}
        smooth={true}
        offset={-50}
        duration={700}
        className="cursor-pointer"
      >
        {title}
      </ScrollLink>
    </motion.div>
  );
}

export default function MobileNav() {
  const location = useLocation();
  const [selectedIndicator, setSelectedIndicator] = useState(location.pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="fixed top-[10vh] right-0 z-0 h-[90vh] min-w-min max-w-96 bg-[#d57c8c] text-white"
    >
      <div className="box-border h-full p-24 flex flex-col justify-between">
        <div
          onMouseLeave={() => setSelectedIndicator(location.pathname)}
          className="flex flex-col text-5xl gap-3 mt-20"
        >
          {navItems.map((data, index) => (
            <CustomLink
              key={index}
              data={{ ...data, index }}
              isActive={selectedIndicator == data.href}
              setSelectedIndicator={setSelectedIndicator}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
