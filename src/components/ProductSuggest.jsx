import React from 'react'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { images,products } from '../constants';

const ProductSuggest = () => {

    const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 1200;
    } else {
      current.scrollLeft += 1200;
    }
  }; 
  return (
    <div className='flex-col max-w-[1400px] w-full mt-20 mx-auto text-center '>
      <h2 className=' font-medium text-5xl'>Trending Gear</h2>
      <div className='flex mt-12'>
         <div onClick={() => scroll('left')} className="flex w-[80px] h-[228px] max-[425px]:hidden md:absolute  items-center cursor-pointer rounded-md bg-white mix-blend-luminosity  opacity-95  backdrop-blur-sm  z-10">
          <BsArrowLeftShort size={50} className="w-full " />
        </div>

        <div className="max-w-[1400px] w-full">
    
        <div className="flex  h-[252px] items-start overflow-x-scroll scroll-smooth select-none  -z-10" ref={scrollRef}>
          {[images.trend1,images.trend2, images.trend3,images.trend4,
          images.trend5,images.trend6,images.trend7,images.trend8
  ,images.trend9,images.trend10,images.trend11,images.trend12].map((image, index) => (
            <a href='*' className="flex-col h-[176px] w-[186px]  md:first:ml-[80px] text-center items-center justify-center ml-28 relative" key={`gallery_image-${index + 1}`}>
              <img className='h-full w-[176px] p-4 ' src={image} alt="gallery_image" />
             <div className='-ml-1 w-[176px] '>
             <p className='w-full '>Les paul</p>
             </div>

            </a>
          ))}
        </div>
       
      </div>

      <div onClick={() => scroll('right')} className="flex w-[80px] h-[228px] xl:ml-[1320px] lg:ml-[944px] md:ml-[688px] max-[425px]:hidden mx-auto md:absolute items-center cursor-pointer rounded-md bg-white mix-blend-luminosity  opacity-95  backdrop-blur-sm z-10 ">
          <BsArrowRightShort size={50} className="w-full z-20     "  />
        </div>
        </div>
        </div>
  )
}

export default ProductSuggest