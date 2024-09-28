import React, { useContext ,useState } from 'react';
import ProductsProps from '../../Components/Products/ProductsProps';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import payment from './payment.module.css'
import cartCss from '../Cart/Cart.module.css';
import {useStripe, useElements,CardElement} from '@stripe/react-stripe-js';


function Payment() {



  const stripe = useStripe();
  const elements = useElements();

  // const [{basket}]=useContext(DataContext)
  const [{ user }, dispatch] = useContext(DataContext);
  const [{ basket }, dispatchh] = useContext(DataContext);
 
  const [{ baskett }, dispatc] = useContext(DataContext);

  
  const total = basket?.length > 0 
  ? basket.reduce((accumulator, info) => accumulator + info.price * (info.amount || 1), 0)
  : 0;

  console.log(total);
  


  const [chakeCard , setChakeCard]=useState('')
const chakeErr = (e)=>{
      
      e?.error?.message? setChakeCard(e.error.message) : setChakeCard('')
      console.log(chakeCard);
      
}
   return (
    <div className={payment.outer}>
     <div className={`${payment.chakout} `}>
     checkout ({basket.length}) ithems
     </div><hr />
     <div className={`${payment.address} ${payment.flex}`}>
        <div><h3>Delivery address</h3></div>
     <div> 
        <h4>{ user?.email}</h4>
        <h4>React Lane</h4>
        <h4>Addis Abeba , gergi</h4>
      </div>
       </div><hr />
       <div className={`${payment.Review} ${payment.flex}`}>
          <div>
            <h3>Review ithems and delivery</h3>
          </div>
          <div className={payment.mapmother} >
          {basket.map((info) => (
              <div key={info.id} className={`${cartCss.productItem} ${payment.productItem}`}>
                <ProductsProps
                  data={info}
                  
                />
                
              </div>
            ))}
          </div>
       </div><hr/>
       <div className={`${payment.flex}`}>
           <h3>Payment methed </h3>
           <div className={payment.CardContener}>
            <form action="">
              {chakeCard && <small className={payment.carederr}>{chakeCard}</small>}
              <CardElement onChange={chakeErr}/>
              <div>
                  <h3>Total Order ||</h3> 
                  <h4>${total}</h4> 
                  <button className={payment.payNow}> Pay Now </button>
               </div>
             
            </form>
            <span className={cartCss.subtotal}>Subtotal ({basket.length} items) </span>${total}
            
           </div>
                   </div>

    </div>
  )
}

export default Payment