import React, { useContext, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { Context } from '../context/Context';

function Contact() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    phone: '',
    address: '',
    message: '',
    fragrance: '',  
  });

  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_2joqcn7',
        'template_ybpyz6l',
        formData,
        'AhVUD5joNbwWsQMWe'
      )
      .then(
        (response) => {
          console.log('Mensaje enviado:', response);
          setMessageSent(true);
          setFormData({
            from_name: '',
            from_email: '',
            phone: '', 
            address: '',
            fragrance: '',  
            message: '',
          });
        },
        (error) => {
          console.error('Error al enviar mensaje:', error);
        }
      );
  };

  const { productos } = useContext(Context);

  return (
    <section id="contact" className="contact-section">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="from_name" 
          value={formData.from_name} 
          onChange={handleChange} 
          placeholder="Tu Nombre" 
          required 
        />
        <input 
          type="email" 
          name="from_email" 
          value={formData.from_email} 
          onChange={handleChange} 
          placeholder="Tu Correo" 
          required 
        />
        <input 
          type="text" 
          name="phone"  
          value={formData.phone} 
          onChange={handleChange} 
          placeholder="Tu Teléfono" 
          required 
        />
        <input 
          type="text" 
          name="subject" 
          value={formData.subject} 
          onChange={handleChange} 
          placeholder="Asunto" 
          required 
        />
        <select
          name="fragrance"
          value={formData.fragrance}
          onChange={handleChange}
          required
        >
          <option className='opciones' value="">Selecciona una fragancia</option>
          {productos.map((producto) => (
            <option key={producto.id} value={producto.name}>
              {producto.alt}
            </option>
          ))}
        </select>

        <textarea 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          placeholder="Tu Mensaje" 
          required 
        />
        <button type="submit">Enviar</button>
      </form>

      {messageSent && <p className="success-message">¡Mensaje enviado con éxito!</p>}
    </section>
  );
}

export  {Contact};
