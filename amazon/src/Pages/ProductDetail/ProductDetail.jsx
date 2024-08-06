import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailcss from './ProductDetail.module.css';
import { baseUrl } from '../../Api/endPoint';
import ProductsProps from '../../Components/Products/ProductsProps';

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
        <ProductsProps
          data={product} 
          addToCart="add"
        />
      ) : (
        <div>Loading...</div> // Or a spinner/loading indicator if you have one
      )}
    </div>
  );
}

export default ProductDetail;
