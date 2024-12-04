import React, { useContext } from 'react';
import Slider from 'react-slick';
import { Context } from '../context/Context';
import './Home.css';

function Home() {
  const {
    settings, productos, openModal
  } = useContext(Context); 
  return (
    <section id="home" className="home-section">
      <div className="content">
        <h1>Bienvenidos a Maison Trafford Parfum</h1>
        <p>Descubre una fragancia única que te hará sentir fresco y elegante.</p>
        <a href="#products">
        
</a>
      </div>
      <div className='container-products'>
      <div className="image-slider">
        <Slider {...settings}>
          {productos.map((producto, index) => (
            <img
              key={index}
              src={producto.src}
              alt={producto.alt}
              onClick={() => openModal(producto)} 
            />
          ))}
        </Slider>
      </div>
      <button className="explore-btn">Explorar Productos</button>
      </div>
      
    </section>
  );
}

export { Home };


