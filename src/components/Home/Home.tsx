import React from 'react'
import Header from "../Header/Header"
import ProductBreadcrumb from '../ProductBreadcrumb/ProductBreadcrumb'
import Hero from '../Hero/Hero'
import SocialPortfolio from '../SocialPortfolio/SocialPortfolio'
const Home = () => {
  return (
    <div>
        <Header />
        <ProductBreadcrumb />
        <Hero />
        <SocialPortfolio />
    </div>
  )
}

export default Home