import React from 'react'
import Header from './pages/Header'
import Home from "./pages/Home"
import FoodDiscount from './pages/FoodDiscount'
import Work from './pages/Work'
import PopularItem from './pages/PopularItem'
import FeaturedRestaurants from './pages/FeaturedRestaurants'
import SearchByFood from './pages/SearchByFood'
import AppInstallAd from './pages/AppInstallAd'
import CardAd from './pages/CardAd'
import FooterAD from './pages/FooterAD'
import Footer from './pages/Footer'


const App = () => {
  return (
    <>
      <Header/>
      <Home/>
      <FoodDiscount/>
      <Work/>
      <PopularItem/>
      <FeaturedRestaurants/>
      <SearchByFood/>
      {/* <AppInstallAd/> */}
      <CardAd/>
      <FooterAD/>
      <Footer/>
    </>
  )
}

export default App