import React, { useState } from "react";

import { Link } from 'react-router-dom';
import { images } from '../constants';

const RecentlyV = () => {

    const scrollRef = React.useRef(null);
    
  
  return (
    <div className='flex-col   max-w-[1400px] w-full max-[397px]:mt-60 md:mt-20 mt-36 mx-auto text-center  '>
        <div className='flex items-center text-center justify-center'>
      <h2 className=' font-medium text-4xl'>Your recently viewed items</h2>
      <p className=' text-sm pt-3 mx-1 text-gray-500 underline cursor-pointer'>Clear history</p>
      </div>
      <div className='flex relative mt-10 z-10'>
      
        <div className="flex relative   w-full  h-[124px] justify-between overflow-x-scroll  scroll-smooth  select-none  " ref={scrollRef}>
          {[images.trend6,images.trend7,images.trend8,images.trend1,images.trend2, images.trend3,images.trend4,
          images.trend5,images.trend9,images.trend10,images.trend11,images.trend12].map((image, index) => (
    <Link to='/product' className="flex h-20 max-w-[80px] w-full justify-center mx-1 relative" key={`gallery_image-${index + 1}`}>
    <img className='flex h-[80px] mx-10 ' src={image} alt="gallery_image" />
  </Link>
          ))}
        </div>
       
   

      
        </div>
        </div>
  )
}

export default RecentlyV