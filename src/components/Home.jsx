import React, { useState } from 'react'
import './home.css'

const Home = () => {
  const [hoveredBox, setHoveredBox] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredBox(index);
  }

  const handleMouseOut = () => {
    setHoveredBox(null);
  }

  const boxes = [
    {
      title: 'SUMATE A IQ',
      text: 'Administramos, potenciamos tu cartera y generamos nuevas oportunidades a traves de la tecnologia, capacitacion y eficiencia.'
    },
    {
      title: 'EXCELENCIA EN LO QUE HACEMOS',
      text: 'Brindamos soluciones seguras e inteligentes a nuestros clientes generando relaciones de calidad a largo plazo'
    },
  ];

  return (
    <div className='home_container'>
      {boxes.map((box, index) => (
        <div
          key={index}
          className={`home_box ${hoveredBox === index ? 'hovered' : ''}`}
          onMouseOver={() => handleMouseOver(index)}
          onMouseOut={handleMouseOut}
        >
          <h2>{box.title}</h2>
          <p>{box.text}</p>
        </div>
      ))}
      <div className="home_box2"><h2>+40 AÑOS DE EXPERIENCIA EN EL MERCADO ASEGURADOR</h2></div>
    </div>
  );
}

export default Home; 
