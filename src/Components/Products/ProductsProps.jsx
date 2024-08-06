import React, { useContext } from 'react';
import Rating from '@mui/material/Rating';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import productscss from './Products.module.css';
import ProductDetailcss from '../../Pages/ProductDetail/ProductDetail.module.css';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import { Type } from '../../utility/action.type';

// Define a custom theme with overrides for Rating component




const theme = createTheme({
  components: {
    MuiRating: {
      styleOverrides: {
        iconFilled: {
          color: '#f0c14b', // Amazon's star color
        },
        iconEmpty: {
          color: '#ccc', // Color for empty stars
        },
      },
    },
  },
});

function ProductsProps({ data, addToCart,cart }) {
  // Ensure that addToCart is properly destructured
  const { image, title, id, rating, price, description } = data;
  const [state, dispatch] = useContext(DataContext);

  const addToCarts = () => {
    dispatch({
      type: Type.ADD_TO_BASKET, // Corrected action type
      item: { image, title, id, rating, price, description }
    });
  };

  const remove = () => {
    dispatch({
      type: Type.REMOVE, // Ensure this action type is correct for removal
      item: { image, title, id, rating, price, description }
    });
  };

  return (
    <ThemeProvider theme={theme}>
    <div className={cart === "cart" ? `${productscss.outer} ${productscss.border}` : productscss.outer}>
        <Link to={`/productDetail/${id}`} className={productscss.link}>
          <div  className={cart === "cart" ? `${productscss.ProductDetailcss} ${productscss.wide}` : productscss.ProductDetailcss}>
            <div className={productscss.img}>
              <img src={image} alt={title} />
            </div>
            <div>
              <div className={productscss.title}>
              <p>{title}</p>
              <p className={cart === "cart" ? productscss.block : productscss.none}>{description}</p>
              
              </div>
              <div className={productscss.rating}>
                <span className={productscss.rate}>
                  <Rating value={rating.rate} precision={0.1} readOnly />
                </span>
              </div>
              <div className={productscss.price}>
                {price}
              </div>
            </div>
          </div>
        </Link>
        {addToCart === 'add' ? (
          <button className={productscss.button} onClick={addToCarts}>Add to Cart</button>
        ) : (
          <button className={productscss.button} onClick={remove}>Remove</button>
        )}
      </div>
    </ThemeProvider>
  );
}

export default ProductsProps;
