import React from 'react';
import cards from './cards.module.css';
import { Link } from 'react-router-dom';
function Cardsprops({ data }) { 
  return (
    <div className={cards.cardes_div}>
     
    <span>
    <h2 className={cards.h2}>{data.title}</h2>
  </span>
      <Link to={`/category/${data.title}`} className={cards.a}>
    
     <span>
       <img className={cards.img} src={data.image} alt={data.title} />
     </span>
     <span>
       <p className={cards.p}>Buy now</p>
     </span>
    </Link>
   </div>
   
  );
}

export default Cardsprops;
