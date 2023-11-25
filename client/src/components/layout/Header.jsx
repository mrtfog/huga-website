import React from "react";
import { Link } from "react-scroll";
import "../../App.css";
import cv from '../../assets/docs/cv.pdf';
import personalAvatar from "../../assets/img/avatars/personal.png";
import { IoChevronDown } from "react-icons/io5";

const Header = () => {
  return (
    <header className="header" id = "Inicio">
      <div className="header-intro">
        <h1>
          Hola <br />
          <span>soy Anto!</span>
        </h1>
        <p>
          Soy diseñadora gráfica y de indumentaria recibida en la Universidad de
          Buenos Aires. Me especializo en ilustración y fotografía,
          conceptualización y comunicación. Contame tu idea y hagámosla
          realidad!
        </p>
        <div className="header-btn-container">
          <Link className = 'btn' to='Contacto' spy={true} smooth={true} offset={-50} duration={500}>Trabajemos</Link>
          <a href = {cv} className= 'btn'>Mirar CV ➜</a>
        </div>
      </div>
      <div className="header-img">
        <img className="personal-img" src={personalAvatar} alt = {personalAvatar}></img>
      </div>
      <Link to='Cursos' spy={true} smooth={true} offset={-50} duration={500} className="bottom-panel"><IoChevronDown/></Link>
    </header>
  );
}
export default Header
