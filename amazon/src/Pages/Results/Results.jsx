import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { baseUrl } from '../../Api/endPoint';
import axios from 'axios';
import Resultcss from './Result.module.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Rating from '@mui/material/Rating';

import { Link } from 'react-router-dom';
import Spinners from '../../Components/Spinners/Spinners';
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

function Results() {
  const { categoryName } = useParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${baseUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setLoading(false);
        console.log(res.data);
      }).catch((err) => {
        setError(err.message);
        setLoading(false);
        console.log(err);
      });
  }, [categoryName]);

  if (loading) {
    return <div>
    <Spinners/>
    </div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (


    <ThemeProvider theme={theme}>
      <div>
        <div className={Resultcss.titleDiv}>
          <h1 className={Resultcss.Results}>Results</h1>
          <p className={Resultcss.Category}>Category / {categoryName}
          
          </p>
          <hr/>
        </div>
        <div className={Resultcss.flex}>
        {results.length === 0 ? (
          <div>No results found</div>
        ) : (
          
          results.map((result) => (
  
            <div key={result.id} className={Resultcss.outer}>
            <Link to={`/productDetail/${result.id}`}>
              <div className={Resultcss.img}>
              
                <img src={result.image} alt="product" />
              </div>
              <div className={Resultcss.title}>
                <p>{result.title}</p>
              </div>
              <div className={Resultcss.rating}>
                <span className={Resultcss.rate}>
                  <Rating value={result.rating.rate} precision={0.1} />
                </span>
              </div>
              <div className={Resultcss.price}>
                {result.price}
              </div>
              </Link>
              <button className={Resultcss.button}>Add to cart</button>
            </div>
          ))
        )}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Results;
