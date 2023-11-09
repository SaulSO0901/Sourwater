import React,{useState} from 'react'
import logo from '../assets/logo.png';
import cart from '../assets/cart.png';

import {AiOutlineSearch,AiFillCaretDown,AiFillCaretUp,AiOutlineClose,AiOutlineMenu} from 'react-icons/ai';
import { IoNotifications } from "react-icons/io5";


const Calando = () => {   
     const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className='flex justify-between items-center h-[80px] max-w-full mx-auto -my-2 md:hidden mx-auto px-4 text-black'>
        <div className='flex items-center  '>
           <img src={logo} className='w-full w-[160px]  h-14 '  alt="" />
           </div>
     
      <div onClick={handleNav}  className='block md:hidden'>
          {nav ? <AiOutlineClose color='#000300' size={20}/> : <AiOutlineMenu color='#000300' size={20} />}
      </div>
      <ul className={nav ? 'fixed text-white left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>Resources</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
      </ul>
    </div>
  )
}
export default Calando;