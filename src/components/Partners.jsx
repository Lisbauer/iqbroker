import React from "react";
import "./partners.css";

const Partners = () => {
  return (
    <div className="partners_container">
      <div className="partners_section">
        <h2>NUESTROS PARTNERS</h2>
        <div className="partners_logos" data-aos="fade-up">
          <div className="partners_logos_box">
            <img id="img1" src="./images/partner1.jpg" alt="logo partner" />
            <img id="img3" src="./images/partner3.jpg" alt="logo partner" />
            <img id="img2" src="./images/partner2.jpg" alt="logo partner" />
          </div>
          <div className="partners_logos_box">
            <img id="img4" src="./images/partner4.jpg" alt="logo partner" />
            <img id="img6" src="./images/partner6.jpg" alt="logo partner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
