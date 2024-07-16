import React from 'react';
import styles from './Header.module.css';
import Lowerheader from './Lowerheader'
import { IoLocationOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { BiCart } from "react-icons/bi";

function Header() {
  return (
    <div className={styles.first}>
    
    <header className={styles.header}>
      {/* first div */}
      <div  className={styles.header_first}>
        {/* amazon logo */}
        <a href="#" className={styles.a}>
        <div className={styles.header_first_first}>
         <img  className={styles.amazon_logo} src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" atr="amazon logo" />
        </div>
        </a>
        <a href="#" className={styles.a}>    
        <div  className={styles.header_first_second}>
          <span className={styles.location_conen}><IoLocationOutline /></span>
          <div>
       <span className={styles.header_small_font}>Deliveredto</span><br/>
        <span className={styles.country}>Ethiopia</span>
       
          </div>
        </div>
        </a>
      </div>

      {/* second div */}
      <div className={styles.header_second}>
        <div className={styles.header_second_first_dropdoun}>
          {/* all dropdown */}
          <select>
            <option value="all">All</option>
            <option value="actual value 2">Display Text 2</option>
            <option value="actual value 3">Display Text 3</option>
            <option value="actual value 2">Display Text 2</option>
            <option value="actual value 3">Display Text 3</option>
          </select>
        </div>
        <div className={styles.header_second_first_search}>
          {/* search */}
          <input type="text" placeholder="Search Amazon" />
          <button><IoIosSearch /></button>
        </div>
      </div>

      {/* third div */}
      <div className={styles.header_thered}>
      <a href="#" className={styles.a}>
        <div  className={styles.header_thered_first }>
        
        <span><img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/120px-Flag_of_the_United_States.svg.png?20151118161041" atr="flag"/></span>
        <span>EN</span>
        
        </div>
        </a>
        <a href="#" className={styles.a}>
        <div className={styles.header_thered_second}>   
          
          <span className={styles.header_small_font}>Hello, sign in</span><br/>
          <span>Account & List</span>
         
        </div>
        </a>

        <a href="#" className={styles.a}>
        <div  className={styles.header_thered_thered}>
          
          
          <span className={styles.header_small_font}>Returns</span><br/>
          <span>& Order</span>
          
        </div>
        </a>
        <div  className={styles.header_thered_forth}>
         <a href="#" className={styles.a}>
         <div><span className={styles.header_thered_forth_cartno}>0</span><br/>
        <span className={styles.header_header_thered_cartlogo}> <BiCart size={45}/ ></span>
         </div>
         <span>cart</span>
         </a>
        </div>
      </div>
      
    
    </header>
    
    
    <Lowerheader />
    </div>
  );
}

export default Header;
