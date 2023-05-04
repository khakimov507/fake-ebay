import React from 'react'
import { useSelector } from 'react-redux'
import c from "./Cart.module.scss"
const Cart = () => {
    const storeData = useSelector(state => state)
    const ProductPrices = storeData.cart?.map(i => +i.singleProduct.price)
    const total = ProductPrices.reduce((a, b) => a + b, 0)
    console.log(total)
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
                <div className={c.total}>
                    <h3 className={c.total__price}>Total Price: ${total}</h3>
                </div>
            </div>

        </>
    )
}

export default Cart