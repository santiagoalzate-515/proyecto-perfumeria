import React, { createContext, useState } from 'react';

const Context = createContext();

function ContextProvider({ children }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const productos = [
      {
        src: '/undefined_image_1.png',
        alt: 'Perfume 1',
        description: 'Un perfume floral fresco con toques de cítricos y jazmín, ideal para un día de primavera. Notas de salida: mandarina y limón; notas de corazón: jazmín y peonía; notas de fondo: sándalo y almizcle. Perfecto para el uso diario o ocasiones relajadas.',
        family: 'Floral',
        occasion: 'Día a día',
        volume: '50 ml',
        price: '$40.00'
      },
      {
        src: '/undefined_image_2.png',
        alt: 'Perfume 2',
        description: 'Este perfume cálido y envolvente destaca por sus notas amaderadas y especiadas, creando una fragancia sofisticada. Notas de salida: cardamomo y pimienta rosa; notas de corazón: rosa de Bulgaria y jazmín; notas de fondo: madera de oud y ámbar.',
        family: 'Amaderado',
        occasion: 'Noches especiales',
        volume: '75 ml',
        price: '$65.00'
      },
      {
        src: '/undefined_image_3.png',
        alt: 'Perfume 3',
        description: 'Una fragancia fresca y ligera que recuerda a una brisa marina. Perfecto para el verano, con notas de salida de menta y bergamota, un corazón de lavanda y notas de fondo de musgo y almizcle. Ideal para cualquier momento del día y cualquier ocasión.',
        family: 'Acuático',
        occasion: 'Verano / Casual',
        volume: '100 ml',
        price: '$50.00'
      },
      {
        src: '/undefined_image_5.png',
        alt: 'Perfume 4',
        description: 'Perfume sofisticado con un toque amaderado y ligeramente especiado. Notas de salida: bergamota y lavanda; notas de corazón: rosa y especias; notas de fondo: cedro y almizcle. Una fragancia perfecta para eventos formales y ocasiones elegantes.',
        family: ' Floral',
        occasion: 'Eventos formales',
        volume: '100 ml',
        price: '$80.00'
      },
      {
        src: '/undefined_image_6.png',
        alt: 'Perfume 5',
        description: 'Con una mezcla vibrante de frutas y flores, este perfume tiene notas de salida de pera y manzana verde, con un corazón de flor de azahar y un fondo de almizcle blanco. Perfecto para quienes buscan frescura y dulzura en un solo perfume.',
        family: 'Frutal',
        occasion: 'Todo el día',
        volume: '50 ml',
        price: '$45.00'
      },
      {
        src: '/undefined_image_7.png',
        alt: 'Perfume 6',
        description: 'Una fragancia intensamente dulce y cálida, con notas de salida de caramelo y vainilla, un corazón floral de rosa y un fondo de madera de sándalo y ámbar. Ideal para ocasiones especiales o como fragancia personal.',
        family: 'Oriental',
        occasion: 'Noche / Especial',
        volume: '75 ml',
        price: '$70.00'
      },
      {
        src: '/undefined_image_8.png',
        alt: 'Perfume 7',
        description: 'Perfume elegante con una mezcla de especias exóticas, bergamota y un toque de flor de loto. Notas de salida: cardamomo y jengibre, notas de corazón: flor de loto y jazmín, notas de fondo: sándalo y cuero. Perfecto para la mujer moderna y sofisticada.',
        family: 'Especiado',
        occasion: 'Elegante / Noche',
        volume: '100 ml',
        price: '$85.00'
      },
      {
        src: '/undefined_image_9.png',
        alt: 'Perfume 8',
        description: 'Un perfume fresco con una mezcla de notas cítricas y florales, ideal para el uso diario en primavera o verano. Notas de salida: limón y pomelo, notas de corazón: jazmín y flor de naranjo, notas de fondo: almizcle y cedro. Aporta frescura y vitalidad.',
        family: 'Cítrico',
        occasion: 'Primavera / Casual',
        volume: '50 ml',
        price: '$42.00'
      },
      {
        src: '/undefined_image_10.png',
        alt: 'Perfume 9',
        description: 'Un perfume floral fresco con toques de cítricos y jazmín, ideal para un día de primavera. Notas de salida: mandarina y limón; notas de corazón: jazmín y peonía; notas de fondo: sándalo y almizcle. Perfecto para el uso diario o ocasiones relajadas.',
        family: 'Floral',
        occasion: 'Día a día',
        volume: '50 ml',
        price: '$40.00'
      }
    ];

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cartModalVisible, setCartModalVisible] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const openModal = (product) => {
        setSelectedProduct(product);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedProduct(null);
    };

    const openCartModal = () => {
        setCartModalVisible(true);
    };

    const closeCartModal = () => {
        setCartModalVisible(false);
    };

    const addToCart = (product) => {
      setCartItems((prevItems) => [...prevItems, product]); 
      setCartMessage('Producto agregado al carrito!');
      setTimeout(() => setCartMessage(''), 3000);  
    };

    const removeFromCart = (product) => {
        setCartItems((prevItems) => prevItems.filter(item => item !== product));
    };

    const [cartMessage, setCartMessage] = useState('');  
  
    

    return (
        <Context.Provider
            value={{
                productos,
                modalVisible,
                selectedProduct,
                openModal,
                closeModal,
                cartModalVisible,
                openCartModal,
                closeCartModal,
                cartItems,
                addToCart,
                settings,
                removeFromCart, 
                cartMessage 
            }}
        >
            {children}
        </Context.Provider>
    );
}

export { Context, ContextProvider };
