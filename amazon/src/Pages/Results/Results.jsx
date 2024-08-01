import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { baseUrl } from '../../Api/endPoint';
import axios from 'axios';
import Resultcss from './Result.module.css';
import { createTheme } from '@mui/material/styles';

import Spinners from '../../Components/Spinners/Spinners';
import ProductsProps from '../../Components/Products/ProductsProps';

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
  <div  className={Resultcss.flex}>
            {
                results.map((info) => (
                  <ProductsProps data={info} />
                ))
              }
            </div>
       
  );
}

export default Results;
