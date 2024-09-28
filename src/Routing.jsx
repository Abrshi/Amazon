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
import Footer from './Components/Footer/Footer';
import FourO4 from './Components/FourO4/FourO4';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51Q0MSj08t7x8qBrheMm8UYrZH2D0MrGaVM3kgXxbcp8BkJyuNFKwznvDaWlbXFMm2PD109avwm49LIE6pLQZxpLd00GTHt8C6Y');
function Routing() {
  

  return (
    <div>
  
      <Header />
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/orders" element={<Orders />} />

        <Route path="/payment" element={
          <Elements stripe={stripePromise}>
          <Payment />
          </Elements>
          } />

        <Route path="/productDetail/:productId" element={<ProductDetail />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="*" element={<FourO4 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Routing;
