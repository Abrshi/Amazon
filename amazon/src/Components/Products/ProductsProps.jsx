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

function ProductsProps({ data }) {
  const { image, title, id, rating, price, description } = data;
  const [state, dispatch] = useContext(DataContext);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET, // Corrected action type
      item: { image, title, id, rating, price, description }
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={productscss.outer}>
        <Link to={`/productDetail/${id}`}>
        <div className={ProductDetailcss}>
                  <div className={productscss.img}>
            <img src={image} alt={title} /> {/* Added alt text */}
          </div>
          <div>
          <div className={productscss.title}>
            <p>{title}</p>
          </div>
          <div className={productscss.rating}>
            <span className={productscss.rate}>
              <Rating value={rating.rate} precision={0.1} readOnly /> {/* Set readOnly for rating */}
            </span>
          </div>
          <div className={productscss.price}>
            {price}
          </div>
          </div>
          </div>

        </Link>
        <button className={productscss.button} onClick={addToCart}>Add to Cart</button> {/* Added onClick handler */}
      </div>
    </ThemeProvider>
  );
}

export default ProductsProps;
