import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import c from "./SingleProduct.module.scss"
import { FiHeart } from "react-icons/fi"
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';

const SingleProduct = () => {
  const storeData = useSelector(state => state)
  const dispatch = useDispatch();
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState(null)
  useEffect(() => {
    axios(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then(response => setSingleProduct(response.data))
      .catch(err => console.log(err))
  }, [])


  const CartProduct = (singleProduct) => {
    dispatch({product: {singleProduct}, type: "CARTED_PRODUCT"})
  }

  return (
    <>
      <div className={c.single_product_container}>
        {
          singleProduct?.images ?
            <div className={c.single_product}>
              <img src={singleProduct.images[0]} alt="" />
              <div className={c.single_product_item}>
                <h2>{singleProduct.title}</h2>
                <p>Price :${singleProduct.price}</p>
                <h3>{singleProduct.description}</h3>
                <button onClick={()=> CartProduct(singleProduct)} className={c.btn_cart}>Add to Cart</button>
                <button className={c.btn_watchlist}><FiHeart/>Add to Watchlist</button>
              </div>
            </div>
            :
            <></>
        }
      </div>
    </>
  )
}

export default SingleProduct