import React, { useState } from "react";
import "./fonts.css";
import "./navbar.css";
import { Link, animateScroll } from "react-scroll";

const Navbar = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="header_container">
      <a href="">
        <img className="logo" src="./images/logo2.png" alt="logo iqbroker" />
      </a>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="navbar_icons">
        <box-icon
          name="menu"
          color="white"
          size="40px"
          id="menu-icon"
        ></box-icon>
        <box-icon name="x" color="white" size="40px" id="close-icon"></box-icon>
      </label>
      <div className="menu_container">
        <a href="#" style={{ "--i": 0 }}>
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            onClick={handleLinkClick}
          >
            Inicio
          </Link>
        </a>
        <a href="#" style={{ "--i": 1 }}>
          <Link
            to="aboutus"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            onClick={handleLinkClick}
          >
            Nosotros
          </Link>
        </a>
        <a href="#" style={{ "--i": 2 }}>
          <Link
            to="clients"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            onClick={handleLinkClick}
          >
            Nuestros clientes
          </Link>
        </a>
        <a href="#" style={{ "--i": 3 }}>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            onClick={handleLinkClick}
          >
            Contacto
          </Link>
        </a>      <a href="app.iqbroker.com.ar:81" target="blank">
        <input className="login_btn" type="submit" value="Log in" />
      </a>
      </div>

    </div>
  );
};

export default Navbar;
