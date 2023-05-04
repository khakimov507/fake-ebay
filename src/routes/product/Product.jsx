import React from 'react'
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import c from "./Product.module.scss"

const Product = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    axios(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
      .then(response => setData(response.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <div className={c.limited__products}>
      {
        data?.map(product =>
          <Link to={`/product/${product.id}/single`}>
            <div className={c.limited__products__card}>
              <img src={product?.images[0]} alt="" />
              <h2>{product?.title}</h2>
              <p>Price: ${product?.price}</p>
              <h3>{product?.description}</h3>
            </div>
          </Link>
        )
      }
    </div>
  )
}

export default Product