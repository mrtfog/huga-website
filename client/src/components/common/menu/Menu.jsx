import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { AnimatePresence } from "framer-motion";
import MobileNav from "./MobileNav";
import logo from "../../../assets/img/logo.png";

function Menu() {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  const menuItems = ["Inicio", "Cursos", "Proyectos", "Servicios", "Contacto"];

  return (
    <header className="menu" id="menu">
      <img className="menu-logo" src={logo} alt={"menu logo"}></img>
      <nav className="hidden lg:flex">
        <ul className="menu-nav">
          {location?.pathname !== "/" ? (
            <li className="menu-li">
              <Link className="flex items-center gap-2" to={"/"}>
                <BsArrowLeft size={24} />
                Volver al Inicio
              </Link>
            </li>
          ) : (
            <>
              {menuItems.map((item) => {
                return (
                  <li className="menu-li" key={item}>
                    <ScrollLink
                      to={item}
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={700}
                    >
                      {item}
                    </ScrollLink>
                  </li>
                );
              })}
            </>
          )}
        </ul>
      </nav>

      <div>
        <div
          onClick={() => setIsActive(!isActive)}
          className="w-14 h-14 rounded-full bg-[#d57c8c] cursor-pointer flex items-center justify-center lg:hidden"
        >
          <div className="relative w-full">
            <div
              className={`${
                isActive
                  ? "transform rotate-45 translate-y-0"
                  : "-translate-y-1"
              } h-[1px] w-2/5 mx-auto bg-white transition-transform`}
            ></div>
            <div
              className={`${
                isActive
                  ? "transform -rotate-45 -translate-y-[2px]"
                  : "translate-y-1"
              } h-[1px] w-2/5 mx-auto bg-white transition-transform`}
            ></div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {isActive && <MobileNav />}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Menu;
