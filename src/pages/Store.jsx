import {React,useEffect} from 'react'
import Catalog from '../components/Catalog'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import MBNavbar from '../components/MBNavbar'
import Footer from '../components/Footer'

const Store = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

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