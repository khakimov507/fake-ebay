import React from 'react'
import Container from "../../utils/Components"
import footer from "../../assets/footermainpage.png"
import c from "./Footer.module.scss"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className={c.main__footer}>
            <hr />
            <Link to={"/product/3"}>
                <img src={footer} alt="" />
            </Link>
        </div>
    )
}

export default Footer