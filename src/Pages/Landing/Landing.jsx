import React from 'react'
import Cards from '../../Components/Cards/Cards'
import Carouseleffect from '../../Components/Carousel/Carouseleffect'
import Products from '../../Components/Products/Products'
import LayOut from '../../Components/LayOut/LayOut'

function Landing() {
  return (
    
    <LayOut>
    <Carouseleffect /> 
    <Cards />
    <Products />
    </LayOut>
  )
}

export default Landing