
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/clientes">Clientes</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/login">Iniciar sesión</Link></li>
        <li><Link to="/carrito">Carrito de compras</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;