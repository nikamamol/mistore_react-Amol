import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PreNavbar from './Components/PreNavbar'
import './App.css'
import jsondata from './data/data.json'
import Navbar from './Components/Navbar'
import Slider from './Components/Slider'
import Offers from './Components/Offers'
import Heading from './Components/Heading'
import StarProduct from './Components/StarProduct'
import HotAccessoriesMenu from './Components/HotAccessoriesMenu'
import HotAccessories from './Components/HotAccessories'
import ProductReviews from './Components/ProductReviews'
import Videos from './Components/Videos'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import NavOptios from './Components/NavOptios'

const App = () => {
  return (
    <>
      <Router>
        <PreNavbar />
        <Navbar />
        <NavOptios miPhones={jsondata.miPhones} redmiPhones={jsondata.redmiPhones} tv={jsondata.tv} laptop={jsondata.laptop} fitnessAndLifeStyle={jsondata.fitnessAndLifeStyle} home={jsondata.home} audio={jsondata.audio} accessories={jsondata.accessories} />
        <Slider start={jsondata.banner.start} />
        <Offers offer={jsondata.offer} />
        <Heading text={'STAR PRODUCTS '} />
        <StarProduct starproduct={jsondata.starProduct} />
        <Heading text={'HOT ACCESSORIES '} />
        <HotAccessoriesMenu />
        <Routes>
          <Route path='/music' element={<HotAccessories music={jsondata.hotAccessories.music} musicCover={jsondata.hotAccessoriesCover.music} />} />
          <Route path='/smartDevice' element={<HotAccessories smartDevice={jsondata.hotAccessories.smartDevice} smartDeviceCover={jsondata.hotAccessoriesCover.smartDevice} />} />
          <Route path='/home' element={<HotAccessories home={jsondata.hotAccessories.home} homeCover={jsondata.hotAccessoriesCover.home} />} />
          <Route path='/lifestyle' element={<HotAccessories lifeStyle={jsondata.hotAccessories.lifeStyle} lifeStyleCover={jsondata.hotAccessoriesCover.lifeStyle} />} />
          <Route path='/mobileAccessories' element={<HotAccessories mobileAccessories={jsondata.hotAccessories.mobileAccessories} mobileAccessoriesCover={jsondata.hotAccessoriesCover.mobileAccessories} />} />
        </Routes>
        <Heading text={'PRODUCT REVIEW'} />
        <ProductReviews ProductReviews={jsondata.productReviews} />
        <Heading text='VIDEOS' />
        <Videos Videos={jsondata.videos} />
        <Heading text='IN THE PRESS' />
        <Banner banner={jsondata.banner} />
        <Footer footer={jsondata.footer} />
      </Router>

    </>
  )
}

export default App