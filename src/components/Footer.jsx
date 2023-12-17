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
       <a href="" target="blank"> <img src="./images/logo.png" alt="logo"/></a>
        <div className="icons_box">
          
          <a
            href="https://www.linkedin.com/company/iq-broker/"
            target="_blank"
            alt="linkedin-icon"
          >
            <FontAwesomeIcon className="fonticoni" icon={faLinkedin} />
          </a>
        </div>
      </div>
      <hr/>
      <div className="rights_box">
        <h5>IQ Broker</h5>
       <a style={{textDecoration:"none", color:"#868686"}} href="https://lisabauer-portfolio.vercel.app/" target="blank"><h5>Página web creada por Lisa Bauer</h5></a>
        <h5>2023 - Todos los derechos reservados</h5>
      </div>
    </div>
  );
};

export default Footer;
