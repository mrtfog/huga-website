import { Link } from "react-scroll";
import cv from "../../assets/docs/cv.pdf";
import { PersonalAvatar } from "../../lib/images";
import { IoChevronDown } from "react-icons/io5";

const Header = () => {
  return (
    <header className="header" id="Inicio">
      <div className="header-intro">
        <h1  className="leading-none">
          Hola, <span className="block" />
          <span>soy Anto!</span>
        </h1>

        <p className="mt-8">
          Diseñadora gráfica y de indumentaria recibida en la Universidad
          de Buenos Aires. Me especializo en ilustración y fotografía,
          conceptualización y comunicación.
          <span className="block" />
          Contame tu idea y hagámosla realidad!
        </p>

        <div className="header-btn-container">
          <Link
            className="btn"
            href="#"
            to="Contacto"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Trabajemos
          </Link>
          <a href={cv} className="btn">
            Mirar CV ➜
          </a>
        </div>
      </div>
      <div className="header-img">
        <img className="personal-img" src={PersonalAvatar} alt={"Avatar"}></img>
      </div>
      <Link
        to="Cursos"
        href="#"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        className="bottom-panel"
      >
        <IoChevronDown />
      </Link>
    </header>
  );
};
export default Header;
