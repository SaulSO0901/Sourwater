import React, { useState } from "react";
import logo from "../assets/logo.png";
import cart from "../assets/cart.png";

import {
  AiOutlineSearch,
  AiFillCaretDown,
  AiFillCaretUp,
  AiOutlineClose,
  AiTwotoneMail,
  AiOutlineMenu,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";

const Calando = () => {
  const [nav, setNav] = useState(false);
  const [crt, setCrt] = useState(false);

  const handleCrt = () => {
    setCrt(!crt);
  };

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex-col  ">
      <div className="flex justify-between items-center h-[80px]  max-w-full mx-auto  -my-2 md:hidden mx-auto  text-black px-2">
        <div className="flex items-center  ">
          <img src={logo} className="w-full w-[158px] h-16 -z-10 " alt="" />
        </div>

        <div className="flex items-center h-[80px] ">
          <div
            onClick={handleCrt}
            className="flex-col   items-center hover:bg-[#EFEFEF] cursor-pointer p-2  "
          >
            <div className="items-center my-4 ">
              <AiOutlineShoppingCart className="h-8 min-w-[37px] "></AiOutlineShoppingCart>
            </div>
          </div>

          <div onClick={handleNav} className="block md:hidden px-4 py-6 hover:bg-[#EFEFEF]">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
          <div
            className={
              nav
                ? "fixed w-[90%] z-50   left-20 top-16  bg-white h-full border-r border-r-[#C7C5C] ease-in-out duration-500"
                : "ease-in-out duration- fixed left-[100%]"
            }
          >
            <ul className="text-[#362D2D] ">
              <li className="p-2 border-b border-b-[#C7C5C] hover:bg-[#EFEFEF] ">
                Shop By Category
              </li>
              <li className="p-2 border-b border-b-[#C7C5C] hover:bg-[#EFEFEF] ">What's New</li>
              <li className="p-2 border-b border-b-[#C7C5C] hover:bg-[#EFEFEF] ">Deals</li>
              <li className="p-2 border-b border-b-[#C7C5C] hover:bg-[#EFEFEF]">Used Gear</li>
              <li className="p-2 border-b border-b-[#C7C5C] hover:bg-[#EFEFEF]">Rentals</li>
              <li className="p-2 border-b border-b-[#C7C5C] hover:bg-[#EFEFEF]">
                Articles & Videos
              </li>
              <li className="p-2 border-b border-b-[#C7C5C] hover:bg-[#EFEFEF]">
                Sour Water Support
              </li>
              <li className="p-2 border-b border-b-[#C7C5C] hover:bg-[#EFEFEF]">Giveaway</li>
              <li className="p-2 border-b border-b-[#C7C5C] hover:bg-[#EFEFEF]">
                Sourwater Card
              </li>
              <li className="p-2 border-b border-b-[#C7C5C] hover:bg-[#EFEFEF]">Account</li>
              <li className="p-2 border-b border-b-[#C7C5C] hover:bg-[#EFEFEF]">Contact Us</li>
              <li className="p-2 ">Call in for the best savings!</li>
              <li className="-my-2 px-2 font-bold">(800)224-4701</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "w-full h-[100vh] bg-black bg-opacity-60 px-2 md:hidden "
            : "bg-transparent px-2 "
        }
      >
        <div
          className={
            nav
              ? "flex  w-full   relative md:hidden mx-auto max-w-[757px] min-w-[300px]   items-stretch    ring-[#C7C5C1] ring-1 hover:ring-4 hover:ring-gray-800   h-10   rounded-sm -z-10  "
              : "flex  w-full   relative md:hidden mx-auto max-w-[757px] min-w-[300px]   items-stretch    ring-[#C7C5C1] ring-1 hover:ring-4 hover:ring-gray-800   h-10   rounded-sm "
          }
        >
          <button className="h-10 rounded-sm bg-[#EFEFEF] p-2 py-2">
            <AiOutlineSearch size={20}></AiOutlineSearch>
          </button>
          <input
            className="h-10 w-full outline-none bg-[#EFEFEF] justify-start text-[#B0ACAC]"
            placeholder="Search for sour gear"
          ></input>
        </div>
      </div>
    </div>
  );
};
export default Calando;