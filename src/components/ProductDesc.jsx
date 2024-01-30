import React, { useState } from "react";


import front from '../assets/product/front-zoom.jpg'

import head from '../assets/product/headstock.png'

import laid from '../assets/product/laid.png'


import { IoIosStar } from "react-icons/io";

const ProductDesc = () => {

  const [desc, setDesc] = useState(true);
  
  const [spec, setSpec] = useState(false);
  
  const [rev, setRev] = useState(false);


  
  const handleDesc = () => {
    setDesc(true);
    setSpec(false);
    setRev(false);
    
  };

  
  const handleSpec = () => {
    setDesc(false);
    setSpec(true);
    setRev(false);
   
  };

  
  const handleRev = () => {
    setDesc(false);
    setSpec(false);
    setRev(true);
   
   
  };


  return (
    <div  id="desc"  className='flex-col w-full mx-auto  mt-5'>
      
<div className='flex sticky w-full h-10 top-0 mx-1 min-[375px]:mx-0   justify-center items-center bg-white border-[1px] border-C7C5C md:z-10 -z-10'>
<a onClick={handleDesc} href='#desc' className={desc ?'flex h-full max-w-[307px]  w-full items-center justify-center  border-b-[2px] border-b-[#0072BA] hover:bg-[#EFEFEF]':'flex h-full max-w-[307px]  w-full items-center justify-center hover:bg-[#EFEFEF]  '}><p className='text-[#0072BA] font-medium'>Description</p></a>
<a onClick={handleSpec} href='#specs' className={spec ?'flex h-full max-w-[307px]  w-full items-center justify-center  border-b-[2px] border-b-[#0072BA] hover:bg-[#EFEFEF]':'flex h-full max-w-[307px]  w-full items-center justify-center hover:bg-[#EFEFEF]  '}><p className=' text-[#0072BA] font-medium'>Specs</p></a>
<a onClick={handleRev} href='#review'  className={rev ?'flex h-full max-w-[307px]  w-full items-center justify-center  border-b-[2px] border-b-[#0072BA] hover:bg-[#EFEFEF]':'flex h-full max-w-[307px]  w-full items-center justify-center hover:bg-[#EFEFEF]  '}>
<IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
<div  className='px-1 text-[#0072BA] font-medium'>Reviews</div>
</a>
</div>

<div onMouseEnter={handleDesc}  className='hidden md:flex flex-col max-w-[1400px] w-full mx-auto mt-6 md:px-4 lg:px-0'>
    <div  className='flex w-full justify-center mx-auto '>
<h2 className=' text-4xl font-medium text-[#362D2D]'>High-performance James Hetfield Signature</h2>
</div>

<div className='flex  w-full mt-14 py-4 border-b-[.7px] border-b-C7C5C1  '>
<div className='max-w-[700px] w-full'>
<p className=' justify-start font-medium text-xl text-[#362D2D]'>ESP and James Hetfield join forces once again to bring you his latest vision, a unique V design called the Vulture. 
<br/>
<br/>

His newest signature model features the EMG Het Set, set-neck construction, and an ebony fingerboard with custom inlay.</p>
</div>
<div className=' max-w-[700px] w-full h-full  my-auto'>
<img src={laid} className='max-w-[700px] w-full' alt="laid"></img>
</div>
</div>



<div className='flex max-h-[650px] h-full mt-14 items-center border-b-[.7px] border-b-C7C5C1'>
<div className='max-w-[650px] max-h-[650px] h-full w-full'>
<img src={head} className='h-[650px]' alt="head"></img>
</div>

<div className='flex-col max-w-[750px]  w-full  justify-start'>
<h2 className='text-4xl font-medium'>ESP Vulture Features:</h2>
<div className='flex'>

<ul className='max-w-[205px] w-full mx-2 list-disc font-medium text-[#362D2D]'>
<li><p>James Hetfield signature guitar with aggressive V-shaped body</p></li>
<li><p>Mahogany body and neck deliver loads of warmth and resonance</p></li>
<li><p>Sleek, fast-playing ebony fretboard with eye-grabbing custom inlay</p></li>
</ul>

  
<ul className='max-w-[205px] w-full mx-2 list-disc font-medium text-[#362D2D]'>
<li><p>Set-neck construction ensures maximum sustain</p></li>
<li><p>Active EMG JH Het Set of humbucking pickups ensures maximum output and clarity</p></li>
<li><p>Rock-solid TonePros Tune-o-matic bridge and tailpiece</p></li>
</ul>

  
<ul className='max-w-[205px] w-full mx-2 list-disc font-medium text-[#362D2D]'>
<li><p>Comfortable Thin "U" neck profile with 22 extra-jumbo frets</p></li>
<li><p>Locking Gotoh machine heads keep you in tune</p></li>

</ul>

</div>
</div>
</div>

<div className='flex mt-14 py-4 items-center border-b-[.7px] border-b-C7C5C1'>
<div  className='max-w-[750px] w-full text-[#362D2D]'>

<h2 className=' text-4xl font-medium'>Eye-catching, high-performance features</h2>
<p className='mt-4 justify-start font-medium text-lg'>he Vulture James Hetfield signature electric guitar boasts a lot of eye-catching, high performance features. Its set-neck construction ensures maximum sustain. 
<br/>
<br/>
Gotoh locking tuners make string changes a breeze while keeping your tuning stable. A TonePros locking Tune-o-matic bridge and tailpiece lock the guitar’s hardware down to its body, giving you optimal string vibration transfer to your guitar's body. Beyond that, the Vulture’s sleek ebony fretboard displays James's custom inlay on the 12th fret.</p>
</div>
<img src={front} className='max-w-[500px] max-h-[700px] w-full  h-full mx-auto' alt="front"></img>
</div>
</div>
{/*Mobile version*/}
<div onMouseEnter={handleDesc} className='md:hidden min-[0px]:flex-col mt-4 '>
<div className=' w-full justify-center mx-auto '>
  <div className='flex-col'>
  <div className=' max-w-[700px] w-full h-full  my-auto'>
<img src={laid} className='max-w-[700px] w-full' alt="laid"></img>
</div>
<h2 className='p-4 text-3xl font-medium text-[#362D2D]'>High-performance James Hetfield Signature</h2>
</div>

<div className='flex-col  w-full  p-4 border-b-[.7px] border-b-C7C5C1 '>
<div className='max-w-[700px] w-full'>
<p className=' justify-start font-medium text-[#362D2D] '>ESP and James Hetfield join forces once again to bring you his latest vision, a unique V design called the Vulture. 

His newest signature model features the EMG Het Set, set-neck construction, and an ebony fingerboard with custom inlay.</p>
</div>

</div>
</div>


<div className='flex-col  h-full mt-14 items-center border-b-[.7px] border-b-C7C5C1'>
<div className='max-w-[650px] max-h-[650px] h-full w-full'>
<img src={head} className='h-[650px]' alt="head"></img>
</div>

<div className='flex-col max-w-[750px] mt-10 mb-4 w-full  justify-start px-2'>
<h2 className='text-3xl font-medium'>ESP Vulture Features:</h2>
<div className='flex-col px-4 mt-4'>
  
<ul className=' w-full mx-2 list-disc font-medium text-[#362D2D]'>
<li><p>James Hetfield signature guitar with aggressive V-shaped body</p></li>
<li><p>Mahogany body and neck deliver loads of warmth and resonance</p></li>
<li><p>Sleek, fast-playing ebony fretboard with eye-grabbing custom inlay</p></li>
<li><p>Set-neck construction ensures maximum sustain</p></li>
<li><p>Active EMG JH Het Set of humbucking pickups ensures maximum output and clarity</p></li>
<li><p>Rock-solid TonePros Tune-o-matic bridge and tailpiece</p></li>
<li><p>Comfortable Thin "U" neck profile with 22 extra-jumbo frets</p></li>
<li><p>Locking Gotoh machine heads keep you in tune</p></li>

</ul>

</div>
</div>
</div>

<div className='flex-col p-4 items-center border-b-[.7px] border-b-C7C5C1'>

<div className='max-w-[750px] w-full'>
<img src={front} className='max-w-[500px] max-h-[700px] w-full  h-full mx-auto text-[#362D2D]' alt="front"></img>
<h2 className=' text-3xl font-medium'>Eye-catching, high-performance features</h2>
<p  className='mt-4 justify-start font-medium '>he Vulture James Hetfield signature electric guitar boasts a lot of eye-catching, high performance features. Its set-neck construction ensures maximum sustain. 
<br/>
<br/>
Gotoh locking tuners make string changes a breeze while keeping your tuning stable. A TonePros locking Tune-o-matic bridge and tailpiece lock the guitar’s hardware down to its body, giving you optimal string vibration transfer to your guitar's body. Beyond that, the Vulture’s sleek ebony fretboard displays James's custom inlay on the 12th fret.</p>
</div>

</div>
</div>
{/*Specs Section*/}
<div  onMouseEnter={handleSpec}  id='specs' className="flex-col w-full ">
<div  className='max-w-[1400px] mx-auto py-4  border-b-[.7px] border-b-C7C5C1'>

<h2 className=' py-5 text-4xl font-medium text-[#362D2D]'>Tech Specs</h2>
</div>

<table className=' max-w-[1400px] w-full mx-auto text-[#362D2D]'>
{/********************************************************************************/}
<tr className='flex   h-10 my-4 '>
<td className='w-full '><h2 className=' text-2xl font-bold'>GENERAL</h2></td>
</tr>

<tr className='flex h-10 bg-[#f2f1f01e]'>
<td className='w-[199px] font-medium'>Number of strings</td>
<td className='max-w-[1200px] w-full  '>6</td>
</tr>

<tr className='flex  h-10 bg-[#f2f1f0]'>
<td className='w-[199px] font-medium'>Left-/Right-handed</td>
<td className='max-w-[1200px] w-full 2'>Right-handed</td>
</tr>
{/********************************************************************************/}
<tr className='flex h-10 my-4'>
<td className='w-full  '><h2 className=' text-2xl font-bold'>BODY</h2></td>
</tr>

<tr className='flex h-10 bg-[#f2f1f01e]'>
<td className='w-[199px] font-medium'>Body Type</td>
<td className='max-w-[1200px] w-full  '>Solidbody</td>
</tr>

<tr className='flex  h-10 bg-[#f2f1f0]'>
<td className='w-[199px] font-medium'>Body Shape</td>
<td className='max-w-[1200px] w-full 2'>James Hetfield Vulture</td>
</tr>

<tr className='flex h-10 bg-[#f2f1f01e]'>
<td className='w-[199px] font-medium'>Number of strings:</td>
<td className='max-w-[1200px] w-full  '>6</td>
</tr>
<tr className='flex  h-10 bg-[#f2f1f0]'>
<td className='w-[199px] font-medium'>Body Material</td>
<td className='max-w-[1200px] w-full  '>Mahogany</td>
</tr>

<tr className='flex h-10 bg-[#f2f1f01e]'>
<td className='w-[199px] font-medium'> Body Finish</td>
<td className='max-w-[1200px] w-full  '>Satin</td>
</tr>

<tr className='flex  h-10 bg-[#f2f1f0]'>
<td className='w-[199px] font-medium'>Color</td>
<td className='max-w-[1200px] w-full  '>Black</td>
</tr>
{/********************************************************************************/}
<tr className='flex h-10 my-4'>
<td className='w-full  '><h2 className=' text-2xl font-bold'>NECK</h2></td>
</tr>

<tr className='flex h-10 bg-[#f2f1f01e]'>
<td className='w-[199px] font-medium'>Neck Material</td>
<td className='max-w-[1200px] w-full  '>1-piece Mahogany</td>
</tr>

<tr className='flex  h-10 bg-[#f2f1f0]'>
<td className='w-[199px] font-medium'>Neck Shape</td>
<td className='max-w-[1200px] w-full 2'>Thin U</td>
</tr>

<tr className='flex h-10 bg-[#f2f1f01e]'>
<td className='w-[199px] font-medium'>Neck Joint</td>
<td className='max-w-[1200px] w-full  '>Set Nec</td>
</tr>
<tr className='flex  h-10 bg-[#f2f1f0]'>
<td className='w-[199px] font-medium'>Radius</td>
<td className='max-w-[1200px] w-full  '>12”</td>
</tr>

<tr className='flex h-10 bg-[#f2f1f01e]'>
<td className='w-[199px] text-sm md:text-base font-medium'>Fingerboard Material</td>
<td className='max-w-[1200px] w-full  '>Ebony</td>
</tr>

<tr className='flex  h-10 bg-[#f2f1f0]'>
<td className='w-[199px] font-medium'>Fingerboard Inlay</td>
<td className='max-w-[1200px] w-full  '>Pearl Dots with Vulture Design</td>
</tr>

<tr className='flex h-10 bg-[#f2f1f01e]'>
<td className='w-[199px] font-medium'>Number of Frets</td>
<td className='max-w-[1200px] w-full 2'>22, Extra Jumbo</td>
</tr>

<tr className='flex  h-10 bg-[#f2f1f0]'>
<td className='w-[199px] font-medium'>Scale Length</td>
<td className='max-w-[1200px] w-full  '>24.75</td>
</tr>

<tr className='flex h-10 bg-[#f2f1f01e]'>
<td className='w-[199px] font-medium'>Nut Width</td>
<td className='max-w-[1200px] w-full  '>1.653"</td>
</tr>
<tr className='flex  h-10 bg-[#f2f1f0]'>
<td className='w-[199px] font-medium'>Nut Material</td>
<td className='max-w-[1200px] w-full  '>Bone</td>
</tr>
{/********************************************************************************/}
<tr className='flex   h-10 my-4 '>
<td className='w-full '><h2 className=' text-2xl font-bold'>ELECTRONICS</h2></td>
</tr>

<tr className='flex h-10 bg-[#f2f1f01e]'>
<td className='w-[199px] font-medium'>Neck Pickup</td>
<td className='max-w-[1200px] w-full  '>EMG JH Humbucker</td>
</tr>

<tr className='flex  h-10 bg-[#f2f1f0]'>
<td className='w-[199px] font-medium'>Bridge Pickup</td>
<td className='max-w-[1200px] w-full 2'>EMG JH Humbucker</td>
</tr>


<tr className='flex h-10 bg-[#f2f1f01e]'>
<td className='w-[199px] font-medium'>Controls</td>
<td className='max-w-[1200px] w-full  '>2 x volume</td>
</tr>

<tr className='flex  h-10 bg-[#f2f1f0]'>
<td className='w-[199px] font-medium'>Switching</td>
<td className='max-w-[1200px] w-full 2'>3-way toggle pickup switch</td>
</tr>

{/********************************************************************************/}
<tr className='flex   h-10 my-4 '>
<td className='w-full '><h2 className=' text-2xl font-bold'>MISCELLANEOUS</h2></td>
</tr>

<tr className='flex h-10 bg-[#f2f1f01e]'>
<td className='w-[199px] font-medium'>Strings</td>
<td className='max-w-[1200px] w-full  '>Elixir Nanoweb, 10s</td>
</tr>

<tr className='flex  h-10 bg-[#f2f1f0]'>
<td className='w-[199px] font-medium'>Case/Gig Bag</td>
<td className='max-w-[1200px] w-full 2'>Hardshell Case</td>
</tr>


<tr className='flex h-10 bg-[#f2f1f01e]'>
<td className='w-[199px] font-medium'>Manufacturer Part Number:</td>
<td className='max-w-[1200px] w-full  '>EVULTUREBLKS</td>
</tr>



</table>

</div>
{/*Review Section*/}
<div onMouseEnter={handleRev} id='review' className='max-w-[1400px] w-full mx-auto mt-20  '>
        <h2 className='w-full  mx-auto py-10 text-center lg:text-start text-4xl  font-medium  text-[#362D2D]'>Customers reviews</h2>
        <div className='lg:flex max-[1px]:flex-col '>
<div className='flex-col  border-t-[1px] border-t-C7C5C1'>

<div className='flex items-center justify-center lg:justify-normal '>
<IoIosStar size={20} color="#ff9d00"/>
  <IoIosStar size={20} color="#ff9d00"/>
  <IoIosStar size={20}  color="#ff9d00"/>
  <IoIosStar size={20} color="#ff9d00"/>
  <IoIosStar size={20} color="#ff9d00"/>
  <p className=' px-1 text-lg font-medium text-[#362D2D]'>5.0 out of 5</p>
  </div>
<div className='flex-col w-fit mx-auto '>
  <div className='flex  justify-start lg:justify-normal items-center text-lg text-[#362D2D] '><p className='px-2'>5</p><div className='h-2 px-28 mx-2  bg-[#ff9d00] rounded-xl'></div><p className='w-full px-2 text-center'>100%</p></div>
  <div className='flex   justify-start lg:justify-normal items-center text-lg text-[#362D2D] '><p className='px-2'>4</p><div className='h-2 px-28 mx-2  bg-[#f2f1f0] rounded-xl'></div><p className='w-full  px-2 text-center'>0%</p></div>
  <div className='flex   justify-start lg:justify-normal items-center text-lg text-[#362D2D] '><p className='px-2'>3</p><div className='h-2 px-28 mx-2 bg-[#f2f1f0]  rounded-xl'></div><p className='w-full  px-2 text-center'>0%</p></div>
  <div className='flex   justify-start lg:justify-normal items-center text-lg text-[#362D2D] '><p className='px-2'>2</p><div className='h-2 px-28 mx-2  bg-[#f2f1f0]  rounded-xl'></div><p className='w-full  px-2 text-center'>0%</p></div>
  <div className='flex   justify-start lg:justify-normal items-center text-lg text-[#362D2D] '><p className='px-2'>1</p><div className='h-2 px-28 mx-2  bg-[#f2f1f0]  rounded-xl'></div><p className='w-full  px-2 text-center'>0%</p></div>
  </div>
  <div className='flex w-full mt-4 justify-center lg:justify-normal border-t-[1px] border-t-C7C5C1 '>
  <button className=' p-4 px-6 mt-4  rounded text-xl font-bold text-white  bg-[#0072ba] hover:bg-[#0062a1] '>Write your review</button>
  </div>
        </div>
        <div className='flex-col h-fit mt-4 lg:mt-0 lg:ml-10 pt-7 pb-4 px-4 lg:px-0 border-t-[1px] border-t-C7C5C1  border-b-[1px] border-b-C7C5C1'>
            <div className='flex '>
        <IoIosStar color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
  <IoIosStar   color="#ff9d00"/>
  <IoIosStar  color="#ff9d00"/>
  <IoIosStar color="#ff9d00"/>
        </div>
        <h2 className='text-medium font-semibold text-[#362D2D]'>Amazing guitar</h2>
        <p className='font-medium text-[#362D2D]'>The ESP VULTURE is an amazing guitar. It's light weight, has a smooth satin finish and sounds brutal! You can feel how solid the craftsmanship is.</p>
        <p className='text-[#C7C5C1]'>by Sourtwater Customer on February 13, 2023</p>
        </div>
       </div>
       </div>



    </div>
  )
}

export default ProductDesc