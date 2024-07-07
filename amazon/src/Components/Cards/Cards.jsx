import React from 'react';
import cards from './cards.module.css'; // Import the CSS module correctly
import Cardsprops from './cardsprops';
import { catagoryInfo } from './catagoryInfo';

function Cards() {
  return (
    <div className={cards.elements}>
      {
        catagoryInfo.map((info, index) => (
          <Cardsprops key={index} data={info} />
        ))
      }
    </div>
  );
}

export default Cards;
