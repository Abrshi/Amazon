import React, { useContext, useState } from 'react';
import ProductsProps from '../../Components/Products/ProductsProps';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import payment from './payment.module.css';
import cartCss from '../Cart/Cart.module.css';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { axiosbaseurl } from '../../Api/axios';
import { ClipLoader } from 'react-spinners';
import { db } from '../../utility/firebase';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Payment() {
  // pay now loading state
  const [loader, setLoader] = useState(false);
  const [checkCard, setCheckCard] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate(); // Initialize navigate

  const [{ user, basket }] = useContext(DataContext);

  const total = basket?.length > 0 
    ? basket.reduce((accumulator, info) => accumulator + info.price * (info.amount || 1), 0)
    : 0;

  const handleCardError = (e) => {
    setCheckCard(e?.error?.message || '');
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoader(true);

    try {
      // Create the payment on the server
      const response = await axiosbaseurl({
        method: 'POST',
        url: `payment/create?total=${total * 100}`, // Convert total to cents
      });

      // Check for the client secret from the response
      const clientSecret = response.data?.clientsecret;
      if (!clientSecret) throw new Error('Client secret not found');

      console.log(clientSecret);

      // Confirm payment on the client side
      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement), // Pass the card details
        },
      });

      console.log('Payment successful:', paymentIntent);

      // Move the basket to orders and navigate to the orders page
      setLoader(false);
      try {
        await db
          .collection('users')
          .doc(user.uid)
          .collection('orders')
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        console.log("Order saved to Firestore");
      } catch (err) {
        console.error("Error saving order to Firestore:", err);
      }
      

      navigate('/orders'); // Navigate to the orders page
    } catch (error) {
      console.error('Payment error:', error);
      setCheckCard(error.message); // Display payment error
      setLoader(false);
    }
  };

  return (
    <div className={payment.outer}>
      <div className={payment.checkout}>
        Checkout ({basket.length}) items
      </div>
      <hr />
      <div className={`${payment.address} ${payment.flex}`}>
        <div>
          <h3>Delivery address</h3>
        </div>
        <div>
          <h4>{user?.email}</h4>
          <h4>React Lane</h4>
          <h4>Addis Ababa, Gergi</h4>
        </div>
      </div>
      <hr />
      <div className={`${payment.review} ${payment.flex}`}>
        <div>
          <h3>Review items and delivery</h3>
        </div>
        <div className={payment.mapmother}>
          {basket.map((info) => (
            <div key={info.id} className={`${cartCss.productItem} ${payment.productItem}`}>
              <ProductsProps data={info} />
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className={`${payment.flex}`}>
        <h3>Payment method</h3>
        <div className={payment.CardContainer}>
          <form onSubmit={handlePayment}>
            {checkCard && <small className={payment.cardError}>{checkCard}</small>}
            <CardElement onChange={handleCardError} />
            <div>
              <h3>Total Order</h3>
              <h4>${total}</h4>
              <button className={payment.payNow} type='submit'>
                {loader ? (
                  <div className={payment.loader}>
                    <ClipLoader size={15} color="#1a1414" /> <p>Please wait</p>
                  </div>
                ) : (
                  <div>Pay Now</div>
                )}
              </button>
            </div>
          </form>
          <span className={cartCss.subtotal}>Subtotal ({basket.length} items)</span> ${total}
        </div>
      </div>
    </div>
  );
}

export default Payment;
