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
        src: './tacon170.png',
        alt: 'Perfume 1',
        family: 'Tacon Blush',
        occasion: 'Día a día',
        volume: '50 ml',
        price: '$170.000'
      },
      {
        src: './badboy180.png',
        alt: 'Perfume 2',
        family: 'Bad Boy CH',
        occasion: 'Noches especiales',
        volume: '75 ml',
        price: '$180.000'
      },
      {
        src: './loewe180.png',
        alt: 'Perfume 3',
        family: 'Loewe Mujer',
        occasion: 'Verano / Casual',
        volume: '100 ml',
        price: '$180.000'
      },
      {
        src: './bulberry180.png',
        alt: 'Perfume 4',
        family: 'Burberry Hero',
        occasion: 'Eventos formales',
        volume: '100 ml',
        price: '$180.000'
      },
      {
        src: './bvlgari170.png',
        alt: 'Perfume 5',
        family: 'bvlgari man extreme',
        occasion: 'Todo el día',
        volume: '50 ml',
        price: '$160.000'
      },
      {
        src: './forglory100.png',
        alt: 'Perfume 6',
        family: 'aerosol for glory lattafa',
        occasion: 'Noche / Especial',
        volume: '75 ml',
        price: '$100.000'
      },
      {
        src: './bvlagryamethiste160.png',
        alt: 'Perfume 7',
        family: 'bvlgari amethyste',
        occasion: 'Elegante / Noche',
        volume: '100 ml',
        price: '$160.000'
      },
      {
        src: './lavidaesbella170.png',
        alt: 'Perfume 8',
        family: 'vida es bella perfume oui (NUEVA)',
        occasion: 'Primavera / Casual',
        volume: '50 ml',
        price: '$160.000'
      },{
        src: './italian140.png',
        alt: 'Perfume 1',
        family: 'italian zest man (NUEVA)',
        occasion: 'Día a día',
        volume: '50 ml',
        price: '$140.000'
      },


      {
        src: './10perfume140.png',
        alt: 'Perfume 1',
        family: 'light blue love man (NUEVA)',
        occasion: 'Día a día',
        volume: '50 ml',
        price: '$170.000'
      },
      {
        src: './11perfume170.png',
        alt: 'Perfume 2',
        family: 'Lacouste Rouge Men Mate',
        occasion: 'Noches especiales',
        volume: '75 ml',
        price: '$170.000'
      },
      {
        src: './12perfume160.png',
        alt: 'Perfume 3',
        family: 'bvlgari glacial men',
        occasion: 'Verano / Casual',
        volume: '100 ml',
        price: '$160.000'
      },
      {
        src: './13perfume160.png',
        alt: 'Perfume 4',
        family: 'Rose Extra 212 VIP',
        occasion: 'Eventos formales',
        volume: '100 ml',
        price: '$160.000'
      },
      {
        src: './14perfume160.png',
        alt: 'Perfume 5',
        family: 'Tacon Very Rosado',
        occasion: 'Todo el día',
        volume: '50 ml',
        price: '$160.000'
      },
      {
        src: './15perfume300.png',
        alt: 'Perfume 6',
        family: 'Penhaligons MEN',
        occasion: 'Noche / Especial',
        volume: '75 ml',
        price: '$300.000'
      },
      {
        src: './16perfume240.png',
        alt: 'Perfume 7',
        family: 'Replica Maison Martin ',
        occasion: 'Elegante / Noche',
        volume: '100 ml',
        price: '$240.000'
      },
      {
        src: './17perfume180.png',
        alt: 'Perfume 8',
        family: 'Burberry Her',
        occasion: 'Primavera / Casual',
        volume: '50 ml',
        price: '$180.000'
      },{
        src: './18perfume300.png',
        alt: 'Perfume 1',
        family: 'Sauvage Elixir Dior',
        occasion: 'Día a día',
        volume: '50 ml',
        price: '$300.000'
      },


      {
        src: './19perfume.png',
        alt: 'Perfume 2',
        family: 'Mancera Red Tobacco',
        occasion: 'Noches especiales',
        volume: '75 ml',
        price: '$300.000'
      },
      {
        src: './20perfume.png',
        alt: 'Perfume 3',
        family: 'Happy clinique Dama ',
        occasion: 'Verano / Casual',
        volume: '100 ml',
        price: '$140.000'
      },
      {
        src: './21perfume.png',
        alt: 'Perfume 4',
        family: 'Cartier Essence',
        occasion: 'Eventos formales',
        volume: '100 ml',
        price: '$140.000'
      },
      {
        src: './22perfume.png',
        alt: 'Perfume 5',
        family: 'Legend Red',
        occasion: 'Todo el día',
        volume: '50 ml',
        price: '$160.000'
      },
      {
        src: './23perfume.png',
        alt: 'Perfume 6',
        family: 'Davidoff Intense',
        occasion: 'Noche / Especial',
        volume: '75 ml',
        price: '$140.000'
      },
      {
        src: './24perfume.png',
        alt: 'Perfume 7',
        family: 'Nautica Vollage',
        occasion: 'Elegante / Noche',
        volume: '100 ml',
        price: '$160.000'
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
