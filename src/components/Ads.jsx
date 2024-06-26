import React from "react";
import ad1 from "../assets/ads/ad1.2.png";
import ad1m from "../assets/ads/ad1m.JPG";
import ad2 from "../assets/ads/ad2.png";
import ad3 from "../assets/ads/ad3.png";
import ad4 from "../assets/ads/ad4.JPG";

import { Link } from "react-router-dom";
const Ads = () => {
  return (
    /*for some reason the images can't be seen on ms edge*/
    <div className="flex-col max-w-[1400px] w-full mx-auto my-5">
      <div className="flex max-[425px]:flex-col   max-h-[345px] w-full h-full pl-4 ">
        <div className="flex  max-w-[930px] lg:min-w-[650px]  w-full px-1 my-2 ">
          <Link to="/store" className="flex ">
            <img
              className=" hidden lg:flex max-w-[860px] w-full"
              alt="ad1"
              src={ad1}
            ></img>
            <img className=" lg:hidden " alt="ad1m" src={ad1m}></img>
          </Link>
        </div>

        <div className="flex max-w-[469px] w-full px-1 my-2 ">
          <Link to="/store" className="flex w-full">
            <img className="" alt="ad2" src={ad2}></img>
          </Link>
        </div>

        <div className="flex max-w-[469px] w-full  md:hidden my-2 ">
          <Link to="/store">
            <img className="  " alt="ad4" src={ad4}></img>
          </Link>
        </div>
      </div>

      <div className="flex  w-full max-h-[145px] my-4 px-5 hidden md:flex">
        <Link to="/store">
          <img src={ad3} alt="ad3"></img>
        </Link>
      </div>
    </div>
  );
};

export default Ads;
