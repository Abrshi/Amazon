import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductsProps from './ProductsProps'

import productscss from './Products.module.css';
function Products() {
    const [products, setProducts] = useState([])
    useEffect (() => {
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{ 
        setProducts (res.data)
        }, [])})
        return (
            <div  className={productscss.flex}>
            {
                products.map((info) => (
                  <ProductsProps 
                  data={info} 
                  addToCart="add"
                  />
                ))
              }
            </div>
            )
            }  
export default Products