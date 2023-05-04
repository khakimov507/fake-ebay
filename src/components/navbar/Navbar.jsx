import React from 'react'
import Container from "../../utils/Components"
import logo from "../../assets/logoEbay.png"
import c from "./Navbar.module.scss"
import { Link, useLocation } from 'react-router-dom'
import { FiBell, FiHeart, FiSearch, FiShoppingCart } from "react-icons/fi"

const Navbar = () => {
    const { pathname } = useLocation();
    return pathname.includes("/auth") ? <></> : (
        <div className={c.header}>
            <Container>
                <div className={c.menu__navbar}>
                    <div className={c.menu__list}>
                        <ul className={c.menu__item}>
                            <li>Hi!</li>
                            <Link to={"/auth/login"} className={c.menu__link}>
                               <li>Sign in</li>
                            </Link>   
                            <Link to={"/auth/login"} className={c.menu__link}>
                               <li>Register</li>
                            </Link>
                        </ul>
                        <ul className={c.menu__item}>
                            <li>Daily Deals</li>
                            <li>Brand Outlet</li>
                            <li>Help & Contact</li>
                        </ul>
                    </div>
                    <div className={c.menu__list__secondary}>
                        <ul className={c.menu__item__secondary}>
                            <li>Sell</li>
                            <Link to={"/watchlist"}><li className={c.watchlist__item}><FiHeart/>Watchlist</li></Link>
                            <li>My eBay</li>
                            <p className={c.menu__icons}>
                              <FiBell/>
                            </p>
                            <Link to={"/cart"} className={c.menu__icons}>
                              <FiShoppingCart/>
                            </Link>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className={c.menu__options}>
                    <Link to={"/"}><img src={logo} alt="" /></Link>
                    <p>Shop by <br />category</p>
                    <form className={c.form__svg}>
                        <FiSearch/>
                        <input className={c.menu__input} type="search" placeholder='Search for anything' />
                        <button className={c.menu__button}>Search</button>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default Navbar