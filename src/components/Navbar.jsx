import React,{useState} from 'react'
import logo from '../assets/logo2.png';
import cart from '../assets/cart.png';
import guitar from '../assets/Screenshot 2023-10-01 141836.png'
import strat from '../assets/Strat.JPG'
import key from '../assets/Key.JPG'
import sup from '../assets/customer-service-support.svg'


import {AiOutlineSearch,AiFillCaretDown,AiFillCaretUp,AiOutlineClose,AiTwotoneMail,AiOutlineMenu} from 'react-icons/ai';
import { IoNotifications } from "react-icons/io5";
import {MdOutlineFavoriteBorder} from  "react-icons/md";
import {BsPhoneFill} from "react-icons/bs"
import {BiSupport} from "react-icons/bi"
const Navbar = () => {
  const [acc, setAcc] = useState(false);
  const [con, setCon] = useState(false);
  const [not, setNot] = useState(false);
  const [mail, setMail] = useState(false);
  const [cell, setCell] = useState(false);
  const [supp, setSupp] = useState(false);
  const [crt, setCrt] = useState(false);
    const [nav, setNav] = useState(false);
  
    const handleNav = () => {
      setNav(!nav);
    };

  const handleAcc = () => {
    setAcc(!acc);
  };
  const handleAcc2 = () => {
    setAcc(false)
  };

  const handleCrt = () => {
    setCrt(!crt);
  };

  const handleMail = () => {
    setMail(!mail);
  };
  
  const handleCon = () => {
    setCon(!con);
  };
  const handleCon2 = () => {
    setCon(false);
  };

  const handleNot = () => {
    setNot(!not);
  };

  const handleNot2 = () => {
    setNot(!not);
  };
  const handleCell = () => {
    setCell(!cell);
  };
  const handleSupp = () => {
    setSupp(!supp);
  };
  return (
    <div className= 'flex  items-center items-stretch h-[80px] max-w-full hidden md:flex  px-10 -my-2 mx-auto  text-[#000] border-b-[.7px] border-b-C7C5C'>
          
           <div className='flex items-center  '>
           <img src={logo} className='w-full min-w-[160px] md:max-w-[160px] xl:max-w-[220px]  h-11 '  alt="" />
           </div>
       
           <div className='flex w-full max-w-[738px] min-w-[138px] items-center items-stretch h-10 mx-2 my-6 border-C7C5C1 border-[.1px] rounded-sm  '>
           <button className='h-10 rounded-sm bg-[#EFEFEF] p-4 py-2'>
           <AiOutlineSearch size={20}></AiOutlineSearch>
            </button>
           <input className='h-10 w-full  bg-[#EFEFEF] justify-start text-[#B0ACAC]' placeholder='Search for sour gear'></input>
           </div>

    {/*Notif section*/}
    <div className=' flex  items-center p-5 cursor-pointer hover:bg-[#EFEFEF]  ' onMouseEnter={handleNot}  onMouseLeave={handleNot2}  >  
    <div  className=' flex-row items-center'> <IoNotifications color='#362D2D' className='h-7 w-7'></IoNotifications>   

    <div  className= {not? 'h-0 w-0 -mx-5 left-0 top-0 w-[60%] h-full  ease-in-out duration-0' : 'ease-in-out duration-0 fixed left-[-100%]'}>
      <div  className='flex-col absolute block  border-C7C5C1 border-[.5px]  my-6 '>

       <div className=' flex p border-b-[.7px] border-b-C7C5C1 border hover:border-[#0072BA] hover:border-[1.5px] ease-in-out duration-200 cursor-pointer     ' >
  <div className='flex items-center my-2 p-4 '>
   <img className='border-C7C5C1 border-[.8px] h-20 w-20 p-1' src={guitar}></img>
  </div>
       <div className='flex-col px-2 py-2  '>
       <button className=' bg-[#428631] rounded-xl items-center p-1'><p className=' mx-1 text-xs text-[#FFFFFF]'>Price drop</p></button> 

       <div className=' p-[.5px] w-40'> 
      <p className='text-[#362D2D] text-sm font-medium'>ESP James Hetfield Signature Vulture-Black Satin</p>

       </div>
      <div className='p-[.5px]'><p className=' text-xs text-red-600'>$5,699.00</p></div>
       <div className='flex p-[.5px] '> <MdOutlineFavoriteBorder color='#362D2D'></MdOutlineFavoriteBorder>
       <p className='text-[#362D2D] text-xs font-light '> Recently viewed </p>
       </div>
       </div>

     <div className='flex items-center  hover:bg-[#f58484] ease-in-out duration-200 '> <AiOutlineClose color='#362D2D' className='w-24'></AiOutlineClose>
</div>
</div>

<div className=' flex  border-b-[.7px] border-b-C7C5C1 border hover:border-[#0072BA] hover:border-[1.5px] cursor-pointer    ' >
  <div className='flex items-center my-2 p-4 '>
   <img className='border-C7C5C1 border-[.8px] h-20 w-20 p-1  ' src={strat}></img>
  </div>
       <div className=' px-2 py-2  '>
       <button className=' bg-[#428631] rounded-xl items-center p-1'><p className=' mx-1 text-xs text-[#FFFFFF]'>Price drop</p></button> 
      
      <div className=' p-[.5px] w-40'> 
      <p className='text-[#362D2D] text-sm font-medium '>Fender Mike McCready Stratocaster Electric Guitar - 3-color Sunburst   </p>
      
       </div>
      <div className='p-[.5px]'><p className=' text-xs text-red-600'>$5,699.00</p></div>
       <div className='flex p-[.5px] '> <MdOutlineFavoriteBorder color='#362D2D'></MdOutlineFavoriteBorder>
       <p className='text-[#362D2D] text-xs font-light '> Recently viewed </p>
       </div>
       </div>

     <div className='flex items-center hover:bg-[#f58484] ease-in-out duration-200 '> <AiOutlineClose className='w-24'></AiOutlineClose>
</div>
</div>

<div className=' flex  border-b-[.7px] border-b-C7C5C1 border hover:border-[#0072BA] hover:border-[1.5px] ease-in-out duration-200 cursor-pointer    ' >
  <div className='flex items-center my-2 p-4 '>
   <img className='border-C7C5C1 border-[.8px] h-20 w-20 p-1 py-4  ' src={key}></img>
  </div>
       <div className=' px-2 py-2   '>
       <button className=' bg-[#428631] rounded-xl items-center p-1'><p className=' mx-1 text-xs text-[#FFFFFF]'>Price drop</p></button> 
      
      <div className=' p-[.5px] w-40'> 
      <p className='text-[#362D2D] text-sm font-medium '>Roland FP-30X Digital Piano with Speakers - Black   </p>
      
       </div>
      <div className='p-[.5px]'><p className=' text-xs text-red-600'>$5,699.00</p></div>
       <div className='flex p-[.5px] '> <MdOutlineFavoriteBorder color='#362D2D' ></MdOutlineFavoriteBorder>
       <p className='text-[#362D2D] text-xs font-light '> Recently viewed </p>
       </div>
       </div>

     <div className='flex items-center hover:bg-[#f58484] ease-in-out duration-200 '> <AiOutlineClose color='#362D2D' className='w-24'></AiOutlineClose>
</div>
</div>
   
    </div>
</div>
</div>
 
      </div>
{/*Notif section end*/}

 <div className='flex-col items-center p-4 hover:bg-[#EFEFEF] cursor-pointer hidden xl:flex   '>
  <ul className='  '>
 <li className='  hover:border-b-[#0072BA] hover:border-b-[.1px] h-10 w-40 '><p className='text-[#0072BA] text-2xl '>(800)224-4701</p></li>  
 <li className=''> <p className='text-[#362D2D] text-xs mx-1'>English: (800)222-4700</p></li>
   </ul>
   </div>
      
{/*Contact us section*/}
<div onMouseEnter={handleCon}  onMouseLeave={handleCon2} className='flex min-w-[144px] w-36  p-2 py-6  items-center   hover:bg-[#EFEFEF] cursor-pointer  '>

  <div className='flex-col items-center  '> 
  <p className='text-[#362D2D] text-medium font-medium  '>Contact Us </p> <p className='text-[#362D2D] text-xs'>We’re here to help</p>
  
  <div className= {con ? 'w-0 h-0 flex cursor-pointer top-0 w-[60%] h-full border-r border-r-gray-900  ease-in-out duration-0' : 'ease-in-out duration-0 fixed left-[-100%]'}>
     <div className=' absolute block my-5 -mx-2 w-60 border-C7C5C1 border-[.1px] '>
     
      <div className='flex  py-4 border-b-[.7px] border-b-C7C5C1  '>
      
      <div className='flex justify-start items-start mx-2  '>
      <img className='w-24 h-20 border-C7C5C1  border-[.8px] rounded-full p-1' src={sup}></img></div>
  
  <div className='flex  '>
   <ul className='justify-center  items-center'>
   <li><p className='text-[#362D2D] text-lg font-medium'>Need Help?</p></li>
  <li><p className='text-[#362D2D] text-sm'>Contact your sales engineer</p></li> 
  </ul>
   </div>
   </div>

      <div className='border-b-[.7px] border-b-C7C5C1'>
       <ul className='flex justify-center py-2 mx-2    '>
       <li onMouseEnter={handleMail}  onMouseLeave={handleMail}  className='border-white border-[.7px]  hover:bg-[#EFEFEF] hover:text-[#0072BA]'>
       {mail ? <AiTwotoneMail  className='p-1' color='#0072BA' size={60}/> : <AiTwotoneMail color='#362D2D' className='p-1' size={60}/>}
       <p className='mx-3 text-[#362D2D]  '>Email</p>
</li>
<li onMouseEnter={handleCell}  onMouseLeave={handleCell}  className='border-white border-[.7px]  hover:bg-[#EFEFEF] hover:text-[#0072BA]'>
{cell ? <BsPhoneFill  className='p-1 py-[7px]' color='#0072BA' size={60}/> : <BsPhoneFill color='#362D2D' className='p-1 py-[7px]' size={60}/>}
<p className='mx-4 text-[#362D2D]'>Call</p>        
</li>

<li onMouseEnter={handleSupp}  onMouseLeave={handleSupp}  className='border-white border-[.7px]  hover:bg-[#EFEFEF] hover:text-[#0072BA]'>
 {supp ? <BiSupport className='p-1' color='#0072BA' size={60}/> : <BiSupport color='#362D2D' className='p-1' size={60}/>}
   <p className='text-[#362D2D] mx-1'>Support</p></li>
</ul>
      </div>

      <div className='flex-col  py-2'>
    <ul className=''>
<li className='p-2 hover:bg-[#EFEFEF] hover:text-[#0072BA] '><p className=' text-[#362D2D]  '>Toll free:(800)333-8111</p></li>
<li className='p-2 hover:bg-[#EFEFEF] hover:text-[#0072BA] '><p className='text-[#362D2D]  '>Español:(800)333-8119</p></li>
<li className='p-2 hover:bg-[#EFEFEF] hover:text-[#0072BA] '><p className='text-[#362D2D] '>Local:(211)777-3111</p></li>
<li className='p-2 hover:bg-[#EFEFEF] hover:text-[#0072BA] '><p className='text-[#362D2D]  '>Fax:(800)999-8111</p></li>
    </ul>
   </div>

   <div className='flex justify-center bg-[#f2f1f0] '>
    <uL className='p-4 '>
   <li className='-my-1'><p>Your cart ID is</p></li>
  <li><p className=' text-2xl'>211XS09</p></li>  
    </uL>
   </div>

      </div>
    </div>
 </div> 
 <div className=''>
    {con ? <AiFillCaretUp  className='mx-1' size={20}/> : <AiFillCaretDown className='mx-1' size={20}/>}
    </div>
</div>





    <div  onMouseEnter={handleAcc}  onMouseLeave={handleAcc2} className='flex items-center p-2 hover:bg-[#EFEFEF] cursor-pointer  '>
      <div className=' items-center'> <p className=''>Acccount </p>
     
      <div className= {acc ? 'w-0 h-0  left-0 top-0 w-[60%] h-full  ease-in-out duration-0' : 'ease-in-out duration-0 fixed left-[-100%]'}>
       <div className='block absolute  my-7  -mx-[138.9px]  w-60 border-C7C5C1 border-[.1px] ' >
    
    <div className=' border-b border-b-C7C5C1 '>
   
    <div className=' p-4  flex justify-center items-center w-full '>
      <ul className=''>
  <li className='flex justify-center items-center'> <button className=' bg-[#0072BA]  px-9 py-3'><p className=' text-lg text-white font-semibold'>Log in</p></button></li> 
  <li className=' text-sm my-2'> <p>New here?<a className=' underline text-[#0072BA]' href='https://www.w3schools.com/tags/tag_a.asp'>Create your account.</a> </p></li>
   </ul>
    </div>
   
    <div className='flex-col  py-2'>
    <ul className=''>
<li className='p-2 hover:bg-[#EFEFEF] hover:text-[#0072BA] '><p className=' text-[#362D2D]  '>Check Your Order Status</p></li>
<li className='p-2 hover:bg-[#EFEFEF] hover:text-[#0072BA] '><p className='text-[#362D2D]  '>Check yYour List</p></li>

    </ul>
   </div>
    </div>
   </div>

  </div>
  </div>
{acc ? <AiFillCaretUp className='mx-1' size={20}/> : <AiFillCaretDown className='mx-1' size={20}/>}
</div>
       
<div  onMouseEnter={handleCrt}  onMouseLeave={handleCrt} className='flex-col items-center hover:bg-[#EFEFEF] cursor-pointer  '>
<div className='items-center p-4 '><img className='h-10 min-w-[45px] ' src={cart}></img></div>
     
      <div className= {crt ? 'w-0 h-0 left-0 top-0 w-[60%] h-full  ease-in-out duration-0' : 'ease-in-out duration-0 fixed left-[-100%]'}>
       <div className='block absolute my-2 -mx-[168px]  w-60 border-C7C5C1 border-[.1px] ' >
    
    <div className=' border-b border-b-C7C5C1  '>
    <div className='flex-col  py-2'>
    <ul className='flex  justify-center items-center'>
<li className='p-2 hover:bg-[#EFEFEF] font-semibold'><p className=' text-[#362D2D]  '>Your Cart Is Empty</p></li>
    </ul>
   </div>
    </div>
   </div>

  </div>
  </div>
  
    </div>



  
  
    
   
    
  )
  
  
}
export default Navbar