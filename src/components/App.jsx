
//import logo from './logo.jpg';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import { getProductos } from './Utils/Firebase';

import { CarritoProvider } from '../context/CarritoContext';


import { ToastContainer } from 'react-toastify';

//Components

import { Header } from './Header/Header';
import { NavBar } from './NavBar/NavBar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Checkout } from './Checkout/Checkout';
import { Cart } from './Cart/Cart';

export const App = () => {

  //cargarBDD()
  //getProductos()
  return (

    <>
      <BrowserRouter>
        <CarritoProvider>
          <Header/>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:slug' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/category/' element={<ItemListContainer />} />
          </Routes>
          <ToastContainer />
        </CarritoProvider>
      </BrowserRouter>
    </>

  );
}

