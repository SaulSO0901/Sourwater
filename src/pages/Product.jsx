import React from 'react'


import Navbar from '../components/Navbar'
import Header from '../components/Header'
import MBNavbar from '../components/MBNavbar'
import ProductSum from '../components/ProductSum'
import TopNew from '../components/TopNew';
import ProductDesc from '../components/ProductDesc'

import Footer from '../components/Footer'

const Product = () => {
  return (
    <div>
        <Navbar/>
        <MBNavbar/>
        <Header/>
        
        <ProductSum/>
        <TopNew/>
        <ProductDesc/>
    
     
        <Footer/>
    </div>
  )
}

export default Product