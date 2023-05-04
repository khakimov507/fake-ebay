import React from 'react'
import Container from "../../utils/Components"
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import c from "./AllCategories.module.scss"
import {FiArrowRight} from "react-icons/fi"

const AllCategories = () => {
    const [categoriesData, setCategoriesData] = useState([])
    useEffect(() => {
        axios("https://api.escuelajs.co/api/v1/categories")
            .then(response => setCategoriesData(response.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <Container>
                <div className={c.main__container__item}>
                    <div className={c.header__options}>
                        <h2 className={c.category__item__heading}>Score these trending kicks</h2>
                        <p>See all</p>
                        <FiArrowRight/>
                    </div>
                    <div className={c.allcategories__container}>
                        {
                            categoriesData.map(category =>
                                <Link className={c.category__item} to={`/product/${category.id}`}>
                                    <div className={c.category__item__image}>
                                        <img src={category.image} alt="" />
                                    </div>
                                    <h2>{category.name}</h2>
                                </Link>
                            )
                        }
                    </div>
                </div>
            </Container>
        </>
    )
}

export default AllCategories