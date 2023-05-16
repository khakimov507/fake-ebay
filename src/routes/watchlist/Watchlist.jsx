import React from 'react'
import { useSelector } from 'react-redux'
import c from "./Watchlist.module.scss"

const Watchlist = () => {
  const storeData = useSelector(state => state)
  return (
    <>
      <div>
                <div className={c.limited__products}>
                    {
                        storeData.cart?.map(product =>
                            <div className={c.limited__products__card}>
                                <img src={product?.singleProduct.images[0]} alt="" />
                                <h2>{product?.singleProduct.title}</h2>
                                <p>Price: ${product?.singleProduct.price}</p>
                                <h3>{product?.singleProduct.description}</h3>
                            </div>
                        )
                    }
                </div>
            </div>
    </>
  )
}

export default Watchlist