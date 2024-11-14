import React from 'react';
import './App.css';
import { Navbar } from './navbar/Navbar';

import { Home } from './home/Home';
import { About } from './about/About';
import { Contact } from './contact/Contact'; 
import { ContextProvider } from './context/Context'; 
 import {Products} from './products/Products'

function App() {
  return (
    <ContextProvider>
      
      <React.Fragment >
        
        <Navbar />
        <Home />
        <Products/>
        <About />
        <Contact />
        
      </React.Fragment>
   
      
    </ContextProvider>
  );
}

export default App;
