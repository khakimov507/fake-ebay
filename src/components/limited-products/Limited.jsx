import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import c from "./Limited.module.scss"
import { Link } from 'react-router-dom'

const Limited = () => {
    const [limitedProducts, setLimitedProducts] = useState([])
    useEffect(() => {
        axios("https://api.escuelajs.co/api/v1/products?offset=0&limit=10")
            .then(response => setLimitedProducts(response.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <div className={c.limited__products}>
                {
                    limitedProducts.map(limitedCards =>
                        <div className={c.limited__products__card}>
                            <Link to={"/product/1"}><img src={limitedCards.images[0]} alt="" />
                                <h2>{limitedCards.title}</h2>
                                <p>Cost: ${limitedCards.price}</p>
                                <h3>{limitedCards.description}</h3>
                            </Link>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Limited