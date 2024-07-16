import React from 'react'
import styles from './Lowerheader.module.css';
import { IoIosMenu } from "react-icons/io";
function Lowerheader() {
  return (
    <div  className={styles.first}>
     <ul  className={styles.ul}>
     <li><a href="#" className={styles.a}><span><IoIosMenu size={30}/></span> <span className={styles.all}>All</span></a></li>
     <li><a href="#" className={styles.a}>Today's Deals</a></li>
     <li><a href="#" className={styles.a}>Customer Service </a></li>
     <li><a href="#" className={styles.a}>Registry</a></li>
     <li><a href="#" className={styles.a}>Gift Careds</a></li>
     <li><a href="#" className={styles.a}>Sell</a></li>
    
     
     </ul>
    </div>
  )
}

export default Lowerheader