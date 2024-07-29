import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailcss from './ProductDetail.module.css';
import Rating from '@mui/material/Rating';
import { baseUrl } from '../../Api/endPoint';
import Spinners from '../../Components/Spinners/Spinners';

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
            <button className={ProductDetailcss.button}>Add to cart</button>
            
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
