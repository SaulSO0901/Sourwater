import React, { useState } from "react";
import front from '../assets/product/front-zoom.jpg'
import frontside from '../assets/product/front-side.png' 
import frontzoom from '../assets/product/front-zoom.jpg'
import back from '../assets/product/back-full.png'
import backzoom from '../assets/product/back zoom.png'
import fret from '../assets/product/fret.png'
import head from '../assets/product/headstock.png'
import brand from '../assets/product/brand.png'
import supp from '../assets/product/support.png'


import { IoIosStar } from "react-icons/io";
import { GiGuitarBassHead } from "react-icons/gi";
import { FaTruck } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { GoShieldCheck } from "react-icons/go";
import { FaHeart } from "react-icons/fa";

const ProductSum = () => {

 
  
  function changeimagefz()
  {
var img= document.getElementById('image')
img.src = frontzoom
  }
  
  function changeimagefs()
  {
var img= document.getElementById('image')
img.src = frontside
  }
  
  function changeimageb()
  {
var img= document.getElementById('image')
img.src = back
  }

  function changeimagebz()
  {
var img= document.getElementById('image')
img.src = backzoom
  }
  function changeimagefr()
  {
var img= document.getElementById('image')
img.src = fret
  }
  function changeimageh()
  {
var img= document.getElementById('image')
img.src = head
  }


  const [f, setF] = useState(false);
  
  const [fz, setFz] = useState(true);
  
  const [h, setH] = useState(false);
  
  const [b, setB] = useState(false);
  
  const [bz, setBz] = useState(false);
  
  const [fr, setFr] = useState(false);

  const handleF = () => {
    setF(true);
    setFz(false);
    setH(false);
    setB(false);
    setBz(false);
    setFr(false);
  };

  
  const handleFz = () => {
    setF(false);
    setFz(true);
    setH(false);
    setB(false);
    setBz(false);
    setFr(false);
  };

  
  const handleH = () => {
    setF(false);
    setFz(false);
    setH(true);
    setB(false);
    setBz(false);
    setFr(false);
  };

  
  const handleB = () => {
    setF(false);
    setFz(false);
    setH(false);
    setB(true);
    setBz(false);
    setFr(false);
  };

  
  const handleBz = () => {
    setF(false);
    setFz(false);
    setH(false);
    setB(false);
    setBz(true);
    setFr(false);
  };

  
  const handleFr = () => {
    setF(false);
    setFz(false);
    setH(false);
    setB(false);
    setBz(false);
    setFr(true);
  };

  return (
    <div className=' w-full xl:h-full lg:h-[1020px]  mb-10 border-b-[.7px] border-b-C7C5C1'>
<div className='flex-col max-w-[1400px] w-full mx-auto md:px-4 '>
      <div className='flex w-full h-full border-b-[.7px] border-b-C7C5C1 '>

    <div className='flex-col  min-[1px]:hidden md:flex w-full h-full   '>
       <p className='w-full min-[1px]:hidden md:flex text-sm font-extralight text-[#555454]'>Guitars/Electric Guitars/ESP James Hetfield</p>
      <h2 className='min-[1px]:hidden md:flex  mt-4 py-4 text-4xl font-bold text-[#362D2D]'>ESP James Hetfield Signature Vulture - Black Satin</h2>
     <p className=' min-[1px]:hidden md:flex text-sm font-light text-[#362D2D]'>Solidbody Electric Guitar with Mahogany Body, Mahogany Neck, Ebony Fingerboard, and 2 Active Humbucking Pickups - Black Satin</p>
     
      <div className='flex mt-1 items-center'>
      <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D] underline ml-1">1 review</p>
<p className='mx-1 px-1 text-sm border-r-[2px] border-l-[2px] '>Write your review</p>
<p className='text-sm font-medium'>Item ID: EVULTUREBLKS</p>
      </div>
      </div>
    <div className='hidden md:flex w-fit justify-end items-center'>
    <img  src={brand} className=' w-[137px] h-[61px]  ' alt='brand'></img>
    </div>
    </div>

    <div className='lg:flex  my-4'>
      <div className='hidden xl:flex max-w-[60px] w-full   select-none'>
<div className='flex-col'>
<div onClick={changeimagefz}  className={fz ?' my-2 ring-[#C7C5C1]  ring-2 cursor-pointer ':'my-2 cursor-pointer  '}>
 <img onClick={handleFz} src={frontzoom}  className=' w-[60px] h-[60px] px-2 'alt='frontz' ></img> 
</div>

<div onClick={changeimagefs}   className={f ?' my-2 ring-[#C7C5C1]  ring-2 cursor-pointer  ':'my-2 cursor-pointer  '}>
 <img  src={frontside} onClick={handleF}  className=' w-[60px] h-[60px] px-2 'alt='frontside' ></img> 
</div>


<div onClick={changeimageh} className={h ?' my-2 ring-[#C7C5C1]  ring-2 cursor-pointer  ':'my-2 cursor-pointer '}>
 <img src={head} onClick={handleH}  className=' w-[60px] h-[60px] px-2 'alt='head' ></img> 
</div>


<div onClick={changeimagefr} className={fr ?' my-2 ring-[#C7C5C1]  ring-2 cursor-pointer  ':'my-2 cursor-pointer  '}>
 <img src={fret} onClick={handleFr}  className=' w-[60px] h-[60px] px-2 ' alt='fret' ></img> 
</div>


<div onClick={changeimagebz}  className={bz ?' my-2 ring-[#C7C5C1]  ring-2 cursor-pointer  ':'my-2 cursor-pointer '}>
 <img src={backzoom} onClick={handleBz}  className=' w-[60px] h-[60px] px-2 ' alt='backzoom' ></img> 
</div>


<div onClick={changeimageb}  className={b ?' my-2 ring-[#C7C5C1]  ring-2 cursor-pointer  ':'my-2 cursor-pointer  '}>
 <img src={back} onClick={handleB}  className=' w-[60px] h-[60px] px-2' alt='back' ></img> 
</div>
      </div>
      </div>
{/*************************************************************************/}
  <div   className='flex-col max-w-[750px] min-w-[300px] w-full mx-auto min-[0px]:max-h-[750px] xl:h-[750px] h-full   '>
<img  id="image" src={front} className='max-w-[651px] max-h-[750px] w-full h-full xl:px-16 mx-auto' alt="front"></img>
 
{/*************************************************************************/}
<div className='hidden md:flex xl:hidden    w-full justify-center items-center   select-none'>

<div  onClick={changeimagefz} className='mx-3 my-4'>
 <img src={frontzoom}  className=' w-[60px] h-[60px] px-2 'alt='frontz' ></img> 
</div>

<div  onClick={changeimagefs} className='mx-3 my-4  '>
 <img src={frontside}  className=' w-[60px] h-[60px] px-2 'alt='frontside' ></img> 
</div>


<div  onClick={changeimageh} className='mx-3 my-4 '>
 <img src={head}  className=' w-[60px] h-[60px] px-2 'alt='head' ></img> 
</div>


<div  onClick={changeimagefr} className='mx-3 my-4 '>
 <img src={fret}  className=' w-[60px] h-[60px] px-2 ' alt='fret'></img> 
</div>


<div  onClick={changeimagebz} className='mx-3 my-4'>
 <img src={backzoom}  className=' w-[60px] h-[60px] px-2 'alt='backz' ></img> 
</div>


<div  onClick={changeimageb} className='mx-3 my-4 '>
 <img src={back}  className=' w-[60px] h-[60px] px-2' alt='back' ></img> 
</div>
      </div>
      </div>
{/*************************************************************************/}
<div className='flex-col lg:max-w-[560px] min-w-[292px] xl:w-full  md:w-full  h-full  xl:ml-16 md:mt-[94px] px-4'>

<div className='flex-col  min-[1px]:flex md:hidden w-full h-full    '>
       <p className='w-full flex text-sm font-extralight text-[#555454]'>Guitars/Electric Guitars/ESP James Hetfield</p>
      <h2 className='flex  mt-4 py-4 text-2xl font-bold text-[#362D2D]'>ESP James Hetfield Signature Vulture - Black Satin</h2>
     <p className=' flex text-sm font-light text-[#362D2D]'>Solidbody Electric Guitar with Mahogany Body, Mahogany Neck, Ebony Fingerboard, and 2 Active Humbucking Pickups - Black Satin</p>
     
      <div className='flex mt-1 items-center'>
      <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <p className="text-[#362D2D] underline ml-1">1 review</p>
<p className='mx-1 px-1 text-sm border-r-[2px] border-l-[2px] '>Write your review</p>
<p className='text-sm font-medium'>Item ID: EVULTUREBLKS</p>
      </div>
      </div>

  <div className='w-full mt-8  border-b-[.7px] border-b-C7C5C1'>
<p className=' text-4xl font-bold text-[#ED2C2C]'>$5,699.00</p>
</div>

<div className='w-full mt-4   border-b-[.7px] border-b-C7C5C1 '>
<p className='text-[#ED2C2C] font-medium'>Special Financing.</p>
<p className='text-[#362D2D] font-medium'>As low as $159/month with 36 month financing*</p>
<p className='text-[#0072BA] font-medium underline cursor-pointer'>See all payment options</p>
</div>

<div className='flex w-full mt-4 font-medium border-b-[.7px] border-b-C7C5C1'>
<p className=' text-[#362D2D] '>OR we have a second hand model for just</p>
<p className='mx-1 text-[#ED2C2C]'>$4,899.00</p>!<p className='lg:hidden xl:flex mx-1 text-[#0072BA] cursor-pointer'>Learn more.</p>
</div>

<div className='flex  w-full mt-4 pb-4 border-b-[.7px] border-b-C7C5C'>
<div className='flex-col w-full  justify-center items-center text-center cursor-pointer'><GiGuitarBassHead className='mx-auto' size={30}></GiGuitarBassHead><p className='mx-auto md:text-xs font-medium'>37 point<br/>Inspection</p></div>
<div className='flex-col w-full justify-center items-center  text-center  cursor-pointer'><FaTruck className='mx-auto' size={30}></FaTruck><p className='md:text-xs font-medium '>Fast <br/>Shipping</p></div>
<div className='flex-col w-full justify-center items-center  text-center  cursor-pointer'><BiSupport className='mx-auto' size={30}></BiSupport><p className='mx-1 md:text-xs font-medium '>Free <br/> Support</p></div>
<div className='flex-col  w-full justify-center items-center  text-center  cursor-pointer'><GoShieldCheck className='mx-auto' size={30}></GoShieldCheck><p className='mx-1 md:text-xs font-medium '>3-year <br/> Warranty</p></div>

</div>

<div className='flex-col mt-4 border-b-[.7px] border-b-C7C5C select-none'>
<p className='text-[#3A782B]'>In Stock!</p>
<button className='bg-[#428631] mt-4 py-4 px-28 text-white font-medium hover:bg-[#346827]'>Add to Cart</button>

<div className='flex-col my-2 '>
<button className='flex p-2 items-center text-[#0072BA] text-sm border-[.7px] border-[#0072BA] hover:text-[#376f92]  hover:border-[#376f92]  '><FaHeart className='mx-1'></FaHeart>Add to Wish List</button>

</div>
</div>

<div className='flex mt-6  border-b-[.7px] border-b-C7C5C select-none'>
<div className=''>
<img src={supp} className='w-[80px] h-[80px] rounded-full ' alt="support"></img>
</div>

<div className='flex-col mx-4'>

<p className='text-xl text-[#362D2D] font-medium'>ASK AN EXPERT</p>
<p className=' text-sm'>Our expertly trained Sales Engineers are ready to help!</p>
<p className='text-xl text-[#0072BA] font-medium cursor-pointer'>(800) 224-4701</p>
<p className='mb-4 text-[#0072BA]  underline cursor-pointer'>What is a Sales Engineer?</p>
</div>


</div>

</div>
    </div>
      </div>
      </div>
  )
}

export default ProductSum