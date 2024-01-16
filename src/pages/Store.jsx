import React from 'react'
import Catalog from '../components/Catalog'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import MBNavbar from '../components/MBNavbar'
import Ads from '../components/Ads'
import Footer from '../components/Footer'

const Store = () => {
  return (
    <div className=''>
        <Navbar/>
        <MBNavbar/>
        <Header/>

      <div className='md:px-4'>
        <Catalog/>
      </div>
      
        <Footer/>
    </div>
  )
}

export default Store