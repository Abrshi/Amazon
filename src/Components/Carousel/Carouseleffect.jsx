import React from 'react';
import Carouseleffectcss from './Carousel.module.css';
import { Carousel } from 'react-responsive-carousel';
import { imgs } from './imgs/imgs.js';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Add this line to import the carousel's CSS

function Carouseleffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {
          imgs.map((imglink, index) => {
            return (
              <img src={imglink} key={index} alt={`slide-${index}`} />
            )
          })
        }
      </Carousel>
<div className={Carouseleffectcss.hero_img}></div>
    </div>
  )
}

export default Carouseleffect;
