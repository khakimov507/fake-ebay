import React from 'react'
import Banner from '../../components/banner/Banner'
import AllCategories from '../../components/all-categories/AllCategories'
import Information from '../../components/information-section/Information'
import Limited from '../../components/limited-products/Limited'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
        <Banner/>
        <AllCategories/>
        <Information/>
        <Limited/>
        <Footer/>
    </div>
  )
}

export default Home