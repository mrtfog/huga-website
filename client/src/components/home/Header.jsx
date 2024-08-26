import { Link } from "react-scroll";
import cv from "../../assets/docs/cv.pdf";
import { PersonalAvatar } from "../../lib/images";
import { IoChevronDown } from "react-icons/io5";
import { Typography } from "../index.js";

const Header = ({ sectionData }) => {
  return (
    <section className="header py-20" id="Inicio">
      <div className="header-img">
        <img className="personal-img" src={PersonalAvatar} alt={"Avatar"}></img>
      </div>
      <div className="header-intro">
        <h1 className="leading-none">
          Hola, <span className="block" />
          <span>soy Anto!</span>
        </h1>

        <Typography
          as="p"
          variant="medium"
          color="darkGray"
          className="xs:mt-4 sm:mt-4 md:mt-8"
        >
          {sectionData && sectionData.heroDescription}
        </Typography>

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
      <Link
        to="Cursos"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        className="bottom-panel"
      >
        <IoChevronDown />
      </Link>
    </section>
  );
};
export default Header;
