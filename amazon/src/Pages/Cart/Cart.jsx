import React, { useContext } from 'react';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import ProductsProps from '../../Components/Products/ProductsProps';
import cartCss from './Cart.module.css';
import { Type } from '../../utility/action.type'; // Adjust this import based on your actual file path
import { SlArrowUp } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
function Cart() {
  const [{ basket }, dispatch] = useContext(DataContext);

  // Calculate total price
  const total = basket.reduce((accumulator, info) => accumulator + info.price * (info.amount || 1), 0);
  console.log(total);

  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item
    });
  };

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id // Pass the item id to the action
    });
  };

  return (
    
    <section className={cartCss.cartSection}>
    
      <div className={cartCss.header}>
        <h2>Hello</h2><br/>
        <h3>Your shopping basket</h3>
        <br/>
        <hr/>
        <br/>
      </div>
      {basket.length !== 0 ? (
        <div className={cartCss.flex}>
          <div className={cartCss.products}>
            {basket.map((info) => (
              <div key={info.id} className={cartCss.productItem}>
                <ProductsProps
                  data={info}
                  addToCart="remove"
                  cart="cart"
                />
                <div className={cartCss.upAndDown}>
                  <button onClick={() => increment(info)}   className={cartCss.btn}><SlArrowUp  /></button><br/>
                  <span>{info.amount}</span>
                  <button onClick={() => decrement(info.id)}  className={cartCss.btn}><SlArrowDown/></button>
                </div>
              </div>
            ))}
          </div>
          <div className={cartCss.checkout}>
            <br/>
            <span className={cartCss.subtotal}>Subtotal ({basket.length} items) ${total.toFixed(2)}</span>
            
            <form>
              <label className={cartCss.checkbox}>
                <br/>
                <input type="checkbox" value="gift" />
                This order contains a gift
                <br/>
              </label>
              <button type="submit" className={cartCss.button}>Continue to Checkout</button>
            </form>
          </div>
        </div>
      ) : (
        <h2>Your basket is empty</h2>
      )}
    </section>
  );
}

export default Cart;
