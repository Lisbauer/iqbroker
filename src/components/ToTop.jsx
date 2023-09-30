import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './toTop.css'
import { Link } from "react-scroll";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const ToTop = () => {
    const [toTopActive, setToTop] = useState(false);

    const handleClick = () => {
      setToTop(true);
      setTimeout(() => {
        setToTop(false);
      }, 7000);
    };
  return (
    <div className='arrow_container'>
         <a href="" target="_blank" alt="whatsapp icon">
            <FontAwesomeIcon className="whatsapp" icon={faWhatsapp} />
          </a>
        <Link to="navbar_home" smooth={true} duration={1500} spy={true} exact="true">
            <FontAwesomeIcon className={`arrow ${toTopActive ? "active" : ""}`}
          onClick={handleClick} icon={faArrowUp} />
        </Link>
    </div>
  )
}

export default ToTop