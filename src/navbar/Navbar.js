import React, { useContext } from 'react';
import { Context } from '../context/Context';
import './Navbar.css';

function Navbar() {
  const { cartItems, openCartModal } = useContext(Context);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <img className="navbar-logo-img"src='./Designer.png' alt="Description of image" />;
      </div>
      <div className="navbar-links">
        
        <a href="#products">Productos</a>
        <a href="#about">Acerca de</a>
        <a href="#contact">Contacto</a>
        {/* Opción de Carrito */}
        <button className="cart-btnn" onClick={openCartModal}>
          Carrito 
          {cartItems.length > 0 && (
            <span className="cart-count">{cartItems.length}</span> // Muestra el número de productos en el carrito
          )}
        </button>
      </div>
    </nav>
  );
}

export { Navbar };
