import React from 'react'
import './nosotros.css'

const Nosotros = () => {
  return (
    <div className='nosotros_container'>
        <div className='img_text_box'>
            <img src="./images/logoazul.png" alt="" />
            <p>IQ es un bróker con más de <span style={{fontWeight: "900"}}>40 años</span> de experiencia en el mercado asegurador, administrando más de <span style={{fontWeight: "900"}}>30.000 riesgos</span> , con presencia en las provincias de Mendoza, San Juan, San Luis, Neuquén y Rio Negro.</p>
        </div>
        <section className='parrafo_container'>
            <p>Nuestro equipo está conformado por más de  <span style={{fontWeight: "900"}}>120 productores</span>  asesores de seguros (PAS), altamente capacitados y con una enorme vocación de servicio que acompañados por nuestro equipo de back office, integrado por Ejecutivos, Analistas de Riesgos, Abogados especializados, Contadores y Licenciados en Higiene y Seguridad, brindando a nuestros clientes soluciones para cada una de sus necesidades.</p>
            <p>Estamos abocados a dar un <span style={{fontWeight: "900"}}>servicio de excelencia</span>, para que tanto nuestros Asesores como nuestros clientes puedan sentirse tranquilos y seguros, que estamos cuidando lo mas importante, <span style={{fontWeight: "900"}}>su vida y su patrimonio.</span> </p>
            <p>En los últimos 40 años nos hemos especializado a armar redes comerciales, armados de productos diferenciados como así también a potenciar a nuestros queridos productores, ya que su éxito es nuestra razón para seguir adelante.</p>
            <p>Entendemos que la <strong>confianza</strong>, la <strong>eficiencia</strong> y la <strong>respuesta ágil</strong> son pilares fundamentales de nuestra actividad que honramos y seguimos día a día.</p>
        </section>
    </div>
  )
}

export default Nosotros