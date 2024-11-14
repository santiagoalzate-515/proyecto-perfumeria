import React, { useContext } from 'react';
import './CartModal.css';
import { Context } from '../context/Context';
import { PayPalButton } from '../paypalboton/PayPalButton';

function CartModal() {
  const { cartItems, closeCartModal, removeFromCart } = useContext(Context);

  const totalAmount = cartItems.reduce((total, item) => total + parseFloat(item.price.replace('$', '')), 0).toFixed(2);

  return (
    <div className="cart-modal-overlay">
      <div className="cart-modal-content">
        <button className="cart-modal-close" onClick={closeCartModal}>X</button>
        <h2>Carrito de Compras</h2>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p>No hay productos en el carrito.</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.src} alt={item.alt} className="cart-item-image" />
                <div className="cart-item-details">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">{item.price}</p>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item)}>Eliminar</button>
              </div>
            ))
          )}
        </div>

        <div className="cart-total">
          <p>Total:</p>
          <p>${totalAmount}</p>
        </div>

        <div className="payment-options">
        {cartItems.length > 0 && (
          <div className="payment-options">

            <PayPalButton totalAmount={totalAmount} />
            
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

export { CartModal };
