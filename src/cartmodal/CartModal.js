import React, { useContext, useState } from 'react';
import './CartModal.css';
import { Context } from '../context/Context';
import { PayPalButton } from '../paypalboton/PayPalButton';
import emailjs from '@emailjs/browser';  // Importar EmailJS

function CartModal() {
  const { cartItems, closeCartModal, removeFromCart } = useContext(Context);
  const [showCashForm, setShowCashForm] = useState(false); // Estado para mostrar/ocultar el formulario

  const totalAmount = cartItems.reduce((total, item) => total + parseFloat(item.price.replace('$', '')), 0).toFixed(2);

  // Acción para mostrar el formulario de pago contraentrega
  const handleCashPaymentClick = () => {
    setShowCashForm(!showCashForm);
  };

  // Acción al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Verificar los productos y asegurar que tienen las propiedades correctas
    const formattedProducts = cartItems.map(item => {
      // Verificamos que el nombre y precio existen y no están vacíos
      const name = item.family && item.family.trim() !== '' ? item.family : 'Nombre del producto no disponible';
      const price = item.price && item.price.trim() !== '' ? item.price : 'Precio no disponible';
      return `${name} - ${price}`;
    }).join(', '); // Formato: "Nombre del producto - Precio, Nombre del producto - Precio"
  
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      address: e.target.address.value,
      city: e.target.city.value,
      phone: e.target.phone.value,
      totalAmount: totalAmount,
      cartItems: formattedProducts, // Aquí usamos los productos formateados
    };
  
    // Enviar el correo usando EmailJS
    emailjs
      .send(
        'service_gpqkwft', // Reemplaza con tu Service ID
        'template_56ev308', // Reemplaza con tu Template ID
        formData,
        'sXbvQR13XdW5AUrRL' // Reemplaza con tu Public Key
      )
      .then((response) => {
        console.log('Email enviado:', response);
        alert("Tu pedido ha sido registrado para pago contraentrega, en unos minutos nos comunicaremos contigo ¡Gracias por tu compra!");
        setShowCashForm(false); // Opcional: ocultar el formulario después de enviar
        closeCartModal(); // Cerrar el modal
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
      });
  };
  
  
  
  
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
            <>
              <PayPalButton totalAmount={totalAmount} />
              <button className="cash-payment-btn" onClick={handleCashPaymentClick}>
                Pago de Contado
              </button>
            </>
          )}
        </div>

        {/* Formulario para el pago contraentrega */}
        {showCashForm && (
          <form className="cash-payment-form" onSubmit={handleSubmit}>
            <h3>Detalles para Pago Contraentrega</h3>
            <h5>Ingresa tus datos y nos comunicaremos contigo </h5>
            <label>
              Nombre Completo:
              <input type="text" name="name" required />
            </label>
            <label>
              Correo Electrónico:
              <input type="email" name="email" required /> {/* Campo de correo electrónico */}
            </label>
            <label>
              Dirección:
              <input type="text" name="address" required />
            </label>
            <label>
              Ciudad:
              <input type="text" name="city" required />
            </label>
            <label>
              Teléfono:
              <input type="tel" name="phone" required />
            </label>
            <button type="submit" className="submit-btn">Confirmar Pedido</button>
          </form>
        )}
      </div>
    </div>
  );
}

export { CartModal };
