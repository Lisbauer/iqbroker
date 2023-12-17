import React from 'react'
import './nosotros.css'

const Nosotros = () => {
  return (
    <div className='nosotros_container'>
        <div className='img_text_box'>
            <img src="./images/logoazul.png" alt="logo" data-aos="flip-down" />
            <p>Más de 40 años asistiendo a Compañías, Organizadores y PAS en la atención y la administración de riesgos complejos.</p>
            <p className='secondary_p'>Resultados sólidos + Respuestas rápidas</p>
        </div>
        <section className='parrafo_container'>
            <p>Poniendo énfasis en la eficacia y la eficiencia, generamos relaciones de calidad a mediano y largo tanto para las compañías como para los productores.</p>
            <p>Trabajamos siempre bajo la misma premisa: <strong>La Unión hace la fuerza</strong></p>
            <p>En los últimos 40 años nos hemos especializado a armar <strong>redes comerciales</strong>, armados de productos diferenciados como así también a potenciar a nuestros queridos productores, ya que su éxito es nuestra razón para seguir adelante.</p>
            <p>Contamos con todas las herramientas digitales para potenciar tu negocio:</p>
              <ul className='us_list'>
                <li>Cotizador</li>
                <li>Gestión de cartera y alertas automáticas</li>
                <li>Emisor web</li>
              </ul>
            
            <p>Desde desarrollos comerciales hasta la atención de asegurados y terceros. 
Somos tu aliado estratégico. <strong>Somos IQ Broker</strong>.
</p>
        </section>
    </div>
  )
}

export default Nosotros