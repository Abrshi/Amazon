import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import Auth from './Pages/Auth/Auth';
import Orders from './Pages/Orders/Orders';
import Payment from './Pages/Payment/Payment';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Results from './Pages/Results/Results';
import Cart from './Pages/Cart/Cart';
import Header from './Components/Header/Header';
import Stat from './Components/State/Stat';

function Routing() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/cart" element={<Stat />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/productDetail/:productId" element={<ProductDetail />} />
        <Route path="/category/:categoryName" element={<Results />} />
      </Routes>
    </div>
  );
}

export default Routing;
