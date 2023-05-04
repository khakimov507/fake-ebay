import React from 'react'
import c from "./Information.module.scss"
import productImage1 from "../../assets/products.png"
import EbayLogo from "../../assets/productsLogo.png"
import {FiArrowRight} from "react-icons/fi"
import productImage2 from "../../assets/productsImage.png"
import { Link } from 'react-router-dom'

const Information = () => {
  return (
    <div className={c.information__container}>
        <div className={c.information__wrapper}>
            <div className={c.information__notes}>
               <p>Featured</p>
               <img src={EbayLogo} alt="" />
               <h3>Deals made easy all year long.</h3>
               <p className={c.information__paragraph}>Free shipping. Best prices.</p>
               <Link to={"/product/2"}><h2 className={c.btn__item}>Get your thing <FiArrowRight/></h2></Link>
            </div>
            <img src={productImage1} alt="" />
        </div>
        <img src={productImage2} alt="" />
    </div>
  )
}

export default Information