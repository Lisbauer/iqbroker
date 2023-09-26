import React from 'react';
import './fonts.css';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='header_container'>
        <img className='logo' src="./images/logo.png" alt="logo iqbroker" />
        <input type="checkbox" id='check'/>
        <label htmlFor="check" className='navbar_icons'>
        <box-icon name='menu' id='menu-icon'></box-icon>
        <box-icon name='x' id='close-icon'></box-icon>
        </label>
        <div className='menu_container'>
            <a href="#" style={{"--i": 0 }}>Inicio</a>
            <a href="#" style={{"--i": 1 }}>Nosotros</a>
            <a href="#" style={{"--i": 2 }}>Nuestros clientes</a>
            <a href="#" style={{"--i": 3 }}>Contacto</a>
        </div>
    </div>
  )
}

export default Navbar