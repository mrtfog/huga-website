import logo from "../../../assets/img/logo.png";
import { Link } from "react-scroll";
import { socialMedias } from "../../../assets/img/SVG";
import { MenuIcon } from "./MenuIcon";

function Menu() {

  const menuItems = ["Inicio", "Cursos", "Proyectos", "Servicios", "Contacto"];

  return (
    <>
      <div className="menu" id = "menu">
        <img className="menu-logo" src={logo} alt = {"menu logo"}></img>
        <nav>
          <ul className="menu-nav">
            {
            menuItems.map((item) => {
              return (
                <li className="menu-li" key={item}>
                  <Link to={item} spy={true} smooth={true} offset={-50} duration={700}>{item}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="menu-social-media">
        <div className="menu-social-media-container">
          {socialMedias.map((data, i) => {
            return <MenuIcon key = { i} icon={data.socialmedia} url = {data.url}></MenuIcon>;
          })}
        </div>
      </div>
    </>
  );
}

export default Menu