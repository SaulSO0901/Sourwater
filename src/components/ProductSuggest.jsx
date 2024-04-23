import React from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { images } from "../constants";
import { Link } from "react-router-dom";

const ProductSuggest = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 1200;
    } else {
      current.scrollLeft += 1200;
    }
  };

  return (
    <div className="flex-col max-w-[1400px] w-full md:mt-20 max-[425px]:border-t-[#C7C5C1]  mx-auto text-center ">
      <h2 className=" font-medium text-5xl">Trending Gear</h2>
      <div className="flex  mt-12">
        <div
          onClick={() => scroll("left")}
          className="flex w-[80px] h-[228px] max-[425px]:hidden md:absolute  items-center cursor-pointer rounded-md bg-white mix-blend-luminosity  opacity-95  backdrop-blur-sm  z-10"
        >
          <BsArrowLeftShort size={50} className="w-full " />
        </div>

        <div className="flex relative w-full z-10">
          <div
            className="flex md:h-[252px] max-[425px]:h-[196px] items-start overflow-x-scroll scroll-smooth select-none   "
            ref={scrollRef}
          >
            {[
              images.trend1,
              images.trend2,
              images.trend3,
              images.trend4,
              images.trend5,
              images.trend6,
              images.trend7,
              images.trend8,
              images.trend9,
              images.trend10,
              images.trend11,
              images.trend12,
            ].map((image, index) => (
              <Link
                to="/product"
                className="flex relative h-32 w-[186px] md:first:ml-[80px] mx-1  justify-center  "
                key={`gallery_image-${(index = 1)}`}
              >
                <img
                  className="flex h-[120px] mx-28 max-[425px]:ml-12  "
                  src={image}
                  alt="gallery_image"
                />
              </Link>
            ))}
          </div>
        </div>

        <div
          onClick={() => scroll("right")}
          className="flex object-cover w-[80px] h-[228px] max-[3440px]:ml-[1320px] 2xl:right-auto  max-[1024px]:right-4 md:right-4 max-[425px]:hidden mx-auto md:absolute items-center cursor-pointer rounded-md bg-white mix-blend-luminosity  opacity-95  backdrop-blur-sm z-20 "
        >
          <BsArrowRightShort size={50} className="w-full z-20" />
        </div>
      </div>
    </div>
  );
};

export default ProductSuggest;
