import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_content_container">
        <p>
          IQ es un bróker con más de 40 años de experiencia en el mercado
          asegurador, con presencia en las provincias de Mendoza, San Juan, San
          Luis y Neuquén.
        </p>
        <img src="./images/logo.png" alt="logo" />
        <div className="icons_box">
          <a
            href="https://www.facebook.com/magna.dimenseon"
            target="_blank"
            alt="facebook-icon"
          >
            <FontAwesomeIcon className="fonticonf" icon={faFacebook} />
          </a>
          <a
            href="https://www.instagram.com/magna.dimenseon/"
            target="_blank"
            alt="facebook-icon"
          >
            <FontAwesomeIcon className="fonticoni" icon={faInstagram} />
          </a>
          <a
            href="https://www.linkedin.com/company/magna-dimenseon/"
            target="_blank"
            alt="facebook-icon"
          >
            <FontAwesomeIcon className="fonticoni" icon={faLinkedin} />
          </a>
        </div>
      </div>
      <hr/>
      <div className="rights_box">
        <h5>IQ Broker</h5>
        <h5>2023 - Todos los derechos reservados</h5>
      </div>
    </div>
  );
};

export default Footer;
