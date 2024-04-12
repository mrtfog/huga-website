import logo from "../../../assets/img/logo.png";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { socialMedias } from "../../../assets/img/SVG";
import { MenuIcon } from "./MenuIcon";
import { useLocation } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

function Menu() {
  const location = useLocation();
  const menuItems = ["Inicio", "Cursos", "Proyectos", "Servicios", "Contacto"];

  return (
    <>
      <header className="menu" id="menu">
        <img className="menu-logo" src={logo} alt={"menu logo"}></img>
        <nav>
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
      </header>
      <div className="menu-social-media">
        <div className="menu-social-media-container">
          {socialMedias.map((data, i) => {
            return (
              <MenuIcon
                key={i}
                icon={data.socialmedia}
                url={data.url}
              ></MenuIcon>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Menu;
