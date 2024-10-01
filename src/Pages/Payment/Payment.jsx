import React, { useContext ,useState } from 'react';
import ProductsProps from '../../Components/Products/ProductsProps';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import payment from './payment.module.css'
import cartCss from '../Cart/Cart.module.css';
import {useStripe, useElements,CardElement} from '@stripe/react-stripe-js';
import {axiosbaseurl} from '../../Api/axios'
import { MoonLoader } from 'react-spinners';
function Payment() {

// pay now looding state
    
  const [loder ,setLoder]=useState(false)

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


const habdelPayment= async (e)=>{
  setLoder(true)

e.preventDefault()
// contact back end 
try {
  const respons = await axiosbaseurl({
    method:"POST",
    url:`payment/create?total=${total*100}`
  })
  
  const clientsecret=respons.data?.clientsecret
  console.log(clientsecret);

// conferm clint side

  const confirmation = await stripe.confirmCardPayment(
    clientsecret,
  {
    payment_method: {
    card: elements.getElement(CardElement)
        }
      });
      console.log(confirmation)
      setLoder(false)
  // move the basket file to the order or to the order and clare the basket


} catch (error) {
  setLoder(false)
}

 






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
            <form onSubmit={habdelPayment}>
              {chakeCard && <small className={payment.carederr}>{chakeCard}</small>}
              <CardElement onChange={chakeErr}/>
              <div>
                  <h3>Total Order ||</h3> 
                  <h4>${total}</h4> 
                  
                 
                  {
                  loder ? <div className={payment.loader}><MoonLoader size={30}  color="#1a1414" /> <p>Plisse wait</p></div>:
                  
                  <div> <button className={payment.payNow} type='submit'> Pay Now   </button>

                  </div>
                }
        
                


               </div>
             
            </form>
            <span className={cartCss.subtotal}>Subtotal ({basket.length} items) </span>${total}
            
           </div>
                   </div>

    </div>
  )
}

export default Payment