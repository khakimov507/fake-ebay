import React from 'react'
import c from "./Banner.module.scss"
import bannerImage from "../../assets/banner.png"
import announcementImage from "../../assets/annuncement.png"
import { AiFillHeart } from "react-icons/ai"
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
      <div className={c.features}>
        <ul className={c.features__options}>
            <Link to={"/"}><li>Home</li></Link>
            <li><AiFillHeart/> Saved</li>
            <li>Motors</li>
            <li>Electronics</li>
            <li>Collectibles</li>
            <li>Home & Garden</li>
            <li>Fashion</li>
            <li>Toys</li>
            <li>Sporting Goods</li>
            <li>Business & Industrial</li>
            <li>Jewelry & Watches</li>
            <li>eBay Live</li>
            <li>Refurbished</li>
        </ul>
      </div>
        <section className={c.banner}>
          <Link to={"/product/1"}><img src={bannerImage} alt="" /></Link>
          <img className={c.announcement__image} src={announcementImage} alt="" />
        </section>
    </>
  )
}

export default Banner