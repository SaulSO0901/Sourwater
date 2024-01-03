import React from 'react'
import carrer from '../assets/carrer/carrers.jpg'

const Carrer = () => {
  return (
    <div className='flex-col max-w-[1400px] max-h-[541px] w-full h-full px-4 mx-auto text-center justify-center items-center mt-10  bg-white z'>
        <h2 className='text-4xl font-medium mx-auto text-[#362D2D]'>You Shop Here, Why Not Work Here?</h2>
        <div className='lg:flex  max-h-[411px] mt-10 border-[.7px] border-C7C5C  bg-white rounded-md hidden'>

<div className='max-w-[342px] w-full py-[84px] ' >
<p className='mx-10 text-[#362D2D] text-justify'>If you're searching for a company founded on passion where you can accomplish the best work of your life, then join our hard-working, talented team 
    — and the #1 online music retailer in the country — and see why we call a career at Sweetwater our Full-time Dream.
</p>
<div className='lg:flex mx-10 mt-10 '>
<button className='flex p-2 px-4 mx-1 rounded border-[1px]  bg-[#0072ba] text-white delay-75 hover:bg-[#0073bad0]'>All Openings</button>
<button className='flex p-2 px-4 mx-1 rounded border-[1px] font-medium border-[#362D2D]  text-[#362D2D] ring-[#362D2D] hover:ring-2'>Our Culture</button>
</div>

</div>
<div className='max-w-[1027px] h-full w-full'>
    <img alt='carrer' className='max-w-[1027px] max-h-[411px] w-full h-full ' src={carrer}></img>
</div>
    </div>


{/*Mobile version*/}
    <div className='flex-col max-h-[600px] h-full mt-10   bg-white rounded-md  lg:hidden'>

<div className='max-w-[1027px] h-full w-full'>
    <img alt='carrer' className='max-w-[1027px] max-h-[307px] w-full h-full ' src={carrer}></img>
</div>
    </div>

    
<div className='max-w-[1027px] max-h-[448px] h-fit w-full py-[37px] border-[.7px] border-C7C5C lg:hidden' >
<p className='mx-10 text-[#362D2D] text-justify'>If you're searching for a company founded on passion where you can accomplish the best work of your life, then join our hard-working, talented team 
    — and the #1 online music retailer in the country — and see why we call a career at Sweetwater our Full-time Dream.
</p>
<div className='flex mx-10 mt-2'>
<button className='flex p-2 px-4 mx-1 rounded border-[1px]  bg-[#0072ba] text-white delay-75 hover:bg-[#0073bad0]'>All Openings</button>
<button className='flex p-2 px-4 mx-1 rounded border-[1px] font-medium border-[#362D2D]  text-[#362D2D] ring-[#362D2D] hover:ring-2'>Our Culture</button>
</div>

</div>
    </div>
  )
}

export default Carrer