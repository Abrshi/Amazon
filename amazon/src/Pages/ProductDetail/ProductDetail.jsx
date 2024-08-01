import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailcss from './ProductDetail.module.css';
import Rating from '@mui/material/Rating';
import { baseUrl } from '../../Api/endPoint';
import Spinners from '../../Components/Spinners/Spinners';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import { Type } from '../../utility/action.type';

function ProductDetail() {




  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`${baseUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productId]);





  const { image, title, id, rating, price, description } = {product};
  const [state, dispatch] = useContext(DataContext);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET, // Corrected action type
      item: { image, title, id, rating, price, description }
    });
  };





  return (
    <div>
      <div className={ProductDetailcss.titleDiv}>
      <h1 className={ProductDetailcss.Results}>Results</h1>
         
        <hr />
      </div>
      {product ? (
        <div className={ProductDetailcss.flex}>
          <div className={ProductDetailcss.outer}>
            <div  className={ProductDetailcss.flexbox}>
            <div className={ProductDetailcss.img}>
            <img src={product.image} alt="product" />
          </div>
            <div>
            
              <div className={ProductDetailcss.title}>
            <p>{product.title}</p> 
            <p>{product.description}</p>
            </div>
            <div className={ProductDetailcss.rating}>
              <span className={ProductDetailcss.rate}>
                <Rating value={product.rating.rate} precision={0.1} readOnly />
              </span>
            </div>
            <div className={ProductDetailcss.price}>
              ${product.price}
            </div>
            <button className={ProductDetailcss.button} onClick={addToCart}>Add to cart</button>
            
            </div>
            </div>
          
          </div>
        </div>
      ) : (
        <p>
        
        <Spinners/>
        
        </p>
      )}
    </div>
  );
}

export default ProductDetail;
