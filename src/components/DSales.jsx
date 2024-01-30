import React from 'react'
import dsales from '../assets/dsales/dsales.png'

import {
   
    AiTwotoneMail,
  
  } from "react-icons/ai";
 
import { BsPhoneFill } from "react-icons/bs";

const DSales = () => {
  return (
    <div className='md:flex max-w-[1400px] lg:h-[515px]  w-full h-full mt-10 mx-auto px-4 md:max-h-[566px] max-[767px]:flex-col max-[425px]:px-0'>

    <div className='flex-col md:max-w-[685px]  w-full py-[84px]  items-center justify-center text-center   bg-[#f3f3f3]'>
         <div className=' md:max-w-[483px] max-[767px]:max-w-[672px]  w-full   mx-auto items-center justify-center  '>
            <h2 className='mx-10   text-3xl text-[#362D2D]  '>Dedicated Sales Engineer</h2>
            <p className=' py-6  md:mx-10 max-[425px]:mx-5 max-[767px]:px-10 text-justify max-[425px]:text-center text-[#362D2D]'>Buying music gear can be complicated, but your Sweetwater Sales Engineer is here to help. Our Sales Engineers
are a world-class team of music gear experts whose sole job is to provide you with helpful advice and unparalleled service 
             -- completely free of charge.</p>
        </div>
        <div className='flex-col  max-w-[483px] mx-auto'>

<div className='lg:flex mx-auto w-fit  justify-center items-center md:grid  max-[767px]:flex'>
<button className='flex p-4 px-6 mx-1 rounded border-[1px] font-medium border-[#0072ba] text-[#0072ba] delay-100 hover:border-[#2f5370] hover:text-[#2f5370] ease-in-out duration-100'><BsPhoneFill className='my-1'></BsPhoneFill>(800) 224-4701</button>
<button className='flex p-4 px-6 mx-1 rounded border-[1px] font-medium border-[#0072ba] text-[#0072ba] delay-100 hover:border-[#2f5370] hover:text-[#2f5370] ease-in-out duration-100'><AiTwotoneMail className='my-1'></AiTwotoneMail> Email us</button>
        </div>
        <div className='mt-2'><div  className='text-[#0072ba] underline cursor-pointer'>What is a Sales Engineer?</div></div>
    </div>
    </div>


<div className='flex max-w-[685px] w-full items-end select-none'>
<img src={dsales} className='h-full w-full object-cover' alt='Engineer'></img>
<div className='flex absolute max-w-[350px] md:w-fit lg:w-full  my-4 right-30  items-center  border-[1px] border-[#0072ba] md:text-lg md:font-medium max-[425px]:text-base -z-10 '>
<p className='mx-1 text-[#6ea1ff] '>James Hetfield</p>
<p className=' text-[#6ea1ff] max-[425px]:text-sm mt-[2px]'>| Sourwater Sales Engineer</p>
</div>
</div>

        
    </div>
    
  )
}

export default DSales