import React from 'react'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { images } from '../constants';

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
    <div className='flex max-w-[1400px] mt-20 mx-auto '>
         <div onClick={() => scroll('left')} className="flex w-[80px] h-[228px] absolute justify-between items-center cursor-pointer rounded-md bg-white mix-blend-luminosity  opacity-95  backdrop-blur-sm  z-10">
          <BsArrowLeftShort size={50} className="w-full " />
        </div>
        <div className="">
       
        <div className="flex max-w-[1400px] h-[252px] items-start overflow-x-scroll scroll-smooth select-none -z-10" ref={scrollRef}>
          {[images.pop1, images.pop9, images.pop3, images.pop4,images.pop3,images.pop4,
           images.pop4,images.pop3,images.pop4,images.pop1, images.pop9, images.pop3,
           images.pop1, images.pop9, images.pop3,images.pop1, images.pop9, images.pop3,].map((image, index) => (
            <a href='*' className="flex h-32 w-[186px] first:ml-[80px]  justify-center mx-1 relative" key={`gallery_image-${index + 1}`}>
              <img className='flex h-[120px] mx-28 curp' src={image} alt="gallery_image" />
            </a>
          ))}
        </div>
       
      </div>

      <div onClick={() => scroll('right')} className="flex w-[80px] h-[228px] ml-[1320px] absolute justify-between items-center cursor-pointer rounded-md bg-white mix-blend-luminosity  opacity-95  backdrop-blur-sm z-10 ">
          <BsArrowRightShort size={50} className="w-full z-20    "  />
        </div>
        
        </div>
  )
}

export default ProductSuggest