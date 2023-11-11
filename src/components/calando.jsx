import React,{useState} from 'react'
import logo from '../assets/logo.png';
import cart from '../assets/cart.png';

import {AiOutlineSearch,AiFillCaretDown,AiFillCaretUp,AiOutlineClose,AiTwotoneMail,AiOutlineMenu,AiOutlineShoppingCart} from 'react-icons/ai';
import { IoNotifications } from "react-icons/io5";


const Calando = () => {   
     const [nav, setNav] = useState(false);
     const [crt, setCrt] = useState(false);

     const handleCrt = () => {
      setCrt(!crt);
    };

  const handleNav = () => {
    setNav(!nav);
  };
  return (

    <div className='flex-col px-2 '>
    <div className='flex justify-between items-center h-[80px]  max-w-full mx-auto  -my-2 md:hidden mx-auto  text-black'>
        <div className='flex items-center  '>
           <img src={logo} className='w-full w-[158px] h-16 -z-10 '  alt="" />
           </div>
     
<div className='flex items-center h-[80px] '>

<div  onClick={handleCrt}  className='flex-col   items-center hover:bg-[#EFEFEF] cursor-pointer p-2  '>
<div className='items-center my-4 '><AiOutlineShoppingCart className='h-8 min-w-[37px] '></AiOutlineShoppingCart></div>
     
      
  </div>



      <div onClick={handleNav} className='block md:hidden'>
      {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
</div>
<div className= {nav ? 'fixed z-50   left-32 top-16 w-[70%] bg-white h-full border-r border-r-gray-900  ease-in-out duration-500' : 'ease-in-out duration- fixed left-[100%]'}>
<h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 text-black'>REACT.</h1> 

  <ul className='uppercase '>
    <li className='p-4 border-b border-b-gray-600 ' >Home</li>
     <li className='p-4 border-b border-b-gray-600'>Company</li>
     <li className='p-4 border-b border-b-gray-600'>Resources</li>
     <li className='p-4 border-b border-b-gray-600'>About</li>
     <li className='p-4 '>Contact</li>
     <li className='p-4 border-b border-b-gray-600 ' >Home</li>
     <li className='p-4 border-b border-b-gray-600'>Company</li>
     <li className='p-4 border-b border-b-gray-600'>Resources</li>
     <li className='p-4 border-b border-b-gray-600'>About</li>
     <li className='p-4 '>Contact</li>
</ul>
</div>

    </div>

    </div>
    <div className={nav? 'w-full h-[100vh] bg-black bg-opacity-60' : 'bg-transparent'}>

    <div className='  flex w-full  inline-block -z-10 relative md:hidden mx-auto max-w-[757px] min-w-[300px] items-center items-stretch   ring ring-[#C7C5C1] ring-1 hover:ring-4 hover:ring-gray-800   h-10  rounded-sm  '>
           <button className='h-10 rounded-sm bg-[#EFEFEF] p-2 py-2'>
           <AiOutlineSearch size={20}></AiOutlineSearch>
            </button>
           <input className='h-10 w-full pointer-events-none   bg-[#EFEFEF] justify-start text-[#B0ACAC]' placeholder='Search for sour gear'></input>
           </div>
    </div>
    </div>
    
  )
}
export default Calando;