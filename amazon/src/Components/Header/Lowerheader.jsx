import React from 'react'
import styles from './Lowerheader.module.css';
import { IoIosMenu } from "react-icons/io";
function Lowerheader() {
  return (
    <div  className={styles.first}>
     <ul  className={styles.ul}>
     <li><a href='#'><span><IoIosMenu size={30}/></span> <span className={styles.all}>All</span></a></li>
     <li><a href='#'>Today's Deals</a></li>
     <li><a href='#'>Customer Service </a></li>
     <li><a href='#'>Registry</a></li>
     <li><a href='#'>Gift Careds</a></li>
     <li><a href='#'>Sell</a></li>
    
     
     </ul>
    </div>
  )
}

export default Lowerheader