import React, { useContext } from 'react';
import './Products.css';
import { Context } from '../context/Context';
import { CartModal } from '../cartmodal/CartModal';

function Products() {
  const {
    productos,
    modalVisible,
    selectedProduct,
    openModal,
    closeModal,
    openCartModal,
    cartModalVisible,
    addToCart,
    cartMessage
  } = useContext(Context);

  const handleBuyClick = (product) => {
    addToCart(product);
    closeModal();
    openCartModal();
  };

  const handleViewCart = () => {
    openCartModal();  // Abrir el modal del carrito
  };

  return (
    <section id="products" className="products-section">
      <h2>Nuestros Productos</h2>
      <div className="product-list">
        {productos.map((product, index) => (
          <div key={index} className="product-item">
            <div className="product-image-container">
              <img src={product.src} alt={product.alt} className="product-image" />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.family}</p>
            </div>
            <button className="details-btn" onClick={() => openModal(product)}>
              Ver Detalles
            </button>
          </div>
        ))}
      </div>

      {modalVisible && selectedProduct && (
        <div className={`modal-overlay ${modalVisible ? 'show' : ''}`}>
          
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>X</button>
            <h2>{selectedProduct.name}</h2>
            <div className='container-total'>
            <div className="container-details">
              <img src={selectedProduct.src} alt={selectedProduct.alt} className="modal-image" />
              <div className="container-details-2">
                <p><strong>Familia:</strong> {selectedProduct.family}</p>
                {/* <p className="description"><strong>Descripción:</strong> {selectedProduct.description}</p> */}
                <p><strong>Precio:</strong> {selectedProduct.price}</p>
              </div>
            </div>

            <div className="container-buttoms">
              <button className="cart-btn" onClick={() => handleBuyClick(selectedProduct)}>
                Comprar
              </button>
              <button className="cart-btn" onClick={() => addToCart(selectedProduct)}>
                Agregar al carrito
              </button>
              {/* Botón Ver carrito */}
              <button className="cart-btn" onClick={handleViewCart}>
                Ver carrito
              </button>
            </div>

            </div>
            
          </div>
        </div>
      )}

      {/* Mostrar el mensaje de producto agregado al carrito */}
      {cartMessage && <div className="cart-message">{cartMessage}</div>}

      {cartModalVisible && <CartModal />}
    </section>
  );
}

export { Products };
