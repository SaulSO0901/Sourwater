import React, { useState } from "react";

import { IoIosStar } from "react-icons/io";

const Review = () => {
  const [desc, setDesc] = useState(true);

  const [spec, setSpec] = useState(false);

  const [rev, setRev] = useState(false);

  const handleRev = () => {
    setDesc(false);
    setSpec(false);
    setRev(true);
  };
  return (
    <div
      onMouseEnter={handleRev}
      id="review"
      className="max-w-[1400px] w-full mx-auto mt-10  "
    >
      <h2 className="w-full  mx-auto mb-6 text-center lg:text-start text-4xl  font-medium  text-[#362D2D]">
        Customers reviews
      </h2>
      <div className="lg:flex max-[1px]:flex-col ">
        <div className="flex-col  border-t-[1px] border-t-C7C5C1">
          <div className="flex items-center justify-center lg:justify-normal ">
            <IoIosStar size={20} color="#ff9d00" />
            <IoIosStar size={20} color="#ff9d00" />
            <IoIosStar size={20} color="#ff9d00" />
            <IoIosStar size={20} color="#ff9d00" />
            <IoIosStar size={20} color="#ff9d00" />
            <p className=" px-1 text-lg font-medium text-[#362D2D]">
              5.0 out of 5
            </p>
          </div>
          <div className="flex-col w-fit mx-auto ">
            <div className="flex  justify-start lg:justify-normal items-center text-lg text-[#362D2D] ">
              <p className="px-2">5</p>
              <div className="h-2 px-28 mx-2  bg-[#ff9d00] rounded-xl"></div>
              <p className="w-full px-2 text-center">100%</p>
            </div>
            <div className="flex   justify-start lg:justify-normal items-center text-lg text-[#362D2D] ">
              <p className="px-2">4</p>
              <div className="h-2 px-28 mx-2  bg-[#f2f1f0] rounded-xl"></div>
              <p className="w-full  px-2 text-center">0%</p>
            </div>
            <div className="flex   justify-start lg:justify-normal items-center text-lg text-[#362D2D] ">
              <p className="px-2">3</p>
              <div className="h-2 px-28 mx-2 bg-[#f2f1f0]  rounded-xl"></div>
              <p className="w-full  px-2 text-center">0%</p>
            </div>
            <div className="flex   justify-start lg:justify-normal items-center text-lg text-[#362D2D] ">
              <p className="px-2">2</p>
              <div className="h-2 px-28 mx-2  bg-[#f2f1f0]  rounded-xl"></div>
              <p className="w-full  px-2 text-center">0%</p>
            </div>
            <div className="flex   justify-start lg:justify-normal items-center text-lg text-[#362D2D] ">
              <p className="px-2">1</p>
              <div className="h-2 px-28 mx-2  bg-[#f2f1f0]  rounded-xl"></div>
              <p className="w-full  px-2 text-center">0%</p>
            </div>
          </div>
          <div className="flex w-full mt-4 justify-center lg:justify-normal border-t-[1px] border-t-C7C5C1 ">
            <button className=" p-4 px-6 mt-4  rounded text-xl font-bold text-white  bg-[#0072ba] hover:bg-[#4a4c8b] ">
              Write your review
            </button>
          </div>
        </div>
        <div className="flex-col h-fit mt-4 lg:mt-0 lg:ml-10 pt-7 pb-4 px-4 lg:px-0 border-t-[1px] border-t-C7C5C1  border-b-[1px] border-b-C7C5C1">
          <div className="flex ">
            <IoIosStar color="#ff9d00" />
            <IoIosStar color="#ff9d00" />
            <IoIosStar color="#ff9d00" />
            <IoIosStar color="#ff9d00" />
            <IoIosStar color="#ff9d00" />
          </div>
          <h2 className="text-medium font-semibold text-[#362D2D]">
            Amazing guitar
          </h2>
          <p className="font-medium text-[#362D2D]">
            The ESP VULTURE is an amazing guitar. It's light weight, has a
            smooth satin finish and sounds brutal! You can feel how solid the
            craftsmanship is.
          </p>
          <p className="text-[#C7C5C1]">
            by Sourtwater Customer on February 13, 2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
