import React from 'react';
import Rating from '@mui/material/Rating';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import productscss from './Products.module.css';

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
  return (
    <ThemeProvider theme={theme}>
      <div className={productscss.outer}>
        <div className={productscss.img}>
          <img src={data.image} alt="product" />
        </div>
        <div className={productscss.title}>
          <p>{data.title}</p>
        </div>
        <div className={productscss.rating}>
          <span className={productscss.rate}>
            <Rating value={data.rating.rate} precision={0.1} />
          </span>
        </div>
        <div className={productscss.price}>
          {data.price}
        </div>
        <button className={productscss.button}>add to cart</button>
      </div>
    </ThemeProvider>
  );
}

export default ProductsProps;
